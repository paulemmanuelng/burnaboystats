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
];

/** Checks that changed the site's own figures — the list cuts both ways. */
export const correctionsMade: RejectedClaim[] = [
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
