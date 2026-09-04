import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Every /api/v1 route is served from the build, not per request.
 *
 * The dataset is rebuilt by a deploy, never by a request, so all nine routes
 * are `force-static` — except `/api/v1/live-charts`, which was missed and so
 * burned a function invocation on every hit, including the live-charts page's
 * own per-release panel fetches. Its own header comment said caching hard was
 * safe while the route did the opposite, and `next build` marked it `ƒ` beside
 * eight `○` siblings with nothing complaining.
 */
/** Deliberately server-rendered: it answers an UNKNOWN artist with a bounded
 *  JSON 404 and CORS headers rather than a build-time miss, so it cannot be
 *  force-static. Listed here so the exemption is a decision, not an oversight. */
const DYNAMIC_BY_DESIGN = ["app/api/v1/live-charts/[artist]/route.ts"];

function routeFiles(dir: string, out: string[] = []) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) routeFiles(p, out);
    else if (e === "route.ts") out.push(p);
  }
  return out;
}

describe("the public API is static", () => {
  it("every /api/v1 route declares force-static", () => {
    const files = routeFiles("app/api/v1");
    expect(files.length).toBeGreaterThanOrEqual(9);
    const dynamic = files
      .filter((f) => !DYNAMIC_BY_DESIGN.includes(f))
      .filter((f) => !/export const dynamic\s*=\s*"force-static"/.test(readFileSync(f, "utf8")));
    expect(dynamic).toEqual([]);
    // The exemption must name a route that exists, or it silently excuses nothing.
    for (const f of DYNAMIC_BY_DESIGN) expect(files).toContain(f);
  });
});
