import { describe, it, expect } from "vitest";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import sitemap from "../app/sitemap";
import { NAIJA66_CLOSES, NAIJA66_PRIZES } from "../app/data/naija66";

/**
 * Naija @ 66 after the close (2 Oct 2026, midnight WAT). The hunt's machinery
 * is gone and must stay gone: no claim or spot route (so no claim can ever be
 * made again), no reveal card in the root layout, no word data. What is left
 * is the /naija66 page and the final results it prints, which name no page of
 * the site and hold no code — only the two-character tails the live board
 * showed.
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
const read = (f: string) => readFileSync(join(ROOT, f), "utf8");
const DATA_FILE = "app/data/naija66.ts";

/** Every file the hunt is made of now: config, library, page and components. */
const HUNT_FILES = [
  DATA_FILE,
  ...walk(join(ROOT, "app/lib/naija66")).map(rel),
  ...walk(join(ROOT, "app/naija66")).map(rel),
  ...readdirSync(join(ROOT, "app/components"))
    .filter((f) => /^(Naija66|MobileNaija66|HuntKeySlot|naija66|mobileNaija66|huntKeySlot)/i.test(f))
    .map((f) => `app/components/${f}`),
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

/** The routes one file's source names as string literals. */
const routesIn = (src: string) =>
  ROUTES.filter((route) => route !== "/" && new RegExp(`(["'\`])${escape(route)}\\1`).test(src));

/** Key-shaped strings: a key from the old mechanic or a winner code. */
const keysIn = (src: string) =>
  [...src.matchAll(/NG66-(?:[1-5]-)?[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{6}(?![A-Z0-9])/g)]
    .map((m) => m[0])
    .filter((k) => !k.endsWith("-XXXXXX")); // placeholders

/** The pieces that only ran the hunt, removed after the close. */
const REMOVED = [
  "app/api/naija66/reveal/route.ts",
  "app/api/naija66/spot/route.ts",
  "app/api/naija66/status/route.ts",
  "app/components/HuntKeySlot.tsx",
  "app/components/huntKeySlot.module.css",
  "app/components/Naija66Banner.tsx",
  "app/components/Naija66BannerLive.tsx",
  "app/components/naija66Banner.module.css",
  "app/components/Naija66Provider.tsx",
  "app/data/naija66Words.ts",
  "app/lib/naija66/word.ts",
  "app/lib/naija66/word.server.ts",
  "app/lib/naija66/token.ts",
  "app/lib/naija66/crypto.ts",
  "app/lib/naija66/env.ts",
  "app/lib/naija66/store.ts",
  "app/lib/naija66/state.ts",
];

/** The reveal card in the root layout — a word, so the import and the tag are both caught. */
const KEY_SLOT = /\bHuntKeySlot\b/;

describe("Naija @ 66's final results", () => {
  it("are the five prizes, all won: 1 and 2 awarded on X, 3 to 5 with the claim time and tail the board showed", () => {
    expect(NAIJA66_PRIZES).toEqual([
      { prize: 1, dropsAt: "2026-10-01T08:00:00Z", awarded: true },
      { prize: 2, dropsAt: "2026-10-01T11:00:00Z", awarded: true },
      { prize: 3, dropsAt: "2026-10-01T14:00:00Z", claimedAt: "2026-10-01T21:01:41.458Z", tail: "EK" },
      { prize: 4, dropsAt: "2026-10-01T17:00:00Z", claimedAt: "2026-10-01T20:38:07.313Z", tail: "QR" },
      { prize: 5, dropsAt: "2026-10-01T20:00:00Z", claimedAt: "2026-10-01T20:00:36.025Z", tail: "BY" },
    ]);
    expect(NAIJA66_CLOSES).toBe("2026-10-02T23:00:00Z");
    for (const p of NAIJA66_PRIZES) {
      expect(p.awarded || (p.claimedAt && p.tail), `prize ${p.prize}`).toBeTruthy();
      if (p.tail) expect(p.tail).toMatch(/^[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{2}$/);
      if (p.claimedAt) expect(Date.parse(p.claimedAt)).toBeLessThan(Date.parse(NAIJA66_CLOSES));
    }
  });
});

describe("the hunt's machinery is gone", () => {
  it("no claim, spot or status route exists, so no claim can ever be made again", () => {
    expect(existsSync(join(ROOT, "app/api/naija66"))).toBe(false);
    const apiRoutes = walk(join(ROOT, "app/api")).map(rel);
    expect(apiRoutes.filter((f) => /naija66/i.test(f))).toEqual([]);
    // Not vacuous: the walk does see the site's other API routes.
    expect(apiRoutes.some((f) => f.endsWith("route.ts"))).toBe(true);
  });

  it("nothing removed is back", () => {
    expect(REMOVED.filter((f) => existsSync(join(ROOT, f)))).toEqual([]);
    expect(walk(join(ROOT, "app/lib/naija66")).map(rel).sort()).toEqual([
      "app/lib/naija66/clock.ts",
      "app/lib/naija66/copy.ts",
    ]);
  });

  it("the root layout renders no HuntKeySlot", () => {
    expect(read("app/layout.tsx")).not.toMatch(KEY_SLOT);
  });

  it("negative control: the layout lines that shipped are caught", () => {
    // Literal lines from origin/main app/layout.tsx before the cleanup.
    expect(KEY_SLOT.test('import HuntKeySlot from "./components/HuntKeySlot";')).toBe(true);
    expect(KEY_SLOT.test("        <HuntKeySlot />")).toBe(true);
    expect(KEY_SLOT.test(`${read("app/layout.tsx")}\n<HuntKeySlot />`)).toBe(true);
  });

  it("no file on the site imports a removed piece or calls a hunt route", () => {
    const sources = walk(join(ROOT, "app"))
      .filter((f) => /\.(tsx?|mjs|js)$/.test(f))
      .map(rel);
    expect(sources.length).toBeGreaterThan(100);
    const bad = /HuntKeySlot|Naija66Banner|Naija66Provider|naija66Words|lib\/naija66\/(word|token|crypto|env|store|state)\b|\/api\/naija66/;
    expect(sources.filter((f) => bad.test(read(f)))).toEqual([]);
    // Negative control: the spot ask HuntKeySlot shipped is caught.
    expect(bad.test("fetch(`/api/naija66/spot?p=${encodeURIComponent(pathname)}`")).toBe(true);
  });
});

describe("what is left names no page and holds no code", () => {
  it("walks every hunt file that is left, so the guards below are not vacuous", () => {
    expect(ROUTES.length).toBeGreaterThan(300);
    for (const f of [DATA_FILE, "app/lib/naija66/copy.ts", "app/naija66/page.tsx", "app/components/Naija66Play.tsx", "app/components/MobileNaija66.tsx"]) {
      expect(HUNT_FILES).toContain(f);
    }
  });

  it("names no route of the site but its own, in any hunt file", () => {
    const named = HUNT_FILES.flatMap((f) =>
      routesIn(read(f))
        // /naija66 is the hunt's own page, which may name itself.
        .filter((r) => r !== "/naija66")
        .map((r) => `${f}: ${r}`),
    );
    expect(named).toEqual([]);
  });

  it("holds no key-shaped string in any hunt file", () => {
    const found = HUNT_FILES.flatMap((f) => keysIn(read(f)).map((k) => `${f}: ${k}`));
    expect(found).toEqual([]);
  });

  it("negative control: the prize line that shipped with its page, and a planted code, are caught", () => {
    // A literal line from origin/main app/data/naija66.ts before the cleanup.
    const shipped = '  { prize: 3, path: "/certifications", dropsAt: "2026-10-01T14:00:00Z" },';
    expect(routesIn(`${read(DATA_FILE)}\n${shipped}`)).toEqual(["/certifications"]);
    expect(keysIn(`${read(DATA_FILE)}\nconst k = "NG66-2-ABC234";`)).toEqual(["NG66-2-ABC234"]);
  });
});
