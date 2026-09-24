// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { verdict, isDecoy, isClean, liveControl, controlDue, isoWeekMonday, addDays, FLOOR_RUNS, matchedVerdict } from "../scripts/cert-watch/health.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { tcsn, parseNextData, toRows as tcsnRows } from "../scripts/cert-watch/adapters/tcsn.mjs";
import { bvmi } from "../scripts/cert-watch/adapters/bvmi.mjs";
import { REGISTRY, AUTOMATED } from "../scripts/cert-watch/adapters/index.mjs";
import { isChallenge, classifyPage } from "../scripts/cert-watch/http.mjs";
import { failure } from "../scripts/cert-watch/adapters/base.mjs";
import { mergeRun } from "../scripts/cert-watch/state.mjs";
import { riaaLatin, parseRows } from "../scripts/cert-watch/adapters/riaa.mjs";
import { nvpi, parseFilter } from "../scripts/cert-watch/adapters/nvpi.mjs";
import { statusLabel, counts, staleSentence } from "../scripts/cert-watch/report.mjs";
import { ROOT, FIX, fixture, config, frozenIndex, LIVE_ARTISTS } from "./certWatchHelpers";

// The watcher suite reads hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners some tests take longer
// than vitest's 5 s default, so every watcher test file gets a longer limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * health.mjs — the per-register verdict (SPEC §3.4, §7). Every input is a
 * REAL body or a real register total; where one is edited to show what the
 * verdict would say, the edit is LABELLED and names the body it edits.
 */
const headersOf = (name: string) => {
  const h: Record<string, string> = {};
  for (const line of fixture(name).split(/\r?\n/)) {
    const m = line.match(/^([A-Za-z0-9-]+):\s*(.*)$/);
    if (m) h[m[1].toLowerCase()] = m[2];
  }
  return h;
};
const statusOf = (name: string) => Number(fixture(name).match(/^HTTP\/[\d.]+ (\d{3})/)?.[1]);

describe("bot walls and decoys", () => {
  const RISA_PAGE = { identity: /<title>Certifications - RiSA/, success: /data-footable_id=/ };

  it("RiSA's two decoys — HTTP 200, <title>ai/… — are challenges, not pages and not 'none'", () => {
    const page = { status: 200, headers: headersOf("headers/ZA_risa_org_za_browser.txt"), body: fixture("decoy/za-risa-browser.html") };
    const ajax = { status: statusOf("headers/za-risa-ajax-browser.txt"), headers: headersOf("headers/za-risa-ajax-browser.txt"), body: fixture("decoy/za-risa-ajax-browser.html") };
    expect(Buffer.byteLength(page.body)).toBe(1099);
    expect(Buffer.byteLength(ajax.body)).toBe(1311);
    expect(ajax.status).toBe(200);
    for (const res of [page, ajax]) {
      expect(isDecoy(res.body)).toBe(true);
      expect(isChallenge(res, RISA_PAGE.success)).toBe(true);
      expect(classifyPage(res, RISA_PAGE).kind).toBe("challenge");
    }
    // Through the adapter contract: an AdapterError "challenge", flagged decoy,
    // which the report prints as "decoy page".
    const e = failure({ ok: false, kind: "challenge", status: 200, detail: "decoy page, HTTP 200, \"ai/wp-admin/admin-ajax.php…\"" }, "RiSA");
    expect(e.kind).toBe("challenge");
    expect((e as unknown as { decoy: boolean }).decoy).toBe(true);
    expect(statusLabel({ status: "challenge", http: 200, decoy: true, fails: 1 }, null)).toBe("⏭️ not read — decoy page (HTTP 200) · 1st day");
  });

  it("Hostinger's 'Checking your browser' page (pro-musica.co, 24 Sep 11:19 UTC) is a challenge", () => {
    const res = { status: statusOf("headers/co-hostinger-2026-09-24.txt"), headers: headersOf("headers/co-hostinger-2026-09-24.txt"), body: fixture("challenge/co-hostinger-2026-09-24.html") };
    expect(res.status).toBe(403);
    expect(res.headers.server).toBe("hcdn");
    expect(res.body).toContain("Checking your browser before accessing");
    expect(isChallenge(res, /certificaciones/)).toBe(true);
  });

  it("a real register page is never a decoy (RIAA's page carries a challenge-platform script and still reads)", () => {
    const riaa = fixture("riaa/latin-search-burna-2026-09-24.html.gz");
    expect(isDecoy(riaa)).toBe(false);
    expect(isChallenge({ status: 200, headers: {}, body: riaa }, /table_award_row/)).toBe(false);
  });
});

