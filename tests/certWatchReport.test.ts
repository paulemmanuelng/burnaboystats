// @vitest-environment node
import { describe, it, expect } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { renderBody, renderBodyWithin, code, plain, counts, notReadSentence, BODY_LIMIT } from "../scripts/cert-watch/report.mjs";
import { REGISTRY } from "../scripts/cert-watch/adapters/index.mjs";
import { extractState } from "../scripts/cert-watch/state.mjs";
import { ROOT, fixture } from "./certWatchHelpers";

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
    expect(body).toMatch(/Suppressed: 2 known divergences \(One Dance `badge DI level 11`/);
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
    expect(r.manual.checks.map((m: { id: string }) => m.id).sort()).toEqual(["au", "be", "pt", "uk", "za"]);
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
    expect(Object.keys(st.state!.open)).toEqual(["riaa|US||rema|soweto|single"]);
  });
});

describe("the not-read invariant (SPEC §7)", () => {
  const run = offlineRun(["--offline-fail=riaa-latin"]);
  const r = run.results();

  it("a register not read cleanly counts zero and is named in the headline", () => {
    expect(run.status, run.stderr).toBe(0);
    const n = counts(r, r.candidates);
    expect(n.clean).toBe(2);
    expect(n.notRead.map((x: { id: string }) => x.id)).toContain("riaa-latin");
    const body = run.read("issue-body.md");
    expect(body).toMatch(/\*\*Not read today: [^*]*🇺🇸 RIAA Latin \(network\)/);
    expect(body).toMatch(/2 of 23 automated registers read cleanly/);
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
    const r = offlineRun().results();
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
