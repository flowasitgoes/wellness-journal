import {
  resolveSession,
  sessionRegistry,
} from "@/data/sessions/registry";
import type { Session } from "@/data/sessions/types";
import type { Locale } from "@/i18n/config";

export type {
  Session,
  SessionContent,
  BilingualSession,
  Exercise,
  BreathworkSection,
  ExperienceGroup,
  ThemeItem,
} from "@/data/sessions/types";

export { sessionRegistry, resolveSession, getAlternateLocalePaths } from "@/data/sessions/registry";

export function getSessions(locale: Locale): Session[] {
  return sessionRegistry
    .map((entry) => resolveSession(entry, locale))
    .sort((a, b) => b.dayNumber - a.dayNumber);
}

export function getSessionBySlug(
  slug: string,
  locale: Locale,
): Session | undefined {
  const entry = sessionRegistry.find((s) => s.slug === slug);
  if (!entry) return undefined;
  return resolveSession(entry, locale);
}

export function getAllSessionSlugs(): string[] {
  return sessionRegistry.map((s) => s.slug);
}
