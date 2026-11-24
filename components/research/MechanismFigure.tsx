"use client";

import { useState } from "react";
import { SmartImage } from "@/components/media/SmartImage";

export function MechanismFigure() {
  const [enlarged, setEnlarged] = useState(false);
  return (
    <figure className="mechanism">
      <div className="mechanism-heading">
        <h3>How organized variation works</h3>
        <button type="button" aria-pressed={enlarged} aria-controls="figure-scroll" onClick={() => setEnlarged(!enlarged)}>
          {enlarged ? "Fit to width" : "Enlarge figure"}
        </button>
      </div>
      <div className="diagram-scroll" id="figure-scroll" data-enlarged={enlarged} tabIndex={enlarged ? 0 : undefined} role="region" aria-label="Mechanism diagram">
        <SmartImage src="/images/fieldwork/mechanism.webp" alt="Across outlets, repeated roles meet different skills and staff support. Over time, participation changes relationships and access, leading staff to recruit and coordinate the next round." width={1752} height={897} />
      </div>
      <figcaption>Figure 1 from the study. Read across the top to follow a shift, event, or notebook entry from invitation to contribution. The lower loop follows what happens next: skills and friendships accumulate, access changes, and staff organize another round.</figcaption>
    </figure>
  );
}
