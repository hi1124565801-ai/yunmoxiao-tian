"use client";

import { useEffect, useRef, useState } from "react";
import { SmartImage } from "@/components/media/SmartImage";
import type { PhotographyLocation } from "@/data/photographyLocations";
import { PhotoLightbox } from "./PhotoLightbox";

export function LocationDrawer({
  location,
  onClose,
}: {
  location: PhotographyLocation;
  onClose: () => void;
}) {
  const placeLabel = location.coordinates ? location.city : location.country;
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastPhotoTrigger = useRef<HTMLButtonElement | null>(null);
  const lightboxOpen = useRef(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    lightboxOpen.current = lightboxIndex != null;
  }, [lightboxIndex]);

  useEffect(() => {
    document.body.classList.add("modal-open");
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !lightboxOpen.current) onClose();
      if (event.key === "Tab" && !lightboxOpen.current) {
        const drawer = closeRef.current?.closest(".location-drawer");
        const focusable = drawer?.querySelectorAll<HTMLElement>(
          "button, a[href], [tabindex]:not([tabindex='-1'])",
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <>
      <div
        className="drawer-backdrop"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <aside
          className="location-drawer"
          role="dialog"
          aria-modal="true"
          aria-labelledby="location-title"
        >
          <div className="drawer-handle" aria-hidden="true" />
          <button
            ref={closeRef}
            type="button"
            className="icon-button drawer-close"
            onClick={onClose}
            aria-label={`Close ${placeLabel} photographs`}
          >
            Close <span aria-hidden="true">×</span>
          </button>
          <div className="drawer-cover">
            <SmartImage
              src={location.photos[0]?.src ?? ""}
              alt={location.photos[0]?.alt ?? `Photograph from ${placeLabel}`}
              fill
              sizes="(max-width: 760px) 100vw, 44vw"
            />
          </div>
          <div className="drawer-content">
            <p className="section-kicker">{location.country}</p>
            <h2 id="location-title">{placeLabel}</h2>
            {!location.coordinates && <p className="drawer-location-note">City to be confirmed</p>}
            {location.description && <p className="drawer-description">{location.description}</p>}
            <p className="drawer-count">
              {location.photos.length} selected{" "}
              {location.photos.length === 1 ? "photograph" : "photographs"}
            </p>
            <div className="drawer-gallery" aria-label={`Photos from ${placeLabel}`}>
              {location.photos.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={(event) => {
                    lastPhotoTrigger.current = event.currentTarget;
                    setLightboxIndex(index);
                  }}
                  aria-label={`Open ${photo.caption ?? `photo ${index + 1}`} in viewer`}
                >
                  <span>
                    <SmartImage
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 760px) 44vw, 20vw"
                    />
                  </span>
                  <small>{photo.caption ?? `${placeLabel} · ${index + 1}`}</small>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>
      {lightboxIndex != null && (
        <PhotoLightbox
          location={location}
          initialIndex={lightboxIndex}
          onClose={() => {
            setLightboxIndex(null);
            window.setTimeout(() => lastPhotoTrigger.current?.focus(), 0);
          }}
        />
      )}
    </>
  );
}
