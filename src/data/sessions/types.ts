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

export type Session = {
  slug: string;
  dayNumber: number;
  date: string;
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
