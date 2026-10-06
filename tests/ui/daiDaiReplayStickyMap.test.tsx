import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import DaiDaiReplay from "../../app/components/DaiDaiReplay";
import { buildReplayData } from "../../app/components/daiDaiReplayData";
import { EN_REPLAY_LABELS, ES_REPLAY_LABELS } from "../../app/components/daiDaiReplayLabels";
import styles from "../../app/components/DaiDaiReplay.module.css";

/**
 * V-music-07, the full-site debug of 5 Oct 2026. On desktop the replay on
 * /dai-dai and /dai-dai/es is a 2 : 1 grid, map left, ranking right, with
 * align-items: start. Measured live in headless Chrome at 1240 and 1440, dark
 * and light, EN and ES: the map column is 430px and the ranking 783px at the
 * end frame (the poster), so a 748 × 353 blank sat under the map, and the
 * transport (play, step, scrubber) started 371px below the map's bottom. With
 * the play button in view at 1440 × 900 the map's top 70px sat under the
 * 69px nav; at 1280 × 720 only its bottom 180px showed.
 *
 * The map column is now sticky 86px down (the FAQ and awards asides' offset)
 * from 1240 up, so it rides beside the ranking. Grafted onto the live page at
 * 1440 × 900, 1240 × 900 (EN dark, ES light and dark) and 1280 × 720: the
 * whole map holds at 86–516 from the ranking's first band down to the
 * transport, the play button and the full map share the viewport (play at
 * 800 at 900 tall, 620 at 720), the poster is unchanged at rest, and a click
 * on France still opens its card on the stuck map. At 1024 (ranking under the
 * map) and 390 (ranking above it) nothing moves.
 *
 * jsdom does no layout, so this reads the stylesheet the way the cascade will
 * at each width (media, selector, source order) and renders the component to
 * check no box between the map column and the page clips it — a sticky box
 * sticks to its nearest scrolling ancestor, and one set to overflow: hidden
 * would hold it in place. The shipped rule, verbatim, is the negative control.
 */

const CSS = readFileSync(join(process.cwd(), "app/components/DaiDaiReplay.module.css"), "utf8");

/** The site nav's height on desktop, measured live (sticky, 0–69). */
const NAV_H = 69;
/** The transport row (play, steps, scrubber, the date line), measured live. */
const TRANSPORT_H = 70;
/** A short laptop screen: the map and the play button must share it. */
const SHORT_VIEWPORT = 720;

type Rule = { media: string | null; selector: string; body: string; at: number };

/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null, base: number) => {
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
      if (head.startsWith("@media")) walk(body, head, base + open + 1);
      else for (const sel of head.split(",")) out.push({ media, selector: sel.trim(), body, at: base + i });
      i = j;
    }
  };
  walk(src, null, 0);
  return out;
}

/** Whether a screen `w` px wide, no motion preference, meets the @media. */
function applies(media: string | null, w: number): boolean {
  if (media === null) return true;
  const m = /^@media\s+(.*)$/.exec(media);
  if (!m) return false;
  return m[1].split(/\s+and\s+/).every((q) => {
    const c = /^\((max|min)-width:\s*(\d+)px\)$/.exec(q.trim());
    if (!c) return false;
    return c[1] === "max" ? w <= Number(c[2]) : w >= Number(c[2]);
  });
}

/** The declarations a bare `.cls` element ends up with at width `w`. */
function computed(css: string, cls: string, w: number): Map<string, string> {
  const out = new Map<string, string>();
  for (const r of rules(css)
    .filter((r) => r.selector === `.${cls}` && applies(r.media, w))
    .sort((a, b) => a.at - b.at)) {
    for (const d of r.body.split(";")) {
      const k = d.indexOf(":");
      if (k > 0) out.set(d.slice(0, k).trim(), d.slice(k + 1).trim());
    }
  }
  return out;
}

const px = (v: string | undefined) => (v && /^\d+(\.\d+)?px$/.test(v) ? parseFloat(v) : null);

/** Whether, at width `w`, the map column holds beside the ranking: sticky,
 *  clear of the nav, and with the whole map and the transport on a 720px
 *  screen together. null when it does; the reason when it does not. */
