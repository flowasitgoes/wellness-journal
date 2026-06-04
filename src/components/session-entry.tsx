import Link from "next/link";
import type { Session } from "@/data/sessions/types";
import { JournalCard } from "@/components/journal-card";
import { formatDayTitle, formatSessionDate } from "@/lib/format";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";

type SessionEntryProps = {
  session: Session;
  locale: Locale;
  dict: Dictionary;
};

export function SessionEntry({ session, locale, dict }: SessionEntryProps) {
  const t = dict.session;

  return (
    <Link
      href={localePath(locale, `/sessions/${session.slug}`)}
      className="block transition-opacity hover:opacity-95"
      aria-label={formatDayTitle(session.dayNumber, session.title, locale)}
    >
      <JournalCard className="cursor-pointer transition-colors hover:border-brand/35">
        <h2 className="mt-0 font-display text-xl font-bold leading-snug text-brand sm:text-2xl">
          {formatDayTitle(session.dayNumber, session.title, locale)}
        </h2>
        <p className="mt-2 text-muted">
          {t.date}: {formatSessionDate(session.date, locale)} · {t.duration}:{" "}
          {session.duration}
        </p>
        <p className="mt-3 leading-[1.7] text-ink">
          <strong className="text-brand">{t.focus}:</strong> {session.focus}
        </p>
        <span className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-on-brand transition-colors hover:bg-brand-dark">
          {dict.nav.viewSession}
        </span>
      </JournalCard>
    </Link>
  );
}
