import { describe, it, expect } from "vitest";
import {
  afrobeatsArtists,
  sweptArtists,
  pendingArtists,
  chartEntries,
  chartNo1s,
  certCount,
  countryCount,
  tierCount,
  topAward,
  artistBySlug,
} from "../app/data/afrobeats";
import { countryMeta } from "../app/data/afrobeats";

// These totals are the published output of the 15–17 Aug 2026 register sweeps.
// They are pinned because the data file is GENERATED from those documents, and
// a generator bug is silent: the first pass parsed the words inside a removal
// annotation ("the 🇿🇦 Diamond was REMOVED") as a real certification, which gave
// Davido a Diamond he does not have while leaving his total untouched. Totals
// alone would not have caught it — the tier split is what did.
const EXPECTED = {
  wizkid: { total: 155, diamond: 6 },
  davido: { total: 91, diamond: 0 },
  rema: { total: 80, diamond: 4 },
  tems: { total: 70, diamond: 1 },
  tyla: { total: 62, diamond: 2 },
  "ayra-starr": { total: 41, diamond: 2 },
} as const;

describe("the Afrobeats board", () => {
  it("carries every swept artist", () => {
    expect(sweptArtists.map((a) => a.slug).sort()).toEqual(Object.keys(EXPECTED).sort());
  });

  it("carries the artists whose sweep is still scheduled, with no figures", () => {
    expect(pendingArtists.map((a) => a.slug).sort()).toEqual(["asake", "omah-lay", "seyi-vibez"]);
    // The whole point of the pending state: a tile, never a number we cannot source.
    for (const a of pendingArtists) {
      expect(certCount(a), a.slug).toBe(0);
      expect(a.charts.length, a.slug).toBe(0);
      expect(a.chartPublished, a.slug).toBeUndefined();
    }
  });

  for (const [slug, exp] of Object.entries(EXPECTED)) {
    it(`${slug}: ${exp.total} certifications, ${exp.diamond} Diamond`, () => {
      const a = artistBySlug(slug)!;
      expect(a, slug).toBeTruthy();
      expect(certCount(a), `${slug} total`).toBe(exp.total);
      expect(tierCount(a, "Diamond"), `${slug} Diamond`).toBe(exp.diamond);
    });
  }

  it("the tier split sums to the total for every artist", () => {
    for (const a of sweptArtists) {
      const sum =
        tierCount(a, "Diamond") + tierCount(a, "Platinum") + tierCount(a, "Gold") + tierCount(a, "Silver");
      expect(sum, `${a.slug} split`).toBe(certCount(a));
    }
  });

  it("every chart peak is a plausible position", () => {
    for (const a of sweptArtists)
      for (const r of a.charts)
        for (const e of r.entries) {
          expect(e.peak, `${a.slug} → ${r.title} → ${e.c}`).toBeGreaterThanOrEqual(1);
          expect(e.peak).toBeLessThanOrEqual(500);
        }
  });

  // The sweep documents annotate rows as they are worked — "(new)", "(2021)",
  // "(reinstated)", "(register-only find)". Those are notes to the researcher,
  // not part of a release title, and 83 of them shipped into the first
  // generated file. The parser strips them; this keeps them stripped.
  it("no release title carries a sweep annotation", () => {
    const annot = /\((?:new|reinstated|title track|archive-only|register-only[^)]*|19\d\d|20\d\d)\)/i;
    for (const a of afrobeatsArtists)
      for (const r of [...a.releases, ...a.charts])
        expect(annot.test(r.title), `${a.slug} → ${r.title}`).toBe(false);
  });

  it("cover art, where present, is a real https URL", () => {
    for (const a of afrobeatsArtists)
      for (const r of [...a.releases, ...a.charts])
        if (r.cover) expect(r.cover, `${a.slug} → ${r.title}`).toMatch(/^https:\/\/\S+$/);
  });

  it("every country code resolves to real metadata", () => {
    // Resolves against Burna's COUNTRIES map first, then the board's own
    // extension — these artists chart in places he holds no plaque (Mexico).
    for (const a of afrobeatsArtists)
      for (const r of [...a.releases.flatMap((x) => x.certs.map((c) => c.c)), ...a.charts.flatMap((x) => x.entries.map((e) => e.c))].map((c) => ({ c })))
        for (const c of [r]) {
          const meta = countryMeta(c.c);
          expect(meta.name, `${a.slug} → ${c.c}`).not.toBe(c.c);
          expect(meta.flag).not.toBe("🏳️");
        }
  });

  it("no release lists the same country twice", () => {
    for (const a of afrobeatsArtists)
      for (const r of a.releases) {
        const codes = r.certs.map((c) => c.c);
        expect(new Set(codes).size, `${a.slug} → ${r.title}`).toBe(codes.length);
      }
  });

  it("multipliers, where present, are >= 2", () => {
    for (const a of afrobeatsArtists)
      for (const r of a.releases)
        for (const c of r.certs) if (c.x !== undefined) expect(c.x).toBeGreaterThanOrEqual(2);
  });

  it("every artist has a verified Spotify id and image", () => {
    for (const a of afrobeatsArtists) {
      expect(a.spotifyId, a.slug).toMatch(/^[A-Za-z0-9]{22}$/);
      expect(a.image, a.slug).toMatch(/^https:\/\/i\.scdn\.co\//);
    }
  });

  it("every swept artist has a top award and countries", () => {
    for (const a of sweptArtists) {
      expect(topAward(a), a.slug).toBeTruthy();
      expect(countryCount(a), a.slug).toBeGreaterThan(0);
    }
  });

  // The chart detail is machine-extracted from the sweep documents while the
  // headline is the sweep's own verified figure. Extracting MORE than the
  // headline means the parser is reading something that is not a chart entry —
  // which is exactly how summary rows once became fake releases.
  it("chart detail never exceeds the verified headline", () => {
    for (const a of sweptArtists) {
      const detail = a.charts.reduce((n, r) => n + r.entries.length, 0);
      expect(detail, `${a.slug} detail vs headline`).toBeLessThanOrEqual(chartEntries(a));
      const detailNo1 = a.charts.reduce((n, r) => n + r.entries.filter((e) => e.peak === 1).length, 0);
      expect(detailNo1, `${a.slug} No. 1s`).toBe(chartNo1s(a));
    }
  });

  it("no chart release lists the same country twice", () => {
    for (const a of sweptArtists)
      for (const r of a.charts) {
        const codes = r.entries.map((e) => e.c);
        expect(new Set(codes).size, `${a.slug} → ${r.title}`).toBe(codes.length);
      }
  });
});
