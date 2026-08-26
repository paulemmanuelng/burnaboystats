import { describe, it, expect } from "vitest";
import { artistFaqs } from "../app/lib/boardFaqs";
import sitemap from "../app/sitemap";
import { HEAD_TO_HEAD, opponentOf } from "../app/lib/headToHead";
import { totalAwards, countryCount as burnaCountryCount } from "../app/data/certifications";
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
  asake: { total: 80, diamond: 0 },
  "omah-lay": { total: 61, diamond: 2 },
  "seyi-vibez": { total: 103, diamond: 0 },
  wizkid: { total: 157, diamond: 6 },
  victony: { total: 22, diamond: 0 },
  "fireboy-dml": { total: 36, diamond: 1 },
  davido: { total: 91, diamond: 0 },
  rema: { total: 80, diamond: 4 },
  tems: { total: 70, diamond: 1 },
  tyla: { total: 62, diamond: 2 },
  "ayra-starr": { total: 41, diamond: 2 },
  ckay: { total: 28, diamond: 2 },
} as const;

describe("the Afrobeats board", () => {
  it("carries every swept artist", () => {
    expect(sweptArtists.map((a) => a.slug).sort()).toEqual(Object.keys(EXPECTED).sort());
  });

  it("has no artist left waiting for a sweep", () => {
    // Asake, Omah Lay and Seyi Vibez were swept on 19 Aug 2026. The pending
    // state and its guards stay — the board will take more artists — but
    // nobody is in it today.
    expect(pendingArtists.map((a) => a.slug).sort()).toEqual([]);
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
  // genuinely did. Anything else that matches is the duplication bug that
  // produced the swap, so the exceptions are listed one by one and each has to
  // earn its place.
  const SAME_ON_BOTH_GLOBALS = new Set([
    // Water peaked at No. 6 on both, verified.
    "tyla/Water",
    // "love nwantiti" is No. 2 on the Global 200, read off a chart table.
    // Its Global Excl. US peak is ALSO recorded as 2 and is the weaker figure:
    // no chart table carries a Global Excl. US row for it, and billboard.com is
    // paywalled, so it rests on Billboard's own chart-beat coverage. It is kept
    // rather than deleted because it predates this check and is plausible — a
    // song this driven by non-US streaming sits at or above its Global 200 peak
    // once the US is removed — but it is the one entry here NOT backed by a
    // table someone read. If a Global Excl. US table ever becomes readable,
    // check this first.
    "ckay/love nwantiti (ah ah ah)",
  ]);

  it("keeps the two worldwide charts distinct", () => {
    for (const a of sweptArtists)
      for (const r of a.charts) {
        const glb = r.entries.find((e) => e.c === "GLB");
        const glbx = r.entries.find((e) => e.c === "GLBX");
        if (glb && glbx && glb.peak === glbx.peak)
          expect(
            SAME_ON_BOTH_GLOBALS.has(`${a.slug}/${r.title}`),
            `${a.slug}/${r.title} holds the same peak on both worldwide charts — verify it, then add it to SAME_ON_BOTH_GLOBALS`,
          ).toBe(true);
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
    // A pending artist's own page stays out — it has no verified figures to
    // rank for. Their live board is a different thing: platform charts are
    // readable today, so it is indexable and listed.
    for (const a of pendingArtists) {
      expect(routes.some((u) => u.endsWith(`/afrobeats/${a.slug}`)), a.slug).toBe(false);
      expect(routes.some((u) => u.endsWith(`/afrobeats/${a.slug}/charts`)), a.slug).toBe(false);
    }
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
    // "Dynamite" is the one live disagreement between two SOURCES; see below.
    // "Bad Girl" was a second, and was settled: Wizkid's file had Nigeria #4
    // from its text-mined block, which that document itself flags as
    // unverifiable, while Asake's later sweep read #2 in the register.
    // Nothing is excused any more. "Dynamite" ZA was the last exception and is
    // settled: Wizkid's file deletes "Money & Love" ZA #98 on the ground that
    // TOSAC published a Top 10 in that window, and #45 fails the same test.
    // Two titles collide across boards WITHOUT being the same record, which the
    // title-only key above cannot see. Both were checked in TurnTable's own
    // chart data before being excused:
    //   "Pressure" is FIVE different records there — M3LON #43, Peruzzi ft.
    //   Fireboy DML #25, Seyi Vibez #1, Seyi Vibez & French Montana #1, and
    //   Wizkid #39. Fireboy's #25 and Seyi Vibez's #1 are different songs that
    //   share a very common title.
    //   "Apollo" is Victony's SINGLE (category 1, #82) against Fireboy DML's
    //   ALBUM of the same name (category 2, #39) — different chart, different
    //   record. The `kind` field already says so on both rows.
    // Anything else that lands here is a real disagreement and must be settled,
    // not added to this list.
    const known = new Set<string>(["Pressure|NG", "Apollo|NG"]);
    const conflicts: string[] = [];
    for (const [title, per] of shared()) {
      const slugs = [...per.keys()];
      const codes = new Set([...per.values()].flatMap((m) => [...m.keys()]));
      for (const c of codes) {
        // Only where BOTH boards carry the country. One sweep recording a
        // territory another's did not reach is coverage, not disagreement —
        // each sweep covers its own artist's credits.
        const peaks = slugs.map((s) => per.get(s)!.get(c)).filter((p) => p !== undefined);
        if (peaks.length > 1 && new Set(peaks).size > 1) conflicts.push(`${title}|${c}`);
      }
    }
    expect(conflicts.filter((c) => !known.has(c))).toEqual([]);
  });

  it("still carries the shared records it is supposed to", () => {
    // Twenty-five records now sit on two boards at once — the three sweeps of
    // 19 Aug added thirteen, because Asake, Omah Lay and Seyi Vibez guest on
    // each other's records and on the six already here. Pinned so a record
    // cannot quietly appear on, or vanish from, a second board.
    expect(shared().map(([t]) => t).sort()).toEqual(
      [
        "2 Sugar", "99", "Alaska", "Apollo", "Bad Girl", "Bad Vibes", "Bandana",
        "Dynamite", "Essence", "Gang", "Gimme Dat", "Jogodo", "MMS", "MY HEALER",
        "No Competition", "One Call", "Pressure", "REAL, Vol. 1 – EP", "Soweto",
        "Stubborn", "Turbulence", "Uptown Disco", "Who's Dat Girl", "With You",
        "Won Da Mo",
      ].sort()
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
  it("keeps the three newest hooks true to their sweeps", () => {
    // Written from the 19 Aug sweeps. Each states a figure, so each is checked
    // against the data rather than left to drift.
    const asake = artistBySlug("asake")!;
    expect(chartNo1s(asake), "Asake No. 1s").toBe(24);
    expect(asake.charts.every((r) => r.entries.every((e) => e.peak !== 1 || e.c === "NG")), "all Asake No. 1s Nigerian").toBe(true);
    expect(asake.hook).toContain("24 Nigerian No. 1s");

    const omah = artistBySlug("omah-lay")!;
    const diamonds = omah.releases.flatMap((r) => r.certs.filter((c) => c.level === "Diamond"));
    expect(diamonds.length, "Omah Lay Diamonds").toBe(2);
    expect(diamonds.every((c) => c.c === "FR"), "both French").toBe(true);
    expect(countryCount(omah), "Omah Lay countries").toBe(9);
    expect(omah.hook).toContain("nine countries");

    const seyi = artistBySlug("seyi-vibez")!;
    expect(certCount(seyi)).toBe(103);
    expect(chartEntries(seyi)).toBe(114);
    // The whole point of his line: everything he has is Nigerian.
    expect(new Set(seyi.releases.flatMap((r) => r.certs.map((c) => c.c)))).toEqual(new Set(["NG"]));
    expect(new Set(seyi.charts.flatMap((r) => r.entries.map((e) => e.c)))).toEqual(new Set(["NG"]));
  });

  it("claims a first only where a named award makes it datable", () => {
    const firsts = afrobeatsArtists.filter((a) => /\bfirst\b/i.test(a.hook)).map((a) => a.slug);
    expect(firsts).toEqual(["tyla"]);
    expect(artistBySlug("tyla")!.hook).toContain("first Best African Music Performance Grammy");
  });
});

// ── Head to head ───────────────────────────────────────────────────────────
// The pairings are editorial, but their SHAPE is not: a pairing that is not
// mutual shows one artist a rival who does not show them back, and a pairing
// pointing at an unswept artist renders a blank cell.
describe("head-to-head pairings", () => {
  it("gives every swept artist exactly one opponent", () => {
    for (const a of sweptArtists) {
      expect(HEAD_TO_HEAD[a.slug], `${a.slug} has no opponent`).toBeTruthy();
      expect(opponentOf(a), `${a.slug} resolves to nothing`).not.toBeNull();
    }
  });

  it("pairs artists mutually, and never with themselves", () => {
    for (const [slug, rival] of Object.entries(HEAD_TO_HEAD)) {
      expect(rival, `${slug} is paired with itself`).not.toBe(slug);
      // Burna has no board page, so his side of the pairing lives off the board.
      if (rival === "burna-boy") continue;
      expect(HEAD_TO_HEAD[rival], `${slug} → ${rival} is not returned`).toBe(slug);
    }
  });

  it("points off the board only where the comparison earns it", () => {
    // Two artists measure against Burna, and the list is closed on purpose: a
    // pairing that leaves the board has to say something a peer pairing could
    // not. Wizkid because that argument IS the genre's; Tyla because her 23
    // certifying countries are the only spread within eight of his 26.
    // Anything else here would be the "he is bigger" page this map replaced.
    const againstBurna = Object.entries(HEAD_TO_HEAD)
      .filter(([, rival]) => rival === "burna-boy")
      .map(([slug]) => slug)
      .sort();
    expect(againstBurna).toEqual(["tyla", "wizkid"]);
  });

  it("only ever points at a swept artist", () => {
    for (const [slug, rival] of Object.entries(HEAD_TO_HEAD)) {
      if (rival === "burna-boy") continue;
      const o = afrobeatsArtists.find((x) => x.slug === rival);
      expect(o, `${slug} → ${rival} is not a board artist`).toBeTruthy();
      expect(o!.swept, `${slug} → ${rival} is not swept`).toBe(true);
    }
  });
});

// ── The hub scatter ────────────────────────────────────────────────────────
// The plot's whole claim is "every dot verified", so the pairs must be the same
// numbers the tiles show, and they must fall inside the axes the design draws.
describe("hub scatter", () => {
  const X_MAX = 26;
  const Y_MAX = 240;

  it("plots every swept artist plus Burna Boy", () => {
    expect(sweptArtists.length + 1).toBe(13);
  });

  it("keeps every pair inside the drawn axes", () => {
    const pairs: [string, number, number][] = [
      ["Burna Boy", burnaCountryCount, totalAwards()],
      ...sweptArtists.map((a) => [a.name, countryCount(a), certCount(a)] as [string, number, number]),
    ];
    for (const [name, x, y] of pairs) {
      expect(x, `${name} x`).toBeGreaterThanOrEqual(0);
      expect(x, `${name} x past the axis`).toBeLessThanOrEqual(X_MAX);
      expect(y, `${name} y`).toBeGreaterThanOrEqual(0);
      expect(y, `${name} y past the axis`).toBeLessThanOrEqual(Y_MAX);
    }
  });

  it("leaves Burna Boy the deepest and widest dot on the board", () => {
    for (const a of sweptArtists) {
      expect(certCount(a), `${a.name} plaques`).toBeLessThan(totalAwards());
      expect(countryCount(a), `${a.name} countries`).toBeLessThanOrEqual(burnaCountryCount);
    }
  });
});

// ── Cover art ──────────────────────────────────────────────────────────────
// Cover art was originally resolved by TITLE ALONE, so wherever two artists had
// a song of the same name the wrong artist's artwork won: Omah Lay's "Reason"
// wore Asake's Mr. Money With The Vibe sleeve, his "You" wore Davido's 5ive.
//
// The hooks make comparative claims — "the only artist who", "more than anyone
// else" — against data that moves under them. Two shipped wrong: Tems claimed
// the board's only US Diamond while Wizkid's "One Dance" is also one, and
// Davido claimed seventeen Nigerian No. 1s and the most in the field when the
// data says sixteen and Asake has 24 — a claim that contradicted Asake's own
// hook on the same page. Superlatives get pinned to what the data actually says.
describe("hooks agree with the data underneath them", () => {
  const usDiamondHolders = () =>
    afrobeatsArtists
      .filter((a) => a.releases.some((r) => r.certs.some((c) => c.c === "US" && c.level === "Diamond")))
      .map((a) => a.slug)
      .sort();

  const ngNumberOnes = (slug: string) =>
    afrobeatsArtists
      .find((a) => a.slug === slug)!
      .charts.filter((r) => r.entries.some((e) => e.c === "NG" && e.peak === 1)).length;

  it("no artist can claim the board's ONLY US Diamond — two hold one", () => {
    expect(usDiamondHolders()).toEqual(["tems", "wizkid"]);
    for (const a of afrobeatsArtists)
      expect(a.hook, `${a.slug} hook`).not.toMatch(/only artist in this field/i);
  });

  it("Asake leads the Nigerian No. 1s, and Davido's hook says his real count", () => {
    const counts = afrobeatsArtists.map((a) => [a.slug, ngNumberOnes(a.slug)] as const);
    const top = [...counts].sort((x, y) => y[1] - x[1])[0];
    expect(top[0]).toBe("asake");
    const davido = afrobeatsArtists.find((a) => a.slug === "davido")!;
    expect(ngNumberOnes("davido")).toBe(16);
    expect(davido.hook).toContain("sixteen");
    expect(davido.hook, "must not out-claim Asake").not.toMatch(/anyone else|more than any/i);
  });
});

// Two artists SHOULD share a cover when the entry is the same recording — a
// collaboration, or a track on the other's album. Every pair below was checked
// against Deezer's contributor list, not just its title. A NEW pair appearing
// here is not automatically wrong, but it is unverified: check it the same way
// before adding it, because a wrong cover is worse than none.
describe("cover art", () => {
  const VERIFIED_SHARES = [
    // Verified 21 Aug 2026 when Victony and Fireboy DML gained full artwork.
    // Most of the new pairs are ALBUM covers legitimately shared between tracks
    // from the same album that different board artists guest on — checked by
    // reading the album's track list, not by title:
    //   tyla+victony — Lojay's "XOXO" carries BOTH "Memories" (Tyla) and
    //     "Sawa" (Victony).
    //   seyi-vibez+victony — BNXN's "CAPTAIN" carries BOTH "Set Up" (Seyi
    //     Vibez) and "Cough Syrup" (Victony).
    //   davido+omah-lay+victony — Davido's album art, and Victony is on
    //     "Holy Water" from it.
    //   fireboy-dml+rema — "Compromise" is Fireboy ft. Rema; the second pair
    //     is Olamide album art shared by "Shibebe" and "Mukulu".
    //   asake+fireboy-dml — "Bandana" and "Uptown Disco", both genuinely
    //     shared recordings.
    // Every cover was also checked against Deezer to confirm none belongs to
    // an artist who is not on the record: 109 checked, none wrong.
    // CKay joined 26 Aug 2026. His three shared covers are all real shared
    // recordings, checked against Deezer's contributor list: "Beggie Beggie" is
    // Ayra Starr's record featuring him (its cover is her "19 & Dangerous"
    // art, which is what revealed it was a FEATURE and not a lead single),
    // "La La" sits on Davido's "A Better Time", and "WATAWI" is his own with
    // Davido on it — so "ckay+davido" legitimately appears twice.
    "asake+ayra-starr", "asake+davido", "asake+fireboy-dml",
   "asake+fireboy-dml", "asake+rema", "asake+seyi-vibez+wizkid", "asake+tems",
   "asake+victony", "asake+wizkid", "asake+wizkid", "asake+wizkid",
   "ayra-starr+ckay", "ayra-starr+omah-lay", "ayra-starr+rema",
   "ayra-starr+rema", "ayra-starr+seyi-vibez", "ayra-starr+wizkid",
   "ckay+davido", "ckay+davido", "davido+omah-lay+victony",
   "fireboy-dml+rema", "fireboy-dml+rema", "omah-lay+seyi-vibez",
   "omah-lay+tems", "omah-lay+wizkid", "rema+victony", "seyi-vibez+victony",
   "tems+wizkid",
  ];

  const sharedPairs = () => {
    const byCover = new Map<string, Set<string>>();
    for (const a of afrobeatsArtists) {
      for (const r of a.releases) {
        if (!r.cover) continue;
        if (!byCover.has(r.cover)) byCover.set(r.cover, new Set());
        byCover.get(r.cover)!.add(a.slug);
      }
    }
    return [...byCover.values()]
      .filter((s) => s.size > 1)
      .map((s) => [...s].sort().join("+"))
      .sort();
  };

  it("shares a cover across artists only where the recording is shared", () => {
    expect(sharedPairs()).toEqual(VERIFIED_SHARES);
  });

  // The list above only walks `releases`. The chart rows carry covers too, and
  // that is where Omah Lay's "Blessings" sat wearing Fridayy's "Blessings
  // (Remix)" sleeve — Asake's feature — while Omah Lay's is KAESTYLE's, on
  // "Kae's Study" (contributors: KAESTYLE, Omah Lay). Releases-only checking
  // could not see it, so this walks both lists.
  const VERIFIED_SHARES_WITH_CHARTS = [

    // CKay joined 26 Aug 2026. His three shared covers are all real shared
    // recordings, checked against Deezer's contributor list: "Beggie Beggie" is
    // Ayra Starr's record featuring him (its cover is her "19 & Dangerous"
    // art, which is what revealed it was a FEATURE and not a lead single),
    // "La La" sits on Davido's "A Better Time", and "WATAWI" is his own with
    // Davido on it — so "ckay+davido" legitimately appears twice.
    "asake+ayra-starr", "asake+davido", "asake+fireboy-dml",
   "asake+fireboy-dml", "asake+rema", "asake+seyi-vibez+wizkid", "asake+tems",
   "asake+victony", "asake+wizkid", "asake+wizkid", "asake+wizkid",
   "ayra-starr+ckay", "ayra-starr+omah-lay", "ayra-starr+rema",
   "ayra-starr+rema", "ayra-starr+seyi-vibez", "ayra-starr+wizkid",
   "ckay+davido", "ckay+davido", "davido+omah-lay+victony",
   "fireboy-dml+rema", "fireboy-dml+rema", "omah-lay+seyi-vibez",
   "omah-lay+tems", "omah-lay+tyla", "omah-lay+wizkid", "rema+victony",
   "seyi-vibez+victony", "tems+wizkid", "tyla+victony",
  ];

  it("shares a cover across artists only where the recording is shared, charts included", () => {
    const byCover = new Map<string, Set<string>>();
    for (const a of afrobeatsArtists) {
      for (const r of [...a.releases, ...a.charts]) {
        if (!r.cover) continue;
        if (!byCover.has(r.cover)) byCover.set(r.cover, new Set());
        byCover.get(r.cover)!.add(a.slug);
      }
    }
    const pairs = [...byCover.values()]
      .filter((s) => s.size > 1)
      .map((s) => [...s].sort().join("+"))
      .sort();
    expect(pairs).toEqual(VERIFIED_SHARES_WITH_CHARTS);
  });

  it("gives Omah Lay's Blessings KAESTYLE's sleeve, not Asake's", () => {
    const omah = afrobeatsArtists.find((a) => a.slug === "omah-lay")!;
    const asake = afrobeatsArtists.find((a) => a.slug === "asake")!;
    const theirs = [...asake.releases, ...asake.charts]
      .filter((r) => r.title.startsWith("Blessings"))
      .map((r) => r.cover);
    const ours = [...omah.releases, ...omah.charts]
      .find((r) => r.title === "Blessings")?.cover;
    expect(ours, "Omah Lay's Blessings").toBeTruthy();
    expect(theirs.length, "Asake's Blessings rows").toBeGreaterThan(0);
    expect(theirs).not.toContain(ours);
  });

  it("never gives Omah Lay Asake's or Davido's sleeve", () => {
    const omah = afrobeatsArtists.find((a) => a.slug === "omah-lay")!;
    const asake = afrobeatsArtists.find((a) => a.slug === "asake")!;
    const mmwtv = asake.releases.find((r) => r.title === "Mr. Money With The Vibe")?.cover;
    const reason = omah.releases.find((r) => r.title === "Reason")?.cover;
    expect(reason, "Omah Lay's Reason").toBeTruthy();
    expect(reason).not.toBe(mmwtv);
  });

  it("leaves a cover off rather than showing the wrong one", () => {
    // Seyi Vibez's "Ama" wore the MY HEALER single's sleeve, and that release is
    // a one-track single — so it cannot be right. No correct art was findable,
    // so the field is absent and the monogram fallback renders.
    const seyi = afrobeatsArtists.find((a) => a.slug === "seyi-vibez")!;
    expect(seyi.releases.find((r) => r.title === "Ama")?.cover).toBeUndefined();
  });
});

// The FAQ's comparison must read off the same map as the head-to-head panel.
// It first shipped measuring every artist against Burna Boy — the exact mistake
// headToHead.ts was written to undo ("nine pages asked the same question and
// got the same answer: he is bigger"). He is the opponent for Wizkid alone.
describe("board FAQ comparisons", () => {
  const comparisonOf = (slug: string) => {
    const a = afrobeatsArtists.find((x) => x.slug === slug)!;
    return artistFaqs(a).find((f) => f.q.startsWith("Is "));
  };

  it("measures each artist against its head-to-head peer, not Burna Boy", () => {
    for (const a of afrobeatsArtists) {
      const cmp = comparisonOf(a.slug);
      const rival = opponentOf(a);
      if (!rival) {
        expect(cmp, `${a.slug} has no pairing, so it must have no comparison`).toBeUndefined();
        continue;
      }
      expect(cmp?.q, `${a.slug} comparison`).toBe(`Is ${a.name} more certified than ${rival.name}?`);
    }
  });

  it("names Burna Boy in exactly the two FAQs that point off the board", () => {
    const mentions = afrobeatsArtists
      .filter((a) => comparisonOf(a.slug)?.q.includes("Burna Boy"))
      .map((a) => a.slug)
      .sort();
    expect(mentions).toEqual(["tyla", "wizkid"]);
  });

  it("agrees with itself from either side of a mutual pairing", () => {
    for (const a of afrobeatsArtists) {
      const rival = opponentOf(a);
      if (!rival || rival.isBurna) continue;
      const mine = comparisonOf(a.slug)!.a;
      const theirs = comparisonOf(rival.href.split("/").pop()!)!.a;
      const pair = [mine, theirs];
      const yes = pair.filter((t) => t.startsWith("Yes")).length;
      const no = pair.filter((t) => t.startsWith("No.")).length;
      const level = pair.filter((t) => t.startsWith("They are level")).length;
      // Either the two are level from both sides, or exactly one says yes and
      // the other says no. Both claiming "yes" would mean the pair disagrees
      // about which record is bigger.
      const coherent = level === 2 || (yes === 1 && no === 1);
      expect(coherent, `${a.slug} vs ${rival.name}: ${yes} yes / ${no} no / ${level} level`).toBe(true);
    }
  });
});
