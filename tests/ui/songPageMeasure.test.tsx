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

import SongPage from "../../app/music/[song]/page";
import AlbumPage from "../../app/music/albums/[album]/page";
import { songSlugs } from "../../app/data/songs";
import { albumPageSlugs } from "../../app/data/albumPages";
import songStyles from "../../app/music/[song]/song.module.css";

/**
 * V-music-14 (full-site debug, 5 Oct 2026).
 *
 * Song and album pages ran edge to edge on a laptop. Read live in headless
 * Chrome at 1440x900, dark, 7 Oct: on /music/last-last and
 * /music/albums/life every block of the page (crumbs, picker, hero,
 * sections, onward buttons) had its content at 40-1400, while the header
 * bar's sits at 64-1376 and the footer's at 80-1360 — so the page ran past
 * the chrome on both sides. The design (Song.dc.html) puts every one of those blocks in a
 * centred 1240px measure with a 40px gutter, and song.module.css declared
 * that measure (.wrap) but no block ever used it.
 *
 * jsdom does no layout, so the edges are worked out from the stylesheets the
 * way the cascade will (bare class rules in source order, base first, then
 * each width query that applies; border-box, as globals.css sets): every
 * top-level block of all the song and album pages, rendered. The same reads
 * run on the shipped stylesheet (this one without the measure rule), which
 * fails them. Checked live by grafting the rule onto the shipped pages:
 * one edge at 140-1300 at 1440 and 380-1540 at 1920, inside the chrome, in
 * both themes; 1240, 1024, 901 and the 390 phone layout unchanged.
 */

type Rule = { selectors: string[]; decls: Record<string, string>; min: number | null; max: number | null };

/** Top-level rules and `@media` width blocks one deep, in source order; other at-rules are skipped. */
function parse(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, min: number | null, max: number | null) => {
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
        const lo = head.match(/min-width:\s*(\d+)px/);
        const hi = head.match(/max-width:\s*(\d+)px/);
        if ((lo || hi) && !/prefers|hover|pointer|height|print/.test(head)) {
          walk(body, lo ? Number(lo[1]) : null, hi ? Number(hi[1]) : null);
        }
      } else if (!head.startsWith("@")) {
        const decls: Record<string, string> = {};
        for (const part of body.split(";")) {
          const k = part.indexOf(":");
          if (k > 0) decls[part.slice(0, k).trim()] = part.slice(k + 1).trim();
        }
        out.push({ selectors: head.split(",").map((s) => s.trim()), decls, min, max });
      }
      i = j;
    }
  };
  walk(src, null, null);
  return out;
}

/** "a b c d" → the left and right of a padding or margin shorthand. */
function sides(v: string): [string, string] {
  const p = v.split(/\s+/);
  if (p.length === 1) return [p[0], p[0]];
  if (p.length === 2 || p.length === 3) return [p[1], p[1]];
  return [p[3], p[1]];
}

/** What every rule naming one of `classes` leaves on the element at `width`. */
function cascade(rules: Rule[], classes: string[], width: number) {
  const d: Record<string, string> = {};
  for (const r of rules) {
    if (r.min !== null && width < r.min) continue;
    if (r.max !== null && width > r.max) continue;
    if (!r.selectors.some((s) => classes.some((c) => s === `.${c}`))) continue;
    for (const [k, v] of Object.entries(r.decls)) {
      if (k === "padding" || k === "margin") [d[`${k}-left`], d[`${k}-right`]] = sides(v);
      else if (k === "padding-inline" || k === "margin-inline") {
        const p = v.split(/\s+/);
        const base = k.replace("-inline", "");
        [d[`${base}-left`], d[`${base}-right`]] = [p[0], p[1] ?? p[0]];
      } else d[k] = v;
    }
  }
  return d;
}

const px = (v: string | undefined) => (v === undefined || v === "0" ? 0 : Number(v.match(/^(-?[\d.]+)px$/)![1]));

/** Content-box left and right in a `width`-wide viewport (border-box, a block in the page's full width). */
function edges(d: Record<string, string>, width: number): [number, number] {
  const box = Math.min(width, d["max-width"] ? px(d["max-width"]) : Infinity);
  const left = d["margin-left"] === "auto" && d["margin-right"] === "auto" ? (width - box) / 2 : px(d["margin-left"]);
  return [left + px(d["padding-left"]), left + box - px(d["padding-right"])];
}

const SONG_CSS = readFileSync(resolve(__dirname, "../../app/music/[song]/song.module.css"), "utf8");
const GLOBALS = parse(readFileSync(resolve(__dirname, "../../app/globals.css"), "utf8"));

/** The site chrome's content edges: the header bar (navInner container) and the footer. */
const chrome = (width: number) => ({
  header: edges(cascade(GLOBALS, ["container", "navInner"], width), width),
  footer: edges(cascade(GLOBALS, ["footer"], width), width),
});

/** The local name a scoped class came from (vitest's are `_name_hash`; the module maps it back). */
const local = (cls: string) => {
  const name = cls.match(/^_([A-Za-z][\w-]*)_[0-9a-z]+$/)?.[1];
  return name && (songStyles as Record<string, string>)[name] === cls ? name : undefined;
};

