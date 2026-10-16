// The listeners map's geometry — dot sizes, the crop and the top-five
// labels — as pure functions (site review 8 Oct 2026, Job 5 · J5-5, fixes
// 107 and 108). No "use client", and nothing from the listener data: the
// page's map (components/ListenerMap.tsx, a client component) and the page's
// link preview (a server route, Job 6) both draw the same dots, so the one
// rule lives here and neither copies it. Its one import outside lib/ is the
// map's width, MAP_W, from data/worldShapes (the shapes file, whose paths a
// bundler leaves out when only the constant is used).

import { MAP_W } from "../data/worldShapes";
import { projectEqualEarth } from "./equalEarth";

/** The biggest city's radius on the laptop map, in viewBox units (fix 108). */
export const RMAX_DESKTOP = 9.2;
/**
 * The phone's (fix 108 asks for it; C-19): the smallest whole number that
 * keeps the 50th city above the 2px floor at 402, so every phone dot stays
 * area-true. The phone map is 330–364 CSS px wide there, 0.37–0.40 px per
 * unit, and the 50th city (143,427 against Lagos's 1,439,126) is 0.316 of
 * the biggest radius: 2 / (0.316 × 0.37) = 17.1, so 18.
 */
export const RMAX_PHONE = 18;
/** No dot draws smaller than this on screen, at any width or zoom. */
export const DOT_FLOOR_PX = 2;

/**
 * Area-true: a dot's AREA is in proportion to its listeners, so its radius
 * goes with the square root. The biggest city is `rmax`; nothing is added
 * underneath (the floor it replaced made every dot an ordinal mark: a city a
 * tenth of Lagos drew at a quarter of its area).
 */
export const dotRadius = (listeners: number, max: number, rmax: number) => rmax * Math.sqrt(listeners / max);

/** The radius a dot draws at, in viewBox units, when one unit is `k` CSS px:
 *  the area-true radius, held at the 2px screen floor. */
export const drawnRadius = (r: number, k: number) => Math.max(r, DOT_FLOOR_PX / k);

/** The map stops at 58°S (fix 108): below it is open ocean and Antarctica,
 *  which no city in the 50 is near. The viewBox height is that parallel's y. */
export const CROP_LAT = -58;
export const MAP_H_CROP = projectEqualEarth(0, CROP_LAT).y;
export const CROPPED_VIEWBOX = `0 0 ${MAP_W} ${MAP_H_CROP}`;

// ── Labels ───────────────────────────────────────────────────────────────

/** The cities the map names: the top five (fixes 107, 108). */
export const LABELLED = 5;

/** Labels are Space Mono 700 at 11 CSS px: one letter is 0.612 em wide
 *  (the font's 612-unit advance), and a line box is drawn 12px above the
 *  baseline and 4 below (the hub scatter's measured box). */
export const LABEL_PX = 11;
export const LABEL_ADVANCE_PX = 0.612 * LABEL_PX;
export const LABEL_ASCENT_PX = 12;
export const LABEL_DESCENT_PX = 4;
const LINE_PX = LABEL_ASCENT_PX + LABEL_DESCENT_PX;
/** The space between a dot's edge and its label. */
export const GAP_PX = 4;
/**
 * Dots closer than this on screen share one label on the phone (fix 107). At
 * World zoom on a 402 phone the three Nigerian cities sit 4–6px apart and
 * London and Madrid about 12px, and fix 107 labels those two apart. 12px
 * would merge them on a phone under 390 (11.7px on a 330px map), so the rule
 * is the line below that: closer than half a label line.
 */
export const CLUSTER_PX = 8;

export interface LabelDot {
  rank: number;
  city: string;
  code: string;
  x: number;
  y: number;
  /** The drawn radius, viewBox units. */
  r: number;
}

