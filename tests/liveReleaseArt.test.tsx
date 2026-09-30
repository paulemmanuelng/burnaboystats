import { readFileSync } from "node:fs";
import { join } from "node:path";
import { liveCharts } from "../app/data/liveCharts";
import { LIVE_BOARDS } from "../app/data/liveBoards";
import { coverFor, monogramFor } from "../app/lib/covers";
import { isEp } from "../app/data/albums";
import { releaseArt } from "../app/lib/liveReleaseArt";

/**
 * Live-chart art, resolved on the server (speed pass, 30 Sep 2026).
 *
 * MobileLiveCharts and LiveReleaseBlock looked each row's cover, monogram and
 * EP flag up in the browser, which put songs.ts, albums.ts and covers.ts in
 * the /live-charts route chunk: 32 KB of JS, ~9.5 KB brotli, prefetched from
 * every page's nav and tab bar. The pages now resolve the art at build time
 * (lib/liveReleaseArt.ts) and pass it as props. These tests hold the answers
 * to what the browser computed, and keep the catalogue out of the two client
 * components.
 */
const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");

describe("the server resolves the same art the browser did", () => {
  it("every Burna Boy release: cover, letter and EP flag", () => {
    expect(liveCharts.length).toBeGreaterThan(20);
    let covered = 0;
    for (const r of liveCharts) {
      const art = releaseArt(r);
      // The browser drew r.cover ?? coverFor(title, kind); his rows carry no cover.
      expect(r.cover, r.title).toBeUndefined();
      expect(art.cover, r.title).toBe(coverFor(r.title, r.kind));
      expect(art.letter, r.title).toBe(monogramFor(r.title));
      expect(art.ep, r.title).toBe(r.kind === "album" && isEp(r.title));
      if (art.cover) covered++;
    }
    // Most of his rows have art; the check above is not comparing undefineds.
    expect(covered).toBeGreaterThan(liveCharts.length / 2);
  });

  it("every board artist's release: its shipped cover first, then the catalogue's", () => {
    expect(LIVE_BOARDS.length).toBeGreaterThan(0);
    let shipped = 0;
    for (const board of LIVE_BOARDS) {
      for (const r of board.releases) {
        const art = releaseArt(r);
        expect(art.cover, `${board.slug}: ${r.title}`).toBe(r.cover ?? coverFor(r.title, r.kind));
        expect(art.letter).toBe(monogramFor(r.title));
        expect(art.ep).toBe(r.kind === "album" && isEp(r.title));
        if (r.cover) shipped++;
      }
    }
    expect(shipped).toBeGreaterThan(0);
  });

  it("a release with no art gets a monogram and no cover key", () => {
    const art = releaseArt({ title: "zz no such release", kind: "song" });
    expect(art).toEqual({ letter: "Z", ep: false });
    expect("cover" in art).toBe(false);
  });
});

describe("the live-chart client components carry no catalogue", () => {
  const CLIENT = ["app/components/MobileLiveCharts.tsx", "app/components/LiveReleaseBlock.tsx"];
  /** Whether a source imports a runtime value from covers, albums, songs or the
   *  server helper (which imports the first two). */
  const importsCatalogue = (src: string) =>
    (src.match(/^import\s[^;]*?from\s+["'][^"']+["'];?/gm) ?? []).some(
      (st) => /["'][^"']*(lib\/covers|data\/albums|data\/songs|lib\/liveReleaseArt)["']/.test(st) && !/^import\s+type\s/.test(st)
    );

  it("neither imports lib/covers or data/albums", () => {
    for (const f of CLIENT) {
      const src = read(f);
      expect(src.startsWith('"use client"'), `${f} is a client component`).toBe(true);
      expect(importsCatalogue(src), f).toBe(false);
    }
  });

  it("negative control: the line both shipped fails", () => {
    expect(importsCatalogue(`import { coverFor, monogramFor } from "../lib/covers";`)).toBe(true);
    expect(importsCatalogue(`import { isEp } from "../data/albums";`)).toBe(true);
  });
});
