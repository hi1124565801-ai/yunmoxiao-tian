import Link from "next/link";
import { SmartImage } from "@/components/media/SmartImage";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="profile-intro" aria-labelledby="home-title">
      <h1 id="home-title">
        {siteConfig.name}
        <span lang="zh-CN">{siteConfig.chineseName}</span>
      </h1>
      <div className="profile-photo">
        <SmartImage
          src="/images/profile/yunmoxiao-main.jpg"
          alt="Yunmoxiao Tian standing on a bridge"
          fill
          priority
          sizes="(max-width: 620px) 24vw, 252px"
        />
      </div>
      <div className="profile-bio">
        <p>
          I study English Language and Literature at Peking University, with a minor in Sociology. I expect to graduate in June 2027.
        </p>
        <p>
          I follow the people who make a place what it is. In Beijing and Guangzhou,
          I studied how bar customers become bartenders, performers, and regulars.
          I also report on urban life, photograph cities, and map the places I find in books.
        </p>
        <div className="profile-links">
          <Link href="/research#organized-variation">Explore my fieldwork</Link>
          <a href={`mailto:${siteConfig.academicEmail}`}>Email me</a>
        </div>
      </div>
    </section>
  );
}
