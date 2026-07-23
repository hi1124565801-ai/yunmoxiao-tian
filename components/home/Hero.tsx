import Link from "next/link";
import { SmartImage } from "@/components/media/SmartImage";
import { researchInterests, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="home-title">
      <div className="hero-copy">
        <p className="section-kicker">Peking University · Undergraduate</p>
        <h1 id="home-title">
          Yunmoxiao Tian
          <span lang="zh-CN">田云墨筱</span>
        </h1>
        <div className="hero-academic-line" aria-label="Academic profile">
          <p>Peking University</p>
          <p>B.A. in English Language and Literature</p>
          <p>Second Major in Sociology</p>
          <p>Expected Graduation: June 2027</p>
        </div>
        <p className="hero-position">
          I study how culture, organizations, media, and everyday social life are
          produced and experienced.
        </p>
        <p className="hero-intro">
          Hello, I’m Yunmoxiao Tian (田云墨筱), an undergraduate at Peking
          University graduating in 2027. I major in English Language and Literature
          and pursue a second major in Sociology. My research interests lie at the
          intersection of cultural sociology, consumer sociology, communication,
          organizations, urban life, and digital platforms. Alongside academic
          research, I work across long-form journalism, photography, and independent
          digital projects.
        </p>
        <div className="hero-interests" aria-label="Research interests">
          {researchInterests.slice(0, 6).map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
        <div className="hero-actions">
          <a className="button button--solid" href={siteConfig.cvUrl} download>
            Download CV
          </a>
          <Link className="button button--line" href="/research">View Research</Link>
          <a className="button button--text" href={`mailto:${siteConfig.academicEmail}`}>
            Email Me
          </a>
          <a className="button button--text" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
      <div className="hero-portrait-column">
        <div className="hero-portrait">
          <SmartImage
            src="/images/profile/yunmoxiao-main.jpg"
            alt="Yunmoxiao Tian standing on a bridge in evening light"
            fill
            priority
            sizes="(max-width: 860px) 92vw, 42vw"
          />
        </div>
        <div className="hero-contact">
          <span>Academic email</span>
          <a href={`mailto:${siteConfig.academicEmail}`}>{siteConfig.academicEmail}</a>
          <span>Personal email</span>
          <a href={`mailto:${siteConfig.personalEmail}`}>{siteConfig.personalEmail}</a>
        </div>
      </div>
      <div className="botanical-line" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
    </section>
  );
}
