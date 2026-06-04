type SectionTitleProps = {
  children: React.ReactNode;
};

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mt-0 border-b border-border pb-2.5 text-xl font-semibold text-brand">
      {children}
    </h2>
  );
}
