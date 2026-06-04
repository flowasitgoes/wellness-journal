import type { Exercise } from "@/data/sessions/types";
import { BulletList } from "@/components/bullet-list";
import type { Dictionary } from "@/i18n/dictionaries/types";

type ExerciseBlockProps = {
  index: number;
  exercise: Exercise;
  labels: Dictionary["session"];
};

export function ExerciseBlock({ index, exercise, labels }: ExerciseBlockProps) {
  return (
    <div className="border-t border-border py-4 first:border-t-0 first:pt-0">
      <h3 className="mt-0 text-lg font-semibold text-brand">
        {index}. {exercise.name}
      </h3>
      {exercise.volume && (
        <p className="mt-2 leading-[1.7] text-ink">
          <strong className="text-brand">{labels.volume}:</strong>{" "}
          {exercise.volume}
        </p>
      )}
      <p className="mt-1 leading-[1.7] text-ink">
        <strong className="text-brand">{labels.focusLabel}:</strong>{" "}
        {exercise.focus}
      </p>
      <div className="mt-3">
        <BulletList items={exercise.cues} />
      </div>
    </div>
  );
}
