import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

/**
 * V-music-04, the full-site debug of 5 Oct 2026.
 *
 * On phones the /music tracklist dialog's sticky head kept its desktop sizes —
 * 104px cover, 24px side padding, 20px gaps, a 36px close button — inside a
 * 342px dialog, so the title and meta got a 112px column at 390 (82 at 360).
 * "Atlantic · Bad Habit · Spaceship · 16 tracks" and the italic edition note
 * wrapped a word a line, and the head took 287 of the dialog's 726px on
 * On a Spaceship (279 on L.I.F.E). Measured live in headless Chrome, dark and
 * light.
 *
 * jsdom does no layout, so the column is worked out from the stylesheet the
 * way the browser lays it out: dialog = min(620, viewport − 2 × backdrop
 * padding), less its 1px border, the head's side padding, the cover, the close
 * button and the two gaps. Applied to the stylesheet without its media rules
 * (what shipped), that arithmetic gives the live numbers — 112 at 390, 82 at
 * 360, 390 at 1440 — so it is anchored to the page, not to itself. The fix was
 * grafted onto the live dialog first: 192px of text at 390 and 162 at 360, the
 * head 171 of 726px on On a Spaceship and 191 on L.I.F.E (dark and light).
 */

const css = readFileSync(resolve(__dirname, "../../app/music/music.module.css"), "utf8").replace(
  /\/\*[\s\S]*?\*\//g,
  ""
);

type Decls = Record<string, string>;
type Rule = { selector: string; decls: Decls; maxWidth: number | null };

/** Every rule, top level or inside a plain `@media (max-width: Npx)` block, in source order. */
function parse(text: string): Rule[] {
  const out: Rule[] = [];
  const decls = (body: string): Decls => {
    const d: Decls = {};
    for (const part of body.split(";")) {
      const i = part.indexOf(":");
      if (i > 0) d[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
    return d;
  };
  let i = 0;
  while (i < text.length) {
    const open = text.indexOf("{", i);
    if (open < 0) break;
    const head = text.slice(i, open).trim();
    if (head.startsWith("@")) {
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const mw = head.match(/^@media\s*\(max-width:\s*(\d+)px\)$/);
      if (mw) {
        for (const m of text.slice(open + 1, j - 1).matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
          for (const s of m[1].split(",")) out.push({ selector: s.trim(), decls: decls(m[2]), maxWidth: Number(mw[1]) });
        }
      }
      i = j;
    } else {
      const close = text.indexOf("}", open);
      for (const s of head.split(",")) out.push({ selector: s.trim(), decls: decls(text.slice(open + 1, close)), maxWidth: null });
      i = close + 1;
    }
  }
  return out;
}

const rules = parse(css);

/** The declared value of `prop` on `.selector` at a viewport `width`, the last matching rule winning. */
function value(selector: string, prop: string, width: number, { media = true } = {}): string {
  let v: string | undefined;
  for (const r of rules) {
    if (r.selector !== selector || !(prop in r.decls)) continue;
    if (r.maxWidth !== null && (!media || width > r.maxWidth)) continue;
    v = r.decls[prop];
  }
  if (v === undefined) throw new Error(`${selector} has no ${prop}`);
  return v;
}

const px = (v: string) => {
  const n = parseFloat(v);
  if (!/^\d+(\.\d+)?px$/.test(v.trim()) || Number.isNaN(n)) throw new Error(`not a px length: ${v}`);
  return n;
};
/** Horizontal padding of a `padding` shorthand: the 2nd value, or the only one. */
const padX = (v: string) => {
  const parts = v.split(/\s+/);
  return px(parts[1] ?? parts[0]);
};

/** The width the head leaves its title and meta, at a viewport `width`. */
function textColumn(width: number, opts = { media: true }) {
  const at = (sel: string, prop: string) => value(sel, prop, width, opts);
  expect(at(".dialog", "width")).toBe("min(620px, 100%)");
  const dialog = Math.min(620, width - 2 * px(at(".backdrop", "padding")));
  const border = px(at(".dialog", "border").split(/\s+/)[0]);
  const head = dialog - 2 * border - 2 * padX(at(".dialogHead", "padding"));
  const gap = px(at(".dialogHead", "gap"));
  return head - px(at(".dialogCover", "width")) - px(at(".dialogClose", "width")) - 2 * gap;
}

describe("tracklist dialog head on phones (V-music-04)", () => {
  it("negative control: the shipped rules reproduce the live measurements", () => {
    expect(textColumn(390, { media: false })).toBe(112);
    expect(textColumn(360, { media: false })).toBe(82);
    expect(textColumn(1440, { media: false })).toBe(390);
  });

  it("gives the title and meta a readable column at 390 and 360", () => {
    expect(textColumn(390)).toBeGreaterThanOrEqual(180);
    expect(textColumn(360)).toBeGreaterThanOrEqual(150);
  });

  it("leaves the desktop dialog as it was", () => {
    expect(textColumn(1440)).toBe(390);
    expect(textColumn(900)).toBe(390);
    expect(value(".dialogCover", "width", 1440)).toBe("104px");
  });

  it("keeps the cover square and on the tracklist's edge at every width", () => {
    for (const w of [360, 390, 430, 560, 900, 1440]) {
      expect(value(".dialogCover", "height", w)).toBe(value(".dialogCover", "width", w));
      expect(padX(value(".dialogBody", "padding", w))).toBe(padX(value(".dialogHead", "padding", w)));
    }
  });
});
