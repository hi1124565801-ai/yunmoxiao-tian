import Link from "next/link";
import { independentEssays } from "@/data/independentEssays";

export function WeChatEssays() {
  const [conversation, eating, photography] = independentEssays;
  return (
    <section id="bingkuai-xiawu" className="wechat-issue section-pad" aria-labelledby="wechat-title">
      <header className="wechat-masthead">
        <div>
          <h2 id="wechat-title" lang="zh-CN">冰块下午</h2>
          <p>The Afternoon of Ice · Personal essays on WeChat</p>
        </div>
        <p>I borrowed the name from the afternoon of discovering ice in <em>One Hundred Years of Solitude</em>. I write here in Chinese about things that ask us to slow down: a meal, a conversation, a photograph.</p>
      </header>
      <div className="wechat-columns">
        <section aria-labelledby="everyday-essays">
          <h3 id="everyday-essays">The old-fashioned pair</h3>
          {[conversation, eating].map((essay) => <EssayLink key={essay.id} essay={essay} />)}
        </section>
        <section aria-labelledby="photo-essay">
          <h3 id="photo-essay">On looking</h3>
          <EssayLink essay={photography} />
          <Link prefetch={false} className="essay-related" href="/photography">Explore my photographs →</Link>
        </section>
      </div>
    </section>
  );
}

function EssayLink({ essay }: { essay: (typeof independentEssays)[number] }) {
  return (
    <article className="wechat-story" id={essay.id}>
      <a href={essay.link} target="_blank" rel="noreferrer">
        <span lang="zh-CN">{essay.titleZh.slice(1, -1)}</span>
        <span aria-hidden="true">↗</span>
        <span className="sr-only"> (read on WeChat, opens in a new tab)</span>
      </a>
      <p className="essay-translation">{essay.titleEn}</p>
      <p>{essay.summary}</p>
    </article>
  );
}
