import { SmartImage } from "@/components/media/SmartImage";
import type { MediaFeature } from "@/data/mediaFeatures";

export function MediaFeatureItem({
  feature,
  index,
}: {
  feature: MediaFeature;
  index: number;
}) {
  return (
    <article className="media-feature-item">
      <span className="entry-number">{String(index + 1).padStart(2, "0")}</span>
      <div className="media-feature-image">
        <SmartImage
          src={feature.image}
          alt={feature.imageAlt}
          fill
          sizes="(max-width: 760px) 32vw, 15vw"
        />
      </div>
      <div>
        <p className="entry-meta">{feature.source}{feature.date ? ` · ${feature.date}` : ""}</p>
        <h2>{feature.englishTitle}</h2>
        <p className="chinese-title" lang="zh-CN">{feature.originalTitle}</p>
        <p>{feature.summary}</p>
      </div>
      <a href={feature.link} target="_blank" rel="noreferrer">
        Read feature <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </article>
  );
}
