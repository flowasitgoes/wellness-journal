import type { Metadata } from "next";
import Link from "next/link";
import { LocaleHtmlLang } from "@/components/locale-html-lang";
import { SiteHeader } from "@/components/site-header";
import { JournalCard } from "@/components/journal-card";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export const metadata: Metadata = {
  title: "Session not found",
  robots: { index: false, follow: false },
};

export default function SessionNotFound() {
  const locale = defaultLocale;
  const dict = getDictionary(locale);

  return (
    <div className="min-h-screen bg-page">
      <LocaleHtmlLang locale={locale} />
      <main className="mx-auto max-w-[1000px] px-5 py-10">
        <SiteHeader locale={locale} dict={dict} />
        <JournalCard>
          <h1 className="mt-0 font-display text-xl font-bold text-brand">
            {dict.notFound.title}
          </h1>
          <p className="mt-3 text-muted">{dict.notFound.body}</p>
          <Link
            href={localePath(locale)}
            className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-on-brand hover:bg-brand-dark"
          >
            {dict.notFound.back}
          </Link>
        </JournalCard>
      </main>
    </div>
  );
}
