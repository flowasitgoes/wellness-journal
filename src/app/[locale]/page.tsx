import { notFound } from "next/navigation";
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
  const sessions = getSessions(raw);

  return (
    <>
      <JsonLd data={websiteJsonLd(raw, dict)} />
      <p className="brand-tagline mb-6">{dict.nav.trainingSessions}</p>
      {sessions.map((session) => (
        <SessionEntry
          key={session.slug}
          session={session}
          locale={raw}
          dict={dict}
        />
      ))}
    </>
  );
}
