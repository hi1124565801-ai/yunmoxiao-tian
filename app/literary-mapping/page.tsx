import "../portfolio-editions.css";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AtlasSampler } from "@/components/mapping/AtlasSampler";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { atlasSceneUrl, literaryMapping } from "@/data/literaryMapping";

export const metadata: Metadata = createPageMetadata(indexedPages[5]);

export default function LiteraryMappingPage() {
  return (
    <PageShell>
      <header className="page-hero page-hero--academic">
        <h1>{literaryMapping.title} <span lang="zh-CN">小说城市漫游图</span></h1>
        <p>What happens to a novel when you follow its characters on foot? Try three stops from a book below. Switch between book order and walk order, or open a scene to read the passage on the full Chinese-language map.</p>
        <a className="atlas-scene-link" href={atlasSceneUrl("scene-cn-beijing-south")}>Start with Lin Haiyin’s Beijing ↗</a>
      </header>
      <AtlasSampler />
      <section className="atlas-open section-pad" aria-labelledby="full-atlas-heading">
        <h2 id="full-atlas-heading" lang="zh-CN">小说城市漫游图</h2>
        <p>On the map, choose a title from the bookshelf or search for a place. Save the places you want to visit to 我的漫游, your personal walk.</p>
        <div className="mapping-actions">
          <a className="button button--solid" href={literaryMapping.url} target="_blank" rel="noreferrer">Open the full atlas<span className="sr-only"> (opens in a new tab)</span></a>
          <a className="button button--line" href={literaryMapping.feedbackUrl}>Send feedback</a>
        </div>
      </section>
    </PageShell>
  );
}
