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
import { matches } from "../app/lib/certs";

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
    expect(totalAwards()).toBe(212);
    expect(countryCount).toBe(22);
    expect(certifiedReleaseCount).toBe(81);
  });
});

describe("certHistory (certifications by year)", () => {
  it("every event references a known country code", () => {
    for (const e of certHistory) {
      expect(COUNTRIES[e.country], `${e.title} → ${e.country}`).toBeTruthy();
    }
  });

  it("2026 has the published count of 34 certifications", () => {
    expect(certHistory.filter((e) => e.year === 2026).length).toBe(34);
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
