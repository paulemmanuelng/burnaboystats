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
