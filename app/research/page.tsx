import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { ResearchEntry } from "@/components/research/ResearchEntry";
import { FieldPhotographs } from "@/components/research/FieldPhotographs";
import { MechanismFigure } from "@/components/research/MechanismFigure";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { abstract } from "@/data/organizedVariation";
import { researchProjects } from "@/data/researchProjects";

export const metadata: Metadata = createPageMetadata(indexedPages[1]);

export default function ResearchPage() {
  const [featured, ...others] = researchProjects;
  return (
    <PageShell>
      <header className="page-hero page-hero--academic">
        <h1>Research</h1>
        <p>I study how people make culture together, in bars, newsrooms, and other places where people organize creative work.</p>
        <nav className="research-contents" aria-label="Research sections">
          <Link href="/research#organized-variation">Featured study</Link>
          <Link href="/research#field-heading">Field photographs</Link>
          <Link href="/research#other-research">Other projects</Link>
        </nav>
      </header>
      <article className="featured-study section-pad" id={featured.id} aria-labelledby="study-title">
        <header className="study-intro">
          <p className="field-place">Independent research · Beijing and Guangzhou</p>
          <h2 id="study-title">{featured.title}</h2>
          <p>What can a bar chain repeat when its customers make each night different? At Drunk N’ Jump (跳海), the invitation to take a shift, stage an event, or leave a message travels from one outlet to the next. What people do with it depends on who shows up, who already knows whom, and how staff organize the next occasion.</p>
          <p className="study-credit">Yunmoxiao Tian · {featured.dates}<br />Supervised by {featured.supervisor}</p>
        </header>
        <details className="study-abstract">
          <summary>Abstract</summary>
          <p>{abstract}</p>
        </details>
        <MechanismFigure />
        <FieldPhotographs />
      </article>
      <section className="research-page other-projects section-pad" aria-labelledby="other-research">
        <h2 id="other-research">Other research projects</h2>
        {others.map((project, index) => <ResearchEntry key={project.id} project={project} index={index} />)}
      </section>
    </PageShell>
  );
}
