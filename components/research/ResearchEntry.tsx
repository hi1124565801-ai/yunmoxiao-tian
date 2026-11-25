import { SmartImage } from "@/components/media/SmartImage";
import type { ResearchProject } from "@/data/researchProjects";

export function ResearchEntry({
  project,
  index,
}: {
  project: ResearchProject;
  index: number;
}) {
  return (
    <article className="research-entry" id={project.id}>
      <span className="research-entry-number">{String(index + 1).padStart(2, "0")}</span>
      <header>
        <p>{project.role} · {project.status}</p>
        <h2>{project.title}</h2>
        <dl>
          <div><dt>Institution</dt><dd>{project.institution}</dd></div>
          <div><dt>Location</dt><dd>{project.location}</dd></div>
          <div><dt>Dates</dt><dd>{project.dates}</dd></div>
          <div><dt>Supervisor</dt><dd>{project.supervisor}</dd></div>
        </dl>
      </header>
      <div className="research-entry-body">
        {project.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {project.id === "china-africa-fashion-power" && (
          <>
            <figure style={{ margin: "1.25rem 0 0.75rem", maxWidth: "22rem" }}>
              <SmartImage
                src="/images/media/cafp-market.webp"
                alt="A person carries a large bundle on one shoulder through a crowded market aisle."
                width={730}
                height={491}
                sizes="(max-width: 400px) 90vw, 352px"
                className="w-full h-auto"
              />
              <figcaption style={{ marginTop: "0.4rem", fontSize: "0.85rem", color: "var(--muted)" }}>
                Photograph by Paul Cox · <a href="https://www.chinaafricafashionpower.org/about-china-africa-fashion-power">Image source</a>
              </figcaption>
            </figure>
            <a className="text-link" href="https://www.chinaafricafashionpower.org/">Visit the CAFP project website ↗</a>
          </>
        )}
        <div className="tag-list" aria-label="Methods and themes">
          {project.themes.map((theme) => <span key={theme}>{theme}</span>)}
        </div>
      </div>
    </article>
  );
}
