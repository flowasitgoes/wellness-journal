import { notFound } from "next/navigation";
import { NavLink } from "@/components/nav-link";
import { SessionDetailView } from "@/components/session-detail-view";
import { JsonLd } from "@/components/json-ld";
import { getAllSessionSlugs, getSessionBySlug } from "@/data/sessions";
import { isLocale, localePath, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { sessionArticleJsonLd, sessionMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return locales.flatMap((locale) =>
    getAllSessionSlugs().map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return { title: "Not found", robots: { index: false } };

  const dict = getDictionary(raw);
  const session = getSessionBySlug(slug, raw);
  if (!session) {
    return {
      title: dict.notFound.title,
      robots: { index: false, follow: false },
    };
  }
  return sessionMetadata(raw, session, dict);
}

export default async function SessionDetailPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();

  const dict = getDictionary(raw);
  const session = getSessionBySlug(slug, raw);

  if (!session) {
    notFound();
  }

  return (
    <>
      <JsonLd data={sessionArticleJsonLd(raw, session, dict)} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <NavLink
          href={localePath(raw)}
          className="inline-flex items-center text-sm font-medium text-brand-muted transition-colors duration-200 hover:text-brand"
        >
          {dict.nav.allEntries}
        </NavLink>
      </nav>
      <article>
        <SessionDetailView session={session} locale={raw} dict={dict} />
      </article>
    </>
  );
}
