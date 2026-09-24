// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { renderBody, renderBodyWithin, code, plain, counts, notReadSentence, BODY_LIMIT } from "../scripts/cert-watch/report.mjs";
import { REGISTRY, AUTOMATED } from "../scripts/cert-watch/adapters/index.mjs";
import { extractState, encodeState, stateBlock } from "../scripts/cert-watch/state.mjs";
import { evaluateRows } from "../scripts/cert-watch/match.mjs";
import { tcsn, toRows as tcsnRows } from "../scripts/cert-watch/adapters/tcsn.mjs";
import { ROOT, fixture, frozenIndex, releaseOf, LIVE_ARTISTS, config, configBeforeRulings } from "./certWatchHelpers";

// These tests read hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners several take longer
// than vitest's 5 s default, so this file gets a longer per-test limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * The issue body. The golden render is a full offline run over the saved
 * register responses and the frozen site index — the same command a person
 * runs — so the test covers the runner end to end, not a hand-built result.
 */
const cleanEnv = () => {
  const env: Record<string, string | undefined> = { ...process.env };
  for (const k of Object.keys(env)) if (k.startsWith("GITHUB_")) delete env[k];
  return env;
};

function offlineRun(extra: string[] = []) {
  const out = mkdtempSync(join(tmpdir(), "cert-watch-report-"));
  const res = spawnSync(
    process.execPath,
    [
      "--no-warnings",
      "scripts/cert-watch/index.mjs",
      "--offline",
      "--dry-run",
      "--site-json",
      "tests/fixtures/cert-watch/site-index.2026-09-24.json",
      "--now",
      "2026-09-24T06:17:00Z",
      "--out",
      out,
      ...extra,
    ],
    { cwd: ROOT, encoding: "utf8", env: cleanEnv() }
  );
  const read = (f: string) => readFileSync(join(out, f), "utf8");
  return { status: res.status, stderr: res.stderr, out, read, results: () => JSON.parse(read("results.json")) };
}
const normalise = (body: string) => body.replace(/(Run [^·]+ UTC · )\d+(?: m \d+)? s( ·)/, "$1<duration>$2");

