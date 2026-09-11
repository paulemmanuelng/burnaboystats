import { describe, expect, it } from "vitest";
import { comparableArtists } from "../app/lib/certUnits";
import { PICKER_FOLD, fold, pickerArtists, pickerReleases, plaqueCount } from "../app/lib/comparePicker";

describe("the compare picker misses nothing", () => {
  it("offers every artist on the board", () => {
    const all = pickerArtists();
    expect(all.map((a) => a.slug).sort()).toEqual(comparableArtists.map((a) => a.slug).sort());
    expect(all).toHaveLength(16);
  });

  it("from any chosen side, offers every OTHER artist and never the same one", () => {
    for (const chosen of comparableArtists) {
      const offered = pickerArtists(chosen.slug).map((a) => a.slug);
      expect(offered, `${chosen.name} offered themselves`).not.toContain(chosen.slug);
      expect(offered, `${chosen.name} is missing someone`).toHaveLength(15);
      for (const other of comparableArtists)
        if (other.slug !== chosen.slug) expect(offered, `${other.name} unreachable from ${chosen.name}`).toContain(other.slug);
    }
  });

  it("lists artists by plaques held, most first, and the fold is eight", () => {
    const offered = pickerArtists();
    for (let i = 1; i < offered.length; i++) {
      const [prev, cur] = [offered[i - 1], offered[i]];
      expect(plaqueCount(prev), `${cur.name} (${plaqueCount(cur)}) outranks ${prev.name} (${plaqueCount(prev)})`)
        .toBeGreaterThanOrEqual(plaqueCount(cur));
      if (plaqueCount(prev) === plaqueCount(cur)) expect(prev.name.localeCompare(cur.name)).toBeLessThan(0);
    }
    // The count is the board's own: every plaque on every release, features in.
    const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
    expect(plaqueCount(burna)).toBe(burna.releases.flatMap((r) => r.certs).length);
    expect(offered[0].slug).toBe("burna-boy");
    expect(PICKER_FOLD).toBe(8);
  });

  it("lists releases by plaques held, most first — with or without a query", () => {
    for (const a of comparableArtists)
      for (const q of ["", "a", "the"]) {
        const offered = pickerReleases(a, q);
        for (let i = 1; i < offered.length; i++) {
          const [prev, cur] = [offered[i - 1], offered[i]];
          expect(prev.certs.length, `${a.name} “${q}”: ${cur.title} outranks ${prev.title}`).toBeGreaterThanOrEqual(cur.certs.length);
          if (prev.certs.length === cur.certs.length) expect(prev.title.localeCompare(cur.title)).toBeLessThan(0);
        }
      }
    const burna = comparableArtists.find((a) => a.slug === "burna-boy")!;
    const top = Math.max(...burna.releases.map((r) => r.certs.length));
    expect(pickerReleases(burna)[0].certs.length).toBe(top);
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

  it("filters by format on request, and the two formats together are the whole catalogue", () => {
    for (const a of comparableArtists) {
      const singles = pickerReleases(a, "", "single");
      const albums = pickerReleases(a, "", "album");
      expect(singles.every((r) => r.format === "single"), a.name).toBe(true);
      expect(albums.every((r) => r.format === "album"), a.name).toBe(true);
      expect([...singles, ...albums].map((r) => r.title).sort(), a.name).toEqual(a.releases.map((r) => r.title).sort());
    }
    // Eight of the sixteen hold no certified album; the page says so rather
    // than showing an empty picker (tests/comparePage.test.tsx).
    const without = comparableArtists.filter((a) => pickerReleases(a, "", "album").length === 0);
    expect(without.length).toBeGreaterThan(0);
    expect(without.length).toBeLessThan(comparableArtists.length);
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
