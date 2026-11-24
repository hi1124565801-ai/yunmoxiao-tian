import { honors } from "@/data/honors";

export function Honors() {
  return (
    <details className="profile-details">
      <summary>Selected honors</summary>
      <ul className="honor-list">
        {honors.map((honor) => (
          <li key={honor.title}>
            <span>{honor.title}</span>
            <span>{honor.dates}</span>
          </li>
        ))}
      </ul>
    </details>
  );
}
