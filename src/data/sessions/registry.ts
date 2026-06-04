import { day06 } from "@/data/sessions/day06";
import type { BilingualSession, Session } from "@/data/sessions/types";
import type { Locale } from "@/i18n/config";

/** All sessions — add new bilingual entries here */
export const sessionRegistry: BilingualSession[] = [day06];

export function resolveSession(
  entry: BilingualSession,
  locale: Locale,
): Session {
  return {
    slug: entry.slug,
    dayNumber: entry.dayNumber,
    date: entry.date,
    ...entry.content[locale],
  };
}

export function getAlternateLocalePaths(
  slug: string,
  currentLocale: Locale,
): { locale: Locale; path: string }[] {
  const entry = sessionRegistry.find((s) => s.slug === slug);
  if (!entry) return [];

  return (["en", "zh"] as Locale[])
    .filter((loc) => loc !== currentLocale)
    .map((loc) => ({
      locale: loc,
      path: `/${loc}/sessions/${slug}`,
    }));
}