export interface MapLabel {
  /** The cities it names, in rank order (more than one = a shared label). */
  ranks: number[];
  /** One entry per line; a shared label's lines but the last end in " ·". */
  lines: string[];
  /** Anchor point in viewBox units: x is the text's start (or end, for
   *  anchor "end"), y the FIRST line's baseline. */
  x: number;
  y: number;
  anchor: "start" | "end";
  /** Line pitch in viewBox units. */
  pitch: number;
  /** A line from the dot's edge to the label, in viewBox units: only when no
   *  spot beside the dot is clear (a small dot inside a bigger one's circle,
   *  Benin City in Lagos's at the phone's West Africa view). */
  leader?: { x1: number; y1: number; x2: number; y2: number };
}

/** A dot a label keeps clear of: every city on the map, labelled or not. */
export type MapDot = Pick<LabelDot, "rank" | "x" | "y" | "r">;

export interface PlaceOptions {
  /** Every dot the map draws, labelled or not (default: the labelled ones).
   *  Without it a label can land on a city it does not name: "Lagos" sat on
   *  Accra's dot at the laptop's West Africa view. */
  drawn?: readonly MapDot[];
  /**
   * The phone's World view (owner ruling 15 Oct 2026, #3): each named dot
   * carries its rank, alone, beside it. The names shared one label and
   * stacked there (fix 107), and at World zoom the shared "Lagos · Port
   * Harcourt · Abuja" ran west over Bogotá while "London" sat on the German
   * dots; the names stay in the list under the map and in the tap card.
   * `true` numbers every named dot; a list numbers those ranks only (the
   * phone's Americas chip: the world's five that are not the Americas' own,
   * whose shared "Lagos · Port Harcourt · Abuja" ran west over the Caribbean
   * there, beside the new "Mexico City").
   */
  numbers?: boolean | readonly number[];
  /** Countries whose dots keep a label each on the phone, however close they
   *  sit (fix 107: "At the West Africa chip each Nigerian dot gets its own
   *  label"). */
  apart?: readonly string[];
  /** The part of the map a chip opens on, in viewBox units: a city inside
   *  it takes a clear spot inside it before a clear spot past its edge (owner
   *  ruling 15 Oct 2026, #3: "Santiago" was cut by the Americas view's bottom
   *  edge on a 375 phone, with room beside its dot). No label is set across
   *  the edge — each sits wholly inside the view or wholly past it — and a
   *  group inside it with no clear spot there for its shared label names each
   *  city on its own ("Montreal · Toronto" ran over the view's top edge on a
   *  320 phone, y 28–44 against 36, and showed half cut). */
  view?: { x0: number; y0: number; x1: number; y1: number };
  /** Where the map's + and − buttons sit over that view, in viewBox units:
   *  no label is set under them (Abuja's "4" sat under "+" at the 320
   *  phone's Americas chip). */
  controls?: { x0: number; y0: number; x1: number; y1: number };
  /**
   * The link preview (owner ruling 15 Oct 2026, #11): a group's cities are
   * named one to a line, in rank order, EAST of the group — each line set
   * beside the group, or, where it would run off the map's right edge, under
   * it, ending inside the map — every line clear of every dot. West of
   * Nigeria a 28px name ran over the Atlantic onto South America and read as
   * a South American city.
   */
  east?: boolean;
}

type Box = { x0: number; y0: number; x1: number; y1: number };
type Seg = { x1: number; y1: number; x2: number; y2: number };
const overlaps = (a: Box, b: Box) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
/** How far a dot's edge sits from a box, in viewBox units: 0 when the box
 *  covers any of the dot. */
