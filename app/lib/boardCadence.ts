import { CERTS_LAST_FULL_SWEEP, CERTS_VERIFIED_ON, TARGETED_REGISTER_READS } from "../data/certifications";
import { AFROBEATS_LAST_FULL_SWEEP } from "../data/afrobeats";

const longDay = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/**
 * "7 October 2026": the day Burna Boy's certification registers were last
 * read (CERTS_VERIFIED_ON), as /certifications prints it ("Burna Boy's
 * registers last verified …"). The Afrobeats Board's cadence lines name this
 * day for him. They said "Burna Boy's figures update daily" until 15 Oct 2026
 * (live debug, cb-1), over plaque, country and No. 1 counts that no scheduled
 * job changes: the stats bot refreshes streams and the live boards, and the
 * registers are re-read by hand.
 */
export const BURNA_REGISTERS_VERIFIED_LONG = longDay(CERTS_VERIFIED_ON);

/** "2 October 2026": the board's last full sweep, for the lines with no page
 *  formatter of their own (llms.txt, /api/v1/afrobeats). */
export const BOARD_FULL_SWEEP_LONG = longDay(AFROBEATS_LAST_FULL_SWEEP);

/** The newest targeted register read (data/certifications
 *  TARGETED_REGISTER_READS), ISO, when one has followed both full sweeps;
 *  null otherwise. Derived: the newest entry in the log. */
export const LATEST_REGISTER_READ: string | null = (() => {
  const day = TARGETED_REGISTER_READS.map((r) => r.on).sort().at(-1);
  return day && day > CERTS_LAST_FULL_SWEEP && day > AFROBEATS_LAST_FULL_SWEEP ? day : null;
})();

/** One clause, unbreakable: its spaces become no-break spaces. */
export const nb = (clause: string) => clause.replace(/ /g, "\u00a0");

/**
 * ", then re-read on each register's publishing day (latest 14 October
 * 2026)": said after a line's full-sweep date ("registers read 2 October
 * 2026") on the pair pages and the /afrobeats hub (Paul, 15 Oct 2026,
 * question 2). Since 8 Oct each register is re-read on its own publishing
 * day, so the full-sweep date alone read staler every week. Empty when no
 * targeted read is newer than every date the line printed (`after`).
 * `apos` is the line's own apostrophe: the phone hub sets ’, the desktop
 * lines '.
 */
export function rereadClause(after: readonly string[], apos: "'" | "\u2019" = "'"): string {
  if (!LATEST_REGISTER_READ || after.some((d) => d >= LATEST_REGISTER_READ!)) return "";
  // "latest 14 October 2026" holds together: at 320 the date broke as "(latest
  // 14 / October 2026)" on the hub and left "2026)" alone on a pair page.
  return `, then re-read on each register${apos}s publishing day (${nb(`latest ${longDay(LATEST_REGISTER_READ)}`)})`;
}

/** The stamp of a route that prints rereadClause: the newest of its own
 *  `dates` and LATEST_REGISTER_READ. The pair pages and the /afrobeats hub
 *  print "(latest 14 October 2026)", so their sitemap lastmod and the pairs'
 *  Dataset dateModified may not say an older day (the floor in
 *  tests/sitemapLastmod.test.ts). Reviewer of question 2, 15 Oct 2026: they
 *  still said 7 October beside it. */
export const withLatestRead = (dates: readonly string[]): string =>
  [...dates, ...(LATEST_REGISTER_READ ? [LATEST_REGISTER_READ] : [])].sort().at(-1)!;
