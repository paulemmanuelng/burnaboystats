import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SongPage from "../app/music/[song]/page";
import AlbumPage from "../app/music/albums/[album]/page";
import { songSlugs } from "../app/data/songs";
import { albumPageSlugs } from "../app/data/albumPages";
import songStyles from "../app/music/[song]/song.module.css";

/**
 * Design review MU-07, 8 Oct 2026: "By the numbers" printed the best peak
 * twice where a curated card already named the chart it was set on —
 * /music/wgft: "No. 16 · best chart peak worldwide" AND "No. 16 · US
 * Billboard Hot 100 — Burna Boy's highest-ever Hot 100 peak";
 * /music/albums/i-told-them: "No. 1 · best album-chart peak worldwide" AND
 * "No. 1 · UK Official Albums Chart…". The derived card now stands down
 * whenever a curated one carries its figure; this reads every page's grid.
 */
const AUTO = /^best (album-)?chart peak worldwide$/;

function cards(html: string) {
  const host = document.createElement("div");
  host.innerHTML = html;
  const grid = host.querySelector(`.${songStyles.numGrid}`);
  if (!grid) return [];
  return [...grid.children].map((c) => ({
    v: c.querySelector(`.${songStyles.numValue}`)?.textContent?.trim() ?? "",
    l: c.querySelector(`.${songStyles.numLabel}`)?.textContent?.trim() ?? "",
  }));
}

const PAGES: [string, () => Promise<React.ReactElement>][] = [
  ...songSlugs.map((s) => [`/music/${s}`, () => SongPage({ params: Promise.resolve({ song: s }) })] as [string, () => Promise<React.ReactElement>]),
  ...albumPageSlugs.map((s) => [`/music/albums/${s}`, () => AlbumPage({ params: Promise.resolve({ album: s }) })] as [string, () => Promise<React.ReactElement>]),
];

describe("song and album 'By the numbers': the best peak is printed once", () => {
  it("covers every song and album page", () => {
    expect(PAGES.length).toBeGreaterThanOrEqual(20);
  });

  it.each(PAGES)("%s", async (_path, page) => {
    const grid = cards(renderToStaticMarkup(await page()));
    const auto = grid.find((c) => AUTO.test(c.l));
    if (auto) {
      const twins = grid.filter((c) => c !== auto && c.v === auto.v).map((c) => `${c.v} · ${c.l}`);
      expect(twins, `the derived "${auto.v}" card repeats a curated one`).toEqual([]);
    }
  });

  it.each([
    ["/music/wgft", "No. 16", /US Billboard Hot 100/],
    ["/music/albums/i-told-them", "No. 1", /UK Official Albums Chart/],
  ])("%s keeps the curated card that names the chart", async (path, value, label) => {
    const [, page] = PAGES.find(([p]) => p === path)!;
    const grid = cards(renderToStaticMarkup(await page()));
    expect(grid.filter((c) => c.v === value).map((c) => c.l)).toEqual([expect.stringMatching(label)]);
  });
});
