"use client"; // decides between history.back() and the parent link

import Link from "next/link";
import { useRouter } from "next/navigation";
import { hasInAppHistory } from "../lib/backNav";

/**
 * The back control in every mobile back bar.
 *
 * It goes back to the page you came from. If there is no such page — a shared
 * link, a search result, a fresh tab — it falls through to `href`, the screen's
 * parent in the site hierarchy, which is what the design draws it as.
 *
 * Deliberately still a real <a href>: it works before hydration and without
 * JS, right-click and middle-click behave, and the parent stays a crawlable
 * link. The click handler only takes over when going back is actually better.
 */
export default function BackLink({
  href,
  className,
  "aria-label": ariaLabel,
  children,
}: {
  /** Where to go when there is no history to go back to. */
  href: string;
  className?: string;
  "aria-label"?: string;
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={(e) => {
        // Let the browser handle modified clicks — new tab, new window, save.
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        if (!hasInAppHistory()) return;
        e.preventDefault();
        router.back();
      }}
    >
      {children}
    </Link>
  );
}
