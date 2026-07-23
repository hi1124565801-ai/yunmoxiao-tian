import type { JournalismStory } from "@/data/journalismStories";

export function StoryArchiveItem({
  story,
  index,
}: {
  story: JournalismStory;
  index: number;
}) {
  return (
    <article className="story-archive-item">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <div>
        <p className="entry-meta">{story.publication} · {story.year}</p>
        <h3>{story.titleEn}</h3>
        <p className="chinese-title" lang="zh-CN">{story.titleZh}</p>
        <p>{story.summary}</p>
      </div>
      <div>
        <strong>{story.metrics}</strong>
        <a href={story.link} target="_blank" rel="noreferrer">
          Read <span aria-hidden="true">↗</span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}