describe("the daily control", () => {
  const latin = parseRows(fixture("riaa/latin-search-burna-2026-09-24.html.gz"));

  it("RIAA Latin's control is checked daily, and is present in the real 24 Sep read", () => {
    expect(riaaLatin.control.when).toBe("daily");
    const v = verdict({ adapter: riaaLatin, got: { rows: latin }, deep: false, now: new Date("2026-09-24T06:17:00Z"), config });
    expect(v.status).toBe("ok");
    expect(v.notes).toContain("control default_451299 present");
  });

  it("a daily control missing is a changed format", () => {
    // The whole 24 Sep live read of the Latin tab: the sixteen searches.
    const day = readdirSync(join(FIX, "riaa/run-2026-09-24"))
      .filter((f) => f.startsWith("latin__") && f !== "latin__newest.html.gz")
      .flatMap((f) => parseRows(fixture(`riaa/run-2026-09-24/${f}`)));
    expect(day.some((r) => r.rowId === "default_451299")).toBe(true);
    expect(verdict({ adapter: riaaLatin, got: { rows: day }, deep: false, now: new Date("2026-09-24T06:17:00Z"), config }).status).toBe("ok");
    // LABELLED EDIT of that read: the Dai Dai row (default_451299) removed.
    const without = day.filter((r) => r.rowId !== "default_451299");
    expect(without.length).toBeGreaterThan(0);
    const v = verdict({ adapter: riaaLatin, got: { rows: without }, deep: false, now: new Date("2026-09-24T06:17:00Z"), config });
    expect(v).toMatchObject({ status: "format", detail: "control row missing (default_451299)" });
  });

  it("a control checked only in the tests is never checked live", () => {
    expect(controlDue(nvpi.control, { deep: true, years: null }).due).toBe(false);
    expect(controlDue({ when: "deep", find: () => true }, { deep: false, years: null }).due).toBe(false);
  });

  it("a control in 'this year's' page is checked only while that year is read", () => {
    const c = { when: "daily", year: 2026, rowId: "x", find: () => false };
    expect(controlDue(c, { deep: false, years: [2026] }).due).toBe(true);
    const next = controlDue(c, { deep: false, years: [2027] });
    expect(next.due).toBe(false);
    expect(next.why).toMatch(/no live control this year/);
  });

  it("config.controls names a new row, from a saved fixture, over the adapter's", () => {
    const cfg = { ...config, controls: { "riaa-latin": { rowId: "default_451299", why: "test", on: "2026-09-24" } } };
    const c = liveControl(riaaLatin, cfg)!;
    expect(c.when).toBe("daily");
    expect(latin.some(c.find)).toBe(true);
  });
});

