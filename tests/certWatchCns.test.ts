// @vitest-environment node
import { describe, it, expect } from "vitest";
import { cnsIfpiCz, cnsIfpiSk, parseChart, parseSelectors, weekLabel } from "../scripts/cert-watch/adapters/cns-ifpi.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

/** ČNS IFPI chart-row badges on real saved chart pages (week 38/2026). */
describe("parse", () => {
  it("CZ chart 30: Dai Dai carries Zlatý singl at 15", () => {
    const html = fixture("cns/cz-w3036.html.gz");
    const sel = parseSelectors(html);
    expect([sel.chart.selected?.id, sel.week.selected?.id, sel.week.selected?.label]).toEqual(["30", "3036", "38. týden 2026"]);
    const got = parseChart(html, { chart: 30, week: sel.week.selected!.label });
    expect(got.count).toBe(100);
    const dai = got.rows.filter(cnsIfpiCz.control.find);
    expect(dai).toHaveLength(1);
    expect(dai[0]).toMatchObject({ credit: "SHAKIRA & BURNA BOY", title: "Dai Dai", tierRaw: "Zlatý singl", reading: { tier: "Gold", x: 1 }, dateRaw: "38. týden 2026", format: "single" });
    expect(dai[0].extra).toMatchObject({ position: "15.", label: "SONY MUSIC" });
  });

  it("SK chart 43: Dai Dai carries Platinový singl at 5", () => {
    const got = parseChart(fixture("cns/sk-w3036.html.gz"), { chart: 43, week: "38. týden 2026" });
    const dai = got.rows.filter(cnsIfpiSk.control.find);
    expect(dai).toHaveLength(1);
    expect(dai[0].extra.position).toBe("5.");
  });

  it("emits only rows that carry a badge — a missing badge is never evidence of no award", () => {
    const got = parseChart(fixture("cns/cz-w3036.html.gz"), { chart: 30, week: "x" });
    expect(got.count).toBe(100);
    expect(got.rows.length).toBeLessThan(100);
    expect(got.rows.every((r) => r.tierRaw)).toBe(true);
  });

  it("takes the previous week from the page's own selector (ids are not consecutive)", () => {
    const opts = parseSelectors(fixture("cns/cz-w3036.html.gz")).week.options;
    expect(opts.slice(0, 2).map((o) => o.id)).toEqual(["3036", "3033"]);
    expect(weekLabel("38. týden 2026")).toBe("week 38/2026");
  });
});

describe("read", () => {
  const serve = (map: Record<string, string>) => {
    const calls: string[] = [];
    const request = async ({ url }: { url: string }) => {
      calls.push(url);
      return { ok: true, status: 200, headers: {}, body: fixture(map[url]) };
    };
    return { calls, request };
  };

  it("reads the current week daily, and the previous week too on deep runs", async () => {
    const map = { "https://ifpicr.cz/hitparada/30": "cns/run-2026-09-24/cz-current.html.gz", "https://ifpicr.cz/hitparada/30?weekId=3033": "cns/run-2026-09-24/cz-week3033.html.gz" };
    const d = serve(map);
    const daily = await cnsIfpiCz.read({ deep: false, request: d.request });
    expect(d.calls).toEqual(["https://ifpicr.cz/hitparada/30"]);
    expect(daily.cursor).toEqual({ weekId: "3036" });
    const w = serve(map);
    await cnsIfpiCz.read({ deep: true, request: w.request });
    expect(w.calls).toEqual(["https://ifpicr.cz/hitparada/30", "https://ifpicr.cz/hitparada/30?weekId=3033"]);
  });

  it("says so when the page served is another week or another chart", async () => {
    // LABELLED EDIT of the scripted server: the current page served for week 3033.
    const wrongWeek = serve({ "https://ifpicr.cz/hitparada/30": "cns/cz-w3036.html.gz", "https://ifpicr.cz/hitparada/30?weekId=3033": "cns/cz-w3036.html.gz" });
    const e1 = await cnsIfpiCz.read({ deep: true, request: wrongWeek.request }).catch((e: unknown) => e);
    expect((e1 as AdapterError).kind).toBe("mismatch");
    expect((e1 as Error).message).toMatch(/served week 3036 for 3033/);
    // The CZ chart served when SK's was asked for.
    const wrongChart = serve({ "https://ifpicr.cz/hitparada/43": "cns/cz-w3036.html.gz" });
    const e2 = await cnsIfpiSk.read({ deep: false, request: wrongChart.request }).catch((e: unknown) => e);
    expect((e2 as AdapterError).kind).toBe("mismatch");
  });
});

describe("diff", () => {
  it("Dai Dai CZ Gold and SK Platinum are in sync with the site; CZ is a NEW PLAQUE when the site had nothing", () => {
    const cz = parseChart(fixture("cns/cz-w3036.html.gz"), { chart: 30, week: "38. týden 2026" }).rows;
    const sk = parseChart(fixture("cns/sk-w3036.html.gz"), { chart: 43, week: "38. týden 2026" }).rows;
    const ctx = { index: frozenIndex(), liveArtists: LIVE_ARTISTS, config };
    expect(evaluateRows(cnsIfpiCz, cz, ctx).candidates.filter((c) => c.artist === "burna-boy")).toEqual([]);
    expect(evaluateRows(cnsIfpiSk, sk, ctx).candidates.filter((c) => c.artist === "burna-boy")).toEqual([]);
    // LABELLED EDIT: no CZ plaque on Dai Dai.
    const none = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Dai Dai").holdings["CZ|"]);
    const got = evaluateRows(cnsIfpiCz, cz, { ...ctx, index: none }).candidates.filter((c) => c.artist === "burna-boy");
    expect(got[0]).toMatchObject({ kind: "NEW PLAQUE", country: "CZ", tierRaw: "Zlatý singl" });
  });
});
