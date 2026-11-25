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
        <p className="bio-opening">I&apos;m easily distracted by a good story, an unfamiliar street, or a conversation that takes an unexpected turn. I like asking questions, sometimes more than people expect me to.</p>
        <p className="bio-interests">I&apos;m interested in the things people care about, the peculiarities of everyday life, and all the little worlds that exist alongside my own.</p>
        <p className="bio-closing">I read, write, take photographs, and occasionally turn my curiosities into research projects.</p>
      </div>
    </section>
  );
}
