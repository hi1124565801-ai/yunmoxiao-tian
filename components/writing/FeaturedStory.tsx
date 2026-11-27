import { ArticleLink } from "./ArticleLink";
import { SmartImage } from "@/components/media/SmartImage";
import type { JournalismStory } from "@/data/journalismStories";

export function FeaturedStory({ story }: { story: JournalismStory }) {
  return (
    <article className="featured-story" id={story.id}>
      <div className="featured-story-image">
        <SmartImage
          src={story.image}
          alt={`Editorial image accompanying ${story.titleEn}`}
          fill
          sizes="(max-width: 650px) 70px, 104px"
        />
      </div>
      <div>
        <p className="entry-meta">{story.publication} · {story.year}</p>
        <h3><ArticleLink story={story}>{story.titleEn}</ArticleLink></h3>
        <p className="chinese-title" lang="zh-CN">{story.titleZh}</p>
        <p>{story.summary}</p>
        <strong>{story.metrics}</strong>
        <ArticleLink story={story}>
          Read article <span aria-hidden="true">→</span>
        </ArticleLink>
      </div>
    </article>
  );
}
