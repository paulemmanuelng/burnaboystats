import { describe, expect, it } from "vitest";
import { comparableArtists } from "../app/lib/certUnits";
import { fold, pickerArtists, pickerReleases } from "../app/lib/comparePicker";
import { HEAD_TO_HEAD } from "../app/lib/headToHead";

describe("the compare picker misses nothing", () => {
  it("offers every artist on the board", () => {
    const all = pickerArtists();
    expect(all.map((a) => a.slug).sort()).toEqual(comparableArtists.map((a) => a.slug).sort());
    expect(all).toHaveLength(16);
  });

  it("from any chosen side, offers every OTHER artist and never the same one", () => {
    for (const chosen of comparableArtists) {
      const offered = pickerArtists(chosen.slug, chosen.slug).map((a) => a.slug);
      expect(offered, `${chosen.name} offered themselves`).not.toContain(chosen.slug);
      expect(offered, `${chosen.name} is missing someone`).toHaveLength(15);
      for (const other of comparableArtists)
        if (other.slug !== chosen.slug) expect(offered, `${other.name} unreachable from ${chosen.name}`).toContain(other.slug);
    }
  });

  it("leads with the board's own curated partner", () => {
    for (const [slug, partner] of Object.entries(HEAD_TO_HEAD)) {
      const first = pickerArtists(slug, slug)[0]?.slug;
      expect(first, `${slug}'s partner should lead`).toBe(partner);
    }
  });

  it("offers every certified release of every artist, with no query", () => {
    for (const a of comparableArtists) {
      const offered = pickerReleases(a).map((r) => r.title).sort();
      expect(offered, a.name).toEqual(a.releases.map((r) => r.title).sort());
      expect(offered.length, a.name).toBe(a.releases.length);
    }
  });

  it("every release is findable by search, including titles with accents and apostrophes", () => {
    for (const a of comparableArtists)
      for (const r of a.releases) {
        const hits = pickerReleases(a, r.title).map((x) => x.title);
        expect(hits, `${a.name} — ${r.title} not found by its own title`).toContain(r.title);
      }
    // The hard cases by hand: accents folded, credits searched.
    const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
    expect(pickerReleases(burna, "kampe").map((r) => r.title)).toContain("4 Kampé II");
    expect(pickerReleases(burna, "KAMPÉ").map((r) => r.title)).toContain("4 Kampé II");
    expect(pickerReleases(burna, "b.d'or").map((r) => r.title)).toContain("B.D'or");
    expect(pickerReleases(burna, "dave").map((r) => r.title)).toContain("Location");
    expect(pickerReleases(burna, "shakira").map((r) => r.title)).toContain("Dai Dai");
    const ckay = comparableArtists.find((a) => a.slug === "ckay")!;
    expect(pickerReleases(ckay, "nwantiti").map((r) => r.title)).toContain("love nwantiti (ah ah ah)");
  });

  it("search narrows and never invents", () => {
    const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
    expect(pickerReleases(burna, "zzzz-no-such-song")).toHaveLength(0);
    const some = pickerReleases(burna, "last");
    expect(some.length).toBeGreaterThan(0);
    for (const r of some) expect(fold(r.title) + " " + fold(r.credit ?? "")).toContain("last");
  });

  it("no release title is empty or duplicated within an artist", () => {
    for (const a of comparableArtists) {
      const titles = a.releases.map((r) => r.title);
      expect(titles.every((t) => t.trim().length > 0), a.name).toBe(true);
      // A duplicated title would make two chips link to one release — the
      // picker resolves by title, so this must hold.
      const dupes = titles.filter((t, i) => titles.indexOf(t) !== i);
      expect(dupes, `${a.name} has duplicate titles: ${dupes.join(", ")}`).toEqual([]);
    }
  });
});
