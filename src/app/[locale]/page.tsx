import { notFound } from "next/navigation";
import { LocaleHtmlLang } from "@/components/locale-html-lang";
import { SiteHeader } from "@/components/site-header";
import { SessionEntry } from "@/components/session-entry";
import { JsonLd } from "@/components/json-ld";
import { getSessions } from "@/data/sessions";
import { isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { homeMetadata, websiteJsonLd } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  return homeMetadata(raw, getDictionary(raw));
}

export default async function HomePage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const dict = getDictionary(raw);
  const sorted = [...getSessions(raw)].sort((a, b) => b.dayNumber - a.dayNumber);

  return (
    <div className="min-h-screen bg-page">
      <LocaleHtmlLang locale={raw} />
      <JsonLd data={websiteJsonLd(raw, dict)} />
      <main className="mx-auto max-w-[1000px] px-5 py-10 sm:px-5 sm:py-14">
        <SiteHeader locale={raw} dict={dict} showHero />
        <p className="brand-tagline mb-6">{dict.nav.trainingSessions}</p>
        {sorted.map((session) => (
          <SessionEntry
            key={session.slug}
            session={session}
            locale={raw}
            dict={dict}
          />
        ))}
      </main>
    </div>
  );
}
