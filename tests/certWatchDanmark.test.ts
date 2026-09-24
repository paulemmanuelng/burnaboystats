// @vitest-environment node
import { describe, it, expect } from "vitest";
import { ifpiDanmark, parsePage, PAGE, pageUrl, dateDescUrl, ROUNDS } from "../scripts/cert-watch/adapters/ifpi-danmark.mjs";
import { fixture } from "./certWatchHelpers";

/** IFPI Danmark on real saved pages. The Boom replay is in certWatchDiff.test.ts. */
describe("parse", () => {
  it("reads a page of 50 rows verbatim, every status parsed", () => {
    const rows = parsePage(fixture("danmark/page0.html.gz"));
    expect(rows).toHaveLength(50);
    expect(rows[0]).toMatchObject({ dateRaw: "16.09.2026.", credit: "Kanye West, DJ Premier", title: "Everything I Am", formatRaw: "Track", format: "single", tierRaw: "Guld", reading: { tier: "Gold", x: 1 } });
    expect(rows[0].extra.iso).toBe("2026-09-16");
    expect(rows.filter((r) => !r.reading)).toEqual([]);
  });

  it("finds the positive control: Dave feat. Tems | Raindance | Platin | 07.07.2026", () => {
    const rows = parsePage(fixture("danmark/page6.html.gz")).filter(ifpiDanmark.control.find);
    expect(rows).toHaveLength(1);
    expect(rows[0].raw).toBe("07.07.2026. | Dave feat. Tems | Raindance | Universal Music | Track | Platin");
  });

  it("keeps the register's truncated credit verbatim", () => {
    const boom = parsePage(fixture("danmark/boom-recheck.html.gz")).filter((r) => r.title === "Boom" && r.credit.startsWith("Major Lazer"));
    expect(boom.map((r) => `${r.dateRaw} ${r.credit} ${r.tierRaw}`)).toEqual([
      "01.08.2017. Major Lazer Feat. Moti Ty Dolla $ign... Platin",
      "24.05.2016. Major Lazer Feat. Moti Ty Dolla $ign... Guld",
    ]);
  });

  it("is read over http — https fails the certificate's name check", () => {
    expect(PAGE.startsWith("http://")).toBe(true);
    expect(new URL(pageUrl(0)).protocol).toBe("http:");
    expect(new URL(dateDescUrl(0)).protocol).toBe("http:");
    expect(ifpiDanmark.registerUrl.startsWith("http://")).toBe(true);
  });
});

describe("read: the union over two tie orders", () => {
  const run = "danmark/run-2026-09-24";
  const serveFrom = (map: (url: string, repeat: number) => string) => {
    const calls: { url: string; repeat: number }[] = [];
    const request = async ({ url, repeat = 0 }: { url: string; repeat?: number }) => {
      calls.push({ url, repeat });
      return { ok: true, status: 200, headers: {}, body: fixture(map(url, repeat)) };
    };
    return { calls, request };
  };
  const live = (url: string, repeat: number) => {
    const n = url.match(/page=(\d)/)![1];
    if (url.includes("order=field_certdato")) return `${run}/page${n}__datedesc.html.gz`;
    return `${run}/page${n}__default${repeat ? "__2" : ""}.html.gz`;
  };

  it("recovers the rows the default order never prints (140 → 152 on 24 Sep 2026), in ≤ 9 requests", async () => {
    const s = serveFrom(live);
    const got = await ifpiDanmark.read({ cursor: null, request: s.request });
    expect(s.calls).toHaveLength(9);
    expect(s.calls.map((c) => c.url)).toEqual(ROUNDS.flatMap((r) => [0, 1, 2].map((n) => r.url(n))));
    expect(s.calls.slice(6).every((c) => c.repeat === 1)).toBe(true);
    expect(got.rows).toHaveLength(152);
    const defaultOnly = new Set([0, 1, 2].flatMap((n) => parsePage(fixture(`${run}/page${n}__default.html.gz`)).map((r) => r.raw)));
    expect(defaultOnly.size).toBe(140);
    expect(got.notes.join(" ")).toMatch(/10 row\(s\) printed on two pages/);
    expect(got.cursor).toEqual({ lastDate: "2026-09-16" });
  });

  it("stops after a round that adds nothing", async () => {
    // Every round served the default pages: round 2 adds nothing, so no round 3.
    const s = serveFrom((url) => `${run}/page${url.match(/page=(\d)/)![1]}__default.html.gz`);
    await ifpiDanmark.read({ cursor: null, request: s.request });
    expect(s.calls).toHaveLength(6);
  });

  it("says so when the pages read do not reach back to the last run", async () => {
    const s = serveFrom(live);
    const got = await ifpiDanmark.read({ cursor: { lastDate: "2026-07-01" }, request: s.request });
    expect(got.notes.join(" ")).toMatch(/after the last run's newest 2026-07-01 — rows in between were not read/);
  });
});
