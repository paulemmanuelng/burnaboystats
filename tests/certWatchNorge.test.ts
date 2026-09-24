// @vitest-environment node
import { describe, it, expect } from "vitest";
import { ifpiNorge, parseRows, parseTrophy, parsePager, pageUrl, yearUrl, isoOf } from "../scripts/cert-watch/adapters/ifpi-norge.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { verdict } from "../scripts/cert-watch/health.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

/**
 * IFPI Norge on REAL saved pages (PROVENANCE.json): page 1 of the trophy list
 * and the 2026 year view, from the live dry run of 24 Sep 2026.
 */
const pg1 = fixture("norge/run-2026-09-24/pg-1.html");
const y2026 = fixture("norge/run-2026-09-24/aar-2026.html");
const ok = (body: string, url = pageUrl(1)) => ({ ok: true, status: 200, headers: {}, body, url });

describe("parse", () => {
  it("reads page 1: 100 trophies, newest 25/08/2026, every trophy parsed", () => {
    const rows = parseRows(pg1, pageUrl(1));
    expect(rows).toHaveLength(100);
    expect(rows[0]).toMatchObject({ dateRaw: "25/08/2026", credit: "Bargee", title: "SEES IGJEN", formatRaw: "Singel", format: "single", reading: { tier: "Gold", x: 1 } });
    expect(rows.filter((r) => !r.reading)).toEqual([]);
    expect(parsePager(pg1)).toMatchObject({ current: 1, next: "https://ifpi.no/trofe/trofeoversikt/?pg=2" });
  });

  it("the control row (DAVE | Location, Platina 1x) is on the live page, verbatim", () => {
    const loc = parseRows(pg1, pageUrl(1)).filter(ifpiNorge.control.find);
    expect(loc).toHaveLength(1);
    expect(loc[0].raw).toBe("19/05/2026 | DAVE | Location | Universal Music | Singel | Trofe_PLATINA_minimini_grey.png | 1x");
    expect(loc[0].reading).toEqual({ tier: "Platinum", x: 1 });
  });

  it("reads Nivå's free text: the digits are the multiple", () => {
    // Every form below is one the register printed (23 Sep sweep union).
    const PLAT = "Trofe_PLATINA_minimini_grey.png";
    const GULL = "Trofe_GULL_minimini_yellow.png";
    expect(parseTrophy(PLAT, "1x")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseTrophy(PLAT, "x1")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseTrophy(PLAT, "X2")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseTrophy(PLAT, "20X")).toEqual({ tier: "Platinum", x: 20 });
    expect(parseTrophy(PLAT, "1xx")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseTrophy(PLAT, "")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseTrophy(PLAT, "Platinum")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseTrophy(PLAT, "1x platina")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseTrophy(GULL, "")).toEqual({ tier: "Gold", x: 1 });
    expect(parseTrophy(GULL, "Gull")).toEqual({ tier: "Gold", x: 1 });
    expect(parseTrophy(GULL, "1x")).toEqual({ tier: "Gold", x: 1 });
    // An image that is neither trophy is left unparsed (the union has 21 such rows).
    expect(parseTrophy("", "2X")).toBeNull();
    // A Gull above 1 was never printed — not guessed.
    expect(parseTrophy(GULL, "2x")).toBeNull();
  });

  it("reads the 2026 view: every trophy dated 2026, the year selected on the page", async () => {
    const calls: string[] = [];
    const request = async ({ url }: { url: string }) => {
      calls.push(url);
      return ok(url === yearUrl(2026) ? y2026 : pg1, url);
    };
    const got = await ifpiNorge.read({ deep: true, now: new Date("2026-09-24T06:17:00Z"), request });
    expect(calls).toEqual([pageUrl(1), yearUrl(2026)]);
    expect(got.newestDate).toBe("2026-08-25");
    expect(got.notes.join(" ")).toMatch(/deep read: \d+ trophies for 2026/);
  });

  it("a page other than the one requested is a different page", async () => {
    // The page-1 body served for the 2026 view: no 2026 selected.
    const request = async ({ url }: { url: string }) => ok(pg1, url);
    const e = await ifpiNorge.read({ deep: true, now: new Date("2026-09-24T06:17:00Z"), request }).catch((x: unknown) => x);
    expect((e as AdapterError).kind).toBe("mismatch");
  });

  it("a bot wall or decoy is never an empty read", async () => {
    const e = await ifpiNorge.read({ deep: false, request: async () => ok(fixture("decoy/za-risa-browser.html")) }).catch((x: unknown) => x);
    expect((e as AdapterError).kind).toBe("challenge");
  });

  it("dates are dd/mm/yyyy", () => {
    expect(isoOf("25/08/2026")).toBe("2026-08-25");
    expect(isoOf("30/11/-0001")).toBeNull();
  });
});

