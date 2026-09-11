import { describe, it, expect } from "vitest";
import { comparableArtists, priceArtist, unitsForCert } from "../app/lib/certUnits";
import { afrobeatsArtists, certCount, plaqueLabel } from "../app/data/afrobeats";
import { totalAwards } from "../app/data/certifications";

/**
 * Every artist's certifications page and the compare page read the same
 * plaques the same way — pinned, after Paul found a 19× Platinum missing from
 * a total (12 Sep 2026; it was behind the featured-appearances switch).
 *
 * For all sixteen: the plaque count the certs page prints equals the count the
 * engine holds; every multiplier the certs page prints is the multiplier the
 * engine prices (units = N × the tier's threshold); and every plaque is either
 * priced or listed with a reason — nothing falls through.
 */
describe("the compare page counts what the certifications pages count", () => {
  it.each(comparableArtists.map((a) => [a.name, a] as const))("%s", (_name, a) => {
    const board = afrobeatsArtists.find((x) => x.slug === a.slug);
    const pageCount = a.slug === "burna-boy" ? totalAwards() : certCount(board!);
    const certs = a.releases.flatMap((r) => r.certs.map((c) => ({ r, c })));
    expect(certs.length, "certs page vs engine").toBe(pageCount);

    const p = priceArtist(a, { includeNigeria: true, includeFeatures: true });
    expect(p.pricedPlaques + p.excludedPlaques, "priced + listed = every plaque").toBe(certs.length);

    for (const { r, c } of certs) {
      const shown = Number(plaqueLabel(c).match(/^(\d+)×/)?.[1] ?? 1);
      expect(c.x ?? 1, `${r.title} ${c.c}: label says ${shown}×`).toBe(shown);
      const u = unitsForCert(c, r.format);
      if (u.units !== null) {
        const base = unitsForCert({ ...c, x: 1 }, r.format).units!;
        expect(u.units, `${r.title} ${c.c}: N × tier`).toBe(base * (c.x ?? 1));
      }
    }
  });

  it("what cannot be priced is exactly Poland's singles (revenue), Greece and Colombia (no thresholds)", () => {
    const bodies = new Set<string>();
    for (const a of comparableArtists)
      for (const e of priceArtist(a, { includeNigeria: true, includeFeatures: true }).excluded) bodies.add(`${e.country}/${e.format}`);
    expect([...bodies].sort()).toEqual(["CO/single", "GR/single", "PL/single"]);
  });
});
