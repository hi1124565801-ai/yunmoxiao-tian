import { internationalExperiences } from "@/data/internationalExperiences";
import { InternationalExperienceMap } from "./InternationalExperienceMap";

export function InternationalExperience() {
  return (
    <section
      className="international-experience international-experience--compact section-pad"
      aria-labelledby="international-heading"
    >
      <div className="section-head">
        <div>
          <p className="section-kicker">International Academic Experience</p>
          <h2 id="international-heading">Selected research and study contexts</h2>
        </div>
        <p>A concise record; project details remain on the Research page.</p>
      </div>
      <InternationalExperienceMap experiences={internationalExperiences} />
    </section>
  );
}
