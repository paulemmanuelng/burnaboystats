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
import { songs } from "../../app/data/songs";
import songStyles from "../../app/music/[song]/song.module.css";

/**
 * V-music-11 (full-site debug, 5 Oct 2026).
 *
 * The onward row's gold pill on /music/albums/i-told-them reads "Next album:
 * No Sign of Weakness →". At 390 that is wider than the pill's 300px of room,
 * so it broke after "WEAKNESS" and left the arrow alone on a second line,
 * left-aligned and squeezed into the global .btn's fixed 46px (two 20.8px
 * lines). The song page draws the same pill ("Next song: … →") from the same
 * stylesheet, and its longer titles wrap the same way at 320.
 *
 * Read live in headless Chrome, 7 Oct, all 8 album and 14 song pages at 320,
 * 360, 375, 390, 414, 768, 900, 901, 1024 and 1440 (dark; light spot-checked):
 * 13 pills wrapped, all in the 46px, 11 with the arrow alone. With this rule
 * and the no-break space grafted on, the same 13 wrapped as two centred lines
 * with the arrow on the last word's line in a 63.6px pill, and none of the
 * other 207 page-widths moved a pixel (every one-line pill stayed 46px).
 *
 * jsdom does no layout, so this pins the two halves of the fix: the arrow is
 * joined to the title by a no-break space (no break opportunity before it),
 * and the shared stylesheet lets an onward pill that does wrap centre its
 * lines and grow, with no width query undoing it.
 */

const CSS = readFileSync(resolve(__dirname, "../../app/music/[song]/song.module.css"), "utf8");

type Rule = { selector: string; decls: Record<string, string>; query?: string };

/** Top-level rules and @media blocks (any query), in source order, comments stripped. */
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

const ONWARD_BTN = ".onward :global(.btn)";

/** What the module gives an onward pill, base rules only, and any query that touches it. */
const onwardBtn = (rules: Rule[]) => {
  const own = rules.filter((r) => r.selector === ONWARD_BTN);
  const base = Object.assign({}, ...own.filter((r) => !r.query).map((r) => r.decls)) as Record<string, string>;
  return { base, overrides: own.filter((r) => r.query) };
};

/** A wrapped label is centred and the pill grows to hold it, one line staying 46px. */
const growsAndCentres = (d: Record<string, string>) =>
  d["height"] === "auto" &&
  d["min-height"] === "46px" &&
  d["text-align"] === "center" &&
  parseFloat(d["padding-block"] ?? "0") > 0 &&
  // 13px mono at the body's 1.6 line height, both paddings, a 1px border each
  // side: a one-line pill must not grow past the 46px every other pill keeps.
  13 * 1.6 + 2 * parseFloat(d["padding-block"] ?? "0") + 2 <= 46;

/** The text that can break before the arrow: the character in front of it. */
const beforeArrow = (label: string) => {
  const i = label.lastIndexOf("→");
  expect(i, label).toBeGreaterThan(0);
  return label[i - 1];
};

function served(el: React.ReactElement): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  return host;
}

const nextLink = (root: HTMLElement, prefix: string) =>
  [...root.querySelectorAll<HTMLAnchorElement>(`.${songStyles.onward} a.btn`)].find((a) =>
    a.textContent!.startsWith(prefix)
  );

describe("V-music-11: an onward pill keeps its arrow with the last word", () => {
  const ALBUMS = albumPages.map((p) => p.slug);
  const SONGS = songs.map((s) => s.slug);

  it("the finding's page: i-told-them's pill reads its title and arrow unbroken", async () => {
    const page = served(await AlbumPage({ params: Promise.resolve({ album: "i-told-them" }) }));
    const a = nextLink(page, "Next album:")!;
    expect(a.getAttribute("href")).toBe("/music/albums/no-sign-of-weakness");
    expect(a.textContent).toBe("Next album: No Sign of Weakness →");
  });

  it.each(ALBUMS)("/music/albums/%s: no break opportunity before the arrow", async (slug) => {
    const page = served(await AlbumPage({ params: Promise.resolve({ album: slug }) }));
    const a = nextLink(page, "Next album:");
    if (!a) return; // a one-album catalogue would draw no "next"
    expect(beforeArrow(a.textContent!)).toBe(" ");
  });

  it.each(SONGS)("/music/%s: no break opportunity before the arrow", async (slug) => {
    const page = served(await SongPage({ params: Promise.resolve({ song: slug }) }));
    const a = nextLink(page, "Next song:")!;
    expect(a, slug).toBeDefined();
    expect(beforeArrow(a.textContent!)).toBe(" ");
  });

  it("the shared stylesheet centres a wrapped onward label and lets the pill grow", () => {
    expect(growsAndCentres(onwardBtn(parse(CSS)).base)).toBe(true);
  });

  it("no width query takes that back (the phone block included)", () => {
    for (const r of onwardBtn(parse(CSS)).overrides) {
      for (const prop of ["height", "min-height", "text-align", "padding-block", "padding"]) {
        expect(r.decls[prop], `${r.query} sets ${prop}`).toBeUndefined();
      }
    }
  });

  it("negative control: the shipped label and stylesheet broke before the arrow and held the pill to 46px", () => {
    // origin/main, app/music/albums/[album]/page.tsx: `Next album: {nextAlbum.title} →`
    expect(beforeArrow("Next album: No Sign of Weakness →")).toBe(" ");
    // origin/main, app/music/[song]/song.module.css: the onward row's only rule, verbatim.
    const SHIPPED = `.onward { display: flex; gap: 10px; flex-wrap: wrap; padding: 44px 40px 76px; }`;
    expect(growsAndCentres(onwardBtn(parse(SHIPPED)).base)).toBe(false);
  });
});
