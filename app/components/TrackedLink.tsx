"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { track } from "../lib/analytics";

// A next/link that fires a Vercel Analytics custom event on click, so we can see
// which internal links people actually follow (used for the "Keep exploring"
// gateway cards). Client component so it can carry the onClick handler while the
// parent stays a server component.
export default function TrackedLink({
  href,
  event,
  props,
  className,
  children,
}: {
  href: string;
  event: string;
  props?: Record<string, string | number | boolean | null>;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={className} onClick={() => track(event, props)}>
      {children}
    </Link>
  );
}
