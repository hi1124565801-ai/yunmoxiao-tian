import { SmartImage } from "@/components/media/SmartImage";
import type { JournalismStory } from "@/data/journalismStories";

export function FeaturedStory({ story }: { story: JournalismStory }) {
  return (
    <article className="featured-story">
      <div className="featured-story-image">
        <SmartImage
          src={story.image}
          alt={`Editorial image accompanying ${story.titleEn}`}
          fill
          sizes="(max-width: 760px) 92vw, 38vw"
        />
      </div>
      <div>
        <p className="entry-meta">{story.publication} · {story.year}</p>
        <h3>{story.titleEn}</h3>
        <p className="chinese-title" lang="zh-CN">{story.titleZh}</p>
        <p>{story.summary}</p>
        <strong>{story.metrics}</strong>
        <a href={story.link} target="_blank" rel="noreferrer">
          Read article <span aria-hidden="true">↗</span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </article>
  );
}
