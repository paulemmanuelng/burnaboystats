import { describe, it, expect } from "vitest";
import {
  certCountryCodes,
  countryBoards,
  countryCopy,
  countryFromSlug,
  countrySlug,
  priceCountry,
  pricingPhrase,
} from "../app/lib/certCountry";
import { buildSearchDocs } from "../app/lib/buildSearchDocs";
import { comparableArtists, compare, priceArtist } from "../app/lib/certUnits";
import { CERT_THRESHOLDS } from "../app/data/certThresholds";

/**
 * The country view is a PIVOT of the compare engine, not a second one. If these
 * ever disagree the site prints two different figures for the same plaques —
 * Canada at 720,000 on one page and 715,000 on another — and a reader who
 * noticed would be right to stop trusting both.
 */
const OPTS = { includeNigeria: true, includeFeatures: true };

describe("one country, every artist — reconciled against priceArtist", () => {
  it("agrees line for line with the compare engine, in every country and every programme", () => {
    // Both engines split a separately-priced programme onto its own line
    // (RIAA Latin), so the reconciliation is per MARKET — country plus
    // programme — not per country. Matching on the country alone would let
    // the two disagree about which side of the split a plaque falls on and
    // still pass.
    const mismatches: string[] = [];
    for (const code of certCountryCodes()) {
      const board = priceCountry(code, OPTS);
      for (const artist of comparableArtists) {
        const priced = priceArtist(artist, OPTS);
        const programs = [
          ...new Set([
            ...board.programs.map((p) => p.program ?? ""),
            ...priced.byCountry.filter((l) => l.country === code).map((l) => l.program ?? ""),
            ...priced.listed.filter((l) => l.country === code).map((l) => l.program ?? ""),
          ]),
        ];
        for (const program of programs) {
          const same = (l: { country: string; program?: string }) =>
            l.country === code && (l.program ?? "") === program;
          const counted = priced.byCountry.find(same) ?? null;
          const listed = priced.listed.find(same) ?? null;
          const line =
            board.programs
              .find((p) => (p.program ?? "") === program)
              ?.lines.find((l) => l.artist.slug === artist.slug) ?? null;
          const where = `${code}${program ? `/${program}` : ""}/${artist.slug}`;

          if (!counted && !listed) {
            if (line) mismatches.push(`${where}: country view has a line the compare engine does not`);
            continue;
          }
          if (!line) {
            mismatches.push(`${where}: compare engine has a line the country view drops`);
            continue;
          }
          const units = counted?.units ?? 0;
          const countedPlaques = counted?.releases ?? 0;
          const unpriced = (counted?.notCounted?.plaques ?? 0) + (listed?.releases ?? 0);
          if (line.units !== units) mismatches.push(`${where}: units ${line.units} vs ${units}`);
          if (line.counted !== countedPlaques) mismatches.push(`${where}: counted ${line.counted} vs ${countedPlaques}`);
          if (line.notCounted !== unpriced) mismatches.push(`${where}: not counted ${line.notCounted} vs ${unpriced}`);
          // The chip names the same record on both: where two plaques tie on
          // award and units, the pair page kept the first in release order and
          // the board's "Highest plaque" the first alphabetically — Burna Boy's
          // French line read "Dai Dai" on one and "Be Honest" on the other
          // (review of the 5 Oct 2026 debug pass).
          const top = (counted ?? listed)?.top ?? null;
          const said = (t: { title: string; level: string; x: number } | null) => (t ? `${t.title} · ${t.x}× ${t.level}` : "none");
          if (said(line.top) !== said(top)) mismatches.push(`${where}: top ${said(line.top)} vs ${said(top)}`);
        }
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
    const boards = countryBoards(OPTS);
    // Every ARTIST's plaque is on its line: the lines hold exactly the collapse.
    const onLines = boards.reduce(
      (n, b) => n + b.programs.reduce((m, p) => m + p.lines.reduce((k, l) => k + l.plaques, 0), 0),
      0,
    );
    expect(onLines).toBe(collapsed);
    // …and the boards' own figures count each RECORD once (4 Oct 2026): the
    // collapse less one for every extra holder of a shared record — no more,
    // no less, so nothing is dropped and nothing is counted twice.
    const extraHolders = boards.reduce(
      (n, b) => n + b.programs.reduce((m, p) => m + p.records.reduce((k, r) => k + r.holders.length - 1, 0), 0),
      0,
    );
    expect(extraHolders).toBeGreaterThan(0);
    const onBoards = boards.reduce((n, b) => n + b.plaques, 0);
    expect(onBoards).toBe(collapsed - extraHolders);
  });

  it("features off drops featured appearances and nothing else", () => {
    const on = priceCountry("UK", OPTS);
    const off = priceCountry("UK", { includeNigeria: true, includeFeatures: false });
    const featured = on.lines.flatMap((l) => l.plaqueList.filter((p) => p.isFeature)).length;
    expect(featured).toBeGreaterThan(0);
    const linePlaques = (b: typeof on) => b.lines.reduce((n, l) => n + l.plaques, 0);
    expect(linePlaques(on) - linePlaques(off)).toBe(featured);
    // The board counts records, so a featured plaque leaves the board's figure
    // only when NO holder of that record is a lead: "Ginger" stays on Wizkid's
    // line when Burna Boy's feature goes, and is still one UK plaque.
    const allFeatured = on.programs
      .flatMap((p) => p.records)
      .filter((r) => r.holders.every((h) => h.featured)).length;
    expect(on.plaques - off.plaques).toBe(allFeatured);
    expect(allFeatured).toBeLessThan(featured);
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

describe("a separately-priced programme is its own line (Paul, 23 Sep 2026)", () => {
  // RIAA Latin certifies a Platino at 60,000 units where RIAA certifies a
  // Platinum at 1,000,000. Both are United States plaques and both count
  // toward an artist's total — but a "United States" line that sums them
  // reports awards the RIAA never issued, which is the bug this pins.
  const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
  const ayra = comparableArtists.find((a) => a.slug === "ayra-starr")!;

  it("keeps the Platinos out of the RIAA line, and still counts them in the total", () => {
    const p = priceArtist(burna, OPTS);
    const us = p.byCountry.filter((l) => l.country === "US");
    const riaa = us.find((l) => !l.program)!;
    const latin = us.find((l) => l.program === "RIAA Latin")!;
    expect(riaa).toBeDefined();
    expect(latin).toBeDefined();
    expect(latin.body).toBe("RIAA Latin");
    // Dai Dai's 19× Platino (RIAA database, 6 Oct 2026): 19 × 60,000.
    expect(latin.units).toBe(1_140_000);
    expect(latin.releases).toBe(1);
    // Not inside the RIAA line…
    expect(riaa.units % 500_000).toBe(0);
    expect(riaa.units).toBe(4_500_000);
    // …but inside the artist's total, which is the sum of every line.
    expect(p.total).toBe(p.byCountry.reduce((n, l) => n + l.units, 0));
    expect(p.byCountry).toContain(latin);
  });

  it("gives the programme its own row in a head-to-head", () => {
    const c = compare(burna, ayra, { includeFeatures: true });
    const rows = [...c.rows, ...c.collapsed.flatMap((t) => t.rows)];
    const riaa = rows.find((r) => r.country === "US" && !r.program)!;
    const latin = rows.find((r) => r.country === "US" && r.program === "RIAA Latin")!;
    expect(riaa.a?.units).toBe(4_500_000);
    // Ayra Starr's only US plaque is a Platino: she is on the Latin row and
    // has no RIAA line at all.
    expect(riaa.b).toBe(null);
    expect(latin.a?.units).toBe(1_140_000);
    expect(latin.b?.units).toBe(960_000);
    expect(latin.contested).toBe(true);
  });

  it("splits the US board in two and leaves every other market whole", () => {
    const us = priceCountry("US", OPTS);
    expect(us.programs.map((p) => p.name)).toEqual(["RIAA", "RIAA Latin"]);
    const [riaa, latin] = us.programs;
    // 45 until 25 Sep 2026: + Kizz Daniel's "Buga (Lo Lo Lo)" Gold and
    // Oxlade's "Ku Lo Sa" Gold, both the standard programme. 47 on the artist
    // lines; 43 RECORDS since 4 Oct 2026, because Essence (Wizkid, Tems),
    // Ginger (Wizkid, Burna Boy), Mood (Wizkid, BNXN) and Bandana (Fireboy DML,
    // Asake) are each one RIAA plaque on two lines.
    expect(riaa.lines.reduce((n, l) => n + l.plaques, 0)).toBe(47);
    expect(riaa.plaques).toBe(43);
    expect(
      riaa.records.filter((r) => r.holders.length > 1).map((r) => r.plaque.title).sort(),
    ).toEqual(["Bandana", "Essence", "Ginger", "Mood"]);
    expect(latin.plaques).toBe(3);
    // 1,140,000 (Dai Dai 19×) + 960,000 (Santa 16×) + 120,000 (Bubalu 2×).
    expect(latin.units).toBe(2_220_000);
    expect(latin.single?.platinum).toBe(60_000);
    expect(riaa.single?.platinum).toBe(1_000_000);
    // The country's own figures are the programmes' sum, and its artist count
    // counts a person once however many programmes certified them.
    expect(us.units).toBe(riaa.units + latin.units);
    expect(us.plaques).toBe(riaa.plaques + latin.plaques);
    expect(us.artists).toBe(15);
    expect(riaa.lines.length + latin.lines.length).toBe(17);
    for (const code of certCountryCodes().filter((c) => c !== "US")) {
      expect(priceCountry(code, OPTS).programs.length, code).toBe(1);
    }
  });

  it("does not split on an issuer that has no scale of its own", () => {
    // Colombia's plaque names "Sony Music Colombia" — an issuer, not a
    // programme with published levels — so it stays on Colombia's own line and
    // is listed-not-counted like the rest of the country.
    const co = priceCountry("CO", OPTS);
    expect(co.programs.length).toBe(1);
    expect(co.programs[0].program).toBeUndefined();
    expect(co.counted).toBe(0);
  });
});

// Debug fixes, 24 Sep 2026. The description, the lede and the search entry all
// said "priced at <body>'s own thresholds" — of Colombia, whose plaques are
// never priced; of Greece, priced at IFPI's June 2013 list because IFPI Greece
// publishes no level; and of Poland, whose single levels are złoty converted
// at 2 zł a single. The lines below are the ones the site shipped.
describe("the country copy says what actually prices the plaques", () => {
  const board = (code: string) => priceCountry(code, OPTS);

  it("an unpriced country is listed, not priced", () => {
    const co = countryCopy(board("CO")).description;
    expect(co).toContain("listed, not priced");
    expect(co).not.toMatch(/priced at [^—]*own thresholds/);
    expect(co).not.toContain("no published threshold to price them against");
    expect(pricingPhrase(board("CO"))).toBeNull();
  });

  it("Greece names the IFPI list it is priced at, not IFPI Greece's own thresholds", () => {
    const gr = countryCopy(board("GR")).description;
    expect(gr).toContain("IFPI's last published level (June 2013)");
    expect(gr).not.toContain("IFPI Greece's own thresholds");
  });

  it("Poland names the złoty conversion, from the rate its row carries", () => {
    const pl = countryCopy(board("PL")).description;
    expect(pl).toContain(`singles at ${CERT_THRESHOLDS.PL.plnPerSingle} zł each`);
    expect(pl).not.toContain("ZPAV's own thresholds");
  });

  it("the search entries match, and take the article where the name does", () => {
    const docs = buildSearchDocs().filter((d) => d.path.startsWith("/compare/in/"));
    const text = docs.map((d) => d.description).join("\n");
    expect(text).not.toContain("priced at Pro Musica Colombia's own thresholds and ranked by artist");
    expect(text).not.toContain("priced at IFPI Greece's own thresholds");
    expect(text).not.toContain("awarded in United Kingdom");
    expect(text).toContain("awarded in the United Kingdom");
  });
});
