import { describe, it, expect } from "vitest";
import { readdirSync } from "node:fs";
import {
  afrobeatsArtists,
  artistBySlug,
  lastVerifiedOn,
  chartGlobalsClause,
  chartGlobalLines,
  AFROBEATS_LAST_FULL_SWEEP,
} from "../app/data/afrobeats";
import { CERTS_LAST_FULL_SWEEP, CERTS_VERIFIED_ON } from "../app/data/certifications";
import { CERT_THRESHOLDS, exactThresholdFor, streamRatio, thresholdFor, type TierUnits } from "../app/data/certThresholds";
import { artistFaqs } from "../app/lib/boardFaqs";
import { artistCardStats, chartsCardStats } from "../app/lib/boardCards";
import { serviceCount } from "../app/data/liveBoards";
import { platformCountries } from "../app/lib/liveChartMeta";
import {
  artistBySlug as comparable,
  caveatParagraph,
  compare,
  nigeriaDefault,
  priceArtist,
  unitsForCert,
  SHARED_MULTIPLE_RULE,
} from "../app/lib/certUnits";
import { bodyOwner, countryBoards, pricingPhrase, priceCountry } from "../app/lib/certCountry";
// @ts-expect-error — plain .mjs helpers shared with the stats bot
import { titleKey as liveTitleKey } from "../scripts/stats-lib.mjs";
// @ts-expect-error — plain .mjs registry shared with the build script
import { LIVE_ARTISTS } from "../scripts/live-artists.mjs";

/**
 * The debug pass of 5 Oct 2026, boards lane: the Afrobeats Board's artist
 * pages, /compare's pair pages and the /compare/in country boards. Each case
 * quotes what the live site shipped as its negative control. Render-level
 * checks are in tests/ui/debug1005Boards.test.tsx.
 */

const faq = (slug: string, q: RegExp) => artistFaqs(artistBySlug(slug)!).find((f) => q.test(f.q))?.a ?? "";

describe("afrobeatsB-03: 'last verified' is never older than the last full sweep", () => {
  it("prints the later of verifiedOn and the full sweep, for every artist", () => {
    for (const a of afrobeatsArtists.filter((x) => x.swept)) {
      expect(lastVerifiedOn(a) >= AFROBEATS_LAST_FULL_SWEEP, a.slug).toBe(true);
      // A partial read that changed a plaque after the sweep keeps its own date.
      if (a.verifiedOn > AFROBEATS_LAST_FULL_SWEEP) expect(lastVerifiedOn(a)).toBe(a.verifiedOn);
    }
    expect(lastVerifiedOn(artistBySlug("olamide")!)).toBe("2026-10-02");
    expect(lastVerifiedOn(artistBySlug("tyla")!)).toBe(artistBySlug("tyla")!.verifiedOn);
  });

  it("negative control: the date Olamide's page printed is older than the sweep it sat under", () => {
    expect(artistBySlug("olamide")!.verifiedOn).toBe("2026-09-06");
    expect("2026-09-06" < AFROBEATS_LAST_FULL_SWEEP).toBe(true);
  });
});

describe("afrobeatsB-08: one of a thing is singular on the share cards", () => {
  it("Black Sherif's cards say Country, No. 1 peak and Territory", () => {
    const a = artistBySlug("black-sherif")!;
    const card = Object.fromEntries(artistCardStats(a).map((s) => [s.l, s.v]));
    expect(card).toMatchObject({ Country: "1", "No. 1 peak": "1" });
    const charts = Object.fromEntries(chartsCardStats(a).map((s) => [s.l, s.v]));
    expect(charts).toMatchObject({ Territory: "1", "No. 1 peak": "1" });
    // Negative control: the labels that shipped beside a 1.
    for (const shipped of ["Countries", "No. 1 peaks", "Territories"]) {
      expect(card[shipped], shipped).toBeUndefined();
      expect(charts[shipped], shipped).toBeUndefined();
    }
  });

  it("plural where it is more than one (Wizkid)", () => {
    const labels = artistCardStats(artistBySlug("wizkid")!).map((s) => s.l);
    expect(labels).toEqual(["Certifications", "Countries", "Chart entries", "No. 1 peaks"]);
  });
});

