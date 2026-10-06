"use client";

import { useEffect } from "react";

/**
 * Gives focus back to the control the reader just used, when the toggle
 * remounted the page under it (V-compareB-02, full-site debug of 5 Oct 2026).
 *
 * Every toggle on a pair page (/compare/<a>-vs-<b>) or a board
 * (/compare/in/<country>) is a link to /compare?…, another route, so Next
 * mounts a new tree and the focused link is gone: on
 * /compare/kizz-daniel-vs-victony, Enter on "Featured appearances" landed on
 * /compare?a=kizz-daniel&b=victony&feat=0 with focus on <body>, and the next
 * Tab went to the breadcrumb's HOME — back past the mode tabs and both Change
 * buttons (measured live in headless Chrome at 1440 and 390; the Nigeria
 * switch and the strip's Include/Separate Nigeria the same). On /compare
 * itself the link survives the navigation and keeps focus. "Show all" lost it
 * on every route: its row gives way to the rows it opens and "Show fewer".
 *
 * A link marked data-keep-focus="<key>" that has focus when it is activated
 * (Enter, or a click in a browser that focuses links on click) leaves its key
 * here. After the next commit, if focus has fallen to <body>, the first
 * element with the same key takes it — without scrolling, since the toggles
 * keep the reader's place on purpose. The key, not the node: "Show all" and
 * "Show fewer" share one, as the two states of one control. Chrome rings the
 * control after Enter and not after a click, as for any focus moved by script.
 *
 * Module state, not React state: it has to outlive the tree it was set in.
 */
let pending: { key: string; from: Element } | null = null;

export function KeepFocus() {
  // After EVERY commit, as HeadSync: a query-only navigation re-renders this
  // rather than remounting it, and there the link kept focus by itself, so the
  // key is dropped before it can move focus on some later navigation.
  useEffect(() => {
    if (!pending) return;
    const { key } = pending;
    pending = null;
    const active = document.activeElement;
    if (active && active !== document.body) return;
    // The first that takes it: a copy hidden by a layout's CSS refuses focus.
    for (const el of document.querySelectorAll<HTMLElement>(`[data-keep-focus="${key}"]`)) {
      el.focus({ preventScroll: true });
      if (document.activeElement === el) break;
    }
  });

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      // A modified click opens a tab or a window; this page stays as it is.
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = e.target instanceof Element ? e.target.closest("[data-keep-focus]") : null;
      if (link && link === document.activeElement) pending = { key: link.getAttribute("data-keep-focus")!, from: link };
    };
    // The reader moved on before the new page arrived: theirs to keep.
    const onFocusIn = (e: FocusEvent) => {
      if (pending && e.target !== pending.from) pending = null;
    };
    document.addEventListener("click", onClick, true);
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("focusin", onFocusIn);
    };
  }, []);

  return null;
}
