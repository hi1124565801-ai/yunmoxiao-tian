"use client";

import { useCallback, useRef, useState } from "react";
import { SmartImage } from "@/components/media/SmartImage";
import type { PhotographyLocation } from "@/data/photographyLocations";
import { LocationDrawer } from "./LocationDrawer";

export function UnlocatedAlbums({ albums }: { albums: PhotographyLocation[] }) {
  const [selected, setSelected] = useState<PhotographyLocation | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);

  const closeDrawer = useCallback(() => {
    setSelected(null);
    window.setTimeout(() => lastTrigger.current?.focus(), 0);
  }, []);

  if (!albums.length) {
    return <p className="empty-state">No country-level albums are available yet.</p>;
  }

  return (
    <>
      <div className="unlocated-album-list">
        {albums.map((album) => (
          <button
            key={album.id}
            type="button"
            className="unlocated-album-card"
            onClick={(event) => {
              lastTrigger.current = event.currentTarget;
              setSelected(album);
            }}
            aria-label={`Open ${album.country} album with ${album.photos.length} photographs`}
          >
            <span className="unlocated-album-card__image">
              <SmartImage
                src={album.photos[0]?.src ?? ""}
                alt={album.photos[0]?.alt ?? `Photograph from ${album.country}`}
                fill
                sizes="(max-width: 720px) 92vw, 32vw"
              />
            </span>
            <span className="unlocated-album-card__copy">
              <span>
                <strong>{album.country}</strong>
                <small>
                  {album.photos.length}{" "}
                  {album.photos.length === 1 ? "photograph" : "photographs"}
                </small>
              </span>
              <i aria-hidden="true">Open ↗</i>
            </span>
          </button>
        ))}
      </div>
      {selected && <LocationDrawer location={selected} onClose={closeDrawer} />}
    </>
  );
}
