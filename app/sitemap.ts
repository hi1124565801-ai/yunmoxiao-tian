import type { MetadataRoute } from "next";
import { canonicalUrl, indexedPages } from "@/config/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexedPages.map((page) => ({
    url: canonicalUrl(page.path),
    changeFrequency: page.path === "/" ? "monthly" : "yearly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
