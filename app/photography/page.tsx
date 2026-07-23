import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { PhotographyWorldMapClient } from "@/components/photography/PhotographyWorldMapClient";
import { SelectedFrames } from "@/components/photography/SelectedFrames";
import { photographyLocations } from "@/data/photographyLocations";

export const metadata: Metadata = {
  title: "Photography",
  description:
    "An interactive world map and photography archive by Yunmoxiao Tian.",
};

export default function PhotographyPage() {
  const photoCount = photographyLocations.reduce((total, location) => total + location.photos.length, 0);
  return (
    <PageShell>
      <header className="page-hero page-hero--photography">
        <p className="section-kicker">Photography</p>
        <h1>The world through my lens</h1>
        <p>
          A visual archive of {photoCount} selected photographs across cities,
          streets, coastlines, interiors, and passing moments.
        </p>
      </header>
      <section className="photography-page section-pad">
        <PhotographyWorldMapClient />
      </section>
      <section className="selected-frames-section section-pad" aria-labelledby="selected-frames-heading">
        <div className="section-head">
          <div>
            <p className="section-kicker">Selected Frames</p>
            <h2 id="selected-frames-heading">A few ways of looking</h2>
          </div>
          <p>Images retain their original proportions and open in a keyboard-accessible viewer.</p>
        </div>
        <SelectedFrames />
      </section>
    </PageShell>
  );
}
