import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { MediaFeatureItem } from "@/components/media/MediaFeatureItem";
import { mediaFeatures } from "@/data/mediaFeatures";

export const metadata: Metadata = {
  title: "Media & Features",
  description:
    "Selected institutional profiles and features about Yunmoxiao Tian’s academic, international, and writing experiences.",
};

export default function MediaPage() {
  return (
    <PageShell>
      <header className="page-hero page-hero--media">
        <p className="section-kicker">Media & Features</p>
        <h1>Selected institutional profiles and features</h1>
        <p>
          Selected institutional profiles and features about my academic,
          international, and writing experiences.
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
