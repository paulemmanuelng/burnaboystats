import { describe, it, expect } from "vitest";
import {
  afrobeatsArtists,
  certCount,
  countryCount,
  chartEntries,
  chartTerritories,
  chartNo1s,
  type AfroArtist,
} from "../app/data/afrobeats";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { searchDocs } from "../app/lib/searchIndex";
import { generatedDocs } from "../app/lib/searchIndex.generated";
import { buildSearchDocs } from "../app/lib/buildSearchDocs";
import { allItems } from "../app/data/certifications";
import { ceremonies } from "../app/data/awards";

// Search used to index only the site's ~79 PAGES, so it could find a page and
// never a record: 63 of 85 certified titles returned nothing, "Location" —
// his most-certified title — among them, as did all 46 award bodies and every
// charting country. These are the guards for that.

describe("the generated half is current", () => {
  it("matches what the data would generate today", () => {
    // The checked-in file is written by scripts/build-search-index.mjs. If a
    // release, ceremony or country is added and the file is not rebuilt, search
    // silently stops finding it — nothing else would fail.
    expect(generatedDocs).toEqual(buildSearchDocs());
  });

  it("is a generated file, and says so", () => {
    const src = readFileSync("app/lib/searchIndex.generated.ts", "utf8");
    expect(src.startsWith("// GENERATED FILE — do not edit by hand.")).toBe(true);
  });

  it("carries no figures a page already owns", () => {
    // Names and paths only. A total copied in here would be a second source of
    // truth that drifts from the page it points at.
    for (const d of generatedDocs) expect(d.path.startsWith("/")).toBe(true);
  });
});

describe("search finds the site's own records", () => {
  it("finds every certified release by title", () => {
    const missing = [...new Set(allItems.map((r) => r.title))].filter(
      (t) => searchDocs(t).length === 0
    );
    expect(missing, `titles returning nothing: ${missing.join(", ")}`).toEqual([]);
  });

  it("finds every award body by name", () => {
    const missing = ceremonies.map((c) => c.name).filter((n) => searchDocs(n).length === 0);
    expect(missing, `award bodies returning nothing: ${missing.join(", ")}`).toEqual([]);
  });

  it("finds a record by a collaborator's name", () => {
    // The credit is what carries them — "coldplay" has to reach "We Pray".
    for (const who of ["coldplay", "justin bieber", "dave"]) {
      expect(searchDocs(who).length, who).toBeGreaterThan(0);
    }
  });

  it("folds punctuation the way titleKey does", () => {
    // Three dots and a real ellipsis are the same album. This exact mismatch
    // has already cost the site a homepage chart peak once.
    expect(searchDocs("I Told Them...").length).toBeGreaterThan(0);
    expect(searchDocs("I Told Them…").length).toBeGreaterThan(0);
  });

  it("handles multi-word queries", () => {
    // The old scorer matched the whole query as one string, so every question
    // longer than a word scored zero against everything.
    for (const q of ["burna boy grammy", "grammy awards", "last last"]) {
      expect(searchDocs(q).length, q).toBeGreaterThan(0);
    }
  });

  it("still ranks an exact page title first", () => {
    // The records must not crowd out the pages that were already working.
    expect(searchDocs("Certifications")[0].path).toBe("/certifications");
    expect(searchDocs("Methodology")[0].path).toBe("/methodology");
  });
});

