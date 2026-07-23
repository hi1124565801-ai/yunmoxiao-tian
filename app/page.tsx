import type { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { Hero } from "@/components/home/Hero";
import { Honors } from "@/components/home/Honors";
import { InternationalExperience } from "@/components/home/InternationalExperience";
import { PortfolioDirectory } from "@/components/home/PortfolioDirectory";
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
      <PortfolioDirectory />
      <InternationalExperience />
      <Honors />
      <ContactCTA />
    </PageShell>
  );
}
