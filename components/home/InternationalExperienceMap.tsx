"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import geography from "world-atlas/countries-110m.json";
import { useState, useSyncExternalStore } from "react";
import type { InternationalExperience } from "@/data/internationalExperiences";

const subscribeToHydration = () => () => {};

export function InternationalExperienceMap({
  experiences,
}: {
  experiences: InternationalExperience[];
}) {
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const [activeId, setActiveId] = useState(experiences[0]?.id ?? "");

  return (
    <div className="experience-map-layout">
      <div className="academic-map">
        <div className="academic-map__legend">
          <span><i className="category-research" />Research</span>
          <span><i className="category-study" />Study</span>
          <span><i className="category-exchange" />Exchange</span>
        </div>
        {mounted ? (
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{ scale: 145, center: [8, 10] }}
            width={800}
            height={420}
            aria-label="Map of Yunmoxiao Tian's selected international academic experiences"
            role="img"
          >
            <Geographies geography={geography}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#DCE5DD"
                    stroke="#173D32"
                    strokeOpacity={0.28}
                    strokeWidth={0.45}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: "#DCE5DD", outline: "none" },
                      pressed: { outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
            {experiences.map((experience, index) => {
              const active = experience.id === activeId;
              return (
                <Marker key={experience.id} coordinates={experience.coordinates}>
                  <g
                    className={`academic-map-marker category-${experience.category.toLowerCase()} ${
                      active ? "is-active" : ""
                    }`}
                    role="button"
                    tabIndex={0}
                    aria-label={`${experience.institution}, ${experience.location}, ${experience.dates}`}
                    onClick={() => setActiveId(experience.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveId(experience.id);
                      }
                    }}
                  >
                    <circle r={22} fill="transparent" />
                    <circle className="academic-map-marker__ring" r={active ? 10 : 7} />
                    <circle className="academic-map-marker__dot" r={active ? 6 : 4.5} />
                    <text y={-13} textAnchor="middle">
                      {String(index + 1).padStart(2, "0")}
                    </text>
                  </g>
                </Marker>
              );
            })}
          </ComposableMap>
        ) : (
          <div className="academic-map__loading" aria-live="polite">
            Preparing the academic map…
          </div>
        )}
        <p>Five academic contexts across Europe, North America, and Southeast Asia.</p>
      </div>

      <ol className="experience-map-list">
        {experiences.map((experience, index) => (
          <li
            key={experience.id}
            className={experience.id === activeId ? "is-active" : undefined}
          >
            <button type="button" onClick={() => setActiveId(experience.id)}>
              <span className="entry-number">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="experience-map-list__copy">
                <strong>{experience.institution}</strong>
                <small>{experience.role}</small>
              </span>
              <span className="experience-map-list__meta">
                <span>{experience.location}</span>
                <time>{experience.dates}</time>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
