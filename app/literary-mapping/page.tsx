import "../portfolio-editions.css";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AtlasSampler } from "@/components/mapping/AtlasSampler";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { literaryMapping } from "@/data/literaryMapping";

export const metadata: Metadata = createPageMetadata(indexedPages[5]);

export default function LiteraryMappingPage() {
  return (
    <PageShell>
      <header className="page-hero page-hero--academic">
        <h1>{literaryMapping.title}</h1>
        <p>I built 小说城市漫游图 to take books out for a walk. Pick a book and follow three scenes in the order they appear on the page. Switch to walk order and the same city tells the story differently.</p>
      </header>
      <AtlasSampler />
      <section className="atlas-open section-pad" aria-labelledby="full-atlas-heading">
        <h2 id="full-atlas-heading" lang="zh-CN">小说城市漫游图</h2>
        <p>In the full Chinese-language atlas, open 作品 to choose a book. Save scenes to 我的漫游 to build a walk of your own.</p>
        <div className="mapping-actions">
          <a className="button button--solid" href={literaryMapping.url} target="_blank" rel="noreferrer">Open the full atlas<span className="sr-only"> (opens in a new tab)</span></a>
          <a className="button button--line" href={literaryMapping.feedbackUrl}>Send feedback</a>
        </div>
      </section>
    </PageShell>
  );
}
