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
 * ONE EXCEPTION, made by Paul (30 Sep 2026, 23:00): he names code 1's page
 * publicly — "Code 1 appears at 9am WAT on the Where the World Listens page" —
 * so that one route may stand in the hunt's copy (lib/naija66/copy.ts
 * CODE1_PAGE), and nowhere else. Every other route still fails in every hunt
 * file, copy.ts included, and this one still fails in any other file.
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

/**
 * The routes a hunt file may name, by file: prize 1's page, in the copy only,
 * because Paul names it publicly (see the top). Nothing else is allowed.
 */
const COPY_FILE = "app/lib/naija66/copy.ts";
const NAMED_PAGE = "/music/listeners";
const NAMED_PUBLICLY: Record<string, readonly string[]> = { [COPY_FILE]: [NAMED_PAGE] };

/** Problems in one file's source: a route as a string literal, or a key. */
function leaks(src: string, file = ""): string[] {
  const out: string[] = [];
  const allowed = NAMED_PUBLICLY[file] ?? [];
  for (const route of ROUTES) {
    if (allowed.includes(route)) continue;
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
    const found = HUNT_FILES.flatMap((f) => leaks(readFileSync(join(ROOT, f), "utf8"), f).map((l) => `${f}: ${l}`));
    expect(found).toEqual([]);
  });

  it("names exactly one page, prize 1's, and only in the copy", () => {
    expect(ROUTES).toContain(NAMED_PAGE); // a real route, so the allowance is not vacuous
    expect(HUNT_FILES).toContain(COPY_FILE);
    const copy = readFileSync(join(ROOT, COPY_FILE), "utf8");
    // Without its allowance, the copy trips on that one route and nothing else.
    expect(leaks(copy)).toEqual([`route ${NAMED_PAGE}`]);
    expect(leaks(copy, COPY_FILE)).toEqual([]);
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

  it("negative control: the allowance is one route in one file — any other route in the copy fails, and the named one fails elsewhere", () => {
    const copy = readFileSync(join(ROOT, COPY_FILE), "utf8");
    const other = ROUTES.find((r) => r.length > 1 && r !== NAMED_PAGE && r !== "/naija66")!;
    const plantedInCopy = copy.replace(`"${NAMED_PAGE}"`, `"${other}"`);
    expect(plantedInCopy).not.toBe(copy);
    expect(leaks(plantedInCopy, COPY_FILE)).toEqual([`route ${other}`]);
    expect(leaks(`${copy}\nconst also = "${other}";`, COPY_FILE)).toEqual([`route ${other}`]);
    const data = readFileSync(join(ROOT, "app/data/naija66.ts"), "utf8");
    const namedInData = data.replace(NAIJA66_PRIZES[0].pathHash, NAMED_PAGE);
    expect(leaks(namedInData, "app/data/naija66.ts")).toContain(`route ${NAMED_PAGE}`);
  });
});
