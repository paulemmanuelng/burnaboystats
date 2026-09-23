import { describe, it, expect } from "vitest";
import {
  certCountryCodes,
  countryBoards,
  countryCopy,
  countryFromSlug,
  countrySlug,
  priceCountry,
} from "../app/lib/certCountry";
import { comparableArtists, priceArtist } from "../app/lib/certUnits";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";

/**
 * The country view is a PIVOT of the compare engine, not a second one. If these
 * ever disagree the site prints two different figures for the same plaques —
 * Canada at 720,000 on one page and 715,000 on another — and a reader who
 * noticed would be right to stop trusting both.
 */
const OPTS = { includeNigeria: true, includeFeatures: true };

describe("one country, every artist — reconciled against priceArtist", () => {
  it("agrees line for line with the compare engine, in every country", () => {
    const mismatches: string[] = [];
    for (const code of certCountryCodes()) {
      const board = priceCountry(code, OPTS);
      for (const artist of comparableArtists) {
        const priced = priceArtist(artist, OPTS);
        const counted = priced.byCountry.find((l) => l.country === code) ?? null;
        const listed = priced.listed.find((l) => l.country === code) ?? null;
        const line = board.lines.find((l) => l.artist.slug === artist.slug) ?? null;

        if (!counted && !listed) {
          if (line) mismatches.push(`${code}/${artist.slug}: country view has a line the compare engine does not`);
          continue;
        }
        if (!line) {
          mismatches.push(`${code}/${artist.slug}: compare engine has a line the country view drops`);
          continue;
        }
        const units = counted?.units ?? 0;
        const countedPlaques = counted?.releases ?? 0;
        const unpriced = (counted?.notCounted?.plaques ?? 0) + (listed?.releases ?? 0);
        if (line.units !== units) mismatches.push(`${code}/${artist.slug}: units ${line.units} vs ${units}`);
        if (line.counted !== countedPlaques) mismatches.push(`${code}/${artist.slug}: counted ${line.counted} vs ${countedPlaques}`);
        if (line.notCounted !== unpriced) mismatches.push(`${code}/${artist.slug}: not counted ${line.notCounted} vs ${unpriced}`);
      }
    }
    expect(mismatches).toEqual([]);
  });

  it("every plaque in the corpus lands on exactly one country board, priced or listed", () => {
    // Rule 1 collapses a release's awards to its highest, so the board's plaque
    // count is one per release per country — the same denominator the compare
    // page prints. This asserts the collapse, not the raw cert rows.
    const expected = new Map<string, number>();
    for (const a of comparableArtists)
      for (const r of a.releases)
        for (const c of r.certs) expected.set(`${a.slug}|${r.title}|${r.format}|${c.c}`, 1);
    const collapsed = [...expected.keys()].length;
    const onBoards = countryBoards(OPTS).reduce((n, b) => n + b.plaques, 0);
    expect(onBoards).toBe(collapsed);
  });

  it("features off drops featured appearances and nothing else", () => {
    const on = priceCountry("UK", OPTS);
    const off = priceCountry("UK", { includeNigeria: true, includeFeatures: false });
    const featured = on.lines.flatMap((l) => l.plaqueList.filter((p) => p.isFeature)).length;
    expect(featured).toBeGreaterThan(0);
    expect(on.plaques - off.plaques).toBe(featured);
  });
});

describe("the country routes", () => {
  it("one slug per country, no collisions, and every slug resolves back", () => {
    const codes = certCountryCodes();
    const slugs = codes.map(countrySlug);
    expect(new Set(slugs).size).toBe(codes.length);
    expect(slugs.every((s) => /^[a-z0-9-]+$/.test(s))).toBe(true);
    for (const code of codes) expect(countryFromSlug(countrySlug(code))).toBe(code);
    expect(countryFromSlug("not-a-country")).toBe(null);
  });

  it("covers every country the threshold table prices, and no country it does not know", () => {
    // The two lists are independent: the thresholds are researched per body,
    // the boards are derived from the plaques. A country in one and not the
    // other means either an unpriceable plaque arrived or a body was added
    // for a country nobody holds a plaque in — both worth a failing test.
    const boards = certCountryCodes().sort();
    expect(boards).toEqual(Object.keys(CERT_THRESHOLDS).sort());
  });
});

describe("the country pages' copy", () => {
  it("title and description fit Google's display limits for every country", () => {
    const over: string[] = [];
    for (const b of countryBoards({ includeNigeria: true, includeFeatures: true })) {
      const c = countryCopy(b);
      if (c.title.length > 60) over.push(`${b.name}: title ${c.title.length}`);
      if (c.description.length > 160) over.push(`${b.name}: description ${c.description.length}`);
    }
    expect(over).toEqual([]);
  });
});
