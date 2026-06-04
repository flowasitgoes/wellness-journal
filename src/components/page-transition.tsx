"use client";

import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

/** Light enter animation on route change — no fade-out pause */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-enter motion-reduce:animate-none">
      {children}
    </div>
  );
}
