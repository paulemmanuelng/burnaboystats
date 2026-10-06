"use client"; // reads the address bar and scrolls the layout on screen

import { useEffect, useLayoutEffect, useState, type RefObject } from "react";
import type { Tour } from "../data/tours";
import { onDeepLinkChange, readDeepLink } from "./deepLink";
import { DATE_PARAM, TOUR_PARAM, tourForSlug, tourSlug } from "./tourDeepLink";

/**
 * #tour=<slug>&date=<YYYY-MM-DD> (lib/tourDeepLink) on either tours layout:
 * opens the tour the link names, on arrival and whenever the fragment
 * changes, before the first paint; then brings the night's row into view —
 * the row marked data-show=<date> inside `root`, or the tour's own button
 * (data-tour=<slug>) when the date is missing or not one of its nights.
 * Skipped when this layout is not the one on screen: both sit in the DOM.
 */
export function useTourDeepLink(
  tours: readonly Tour[],
  open: (name: string) => void,
  root: RefObject<HTMLElement | null>,
) {
  const [landing, setLanding] = useState<{ tour: string; date: string | null } | null>(null);

  useLayoutEffect(() => {
    const read = () => {
      const t = tourForSlug(readDeepLink(TOUR_PARAM, false), tours);
      if (!t) return;
      open(t.name);
      // A fresh object each time, so the same link followed twice lands twice.
      setLanding({ tour: tourSlug(t.name), date: readDeepLink(DATE_PARAM, false) });
    };
    read();
    return onDeepLinkChange(read);
  }, [tours, open]);

  useEffect(() => {
    const box = root.current;
    if (!landing || !box) return;
    const rows = Array.from(box.querySelectorAll<HTMLElement>("[data-show]"));
    const buttons = Array.from(box.querySelectorAll<HTMLElement>("[data-tour]"));
    const el =
      (landing.date ? rows.find((r) => r.dataset.show === landing.date) : undefined) ??
      buttons.find((b) => b.dataset.tour === landing.tour);
    if (!el || el.getClientRects().length === 0) return;
    // "instant": the site scrolls smoothly by default (globals.css), and the
    // reader should arrive on the night, not watch the page travel to it.
    el.scrollIntoView?.({ block: "center", behavior: "instant" });
  }, [landing, root]);
}
