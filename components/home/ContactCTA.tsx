import { siteConfig } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="contact-cta section-pad" aria-labelledby="contact-heading">
      <p className="section-kicker">Contact</p>
      <h2 id="contact-heading">Research conversations and academic enquiries</h2>
      <p>
        I welcome conversations about sociology, culture, organizations, media,
        qualitative research, and prospective academic opportunities.
      </p>
      <div>
        <a className="button button--light" href={`mailto:${siteConfig.academicEmail}`}>
          {siteConfig.academicEmail}
        </a>
        <a className="button button--light-line" href={siteConfig.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <span className="sr-only">(opens in a new tab)</span>
        </a>
        <a className="button button--light-line" href={siteConfig.cvUrl} download>Download CV</a>
      </div>
    </section>
  );
}
