import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n/config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacySessionRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/${defaultLocale}/sessions/${slug}`);
}
