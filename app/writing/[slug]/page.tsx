import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { createPageMetadata } from "@/config/seo";
import { campusStories } from "@/data/campusStories";
import { independentEssays } from "@/data/independentEssays";
import { journalismStories } from "@/data/journalismStories";
import { editionIds, getReadingEdition } from "@/data/readingEditions";
import "./reader.css";

const stories = [...independentEssays, ...journalismStories, ...campusStories];
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return editionIds.map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const story = stories.find(item => item.id === slug);
  if (!story) return {};
  return createPageMetadata({
    title: story.titleEn, path: `/writing/${slug}`, description: story.summary ?? story.titleEn,
  });
}

export default async function ReadingPage({ params }: Props) {
  const { slug } = await params;
  const edition = await getReadingEdition(slug);
  const story = stories.find(item => item.id === slug);
  if (!edition || !story) notFound();
  const essay = independentEssays.some(item => item.id === slug);
  const section = essay ? "personal-essays" : campusStories.some(item => item.id === slug) ? "campus-stories" : "magazine-reporting";
  const sectionLabel = essay ? "Personal essays" : section === "campus-stories" ? "Campus stories" : "Magazine reporting";
  return (
    <PageShell>
      <article className="reading-page">
        <Link className="reader-back" href={`/writing/#${section}`}>← {sectionLabel}</Link>
        <header>
          <p className="entry-meta" lang="zh-CN">{edition.publisher}{essay ? " · 田云墨筱" : ""}</p>
          <h1 lang="zh-CN">{edition.title}</h1>
          <p className="reader-translation">{story.titleEn}</p>
          {story.summary && <p className="reader-summary">{story.summary}</p>}
        </header>
        <div lang="zh-CN" className="reader-body">
          {edition.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
        <footer>
          <a href={story.link}>WeChat edition ↗</a>
          {edition.textSource && <a href={edition.textSource}>Source for this text ↗</a>}
          <Link href={`/writing/#${section}`}>More {sectionLabel.toLowerCase()} →</Link>
        </footer>
      </article>
    </PageShell>
  );
}