describe("the golden render", () => {
  // The frozen index predates PR #320 (Dai Dai US RIAA Latin ×2, not ×6), so
  // in the golden the register (level 2) already meets the site and the
  // RIAA Latin watch item renders as landed. certWatchWatchlist.test.ts
  // proves the live site's line: pending, "the site is ahead of the register".
  const run = offlineRun();

  it("matches tests/fixtures/cert-watch/expected-issue-body.md", () => {
    expect(run.status, run.stderr).toBe(0);
    expect(normalise(run.read("issue-body.md"))).toBe(fixture("expected-issue-body.md"));
  });

  it("renders the acceptance lines (SPEC §10 step 1)", () => {
    const body = run.read("issue-body.md");
    const latin = body.split("\n").find((l) => l.includes("RIAA Latin**"))!;
    expect(latin).toContain("`2X PLATINO`");
    expect(latin).toContain("`badge LA level 2`");
    expect(latin).toContain("`default_451299`");
    expect(latin).toContain("site: Platinum ×2 (RIAA Latin)");
    const bpi = body.split("\n").find((l) => l.includes("🇬🇧 BPI**"))!;
    expect(bpi).toContain("⏸️ held — robots.txt");
    expect(body).toMatch(/Suppressed: 3 known divergences \(One Dance `badge DI level 11`, Wait For U `badge DI level 11`, LOVE NWANTITI \(REMIX\) `1 × Discos de Platino`\)/);
    expect(body).not.toMatch(/Burna Boy — "Dai Dai"\*\* · 🇨🇦/);
  });

  it("has exactly one health row per registry entry, derived from the registry", () => {
    const body = run.read("issue-body.md");
    const table = body.slice(body.indexOf("### Register health"), body.indexOf("### Manual checks"));
    const rows = table.split("\n").filter((l) => l.startsWith("| ") && !l.startsWith("| Register"));
    expect(rows).toHaveLength(REGISTRY.length);
    expect(REGISTRY).toHaveLength(28);
  });

  it("gives every MANUAL register a human check", () => {
    const r = run.results();
    for (const reg of r.registry.filter((x: { class: string }) => x.class === "MANUAL")) {
      expect(reg.manualCheckText ?? reg.humanCheck, reg.id).toBeTruthy();
    }
    // One weekly check per MANUAL register, derived from the registry.
    const want = REGISTRY.filter((x) => x.class === "MANUAL").map((x) => (x as { manualCheck?: string }).manualCheck);
    expect(want.every(Boolean)).toBe(true);
    expect(r.manual.checks.map((m: { id: string }) => m.id).sort()).toEqual([...want].sort());
  });

  it("derives the watchlist's site holding from the site index, never types it", () => {
    const r = run.results();
    const w = r.watch.find((x: { id: string }) => x.id === "dai-dai-riaa-latin");
    expect(w.siteHolding).toBe("Platinum ×2 (RIAA Latin)");
    // Same results, the site holding edited (LABELLED): the line follows it.
    const edited = { ...r, watch: r.watch.map((x: { id: string }) => (x.id === "dai-dai-riaa-latin" ? { ...x, siteHolding: "Platinum ×3 (RIAA Latin)" } : x)) };
    const view = { shown: r.candidates, hidden: 0, manualTicks: new Set(), state: r.state };
    expect(renderBody(edited, view)).toContain("site: Platinum ×3 (RIAA Latin)");
  });

  it("carries a state block the next run can read", () => {
    const st = extractState(run.read("issue-body.md"));
    expect(st.status).toBe("ok");
    // No lead: the two the saved responses carried were ruled by Paul on
    // 24 Sep 2026 (SPEC §0.5) —
    //  - TCSN's "Asake | 02:30" (Platinum_4) is the site's "2:30", NG ×4
    //    (a TCSN-scoped title alias): in sync;
    //  - PROMUSICAE's "CKAY / AXEL / DJ YO | LOVE NWANTITI (REMIX)" (cards
    //    15859, 23765) is not added: the site counts the remix as the
    //    original, which holds ES Platinum (a known divergence).
    // Gone since the review (24 Sep 2026): Pro-Música Brasil's "Fame - A
    // COLORS ENCORE" (the dash fold: the site holds its Gold), the three
    // Soweto rows for Rema and TCSN's Happiness for Wizkid (chart aliases,
    // not valid for certifications).
    expect(st.state!.open).toEqual({});
    // Before the rulings (LABELLED EDIT of config), the same run lists both.
    const before = offlineRun(["--config", configBeforeRulings(mkdtempSync(join(tmpdir(), "cert-watch-before-")))]);
    expect(before.status, before.stderr).toBe(0);
    expect(Object.keys(extractState(before.read("issue-body.md")).state!.open).sort()).toEqual(["promusicae|ES||ckay|love nwantiti (remix)|single", "tcsn|NG||asake|02:30|single"]);
  });
});

describe("rendering the review's new kinds (24 Sep 2026)", () => {
  const r = offlineRun().results();
  const view = (shown: unknown[]) => ({ shown, hidden: 0, manualTicks: new Set(), state: r.state });

  it("an AMBIGUOUS lead names each release the title fits and what the site holds on it", () => {
    // TCSN, Wayback capture 20251002222239: {"id":893,"milestone":"Gold","title":"I Told Them","artiste":"Burna Boy ft. GZA","format":""}
    // (tier notation "Gold" → the live list's "Gold_1"), against the frozen
    // site with the single's NG Gold removed (LABELLED EDIT).
    const rows = tcsnRows([{ id: 893, milestone: "Gold_1", title: "I Told Them", artiste: "Burna Boy ft. GZA", format: "", label: "", certifiedDate: "2025-01-05T00:00:00", isClaimed: false }]);
    const idx = frozenIndex((j) => delete releaseOf(j, "burna-boy", "I Told Them").holdings["NG|"]);
    const [c] = evaluateRows(tcsn, rows, { index: idx, liveArtists: LIVE_ARTISTS, config }).candidates;
    const body = renderBody({ ...r, candidates: [c] }, view([{ ...c, status: "new", firstSeen: "2026-09-24" }]));
    expect(body).toContain('- [ ] 🆕 **Burna Boy — "I Told Them"** · 🇳🇬 Nigeria · TurnTable (TCSN) · **AMBIGUOUS** — album or single?');
    expect(body).toContain('  - Site holds now: album "I Told Them...": Platinum · single "I Told Them": nothing in NG');
    expect(body).toMatch(/⚠ the register gives no format, and the site has 2 releases this title fits/);
  });

  it("a register whose matched rows fell is not read cleanly, and the headline names it", () => {
    const detail = "rows naming the 16 dropped from 291 to 0 on the daily read — the parser may be misreading credits or titles";
    const edited = { ...r, health: { ...r.health, tcsn: { ...r.health.tcsn, status: "unmatched", detail } } };
    const n = counts(edited, []);
    expect(n.notRead.map((x: { id: string }) => x.id)).toEqual(["tcsn"]);
    const body = renderBody(edited, view([]));
    expect(body).toMatch(/\*\*Not read today: 🇳🇬 TurnTable \(TCSN\) \(matched rows dropped\)/);
    expect(body).toContain(`| 🇳🇬 TurnTable (TCSN) | WITH-CARE | ⚠️ matched rows dropped — ${detail} |`);
  });
});

