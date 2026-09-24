// @vitest-environment node
import { describe, it, expect, vi } from "vitest";
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { ROOT, configBeforeRulings } from "./certWatchHelpers";

// These tests read hundreds of saved register pages (many gzipped) from
// tests/fixtures/cert-watch. On GitHub's two-core runners several take longer
// than vitest's 5 s default, so this file gets a longer per-test limit.
vi.setConfig({ testTimeout: 60_000 });

/**
 * The runner's exit-code contract, through the shipped script (SPEC §7):
 * a config it cannot trust means REFUSING TO CONTINUE and exit 1 — the job
 * goes red and GitHub's failed-workflow email fires. An unreachable register
 * is a per-register status and exit 0. --site-json keeps this Node-20 safe.
 */
const SITE = "tests/fixtures/cert-watch/site-index.2026-09-24.json";
function run(args: string[]) {
  const dir = mkdtempSync(join(tmpdir(), "cert-watch-pipe-"));
  const ghOut = join(dir, "github-output");
  writeFileSync(ghOut, "");
  const env: Record<string, string | undefined> = { ...process.env, GITHUB_OUTPUT: ghOut };
  delete env.GITHUB_RUN_ID;
  const res = spawnSync(process.execPath, ["--no-warnings", "scripts/cert-watch/index.mjs", ...args, "--out", join(dir, "out")], {
    cwd: ROOT,
    encoding: "utf8",
    env,
  });
  return { status: res.status, out: `${res.stdout}${res.stderr}`, dir, ghOut: readFileSync(ghOut, "utf8") };
}

describe("the cert watcher refuses to run on what it cannot trust", () => {
  it("exits 1 on a config with a trailing comma", () => {
    const dir = mkdtempSync(join(tmpdir(), "cert-watch-cfg-"));
    const cfg = readFileSync(join(ROOT, "scripts/cert-watch/config.json"), "utf8").replace('"weeklyTodo": true,', '"weeklyTodo": true,,');
    writeFileSync(join(dir, "config.json"), cfg);
    const r = run(["--offline", "--dry-run", "--site-json", SITE, "--config", join(dir, "config.json")]);
    expect(r.status).toBe(1);
    expect(r.out).toContain("REFUSING TO CONTINUE");
    expect(r.out).toContain("config.json");
  });

  it("exits 1 on a ruling with no reason", () => {
    const dir = mkdtempSync(join(tmpdir(), "cert-watch-cfg-"));
    const cfg = JSON.parse(readFileSync(join(ROOT, "scripts/cert-watch/config.json"), "utf8"));
    delete cfg.knownDivergences[0].why;
    writeFileSync(join(dir, "config.json"), JSON.stringify(cfg));
    const r = run(["--offline", "--dry-run", "--site-json", SITE, "--config", join(dir, "config.json")]);
    expect(r.status).toBe(1);
    expect(r.out).toMatch(/REFUSING TO CONTINUE: .*knownDivergences\[0\]: missing "why"/);
  });

  it("exits 1 on an unknown --only id", () => {
    const r = run(["--offline", "--dry-run", "--site-json", SITE, "--only=riaa,not-a-register"]);
    expect(r.status).toBe(1);
    expect(r.out).toMatch(/REFUSING TO CONTINUE: --only: unknown adapter id\(s\) not-a-register/);
  });
});

describe("a full offline dry run", () => {
  const r = run(["--offline", "--dry-run", "--site-json", SITE, "--now", "2026-09-24T06:17:00Z"]);

  it("exits 0 and writes the issue body, the report and the results", () => {
    expect(r.status, r.out).toBe(0);
    for (const f of ["issue-body.md", "report.md", "results.json"]) expect(existsSync(join(r.dir, "out", f)), f).toBe(true);
    expect(readFileSync(join(r.dir, "out", "report.md"), "utf8")).not.toContain("cert-watch:state");
  });

  it("never asks to touch an issue on a dry run", () => {
    expect(r.ghOut).toMatch(/^write_issue=false$/m);
    for (const k of ["notify", "open", "new", "not_read", "has_drift"]) expect(r.ghOut).toMatch(new RegExp(`^${k}=`, "m"));
  });
});

describe("an unreachable register", () => {
  it("is reported as not read, with exit 0", () => {
    const r = run(["--offline", "--dry-run", "--site-json", SITE, "--offline-fail=riaa-latin"]);
    expect(r.status, r.out).toBe(0);
    const results = JSON.parse(readFileSync(join(r.dir, "out", "results.json"), "utf8"));
    expect(results.health["riaa-latin"]).toMatchObject({ status: "unreachable" });
    expect(readFileSync(join(r.dir, "out", "issue-body.md"), "utf8")).toMatch(/Not read today: [^\n]*RIAA Latin/);
    // Its watch item says so rather than reporting a reading.
    expect(results.watch.find((w: { id: string }) => w.id === "dai-dai-riaa-latin").reading).toBeNull();
  });

  it("renders again from results.json with the latest ticks, without the network", () => {
    // The saved responses hold no lead since Paul's rulings of 24 Sep 2026:
    // the config as it stood before them (LABELLED EDIT) gives two to tick.
    const cfgDir = mkdtempSync(join(tmpdir(), "cert-watch-pipe-cfg-"));
    const first = run(["--offline", "--dry-run", "--site-json", SITE, "--now", "2026-09-24T06:17:00Z", "--config", configBeforeRulings(cfgDir)]);
    const results = JSON.parse(readFileSync(join(first.dir, "out", "results.json"), "utf8"));
    const fp = results.candidates[0].fp;
    const latest = join(first.dir, "latest-body.md");
    writeFileSync(latest, `- [x] 🆕 **Rema — "Soweto"** <!-- fp:${fp} -->\n`);
    const again = run(["--render-only", "--results", join(first.dir, "out", "results.json"), "--prev-body", latest]);
    expect(again.status, again.out).toBe(0);
    const body = readFileSync(join(again.dir, "out", "issue-body.md"), "utf8");
    expect(body).not.toContain(`fp:${fp}`);
    expect(body).toMatch(/1 dismissed/);
  });
});

describe("BPI through the runner", () => {
  it("even enabled with a permission record, robots.txt holds it: zero requests to its host", () => {
    const dir = mkdtempSync(join(tmpdir(), "cert-watch-bpi-"));
    const cfg = JSON.parse(readFileSync(join(ROOT, "scripts/cert-watch/config.json"), "utf8"));
    // LABELLED EDIT of config: BPI switched on with a (test) permission record.
    cfg.adapters.bpi = { enabled: true, why: "test", permission: { from: "test", on: "2026-09-24", scope: "test" } };
    writeFileSync(join(dir, "config.json"), JSON.stringify(cfg));
    const r = run(["--offline", "--dry-run", "--site-json", SITE, "--config", join(dir, "config.json"), "--only=bpi"]);
    expect(r.status, r.out).toBe(0);
    const results = JSON.parse(readFileSync(join(r.dir, "out", "results.json"), "utf8"));
    expect(results.health.bpi.status).toBe("held-robots");
    expect(results.requests.byHost["certified-awards.bpi.co.uk"]).toBeUndefined();
  });
});
