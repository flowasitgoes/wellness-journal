import { SmileyIconSvg } from "@/components/smiley-icon-svg";

export function BrandSmiley() {
  return (
    <span
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-page p-0.5"
      aria-hidden
    >
      <SmileyIconSvg className="h-full w-full" />
    </span>
  );
}
