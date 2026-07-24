import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ResearchEntry } from "@/components/research/ResearchEntry";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { researchProjects } from "@/data/researchProjects";

const seo = indexedPages[1];
export const metadata: Metadata = createPageMetadata(seo);

export default function ResearchPage() {
  return (
    <PageShell>
      <header className="page-hero page-hero--academic">
        <p className="section-kicker">Research</p>
        <h1>Research experience</h1>
        <p>
          Research by Yunmoxiao Tian using qualitative and mixed methods across
          organizations, culture, consumption, communication, platforms, fashion,
          and literary reception.
        </p>
      </header>
      <section className="research-page section-pad" aria-label="Research projects">
        {researchProjects.map((project, index) => (
          <ResearchEntry key={project.id} project={project} index={index} />
        ))}
      </section>
    </PageShell>
  );
}
