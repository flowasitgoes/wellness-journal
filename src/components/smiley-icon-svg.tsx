type SmileyIconSvgProps = {
  className?: string;
};

/** Shared smiley mark — matches app/icon.svg */
export function SmileyIconSvg({ className = "h-full w-full" }: SmileyIconSvgProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="16" cy="16" r="12" fill="#3d5239" stroke="#2f4230" strokeWidth="1" />
      <circle cx="12" cy="14" r="1.6" fill="#ffffff" />
      <circle cx="20" cy="14" r="1.6" fill="#ffffff" />
      <path
        d="M11 18.75c1.6 2.1 8.4 2.1 10 0"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
