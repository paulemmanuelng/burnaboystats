// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import * as certs from "../app/data/certifications";
import * as afro from "../app/data/afrobeats";
import { buildSiteIndex, hydrateSiteIndex, holdingFor } from "../scripts/cert-watch/site.mjs";
import { watchVerdict, mergeRun, emptyState } from "../scripts/cert-watch/state.mjs";
import { parseRows } from "../scripts/cert-watch/adapters/riaa.mjs";
import { ROOT, LIVE_ARTISTS, config, fixture, frozenIndex, releaseOf } from "./certWatchHelpers";

// These tests read hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners several take longer
// than vitest's 5 s default, so this file gets a longer per-test limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * The watchlist (SPEC §5.4). Both targets are derived at run time from the
 * site index — the tests read the REAL app/data, so when a plaque is added by
 * hand the watch line follows it. The register row is the real 24 Sep RIAA
 * Latin row (award default_451299, `badge LA level 2`); edits are LABELLED.
 */
const site = hydrateSiteIndex(buildSiteIndex(certs, afro, LIVE_ARTISTS, config), LIVE_ARTISTS, config);
const latinItem = config.watchlist.find((w: { id: string }) => w.id === "dai-dai-riaa-latin");
const bpiItem = config.watchlist.find((w: { id: string }) => w.id === "dai-dai-bpi-gold");
const latinBody = fixture("riaa/latin-search-burna-2026-09-24.html.gz");
const rowOf = (html: string) => parseRows(html).find((r) => r.rowId === "default_451299")!;
const siteLatin = certs.singles.find((r) => r.title === "Dai Dai")!.certs.find((c) => c.c === "US" && c.body === "RIAA Latin")!;

describe("until {register: atLeastSite} — Dai Dai, RIAA Latin", () => {
  it("the config item says so", () => {
    expect(latinItem.until).toEqual({ register: "atLeastSite" });
    expect(latinItem.rowId).toBe("default_451299");
  });

  it("the real 24 Sep row against the real site holding: pending, and the site is ahead", () => {
    const row = rowOf(latinBody);
    expect(row).toMatchObject({ credit: "SHAKIRA & BURNA BOY", title: "DAI DAI", tierRaw: "badge LA level 2" });
    const { holding } = holdingFor(site, "burna-boy", "Dai Dai", "US", "RIAA Latin");
    // Derived from certifications.ts, never typed (PR #320 made it ×6).
    expect(holding).toEqual({ tier: siteLatin.level, x: siteLatin.x ?? 1, body: "RIAA Latin" });
    const v = watchVerdict(latinItem, { reading: row.reading, readClean: true, holding, ladder: "riaa", body: "RIAA" });
    expect(v.landed).toBe(false);
    expect(v.siteAhead).toBe(true);
    expect(v.landsWhen).toBe(`the register reads level ${siteLatin.x} or more`);
  });

  it("with the level edited to the site's: landed, and it notifies once", () => {
    // LABELLED EDIT of the real Latin search body: badge LA level 2 → level 6.
    const row = rowOf(latinBody.replaceAll("badge LA level 2", `badge LA level ${siteLatin.x}`));
    const { holding } = holdingFor(site, "burna-boy", "Dai Dai", "US", "RIAA Latin");
    const v = watchVerdict(latinItem, { reading: row.reading, readClean: true, holding, ladder: "riaa", body: "RIAA" });
    expect(v.landed).toBe(true);
    const base = { today: [], ticks: new Set(), index: site, ladders: {}, health: {}, automated: new Set(), cursors: {} };
    const w = { raw: row.tierRaw, landedNow: v.landed, landedText: v.landedText };
    const first = mergeRun({ ...base, prev: { ...emptyState(), reset: false, watch: { "dai-dai-riaa-latin": { raw: "badge LA level 2", since: "2026-09-23", landed: null } } }, prevStatus: "ok", date: new Date("2026-10-01T06:17:00Z"), runId: "1", watchReadings: { "dai-dai-riaa-latin": w } });
    const reasons = first.notifyReasons.filter((r) => r.startsWith("watchlist dai-dai-riaa-latin"));
    expect(reasons).toEqual([
      `watchlist dai-dai-riaa-latin: badge LA level 2 → badge LA level ${siteLatin.x}`,
      `watchlist dai-dai-riaa-latin: landed — the register now matches the site (Platinum ×${siteLatin.x}); remove it from config.json`,
    ]);
    expect(first.next.watch["dai-dai-riaa-latin"]).toMatchObject({ landed: "2026-10-01", raw: `badge LA level ${siteLatin.x}` });
    const second = mergeRun({ ...base, prev: first.next, prevStatus: "ok", date: new Date("2026-10-02T06:17:00Z"), runId: "2", watchReadings: { "dai-dai-riaa-latin": w } });
    expect(second.notifyReasons).toEqual([]);
    expect(second.next.watch["dai-dai-riaa-latin"].landed).toBe("2026-10-01");
  });

  it("a changed reading notifies without landing", () => {
    // LABELLED EDIT of the real Latin search body: badge LA level 2 → level 3.
    const row = rowOf(latinBody.replaceAll("badge LA level 2", "badge LA level 3"));
    const { holding } = holdingFor(site, "burna-boy", "Dai Dai", "US", "RIAA Latin");
    const v = watchVerdict(latinItem, { reading: row.reading, readClean: true, holding, ladder: "riaa", body: "RIAA" });
    expect(v.landed).toBe(false);
    const m = mergeRun({
      prev: { ...emptyState(), reset: false, watch: { "dai-dai-riaa-latin": { raw: "badge LA level 2", since: "2026-09-23", landed: null } } },
      prevStatus: "ok",
      today: [],
      date: new Date("2026-10-01T06:17:00Z"),
      runId: "1",
      ticks: new Set(),
      index: site,
      ladders: {},
      health: {},
      automated: new Set(),
      watchReadings: { "dai-dai-riaa-latin": { raw: row.tierRaw, landedNow: v.landed, landedText: v.landedText } },
      cursors: {},
    });
    expect(m.notifyReasons).toEqual(["watchlist dai-dai-riaa-latin: badge LA level 2 → badge LA level 3"]);
    expect(m.next.watch["dai-dai-riaa-latin"]).toMatchObject({ raw: "badge LA level 3", since: "2026-10-01", landed: null });
  });

  it("a register not read today never lands it", () => {
    const { holding } = holdingFor(site, "burna-boy", "Dai Dai", "US", "RIAA Latin");
    expect(watchVerdict(latinItem, { reading: null, readClean: false, holding, ladder: "riaa", body: "RIAA" }).landed).toBe(false);
  });
});

