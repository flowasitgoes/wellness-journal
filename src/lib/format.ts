import type { Locale } from "@/i18n/config";

export function formatSessionDate(isoDate: string, locale: Locale): string {
  const date = new Date(isoDate + "T12:00:00");
  if (locale === "zh") {
    return new Intl.DateTimeFormat("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  }
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

export function formatDayTitle(
  dayNumber: number,
  title: string,
  locale: Locale,
): string {
  if (locale === "zh") {
    return `第 ${dayNumber} 天 — ${title}`;
  }
  return `Day ${dayNumber} — ${title}`;
}
