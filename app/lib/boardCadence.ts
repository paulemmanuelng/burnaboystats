import { CERTS_VERIFIED_ON } from "../data/certifications";
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
