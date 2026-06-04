import type { Metadata } from "next";
import type { Session } from "@/data/sessions/types";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { localePath, locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";

const MAX_DESCRIPTION = 160;

const ogLocaleMap: Record<Locale, string> = {
  en: "en_US",
  zh: "zh_TW",
};

export function truncateDescription(text: string): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= MAX_DESCRIPTION) return cleaned;
  return `${cleaned.slice(0, MAX_DESCRIPTION - 1).trim()}…`;
}

export function sessionDescription(session: Session, dict: Dictionary): string {
  return truncateDescription(
    `${session.summary} ${dict.session.focus}: ${session.focus}. ${session.duration}.`,
  );
}

function languageAlternates(
  pathWithoutLocale: string,
): NonNullable<Metadata["alternates"]>["languages"] {
  return Object.fromEntries(
    locales.map((loc) => [
      loc === "zh" ? "zh-Hant" : "en",
      absoluteUrl(localePath(loc, pathWithoutLocale)),
    ]),
  );
}

export function buildOpenGraph({
  title,
  description,
  locale,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  locale: Locale;
  path: string;
  type?: "website" | "article";
}): Metadata["openGraph"] {
  return {
    type,
    locale: ogLocaleMap[locale],
    url: absoluteUrl(path),
    title,
    description,
    siteName: siteConfig.name,
  };
}

export function buildTwitterCard({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata["twitter"] {
  return {
    card: "summary",
    title,
    description,
  };
}

export function rootMetadata(): Metadata {
  const title = siteConfig.name;
  const description = siteConfig.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s · ${siteConfig.name}`,
    },
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: buildOpenGraph({
      title,
      description,
      locale: "en",
      path: localePath("en"),
    }),
    twitter: buildTwitterCard({ title, description }),
  };
}

export function homeMetadata(locale: Locale, dict: Dictionary): Metadata {
  const title = `${siteConfig.name} — ${dict.meta.homeTitle}`;
  const description = dict.meta.siteDescription;
  const path = localePath(locale);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      languages: languageAlternates(""),
    },
    openGraph: buildOpenGraph({ title, description, locale, path }),
    twitter: buildTwitterCard({ title, description }),
  };
}

export function sessionMetadata(
  locale: Locale,
  session: Session,
  dict: Dictionary,
): Metadata {
  const title = formatSessionMetaTitle(session, locale);
  const description = sessionDescription(session, dict);
  const path = localePath(locale, `/sessions/${session.slug}`);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: languageAlternates(`/sessions/${session.slug}`),
    },
    openGraph: buildOpenGraph({
      title,
      description,
      locale,
      path,
      type: "article",
    }),
    twitter: buildTwitterCard({ title, description }),
  };
}

function formatSessionMetaTitle(session: Session, locale: Locale): string {
  if (locale === "zh") {
    return `第 ${session.dayNumber} 天：${session.title}`;
  }
  return `Day ${session.dayNumber}: ${session.title}`;
}

export function websiteJsonLd(locale: Locale, dict: Dictionary) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: dict.meta.siteDescription,
    url: absoluteUrl(localePath(locale)),
    inLanguage: locale === "zh" ? "zh-Hant" : "en",
  };
}

export function sessionArticleJsonLd(
  locale: Locale,
  session: Session,
  dict: Dictionary,
) {
  const path = localePath(locale, `/sessions/${session.slug}`);
  const sections =
    locale === "zh"
      ? ["功能性訓練", "呼吸練習", "反思"]
      : ["Functional Training", "Breathwork", "Reflection"];

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: session.title,
    name: formatSessionMetaTitle(session, locale),
    description: sessionDescription(session, dict),
    datePublished: session.date,
    dateModified: session.date,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    keywords: session.focus,
    articleSection: sections.join(", "),
    inLanguage: locale === "zh" ? "zh-Hant" : "en",
  };
}
