import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { tours } from "../app/data/tours";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { allFirsts } from "../app/data/firsts";

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

describe("the per-show board carries only per-show figures", () => {
  // Toronto and Montreal (Feb 2024) sat here as exact halves of Boxscore's
  // combined two-show totals, labelled "1 of 2 sold-out nights" with the
  // headcount dropped. The body never published a per-night gross; a row that
  // says it is one night of a stand, with no headcount, is that estimate again.
  it("has no row that is one night of a multi-night stand without a headcount", () => {
    const halves = revenueShows.filter((s) => /\b1 of \d|\(\d nights?\)/i.test(s.tour) && !s.tickets);
    expect(halves.map((s) => `${s.venue}, ${s.city}`)).toEqual([]);
  });
});

describe("multi-night stands are carried as the body prints them", () => {
  // Toronto and Montreal (Feb 2024) were halved into the single-show board,
  // then withdrawn; Paul asked why a verified figure should vanish. They are
  // shown beneath the board as stands: the body's combined gross and headcount,
  // the number of shows, and no per-night split — and never in the ranking.
  it("each stand names its show count and is not also on the ranked board", () => {
    expect(revenueStands.length).toBeGreaterThan(0);
    for (const st of revenueStands) {
      expect(st.shows).toBeGreaterThan(1);
      expect(st.tickets).toMatch(/^\d{1,3}(,\d{3})*$/);
      expect(st.revenue).toBeGreaterThan(0);
      const onBoard = revenueShows.filter((s) => s.artist === st.artist && s.venue === st.venue && s.year === st.dates.slice(-4));
      expect(onBoard, `${st.venue} ${st.dates} is both a stand and a ranked show`).toEqual([]);
    }
  });

  it("keeps the two February 2024 stands at Boxscore's figures", () => {
    const toronto = revenueStands.find((s) => s.city === "Toronto")!;
    const montreal = revenueStands.find((s) => s.city === "Montreal")!;
    expect([toronto.revenue, toronto.tickets, toronto.shows]).toEqual([2801928, "29,579", 2]);
    expect([montreal.revenue, montreal.tickets, montreal.shows]).toEqual([1904384, "26,303", 2]);
  });
});

// ── Box-office extension, 3 Oct 2026 ──────────────────────────────────────
describe("the ranked board holds no per-night average of a stand, and is in order", () => {
  // Wizkid's O2 Arena "show" ($958,489 from 16,938, Made in Lagos Tour 2021)
  // sat on the board for months: it was the AVERAGE of a sold-out three-night
  // run reported as one total. That run is not in `revenueStands` yet (the
  // body's exact figure is awaiting a read), so the reported run is listed
  // here beside the carried stands — every run the guard must know about.
  const knownRuns = [
    ...revenueStands.map((s) => ({ name: `${s.artist}, ${s.venue} ${s.dates}`, revenue: s.revenue, tickets: s.tickets, shows: s.shows })),
    // Reported (Touring Data's X post title), not yet read at the body, so not
    // in revenueStands. Once the stand lands there, delete this line — the
    // test below fails once it lands, so the run is never carried twice.
    { name: "Wizkid, The O2 Arena 28 Nov–1 Dec 2021", revenue: 2875468, tickets: "50,814", shows: 3 },
  ];

  it("the hand-carried Wizkid O2 run is not also in revenueStands", () => {
    expect(revenueStands.filter((s) => s.artist === "Wizkid" && s.venue === "The O2 Arena")).toEqual([]);
  });
  const n = (t?: string) => (t ? Number(t.replace(/,/g, "")) : NaN);
  const isAverageOf = (row: { revenue: number; tickets?: string }, run: (typeof knownRuns)[number]) =>
    Math.abs(row.revenue - run.revenue / run.shows) < 1 ||
    (row.tickets !== undefined && Math.abs(n(row.tickets) - n(run.tickets) / run.shows) < 1 && Math.abs(row.revenue * run.shows - run.revenue) < run.shows * 1000);

  it("catches the row the site actually shipped (negative control)", () => {
    const shipped = { artist: "Wizkid", venue: "The O2 Arena", city: "London", flag: "🇬🇧", tour: "Made in Lagos Tour", year: "2021", tickets: "16,938", revenue: 958489 };
    expect(knownRuns.some((r) => isAverageOf(shipped, r))).toBe(true);
    // ...and does not flag a genuine single night that happens to share the venue.
    const burnaO2 = revenueShows.find((s) => s.artist === "Burna Boy" && s.venue === "The O2 Arena")!;
    expect(knownRuns.some((r) => isAverageOf(burnaO2, r))).toBe(false);
  });

  it("no ranked row equals a known stand's per-night average", () => {
    const hits = revenueShows.flatMap((s) => knownRuns.filter((r) => isAverageOf(s, r)).map((r) => `${s.artist} ${s.venue} ${s.year} = ${r.name} / ${r.shows}`));
    expect(hits).toEqual([]);
  });

  it("rows are sorted by revenue, highest first", () => {
    const out = revenueShows.slice(1).flatMap((s, i) => (s.revenue > revenueShows[i].revenue ? [`${s.venue} ${s.year} ($${s.revenue}) sits below ${revenueShows[i].venue} ($${revenueShows[i].revenue})`] : []));
    expect(out).toEqual([]);
  });

  it("no show is listed twice", () => {
    const keys = revenueShows.map((s) => `${s.artist}|${s.venue}|${s.year}|${s.revenue}`);
    expect(keys.length).toBe(new Set(keys).size);
  });
});

// ── Debug fixes, 24 Sep 2026 ───────────────────────────────────────────────
describe("the biggest-concert tile and the Oceania firsts agree with the data", () => {
  it("the /records/tours tile prints the single-show gross at two places, like the hero", () => {
    // topShowM(1) re-rounded $6,147,209 to "$6.1M" beside a hero reading $6.15M.
    const src = readFileSync(join(ROOT, "app/records/tours/page.tsx"), "utf8");
    expect(src).not.toMatch(/topShowM\(1\)/);
    expect(`$${(topShow.revenue / 1e6).toFixed(2)}M`).toBe("$6.15M");
  });

  it("dates the Oceania firsts to the year the Oceania shows were played", () => {
    // All three were stamped 2026; the four arena dates are October 2025.
    // The run the firsts name: the No Sign of Weakness tour's Oceania leg.
    const run = tours.find((t) => /No Sign of Weakness/.test(t.name))!;
    const oceania = (run.dates ?? []).filter((s) => s.country === "Australia" || s.country === "New Zealand");
    expect(oceania.length).toBe(4);
    const years = new Set(oceania.map((s) => s.date.slice(-4)));
    expect(years.size, "the Oceania run spans one year").toBe(1);
    const firsts = allFirsts.filter((f) => /Oceania/.test(f.title));
    expect(firsts.length).toBe(3);
    for (const f of firsts) expect(f.year, f.title).toBe([...years][0]);
  });
});
