import { describe, expect, it } from "vitest";
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

  it("France's Gold single is 100,000 units, not 15,000,000", () => {
    // The whole point of the normalisation pass, pinned to a literal so a
    // regression to the printed stream count fails loudly.
    expect(thresholdFor("FR", "single", "Gold")).toBe(100_000);
    expect(CERT_THRESHOLDS.FR.singleRaw?.gold).toBe(15_000_000);
  });

  it("refuses to price what no body publishes", () => {
    // Belgium left this list on 10 Sep 2026: BRMA's thresholds are published by
    // Ultratop, its awards operator. Czechia and Slovakia leave it below once
    // their verifier passes.
    for (const code of ["GR", "CO", "CZ", "SK"]) {
      expect(thresholdFor(code, "single", "Platinum")).toBeNull();
      expect(thresholdFor(code, "album", "Platinum")).toBeNull();
    }
    // Poland is the split case: singles are PLN revenue, albums are units.
    expect(thresholdFor("PL", "single", "Platinum")).toBeNull();
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
    const wiz = priceArtist(bySlug("wizkid"), { includeNigeria: true, includeFeatures: true });
    expect(wiz.excludedPlaques).toBeGreaterThan(0);
    for (const e of wiz.excluded) {
      // Long enough to be a reason a READER can act on. The first pass of this
      // file truncated each reason at its first full stop and shipped Belgium as
      // "Two-part failure." — true, and useless on screen.
      expect(e.why.length, `${e.country} ${e.format} reason is too terse to show`).toBeGreaterThan(60);
      expect(e.why, `${e.country} ${e.format} reason does not end in a sentence`).toMatch(/[.!?]$/);
      expect(e.plaques).toBeGreaterThan(0);
    }
  });

  it("excluded plaques never contribute units", () => {
    expect(unitsForCert({ c: "SE", level: "Platinum" }, "single").units).toBeNull();
    expect(unitsForCert({ c: "SE", level: "Platinum" }, "album").units).toBe(30_000);
  });
});

