import type { Session } from "@/data/sessions/types";
import { JournalCard } from "@/components/journal-card";
import { SectionTitle } from "@/components/section-title";
import { BulletList } from "@/components/bullet-list";
import { ExerciseBlock } from "@/components/exercise-block";
import { formatDayTitle, formatSessionDate } from "@/lib/format";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/types";

type SessionDetailViewProps = {
  session: Session;
  locale: Locale;
  dict: Dictionary;
};

export function SessionDetailView({
  session,
  locale,
  dict,
}: SessionDetailViewProps) {
  const t = dict.session;

  return (
    <div className="space-y-0">
      <JournalCard className="mb-5">
        <h1 className="mt-0 font-display text-2xl font-bold leading-snug text-brand sm:text-[1.875rem]">
          {formatDayTitle(session.dayNumber, session.title, locale)}
        </h1>
        <p className="mt-3 text-muted">
          {t.date}: {formatSessionDate(session.date, locale)} · {t.duration}:{" "}
          {session.duration}
        </p>
        <p className="mt-3 leading-[1.7] text-ink">
          <strong className="text-brand">{t.focus}:</strong> {session.focus}
        </p>
      </JournalCard>

      <JournalCard>
        <SectionTitle>{t.sessionStructure}</SectionTitle>
        <div className="mt-4">
          <BulletList items={session.structure} />
        </div>
      </JournalCard>

      <JournalCard>
        <SectionTitle>{t.part1}</SectionTitle>
        <div className="mt-4">
          {session.exercises.map((exercise, i) => (
            <ExerciseBlock
              key={exercise.name}
              index={i + 1}
              exercise={exercise}
              labels={t}
            />
          ))}
        </div>
      </JournalCard>

      <JournalCard>
        <SectionTitle>{t.part2}</SectionTitle>
        <div className="mt-4 space-y-6">
          {session.breathwork.map((section) => (
            <div key={section.title}>
              <h3 className="mt-0 text-lg font-semibold text-brand">
                {section.title}
              </h3>
              <div className="mt-2">
                <BulletList items={section.items} />
              </div>
            </div>
          ))}
        </div>
      </JournalCard>

      <JournalCard>
        <SectionTitle>{t.personalExperience}</SectionTitle>
        <div className="mt-4 space-y-6">
          {session.experience.map((group) => (
            <div key={group.title}>
              <h3 className="mt-0 text-lg font-semibold text-brand">
                {group.title}
              </h3>
              <div className="mt-2">
                <BulletList items={group.items} />
              </div>
            </div>
          ))}
        </div>
      </JournalCard>

      <JournalCard>
        <SectionTitle>
          {t.mainTheme} {session.dayNumber}
        </SectionTitle>
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-[1.7] text-ink marker:text-brand">
          {session.themes.map((theme) => (
            <li key={theme.label}>
              <strong className="text-brand">{theme.label}:</strong>{" "}
              {theme.text}
            </li>
          ))}
        </ul>
      </JournalCard>

      <JournalCard>
        <SectionTitle>
          {t.dayReflection.replace("{day}", String(session.dayNumber))}
        </SectionTitle>
        <blockquote className="mt-4 rounded-xl border border-border bg-quote p-4 leading-[1.7] text-ink">
          {session.reflection}
        </blockquote>
      </JournalCard>
    </div>
  );
}
