export const siteConfig = {
  name: "Wellness Journal",
  tagline: "Breathwork & Fitness · Training Log",
  description:
    "A personal wellness training journal documenting functional pattern training, breathwork, and mindful reflection—aligned with integrated movement practice.",
  locale: "en_US",
  language: "en",
  /** Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com) */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "http://localhost:3000",
  keywords: [
    "wellness journal",
    "functional training",
    "breathwork",
    "soma breath",
    "movement practice",
    "Kaohsiung",
    "Fuerza Happy",
    "core stability",
    "glute activation",
  ],
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
