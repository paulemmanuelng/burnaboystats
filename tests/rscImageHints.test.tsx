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

import TodaysNumber from "../app/components/TodaysNumber";
import MobileHome from "../app/components/MobileHome";
import MusicPage from "../app/music/page";
import SongPage from "../app/music/[song]/page";
import songStyles from "../app/music/[song]/song.module.css";
import { songSlugs, songPageCount } from "../app/data/songs";

/**
 * No eager cover on "/", /music or a song page's picker becomes a preload hint
 * in the page's RSC payload.
 *
 * React's server renderer turns every eager <img> it renders into a preload
 * hint (`:HL[...,"image"]`) unless the image is lazy, fetchPriority="low", or
 * inside a <picture> or <noscript>. The hint travels in the RSC payload, and a
 * payload is what <Link> prefetches: on 24 Sep 2026 every visit to /faq
 * downloaded the Dai Dai cover and the No Sign of Weakness cover, neither of
 * which /faq shows, and Chrome logged both as "preloaded but not used".
 *
 * Each cover now sits in <picture style="display: contents">, the pattern the
 * site already uses for gated images. It stays eager on its own page and its
 * box does not change.
 */

/** The same test React applies (getChildFormatContext, case "img"). */
function hinted(root: ParentNode): Element[] {
  return [...root.querySelectorAll("img")].filter((img) => {
    if (img.getAttribute("loading") === "lazy") return false;
    if (img.getAttribute("fetchpriority") === "low") return false;
    const src = img.getAttribute("src") ?? "";
    const srcSet = img.getAttribute("srcset") ?? "";
    if (!src && !srcSet) return false;
    if (/^data:/i.test(src) && (!srcSet || /^data:/i.test(srcSet))) return false;
    return !img.closest("picture, noscript");
  });
}

function parse(html: string): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = html;
  return host;
}

const DAI_DAI_COVER = "ab67616d00001e0203cadf1b3fe324c1dc710ed4";
const LATEST_ALBUM = "d00c3ad1a774c0e171939239";

describe("eager covers stay out of the RSC payload's preload hints", () => {
  it("the rule catches the markup that shipped", () => {
    // Served by burnaboystats.com on 24 Sep 2026, before the fix.
    const shipped = parse(
      '<a class="todaysNumber-module__z8E5Na__cover" href="/dai-dai"><img src="https://i.scdn.co/image/ab67616d00001e0203cadf1b3fe324c1dc710ed4" alt="" width="104" height="104"/></a>' +
        '<a class="mobileHome-module__1cyKeW__cover" href="/dai-dai"><img src="https://i.scdn.co/image/ab67616d00001e0203cadf1b3fe324c1dc710ed4" alt="" width="88" height="88"/></a>' +
        '<img class="music-module__d-PZSa__latestCover" src="https://i.scdn.co/image/ab67616d0000b273d00c3ad1a774c0e171939239" srcSet="https://i.scdn.co/image/ab67616d00004851d00c3ad1a774c0e171939239 64w, https://i.scdn.co/image/ab67616d00001e02d00c3ad1a774c0e171939239 300w, https://i.scdn.co/image/ab67616d0000b273d00c3ad1a774c0e171939239 640w" sizes="160px" alt="No Sign of Weakness album cover" width="160" height="160"/>'
    );
    expect(hinted(shipped)).toHaveLength(3);
  });

  it("the home page's Dai Dai cover, both layouts", () => {
    for (const [name, html] of [
      ["TodaysNumber", renderToStaticMarkup(<TodaysNumber />)],
      ["MobileHome", renderToStaticMarkup(<MobileHome />)],
    ] as const) {
      const root = parse(html);
      const cover = [...root.querySelectorAll("img")].find((i) => i.getAttribute("src")?.includes(DAI_DAI_COVER));
      expect(cover, `${name} renders the Dai Dai cover`).toBeTruthy();
      expect(cover!.getAttribute("loading"), `${name}: still eager`).toBeNull();
      expect(hinted(root).map((i) => i.getAttribute("src")), name).not.toContainEqual(expect.stringContaining(DAI_DAI_COVER));
      expect((cover!.parentElement as HTMLElement).style.display, `${name}: the wrapper takes no box`).toBe("contents");
    }
  });

  it("/music's latest-album cover on desktop", () => {
    const root = parse(renderToStaticMarkup(<MusicPage />));
    const desktop = [...root.querySelectorAll("img")].filter(
      (i) => i.getAttribute("sizes") === "160px" && i.getAttribute("src")?.includes(LATEST_ALBUM)
    );
    expect(desktop).toHaveLength(1);
    expect(desktop[0].getAttribute("loading")).toBeNull();
    expect(hinted(root)).not.toContain(desktop[0]);
    expect((desktop[0].parentElement as HTMLElement).style.display).toBe("contents");
  });

  it("the rule catches the song-page picker chip that shipped", () => {
    // Served by burnaboystats.com/music/last-last on 26 Sep 2026, before the
    // fix: one of fifteen such chips, each a <link rel="preload" as="image">.
    const shipped = parse(
      '<a class="song-module__JUBKta__pick" href="/dai-dai"><img class="song-module__JUBKta__pickCover" src="https://i.scdn.co/image/ab67616d0000485103cadf1b3fe324c1dc710ed4" alt="" width="30" height="30"/>Dai Dai<span class="song-module__JUBKta__pickYear">2026</span></a>'
    );
    expect(hinted(shipped)).toHaveLength(1);
  });

  it("every song page's picker covers stay eager and out of the hints", async () => {
    for (const slug of songSlugs) {
      const root = parse(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: slug }) })));
      const chips = [...root.querySelectorAll("img")].filter((i) => i.classList.contains(songStyles.pickCover));
      // Dai Dai's chip plus one per song page — the label's own count.
      expect(chips, slug).toHaveLength(songPageCount);
      for (const chip of chips) {
        expect(chip.getAttribute("loading"), `${slug}: still eager`).toBeNull();
        expect((chip.parentElement as HTMLElement).style.display, `${slug}: the wrapper takes no box`).toBe("contents");
      }
      const hints = hinted(root);
      expect(hints.filter((i) => chips.includes(i)), slug).toEqual([]);
      // The hero's cover and its backdrop are the page's own images and keep
      // their hints; nothing else on a song page asks for one.
      expect(hints.map((i) => i.getAttribute("class")), slug).toHaveLength(2);
    }
  });
});
