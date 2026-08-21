import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "node:fs";
import { ceremonies, totalWins, totalNominations } from "../app/data/awards";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { tours } from "../app/data/tours";

// The API is the one surface where a wrong figure travels furthest: it is CC BY,
// so anyone may reuse it, and a consumer has no page to sanity-check against.
// These assert the endpoints exist and that what they publish is derived from
// the same data the pages render, not a second copy that can drift.

const ENDPOINTS = [
  "stats", "charts", "certifications", "songs",
  "awards", "tours", "afrobeats", "live-charts",
];

describe("the public API", () => {
  it("has a route file for every documented endpoint", () => {
    const missing = ENDPOINTS.filter(
      (e) => !existsSync(`app/api/v1/${e}/route.ts`)
    );
    expect(missing, `documented but not implemented: ${missing.join(", ")}`).toEqual([]);
  });

  it("documents every endpoint it implements, on the page and in the index", () => {
    // Three surfaces have to agree: the route, the /api docs page, and the JSON
    // index at /api/v1. A route nobody lists is a route nobody finds.
    const docs = readFileSync("app/api/page.tsx", "utf8");
    const index = readFileSync("app/api/v1/route.ts", "utf8");
    for (const e of ENDPOINTS) {
      expect(docs, `${e} missing from the docs page`).toContain(`"/${e}"`);
      expect(index, `${e} missing from the JSON index`).toContain(`/${e}\``);
    }
  });

  it("derives the awards rows from the ceremonies, not a copy", () => {
    const rows = ceremonies.flatMap((c) => c.noms);
    expect(rows.length).toBe(totalNominations);
    expect(rows.filter((n) => n.won).length).toBe(totalWins);
  });

  it("covers the whole board plus its subject", () => {
    expect(afrobeatsArtists.length).toBe(9);
    const src = readFileSync("app/api/v1/afrobeats/route.ts", "utf8");
    // The subject is included deliberately — a comparison dataset that omits
    // the artist it exists to compare against is a strange thing to publish.
    expect(src).toContain("subject");
    expect(src).toContain("countingRule");
  });

  it("keeps box-office figures as published strings, not parsed numbers", () => {
    // "$30.46M" arrives rounded and qualified; turning it into 30460000 would
    // invent precision the box-office source never claimed.
    const src = readFileSync("app/api/v1/tours/route.ts", "utf8");
    expect(src).toContain("gross: t.gross ?? null");
    expect(tours.length).toBeGreaterThan(0);
  });
});
