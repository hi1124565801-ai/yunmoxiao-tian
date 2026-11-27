import Link from "next/link";

const highlights = [
  { category: "Field research", title: "Who makes a bar feel like its own place?", detail: "Five sites in Beijing and Guangzhou", href: "/research/#organized-variation" },
  { category: "Magazine reporting", title: "The lecture hall after dark", detail: "Reporting on China’s academic bars", href: "/writing/academic-bars/" },
  { category: "Personal essays", title: "The Necessity of Old-Fashioned Conversation", detail: "From my WeChat publication 冰块下午", href: "/writing/conversation/" },
  { category: "Photography", title: "Tromsø, through my lens", detail: "A frame from my city photographs", href: "/photography/#frame-tromso" },
];

export function PortfolioDirectory() {
  return (
    <ul className="home-highlights" aria-label="More selected work">
      {highlights.map(item => (
        <li key={item.href}>
          <Link href={item.href}>
            <span className="highlight-category">{item.category}</span>
            <span><strong>{item.title}</strong><small>{item.detail}</small></span>
            <span aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