describe("afrobeatsB-10 / B-11: the FAQ answers read as sentences", () => {
  const countries = (slug: string) => faq(slug, /^Which countries has /);

  it("a complete list is the answer itself, with its 'and'", () => {
    expect(countries("olamide")).toContain("Olamide holds plaques in 2 countries: Nigeria and the United Kingdom.");
    expect(countries("black-sherif")).toContain("Black Sherif holds plaques in 1 country: Nigeria.");
    // More than six: a partial list keeps "including … and more".
    expect(countries("wizkid")).toMatch(/holds plaques in \d+ countries, including [^.]+ and more\./);
    // Negative control: the answers that shipped.
    expect(countries("olamide")).not.toContain("2 countries, including Nigeria, United Kingdom.");
    expect(countries("black-sherif")).not.toContain("1 country, including Nigeria.");
  });

  it("one Silver plaque is 'it', not 'they' (Tems)", () => {
    const a = faq("tems", /TurnTable/);
    const tems = artistBySlug("tems")!;
    const silver = tems.releases.flatMap((r) => r.certs).filter((c) => c.c === "NG" && c.level === "Silver").length;
    expect(silver).toBe(1);
    expect(a).toContain("so at least that one cannot appear on the live page. It is read from");
    expect(a).toContain("search Tems's name to see it.");
    expect(a).not.toContain("They are read");
    expect(a).not.toContain("to see them");
    // More than one keeps the plural (Seyi Vibez).
    expect(faq("seyi-vibez", /TurnTable/)).toContain("They are read from");
  });
});

describe("afrobeatsB-13: the chart card names Billboard's global charts", () => {
  it("derives the clause from the data", () => {
    expect(chartGlobalsClause(artistBySlug("rema")!)).toBe(", plus 2 Billboard global charts");
    expect(chartGlobalsClause(artistBySlug("victony")!)).toBe(", plus 1 Billboard global chart");
    for (const a of afrobeatsArtists) expect(chartGlobalsClause(a) === "", a.slug).toBe(chartGlobalLines(a) === 0);
  });
});

describe("afrobeatsB-14: the live card counts services, not chart lines", () => {
  it("Spotify and Spotify's albums chart are one service", () => {
    expect(serviceCount([{ platform: "Spotify" }, { platform: "Spotify Albums" }, { platform: "Deezer" }])).toBe(2);
    expect(serviceCount([{ platform: "Spotify Albums" }])).toBe(1);
    // The control: counted as lines, which the card did, that is three.
    expect([{ platform: "Spotify" }, { platform: "Spotify Albums" }, { platform: "Deezer" }].length).toBe(3);
  });
});

describe("afrobeatsB-15: a platform's worldwide chart is not a country", () => {
  it("counts countries the way the page totals do", () => {
    expect(platformCountries([{ country: "WW" }, { country: "NG" }, { country: "GH" }])).toBe("2 countries");
    expect(platformCountries([{ country: "WW" }, { country: "NG" }])).toBe("1 country");
    expect(platformCountries([{ country: "GB" }, { country: "UK" }])).toBe("1 country");
    expect(platformCountries([{ country: "WW" }])).toBe("worldwide");
  });
});

describe("afrobeatsB-06: one live row per record", () => {
  it("Wizkid's 'Final (Baba Nla)' folds into 'Final'", () => {
    const aliases: Record<string, string> = LIVE_ARTISTS.wizkid.titleAliases;
    expect(aliases["Final (Baba Nla)"]).toBe("Final");
    // The base-title rule alone keeps a parenthetical as a version.
    expect(liveTitleKey("Final (Baba Nla)")).not.toBe(liveTitleKey("Final"));
  });
  // The zero-width titles: tests/liveCharts.test.ts, "titleKey". The committed
  // board files are rebuilt by the stats-live workflow several times a day,
  // which applies both on its next run after this lands.
});

describe("afrobeatsA-18: no chart note carries the maintainer's to-do", () => {
  it("'Re-read in a later capture.' is gone from every note", () => {
    const notes = afrobeatsArtists.flatMap((a) => a.charts.flatMap((r) => r.entries.map((e) => e.note ?? "")));
    expect(notes.filter((n) => n.includes("Re-read in a later capture"))).toEqual([]);
    // The open-run notes are still there, still saying so.
    expect(notes.filter((n) => n.startsWith("Peak still open — ")).length).toBeGreaterThanOrEqual(31);
  });
});

