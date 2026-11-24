import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { FeaturedStory } from "@/components/writing/FeaturedStory";
import { StoryArchiveItem } from "@/components/writing/StoryArchiveItem";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { campusStories } from "@/data/campusStories";
import Link from "next/link";
import { WeChatEssays } from "@/components/writing/WeChatEssays";
import { journalismStories } from "@/data/journalismStories";

const seo = indexedPages[2];
export const metadata: Metadata = createPageMetadata(seo);

export default function WritingPage() {
  const featured = journalismStories.filter((story) => story.featured);
  const archive = journalismStories.filter((story) => !story.featured);

  return (
    <PageShell>
      <header className="page-hero page-hero--editorial">
        <h1>Journalism and essays</h1>
        <p>During my internship at Daily People (每日人物) and People Magazine (人物), I interviewed about 80–90 people for nine features on life in Chinese cities. I also write campus profiles and personal essays.</p>
        <nav className="research-contents" aria-label="Writing sections">
          <Link href="/writing#bingkuai-xiawu">冰块下午 · Personal essays</Link>
          <Link href="/writing#featured-stories-heading">Journalism</Link>
          <Link href="/writing#campus-writing-heading">Campus writing</Link>
        </nav>
      </header>
      <WeChatEssays />

      <section className="featured-stories section-pad" aria-labelledby="featured-stories-heading">
        <div className="section-head">
          <div>

            <h2 id="featured-stories-heading">Selected journalism</h2>
          </div>
          <p>Daily People and People Magazine · July 2024–February 2025</p>
        </div>
        <div className="featured-story-grid">
          {featured.map((story) => <FeaturedStory key={story.id} story={story} />)}
        </div>
        <div className="story-archive" aria-label="More People Magazine stories">
          {archive.map((story, index) => (
            <StoryArchiveItem key={story.id} story={story} index={index + featured.length} />
          ))}
        </div>
      </section>

      <section className="editorial-experience section-pad" aria-labelledby="editorial-heading">
        <h2 id="editorial-heading">Editorial and communications experience</h2>
        <p><strong>Madame Figaro China</strong> · Fashion editorial intern, April–June 2025. I researched designers, fact-checked stories, and interviewed guests at the magazine’s Shanghai event.</p>
        <p><strong>BlueFocus</strong> · Global marketing intern, January–April 2025. I researched consumer technology markets and tracked how brands communicated overseas.</p>
      </section>

      <section className="pku-media section-pad" aria-labelledby="pku-media-heading">
        <div>
          <p className="section-kicker">Peking University Media</p>
          <h2 id="pku-media-heading">Reporting within the university</h2>
        </div>
        <div className="pku-media-grid">
          <article>
            <p className="entry-meta">October 2022–Present</p>
            <h3>Peking University Official WeChat Team</h3>
            <strong>Reporter & Editor</strong>
            <p>
              As a reporter and editor for Peking University’s official WeChat
              platform, I identify emerging campus topics, conduct interviews, and
              write long-form profiles of students, scholars, workers, and cultural
              events. I have written more than ten in-depth articles, several of which
              received more than 100,000 views and were republished by national media
              including People’s Daily.
            </p>
            <span className="recognition-note">PKU Excellent Journalist for three consecutive academic years</span>
          </article>
          <article>
            <p className="entry-meta">September 2024–June 2025</p>
            <h3>New Media Center, School of Foreign Languages</h3>
            <strong>Deputy Director</strong>
            <p>
              Coordinated and edited editorial content, supported cross-department
              cultural programming, and helped the team receive the School of Foreign
              Languages’ Outstanding Department recognition.
            </p>
          </article>
        </div>
      </section>

      <section className="campus-writing section-pad" aria-labelledby="campus-writing-heading">
        <div className="section-head">
          <div>
            <p className="section-kicker">Campus Writing</p>
            <h2 id="campus-writing-heading">Selected archive</h2>
          </div>
          <p>Profiles, cultural reporting, and university life.</p>
        </div>
        <div className="campus-story-list">
          {campusStories.map((story, index) => (
            <a key={story.id} href={story.link} target="_blank" rel="noreferrer">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{story.titleEn}</h3>
                <p lang="zh-CN">{story.titleZh}</p>
                {story.summary && <small>{story.summary}</small>}
              </div>
              <i aria-hidden="true">↗</i>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>
      </section>

    </PageShell>
  );
}
