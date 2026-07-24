import { withBasePath } from "@/lib/sitePath";

export const siteConfig = {
  name: "Yunmoxiao Tian",
  chineseName: "田云墨筱",
  academicEmail: "2200018214@stu.pku.edu.cn",
  personalEmail: "hi1124565801@gmail.com",
  linkedin: "https://www.linkedin.com/in/yunmoxiao-tian-781b88348/",
  github: "https://github.com/hi1124565801-ai",
  cvUrl: withBasePath("/files/Yunmoxiao-Tian-CV.pdf"),
  literaryAtlasUrl: "https://hi1124565801-ai.github.io/literary-city-atlas/?v=26",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Writing", href: "/writing" },
    { label: "Media Coverage", href: "/media" },
    { label: "Photography", href: "/photography" },
    { label: "Literary Mapping", href: "/literary-mapping" },
  ],
} as const;

export const researchInterests = [
  "Cultural Sociology",
  "Consumer Sociology",
  "Communication",
  "Organizations",
  "Urban Sociology & Urban Life",
  "Platforms & Digital Culture",
  "Fashion & Consumption",
  "Media & Cultural Production",
] as const;
