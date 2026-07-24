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
  it("every song has real substance — chart/cert data, views, or a declared story-only page", () => {
    for (const s of songs) {
      const hasChart = allChartItems.some((r) => r.title === s.title);
      const hasCert = allItems.some((r) => r.title === s.title);
      const ok = hasChart || hasCert || Boolean(s.ytViews) || s.storyOnly === true;
      expect(ok, `${s.title} has nothing to show`).toBe(true);
    }
  });

  // A song that claims neither storyOnly nor views MUST resolve in the datasets —
  // that combination almost always means the title has a typo.
  it("a song without storyOnly/views must match a dataset title exactly", () => {
    for (const s of songs) {
      if (s.storyOnly || s.ytViews) continue;
      const found =
        allChartItems.some((r) => r.title === s.title) || allItems.some((r) => r.title === s.title);
      expect(found, `${s.title} matches no chart/cert entry — typo?`).toBe(true);
    }
  });

  it("only songs with a verified Spotify link carry one", () => {
    for (const s of songs) {
      if (s.spotify) expect(s.spotify).toMatch(/^https:\/\/open\.spotify\.com\/track\/[A-Za-z0-9]{22}$/);
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
