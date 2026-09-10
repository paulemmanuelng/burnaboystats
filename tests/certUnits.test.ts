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
      expect(got).toBe(Math.round((raw as number) / divisor));
    }
  });

  it("France's Gold single is 100,000 units, not 15,000,000", () => {
    // The whole point of the normalisation pass, pinned to a literal so a
    // regression to the printed stream count fails loudly.
    expect(thresholdFor("FR", "single", "Gold")).toBe(100_000);
    expect(CERT_THRESHOLDS.FR.singleRaw?.gold).toBe(15_000_000);
  });

  it("refuses to price what no body publishes", () => {
    for (const code of ["GR", "BE", "CO", "CZ", "SK"]) {
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
    // as a Platinum shortcut.
    expect(thresholdFor("BR", "single", "Diamond")).toBe(300_000);
    expect(unitsForCert({ c: "BR", level: "Diamond", x: 2 }, "single").units).toBe(600_000);
    const water = priceRelease(bySlug("tyla"), "Water", {
      includeNigeria: true,
      includeFeatures: true,
    });
    expect(water).not.toBeNull();
    expect(water!.byCountry.find((l) => l.country === "BR")?.units).toBe(600_000);
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
  it("fires on exactly 57 of the 120 pairs", () => {
    // 57 was measured before the rule was written, from the plaque arrays and a
    // separate script. It is pinned as a literal here so a change to either
    // clause has to be deliberate.
    const all = comparableArtists;
    let fired = 0;
    for (let i = 0; i < all.length; i++)
      for (let j = i + 1; j < all.length; j++) if (nigeriaDefault(all[i], all[j]).on) fired++;
    expect(all).toHaveLength(16);
    expect(fired).toBe(57);
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

  it("splits contested rows from one-sided ones", () => {
    const c = compare(bySlug("burna-boy"), bySlug("olamide"));
    expect(c.rows.length).toBe(c.contested.length + c.uncontested.length);
    expect(c.uncontested.length).toBeGreaterThan(c.contested.length);
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
