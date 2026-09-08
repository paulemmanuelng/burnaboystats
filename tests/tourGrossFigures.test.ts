import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { tours } from "../app/data/tours";
import { revenueShows } from "../app/data/tourRevenue";

/**
 * The record tour gross, and the record single-show gross, agree everywhere.
 *
 * These are the two most-typed figures on the site outside the certification
 * counts — the tour gross appears in fifteen places beyond data/, including a
 * page title, an OG card, a stat card and a search-index description. Only one
 * of them was derived, and it derived WRONG: `grossOf(gross).toFixed(1)` turned
 * $30.46M into $30.5M, so the desktop hero of /records/tours disagreed with its
 * own <title> and with the mobile screen rendered into the same document.
 *
 * That is the Bugatti failure exactly — re-verify the Boxscore total and one
 * surface moves while the typed ones do not. So both figures are pinned to the
 * data here, and every typed copy has to match.
 */

const ROOT = process.cwd();

const grossOf = (g?: string) => (g ? Number.parseFloat(g.replace(/[^0-9.]/g, "")) : 0);

/** The figures as the DATA states them, which is what prose must repeat. */
const topTour = [...tours].sort((a, b) => grossOf(b.gross) - grossOf(a.gross))[0];
const topShow = [...revenueShows].sort((a, b) => b.revenue - a.revenue)[0];

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|css)$/.test(p)) out.push(p);
  }
  return out;
}

/** Blank out comments, preserving length, so prose ABOUT a figure is not a use of it. */
function stripComments(src: string): string {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + " ".repeat(m.length - p1.length));
}

/**
 * Every PRECISE "$N.NNM" in app/, outside the data files that define them.
 *
 * A decimal is required on purpose. A record figure is exact — $30.46M, $6.15M
 * — while "$3M" and "$6M" are chart axis ticks, deliberately round, and
 * policing those would fail the guard on labels that are supposed to be
 * approximate. Comments are stripped for the same reason: the note explaining
 * why the hero must not print $30.5M is not a claim that it does.
 */
function typedMillions(): { file: string; value: string }[] {
  const hits: { file: string; value: string }[] = [];
  for (const f of walk(join(ROOT, "app"))) {
    const rel = f.slice(ROOT.length + 1);
    if (rel.startsWith("app/data/")) continue;
    for (const m of stripComments(readFileSync(f, "utf8")).matchAll(/\$\d+\.\d+M\b/g)) {
      hits.push({ file: rel, value: m[0] });
    }
  }
  return hits;
}

describe("the tour figures agree wherever they are stated", () => {
  it("the data still has both records, so this guard is testing something", () => {
    expect(topTour?.gross, "no top tour gross in data/tours.ts").toBeTruthy();
    expect(topShow?.revenue, "no top show revenue in data/tourRevenue.ts").toBeGreaterThan(0);
  });

  it("/records/tours renders the gross verbatim, not re-rounded", () => {
    const page = readFileSync(join(ROOT, "app/records/tours/page.tsx"), "utf8");
    // The exact shape that broke it: re-formatting the string loses a digit.
    expect(
      page,
      "the hero must not re-round the gross — toFixed(1) turned $30.46M into $30.5M"
    ).not.toMatch(/grossOf\(topTour\.gross\)\.toFixed\(/);
  });

  it("no typed $N.NNM in app/ contradicts the data", () => {
    // Only the two record figures are policed. Other money strings on the site
    // (a single show, a car, a chart note) are their own facts; this guard
    // fails a copy that LOOKS like one of the two records but has drifted.
    const tourGross = topTour.gross!;                       // "$30.46M"
    const showGross = `$${(topShow.revenue / 1_000_000).toFixed(2)}M`;
    const known = new Set([tourGross, showGross]);

    // A copy has drifted if it parses within 5% of a record figure but is not
    // string-equal to it — i.e. someone rounded, or the data moved and the
    // prose did not.
    const near = (a: string, b: string) => {
      const x = grossOf(a);
      const y = grossOf(b);
      return y > 0 && Math.abs(x - y) / y < 0.05;
    };

    const drifted = typedMillions()
      .filter((h) => !known.has(h.value))
      .filter((h) => near(h.value, tourGross) || near(h.value, showGross))
      .map((h) => `${h.file}: "${h.value}" — the data says ${tourGross} / ${showGross}`);

    expect(
      drifted,
      "a typed figure is within rounding distance of a record but does not match it"
    ).toEqual([]);
  });

  it("the figures are actually typed somewhere, so the check is not vacuous", () => {
    const all = typedMillions().map((h) => h.value);
    expect(all, "no $N.NNM found in app/ at all — has the format changed?").toContain(topTour.gross);
  });
});
