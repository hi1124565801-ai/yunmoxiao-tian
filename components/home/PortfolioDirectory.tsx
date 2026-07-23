import Link from "next/link";
import { siteConfig } from "@/data/site";

export function PortfolioDirectory() {
  const destinations = siteConfig.navigation.filter((item) => item.href !== "/");

  return (
    <section className="portfolio-directory" aria-labelledby="directory-heading">
      <div className="portfolio-directory__intro">
        <p className="section-kicker">Explore the archive</p>
        <h2 id="directory-heading">Research, stories, images, and maps</h2>
      </div>
      <nav aria-label="Portfolio sections">
        {destinations.map((item, index) => (
          <Link key={item.href} href={item.href}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.label}</strong>
            <i aria-hidden="true">↗</i>
          </Link>
        ))}
      </nav>
    </section>
  );
}
