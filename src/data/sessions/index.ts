import type { Locale } from "@/i18n/config";
import { enSessions } from "@/data/sessions/en";
import { zhSessions } from "@/data/sessions/zh";
import type { Session } from "@/data/sessions/types";

export type { Session, Exercise, BreathworkSection, ExperienceGroup, ThemeItem } from "@/data/sessions/types";

const byLocale = {
  en: enSessions,
  zh: zhSessions,
} as const;

export function getSessions(locale: Locale): Session[] {
  return byLocale[locale];
}

export function getSessionBySlug(slug: string, locale: Locale): Session | undefined {
  return getSessions(locale).find((s) => s.slug === slug);
}

export function getAllSessionSlugs(): string[] {
  return enSessions.map((s) => s.slug);
}
