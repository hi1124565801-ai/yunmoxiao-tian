import type { MetadataRoute } from "next";
import { canonicalUrl, indexedPages } from "@/config/seo";
import { editionIds } from "@/data/readingEditions";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = indexedPages.map((page) => ({
    url: canonicalUrl(page.path),
    changeFrequency: page.path === "/" ? "monthly" : "yearly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
  return [...pages, ...editionIds.map(slug => ({ url: canonicalUrl(`/writing/${slug}`) }))];
}
