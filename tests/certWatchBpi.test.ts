// @vitest-environment node
import { describe, it, expect } from "vitest";
import { join } from "node:path";
import { bpi, parseList, parseDetail, listUrl } from "../scripts/cert-watch/adapters/bpi.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { createFixtureHttp } from "../scripts/cert-watch/http.mjs";
import { configProblems } from "../scripts/cert-watch/index.mjs";
import { FIX, fixture, config } from "./certWatchHelpers";

/**
 * BPI is HELD by its robots.txt (`User-agent: *` / `Disallow: /`, read 24 Sep
 * 2026). The parsers are proved on pages the 23 Sep sweep saved; the adapter
 * itself must never fetch a register page while robots.txt says no.
 */
describe("parse (pages saved by the 23 Sep sweep)", () => {
  it("reads the list view verbatim, Dai Dai at Silver", () => {
    const rows = parseList(fixture("bpi/q-burna.html"));
    expect(rows).toHaveLength(24);
    expect(rows.filter((r) => !r.reading)).toEqual([]);
    const dai = rows.find(bpi.control.find)!;
    expect(dai).toMatchObject({
      credit: "SHAKIRA & BURNA BOY",
      title: "DAI DAI",
      tierRaw: "Silver",
      reading: { tier: "Silver", x: 1 },
      formatRaw: "Single",
      format: "single",
      dateRaw: "07.08.2026",
    });
    expect(rows.find((r) => r.title === "LAST LAST")).toBeTruthy();
    expect(parseList(fixture("bpi/newest-page1.html")).length).toBeGreaterThan(20);
  });

  it("reads a multiple in BPI's own form", () => {
    const multi = parseList(fixture("bpi/q-burna.html")).filter((r) => /x Platinum$/.test(r.tierRaw));
    expect(multi.length).toBeGreaterThan(0);
    for (const r of multi) expect(r.reading).toEqual({ tier: "Platinum", x: Number(r.tierRaw.split("x")[0]) });
  });

  it("reads a detail page's Most Recent Certification", () => {
    const d = parseDetail(fixture("bpi/detail-daidai.html"));
    expect(d).toMatchObject({ credit: "SHAKIRA & BURNA BOY", title: "DAI DAI", current: "Silver", currentDate: "07 August 2026", released: "15 May 2026" });
    expect(d.history).toEqual([{ date: "07 August 2026", tier: "Silver" }]);
    // The kept-plaque negative control: ASAKE | SUNGBA, Silver, 17 January 2025.
    const s = parseDetail(fixture("bpi/detail-sungba.html"));
    expect([s.credit, s.title, s.current, s.currentDate]).toEqual(["ASAKE", "SUNGBA", "Silver", "17 January 2025"]);
  });

  it("refuses a page that is not a detail page", () => {
    expect(() => parseDetail(fixture("challenge/be-ultratop.html"))).toThrow(AdapterError);
  });
});

describe("the robots gate (SPEC §10 step 2 acceptance)", () => {
  const robotsDir = join(FIX, "robots");

  it("with BPI's real robots.txt, read() stops before a single register request", async () => {
    const http = createFixtureHttp({ root: FIX, routes: [], robotsDir });
    let requests = 0;
    const ctx = {
      now: new Date("2026-09-24T06:17:00Z"),
      cursor: null,
      robotsCheck: (url: string) => http.robotsCheck(url),
      request: async () => {
        requests++;
        throw new Error("must not be called");
      },
    };
    const err = await bpi.read(ctx).catch((e: unknown) => e);
    expect(err).toBeInstanceOf(AdapterError);
    expect((err as AdapterError).kind).toBe("robots");
    expect((err as Error).message).toMatch(/User-agent: \*: Disallow: \//);
    expect(requests).toBe(0);
  });

  it("would read the list view — with the htmx header — only if robots.txt allowed it", async () => {
    const calls: { url: string; headers: Record<string, string> }[] = [];
    const ctx = {
      now: new Date("2026-09-24T06:17:00Z"),
      cursor: { lastDate: "2026-08-07" },
      robotsCheck: async () => ({ allowed: true }),
      request: async (req: { url: string; headers: Record<string, string> }) => {
        calls.push(req);
        return { ok: true, status: 200, headers: {}, body: fixture("bpi/q-burna.html") };
      },
    };
    const got = await bpi.read(ctx);
    expect(calls).toHaveLength(1);
    expect(calls[0].url).toBe(listUrl("2026-07-31"));
    expect(calls[0].headers).toEqual({ "HX-Request": "true" });
    expect(got.rows).toHaveLength(24);
    expect(got.cursor).toEqual({ lastDate: "2026-08-07" });
  });

  it("is enabled only by a written permission record in config, never by a code change", () => {
    const on = { ...config, adapters: { bpi: { enabled: true, why: "test" } } };
    expect(configProblems(on).join(" ")).toMatch(/adapters\.bpi: enabling a register its robots\.txt disallows needs "permission"/);
    const permitted = { ...config, adapters: { bpi: { enabled: true, why: "test", permission: { from: "BPI", on: "2026-10-01", scope: "daily list read" } } } };
    expect(configProblems(permitted)).toEqual([]);
    expect(config.adapters.bpi.enabled).toBe(false);
  });
});
