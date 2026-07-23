import Link from "next/link";
import { SmartImage } from "@/components/media/SmartImage";
import { mappedPhotographyLocations, photographyLocations } from "@/data/photographyLocations";

export function PhotographyPreview() {
  return (
    <section className="photography-preview section-pad" aria-labelledby="photography-preview-heading">
      <div className="photography-preview-image">
        <SmartImage
          src="/images/photography/amsterdam/amsterdam-02.jpg"
          alt="Cyclists passing through a warm evening street in Amsterdam"
          fill
          sizes="(max-width: 760px) 92vw, 50vw"
        />
      </div>
      <div>
        <p className="section-kicker">Photography</p>
        <h2 id="photography-preview-heading">A visual archive, organized by place.</h2>
        <p>
          Photographs of streets, coastlines, interiors, and passing moments. The
          complete archive opens through an interactive world map.
        </p>
        <div className="photo-count">
          <strong>{mappedPhotographyLocations.length}</strong>
          <span>mapped locations</span>
          <strong>{photographyLocations.reduce((total, item) => total + item.photos.length, 0)}</strong>
          <span>selected photographs</span>
        </div>
        <Link href="/photography" className="button button--line">View Photography Map</Link>
      </div>
    </section>
  );
}
