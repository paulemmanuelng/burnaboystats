import { describe, it, expect } from "vitest";
import { songs, songBySlug } from "../app/data/songs";
import { allChartItems } from "../app/data/charts";
import { allItems } from "../app/data/certifications";

describe("song pages data", () => {
  it("every song has a unique slug", () => {
    const slugs = songs.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("slugs are url-safe", () => {
    for (const s of songs) expect(s.slug).toMatch(/^[a-z0-9-]+$/);
  });

  // The pages pull charts + certs by title, so each title must match at least
  // one of those datasets (a typo would render an empty page).
  it("every song title resolves to chart or cert data", () => {
    for (const s of songs) {
      const hasChart = allChartItems.some((r) => r.title === s.title);
      const hasCert = allItems.some((r) => r.title === s.title);
      expect(hasChart || hasCert, `${s.title} has no chart or cert data`).toBe(true);
    }
  });

  it("each song carries SEO fields and at least one FAQ", () => {
    for (const s of songs) {
      expect(s.metaTitle.length).toBeGreaterThan(10);
      expect(s.metaDescription.length).toBeGreaterThan(50);
      expect(s.faqs.length).toBeGreaterThan(0);
      expect(s.cover).toMatch(/^https:\/\/i\.scdn\.co\/image\//);
    }
  });

  it("songBySlug finds and misses correctly", () => {
    expect(songBySlug("last-last")?.title).toBe("Last Last");
    expect(songBySlug("nope")).toBeUndefined();
  });
});
