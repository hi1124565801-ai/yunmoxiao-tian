"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SmartImage } from "@/components/media/SmartImage";
import type { PhotographyLocation } from "@/data/photographyLocations";

export function PhotoLightbox({
  location,
  initialIndex,
  onClose,
}: {
  location: PhotographyLocation;
  initialIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(initialIndex);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<number | null>(null);
  const photos = location.photos;

  const previous = useCallback(
    () => setIndex((value) => (value - 1 + photos.length) % photos.length),
    [photos.length],
  );
  const next = useCallback(
    () => setIndex((value) => (value + 1) % photos.length),
    [photos.length],
  );

  useEffect(() => {
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
      if (event.key === "Tab") {
        const dialog = closeRef.current?.closest(".lightbox");
        const focusable = dialog?.querySelectorAll<HTMLElement>("button");
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
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, onClose, previous]);

  const photo = photos[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length} from ${location.city}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      onTouchStart={(event) => {
        touchStart.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        const end = event.changedTouches[0]?.clientX;
        if (start == null || end == null) return;
        if (start - end > 55) next();
        if (end - start > 55) previous();
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="icon-button lightbox-close"
        onClick={onClose}
        aria-label="Close photo viewer"
      >
        Close ×
      </button>
      <button
        type="button"
        className="lightbox-nav lightbox-nav--prev"
        onClick={previous}
        aria-label="Previous photo"
      >
        ←
      </button>
      <div className="lightbox-stage">
        <SmartImage
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="96vw"
          priority
          className="lightbox-image"
        />
      </div>
      <button
        type="button"
        className="lightbox-nav lightbox-nav--next"
        onClick={next}
        aria-label="Next photo"
      >
        →
      </button>
      <div className="lightbox-caption">
        <p>{photo.caption ?? location.city}</p>
        <span>
          {location.city}, {location.country} · {index + 1}/{photos.length}
        </span>
      </div>
    </div>
  );
}
