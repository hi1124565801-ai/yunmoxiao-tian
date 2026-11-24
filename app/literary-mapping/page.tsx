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
        <p>What does a reader notice on a street that a passerby might miss? I built this Chinese-language atlas to follow places from books into cities. Choose a book below, then a place to read its scene.</p>
      </header>
      <AtlasSampler />
      <section className="atlas-open section-pad" aria-labelledby="full-atlas-heading">
        <h2 id="full-atlas-heading" lang="zh-CN">小说城市漫游图</h2>
        <p>The full atlas brings together maps, literary scenes, and routes. Open the book selector to find the complete route for either sample or explore another work.</p>
        <div className="mapping-actions">
          <a className="button button--solid" href={literaryMapping.url} target="_blank" rel="noreferrer">Open the full atlas ↗<span className="sr-only"> (opens in a new tab)</span></a>
          <a className="button button--line" href={literaryMapping.feedbackUrl}>Send feedback</a>
        </div>
      </section>
    </PageShell>
  );
}
