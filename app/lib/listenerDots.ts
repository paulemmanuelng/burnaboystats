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
 * unit, and the 50th city (143,427 against Lagos's 1,439,126 on the 2 Oct
 * 2026 reading) is 0.316 of the biggest radius: 2 / (0.316 × 0.37) = 17.1,
 * so 18. On the 4 Nov reading, 142,540 against 1,476,188: 0.311, 17.4, still 18.
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

/** A placing at a chip's view is tried again at most this many times, each
 *  try setting one more of the labels the last one got wrong first. */
const RETRIES = 6;
/** How much nearer its own dot than any other a label must sit to count as
 *  clear, in viewBox units: more than the map's drawn coordinates can shift
 *  in rounding (two decimals, three for a radius: about 0.015 at worst), so a
 *  spot judged clear is still clear as drawn ("São Paulo" drew 4.00px from its
 *  dot and 4.00px from Itabuna's at the 332 phone's Americas chip, 4 Nov 2026
 *  reading). It says nothing about whose a label looks: see readsAsOther. */
const TIE = 0.02;

/**
 * Where each label goes, in viewBox units, when one unit is `k` CSS px.
 *
 * A label is set beside its own dot, GAP_PX from its edge — right, left,
 * below, above, at a corner, or slid along a side while it still sits level
 * with the dot — and the first spot, in the layout's order, that sits inside
 * the map, crosses no other label, has no other dot as near to it as its own
 * and reads as no other city's (`readsAsOther`) wins. Failing that, a name takes a spot further out with a leader line
 * to the dot; then, on the phone, its rank on a clear spot; then the first
 * spot beside it that covers no other dot; then the spot beside it that
 * covers no named dot and the fewest others. A rank, after its clear spots,
 * takes the uncovered spot nearest its own dot against the ranked ones, then
 * the same fallbacks. Every dot the map draws is an obstacle (`drawn`), not
 * only the five named.
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
 *   laptop's since 16 Oct): no spot the view's edge cuts is taken. For a city
 *   inside the view the chip opens on, a clear spot inside the view comes
 *   first, then a leader inside it, then a clear spot past its edge; a group
 *   inside it with no clear spot there for its shared label is named city by
 *   city, each by that rule. The placing is then read as the tests read it
 *   (`costOf`): where a label covers a city, sits as near another city's dot
 *   as its own, or, its dot in the view, is set past the view's edge, the
 *   placing is tried again with that label set first, up to RETRIES times,
 *   and the try with the least wrong is kept (the 4 Nov 2026 reading's
 *   Toronto, Montreal and New York City, set greedily in one order, left one
 *   of the three on another city at 105 of 311 phone widths).
 * - On the phone, a name with no clear spot beside its dot and no leader is
 *   set as its rank where that has a clear spot (owner ruling 4 Nov 2026:
 *   "New York City" is "13" at the 320 phone's Americas chip).
 */
