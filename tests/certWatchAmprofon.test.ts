// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { amprofon, parseTable, parseCert, PAGE } from "../scripts/cert-watch/adapters/amprofon.mjs";
import { AdapterError, decodeEntities } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * AMPROFON on the REAL page from the live dry run of 24 Sep 2026 (the whole
 * #filtertable), and Hostinger's real "Checking your browser" page (the same
 * CDN, served for pro-musica.co the same afternoon) as the challenge.
 */
const html = fixture("amprofon/run-2026-09-24/certificaciones.html.gz");
const ok = (body: string) => ({ ok: true, status: 200, headers: {}, body, url: PAGE });
const headersOf = (name: string) => {
  const h: Record<string, string> = {};
  for (const line of fixture(name).split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
    if (m) h[m[1].toLowerCase()] = m[2];
  }
  return h;
};

describe("parse", () => {
  const rows = parseTable(html);

  it("reads every row of #filtertable, keyed by idenCertificacion; the daily control (5987, TYLA | WATER) is there", () => {
    expect(rows.length).toBeGreaterThan(8600);
    expect(rows.filter((r) => !r.reading).length / rows.length).toBeLessThan(0.05);
    const water = rows.filter(amprofon.control.find);
    expect(water).toHaveLength(1);
    expect(water[0].raw).toBe("idenCertificacion 5987 · TYLA | WATER | SONY MUSIC | SINGLE TRACK | ORO | 1 | 2024-07-02");
  });

  it("decodes the register's entities, including its all-caps ones", () => {
    expect(rows.some((r) => r.credit === "JULIÓN ÁLVAREZ Y SU NORTEÑO BANDA")).toBe(true);
    expect(rows.some((r) => /&[A-Za-z]+;/.test(r.credit + r.title))).toBe(false);
    expect(decodeEntities("&EACUTE;&AACUTE;&iquest;")).toBe("ÉÁ¿");
  });

  it("reads PLATINO & ORO / 3 & 1 as Platinum ×3 — the first count goes with the first tier", () => {
    const santa = rows.filter((r) => r.title === "SANTA" && /AYRA STARR/.test(r.credit));
    expect(santa.map((r) => [r.rowId, r.tierRaw, r.reading])).toEqual(
      expect.arrayContaining([
        ["7841", "PLATINO / 4", { tier: "Platinum", x: 4 }],
        ["7134", "PLATINO & ORO / 3 & 1", { tier: "Platinum", x: 3 }],
        ["6058", "PLATINO & ORO / 1 & 1", { tier: "Platinum", x: 1 }],
      ])
    );
    expect(parseCert("DIAMANTE & PLATINO & ORO", "1 & 2 & 1")).toEqual({ tier: "Diamond", x: 1 });
    expect(parseCert("ORO", "")).toBeNull();
    expect(parseCert("PLATINO & ORO", "3")).toBeNull();
    expect(parseCert("ORO & PLATINO", "1 & 1")).toBeNull();
  });

  it("a page without the table is a changed format, never an empty register", () => {
    expect(() => parseTable("<html><title>AMPROFON</title></html>")).toThrow(AdapterError);
  });
});

describe("read", () => {
  it("is one GET in the register's locale; its row count is the floor", async () => {
    const calls: { url: string; headers?: Record<string, string> }[] = [];
    const got = await amprofon.read({
      request: async (req: { url: string; headers?: Record<string, string> }) => {
        calls.push(req);
        return ok(html);
      },
    });
    expect(calls.map((c) => [c.url, c.headers])).toEqual([[PAGE, { "Accept-Language": "es-MX" }]]);
    expect(got.total).toBe(got.rows.length);
    expect(got.newestDate).toMatch(/^2026-09-\d\d$/);
  });

  it("Hostinger's 'Checking your browser' page is a challenge — the adapter stops, never retries round it", async () => {
    const wall = { ok: true, status: 403, headers: headersOf("headers/co-hostinger-2026-09-24.txt"), body: fixture("challenge/co-hostinger-2026-09-24.html"), url: PAGE };
    let calls = 0;
    const e = await amprofon
      .read({
        request: async () => {
          calls++;
          return wall;
        },
      })
      .catch((x: unknown) => x);
    expect((e as AdapterError).kind).toBe("challenge");
    expect(calls).toBe(1);
  });
});

describe("diff", () => {
  const rows = parseTable(html);
  const run = (r: unknown[], index = frozenIndex()) => evaluateRows(amprofon, r, { index, liveArtists: LIVE_ARTISTS, config });

  it("the whole table is in sync with the site", () => {
    expect(run(rows).candidates).toEqual([]);
  });

  it("Water is a NEW PLAQUE against the site without its MX plaque", () => {
    // LABELLED EDIT: no MX plaque on Tyla's Water.
    const none = frozenIndex((j) => delete releaseOf(j, "tyla", "Water").holdings["MX|"]);
    const c = run(rows, none).candidates.filter((x) => x.artist === "tyla" && x.release === "Water");
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", country: "MX", tierRaw: "ORO / 1" });
  });
});
