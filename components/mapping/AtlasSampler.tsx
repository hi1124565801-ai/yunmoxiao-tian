"use client";

import { useState } from "react";

const readings = [
  {
    city: "Beijing",
    work: "城南旧事",
    author: "Lin Haiyin · 林海音",
    stops: [
      { name: "Xinlianzi Hutong", local: "新帘子胡同", note: "Yingzi recalls the shape of a spoon. Seen through a child’s eyes, the bend in a hutong becomes a way to remember the city.", lat: 39.9007, lon: 116.3833 },
      { name: "Hufangqiao", local: "虎坊桥大街", note: "This street runs through the recollections behind the Aunt Lan chapter. Pinning it to a map brings an ordinary childhood address back into view.", lat: 39.889, lon: 116.384 },
      { name: "Tianqiao", local: "天桥", note: "Niu’er describes singing at Tianqiao with listeners gathered in a circle. Her memory gives the place a sound as well as a location.", lat: 39.8822, lon: 116.398 },
    ],
  },
  {
    city: "London",
    work: "Mrs. Dalloway",
    author: "Virginia Woolf",
    stops: [
      { name: "Big Ben", local: "Westminster", note: "A striking clock can be heard by people who never meet. Its chimes let Woolf move between private thoughts while keeping the whole city inside one day.", lat: 51.5007042, lon: -0.1245721 },
      { name: "Bond Street", local: "Mayfair", note: "Clarissa’s morning errand takes her past the shop windows. The things on display prompt her to think about how she appears to other people.", lat: 51.5135348, lon: -0.1470905 },
      { name: "Hatchards", local: "Piccadilly", note: "Shakespeare’s words in the bookshop window interrupt Clarissa’s walk. For a moment, a public street becomes a place to think about loss.", lat: 51.5084753, lon: -0.1380491 },
    ],
  },
] as const;

export function AtlasSampler() {
  const [city, setCity] = useState(0);
  const [selected, setSelected] = useState(0);
  const reading = readings[city];
  const place = reading.stops[selected];
  const lats = reading.stops.map((stop) => stop.lat);
  const lons = reading.stops.map((stop) => stop.lon);
  return (
    <section className="atlas-sampler section-pad" aria-labelledby="sampler-heading">
      <div className="atlas-controls">
        <h2 id="sampler-heading">A city in three passages</h2>
        <div className="outlet-selector" role="group" aria-label="Choose a book and city">
          {readings.map((item, index) => (
            <button key={item.city} type="button" aria-pressed={index === city} onClick={() => { setCity(index); setSelected(0); }}>{item.city} · {item.work}</button>
          ))}
        </div>
      </div>
      <div className="atlas-spread">
        <div className="atlas-chart" role="group" aria-label={reading.city + " location sketch, north up"}>
          <span className="atlas-orientation">N ↑</span>
          {reading.stops.map((stop, index) => {
            const left = 16 + 68 * (stop.lon - Math.min(...lons)) / (Math.max(...lons) - Math.min(...lons));
            const top = 18 + 64 * (Math.max(...lats) - stop.lat) / (Math.max(...lats) - Math.min(...lats));
            return (
              <button key={stop.name} type="button" style={{left: left + "%", top: top + "%"}} className="atlas-pin" onClick={() => setSelected(index)} aria-label={stop.name} aria-pressed={selected === index}>
                {index + 1}
              </button>
            );
          })}
          <span className="atlas-chart-label">{reading.city} · Location sketch</span>
        </div>
        <div className="atlas-leaf">
          <p className="atlas-byline"><em>{reading.work}</em> · {reading.author}</p>
          <div className="atlas-stop-list" role="group" aria-label="Choose a passage">
            {reading.stops.map((stop, index) => <button key={stop.name} type="button" onClick={() => setSelected(index)} aria-pressed={selected === index}>{index + 1}. {stop.name}</button>)}
          </div>
          <div aria-live="polite">
            <h3>{place.name} <small>{place.local}</small></h3>
            <p>{place.note}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