/** The page's own blocks: main's children, less the JSON-LD, the phone-only bars and the shared Keep exploring rail. */
function blocks(markup: string): string[] {
  const host = document.createElement("div");
  host.innerHTML = markup;
  const main = host.querySelector("main")!;
  const skip = new Set(["mobileBackBar", "mobileActionBar", "desktopOnly"]);
  return [...main.children]
    .filter((el) => el.tagName !== "SCRIPT")
    .map((el) => {
      const names = el.className.split(/\s+/).filter(Boolean).map((c) => local(c));
      expect(names.length, `<${el.tagName.toLowerCase()} class="${el.className}">`).toBe(1);
      expect(names[0], `<${el.tagName.toLowerCase()} class="${el.className}"> is a song.module.css class`).toBeDefined();
      return names[0]!;
    })
    .filter((n) => !skip.has(n));
}

const PAGES = [
  ...songSlugs.map((slug) => ({ path: `/music/${slug}`, render: () => SongPage({ params: Promise.resolve({ song: slug }) }) })),
  ...albumPageSlugs.map((slug) => ({ path: `/music/albums/${slug}`, render: () => AlbumPage({ params: Promise.resolve({ album: slug }) }) })),
];

/** One left edge and one right edge for the page's blocks at `width`, and where they sit. */
function line(css: string, names: string[], width: number) {
  const rules = parse(css);
  const all = names.map((n) => edges(cascade(rules, [n], width), width).join("-"));
  return [...new Set(all)];
}

const WIDE = [1241, 1280, 1440, 1920];
const NARROW = [1240, 1024, 901, 900, 390, 320];
// The shipped stylesheet: this one without the measure rule.
const MEASURE_RULE = /\.crumbs,\s*\.pickerPad,\s*\.heroPad,\s*\.sectionPad,\s*\.onward\s*\{[^}]*\}/;
const SHIPPED_CSS = SONG_CSS.replace(MEASURE_RULE, "");

describe("V-music-14: song and album pages sit on one edge inside the site chrome", () => {
  it("there are pages to check: every song and album slug renders", () => {
    expect(songSlugs.length).toBeGreaterThanOrEqual(14);
    expect(albumPageSlugs.length).toBe(8);
  });

  it.each(PAGES)("$path: every block shares one left and right edge, inside the header and footer", async ({ path, render }) => {
    const names = blocks(renderToStaticMarkup(await render()));
    expect(names.length, path).toBeGreaterThanOrEqual(4);
    for (const w of WIDE) {
      const edgesAt = line(SONG_CSS, names, w);
      expect(edgesAt, `${path} at ${w}: ${names.join(", ")}`).toHaveLength(1);
      const [l, r] = edgesAt[0].split("-").map(Number);
      // The site's frame (J0-10, design review 8 Oct 2026): 1360 wide,
      // centred, 40px gutters — x 80-1360 at 1440. It was the design's 1240
      // measure (x 140) until then.
      const frame = Math.min(w, 1360);
      expect([l, r]).toEqual([(w - frame) / 2 + 40, (w + frame) / 2 - 40]);
      const { header, footer } = chrome(w);
      expect(l, `${path} at ${w}: left of the header`).toBeGreaterThanOrEqual(header[0]);
      expect(r, `${path} at ${w}: right of the header`).toBeLessThanOrEqual(header[1]);
      expect(l, `${path} at ${w}: left of the footer`).toBeGreaterThanOrEqual(footer[0]);
      expect(r, `${path} at ${w}: right of the footer`).toBeLessThanOrEqual(footer[1]);
    }
  });

  it("up to 1240 the measure never bites: 901–1239 takes the frame's 32px gutter (J0-10), phones are as they were", async () => {
    const names = blocks(renderToStaticMarkup(await PAGES[0].render()));
    for (const w of NARROW) {
      expect(line(SONG_CSS, names, w), `at ${w}`).toEqual(line(SHIPPED_CSS, names, w));
    }
    expect(line(SONG_CSS, names, 1240)).toEqual(["40-1200"]);
    expect(line(SONG_CSS, names, 1024)).toEqual(["32-992"]);
    expect(line(SONG_CSS, names, 901)).toEqual(["32-869"]);
    expect(line(SONG_CSS, names, 900)).toEqual(["18-882"]);
    expect(line(SONG_CSS, names, 390)).toEqual(["18-372"]);
  });

  it("the chrome reads as measured live: header bar and footer both 80-1360 at 1440 (the masthead's 40px gutter, J0-10), 320-1600 at 1920", () => {
    expect(chrome(1440)).toEqual({ header: [80, 1360], footer: [80, 1360] });
    expect(chrome(1920)).toEqual({ header: [320, 1600], footer: [320, 1600] });
  });

  it("negative control: the shipped stylesheet ran the blocks 40-1400 at 1440, past the chrome", async () => {
    expect(SHIPPED_CSS).not.toBe(SONG_CSS);
    const names = blocks(renderToStaticMarkup(await PAGES[0].render()));
    expect(line(SHIPPED_CSS, names, 1440)).toEqual(["40-1400"]);
    expect(line(SHIPPED_CSS, names, 1920)).toEqual(["40-1880"]);
    for (const w of [1440, 1920]) {
      const [l, r] = line(SHIPPED_CSS, names, w)[0].split("-").map(Number);
      const { header, footer } = chrome(w);
      expect(l, `at ${w}`).toBeLessThan(Math.min(header[0], footer[0]));
      expect(r, `at ${w}`).toBeGreaterThan(Math.max(header[1], footer[1]));
    }
  });
});
