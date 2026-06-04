import { LocaleContentTransition } from "@/components/locale-content-transition";

export default function LocaleTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LocaleContentTransition>{children}</LocaleContentTransition>;
}
