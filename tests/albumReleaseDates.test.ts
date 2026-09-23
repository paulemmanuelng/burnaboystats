import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { albums, releaseDateLabel } from "../app/data/albums";
import { albumPages } from "../app/data/albumPages";
import { sameTitle } from "../app/lib/titleKey";

// Until 23 Sep 2026 every album page printed the year alone — "Studio album ·
// 2019 · Atlantic…" — and its MusicAlbum JSON-LD said datePublished "2019".
// Each studio album now carries the day its standard edition came out, read
// off at least two sources of different kinds.
describe("album release dates", () => {
  const withPages = albumPages.map((p) => ({ page: p, record: albums.find((a) => sameTitle(a.title, p.title)) }));

  it("every album with a page carries its full release date", () => {
    for (const { page, record } of withPages) {
      expect(record, `${page.slug} has no albums.ts record`).toBeDefined();
      expect(record!.released, `${page.slug} prints only a year`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("each date is a real day, and agrees with the year printed everywhere else", () => {
    for (const a of albums.filter((x) => x.released)) {
      // Date() rolls 2019-02-30 over to 2 March; a real day survives the round trip.
      expect(new Date(`${a.released}T12:00:00Z`).toISOString().slice(0, 10), a.title).toBe(a.released);
      expect(a.released!.slice(0, 4), `${a.title}: year ${a.year} vs released ${a.released}`).toBe(String(a.year));
    }
  });

  it("prints in the site's date style, whatever the viewer's timezone", () => {
    expect(releaseDateLabel("2019-07-26")).toBe("26 July 2019");
    expect(releaseDateLabel("2013-01-01")).toBe("1 January 2013");
  });

  it("the album page prints the date, and gives it to search engines", () => {
    const src = readFileSync(join(process.cwd(), "app/music/albums/[album]/page.tsx"), "utf8");
    expect(src).toContain("releaseDateLabel(record.released)");
    expect(src).toMatch(/<time dateTime=\{record\.released\}>/);
    expect(src).toContain("datePublished: record.released");
  });
});
