import { PortfolioDirectory } from "@/components/home/PortfolioDirectory";
import type { Metadata } from "next";
import { LiteraryMappingPreview } from "@/components/home/LiteraryMappingPreview";
import { Hero } from "@/components/home/Hero";
import { PageShell } from "@/components/layout/PageShell";
import {
  createPageMetadata,
  homeDescription,
  homeStructuredData,
  homeTitle,
} from "@/config/seo";

export const metadata: Metadata = createPageMetadata({
  title: homeTitle,
  description: homeDescription,
  path: "/",
  profile: true,
});

export default function Home() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <div className="home-content">
        <Hero />
        <section className="home-work" aria-labelledby="selected-work-title">
          <h2 id="selected-work-title">Selected work</h2>
          <LiteraryMappingPreview />
          <PortfolioDirectory />
        </section>
      </div>
    </PageShell>
  );
}
