import "../portfolio-editions.css";
import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PhotographyWorldMapClient } from "@/components/photography/PhotographyWorldMapClient";
import { SelectedFrames } from "@/components/photography/SelectedFrames";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { photographyLocations } from "@/data/photographyLocations";

const seo = indexedPages[4];
export const metadata: Metadata = createPageMetadata(seo);

export default function PhotographyPage() {
  const photoCount = photographyLocations.reduce((total, location) => total + location.photos.length, 0);
  return (
    <PageShell>
      <header className="page-hero page-hero--photography">
        <h1>Photography</h1>
        <p>
          A bicycle turns up in another city. Red looks different after dark. Follow a thread across three photographs, or put two prints together yourself.
        </p>
      </header>
      <section className="selected-frames-section section-pad" aria-label="Curated photography">
        <SelectedFrames />
        <a className="archive-jump" href="#photo-map">Browse all {photoCount} photographs by place</a>
      </section>
      <section id="photo-map" aria-label="Photography by location" className="photography-page section-pad">
        <h2>Browse by place</h2>
        <p>Explore all {photoCount} photographs on the map.</p>
        <PhotographyWorldMapClient />
        <nav className="research-contents" aria-label="Related photography">
          <Link href="/writing#world-press-photo">My essay on World Press Photo</Link>
          <Link href="/research#field-heading">Bar fieldwork photographs</Link>
        </nav>
      </section>
    </PageShell>
  );
}
