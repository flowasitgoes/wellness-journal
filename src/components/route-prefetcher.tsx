"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getAllSessionSlugs } from "@/data/sessions";
import { localePath, locales, type Locale } from "@/i18n/config";

type RoutePrefetcherProps = {
  locale: Locale;
};

/** Warm common routes so View session / back / locale switch feel instant */
export function RoutePrefetcher({ locale }: RoutePrefetcherProps) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(localePath(locale));

    for (const slug of getAllSessionSlugs()) {
      router.prefetch(localePath(locale, `/sessions/${slug}`));
      for (const alt of locales) {
        if (alt !== locale) {
          router.prefetch(localePath(alt, `/sessions/${slug}`));
        }
      }
    }
  }, [locale, router]);

  return null;
}
