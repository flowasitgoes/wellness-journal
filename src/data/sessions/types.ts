import type { Locale } from "@/i18n/config";

export type Exercise = {
  name: string;
  volume?: string;
  focus: string;
  cues: string[];
};

export type BreathworkSection = {
  title: string;
  items: string[];
};

export type ExperienceGroup = {
  title: string;
  items: string[];
};

export type ThemeItem = {
  label: string;
  text: string;
};

/** Locale-specific copy for a session */
export type SessionContent = {
  duration: string;
  title: string;
  summary: string;
  focus: string;
  structure: string[];
  exercises: Exercise[];
  breathwork: BreathworkSection[];
  experience: ExperienceGroup[];
  themes: ThemeItem[];
  reflection: string;
};

/** Shared metadata + per-locale content (single source of truth) */
export type BilingualSession = {
  slug: string;
  dayNumber: number;
  date: string;
  content: Record<Locale, SessionContent>;
};

/** Resolved session for rendering */
export type Session = {
  slug: string;
  dayNumber: number;
  date: string;
} & SessionContent;
