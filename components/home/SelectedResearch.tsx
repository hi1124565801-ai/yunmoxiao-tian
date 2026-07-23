import Link from "next/link";
import { researchProjects } from "@/data/researchProjects";

export function SelectedResearch() {
  return (
    <section className="selected-research section-pad" aria-labelledby="selected-research-heading">
      <div className="section-head">
        <div>
          <p className="section-kicker">Selected Research</p>
          <h2 id="selected-research-heading">Current and recent projects</h2>
        </div>
        <Link href="/research" className="text-link">Full research record <span>→</span></Link>
      </div>
      <div className="selected-research-list">
        {researchProjects.filter((project) => project.selected).map((project, index) => (
          <article key={project.id}>
            <span className="entry-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="entry-meta">{project.institution} · {project.dates}</p>
              <h3>{project.title}</h3>
              <p>{project.description[0]}</p>
              <div className="tag-list">
                {project.themes.slice(0, 4).map((theme) => <span key={theme}>{theme}</span>)}
              </div>
            </div>
            <span className="status-label">{project.status}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
