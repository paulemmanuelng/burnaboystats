import { describe, it, expect } from "vitest";
import { spotifyImage, spotifySrcSet } from "../app/lib/spotifyImage";
import { albums, eps, compilations } from "../app/data/albums";
import { updates } from "../app/data/updates";
import { lastUpdated } from "../app/lib/api";

// Guards for the two ways ABSENT data — as opposed to wrong data — reaches a
// reader. The rest of this suite checks that the figures are right; these check
// that a field nobody filled in yet degrades instead of breaking.

describe("a release whose cover art has not landed yet", () => {
  // `cover` is optional on every release type, and tests/coverIds.test.ts
  // deliberately skips the entries that lack one — so a release can legally
  // arrive before its Spotify art id does, which is what happens when an album
  // is announced and added ahead of release day.
  //
  // Nine call sites pass `cover ?? ""` into spotifyImage: the /music "Latest
  // album" hero on BOTH layouts (app/music/page.tsx and MobileMusic), plus
  // eight `backgroundImage: url(...)` cover tiles. An empty URL is not
  // "no image" to a browser — it resolves against the document, so the page
  // re-requests ITSELF as an image and paints a broken-image icon.
  it("never yields an empty src", () => {
    expect(spotifyImage("", 300)).not.toBe("");
    expect(spotifyImage("", 300)).toMatch(/^data:image\//);
  });

  it("still leaves srcSet off entirely, so there is nothing to resolve", () => {
    expect(spotifySrcSet("")).toBeUndefined();
  });

  it("passes a real cover through untouched", () => {
    const real = albums.find((a) => a.cover)!.cover!;
    expect(spotifyImage(real, 300)).toContain("i.scdn.co");
    expect(spotifySrcSet(real)).toBeTruthy();
  });

  // The bug is only reachable while some release genuinely has no cover, so
  // this records which ones do — if the answer ever becomes "none", the guard
  // above is still the thing standing between the next cover-less release and
  // a self-referential image request.
  it("is a real state for this data, not a hypothetical", () => {
    const all = [...albums, ...eps, ...compilations];
    expect(all.length).toBeGreaterThan(0);
    for (const a of all) {
      if (a.cover !== undefined) expect(a.cover).not.toBe("");
    }
  });
});

describe("updates.ts dates", () => {
  // Every date in this file is read back as `${date}T12:00:00Z` (sitemap.ts,
  // rss.xml, lib/api.ts) or `${date}T00:00:00Z` (updates/page.tsx,
  // UpdatesFeed, MobileUpdates). That suffix forces the STRICT ISO parser, so
  // an unpadded "2026-9-3" is an Invalid Date rather than 3 September.
  //
  // It fails in the worst possible order. The dates are sorted
  // LEXICOGRAPHICALLY and the newest is taken with .at(-1), and "2026-9-3"
  // sorts above every zero-padded date — so a single missing zero always wins
  // that sort and becomes the site's `lastUpdated`. Next then calls
  // .toISOString() on it for the sitemap's lastModified, which throws
  // RangeError: Invalid time value, and Intl.DateTimeFormat.format throws the
  // same in the feed. This file is hand-edited on every content change and the
  // stats bot writes to it too, so the typo is a matter of time.
  const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;

  it("are zero-padded ISO days", () => {
    const bad = updates.filter((u) => !ISO_DAY.test(u.date)).map((u) => u.date);
    expect(bad, `not YYYY-MM-DD: ${bad.join(", ")}`).toEqual([]);
  });

  it("parse to a real date through the suffix every reader appends", () => {
    const bad = updates
      .filter((u) => Number.isNaN(new Date(`${u.date}T12:00:00Z`).getTime()))
      .map((u) => u.date);
    expect(bad, `Invalid Date: ${bad.join(", ")}`).toEqual([]);
  });

  it("give the sitemap a lastModified it can serialise", () => {
    expect(() => new Date(`${lastUpdated}T12:00:00Z`).toISOString()).not.toThrow();
  });
});
