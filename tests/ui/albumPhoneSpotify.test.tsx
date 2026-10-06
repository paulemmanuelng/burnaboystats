import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

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

import AlbumPage from "../../app/music/albums/[album]/page";
import SongPage from "../../app/music/[song]/page";
import { albumPages } from "../../app/data/albumPages";
import { albums } from "../../app/data/albums";
import { songs } from "../../app/data/songs";
import { sameTitle } from "../../app/lib/titleKey";
import { hasOwnActionBar } from "../../app/lib/mobileScreens";
import songStyles from "../../app/music/[song]/song.module.css";
import albumStyles from "../../app/music/albums/[album]/album.module.css";

/**
 * V-music-02 / V-global-16, the full-site debug of 5 Oct 2026.
 *
 * The album page is the song page's design at album scale and shares its
 * stylesheet, which hides the hero's "▶ Play on Spotify ↗" below 900px
 * (`.heroActions :global(.btn) { display: none }`) because a song page moves
 * that link into its sticky action bar. The album page never drew the bar.
 * Measured live in headless Chrome at 390 (dark and light): on all eight
 * album pages the only Spotify link was display:none, no action bar was in
 * the DOM, and — mobileScreens.ts counting every /music/ deep screen as
 * carrying its own bar — no tab bar either: the screen had no foot at all.
 * Desktop showed the button.
 *
 * jsdom does no layout, so "painted at a width" is worked out from the
 * stylesheets the page imports, the way the cascade will: bare single-class
 * rules and the one descendant rule that hides the hero button, in source
 * order, base first, then each `max-width` block the width falls in. Checked
 * live by grafting the bar onto the shipped pages (all eight at 390 dark and
 * light; 320, 768, 900, 901 and 1440): one Spotify link at every width, the
 * bar from 900 down and gone from 901, no overflow, every Tab stop clear of
 * the bar, and the last onward button 1px above it at the page's end — the
 * same as on a song page.
 */

type Rule = { max: number | null; selector: string; display: string };

/** Display declarations, top level and one `@media (max-width)` deep, comments stripped. */
function displayRules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, max: number | null) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) {
        const m = head.match(/max-width:\s*(\d+)px/);
        if (m && !/min-width/.test(head)) walk(body, Number(m[1]));
      } else {
        const display = body.match(/(?:^|;)\s*display\s*:\s*([^;!]+)/)?.[1]?.trim();
        if (display) for (const sel of head.split(",")) out.push({ max, selector: sel.trim(), display });
      }
      i = j;
    }
  };
  walk(src, null);
  return out;
}

const SHEETS = [
  { rules: displayRules(readFileSync(resolve(__dirname, "../../app/music/[song]/song.module.css"), "utf8")), map: songStyles },
  { rules: displayRules(readFileSync(resolve(__dirname, "../../app/music/albums/[album]/album.module.css"), "utf8")), map: albumStyles },
] as { rules: Rule[]; map: Record<string, string> }[];

/** A class selector for a scoped name (vitest's are `_name_hash`: nothing to escape). */
const dot = (cls: string) => {
  expect(cls).toMatch(/^[\w-]+$/);
  return `.${cls}`;
};

/** The scoped class a module's local `.name` compiles to. */
const scoped = (map: Record<string, string>, local: string) => map[local] ?? `\u0000${local}`;

/** Is `el` painted at `width`? Last applicable rule wins, base before media, source order within. */
function paintedAt(el: Element, width: number): boolean {
  for (let n: Element | null = el; n; n = n.parentElement) {
    if (n.hasAttribute("hidden")) return false;
    let display: string | null = null;
    for (const { rules, map } of SHEETS) {
      for (const r of rules) {
        if (r.max !== null && width > r.max) continue;
        const bare = r.selector.match(/^\.([A-Za-z][\w-]*)$/);
        if (bare && n.classList.contains(scoped(map, bare[1]))) display = r.display;
        // `.parent :global(.child)` — the hero's Spotify button.
        const desc = r.selector.match(/^\.([A-Za-z][\w-]*)\s+:global\(\.([A-Za-z][\w-]*)\)$/);
        if (desc && n.classList.contains(desc[2]) && n.parentElement?.closest(dot(scoped(map, desc[1])))) {
          display = r.display;
        }
      }
    }
    if (display === "none") return false;
  }
  return true;
}

function served(el: React.ReactElement): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  return host;
}

const spotifyLinks = (root: HTMLElement, href: string) =>
  [...root.querySelectorAll<HTMLAnchorElement>("a")].filter((a) => a.getAttribute("href") === href);

const ALBUMS = albumPages.map((p) => ({ slug: p.slug, spotify: albums.find((a) => sameTitle(a.title, p.title))?.spotify }));
const SONGS = songs.filter((s) => s.spotify);

