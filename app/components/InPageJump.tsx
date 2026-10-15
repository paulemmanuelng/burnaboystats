"use client"; // scrolls to an in-page row without rewriting the fragment

import type { MouseEvent, ReactNode } from "react";

/**
 * An in-page link that keeps the address bar's fragment: the certs switches
 * live there ("#feat=0", "#home=0", lib/useCertView), so a plain "#row-…"
 * jump would turn them back on as it scrolled — and the "Most certified"
 * strip that sent the reader is drawn for the view the switches leave (J3-3).
 * With script it scrolls the row into view and moves focus to it; without, it
 * is the plain anchor it is written as.
 */
export default function InPageJump({ href, className, children }: { href: `#${string}`; className?: string; children: ReactNode }) {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const target = document.getElementById(href.slice(1));
    e.preventDefault();
    if (!target) return;
    const still = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ block: "start", behavior: still ? "auto" : "smooth" });
    target.focus({ preventScroll: true });
  };
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  );
}