describe("afrobeatsA-05 / A-11 / A-12 / A-13: titles and credits as the records are named", () => {
  const titles = (slug: string) => {
    const a = artistBySlug(slug)!;
    return [...a.releases, ...a.charts].map((r) => r.title);
  };
  it("Davido's plaque is on the remix, CKay is CKay and Vigro Deep is Vigro Deep", () => {
    const davido = artistBySlug("davido")!;
    expect(davido.releases.some((r) => r.title === "Ke Star (Remix)" && r.certs.some((c) => c.c === "NG"))).toBe(true);
    expect(davido.releases.some((r) => r.title === "Ke Star")).toBe(false);
    expect(titles("davido")).toContain("Ke Star (Remix) (Focalistic & Davido ft. Vigro Deep)");
    expect(titles("davido").filter((t) => /Ckay|Virgo Deep/.test(t))).toEqual([]);
  });
  it("BNXN's chart row is 'Loose Emotions', not TurnTable's 'Loose Emotiona'", () => {
    expect(titles("bnxn")).toContain("Loose Emotions");
    expect(titles("bnxn")).not.toContain("Loose Emotiona");
  });
});

describe("compareIn-01: Tyla & Wizkid's 'Dynamite' is one Nigerian record", () => {
  it("one record, both holders, and the board's figures count it once", () => {
    const ng = priceCountry("NG");
    const dynamite = ng.programs[0].records.filter((r) => /^dynamite\b/i.test(r.plaque.title));
    expect(dynamite.map((r) => r.holders.map((h) => h.artist.slug).sort())).toEqual([["tyla", "wizkid"]]);
    expect({ units: ng.units, plaques: ng.plaques, shared: ng.shared }).toEqual({ units: 70_500_000, plaques: 672, shared: 71 });
    // Negative control: the figures the live board printed.
    expect(ng.plaques).not.toBe(673);
    expect(ng.units).not.toBe(70_550_000);
  });

  it("no certification title carries a ' — ' credit the record matcher cannot read", () => {
    for (const a of afrobeatsArtists) for (const r of a.releases) expect(r.title, a.slug).not.toContain(" — ");
  });
});

describe("compareIn-03: a sum of stream-priced plaques is floored once", () => {
  it("every stored level is floor(raw / ratio), so the exact fraction is the same level", () => {
    for (const t of Object.values(CERT_THRESHOLDS))
      for (const format of ["single", "album"] as const) {
        const raw = format === "single" ? t.singleRaw : t.albumRaw;
        if (!raw) continue;
        const ratio = streamRatio(t.code, format)!;
        expect(ratio, `${t.code} ${format}`).toBeGreaterThan(1);
        for (const k of Object.keys(raw) as (keyof TierUnits)[]) {
          const tier = (k[0].toUpperCase() + k.slice(1)) as "Silver" | "Gold" | "Platinum" | "Diamond";
          expect(Math.floor(raw[k]! / ratio), `${t.code} ${format} ${k}`).toBe(thresholdFor(t.code, format, tier));
          expect(exactThresholdFor(t.code, format, tier), `${t.code} ${format} ${k}`).toEqual({ num: raw[k], den: ratio });
        }
      }
    expect(streamRatio("NL", "single")).toBe(215);
    expect(streamRatio("NL", "album")).toBe(2150);
    expect(streamRatio("UK", "single")).toBeNull();
  });

  it("a multiple is priced from the exact level: 3 × SNEP's Diamond is 1,000,000, not 999,999", () => {
    expect(unitsForCert({ c: "FR", level: "Diamond", x: 3 }, "single").units).toBe(1_000_000);
    expect(unitsForCert({ c: "FR", level: "Diamond" }, "single").units).toBe(333_333);
    expect(3 * thresholdFor("FR", "single", "Diamond")!).toBe(999_999);
  });

  it("the Netherlands ranks on the figures, ties broken by plaques — not by a rounding remainder", () => {
    const nl = priceCountry("NL");
    expect(nl.lines.map((l) => `${l.artist.slug} ${l.units}`)).toEqual([
      "ckay 232558",
      "burna-boy 130232",
      "tyla 130232",
      "rema 93023",
      "oxlade 93023",
      "tems 93023",
      "wizkid 18604",
    ]);
    expect(nl.units).toBe(790_697);
    // Negative control: what the board printed — Tyla 130,232 above Burna Boy's
    // 130,231, the per-plaque floors summed.
    expect(46_511 * 2 + 37_209).toBe(130_231);
    // The pair pages price the same line the same way.
    expect(priceArtist(comparable("burna-boy")!, { includeNigeria: true, includeFeatures: true }).byCountry.find((l) => l.country === "NL")?.units).toBe(130_232);
  });

  it("France's figure is its plaques' exact sum, floored", () => {
    expect(priceCountry("FR").units).toBe(11_183_333);
  });
});

