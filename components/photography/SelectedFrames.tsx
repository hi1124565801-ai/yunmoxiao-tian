import { SmartImage } from "@/components/media/SmartImage";
import { photographyLocations } from "@/data/photographyLocations";

const frames = [
  { location: "amsterdam", photo: 1, theme: "Evening streets" },
  { location: "tromso", photo: 1, theme: "Northern coastlines" },
  { location: "tokyo", photo: 0, theme: "Night cities" },
  { location: "sri-lanka", photo: 2, theme: "At the water" },
  { location: "budapest", photo: 1, theme: "Places of waiting" },
  { location: "santorini", photo: 0, theme: "Light and geometry" },
] as const;

export function SelectedFrames() {
  const selected = frames.flatMap((frame) => {
    const location = photographyLocations.find((item) => item.id === frame.location);
    const photo = location?.photos[frame.photo];
    return location && photo ? [{ ...frame, location, photo }] : [];
  });

  return (
    <div className="selected-frames" aria-label="Selected photography">
      {selected.map(({ location, photo, theme }, index) => (
        <figure
          key={`${location.id}-${photo.src}`}
          className={`frame frame--${index + 1}`}
          aria-label={`${theme}, ${
            location.coordinates ? `${location.city}, ${location.country}` : location.country
          }`}
        >
          <div className="frame-image">
            <SmartImage
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 720px) 92vw, 45vw"
            />
          </div>
          <figcaption>
            <span>{theme}</span>
            <p>
              {location.coordinates
                ? `${location.city}, ${location.country}`
                : location.country}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
