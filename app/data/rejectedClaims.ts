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

// The song's certified floor, derived so it moves with the plaques (three
// arrived in the month to 14 Sep 2026); a typed figure here would be stale
// within weeks. Nigeria is irrelevant — the song holds no NG plaque.
const daiDai = priceRelease(artistBySlug("burna-boy")!, "Dai Dai");
const fmt = (n: number) => n.toLocaleString("en-US");

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
    claim: "“Dai Dai” — No. 2 on US Rhythmic radio",
    reason:
      "No. 4 on Mediabase's Rhythmic chart, read on its syndicated listing. Mediabase and Billboard are different charts that share a monitoring feed: Billboard's Rhythmic Airplay ranks 40 positions on its own reporter panel and a Mon–Sun week, Mediabase's ranks 50 on its own panel and a Sun–Sat week. The gap showed in this record on the charts dated 22 August 2026 — Billboard No. 3, Mediabase No. 4, the same week. Both charts have since put the song at No. 1: Billboard's Rhythmic Airplay on the charts dated 5 and 12 September 2026 (No. 2 on 19 September), Mediabase's Rhythmic on the chart week ending 5 September (No. 5 on 12 September). This site publishes the Billboard peak.",
  },
  {
    claim: "African Giant — “the first ever certified Nigerian album” (Silver, UK, 22 September 2020)",
    reason:
      "The award is real but the rest is not. BPI's own register dates the Silver 18 September 2020 — the 22nd is when the press ran it — and the album has been Gold since 22 July 2022. It was Burna Boy's first UK-certified album, not the first certified Nigerian one: Sade, born in Ibadan, had Diamond Life at 4× Platinum with the BPI by 1987, and Lagos-born Keziah Jones's Blufunk was Double Gold with SNEP in June 2000. This site carries the award and its dates, and no superlative.",
  },
  {
    claim: "“Dai Dai” — 6,050,000 units sold worldwide",
    reason:
      `A fan estimate, not a figure any body or platform publishes. No certifying body states worldwide units for a single, and pure sales run in the low thousands a week, so a total that size can only be streams converted to units at a ratio of the poster's choosing — its lines for India, MENA, Brazil and Mexico sit where no register prices the song at all. Where a register does speak, it says less: the RIAA's only award is the Latin programme's 2× Platino, at least 120,000 units, not 935,000; the BPI's is Silver, at least 200,000, not 370,000; BVMI and Music Canada hold no award for the song. This site prices the song's ${daiDai?.release.certs.length ?? 0} plaques at their own bodies' thresholds — at least ${fmt(daiDai?.total ?? 0)} certified units across the ${daiDai?.pricedPlaques ?? 0} that can be priced — and publishes no worldwide total.`,
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
