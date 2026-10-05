// Where the box-office board's figures come from and when it was last read —
// the words every note about the board prints. A file of its own with no data
// imports, so the footer (app/lib/links.ts, which the client nav bundles) can
// derive its note from the same words without pulling in the board's rows and
// their `source` notes (tests/tourRevenueServerOnly.test.ts).
// Import them from here; app/data/tourRevenue.ts does not re-export them.

/** The body the board reads, and the reports it republishes. */
export const REVENUE_BODY = "TouringData";
export const REVENUE_REPORTS = "Billboard Boxscore and Pollstar reports";

/** The publishers a box-office row may rest on (tests/revenueSources.test.ts
 *  holds every row's `source` to lead with one of them). */
export const REVENUE_PUBLISHERS = [REVENUE_BODY, "Billboard Boxscore", "Pollstar"] as const;

/** The publisher a row's `source` note names first — "TouringData, X post of
 *  27 May 2022 (SPACE DRIFT), …" is TouringData's. What a surface citing ONE
 *  row prints as its source: the On This Day share card said "Billboard
 *  Boxscore" for every grossed night while every row behind them was read at
 *  TouringData (debug pass 4 Oct 2026, C-06/D-03/E-12). A row a press outlet
 *  quotes ("Afrobeats Intelligence, quoting Pollstar") is the quoted body's. */
export function revenueRowBody(source: string): string {
  const first = source.split(",")[0].trim();
  const quoted = REVENUE_PUBLISHERS.find((b) => new RegExp(`quoting ${b}\\b`).test(source));
  return (REVENUE_PUBLISHERS as readonly string[]).includes(first) ? first : (quoted ?? REVENUE_BODY);
}

/** The day the board was last re-read at its bodies, ISO 8601. Move it
 *  whenever the board is; the sitemap stamps both box-office routes with it
 *  and REVENUE_AS_OF is read off it. */
export const REVENUE_READ_ON = "2026-10-03";

/** The day a board row last changed WITHOUT a re-read at its bodies — a venue
 *  spelled the venue's own way, a tour renamed. 5 Oct 2026: Montreal's
 *  "Centre Bell" became "Bell Centre" (D-07) while both box-office routes
 *  still said 3 Oct (review of the 4 Oct debug PR). Move it with any such edit
 *  to app/data/tourRevenue.ts; tests/debug1004Data.test.tsx fingerprints the
 *  rows and fails until it is moved. REVENUE_AS_OF stays on the read. */
export const REVENUE_EDITED_ON = "2026-10-05";

/** The date the box-office routes are stamped with — the later of the read
 *  and the edit: the sitemap's lastmod and the pages' Dataset dateModified. */
export const REVENUE_STAMP = [REVENUE_READ_ON, REVENUE_EDITED_ON].sort().at(-1)!;

/** The month the board was last re-read — printed on the hub's source note
 *  and the leaderboard's own. Derived from REVENUE_READ_ON, never typed. */
export const REVENUE_AS_OF = new Date(`${REVENUE_READ_ON}T12:00:00Z`).toLocaleDateString("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** Where the board's figures come from, in one wording for every note that
 *  describes it (the leaderboard's desktop and phone notes, the hub's note
 *  under its top ten, the by-country method note). Callers append
 *  ", as of REVENUE_AS_OF". */
export const REVENUE_SOURCE = `Box-office reports as published by ${REVENUE_BODY}, which republishes ${REVENUE_REPORTS} — read at its site archive and in its own posts, cross-checked with press reporting`;

/** The footer's provenance line on the box-office pages and the records hub
 *  (debug pass 3 Oct 2026, bo-03/sw-4: it said "via Billboard Boxscore" after
 *  #403 moved the board to TouringData, Boxscore and Pollstar). */
export const REVENUE_FOOTER_NOTE = `Box-office figures via ${REVENUE_BODY} (${REVENUE_REPORTS}).`;
