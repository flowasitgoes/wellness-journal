import { BrandSmiley } from "@/components/brand-mark";
import { LanguageSwitcher } from "@/components/language-switcher";
import { NavLink } from "@/components/nav-link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";

type SiteHeaderProps = {
  locale: Locale;
  dict: Dictionary;
  showHero?: boolean;
};

export function SiteHeader({ locale, dict, showHero = false }: SiteHeaderProps) {
  return (
    <div className="relative mb-2">
      <div className="absolute right-0 top-0 z-10">
        <LanguageSwitcher locale={locale} labels={dict.lang} />
      </div>

      <header className={showHero ? "mb-10 pt-12 text-center sm:mb-12 sm:pt-14" : "mb-8 pt-12"}>
        <NavLink
          href={localePath(locale)}
          className={`inline-block ${showHero ? "w-full" : ""}`}
        >
          {showHero ? (
            <div className="flex flex-col items-center">
              <h1 className="font-display text-[2.75rem] font-bold lowercase leading-none tracking-tight text-brand sm:text-[3.5rem]">
                journal
              </h1>
              <div className="mt-4 flex w-full max-w-md items-center gap-3">
                <div className="brand-divider flex-1" />
                <BrandSmiley />
              </div>
              <p className="brand-tagline brand-tagline--hero mt-4">
                {dict.header.tagline}
              </p>
            </div>
          ) : (
            <span className="font-display text-2xl font-bold lowercase text-brand">
              journal
            </span>
          )}
        </NavLink>
        {showHero && (
          <p className="home-hero-intro mt-8 max-w-lg text-[0.9375rem] leading-relaxed text-muted sm:mx-auto">
            {dict.header.heroLine1}
            <br />
            {dict.header.heroLine2}
          </p>
        )}
      </header>
    </div>
  );
}
