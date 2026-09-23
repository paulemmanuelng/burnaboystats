// ============================================================================
//  WHAT THE AWARD IS CALLED — tier names belong to the programme that awards them
// ============================================================================
//
// The data stores a tier on one scale — Silver, Gold, Platinum, Diamond — so
// that everything on the site can sort, filter and count by it. That is the
// right shape for DATA and the wrong shape for a LABEL: the RIAA's Latin
// programme, Premios de Oro y Platino, does not award a Platinum. It awards a
// Platino, at 60,000 units where the standard programme's Platinum is
// 1,000,000, and "16× Platinum" printed under a Platino is the award's own
// name wrong (Paul, 23 Sep 2026).
//
// So the tier stays canonical in the data and this renames it at the point of
// DISPLAY, keyed on the cert's `body` — the same field that already decides
// how the plaque is priced (app/data/certThresholds.ts, CERT_PROGRAMS) and
// which line it counts on (app/lib/certUnits.ts, rule 5).
//
// A programme with no entry here keeps the canonical words, which is every
// body but one: this is a translation table, not a naming free-for-all, and a
// new entry needs the programme's own published wording behind it.
// ============================================================================

/** Tier names a programme publishes for itself, where they differ. */
export const PROGRAM_TIER_NAMES: Record<string, Record<string, string>> = {
  // riaa.com/gold-platinum — "Premios De Oro Y Platino": Oro, Platino,
  // Multi-Platino, Diamante. There is no Plata; the programme awards no
  // silver tier, so none is listed.
  "RIAA Latin": { Gold: "Oro", Platinum: "Platino", Diamond: "Diamante" },
};

/** The tier, as the awarding programme names it. */
export const tierWord = (level: string, body?: string): string =>
  (body && PROGRAM_TIER_NAMES[body]?.[level]) || level;

/** The whole award: "2× Platino", "Diamond", "5× Platinum". */
export const awardLabel = (cert: { level: string; x?: number; body?: string }): string =>
  `${(cert.x ?? 1) > 1 ? `${cert.x}× ` : ""}${tierWord(cert.level, cert.body)}`;
