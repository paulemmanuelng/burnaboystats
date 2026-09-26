import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { execFileSync, spawnSync } from "node:child_process";
import { mkdtempSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

// scripts/vercel-ignore-build.sh decides whether a production push deploys at
// all. Skipping one that changed the site would ship nothing and say nothing,
// so this runs the real script against a real repository for each case.
const SCRIPT = join(process.cwd(), "scripts/vercel-ignore-build.sh");

describe("the docs-only deploy skip", () => {
  let repo = "";
  const git = (...args: string[]) => execFileSync("git", args, { cwd: repo }).toString().trim();
  const commit = (path: string, body: string) => {
    mkdirSync(join(repo, path, ".."), { recursive: true });
    writeFileSync(join(repo, path), body);
    git("add", "-A");
    git("-c", "user.name=t", "-c", "user.email=t@t", "commit", "-q", "-m", path);
    return git("rev-parse", "HEAD");
  };
  const run = (env: Record<string, string>) =>
    spawnSync("bash", [SCRIPT], { cwd: repo, env: { PATH: process.env.PATH ?? "", ...env } }).status;

  let base = "", docsOnly = "", appChange = "", radarOnly = "", scriptChange = "";
  beforeAll(() => {
    repo = mkdtempSync(join(tmpdir(), "ignore-build-"));
    git("init", "-q");
    base = commit("app/page.tsx", "one");
    docsOnly = commit("docs/notes.md", "a note");
    commit("tests/x.test.ts", "t");
    commit("README.md", "readme");
    const docsTip = git("rev-parse", "HEAD");
    appChange = commit("app/page.tsx", "two");
    docsOnly = docsTip;
    // PR #341's shape: the radar's code and its README, plus its test.
    commit("scripts/plaque-radar/index.mjs", "radar");
    commit("scripts/plaque-radar/README.md", "radar readme");
    radarOnly = commit("tests/plaqueRadar.test.ts", "radar test");
    scriptChange = commit("scripts/build-search-index.mjs", "a build-time script");
  });
  afterAll(() => rmSync(repo, { recursive: true, force: true }));

  it("skips a production push that changed only docs, tests or root markdown", () => {
    expect(run({ VERCEL_ENV: "production", VERCEL_GIT_PREVIOUS_SHA: base, VERCEL_GIT_COMMIT_SHA: docsOnly })).toBe(0);
  });

  it("builds a production push that changed anything the site is built from", () => {
    expect(run({ VERCEL_ENV: "production", VERCEL_GIT_PREVIOUS_SHA: base, VERCEL_GIT_COMMIT_SHA: appChange })).toBe(1);
  });

  it("skips a push that changed only the plaque radar (PR #341 deployed cold)", () => {
    expect(run({ VERCEL_ENV: "production", VERCEL_GIT_PREVIOUS_SHA: appChange, VERCEL_GIT_COMMIT_SHA: radarOnly })).toBe(0);
  });

  it("still builds for any other script, which the build may run", () => {
    expect(run({ VERCEL_ENV: "production", VERCEL_GIT_PREVIOUS_SHA: radarOnly, VERCEL_GIT_COMMIT_SHA: scriptChange })).toBe(1);
  });

  it("negative control: the shipped pathspec built the radar-only push", () => {
    // The exclusions as they stood at #341, run against the same commits.
    const shipped = spawnSync(
      "git",
      ["diff", "--quiet", appChange, radarOnly, "--", ".", ":(exclude)docs", ":(exclude)tests", ":(exclude).github", ":(exclude,glob)*.md"],
      { cwd: repo },
    ).status;
    expect(shipped).toBe(1);
  });

  it("always builds previews, and builds whenever it cannot tell", () => {
    expect(run({ VERCEL_ENV: "preview", VERCEL_GIT_PREVIOUS_SHA: base, VERCEL_GIT_COMMIT_SHA: docsOnly })).toBe(1);
    expect(run({ VERCEL_ENV: "production", VERCEL_GIT_COMMIT_SHA: docsOnly })).toBe(1);
    expect(run({ VERCEL_ENV: "production", VERCEL_GIT_PREVIOUS_SHA: "0".repeat(40), VERCEL_GIT_COMMIT_SHA: docsOnly })).toBe(1);
  });

  it("is what vercel.json runs", () => {
    const cfg = JSON.parse(readFileSync(join(process.cwd(), "vercel.json"), "utf8"));
    expect(cfg.ignoreCommand).toBe("bash scripts/vercel-ignore-build.sh");
  });

  // The skip is only safe while nothing the site is built from reads the
  // excluded paths. If app code starts importing or reading from docs/,
  // tests/, .github/ or scripts/plaque-radar/, a push there changes the site —
  // narrow the exclusions.
  it("excludes nothing the site reads", () => {
    const walk = (dir: string): string[] =>
      readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
        d.isDirectory() ? walk(join(dir, d.name)) : /\.(ts|tsx|mjs|js|css)$/.test(d.name) ? [join(dir, d.name)] : [],
      );
    const reads = /(?:from|import\(|require\(|readFile\w*\(|join\()[^;\n]*['"`](?:[^'"`\n]*?\/)?(?:docs|tests|\.github|scripts\/plaque-radar)\//;
    const hits = [...walk(join(process.cwd(), "app")), join(process.cwd(), "next.config.mjs")].filter((f) => {
      const code = readFileSync(f, "utf8").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
      return reads.test(code);
    });
    expect(hits).toEqual([]);
  });
});