describe("compareIn-15: no possessive after a parenthesis", () => {
  it("names the body before its 's", () => {
    expect(bodyOwner("TurnTable (TCSN)")).toBe("TurnTable");
    expect(bodyOwner("ČNS IFPI (Czechia)")).toBe("ČNS IFPI");
    expect(bodyOwner("BPI")).toBe("BPI");
    expect(pricingPhrase(priceCountry("NG"))).toBe("TurnTable's own thresholds");
    for (const code of ["NG", "CZ", "SK"]) expect(pricingPhrase(priceCountry(code)), code).not.toMatch(/\)'s/);
  });
});

describe("compareB-01: a non-Nigerian artist's Nigerian plaques are international to him", () => {
  it("says 'outside Nigeria'", () => {
    const why = nigeriaDefault(comparable("burna-boy")!, comparable("black-sherif")!).reason;
    expect(why).toBe("Nigeria included: Black Sherif has no certifications outside Nigeria.");
    expect(why).not.toContain("international");
    expect(nigeriaDefault(comparable("seyi-vibez")!, comparable("black-sherif")!).reason).toBe(
      "Nigeria included: Seyi Vibez and Black Sherif have no certifications outside Nigeria.",
    );
  });
});

describe("compareA-05: the chip is the highest award, not the most units", () => {
  it("Asake's UK line shows his Gold album, and its units do not move", () => {
    const pair = priceArtist(comparable("asake")!).byCountry.find((l) => l.country === "UK")!;
    expect(pair.top).toMatchObject({ level: "Gold", title: "Mr. Money With The Vibe" });
    expect(pair.units).toBe(1_160_000);
    const board = priceCountry("UK").lines.find((l) => l.artist.slug === "asake")!;
    expect(board.top).toMatchObject({ level: "Gold", title: "Mr. Money With The Vibe" });
    expect(board.units).toBe(1_160_000);
  });
});

describe("compareA-03: the fold counts countries not already on screen", () => {
  // 15 since 7 Oct 2026: "Dai Dai"'s RIAA Latin plaque went 6× → 19× Platino
  // (1,140,000 units), so the US · LATIN line left the fold for the table and
  // Sweden took its place. Every folded row is now a country of its own.
  it("Burna Boy vs Davido folds 15 further countries; the US · LATIN line is on screen", () => {
    const c = compare(comparable("burna-boy")!, comparable("davido")!);
    const tail = c.collapsed.find((t) => t.side === "a")!;
    expect(tail.countries).toBe(15);
    expect(tail.rows.length).toBe(15);
    expect(c.rows.find((r) => r.country === "US" && r.program === "RIAA Latin")?.a?.units).toBe(1_140_000);
    expect(tail.rows.some((r) => r.program)).toBe(false);
    const onScreen = new Set(c.rows.map((r) => r.country));
    expect(new Set(tail.rows.map((r) => r.country).filter((x) => !onScreen.has(x))).size).toBe(tail.countries);
  });

  // The control the Burna Boy pair carried until 7 Oct: a Latin line in the
  // fold whose country (the RIAA line) is already on screen. Rema's "Bubalu"
  // 2× Platino folds beside Davido.
  it("Rema vs Davido folds 11 further countries over 12 market rows, the US · LATIN line not among the countries", () => {
    const c = compare(comparable("rema")!, comparable("davido")!);
    const tail = c.collapsed.find((t) => t.side === "a")!;
    expect(tail.countries).toBe(11);
    expect(tail.rows.length).toBe(12); // the control: market rows, which it printed
    expect(tail.rows.find((r) => r.program === "RIAA Latin")?.country).toBe("US");
    const onScreen = new Set(c.rows.map((r) => r.country));
    expect(onScreen.has("US")).toBe(true);
    expect(new Set(tail.rows.map((r) => r.country).filter((x) => !onScreen.has(x))).size).toBe(tail.countries);
  });
});

