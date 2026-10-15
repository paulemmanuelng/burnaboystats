"use client"; // reads the fragment and marks the row it names

import { useEffect } from "react";
import { twinAnchor } from "./AnchorTwins";

/** The attribute the board's stylesheets light a linked row by. */
export const LANDED_ATTR = "data-landed";

/** A night's own row on the box-office board, either layout's id. */
const NIGHT_ID = /^[km]-night-\d+$/;

/**
 * The box-office board's linked night (owner, 15 Oct 2026, #30): a tour
 * table's "No. 13 ↗" lands its row just under the navbar, and nothing said
 * which of the 82 rows it was (live debug revenue-01). This marks that row,
 * and its twin in the other layout (k-night-n ↔ m-night-n, AnchorTwins), with
 * `data-landed`, so a link copied on one layout and opened on the other lights
 * the row on screen too; a new fragment moves the mark.
 *
 * Not `:target`: the tour tables' links are client-side transitions
 * (SiteLink → next/link), which set the address with the History API, and
 * `:target` does not follow pushState — a clicked "No. 13 ↗" never matched it.
 * The page mounts after that transition, so it reads the fragment then, and
 * again on every hashchange. Takes no data (tests/tourRevenueServerOnly).
 */
export default function LandedRow() {
  useEffect(() => {
    const mark = () => {
      for (const el of document.querySelectorAll(`[${LANDED_ATTR}]`)) el.removeAttribute(LANDED_ATTR);
      let id: string;
      try {
        id = decodeURIComponent(window.location.hash.slice(1));
      } catch {
        return;
      }
      if (!NIGHT_ID.test(id)) return;
      for (const want of [id, twinAnchor(id)]) {
        if (want) document.getElementById(want)?.setAttribute(LANDED_ATTR, "");
      }
    };
    mark();
    window.addEventListener("hashchange", mark);
    return () => window.removeEventListener("hashchange", mark);
  }, []);
  return null;
}
