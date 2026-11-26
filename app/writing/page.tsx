import "./writing.css";
import { WritingIndex } from "@/components/writing/WritingIndex";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { FeaturedStory } from "@/components/writing/FeaturedStory";
import { StoryArchiveItem } from "@/components/writing/StoryArchiveItem";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { campusStories } from "@/data/campusStories";
import { WeChatEssays } from "@/components/writing/WeChatEssays";
import { journalismStories } from "@/data/journalismStories";

const seo = indexedPages[2];
export const metadata: Metadata = createPageMetadata(seo);

export default function WritingPage() {
  return (
    <PageShell>
      <header className="page-hero page-hero--editorial writing-intro">
        <h1>Writing</h1>
        <p>I report on life in Chinese cities, write personal essays on WeChat, and interview people at Peking University. Each story links to the original in Chinese.</p>
      </header>
      <WritingIndex panels={{
        "magazine-reporting": <MagazineReporting />,
        "personal-essays": <WeChatEssays />,
        "campus-stories": <CampusStories />,
      }} />
    </PageShell>
  );
}

function MagazineReporting() {
  const featured = journalismStories.filter((story) => story.featured);
  const archive = journalismStories.filter((story) => !story.featured);

  return (
    <section className="featured-stories section-pad" aria-labelledby="featured-stories-heading">
      <header className="writing-section-head">
        <h2 id="featured-stories-heading">Magazine reporting</h2>
        <p>At Daily People (每日人物) and People Magazine (人物), I interviewed about 80–90 people for nine features, from lectures in bars to the price of following a concert tour.</p>
        <p className="entry-meta">July 2024–February 2025</p>
      </header>
      <div className="featured-story-grid">
        {featured.map((story) => <FeaturedStory key={story.id} story={story} />)}
      </div>
      <details className="writing-disclosure">
        <summary>More magazine stories ({archive.length})</summary>
        <div className="story-archive">
          {archive.map((story, index) => (
            <StoryArchiveItem key={story.id} story={story} index={index + featured.length} />
          ))}
        </div>
      </details>
      <details className="writing-disclosure writing-background" id="editorial-heading">
        <summary>Editorial and communications experience</summary>
        <p><strong>Madame Figaro China</strong> · Fashion editorial intern, April–June 2025. I researched designers, fact-checked stories, and interviewed guests at the magazine’s Shanghai event.</p>
        <p><strong>BlueFocus</strong> · Global marketing intern, January–April 2025. I researched consumer technology markets and tracked how brands communicated overseas.</p>
      </details>
    </section>
  );
}

function CampusStories() {
  return (
    <section className="campus-writing section-pad" aria-labelledby="campus-writing-heading">
      <header className="writing-section-head">
        <h2 id="campus-writing-heading">Campus stories</h2>
        <p>For Peking University’s media, I interview the people who make campus life what it is, from an astronomy researcher to a warehouse manager who paints.</p>
      </header>
      <div className="campus-story-list">
        {campusStories.map((story, index) => (
          <a key={story.id} id={story.id} href={story.link} target="_blank" rel="noreferrer">
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
      <details className="writing-disclosure writing-background" id="pku-media-heading">
        <summary>My roles at Peking University Media</summary>
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
      </details>
    </section>
  );
}