describe("floors — learned, never typed", () => {
  // NVPI's own count on 24 Sep 2026 (the saved filter response): 6,493.
  const real = parseFilter(fixture("nvpi/filter-skip0.json"));
  const at = new Date("2026-09-24T06:17:00Z");
  const run = (total: number, prev: unknown) => verdict({ adapter: nvpi, got: { rows: real.rows, total, newestDate: "2026-07-16" }, prev: prev as never, staleAfterDays: 90, now: at, config });

  it("the first clean read learns the floor; a higher read raises it", () => {
    expect(real.count).toBe(6493);
    const first = run(real.count, null);
    expect(first.status).toBe("ok");
    expect(first.track.floor).toBe(6493);
    expect(first.events.map((e: { type: string }) => e.type)).toEqual(["floor-learned"]);
    // LABELLED EDIT of NVPI's count: 6,493 → 6,494 (one award more).
    expect(run(real.count + 1, first.track).track.floor).toBe(6494);
  });

  it("a total one below the floor is 'shrank'", () => {
    // LABELLED EDIT of NVPI's count: 6,493 → 6,492 (one row removed).
    const v = run(real.count - 1, { floor: real.count });
    expect(v).toMatchObject({ status: "shrank", detail: "register shrank (6,493 → 6,492)" });
    expect(v.track.floor).toBe(6493);
    expect(isClean(v.status)).toBe(false);
  });

  it(`three identical lower reads lower the floor, with a notify reason`, () => {
    // LABELLED EDIT of NVPI's count, three runs running: 6,490.
    let prev: Record<string, unknown> = { status: "ok", floor: real.count, fails: 0 };
    const reasons: string[] = [];
    for (let i = 1; i <= FLOOR_RUNS; i++) {
      const v = run(6490, prev);
      const merged = mergeRun({
        prev: { v: 1, open: {}, dismissed: {}, watch: {}, health: { nvpi: prev }, cursors: {} },
        prevStatus: "ok",
        today: [],
        date: at,
        runId: String(i),
        ticks: new Set(),
        index: frozenIndex(),
        ladders: { nvpi: "standard" },
        health: { nvpi: { status: v.status, detail: v.detail, track: v.track, events: v.events } },
        automated: new Set(["nvpi"]),
        watchReadings: {},
        cursors: {},
      });
      reasons.push(...merged.notifyReasons);
      prev = merged.next.health.nvpi;
      if (i < FLOOR_RUNS) expect(v.status).toBe("shrank");
      else expect(v.status).toBe("ok");
    }
    expect(prev.floor).toBe(6490);
    expect(reasons.filter((r) => /shrank/.test(r))).toEqual([
      "nvpi: register shrank — register shrank (6,493 → 6,490) — first time",
      "nvpi: shrank from 6,493 to 6,490 and stayed there for 3 runs — floor lowered",
    ]);
  });

  it("a year-bound floor starts again when the year read changes", () => {
    const yearly = { ...nvpi, id: "year-bound", total: "year", control: null };
    // MAHASZ-shaped: 269 rows in 2026 (24 Sep); January 2027 reads a new page.
    const y26 = verdict({ adapter: yearly, got: { rows: real.rows, total: 269, totalYear: 2026 }, prev: null, now: at, config });
    expect(y26.track).toMatchObject({ floor: 269, floorYear: 2026 });
    const y27 = verdict({ adapter: yearly, got: { rows: real.rows, total: 3, totalYear: 2027 }, prev: y26.track, now: at, config });
    expect(y27.status).toBe("ok");
    expect(y27.track).toMatchObject({ floor: 3, floorYear: 2027 });
    expect(y27.notes.join(" ")).toMatch(/floor reset for 2027 \(was 269 for 2026\)/);
  });
});

describe("staleness", () => {
  const real = parseFilter(fixture("nvpi/filter-skip0.json"));

  it("NVPI's newest award (16-7-2026) goes stale 90 days on, on 14 Oct 2026", () => {
    expect(addDays("2026-07-16", 90)).toBe("2026-10-14");
    const ok = verdict({ adapter: nvpi, got: { rows: real.rows, newestDate: "2026-07-16" }, staleAfterDays: 90, now: new Date("2026-10-13T23:59:00Z"), config });
    expect(ok.status).toBe("ok");
    const stale = verdict({ adapter: nvpi, got: { rows: real.rows, newestDate: "2026-07-16" }, staleAfterDays: 90, now: new Date("2026-10-14T06:17:00Z"), config });
    expect(stale).toMatchObject({ status: "stale", detail: "source stale since 2026-10-14" });
    expect(isClean("stale")).toBe(true);
  });

  it("a stale register is read (not 'not read'), is named in the stale list, and still yields its rows' candidates", () => {
    const out = mkdtempSync(join(tmpdir(), "cert-watch-stale-"));
    // LABELLED EDIT of the frozen site index: Burna Boy's CA plaque on Dai Dai
    // removed, so Music Canada's real row 89702 is a lead again.
    const site = JSON.parse(fixture("site-index.2026-09-24.json"));
    delete site.releases.find((r: { artist: string; title: string }) => r.artist === "burna-boy" && r.title === "Dai Dai").holdings["CA|"];
    const siteFile = join(out, "site-index.edited.json");
    writeFileSync(siteFile, JSON.stringify(site));
    // The saved responses replayed on a LATER date: every dated register is
    // past its cadence, but every one of them was still read cleanly.
    const res = spawnSync(
      process.execPath,
      ["--no-warnings", "scripts/cert-watch/index.mjs", "--offline", "--dry-run", "--site-json", siteFile, "--now", "2026-12-24T06:17:00Z", "--out", out],
      { cwd: ROOT, encoding: "utf8" }
    );
    expect(res.status, res.stderr).toBe(0);
    const r = JSON.parse(readFileSync(join(out, "results.json"), "utf8"));
    expect(r.health.nvpi).toMatchObject({ status: "stale" });
    expect(r.health.nvpi.track.staleSince).toBe("2026-10-14");
    const n = counts(r, r.candidates);
    expect(n.notRead.map((x: { id: string }) => x.id)).not.toContain("nvpi");
    expect(n.stale.map((x: { id: string }) => x.id)).toContain("nvpi");
    // Music Canada's Dai Dai lead is still listed, from a register that is
    // stale on this date.
    expect(r.health.musiccanada.status).toBe("stale");
    expect(r.health.riaa.status).toBe("stale");
    const leads = r.candidates.map((c: { adapter: string; release: string }) => `${c.adapter} ${c.release}`);
    expect(leads).toContain("musiccanada Dai Dai");
    const body = readFileSync(join(out, "issue-body.md"), "utf8");
    expect(body).toContain(staleSentence(r, n.stale));
    expect(body).toMatch(/🇳🇱 NVPI — read, but nothing newer than 2026-07-16 \(usual gap ≤ 90 days\)/);
    expect(body).toMatch(/\| 🇳🇱 NVPI \| AUTOMATE \| ⌛ read — source stale since 2026-10-14 \|/);
  });
});

