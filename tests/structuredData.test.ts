import { describe, it, expect } from "vitest";
import { tourEventsJsonLd, toISODate } from "../app/lib/structuredData";
import { datasetJsonLd, breadcrumbList } from "../app/lib/seo";

// These tests encode Google's required + recommended fields for each rich-result
// type we emit, so a missing field fails here instead of surfacing weeks later as
// a Search Console "structured data issue" email.

describe("MusicEvent (tours) structured data", () => {
  const graph = tourEventsJsonLd()["@graph"];

  it("emits an event for every dated show", () => {
    expect(graph.length).toBeGreaterThan(50);
  });

  it("every event has all Google-recommended Event fields", () => {
    for (const ev of graph as Record<string, unknown>[]) {
      // required
      expect(ev["@type"]).toBe("MusicEvent");
      expect(ev.name, JSON.stringify(ev)).toBeTruthy();
      expect(ev.startDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      const loc = ev.location as Record<string, unknown>;
      expect(loc?.name).toBeTruthy();
      const addr = loc?.address as Record<string, unknown>;
      expect(addr?.addressLocality).toBeTruthy();
      expect(addr?.addressCountry).toBeTruthy();
      // recommended (the ones GSC flagged as missing)
      expect(ev.endDate).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(ev.eventStatus).toContain("schema.org/Event");
      expect(ev.eventAttendanceMode).toContain("schema.org/");
      expect(ev.description).toBeTruthy();
      expect(Array.isArray(ev.image) && (ev.image as unknown[]).length > 0).toBe(true);
      expect((ev.performer as Record<string, unknown>)?.name).toBe("Burna Boy");
      expect((ev.organizer as Record<string, unknown>)?.name).toBeTruthy();
      const offers = ev.offers as Record<string, unknown>;
      expect(offers?.url).toMatch(/^https?:\/\//);
      expect(offers?.availability).toContain("schema.org/");
    }
  });

  it("parses recognised dates and rejects junk", () => {
    expect(toISODate("Oct 16, 2025")).toBe("2025-10-16");
    expect(toISODate("Jan 3, 2019")).toBe("2019-01-03");
    expect(toISODate("sometime 2025")).toBeNull();
  });
});

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
