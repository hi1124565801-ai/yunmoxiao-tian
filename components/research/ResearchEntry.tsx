import type { ResearchProject } from "@/data/researchProjects";

export function ResearchEntry({
  project,
  index,
}: {
  project: ResearchProject;
  index: number;
}) {
  return (
    <article className="research-entry">
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
        <div className="tag-list" aria-label="Methods and themes">
          {project.themes.map((theme) => <span key={theme}>{theme}</span>)}
        </div>
      </div>
    </article>
  );
}
