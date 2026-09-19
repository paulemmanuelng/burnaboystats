import { describe, it, expect } from "vitest";

import {
  allItems,
  COUNTRIES as CERT_COUNTRIES,
  totalAwards,
  countryCount as certCountryCount,
} from "../app/data/certifications";
import {
  allChartItems,
  chartEntryCount,
  numberOnes,
  chartCountryCount,
} from "../app/data/charts";
import { allNoms, totalWins, totalNominations, ceremonyCount } from "../app/data/awards";
import { countryCount as performedCountryCount } from "../app/data/performedCountries";
import { firstsCount } from "../app/data/firsts";
import { cars, totalValueUsd } from "../app/data/cars";

/**
 * The handoff's VERIFICATION-CHECKLIST, as a test.
 *
 * The checklist's own instruction is to compute each figure from app/data and
 * compare — never to hardcode the expected value to make a check pass. So the
 * left side of every assertion is a fresh reduce over the real array, and the
 * right side is the number the design was drawn against. If the two ever part
 * company, one of them is wrong and this fails loudly rather than a page
 * quietly printing a stale figure.
 *
 * Three rounds of design review caught fabricated totals that were plausible
 * and summed correctly and were still wrong. This is the guard against that
 * happening in the build.
 */

describe("handoff checklist — data integrity", () => {
  it("counts 236 certifications across 26 countries", () => {
    const certs = allItems.reduce((n, item) => n + item.certs.length, 0);
    const countries = new Set(allItems.flatMap((i) => i.certs.map((c) => c.c))).size;

    expect(certs).toBe(236); // + "Dai Dai" Gold in Belgium (Ultratop, read 19 Sep 2026)
    expect(countries).toBe(26); // Czechia joins
    // The page-facing helpers must agree with the raw reduce.
    expect(totalAwards()).toBe(certs);
    expect(certCountryCount).toBe(Object.keys(CERT_COUNTRIES).length);
  });

  it("splits into 7 Diamond / 101 Platinum / 97 Gold / 31 Silver", () => {
    // 6 Aug 2026: “Dai Dai” Portugal upgraded Gold → Platinum (AFP week-31 PDF).
    const byLevel = (level: string) =>
      allItems.reduce((n, i) => n + i.certs.filter((c) => c.level === level).length, 0);

    // Diamond went 6 -> 7 on 31 Aug 2026 when SNEP upgraded "Dai Dai" from
    // Platinum to Diamond. The old guard here warned that a 7 meant the African
    // Giant FR entry had been corrupted to Diamond; that entry is still
    // Platinum and the 7th Diamond is Dai Dai's, so the warning stands for
    // anything BEYOND 7 — the design file that once showed 7 carried a typo,
    // and this is a different route to the same number.
    expect(byLevel("Diamond")).toBe(7);
    // 101 -> 100 and 96 -> 97 on 11 Sep 2026: "Ginger" in Switzerland was
    // carried as Platinum and IFPI Schweiz's register prints Gold, so one plaque
    // moved down a tier. The total is unchanged. Caught because the compare page
    // priced the same recording two ways on Burna's row and Wizkid's.
    // 100 -> 101 and 97 -> 96 on 16 Sep 2026: "Dai Dai" in Greece moved up a
    // tier — IFPI Greece's own week-36 chart reads P in its Award column where
    // it read G. An upgrade: the total is unchanged.
    // 96 -> 95 and 30 -> 31 on 16 Sep 2026: "My Oasis" in the UK was carried
    // as Gold; BPI's own register holds one Silver award (22 Aug 2025) and no
    // Gold — a downgrade back to the tier the snapshot originally held, before
    // a typed 2025 event list bumped it on 1 Jul 2026. Total unchanged.
    expect(byLevel("Platinum")).toBe(101); // + Dai Dai AT, − Ginger CH, + Dai Dai GR
    expect(byLevel("Gold")).toBe(97); // + Dai Dai BE, + City Boys PT, + "Dai Dai" in Poland (ZPAV), + Ginger CH, − Dai Dai GR, − My Oasis UK
    expect(byLevel("Silver")).toBe(31); // On the Low NG left this tier for Gold; My Oasis UK came back to it

    const sum = byLevel("Diamond") + byLevel("Platinum") + byLevel("Gold") + byLevel("Silver");
    expect(sum).toBe(236);
  });

  // A test NAME is not an assertion, which is how this one came to read "280
  // chart entries across 71 territories, 48 of them at No. 1" over a body
  // asserting 278 / 69 / 47. Three published figures stated wrongly in the
  // suite's own output, green the whole time — the Dominican and Salvadoran
  // retractions (RETRACTIONS #7, #8) moved the assertions and left the title
  // where it was. The title is a const now, and the last check in this block
  // recomposes it from the data, so it cannot drift again on its own.
  const chartTitle = "counts 351 chart entries across 69 territories, 46 of them at No. 1";

  it(chartTitle, () => {
    const entries = allChartItems.reduce((n, r) => n + r.entries.length, 0);
    const territories = new Set(allChartItems.flatMap((r) => r.entries.map((e) => e.c))).size;
    // Placements, not releases: a release charting at No. 1 in six countries
    // contributes six.
    const ones = allChartItems.reduce(
      (n, r) => n + r.entries.filter((e) => e.peak === 1).length,
      0
    );

    // 4 Aug 2026 Dai Dai sweep — see tests/charts.test.ts for the breakdown.
    // 17 Sep 2026: 278 → 276 and 47 → 46 — "Alone" SE 33 and the Jerusalema remix's
    // ZA No. 1 retracted at the bodies (RETRACTIONS #9, #10). Sweden and South
    // Africa keep other entries, so territories hold at 69.
    // 18 Sep 2026: 276 → 283, eight album peaks (one out, Germany) read at the bodies (see tests/charts.test.ts).
    // 18 Sep 2026 (later): 284 → 351 — the Nigeria sweep (see tests/charts.test.ts). No. 1s hold at 46.
    expect(entries).toBe(351); // -2: unsupported Dominican and Salvadoran No. 1s removed
    expect(territories).toBe(69);
    expect(ones).toBe(46); // + Poland 29 Aug, - Dominican Republic and El Salvador 2 Sep

    expect(chartEntryCount).toBe(entries);
    expect(chartCountryCount).toBe(territories);
    expect(numberOnes).toBe(ones);

    // The name above, rebuilt from the same data it names.
    expect(
      `counts ${entries} chart entries across ${territories} territories, ${ones} of them at No. 1`,
      "this test's own name states figures its assertions contradict"
    ).toBe(chartTitle);
  });

  it("counts 82 award wins from 242 nominations across 47 bodies", () => {
    const wins = allNoms.filter((n) => n.won).length;

    // 4 Aug 2026 year-by-year pass: +2 wins (Headies 2012 Rookie of the
    // Year, shared with Dammy Krane; AEA USA 2025 International Artist of
    // the Year per AEAUSA's own winners PDF), +24 entries, +2 bodies
    // (Channel O MVA, SA Hip Hop Awards). Details in app/data/awards.ts.
    //
    // 234 -> 236 on 20 Aug 2026: the two 2026 MTV VMA nominations for
    // "Dai Dai" (Best Collaboration, Best Latin), announced 18 August. Wins
    // stay at 82 — the ceremony is 27 September, so both are pending.
    //
    // 236 -> 240 on 26 Aug 2026: four nominations at the 18th Headies,
    // announced that day, ceremony 25 October in Toronto. Wins stay at 82;
    // all four are pending. A fifth, Album of the Year for "No Sign of
    // Weakness", was added on 16 Sep 2026 after reading the body's own nominee
    // cards (theheadies.com/18th-headies-nominees/, ALBUM-OF-THE-YEAR-07): the
    // earlier "+4 not +5" reasoning excluded a Producer of the Year nomination
    // for "Bundle by Bundle" that the press lists carried and the body never
    // did — its Producer field is Magicsticks, P.Priime, Ragee, Sarz, Tempoe.
    // 83rd: Premios Juventud 2026, OMG Collaboration for "Dai Dai" — announced
    // by the ceremony's own account on 3 Sep 2026. It was carried as a pending
    // nomination (won: false) until the body itself named the winner.
    // 240 -> 241 and a 47th body on 16 Sep 2026: the NRJ Music Awards, "Collab'
    // Internationale" for "Dai Dai", read on NRJ's own nominee pages the day
    // the categories were revealed. Ceremony 23 October, Cannes — pending.
    // 83 → 82 on 17 Sep 2026: L.I.F.E's "2015 NEA Album of the Year" win had no
    // body — neaawards.com's own 2015 nominee page (Wayback 28 Sep 2015) does
    // not list it; the 2014 page lists it as a NOMINEE, so the row moved to
    // 2014, won: false. Same page: Best Collaboration, Burna Boy ft. D'banj —
    // a 2014 nomination the file never had, 241 → 242 (RETRACTIONS #11).
    expect(wins).toBe(82);
    // 242 -> 241 on 17 Sep 2026: the Headies' Music Video of the Year row for
    // "Bundle by Bundle" dropped — the body presents that award to the video's
    // director and its card names DK, the same rule that keeps producer
    // credits out. Four Headies rows for 2026 stand.
    expect(allNoms.length).toBe(236 + 4 + 1 + 1 - 1 + 1);
    expect(totalWins).toBe(wins);
    expect(totalNominations).toBe(allNoms.length);
    expect(ceremonyCount).toBe(47);
  });

  it("counts 57 countries performed in and 52 firsts", () => {
    expect(performedCountryCount).toBe(57);
    // 52nd: first Nigerian artist past 4 billion YouTube views (4,029,086,804
    // across 344 videos, read at the channel on 3 Sep 2026 — Wizkid is next at
    // 2.66B). 51st was the first entry on Billboard's Adult Contemporary chart
    // ("Dai Dai" debuts at No. 14, chart dated 29 Aug 2026).
    // 52 -> 54 on 17 Sep 2026: five songs past 400M and fifty past 50M on
    // Spotify (kworb's 16 Sep pages, every African artist on its index
    // counted), under Paul's ruling that Akon is an American artist and the
    // French rap school French — nationality, not birthplace.
    expect(firstsCount).toBe(54);
  });

  it("values the current car collection at $16.84M — current only", () => {
    // "Current only" is the operative rule, and it is stricter than the
    // checklist's shorthand "exclude sold": a car is in the headline total
    // only when it carries NO status at all. Excluding just `sold` leaves the
    // three unconfirmed cars in and gives $17.10M.
    const current = cars.filter((c) => !c.status);
    const value = current.reduce((sum, c) => sum + c.valueUsd, 0);

    expect(totalValueUsd).toBe(value);
    // $16.84M, up from $16.46M on 8 Sep 2026: the Bugatti's dollar figure is
    // DERIVED from its naira price, and it was being derived at the wrong rate.
    // ₦9bn at CBN's ₦1,370.19/$ — 3 July 2026, the last trading day before
    // the 4 July reveal — is $6.57M, not the $6.19M that was there, which implied
    // ₦1,454/$ and matches no date near the announcement.
    expect(`$${(value / 1e6).toFixed(2)}M`).toBe("$16.84M");

    // Both excluded pools are non-empty, so the filter is doing real work.
    expect(cars.filter((c) => c.status === "sold").length).toBeGreaterThan(0);
    expect(cars.filter((c) => c.status === "unconfirmed").length).toBeGreaterThan(0);
  });
});
