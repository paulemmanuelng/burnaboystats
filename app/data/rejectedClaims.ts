// Award claims that were checked and NOT published, and why.
//
// This is the strongest evidence of rigour the site has, and until now it
// existed only as comments at the top of awards.ts, where no reader could see
// it. Anyone can publish a big number; publishing the numbers you refused, with
// the reason, is the part that is hard to fake.
//
// It also does a job on the page: an inflated total circulates for this artist
// every few months, and the honest answer to "why does your count differ" is
// this list rather than an assertion that the site is careful.
//
// EVERY ENTRY WAS RE-VERIFIED AGAINST THE LIVE DATA BEFORE BEING PUBLISHED, not
// copied from the comments. That matters: an earlier pass rejected a tenth
// Headies win for want of a source, and a later one FOUND it (the 2012 Rookie
// of the Year, shared with Dammy Krane) and added it. Publishing that rejection
// today would have been a stale claim of exactly the kind this list exists to
// prevent. If you add to this file, check the body is still absent from
// awards.ts first — tests/rejectedClaims.test.ts does that check for you.

export interface RejectedClaim {
  /** The body or the claim, as it circulates. */
  claim: string;
  /** Why it is not on the site. */
  reason: string;
}

/** Bodies named in circulating tallies that no primary source ties to him. */
import { artistBySlug, priceRelease } from "../lib/certUnits";
import { awardLabel } from "../lib/awardName";
import { COUNTRIES } from "./certifications";

// The song's certified floor, derived so it moves with the plaques (three
// arrived in the month to 14 Sep 2026); a typed figure here would be stale
// within weeks. Nigeria is irrelevant — the song holds no NG plaque.
const daiDai = priceRelease(artistBySlug("burna-boy")!, "Dai Dai");
const fmt = (n: number) => n.toLocaleString("en-US");

/** The fan estimate's own lines for markets where a register DOES price the
 *  song — the figures the rebuttal answers. Typed: they are the circulating
 *  claim's numbers, not the site's. */
export const DAI_DAI_FAN_LINES: { c: string; units: number }[] = [
  { c: "US", units: 935_000 },
  { c: "UK", units: 370_000 },
];

/**
 * "the RIAA's only award is its Latin programme's 6× Platino, at least
 * 360,000 units, not 935,000" — one clause per fan line, each DERIVED from the
 * song's plaques in that market (priceRelease, the figures /compare prices),
 * and only where the register still says less than the fan figure.
 *
 * The paragraph typed them until 5 Oct 2026, and every one had gone stale:
 * it said 2× Platino and 120,000 (the data: 6×, 360,000), BPI Silver and
 * 200,000 "not 370,000" (the data: Gold, 400,000 — above the figure it
 * rebutted), and that BVMI and Music Canada "hold no award" (the data: German
 * Gold and Canadian 2× Platinum). Debug pass 4 Oct 2026, C-03.
 *
 * Since 7 Oct 2026 no clause is left: the RIAA's 19× Platino (1,140,000 units)
 * passed the fan line's 935,000 as the BPI's Gold had passed its 370,000, so
 * the paragraph's "Where a register does speak" sentence drops out by itself.
 */
export function daiDaiRegisterClauses(units = daiDai): string[] {
  if (!units) return [];
  return DAI_DAI_FAN_LINES.flatMap(({ c, units: fan }) => {
    const lines = units.byCountry.filter((l) => l.country === c && l.counted && l.top);
    const floor = lines.reduce((n, l) => n + l.units, 0);
    if (!lines.length || floor >= fan) return [];
    const body = COUNTRIES[c]?.body ?? c;
    const awards = lines.map((l) => {
      const label = awardLabel(l.top!);
      const programme = l.program ? `its ${l.program.replace(new RegExp(`^${body} `), "")} programme's ` : "";
      return `${programme}${label}`;
    });
    const plaques = lines.reduce((n, l) => n + l.releases, 0);
    return [`the ${body}'s ${plaques === 1 ? "only certification is " : "certifications are "}${awards.join(" and ")}, at least ${fmt(floor)} units, not ${fmt(fan)}`];
  });
}
const registerClauses = daiDaiRegisterClauses();

/** The fan estimate's lines for markets where it claims units, named as it
 *  names them, with the plaque codes a body there would file the song under.
 *  "MENA" covers the region's markets, any of which pricing the song breaks
 *  "no register prices the song at all" there. */
export const DAI_DAI_FAN_MARKETS: { name: string; codes: string[] }[] = [
  { name: "India", codes: ["IN"] },
  { name: "MENA", codes: ["MENA", "AE", "SA", "EG", "LB", "MA", "QA", "KW", "BH", "OM", "JO"] },
  { name: "Brazil", codes: ["BR"] },
  { name: "Mexico", codes: ["MX"] },
];

/** The fan markets where the song holds no plaque — the ones the paragraph may
 *  say "no register prices the song at all" of. Derived from its plaques, so a
 *  market drops out of the sentence the day a body there certifies the song
 *  (the sentence was typed until 5 Oct 2026; review of the 4 Oct debug PR). */
