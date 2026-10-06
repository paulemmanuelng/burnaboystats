import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
  redirect: () => {
    throw new Error("redirect()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SongPage from "../../app/music/[song]/page";
import AlbumPage from "../../app/music/albums/[album]/page";
import CountryPage from "../../app/compare/in/[country]/page";
import PairPage from "../../app/compare/[pair]/page";
import songStyles from "../../app/music/[song]/song.module.css";
import { songSlugs } from "../../app/data/songs";
import { albumPageSlugs } from "../../app/data/albumPages";
import { certCountryCodes, countrySlug } from "../../app/lib/certCountry";
import { allPairs, pairSlug } from "../../app/lib/comparePairs";

/**
 * V-global-11, the full-site debug of 5 Oct 2026. A prefetch downloaded images
 * for pages the reader never opened. React's server renderer turns every eager
 * <img> a Server Component renders into a preload hint (`:HL[…,"image"]`)
 * unless it is lazy, fetchPriority="low", or inside a <picture> or <noscript>
 * (getChildFormatContext, case "img"); the hint rides in the route's RSC
 * payload, and <Link> prefetches that payload, so the browser fetched the
 * image the moment a link to the page scrolled into view.
 *
 * Read live in headless Chrome with the cache off: scrolling /updates at 390
 * fetched 23 images (751 KB) that appear nowhere on /updates — the faces and
 * covers of /compare/in/poland, two album pages' backdrops and 640px covers,
 * two song pages' 640px covers. /compare at 1024 fetched 20 avatars (156 KB)
 * for the pairs it links, and /music/darko at 390 fetched Like to Party's
 * 640px cover (86 KB). Then the prefetch payloads of every page template in
 * the sitemap were read (every song and album page, a sample of the boards and
 * pairs, every other page): only these four templates carried an image hint —
 * a board 21–30, a pair 2, an album 2, a song 1.
 *
 * Each of those images now sits in <picture style="display: contents">, the
 * site's pattern for this (tests/rscImageHints.test.tsx). It stays eager, so
 * its own page loads it as before, and the wrapper takes no box.
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

/** Every <img> on the page is still eager, and its <picture> takes no box. */
function expectEagerAndBoxless(root: HTMLElement, where: string) {
  const imgs = [...root.querySelectorAll("img")];
  for (const img of imgs) {
    expect(img.getAttribute("loading"), `${where}: ${img.getAttribute("src")} still eager`).toBeNull();
    const pic = img.closest("picture") as HTMLElement | null;
    if (pic && !pic.querySelector("source")) expect(pic.style.display, `${where}: the wrapper takes no box`).toBe("contents");
  }
  return imgs;
}

const song = async (slug: string) => parse(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: slug }) })));
const album = async (slug: string) => parse(renderToStaticMarkup(await AlbumPage({ params: Promise.resolve({ album: slug }) })));
const board = async (country: string) => parse(renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country }) })));
const pair = async (slug: string) => parse(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));

const COUNTRIES = certCountryCodes().map((code) => countrySlug(code));
const PAIRS = allPairs().map(([a, b]) => pairSlug(a, b));

