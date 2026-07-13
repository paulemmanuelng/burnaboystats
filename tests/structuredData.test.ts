import { describe, it, expect } from "vitest";
import { datasetJsonLd, breadcrumbList } from "../app/lib/seo";

// These tests encode Google's required + recommended fields for each rich-result
// type we emit, so a missing field fails here instead of surfacing weeks later as
// a Search Console "structured data issue" email.
//
// Note: we intentionally do NOT emit MusicEvent markup. Every documented show is
// in the past, and Google only surfaces upcoming events in rich results — so the
// markup earned zero placements while repeatedly failing GSC's Events report on
// the recommended `offers` field (which we can't honestly fill for sold-out past
// shows with no ticket price). See app/records/tours/page.tsx.

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
});