const edgeGap = (a: Box, d: MapDot) => {
  const cx = Math.max(a.x0, Math.min(d.x, a.x1));
  const cy = Math.max(a.y0, Math.min(d.y, a.y1));
  return Math.max(0, Math.hypot(cx - d.x, cy - d.y) - d.r);
};
/** How near a segment passes a point. */
const segGap = (s: Seg, x: number, y: number) => {
  const dx = s.x2 - s.x1;
  const dy = s.y2 - s.y1;
  const t = Math.max(0, Math.min(1, ((x - s.x1) * dx + (y - s.y1) * dy) / (dx * dx + dy * dy || 1)));
  return Math.hypot(s.x1 + t * dx - x, s.y1 + t * dy - y);
};
/** Whether a segment crosses a box (Liang–Barsky clipping). */
function crosses(s: Seg, b: Box): boolean {
  const dx = s.x2 - s.x1;
  const dy = s.y2 - s.y1;
  let t0 = 0;
  let t1 = 1;
  for (const [p, q] of [
    [-dx, s.x1 - b.x0],
    [dx, b.x1 - s.x1],
    [-dy, s.y1 - b.y0],
    [dy, b.y1 - s.y1],
  ]) {
    if (p === 0) {
      if (q < 0) return false;
    } else {
      const t = q / p;
      if (p < 0) t0 = Math.max(t0, t);
      else t1 = Math.min(t1, t);
      if (t0 > t1) return false;
    }
  }
  return true;
}

/** Text width in CSS px. */
export const labelWidthPx = (text: string) => [...text].length * LABEL_ADVANCE_PX;

/**
 * Every way to set a shared label's names in reading order, fewest lines
 * first and, for the same count, the narrowest block first (so the last name
 * is not left on a line of its own when a more even split is narrower). Each
 * line but the last ends in " ·" with no space after it: a space an SVG line
 * ends in is drawn, so an end-anchored line started one letter further left
 * than its measured box (at 375 the shared label began at x −1, clipped).
 */
function wraps(names: string[]): string[][] {
  const splits = (rest: string[], n: number): string[][][] =>
    n === 1
      ? [[rest]]
      : rest.slice(0, rest.length - n + 1).flatMap((_, i) => splits(rest.slice(i + 1), n - 1).map((tail) => [rest.slice(0, i + 1), ...tail]));
  const widest = (lines: string[]) => Math.max(...lines.map(labelWidthPx));
  return names.flatMap((_, i) =>
    splits(names, i + 1)
      .map((parts) => parts.map((p, j) => p.join(" · ") + (j < parts.length - 1 ? " ·" : "")))
      .sort((a, b) => widest(a) - widest(b)),
  );
}

/** Single-linkage groups of dots whose centres sit under CLUSTER_PX apart; a
 *  dot of an `apart` country, or one `numbered`, stays a group of its own. */
function clusters(dots: LabelDot[], k: number, apart: readonly string[], numbered: (d: LabelDot) => boolean): LabelDot[][] {
  const groups: LabelDot[][] = [];
  const seen = new Set<number>();
  const joins = (d: LabelDot) => !apart.includes(d.code) && !numbered(d);
  for (const d of dots) {
    if (seen.has(d.rank)) continue;
    const g = [d];
    seen.add(d.rank);
    if (joins(d))
      for (let i = 0; i < g.length; i++)
        for (const o of dots)
          if (!seen.has(o.rank) && joins(o) && Math.hypot(o.x - g[i].x, o.y - g[i].y) * k < CLUSTER_PX) {
            seen.add(o.rank);
            g.push(o);
          }
    groups.push(g.sort((a, b) => a.rank - b.rank));
  }
  return groups;
}

/** A leader is tried every LEADER_STEP_PX out from the dot, up to
 *  LEADER_MAX_PX: further than that and the line, not the place, carries
 *  the label. */
const LEADER_STEP_PX = 4;
export const LEADER_MAX_PX = 40;

/** Offsets 0, ½, −½, 1, −1 … CSS px, short of `reach` either way: half a
 *  pixel at a time, as the room between two dots can be under a pixel more
 *  than a line (the shared label's second line, between Bogotá and Lima at
 *  375). */
const sweep = (reach: number) => [0, ...Array.from({ length: Math.max(0, Math.ceil(reach * 2) - 1) }, (_, i) => [(i + 1) / 2, -(i + 1) / 2]).flat()];

