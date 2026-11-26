"use client";

import { useEffect, useState, type MouseEvent, type ReactNode } from "react";

const sections = [
  { id: "magazine-reporting", label: "Magazine reporting", source: "人物 · 每日人物" },
  { id: "personal-essays", label: "Personal essays", source: "冰块下午 · WeChat" },
  { id: "campus-stories", label: "Campus stories", source: "Peking University" },
] as const;

type SectionId = (typeof sections)[number]["id"];

export function WritingIndex({ panels }: { panels: Record<SectionId, ReactNode> }) {
  // Before hydration all three sections and their ordinary anchor links are usable.
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    let frame = 0;
    function followLocation() {
      const target = document.getElementById(window.location.hash.slice(1));
      const panel = target?.closest<HTMLElement>("[data-writing-section]");
      const section = sections.find(item => item.id === panel?.id);
      setActive(section?.id ?? "magazine-reporting");
      cancelAnimationFrame(frame);
      if (target && section) {
        const disclosure = target.closest("details");
        if (disclosure) disclosure.open = true;
        const destination = target === panel ? document.getElementById("writing-sections") : target;
        frame = requestAnimationFrame(() => destination?.scrollIntoView({ block: "start" }));
      }
    }
    followLocation();
    window.addEventListener("hashchange", followLocation);
    window.addEventListener("popstate", followLocation);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", followLocation);
      window.removeEventListener("popstate", followLocation);
    };
  }, []);

  function choose(event: MouseEvent<HTMLAnchorElement>, id: SectionId) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    if (window.location.hash !== "#" + id) window.history.pushState(null, "", "#" + id);
    setActive(id);
  }

  return (
    <>
      <nav id="writing-sections" className="writing-sections" aria-label="Writing sections">
        {sections.map(({ id, label, source }) => (
          <a key={id} href={"#" + id} id={"choose-" + id} aria-controls={id}
            aria-current={(active ?? "magazine-reporting") === id ? "location" : undefined}
            onClick={event => choose(event, id)}>
            <strong>{label}</strong><small>{source}</small>
          </a>
        ))}
      </nav>
      {sections.map(({ id, label }) => (
        <section key={id} id={id} data-writing-section="" aria-label={label} hidden={active !== null && active !== id}>
          {panels[id]}
          <div className="writing-return">
            <a href="#writing-sections" onClick={event => {
              if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
              event.preventDefault();
              document.getElementById("writing-sections")?.scrollIntoView({ block: "start" });
              document.getElementById("choose-" + id)?.focus({ preventScroll: true });
            }}>↑ Back to writing sections</a>
          </div>
        </section>
      ))}
    </>
  );
}
