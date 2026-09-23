import { describe, it, expect } from "vitest";
import nextConfig from "../next.config.mjs";

/**
 * Three pages lived for under two hours in June and July 2026 and sat in the
 * sitemap while they did; they have answered 404 since. The 23 Sep 2026 Search
 * Console check found them. Each 308s to the page that replaced it — and the
 * destination must be a real page, or the redirect only moves the 404.
 */
describe("retired pages redirect to their replacements", () => {
  it.each([
    ["/music/gbona", "/music/albums/african-giant"],
    ["/music/kilometre", "/music/albums/love-damini"],
    ["/records/tours/shows", "/records/tours"],
  ])("%s → %s", async (source, destination) => {
    const redirects = await (nextConfig as { redirects: () => Promise<{ source: string; destination: string; permanent: boolean }[]> }).redirects();
    const r = redirects.find((x) => x.source === source);
    expect(r?.destination).toBe(destination);
    expect(r?.permanent).toBe(true);
  });
});
