import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ResearchEntry } from "@/components/research/ResearchEntry";
import { researchProjects } from "@/data/researchProjects";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Research by Yunmoxiao Tian across organizations, cultural sociology, consumption, platforms, fashion, visual communication, and AI-supported writing.",
};

export default function ResearchPage() {
  return (
    <PageShell>
      <header className="page-hero page-hero--academic">
        <p className="section-kicker">Research</p>
        <h1>Research experience</h1>
        <p>
          Qualitative and mixed-method research across organizations, culture,
          consumption, communication, platforms, fashion, and literary reception.
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
