// Where the box-office board's figures come from and when it was last read —
// the words every note about the board prints. A file of its own with no data
// imports, so the footer (app/lib/links.ts, which the client nav bundles) can
// derive its note from the same words without pulling in the board's rows and
// their `source` notes (tests/tourRevenueServerOnly.test.ts).
// app/data/tourRevenue.ts re-exports these; import them from either.

/** The body the board reads, and the reports it republishes. */
export const REVENUE_BODY = "TouringData";
export const REVENUE_REPORTS = "Billboard Boxscore and Pollstar reports";

/** The day the board was last re-read at its bodies, ISO 8601. Move it
 *  whenever the board is; the sitemap stamps both box-office routes with it
 *  and REVENUE_AS_OF is read off it. */
export const REVENUE_READ_ON = "2026-10-03";

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
