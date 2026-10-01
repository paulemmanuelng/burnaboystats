/**
 * Naija @ 66 — the Independence Day code hunt (1 October 2026).
 *
 * The hunt's configuration: each prize is the page its code hides on and the
 * moment it drops. The pages are plain paths, committed here and only here
 * (Paul, 1 Oct 2026: the HMAC mapping could not be matched to the deployed
 * secret, and a public schedule of paths is the accepted trade). The site's
 * copy still names no page; X says where to look.
 * tests/naija66Config.test.ts holds the hunt files to exactly these five
 * routes, in this file only.
 *
 * Times are UTC. Nigeria is WAT, UTC+1 all year (no daylight saving), so the
 * drops are 9am, 12pm, 3pm, 6pm and 9pm WAT, and the hunt closes at midnight
 * WAT going into 3 October.
 */

export type Naija66Prize = {
  /** 1 to 5, in drop order. */
  prize: number;
  /** The page this prize's code hides on, exactly as usePathname() returns it. */
  path: string;
  /** When this prize's code starts to show, ISO UTC. */
  dropsAt: string;
  /**
   * Won off the site (Paul, 1 Oct 2026, 18:00 WAT): prizes 1 and 2 went to
   * winners on X while the first version's badges were not showing. Such a
   * prize shows as claimed on the board and never shows a card or reveals.
   */
  awarded?: true;
};

export const NAIJA66_PRIZES: readonly Naija66Prize[] = [
  { prize: 1, path: "/music/listeners", dropsAt: "2026-10-01T08:00:00Z", awarded: true },
  { prize: 2, path: "/records/cars", dropsAt: "2026-10-01T11:00:00Z", awarded: true },
  { prize: 3, path: "/certifications", dropsAt: "2026-10-01T14:00:00Z" },
  { prize: 4, path: "/records/africas-biggest", dropsAt: "2026-10-01T17:00:00Z" },
  { prize: 5, path: "/dai-dai", dropsAt: "2026-10-01T20:00:00Z" },
];

/** No reveals, no cards, no banner from here on: midnight WAT into 3 October. */
export const NAIJA66_CLOSES = "2026-10-02T23:00:00Z";

/** The first drop, 9am WAT on 1 October. */
export const NAIJA66_FIRST_DROP = NAIJA66_PRIZES[0].dropsAt;


/** The account that says where to look next, and the one winners DM. */
export const NAIJA66_X_HANDLE = "@paulemmanuelng";
export const NAIJA66_X_URL = "https://x.com/paulemmanuelng";