describe("matched rows — a clean-looking read that names none of the sixteen (review, 24 Sep 2026)", () => {
  // TCSN's real 24 Sep list: the whole live register, read every day.
  const rows = tcsnRows(parseNextData(fixture("tcsn/run-2026-09-24/certification.html.gz")).entries);
  const matched = evaluateRows(tcsn, rows, { index: frozenIndex(), liveArtists: LIVE_ARTISTS, config }).counts.matched;

  it("the first clean read learns the floor; small moves pass, with a note — and the floor stays at the peak", () => {
    const first = matchedVerdict({ adapter: tcsn, matched, deep: false, prev: null });
    expect(first).toMatchObject({ status: "ok", track: { matched: { daily: matched } } });
    // One row fewer (an upgrade that overwrote a row, an alias ruling): fine,
    // but the floor does not follow it down (review follow-up, 24 Sep 2026).
    const next = matchedVerdict({ adapter: tcsn, matched: matched - 1, deep: false, prev: first.track });
    expect(next).toMatchObject({ status: "ok", track: { matched: { daily: matched } } });
    expect(next.notes).toEqual([`${matched - 1} rows naming the 16 on the daily read (peak ${matched})`]);
    // A higher count raises it.
    expect(matchedVerdict({ adapter: tcsn, matched: matched + 2, deep: false, prev: next.track }).track.matched).toEqual({ daily: matched + 2 });
  });

  it("under half the floor — none included — is `unmatched`, and it is not read cleanly", () => {
    const prev = { matched: { daily: matched } };
    for (const n of [0, Math.ceil(matched / 2) - 1]) {
      const v = matchedVerdict({ adapter: tcsn, matched: n, deep: false, prev });
      expect(v.status, String(n)).toBe("unmatched");
      expect(v.track.matched).toEqual({ daily: matched }); // the floor holds
    }
    expect(matchedVerdict({ adapter: tcsn, matched: Math.ceil(matched / 2), deep: false, prev }).status).toBe("ok");
    expect(isClean("unmatched")).toBe(false);
    expect(statusLabel({ status: "unmatched", detail: "rows naming the 16 dropped from 291 to 0 on the daily read" }, null)).toBe(
      "⚠️ matched rows dropped — rows naming the 16 dropped from 291 to 0 on the daily read"
    );
  });

  it(`${FLOOR_RUNS} identical lower reads lower the floor, notified once as a first occurrence and once when lowered`, () => {
    let prev: Record<string, unknown> | undefined = { status: "ok", matched: { daily: matched } };
    const reasons: string[] = [];
    for (let i = 1; i <= FLOOR_RUNS; i++) {
      const v = matchedVerdict({ adapter: tcsn, matched: 12, deep: false, prev });
      const merged = mergeRun({
        prev: { v: 1, open: {}, dismissed: {}, watch: {}, health: { tcsn: prev }, cursors: {} },
        prevStatus: "ok",
        today: [],
        date: new Date(`2026-09-2${4 + i}T06:17:00Z`),
        runId: String(i),
        ticks: new Set(),
        index: frozenIndex(),
        ladders: { tcsn: "standard" },
        health: { tcsn: { status: v.status, detail: v.detail, track: v.track, events: v.events } },
        automated: new Set(["tcsn"]),
        watchReadings: {},
        cursors: {},
      });
      reasons.push(...merged.notifyReasons);
      prev = merged.next.health.tcsn as Record<string, unknown>;
      expect(v.status).toBe(i < FLOOR_RUNS ? "unmatched" : "ok");
    }
    expect((prev as { matched: unknown }).matched).toEqual({ daily: 12 });
    expect(reasons).toEqual([
      `tcsn: matched rows dropped — rows naming the 16 dropped from ${matched} to 12 on the daily read — the parser may be misreading credits or titles — first time`,
      `tcsn: matched rows (daily read) fell from ${matched} to 12 and stayed there for ${FLOOR_RUNS} runs — floor lowered`,
    ]);
  });

  it("daily and deep reads keep separate floors; a read kind an adapter does not declare is never judged", () => {
    const prev = { matched: { daily: matched, deep: matched + 5 } };
    expect(matchedVerdict({ adapter: tcsn, matched: matched + 5, deep: true, prev }).track.matched).toEqual({ daily: matched, deep: matched + 5 });
    // RIAA's daily read is a newest-first window: not judged, whatever it names.
    const riaaStd = REGISTRY.find((r) => r.id === "riaa")!;
    expect(riaaStd.matchedFloor).toEqual({ deep: true });
    expect(matchedVerdict({ adapter: riaaStd, matched: 0, deep: false, prev: { matched: { daily: 40 } } }).status).toBe("ok");
    expect(matchedVerdict({ adapter: riaaStd, matched: 0, deep: true, prev: { matched: { deep: 41 } } }).status).toBe("unmatched");
  });

  it("a year-bound read starts again when its year changes (BVMI's 2026 → 2027 walk) — and a new year's 0 is no floor", () => {
    const v = matchedVerdict({ adapter: bvmi, matched: 0, deep: false, prev: { matched: { daily: 2 }, matchedYear: 2026 }, year: 2027 });
    expect(v.status).toBe("ok");
    expect(v.track).toMatchObject({ matched: {}, matchedYear: 2027 });
    expect(v.events.map((e) => e.text)).toEqual(["matched rows: floor reset for 2027"]);
    expect(v.notes).toEqual(["no rows naming the 16 on the daily read yet — no matched floor learned"]);
    // The first read of 2027 that names any of them sets the floor.
    const next = matchedVerdict({ adapter: bvmi, matched: 1, deep: false, prev: v.track, year: 2027 });
    expect(next.track).toMatchObject({ matched: { daily: 1 }, matchedYear: 2027 });
  });

  it("every automated register is guarded by a live check on at least one read — or says why not", () => {
    // A live control, a matched floor, or a rolling control. A fixed control
    // only a `window` could reach does not count: a newest-first window only
    // moves forward, so a row it has passed is never read again (Music
    // Canada's and IFPI Danmark's, before their rolling controls). The ones
    // with none are the three chart-bound registers, where a title carries
    // its award only while it charts — every one of the sixteen leaving the
    // chart is the chart, not a fault — so they rest on the field check and
    // their tests.
    const unguarded = AUTOMATED.filter((r) => !r.matchedFloor && !r.rollingControl && !(r.control && r.control.when !== "tests")).map((r) => r.id);
    expect(unguarded.sort()).toEqual(["cns-ifpi-cz", "cns-ifpi-sk", "ifpi-greece"]);
  });
});

