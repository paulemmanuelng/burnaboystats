// @vitest-environment node
import { describe, it, expect } from "vitest";
import { bvmi, parseRows, parsePreis, readPage, selectedYear, pageUrl, MAIN_SECTION } from "../scripts/cert-watch/adapters/bvmi.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

/**
 * BVMI on REAL saved pages (PROVENANCE.json): the whole 2026 walk from the
 * live dry run of 24 Sep 2026 (22 pages), and the empty name search the
 * afternoon re-test saved.
 */
const R = "bvmi/run-2026-09-24/";
const page = (n: number) => fixture(`${R}2026-p${n}.html.gz`);
const ok = (body: string) => ({ ok: true, status: 200, headers: {}, body, url: "x" });
const PAGES = 22;

describe("parse", () => {
  it("reads page 1: 20 rows of 2026, verbatim, under their section", () => {
    const rows = readPage(ok(page(1)), 2026);
    expect(rows).toHaveLength(20);
    expect(selectedYear(page(1))).toBe(2026);
    expect(rows[0]).toMatchObject({ credit: "2Pac", title: "Hit Em Up", dateRaw: "2026", formatRaw: "Single", format: "single", tierRaw: "1x Gold", reading: { tier: "Gold", x: 1 }, programme: null });
    expect(rows[0].raw).toBe("Gold/Platin · 2Pac | Hit Em Up | 2026 | Single | 1x Gold | Universal Music Entertainment GmbH | Universal Music International Div.");
    expect(rows.every((r) => r.extra.section === MAIN_SECTION)).toBe(true);
  });

  it("the whole year: every row parsed; the daily controls (Dai Dai, Location) are there", () => {
    const rows = Array.from({ length: PAGES }, (_, i) => readPage(ok(page(i + 1)), 2026)).flat();
    expect(rows.length).toBeGreaterThan(400);
    expect(rows.filter((r) => !r.reading)).toEqual([]);
    const dai = rows.filter(bvmi.control.find);
    expect(dai).toHaveLength(1);
    expect(dai[0].raw).toBe("Gold/Platin · Shakira & Burna Boy | Dai Dai | 2026 | Single | 1x Gold | Sony Music Entertainment Germany GmbH | Epic");
    expect(rows.find((r) => r.credit === "Dave feat. Burna Boy" && r.title === "Location")).toMatchObject({ tierRaw: "1x Gold", dateRaw: "2026" });
  });

  it("keeps the other award programmes (Jazz, Kids, Musikvideo…) apart by programme", () => {
    const last = [...readPage(ok(page(21)), 2026), ...readPage(ok(page(22)), 2026)];
    const sections = [...new Set(last.map((r) => r.extra.section))];
    expect(sections).toEqual(expect.arrayContaining(["Gold/Platin", "Musikvideo", "Jazz", "Audio Books", "Kids"]));
    expect(last.filter((r) => r.extra.section === "Jazz").every((r) => r.programme === "BVMI Jazz")).toBe(true);
  });

  it("reads Preis in its own steps: 3x Gold is a Gold multiple, below 1x Platin", () => {
    expect(parsePreis("1x Gold")).toEqual({ tier: "Gold", x: 1 });
    expect(parsePreis("3x Gold")).toEqual({ tier: "Gold", x: 3 });
    expect(parsePreis("2x Platin")).toEqual({ tier: "Platinum", x: 2 });
    expect(parsePreis("1x Diamond")).toEqual({ tier: "Diamond", x: 1 });
    expect(parsePreis("Gold")).toBeNull();
  });

  it("the empty name search is never 'no rows': it is not the year page asked for", () => {
    const empty = fixture("bvmi/name-search-empty-2026-09-24.html");
    expect(parseRows(empty)).toEqual([]);
    let e: AdapterError | null = null;
    try {
      readPage(ok(empty), 2026);
    } catch (x) {
      e = x as AdapterError;
    }
    expect(e?.kind).toBe("mismatch");
    expect(e?.message).toMatch(/served the year \(none selected\) for 2026/);
  });
});

describe("read: the year walk", () => {
  const serve = (map: (n: number) => string) => {
    const calls: string[] = [];
    const request = async ({ url }: { url: string }) => {
      calls.push(url);
      return ok(map(Number(new URL(url).searchParams.get("intseite"))));
    };
    return { calls, request };
  };

  it("walks every page of this year until a page runs short (22 pages on 24 Sep 2026)", async () => {
    const s = serve((n) => page(n));
    const got = await bvmi.read({ now: new Date("2026-09-24T06:17:00Z"), request: s.request });
    expect(s.calls).toEqual(Array.from({ length: PAGES }, (_, i) => pageUrl(2026, i + 1)));
    expect(got).toMatchObject({ totalYear: 2026, years: [2026] });
    expect(got.total).toBe(got.rows.length);
  });

  it("stops when a page repeats the one before it (past the end returns the last page again)", async () => {
    // LABELLED EDIT of the scripted server: page 21 served again for 22.
    const s = serve((n) => page(n === 22 ? 21 : n));
    const got = await bvmi.read({ now: new Date("2026-09-24T06:17:00Z"), request: s.request });
    expect(s.calls).toHaveLength(22);
    expect(got.total).toBe(Array.from({ length: 21 }, (_, i) => readPage(ok(page(i + 1)), 2026)).flat().length);
  });

  it("a page of another year, or a decoy, is never a quiet day", async () => {
    // The 2026 page served for 2027 (January 2027 reads 2027, then 2026).
    const wrong = serve((n) => page(n));
    const e = await bvmi.read({ now: new Date("2027-01-05T06:17:00Z"), request: wrong.request }).catch((x: unknown) => x);
    expect((e as AdapterError).kind).toBe("mismatch");
    const decoy = await bvmi.read({ now: new Date("2026-09-24T06:17:00Z"), request: async () => ok(fixture("decoy/za-risa-browser.html")) }).catch((x: unknown) => x);
    expect((decoy as AdapterError).kind).toBe("challenge");
  });
});

describe("diff", () => {
  const rows = Array.from({ length: PAGES }, (_, i) => readPage(ok(page(i + 1)), 2026)).flat();
  const run = (r: unknown[], index = frozenIndex()) => evaluateRows(bvmi, r, { index, liveArtists: LIVE_ARTISTS, config });

  it("the 2026 walk is in sync with the site", () => {
    const got = run(rows);
    expect(got.candidates).toEqual([]);
    expect(got.counts.matched).toBeGreaterThanOrEqual(2);
  });

  it("Dai Dai is a NEW PLAQUE against the site without its DE plaque", () => {
    // LABELLED EDIT: no DE plaque on Dai Dai.
    const none = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Dai Dai").holdings["DE|"]);
    const c = run(rows, none).candidates.filter((x) => x.artist === "burna-boy" && x.release === "Dai Dai");
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", country: "DE", tierRaw: "1x Gold", programme: null });
  });
});