describe("the Nigeria default", () => {
  it("fires on 63 of the 120 pairs on the default view, 57 with features on", () => {
    // Both counts were measured from the plaque arrays by a separate script
    // before being pinned here, so a change to either clause has to be
    // deliberate. The two differ because the zero-international clause looks
    // at the SAME plaques the view will show: BNXN holds international plaques
    // only as features, so with features off (the default) he is a blank
    // column and the six pairs against non-home-market artists fire on him.
    // The first version counted 57 in both states and rendered him "at least 0".
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
  it("reproduces the design's fixture: 915,333 vs 6,180,000 over 10 rows", () => {
    // The design file computed these from the published thresholds before the
    // engine existed. They are the contract between the two — with one
    // correction the design could not have known about: its 6,340,000 carried
    // Essence at 7x Platinum in South Africa, an upgrade RiSA's register does
    // not confirm (its badge is Multi-Platinum, at least 3x). 6,340,000 −
    // 160,000 = 6,180,000, and every other cell is unchanged.
    const c = compare(bySlug("burna-boy"), bySlug("wizkid"), { includeNigeria: false });
    const g = priceRelease(bySlug("burna-boy"), "Gbona", { includeNigeria: false, includeFeatures: true })!;
    const e = priceRelease(bySlug("wizkid"), "Essence", { includeNigeria: false, includeFeatures: true })!;
    expect(g.total).toBe(915_333);
    expect(e.total).toBe(6_180_000);
    // Union is 10 countries, not 9: Gbona's Swedish Gold is LISTED though it
    // cannot be priced. Dropping it would state he holds no Swedish plaque.
    const union = new Set([
      ...g.byCountry.map((l) => l.country), ...g.listed.map((l) => l.country),
      ...e.byCountry.map((l) => l.country), ...e.listed.map((l) => l.country),
    ]);
    expect(union.size).toBe(10);
    expect(g.listed.map((l) => l.country)).toContain("SE");
    expect(g.listed.find((l) => l.country === "SE")?.counted).toBe(false);
    expect(g.listed.find((l) => l.country === "SE")?.reason).toMatch(/Sverige|stream/i);
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

  it("keeps a side's top three exclusives and folds only past six", () => {
    const c = compare(bySlug("burna-boy"), bySlug("olamide"));
    const tail = c.collapsed.find((t) => t.side === "a");
    expect(tail).toBeTruthy();
    const shownExclusive = c.rows.filter((r) => !r.contested && r.a && r.country !== "NG");
    expect(shownExclusive.length).toBe(3);
    expect(tail!.units).toBeGreaterThan(0);
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
    expect(daiDai!.byCountry.find((l) => l.country === "US")?.units).toBe(120_000);
  });

  it("a programme brings its own scale even where the country's is unpublished", () => {
    // Programme thresholds are published centrally, so they survive a country
    // whose own body publishes nothing.
    expect(thresholdFor("GR", "single", "Platinum")).toBeNull();
    expect(thresholdFor("GR", "single", "Platinum", "RIAA Latin")).toBe(60_000);
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

  it("both are FEATURED appearances, so either choice is invisible by default", () => {
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
  it("covers all but four of Burna's certified releases", () => {
    const burna = bySlug("burna-boy");
    const without = burna.releases.filter((r) => !r.cover).map((r) => r.title).sort();
    // Deliberately uncovered: Deezer carries no legitimate copy of these. The
    // first two return only 8-Bit Arcade chiptune and karaoke re-recordings,
    // whose titles contain the real artists' names and so pass a naive
    // substring check — both were caught and rejected. Pinned so a later fill
    // cannot quietly swap a tribute sleeve in.
    expect(without).toEqual(["B.D'or", "Be Honest", "Tshwala Bam (Remix)"]);
    expect(burna.releases.filter((r) => r.cover).length).toBe(82);
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
    // Burna's Swedish album Gold prices; his five Swedish single plaques do not.
    // The line must carry the five, or the table says he holds one Swedish plaque.
    const p = priceArtist(bySlug("burna-boy"), { includeNigeria: false, includeFeatures: false });
    const se = p.byCountry.find((l) => l.country === "SE");
    expect(se?.counted).toBe(true);
    expect(se?.notCounted?.plaques).toBe(5);
    expect(se?.notCounted?.reason).toMatch(/Sverige|stream/i);
  });

  it("a listed-not-counted chip is the HIGHEST plaque held, not the first enumerated", () => {
    // Poland: Burna holds a Gold (Dai Dai) and a Platinum (We Pray), both unpriceable.
    const p = priceArtist(bySlug("burna-boy"), { includeNigeria: false, includeFeatures: true });
    const pl = p.listed.find((l) => l.country === "PL");
    expect(pl?.top?.level).toBe("Platinum");
    expect(pl?.releases).toBe(2);
  });

  it("attaches the multiplier caveat whenever ANY multiplied plaque contributes", () => {
    // Burna's New Zealand line opens on an unmultiplied plaque; his 3x Platinum
    // on "Last Last" contributes later and shipped with no dagger.
    const p = priceArtist(bySlug("burna-boy"), { includeNigeria: false, includeFeatures: false });
    const nz = p.byCountry.find((l) => l.country === "NZ");
    expect(nz?.caveat).toMatch(/RMNZ/);
    expect(p.caveats.some((c) => /RMNZ/.test(c))).toBe(true);
  });

  it("marks every South African line with the 2024 threshold change", () => {
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

  it("never rounds a normalised floor upward", () => {
    expect(thresholdFor("NL", "single", "Gold")).toBe(46_511);   // 10,000,000 / 215 = 46,511.6
    expect(thresholdFor("NL", "album", "Gold")).toBe(18_604);    // 40,000,000 / 2150 = 18,604.65
  });
});
