/**
 * The hub scatter's plaque axis (app/components/HubScatter.tsx).
 *
 * The delivered design scales plaques to 240 — "y up to 20 though 240 plaques
 * lands at 30 — so no dot ever sits on the frame". Burna Boy passed 240 on
 * 23 Sep 2026 (248), which put his dot on the frame and his label above the
 * top of the viewBox. So the domain is the design's 240 until the data
 * outgrows it, then steps up in 20s: always ABOVE the deepest dot, which is
 * the design's rule, rather than the design's number.
 */
export const PLAQUE_DOMAIN_FLOOR = 240;

export const plaqueDomain = (maxPlaques: number) =>
  Math.max(PLAQUE_DOMAIN_FLOOR, Math.ceil((maxPlaques + 1) / 20) * 20);

/**
 * The country axis, by the same rule. The design scales countries to 26 — "x
 * to 1240 though 26 countries lands at 1220" — and Burna Boy reached 27 on
 * 7 Oct 2026 (Turkey), which put his dot at 1264, past the 1240 axis rule. So
 * the domain is the design's 26 until the widest dot passes it, and then that
 * dot's own count: the widest dot always lands at the design's 1220, inside
 * the rule.
 */
export const COUNTRY_DOMAIN_FLOOR = 26;

export const countryDomain = (maxCountries: number) => Math.max(COUNTRY_DOMAIN_FLOOR, maxCountries);
