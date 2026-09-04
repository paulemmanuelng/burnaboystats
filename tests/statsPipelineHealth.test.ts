import { describe, it, expect } from "vitest";
import { spawnSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

/**
 * The two ways this pipeline was reporting success while doing nothing.
 *
 * Both are the same failure in different clothes: a green tick that a reader
 * takes as "checked, nothing wrong" when the truth is "did not check". A stats
 * monitor's success state IS silence, which makes it the one kind of job where
 * running and not running look identical from the outside — so the only honest
 * design is one that says out loud what it could not do.
 */

const run = (args: string[], cwd: string) => {
  const res = spawnSync(process.execPath, args, {
    cwd,
    encoding: "utf8",
    env: { ...process.env, GITHUB_STEP_SUMMARY: join(cwd, "summary.md") },
  });
  return { status: res.status, out: `${res.stdout ?? ""}${res.stderr ?? ""}` };
};

/* ── 1. A hand-edited config that will not parse ──────────────────────────── */

describe("the stats monitor refuses to run on a config it cannot read", () => {
  /**
   * scripts/watched-metrics.json is edited by hand every time a figure is
   * confirmed, so a trailing comma is an ordinary Monday. check-stats.mjs used
   * to `JSON.parse` it bare, and its own `main().catch()` deliberately exits 0
   * so a monitoring hiccup never reddens CI — right for an unreachable source,
   * catastrophic for a broken config. The result: a bare SyntaxError into a log
   * nobody reads, no drift-report.md, `has_drift` never set, the issue step
   * skipped, and a green weekly tick meaning "nothing drifted".
   */
  const sandbox = (config: string | null) => {
    const dir = mkdtempSync(join(tmpdir(), "stats-monitor-"));
    copyFileSync("scripts/check-stats.mjs", join(dir, "check-stats.mjs"));
    copyFileSync("scripts/stats-lib.mjs", join(dir, "stats-lib.mjs"));
    if (config !== null) writeFileSync(join(dir, "watched-metrics.json"), config);
    return dir;
  };

  it("exits non-zero, naming the file, on a trailing comma", () => {
    // No network is reached: it dies at the parse, which is also why this test
    // stays hermetic if the guard is ever removed.
    const dir = sandbox('{\n  "metrics": [\n    { "id": "a", "kind": "drift", "baseline": 1 },\n  ]\n}\n');
    const r = run([join(dir, "check-stats.mjs")], dir);
    expect(r.status, "a malformed config must fail the run, not pass it").toBe(1);
    expect(r.out).toContain("REFUSING TO CONTINUE");
    expect(r.out).toContain("watched-metrics.json");
  });

  it("exits non-zero when the config is not there at all", () => {
    const dir = sandbox(null);
    const r = run([join(dir, "check-stats.mjs")], dir);
    expect(r.status).toBe(1);
    expect(r.out).toContain("REFUSING TO CONTINUE");
  });
});

/* ── 2. A metric watched in name only ─────────────────────────────────────── */

describe("the stats monitor can actually read every metric it reports on", () => {
  /**
   * `youtube-total-views` names the extractor `kworbYouTubeTotal`, and
   * check-stats.mjs had never registered it — its extractor table had fallen
   * four entries behind the identical table in apply-stat-updates.mjs. The
   * lookup resolved to undefined, `?? NaN` turned that into NaN, and the metric
   * reported "source unavailable" on the weekly run. isActionable() ignores that
   * status, correctly — a site being down for a week is not news — so the metric
   * appeared in the report every Monday and had never once been read.
   *
   * It is a CANARY: kworb's per-video totals froze on 25 Aug 2026 and this watch
   * exists to say when they move again. On 4 Sep 2026 the page returned HTTP 200
   * and the extractor read 3,196,624,195 out of it, 9,057,734 above the baseline
   * — the recovery it was left in place to report, invisible for ten days.
   */
  const extractorNames = (file: string) => {
    const src = readFileSync(file, "utf8");
    const start = src.search(/const (?:html)?[eE]xtractors = \{/);
    if (start === -1) throw new Error(`${file}: no extractor table found`);
    const table = src.slice(start, src.indexOf("\n};", start));
    return new Set([...table.matchAll(/^ {2}(\w+):/gm)].map((m) => m[1]));
  };

  it("registers every extractor the drafting script does", () => {
    // The root cause: one list of extractors kept in two places, with nothing
    // holding them together. The monitor may legitimately lag on nothing.
    const monitor = extractorNames("scripts/check-stats.mjs");
    const drafter = extractorNames("scripts/apply-stat-updates.mjs");
    const missing = [...drafter].filter((name) => !monitor.has(name));
    expect(
      missing,
      "check-stats.mjs cannot read metrics using these; they would report 'source unavailable' forever"
    ).toEqual([]);
  });

  it("every watched metric names an extractor that exists", () => {
    const config = JSON.parse(readFileSync("scripts/watched-metrics.json", "utf8"));
    const monitor = extractorNames("scripts/check-stats.mjs");
    const drafter = extractorNames("scripts/apply-stat-updates.mjs");
    const orphans = config.metrics
      .filter((m: { live?: boolean; extractor: string }) =>
        m.live
          ? !drafter.has(m.extractor) && m.extractor !== "spotifyFollowers"
          : !monitor.has(m.extractor)
      )
      .map((m: { id: string; extractor: string }) => `${m.id} → ${m.extractor}`);
    expect(orphans, "a metric naming an extractor nothing implements is watched in name only").toEqual(
      []
    );
  });

  it("refuses to run rather than report an unreadable metric as a source outage", () => {
    // Behavioural, through the shipped script: the two facts "the source was
    // down" and "I have no way to read this" must not share a badge, and only
    // one of them can ever fix itself.
    const dir = mkdtempSync(join(tmpdir(), "stats-monitor-"));
    copyFileSync("scripts/check-stats.mjs", join(dir, "check-stats.mjs"));
    copyFileSync("scripts/stats-lib.mjs", join(dir, "stats-lib.mjs"));
    writeFileSync(
      join(dir, "watched-metrics.json"),
      JSON.stringify({
        metrics: [
          {
            id: "typo-in-the-extractor",
            label: "x",
            sourceUrl: "https://example.invalid/",
            extractor: "kworbYouTubeTotals",
            kind: "peak",
            baseline: 1,
          },
        ],
      })
    );
    const r = run([join(dir, "check-stats.mjs")], dir);
    expect(r.status, "an unreadable metric must stop the run, not be reported as 'unavailable'").toBe(1);
    expect(r.out).toContain("REFUSING TO CONTINUE");
    expect(r.out).toContain("typo-in-the-extractor");
  });
});

/* ── 3. A daily job that cannot open the PR it exists to open ─────────────── */

const WORKFLOW = ".github/workflows/stats-refresh.yml";

/**
 * Pull the inline node program out of the workflow's annotation step, so this
 * file tests the LOGIC THAT SHIPS rather than a copy of it. The extractor is
 * deliberately strict: if the step is renamed or the heredoc restructured, this
 * throws rather than quietly testing nothing.
 */
function annotationScript(): string {
  const text = readFileSync(WORKFLOW, "utf8");
  const start = text.indexOf("node - <<'JS'");
  if (start === -1) throw new Error(`${WORKFLOW}: the inline annotation script is gone`);
  const body = text.slice(start + "node - <<'JS'".length);
  const end = body.search(/\n\s*JS\s*(\n|$)/);
  if (end === -1) throw new Error(`${WORKFLOW}: the heredoc is unterminated`);
  // Undo the YAML block indentation so the extracted program is real JS.
  return body
    .slice(0, end)
    .split("\n")
    .map((l) => l.replace(/^ {10}/, ""))
    .join("\n");
}

const runAnnotation = (config: string, env: Record<string, string>) => {
  const dir = mkdtempSync(join(tmpdir(), "stats-refresh-"));
  writeFileSync(join(dir, "check.cjs"), annotationScript());
  // The extracted program reads the path the workflow gives it, relative to the
  // repo root the runner checks out — so the sandbox mirrors that shape.
  mkdirSync(join(dir, "scripts"));
  writeFileSync(join(dir, "scripts", "watched-metrics.json"), config);
  const res = spawnSync(process.execPath, [join(dir, "check.cjs")], {
    cwd: dir,
    encoding: "utf8",
    env: { ...process.env, GITHUB_STEP_SUMMARY: join(dir, "summary.md"), ...env },
  });
  return { status: res.status, out: `${res.stdout ?? ""}${res.stderr ?? ""}` };
};

const QUIET = { HAS_CHANGES: "false", HAS_MANUAL: "false", HAS_REJECTED: "false" };

describe("the daily refresh job says when it could not have done anything", () => {
  /**
   * As shipped, its two review-gated metrics both have `siteTargets: []` — and
   * both are RIGHT to: one tracks the current listener figure the site does not
   * publish, the other watches a kworb page that sees 187 of his 344 videos and
   * is pinned watch-only by tests/watchedMetrics.test.ts. `applyTargets` returns
   * `ok:false` with no targets, so `applied` is always empty, `has_changes` is
   * always false, and the PR step is unreachable. It ran green daily for a month
   * having drafted nothing — while detecting a 5.2% drift each morning and
   * discarding the report.
   */
  it("emits a notice when nothing is wired for it to draft", () => {
    const r = runAnnotation(
      JSON.stringify({
        metrics: [
          { id: "monitor-only-a" },
          { id: "monitor-only-b", siteTargets: [] },
          { id: "auto-published", live: true, siteTargets: [{ file: "x" }] },
        ],
      }),
      QUIET
    );
    expect(r.status).toBe(0);
    expect(r.out, "a job that cannot open a PR must not just go green").toContain("::notice::");
    expect(r.out).toContain("0 of 2 review-gated metric(s)");
    expect(r.out).toContain("monitor-only-a, monitor-only-b");
  });

  it("goes quiet on its own the day a review-gated metric is wired up", () => {
    // The annotation is derived from the config, not asserted about it, so it
    // needs no maintenance when the shape it describes changes.
    const r = runAnnotation(
      JSON.stringify({ metrics: [{ id: "draftable", siteTargets: [{ file: "x" }] }] }),
      QUIET
    );
    expect(r.status).toBe(0);
    expect(r.out).not.toContain("::notice::");
  });

  it("warns about drift it detected but could not draft", () => {
    // This is the part that was being computed and thrown away: the script sets
    // `has_manual`, and the workflow read neither it nor `has_rejected`.
    const r = runAnnotation(JSON.stringify({ metrics: [{ id: "a", siteTargets: [{ file: "x" }] }] }), {
      ...QUIET,
      HAS_MANUAL: "true",
    });
    expect(r.out).toContain("::warning::");
    expect(r.out).toContain("could NOT be auto-drafted");
  });

  it("fails the step when the config it reports on will not parse", () => {
    const r = runAnnotation('{ "metrics": [ { "id": "a" }, ] }', QUIET);
    expect(r.status).toBe(1);
    expect(r.out).toContain("::error::");
  });
});

describe("the refresh PR mechanism is still armed", () => {
  it("was surfaced, not deleted — the PR step still fires on has_changes", () => {
    // The no-op is honest now; it must not have been made honest by removing the
    // safety mechanism. The step becomes reachable the day a review-gated metric
    // gets a site target, and nothing here should have changed that.
    const text = readFileSync(WORKFLOW, "utf8");
    expect(text).toContain("steps.refresh.outputs.has_changes == 'true'");
    expect(text).toContain("gh pr create --base main");
    expect(text, "the report must reach the run summary on every run").toContain(
      'cat refresh-pr-body.md >> "$GITHUB_STEP_SUMMARY"'
    );
  });
});
