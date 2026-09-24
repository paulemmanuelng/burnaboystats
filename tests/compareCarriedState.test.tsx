import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../app/compare/page";
import { COMPARE_KEYS, MAX_VALUE, carried, href } from "../app/lib/compareUrl";
import { comparableArtists } from "../app/lib/certUnits";

/**
 * F-06 (site debug, 24 Sep 2026): /compare copied every key of the incoming
 * query into every link and every search form it drew. On the live site
 * `utm_source=newsletter` rode into 16 links, for example
 * "/compare?a=burna-boy&b=wizkid&utm_source=newsletter&mode=songs"; a stray
 * `junk=` was echoed 17 times; and a 30,000-character `a=` came back as a
 * 1,367,119-byte page marked no-store.
 */
async function html(sp: Record<string, string>): Promise<string> {
  const tree = await ComparePage({ searchParams: Promise.resolve(sp) });
  return renderToStaticMarkup(tree);
}

describe("F-06: /compare carries its own state and nothing else", () => {
  it("drops a key the page does not read", () => {
    const sp = { a: "burna-boy", b: "wizkid", utm_source: "newsletter" };
    expect(href(sp, { mode: "songs" })).toBe("/compare?a=burna-boy&b=wizkid&mode=songs");
    expect(carried(sp)).toEqual([["a", "burna-boy"], ["b", "wizkid"]]);
  });

  it("drops a value too long to be real, rather than repeating it", () => {
    const junk = "a".repeat(30_000);
    expect(href({ a: junk, b: "wizkid" }, {})).toBe("/compare?b=wizkid");
  });

  it("puts neither into the rendered page", async () => {
    const tracked = await html({ a: "burna-boy", b: "wizkid", utm_source: "newsletter" });
    expect(tracked).not.toContain("utm_source");
    const junk = "q".repeat(1000);
    const long = await html({ a: junk, b: "wizkid", junk });
    expect(long).not.toContain(junk.slice(0, MAX_VALUE + 1));
    expect(long).not.toContain("junk=");
    expect(long).not.toMatch(/name="junk"/);
  });

  it("keeps every key the compare code reads", () => {
    // A key read by the page but missing from the list would be silently
    // dropped from every link — the opposite bug. Read the source for it.
    const dir = "app/compare";
    const files = [
      ...readdirSync(dir).filter((f) => f.endsWith(".tsx")).map((f) => join(dir, f)),
      "app/lib/compareUrl.ts",
    ];
    const read = new Set<string>();
    for (const f of files) {
      const src = readFileSync(f, "utf8");
      for (const m of src.matchAll(/\bsp\.([a-zA-Z]+)/g)) read.add(m[1]);
      for (const m of src.matchAll(/href\(sp,\s*\{([^}]*)\}/g))
        for (const k of m[1].matchAll(/(?:^|[,{]\s*)([a-z]+):/g)) read.add(k[1]);
    }
    expect(read.size).toBeGreaterThan(5);
    expect([...read].filter((k) => !COMPARE_KEYS.has(k))).toEqual([]);
  });

  it("never drops a real song title for length", () => {
    const longest = Math.max(...comparableArtists.flatMap((a) => a.releases.map((r) => r.title.length)));
    expect(longest).toBeLessThanOrEqual(MAX_VALUE);
  });
});