/**
 * Where each label goes, in viewBox units, when one unit is `k` CSS px.
 *
 * A label is set beside its own dot, GAP_PX from its edge — right, left,
 * below, above, at a corner, or slid along a side while it still sits level
 * with the dot — and the first spot, in the layout's order, that sits inside
 * the map, crosses no other label and has no other dot as near to it as its
 * own wins. Failing that: the first beside it that covers no other dot; then
 * a spot further out with a leader line to the dot; then the spot beside it
 * that covers no named dot and the fewest others. Every dot the map draws is
 * an obstacle (`drawn`), not only the five named.
 *
 * - Laptop (fix 107: "Desktop labels all five separately"): every dot its own
 *   label.
 * - Phone: dots under CLUSTER_PX apart on screen share one label, set left of
 *   the group and level with it, on as few lines as fit inside the map; a dot
 *   of an `apart` country keeps its own.
 * - `numbers` (the phone's World view, owner ruling 15 Oct 2026, #3): every
 *   named dot its own label, its rank, by the same spot rule as a lone city;
 *   a list of ranks numbers those only (the phone's Americas chip).
 * - `view` (the Americas chip, the phone's since 15 Oct 2026 and the
 *   laptop's since 16 Oct): no spot the view's edge cuts is taken. For a city inside the view the chip opens on, a clear spot inside
 *   the view comes first, then a leader inside it, then a clear spot past its
 *   edge; a group inside it with no clear spot there for its shared label is
 *   named city by city, each by that rule.
 */
