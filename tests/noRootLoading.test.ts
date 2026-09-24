import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { mkdtempSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { tmpdir } from "node:os";

/**
 * No loading.tsx above a prerendered page.
 *
 * A loading.tsx is not a spinner that only shows when something is slow. Next
 * wraps every route beneath it in a Suspense boundary, and once a page's HTML
 * passes React's 12,800-byte chunk size, React outlines the finished boundary:
 * the fallback is what the document shows, the real body is parked in
 * <div hidden id="S:0">, and $RC swaps it in no sooner than 300 ms after the
 * shell's first frame. Until 23 Sep 2026 app/loading.tsx sat at the root, so
 * that was every page on the site — production served `<template id="B:0">` on
 * all 14 pages curled that day. Removing it moved LCP on a repeat phone visit
 * (slow 4G, local build) from 576-904 ms to 260-324 ms across 11 pages.
 *
 * The skeleton itself (App States, panel C) stays on /search, the one route
 * whose content really waits on the server. That is only safe while /search
 * stays dynamic and has no child routes, so both are pinned here too.
 */

const ROOT = process.cwd();
const ALLOWED = ["app/search/loading.tsx"];

/** The loading files on origin/main 31c5c2a3, the tree production served on 23 Sep 2026. */
const SHIPPED_UNTIL_2026_09_23: Record<string, string> = {
  "app/loading.tsx": 'import styles from "./loading.module.css";\n',
  "app/records/charts/loading.tsx": 'import styles from "./chartsLoading.module.css";\n',
};

/** Next picks up loading.js/.jsx/.ts/.tsx alike, so the guard does too. */
const LOADING = /^loading\.[jt]sx?$/;

const posix = (p: string) => p.split(sep).join("/");

function walk(dir: string, out: string[] = []): string[] {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

/** Every loading file under `root`/app, repo-relative. */
const loadingFiles = (root: string) =>
  walk(join(root, "app"))
    .filter((p) => LOADING.test(p.split(sep).pop()!))
    .map((p) => posix(relative(root, p)))
    .sort();

/** The pages a loading file at `dir` would wrap. */
const pagesUnder = (dir: string) =>
  walk(join(ROOT, dir))
    .filter((p) => /(^|[\\/])page\.[jt]sx?$/.test(p))
    .map((p) => posix(relative(ROOT, p)))
    .sort();

const WHY =
  "A loading.tsx wraps every route beneath it in a Suspense boundary, and React " +
  "outlines a finished boundary once the HTML passes 12,800 bytes: the page ships " +
  'hidden in <div hidden id="S:0"> and is revealed by $RC at least 300 ms after the ' +
  "shell paints. On a prerendered page there is nothing to wait for, so that is pure " +
  "delay. Keep route skeletons to dynamic leaf routes and add them to ALLOWED here.";

describe("no loading boundary above a prerendered page", () => {
  it("/search is the only route with a loading file", () => {
    expect(loadingFiles(ROOT), WHY).toEqual(ALLOWED);
  });

  it("/search's boundary wraps its own page and nothing else", () => {
    expect(pagesUnder("app/search")).toEqual(["app/search/page.tsx"]);
  });

  it("/search is dynamic, so its skeleton covers a real wait", () => {
    // Reading searchParams is what makes the route render per request. A static
    // /search would put its body behind the skeleton for nothing, as the root did.
    expect(readFileSync(join(ROOT, "app/search/page.tsx"), "utf8")).toMatch(/await\s+searchParams/);
  });
});

describe("negative controls", () => {
  let shipped = "";
  beforeAll(() => {
    shipped = mkdtempSync(join(tmpdir(), "no-root-loading-"));
    for (const [path, body] of Object.entries(SHIPPED_UNTIL_2026_09_23)) {
      mkdirSync(dirname(join(shipped, path)), { recursive: true });
      writeFileSync(join(shipped, path), body);
    }
  });
  afterAll(() => rmSync(shipped, { recursive: true, force: true }));

  it("the guard finds both loading files the site shipped until 23 Sep 2026", () => {
    const found = loadingFiles(shipped);
    expect(found).toEqual(Object.keys(SHIPPED_UNTIL_2026_09_23).sort());
    expect(found).not.toEqual(ALLOWED);
  });

  it("the page check sees what the root boundary wrapped", () => {
    const wrapped = pagesUnder("app");
    expect(wrapped).toContain("app/page.tsx");
    expect(wrapped).toContain("app/records/charts/page.tsx");
    expect(wrapped.length).toBeGreaterThan(1);
  });

  it("the dynamic check fails the static route that shipped the other skeleton", () => {
    expect(readFileSync(join(ROOT, "app/records/charts/page.tsx"), "utf8")).not.toMatch(
      /await\s+searchParams/,
    );
  });
});
