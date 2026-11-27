import { SmartImage } from "@/components/media/SmartImage";
import previewWidths from "@/lib/image-preview-widths.json";
import { siteConfig } from "@/data/site";

export function Hero() {
  const original = "/images/profile/yunmoxiao-main.jpg";
  const secondPortrait = Object.keys(previewWidths).find(src =>
    src.startsWith("/images/profile/") && src !== original
  );

  return (
    <section className={secondPortrait ? "profile-intro profile-intro--pair" : "profile-intro"} aria-labelledby="home-title">
      <h1 id="home-title">
        {siteConfig.name}
        <span lang="zh-CN">{siteConfig.chineseName}</span>
      </h1>
      <div className={secondPortrait ? "portrait-pair" : "profile-photo"}>
        <div className="portrait-frame">
          <SmartImage src={original} alt="Yunmoxiao Tian standing on a bridge" fill priority
            sizes={secondPortrait ? "(max-width: 620px) 30vw, 155px" : "(max-width: 620px) 24vw, 252px"} />
        </div>
        {secondPortrait && (
          <div className="portrait-frame">
            <SmartImage src={secondPortrait} alt="Yunmoxiao Tian in a green dress, holding a camera in the afternoon light"
              fill sizes="(max-width: 620px) 38vw, 196px" />
          </div>
        )}
      </div>
      <div className="profile-bio">
        <p className="bio-opening">I&apos;m easily distracted by a good story, an unfamiliar street, or a conversation that takes an unexpected turn. I like asking questions, sometimes more than people expect me to.</p>
        <p className="bio-interests">I&apos;m interested in the things people care about, the peculiarities of everyday life, and all the little worlds that exist alongside my own.</p>
        <p className="bio-closing">I read, write, take photographs, and occasionally turn my curiosities into research projects.</p>
      </div>
    </section>
  );
}
