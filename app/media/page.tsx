import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { MediaFeatureItem } from "@/components/media/MediaFeatureItem";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { mediaFeatures } from "@/data/mediaFeatures";

const seo = indexedPages[3];
export const metadata: Metadata = createPageMetadata(seo);

export default function MediaPage() {
  return (
    <PageShell>
      <header className="page-hero page-hero--media">
        <h1>Media coverage</h1>
        <p>
          Interviews and profiles about my research, writing, and studies abroad.
        </p>
      </header>
      <section className="media-feature-list section-pad" aria-label="Media features">
        {mediaFeatures.map((feature, index) => (
          <MediaFeatureItem key={feature.id} feature={feature} index={index} />
        ))}
      </section>
    </PageShell>
  );
}
