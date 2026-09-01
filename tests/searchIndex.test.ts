import { describe, it, expect } from "vitest";
import { afrobeatsArtists, certCount, countryCount, chartEntries } from "../app/data/afrobeats";
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
  const makeRe = () =>
    /path: "\/afrobeats\/([a-z-]+)",[\s\S]{0,600}?description: "[^"]*?(\d+) certifications across (\d+) countr(?:y|ies)(?: and (\d+) official chart entries)?/g;

  it("has no stale certification, country or chart-entry count", () => {
    const src = readFileSync(join(process.cwd(), "app/lib/searchIndex.ts"), "utf8");
    const stale: string[] = [];
    let m: RegExpExecArray | null;
    let seen = 0;
    const RE = makeRe();
    while ((m = RE.exec(src))) {
      seen++;
      const a = afrobeatsArtists.find((x) => x.slug === m![1]);
      if (!a) { stale.push(`${m[1]}: no such artist on the board`); continue; }
      // Two phrasings ship: some entries end "and N official chart entries",
      // the rest "and his/her official chart peaks" with no number. The entry
      // count is only checked where one is actually stated — and it was the
      // SECOND shape, skipped by an earlier version of this regex, that was
      // hiding four stale plaque counts including Seyi Vibez's.
      const issues: string[] = [];
      if (certCount(a) !== Number(m[2])) issues.push(`certs says ${m[2]}, data ${certCount(a)}`);
      if (countryCount(a) !== Number(m[3])) issues.push(`countries says ${m[3]}, data ${countryCount(a)}`);
      if (m[4] && chartEntries(a) !== Number(m[4])) issues.push(`entries says ${m[4]}, data ${chartEntries(a)}`);
      if (issues.length) stale.push(`${m[1]}: ${issues.join("; ")}`);
    }
    expect(seen, "the description phrasing changed and this test now checks nothing").toBeGreaterThanOrEqual(14);
    expect(stale).toEqual([]);
  });
});
