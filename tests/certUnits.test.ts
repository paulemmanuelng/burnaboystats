import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  CERT_THRESHOLDS,
  exclusionFor,
  thresholdFor,
  type CertFormat,
} from "../app/data/certThresholds";
import {
  compare,
  comparableArtists,
  artistBySlug,
  internationalCountryCount,
  isHomeMarketArtist,
  nigeriaDefault,
  nigeriaShare,
  priceArtist,
  priceRelease,
  unitsForCert,
  type ComparableArtist,
} from "../app/lib/certUnits";

const bySlug = (s: string) => {
  const a = artistBySlug(s);
  if (!a) throw new Error(`no artist ${s}`);
  return a;
};

describe("thresholds are sourced, never invented", () => {
  it("every priced country names the page it was read on", () => {
    for (const c of Object.values(CERT_THRESHOLDS)) {
      if (c.single || c.album) {
        expect(c.sourceUrl, `${c.code} is priced but cites no source`).toMatch(/^https?:\/\//);
      }
    }
  });

  it("every unpriced format says WHY, so it can be shown to the reader", () => {
    for (const c of Object.values(CERT_THRESHOLDS)) {
      for (const f of ["single", "album"] as CertFormat[]) {
        if (c[f] === null) {
          expect(exclusionFor(c.code, f), `${c.code} ${f} is null with no reason`).toBeTruthy();
        }
      }
    }
  });

  it("normalised figures are exactly the body's printed number over its own divisor", () => {
    // Anchored to the divisors the BODIES publish, written out here rather than
    // read back from the module — a test that recomputes the value from the same
    // source it is checking would pass for any number at all.
    const cases: [string, CertFormat, keyof typeof CERT_THRESHOLDS.FR.single, number][] = [
      ["FR", "single", "gold", 150],
      ["FR", "single", "platinum", 150],
      ["FR", "single", "diamond", 150],
      ["DK", "single", "gold", 100],
      ["NO", "single", "platinum", 100],
      ["NL", "single", "gold", 215],
      ["NL", "album", "platinum", 2150],
    ];
    for (const [code, fmt, tier, divisor] of cases) {
      const raw = CERT_THRESHOLDS[code][`${fmt}Raw` as "singleRaw" | "albumRaw"]?.[tier];
      const got = CERT_THRESHOLDS[code][fmt]?.[tier];
      expect(raw, `${code} ${fmt} ${String(tier)} lost its printed figure`).toBeTruthy();
      // FLOOR, not nearest. A figure the page calls a floor must never round
      // upward; two Dutch cells had.
      expect(got).toBe(Math.floor((raw as number) / divisor));
    }
  });

  it("France's Gold single is 100,000 units, not 15,000,000 streams", () => {
    // Pinned to a literal so a regression to the printed stream count fails
    // loudly. Today's level; the 2016–18 floor of 66,666 is kept in `floor`.
    expect(thresholdFor("FR", "single", "Gold")).toBe(100_000);
    expect(CERT_THRESHOLDS.FR.singleRaw?.gold).toBe(15_000_000);
    expect(CERT_THRESHOLDS.FR.floor?.single?.gold).toBe(66_666);
  });

  it("refuses to price what no body publishes", () => {
    // Belgium, Czechia and Slovakia all left this list on 10-11 Sep 2026 once
    // their thresholds were found and independently verified — Belgium via
    // Ultratop, BRMA's awards operator; the other two in ČNS IFPI's own rules,
    // which publish a download equivalence the way France's do. Greece left
    // on 20 Sep 2026: priced at IFPI's June 2013 level (¶, `historic`) —
    // see "Greece is priced at IFPI's June 2013 level" below.
    for (const code of ["CO"]) {
      expect(thresholdFor(code, "single", "Platinum")).toBeNull();
      expect(thresholdFor(code, "album", "Platinum")).toBeNull();
    }
    // Poland left on 23 Sep 2026: its singles are ZPAV's złoty levels divided
    // by the 2 zł a single its own pre-2025 rules printed (¶, `historic`) —
    // see "Poland's singles are priced at ZPAV's own 2 zł a single" below.
    expect(thresholdFor("PL", "single", "Platinum")).toBe(125_000);
    expect(thresholdFor("PL", "album", "Platinum")).toBe(30_000);
  });

  it("a tier the body does not award stays null", () => {
    expect(thresholdFor("UK", "single", "Diamond")).toBeNull(); // BPI awards no Diamond
    expect(thresholdFor("NG", "single", "Diamond")).toBeNull(); // TCSN awards no Diamond
    expect(thresholdFor("US", "single", "Silver")).toBeNull(); // RIAA awards no Silver
    expect(thresholdFor("UK", "single", "Silver")).toBe(200_000); // BPI does
    expect(thresholdFor("NG", "single", "Silver")).toBe(25_000); // TCSN does
  });
});

describe("rule 1 — a release's own awards are never summed", () => {
  const fake = (certs: { c: string; level: "Gold" | "Platinum"; x?: number }[]): ComparableArtist => ({
    slug: "t",
    name: "T",
    image: "",
    href: "/",
    releases: [{ title: "One Song", format: "single", isFeature: false, certs }],
  });

  it("takes the highest award, not the total, when a release is certified twice in one country", () => {
    const upgraded = priceArtist(
      fake([
        { c: "UK", level: "Gold" },
        { c: "UK", level: "Platinum" },
        { c: "UK", level: "Platinum", x: 2 },
      ]),
      { includeNigeria: false, includeFeatures: false },
    );
    // 2x the BPI's published 600,000 single Platinum — NOT 400,000+600,000+1,200,000.
    expect(upgraded.total).toBe(1_200_000);
    expect(upgraded.byCountry).toHaveLength(1);
    expect(upgraded.byCountry[0].releases).toBe(1);
  });

  it("still adds DIFFERENT countries together", () => {
    const spread = priceArtist(fake([{ c: "UK", level: "Gold" }, { c: "US", level: "Gold" }]), {
      includeNigeria: false,
      includeFeatures: false,
    });
    expect(spread.total).toBe(400_000 + 500_000);
    expect(spread.byCountry).toHaveLength(2);
  });

  it("the live data holds no release certified twice in one country", () => {
    // If this ever fails, the rule above stops being theoretical — good.
    for (const a of comparableArtists) {
      for (const r of a.releases) {
        const seen = r.certs.map((c) => c.c);
        expect(new Set(seen).size, `${a.name} — ${r.title} has two plaques in one country`).toBe(
          seen.length,
        );
      }
    }
  });
});

describe("rule 2 — a multiplier rides whatever tier it sits on", () => {
  it("prices Tyla's 2x Diamond in Brazil off the DIAMOND threshold", () => {
    // The single live case in 1,212 plaques, and the reason this is not written
    // as a Platinum shortcut. 160,000 is the INTERNACIONAL Diamante — every
    // plaque here is international repertoire, and the Nacional 300,000 that
    // shipped first priced all fifteen Brazilian plaques at double.
    expect(thresholdFor("BR", "single", "Diamond")).toBe(160_000);
    expect(unitsForCert({ c: "BR", level: "Diamond", x: 2 }, "single").units).toBe(320_000);
    const water = priceRelease(bySlug("tyla"), "Water", {
      includeNigeria: true,
      includeFeatures: true,
    });
    expect(water).not.toBeNull();
    expect(water!.byCountry.find((l) => l.country === "BR")?.units).toBe(320_000);
  });

  it("an absent multiplier is 1, not 0", () => {
    expect(unitsForCert({ c: "UK", level: "Gold" }, "single").units).toBe(400_000);
  });
});

describe("rule 3 — what cannot be priced is counted and named", () => {
  it("reports the excluded plaques rather than scoring them zero in silence", () => {
    // Burna, not Wizkid, since 23 Sep 2026: Wizkid's only unpriced plaque was
    // Polish, and a loop over zero exclusions checks nothing. Burna holds
    // Colombia's "Dai Dai" Gold.
    const burna = priceArtist(bySlug("burna-boy"), { includeNigeria: true, includeFeatures: true });
    expect(burna.excludedPlaques).toBeGreaterThan(0);
    for (const e of burna.excluded) {
      // Long enough to be a reason a READER can act on. The first pass of this
      // file truncated each reason at its first full stop and shipped Belgium as
      // "Two-part failure." — true, and useless on screen.
      expect(e.why.length, `${e.country} ${e.format} reason is too terse to show`).toBeGreaterThan(60);
      expect(e.why, `${e.country} ${e.format} reason does not end in a sentence`).toMatch(/[.!?]$/);
      expect(e.plaques).toBeGreaterThan(0);
    }
  });

  it("excluded plaques never contribute units", () => {
    // Colombia publishes no threshold for either format.
    expect(unitsForCert({ c: "CO", level: "Gold" }, "single").units).toBeNull();
    expect(unitsForCert({ c: "CO", level: "Gold" }, "album").units).toBeNull();
  });

  it("Sweden and Mexico are priced at the stated 100-streams-to-a-unit ratio, and say so", () => {
    // Paul, 12 Sep 2026: "no cert should go unseen". Both bodies publish song
    // levels in streams and no download-equivalence (ifpi.se; AMPROFON's
    // criteria PDF), so the page converts at the ratio Denmark and Norway
    // publish and marks every such line with § — see `assumed`.
    expect(unitsForCert({ c: "SE", level: "Gold" }, "single").units).toBe(60_000);
    expect(unitsForCert({ c: "SE", level: "Platinum", x: 7 }, "single").units).toBe(840_000);
    expect(unitsForCert({ c: "SE", level: "Platinum" }, "album").units).toBe(30_000);
    expect(unitsForCert({ c: "MX", level: "Gold" }, "single").units).toBe(220_000);
    expect(unitsForCert({ c: "MX", level: "Diamond" }, "single").units).toBe(2_200_000);
    expect(CERT_THRESHOLDS.SE.assumed).toMatch(/100 streams to a unit/);
    expect(CERT_THRESHOLDS.MX.assumed).toMatch(/100 streams to a unit/);
    expect(CERT_THRESHOLDS.SE.singleRaw?.gold).toBe(6_000_000);
    expect(CERT_THRESHOLDS.MX.singleRaw?.gold).toBe(22_000_000);
    const p = priceArtist(bySlug("burna-boy"), { includeNigeria: false, includeFeatures: true });
    const se = p.byCountry.find((l) => l.country === "SE");
    expect(se?.counted).toBe(true);
    // One name for Sweden's certifier: IFPI Sverige (Paul, 24 Sep 2026).
    expect(se?.assumed).toMatch(/IFPI Sverige/);
    expect(se?.notCounted).toBeUndefined();
    expect(p.assumptions.some((a) => /IFPI Sverige/.test(a))).toBe(true);
  });
});

describe("the Nigeria default", () => {
  it("fires on 57 of the 120 pairs on the default view (every plaque), 63 with lead credits only", () => {
    // Both counts were measured from the plaque arrays by a separate script
    // before being pinned here, so a change to either clause has to be
    // deliberate. The two differ because the zero-international clause looks
    // at the SAME plaques the view will show: BNXN holds international plaques
    // only as features, so with features off he is a blank column and the six
    // pairs against non-home-market artists fire on him. The first version
    // counted 57 in both states and rendered him "at least 0". Since 12 Sep
    // 2026 every plaque counts by default, so 57 is the default view's count.
    const all = comparableArtists;
    const count = (includeFeatures: boolean) => {
      let n = 0;
      for (let i = 0; i < all.length; i++)
        for (let j = i + 1; j < all.length; j++)
          if (nigeriaDefault(all[i], all[j], includeFeatures).on) n++;
      return n;
    };
    expect(all).toHaveLength(16);
    expect(count(false)).toBe(63);
    expect(count(true)).toBe(57);
  });

  it("rescues BNXN on the default view, where all his international plaques are features", () => {
    const d = nigeriaDefault(bySlug("burna-boy"), bySlug("bnxn"), false);
    expect(d.on).toBe(true);
    expect(d.reason).toContain("BNXN");
    // With features on he is no longer blank, so the clause correctly stands down.
    expect(nigeriaDefault(bySlug("burna-boy"), bySlug("bnxn"), true).on).toBe(false);
  });

  it("rescues the blank-column pairs the home-market clause alone would miss", () => {
    // Burna is 27% Nigerian — not home-market — so clause one never fires here.
    const d = nigeriaDefault(bySlug("burna-boy"), bySlug("seyi-vibez"));
    expect(isHomeMarketArtist(bySlug("burna-boy"))).toBe(false);
    expect(internationalCountryCount(bySlug("seyi-vibez"))).toBe(0);
    expect(d.on).toBe(true);
    expect(d.reason).toContain("Seyi Vibez");
  });

  it("fires for two home-market artists", () => {
    expect(nigeriaDefault(bySlug("asake"), bySlug("olamide")).on).toBe(true);
  });

  it("leaves a healthy international pair alone", () => {
    expect(nigeriaDefault(bySlug("wizkid"), bySlug("rema")).on).toBe(false);
    expect(nigeriaDefault(bySlug("tems"), bySlug("tyla")).on).toBe(false);
  });

  it("always explains itself when it flips", () => {
    const all = comparableArtists;
    for (let i = 0; i < all.length; i++)
      for (let j = i + 1; j < all.length; j++) {
        const d = nigeriaDefault(all[i], all[j]);
        if (d.on) expect(d.reason, `${all[i].name} vs ${all[j].name}`).toBeTruthy();
        else expect(d.reason).toBeNull();
      }
  });

  it("the dropped third clause really is redundant", () => {
    // "or the international union is under 6 rows" was tested and changes zero
    // pairs. Pinned so nobody re-adds it believing it closes a gap.
    const all = comparableArtists;
    const intl = (a: ComparableArtist) =>
      new Set(a.releases.flatMap((r) => r.certs.map((c) => c.c)).filter((c) => c !== "NG"));
    let extra = 0;
    for (let i = 0; i < all.length; i++)
      for (let j = i + 1; j < all.length; j++) {
        const thin = new Set([...intl(all[i]), ...intl(all[j])]).size < 6;
        if (thin && !nigeriaDefault(all[i], all[j]).on) extra++;
      }
    expect(extra).toBe(0);
  });

  it("home-market membership is derived, and Asake is near the line", () => {
    // Not a typed list: Asake at ~89% would move on four plaques.
    expect(nigeriaShare(bySlug("asake"))).toBeGreaterThan(0.5);
    expect(nigeriaShare(bySlug("tyla"))).toBeLessThan(0.1);
    expect(comparableArtists.filter(isHomeMarketArtist)).toHaveLength(10);
  });
});

describe("the features toggle", () => {
  it("changes the total, and off is the default", () => {
    const lead = priceArtist(bySlug("burna-boy"), { includeNigeria: false, includeFeatures: false });
    const all = priceArtist(bySlug("burna-boy"), { includeNigeria: false, includeFeatures: true });
    expect(all.total).toBeGreaterThan(lead.total);
  });

  it("never filters out a song the reader explicitly picked", () => {
    // "Location" is a Dave record Burna features on. Asking for it by name must
    // return it even with the artist-level features toggle off.
    const picked = priceRelease(bySlug("burna-boy"), "Location", {
      includeNigeria: true,
      includeFeatures: false,
    });
    expect(picked).not.toBeNull();
    expect(picked!.release.isFeature).toBe(true);
    expect(picked!.total).toBeGreaterThan(0);
  });
});

describe("the comparison", () => {
  it("reproduces the design's fixture — 975,333 vs 6,180,000 since Sweden is priced — over 10 rows", () => {
    // The design file computed 915,333 vs 6,340,000 from today's thresholds
    // before the engine existed. One correction the design could not have
    // known about: its 6,340,000 carried Essence at 7x Platinum in South
    // Africa, an upgrade RiSA's register does not confirm (its badge is
    // Multi-Platinum, at least 3x). 6,340,000 − 160,000 = 6,180,000, and every
    // other cell is unchanged. Paul chose today's thresholds over the floor
    // rule on 11 Sep 2026; under the floor these would read 808,333 / 6,086,666.
    const c = compare(bySlug("burna-boy"), bySlug("wizkid"), { includeNigeria: false });
    const g = priceRelease(bySlug("burna-boy"), "Gbona", { includeNigeria: false, includeFeatures: true })!;
    const e = priceRelease(bySlug("wizkid"), "Essence", { includeNigeria: false, includeFeatures: true })!;
    // 915,333 in the design; +60,000 since 12 Sep 2026, when Gbona's Swedish
    // Gold was priced at 100 streams to a unit (§) instead of listed unsummed.
    expect(g.total).toBe(975_333);
    expect(e.total).toBe(6_180_000);
    const union = new Set([
      ...g.byCountry.map((l) => l.country), ...g.listed.map((l) => l.country),
      ...e.byCountry.map((l) => l.country), ...e.listed.map((l) => l.country),
    ]);
    expect(union.size).toBe(10);
    expect(g.byCountry.find((l) => l.country === "SE")?.counted).toBe(true);
    expect(g.byCountry.find((l) => l.country === "SE")?.assumed).toMatch(/Sverige|stream/i);
    expect(g.listed).toHaveLength(0);
    expect(c.nigeria.on).toBe(false);
  });

  it("Nigeria included adds Essence's 200,000 and nothing else", () => {
    const e = priceRelease(bySlug("wizkid"), "Essence", { includeNigeria: true, includeFeatures: true })!;
    expect(e.total).toBe(6_380_000);
    expect(e.nigeria.units).toBe(200_000);
  });

  it("pins Nigeria to the top of the table when it is included", () => {
    const c = compare(bySlug("seyi-vibez"), bySlug("black-sherif"));
    expect(c.options.includeNigeria).toBe(true);
    expect(c.rows[0].country).toBe("NG");
  });

  it("Gbona vs Essence produces a real, non-empty table", () => {
    const gbona = priceRelease(bySlug("burna-boy"), "Gbona", {
      includeNigeria: false,
      includeFeatures: true,
    });
    const essence = priceRelease(bySlug("wizkid"), "Essence", {
      includeNigeria: false,
      includeFeatures: true,
    });
    expect(gbona).not.toBeNull();
    expect(essence).not.toBeNull();
    expect(gbona!.total).toBeGreaterThan(0);
    expect(essence!.total).toBeGreaterThan(0);
    // Gbona holds no Nigerian plaque at all — TCSN's register postdates it.
    expect(gbona!.nigeria.plaques).toBe(0);
    expect(essence!.nigeria.plaques).toBe(1);
  });

  it("splits contested rows from one-sided ones, and folds only the tail", () => {
    const c = compare(bySlug("burna-boy"), bySlug("olamide"));
    const folded = c.collapsed.reduce((n, t) => n + t.rows.length, 0);
    // `rows` is what RENDERS; contested + uncontested is everything.
    expect(c.rows.length + folded).toBe(c.contested.length + c.uncontested.length);
    expect(c.uncontested.length).toBeGreaterThan(c.contested.length);
    expect(folded).toBeGreaterThan(0);
  });

  it("never folds a row where both sides hold a plaque", () => {
    // The rule the collapse exists to protect. Burna vs Olamide is eighteen rows
    // in which Olamide competes in exactly one — and that one must survive.
    for (const [x, y] of [
      ["burna-boy", "olamide"], ["tyla", "olamide"], ["rema", "asake"], ["burna-boy", "victony"],
    ] as const) {
      const c = compare(bySlug(x), bySlug(y));
      for (const tail of c.collapsed)
        for (const r of tail.rows)
          expect(r.contested, `${x} vs ${y} folded a contested row (${r.country})`).toBe(false);
      for (const r of c.contested) expect(c.rows).toContain(r);
    }
  });

  it("keeps a side's top three priced exclusives and folds only past six; unpriced rows stay", () => {
    const c = compare(bySlug("burna-boy"), bySlug("olamide"));
    const tail = c.collapsed.find((t) => t.side === "a");
    expect(tail).toBeTruthy();
    const unpriced = (r: (typeof c.rows)[number]) => (r.a && !r.a.counted) || (r.b && !r.b.counted) || r.a?.notCounted || r.b?.notCounted;
    const shownPricedExclusive = c.rows.filter((r) => !r.contested && r.a && r.country !== "NG" && !unpriced(r));
    expect(shownPricedExclusive.length).toBe(3);
    // Burna's Colombian plaque is his alone and unpriced: on screen, never in
    // the tail. Greece left this pin on 20 Sep 2026 — his Dai Dai Platinum is
    // priced at IFPI's 2013 level (6,000, ¶) and, ranking below the top three
    // exclusives, folds into the tail like any priced row — and Poland on
    // 23 Sep 2026, when its singles were priced at ZPAV's 2 zł a single.
    const shownUnpriced = c.rows.filter((r) => !r.contested && r.a && r.country !== "NG" && unpriced(r));
    expect(shownUnpriced.map((r) => r.country).sort()).toEqual(["CO"]);
    expect(tail!.rows.some(unpriced)).toBe(false);
    expect(tail!.units).toBeGreaterThan(0);
    const gr = [...c.rows, ...(tail?.rows ?? [])].find((r) => r.country === "GR");
    expect(gr?.a?.counted).toBe(true);
    expect(gr?.a?.units).toBe(6_000);
  });

  it("is symmetric — neither side is the home team", () => {
    const ab = compare(bySlug("wizkid"), bySlug("rema"));
    const ba = compare(bySlug("rema"), bySlug("wizkid"));
    expect(ab.a.total).toBe(ba.b.total);
    expect(ab.b.total).toBe(ba.a.total);
    expect(ab.rows.map((r) => r.country).sort()).toEqual(ba.rows.map((r) => r.country).sort());
  });

  it("respects an explicit override of the Nigeria default", () => {
    const auto = compare(bySlug("asake"), bySlug("olamide"));
    expect(auto.options.includeNigeria).toBe(true);
    const forced = compare(bySlug("asake"), bySlug("olamide"), { includeNigeria: false });
    expect(forced.options.includeNigeria).toBe(false);
    expect(forced.a.total).toBeLessThan(auto.a.total);
  });
});

describe("rule 4 — an award PROGRAMME overrides the country's own scale", () => {
  it("prices a RIAA Latin Platino at 60,000, not the standard programme's 1,000,000", () => {
    // certifications.ts has carried this warning in prose for months: "this 2x
    // Platino is ~120,000 units, NOT 2,000,000 ... Never total it against
    // standard-programme plaques as if the tiers meant the same thing." The
    // first version of the engine ignored `body` and did exactly that.
    expect(unitsForCert({ c: "US", level: "Platinum", x: 2 }, "single").units).toBe(2_000_000);
    expect(
      unitsForCert({ c: "US", level: "Platinum", x: 2, body: "RIAA Latin" }, "single").units,
    ).toBe(120_000);
  });

  it("prices Burna's own Latin plaque correctly inside a real total", () => {
    const daiDai = priceRelease(bySlug("burna-boy"), "Dai Dai", {
      includeNigeria: true,
      includeFeatures: true,
    });
    expect(daiDai).not.toBeNull();
    // 6× Platino since 24 Sep 2026 (RIAA's own post): 6 × 60,000, not 6,000,000.
    expect(daiDai!.byCountry.find((l) => l.country === "US")?.units).toBe(360_000);
  });

  it("a programme brings its own scale even where the country's is unpublished", () => {
    // Programme thresholds are published centrally, so they survive a country
    // whose own body publishes nothing. The example was Greece until 20 Sep
    // 2026, when it was priced at IFPI's 2013 level; Colombia still publishes
    // nothing.
    expect(thresholdFor("CO", "single", "Platinum")).toBeNull();
    expect(thresholdFor("CO", "single", "Platinum", "RIAA Latin")).toBe(60_000);
    expect(thresholdFor("GR", "single", "Platinum")).toBe(6_000);
  });
});

describe("the two board plaques confirmed as RIAA Latin", () => {
  it("prices Ayra Starr's Santa at 960,000, not 16,000,000", () => {
    // Confirmed at riaa.com 10 Sep 2026: award 439753, badge "LA level 16",
    // detail panel Genre LATIN / 16X PLATINO. She holds NO standard-programme
    // award at all — RIAA's standard tab returns "No matching results".
    const santa = priceRelease(bySlug("ayra-starr"), "Santa", {
      includeNigeria: true,
      includeFeatures: true,
    });
    expect(santa).not.toBeNull();
    expect(santa!.byCountry.find((l) => l.country === "US")?.units).toBe(960_000);
  });

  it("prices Rema's Bubalu at 120,000, not 2,000,000", () => {
    const bubalu = priceRelease(bySlug("rema"), "Bubalu", {
      includeNigeria: true,
      includeFeatures: true,
    });
    expect(bubalu).not.toBeNull();
    expect(bubalu!.byCountry.find((l) => l.country === "US")?.units).toBe(120_000);
  });

  it("no longer puts Ayra Starr top of the board", () => {
    // Before the tag she led on 18,103,333, of which 16,000,000 was this one
    // mispriced plaque. Pinned as a ranking, not a figure, so it survives the
    // data moving.
    const totals = comparableArtists
      .map((a) => ({ name: a.name, t: priceArtist(a, { includeNigeria: false, includeFeatures: false }).total }))
      .sort((x, y) => y.t - x.t);
    expect(totals[0].name).not.toBe("Ayra Starr");
  });

  it("leaves the eight standard-programme awards alone", () => {
    // Same sweep confirmed these are standard, so a stray Latin tag here would
    // divide a real figure by sixteen.
    const water = priceRelease(bySlug("tyla"), "Water", { includeNigeria: true, includeFeatures: true });
    expect(water!.byCountry.find((l) => l.country === "US")?.units).toBe(4_000_000);
    const calm = priceRelease(bySlug("rema"), "Calm Down", { includeNigeria: true, includeFeatures: true });
    expect(calm!.byCountry.find((l) => l.country === "US")?.units).toBe(5_000_000);
  });
});

describe("RIAA's ladder does not stop at Diamond — settled: they stay Diamond", () => {
  it("holds both US plaques at Diamond, which is a FLOOR and therefore true", () => {
    // Paul's decision, 10 Sep 2026, made with the trade in front of him. RIAA
    // prints "11X PLATINUM" for both, 1,000,000 more — but taking that erases
    // the board's only two US Diamonds, leaves Tems with none, and falsifies
    // Wizkid's live hook. Guarded so a later "correction" fails here first and
    // has to read afrobeats.ts before proceeding.
    for (const [slug, title] of [["wizkid", "One Dance"], ["tems", "Wait For U"]] as const) {
      const p = priceRelease(bySlug(slug), title, { includeNigeria: true, includeFeatures: true });
      expect(p, `${title} not found`).not.toBeNull();
      expect(p!.byCountry.find((l) => l.country === "US")?.units, title).toBe(10_000_000);
    }
  });

  it("with features off the US line drops below Diamond (features are the default view, so the million shows)", () => {
    const wizLead = priceArtist(bySlug("wizkid"), { includeNigeria: false, includeFeatures: false });
    expect(wizLead.byCountry.find((l) => l.country === "US")?.units).toBeLessThan(10_000_000);
  });
});

describe("the RIAA Latin roster audit is complete", () => {
  it("exactly three plaques on the whole roster are Latin-programme", () => {
    // All sixteen artists searched on RIAA's Latin tab 10 Sep 2026, including
    // under legal names, spellings and collaborator credit strings. Thirteen
    // returned "No matching results", each with a negative control. Pinned so a
    // fourth tag has to be deliberate — and so a lost tag fails loudly, since an
    // untagged Latin plaque is priced SIXTEEN times too high.
    const tagged = comparableArtists.flatMap((a) =>
      a.releases.flatMap((r) =>
        r.certs.filter((c) => c.body === "RIAA Latin").map((c) => `${a.name} — ${r.title}`),
      ),
    );
    expect(tagged.sort()).toEqual([
      "Ayra Starr — Santa",
      "Burna Boy — Dai Dai",
      "Rema — Bubalu",
    ]);
  });

  it("every Latin tag sits on a US plaque — it is a US programme", () => {
    for (const a of comparableArtists)
      for (const r of a.releases)
        for (const c of r.certs.filter((x) => x.body === "RIAA Latin"))
          expect(c.c, `${a.name} — ${r.title}`).toBe("US");
  });
});

describe("credits verified at the issuing body", () => {
  it("files \"Do I\" as Phyno & Burna Boy, not a Burna lead", () => {
    // It sat here with no credit at all, which read as a Burna Boy single. TCSN's
    // own register — the body that issued the plaque — files it "Phyno & Burna
    // Boy"; Spotify's recording says "Phyno, Burna Boy". Guarded because an
    // uncredited row is invisible: nothing else on the site would have caught it.
    const doI = bySlug("burna-boy").releases.find((r) => r.title === "Do I");
    expect(doI?.credit).toBe("Phyno & Burna Boy");
    expect(doI?.cover).toBeTruthy();
  });

  it("every second-billed joint release carries its credit", () => {
    // The convention: "A & B" is a co-lead and stays among the singles, "A ft. B"
    // is a feature. Either way the credit must be stated, or the page implies a
    // solo record.
    for (const t of ["Dai Dai", "Do I"]) {
      const r = bySlug("burna-boy").releases.find((x) => x.title === t);
      expect(r?.credit, t).toMatch(/&/);
    }
  });
});

describe("cover art", () => {
  it("covers every one of Burna's certified releases", () => {
    const burna = bySlug("burna-boy");
    const without = burna.releases.filter((r) => !r.cover).map((r) => r.title).sort();
    // "Be Honest" and "Tshwala Bam (Remix)" were the last two, and they were
    // never a DATA gap: Deezer carries no legitimate copy of either (both
    // return 8-Bit Arcade chiptune and karaoke re-recordings, whose titles
    // contain the real artists' names and so pass a naive substring check —
    // rejected then, rejected now), but app/lib/covers.ts had resolved both by
    // hand from the host record, and the /certifications page had been showing
    // that art all along. This surface used a shorter lookup that stopped
    // before those overrides, so one plaque had a sleeve on one page and a
    // blank square on another (Paul, 23 Sep 2026). Both now run the same
    // resolver.
    // "B.D'or" was the third until 18 Sep 2026: the plaque is Burna Boy's own
    // "B. D'OR" ft. Wizkid (RETRACTIONS #12), which Deezer does carry.
    expect(without).toEqual([]);
    // 85 -> 93 on 23 Sep 2026: the eight new TCSN singles, all with a sleeve.
    expect(burna.releases.filter((r) => r.cover).length).toBe(93);
  });

  it("serves one image size, so two sleeves never render at different scales", () => {
    for (const a of comparableArtists)
      for (const r of a.releases)
        if (r.cover?.includes("dzcdn.net"))
          expect(r.cover, `${a.name} — ${r.title}`).toContain("500x500");
  });

  it("Gbona and Essence both have art — the case that started this", () => {
    expect(bySlug("burna-boy").releases.find((r) => r.title === "Gbona")?.cover).toBeTruthy();
    expect(bySlug("wizkid").releases.find((r) => r.title === "Essence")?.cover).toBeTruthy();
  });
});

describe("audit fixes, 11 Sep 2026 — each one had a live counter-example", () => {
  it("prices a shared recording identically under both artists", () => {
    // Essence was 7x Platinum in South Africa on Wizkid's row and 1x on Tems',
    // and the page printed a winner between a record and itself. RiSA's badge
    // is Multi-Platinum, above Double on a four-rung ladder: at least 3x.
    const w = priceRelease(bySlug("wizkid"), "Essence", { includeNigeria: true, includeFeatures: true })!;
    const t = priceRelease(bySlug("tems"), "Essence", { includeNigeria: true, includeFeatures: true })!;
    expect(w.byCountry.find((l) => l.country === "ZA")?.units).toBe(t.byCountry.find((l) => l.country === "ZA")?.units);
    expect(w.byCountry.find((l) => l.country === "ZA")?.top?.x).toBe(3);
  });

  it("a country holding both priced and unpriced plaques shows both, never drops one", () => {
    // The live case was Rema's Poland — album Platinum priced, "Calm Down"
    // Diamond not — until Poland's singles were priced on 23 Sep 2026. No
    // line in the corpus mixes the two any more, so the rule is held on a
    // fixture of the same shape — a priced ALBUM and an unpriced SINGLE on one
    // country line: a UK album Gold prices, a UK single "Diamond" (a tier the
    // BPI does not award) cannot. The line must carry both, or the table says
    // one plaque.
    const mixed: ComparableArtist = {
      slug: "t", name: "T", image: "", href: "/", verifiedOn: "2026-09-23",
      releases: [
        { title: "Priced", format: "album", isFeature: false, certs: [{ c: "UK", level: "Gold" }] },
        { title: "Unpriced", format: "single", isFeature: false, certs: [{ c: "UK", level: "Diamond" }] },
      ],
    };
    const p = priceArtist(mixed, { includeNigeria: false, includeFeatures: true });
    const uk = p.byCountry.find((l) => l.country === "UK");
    expect(uk?.counted).toBe(true);
    expect(uk?.units).toBe(100_000);
    expect(uk?.notCounted?.plaques).toBe(1);
    expect(uk?.notCounted?.reason).toMatch(/no Diamond threshold/);
  });

  it("a row carrying an unpriced plaque never folds into the collapsed tail", () => {
    // "Not counted" has to be visible, or the plaque is unseen as well as
    // unsummed. Burna Boy vs Wizkid: Colombia is Burna's alone and unpriced.
    const c = compare(bySlug("burna-boy"), bySlug("wizkid"), { includeNigeria: false, includeFeatures: true });
    const folded = c.collapsed.flatMap((t) => t.rows);
    expect(folded.some((r) => (r.a && !r.a.counted) || (r.b && !r.b.counted) || r.a?.notCounted || r.b?.notCounted)).toBe(false);
    expect(c.rows.some((r) => r.country === "CO")).toBe(true);
  });

  it("a listed-not-counted chip is the HIGHEST plaque held, not the first enumerated", () => {
    // The live case was Burna's Poland — Gold on "Dai Dai" enumerated before
    // Platinum on "We Pray" — until Poland's singles were priced on 23 Sep
    // 2026. Held on a fixture in the one body still unpriced, Colombia.
    const two: ComparableArtist = {
      slug: "t", name: "T", image: "", href: "/", verifiedOn: "2026-09-23",
      releases: [
        { title: "First", format: "single", isFeature: false, certs: [{ c: "CO", level: "Gold" }] },
        { title: "Second", format: "single", isFeature: false, certs: [{ c: "CO", level: "Platinum" }] },
      ],
    };
    const p = priceArtist(two, { includeNigeria: false, includeFeatures: true });
    const co = p.listed.find((l) => l.country === "CO");
    expect(co?.top?.level).toBe("Platinum");
    expect(co?.releases).toBe(2);
  });

  it("attaches the multiplier caveat whenever ANY multiplied plaque contributes", () => {
    // Burna's New Zealand line opens on an unmultiplied plaque; his 3x Platinum
    // on "Last Last" contributes later and shipped with no dagger.
    const p = priceArtist(bySlug("burna-boy"), { includeNigeria: false, includeFeatures: false });
    const nz = p.byCountry.find((l) => l.country === "NZ");
    expect(nz?.caveat).toMatch(/RMNZ/);
    expect(p.caveats.some((c) => /RMNZ/.test(c))).toBe(true);
  });

  it("marks every South African line with the 2024 rise", () => {
    const p = priceArtist(bySlug("wizkid"), { includeNigeria: false, includeFeatures: false });
    expect(p.byCountry.find((l) => l.country === "ZA")?.vintage).toMatch(/2024/);
    expect(p.vintages.length).toBeGreaterThan(0);
  });

  it("prices Brazil on the INTERNACIONAL table", () => {
    expect(thresholdFor("BR", "single", "Gold")).toBe(20_000);
    expect(thresholdFor("BR", "album", "Platinum")).toBe(40_000);
  });

  it("prices Belgium now, on the other-repertoire tier", () => {
    // BRMA's thresholds, published by Ultratop. Every artist here records in
    // English or a Nigerian/Ghanaian/South African language, so "other repertoire".
    expect(thresholdFor("BE", "single", "Platinum")).toBe(40_000);
    expect(thresholdFor("BE", "album", "Gold")).toBe(10_000);
    expect(exclusionFor("BE", "single")).toBeNull();
    // Burna's 2x Platinum on the Jerusalema remix now prices.
    const j = priceRelease(bySlug("burna-boy"), "Jerusalema (Remix)", { includeNigeria: true, includeFeatures: true })!;
    expect(j.byCountry.find((l) => l.country === "BE")?.units).toBe(80_000);
  });

  it("does not fold two different releases that share a title", () => {
    const twin: ComparableArtist = {
      slug: "t", name: "T", image: "", href: "/",
      releases: [
        { title: "Twice as Tall", format: "album", isFeature: false, certs: [{ c: "UK", level: "Gold" }] },
        { title: "Twice as Tall", format: "single", isFeature: false, certs: [{ c: "UK", level: "Gold" }] },
      ],
    };
    const p = priceArtist(twin, { includeNigeria: false, includeFeatures: false });
    // album Gold 100,000 + single Gold 400,000 — two releases, not one collapsed
    expect(p.total).toBe(500_000);
    expect(p.byCountry[0].releases).toBe(2);
  });

  it("never rounds a normalised figure upward", () => {
    expect(thresholdFor("NL", "single", "Gold")).toBe(46_511);   // 10,000,000 / 215 = 46,511.6
    expect(thresholdFor("NL", "album", "Gold")).toBe(18_604);    // 40,000,000 / 2150 = 18,604.65
  });

  it("prices Czechia and Slovakia off ČNS IFPI's own download equivalence", () => {
    // Both state thresholds in subscription streams and publish the ratio —
    // 1 download = 222 (CZ) and 217 (SK) — the same pattern as France.
    expect(thresholdFor("CZ", "single", "Gold")).toBe(11_261);      // 2,500,000 / 222
    expect(thresholdFor("CZ", "album", "Platinum")).toBe(45_045);   // 10,000,000 / 222
    expect(thresholdFor("SK", "single", "Platinum")).toBe(7_834);   // 1,700,000 / 217
    expect(thresholdFor("SK", "album", "Gold")).toBe(8_064);        // 1,750,000 / 217
    expect(CERT_THRESHOLDS.CZ.floor?.single?.gold).toBe(11_111);    // 2,500,000 / 225, the July 2025 ratio
    expect(CERT_THRESHOLDS.CZ.singleRaw?.gold).toBe(2_500_000);
    // Dai Dai's Czech Gold and Slovak Platinum now price.
    const dd = priceRelease(bySlug("burna-boy"), "Dai Dai", { includeNigeria: true, includeFeatures: true })!;
    expect(dd.byCountry.find((l) => l.country === "CZ")?.units).toBe(11_261);
    expect(dd.byCountry.find((l) => l.country === "SK")?.units).toBe(7_834);
  });

  it("cites the Slovak rules at the file Wayback actually holds", () => {
    // /compare/in/slovakia's "own levels" link pointed at "ocenenia…-SR.pdf",
    // a 404 on Wayback and on ifpicr.cz. The capture of 21 May 2026 is
    // "oceneni…-SR-2084.pdf": a 386,006-byte PDF stating 850,000 / 1,700,000
    // (singles), 1,750,000 / 3,500,000 (albums) and 1 download = 217 streams,
    // re-read 24 Sep 2026.
    const SK = CERT_THRESHOLDS.SK;
    expect(SK.sourceUrl).toBe(
      "https://web.archive.org/web/20260521153213id_/https://ifpicr.cz/files/page/4b/9c/4b9c16f09271779fffe0975269b85eed/Pravidla-pre-udelovanie-oceneni-od-9.3.2026-SR-2084.pdf"
    );
    expect(SK.sourceUrl).not.toContain("Pravidla-pre-udelovanie-ocenenia-od-9.3.2026-SR.pdf");
    expect(SK.singleRaw).toEqual({ gold: 850_000, platinum: 1_700_000 });
    expect(SK.albumRaw).toEqual({ gold: 1_750_000, platinum: 3_500_000 });
  });
});


describe("today's thresholds, with the floor kept beside them", () => {
  it("prices every body at TODAY'S published level, and records the in-window floor", () => {
    // Paul's call, 11 Sep 2026, over the floor rule. The floors were established
    // by three agent passes and stay in `floor` so the trail is not lost; the
    // page discloses the rise with ‡ rather than pricing at the old level.
    const pairs: [string, CertFormat, "Gold" | "Platinum" | "Diamond", number, number][] = [
      ["ZA", "single", "Platinum", 40_000, 20_000],
      ["ZA", "album", "Gold", 25_000, 15_000],
      ["ES", "single", "Platinum", 100_000, 40_000],
      ["IT", "single", "Platinum", 200_000, 30_000],
      ["PT", "single", "Platinum", 25_000, 10_000],
      ["NL", "single", "Gold", 46_511, 15_000],
      ["HU", "single", "Gold", 5_000, 1_500],
      ["DE", "single", "Diamond", 1_500_000, 1_000_000],
      ["FR", "single", "Diamond", 333_333, 233_333],
      ["MX", "album", "Gold", 70_000, 30_000],
      ["PL", "album", "Gold", 15_000, 10_000],
      ["PL", "single", "Gold", 62_500, 10_000],
    ];
    for (const [code, fmt, tier, today, floor] of pairs) {
      expect(thresholdFor(code, fmt, tier), `${code} ${fmt} ${tier}`).toBe(today);
      expect(CERT_THRESHOLDS[code].floor?.[fmt]?.[tier.toLowerCase() as "gold" | "platinum" | "diamond"], `${code} floor`).toBe(floor);
      expect(floor).toBeLessThan(today);
    }
  });

  it("a body that changed WHAT it measures is priced at its CURRENT level, never an old unit one", () => {
    // ZPAV certified singles in units until Feb 2017 and in złoty of revenue
    // since. Poland is priced at today's złoty level (Gold 125,000 zł) divided
    // by ZPAV's own 2 zł a single — 62,500 — not at the 10,000 units its
    // pre-2017 rules printed (Paul, 23 Sep 2026). Mexico moved to streams and
    // is priced at the stated 100:1 since 12 Sep 2026 — see the § test.
    const pl = CERT_THRESHOLDS.PL;
    expect(thresholdFor("PL", "single", "Gold")).toBe(pl.singleRawPln!.gold! / pl.plnPerSingle!);
    expect(exclusionFor("PL", "single")).toBeNull();
    expect(thresholdFor("MX", "single", "Gold")).toBe(220_000);
    expect(exclusionFor("MX", "single")).toBeNull();
  });

  it("every German single on the roster falls in BVMI's post-2014 band", () => {
    // BVMI kept a lower 150,000 / 300,000 band for singles first released
    // 2003–May 2014 and keys bands to release date. No German-certified single
    // here predates 2016, so the 200,000 / 400,000 band (today 300,000 /
    // 600,000) is the only one that ever applied to them.
    expect(thresholdFor("DE", "single", "Gold")).toBe(300_000);
    for (const a of comparableArtists)
      for (const r of a.releases)
        if (r.format === "single" && r.certs.some((c) => c.c === "DE")) {
          const year = (r as { year?: number }).year;
          if (year) expect(year, `${a.name} — ${r.title}`).toBeGreaterThanOrEqual(2016);
        }
  });

  it("every body that raised its levels carries the ‡ note so the page says so", () => {
    for (const code of ["ZA", "ES", "FR", "HU", "IT", "MX", "NL", "PL", "PT", "DE", "CZ", "SK"])
      expect(CERT_THRESHOLDS[code].vintage, code).toMatch(/today|raised|fell/i);
  });
});

describe("the RIAA Latin marker is visible on every surface", () => {
  it("the board's label function carries the programme, under the programme's own name", async () => {
    const { plaqueLabel } = await import("../app/data/afrobeats");
    // Premios de Oro y Platino awards a PLATINO, not a Platinum (Paul, 23 Sep
    // 2026). The tier stays canonical in the data so everything can sort and
    // count by it; app/lib/awardName.ts renames it at the point of display.
    expect(plaqueLabel({ c: "US", level: "Platinum", x: 16, body: "RIAA Latin" })).toBe("16× Platino · Latin");
    expect(plaqueLabel({ c: "US", level: "Gold", body: "RIAA Latin" })).toBe("Oro · Latin");
    expect(plaqueLabel({ c: "US", level: "Platinum", x: 5 })).toBe("5× Platinum");
    // A body that IS the country's default adds nothing, and renames nothing.
    expect(plaqueLabel({ c: "US", level: "Gold", body: "RIAA" })).toBe("Gold");
  });

  it("renames the tier only where a programme publishes its own word", async () => {
    const { tierWord, awardLabel, PROGRAM_TIER_NAMES } = await import("../app/lib/awardName");
    expect(tierWord("Platinum", "RIAA Latin")).toBe("Platino");
    expect(tierWord("Diamond", "RIAA Latin")).toBe("Diamante");
    // No Plata: the programme awards no silver tier, so nothing is invented.
    expect(tierWord("Silver", "RIAA Latin")).toBe("Silver");
    // Every other body keeps the canonical words — including an issuer that
    // merely names itself, like Colombia's Sony Music Colombia.
    expect(tierWord("Platinum", "Sony Music Colombia")).toBe("Platinum");
    expect(tierWord("Platinum", undefined)).toBe("Platinum");
    expect(Object.keys(PROGRAM_TIER_NAMES)).toEqual(["RIAA Latin"]);
    expect(awardLabel({ level: "Platinum", x: 2, body: "RIAA Latin" })).toBe("2× Platino");
    expect(awardLabel({ level: "Platinum", x: 1 })).toBe("Platinum");
  });

  it("the compare engine exposes the programme on the line it prices", () => {
    const santa = priceRelease(bySlug("ayra-starr"), "Santa", { includeNigeria: true, includeFeatures: true })!;
    expect(santa.byCountry.find((l) => l.country === "US")?.top?.body).toBe("RIAA Latin");
    const bubalu = priceRelease(bySlug("rema"), "Bubalu", { includeNigeria: true, includeFeatures: true })!;
    expect(bubalu.byCountry.find((l) => l.country === "US")?.top?.body).toBe("RIAA Latin");
  });
});

describe("the unpriced singles are exactly the ones /methodology names", () => {
  // The methodology page's sentence "What remains cannot be converted at any
  // ratio: Colombia publishes no threshold" is derived from this set; if a body
  // here gains a threshold (Belgium did, 10 Sep 2026; Greece did on 20 Sep
  // 2026, priced at IFPI's June 2013 level and marked ¶; Poland did on 23 Sep
  // 2026, at ZPAV's own 2 zł a single, ¶ too) or a new unpriced country
  // arrives, the page follows and this pins what it says.
  it("is CO alone", () => {
    const unpriced = Object.values(CERT_THRESHOLDS)
      .filter((c) => c.single === null)
      .map((c) => c.code)
      .sort();
    expect(unpriced).toEqual(["CO"]);
  });
});

describe("Greece is priced at IFPI's June 2013 level (Paul, 20 Sep 2026)", () => {
  // IFPI Greece publishes no current level. The last level ever published for
  // it is IFPI's own "International Certification Award levels — Updated June
  // 2013" (docs/sourcing/IFPI-AWARD-LEVELS-2013.md): singles Gold 3,000 /
  // Platinum 6,000, international-repertoire albums the same. Carried as
  // `historic`, rendered ¶ on every Greek line — never as ‡ or §.
  const GR = CERT_THRESHOLDS.GR;

  it("prices both formats at 3,000 / 6,000 and no other tier", () => {
    for (const f of ["single", "album"] as const) {
      expect(thresholdFor("GR", f, "Gold")).toBe(3_000);
      expect(thresholdFor("GR", f, "Platinum")).toBe(6_000);
      expect(thresholdFor("GR", f, "Silver")).toBeNull();
      expect(thresholdFor("GR", f, "Diamond")).toBeNull();
      expect(exclusionFor("GR", f)).toBeNull();
    }
    expect(unitsForCert({ c: "GR", level: "Platinum", x: 2 }, "single").units).toBe(12_000);
  });

  it("carries the historic note, the multiplier caveat and the Wayback source — and is not ‡ or §", () => {
    expect(GR.historic).toMatch(/June 2013/);
    expect(GR.historic).toMatch(/IFPI/);
    expect(GR.caveat).toMatch(/N × Platinum/);
    expect(GR.sourceUrl).toContain("web.archive.org/web/20140328112251id_/");
    expect(GR.vintage).toBeUndefined();
    expect(GR.assumed).toBeUndefined();
    expect(GR.singleExcluded).toBeUndefined();
    expect(GR.albumExcluded).toBeUndefined();
  });

  it("every Greek line on a compare summary is counted and carries the historic note", () => {
    // Poland's singles carry a ¶ of their own since 23 Sep 2026, so an
    // artist's ¶ list is Greece's note plus, where a Polish single is held,
    // Poland's — never anything else.
    let seen = 0;
    const allowed = [GR.historic, CERT_THRESHOLDS.PL.historic];
    for (const a of comparableArtists) {
      const p = priceArtist(a, { includeNigeria: false, includeFeatures: true });
      expect(p.listed.some((l) => l.country === "GR"), `${a.slug} lists GR`).toBe(false);
      for (const h of p.historics) expect(allowed, `${a.slug} carries a stray ¶`).toContain(h);
      const gr = p.byCountry.find((l) => l.country === "GR");
      if (!gr) {
        expect(p.historics).not.toContain(GR.historic);
        continue;
      }
      seen++;
      expect(gr.counted).toBe(true);
      expect(gr.historic).toBe(GR.historic);
      expect(p.historics).toContain(GR.historic);
    }
    // Burna Boy, Wizkid, Rema, Tems and Tyla hold the seven Greek plaques.
    expect(seen).toBe(5);
    // A multiplied Greek plaque carries † beside ¶, as it does for Austria.
    const tyla = priceRelease(bySlug("tyla"), "Water").byCountry.find((l) => l.country === "GR");
    expect(tyla?.units).toBe(12_000);
    expect(tyla?.historic).toBeTruthy();
    expect(tyla?.caveat).toBe(GR.caveat);
    // Both hold Greek AND Polish singles, so the pair's ¶ list is exactly the two.
    expect([...compare(bySlug("tyla"), bySlug("tems")).historics].sort()).toEqual([GR.historic, CERT_THRESHOLDS.PL.historic].sort());
  });

  it("negative control: a country with `historic` unset produces none", () => {
    const burna = priceArtist(bySlug("burna-boy"), { includeNigeria: false, includeFeatures: true });
    for (const code of ["UK", "AU", "US", "FR"]) {
      expect(CERT_THRESHOLDS[code].historic).toBeUndefined();
      expect(burna.byCountry.find((l) => l.country === code)?.historic).toBeUndefined();
    }
    // Asake and Olamide hold no Greek or Polish plaque.
    expect(priceArtist(bySlug("asake"), { includeNigeria: false, includeFeatures: true }).historics).toEqual([]);
    expect(compare(bySlug("asake"), bySlug("olamide")).historics).toEqual([]);
    expect(Object.values(CERT_THRESHOLDS).filter((c) => c.historic).map((c) => c.code).sort()).toEqual(["GR", "PL"]);
  });
});

describe("Poland's singles are priced at ZPAV's own 2 zł a single (Paul, 23 Sep 2026)", () => {
  // "We have to use 62,500 until anything changes." ZPAV's rules from 1 Jan
  // 2025 print single levels in złoty only — Gold 125,000 zł, Platinum
  // 250,000 zł, Diamond 1,000,000 zł — and no rate; its rules from 1 March 2017
  // to the end of 2024 valued one single «o wartości 2 zł» and printed units
  // beside złoty at exactly 2:1. Read on olis.pl/terms_oliw, which carries both.
  const PL = CERT_THRESHOLDS.PL;

  it("prices singles at ZPAV's printed złoty over 2 zł, and albums as before", () => {
    expect(PL.plnPerSingle).toBe(2);
    expect(PL.singleRawPln).toEqual({ gold: 125_000, platinum: 250_000, diamond: 1_000_000 });
    for (const tier of ["gold", "platinum", "diamond"] as const)
      expect(PL.single![tier], tier).toBe(PL.singleRawPln![tier]! / PL.plnPerSingle!);
    expect(thresholdFor("PL", "single", "Gold")).toBe(62_500);
    expect(thresholdFor("PL", "single", "Platinum")).toBe(125_000);
    expect(thresholdFor("PL", "single", "Diamond")).toBe(500_000);
    expect(thresholdFor("PL", "single", "Silver")).toBeNull();
    expect(exclusionFor("PL", "single")).toBeNull();
    expect(PL.singleExcluded).toBeUndefined();
    // ZPAV prints 2× / 3× Platinum at 500,000 / 750,000 zł and 2× / 3× Diamond
    // at 2,000,000 / 3,000,000 zł: exactly N × the level, as priced.
    expect(unitsForCert({ c: "PL", level: "Platinum", x: 3 }, "single").units).toBe(750_000 / 2);
    expect(unitsForCert({ c: "PL", level: "Diamond", x: 2 }, "single").units).toBe(2_000_000 / 2);
    expect(thresholdFor("PL", "album", "Platinum")).toBe(30_000);
  });

  it("matches the rules ZPAV printed, as quoted in the sourcing record — not only this file", () => {
    // Anchored outside certThresholds.ts: docs/sourcing/CERT-THRESHOLDS.md
    // quotes olis.pl/terms_oliw verbatim. The 2025 Gold level and the pre-2025
    // units / złoty pair must reproduce PL.singleRawPln and plnPerSingle.
    const doc = readFileSync(join(process.cwd(), "docs/sourcing/CERT-THRESHOLDS.md"), "utf8").replace(/\s+/g, " ");
    expect(doc).toContain("Złota Płyta 125 000 zł");
    expect(doc, "the 2021 units / złoty pair is quoted").toContain("«SINGLE CYFROWE (ilość / wysokość przychodu) | 25 000 / 50 000 zł");
    expect(PL.singleRawPln!.gold).toBe(125_000);
    expect(50_000 / 25_000).toBe(PL.plnPerSingle);
  });

  it("keeps the złoty out of `singleRaw`, which every reader takes to be streams", () => {
    // /compare's "Streams-based bodies" and /methodology's "publish it in
    // streams" both key on `singleRaw`; Poland in there would be named a
    // streams body in two sentences.
    expect(PL.singleRaw).toBeUndefined();
  });

  it("marks Polish SINGLE lines ¶ and a Polish album-only line not at all", () => {
    expect(PL.historicFormat).toBe("single");
    expect(PL.historic).toMatch(/2 zł/);
    expect(PL.historic).toMatch(/125,000 zł/);
    // Rema's Polish line opens on the album "Rave & Roses" and gains
    // "Calm Down" after it: the ¶ is the LINE's, so it must still land.
    const rema = priceArtist(bySlug("rema"), { includeNigeria: false, includeFeatures: true });
    const pl = rema.byCountry.find((l) => l.country === "PL");
    expect(pl?.units).toBe(30_000 + 500_000);
    expect(pl?.historic).toBe(PL.historic);
    const album = priceRelease(bySlug("rema"), "Rave & Roses", { includeNigeria: false, includeFeatures: true })!;
    expect(album.byCountry.find((l) => l.country === "PL")?.historic).toBeUndefined();
    const single = priceRelease(bySlug("rema"), "Calm Down", { includeNigeria: false, includeFeatures: true })!;
    expect(single.byCountry.find((l) => l.country === "PL")?.historic).toBe(PL.historic);
  });

  it("counts every Polish plaque on the roster — none is left listed", () => {
    for (const a of comparableArtists) {
      const p = priceArtist(a, { includeNigeria: false, includeFeatures: true });
      expect(p.listed.some((l) => l.country === "PL"), `${a.slug} lists PL`).toBe(false);
      expect(p.byCountry.find((l) => l.country === "PL")?.notCounted, `${a.slug} PL`).toBeUndefined();
    }
    // Burna: "Dai Dai" Gold 62,500 + "We Pray" Platinum 125,000.
    const burna = priceArtist(bySlug("burna-boy"), { includeNigeria: false, includeFeatures: true });
    expect(burna.byCountry.find((l) => l.country === "PL")?.units).toBe(187_500);
  });

  it("One Dance is 3× Platinum in Poland — one register row, filed at step 3", () => {
    // ZPAV's register holds one One Dance row, and it is a MULTIPLE: its
    // date_3 is 2021-08-11 and olis.pl prints it as Platinum "3". A review on
    // 23 Sep 2026 caught this file reading that row as 1x; see afrobeats.ts.
    const od = priceRelease(bySlug("wizkid"), "One Dance", { includeNigeria: false, includeFeatures: true })!;
    const pl = od.byCountry.find((l) => l.country === "PL");
    expect(pl?.top?.x).toBe(3);
    expect(pl?.units).toBe(3 * 125_000);
  });
});

// Paul, 23 Sep 2026: "Always ensure every new plaque is logged in the compare
// page." Logged is not enough — each must be COUNTED, at a figure. These are
// the twenty the 23 Sep 2026 register sweep applied (docs/sweeps/
// sweep-2026-09-23.md), each held to its units at its own body's threshold.
describe("the 23 Sep 2026 sweep's plaques are all priced", () => {
  const SWEEP: [slug: string, title: string, format: CertFormat, country: string, level: string, units: number][] = [
    ["tems", "Raindance", "single", "CZ", "Gold", 11_261],
    ["tems", "Raindance", "single", "SK", "Platinum", 7_834],
    ["tems", "Raindance", "single", "ZA", "Platinum", 40_000],
    ["rema", "Calm Down", "single", "CZ", "Gold", 11_261],
    ["rema", "Calm Down", "single", "SK", "Platinum", 7_834],
    ["rema", "Smooth Criminal", "single", "NG", "Gold", 50_000],
    ["tyla", "Water", "single", "SE", "Platinum", 120_000],
    ["tyla", "Tyla", "album", "SE", "Gold", 15_000],
    ["ayra-starr", "Many Roads", "single", "NG", "Silver", 25_000],
    ["wizkid", "Boom", "single", "DK", "Platinum", 90_000],
    ["burna-boy", "Ye", "single", "NG", "Gold", 50_000],
    ["burna-boy", "No Panic", "single", "NG", "Gold", 50_000],
    ["burna-boy", "Buy You Life", "single", "NG", "Gold", 50_000],
    ["burna-boy", "28 Grams", "single", "NG", "Gold", 50_000],
    ["burna-boy", "Born Winner", "single", "NG", "Gold", 50_000],
    ["burna-boy", "No Sign of Weakness", "single", "NG", "Silver", 25_000],
    ["burna-boy", "Change Your Mind", "single", "NG", "Silver", 25_000],
    ["burna-boy", "Empty Chairs", "single", "NG", "Silver", 25_000],
    ["burna-boy", "Sweet Love", "single", "NG", "Silver", 25_000],
    ["burna-boy", "4 Kampé II", "single", "NG", "Silver", 25_000],
  ];

  it("lists twenty plaques, one per title per country", () => {
    expect(SWEEP.length).toBe(20);
    expect(new Set(SWEEP.map(([s, t, f, c]) => `${s}|${t}|${f}|${c}`)).size).toBe(20);
  });

  for (const [slug, title, format, country, level, units] of SWEEP) {
    it(`${slug} — ${title} ${country} ${level}: ${units.toLocaleString("en-US")} units, counted`, () => {
      const release = bySlug(slug).releases.find((r) => r.title === title && r.format === format);
      expect(release, `${slug} has no ${format} "${title}"`).toBeTruthy();
      const cert = release!.certs.find((c) => c.c === country);
      expect(cert?.level, `${title} ${country}`).toBe(level);
      expect(unitsForCert(cert!, format)).toEqual({ units, why: null });
      // …and the engine sums it: nothing for this country and format lands in
      // the unpriced list once Nigeria and features are both in.
      const all = priceArtist(bySlug(slug), { includeNigeria: true, includeFeatures: true });
      expect(all.excluded.filter((e) => e.country === country && e.format === format)).toEqual([]);
    });
  }
});
