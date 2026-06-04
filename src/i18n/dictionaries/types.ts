export type Dictionary = {
  meta: {
    siteDescription: string;
    homeTitle: string;
  };
  lang: {
    en: string;
    zh: string;
  };
  nav: {
    allEntries: string;
    viewSession: string;
    trainingSessions: string;
  };
  header: {
    tagline: string;
    heroLine1: string;
    heroLine2: string;
  };
  session: {
    date: string;
    duration: string;
    focus: string;
    sessionStructure: string;
    part1: string;
    part2: string;
    personalExperience: string;
    mainTheme: string;
    reflection: string;
    dayReflection: string;
    volume: string;
    focusLabel: string;
  };
  notFound: {
    title: string;
    body: string;
    back: string;
  };
};