describe("matched rows — the floor can neither reach 0 nor follow a slide down (review follow-up, 24 Sep 2026)", () => {
  // TCSN's real 24 Sep list, as above.
  const rows = tcsnRows(parseNextData(fixture("tcsn/run-2026-09-24/certification.html.gz")).entries);
  const matched = evaluateRows(tcsn, rows, { index: frozenIndex(), liveArtists: LIVE_ARTISTS, config }).counts.matched;
  const day = (prev: Record<string, unknown> | null, n: number, i: number) => {
    const v = matchedVerdict({ adapter: tcsn, matched: n, deep: false, prev });
    const merged = mergeRun({
      prev: { v: 1, open: {}, dismissed: {}, watch: {}, health: prev ? { tcsn: prev } : {}, cursors: {} },
      prevStatus: "ok",
      today: [],
      date: new Date(Date.UTC(2026, 8, 25 + i, 6, 17)),
      runId: String(i),
      ticks: new Set(),
      index: frozenIndex(),
      ladders: { tcsn: "standard" },
      health: { tcsn: { status: v.status, detail: v.detail, track: v.track, events: v.events } },
      automated: new Set(["tcsn"]),
      watchReadings: {},
      cursors: {},
    });
    return { v, next: merged.next.health.tcsn as Record<string, unknown>, reasons: merged.notifyReasons };
  };

  it("a first read naming none learns no floor, and a stored 0 is no floor", () => {
    const v = matchedVerdict({ adapter: tcsn, matched: 0, deep: false, prev: null });
    expect(v.status).toBe("ok");
    expect(v.track.matched).toEqual({});
    // An older state that holds a 0 (as a lowered floor could before): ignored.
    const old = matchedVerdict({ adapter: tcsn, matched: 0, deep: false, prev: { matched: { daily: 0 } } });
    expect(old.track.matched).toEqual({});
    expect(matchedVerdict({ adapter: tcsn, matched: 3, deep: false, prev: { matched: { daily: 0 } } }).track.matched).toEqual({ daily: 3 });
  });

  it(`${FLOOR_RUNS} and more runs naming none never lower the floor to 0: the register stays \`unmatched\` until a human looks`, () => {
    let prev: Record<string, unknown> | null = { status: "ok", matched: { daily: matched } };
    const statuses: string[] = [];
    const reasons: string[] = [];
    let last = null as null | { detail: string | null };
    for (let i = 1; i <= FLOOR_RUNS + 2; i++) {
      const d = day(prev, 0, i);
      statuses.push(d.v.status);
      reasons.push(...d.reasons);
      last = d.v;
      prev = d.next;
    }
    expect(statuses).toEqual(Array(FLOOR_RUNS + 2).fill("unmatched"));
    expect((prev as { matched: unknown }).matched).toEqual({ daily: matched });
    expect(last!.detail).toBe(`rows naming the 16 dropped from ${matched} to 0 on the daily read and stayed there for ${FLOOR_RUNS + 2} runs — 0 is never accepted as the floor; check the parser`);
    // Notified on the first occurrence (and the 3-run streak) — never "floor lowered".
    expect(reasons.some((r) => /floor lowered/.test(r))).toBe(false);
    expect(reasons[0]).toMatch(/^tcsn: matched rows dropped — rows naming the 16 dropped from \d+ to 0 on the daily read/);
  });

  it("a slide of small steps is measured from the peak, so it trips before it can reach 0", () => {
    // LABELLED EDIT of the count: TCSN's real matched rows falling by a
    // fifth a day — each day above half of the day before, the slide the
    // old last-count floor followed all the way down to 0 without a word.
    const counts: number[] = [];
    for (let n = matched; n > 0; n = Math.floor(n * 0.8)) counts.push(n);
    counts.push(0);
    expect(counts.every((n, i) => i === 0 || n >= Math.ceil(counts[i - 1] / 2) || n === 0)).toBe(true);
    let prev: Record<string, unknown> | null = null;
    const statuses: string[] = [];
    counts.forEach((n, i) => {
      const d = day(prev, n, i);
      statuses.push(d.v.status);
      prev = d.next;
    });
    const firstUnder = counts.findIndex((n) => n < Math.ceil(matched / 2));
    expect(firstUnder).toBeGreaterThan(1);
    expect(statuses.slice(0, firstUnder)).toEqual(Array(firstUnder).fill("ok"));
    expect(statuses.slice(firstUnder)).toEqual(Array(counts.length - firstUnder).fill("unmatched"));
    expect((prev as unknown as { matched: unknown }).matched).toEqual({ daily: matched });
  });
});

describe("chart weeks", () => {
  it("reads a chart week as the Monday of that ISO week (ČNS IFPI week 38/2026)", () => {
    expect(isoWeekMonday(2026, 38)).toBe("2026-09-14");
    expect(isoWeekMonday(2027, 1)).toBe("2027-01-04");
  });
});
