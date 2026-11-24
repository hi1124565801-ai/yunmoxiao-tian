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
          Six photographs, read in pairs. The map below opens the full archive of {photoCount} photographs by place.
        </p>
      </header>
      <section className="selected-frames-section section-pad" aria-labelledby="selected-frames-heading">
        <div className="section-head">
          <h2 id="selected-frames-heading">Photographs in pairs</h2>
          <nav className="research-contents" aria-label="Photography collections">
            <Link href="/photography#photo-map">Browse the map</Link>
            <Link href="/writing#world-press-photo">My essay on World Press Photo</Link>
            <Link href="/research#field-heading">Bar fieldwork photographs</Link>
          </nav>
        </div>
        <SelectedFrames />
      </section>
      <section id="photo-map" aria-label="Photography by location" className="photography-page section-pad">
        <PhotographyWorldMapClient />
      </section>
    </PageShell>
  );
}