describe("an untrusted read posts no leads — its would-be candidates are held back (review follow-up, 24 Sep 2026)", () => {
  // The offline run over the saved responses, with the config as it stood
  // before Paul's rulings of 24 Sep 2026 (LABELLED EDIT), so TCSN's real
  // "Asake | 02:30" Platinum_4 is a lead again — twice: once from no state
  // (every register clean), and once from a LABELLED-EDIT state whose TCSN
  // deep floor of matched rows is 10,000, so today's real 291 are under half
  // of it: TCSN reads `unmatched`.
  const dir = mkdtempSync(join(tmpdir(), "cert-watch-quarantine-"));
  const before = ["--config", configBeforeRulings(dir)];
  const clean = offlineRun(before);
  const prevState = { v: 1, updated: "2026-09-23T06:17:00Z", run: null, reset: false, open: {}, dismissed: {}, watch: {}, health: { tcsn: { status: "ok", since: "2026-09-23", fails: 0, matched: { deep: 10000 } } }, cursors: {}, manualWeek: null, manualTicks: [] };
  writeFileSync(join(dir, "prev-body.md"), `${stateBlock(encodeState(prevState))}\n`);
  const held = offlineRun([...before, "--prev-body", join(dir, "prev-body.md")]);
  const r = held.results();
  const isAsake = (c: { adapter: string; title: string }) => c.adapter === "tcsn" && c.title === "02:30";

  it("the clean run lists TCSN's row as a lead", () => {
    expect(clean.results().candidates.filter(isAsake)).toHaveLength(1);
  });

  it("the unmatched run does not: no candidate, no box to tick, no fingerprint, nothing in state, no notify", () => {
    expect(held.status, held.stderr).toBe(0);
    expect(r.health.tcsn).toMatchObject({ status: "unmatched", quarantined: 1 });
    expect(r.candidates.filter(isAsake)).toEqual([]);
    // Every other register was clean: its leads are untouched.
    expect(r.candidates.map((c: { adapter: string }) => c.adapter)).toEqual(["promusicae"]);
    expect(clean.results().candidates.map((c: { adapter: string }) => c.adapter).sort()).toEqual(["promusicae", "tcsn"]);
    expect(Object.keys(r.state.open).filter((k) => k.startsWith("tcsn|"))).toEqual([]);
    expect(r.notifyReasons.filter((x: string) => /02:30/.test(x))).toEqual([]);
    expect(r.notifyReasons).toContain(
      "tcsn: matched rows dropped — rows naming the 16 dropped from 10,000 to 291 on the deep read — the parser may be misreading credits or titles — first time"
    );
    expect(r.quarantined).toEqual([
      {
        adapter: "tcsn",
        status: "unmatched",
        detail: "rows naming the 16 dropped from 10,000 to 291 on the deep read — the parser may be misreading credits or titles",
        count: 1,
        examples: [{ artistName: "Asake", release: null, title: "02:30", kind: "NEW RELEASE", tierRaw: "Platinum_4", row: expect.stringContaining("02:30") }],
      },
    ]);
  });

  it("the body holds it back under its own heading, as plain text, and says so in the headline", () => {
    const body = held.read("issue-body.md");
    const section = body.slice(body.indexOf("### Held back — rows from reads not trusted today"), body.indexOf("### Watchlist"));
    expect(section).toMatch(/^### Held back — rows from reads not trusted today\n\n_Not leads\./);
    const line = section.split("\n").find((l) => l.startsWith("- 🇳🇬 TurnTable (TCSN)"))!;
    expect(line).toContain("⚠️ matched rows dropped");
    expect(line).toContain('1 row held back: Asake — "02:30" NEW RELEASE `Platinum_4`');
    expect(section).not.toMatch(/- \[ \]|<!-- fp:/);
    const candidates = body.slice(body.indexOf("### Candidates"), body.indexOf("### Held back"));
    expect(candidates).not.toContain("02:30");
    expect(body).toMatch(/· 1 row held back from reads not trusted today\n/);
    // …and none of this renders when every read is clean.
    expect(clean.read("issue-body.md")).not.toContain("Held back");
  });
});

describe("the not-read invariant (SPEC §7)", () => {
  const run = offlineRun(["--offline-fail=riaa-latin"]);
  const r = run.results();

  it("a register not read cleanly counts zero and is named in the headline", () => {
    expect(run.status, run.stderr).toBe(0);
    const n = counts(r, r.candidates);
    // Derived from the registry: every BUILT automated register reads its
    // saved responses cleanly offline, except the one set to fail.
    const built = AUTOMATED.filter((x) => x.built).length;
    expect(n.clean).toBe(built - 1);
    expect(n.notRead.map((x: { id: string }) => x.id)).toContain("riaa-latin");
    const body = run.read("issue-body.md");
    expect(body).toMatch(/\*\*Not read today: [^*]*🇺🇸 RIAA Latin \(network\)/);
    expect(body).toContain(`${built - 1} of ${AUTOMATED.length} automated registers read cleanly`);
  });

  it("'no new certification leads' never renders without the not-read list beside it", () => {
    const quiet = { ...r, candidates: [] };
    const view = { shown: [], hidden: 0, manualTicks: new Set(), state: r.state };
    const body = renderBody(quiet, view);
    const line = body.split("\n").find((l) => l.startsWith("No new certification leads"))!;
    expect(line).toContain("Not read today:");
    expect(line).toContain(notReadSentence(quiet, counts(quiet, []).notRead));
  });
});

describe("untrusted register text", () => {
  it("is inert: mentions, HTML, backticks and comment markers", () => {
    expect(code("@paul <b>x</b>")).toBe("`@paul <b>x</b>`");
    expect(code("a`b")).toBe("``a`b``");
    expect(code("x --> <!-- y")).not.toMatch(/-->|<!--/);
    expect(plain("@riaa_awards <script>")).not.toMatch(/@r|<script>/);
    expect(code("x".repeat(400)).length).toBeLessThanOrEqual(302);
    expect(code("line\nbreak\u0007")).toBe("`line break`");
  });

  it("keeps the body under 60,000 characters with 100 candidates", () => {
    // A real lead to copy: the config before Paul's rulings (LABELLED EDIT).
    const r = offlineRun(["--config", configBeforeRulings(mkdtempSync(join(tmpdir(), "cert-watch-long-")))]).results();
    expect(r.candidates.length).toBeGreaterThan(0);
    const long = "L".repeat(290);
    const many = Array.from({ length: 100 }, (_, i) => ({
      ...r.candidates[0],
      key: `k${i}`,
      fp: i.toString(16).padStart(16, "0"),
      rows: [long, long, long],
      flags: [long],
      status: "new",
    }));
    const view = { shown: many, hidden: 0, manualTicks: new Set(), state: r.state };
    const body = renderBodyWithin({ ...r, candidates: many }, view);
    expect(body.length).toBeLessThan(BODY_LIMIT);
    expect(extractState(body).status).toBe("ok");
  });
});
