"use client";

import { useState } from "react";
import { SmartImage } from "@/components/media/SmartImage";
import { atlasReadings } from "@/data/atlasReadings";

export function AtlasSampler() {
  const [bookIndex, setBookIndex] = useState(0);
  const [selected, setSelected] = useState(0);
  const [walking, setWalking] = useState(false);
  const book = atlasReadings[bookIndex];
  const order: readonly number[] = walking ? book.walk : [0, 1, 2];
  const stop = book.stops[selected];

  return (
    <section className="atlas-edition section-pad" aria-label="Explore three books from the atlas">
      <div className="book-shelf" role="group" aria-label="Choose a book">
        {atlasReadings.map((item, i) => (
          <button type="button" key={item.id} aria-pressed={i === bookIndex} onClick={() => { setBookIndex(i); setSelected(walking ? item.walk[0] : 0); }}>
            <SmartImage src={`/images/projects/atlas/${item.id}-cover.webp`} alt="" width={48} height={64} />
            <span><small>{item.city}</small><strong>{item.work}</strong><span>{item.author}</span></span>
          </button>
        ))}
      </div>
      <div className="reading-table">
        <div className="map-column">
          <h2>{book.question}</h2>
          <div className="street-plate" role="group" aria-label={book.city + " map, north up"}>
            <SmartImage key={book.id} src={`/images/projects/atlas/${book.id}-map.webp`} alt="" width={640} height={400} />
            {book.stops.map((place, i) => (
              <button type="button" key={place.name} className="edition-pin" style={{left: place.x + "%", top: place.y + "%"}} aria-pressed={i === selected} aria-label={place.name} onClick={() => setSelected(i)}>{order.indexOf(i) + 1}</button>
            ))}
            <span className="map-credit"><a href="https://openfreemap.org/">OpenFreeMap</a> · <a href="https://openmaptiles.org/">OpenMapTiles</a> · <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap</a></span>
          </div>
          <div className="route-editor">
            <div className="edition-switch" role="group" aria-label="Order the stops">
              <button type="button" aria-pressed={!walking} onClick={() => setWalking(false)}>Book order</button>
              <button type="button" aria-pressed={walking} onClick={() => setWalking(true)}>Walk order</button>
            </div>
            <ol className="route-stops">
              {order.map((i) => <li key={i}><button type="button" aria-pressed={i === selected} onClick={() => setSelected(i)}>{book.stops[i].name}</button></li>)}
            </ol>
          </div>
        </div>
        <article className="scene-leaf" aria-live="polite" aria-atomic="true">
          <div className="leaf-place">{book.city} <span>{stop.local}</span></div>
          <h3>{stop.name}</h3>
          <p className="scene-line" lang={stop.sceneLang}>{stop.scene}</p>
          <p>{stop.reading}</p>
          <div className="ground-note"><h4>On today’s map <span>{stop.precision}</span></h4><p>{stop.ground}</p></div>
        </article>
      </div>
    </section>
  );
}
