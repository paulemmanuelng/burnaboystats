import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { exploreFor } from "../app/lib/links";
import { sectionLinks, DEFAULT_EXPLORE } from "../app/components/KeepExploring";

/**
 * "Keep exploring" fails silently, in three different ways.
 *
 * The block maps authored keys through `sectionLinks` and then
 * `.filter(Boolean)`s the misses away. So a key naming a section that does not
 * exist does not throw and does not warn — the row just renders with two cards
 * instead of three, or one, or none, and looks deliberate. That is exactly what
 * /analysis/spotify-unmerge shipped with: its list named `by-the-numbers` and
 * `methodology`, neither of which was in `sectionLinks`.
 *
 * A page also picks its list by passing its own path as `current`, and a path
 * that matches nothing falls back to DEFAULT_EXPLORE rather than erroring.
 * /analysis/spotify-unmerge passed "/analysis" — the parent's path — so it drew
 * the parent's list and the list written for it was unreachable. /records had no
 * entry at all, fell through to the default, and its third card pointed readers
 * from /records back to /records.
 *
 * None of the three shows up in a build, a type check, or a screenshot.
 */

const walk = (dir: string, out: string[] = []) => {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e === ".next") continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith(".tsx")) out.push(p);
  }
  return out;
};

/** Every `current` a page actually passes, and the file that passes it. */
const passed = walk("app").flatMap((f) =>
  [...readFileSync(f, "utf8").matchAll(/<KeepExploring\s+current="([^"]+)"/g)].map((m) => ({
    file: f,
    current: m[1],
  }))
);

describe("Keep exploring", () => {
  it("finds a section for every key in every list", () => {
    const dangling = Object.entries(exploreFor).flatMap(([path, keys]) =>
      keys.filter((k) => !sectionLinks[k]).map((k) => `${path} → "${k}"`)
    );
    expect(
      dangling.sort(),
      "these keys are filtered away silently, leaving the block short or empty",
    ).toEqual([]);
  });

  it("finds a section for every key in the fallback list", () => {
    expect(DEFAULT_EXPLORE.filter((k) => !sectionLinks[k])).toEqual([]);
  });

  it("never sends a page to itself", () => {
    const selfLinks = Object.entries(exploreFor).flatMap(([path, keys]) =>
      keys.filter((k) => sectionLinks[k]?.href === path).map((k) => `${path} → "${k}"`)
    );
    expect(selfLinks.sort(), "a card that reloads the page the reader is on").toEqual([]);
  });

  it("never sends a page to itself through the fallback list", () => {
    // A page with no list of its own gets DEFAULT_EXPLORE, so it must not be one
    // of the three the default names. This is the /records bug.
    const selfLinks = passed
      .filter(({ current }) => !exploreFor[current])
      .filter(({ current }) => DEFAULT_EXPLORE.some((k) => sectionLinks[k]?.href === current))
      .map(({ file, current }) => `${file} → ${current}`);
    expect(
      [...new Set(selfLinks)].sort(),
      "these fall through to the default list, which links straight back at them",
    ).toEqual([]);
  });

  it("has a page for every authored list", () => {
    // An `exploreFor` entry nobody passes as `current` is dead authoring — the
    // page it was written for is drawing some other list instead.
    const used = new Set(passed.map((p) => p.current));
    const orphans = Object.keys(exploreFor).filter((path) => !used.has(path));
    expect(
      orphans.sort(),
      "no page passes these as `current`, so these lists never render",
    ).toEqual([]);
  });
});