export function placeLabels(labelled: LabelDot[], k: number, layout: "desktop" | "phone", opts: PlaceOptions = {}): MapLabel[] {
  const drawn = opts.drawn ?? labelled;
  const u = (px: number) => px / k;
  const pitch = u(LINE_PX);
  const gap = u(GAP_PX);
  const half = u((LABEL_ASCENT_PX - LABEL_DESCENT_PX) / 2);
  const named = new Set(labelled.map((d) => d.rank));
  type Placed = { label: MapLabel; boxes: Box[]; leader?: Seg };
  const placed: Placed[] = [];

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
  const seen = (g: readonly MapDot[]) => !!view && g.every((d) => d.x >= view.x0 && d.x <= view.x1 && d.y >= view.y0 && d.y <= view.y1);
  /** A rank keeps two letters' width clear of any label level with it (half
   *  a line or more side by side): set against a name it reads as part of it
   *  ("Montreal5" at the 320 phone's Americas chip, half a pixel apart; a
   *  space apart, "Montreal 5"). A name keeps one letter's width clear of a
   *  name level with it: the two read as one ("TorontoNew York City" at the
   *  375 phone's Americas chip, 0.89px apart). */
  const isRank = (lines: string[]) => lines.length === 1 && /^\d+$/.test(lines[0]);
  const sideBySide = (a: Box, b: Box) => Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0) >= pitch / 2;
  const padOf = (a: string[], b: string[]) => u((isRank(a) || isRank(b) ? 2 : 1) * LABEL_ADVANCE_PX);
  const crowded = (a: Box, b: Box, pad: number) => overlaps(a, b) || (sideBySide(a, b) && Math.max(b.x0 - a.x1, a.x0 - b.x1) < pad - 1e-9);
  const free = (bs: Box[], lines: string[] = []) =>
    placed.every((p) => bs.every((b) => p.boxes.every((a) => !crowded(a, b, padOf(lines, p.label.lines))) && !(p.leader && crosses(p.leader, b))));
  /** A dot is level with a line when its centre sits in the line's height. */
  const level = (b: Box, d: MapDot) => d.y >= b.y0 && d.y <= b.y1;
  /** A name reads as another city's when no dot of its own is level with it
   *  and another city's is, within two letters' width of its start or end:
   *  dot then name, the way every name sits by its own dot. Nearer its own dot
   *  by a hair does not help: "New York City" sat 4.00px under its own dot and
   *  4.26px after Dallas's, level with Dallas, at the 393 phone's Americas
   *  chip, and read as Dallas. Ranks are exempt: the list says whose they are. */
  const readsAsOther = (bs: Box[], lines: string[], own: readonly MapDot[]) =>
    !isRank(lines) &&
    !bs.some((b) => own.some((d) => level(b, d))) &&
    drawn.some(
      (d) => !own.some((o) => o.rank === d.rank) && bs.some((b) => level(b, d) && Math.max(b.x0 - d.x - d.r, d.x - d.r - b.x1) < u(2 * LABEL_ADVANCE_PX)),
    );
  const gapTo = (bs: Box[], d: MapDot) => Math.min(...bs.map((b) => edgeGap(b, d)));

  type Spot = { x: number; y: number; anchor: "start" | "end"; lines: string[]; leader?: Seg };
  type Fixed = {
    bs: Box[];
    /** Inside the map, whole against the view and clear of the + and −. */
    okFixed: boolean;
    clear: boolean;
    inView: boolean;
    /** How much nearer its own dot than any other (negative: not). */
    margin: number;
    /** No other named dot as near as its own. */
    clearOfNamed: boolean;
    nearest: number;
    covered: number;
    coversNamed: boolean;
  };
  /** What a spot is whatever else is set — its boxes, and how near each dot
   *  sits to it — worked out once a call and kept: the same spot is judged
   *  again and again, and at a view the whole placing can be tried again. */
  const fixed = new Map<string, Fixed>();
  const fixedOf = (s: Spot, own: LabelDot[]): Fixed => {
    const key = `${s.anchor} ${s.x} ${s.y} ${own.map((d) => d.rank).join(",")} ${s.lines.join("\n")}`;
    let f = fixed.get(key);
    if (!f) {
      const bs = boxesOf(s.lines, s.x, s.y, s.anchor);
      const ownGap = Math.min(...own.map((d) => gapTo(bs, d)));
      const others = drawn.filter((d) => !own.some((o) => o.rank === d.rank)).map((d) => ({ d, g: gapTo(bs, d) }));
      const nearest = Math.min(Infinity, ...others.map((o) => o.g));
      f = {
        bs,
        okFixed: inside(bs) && whole(bs) && !(opts.controls && bs.some((b) => overlaps(b, opts.controls!))),
        clear: others.every((o) => o.g > ownGap + TIE) && !readsAsOther(bs, s.lines, own),
        inView: inView(bs),
        margin: nearest - ownGap,
        clearOfNamed: others.every((o) => o.g > ownGap + TIE || !named.has(o.d.rank)),
        nearest,
        covered: others.filter((o) => o.g === 0).length,
        coversNamed: others.some((o) => o.g === 0 && named.has(o.d.rank)),
      };
      fixed.set(key, f);
    }
    return f;
  };
  const judge = (s: Spot, own: LabelDot[]) => {
    const f = fixedOf(s, own);
    const leaderOk = !s.leader || placed.every((p) => p.boxes.every((b) => !crosses(s.leader!, b)));
    return { s, ...f, ok: f.okFixed && free(f.bs, s.lines) && leaderOk };
  };
  type Judged = ReturnType<typeof judge>;
  const fewest = (js: Judged[]) => js.filter((j) => j.ok && !j.coversNamed).sort((a, b) => a.covered - b.covered)[0];

  /** A spot further out, with a leader from the dot's edge to the label's
   *  nearest point: below, above, right, left, then the corners, nearest
   *  first, up to LEADER_MAX_PX out. The label keeps GAP_PX clear of every
   *  other dot, and its leader crosses no label and no dot but one its own
   *  sits inside. The spots, and which leaders cross a dot, are worked out
   *  once a call. */
  const ledSpots = new Map<string, Spot[]>();
  const led = (d: LabelDot, lines: string[], w: number, own: LabelDot[], inViewOnly = false): Judged | undefined => {
    const key = `${d.rank} ${lines.join("\n")}`;
    let spots = ledSpots.get(key);
    if (!spots) {
      spots = [];
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
          if (!crossesDot) spots.push({ x, y, anchor: "start", lines, leader });
        }
      ledSpots.set(key, spots);
    }
    for (const s of spots) {
      const j = judge(s, own);
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

  const textOf = (d: LabelDot) => (numbered(d) ? String(d.rank) : d.city);
  /** A lone label's spots beside its dot, in the order they are tried. */
  const besides = new Map<string, Spot[]>();
  const besideOf = (d: LabelDot, text = textOf(d)): Spot[] => {
    const key = `${d.rank} ${text}`;
    const kept = besides.get(key);
    if (kept) return kept;
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
    const spots = [right, left, below, above, ...corners, ...slid];
    besides.set(key, spots);
    return spots;
  };
  /** A name's rank, beside its dot, on a clear spot: in the view first, when
   *  the view holds the dot (the phone's last resort before a spot as near
   *  another city's dot as its own). */
  const asRank = (d: LabelDot, g: LabelDot[]): Judged | undefined => {
    const js = besideOf(d, String(d.rank)).map((s) => judge(s, g));
    return (seen(g) ? js.find((j) => j.ok && j.clear && j.inView) : undefined) ?? js.find((j) => j.ok && j.clear);
  };

  // Ranks first: a letter wide, each sits by its own dot or reads as another
  // city's (at the 320 phone's Americas chip "Montreal", set first, took the
  // spot under Madrid and pushed its "5" out to Lisbon's). A retry sets the
  // cities it names (`first`) next, in its order (set before the ranks, a led
  // "Montreal" ran east over the Atlantic to Abuja's dot at the 284 phone and
  // pushed its "4" under the + and −). Then shared labels: they have the
  // least room. Every other name keeps its rank order.
  const rankFirst = (g: LabelDot[]) => (g.length === 1 && numbered(g[0]) ? 0 : 1);

  /** One placing, greedy, in the order above. */
  const attempt = (first: readonly number[]): Placed[] => {
    placed.length = 0;
    const at = (g: LabelDot[]) => Math.min(...g.map((d) => (first.includes(d.rank) ? first.indexOf(d.rank) : Infinity)));
    const groups = layout === "phone" ? clusters(labelled, k, opts.apart ?? [], numbered) : labelled.map((d) => [d]);
    groups.sort((a, b) => rankFirst(a) - rankFirst(b) || at(a) - at(b) || b.length - a.length || a[0].rank - b[0].rank);

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
          // then a leader in it, before a spot past its edge). The longest name
          // goes first: it has the fewest spots that hold it (4 Nov 2026
          // reading, the 320 phone's Americas chip: "New York City", set after
          // Toronto and Montreal, found every spot beside its group taken and
          // landed on Los Angeles). A retry's cities go before it.
          const width = (d: LabelDot) => (numbered(d) ? String(d.rank) : d.city).length;
          groups.unshift(...[...g].sort((a, b) => at([a]) - at([b]) || width(b) - width(a) || a.rank - b.rank).map((d) => [d]));
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
        const text = textOf(d);
        const lines = [text];
        const w = u(labelWidthPx(text));
        const beside = besideOf(d).map((s) => judge(s, g));
        pick =
          (seen(g) ? beside.find((j) => j.ok && j.clear && j.inView) ?? led(d, lines, w, g, true) : undefined) ??
          beside.find((j) => j.ok && j.clear) ??
          // A rank with no spot nearer its dot than any other (London's at 320
          // on the 2 Oct 2026 reading, whose west edge Dublin's dot overlaps,
          // with the map's top edge above it) takes, of the spots covering no
          // dot, one nearer its dot
          // than any other ranked dot, and of those the nearest to its own
          // against the rest: the first such spot sat 3px from Madrid, whose
          // "5" is beside it, and 4px from London.
          (numbered(d)
            ? beside
                .filter((j) => j.ok && j.covered === 0)
                .sort((a, b) => Number(b.clearOfNamed) - Number(a.clearOfNamed) || b.margin - a.margin)[0]
            : undefined) ??
          // A name with no clear spot beside its dot takes a leader before a
          // spot that covers no dot but sits as near another: unled, that spot
          // names the other city (4 Nov 2026 reading: "Benin City", No. 9, set
          // 2px from Enugu's dot at the laptop's West Africa chip).
          (numbered(d) ? undefined : led(d, lines, w, g)) ??
          // A name on the phone with neither (no clear spot beside its dot, no
          // leader) is numbered, as the world's five are, where its rank has a
          // clear spot: in the view first, when the view holds its dot. Set
          // anywhere else, the name sits as near another city's dot as its own
          // and reads as that city's. The list under the map and the tap card
          // still name it. Owner ruling 4 Nov 2026 ("yes go with 13"): the 4 Nov
          // reading's "New York City", No. 13, at the 320 phone's Americas chip,
          // between Los Angeles, Dallas and Chicago to its west and Madrid,
          // Lisbon and Barcelona to its east, with Toronto, Montreal and the
          // ranks round it, sat 1.3px from Lisbon's dot and 5.7px from its own.
          (layout === "phone" && !numbered(d) ? asRank(d, g) : undefined) ??
          beside.find((j) => j.ok && j.covered === 0) ??
          // A rank's leader (a name's was tried above, on the same labels).
          (numbered(d) ? led(d, lines, w, g) : undefined) ??
          fewest(beside) ??
          beside.find((j) => j.ok) ??
          beside[0];
      }
      const label: MapLabel = { ranks: g.map((d) => d.rank), lines: pick.s.lines, x: pick.s.x, y: pick.s.y, anchor: pick.s.anchor, pitch };
      if (pick.s.leader) label.leader = pick.s.leader;
      placed.push({ label, boxes: pick.bs, leader: pick.s.leader });
    }
    // One repair, at a chip's view: a name whose dot the view holds but which
    // was set past its edge or led, where a name set in the view before it sits
    // on its clear spot there and has another clear one in the view: that name
    // moves, and this one takes the spot (4 Nov 2026 reading, the 320 phone's
    // Americas chip: "São Paulo" sat where "Santiago", by the view's bottom
    // edge, had a clear spot, and Santiago was set past the edge).
    if (view) {
      const single = (p: Placed) => {
        // A rank, numbered or a name set as its rank, keeps its spot.
        if (p.label.ranks.length !== 1 || isRank(p.label.lines)) return undefined;
        const d = labelled.find((x) => x.rank === p.label.ranks[0]);
        return d && !numbered(d) ? d : undefined;
      };
      const asPlaced = (p: Placed, j: Judged): Placed => {
        const label: MapLabel = { ranks: p.label.ranks, lines: j.s.lines, x: j.s.x, y: j.s.y, anchor: j.s.anchor, pitch };
        return { label, boxes: j.bs };
      };
      const clearInView = (d: LabelDot) => besideOf(d).map((s) => judge(s, [d])).filter((j) => j.ok && j.clear && j.inView);
      for (const rank of placed.map((p) => p.label.ranks[0])) {
        const a = placed.find((p) => p.label.ranks[0] === rank)!;
        const da = single(a);
        if (!da || !seen([da]) || (inView(a.boxes) && !a.leader)) continue;
        for (const b of placed.filter((p) => p !== a && !p.leader && inView(p.boxes))) {
          const db = single(b);
          if (!db) continue;
          const kept = placed.filter((p) => p !== a && p !== b);
          const before = placed.splice(0, placed.length, ...kept);
          // Both are names, so with a and b lifted the only thing a's new
          // spot changes for b's is the room it takes.
          const forB = clearInView(db);
          let fixed = false;
          for (const ja of clearInView(da)) {
            const jb = forB.find((j) => !j.bs.some((x) => ja.bs.some((y) => crowded(x, y, padOf(j.s.lines, ja.s.lines)))));
            if (jb) {
              placed.push(asPlaced(a, ja), asPlaced(b, jb));
              fixed = true;
              break;
            }
          }
          if (fixed) break;
          placed.splice(0, placed.length, ...before);
        }
      }
    }
    return placed.slice();
  };

  /** What a placing gets wrong, as the tests read it, worst first: labels
   *  set where no spot was free (off the map, cut by the view's edge, under
   *  the + and −, on another label or its leader, an unled label away from
   *  its dot, a rank or name crowding a label level with it), labels on a
   *  named city, labels on any city, lone unled labels as near another city's
   *  dot as their own or reading as its, labels of cities the view holds set
   *  past its edge, names set
   *  as their ranks, leaders. And the cities whose labels are wrong (any of
   *  the first four first, then past the view), for the next try. */
  const costOf = (ps: Placed[]) => {
    const cost = [0, 0, 0, 0, 0, 0, 0];
    const hard: number[] = [];
    const soft: number[] = [];
    for (const p of ps) {
      const ranks = p.label.ranks;
      const own = drawn.filter((d) => ranks.includes(d.rank));
      const ownGap = Math.min(...own.map((d) => gapTo(p.boxes, d)));
      const broken =
        !inside(p.boxes) ||
        !whole(p.boxes) ||
        (!!opts.controls && p.boxes.some((b) => overlaps(b, opts.controls!))) ||
        (!p.leader && ownGap > gap * Math.SQRT2 + u(0.1)) ||
        ps.some(
          (o) =>
            o !== p &&
            p.boxes.some(
              (b) =>
                (!!o.leader && crosses(o.leader, b)) ||
                o.boxes.some((a) => crowded(a, b, padOf(p.label.lines, o.label.lines))),
            ),
        );
      if (broken) cost[0]++;
      let on = false;
      let near = false;
      for (const o of drawn) {
        if (ranks.includes(o.rank)) continue;
        const g = gapTo(p.boxes, o);
        if (g === 0) {
          cost[2]++;
          if (named.has(o.rank)) cost[1]++;
          on = true;
        } else if (!p.leader && ranks.length === 1 && g <= ownGap + TIE) near = true;
      }
      if (!p.leader && ranks.length === 1 && readsAsOther(p.boxes, p.label.lines, own)) near = true;
      if (near) cost[3]++;
      const outside = seen(own) && !inView(p.boxes);
      if (outside) cost[4]++;
      const d = labelled.find((x) => x.rank === ranks[0]);
      if (ranks.length === 1 && isRank(p.label.lines) && d && !numbered(d)) cost[5]++;
      if (p.leader) cost[6]++;
      if (broken || on || near) hard.push(ranks[0]);
      else if (outside) soft.push(ranks[0]);
    }
    return { cost, wrong: [...hard, ...soft] };
  };
  const less = (a: number[], b: number[]) => {
    const i = a.findIndex((x, j) => x !== b[j]);
    return i >= 0 && a[i] < b[i];
  };

  let best = attempt([]);
  if (view) {
    let { cost: bestCost, wrong } = costOf(best);
    const first: number[] = [];
    for (let i = 0; i < RETRIES && bestCost.slice(0, 5).some((c) => c > 0); i++) {
      const next = wrong.find((r) => !first.includes(r));
      if (next === undefined) break;
      first.push(next);
      const tried = attempt(first);
      const read = costOf(tried);
      if (less(read.cost, bestCost)) {
        best = tried;
        bestCost = read.cost;
      }
      wrong = read.wrong;
    }
  }
  return best.map((p) => p.label).sort((a, b) => a.ranks[0] - b.ranks[0]);
}
