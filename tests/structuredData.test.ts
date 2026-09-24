import { describe, it, expect } from "vitest";
import { afrobeatsArtists } from "../app/data/afrobeats";
import { SEGMENT_LABELS } from "../app/lib/seo";
import { datasetJsonLd, breadcrumbList, hasOwnBreadcrumb } from "../app/lib/seo";

// These tests encode Google's required + recommended fields for each rich-result
// type we emit, so a missing field fails here instead of surfacing weeks later as
// a Search Console "structured data issue" email.
//
// Note on MusicEvent: the TOURS page deliberately emits none. Every documented
// show there is in the past, Google only surfaces upcoming events in rich
// results, and the markup earned zero placements while repeatedly failing GSC's
// Events report on the recommended `offers` field — which cannot be filled
// honestly for sold-out past shows with no ticket price. See
// app/records/tours/page.tsx.
//
// /dai-dai is the one exception and it is deliberate: a single MusicEvent for
// the World Cup Final halftime show, added while it was still upcoming, with a
// complete offers block. This comment used to say the site emitted none at all,
// which had been untrue since that node landed.

describe("Dataset structured data", () => {
  const d = datasetJsonLd({
    name: "Test dataset",
    description: "desc",
    path: "/records/charts",
    keywords: ["a"],
    variableMeasured: ["peak"],
  }) as Record<string, unknown>;

  it("has every required + recommended Dataset field", () => {
    expect(d["@type"]).toBe("Dataset");
    expect(d.name).toBeTruthy();
    expect(d.description).toBeTruthy();
    expect(d.url).toContain("https://");
    expect(d.license).toContain("creativecommons.org"); // the field GSC flagged
    expect((d.creator as Record<string, unknown>)?.name).toBeTruthy();
    expect(Array.isArray(d.keywords)).toBe(true);
    expect(Array.isArray(d.variableMeasured)).toBe(true);
  });
});

describe("BreadcrumbList structured data", () => {
  it("builds an ordered, fully-linked trail", () => {
    const bc = breadcrumbList("/records/tours/revenue") as Record<string, unknown>;
    expect(bc["@type"]).toBe("BreadcrumbList");
    const items = bc.itemListElement as Record<string, unknown>[];
    expect(items.length).toBe(4); // Home > Records > Tours > Revenue
    items.forEach((it, i) => {
      expect(it.position).toBe(i + 1);
      expect(it.name).toBeTruthy();
      expect(String(it.item)).toContain("https://");
    });
  });

  it("returns null for the home page", () => {
    expect(breadcrumbList("/")).toBeNull();
  });

  // /music/listeners is a static page beside the dynamic song pages. The song
  // pages stand the site-wide trail down (they write their own); the listeners
  // page must not be swallowed by that rule, or it ships no BreadcrumbList.
  it("/music/listeners takes the generated trail; a song page keeps its own", () => {
    expect(hasOwnBreadcrumb("/music/listeners")).toBe(false);
    expect(hasOwnBreadcrumb("/music/last-last")).toBe(true);
    const bc = breadcrumbList("/music/listeners") as Record<string, unknown>;
    const items = bc.itemListElement as Record<string, unknown>[];
    expect(items.map((it) => it.name)).toEqual(["Home", "Music", "Where the World Listens"]);
    expect(String(items[2].item)).toBe("https://burnaboystats.com/music/listeners");
  });

  // Debug of 24 Sep 2026 (E-02): all 27 /compare/in/<country> boards shipped
  // two BreadcrumbLists — the page's own, and a generated one ending in the
  // raw slug ("united-kingdom"). The board writes its own, so the site-wide
  // one stands down there too.
  it("a country board keeps only its own trail", () => {
    expect(hasOwnBreadcrumb("/compare/in/canada")).toBe(true);
    expect(hasOwnBreadcrumb("/compare/in/united-kingdom")).toBe(true);
    expect(hasOwnBreadcrumb("/compare/in")).toBe(true);
    // Negative control: the one-segment pattern that shipped did not reach it.
    expect(/^\/compare\/[^/]+$/.test("/compare/in/united-kingdom")).toBe(false);
  });
});

// Six artists were added to the board without a SEGMENT_LABELS entry, so their
// breadcrumb trails read "Home > The Afrobeats Board > bnxn" — the raw slug, in
// the JSON-LD a search engine reads. The labels are listed statically on
// purpose: seo.ts is imported by the client-side <Breadcrumbs>, so importing
// afrobeatsArtists there to derive them would pull the whole board into the
// client bundle. This test buys the durability instead.
describe("every board artist has a breadcrumb label", () => {
  it("names each slug in words, matching the board", () => {
    const missing = afrobeatsArtists
      .filter((a) => !SEGMENT_LABELS[a.slug])
      .map((a) => `${a.slug} → should read "${a.name}"`);
    expect(
      missing,
      "add these to SEGMENT_LABELS in app/lib/seo.ts, or their breadcrumbs publish the raw slug",
    ).toEqual([]);
  });

  it("uses the board's own spelling, casing included", () => {
    const wrong = afrobeatsArtists
      .filter((a) => SEGMENT_LABELS[a.slug] && SEGMENT_LABELS[a.slug] !== a.name)
      .map((a) => `${a.slug}: label "${SEGMENT_LABELS[a.slug]}" vs name "${a.name}"`);
    // BNXN and CKay are why this is not a capitalize() helper.
    expect(wrong).toEqual([]);
  });
});
