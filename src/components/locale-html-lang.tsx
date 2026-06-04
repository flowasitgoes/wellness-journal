"use client";

import { useEffect } from "react";
import type { Locale } from "@/i18n/config";

type LocaleHtmlLangProps = {
  locale: Locale;
};

export function LocaleHtmlLang({ locale }: LocaleHtmlLangProps) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-Hant" : "en";
  }, [locale]);

  return null;
}
