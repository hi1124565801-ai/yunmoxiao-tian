import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Honors } from "@/components/home/Honors";
import { InternationalExperience } from "@/components/home/InternationalExperience";
import { PortfolioDirectory } from "@/components/home/PortfolioDirectory";
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
      <Hero />
      <PortfolioDirectory />
      <InternationalExperience />
      <Honors />
    </PageShell>
  );
}
