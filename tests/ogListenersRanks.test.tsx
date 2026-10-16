// @vitest-environment node
import { body, tree } from "./fixtures/ogTree";
import { listenerCities } from "../app/data/listeners";
import { CLUSTER_PX, GAP_PX, LABEL_ASCENT_PX, LABEL_DESCENT_PX, LABEL_PX, placeLabels } from "../app/lib/listenerDots";
import { LABEL_SIZE, LISTENERS_K, LISTENERS_MAP_H, LISTENERS_MAP_W, listenersCard, NAMED } from "../app/lib/ogListenersCard";

const drawn = vi.hoisted(() => [] as unknown[]);
vi.mock("next/og", () => ({
  ImageResponse: class {
    constructor(el: unknown) {
      drawn.push(el);
      return new Response("");
    }
  },
}));

/**
 * The /music/listeners link preview's names (owner ruling 15 Oct 2026, #11,
 * "yes to all"): each named city is led by its rank — 1 Lagos, 2 London,
 * 3 Port Harcourt — and the Nigerian names sit beside the Nigerian dots, to
 * their east. The shared label west of Nigeria ran "PORT HARCOURT" over the
 * Atlantic onto South America: at preview size it read as a South American
 * city, and it lay on Bogotá's dot.
 *
 * Worked out here in card px, from the card's own dots and the drawn lines:
 * a line's box is the map labels' (ascent 12, descent 4 at 11px) at 28px.
 */
const scale = LABEL_SIZE / LABEL_PX;
const ADVANCE = 0.612 * LABEL_SIZE;
const ASCENDER = 1.12 * LABEL_SIZE;
type Box = { x0: number; x1: number; y0: number; y1: number };
type Line = { text: string; x: number; top: number };
const boxOf = (l: Line): Box => {
  const base = l.top + ASCENDER;
  return { x0: l.x, x1: l.x + [...l.text].length * ADVANCE, y0: base - LABEL_ASCENT_PX * scale, y1: base + LABEL_DESCENT_PX * scale };
};

const card = listenersCard();
/** Every dot in card px. */
const dots = card.dots.map((d) => ({ rank: d.rank, city: d.city, x: d.x * LISTENERS_K, y: d.y * LISTENERS_K, r: d.r * LISTENERS_K }));
const named = [...listenerCities].sort((a, b) => a.rank - b.rank).slice(0, NAMED);
/** The named cities that sit closer than a label line, worked out here. */
const group = named.filter((c) =>
  named.some((o) => {
    const a = dots.find((d) => d.rank === c.rank)!;
    const b = dots.find((d) => d.rank === o.rank)!;
    return o !== c && Math.hypot(a.x - b.x, a.y - b.y) < CLUSTER_PX * scale;
  }),
);
const gap = (b: Box, d: (typeof dots)[number]) => Math.max(0, Math.hypot(Math.max(b.x0, Math.min(d.x, b.x1)) - d.x, Math.max(b.y0, Math.min(d.y, b.y1)) - d.y) - d.r);
const nameOf = (text: string) => text.replace(/^\d+ /, "");

/** What a card's lines get wrong: a city covered, a line off the map, two
 *  lines touching, or a group city's name west of the group. */
function wrongs(lines: Line[]): string[] {
  const out: string[] = [];
  const boxes = lines.map(boxOf);
  const west = Math.min(...group.map((c) => dots.find((d) => d.rank === c.rank)!).map((d) => d.x - d.r));
  lines.forEach((l, i) => {
    const b = boxes[i];
    for (const d of dots) if (gap(b, d) === 0) out.push(`${l.text} covers ${d.city}`);
    if (b.x0 < 0 || b.x1 > LISTENERS_MAP_W || b.y0 < 0 || b.y1 > LISTENERS_MAP_H) out.push(`${l.text} off the map`);
    for (let j = i + 1; j < lines.length; j++) {
      const o = boxes[j];
      if (b.x0 < o.x1 && o.x0 < b.x1 && b.y0 < o.y1 && o.y0 < b.y1) out.push(`${l.text} touches ${lines[j].text}`);
    }
    if (group.some((c) => c.city.toUpperCase() === nameOf(l.text)) && b.x0 < west) out.push(`${l.text} starts ${Math.round(west - b.x0)}px west of the group`);
  });
  return out;
}

