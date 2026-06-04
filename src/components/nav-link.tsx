import Link from "next/link";
import type { ComponentProps } from "react";

type NavLinkProps = ComponentProps<typeof Link>;

/** Internal nav link with aggressive prefetch for snappy transitions */
export function NavLink({ prefetch = true, ...props }: NavLinkProps) {
  return <Link prefetch={prefetch} {...props} />;
}
