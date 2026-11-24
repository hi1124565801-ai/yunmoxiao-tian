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
        <p>I like conversations that wander. I’m curious about what people find funny, what feels ordinary to them, and what they notice that I would have walked right past. I read and write for much the same reason. I like finding out what the world looks like to someone else.</p>
        <p className="bio-affiliation">I study English Language and Literature at Peking University, with a minor in Sociology. I expect to graduate in June 2027.</p>
      </div>
    </section>
  );
}
