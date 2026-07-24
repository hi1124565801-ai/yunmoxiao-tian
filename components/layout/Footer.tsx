import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 Yunmoxiao Tian / <span lang="zh-CN">田云墨筱</span></p>
      <nav aria-label="Footer links">
        <a href={`mailto:${siteConfig.academicEmail}`}>Academic Email</a>
        <a href={`mailto:${siteConfig.personalEmail}`}>Personal Email</a>
        <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a href={siteConfig.github} target="_blank" rel="noreferrer">
          GitHub <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a href={siteConfig.cvUrl} download>Download Yunmoxiao Tian’s CV</a>
      </nav>
    </footer>
  );
}
