import { redirect } from "next/navigation";
import { researchProjects } from "@/data/researchProjects";

export function generateStaticParams() {
  return researchProjects.map((project) => ({ slug: project.id }));
}

export const dynamicParams = false;

export default function ResearchProjectCompatibilityPage() {
  redirect("/research");
}
