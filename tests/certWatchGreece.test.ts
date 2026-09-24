// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { ifpiGreece, parseChart, parseAward, parseWeek, urlOf } from "../scripts/cert-watch/adapters/ifpi-greece.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { verdict } from "../scripts/cert-watch/health.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * IFPI Greece on REAL saved pages (PROVENANCE.json): both digital singles
 * charts (week 37/2026, file Last-Modified 23 Sep 2026 05:48 GMT), from the
 * live dry run of 24 Sep 2026.
 */
const ien = fixture("greece/run-2026-09-24/digital_ien.html.gz");
const en = fixture("greece/run-2026-09-24/digital_en.html.gz");
const headersOf = (name: string) => {
  const h: Record<string, string> = {};
  for (const line of fixture(name).split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
    if (m) h[m[1].toLowerCase()] = m[2];
  }
  return h;
};

describe("parse", () => {
  it("reads the International chart: week 37/2026, awards verbatim, the control (Raindance, 2P) keyed by ISRC", () => {
    const got = parseChart(ien, "International");
    expect(got.week).toEqual({ week: 37, year: 2026 });
    expect(got.count).toBe(100);
    expect(got.rows.every((r) => r.reading)).toBe(true);
    const rain = got.rows.filter(ifpiGreece.control.find);
    expect(rain).toHaveLength(1);
    expect(rain[0]).toMatchObject({ credit: "Tems, Dave", title: "Raindance (feat. Tems)", rowId: "GBUM72506029", tierRaw: "2P", reading: { tier: "Platinum", x: 2 } });
    const dai = got.rows.find((r) => r.rowId === "USQX92602560");
    expect(dai).toMatchObject({ credit: "Shakira, Burna Boy", title: "Dai Dai", tierRaw: "P" });
  });

  it("emits only rows that carry an award — a charting title without one is not evidence of none", () => {
    const got = parseChart(ien, "International");
    // Dai Dai (SPINALL Remix) charts with no award that week.
    expect(ien).toContain("Dai Dai (SPINALL Remix)");
    expect(got.rows.some((r) => r.title === "Dai Dai (SPINALL Remix)")).toBe(false);
    expect(got.rows.length).toBeLessThan(got.count);
  });

  it("reads the Local chart the same way", () => {
    const got = parseChart(en, "Local");
    expect(got.week).toEqual({ week: 37, year: 2026 });
    expect(got.rows.length).toBeGreaterThan(0);
    expect(got.rows.every((r) => r.formatRaw === "Digital Singles (Local)")).toBe(true);
  });

  it("reads the Award column's forms", () => {
    expect(parseAward("G")).toEqual({ tier: "Gold", x: 1 });
    expect(parseAward("P")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseAward("4P")).toEqual({ tier: "Platinum", x: 4 });
    expect(parseAward("D")).toEqual({ tier: "Diamond", x: 1 });
    expect(parseAward("Award")).toBeNull();
    expect(parseWeek("<span>Week: 3</span>7/20<b>2</b>6")).toEqual({ week: 37, year: 2026 });
  });

  it("a page without the chart table is a changed format, not an empty chart", () => {
    expect(() => parseChart("<html><title> Charts </title></html>", "International")).toThrow(AdapterError);
  });
});

describe("read", () => {
  it("reads both charts, conditional on Last-Modified; the FILE date is what staleness counts", async () => {
    const calls: { url: string; conditional?: boolean }[] = [];
    const request = async ({ url, conditional }: { url: string; conditional?: boolean }) => {
      calls.push({ url, conditional });
      const f = url.endsWith("digital_ien.html") ? "digital_ien.html" : "digital_en.html";
      return { ok: true, status: 200, headers: headersOf(`greece/run-2026-09-24/${f}.headers.txt`), body: f === "digital_ien.html" ? ien : en, url };
    };
    const got = await ifpiGreece.read({ request });
    expect(calls).toEqual([
      { url: urlOf("digital_ien.html"), conditional: true },
      { url: urlOf("digital_en.html"), conditional: true },
    ]);
    expect(got.newestDate).toBe("2026-09-23");
    expect(got.cursor["digital_ien.html"]).toBe("Wed, 23 Sep 2026 05:48:30 GMT");
    // Read on 24 Sep: clean. The chart week (7 Sep) is not the clock.
    expect(verdict({ adapter: ifpiGreece, got, staleAfterDays: 14, now: new Date("2026-09-24T06:17:00Z"), config }).status).toBe("ok");
    expect(verdict({ adapter: ifpiGreece, got, staleAfterDays: 14, now: new Date("2026-10-07T06:17:00Z"), config }).status).toBe("stale");
  });

  it("a 304 is a clean read of the kept body, and says so", async () => {
    const request = async ({ url }: { url: string }) => ({ ok: true, status: 304, notModified: true, headers: {}, body: url.endsWith("digital_ien.html") ? ien : en, url, fromCache: true });
    const got = await ifpiGreece.read({ request, cursor: { "digital_ien.html": "Wed, 23 Sep 2026 05:48:30 GMT", "digital_en.html": "Wed, 23 Sep 2026 05:48:30 GMT" } });
    expect(got.notes.join(" ")).toMatch(/unchanged since the last read \(304\)/);
    expect(got.newestDate).toBe("2026-09-23");
  });
});

describe("diff", () => {
  const rows = [...parseChart(ien, "International").rows, ...parseChart(en, "Local").rows];
  const run = (r: unknown[], index = frozenIndex()) => evaluateRows(ifpiGreece, r, { index, liveArtists: LIVE_ARTISTS, config });

  it("the week's awards are in sync with the site", () => {
    const got = run(rows);
    expect(got.candidates).toEqual([]);
    expect(got.counts.matched).toBeGreaterThanOrEqual(2);
  });

  it("Raindance (feat. Tems) is Tems's, and a NEW PLAQUE without her GR plaque", () => {
    // LABELLED EDIT: no GR plaque on Raindance.
    const none = frozenIndex((j) => delete releaseOf(j, "tems", "Raindance").holdings["GR|"]);
    const c = run(rows, none).candidates.filter((x) => x.artist === "tems");
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", release: "Raindance", tierRaw: "2P" });
  });
});
