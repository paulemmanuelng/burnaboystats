import { awardRank } from "./awardName";
import { CERT_PROGRAMS } from "../data/certThresholds";

// ============================================================================
//  WHICH PLAQUE HEADS A RECORD — a label's own award never does
// ============================================================================
//
// Owner's ruling, 7 Oct 2026 ("yes keep brazil"): a LABEL-ISSUED plaque never
// counts as an artist's highest award. Label plaques still count everywhere
// else — the totals, the countries, the tier tallies, /compare's units — and
// each still names its issuer on its own chip. They only never win the pick
// that heads the record: the hub tile's badge, the artist page's meta
// description ("topped by …"), the share card's "Highest award", and the FAQ
// answer that also ships as FAQPage structured data.
//
// Why it needed a rule: awards rank by tier, then multiplier (awardRank), so
// when Epic Records' TYLA plaque put "Water" at 3× Diamond in Turkey (PR #435),
// a label's own award outranked Pro-Música Brasil's register 2× Diamond and
// became Tyla's headline everywhere. The headline is the register's.
//
// awardRank itself is untouched: a country's own line (Turkey has no register,
// so every Turkish plaque is a label's) still ranks its plaques by it.
// ============================================================================

/** A plaque a LABEL issued rather than the certifying body — read the way the
 *  data downloads read it (app/lib/dataDownloads.ts, plaqueSource):
 *    - `source: "label"` says so outright (every label plaque on the board,
 *      and Dai Dai's Turkish Diamond, whose issuer IS COUNTRIES.TR's body);
 *    - with no `source`, an issuer `body` that is neither the country's own
 *      body nor a separately priced programme (RIAA Latin) names a label —
 *      Burna Boy's convention, Dai Dai's Colombian "Sony Music" Platinum.
 *  `source: "announcement"` is the certifying body's own word, not a label's. */
export const isLabelPlaque = (cert: { body?: string; source?: string }, countryBody?: string): boolean => {
  if (cert.source) return cert.source === "label";
  return (
    countryBody !== undefined &&
    cert.body !== undefined &&
    cert.body !== countryBody &&
    !CERT_PROGRAMS[cert.body]
  );
};

/** The plaque that heads a record: the highest by awardRank (tier, then
 *  multiplier, then any half step on top), never a label's own. The first met
 *  wins a tie, as the pick always has. null when every plaque is a label's —
 *  the hub then prints its dashed "top award" slot, which states the absence.
 *  `bodyOf` gives a plaque's country body, for the no-`source` convention. */
export function headlineAward<T extends { level: string; x?: number; plus?: string; body?: string; source?: string }>(
  certs: Iterable<T>,
  bodyOf?: (cert: T) => string | undefined,
): T | null {
  let best: T | null = null;
  for (const c of certs) {
    if (isLabelPlaque(c, bodyOf?.(c))) continue;
    if (!best || awardRank(c) > awardRank(best)) best = c;
  }
  return best;
}
