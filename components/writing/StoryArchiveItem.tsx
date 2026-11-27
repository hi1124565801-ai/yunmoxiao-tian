import { ArticleLink } from "./ArticleLink";
import type { JournalismStory } from "@/data/journalismStories";

export function StoryArchiveItem({
  story,
  index,
}: {
  story: JournalismStory;
  index: number;
}) {
  return (
    <article className="story-archive-item" id={story.id}>
      <span>{String(index + 1).padStart(2, "0")}</span>
      <div>
        <p className="entry-meta">{story.publication} · {story.year}</p>
        <h3><ArticleLink story={story}>{story.titleEn}</ArticleLink></h3>
        <p className="chinese-title" lang="zh-CN">{story.titleZh}</p>
        <p>{story.summary}</p>
      </div>
      <div>
        <strong>{story.metrics}</strong>
        <ArticleLink story={story}>
          Read <span aria-hidden="true">→</span>
        </ArticleLink>
      </div>
    </article>
  );
}
