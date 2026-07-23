export type InternationalExperience = {
  id: string;
  institution: string;
  role: string;
  location: string;
  dates: string;
  description: string;
  coordinates: [number, number];
  category: "Research" | "Study" | "Exchange";
};

export const internationalExperiences: InternationalExperience[] = [
  {
    id: "amsterdam",
    institution: "University of Amsterdam",
    role: "Research Assistant, ERC-funded China–Africa Fashion Power project",
    location: "Amsterdam",
    dates: "2026–Present",
    coordinates: [4.9041, 52.3676],
    category: "Research",
    description:
      "Supporting research on fashion production, circulation, consumption, artificial intelligence, e-commerce, and sustainable fashion. The work includes processing field materials from Kenya, reviewing industry and academic sources, and contributing to mixed-method research for a digital platform.",
  },
  {
    id: "montreal",
    institution: "HEC Montréal",
    role: "Mitacs-funded Summer Research",
    location: "Montréal",
    dates: "Summer 2025",
    coordinates: [-73.5673, 45.5017],
    category: "Research",
    description:
      "Conducted research on cross-platform brand-message consistency, visual communication, and consumer research. Built a structured taxonomy of visual message features, reviewed relevant literature, and used Python for exploratory data analysis.",
  },
  {
    id: "copenhagen",
    institution: "University of Copenhagen",
    role: "Exchange Student, Faculty of Humanities",
    location: "Copenhagen",
    dates: "Autumn 2025",
    coordinates: [12.5683, 55.6761],
    category: "Study",
    description:
      "Studied creative writing and American literature, developed an English-language fiction project, and explored literary and cultural questions in an international classroom environment.",
  },
  {
    id: "london",
    institution: "King’s College London",
    role: "Media, Gender, and Culture Summer School",
    location: "London",
    dates: "Summer 2024",
    coordinates: [-0.1276, 51.5072],
    category: "Study",
    description:
      "Completed an intensive programme examining media, gender, representation, and cultural analysis.",
  },
  {
    id: "singapore",
    institution: "National University of Singapore",
    role: "PKU Student Delegate",
    location: "Singapore",
    dates: "January 2025",
    coordinates: [103.8198, 1.3521],
    category: "Exchange",
    description:
      "Represented Peking University in a five-day academic and institutional exchange, presented research on AI applications in Beijing, and visited Accenture and Singapore’s Land Transport Authority.",
  },
];
