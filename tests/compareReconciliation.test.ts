import { describe, it, expect } from "vitest";
import { comparableArtists, priceArtist, unitsForCert } from "../app/lib/certUnits";
import { exactThresholdFor } from "../app/data/certThresholds";
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
        // N × the tier, plus one of the lower tier where the body awarded a
        // half step on top (AMPROFON's "Platino & Oro" — "4× Platinum + Gold").
        // Taken at the tier's EXACT level and floored once (5 Oct 2026): ČNS
        // IFPI's 2× Platinum is floor(2 × 5,000,000 / 222) = 45,045, where
        // twice the floored level is 45,044.
        const { plus, ...main } = c;
        const base = exactThresholdFor(c.c, r.format, c.level, c.body)!;
        const half = plus ? exactThresholdFor(c.c, r.format, plus, c.body)! : { num: 0, den: base.den };
        expect(half.den, `${r.title} ${c.c}: one scale`).toBe(base.den);
        expect(u.units, `${r.title} ${c.c}: N × tier (+ half step)`).toBe(Math.floor((base.num * (c.x ?? 1) + half.num) / base.den));
        // …and where the level is a whole number of units, that is N × the
        // floored tier exactly, as it always was.
        if (base.den === 1) {
          const whole = unitsForCert({ ...main, x: 1 }, r.format).units!;
          const halfUnits = plus ? unitsForCert({ ...main, level: plus, x: 1 }, r.format).units! : 0;
          expect(u.units).toBe(whole * (c.x ?? 1) + halfUnits);
        }
      }
    }
  });

  it("what cannot be priced is exactly Colombia (no thresholds)", () => {
    // Greece (GR/single, 7 plaques) left this set on 20 Sep 2026 when it was
    // priced at IFPI's June 2013 level and marked ¶, and Poland (PL/single,
    // 8 plaques) on 23 Sep 2026 when ZPAV's złoty were divided by its own 2 zł
    // a single, ¶ too — see certThresholds.ts.
    const bodies = new Set<string>();
    for (const a of comparableArtists)
      for (const e of priceArtist(a, { includeNigeria: true, includeFeatures: true }).excluded) bodies.add(`${e.country}/${e.format}`);
    expect([...bodies].sort()).toEqual(["CO/single"]);
  });
});
