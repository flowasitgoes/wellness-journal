"use client";

import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";

type SiteHeaderShellProps = {
  locale: Locale;
  dict: Dictionary;
};

export function SiteHeaderShell({ locale, dict }: SiteHeaderShellProps) {
  const pathname = usePathname();
  const homePath = localePath(locale);
  const showHero =
    pathname === homePath || pathname === `${homePath}/`;

  return <SiteHeader locale={locale} dict={dict} showHero={showHero} />;
}
