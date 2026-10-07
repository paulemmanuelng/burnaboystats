import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
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
import songStyles from "../../app/music/[song]/song.module.css";
import { songs } from "../../app/data/songs";
import { albumPageByTitle } from "../../app/data/albumPages";

/**
 * V-music-09 (full-site debug, 5 Oct 2026).
 *
 * A song page's hero kicker reads "LOVE, DAMINI · 2022", and the album name is
 * a link to the album page, the only one from a song to its album. Read live
 * in headless Chrome at 1440 and 390, dark and light, 7 Oct, on Last Last, Ye
 * and 23 (the eight songs with an album page share the one rule): the link
 * took the kicker's own colour (rgb(155,155,163) dark, rgb(95,88,79) light),
 * no underline, and no change on hover, so nothing told it from the "· 2022"
 * beside it, while the page's other inline links were gold and underlined.
 * The site's prose-link underline (globals.css) only reaches links inside a
 * <p>, and the kicker is a <div>. Grafted onto the live pages, the rule below
 * underlined the album name in its own colour at both widths and themes and
 * turned it gold on hover (rgb(255,182,39) dark, rgb(148,94,0) light).
 *
 * jsdom does no layout or cascade, so this reads what the module stylesheet
 * gives a link in the kicker (no width query may undo it), and that each song
 * with an album page still renders its album name as that link. The same read
 * runs on the shipped stylesheet (origin/main, quoted), which fails it.
 */

const CSS = readFileSync("app/music/[song]/song.module.css", "utf8");

type Rule = { selector: string; decls: Record<string, string>; query?: string };

/** Top-level rules and @media blocks (any query), in source order. */
const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const rules: Rule[] = [];
  const block = (body: string, query?: string) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
      for (const selector of m[1].split(",")) rules.push({ selector: selector.trim(), decls, query });
    }
  };
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) block(m[3]);
    else block(m[2], m[1].trim());
  }
  return rules;
};

/** What every unconditional rule naming `selector` leaves on it. */
const base = (rules: Rule[], selector: string) =>
  Object.assign({}, ...rules.filter((r) => r.selector === selector && !r.query).map((r) => r.decls)) as Record<string, string>;

/** Marked as a link without a second colour: an underline in its own ink. */
const underlined = (d: Record<string, string>) =>
  (d["text-decoration-line"] ?? d["text-decoration"] ?? "").split(/\s+/).includes("underline") &&
  d["text-decoration-thickness"] === "1px" &&
  /^\d+px$/.test(d["text-underline-offset"] ?? "") &&
  d["color"] === undefined;

const withAlbumPage = songs.filter((s) => albumPageByTitle(s.album));

const kickerOf = async (slug: string) => {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: slug }) }));
  return host.querySelector(`.${songStyles.kicker}`);
};

describe("V-music-09: the hero's album link looks like a link", () => {
  const rules = parse(CSS);

  it("a link in the kicker is underlined in its own colour, at every width", () => {
    expect(underlined(base(rules, ".kicker a"))).toBe(true);
    for (const r of rules.filter((r) => r.selector === ".kicker a" && r.query)) {
      for (const prop of ["text-decoration", "text-decoration-line", "color"]) {
        expect(r.decls[prop], `${r.query} sets ${prop}`).toBeUndefined();
      }
    }
  });

  it("it turns gold on hover, as the crumbs' links do", () => {
    expect(base(rules, ".kicker a:hover")["color"]).toBe("var(--gold)");
    expect(base(rules, ".crumbs a:hover")["color"]).toBe("var(--gold)");
  });

  it("every song with an album page renders its album name as a link in the kicker, outside any <p>", async () => {
    // The eight pages the debug read: none may fall out of the set.
    for (const slug of ["last-last", "ye", "on-the-low", "city-boys", "23", "tatata", "rizzla", "like-to-party"]) {
      expect(withAlbumPage.map((s) => s.slug), slug).toContain(slug);
    }
    for (const song of withAlbumPage) {
      const kicker = await kickerOf(song.slug);
      expect(kicker, song.slug).not.toBeNull();
      // Not inside a <p>, so globals.css's prose underline never reaches it:
      // the module rule above is what marks it.
      expect(kicker!.closest("p"), song.slug).toBeNull();
      const a = kicker!.querySelector("a");
      expect(a?.textContent, song.slug).toBe(song.album);
      expect(a?.getAttribute("href"), song.slug).toBe(`/music/albums/${albumPageByTitle(song.album)!.slug}`);
    }
  });

  it("negative control: the shipped stylesheet left the album link as plain kicker text", () => {
    // origin/main, app/music/[song]/song.module.css: the kicker's rule, and
    // no rule for a link inside it.
    const SHIPPED_CSS = `.kicker {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: var(--text-muted);
}
.crumbs a { color: var(--text-muted); }
.crumbs a:hover { color: var(--gold); }`;
    const shipped = parse(SHIPPED_CSS);
    expect(underlined(base(shipped, ".kicker a"))).toBe(false);
    expect(base(shipped, ".kicker a:hover")["color"]).toBeUndefined();
  });
});
