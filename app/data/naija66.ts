/**
 * Naija @ 66 — the Independence Day key hunt (1 October 2026).
 *
 * This is the whole of the hunt's configuration that is allowed in the repo,
 * and the repo is public. Each prize is a pathHash and a drop time; the page a
 * pathHash stands for, and the key that page's badge draws, are derived at
 * request time from NAIJA66_SECRET (app/lib/naija66/crypto.ts) and exist
 * nowhere else. So a reader of this file learns when the keys drop, and
 * nothing about where.
 *
 *   pathHash = hex(HMAC-SHA256(secret, "naija66:path:" + pathname)).slice(0, 32)
 *
 * The values below were computed by Paul from the secret he holds and are
 * copied verbatim. tests/naija66.test.ts holds this file to "no page paths, no
 * keys": every route on the site is checked against it as a string.
 *
 * Times are UTC. Nigeria is WAT, UTC+1 all year (no daylight saving), so the
 * drops are 9am, 12pm, 3pm, 6pm and 9pm WAT, and the hunt closes at midnight
 * WAT going into 3 October.
 */

export type Naija66Prize = {
  /** 1 to 5, in drop order. */
  prize: number;
  /** The first 32 hex characters of the page's HMAC — see above. */
  pathHash: string;
  /** When this prize's key starts to show, ISO UTC. */
  dropsAt: string;
};

export const NAIJA66_PRIZES: readonly Naija66Prize[] = [
  { prize: 1, pathHash: "d3126e9c9d4ab28c7ee261382047039a", dropsAt: "2026-10-01T08:00:00Z" },
  { prize: 2, pathHash: "365d3e26da5906153b07914e0df9ec68", dropsAt: "2026-10-01T11:00:00Z" },
  { prize: 3, pathHash: "4d34082f5d93685a1e90fbe7bd245ab3", dropsAt: "2026-10-01T14:00:00Z" },
  { prize: 4, pathHash: "bf9b35187f466adb928734bf33488f03", dropsAt: "2026-10-01T17:00:00Z" },
  { prize: 5, pathHash: "2a7966d52600bba4a37b2d7cce61e9cd", dropsAt: "2026-10-01T20:00:00Z" },
];

/** No claims, no badges, no banner from here on: midnight WAT into 3 October. */
export const NAIJA66_CLOSES = "2026-10-02T23:00:00Z";

/** The first drop, 9am WAT on 1 October. */
export const NAIJA66_FIRST_DROP = NAIJA66_PRIZES[0].dropsAt;


/** The account that says where to look next, and the one winners DM. */
export const NAIJA66_X_HANDLE = "@paulemmanuelng";
export const NAIJA66_X_URL = "https://x.com/paulemmanuelng";
