import { redirect } from "next/navigation";
import { withBasePath } from "@/lib/sitePath";

export function CompatibilityRedirect({ href, label }: { href: string; label: string }) {
  if (!process.env.NEXT_PUBLIC_SITE_BASE_PATH) redirect(href);
  const destination = withBasePath(href);
  return (
    <main>
      <meta httpEquiv="refresh" content={`0; url=${destination}`} />
      <p><a href={destination}>Continue to {label}</a></p>
    </main>
  );
}
