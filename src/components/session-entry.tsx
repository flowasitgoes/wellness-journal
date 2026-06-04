import type { Session } from "@/data/sessions/types";
import { JournalCard } from "@/components/journal-card";
import { NavLink } from "@/components/nav-link";
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
  const href = localePath(locale, `/sessions/${session.slug}`);

  return (
    <NavLink
      href={href}
      className="block transition-opacity duration-200 hover:opacity-95"
      aria-label={formatDayTitle(session.dayNumber, session.title, locale)}
    >
      <JournalCard className="cursor-pointer transition-colors duration-200 hover:border-brand/35">
        <h2 className="mt-0 font-display text-xl font-bold leading-snug text-brand sm:text-2xl">
          {formatDayTitle(session.dayNumber, session.title, locale)}
        </h2>
        <p className="mt-2 text-muted">
          <strong className="font-semibold text-brand">{t.date}:</strong>{" "}
          {formatSessionDate(session.date, locale)} ·{" "}
          <strong className="font-semibold text-brand">{t.duration}:</strong>{" "}
          {session.duration}
        </p>
        <p className="mt-3 leading-[1.7] text-ink">
          <strong className="font-semibold text-brand">{t.focus}:</strong>{" "}
          {session.focus}
        </p>
        <span className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-on-brand transition-colors duration-200 hover:bg-brand-dark">
          {dict.nav.viewSession}
        </span>
      </JournalCard>
    </NavLink>
  );
}
