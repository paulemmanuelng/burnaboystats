import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { artistBySlug, chartEntries, chartTerritories } from "../app/data/afrobeats";

/**
 * Follow-ups from the review of the four-artist board expansion (Kizz Daniel,
 * Ruger, Oxlade, Tiwa Savage), 25 Sep 2026. Each negative control is the
 * string the branch carried before the fix.
 */

const ROOT = join(__dirname, "..");
const read = (f: string) => readFileSync(join(ROOT, f), "utf8");

describe("Tiwa Savage's 'Energy' open-run note says what was read", () => {
  const SHIPPED = "Peak still open — read in the release's first weeks on the Top 100, so it may yet climb. Re-read in a later capture.";
  const energy = () => {
    const a = artistBySlug("tiwa-savage")!;
    const r = a.charts.find((x) => x.title === "Energy")!;
    return r.entries.find((e) => e.c === "NG")!;
  };

  it("the run is 16 weeks old, so the note no longer calls it the first weeks", () => {
    const e = energy();
    expect(e.peak).toBe(7);
    expect(e.note).not.toBe(SHIPPED);
    expect(e.note).not.toContain("first weeks");
    // What the verifier recorded: No. 7 on 30 Jul 2026, 16 issues from 4 Jun
    // to the latest read, 17 Sep.
    expect(e.note).toMatch(/^Peak still open — /);
    expect(e.note).toContain("16 weeks in (4 Jun to 17 Sep 2026)");
    expect(e.note).toContain("No. 7 on 30 Jul");
  });

  it("negative control: the shipped note is the one the test above rejects", () => {
    expect(SHIPPED).toContain("first weeks");
  });
});

describe("the ✓ᴴ mark has one definition", () => {
  const README = read("docs/sweeps/README.md");
  const SHIPPED_DEFINITION =
    "seen in the Hung Medien chart database (swisscharts.com and its mirrors), not at the chart body's own site";
  const line = README.split("\n").find((l) => l.startsWith("- **✓ᴴ**"))!;

  it("is a row for country X read on another country's Hung Medien domain", () => {
    expect(line).toBeTruthy();
    expect(line).toContain("a chart row for country X, read on a Hung Medien sister domain of a **different** country");
    // The contradiction the review found: swisscharts.com was called a mirror
    // while the Swiss rows read there were marked ✓. It is Switzerland's own.
    expect(line).toContain("a Swiss row or a Swiss plaque read there is **✓**, not ✓ᴴ");
    expect(README).not.toContain(SHIPPED_DEFINITION);
  });

  it("is on no published row today, and the four new sweep documents agree", () => {
    for (const slug of ["kizz-daniel", "ruger", "oxlade", "tiwa-savage"]) {
      const doc = read(`docs/sweeps/${slug}-chart-peaks-v1.md`);
      // A table row whose mark column is ✓ᴴ. Prose may still mention the mark.
      const marked = doc.split("\n").filter((l) => /^\|.*\|\s*✓ᴴ\s*\|/.test(l));
      expect(marked, slug).toEqual([]);
    }
  });
});

describe("Oxlade's Netherlands and Portugal rows (dropped 25 Sep 2026)", () => {
  const a = artistBySlug("oxlade")!;
  const doc = read("docs/sweeps/oxlade-chart-peaks-v1.md");
  const FLAG: Record<string, string> = { GB: "UK" };
  const codeOf = (flag: string) => {
    const cc = [...flag].map((ch) => String.fromCharCode(ch.codePointAt(0)! - 0x1f1e6 + 65)).join("");
    return FLAG[cc] ?? cc;
  };

  it("are off the board: no NL or PT entry on any Oxlade release", () => {
    const codes = a.charts.flatMap((r) => r.entries.map((e) => e.c));
    expect(codes).not.toContain("NL");
    expect(codes).not.toContain("PT");
    expect(chartEntries(a)).toBe(32);
    expect(chartTerritories(a)).toBe(9);
  });

  it("the sweep document's 'Outside Nigeria' table lists exactly the board's non-Nigerian entries", () => {
    const section = doc.slice(doc.indexOf("## Outside Nigeria"), doc.indexOf("### Dropped on 25 Sep 2026"));
    const rows = section
      .split("\n")
      .filter((l) => /^\| [^|]+ \| \p{RI}\p{RI} /u.test(l))
      .map((l) => codeOf(l.split("|")[2].trim().match(/^\p{RI}\p{RI}/u)![0]))
      .sort();
    const data = a.charts
      .flatMap((r) => r.entries.map((e) => e.c))
      .filter((c) => c !== "NG")
      .sort();
    expect(rows).toEqual(data);
  });

  it("the document records why, and the rows wait on the hand check", () => {
    expect(doc).toContain("### Dropped on 25 Sep 2026: the Netherlands #13 and Portugal #60");
    expect(doc).toContain('"NL \\| Peak: 13 / Wochen: 45"');
    expect(doc).toContain("**no chart name and no week**");
    expect(doc).toMatch(/## Total: 31 singles \+ 1 album = 32 chart entries/);
  });
});
