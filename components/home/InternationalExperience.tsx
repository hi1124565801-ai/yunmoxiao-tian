import { internationalExperiences } from "@/data/internationalExperiences";

export function InternationalExperience() {
  return (
    <section className="international-experience section-pad" aria-labelledby="international-heading">
      <div className="section-head">
        <div>
          <p className="section-kicker">International Academic Experience</p>
          <h2 id="international-heading">Research and study across institutions</h2>
        </div>
        <p>Five academic contexts across Europe, North America, and Asia.</p>
      </div>
      <div className="experience-timeline">
        {internationalExperiences.map((experience, index) => (
          <article key={experience.institution}>
            <span className="entry-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="experience-place">
              <h3>{experience.institution}</h3>
              <p>{experience.role}</p>
            </div>
            <p>{experience.description}</p>
            <div className="experience-date">
              <span>{experience.location}</span>
              <strong>{experience.dates}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
