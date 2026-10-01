import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import sitemap from "../app/sitemap";
import { NAIJA66_CLOSES, NAIJA66_FIRST_DROP, NAIJA66_PRIZES } from "../app/data/naija66";

/**
 * Naija @ 66's committed configuration. Since 1 Oct 2026 the five prize pages
 * are plain paths in app/data/naija66.ts (Paul accepted a public schedule when
 * the HMAC mapping could not be matched to the deployed secret). This file
 * holds the hunt to exactly those five routes, named in that one file and in
 * no other hunt file — so no copy, component or route can name a page — and
 * to no key-shaped string anywhere.
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

const rel = (p: string) => p.slice(ROOT.length + 1);
const DATA_FILE = "app/data/naija66.ts";

/** Every file the hunt is made of: config, library, routes, page and components. */
const HUNT_FILES = [
  DATA_FILE,
  ...walk(join(ROOT, "app/lib/naija66")).map(rel),
  ...walk(join(ROOT, "app/api/naija66")).map(rel),
  ...walk(join(ROOT, "app/naija66")).map(rel),
  ...readdirSync(join(ROOT, "app/components"))
    .filter((f) => /^(Naija66|MobileNaija66|HuntKeySlot|naija66|mobileNaija66|huntKeySlot)/.test(f))
    .map((f) => `app/components/${f}`),
];

/** The five prize pages, as Paul gave them. */
const PRIZE_ROUTES = ["/music/listeners", "/records/cars", "/certifications", "/records/africas-biggest", "/dai-dai"];

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


/** The routes one file's source names as string literals. */
const routesIn = (src: string) =>
  ROUTES.filter((route) => route !== "/" && new RegExp(`(["'\`])${escape(route)}\\1`).test(src));

/** Key-shaped strings: a key from the old mechanic or a winner code. */
const keysIn = (src: string) =>
  [...src.matchAll(/NG66-(?:[1-5]-)?[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}(?![A-Z0-9])/g)]
    .map((m) => m[0])
    .filter((k) => !k.endsWith("-XXXXXX")); // placeholders

describe("Naija @ 66's committed config", () => {
  it("is exactly the five prize pages and drop times Paul gave, and the close", () => {
    expect(NAIJA66_PRIZES).toEqual([
      { prize: 1, path: "/music/listeners", dropsAt: "2026-10-01T08:00:00Z" },
      { prize: 2, path: "/records/cars", dropsAt: "2026-10-01T11:00:00Z" },
      { prize: 3, path: "/certifications", dropsAt: "2026-10-01T14:00:00Z" },
      { prize: 4, path: "/records/africas-biggest", dropsAt: "2026-10-01T17:00:00Z" },
      { prize: 5, path: "/dai-dai", dropsAt: "2026-10-01T20:00:00Z" },
    ]);
    expect(NAIJA66_FIRST_DROP).toBe("2026-10-01T08:00:00Z");
    expect(NAIJA66_CLOSES).toBe("2026-10-02T23:00:00Z");
  });

  it("walks the whole site and every hunt file, so the guard below is not vacuous", () => {
    expect(ROUTES.length).toBeGreaterThan(300);
    for (const r of PRIZE_ROUTES) expect(ROUTES, r).toContain(r);
    for (const f of ["app/lib/naija66/crypto.ts", "app/api/naija66/spot/route.ts", "app/components/HuntKeySlot.tsx"]) {
      expect(HUNT_FILES).toContain(f);
    }
  });

  it("names exactly these five prize routes, in app/data/naija66.ts only", () => {
    expect(routesIn(readFileSync(join(ROOT, DATA_FILE), "utf8")).sort()).toEqual([...PRIZE_ROUTES].sort());
    const elsewhere = HUNT_FILES.filter((f) => f !== DATA_FILE).flatMap((f) =>
      routesIn(readFileSync(join(ROOT, f), "utf8"))
        // /naija66 is the hunt's own page, which may link to itself.
        .filter((r) => r !== "/naija66")
        .map((r) => `${f}: ${r}`),
    );
    expect(elsewhere).toEqual([]);
  });

  it("holds no key-shaped string in any hunt file", () => {
    const found = HUNT_FILES.flatMap((f) => keysIn(readFileSync(join(ROOT, f), "utf8")).map((k) => `${f}: ${k}`));
    expect(found).toEqual([]);
  });

  it("negative control: a planted sixth route, a route in another hunt file and a planted code are caught", () => {
    const src = readFileSync(join(ROOT, DATA_FILE), "utf8");
    const sixth = ROUTES.find((r) => r.length > 1 && !PRIZE_ROUTES.includes(r) && r !== "/naija66")!;
    const planted = src.replace(
      '{ prize: 5, path: "/dai-dai", dropsAt: "2026-10-01T20:00:00Z" },',
      `{ prize: 5, path: "/dai-dai", dropsAt: "2026-10-01T20:00:00Z" },\n  { prize: 6, path: "${sixth}", dropsAt: "2026-10-01T22:00:00Z" },`,
    );
    expect(planted).not.toBe(src);
    expect(routesIn(planted).sort()).not.toEqual([...PRIZE_ROUTES].sort());
    expect(routesIn(planted)).toContain(sixth);
    const copy = readFileSync(join(ROOT, "app/lib/naija66/copy.ts"), "utf8");
    expect(routesIn(`${copy}\nconst where = "${PRIZE_ROUTES[1]}";`)).toEqual([PRIZE_ROUTES[1]]);
    expect(keysIn(`${src}\nconst k = "NG66-2-ABC234";`)).toEqual(["NG66-2-ABC234"]);
  });
});