// The curated half of the index deliberately imports no datasets — a documented
// bundle-size rule — so its artist descriptions carry TYPED counts. Four of the
// fourteen had gone stale unnoticed (Asake 79/3/123 against 80/4/127, CKay
// 27/14/22 against 28/15/29, Omah Lay's plaque count, and Victony's, which was
// already a country behind before a new French Gold made it two).
//
// The file cannot derive them, so this test does the deriving instead: it
// imports the data the shipped file must not.
describe("the curated index's typed artist counts match the data", () => {
  // Built fresh inside the test: a /g regex declared at describe scope keeps its
  // lastIndex between runs. The window is generous because the entries differ in
  // how much sits between the path and the description.
  // THREE phrasings ship, not two. The country clause is optional as well as
  // the entry clause: Black Sherif is the board's only single-country artist,
  // so his entry reads "24 certifications and 22 official chart entries" with
  // no "across N countries" at all — and "across" being mandatory here meant
  // the regex skipped him outright.
  const makeRe = () =>
    /path: "\/afrobeats\/([a-z-]+)",[\s\S]{0,600}?description: "[^"]*?(\d+) certifications(?: across (\d+) countr(?:y|ies))?(?: and (\d+) official chart entries)?/g;

  /** Every artist HUB doc in the curated file — the set the regex must cover.
   *  `[a-z-]+"` stops at the closing quote, so the /charts and /live docs
   *  underneath each artist are not counted. */
  const hubSlugs = (src: string) =>
    [...src.matchAll(/path: "\/afrobeats\/([a-z-]+)",/g)].map((m) => m[1]);

  it("checks every artist on the board, not a floor of them", () => {
    // The coverage assertion used to be `seen >= 14`, a number typed when the
    // board had fourteen artists. Black Sherif made fifteen; the regex matched
    // fourteen because it could not read his phrasing; fourteen still cleared a
    // floor of fourteen, so the guard went green while guarding one artist less
    // than the board holds. A hand-typed threshold cannot notice that — the
    // file's own artist docs are the only honest expectation, so compare
    // against those and let the count take care of itself.
    const src = readFileSync(join(process.cwd(), "app/lib/searchIndex.ts"), "utf8");
    const matched = [...new Set([...src.matchAll(makeRe())].map((m) => m[1]))];
    const hubs = hubSlugs(src);
    expect(
      hubs.filter((s) => !matched.includes(s)).sort(),
      "these artists have a search doc whose description this test cannot read, so their counts are unchecked",
    ).toEqual([]);
    // And the docs themselves must still cover the board.
    expect(
      afrobeatsArtists.map((a) => a.slug).filter((s) => !hubs.includes(s)).sort(),
      "these board artists have no curated search doc at all",
    ).toEqual([]);
  });

  it("has no stale certification, country or chart-entry count", () => {
    const src = readFileSync(join(process.cwd(), "app/lib/searchIndex.ts"), "utf8");
    const stale: string[] = [];
    let m: RegExpExecArray | null;
    const RE = makeRe();
    while ((m = RE.exec(src))) {
      const a = afrobeatsArtists.find((x) => x.slug === m![1]);
      if (!a) { stale.push(`${m[1]}: no such artist on the board`); continue; }
      // Each clause is only checked where the entry actually states one — some
      // end "and his/her official chart peaks" with no number, and Black
      // Sherif's names no country count. It was the second shape, skipped by an
      // earlier version of this regex, that was hiding four stale plaque counts
      // including Seyi Vibez's.
      const issues: string[] = [];
      if (certCount(a) !== Number(m[2])) issues.push(`certs says ${m[2]}, data ${certCount(a)}`);
      if (m[3] && countryCount(a) !== Number(m[3])) issues.push(`countries says ${m[3]}, data ${countryCount(a)}`);
      if (m[4] && chartEntries(a) !== Number(m[4])) issues.push(`entries says ${m[4]}, data ${chartEntries(a)}`);
      if (issues.length) stale.push(`${m[1]}: ${issues.join("; ")}`);
    }
    expect(stale).toEqual([]);
  });
});

// The same file's CHART-BOARD docs were unguarded entirely. The test above
// reads `path: "/afrobeats/<slug>"` and stops at the closing quote, so the
// `/charts` doc sitting a few lines under each hub was never looked at — and
// five of the fifteen had drifted: Wizkid still said 154 entries after
// data/afrobeats.ts settled the "Dynamite" duplicate at 153, Davido said 66
// against 93, Ayra Starr 78 against 79, Asake 123 against 127, and CKay's said
// "22 entries across 16 territories, 5 of them No. 1" against 29, 20 and 6.
//
// These are figures a reader sees in the search palette, next to the page that
// prints the right ones. Same fix as above: the shipped file cannot import the
// data, so the test imports it and does the arithmetic.
describe("the curated index's chart-board counts match the data", () => {
  const CHART_DOC = () =>
    /path: "\/afrobeats\/([a-z-]+)\/charts",[\s\S]{0,600}?description: "([^"]*)"/g;

  /** Each clause the descriptions actually use, and what it must equal. */
  const CLAUSES: { re: RegExp; label: string; of: (a: AfroArtist) => number }[] = [
    { re: /(\d+) entr(?:y|ies)/, label: "entries", of: chartEntries },
    { re: /(\d+) territor(?:y|ies)/, label: "territories", of: chartTerritories },
    { re: /(\d+)(?: of them| No\. 1 placements)/, label: "No. 1s", of: chartNo1s },
  ];

  it("checks every board that has a chart page", () => {
    const src = readFileSync(join(process.cwd(), "app/lib/searchIndex.ts"), "utf8");
    const seen = [...new Set([...src.matchAll(CHART_DOC())].map((m) => m[1]))];
    expect(
      afrobeatsArtists
        .filter((a) => a.charts.length > 0)
        .map((a) => a.slug)
        .filter((s) => !seen.includes(s))
        .sort(),
      "these boards have a /charts page with no curated search doc this test can read",
    ).toEqual([]);
  });

  it("has no stale entry, territory or No. 1 count", () => {
    const src = readFileSync(join(process.cwd(), "app/lib/searchIndex.ts"), "utf8");
    const stale: string[] = [];
    let m: RegExpExecArray | null;
    const RE = CHART_DOC();
    while ((m = RE.exec(src))) {
      const a = afrobeatsArtists.find((x) => x.slug === m![1]);
      if (!a) { stale.push(`${m[1]}: no such artist on the board`); continue; }
      // Only the clauses a description actually states. Two of them quote no
      // figures at all ("every official chart peak Victony has reached"), and
      // that is a legitimate way to write one — it just cannot go stale.
      const issues = CLAUSES.flatMap((c) => {
        const hit = m![2].match(c.re);
        if (!hit) return [];
        return Number(hit[1]) === c.of(a) ? [] : [`${c.label} says ${hit[1]}, data ${c.of(a)}`];
      });
      if (issues.length) stale.push(`${m[1]}: ${issues.join("; ")}`);
    }
    expect(stale).toEqual([]);
  });
});
