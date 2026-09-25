import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * public/sw.js caches nothing and has no fetch handler.
 *
 * It carried an empty one, `self.addEventListener("fetch", () => {});`, on the
 * belief that Chrome needs a fetch handler before it offers "Add to Home
 * Screen". Current Chrome does not (the debug of 24 Sep 2026 found no
 * installability errors with the handler, without it, or with no worker at
 * all), and the empty handler made Chrome log, on every page the worker
 * controlled, that a no-op fetch handler may add overhead to navigation.
 *
 * What the worker still does: take over at once, and clear any cache an
 * earlier version of it left.
 */

const sw = readFileSync(join(process.cwd(), "public", "sw.js"), "utf8");
/** The worker's code with its comments removed, so the prose explaining the
 *  old handler cannot satisfy or fail a check. */
const code = sw
  .split("\n")
  .filter((l) => !/^\s*\/\//.test(l))
  .join("\n");

const FETCH_LISTENER = /addEventListener\(\s*["']fetch["']|\bonfetch\s*=/;

describe("the service worker", () => {
  it("registers no fetch handler", () => {
    // The line that shipped until 24 Sep 2026 is what this must catch.
    expect(FETCH_LISTENER.test('self.addEventListener("fetch", () => {});')).toBe(true);
    expect(FETCH_LISTENER.test(code)).toBe(false);
  });

  it("still takes over at once and clears old caches on activation", () => {
    expect(code).toMatch(/addEventListener\("install",\s*\(\)\s*=>\s*self\.skipWaiting\(\)\)/);
    expect(code).toMatch(/addEventListener\("activate"/);
    expect(code).toMatch(/caches\.delete\(k\)/);
    expect(code).toMatch(/self\.clients\.claim\(\)/);
  });

  it("caches nothing", () => {
    expect(code).not.toMatch(/caches\.open|cache\.put|cache\.add/);
  });
});
