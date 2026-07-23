"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import geography from "world-atlas/countries-110m.json";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import {
  getPhotographyLocationCoordinates,
  mappedPhotographyLocations,
} from "@/data/photographyLocations";
import { LocationDrawer } from "./LocationDrawer";

const subscribeToHydration = () => () => {};

export function PhotographyWorldMap() {
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [position, setPosition] = useState({
    coordinates: [10, 24] as [number, number],
    zoom: 1,
  });
  const [touchMoveEnabled, setTouchMoveEnabled] = useState(false);
  const lastMarker = useRef<SVGGElement | null>(null);
  const animationFrame = useRef<number | null>(null);
  const positionRef = useRef(position);
  const selected = mappedPhotographyLocations.find((item) => item.id === selectedId);

  useEffect(() => {
    positionRef.current = position;
  }, [position]);

  useEffect(
    () => () => {
      if (animationFrame.current != null) {
        window.cancelAnimationFrame(animationFrame.current);
      }
    },
    [],
  );

  const animateView = useCallback(
    (target: { coordinates: [number, number]; zoom: number }) => {
      if (animationFrame.current != null) {
        window.cancelAnimationFrame(animationFrame.current);
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setPosition(target);
        return;
      }

      const start = positionRef.current;
      const startedAt = performance.now();
      const duration = 320;
      const step = (now: number) => {
        const progress = Math.min(1, (now - startedAt) / duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        const next = {
          coordinates: [
            start.coordinates[0] +
              (target.coordinates[0] - start.coordinates[0]) * eased,
            start.coordinates[1] +
              (target.coordinates[1] - start.coordinates[1]) * eased,
          ] as [number, number],
          zoom: start.zoom + (target.zoom - start.zoom) * eased,
        };
        positionRef.current = next;
        setPosition(next);
        if (progress < 1) {
          animationFrame.current = window.requestAnimationFrame(step);
        } else {
          animationFrame.current = null;
        }
      };
      animationFrame.current = window.requestAnimationFrame(step);
    },
    [],
  );

  const openLocation = useCallback(
    (id: string, element: SVGGElement, coordinates: [number, number]) => {
      lastMarker.current = element;
      setSelectedId(id);
      animateView({
        coordinates,
        zoom: Math.max(1.35, Math.min(1.7, positionRef.current.zoom)),
      });
    },
    [animateView],
  );

  const closeLocation = useCallback(() => {
    setSelectedId(null);
    window.setTimeout(() => lastMarker.current?.focus(), 0);
  }, []);

  if (!mounted) {
    return (
      <div className="world-map-shell">
        <div className="map-toolbar">
          <div>
            <p className="section-kicker">Interactive map</p>
            <p>Select a marker to open its photographs.</p>
          </div>
        </div>
        <div className="map-canvas map-loading" aria-live="polite" aria-busy="true">
          <p>Preparing the photography map…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="world-map-shell">
      <div className="map-toolbar">
        <div>
          <p className="section-kicker">Interactive map</p>
          <p>Select a marker to open its photographs.</p>
        </div>
        <div className="map-controls">
          <button
            type="button"
            onClick={() => setTouchMoveEnabled((value) => !value)}
            aria-pressed={touchMoveEnabled}
          >
            {touchMoveEnabled ? "Release map" : "Move map"}
          </button>
          <button
            type="button"
            aria-label="Zoom map out"
            onClick={() =>
              animateView({
                ...positionRef.current,
                zoom: Math.max(1, positionRef.current.zoom - 0.35),
              })
            }
          >
            −
          </button>
          <button
            type="button"
            aria-label="Zoom map in"
            onClick={() =>
              animateView({
                ...positionRef.current,
                zoom: Math.min(3.5, positionRef.current.zoom + 0.35),
              })
            }
          >
            +
          </button>
          <button
            type="button"
            onClick={() => animateView({ coordinates: [10, 24], zoom: 1 })}
          >
            Reset View
          </button>
        </div>
      </div>
      <div className={`map-canvas ${touchMoveEnabled ? "map-canvas--active" : ""}`}>
        <ComposableMap
          projection="geoEqualEarth"
          projectionConfig={{ scale: 162, center: [4, 12] }}
          width={800}
          height={440}
          aria-label="Interactive world map of Yunmoxiao Tian's photography locations"
          role="img"
        >
          <ZoomableGroup
            center={position.coordinates}
            zoom={position.zoom}
            minZoom={1}
            maxZoom={3.5}
            onMoveEnd={({ coordinates, zoom }) =>
              {
                const next = {
                  coordinates: coordinates as [number, number],
                  zoom,
                };
                positionRef.current = next;
                setPosition(next);
              }
            }
            filterZoomEvent={
              ((event: Event) => {
                if (event.type === "wheel") return false;
                if (event.type.startsWith("touch")) return touchMoveEnabled;
                return true;
              }) as unknown as (element: SVGElement) => boolean
            }
          >
            <Geographies geography={geography}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#A9BFAE"
                    fillOpacity={0.56}
                    stroke="#173D32"
                    strokeOpacity={0.46}
                    strokeWidth={0.45}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#9FB3A2", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {mappedPhotographyLocations.map((location, index) => {
              const coordinates = getPhotographyLocationCoordinates(location);
              if (!coordinates) return null;
              const active = selectedId === location.id;
              const hovered = hoveredId === location.id;
              const color = index % 3 === 0 ? "#B66B53" : "#CDA65C";
              const placeLabel = location.coordinates ? location.city : location.country;
              return (
                <Marker key={location.id} coordinates={coordinates}>
                  <g
                    className={`map-marker ${active ? "is-active" : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`${placeLabel}. ${location.photos.length} ${
                      location.photos.length === 1 ? "photograph" : "photographs"
                    }.`}
                    onMouseEnter={() => setHoveredId(location.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(location.id)}
                    onBlur={() => setHoveredId(null)}
                    onClick={(event) =>
                      openLocation(location.id, event.currentTarget, coordinates)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openLocation(location.id, event.currentTarget, coordinates);
                      }
                    }}
                  >
                    <circle r={22 / position.zoom} fill="transparent" />
                    <circle
                      className="marker-ring"
                      r={(active ? 10 : 8) / position.zoom}
                      fill="none"
                      stroke={color}
                      strokeWidth={active ? 4 / position.zoom : 0}
                      opacity={active ? 0.38 : 0}
                    />
                    <circle
                      r={(hovered || active ? 6.5 : 5) / position.zoom}
                      fill={color}
                      stroke="#173D32"
                      strokeWidth={1.2 / position.zoom}
                    />
                    <circle r={1.7 / position.zoom} fill="#FBFAF5" />
                  </g>
                  {(hovered || active) && (
                    <foreignObject
                      x={-76 / position.zoom}
                      y={-61 / position.zoom}
                      width={152 / position.zoom}
                      height={50 / position.zoom}
                      pointerEvents="none"
                    >
                      <div
                        className="map-tooltip"
                        style={{
                          transform: `scale(${1 / position.zoom})`,
                          transformOrigin: "center bottom",
                        }}
                      >
                        <strong>{placeLabel}</strong>
                        <span>
                          {location.coordinates ? location.country : "Country-level album"} ·{" "}
                          {location.photos.length} photos
                        </span>
                      </div>
                    </foreignObject>
                  )}
                </Marker>
              );
            })}
          </ZoomableGroup>
        </ComposableMap>
      </div>
      <p className="map-instruction">
        Trackpad and mouse-wheel scrolling remain with the page. Use “Move map” on
        touchscreens, or the controls above, to adjust the view.
      </p>
      {selected && <LocationDrawer location={selected} onClose={closeLocation} />}
    </div>
  );
}