describe("until {site: …} — Dai Dai, BPI Gold", () => {
  it("the site at Silver (the frozen 24 Sep index): pending", () => {
    expect(bpiItem.until).toEqual({ site: { tier: "Gold", x: 1 } });
    const { holding } = holdingFor(frozenIndex(), "burna-boy", "Dai Dai", "UK", null);
    expect(holding).toEqual({ tier: "Silver", x: 1 });
    const v = watchVerdict(bpiItem, { reading: null, readClean: false, holding, ladder: "standard", body: "BPI" });
    expect(v.landed).toBe(false);
    expect(v.landsWhen).toBe("the site holds Gold (added by hand after a human confirms it at the BPI)");
  });

  it("follows the REAL site's UK holding (derived from certifications.ts)", () => {
    const { holding } = holdingFor(site, "burna-boy", "Dai Dai", "UK", null);
    const uk = certs.singles.find((r) => r.title === "Dai Dai")!.certs.find((c) => c.c === "UK" && !c.body)!;
    expect(holding).toEqual({ tier: uk.level, x: uk.x ?? 1 });
    const atLeastGold = ["Gold", "Platinum", "Diamond"].includes(uk.level);
    expect(watchVerdict(bpiItem, { reading: null, readClean: false, holding, ladder: "standard", body: "BPI" }).landed).toBe(atLeastGold);
  });

  it("the site edited to Gold: landed — though BPI itself is never read", () => {
    // LABELLED EDIT of the frozen site index: Dai Dai UK Silver → Gold.
    const gold = frozenIndex((j) => (releaseOf(j, "burna-boy", "Dai Dai").holdings["UK|"] = { tier: "Gold", x: 1 }));
    const { holding } = holdingFor(gold, "burna-boy", "Dai Dai", "UK", null);
    const v = watchVerdict(bpiItem, { reading: null, readClean: false, holding, ladder: "standard", body: "BPI" });
    expect(v.landed).toBe(true);
    expect(v.landedText).toBe("the site now holds Gold");
  });
});

describe("a watched register not read today", () => {
  it("renders ⏭️ with the last reading and its date — never 'unchanged'", () => {
    const dir = mkdtempSync(join(tmpdir(), "cert-watch-watch-"));
    // LABELLED EDIT of the frozen site index: Dai Dai US (RIAA Latin) at the
    // real site's multiple, so the item is pending as it is on the live site.
    const json = JSON.parse(fixture("site-index.2026-09-24.json"));
    releaseOf(json, "burna-boy", "Dai Dai").holdings["US|RIAA Latin"] = { tier: siteLatin.level, x: siteLatin.x, body: "RIAA Latin" };
    const siteJson = join(dir, "site.json");
    writeFileSync(siteJson, JSON.stringify(json));
    const run = (extra: string[], out: string) =>
      spawnSync(process.execPath, ["--no-warnings", "scripts/cert-watch/index.mjs", "--offline", "--dry-run", "--site-json", siteJson, "--out", out, ...extra], { cwd: ROOT, encoding: "utf8" });
    const a = run(["--now", "2026-09-24T06:17:00Z"], join(dir, "a"));
    expect(a.status, a.stderr).toBe(0);
    const firstBody = readFileSync(join(dir, "a", "issue-body.md"), "utf8");
    const line1 = firstBody.split("\n").find((l) => l.includes("RIAA Latin**"))!;
    expect(line1).toMatch(/^- ⏳ /);
    expect(line1).toContain(`site: Platinum ×${siteLatin.x} (RIAA Latin) — **the site is ahead of the register**`);
    expect(line1).toContain(`lands when: the register reads level ${siteLatin.x} or more`);
    expect(line1).toContain("read ✅ today, unchanged since 2026-09-24");

    const b = run(["--now", "2026-09-25T06:17:00Z", "--prev-body", join(dir, "a", "issue-body.md"), "--offline-fail=riaa-latin"], join(dir, "b"));
    expect(b.status, b.stderr).toBe(0);
    const body = readFileSync(join(dir, "b", "issue-body.md"), "utf8");
    const line = body.split("\n").find((l) => l.includes("RIAA Latin**"))!;
    expect(line).toMatch(/^- ⏭️ /);
    expect(line).toContain("last reading: `badge LA level 2` (since 2026-09-24)");
    expect(line).not.toMatch(/unchanged/);
    expect(line).not.toContain("read ✅ today");
  });
});
