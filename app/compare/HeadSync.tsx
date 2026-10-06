"use client";

import { useEffect } from "react";

/**
 * Gives the tab the title and canonical a server render of this /compare URL
 * carries, after a client-side toggle or pick (V-compareB-01, full-site debug
 * of 5 Oct 2026).
 *
 * /compare's metadata follows the query: a pair canonicals to
 * /compare/<a>-vs-<b>, a board to /compare/in/<country>, a song pairing takes
 * its songs' names. A reload always got that right; a soft navigation did not.
 * Next 16's client cache keys a prefetched page's <head> without the query (a
 * prefetch of a dynamic page "never varies on search params"), so the head of
 * whichever /compare link was prefetched first, complete and not marked
 * partial, is reused for every /compare URL, and the right head the
 * navigation's own response carries is never shown. Every toggle on a pair
 * page or a country board, and every pick on /compare, left the tab on
 * "Compare Certified Units — Burna Boy vs Wizkid & More", canonical /compare,
 * until a reload. Measured live in headless Chrome at 1440 and 390: with
 * prefetching blocked, the same click lands the right title.
 *
 * The stale head commits in the same render as the new page (one batch of DOM
 * mutations, measured live), and this effect runs after that commit, so it
 * has the last word. It runs after EVERY commit, not only when the title
 * changes: the page is not remounted when only the query moves, and Next puts
 * the stale head back on each navigation, so "Featured appearances" off and
 * on again (one title, two navigations) needs it twice. On a full load the
 * two already agree and nothing is written.
 */
export function HeadSync({ title, canonical }: { title: string; canonical: string }) {
  useEffect(() => {
    if (document.title !== title) document.title = title;
    const link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link && link.getAttribute("href") !== canonical) link.setAttribute("href", canonical);
  });
  return null;
}
