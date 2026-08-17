import { describe, it, expect } from "vitest";
import sitemap from "../app/sitemap";
import {
  afrobeatsArtists,
  sweptArtists,
  pendingArtists,
  chartEntries,
  chartTerritories,
  chartNo1s,
  certCount,
  countryCount,
  tierCount,
  topAward,
  artistBySlug,
  plaqueLabel,
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

  // The chart rows are extracted from the sweep documents; the headline is the
  // sweep's own verified figure. They now agree exactly for every artist, so
  // this is equality rather than a bound: a row that goes missing, a peak that
  // moves to the wrong chart, or a parser that invents an entry all break it.
  it("chart rows reproduce each sweep's published headline exactly", () => {
    for (const a of sweptArtists) {
      expect(a.chartPublished, a.slug).toBeTruthy();
      expect(chartEntries(a), `${a.slug} entries`).toBe(a.chartPublished!.entries);
      expect(chartTerritories(a), `${a.slug} territories`).toBe(a.chartPublished!.territories);
      expect(chartNo1s(a), `${a.slug} No. 1s`).toBe(a.chartPublished!.no1s);
    }
  });

  // Billboard's two worldwide charts are the one pair a reader cannot sanity-
  // check by eye, and the sweep documents disagree on which globe emoji means
  // which — Wizkid's file uses 🌐 for the Global 200, Tems's uses 🌍. The first
  // extraction pass applied one convention to every file and silently swapped
  // eleven of Tems's peaks while leaving her totals correct. These are read off
  // each document directly.
  it("pins both Billboard worldwide charts where an artist holds them", () => {
    const globals: Record<string, Record<string, { GLB?: number; GLBX?: number }>> = {
      tems: {
        Raindance: { GLB: 12, GLBX: 8 },
        "Wait For U": { GLB: 2, GLBX: 29 },
        Essence: { GLB: 28, GLBX: 60 },
        Fountains: { GLB: 26, GLBX: 45 },
        Move: { GLB: 53, GLBX: 179 },
        "Bunce Road Blues": { GLB: 75 },
      },
      rema: {
        "Calm Down": { GLB: 3, GLBX: 1 },
        Secondhand: { GLB: 39, GLBX: 94 },
        Baby: { GLB: 192, GLBX: 148 },
      },
      "ayra-starr": {
        Rush: { GLB: 115, GLBX: 87 },
        Santa: { GLB: 24, GLBX: 14 },
      },
      wizkid: { Essence: { GLB: 28, GLBX: 60 } },
      tyla: { Water: { GLB: 6, GLBX: 6 }, Chanel: { GLB: 11, GLBX: 8 } },
    };
    for (const [slug, releases] of Object.entries(globals)) {
      const a = artistBySlug(slug)!;
      for (const [title, want] of Object.entries(releases)) {
        const row = a.charts.find((r) => r.title === title);
        expect(row, `${slug} → ${title}`).toBeTruthy();
        for (const [code, peak] of Object.entries(want))
          expect(row!.entries.find((e) => e.c === code)?.peak, `${slug} → ${title} → ${code}`).toBe(peak);
      }
    }
  });

  // A release cannot hold the same position on both worldwide charts unless it
  // genuinely did (Water did, at No. 6). Anything else that matches is the
  // duplication bug that produced the swap.
  it("keeps the two worldwide charts distinct", () => {
    for (const a of sweptArtists)
      for (const r of a.charts) {
        const glb = r.entries.find((e) => e.c === "GLB");
        const glbx = r.entries.find((e) => e.c === "GLBX");
        if (glb && glbx && glb.peak === glbx.peak)
          expect(`${a.slug}/${r.title}`, "identical worldwide peaks").toBe("tyla/Water");
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

// The three "sweep scheduled" pages carry no figures, and read alike. They are
// noindex until their registers are read — and a noindexed page must not be in
// the sitemap. Both flip on their own the week `swept` becomes true.
describe("the board's crawl surface", () => {
  it("keeps pending artists out of the sitemap and swept artists in", async () => {
    const routes = (await sitemap()).map((e) => e.url);
    for (const a of sweptArtists) {
      expect(routes.some((u) => u.endsWith(`/afrobeats/${a.slug}`)), a.slug).toBe(true);
      if (a.charts.length)
        expect(routes.some((u) => u.endsWith(`/afrobeats/${a.slug}/charts`)), `${a.slug} charts`).toBe(true);
    }
    for (const a of pendingArtists)
      expect(routes.some((u) => u.includes(`/afrobeats/${a.slug}`)), a.slug).toBe(false);
  });

  it("gives every swept artist a chart board and no pending artist one", () => {
    for (const a of sweptArtists) expect(a.charts.length, a.slug).toBeGreaterThan(0);
    for (const a of pendingArtists) expect(a.charts.length, a.slug).toBe(0);
  });
});

// The tier LABEL is the thing a reader screenshots, and a multiplier is the
// easiest part of it to drop — "Water" shipped as a plain Brazilian Diamond
// when Pro-Música's register carries it at 2×, understating the biggest plaque
// on the board. These are the highest award each swept artist holds, read from
// their certification sweeps.
describe("the board's headline plaques", () => {
  const TOP = [
    ["tyla", "Water", "BR", "2× Diamond"],
    ["tyla", "Water", "FR", "Diamond"],
    ["wizkid", "One Dance", "US", "Diamond"],
    ["wizkid", "One Dance", "AU", "17× Platinum"],
    ["tems", "Wait For U", "US", "Diamond"],
    ["rema", "Calm Down", "FR", "Diamond"],
  ] as const;

  it("labels each artist's biggest plaque exactly as its register does", () => {
    for (const [slug, title, code, label] of TOP) {
      const a = artistBySlug(slug)!;
      const cert = a.releases.find((r) => r.title === title)?.certs.find((c) => c.c === code);
      expect(cert, `${slug} → ${title} → ${code}`).toBeTruthy();
      expect(plaqueLabel(cert!), `${slug} → ${title} → ${code}`).toBe(label);
    }
  });
});

// Six records appear on two boards at once, and the boards were built from six
// separate sweep documents that never saw each other. Where two artists share a
// record, the site must not publish two different answers for the same chart.
describe("records that appear on two boards", () => {
  const shared = () => {
    const byTitle = new Map<string, Map<string, Map<string, number>>>();
    for (const a of sweptArtists)
      for (const r of a.charts) {
        if (!byTitle.has(r.title)) byTitle.set(r.title, new Map());
        const per = byTitle.get(r.title)!;
        per.set(a.slug, new Map(r.entries.map((e) => [e.c, e.peak])));
      }
    return [...byTitle].filter(([, per]) => per.size > 1);
  };

  it("gives one answer per chart for every co-credited record", () => {
    // "Dynamite" is the one live disagreement, and it is a conflict between the
    // SOURCES, not a slip: Wizkid's sweep registers a South African #45 while
    // flagging every TOSAC peak in that file unverified, and Tyla's sweep
    // removes the same row as sitting below TOSAC's published depth in that
    // release window. Pinned here so it stays visible and nothing else joins it
    // silently — Paul's call which sweep wins.
    const known = new Set(["Dynamite|ZA"]);
    const conflicts: string[] = [];
    for (const [title, per] of shared()) {
      const slugs = [...per.keys()];
      const codes = new Set([...per.values()].flatMap((m) => [...m.keys()]));
      for (const c of codes) {
        const peaks = slugs.map((s) => per.get(s)!.get(c));
        if (new Set(peaks).size > 1) conflicts.push(`${title}|${c}`);
      }
    }
    expect(conflicts.filter((c) => !known.has(c))).toEqual([]);
  });

  it("still carries the shared records it is supposed to", () => {
    expect(shared().map(([t]) => t).sort()).toEqual(
      ["2 Sugar", "Dynamite", "Essence", "Gimme Dat", "Who's Dat Girl", "Won Da Mo"].sort()
    );
  });
});

// Wizkid's tile used to read "Afrobeats' first global crossover", which is a
// claim about history the site cannot source — Paul's call to drop it (17 Aug
// 2026). What replaced it is a claim about the register, so it is checked
// against the register: if a sixth country certifies "One Dance" Diamond, this
// fails and the sentence gets rewritten rather than quietly going stale.
describe("hooks that state a figure", () => {
  it("keeps Wizkid's hook true to the ledger", () => {
    const a = artistBySlug("wizkid")!;
    const oneDance = a.releases.find((r) => r.title === "One Dance");
    const diamonds = oneDance!.certs.filter((c) => c.level === "Diamond");
    expect(diamonds.length, "One Dance Diamond countries").toBe(5);
    expect(a.hook).toContain("Diamond in five countries");
    // And the comparative half: most-certified on this board after Burna Boy.
    const ranked = [...sweptArtists].sort((x, y) => certCount(y) - certCount(x));
    expect(ranked[0].slug).toBe("wizkid");
  });

  // Not a ban on the word: Tyla's hook says she won the FIRST Best African
  // Music Performance Grammy, which is a dated fact about a named award. What
  // is not sourceable is a "first" about the genre's own history — who crossed
  // over first, who broke a market first. So this is a tripwire: a new hook
  // claiming a first has to be added here deliberately, and justified.
  it("claims a first only where a named award makes it datable", () => {
    const firsts = afrobeatsArtists.filter((a) => /\bfirst\b/i.test(a.hook)).map((a) => a.slug);
    expect(firsts).toEqual(["tyla"]);
    expect(artistBySlug("tyla")!.hook).toContain("first Best African Music Performance Grammy");
  });
});
