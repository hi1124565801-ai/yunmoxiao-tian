import Link from "next/link";
import { SmartImage } from "@/components/media/SmartImage";
import { literaryMapping } from "@/data/literaryMapping";
import { photographyLocations } from "@/data/photographyLocations";

const selectedWork = [
  { section: "Research", title: "Organized Variation at Drunk N’ Jump", href: "/research#organized-variation" },
  { section: "Journalism", title: "Why young people go to bars for lectures", href: "/writing#academic-bars" },
  { section: "Personal essays", title: "冰块下午 · The Afternoon of Ice", href: "/writing#bingkuai-xiawu" },
  { section: "Digital project", title: literaryMapping.title, href: "/literary-mapping" },
];

export function PortfolioDirectory() {
  const photograph = photographyLocations.find(({ id }) => id === "tromso")?.photos[1];
  return (
    <section className="work-selection" aria-labelledby="work-heading">
      <div>
        <h2 id="work-heading">Selected work</h2>
        <ul>
          {selectedWork.map((work) => (
            <li key={work.href}>
              <Link href={work.href}>
                <span>{work.section}</span>
                <strong>{work.title}</strong>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {photograph && (
        <Link className="featured-photograph" href="/photography#frame-tromso">
          <div>
            <SmartImage src={photograph.src} alt={photograph.alt} fill sizes="(max-width: 620px) 90vw, 440px" />
          </div>
          <span>Photography <i aria-hidden="true">/</i> Tromsø, Norway</span>
        </Link>
      )}
    </section>
  );
}
