import { NAIJA66_CLOSES, NAIJA66_FIRST_DROP, NAIJA66_PRIZES } from "../../data/naija66";

/**
 * The hunt's calendar, as plain arithmetic on epoch milliseconds.
 *
 * Client-safe: no secret, no crypto, no Intl. Times are printed by hand in WAT
 * (UTC+1, no daylight saving) rather than through toLocaleTimeString with
 * timeZone "Africa/Lagos", because the server's ICU and a phone's disagree on
 * spacing ("9:00 AM" with a narrow no-break space on one, a plain space on the
 * other), and a text mismatch between the two is a hydration error.
 */

export const FIRST_DROP_MS = Date.parse(NAIJA66_FIRST_DROP);
export const CLOSES_MS = Date.parse(NAIJA66_CLOSES);
export const DROPS_MS = NAIJA66_PRIZES.map((p) => Date.parse(p.dropsAt));

/** WAT is UTC+1 all year. */
const WAT_OFFSET_MS = 60 * 60 * 1000;

/**
 * Where the hunt stands at `now`, as one number:
 *   -1       before the first drop
 *   1 to 5   that many keys have dropped and the hunt is open
 *   99       closed
 *
 * A number rather than a label so a client can use it as a cache-buster: the
 * key slot asks for its badge again whenever it moves.
 */
export function huntEpoch(now: number): number {
  if (now < FIRST_DROP_MS) return -1;
  if (now >= CLOSES_MS) return 99;
  return DROPS_MS.filter((d) => now >= d).length;
}

/** True between the first drop and the close. */
export const huntIsOpen = (now: number) => now >= FIRST_DROP_MS && now < CLOSES_MS;

/** The next moment huntEpoch changes after `now`, or null once closed. */
export function nextBoundary(now: number): number | null {
  return [...DROPS_MS, CLOSES_MS].find((t) => t > now) ?? null;
}

/** The home banner's four states. */
export type BannerPhase = "tomorrow" | "today" | "live" | "over";

/** The WAT calendar day of an instant, as YYYY-MM-DD. */
export const watDay = (ms: number) => new Date(ms + WAT_OFFSET_MS).toISOString().slice(0, 10);

export function bannerPhase(now: number): BannerPhase {
  if (now >= CLOSES_MS) return "over";
  if (now >= FIRST_DROP_MS) return "live";
  return watDay(now) === watDay(FIRST_DROP_MS) ? "today" : "tomorrow";
}

/** "09:07 WAT" — a claim time, to the minute. */
export function watClock(iso: string | number): string {
  const d = new Date(new Date(iso).getTime() + WAT_OFFSET_MS);
  const hh = String(d.getUTCHours()).padStart(2, "0");
  const mm = String(d.getUTCMinutes()).padStart(2, "0");
  return `${hh}:${mm} WAT`;
}

/** "9am WAT", "12pm WAT", "9:30pm WAT" — a drop time, the way the rules say it. */
export function watHour(iso: string | number): string {
  const d = new Date(new Date(iso).getTime() + WAT_OFFSET_MS);
  const h24 = d.getUTCHours();
  const m = d.getUTCMinutes();
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}${m ? `:${String(m).padStart(2, "0")}` : ""}${h24 < 12 ? "am" : "pm"} WAT`;
}
