import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
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

import CountryPage from "../../app/compare/in/[country]/page";
import styles from "../../app/compare/compare.module.css";

/**
 * V-compareIn-11, the full-site debug of 5 Oct 2026. Every /compare/in board
 * row starts with the artist's 36px round face. Davido's photo is a gold crown
 * on black, and the face had no edge of its own: read live in headless Chrome
 * on /compare/in/nigeria and /compare/in/united-states at 1440 and 390, 7 Oct,
 * the face computed `box-shadow: none`, `border: 0` and `outline: none`, so on
 * the dark page (rgb 10,10,11) only a small crown showed in the slot while
 * every other row showed a round face; in light mode it read as a black disc.
 *
 * With `box-shadow: 0 0 0 1px var(--line)` grafted onto the live page — the
 * hairline /dai-dai's round lineup photos already carry — the crown sits in a
 * visible circle at 1440 and 390 in the dark, light mode keeps a quiet edge,
 * and no row moved (a shadow takes no space). One table serves both layouts,
 * so the one rule covers the phone too.
 *
 * jsdom paints nothing, so this checks the two halves that make the ring
 * show: the face is an <img> (which is why the ring is outer — an inset
 * shadow paints under an image's picture), and the stylesheet gives it an
 * outer ring in a theme token that no width query takes away. The same
 * reads run on the shipped rule (origin/main, quoted), which fail them.
 */

type Rule = { selector: string; decls: Record<string, string>; query?: string };

/** Top-level rules and @media blocks, in source order, comments stripped. */
const parse = (css: string): Rule[] => {
  const clean = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const block = (body: string, query?: string) => {
    for (const m of body.matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      const decls: Record<string, string> = {};
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) decls[part.slice(0, i).trim()] = part.slice(i + 1).replace(/\s+/g, " ").trim();
      }
      for (const selector of m[1].split(",")) out.push({ selector: selector.trim(), decls, query });
    }
  };
  const top = /@media([^{]*)\{((?:[^{}]*\{[^{}]*\})*[^{}]*)\}|([^{}@]+\{[^{}]*\})/g;
  for (const m of clean.matchAll(top)) {
    if (m[3]) block(m[3]);
    else block(m[2], m[1].trim());
  }
  return out;
};

/** An outer (not inset) ring at least 1px wide, in a custom property, or null. */
const outerRing = (shadow: string | undefined) => {
  const m = /^0(?:px)? 0(?:px)? 0(?:px)? (\d+(?:\.\d+)?)px (var\(--[\w-]+\))$/.exec(shadow ?? "");
  return m && Number(m[1]) >= 1 ? { width: Number(m[1]), color: m[2] } : null;
};

/** What every rule naming the face, at any width, does to its edge. */
const faceEdge = (css: string) => {
  const own = parse(css).filter((r) => r.selector === ".cbFace");
  const base = Object.assign({}, ...own.filter((r) => !r.query).map((r) => r.decls)) as Record<string, string>;
  return { ring: outerRing(base["box-shadow"]), overrides: own.filter((r) => r.query) };
};

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
const GLOBALS = readFileSync("app/globals.css", "utf8");

const board = async (country: string) => {
  const r = document.createElement("div");
  r.innerHTML = renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country }) }));
  return r;
};

describe("V-compareIn-11: a board face keeps its edge in both themes", () => {
  it.each(["nigeria", "united-states"])("on %s, Davido's face is a photo in the face slot, like every row's", async (country) => {
    const root = await board(country);
    const links = [...root.querySelectorAll(`a.${styles.cbArtistLink}`)];
    expect(links.length).toBeGreaterThan(1);
    for (const a of links) {
      // A photo sits in a display: contents <picture>; an artist without one gets the empty disc.
      expect(a.querySelectorAll(`.${styles.cbFace}`), `${a.textContent}: one face`).toHaveLength(1);
    }
    const davido = links.find((a) => a.textContent?.trim() === "Davido");
    expect(davido, "Davido on the board").toBeTruthy();
    const face = davido!.querySelector(`.${styles.cbFace}`)!;
    // An <img>: an inset ring would paint under its picture, so the ring is outer.
    expect(face.tagName).toBe("IMG");
  });

  it("the stylesheet rings the face with an outer hairline in a theme token", () => {
    const { ring } = faceEdge(CSS);
    expect(ring, ".cbFace has no outer ring").not.toBeNull();
    expect(ring!.color).toBe("var(--line)");
    // The token flips with the theme, so the ring shows on paper and in the dark.
    expect(GLOBALS).toMatch(/--line:\s*light-dark\(/);
  });

  it("no width query takes the ring away (the phone reads the same table)", () => {
    const { overrides } = faceEdge(CSS);
    for (const r of overrides) {
      for (const prop of ["box-shadow", "outline", "border"]) {
        expect(r.decls[prop], `${r.query} sets ${prop}`).toBeUndefined();
      }
    }
  });

  it("negative control: the shipped rule left the face without an edge", () => {
    // origin/main, app/compare/compare.module.css, verbatim.
    const SHIPPED_CSS = `.cbFace {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  background: var(--bg-raised);
  flex: none;
  display: inline-block;
}`;
    expect(faceEdge(SHIPPED_CSS).ring).toBeNull();
    // An inset ring would not count either: it paints under the photo.
    expect(outerRing("inset 0 0 0 1px var(--line)")).toBeNull();
  });
});
