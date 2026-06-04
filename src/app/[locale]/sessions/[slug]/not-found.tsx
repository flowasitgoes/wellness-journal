"use client";

import { useParams } from "next/navigation";
import { NavLink } from "@/components/nav-link";
import { JournalCard } from "@/components/journal-card";
import { defaultLocale, isLocale, localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default function SessionNotFound() {
  const params = useParams();
  const locale = isLocale(params.locale as string)
    ? (params.locale as typeof defaultLocale)
    : defaultLocale;
  const dict = getDictionary(locale);

  return (
    <JournalCard>
      <h1 className="mt-0 font-display text-xl font-bold text-brand">
        {dict.notFound.title}
      </h1>
      <p className="mt-3 text-muted">{dict.notFound.body}</p>
      <NavLink
        href={localePath(locale)}
        className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-on-brand hover:bg-brand-dark"
      >
        {dict.notFound.back}
      </NavLink>
    </JournalCard>
  );
}
