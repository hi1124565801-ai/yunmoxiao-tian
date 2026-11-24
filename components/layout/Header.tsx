"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="wordmark" aria-label="Yunmoxiao Tian 田云墨筱, home">
          <strong>Yunmoxiao Tian</strong>
          <span lang="zh-CN">田云墨筱</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          {siteConfig.navigation.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a className="header-cv" href={siteConfig.cvUrl} download="Yunmoxiao-Tian-CV.pdf" aria-label="Download Yunmoxiao Tian’s CV">
          CV
        </a>
      </div>
    </header>
  );
}
