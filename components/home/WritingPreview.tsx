import Link from "next/link";
import { journalismStories } from "@/data/journalismStories";

export function WritingPreview() {
  const lead = journalismStories.find((story) => story.id === "academic-bars") ?? journalismStories[0];
  return (
    <section className="writing-preview section-pad" aria-labelledby="writing-preview-heading">
      <div className="writing-preview-intro">
        <p className="section-kicker">Writing & Journalism</p>
        <h2 id="writing-preview-heading">Long-form reporting as public inquiry.</h2>
        <p>
          During a seven-month internship at People Magazine (人物), I independently
          reported and wrote nine feature stories based on interviews with approximately
          80–90 people. Together, the stories received more than one million views.
        </p>
        <div className="metric-line" aria-label="Journalism highlights">
          <span><strong>9</strong> feature stories</span>
          <span><strong>80–90</strong> interviewees</span>
          <span><strong>1M+</strong> views</span>
        </div>
        <Link href="/writing" className="button button--line">Explore writing</Link>
      </div>
      <article className="writing-preview-lead">
        <p className="entry-meta">{lead.publication} · {lead.year}</p>
        <h3>{lead.titleEn}</h3>
        <p lang="zh-CN">{lead.titleZh}</p>
        <strong>{lead.metrics}</strong>
        <a href={lead.link} target="_blank" rel="noreferrer">
          Read the article <span aria-hidden="true">↗</span>
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </article>
    </section>
  );
}
