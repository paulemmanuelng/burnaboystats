import { describe, it, expect } from "vitest";
import { exploreFor } from "../app/lib/links";
import { sectionLinks, DEFAULT_EXPLORE } from "../app/components/KeepExploring";

/**
 * The Keep exploring lists for the three pages about the site itself (design
 * response item 57, 30 Sep 2026). /curator and /press had no entry and fell
 * through to DEFAULT_EXPLORE; the correction keeps the list it already had.
 * Existing keys only: sectionLinks gains nothing.
 */

describe("Keep exploring lists (item 57)", () => {
  const WANT: Record<string, string[]> = {
    "/curator": ["methodology", "api", "share"],
    "/press": ["share", "api", "methodology"],
    "/analysis/spotify-unmerge": ["analysis", "by-the-numbers", "methodology"],
  };

  it.each(Object.keys(WANT))("%s draws its own three", (path) => {
    expect(exploreFor[path]).toEqual(WANT[path]);
    for (const k of WANT[path]) expect(sectionLinks[k], k).toBeDefined();
  });

  it("negative control: /curator and /press fell through to the default list", () => {
    // What a page with no entry draws (KeepExploring: exploreFor[current] ||
    // DEFAULT_EXPLORE) — the list both pages shipped with.
    expect(DEFAULT_EXPLORE).toEqual(["music", "certifications", "records"]);
    expect(DEFAULT_EXPLORE).not.toEqual(WANT["/curator"]);
    expect(DEFAULT_EXPLORE).not.toEqual(WANT["/press"]);
  });
});

