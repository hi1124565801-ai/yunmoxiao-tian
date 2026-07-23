import { honors } from "@/data/honors";

export function Honors() {
  return (
    <section className="honors section-pad" aria-labelledby="honors-heading">
      <div>
        <p className="section-kicker">Honors</p>
        <h2 id="honors-heading">Selected recognition at Peking University</h2>
      </div>
      <ol>
        {honors.map((honor, index) => (
          <li key={`${honor.title}-${honor.dates}`}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{honor.title}</strong>
            <time>{honor.dates}</time>
          </li>
        ))}
      </ol>
    </section>
  );
}
