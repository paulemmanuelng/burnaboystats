import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import sitemap from "../app/sitemap";
import { NAIJA66_CLOSES, NAIJA66_FIRST_DROP, NAIJA66_PRIZES } from "../app/data/naija66";

/**
 * Naija @ 66's committed configuration is public — the repo is — so it must
 * carry when the keys drop and nothing about where they are or what they say.
 *
 * The five pages exist only as HMACs keyed by NAIJA66_SECRET, which lives in
 * Vercel and nowhere in the repo; the keys are derived from the same secret at
 * request time. This file holds the hunt's config, data and server library to
 * that: no route of the site appears in them as a string, and no key-shaped
 * string does either. Every route is checked, so the check names none of the
 * five and cannot hint at them.
 *
 * There is no exception. From 30 Sep 23:00 to 1 Oct 03:50 the copy named code
 * 1's page by Paul's choice; he then withdrew it ("remove the cue/link of where
 * the code appear"), so every route fails in every hunt file again.
 */

const ROOT = process.cwd();

const walk = (dir: string, out: string[] = []): string[] => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};

/** The hunt's config and data, and the library that reads them. */
const HUNT_FILES = [
  "app/data/naija66.ts",
  ...walk(join(ROOT, "app/lib/naija66")).map((p) => p.slice(ROOT.length + 1)),
];

/** Every page the site has: the static routes on disk, and every URL in the sitemap. */
const ROUTES = [
  ...new Set([
    ...walk(join(ROOT, "app"))
      .filter((f) => /(^|\/)page\.tsx$/.test(f) && !f.includes("["))
      .map((f) => "/" + f.slice(ROOT.length + 1).replace(/^app\//, "").replace(/\/?page\.tsx$/, "")),
    ...sitemap().map((row) => new URL(row.url).pathname),
  ]),
].sort();

const escape = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");


/** Problems in one file's source: a route as a string literal, or a key. */
function leaks(src: string): string[] {
  const out: string[] = [];
  for (const route of ROUTES) {
    if (new RegExp(`(["'\`])${escape(route)}\\1`).test(src)) out.push(`route ${route}`);
  }
  for (const m of src.matchAll(/NG66-[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}(?![A-Z0-9])/g)) {
    if (m[0] !== "NG66-XXXXXX") out.push(`key-shaped ${m[0]}`); // the placeholder is the one allowed
  }
  const committed = new Set(NAIJA66_PRIZES.map((p) => p.pathHash));
  for (const m of src.matchAll(/\b[0-9a-f]{32}\b/g)) if (!committed.has(m[0])) out.push(`hash ${m[0]}`);
  return out;
}

describe("Naija @ 66's committed config", () => {
  it("is exactly the five entries the brief gave, and the close", () => {
    expect(NAIJA66_PRIZES).toEqual([
      { prize: 1, pathHash: "d3126e9c9d4ab28c7ee261382047039a", dropsAt: "2026-10-01T08:00:00Z" },
      { prize: 2, pathHash: "365d3e26da5906153b07914e0df9ec68", dropsAt: "2026-10-01T11:00:00Z" },
      { prize: 3, pathHash: "4d34082f5d93685a1e90fbe7bd245ab3", dropsAt: "2026-10-01T14:00:00Z" },
      { prize: 4, pathHash: "bf9b35187f466adb928734bf33488f03", dropsAt: "2026-10-01T17:00:00Z" },
      { prize: 5, pathHash: "2a7966d52600bba4a37b2d7cce61e9cd", dropsAt: "2026-10-01T20:00:00Z" },
    ]);
    expect(NAIJA66_FIRST_DROP).toBe("2026-10-01T08:00:00Z");
    expect(NAIJA66_CLOSES).toBe("2026-10-02T23:00:00Z");
  });

  it("walks the whole site, so the guard below is not vacuous", () => {
    expect(ROUTES.length).toBeGreaterThan(300);
    expect(ROUTES).toContain("/");
    expect(ROUTES).toContain("/naija66");
    expect(HUNT_FILES).toContain("app/lib/naija66/crypto.ts");
  });

  it("holds no page path, no key and no stray hash in the hunt's config, data or library", () => {
    const found = HUNT_FILES.flatMap((f) => leaks(readFileSync(join(ROOT, f), "utf8")).map((l) => `${f}: ${l}`));
    expect(found).toEqual([]);
  });

  it("negative control: the same guard catches a planted path, a planted key and a planted hash", () => {
    const src = readFileSync(join(ROOT, "app/data/naija66.ts"), "utf8");
    const sample = ROUTES.find((r) => r.length > 1)!;
    const planted = src.replace(NAIJA66_PRIZES[0].pathHash, sample);
    expect(leaks(planted)).toContain(`route ${sample}`);
    expect(leaks(`${src}\nconst k = "NG66-ABC234";`)).toContain("key-shaped NG66-ABC234");
    expect(leaks(`${src}\nconst h = "0123456789abcdef0123456789abcdef";`)).toContain(
      "hash 0123456789abcdef0123456789abcdef",
    );
  });

});
