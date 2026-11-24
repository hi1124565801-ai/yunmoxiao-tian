import { CompatibilityRedirect } from "@/components/layout/CompatibilityRedirect";
import { researchProjects } from "@/data/researchProjects";

export function generateStaticParams() {
  return researchProjects.map((project) => ({ slug: project.id }));
}

export const dynamicParams = false;

export default async function ResearchProjectCompatibilityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <CompatibilityRedirect href={`/research/#${slug}`} label="the research project" />;
}
