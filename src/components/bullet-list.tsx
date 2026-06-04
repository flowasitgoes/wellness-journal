type BulletListProps = {
  items: string[];
  className?: string;
};

export function BulletList({ items, className = "" }: BulletListProps) {
  return (
    <ul
      className={`list-disc space-y-1 pl-5 text-ink leading-[1.7] marker:text-brand ${className}`}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
