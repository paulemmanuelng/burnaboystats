// @vitest-environment node
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT } from "./certWatchHelpers";

/**
 * .github/workflows/cert-watch.yml, read as text: the permissions it holds,
 * the bugs it must not repeat from stats-monitor.yml, and the writes it must
 * never make.
 */
const yml = readFileSync(join(ROOT, ".github/workflows/cert-watch.yml"), "utf8");
/** The file without its comments: what runs, not what explains it. */
const code = yml
  .split("\n")
  .filter((l) => !/^\s*#/.test(l))
  .map((l) => l.replace(/\s+#\s.*$/, ""))
  .join("\n");
const runBlocks = () => {
  const blocks: string[] = [];
  const lines = yml.split("\n");
  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].match(/^(\s*)run: \|\s*$/);
    const single = lines[i].match(/^\s*run: (?!\|)(.+)$/);
    if (single) blocks.push(single[1]);
    if (!m) continue;
    const indent = m[1].length;
    const body: string[] = [];
    for (i++; i < lines.length && (lines[i].trim() === "" || lines[i].search(/\S/) > indent); i++) body.push(lines[i]);
    i--;
    blocks.push(body.join("\n"));
  }
  return blocks;
};

describe("cert-watch.yml", () => {
  it("holds exactly contents: read and issues: write", () => {
    const perms = yml.match(/^permissions:\n((?: {2}.+\n)+)/m)?.[1];
    expect(perms?.trim().split("\n").map((l) => l.trim())).toEqual(["contents: read", "issues: write"]);
  });

  it("pins Node 24 (built-in TypeScript loading, no npm ci, no tsx)", () => {
    expect(yml).toMatch(/node-version: 24\b/);
    expect(code).not.toMatch(/npm ci|npx tsx/);
  });

  it("passes --limit to every gh issue list (the default sees only 30 issues)", () => {
    const lists = code.match(/gh issue list[^\n]*/g) ?? [];
    expect(lists.length).toBeGreaterThan(0);
    for (const l of lists) expect(l).toMatch(/--limit \d+/);
  });

  it("sets a concurrency group and a timeout", () => {
    expect(yml).toMatch(/^concurrency:\n {2}group: cert-watch-/m);
    expect(yml).toMatch(/timeout-minutes: \d+/);
  });

  it("never commits or pushes", () => {
    expect(code).not.toMatch(/git (commit|push|add)/);
    expect(yml).toMatch(/persist-credentials: false/);
  });

  it("never puts ${{ inputs. }} inside a run: block — inputs reach the shell through env", () => {
    const blocks = runBlocks();
    expect(blocks.length).toBeGreaterThan(4);
    for (const b of blocks) expect(b).not.toMatch(/\$\{\{\s*inputs\./);
    // The negative control: the parser does see a run block's contents.
    expect(blocks.some((b) => b.includes("--self-test"))).toBe(true);
  });

  it("uses the exact tracker title", () => {
    expect(yml).toContain('ISSUE_TITLE: "🏅 New certifications found — verify & add"');
    const config = JSON.parse(readFileSync(join(ROOT, "scripts/cert-watch/config.json"), "utf8"));
    expect(config.issueTitle).toBe("🏅 New certifications found — verify & add");
  });
});