describe("a prefetch of a song, album, pair or country board fetches no image", () => {
  it("the rule catches what burnaboystats.com served on 6 Oct 2026", () => {
    // /compare/in/poland: a face in the ranking and a cover in Biggest plaques.
    const boardRow = parse(
      '<a class="compare-module__-ZWgpW__cbArtistLink" href="/afrobeats/rema"><img src="https://i.scdn.co/image/ab6761610000f178e3b85a0f16eaab80965c6ef3" srcSet="https://i.scdn.co/image/ab6761610000f178e3b85a0f16eaab80965c6ef3 160w, https://i.scdn.co/image/ab67616100005174e3b85a0f16eaab80965c6ef3 320w, https://i.scdn.co/image/ab6761610000e5ebe3b85a0f16eaab80965c6ef3 640w" sizes="36px" alt="" class="compare-module__-ZWgpW__cbFace" width="36" height="36" decoding="async"/></a>' +
        '<li class="compare-module__-ZWgpW__cbPlaqueRow"><img src="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/72x72bb.jpg" srcSet="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/36x36bb.jpg 1x, https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/ee/f1/dc/eef1dc82-f516-fd0f-581c-3f952a0e2243/22UMGIM92113.rgb.jpg/72x72bb.jpg 2x" sizes="36px" alt="" class="compare-module__-ZWgpW__cbArt" width="36" height="36" decoding="async"/></li>'
    );
    expect(hinted(boardRow)).toHaveLength(2);
    // /compare/burna-boy-vs-wizkid: the first slot's avatar.
    const slot = parse(
      '<div class="compare-module__-ZWgpW__slot" id="slot-a"><img src="https://i.scdn.co/image/ab6761610000f178b4e44d0f4e3e47af2cf06f3f" srcSet="https://i.scdn.co/image/ab6761610000f178b4e44d0f4e3e47af2cf06f3f 160w, https://i.scdn.co/image/ab67616100005174b4e44d0f4e3e47af2cf06f3f 320w, https://i.scdn.co/image/ab6761610000e5ebb4e44d0f4e3e47af2cf06f3f 640w" sizes="56px" alt="" class="compare-module__-ZWgpW__art compare-module__-ZWgpW__artRound" width="56" height="56" decoding="async"/></div>'
    );
    expect(hinted(slot)).toHaveLength(1);
    // /music/albums/life: backdrop and cover.
    const albumHero = parse(
      '<div class="song-module__JUBKta__heroCard"><img class="song-module__JUBKta__heroBackdrop" src="https://i.scdn.co/image/ab67616d00001e02e3497b75e40ffc5bfffce8cf" alt="" aria-hidden="true"/><div class="song-module__JUBKta__heroScrim"></div><div class="song-module__JUBKta__heroGrid"><img class="song-module__JUBKta__cover" src="https://i.scdn.co/image/ab67616d00001e02e3497b75e40ffc5bfffce8cf" srcSet="https://i.scdn.co/image/ab67616d00004851e3497b75e40ffc5bfffce8cf 64w, https://i.scdn.co/image/ab67616d00001e02e3497b75e40ffc5bfffce8cf 300w, https://i.scdn.co/image/ab67616d0000b273e3497b75e40ffc5bfffce8cf 640w" sizes="236px" alt="L.I.F.E cover" width="236" height="236"/></div></div>'
    );
    expect(hinted(albumHero)).toHaveLength(2);
    // /music/darko: the cover (its backdrop was already in a <picture>).
    const songHero = parse(
      '<div class="song-module__JUBKta__heroGrid"><img class="song-module__JUBKta__cover" src="https://i.scdn.co/image/ab67616d00001e0276cd360b4344922af3685208" srcSet="https://i.scdn.co/image/ab67616d0000485176cd360b4344922af3685208 64w, https://i.scdn.co/image/ab67616d00001e0276cd360b4344922af3685208 300w, https://i.scdn.co/image/ab67616d0000b27376cd360b4344922af3685208 640w" sizes="236px" alt="Darko cover" width="236" height="236"/></div>'
    );
    expect(hinted(songHero)).toHaveLength(1);
  });

  it.each(songSlugs)("song /music/%s: no image is hinted; the cover is still eager", async (slug) => {
    const root = await song(slug);
    expect(hinted(root).map((i) => i.getAttribute("src"))).toEqual([]);
    const cover = [...root.querySelectorAll("img")].find((i) => i.classList.contains(songStyles.cover));
    expect(cover, "the hero cover renders").toBeTruthy();
    expectEagerAndBoxless(root, slug);
  });

  it.each(albumPageSlugs)("album /music/albums/%s: no image is hinted; backdrop and cover are still eager", async (slug) => {
    const root = await album(slug);
    expect(hinted(root).map((i) => i.getAttribute("src"))).toEqual([]);
    const hero = [...root.querySelectorAll("img")].filter(
      (i) => i.classList.contains(songStyles.cover) || i.classList.contains(songStyles.heroBackdrop)
    );
    expect(hero, "backdrop and cover render").toHaveLength(2);
    expectEagerAndBoxless(root, slug);
  });

  it.each(COUNTRIES)("board /compare/in/%s: no face or cover is hinted, and all are still eager", async (country) => {
    const root = await board(country);
    expect(hinted(root).map((i) => i.getAttribute("src"))).toEqual([]);
    expect(expectEagerAndBoxless(root, country).length, "the board shows its faces").toBeGreaterThan(0);
  });

  it.each(PAIRS)("pair /compare/%s: neither avatar is hinted, and both are still eager", async (slug) => {
    const root = await pair(slug);
    expect(hinted(root).map((i) => i.getAttribute("src"))).toEqual([]);
    expect(expectEagerAndBoxless(root, slug).length, "both slots show an avatar").toBeGreaterThanOrEqual(2);
  });
});
