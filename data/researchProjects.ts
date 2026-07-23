export type ResearchProject = {
  id: string;
  title: string;
  role: string;
  institution: string;
  location: string;
  dates: string;
  supervisor: string;
  description: string[];
  themes: string[];
  status: "Ongoing" | "Completed";
  selected?: boolean;
};

export const researchProjects: ResearchProject[] = [
  {
    id: "organized-variation",
    title: "Standardizing the Nonstandard: Organized Variation in a Chinese Bar Chain",
    role: "Independent Research Project",
    institution: "Peking University",
    location: "Beijing / Guangzhou, China",
    dates: "March 2025–Present",
    supervisor: "Assoc. Prof. Wang Di, Department of Sociology, Peking University",
    description: [
      "A qualitative study of how a Chinese multi-city bar chain reproduces participant-produced sociability across outlets while leaving the content and outcomes of interaction open.",
      "The project draws on participant observation across five outlets, interviews with customers, guest bartenders and former employees, and online and visual materials.",
      "It develops the concept of “organized variation” to examine replication, participation, uneven attention, exclusion, fatigue, and turnover.",
    ],
    themes: ["Ethnography", "Interviews", "Organizations", "Urban Sociability", "Consumer Work"],
    status: "Ongoing",
    selected: true,
  },
  {
    id: "china-africa-fashion-power",
    title: "European Research Council–Funded Project: China–Africa Fashion Power",
    role: "Research Assistant",
    institution: "University of Amsterdam",
    location: "Amsterdam, the Netherlands",
    dates: "June 2026–Present",
    supervisor: "Assoc. Prof. Tommy Tse, University of Amsterdam",
    description: [
      "Processes and analyzes fieldwork materials from Kenya and reviews research and industry sources on fashion production, circulation, and consumption.",
      "The work also examines artificial intelligence, fashion e-commerce, sustainability, and the conceptual development of a digital platform.",
    ],
    themes: ["Fashion", "Global Value Chains", "AI", "E-commerce", "Mixed Methods"],
    status: "Ongoing",
    selected: true,
  },
  {
    id: "brand-message-consistency",
    title: "Brand Message Consistency Across Platforms",
    role: "Research Assistant",
    institution: "HEC Montréal",
    location: "Montréal, Canada",
    dates: "June–September 2025",
    supervisor: "Asst. Prof. Holly Howe, HEC Montréal",
    description: [
      "Led the organization and categorization of visual message features across brand communications and developed a structured feature taxonomy for cross-platform analysis.",
      "Conducted a targeted literature review and exploratory data analysis in Python to support later quantitative and experimental research.",
    ],
    themes: ["Visual Communication", "Consumer Research", "Platform Analysis", "Python"],
    status: "Completed",
    selected: true,
  },
  {
    id: "newsagent",
    title: "NewsAgent: A Research-Based System for AI-Supported News Writing",
    role: "Research Assistant · University-awarded Research Project",
    institution: "Peking University",
    location: "Beijing, China",
    dates: "November 2024–May 2025",
    supervisor: "Prof. Yan Hongfei and Prof. Chen Kaihe",
    description: [
      "Critically reviewed how AI-assisted writing tools reshape journalistic knowledge production, with particular attention to fragmented context management and disruption in long-form reasoning.",
      "Co-developed the concept of NewsAgent, based on contextual “cells” and agent-based human–AI collaboration.",
    ],
    themes: ["Human–AI Interaction", "Journalism", "Writing Systems", "Digital Media"],
    status: "Completed",
    selected: true,
  },
  {
    id: "shakespeare-reception",
    title:
      "Cross-Cultural Adaptation and Reception of Shakespearean Derivative Theatre: A Case Study of Into the Breeches!",
    role: "Independent Research Project",
    institution: "Peking University",
    location: "Beijing, China",
    dates: "October 2023–March 2024",
    supervisor: "Prof. Ni Yun, Peking University",
    description: [
      "Combined comparative textual analysis, theatre reviews, and interviews to examine how gender, race, and sexuality were interpreted and negotiated in the cross-cultural reception of Into the Breeches! and Shakespeare’s Henriad.",
    ],
    themes: ["Literary Studies", "Theatre", "Reception", "Gender", "Cross-Cultural Analysis"],
    status: "Completed",
  },
];
