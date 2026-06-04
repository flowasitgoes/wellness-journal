"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: Dictionary["lang"];
};

function pathWithLocale(pathname: string, target: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && locales.includes(segments[0] as Locale)) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }

  return `/${segments.join("/")}`;
}

export function LanguageSwitcher({ locale, labels }: LanguageSwitcherProps) {
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-1 rounded-full border border-border bg-card/80 p-1 text-sm backdrop-blur-sm"
      role="navigation"
      aria-label="Language"
    >
      {locales.map((loc) => {
        const active = loc === locale;
        return (
          <Link
            key={loc}
            href={pathWithLocale(pathname, loc)}
            className={`rounded-full px-3 py-1 font-medium transition-colors ${
              active
                ? "bg-brand text-on-brand"
                : "text-muted hover:text-brand"
            }`}
            aria-current={active ? "page" : undefined}
            hrefLang={loc === "zh" ? "zh-Hant" : "en"}
          >
            {labels[loc]}
          </Link>
        );
      })}
    </div>
  );
}
