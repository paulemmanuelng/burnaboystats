import type { Release } from "../data/certifications";

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
