import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

// scripts/build-live-charts.mjs reads back its OWN generated files before
// rewriting them, and treats a failed match as "this file has been reformatted
// by hand" — a deliberate, loud halt, because the run history is append-only
// and parsing it as empty would silently discard days that cannot be re-fetched.
//
// That safety check had a hole. `JSON.stringify(x, null, 2)` writes a populated
// array across several lines, ending "\n]", but an EMPTY one as "[]" on a
// single line. The patterns required "\n]", so a file holding an empty array —
// exactly what a newly-added artist has — could never match, and the halt fired
// on a file that was perfectly well-formed.
//
// It was not theoretical. Five board artists (asake, fireboy-dml, omah-lay,
// seyi-vibez, tyla) had empty run histories, the sweep hit tyla and exited 1,
// and the "Stats live" workflow failed on every run for days: his own figures
// kept publishing while the board's live pages served a frozen snapshot.
//
// These tests read the patterns OUT OF THE SCRIPT rather than restating them,
// so they check the shipped regexes and not a second copy that can drift.

const SCRIPT = readFileSync(join(process.cwd(), "scripts", "build-live-charts.mjs"), "utf8");

/** Pull a regex literal out of the script by the const name it reads back. */
const patternFor = (decl: string): RegExp => {
  const m = SCRIPT.match(new RegExp(`\\/export const ${decl}[^\\n]*?\\/,`));
  if (!m) throw new Error(`no readGenerated pattern found for "${decl}" — was it renamed?`);
  const body = m[0].replace(/^\//, "").replace(/\/,$/, "");
  return new RegExp(body);
};

const READERS = [
  { decl: "runHistory", type: "RunPoint", file: (n: string) => `export const runHistory: RunPoint[] = ${n};` },
  { decl: "liveCharts", type: "LiveRelease", file: (n: string) => `export const liveCharts: LiveRelease[] = ${n};` },
];

describe("the generated-file readers accept every shape they themselves write", () => {
  it.each(READERS.map((r) => [r.decl, r] as const))("%s: matches an empty array", (_d, r) => {
    // The exact text JSON.stringify produces for [] — one line, no newline.
    const written = r.file(JSON.stringify([], null, 2));
    expect(written).toContain("= [];");
    const m = written.match(patternFor(r.decl));
    expect(m, `an empty ${r.decl} array does not match, so a new artist halts the sweep`).not.toBeNull();
    expect(JSON.parse(m![1])).toEqual([]);
  });

  it.each(READERS.map((r) => [r.decl, r] as const))("%s: still matches a populated array", (_d, r) => {
    const rows = [{ date: "2026-08-25", release: "Water", platform: "spotify", position: 3 }];
    const m = r.file(JSON.stringify(rows, null, 2)).match(patternFor(r.decl));
    expect(m, `a populated ${r.decl} array stopped matching`).not.toBeNull();
    expect(JSON.parse(m![1])).toEqual(rows);
  });

  it("reads back every run-history file the repo actually ships", () => {
    // The regression as it really appeared: real files on disk, not fixtures.
    const dir = join(process.cwd(), "app", "data");
    const files = readdirSync(dir).filter((f) => /^runHistory\..+\.ts$/.test(f));
    expect(files.length, "no per-artist run-history files found at all").toBeGreaterThan(5);
    const re = patternFor("runHistory");
    const broken = files.filter((f) => {
      const m = readFileSync(join(dir, f), "utf8").match(re);
      if (!m) return true;
      try {
        JSON.parse(m[1]);
        return false;
      } catch {
        return true;
      }
    });
    expect(broken, "these files would halt the next live sweep").toEqual([]);
  });
});
