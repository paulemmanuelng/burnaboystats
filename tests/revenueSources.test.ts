import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { tours } from "../app/data/tours";
import { onThisDayEvents } from "../app/lib/onThisDay";
import { tourMapCountries } from "../app/lib/tourMapData";

/**
 * Every row on the revenue board carries its source in the DATA (owner,
 * 3 Oct 2026: "all the reported shows in our site is now sourced yes?"), and
 * Burna Boy's Ziggo Dome 2022 gross is held off the board (owner's ruling the
 * same day: its only trail leads back to an uncited Wikipedia edit; TouringData
 * never reported it). The sources are data only — the page does not print
 * them (the owner rejected per-row source links earlier).
 */

interface Row { artist: string; venue: string; year?: string; dates?: string; revenue: number; tickets?: string; source?: string }

/** The bodies a gross may rest on. A press outlet counts only quoting one. */
const BODY = "(?:TouringData|Billboard Boxscore|Pollstar)";
const LEADS_WITH_BODY = new RegExp(`^${BODY}, `);
const PRESS_QUOTING_BODY = new RegExp(`^[A-Z][^,;]*, quoting ${BODY}\\b`);
/** Where TouringData was read: one of its X posts, or its archived tour table. */
const TD_WHERE = /^TouringData, (X post of \d{1,2} [A-Z][a-z]{2} \d{4} \([^)]+\), from the owner's screenshot|[^;]*Tour table \(touringdata\.org, via the Internet Archive, snapshot \d{14}\))/;

const label = (r: Row) => `${r.artist}, ${r.venue}, ${r.year ?? r.dates}`;

/** What is wrong with each row's source; empty when every row is sourced. */
function sourceProblems(rows: Row[]): string[] {
  return rows.flatMap((r) => {
    const s = (r.source ?? "").trim();
    if (!s) return [`${label(r)}: no source`];
    if (/wikipedia/i.test(s)) return [`${label(r)}: rests on Wikipedia`];
    if (!LEADS_WITH_BODY.test(s) && !PRESS_QUOTING_BODY.test(s)) return [`${label(r)}: names no body first`];
    if (s.startsWith("TouringData, ") && !TD_WHERE.test(s)) return [`${label(r)}: TouringData, but not where it was read`];
    return [];
  });
}

/** Verbatim from tourRevenue.ts at 99d942cf, the head this change starts from. */
const SHIPPED_ZIGGO: Row = { artist: "Burna Boy", venue: "Ziggo Dome", year: "2022", tickets: "17,000", revenue: 1564720 };
const isZiggo2022 = (r: Row) => r.artist === "Burna Boy" && r.venue === "Ziggo Dome" && r.year === "2022";

describe("every show and stand names its source in the data", () => {
  it("every ranked show and every stand has a source that names its body and where it was read", () => {
    expect(sourceProblems([...revenueShows, ...revenueStands])).toEqual([]);
  });

  it("the check covers the whole board (shows and stands)", () => {
    expect(revenueShows.length).toBeGreaterThan(0);
    expect(revenueStands.length).toBeGreaterThan(0);
    expect(revenueShows.every((r) => typeof r.source === "string")).toBe(true);
  });

  it("negative control: the board as it shipped at 99d942cf, with no source field, fails every row", () => {
    // At 99d942cf no row carried a `source`: the same rows without it, with the
    // Ziggo Dome row that was on the board then.
    const shipped: Row[] = [...revenueShows.map(({ source: _s, ...r }) => r), SHIPPED_ZIGGO];
    const problems = sourceProblems(shipped);
    expect(problems.length).toBe(shipped.length);
    expect(problems).toContain("Burna Boy, Ziggo Dome, 2022: no source");
  });

  it("negative control: the Ziggo figure's own press provenance does not pass as a body", () => {
    // The verify stage's note for the row, verbatim: an aggregator that NAMES
    // bodies is not one of them.
    const note =
      "The Top Charts Africa list, as reprinted by TheCable on Voice of Nigeria (19 Apr 2023), which names Bloomberg, Touring Data and Pollstar as its sources: $1,564,720 / 17,000 for 14 Apr 2022 (Space Drift tour). Not among TouringData's Space Drift reports.";
    expect(sourceProblems([{ ...SHIPPED_ZIGGO, source: note }])).toEqual(["Burna Boy, Ziggo Dome, 2022: names no body first"]);
  });

  it("negative control: a Wikipedia table never counts, even one that cites Pollstar", () => {
    // tourRevenue.ts's own comment beside Tyla's Manila row, verbatim.
    const manila = revenueShows.find((r) => r.artist === "Tyla" && r.venue === "SM Mall of Asia Arena")!;
    const wiki = "Also in Wikipedia's We Wanna Party Tour table, from Pollstar.";
    expect(sourceProblems([{ ...manila, source: wiki }])).toEqual(["Tyla, SM Mall of Asia Arena, 2025: rests on Wikipedia"]);
    expect(sourceProblems([{ ...manila, source: `TouringData, X post of 29 Jul 2026 (WE WANNA PARTY), from the owner's screenshot; ${wiki}` }]).length).toBe(1);
  });

  it("negative control: TouringData without the post or table it was read at fails", () => {
    // tourRevenue.ts's old comment beside the Brisbane row, verbatim.
    const brisbane = revenueShows.find((r) => r.venue === "Brisbane Entertainment Centre")!;
    expect(sourceProblems([{ ...brisbane, source: "TouringData's No Sign of Weakness report (14 Mar 2026)" }]).length).toBe(1);
  });

  it("the sources are never printed: the revenue page reads no .source, its client board takes rows without it, /api/v1 maps no source field", () => {
    // Not a bundle guarantee: tours.ts and firsts.ts import revenueShows and are
    // imported by client components, so the data file (sources included) ships
    // in a shared browser chunk. The owner's rule is that no page PRINTS them.
    const page = readFileSync("app/records/tours/revenue/page.tsx", "utf8");
    expect(page).not.toMatch(/\.source\b/);
    expect(page).toMatch(/<RevenueBoard shows=\{boardShows\}>/);
    expect(page).not.toMatch(/boardShows = revenueShows\.map\(\(\{[^}]*\bsource\b/);
    expect(readFileSync("app/components/RevenueBoard.tsx", "utf8")).toMatch(/shows: Omit<RevenueShow, "source">\[\]/);
    expect(readFileSync("app/api/v1/tours/route.ts", "utf8")).not.toMatch(/\bsource: r\.source/);
  });
});

/** Every .ts/.tsx file under app/, for the stale-figure scan. */
function appFiles(dir = "app"): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? appFiles(p) : /\.(ts|tsx)$/.test(f) ? [p] : [];
  });
}

