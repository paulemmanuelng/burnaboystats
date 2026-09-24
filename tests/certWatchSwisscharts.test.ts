// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { swisscharts, parseCards, parseWord, parseImage, parseCardTier, readYear, yearUrl } from "../scripts/cert-watch/adapters/swisscharts.mjs";
import { AdapterError } from "../scripts/cert-watch/adapters/base.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { hostGap } from "../scripts/cert-watch/http.mjs";
import { LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf, FIX } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * IFPI Schweiz via swisscharts.com, on the REAL 2026 page from the live dry
 * run of 24 Sep 2026 — ISO-8859-1 bytes as served.
 */
const bytes = readFileSync(join(FIX, "swisscharts/run-2026-09-24/edelmetall-2026.html"));
const latin = bytes.toString("latin1");
const ok = (body: string) => ({ ok: true, status: 200, headers: {}, body, url: yearUrl(2026) });

describe("parse", () => {
  it("reads the 2026 page as latin-1: 29 cards, every tier parsed; the daily control (Tyla, Chanel) is there", () => {
    const rows = readYear(ok(latin), 2026);
    expect(rows).toHaveLength(29);
    expect(rows.filter((r) => !r.reading)).toEqual([]);
    const chanel = rows.filter(swisscharts.control.find);
    expect(chanel).toHaveLength(1);
    expect(chanel[0]).toMatchObject({ credit: "Tyla", title: "Chanel", formatRaw: "Single", tierRaw: "Gold · award_gold.svg", reading: { tier: "Gold", x: 1 } });
    expect(latin).toContain("<h1>Gewinner 2026</h1>");
  });

  it("decoded as UTF-8 instead, a latin-1 umlaut breaks — which is why the adapter asks for latin1", () => {
    const i = bytes.indexOf(0xfc); // "ü", one byte in ISO-8859-1
    expect(i).toBeGreaterThan(0);
    expect(bytes.toString("latin1")[i]).toBe("ü");
    expect(bytes.toString("utf8")).toContain("�");
  });

  it("reads the tier from the image, and the older word-only cards", () => {
    expect(parseImage("award_platin_2.svg")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseImage("award_gold.svg")).toEqual({ tier: "Gold", x: 1 });
    // Words the 23 Sep sweep saw on cards from 1989–2026.
    expect(parseWord("Doppel-Platin")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseWord("Doppelplatin")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseWord("Fünffach-Platin")).toEqual({ tier: "Platinum", x: 5 });
    expect(parseWord("Neunfach Platin")).toEqual({ tier: "Platinum", x: 9 });
    expect(parseWord("Dreifach Gold")).toEqual({ tier: "Gold", x: 3 });
    expect(parseWord("Diamant")).toEqual({ tier: "Diamond", x: 1 });
    // A label name in the tier field ("Universal", 4 old cards) is unparsed.
    expect(parseWord("Universal")).toBeNull();
    // Image and word must agree where both are printed.
    expect(parseCardTier("award_platin_2.svg", "Doppel-Platin")).toEqual({ tier: "Platinum", x: 2 });
    expect(parseCardTier("award_platin_2.svg", "Platin")).toBeNull();
  });

  it("a page for another year, or hitparade.ch's challenge, is never a quiet day", () => {
    const other = (() => {
      try {
        readYear(ok(latin), 2025);
      } catch (e) {
        return e as AdapterError;
      }
    })()!;
    expect(other.kind).toBe("mismatch");
    const wall = { ok: true, status: 403, headers: { "cf-mitigated": "challenge" }, body: fixture("challenge/ch-hitparade.html"), url: "x" };
    const e = (() => {
      try {
        readYear(wall, 2026);
      } catch (x) {
        return x as AdapterError;
      }
    })()!;
    expect(e.kind).toBe("challenge");
  });
});

describe("read", () => {
  it("asks swisscharts.com for this year in latin-1 — never hitparade.ch — at the host's 10 s crawl delay", async () => {
    const calls: { url: string; encoding?: string }[] = [];
    const got = await swisscharts.read({
      now: new Date("2026-09-24T06:17:00Z"),
      request: async ({ url, encoding }: { url: string; encoding?: string }) => {
        calls.push({ url, encoding });
        return ok(latin);
      },
    });
    expect(calls).toEqual([{ url: "https://swisscharts.com/edelmetall/2026", encoding: "latin1" }]);
    expect(calls.every((c) => !c.url.includes("hitparade"))).toBe(true);
    expect(got).toMatchObject({ total: 29, totalYear: 2026, years: [2026] });
    expect(hostGap(config, "swisscharts.com", null)).toBe(10000);
    expect(swisscharts.hosts).toEqual(["swisscharts.com"]);
  });
});

describe("diff", () => {
  const rows = readYear(ok(latin), 2026);
  const run = (r: unknown[], index = frozenIndex()) => evaluateRows(swisscharts, r, { index, liveArtists: LIVE_ARTISTS, config });

  it("the 2026 cards are in sync with the site", () => {
    expect(run(rows).candidates).toEqual([]);
  });

  it("Chanel is a NEW PLAQUE against the site without its CH plaque", () => {
    // LABELLED EDIT: no CH plaque on Tyla's Chanel.
    const none = frozenIndex((j) => delete releaseOf(j, "tyla", "Chanel").holdings["CH|"]);
    expect(run(rows, none).candidates[0]).toMatchObject({ kind: "NEW PLAQUE", artist: "tyla", release: "Chanel", country: "CH" });
  });
});

describe("parseCards", () => {
  it("parses nothing from a page with no cards", () => {
    expect(parseCards("<html></html>", 2026)).toEqual([]);
  });
});