describe("V-music-02: an album page on a phone has its Play on Spotify", () => {
  it("every album has a Spotify link to carry — the eight pages, all with one", () => {
    expect(ALBUMS.length).toBe(8);
    for (const a of ALBUMS) expect(a.spotify, a.slug).toMatch(/^https:\/\/open\.spotify\.com\/album\//);
  });

  // All eight: the bar is in the shared template and one album proves nothing
  // about the other seven.
  it.each(ALBUMS)("/music/albums/$slug: one painted Spotify link at 390 and at 1440", async ({ slug, spotify }) => {
    const page = served(await AlbumPage({ params: Promise.resolve({ album: slug }) }));
    const links = spotifyLinks(page, spotify!);
    const phone = links.filter((a) => paintedAt(a, 390));
    const desk = links.filter((a) => paintedAt(a, 1440));
    expect(phone.length, `${slug} at 390`).toBe(1);
    expect(desk.length, `${slug} at 1440`).toBe(1);
    // The phone's is the action bar's, as on a song page; the desktop keeps
    // the hero button, unchanged.
    expect(phone[0].closest(dot(songStyles.mobileActionBar))).not.toBeNull();
    expect(phone[0].className).toBe(songStyles.mobilePrimary);
    expect(desk[0].closest(dot(songStyles.heroActions))).not.toBeNull();
    expect(phone[0].getAttribute("target")).toBe("_blank");
    expect(phone[0].getAttribute("rel")).toBe("noopener noreferrer");
  });

  // V-global-16: the tab bar stands down on every /music/ deep screen because
  // that screen carries its own foot. The album page now does.
  it.each(ALBUMS)("/music/albums/$slug: the tab bar stands down and the page's own bar takes the foot", async ({ slug }) => {
    expect(hasOwnActionBar(`/music/albums/${slug}`)).toBe(true);
    const page = served(await AlbumPage({ params: Promise.resolve({ album: slug }) }));
    const bars = [...page.querySelectorAll(dot(songStyles.mobileActionBar))];
    expect(bars.length).toBe(1);
    expect(paintedAt(bars[0], 390)).toBe(true);
    expect(paintedAt(bars[0], 900)).toBe(true);
    expect(paintedAt(bars[0], 901)).toBe(false);
  });

  it("the album bar is the song bar: same classes, same share link, same order", async () => {
    const album = served(await AlbumPage({ params: Promise.resolve({ album: ALBUMS[0].slug }) }));
    const song = served(await SongPage({ params: Promise.resolve({ song: SONGS[0].slug }) }));
    const shape = (root: HTMLElement) => {
      const bar = root.querySelector(dot(songStyles.mobileActionBar))!;
      return [...bar.children].map((c) => `${c.tagName}.${c.className}|${c.getAttribute("aria-label") ?? c.textContent}|${c.tagName === "A" && c.getAttribute("href")!.startsWith("/") ? c.getAttribute("href") : ""}`);
    };
    expect(shape(album)).toEqual(shape(song));
  });

  // Control: the song pages, whose bar this is, pass the same check.
  it.each(SONGS.map((s) => ({ slug: s.slug, spotify: s.spotify! })))(
    "control — /music/$slug: one painted Spotify link at 390 and at 1440",
    async ({ slug, spotify }) => {
      const page = served(await SongPage({ params: Promise.resolve({ song: slug }) }));
      const links = spotifyLinks(page, spotify);
      expect(links.filter((a) => paintedAt(a, 390)).length).toBe(1);
      expect(links.filter((a) => paintedAt(a, 1440)).length).toBe(1);
    }
  );

  it("negative control: the shipped album page (the same render without the bar) paints no Spotify link at 390", async () => {
    const { slug, spotify } = ALBUMS.find((a) => a.slug === "love-damini")!;
    const page = served(await AlbumPage({ params: Promise.resolve({ album: slug }) }));
    page.querySelectorAll(dot(songStyles.mobileActionBar)).forEach((b) => b.remove());
    const links = spotifyLinks(page, spotify!);
    expect(links.length).toBe(1); // the hero's "▶ Play on Spotify ↗"
    expect(paintedAt(links[0], 390)).toBe(false);
    expect(paintedAt(links[0], 1440)).toBe(true);
  });
});

describe("V-music-02: focus clears the song and album pages' action bar", () => {
  const g = readFileSync(resolve(__dirname, "../../app/globals.css"), "utf8");
  const phoneRule = (sel: string) => {
    const at = g.indexOf(`${sel} {`);
    if (at < 0) return null;
    // Inside the ≤900 block: the nearest @media before it is the phone one.
    const media = g.lastIndexOf("@media", at);
    expect(g.slice(media, g.indexOf("{", media))).toMatch(/max-width:\s*900px/);
    return g.slice(at, g.indexOf("}", at));
  };

  it("the bar's compiled class is matched, and pads the scroll the same as every other action bar", () => {
    const mine = phoneRule('html:has([class*="__mobileActionBar"])');
    const theirs = phoneRule('html:has([class*="__actionBar"])');
    expect(mine).not.toBeNull();
    const pad = (r: string | null) => r?.match(/scroll-padding-bottom:\s*([^;]+);/)?.[1];
    expect(pad(mine)).toBe(pad(theirs));
    expect(pad(mine)).toBe("calc(80px + env(safe-area-inset-bottom, 22px))");
    expect(mine).not.toMatch(/scroll-padding-top/);
    // Before the tab bar's and /compare's, as the other action bars' is.
    expect(g.indexOf('html:has([class*="__mobileActionBar"])')).toBeLessThan(g.indexOf("html:has(.mobileTabBarPresent)"));
  });

  it("negative control: the existing match is case-sensitive and misses this bar — a shipped class name", () => {
    // As served on /music/last-last (live, 6 Oct 2026). Next names a module
    // class <file>-module__<hash>__<name>.
    const live = "song-module__JUBKta__mobileActionBar";
    expect(live.includes("__actionBar")).toBe(false);
    expect(live.includes("__mobileActionBar")).toBe(true);
  });
});