describe("the listeners preview names its cities by rank, the Nigerian names east of Nigeria (owner ruling 15 Oct 2026, #11)", () => {
  it("each named city is led by its rank: today 1 LAGOS, 2 LONDON, 3 PORT HARCOURT", () => {
    expect([...card.lines.map((l) => l.text)].sort()).toEqual(named.map((c) => `${c.rank} ${c.city.toUpperCase()}`).sort());
    // Today's reading, worked out above: the group is Lagos and Port Harcourt.
    expect(group.map((c) => c.city)).toEqual(["Lagos", "Port Harcourt"]);
  });

  it("every line is on the map, clear of every city and of every other line", () => {
    expect(wrongs(card.lines)).toEqual([]);
  });

  it("the group's names are set one to a line, in rank order, east of it: beside it, or under it", () => {
    const g = group.map((c) => dots.find((d) => d.rank === c.rank)!);
    const east = Math.max(...g.map((d) => d.x + d.r));
    const south = Math.max(...g.map((d) => d.y + d.r));
    const lines = group.map((c) => card.lines.find((l) => nameOf(l.text) === c.city.toUpperCase())!);
    lines.forEach((l, i) => {
      const b = boxOf(l);
      // Beside the group, GAP_PX past its east edge, or under it.
      expect(b.x0 >= east + GAP_PX * scale - 0.01 || b.y0 >= south + GAP_PX * scale - 0.01, l.text).toBe(true);
      if (i > 0) expect(b.y0, l.text).toBeGreaterThanOrEqual(boxOf(lines[i - 1]).y1 - 0.01);
    });
    // The first is level with the group: its box spans the group's middle.
    const mid = (Math.min(...g.map((d) => d.y - d.r)) + south) / 2;
    expect(boxOf(lines[0]).y0).toBeLessThan(mid);
    expect(boxOf(lines[0]).y1).toBeGreaterThan(mid);
  });

  it("the card draws those lines at 28px", async () => {
    const before = drawn.length;
    await (await import("../app/music/listeners/opengraph-image")).default();
    const nodes = body(tree(drawn[before] as never)).filter((n) => card.lines.some((l) => l.text === n.text.join("")));
    expect(nodes).toHaveLength(card.lines.length);
    for (const n of nodes) expect(n.style.fontSize).toBe(28);
  });

  it("negative control: main's card set the shared label west of Nigeria, over Bogotá", () => {
    // ogListenersCard.ts:62–77 on main a9574c64: the named dots, unranked,
    // placed in "phone" mode with no `east`, each line's x the label's end
    // less its width.
    const k = LISTENERS_K / scale;
    const shipped = placeLabels(
      card.dots.filter((d) => d.rank <= NAMED).sort((a, b) => a.rank - b.rank),
      k,
      "phone",
      { drawn: card.dots },
    ).flatMap((l) =>
      l.lines.map((t, i) => {
        const text = t.toUpperCase();
        return { text, x: l.x * LISTENERS_K - (l.anchor === "end" ? [...text].length * ADVANCE : 0), top: (l.y + i * l.pitch) * LISTENERS_K - ASCENDER };
      }),
    );
    expect(shipped.map((l) => l.text)).toEqual(["LAGOS ·", "PORT HARCOURT", "LONDON"]);
    const w = wrongs(shipped);
    expect(w).toContain("PORT HARCOURT covers Bogotá");
    expect(w.some((s) => /^PORT HARCOURT starts \d+px west of the group$/.test(s))).toBe(true);
  });
});
