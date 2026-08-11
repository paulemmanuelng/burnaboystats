import type { Cert, Release } from "../data/certifications";

// True if a release satisfies every active filter — the country filter is met
// by any cert in that country, the tier filter by any cert at that tier.
export function matches(
  item: Release,
  country: string | null,
  tier: string | null
): boolean {
  const hasCountry = !country || item.certs.some((c) => c.c === country);
  const hasTier = !tier || item.certs.some((c) => c.level === tier);
  return hasCountry && hasTier;
}

// Ordering weight for a certification. Used for DISPLAY ORDER ONLY — it never
// feeds a count, a total or any published figure.
//
// Tier alone is misleading across markets. A BPI Silver is 200,000 units — more
// than a Gold is worth in plenty of territories — so weighting by plaque name
// alone sorted lower-threshold Golds above higher-threshold Silvers. Scaling by
// the market puts them in a truer order.
//
// The bands approximate the scale of each body's thresholds; they are not a
// unit conversion. Where two certifications land close together, treat the
// order between them as arbitrary rather than a ranking.
export const TIER_WEIGHT: Record<string, number> = {
  Diamond: 4,
  Platinum: 3,
  Gold: 2,
  Silver: 1,
};

export const MARKET_WEIGHT: Record<string, number> = {
  US: 5, UK: 5,
  DE: 4, FR: 4, CA: 4, AU: 4, IT: 4, ES: 4, NL: 4, BR: 4,
  SE: 3, BE: 3, CH: 3, AT: 3, DK: 3, NO: 3, PL: 3, NZ: 3,
  NG: 2, ZA: 2, PT: 2, GR: 2, HU: 2, CO: 2, CZ: 2,
  SK: 1,
};

// Market dominates, tier orders within a market. Multiplying the two let a
// Nigerian 4x Platinum outrank a French Gold; the market term is now on its own
// scale so it decides first, and tier (with any multiplier) only breaks ties
// inside the same territory. A 2x Platinum still beats a Gold in Nigeria — it
// just no longer jumps ahead of a bigger market's plaque.
export const badgeWeight = (c: Cert) =>
  (MARKET_WEIGHT[c.c] ?? 2) * 100 + (TIER_WEIGHT[c.level] ?? 1) * (c.x ?? 1);

export const certWeight = (r: Release) =>
  r.certs.reduce((sum, c) => sum + badgeWeight(c), 0);

/** Most-certified first; ties broken by what the plaques actually represent. */
export const byMostCertified = (a: Release, b: Release) =>
  b.certs.length - a.certs.length || certWeight(b) - certWeight(a);
