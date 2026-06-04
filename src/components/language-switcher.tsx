"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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

function navigateWithFade(href: string, router: ReturnType<typeof useRouter>) {
  if (typeof document !== "undefined" && document.startViewTransition) {
    document.startViewTransition(() => {
      router.push(href);
    });
    return;
  }
  router.push(href);
}

export function LanguageSwitcher({ locale, labels }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-border bg-card/80 p-0.5 text-[0.6875rem] tracking-wide backdrop-blur-sm"
      role="navigation"
      aria-label="Language"
    >
      {locales.map((loc) => {
        const active = loc === locale;
        const href = pathWithLocale(pathname, loc);

        return (
          <Link
            key={loc}
            href={href}
            onClick={(e) => {
              if (active) return;
              e.preventDefault();
              navigateWithFade(href, router);
            }}
            className={`rounded-full px-2.5 py-0.5 font-medium transition-all duration-300 ease-in-out motion-reduce:transition-none ${
              active
                ? "bg-brand text-on-brand"
                : "text-muted hover:bg-brand/8 hover:text-brand"
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
