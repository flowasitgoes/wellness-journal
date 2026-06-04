import type { MetadataRoute } from "next";
import { getAllSessionSlugs } from "@/data/sessions";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { localePath, locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: absoluteUrl(localePath(locale)),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    });

    for (const slug of getAllSessionSlugs()) {
      entries.push({
        url: absoluteUrl(localePath(locale, `/sessions/${slug}`)),
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
