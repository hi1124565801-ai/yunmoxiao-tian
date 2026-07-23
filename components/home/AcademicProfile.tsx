import { researchInterests } from "@/data/site";

export function AcademicProfile() {
  return (
    <section className="academic-profile section-pad" aria-labelledby="academic-profile-heading">
      <div className="section-index" aria-hidden="true">01</div>
      <div>
        <p className="section-kicker">Academic Profile</p>
        <h2 id="academic-profile-heading">Literary training in conversation with sociology.</h2>
      </div>
      <div className="academic-profile-copy">
        <p>
          My academic training brings literary and cultural analysis into conversation
          with sociological research. I am interested in how organizations reproduce
          social experiences, how consumer and cultural meanings are negotiated, and
          how media and digital platforms reshape everyday life.
        </p>
        <p>
          My work draws on qualitative fieldwork, interviews, textual and visual
          analysis, and, where appropriate, computational and mixed methods.
        </p>
        <div className="interest-list" aria-label="Research interests">
          {researchInterests.map((interest, index) => (
            <span key={interest}><i>{String(index + 1).padStart(2, "0")}</i>{interest}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
