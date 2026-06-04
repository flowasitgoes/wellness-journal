import { notFound } from "next/navigation";
import { LocaleHtmlLang } from "@/components/locale-html-lang";
import { RoutePrefetcher } from "@/components/route-prefetcher";
import { SiteHeaderShell } from "@/components/site-header-shell";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();

  const dict = getDictionary(raw);

  return (
    <>
      <LocaleHtmlLang locale={raw} />
      <RoutePrefetcher locale={raw} />
      <div className="min-h-screen bg-page">
        <main className="mx-auto max-w-[1000px] px-5 py-10 sm:px-5 sm:py-14">
          <SiteHeaderShell locale={raw} dict={dict} />
          {children}
        </main>
      </div>
    </>
  );
}
