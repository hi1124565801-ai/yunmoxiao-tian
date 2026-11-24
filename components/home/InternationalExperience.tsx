import { internationalExperiences } from "@/data/internationalExperiences";
import { InternationalExperienceMap } from "./InternationalExperienceMap";

export function InternationalExperience() {
  return (
    <details className="profile-details">
      <summary>Academic experience</summary>
      <InternationalExperienceMap experiences={internationalExperiences} />
    </details>
  );
}
