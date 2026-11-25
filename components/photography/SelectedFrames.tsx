"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SmartImage } from "@/components/media/SmartImage";
import { PhotoLightbox } from "@/components/photography/PhotoLightbox";
import { photographyLocations } from "@/data/photographyLocations";

function frame(id: string, index: number, note: string) {
  const location = photographyLocations.find((item) => item.id === id);
  if (!location?.photos[index]) throw new Error(`Missing photograph: ${id}/${index}`);
  return { location, index, photo: location.photos[index], place: location.coordinates ? location.city : location.country, note };
}

const rolls = [
  { title: "After dark", frames: [
    frame("barcelona", 1, "Red reaches the eye first. Give it another moment and two faces emerge behind the crossing lines."),
    frame("copenhagen", 2, "An empty bicycle takes the brightest spot on the pavement. Amber light makes it feel as if its rider has only just stepped away."),
    frame("kyoto", 0, "The red columns pull the eye in from both edges. Between them the little points of light go on and on."),
  ] },
  { title: "The water’s edge", frames: [
    frame("sri-lanka", 2, "Watch the figures in the surf. Each body gives the breaking wave a slightly different height."),
    frame("tromso", 1, "Along the dark water, snow picks out the edge of every rock. The shoreline reads like a drawing in two colours."),
    frame("egypt", 0, "The viewpoint slips underwater. The brightest edge in the photograph is now overhead."),
  ] },
  { title: "In passing", frames: [
    frame("jeju", 2, "Laundry cuts across the sky. Underneath, a cyclist has just enough room to ride through the picture."),
    frame("amsterdam", 1, "A bicycle and its rider pass through a narrow piece of evening light. The street seems to hold still around them."),
    frame("budapest", 2, "The bridge draws a line into the pink sky. A passing figure keeps the eye down at street level."),
  ] },
  { title: "Through the glass", frames: [
    frame("beijing", 0, "Trees enter the room as blocks of green. Look for the edges where the window divides them."),
    frame("kuala-lumpur", 0, "Rain softens the outline of the white building. The drops are closer to the camera than anything we are trying to see."),
    frame("busan", 2, "The small figures face out from the display. Hanging pieces of glass break the street beyond into bright fragments."),
  ] },
  { title: "Looking down", frames: [
    frame("tokyo", 0, "From above, lights and signs stack up around a strip of street. Try following that strip all the way through the frame."),
    frame("copenhagen", 3, "The blue stair curls around a dark centre. The descent happens in the eye before it happens anywhere else."),
    frame("krakow", 2, "The intersecting lines hold a figure against the dark. With the ground out of view, even the direction of a fall feels uncertain."),
  ] },
];
const prints = rolls.flatMap((roll) => roll.frames);
type Print = (typeof prints)[number];

function PrintImage({ print, thumb, paired }: { print: Print; thumb?: boolean; paired?: boolean }) {
  let sizes = "(max-width: 750px) 90vw, min(72vw, 800px)";
  if (thumb) sizes = "64px";
  else if (paired) sizes = "min(44vw, 510px)";
  return (
    <SmartImage
      key={print.photo.src}
      src={print.photo.src}
      alt={thumb ? "" : print.photo.alt}
      width={thumb ? 144 : 900}
      height={thumb ? 96 : 650}
      sizes={sizes}
      priority={!thumb && !paired}
    />
  );
}

export function SelectedFrames() {
  const [mode, setMode] = useState<"series" | "pair">("series");
  const [rollIndex, setRollIndex] = useState(0);
  const [position, setPosition] = useState(0);
  const [pair, setPair] = useState<[Print, Print]>([prints[0], prints[1]]);
  const [side, setSide] = useState<0 | 1>(0);
  const [active, setActive] = useState<Print | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const roll = rolls[rollIndex];
  const current = roll.frames[position];

  useEffect(() => {
    function followHash() {
      const hash = window.location.hash;
      if (!hash.startsWith("#frame-")) return;
      for (const [i, item] of rolls.entries()) {
        const j = item.frames.findIndex((print) => hash === "#frame-" + print.location.id);
        if (j >= 0) {
          setMode("series"); setRollIndex(i); setPosition(j);
          document.getElementById("photo-edit")?.scrollIntoView();
          return;
        }
      }
    }
    followHash();
    window.addEventListener("hashchange", followHash);
    return () => window.removeEventListener("hashchange", followHash);
  }, []);

  const close = useCallback(() => { setActive(null); opener.current?.focus(); }, []);
  function fullPrint(print: Print) {
    return <button className="mounted-print" type="button" aria-label={`Enlarge photograph from ${print.place}`} onClick={(e) => { opener.current = e.currentTarget; setActive(print); }}><PrintImage print={print} paired={mode === "pair"} /></button>;
  }

  return (
    <div id="photo-edit" className="photo-edit">
      <div className="edition-switch photo-mode" role="group" aria-label="Photography view">
        <button type="button" aria-pressed={mode === "series"} onClick={() => setMode("series")}>Photo essays</button>
        <button type="button" aria-pressed={mode === "pair"} onClick={() => setMode("pair")}>Make a diptych</button>
      </div>
      {mode === "series" ? (
        <div className="essay-workbench">
          <div className="roll-index" role="group" aria-label="Choose a photo essay">
            {rolls.map((item, i) => <button type="button" key={item.title} aria-pressed={rollIndex === i} onClick={() => { setRollIndex(i); setPosition(0); }}>
              <PrintImage print={item.frames[0]} thumb /><span>{item.title}</span>
            </button>)}
          </div>
          <article className="print-spread">
            {fullPrint(current)}
            <div className="print-notes">
              <div aria-live="polite"><small>{roll.title} · {position + 1} of {roll.frames.length}</small><h2>{current.place}</h2><p>{current.note}</p></div>
              <div className="proof-strip" role="group" aria-label={`Photographs in ${roll.title}`}>
                {roll.frames.map((print, i) => <button type="button" key={print.photo.src} aria-pressed={i === position} aria-label={`View ${print.place}, photograph ${i + 1}`} onClick={() => setPosition(i)}><PrintImage print={print} thumb /></button>)}
              </div>
            </div>
          </article>
        </div>
      ) : (
        <section className="diptych-desk" aria-label="Make a diptych">
          <p>Choose a side, then a photograph from the contact sheet.</p>
          <div className="diptych-prints">
            {pair.map((print, i) => <figure key={i} data-editing={side === i}>{fullPrint(print)}<figcaption>
              <button type="button" aria-pressed={side === i} onClick={() => setSide(i === 0 ? 0 : 1)}>{i === 0 ? "Edit left" : "Edit right"}</button><span aria-live="polite">{print.place}</span>
            </figcaption></figure>)}
          </div>
          <div className="contact-rack" role="group" aria-label={`Choose a photograph for the ${side === 0 ? "left" : "right"} side`}>
            {prints.map((print) => <button type="button" key={print.photo.src} aria-pressed={pair[side] === print} aria-label={`${print.place}: ${print.photo.alt}`} onClick={() => setPair(side === 0 ? [print, pair[1]] : [pair[0], print])}><PrintImage print={print} thumb /></button>)}
          </div>
        </section>
      )}
      {active && <PhotoLightbox location={active.location} initialIndex={active.index} onClose={close} />}
    </div>
  );
}
