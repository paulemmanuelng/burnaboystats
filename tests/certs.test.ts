import { describe, it, expect } from "vitest";
import {
  COUNTRIES,
  allItems,
  totalAwards,
  countryCount,
  certifiedReleaseCount,
  tierOf,
  certHistory,
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
    expect(totalAwards()).toBe(222); // 222nd: WGFT NG Platinum (TCSN), added 3 Aug 2026
    expect(countryCount).toBe(25);
    expect(certifiedReleaseCount).toBe(81);
  });
});

describe("certHistory (certifications by year)", () => {
  it("every event references a known country code", () => {
    for (const e of certHistory) {
      expect(COUNTRIES[e.country], `${e.title} → ${e.country}`).toBeTruthy();
    }
  });

  it("2026 has the published count of 44 certifications", () => {
    // 44th: “Dai Dai” Single Platine from SNEP, 3 Aug 2026 (upgrade from Gold).
    expect(certHistory.filter((e) => e.year === 2026).length).toBe(44);
  });

  it("2025 has the published count of 29 certifications", () => {
    expect(certHistory.filter((e) => e.year === 2025).length).toBe(29);
  });

  it("2024 has the published count of 20 certifications", () => {
    expect(certHistory.filter((e) => e.year === 2024).length).toBe(20);
  });

  it("2023 has the published count of 39 certifications", () => {
    expect(certHistory.filter((e) => e.year === 2023).length).toBe(39);
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
