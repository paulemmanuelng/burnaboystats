// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { ifpiAustria, parseTable, parsePager, parseTier, readPage, urlFor, isoOf } from "../scripts/cert-watch/adapters/ifpi-austria.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * IFPI Austria on REAL saved pages (PROVENANCE.json): the live dry run of
 * 24 Sep 2026 (fwp_per_page=100 and =7000) and the stale default page the
 * afternoon re-test saved — the negative control for "served a different page".
 */
const pp100 = fixture("austria/run-2026-09-24/pp100.html");
const full = fixture("austria/run-2026-09-24/pp7000.html.gz");
const stale = fixture("austria/default-stale-2026-09-24.html");
const ok = (body: string) => ({ ok: true, status: 200, headers: {}, body, url: "x" });

describe("parse", () => {
  it("reads the newest 100 verbatim; the positive control is there", () => {
    const { rows, pager } = readPage(ok(pp100), 100);
    expect(pager).toMatchObject({ page: 1, per_page: 100, total_rows: 5994 });
    expect(rows).toHaveLength(100);
    const dai = rows.filter(ifpiAustria.control.find);
    expect(dai).toHaveLength(1);
    expect(dai[0]).toMatchObject({ credit: "Shakira & Burna Boy", title: "Dai Dai", formatRaw: "Single", format: "single", tierRaw: "PLATIN", reading: { tier: "Platinum", x: 1 }, dateRaw: "03.09.2026" });
    expect(dai[0].raw).toBe("Shakira & Burna Boy | Dai Dai | Single | PLATIN | Sony | 03.09.2026");
    expect(rows.filter((r) => !r.reading)).toEqual([]);
  });

  it("reads the whole register (fwp_per_page=7000): 5,994 rows, every status parsed", () => {
    const { rows, pager } = readPage(ok(full), 7000);
    expect(pager.total_rows).toBe(5994);
    expect(rows).toHaveLength(5994);
    expect(rows.filter((r) => !r.reading)).toEqual([]);
    // Old rows print no date at all; they are kept, verbatim.
    expect(rows.some((r) => r.dateRaw === "")).toBe(true);
  });

  it("the stale default page (per_page 4, total_rows 5,982) is a different page, never a quiet day", () => {
    expect(parsePager(stale)).toMatchObject({ per_page: 4, total_rows: 5982 });
    const e = (() => {
      try {
        readPage(ok(stale), 100);
      } catch (err) {
        return err as AdapterError;
      }
    })()!;
    expect(e).toBeInstanceOf(AdapterError);
    expect(e.kind).toBe("mismatch");
    expect(e.message).toMatch(/served per_page 4 \(total_rows 5982\) for fwp_per_page=100/);
  });

  it("calls a bot wall or a decoy a challenge, not an empty read", () => {
    const e = (() => {
      try {
        readPage({ ok: true, status: 200, headers: {}, body: fixture("decoy/za-risa-browser.html"), url: "x" }, 100);
      } catch (err) {
        return err as AdapterError;
      }
    })()!;
    expect(e.kind).toBe("challenge");
  });

  it("dates are dd.mm.yyyy", () => {
    expect(isoOf("03.09.2026")).toBe("2026-09-03");
    expect(isoOf("")).toBeNull();
  });
});

describe("read", () => {
  it("reads the newest 100 daily — always with fwp_per_page — and the full register on deep runs", async () => {
    const calls: string[] = [];
    const request = async ({ url }: { url: string }) => {
      calls.push(url);
      return ok(url.endsWith("=7000") ? full : pp100);
    };
    const daily = await ifpiAustria.read({ deep: false, request });
    expect(calls).toEqual(["https://ifpi.at/auszeichnungen/?fwp_per_page=100"]);
    expect(daily).toMatchObject({ total: 5994, newestDate: "2026-09-03" });
    calls.length = 0;
    await ifpiAustria.read({ deep: true, request });
    expect(calls).toEqual([urlFor(100), urlFor(7000)]);
  });
});

describe("diff", () => {
  const run = (rows: unknown[], index = frozenIndex()) => evaluateRows(ifpiAustria, rows, { index, liveArtists: LIVE_ARTISTS, config });

  it("the whole register is in sync with the site: no candidate", () => {
    const got = run(readPage(ok(full), 7000).rows);
    expect(got.candidates).toEqual([]);
    expect(got.counts.matched).toBeGreaterThan(0);
  });

  it("Dai Dai is a NEW PLAQUE against the site without its AT plaque", () => {
    // LABELLED EDIT: no AT plaque on Dai Dai.
    const none = frozenIndex((j) => delete releaseOf(j, "burna-boy", "Dai Dai").holdings["AT|"]);
    const c = run(readPage(ok(pp100), 100).rows, none).candidates.filter((x) => x.artist === "burna-boy");
    expect(c).toHaveLength(1);
    expect(c[0]).toMatchObject({ kind: "NEW PLAQUE", release: "Dai Dai", country: "AT", tierRaw: "PLATIN" });
  });

  it("never gives Tyla another act's 'Show Me Love' (title alone), nor Wizkid 'WizTheMc'", () => {
    const rows = readPage(ok(pp100), 100).rows;
    const trap = rows.find((r) => r.title === "Show Me Love");
    expect(trap?.raw).toBe("WizTheMc & bees & honey | Show Me Love | Single | 2-fach PLATIN | Bamboo | 06.08.2026");
    // LABELLED EDIT: the site without any AT plaque on Tyla's Show Me Love, so
    // a title-only match would surface as a NEW PLAQUE.
    const bare = frozenIndex((j) => delete releaseOf(j, "tyla", "Show Me Love").holdings["AT|"]);
    expect(run([trap], bare).counts.matched).toBe(0);
  });
});

describe("tiers", () => {
  it("reads the Status forms the register prints", () => {
    expect(parseTier("GOLD")).toEqual({ tier: "Gold", x: 1 });
    expect(parseTier("PLATIN")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseTier("2-fach PLATIN")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseTier("18-fach PLATIN")).toEqual({ tier: "Platinum", x: 18 });
    expect(parseTier("3-fach GOLD")).toEqual({ tier: "Gold", x: 3 });
    expect(parseTier("Platin")).toEqual({ tier: "Platinum", x: 1 });
    expect(parseTier("DIAMANT")).toBeNull();
    expect(parseTier("")).toBeNull();
  });

  it("the table parser on a page with no table gives no rows", () => {
    expect(parseTable("<html></html>")).toEqual([]);
  });
});
