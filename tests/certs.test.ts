import { describe, it, expect } from "vitest";
import {
  COUNTRIES,
  allItems,
  totalAwards,
  countryCount,
  certifiedReleaseCount,
  tierOf,
  certHistory,
  intlCertHistory,
  type Release,
} from "../app/data/certifications";
import { matches, badgeWeight, byMostCertified, MARKET_WEIGHT } from "../app/lib/certs";

describe("certification data integrity", () => {
  it("every cert references a known country code", () => {
    for (const item of allItems) {
      for (const c of item.certs) {
        expect(COUNTRIES[c.c], `${item.title} → ${c.c}`).toBeTruthy();
      }
    }
  });

  // A correction that removes a release's LAST plaque — the Portugal passes
  // turned one recorded cert back into a proven zero — is a two-part edit, and
  // dropping the cert without dropping the release leaves a row behind that
  // still publishes an award. homeData's topAward() folds the empty cert list
  // with Math.max(), which is -Infinity, so the ledger row reads "Silver · 0
  // certs · 0 countries": a plaque this site does not hold, on the page whose
  // whole claim is that every figure was read at source.
  it("every certified release holds at least one certification", () => {
    const bare = allItems.filter((i) => i.certs.length === 0).map((i) => i.title);
    expect(bare, `certified releases with no certs: ${bare.join(", ")}`).toEqual([]);
  });

  it("no release lists the same country twice", () => {
    for (const item of allItems) {
      const codes = item.certs.map((c) => c.c);
      expect(new Set(codes).size, item.title).toBe(codes.length);
    }
  });

  it("every country is used by at least one release", () => {
    const used = new Set(allItems.flatMap((i) => i.certs.map((c) => c.c)));
    for (const code of Object.keys(COUNTRIES)) {
      expect(used.has(code), `unused country: ${code}`).toBe(true);
    }
  });

  it("multipliers, when present, are >= 2", () => {
    for (const item of allItems) {
      for (const c of item.certs) {
        if (c.x !== undefined) expect(c.x).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it("derived totals stay consistent", () => {
    expect(certifiedReleaseCount).toBe(allItems.length);
    expect(countryCount).toBe(Object.keys(COUNTRIES).length);
    expect(totalAwards()).toBe(
      allItems.reduce((n, i) => n + i.certs.length, 0)
    );
  });

  it("matches the published headline figures", () => {
    expect(totalAwards()).toBe(234); // + "Dai Dai" Platinum in Austria (IFPI Austria, 3 Sep 2026)
    expect(countryCount).toBe(26);
    expect(certifiedReleaseCount).toBe(85); // TaTaTa, Update, Love, Dem Dey join via TCSN
  });
});

describe("certHistory (certifications by year)", () => {
  it("every event references a known country code", () => {
    for (const e of certHistory) {
      expect(COUNTRIES[e.country], `${e.title} → ${e.country}`).toBeTruthy();
    }
  });

  // The 27 Jul 2026 Spain upgrade rewrote its Gold row into a Platinum instead
  // of adding one, silently deleting an award. Every OTHER Dai Dai upgrade kept
  // both rows, so the shape of the data itself is the check: where a release is
  // certified above the entry tier in a country, and the log records an upgrade
  // for its siblings, it should record one here too.
  it("keeps both rows for every Dai Dai Gold→Platinum upgrade", () => {
    const dd = certHistory.filter((e) => e.title === "Dai Dai" && e.year === 2026);
    for (const country of ["ES", "SK", "PT", "HU"]) {
      const levels = dd.filter((e) => e.country === country).map((e) => e.level);
      expect(levels, `${country} should log Gold then Platinum`).toEqual(["Gold", "Platinum"]);
    }
    // France went further: SNEP upgraded it again to Diamant on 31 Aug 2026 at
    // 50 million equivalent streams. Three rows, one plaque, same append rule.
    expect(dd.filter((e) => e.country === "FR").map((e) => e.level)).toEqual([
      "Gold", "Platinum", "Diamond",
    ]);
  });

  it("2026 logs 56 international certifications (64 events with Nigeria)", () => {
    // The by-year log is international-only: earlier years predate the TCSN
    // register, so Nigeria's 8 events would skew the comparison. They still
    // count in the totals. The log counts award EVENTS, so a Gold and a later
    // Platinum in the same country are two.
    expect(intlCertHistory.filter((e) => e.year === 2026).length).toBe(56);
    // 54th and 55th: the French Diamant upgrade and Poland's Gold, both
    // awarded 31 Aug 2026 and both missing from this log until 3 Sep.
    // 56th: Austria's Platinum for "Dai Dai", read in IFPI Austria's own
    // Gold & Platin database the day it was awarded, 3 Sep 2026.
    expect(certHistory.filter((e) => e.year === 2026).length).toBe(64);
  });

  it("2025 has the published count of 29 certifications", () => {
    expect(certHistory.filter((e) => e.year === 2025).length).toBe(29);
  });

  it("2024 has the published count of 20 certifications", () => {
    expect(certHistory.filter((e) => e.year === 2024).length).toBe(20);
  });

  it("2023 has the published count of 43 certifications", () => {
    // 39 + the four Swedish awards of 2023-08-16, read at GLF/Grammotex,
    // less "Gbona"'s Portuguese Gold, which moved to 2022 once AFP/Audiogest's
    // TOP Anual 2022 was read at the body: it is already OU there (1555), and
    // that report's Gal. column freezes at 29 Dec 2022. 2023 was never
    // supportable, only unchecked.
    expect(certHistory.filter((e) => e.year === 2023).length).toBe(43);
  });

  it("the four Portuguese Golds are dated to the AFP report that shows them", () => {
    const pt = (title: string) =>
      certHistory.find((e) => e.country === "PT" && e.title === title)?.year;
    // TOP Anual 2020 badges both; the TOP Anual 2019 leaves both blank.
    expect(pt("Own It")).toBe(2020);
    expect(pt("Location")).toBe(2020);
    // Blank through the 2020 annual (1940), OU in the 2022 annual (1555).
    expect(pt("Gbona")).toBe(2022);
    // The only one the weeklies settle: OU in Semana 08 de 2025.
    expect(pt("We Pray")).toBe(2025);
  });
});

describe("tierOf", () => {
  it("maps each level to its CSS tier", () => {
    expect(tierOf("Diamond")).toBe("diamond");
    expect(tierOf("Platinum")).toBe("platinum");
    expect(tierOf("Gold")).toBe("gold");
    expect(tierOf("Silver")).toBe("silver");
  });
});

describe("matches() filter logic", () => {
  const item: Release = {
    title: "Test",
    certs: [
      { c: "FR", level: "Diamond" },
      { c: "NG", level: "Platinum", x: 5 },
    ],
  };

  it("returns true with no active filter", () => {
    expect(matches(item, null, null)).toBe(true);
  });
  it("matches on country", () => {
    expect(matches(item, "FR", null)).toBe(true);
    expect(matches(item, "US", null)).toBe(false);
  });
  it("matches on tier", () => {
    expect(matches(item, null, "Platinum")).toBe(true);
    expect(matches(item, null, "Gold")).toBe(false);
  });
  it("matches on country + tier together", () => {
    expect(matches(item, "FR", "Platinum")).toBe(true);
    expect(matches(item, "US", "Platinum")).toBe(false);
  });
});

// Ordering weight. A BPI Silver is 200,000 units — more than a Gold is worth in
// several markets — so the grid must not rank plaques by tier name alone.
describe("certification ordering", () => {
  it("ranks a UK Silver above a Nigerian Gold", () => {
    // The case that prompted this: single-cert releases tied on count, so the
    // weight decides, and tier-only weighting put every NG Gold on top.
    expect(badgeWeight({ c: "UK", level: "Silver" })).toBeGreaterThan(
      badgeWeight({ c: "NG", level: "Gold" })
    );
  });

  it("still ranks a higher tier above a lower one in the same market", () => {
    expect(badgeWeight({ c: "NG", level: "Platinum" })).toBeGreaterThan(
      badgeWeight({ c: "NG", level: "Gold" })
    );
    expect(badgeWeight({ c: "US", level: "Diamond" })).toBeGreaterThan(
      badgeWeight({ c: "US", level: "Platinum" })
    );
  });

  it("counts a multiplier, but only within the same market", () => {
    expect(badgeWeight({ c: "NG", level: "Platinum", x: 4 })).toBeGreaterThan(
      badgeWeight({ c: "NG", level: "Platinum" })
    );
    // The case that prompted the change: a 4x Platinum in a smaller market was
    // jumping ahead of a Gold in a bigger one.
    expect(badgeWeight({ c: "FR", level: "Gold" })).toBeGreaterThan(
      badgeWeight({ c: "NG", level: "Platinum", x: 4 })
    );
  });

  it("puts every other market ahead of the smallest-threshold one", () => {
    const ng = badgeWeight({ c: "NG", level: "Diamond", x: 10 }); // best case NG
    for (const c of ["US", "UK", "FR", "DE", "CA", "AU", "IT", "ES", "NL", "BR"]) {
      expect(badgeWeight({ c, level: "Silver" }), `${c} Silver vs NG`).toBeGreaterThan(ng);
    }
  });

  // Without this, adding a 26th country silently falls back to a default
  // weight and lands mid-table for reasons nobody can see.
  it("every certified country has an explicit weight", () => {
    const used = new Set(allItems.flatMap((r) => r.certs.map((c) => c.c)));
    const missing = [...used].filter((c) => MARKET_WEIGHT[c] === undefined);
    expect(missing, `no MARKET_WEIGHT for: ${missing.join(", ")}`).toEqual([]);
  });

  it("ordering never changes the totals it is applied to", () => {
    const before = totalAwards();
    [...allItems].sort(byMostCertified);
    expect(totalAwards()).toBe(before);
  });
});

describe("the dated log keeps up with the releases", () => {
  /**
   * "Dai Dai"'s plaques have to reach certHistory as well as the release.
   *
   * The release list and the dated log are maintained by hand in separate
   * places, and the published by-year figures ("2026 logs N certifications")
   * are counted off the LOG. So a plaque added to a release and not to the log
   * is invisible — the badge row shows it, the year count does not, and nothing
   * disagrees loudly enough to notice. "Dai Dai" carried a French Diamond and a
   * Polish Gold that way from 31 Aug to 3 Sep 2026, and the 2026 count ran two
   * short the whole time.
   *
   * This checks "Dai Dai" only, and that is deliberate rather than lazy. The
   * log is a DATED record that begins where the site began reading registers:
   * Last Last's French Diamond, the pre-TCSN Nigerian plaques and several older
   * Scandinavian ones are on their releases and legitimately absent here. A
   * release cert carries no award year, so nothing in the data distinguishes
   * "awarded before the log started" from "never logged" — a repo-wide version
   * of this check reports 26 rows and every one of them is expected.
   *
   * "Dai Dai" is exempt from that ambiguity: it was released in 2026, so every
   * plaque it holds falls inside the log's own window.
   */
  it("every Dai Dai plaque appears in the dated log at its current tier", () => {
    const release = allItems.find((r) => r.title === "Dai Dai");
    expect(release, "Dai Dai should be in the release list").toBeTruthy();
    const missing: string[] = [];
    for (const c of release!.certs) {
      const rows = certHistory.filter((e) => e.title === "Dai Dai" && e.country === c.c);
      if (!rows.length) missing.push(`${c.c} ${c.level} is on the release, absent from the log`);
      else if (!rows.some((e) => e.level === c.level))
        missing.push(`${c.c} is ${c.level} on the release, log stops at ${rows.map((e) => e.level).join("/")}`);
    }
    expect(missing).toEqual([]);
  });
});
