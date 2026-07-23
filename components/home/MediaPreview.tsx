import Link from "next/link";
import { mediaFeatures } from "@/data/mediaFeatures";

export function MediaPreview() {
  return (
    <section className="media-preview section-pad" aria-labelledby="media-preview-heading">
      <div className="section-head">
        <div>
          <p className="section-kicker">Media & Features</p>
          <h2 id="media-preview-heading">Selected institutional profiles</h2>
        </div>
        <Link href="/media" className="text-link">All features <span>→</span></Link>
      </div>
      <div className="media-preview-list">
        {mediaFeatures.slice(0, 3).map((feature, index) => (
          <a key={feature.id} href={feature.link} target="_blank" rel="noreferrer">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div>
              <small>{feature.source}</small>
              <h3>{feature.englishTitle}</h3>
            </div>
            <i aria-hidden="true">↗</i>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        ))}
      </div>
    </section>
  );
}