function rides(css: string, w: number): string | null {
  const col = computed(css, "mapCol", w);
  if (col.get("position") !== "sticky") return `position ${col.get("position")}`;
  const top = px(col.get("top"));
  if (top === null) return `top ${col.get("top")}`;
  if (top < NAV_H + 8) return `top ${top} sits under the ${NAV_H}px nav`;
  const mapH = px(computed(css, "mapBox", w).get("height"));
  if (mapH === null) return "no map height";
  if (top + mapH + 18 + TRANSPORT_H > SHORT_VIEWPORT) return `map ends at ${top + mapH}, no room for the transport at ${SHORT_VIEWPORT}`;
  // A grid item set to stretch fills its row: a sticky box with no spare row
  // has nowhere to move.
  const body = computed(css, "body", w);
  if (body.get("display") !== "grid" || body.get("align-items") !== "start") return `body ${body.get("display")} / ${body.get("align-items")}`;
  return null;
}

/** The two columns side by side: from 1240 up (the tablet rule is max 1239). */
const TWO_COLUMNS = [1240, 1280, 1440, 1920];
/** Tablet (ranking under the map) and phone (ranking above it). */
const ONE_COLUMN = [1239, 1024, 901, 900, 390, 320];

// The .mapCol rule as /dai-dai served it on 5 Oct 2026 (origin/main), verbatim.
const SHIPPED_MAP_COL = `.mapCol {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}`;

/** The current sheet with its top-level .mapCol rule (and the comment over
 *  it) swapped for the shipped one, and the tablet reset taken out. */
function shippedSheet(css: string): string {
  // One comment at most, and it may not run on past its own "*/".
  const swapped = css.replace(/\n(?:\/\*(?:(?!\*\/)[\s\S])*\*\/\n)?\.mapCol \{[^}]*\}/, `\n${SHIPPED_MAP_COL}`);
  if (swapped === css) throw new Error("no top-level .mapCol rule");
  return swapped.replace(/\n {2}\.mapCol \{\n {4}position: relative;\n {4}top: auto;\n {2}\}/, "");
}

describe("V-music-07 · the desktop replay's map rides beside the ranking", () => {
  it("is sticky below the nav from 1240 up, with the whole map and the transport on a 720px screen", () => {
    for (const w of TWO_COLUMNS) expect([w, rides(CSS, w)]).toEqual([w, null]);
  });

  it("stays in the flow where the ranking is not beside it (tablet, phone)", () => {
    for (const w of ONE_COLUMN) {
      const col = computed(CSS, "mapCol", w);
      expect([w, col.get("position"), col.get("top")]).toEqual([w, "relative", "auto"]);
    }
  });

  it("no box between the map column and the page clips it, in either edition", () => {
    // The module object does not enumerate under Vitest: ask it for every
    // class the sheet names, and read the rendered tokens back through that.
    const names = new Set(rules(CSS).flatMap((r) => [...r.selector.matchAll(/\.([A-Za-z][\w-]*)/g)].map((m) => m[1])));
    const local = new Map([...names].map((n) => [(styles as Record<string, string>)[n], n]));
    for (const [lang, labels] of [["en", EN_REPLAY_LABELS], ["es", ES_REPLAY_LABELS]] as const) {
      const { container, unmount } = render(<DaiDaiReplay data={buildReplayData(lang)} labels={labels} />);
      const col = container.querySelector(`.${styles.mapCol}`);
      expect(col, lang).not.toBeNull();
      const chain: string[] = [];
      for (let el = col!.parentElement; el && el !== container; el = el.parentElement) {
        for (const token of el.classList) {
          const name = local.get(token);
          if (!name) continue;
          chain.push(name);
          for (const w of TWO_COLUMNS) {
            const d = computed(CSS, name, w);
            for (const p of ["overflow", "overflow-x", "overflow-y"])
              expect([lang, name, w, p, d.get(p) ?? "visible"]).toSatisfy(
                (row: unknown[]) => ["visible", "clip"].includes(row[4] as string),
              );
            expect([lang, name, w, d.get("contain") ?? "none"]).toEqual([lang, name, w, "none"]);
          }
        }
      }
      // The column sits in the grid it rides in, and the walk reached the
      // replay's own card — the check above is not run over nothing.
      expect(chain[0], lang).toBe("body");
      expect(chain, lang).toEqual(expect.arrayContaining(["player", "replay"]));
      unmount();
    }
  });

  it("negative control: the shipped .mapCol rule fails at every two-column width", () => {
    const shipped = shippedSheet(CSS);
    expect(shipped).toContain(SHIPPED_MAP_COL);
    for (const w of TWO_COLUMNS) expect([w, rides(shipped, w)]).toEqual([w, "position relative"]);
  });
});
