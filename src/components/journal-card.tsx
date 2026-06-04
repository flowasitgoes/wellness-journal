import type { ReactNode } from "react";

type JournalCardProps = {
  children: ReactNode;
  className?: string;
};

export function JournalCard({ children, className = "" }: JournalCardProps) {
  return (
    <div
      className={`mb-5 rounded-2xl border border-border bg-card p-6 shadow-[0_1px_0_rgba(47,66,48,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}
