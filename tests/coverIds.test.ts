import { describe, it, expect } from "vitest";
import { albums, eps, compilations } from "../app/data/albums";
import { songs } from "../app/data/songs";

/**
 * Cover URLs have to be *shaped* right, not merely present.
 *
 * A Spotify image id is a 16-character variant prefix plus a 24-character
 * hash — exactly 40 hex characters. Nothing in the app validates that: a
 * malformed id still renders an <img>, still passes "has a cover" checks, and
 * only fails as a silent 404 on the live page.
 *
 * This exists because a find/replace over albums.ts once rewrote the first 36
 * characters of a correct id and left the last four behind, producing a
 * 44-character URL that 404'd in production while every existing check stayed
 * green. Length is the cheap invariant that would have caught it.
 */
const SPOTIFY_IMAGE = /^https:\/\/i\.scdn\.co\/image\/[a-f0-9]{40}$/;

const withCovers = [
  ...albums.map((a) => ["album", a.title, a.cover] as const),
  ...eps.map((a) => ["EP", a.title, a.cover] as const),
  ...compilations.map((a) => ["compilation", a.title, a.cover] as const),
  ...songs.map((s) => ["song", s.title, s.cover] as const),
].filter(([, , cover]) => cover);

describe("cover art ids", () => {
  it("checks a meaningful number of releases", () => {
    expect(withCovers.length).toBeGreaterThan(20);
  });

  it.each(withCovers)("%s “%s” has a well-formed Spotify image id", (_kind, _title, cover) => {
    expect(cover).toMatch(SPOTIFY_IMAGE);
  });
});