export function daiDaiUnpricedMarkets(certs: { c: string }[] = daiDai?.release.certs ?? []): string[] {
  const held = new Set(certs.map((x) => x.c));
  return DAI_DAI_FAN_MARKETS.filter((m) => !m.codes.some((c) => held.has(c))).map((m) => m.name);
}
const unpricedMarkets = daiDaiUnpricedMarkets();
const listJoin = (xs: string[]) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`);

export const unsourcedBodies: RejectedClaim[] = [
  { claim: "ASCAP Awards", reason: "No primary source names him for a specific song or year." },
  { claim: "The FABYs", reason: "No primary source names him at all." },
  { claim: "That Grape Juice Awards", reason: "No primary source names him at all." },
  { claim: "Africa Golden Awards", reason: "No primary source names him at all." },
  { claim: "Odudu PH City Awards", reason: "No primary source names him — four claimed wins, none traceable." },
  {
    claim: "Nigeria Music Video Awards (win)",
    reason: "Nominations only. The claimed win rests on a low-confidence source, so it is not counted.",
  },
  { claim: "NMPA Songwriter Awards", reason: "No evidence of any kind." },
  {
    claim: "TooXclusive Awards",
    reason: "A real ceremony, but no verifiable win — the ceremony existing is not the same as the win existing.",
  },
  {
    claim: "The Nation Newspaper Awards",
    reason: "Editorial praise, not a competitive award. Recognition is not a trophy.",
  },
  {
    claim: "“Ghana Music Awards USA”",
    reason:
      "No ceremony by that name appears to exist. The real diaspora show is the Ghana Entertainment Awards USA, which is listed here under its own name.",
  },
];

/** Counts that circulate higher than the site's, where the site's is sourced. */
export const disputedCounts: RejectedClaim[] = [
  { claim: "AFRIMMA — 10 wins", reason: "Eight. The 2019 and 2020 winners lists match this site exactly." },
  { claim: "Metro FM Music Awards — 4 wins", reason: "Three, all from 2016." },
  { claim: "BMI Awards — 2 wins", reason: "One, for “Last Last” in 2023." },
  { claim: "Galaxy Music Awards — 5 wins", reason: "One. No breakdown of the other four exists anywhere." },
  {
    claim: "African Giant — “the first ever certified Nigerian album” (Silver, UK, 22 September 2020)",
    reason:
      "The certification is real but the rest is not. BPI's own register dates the Silver 18 September 2020 — the 22nd is when the press ran it — and the album has been Gold since 22 July 2022. It was Burna Boy's first UK-certified album, not the first certified Nigerian one: Sade, born in Ibadan, had Diamond Life at 4× Platinum with the BPI by 1987, and Lagos-born Keziah Jones's Blufunk was Double Gold with SNEP in June 2000. This site carries the certification and its dates, and no superlative.",
  },
  {
    claim: "“Dai Dai” — 6,050,000 units sold worldwide",
    reason:
      `A fan estimate, not a figure any body or platform publishes. No certifying body states worldwide units for a single, and pure sales run in the low thousands a week, so a total that size can only be streams converted to units at a ratio of the poster's choosing${
        unpricedMarkets.length ? ` — its lines for ${listJoin(unpricedMarkets)} sit where no register prices the song at all` : ""
      }.${
        registerClauses.length ? ` Where a register does speak, it says less: ${registerClauses.join("; ")}.` : ""
      } This site prices the song's ${daiDai?.release.certs.length ?? 0} certifications at their own bodies' thresholds — at least ${fmt(daiDai?.total ?? 0)} certified units across the ${daiDai?.pricedPlaques ?? 0} that can be priced — and publishes no worldwide total.`,
  },
];

/** Checks that changed the site's own figures — the list cuts both ways. */
export const correctionsMade: RejectedClaim[] = [
  {
    claim: "“Ginger” — Swiss Platinum",
    reason:
      "Gold. IFPI Schweiz's register prints one row for the record, Gold in 2023, and no Platinum in any year; the tier had been carried a rung too high since 2023. Caught because Wizkid's board row read Gold and the compare page priced the same recording two ways.",
  },
  {
    claim: "IRAWMA 2023 — logged as a loss",
    reason:
      "He won Best Afrobeats Entertainer at the 40th IRAWMA. Confirmed on the ceremony's own winners list and flipped to a win.",
  },
  {
    claim: "The Headies — a tenth win nobody could source",
    reason:
      "Found: Rookie of the Year, 2012, shared with Dammy Krane — his first award. The ceremony page omits the special category, so it took the Headies' own category history and a 2014 winners archive to confirm.",
  },
  {
    claim: "AEA USA 2025 — press said Best Male Artist",
    reason:
      "Press misread the list order; that one went to Wizkid. He won International Artist of the Year, which the awarding body's own winners PDF gold-marks.",
  },
];
