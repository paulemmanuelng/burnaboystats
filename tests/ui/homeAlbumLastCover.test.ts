import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { albumCards } from "../../app/lib/homeData";

/**
 * V-core-04, the full-site debug of 5 Oct 2026. From 901 to 1239px the home
 * catalogue drops to three columns and the partial last row's final card
 * spans the tracks that remain (RESPONSIVE-AND-STATES.md: stretch the final
 * cell, never leave a phantom one). .albumCover is aspect-ratio: 1 and fills
 * its card, so with eight albums the two-column "No Sign of Weakness" card
 * drew a 603px square beside 283px neighbours at 1024 (measured live in
 * headless Chrome, dark and light, 901–1239: 2.15× every other cover) and
 * stretched the last row to 713px against 392px for the rows above. /music's
 * wall carries the same grid and already capped its cover; the home page did
 * not.
 *
 * jsdom does no layout, so this reads the stylesheet the way the cascade will
 * — the tablet media block, the card's padding and the grid's gap — and works
 * out each last card's cover width for every album count. Checked live by
 * grafting the rule onto the shipped page (901–1239 and 1240/1440, dark and
 * light; 7, 8 and 10 cards): every cover and every row is the same size, the
 * card still fills the row, and nothing at 1240 and up moves.
 */

type Rule = { media: string | null; selector: string; body: string };

/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null) => {
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
      if (head.startsWith("@media")) walk(body, head);
      else out.push({ media, selector: head, body });
      i = j;
    }
  };
  walk(src, null);
  return out;
}

const decl = (body: string, prop: string) =>
  body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();
const px = (v: string | undefined) => Number(v?.match(/^([\d.]+)px/)?.[1]);

const TABLET = "@media (max-width: 1239px)";
const COLS = 3;

/** A max-width of "none", "Npx", "N%" or "calc(N% - Mpx)", resolved against
 *  the card's content box. */
function resolve(value: string | undefined, box: number): number {
  if (!value || value === "none") return Infinity;
  const calc = value.match(/^calc\(\s*([\d.]+)%\s*-\s*([\d.]+)px\s*\)$/);
  if (calc) return (Number(calc[1]) / 100) * box - Number(calc[2]);
  if (/%$/.test(value)) return (parseFloat(value) / 100) * box;
  if (/px$/.test(value)) return parseFloat(value);
  throw new Error(`unread max-width ${value}`);
}

/** Cover width of every card in an n-album grid whose tracks are `col` wide. */
function coverWidths(css: string, n: number, col: number) {
  const all = rules(css);
  const pad = px(decl(all.find((r) => r.media === null && r.selector === ".albumCard")!.body, "padding"));
  const gap = px(decl(all.find((r) => r.media === null && r.selector === ".albumGrid")!.body, "gap"));
  const tablet = all.filter((r) => r.media === TABLET);
  const k = n % COLS;
  const lastSel = `.albumGrid > :last-child:nth-child(${COLS}n + ${k})`;
  const span = k === 0 ? 1 : Number(decl(tablet.find((r) => r.selector === lastSel)?.body ?? "", "grid-column")?.replace("span", "") || 1);
  const cap = k === 0 ? undefined : decl(tablet.find((r) => r.selector === `${lastSel} .albumCover`)?.body ?? "", "max-width");
  return Array.from({ length: n }, (_, i) => {
    const s = i === n - 1 ? span : 1;
    const box = s * col + (s - 1) * gap - 2 * pad;
    return Math.min(box, i === n - 1 ? resolve(cap, box) : Infinity);
  });
}

/** Track width across the band: the grid is the viewport less .wide's 32px
 *  tablet gutters, in three tracks with two 2px gaps. */
const bandCols = [901, 960, 1024, 1100, 1180, 1239].map((vw) => (vw - 64 - 2 * 2) / COLS);

const sameSize = (ws: number[]) => Math.max(...ws) - Math.min(...ws) < 0.05;

describe("V-core-04: the home catalogue's last card keeps a one-column cover", () => {
  const home = readFileSync("app/page.module.css", "utf8");

  it("draws today's albums at one cover size across 901–1239px", () => {
    expect(albumCards.length % COLS).not.toBe(0); // eight today: the last card spans two
    for (const col of bandCols) expect(sameSize(coverWidths(home, albumCards.length, col)), `col ${col}`).toBe(true);
  });

  it("holds for any album count, a span of two or of three", () => {
    for (let n = 4; n <= 12; n++) {
      for (const col of bandCols) expect(sameSize(coverWidths(home, n, col)), `${n} albums, col ${col}`).toBe(true);
    }
  });

  it("still stretches the last card to fill its row", () => {
    const tablet = rules(home).filter((r) => r.media === TABLET);
    const span = (k: number) => decl(tablet.find((r) => r.selector === `.albumGrid > :last-child:nth-child(3n + ${k})`)?.body ?? "", "grid-column");
    expect(span(1)).toBe("span 3");
    expect(span(2)).toBe("span 2");
  });

  it("matches /music's wall, which carries the same grid", () => {
    const music = readFileSync("app/music/music.module.css", "utf8");
    for (let n = 4; n <= 12; n++) {
      for (const col of bandCols) expect(sameSize(coverWidths(music, n, col)), `/music ${n} albums`).toBe(true);
    }
  });

  it("negative control: the shipped sheet drew the eighth cover at 603px beside 283px", () => {
    const shipped = `.albumGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  background: var(--line);
}
.albumCard {
  /* §3.2: the 342px cover does not sit on the page ground. */
  background: var(--bg-soft);
  padding: 18px;
  color: var(--text);
  display: block;
  transition: background var(--dur) var(--ease);
}
@media (max-width: 1239px) {
  .albumGrid { grid-template-columns: repeat(3, 1fr); }
  .albumGrid > :last-child:nth-child(3n + 1) { grid-column: span 3; }
  .albumGrid > :last-child:nth-child(3n + 2) { grid-column: span 2; }
}`;
    const at1024 = coverWidths(shipped, 8, (1024 - 64 - 4) / COLS);
    expect(Math.round(at1024[0])).toBe(283);
    expect(Math.round(at1024[7])).toBe(603);
    expect(sameSize(at1024)).toBe(false);
  });
});
