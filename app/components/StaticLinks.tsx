"use client"; // one click handler for a server-built block's links

import type { MouseEvent } from "react";
import { useRouter } from "next/navigation";

/**
 * A block of server-built HTML (on this site: the desktop calendar's twelve
 * months, app/on-this-day/desktopMonths.ts) whose links navigate in place, as
 * next/link's do: one delegated handler instead of a Link per link. React holds
 * the block as one node and never walks it, so hydration costs one element,
 * not thousands.
 *
 * It takes what next/link takes and leaves the rest to the browser: a plain
 * left click (or Enter) on a same-site link. A modified click (new tab or
 * window, download), a link with a target or download attribute, or one that
 * leaves the site goes the browser's way. Like the Links it replaces
 * (prefetch={false}), nothing is prefetched.
 */
export default function StaticLinks({ html, className }: { html: string; className?: string }) {
  const router = useRouter();
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
    if (!a || !e.currentTarget.contains(a) || a.hasAttribute("target") || a.hasAttribute("download")) return;
    const href = a.getAttribute("href")!;
    if (!href.startsWith("/") || href.startsWith("//")) return;
    e.preventDefault();
    router.push(href);
  };
  // A click handler on a wrapper, not a control: the links inside are the
  // controls, and they keep their own semantics and keyboard behaviour.
  return <div className={className} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />;
}