describe("Burna Boy's Ziggo Dome 2022 gross is held off the board (owner, 3 Oct 2026)", () => {
  it("is not a ranked show, and no row carries its gross", () => {
    expect(revenueShows.filter(isZiggo2022)).toEqual([]);
    expect(revenueShows.filter((r) => r.revenue === SHIPPED_ZIGGO.revenue)).toEqual([]);
    expect(revenueStands.filter((r) => r.venue === "Ziggo Dome")).toEqual([]);
  });

  it("negative control: the row as it shipped, put back, is caught", () => {
    expect([...revenueShows, SHIPPED_ZIGGO].filter(isZiggo2022).length).toBe(1);
  });

  it("no file under app/ types the figure outside a comment, so no page prints it", () => {
    // tourRevenue.ts keeps the figure in its HELD note, a comment; code is not.
    const code = (f: string) =>
      readFileSync(f, "utf8").split("\n").filter((l) => !/^\s*(\/\/|\/?\*)/.test(l)).join("\n");
    expect(appFiles().filter((f) => /1,?564,?720/.test(code(f)))).toEqual([]);
    // The scan sees the row as it shipped (a code line, not a comment).
    expect(/1,?564,?720/.test(`  { artist: "Burna Boy", venue: "Ziggo Dome", revenue: 1564720 },`.split("\n").filter((l) => !/^\s*(\/\/|\/?\*)/.test(l)).join("\n"))).toBe(true);
  });

  it("the SHOW stays: the tour date and the sell-out first are untouched", () => {
    const dates = tours.flatMap((t) => t.dates ?? []).filter((d) => d.venue === "Ziggo Dome");
    expect(dates.map((d) => d.date)).toEqual(["Apr 14, 2022"]);
    expect(readFileSync("app/data/firsts.ts", "utf8")).toMatch(/First African artist to sell out the Ziggo Dome/);
  });

  it("On This Day's 14 April 2022 card prints no gross for it", () => {
    const e = onThisDayEvents.find((x) => x.id === "show:2022-04-14:ziggo-dome")!;
    expect(e.headline).toBe("Burna Boy played Ziggo Dome, Amsterdam");
    expect(e.detail).not.toMatch(/\$|tickets/);
    expect(e.body).not.toBe("Billboard Boxscore");
    expect(e.href).toBe("/records/tours");
  });

  it("the tour map's Netherlands card has no biggest line (the design rule for no reported night)", () => {
    const nl = tourMapCountries.find((c) => c.name === "Netherlands")!;
    expect(nl.big).toBeNull();
    expect(nl.events).toContain("Ziggo Dome, Amsterdam (2022)");
  });
});

describe("the board's own checks still hold without the row", () => {
  it("ranked by gross, highest first, with no show twice", () => {
    const rev = revenueShows.map((r) => r.revenue);
    expect(rev).toEqual([...rev].sort((a, b) => b - a));
    const keys = revenueShows.map((r) => `${r.artist}|${r.venue}|${r.year}`);
    expect(new Set(keys).size).toBe(keys.length);
  });

  it("Burna Boy still holds the top of the board and the counts are derived, not typed", () => {
    expect(revenueShows[0].artist).toBe("Burna Boy");
    for (const f of ["app/records/tours/revenue/page.tsx", "app/records/tours/page.tsx", "app/records/page.tsx", "app/lib/recordBooks.ts", "app/lib/searchStats.ts", "app/records/tours/revenue/opengraph-image.tsx"]) {
      const src = readFileSync(f, "utf8");
      expect(src, f).toMatch(/revenueShows\.length/);
      expect(src, f).not.toMatch(/\b8[23] (verified |single-show )?shows\b/);
    }
  });
});