describe("compareA-04: footnote 1 names every issuer in a country", () => {
  // Sony Music since 7 Oct 2026: the Platinum that replaced Sony Music
  // Colombia's Gold is read off Sony Music's own plaque (owner's ruling).
  it("Burna Boy vs Rema: Sony Music and Pro Música Colombia", () => {
    const c = compare(comparable("burna-boy")!, comparable("rema")!);
    const co = c.notCounted.filter((n) => n.country === "CO");
    expect(co).toHaveLength(1);
    // The body keeps its accent since core-08 of the same debug pass (one
    // name per certifying body; #429).
    expect(co[0].issuer).toBe("Sony Music · Pro Música Colombia");
  });
});

describe("compareA-06: Burna Boy's registers are dated by his last full sweep", () => {
  it("is the newest sweep document's date, not the last partial read", () => {
    const newest = readdirSync("docs/sweeps")
      .map((f) => f.match(/^sweep-(\d{4}-\d{2}-\d{2})\.md$/)?.[1])
      .filter((d): d is string => Boolean(d))
      .sort()
      .at(-1);
    expect(CERTS_LAST_FULL_SWEEP).toBe(newest);
    expect(comparable("burna-boy")!.registersReadOn).toBe(CERTS_LAST_FULL_SWEEP);
    expect(comparable("burna-boy")!.registersReadOn).toBe(comparable("wizkid")!.registersReadOn);
    // Negative control: a later one-register read (RIAA, 7 Oct 2026, "Dai
    // Dai"'s 19× Platino) moves CERTS_VERIFIED_ON and not the sweep date.
    expect(CERTS_VERIFIED_ON).toBe("2026-10-07");
    expect(comparable("burna-boy")!.registersReadOn).not.toBe(CERTS_VERIFIED_ON);
  });
});

describe("compareB-08: the multiplier rule is said once", () => {
  it("folds the shared closing sentence when two or more notes end on it", () => {
    const cz = CERT_THRESHOLDS.CZ.caveat!;
    const nz = CERT_THRESHOLDS.NZ.caveat!;
    const nl = CERT_THRESHOLDS.NL.caveat!;
    const p = caveatParagraph([cz, nz, nl]);
    expect(p.split(SHARED_MULTIPLE_RULE).length - 1).toBe(1);
    expect(p.endsWith(SHARED_MULTIPLE_RULE)).toBe(true);
    expect(p).toContain("ČNS IFPI states no multiplier rule.");
    expect(p).toContain(nl);
    // One note alone keeps its own sentence; the boards print them one at a time.
    expect(caveatParagraph([nz])).toBe(nz);
    // Negative control: joined as shipped, the rule printed twice.
    expect([cz, nz].join(" ").split(SHARED_MULTIPLE_RULE).length - 1).toBe(2);
  });
});

describe("compareB-09: AMPROFON's note prices the award in the chip's own words", () => {
  it("N × Platinum and 4 × Platinum + 1 × Gold, the register's own wording quoted", () => {
    const mx = CERT_THRESHOLDS.MX.caveat!;
    expect(mx).toContain("An N× award is priced here as N × Platinum, and a combined award (Platino & Oro, 4 & 1) as the sum of its parts, 4 × Platinum + 1 × Gold.");
    expect(mx).not.toContain("4 × Platino + 1 × Oro");
  });
});

describe("crossSite-09: the index's plaque total is records, and says so", () => {
  it("is the records' sum, a shared record once", () => {
    const records = countryBoards().reduce((n, b) => n + b.plaques, 0);
    const lines = countryBoards().reduce((n, b) => n + b.programs.reduce((m, p) => m + p.lines.reduce((k, l) => k + l.plaques, 0), 0), 0);
    // 1,241 since 7 Oct 2026: Turkey's two records, "Dai Dai" and "Water".
    expect(records).toBe(1_241);
    expect(lines).toBeGreaterThan(records);
  });
});
