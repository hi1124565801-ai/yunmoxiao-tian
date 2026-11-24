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
          What makes someone spend an evening listening to a lecture in a bar?
          I asked the people who went, and <Link href="/writing#academic-bars">wrote about it</Link>.
          In Beijing and Guangzhou, I followed a different question across five bars:
          <Link href="/research#organized-variation"> who ends up on the other side of the counter?</Link>
        </p>
        <p>
          On my WeChat publication <Link href="/writing#bingkuai-xiawu" lang="zh-CN">冰块下午</Link>,
          I make the case for two old-fashioned pleasures: talking over nothing in particular
          and taking a long time over a meal.
        </p>
        <p className="bio-affiliation">I study English Language and Literature at Peking University, with a minor in Sociology. I expect to graduate in June 2027.</p>
      </div>
    </section>
  );
}
