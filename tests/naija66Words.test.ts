// @vitest-environment node
import { describe, it, expect, vi, afterEach } from "vitest";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { NAIJA66_WORD_HASHES, wordHash } from "../app/data/naija66Words";
import { NAIJA66_PRIZES } from "../app/data/naija66";
import { normaliseWord, tokensAt } from "../app/lib/naija66/word";

/**
 * Naija @ 66's hidden words (Paul, 1 Oct 2026: "you have to hide it in a word
 * or phrase"). The words live in app/data/naija66Words.ts, which only
 * app/lib/naija66/word.server.ts imports, which only the reveal route
 * imports — so no browser bundle can carry them. This file holds that import
 * graph shut, holds the words to that one file, and plays the real config:
 * awarded prizes and decoy pages answer {} for any word.
 */

const ROOT = process.cwd();
const WORDS_FILE = "app/data/naija66Words.ts";
const WORD_SERVER = "app/lib/naija66/word.server.ts";
const REVEAL_ROUTE = "app/api/naija66/reveal/route.ts";

const walk = (dir: string, out: string[] = []): string[] => {
  for (const e of readdirSync(dir)) {
    if (e === "node_modules" || e.startsWith(".")) continue;
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx|js|mjs|jsx)$/.test(e)) out.push(p);
  }
  return out;
};
const rel = (p: string) => p.slice(ROOT.length + 1);
const APP_FILES = walk(join(ROOT, "app"));

/** The app files a file imports (relative imports only), resolved to paths. */
function importsOf(file: string): string[] {
  const src = readFileSync(join(ROOT, file), "utf8");
  const out: string[] = [];
  for (const m of src.matchAll(/(?:import|export)\s[^;]*?from\s+["'](\.[^"']+)["']|import\(\s*["'](\.[^"']+)["']\s*\)|import\s+["'](\.[^"']+)["']/g)) {
    const spec = m[1] ?? m[2] ?? m[3];
    const base = resolve(dirname(join(ROOT, file)), spec);
    for (const cand of [base, `${base}.ts`, `${base}.tsx`, `${base}/index.ts`, `${base}/index.tsx`]) {
      if (existsSync(cand) && statSync(cand).isFile()) {
        out.push(rel(cand));
        break;
      }
    }
  }
  return out;
}

/** Which app files import `target`. */
const importersOf = (target: string) => APP_FILES.map(rel).filter((f) => importsOf(f).includes(target));

/** Everything reachable from the client: every file marked "use client", and all it imports. */
function clientGraph(): Set<string> {
  const seen = new Set<string>();
  const queue = APP_FILES.map(rel).filter((f) => /^\s*["']use client["']/.test(readFileSync(join(ROOT, f), "utf8")));
  while (queue.length) {
    const f = queue.pop()!;
    if (seen.has(f)) continue;
    seen.add(f);
    queue.push(...importsOf(f));
  }
  return seen;
}

describe("the hidden words", () => {
  it("are stored only as hashes: one per prize not awarded off the site, plus Paul's test code", () => {
    const open = NAIJA66_PRIZES.filter((p) => !p.awarded).map((p) => p.prize);
    expect(Object.keys(NAIJA66_WORD_HASHES).map(Number).sort()).toEqual([0, ...open].sort());
    for (const h of Object.values(NAIJA66_WORD_HASHES)) expect(h).toMatch(/^[0-9a-f]{64}$/);
    // The hash is of the normalised token a tap produces.
    expect(wordHash(9, normaliseWord("Zebrafinch")!)).toBe(wordHash(9, "zebrafinch"));
    expect(tokensAt("1,234.5", 0).map((t) => t.word)).toEqual(["1,234.5"]);
  });

  it("are imported by word.server.ts only, and that by the spot and reveal routes only", () => {
    expect(importersOf(WORDS_FILE)).toEqual([WORD_SERVER]);
    expect(importersOf(WORD_SERVER).sort()).toEqual([REVEAL_ROUTE, "app/api/naija66/spot/route.ts"].sort());
  });

  it("are unreachable from every client component's import graph", () => {
    const graph = clientGraph();
    expect(graph.size).toBeGreaterThan(50);
    expect(graph.has("app/components/HuntKeySlot.tsx")).toBe(true);
    expect(graph.has("app/lib/naija66/word.ts")).toBe(true);
    expect(graph.has(WORDS_FILE)).toBe(false);
    expect(graph.has(WORD_SERVER)).toBe(false);
  });

  it("negative control: a client file importing the words would be caught", () => {
    // The graph walker sees through a relative import, as it would for a planted one.
    expect(importsOf(WORD_SERVER)).toContain(WORDS_FILE);
    expect(importsOf("app/components/HuntKeySlot.tsx")).toContain("app/lib/naija66/word.ts");
  });

  it("are not readable anywhere: the data file holds only hashes, the test page and its time", () => {
    const src = readFileSync(join(ROOT, WORDS_FILE), "utf8")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/(^|[^:])\/\/.*$/gm, "$1");
    const literals = [...src.matchAll(/"([^"\n]*)"/g)].map((m) => m[1]);
    const allowed = (x: string) =>
      /^[0-9a-f]{64}$/.test(x) || x === "/about" || x === "2026-10-01T00:00:00Z" || x === "node:crypto" || x === "sha256" || x === "hex";
    expect(literals.filter((x) => !allowed(x))).toEqual([]);
  });
});

describe("the real config's reveal", () => {
  afterEach(() => vi.unstubAllEnvs());

  async function routes(now: string) {
    vi.resetModules();
    for (const k of ["KV_REST_API_URL", "KV_REST_API_TOKEN", "UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN", "VERCEL", "VERCEL_ENV"]) {
      vi.stubEnv(k, undefined as unknown as string);
    }
    vi.stubEnv("NAIJA66_SECRET", "made-up-secret-for-tests-only");
    vi.stubEnv("NAIJA66_NOW", now);
    const store = await import("../app/lib/naija66/store");
    store.resetMemoryStore();
    delete (globalThis as { __naija66Valve?: unknown }).__naija66Valve;
    return { reveal: await import("../app/api/naija66/reveal/route") };
  }
  const post = (m: { reveal: { POST: (r: Request) => Promise<Response> } }, p: string, w: string, ip: string) =>
    m.reveal.POST(
      new Request("https://burnaboystats.com/api/naija66/reveal", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-forwarded-for": ip },
        body: JSON.stringify({ p, w }),
      }),
    );

  it("an awarded prize's page, and a decoy, answer {} for every word there is", async () => {
    const m = await routes("2026-10-01T21:00:00Z"); // all five dropped
    const all = ["Zebrafinch", "Burna", "the", "Nigeria", "1,234.5"];
    let ip = 0;
    for (const p of [...NAIJA66_PRIZES.filter((x) => x.awarded).map((x) => x.path), "/faq", "/test/decoy"]) {
      for (const w of all) expect(await (await post(m, p, w, `10.9.0.${ip++}`)).text(), `${p} ${w}`).toBe("{}");
    }
  });

  it("an open prize's page answers {} to a wrong word and claims nothing", async () => {
    const m = await routes("2026-10-01T21:00:00Z");
    let ip = 0;
    for (const p of NAIJA66_PRIZES.filter((x) => !x.awarded)) {
      expect(await (await post(m, p.path, "Zebrafinch", `10.8.0.${ip++}`)).text(), p.path).toBe("{}");
    }
    // The winning path itself is exercised with known hashes in tests/naija66.test.ts.
  });
});
