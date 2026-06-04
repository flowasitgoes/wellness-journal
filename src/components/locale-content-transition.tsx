"use client";

import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type LocaleContentTransitionProps = {
  children: React.ReactNode;
};

export function LocaleContentTransition({
  children,
}: LocaleContentTransitionProps) {
  const params = useParams();
  const locale = params.locale as string | undefined;
  const [visible, setVisible] = useState(true);
  const isFirst = useRef(true);

  useEffect(() => {
    if (!locale) return;

    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    setVisible(false);
    const timer = window.setTimeout(() => setVisible(true), 140);
    return () => window.clearTimeout(timer);
  }, [locale]);

  return (
    <div
      className="transition-opacity duration-300 ease-in-out motion-reduce:transition-none"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {children}
    </div>
  );
}
