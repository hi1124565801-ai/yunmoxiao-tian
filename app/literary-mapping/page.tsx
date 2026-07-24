import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SmartImage } from "@/components/media/SmartImage";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { literaryMapping } from "@/data/literaryMapping";

const seo = indexedPages[5];
export const metadata: Metadata = createPageMetadata(seo);

export default function LiteraryMappingPage() {
  return (
    <PageShell>
      <header className="mapping-hero section-pad">
        <div>
          <p className="section-kicker">Literary Mapping</p>
          <h1>{literaryMapping.title}</h1>
          <p className="mapping-status">{literaryMapping.status}</p>
          <p>{literaryMapping.introduction}</p>
          <div className="mapping-actions">
            <a className="button button--solid" href={literaryMapping.url} target="_blank" rel="noreferrer">
              Explore the Live Prototype <span aria-hidden="true">↗</span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a className="button button--line" href={literaryMapping.feedbackUrl}>Send Feedback</a>
          </div>
        </div>
        <ul aria-label="Project authorship">
          {literaryMapping.role.map((role) => <li key={role}>{role}</li>)}
        </ul>
      </header>

      <section className="mapping-snapshot section-pad" aria-labelledby="snapshot-heading">
        <div className="mapping-browser">
          <div className="browser-bar"><span /><span /><span /><p>literary-city-atlas</p></div>
          <div className="mapping-browser-image">
            <SmartImage
              src={literaryMapping.snapshot}
              alt="Screenshot of the Literary City Atlas interactive map interface"
              fill
              priority
              sizes="(max-width: 760px) 94vw, 72vw"
            />
          </div>
        </div>
        <div>
          <p className="section-kicker">Purpose</p>
          <h2 id="snapshot-heading">Reading a city by walking through it</h2>
          <p>{literaryMapping.purpose}</p>
        </div>
      </section>

      <section className="mapping-details section-pad">
        <div>
          <p className="section-kicker">Practical Uses</p>
          <h2>What the prototype supports</h2>
          <ol>
            {literaryMapping.practicalUses.map((item, index) => (
              <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>
            ))}
          </ol>
        </div>
        <div>
          <p className="section-kicker">Current Stage</p>
          <h2>A public prototype, not a finished platform</h2>
          <p>{literaryMapping.currentStatus}</p>
        </div>
      </section>

      <section className="future-directions section-pad" aria-labelledby="future-directions-heading">
        <div>
          <p className="section-kicker">Future Directions</p>
          <h2 id="future-directions-heading">Possible extensions</h2>
          <p>These are planned directions rather than completed features.</p>
        </div>
        <ul>
          {literaryMapping.futureDirections.map((direction) => <li key={direction}>{direction}</li>)}
        </ul>
      </section>
    </PageShell>
  );
}
