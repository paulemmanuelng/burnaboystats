"use client"; // reads the fragment and scrolls to the visible layout's copy

import { useEffect } from "react";

/**
 * The countries board's places have one id per layout — desktop
 * `#country-ireland` / `#k-europe`, phone `#m-country-ireland` / `#m-europe`
 * (lib/revenueByCountry countryAnchor / continentAnchor) — because both
 * layouts sit in every document and an id can be used once. So a link copied
 * on one layout and opened on the other named a target with no box, and the
 * page stayed at the top (debug pass 4 Oct 2026, A-15).
 *
 * This maps such a fragment to its twin in the layout on screen and goes
 * there, on load and whenever the fragment changes. The address bar keeps the
 * link as it was shared. Takes no data: nothing here imports the board's rows
 * (tests/tourRevenueServerOnly.test.ts).
 */

/** The same place's id in the other layout: country-x ↔ m-country-x, k-x ↔ m-x. */
export function twinAnchor(id: string): string | null {
  if (id.startsWith("m-country-")) return id.slice(2);
  if (id.startsWith("country-")) return `m-${id}`;
  if (id.startsWith("m-")) return `k-${id.slice(2)}`;
  if (id.startsWith("k-")) return `m-${id.slice(2)}`;
  return null;
}

/** A page's own twins, named in either direction (`pairs`), then the
 *  countries board's rule. /methodology's #principles and #sources are the
 *  desktop copies; the phone's are #m-principles and #m-sources (debug pass
 *  5 Oct 2026, core-11 — the /afrobeats links to them reached nothing on a
 *  phone). */
export function twinOf(id: string, pairs?: Readonly<Record<string, string>>): string | null {
  if (pairs) {
    if (Object.hasOwn(pairs, id)) return pairs[id];
    const back = Object.keys(pairs).find((k) => pairs[k] === id);
    if (back) return back;
  }
  return twinAnchor(id);
}

const hasBox = (el: Element) => el.getClientRects().length > 0;

export default function AnchorTwins({ pairs }: { pairs?: Readonly<Record<string, string>> } = {}) {
  useEffect(() => {
    const go = (behavior: ScrollBehavior) => {
      let id: string;
      try {
        id = decodeURIComponent(window.location.hash.slice(1));
      } catch {
        return;
      }
      if (!id) return;
      const target = document.getElementById(id);
      if (target && hasBox(target)) return; // the browser already went there
      const twinId = twinOf(id, pairs);
      const twin = twinId ? document.getElementById(twinId) : null;
      if (twin && hasBox(twin)) twin.scrollIntoView?.({ block: "start", behavior });
    };
    // On load the page has only just painted: no animation from the top.
    go("instant");
    const onHash = () => go(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth");
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [pairs]);
  return null;
}
