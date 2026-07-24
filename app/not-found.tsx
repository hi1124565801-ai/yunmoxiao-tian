import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
  title: {
    absolute: "Page Not Found | Yunmoxiao Tian 田云墨筱",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="page-hero page-hero--academic">
        <p className="section-kicker">404</p>
        <h1>Page not found</h1>
        <p>
          This page is not part of Yunmoxiao Tian’s public archive. Return to the
          homepage to continue browsing research, writing, photography, and
          literary mapping.
        </p>
        <p>
          <Link className="button button--solid" href="/">
            Return home
          </Link>
        </p>
      </section>
    </PageShell>
  );
}
