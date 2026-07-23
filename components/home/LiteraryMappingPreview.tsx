import Link from "next/link";
import { SmartImage } from "@/components/media/SmartImage";
import { literaryMapping } from "@/data/literaryMapping";

export function LiteraryMappingPreview() {
  return (
    <section className="mapping-preview section-pad" aria-labelledby="mapping-preview-heading">
      <div>
        <p className="section-kicker">Independent Digital Project</p>
        <h2 id="mapping-preview-heading">Literary City Atlas</h2>
        <p>
          An early-stage public prototype translating books, writers, fictional
          scenes, quotations, and real-world locations into walkable urban experiences.
        </p>
        <ul>
          {literaryMapping.role.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <Link href="/literary-mapping" className="button button--line">View project</Link>
      </div>
      <div className="mapping-preview-window">
        <div className="browser-bar"><span /><span /><span /><p>literary-city-atlas</p></div>
        <div className="mapping-preview-image">
          <SmartImage
            src={literaryMapping.snapshot}
            alt="Screenshot of the Literary City Atlas interactive map interface"
            fill
            sizes="(max-width: 760px) 92vw, 52vw"
          />
        </div>
      </div>
    </section>
  );
}
