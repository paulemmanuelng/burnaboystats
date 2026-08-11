import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// The /records index lists its children by hand, because each row carries a
// title and a description no generator could write. That hand-maintenance is
// the risk: /records/tours/festivals shipped as a route and was never added
// here, so for a while the only way to reach it was from /records/tours —
// while its two siblings, revenue and map, were both listed.
//
// The nav sheet's "N books" figure derives from this same array, so a missing
// row understated the count too. This test makes the omission fail CI instead
// of going unnoticed.

const src = readFileSync(join(process.cwd(), "app/records/page.tsx"), "utf8");
const listed = new Set(
  [...(src.match(/const subs = \[[\s\S]*?\n\];/)?.[0] ?? "").matchAll(/href: "([^"]+)"/g)].map(
    (m) => m[1]
  )
);

// Every route that exists under /records/, from the filesystem — the same
// source the sitemap is built from.
import { readdirSync, existsSync } from "node:fs";
const walk = (dir: string, base = ""): string[] =>
  existsSync(dir)
    ? readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
        if (!e.isDirectory() || e.name.startsWith("_") || e.name.startsWith("[")) return [];
        const route = `${base}/${e.name}`;
        const self = existsSync(join(dir, e.name, "page.tsx")) ? [route] : [];
        return [...self, ...walk(join(dir, e.name), route)];
      })
    : [];

const routes = walk(join(process.cwd(), "app/records"), "/records");

describe("the /records index lists every record page", () => {
  it("finds the record routes on disk", () => {
    expect(routes.length).toBeGreaterThanOrEqual(11);
  });

  it("has a card for every /records/* route", () => {
    const missing = routes.filter((r) => !listed.has(r));
    expect(missing, `add these to \`subs\` in app/records/page.tsx: ${missing.join(", ")}`).toEqual(
      []
    );
  });

  it("does not link a route that no longer exists", () => {
    // /live-charts is listed deliberately — it belongs with the record books
    // even though it lives at the top level.
    const dead = [...listed].filter(
      (h) => h.startsWith("/records/") && !routes.includes(h)
    );
    expect(dead, `these rows point at routes that are gone: ${dead.join(", ")}`).toEqual([]);
  });
});
