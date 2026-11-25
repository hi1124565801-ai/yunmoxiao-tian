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
      <div className={feature.id === "pku-faces-copenhagen" ? "media-feature-image instagram-cover" : "media-feature-image"}>
        <SmartImage
          src={feature.image}
          alt={feature.imageAlt}
          fill
          sizes="180px"
        />
      </div>
      <div>
        <p className="entry-meta">{feature.source}{feature.date ? ` · ${feature.date}` : ""}</p>
        <h2>{feature.englishTitle}</h2>
        {feature.originalTitle !== feature.englishTitle && <p className="chinese-title" lang="zh-CN">{feature.originalTitle}</p>}
        <p>{feature.summary}</p>
      </div>
      <a href={feature.link} target="_blank" rel="noreferrer">
        {feature.id === "pku-faces-copenhagen" ? "View on Instagram" : "Read feature"} <span aria-hidden="true">↗</span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </article>
  );
}
