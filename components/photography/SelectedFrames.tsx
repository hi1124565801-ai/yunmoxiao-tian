"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SmartImage } from "@/components/media/SmartImage";
import { PhotoLightbox } from "@/components/photography/PhotoLightbox";
import { photographyLocations, type PhotographyLocation } from "@/data/photographyLocations";

const pairs = [
  {
    title: "Red and amber",
    note: "Red fills nearly the whole Barcelona frame. The two faces take a moment to find. In Copenhagen, a small pool of amber light draws the eye straight to the bicycle.",
    frames: [["barcelona", 1], ["copenhagen", 2]],
  },
  {
    title: "At the waterline",
    note: "In Sri Lanka, people stand where the waves break. Near Tromsø, snow-covered rocks mark the same boundary. The water gives each scene a different pace.",
    frames: [["sri-lanka", 2], ["tromso", 1]],
  },
  {
    title: "Two views of the night",
    note: "Red columns frame a view into Kyoto. In Tokyo, the eye looks down between illuminated signs. A change of height rearranges the city.",
    frames: [["kyoto", 0], ["tokyo", 0]],
  },
] as const;

export function SelectedFrames() {
  const [active, setActive] = useState<{ location: PhotographyLocation; index: number } | null>(null);
  const [spread, setSpread] = useState(0);
  useEffect(() => {
    function showLinkedFrame() {
      const target = window.location.hash.split("#").pop();
      const index = pairs.findIndex(pair => pair.frames.some(([id]) => target === "frame-" + id));
      if (index >= 0) setSpread(index);
    }
    showLinkedFrame();
    window.addEventListener("hashchange", showLinkedFrame);
    return () => window.removeEventListener("hashchange", showLinkedFrame);
  }, []);
  const opener = useRef<HTMLButtonElement | null>(null);
  const close = useCallback(() => {
    setActive(null);
    opener.current?.focus();
  }, []);
  return (
    <div className="photo-sequences">
      <div className="spread-picker" role="group" aria-label="Choose a photographic pairing">
        {pairs.map((pair, index) => <button type="button" key={pair.title} aria-pressed={index === spread} onClick={() => setSpread(index)}>{pair.title}</button>)}
      </div>
      {pairs.map((pair, pairIndex) => (
        <article hidden={spread !== pairIndex} className="photo-pair" key={pair.title}>
          <div className="paired-prints">
            {pair.frames.map(([id, index]) => {
              const location = photographyLocations.find((item) => item.id === id);
              const photo = location?.photos[index];
              if (!location || !photo) return null;
              const place = location.coordinates ? location.city + ", " + location.country : location.country;
              return (
                <figure id={`frame-${id}`} key={id}>
                  <button type="button" aria-label={`Open photograph from ${place}`} onClick={(event) => {
                    opener.current = event.currentTarget;
                    setActive({location, index});
                  }}>
                    <SmartImage src={photo.src} alt={photo.alt} width={800} height={600} sizes="(max-width: 650px) 92vw, 42vw" />
                  </button>
                  <figcaption>{place}</figcaption>
                </figure>
              );
            })}
          </div>
          <header>
            <h3>{pair.title}</h3>
            <p>{pair.note}</p>
          </header>
        </article>
      ))}
      {active && <PhotoLightbox location={active.location} initialIndex={active.index} onClose={close} />}
    </div>
  );
}