describe("diff", () => {
  const run = (rows: unknown[], index = frozenIndex()) => evaluateRows(ifpiNorge, rows, { index, liveArtists: LIVE_ARTISTS, config });
  const loc = parseRows(pg1, pageUrl(1)).filter(ifpiNorge.control.find);

  it("DAVE | Location is Burna Boy's through the lead alias, and in sync at NO Platinum", () => {
    const got = run(parseRows(pg1, pageUrl(1)));
    expect(got.counts.matched).toBe(1);
    expect(got.candidates).toEqual([]);
  });

  it("…and a flagged NEW PLAQUE against the site without its NO plaque", () => {
    // LABELLED EDIT: no NO plaque on Location.
    const none = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Location").holdings["NO|"]);
    const c = run(loc, none).candidates;
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", artist: "burna-boy", release: "Location", country: "NO" });
    expect(c[0].flags.join(" ")).toMatch(/credit does not name Burna Boy — matched on lead "Dave" \+ title/);
  });
});

describe("the live control (review, 24 Sep 2026)", () => {
  it("is checked on the daily read while page 1 reaches back past 19/05/2026 (it reached 01/12/2025 on 24 Sep)", async () => {
    const got = await ifpiNorge.read({ deep: false, now: new Date("2026-09-24T06:17:00Z"), request: async ({ url }: { url: string }) => ok(pg1, url) });
    expect(got.window).toEqual({ oldest: "2025-12-01" });
    const v = verdict({ adapter: ifpiNorge, got, deep: false, now: new Date("2026-09-24T06:17:00Z"), config });
    expect(v.status).toBe("ok");
    expect(v.notes).toContain("control 19/05/2026 | DAVE | Location present");
    // LABELLED EDIT of the read: the control row gone from page 1.
    const lost = verdict({ adapter: ifpiNorge, got: { ...got, rows: got.rows.filter((r) => !ifpiNorge.control.find(r)) }, deep: false, now: new Date("2026-09-24T06:17:00Z"), config });
    expect(lost).toMatchObject({ status: "format", detail: "control row missing (19/05/2026 | DAVE | Location)" });
    // LABELLED EDIT of the read's reach: page 1 ending after 19/05/2026 — the
    // control is not due on a daily run, and the line says so.
    const short = verdict({ adapter: ifpiNorge, got: { ...got, window: { oldest: "2026-06-01" } }, deep: false, now: new Date("2026-09-24T06:17:00Z"), config });
    expect(short.notes).toContain("control row older than today's read reaches — checked on deep runs");
  });

  it("a deep read covers the year, for the control and the matched floor", async () => {
    const request = async ({ url }: { url: string }) => ok(url === yearUrl(2026) ? y2026 : pg1, url);
    const got = await ifpiNorge.read({ deep: true, now: new Date("2026-09-24T06:17:00Z"), request });
    expect(got).toMatchObject({ years: [2026], totalYear: 2026 });
    expect((ifpiNorge as { matchedFloor?: unknown }).matchedFloor).toEqual({ deep: true });
  });
});
