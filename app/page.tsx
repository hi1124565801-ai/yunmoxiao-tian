import type { Metadata } from "next";
import { AcademicProfile } from "@/components/home/AcademicProfile";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Hero } from "@/components/home/Hero";
import { Honors } from "@/components/home/Honors";
import { InternationalExperience } from "@/components/home/InternationalExperience";
import { LiteraryMappingPreview } from "@/components/home/LiteraryMappingPreview";
import { MediaPreview } from "@/components/home/MediaPreview";
import { PhotographyPreview } from "@/components/home/PhotographyPreview";
import { SelectedResearch } from "@/components/home/SelectedResearch";
import { WritingPreview } from "@/components/home/WritingPreview";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: {
    absolute: "Yunmoxiao Tian | Research, Writing & Photography",
  },
};

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <AcademicProfile />
      <SelectedResearch />
      <InternationalExperience />
      <Honors />
      <WritingPreview />
      <LiteraryMappingPreview />
      <PhotographyPreview />
      <MediaPreview />
      <ContactCTA />
    </PageShell>
  );
}