export function placeLabels(labelled: LabelDot[], k: number, layout: "desktop" | "phone", opts: PlaceOptions = {}): MapLabel[] {
  const drawn = opts.drawn ?? labelled;
  const u = (px: number) => px / k;
  const pitch = u(LINE_PX);
  const gap = u(GAP_PX);
  const half = u((LABEL_ASCENT_PX - LABEL_DESCENT_PX) / 2);
  const named = new Set(labelled.map((d) => d.rank));
  const placed: { label: MapLabel; boxes: Box[]; leader?: Seg }[] = [];

  /** One box per line: an end-anchored block is ragged on its left. */
  const boxesOf = (lines: string[], x: number, y: number, anchor: "start" | "end"): Box[] =>
    lines.map((l, i) => {
      const w = u(labelWidthPx(l));
      const x0 = anchor === "start" ? x : x - w;
      const base = y + i * pitch;
      return { x0, x1: x0 + w, y0: base - u(LABEL_ASCENT_PX), y1: base + u(LABEL_DESCENT_PX) };
    });
  const inside = (bs: Box[]) => bs.every((b) => b.x0 >= 0 && b.x1 <= MAP_W && b.y0 >= 0 && b.y1 <= MAP_H_CROP);
  const view = opts.view;
  const within = (b: Box) => !!view && b.x0 >= view.x0 && b.x1 <= view.x1 && b.y0 >= view.y0 && b.y1 <= view.y1;
  const past = (b: Box) => !!view && (b.x1 <= view.x0 || b.x0 >= view.x1 || b.y1 <= view.y0 || b.y0 >= view.y1);
  const inView = (bs: Box[]) => !view || bs.every(within);
  /** Wholly inside the view or wholly past its edge: one the edge cuts shows
   *  half a name when the chip opens. */
  const whole = (bs: Box[]) => !view || bs.every(within) || bs.every(past);
  const numbered = (d: LabelDot) => opts.numbers === true || (Array.isArray(opts.numbers) && opts.numbers.includes(d.rank));
  /** Whether a group's dots all sit in the view: only then does its label
   *  prefer the view (a city past its edge keeps its label beside it). */
  const seen = (g: LabelDot[]) => !!view && g.every((d) => d.x >= view.x0 && d.x <= view.x1 && d.y >= view.y0 && d.y <= view.y1);
  /** A rank keeps two letters' width clear of any label level with it (half
   *  a line or more side by side): set against a name it reads as part of it
   *  ("Montreal5" at the 320 phone's Americas chip, half a pixel apart; a
   *  space apart, "Montreal 5"). */
  const isRank = (lines: string[]) => lines.length === 1 && /^\d+$/.test(lines[0]);
  const sideBySide = (a: Box, b: Box) => Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0) >= pitch / 2;
  const free = (bs: Box[], lines: string[] = []) =>
    placed.every((p) => {
      const pad = isRank(lines) || isRank(p.label.lines) ? u(2 * LABEL_ADVANCE_PX) : 0;
      return bs.every(
        (b) =>
          p.boxes.every((a) => !overlaps(a, b) && !(pad && sideBySide(a, b) && Math.max(b.x0 - a.x1, a.x0 - b.x1) < pad)) &&
          !(p.leader && crosses(p.leader, b)),
      );
    });
  const gapTo = (bs: Box[], d: MapDot) => Math.min(...bs.map((b) => edgeGap(b, d)));

  type Spot = { x: number; y: number; anchor: "start" | "end"; lines: string[]; leader?: Seg };
  const judge = (s: Spot, own: LabelDot[]) => {
    const bs = boxesOf(s.lines, s.x, s.y, s.anchor);
    const ownGap = Math.min(...own.map((d) => gapTo(bs, d)));
    const others = drawn.filter((d) => !own.some((o) => o.rank === d.rank)).map((d) => ({ d, g: gapTo(bs, d) }));
    const leaderOk = !s.leader || placed.every((p) => p.boxes.every((b) => !crosses(s.leader!, b)));
    const nearest = Math.min(Infinity, ...others.map((o) => o.g));
    return {
      s,
      bs,
      ok: inside(bs) && free(bs, s.lines) && leaderOk && whole(bs) && !(opts.controls && bs.some((b) => overlaps(b, opts.controls!))),
      clear: others.every((o) => o.g > ownGap),
      inView: inView(bs),
      /** How much nearer its own dot than any other (negative: not). */
      margin: nearest - ownGap,
      /** No other named dot as near as its own. */
      clearOfNamed: others.every((o) => o.g > ownGap || !named.has(o.d.rank)),
      nearest,
      covered: others.filter((o) => o.g === 0).length,
      coversNamed: others.some((o) => o.g === 0 && named.has(o.d.rank)),
    };
  };
  type Judged = ReturnType<typeof judge>;
  const fewest = (js: Judged[]) => js.filter((j) => j.ok && !j.coversNamed).sort((a, b) => a.covered - b.covered)[0];

  /** A spot further out, with a leader from the dot's edge to the label's
   *  nearest point: below, above, right, left, then the corners, nearest
   *  first, up to LEADER_MAX_PX out. The label keeps GAP_PX clear of every
   *  other dot, and its leader crosses no label and no dot but one its own
   *  sits inside. */
  const led = (d: LabelDot, lines: string[], w: number, own: LabelDot[], inViewOnly = false): Judged | undefined => {
    const dirs = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ].map(([dx, dy]) => [dx / Math.hypot(dx, dy), dy / Math.hypot(dx, dy)]);
    for (let out = LEADER_STEP_PX; out <= LEADER_MAX_PX; out += LEADER_STEP_PX)
      for (const [dx, dy] of dirs) {
        // The point the label's near edge sits at, `out` px past the gap.
        const px = d.x + dx * (d.r + gap + u(out));
        const py = d.y + dy * (d.r + gap + u(out));
        const x = dx > 0 ? px : dx < 0 ? px - w : px - w / 2;
        const y = dy > 0 ? py + u(LABEL_ASCENT_PX) : dy < 0 ? py - u(LABEL_DESCENT_PX) : py + half;
        const box = boxesOf(lines, x, y, "start")[0];
        const nx = Math.max(box.x0, Math.min(d.x, box.x1));
        const ny = Math.max(box.y0, Math.min(d.y, box.y1));
        const len = Math.hypot(nx - d.x, ny - d.y);
        const leader = { x1: d.x + ((nx - d.x) / len) * d.r, y1: d.y + ((ny - d.y) / len) * d.r, x2: nx, y2: ny };
        const crossesDot = drawn.some(
          (o) => o.rank !== d.rank && Math.hypot(o.x - d.x, o.y - d.y) >= o.r && segGap(leader, o.x, o.y) < o.r,
        );
        if (crossesDot) continue;
        const j = judge({ x, y, anchor: "start", lines, leader }, own);
        if (j.ok && j.nearest >= gap && (!inViewOnly || j.inView)) return j;
      }
    return undefined;
  };

  /** A group named east of itself (`east`): one city to a line, in rank
   *  order. A line starts GAP_PX past the group's right edge, or, if it would
   *  run off the map there, ends at the map's edge and starts under the group
   *  (GAP_PX below its lowest dot). Line by line from level with the group,
   *  each slides down (or up) by half a pixel, under the line before it,
   *  until it sits inside the map, clear of every label and every dot. */
  const eastOf = (g: LabelDot[]) => {
    const right = Math.max(...g.map((d) => d.x + d.r)) + gap;
    const under = Math.max(...g.map((d) => d.y + d.r)) + gap;
    const level = (Math.min(...g.map((d) => d.y - d.r)) + Math.max(...g.map((d) => d.y + d.r))) / 2 + half;
    let floor = -Infinity;
    for (const d of g) {
      const lines = [d.city];
      const w = u(labelWidthPx(d.city));
      const x = Math.min(right, MAP_W - w);
      const top = Math.max(floor, x < right ? under : -Infinity);
      const start = Math.max(level, top + u(LABEL_ASCENT_PX));
      const fits = (y: number) => {
        const bs = boxesOf(lines, x, y, "start");
        return bs[0].y0 >= top - 1e-9 && inside(bs) && free(bs) && drawn.every((o) => gapTo(bs, o) > 0);
      };
      const y = sweep(MAP_H_CROP * k).map((o) => start + u(o)).find(fits) ?? start;
      placed.push({ label: { ranks: [d.rank], lines, x, y, anchor: "start", pitch }, boxes: boxesOf(lines, x, y, "start") });
      floor = y + u(LABEL_DESCENT_PX);
    }
  };

  const groups = layout === "phone" ? clusters(labelled, k, opts.apart ?? [], numbered) : labelled.map((d) => [d]);
  // Ranks first: a letter wide, each sits by its own dot or reads as another
  // city's (at the 320 phone's Americas chip "Montreal", set first, took the
  // spot under Madrid and pushed its "5" out to Lisbon's). Then shared labels:
  // they have the least room.
  const rankFirst = (g: LabelDot[]) => (g.length === 1 && numbered(g[0]) ? 0 : 1);
  groups.sort((a, b) => rankFirst(a) - rankFirst(b) || b.length - a.length || a[0].rank - b[0].rank);

  while (groups.length) {
    const g = groups.shift()!;
    let pick: Judged;
    if (g.length > 1 && opts.east) {
      eastOf(g);
      continue;
    }
    if (g.length > 1) {
      // Left of the group (fix 107) and level with it: the block slides from
      // centred on the group while some of it still sits beside the group.
      const x = Math.min(...g.map((d) => d.x - d.r)) - gap;
      const top = Math.min(...g.map((d) => d.y - d.r));
      const bot = Math.max(...g.map((d) => d.y + d.r));
      const spots = wraps(g.map((d) => d.city)).flatMap((lines) => {
        const n = lines.length - 1;
        const centred = (top + bot) / 2 + half - (n * pitch) / 2;
        const reach = ((bot - top) / 2 + (n * pitch) / 2 + u(LINE_PX) / 2) * k;
        return sweep(reach).map((off) => ({ x, y: centred + u(off), anchor: "end" as const, lines }));
      });
      const js = spots.map((s) => judge(s, g));
      const shown = seen(g) ? js.find((j) => j.ok && j.clear && j.inView) : undefined;
      if (seen(g) && !shown) {
        // No clear spot in the view for the shared label: each city is named
        // on its own, next, by the lone city's rule (a clear spot in the view,
        // then a leader in it, before a spot past its edge).
        groups.unshift(...g.map((d) => [d]));
        continue;
      }
      pick =
        shown ??
        js.find((j) => j.ok && j.clear) ??
        js.find((j) => j.ok && j.covered === 0) ??
        fewest(js) ??
        js.find((j) => j.ok) ??
        js[0];
    } else {
      const d = g[0];
      const text = numbered(d) ? String(d.rank) : d.city;
      const lines = [text];
      const w = u(labelWidthPx(text));
      const base = d.y + half;
      const c = d.r * Math.SQRT1_2;
      const right: Spot = { x: d.x + d.r + gap, y: base, anchor: "start", lines };
      const left: Spot = { x: d.x - d.r - gap, y: base, anchor: "end", lines };
      const below: Spot = { x: d.x - w / 2, y: d.y + d.r + gap + u(LABEL_ASCENT_PX), anchor: "start", lines };
      const above: Spot = { x: d.x - w / 2, y: d.y - d.r - gap - u(LABEL_DESCENT_PX), anchor: "start", lines };
      const corners: Spot[] = [
        { x: d.x + c + gap, y: d.y - c - gap - u(LABEL_DESCENT_PX), anchor: "start", lines },
        { x: d.x + c + gap, y: d.y + c + gap + u(LABEL_ASCENT_PX), anchor: "start", lines },
        { x: d.x - c - gap, y: d.y - c - gap - u(LABEL_DESCENT_PX), anchor: "end", lines },
        { x: d.x - c - gap, y: d.y + c + gap + u(LABEL_ASCENT_PX), anchor: "end", lines },
      ];
      // Slid along a side while the label still sits level with the dot
      // (beside it) or across from it (above, below).
      const across = sweep(d.r * k + LINE_PX / 2).slice(1);
      const along = sweep(d.r * k + labelWidthPx(text) / 2).slice(1);
      const slid = [
        ...across.flatMap((o) => [{ ...right, y: base + u(o) }, { ...left, y: base + u(o) }]),
        ...along.flatMap((o) => [{ ...below, x: below.x + u(o) }, { ...above, x: above.x + u(o) }]),
      ];
      const beside = [right, left, below, above, ...corners, ...slid].map((s) => judge(s, g));
      pick =
        (seen(g) ? beside.find((j) => j.ok && j.clear && j.inView) ?? led(d, lines, w, g, true) : undefined) ??
        beside.find((j) => j.ok && j.clear) ??
        // A rank with no spot nearer its dot than any other (London's at 320,
        // whose west edge Dublin's dot overlaps, with the map's top edge
        // above it) takes, of the spots covering no dot, one nearer its dot
        // than any other ranked dot, and of those the nearest to its own
        // against the rest: the first such spot sat 3px from Madrid, whose
        // "5" is beside it, and 4px from London.
        (numbered(d)
          ? beside
              .filter((j) => j.ok && j.covered === 0)
              .sort((a, b) => Number(b.clearOfNamed) - Number(a.clearOfNamed) || b.margin - a.margin)[0]
          : undefined) ??
        beside.find((j) => j.ok && j.covered === 0) ??
        led(d, lines, w, g) ??
        fewest(beside) ??
        beside.find((j) => j.ok) ??
        beside[0];
    }
    const label: MapLabel = { ranks: g.map((d) => d.rank), lines: pick.s.lines, x: pick.s.x, y: pick.s.y, anchor: pick.s.anchor, pitch };
    if (pick.s.leader) label.leader = pick.s.leader;
    placed.push({ label, boxes: pick.bs, leader: pick.s.leader });
  }
  return placed.map((p) => p.label).sort((a, b) => a.ranks[0] - b.ranks[0]);
}

