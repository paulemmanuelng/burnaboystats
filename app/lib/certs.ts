import type { Cert, Release } from "../data/certifications";
import { CERT_PROGRAMS } from "../data/certThresholds";

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
//
// A half step on top (AMPROFON's "4× Platinum + Gold") adds a tenth of its own
// tier's weight: above the bare multiple, never as far as the next one.
export const badgeWeight = (c: Cert) =>
  (MARKET_WEIGHT[c.c] ?? 2) * 100 + (TIER_WEIGHT[c.level] ?? 1) * (c.x ?? 1) + (c.plus ? (TIER_WEIGHT[c.plus] ?? 1) / 10 : 0);

export const certWeight = (r: Release) =>
  r.certs.reduce((sum, c) => sum + badgeWeight(c), 0);

/** Most-certified first; ties broken by what the plaques actually represent. */
export const byMostCertified = (a: Release, b: Release) =>
  b.certs.length - a.certs.length || certWeight(b) - certWeight(a);

/** The country filter chip's hover text. A country whose plaques are all
 *  register rows reads "France — SNEP", as every chip always did. But a chip
 *  that named the register over plaques that register does not hold said
 *  "South Africa — RiSA" on Tyla's page, where all nine ZA plaques are Sony
 *  Music Africa's own award (PR #400 review). So: when every plaque in that
 *  country is the same kind of off-register plaque from one issuer, the chip
 *  reads like the badges do ("South Africa — Sony Music Africa, label-issued
 *  plaques"); when only some are, it counts them ("France — SNEP (1 not a
 *  register row)"). `provenance` is set only on a plaque that is not a register
 *  row (certProvenance in app/data/afrobeats.ts). */
export function countryChipTitle(name: string, body: string, certs: readonly Cert[]): string {
  const off = certs.filter((c) => c.provenance);
  if (!off.length) return `${name} — ${body}`;
  const issuers = new Set(off.map((c) => c.body ?? body));
  const tails = new Set(off.map((c) => c.provenance!));
  if (off.length === certs.length && issuers.size === 1 && tails.size === 1) {
    const tail = [...tails][0];
    return `${name} — ${[...issuers][0]}, ${off.length > 1 && tail.endsWith("plaque") ? `${tail}s` : tail}`;
  }
  // Every plaque off-register from one issuer, by more than one kind of
  // evidence — Tyla's South Africa: nine from Sony Music Africa's award and
  // "Chanel" from its own X post (3 Oct 2026). Count each kind.
  if (off.length === certs.length && issuers.size === 1) {
    const kinds = [...tails].map((t) => {
      const n = off.filter((c) => c.provenance === t).length;
      return `${n} ${n > 1 && t.endsWith("plaque") ? `${t}s` : t}`;
    });
    const list = kinds.length > 1 ? `${kinds.slice(0, -1).join(", ")} and ${kinds.at(-1)}` : kinds[0];
    return `${name} — ${[...issuers][0]}, ${list}`;
  }
  return `${name} — ${body} (${off.length} not ${off.length === 1 ? "a register row" : "register rows"})`;
}

/** A badge's marker (whatever a cert's `body` adds beyond the country's own
 *  body) names one of two things. A PROGRAMME of that body, priced separately
 *  in CERT_PROGRAMS — "Latin", for RIAA Latin. Or a different ISSUER: a label's
 *  own award, counted where the register holds no row — "Sony Music Africa" on
 *  Tyla's South African plaques (`source: "label"`), "Sony Music Colombia" on
 *  Dai Dai's Colombian Gold. The same split app/lib/offRegister.ts makes. The
 *  issuer marker is the one the owner asked to print smaller so the chip fits
 *  ("reduce the text size of sony music africa so it fit perfectly", 3 Oct
 *  2026); a programme marker stays on the 11px floor. */
export const isIssuerMarker = (body: string): boolean => !CERT_PROGRAMS[body];

/** Burna Boy's own plaques carry no `source`: an ISSUER `body` (not a priced
 *  programme) is what marks his label plaques — "Dai Dai"'s Colombian Gold,
 *  Sony Music Colombia's, and "All Eyes on Me"'s 19× Platinum, Sony Music
 *  Africa's. The board's plaques get their hover tail from certProvenance in
 *  app/data/afrobeats.ts; his get the same "label-issued plaque" here, so the
 *  /certifications country chip reads "Colombia — Sony Music Colombia, …"
 *  rather than the register body that holds no such award (debug pass,
 *  3 Oct 2026). Derived, never typed into the data. */
export const issuerProvenance = (c: Cert): string | undefined =>
  c.provenance ?? (c.body && isIssuerMarker(c.body) ? "label-issued plaque" : undefined);

/** The releases with `provenance` set on every issuer plaque — the shape the
 *  explorers read. Releases with none are passed through untouched. */
export const withIssuerProvenance = (releases: readonly Release[]): Release[] =>
  releases.map((r) =>
    r.certs.some((c) => !c.provenance && issuerProvenance(c))
      ? { ...r, certs: r.certs.map((c) => (c.provenance || !issuerProvenance(c) ? c : { ...c, provenance: issuerProvenance(c) })) }
      : r,
  );
