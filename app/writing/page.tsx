import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { FeaturedStory } from "@/components/writing/FeaturedStory";
import { StoryArchiveItem } from "@/components/writing/StoryArchiveItem";
import { createPageMetadata, indexedPages } from "@/config/seo";
import { campusStories } from "@/data/campusStories";
import { independentEssays } from "@/data/independentEssays";
import { journalismStories } from "@/data/journalismStories";

const seo = indexedPages[2];
export const metadata: Metadata = createPageMetadata(seo);

export default function WritingPage() {
  const featured = journalismStories.filter((story) => story.featured);
  const archive = journalismStories.filter((story) => !story.featured);

  return (
    <PageShell>
      <header className="page-hero page-hero--editorial">
        <p className="section-kicker">Writing</p>
        <h1>Journalism, campus writing, and independent essays</h1>
        <p>
          Writing by Yunmoxiao Tian across culture, consumption, fashion, ageing,
          education, urban life, and the experience of living between cities.
        </p>
      </header>

      <section className="journalism-profile section-pad" aria-labelledby="journalism-profile-heading">
        <div>
          <p className="section-kicker">Journalism Profile</p>
          <h2 id="journalism-profile-heading">People Magazine <span lang="zh-CN">(人物)</span></h2>
        </div>
        <div>
          <p>
            People Magazine is a prominent Chinese publication known for long-form
            narrative journalism and human-interest reporting. During a seven-month
            editorial internship, I independently reported and wrote nine feature
            stories based on interviews with approximately 80–90 people.
          </p>
          <p>
            The stories examined emerging youth cultures, consumption, fashion,
            ageing, and urban social life, receiving more than one million views in total.
          </p>
          <div className="profile-metrics">
            <span><strong>9</strong> independently written feature stories</span>
            <span><strong>80–90</strong> interviewees</span>
            <span><strong>1M+</strong> total views</span>
            <span><strong>5</strong> topic areas</span>
          </div>
        </div>
      </section>

      <section className="featured-stories section-pad" aria-labelledby="featured-stories-heading">
        <div className="section-head">
          <div>
            <p className="section-kicker">People Magazine</p>
            <h2 id="featured-stories-heading">Selected journalism</h2>
          </div>
          <p>Independently reported and written.</p>
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

      <section className="independent-essays section-pad" aria-labelledby="independent-essays-heading">
        <div className="essay-publication">
          <p className="section-kicker">Independent Essays</p>
          <h2 id="independent-essays-heading"><span lang="zh-CN">冰块下午</span></h2>
          <p>
            Bingkuai Xiawu (冰块下午, “The Afternoon of Ice”) is my personal
            WeChat publication. Its name refers to the afternoon of encountering ice
            in <em>One Hundred Years of Solitude</em>. The essays move between everyday
            observation, cultural commentary, memory, food, conversation, photography,
            and the experience of living across cities.
          </p>
        </div>
        <div className="essay-list">
          {independentEssays.map((essay, index) => (
            <article key={essay.id}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{essay.titleEn}</h3>
              <p lang="zh-CN">{essay.titleZh}</p>
              <p>{essay.summary}</p>
              <a href={essay.link} target="_blank" rel="noreferrer">
                Read essay <span aria-hidden="true">↗</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
