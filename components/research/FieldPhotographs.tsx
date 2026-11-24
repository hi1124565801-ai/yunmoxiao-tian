"use client";

import { useState } from "react";
import { SmartImage } from "@/components/media/SmartImage";
import { fieldPhotographs } from "@/data/organizedVariation";

export function FieldPhotographs() {
  const [selected, setSelected] = useState(0);
  const shot = fieldPhotographs[selected];
  return (
    <section className="field-gallery" aria-labelledby="field-heading">
      <h3 id="field-heading">Field photographs</h3>
      <div className="outlet-selector" aria-label="Choose an outlet" role="group">
        {fieldPhotographs.map((photo, index) => (
          <button key={photo.id} type="button" aria-pressed={index === selected} onClick={() => setSelected(index)}>
            {photo.outlet}
          </button>
        ))}
      </div>
      <figure className="field-frame" aria-live="polite">
        <div className="field-image">
          <SmartImage key={shot.id} src={`/images/fieldwork/${shot.id}.webp`} alt={shot.alt} width={1250} height={940} />
        </div>
        <figcaption>
          <span className="field-place">{shot.location}</span>
          <strong>{shot.title}</strong>
          <p>{shot.caption}</p>
          <small>Field photograph by Yunmoxiao Tian</small>
        </figcaption>
      </figure>
    </section>
  );
}
