import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import HubScatter, { type ScatterDot } from "../app/components/HubScatter";
import { sweptArtists, certCount, countryCount, BURNA } from "../app/data/afrobeats";
import { totalAwards, countryCount as burnaCountries } from "../app/data/certifications";

/**
 * "The shape of the field" on /afrobeats: every label clear of every other
 * label, dot and axis rule, and every label TIED to its own dot, at every
 * width the plot is drawn at — debug item V-afrobeats-03, option (b), Paul's
 * call of 7 Oct 2026 ("go with b": 11px names from 1240px, the crowded
 * bottom-left labels re-placed so nothing overlaps).
 *
 * The type is 11px at every width (tests/hubScatterType.test.tsx), but the
 * dots sit at fractions of a plot that grows from 1,038px wide at a 1240
 * window to 1,158px from 1366 — so the room between labels changes with the
 * width, and a placement that clears at 1440 can collide at 1240. This lays
 * the rendered markup out at every plot width from 1,038 to 1,158 (above that
 * the plot does not grow) with Chrome's own boxes for 11px Space Mono, as
 * measured on 7 Oct 2026: a 6.73px advance, 12px above the baseline and 4
 * below.
 *
 * "Tied" is the review's finding of 7 Oct 2026: the first re-placement
 * stacked BNXN, Fireboy DML and Victony up the right of their column with no
 * hairlines, so "Fireboy DML" sat level with BNXN's dot and read as its name.
 * A label with no hairline must have its own dot nearest the point it is
 * anchored at (by a clear margin); a hairline must start at its own dot and
 * end at its own label.
 */

const dots: ScatterDot[] = [
  { slug: "burna-boy", name: BURNA.name, countries: burnaCountries, plaques: totalAwards(), anchor: true },
  ...sweptArtists.map((a) => ({ slug: a.slug, name: a.name, countries: countryCount(a), plaques: certCount(a), anchor: false })),
];
const html = renderToStaticMarkup(HubScatter({ dots }));

// ── Chrome's boxes for the plot's 11px Space Mono ───────────────────────────
const ADVANCE = 6.733;
const ABOVE = 12;
const BELOW = 4;
/** The two axis titles carry arrows from a fallback face; measured widths. */
const TITLE_WIDTH: Record<string, number> = { "COUNTRIES →": 93.4, "PLAQUES ↑": 69.6 };

type Box = { l: number; r: number; t: number; b: number };
interface Line {
  dx: number;
  dy: number;
  anchor: "start" | "middle" | "end";
  width: number;
}
interface Unit {
  name: string;
  fx: number;
  fy: number;
  /** Outer radius: the circle's r plus half its 1.5 stroke. */
  r: number;
  lines: Line[];
  leader: [number, number, number, number] | null;
}

const attr = (a: string, k: string) => {
  const m = new RegExp(`\\b${k}="([^"]*)"`).exec(a);
  return m ? m[1] : undefined;
};
const plain = (s: string) => s.replace(/<!--.*?-->/g, "").replace(/<[^>]+>/g, "");
const pct = (v: string | undefined) => Number((v ?? "0").replace("%", "")) / 100;

/** A <text>'s width: its characters at the mono advance (plus letter-spacing),
 *  and an inline figures <tspan> after its dx. */
const textWidth = (attrs: string, inner: string) => {
  const tspan = /<tspan\b([^>]*)>([\s\S]*?)<\/tspan>/.exec(inner);
  const head = plain(tspan ? inner.slice(0, tspan.index) : inner);
  if (TITLE_WIDTH[head] !== undefined) return TITLE_WIDTH[head];
  const spacing = Number(attr(attrs, "letter-spacing") ?? 0);
  let w = head.length * (ADVANCE + spacing);
  if (tspan) w += Number(attr(tspan[1], "dx") ?? 0) + plain(tspan[2]).length * ADVANCE;
  return w;
};

/** The dots: each a nested <svg> at its fraction of the plot, its label lines
 *  and hairline in pixels from the dot's centre. */
const parseUnits = (markup: string): Unit[] =>
  [...markup.matchAll(/<svg x="([\d.]+)%" y="([\d.]+)%" overflow="visible"><g>([\s\S]*?)<\/g><\/svg>/g)].map((m) => {
    const body = m[3];
    const lead = /<line\b([^>]*)>/.exec(body);
    const circle = /<circle\b([^>]*)>/.exec(body)!;
    const texts = [...body.matchAll(/<text\b([^>]*)>([\s\S]*?)<\/text>/g)];
    return {
      name: plain(texts[0][2].replace(/<tspan[\s\S]*<\/tspan>/, "")),
      fx: Number(m[1]) / 100,
      fy: Number(m[2]) / 100,
      r: Number(attr(circle[1], "r")) + 0.75,
      leader: lead
        ? ([attr(lead[1], "x1"), attr(lead[1], "y1"), attr(lead[1], "x2"), attr(lead[1], "y2")].map(Number) as Unit["leader"])
        : null,
      lines: texts.map((t) => ({
        dx: Number(attr(t[1], "x")),
        dy: Number(attr(t[1], "y")),
        anchor: (attr(t[1], "text-anchor") ?? "start") as Line["anchor"],
        width: textWidth(t[1], t[2]),
      })),
    };
  });

/** The axis counts and titles: at fractions of the plot, nudged in pixels. */
const parseAxisText = (markup: string) =>
  [...markup.replace(/<svg x="[\d.]+%"[\s\S]*?<\/svg>/g, "").matchAll(/<text\b([^>]*)>([\s\S]*?)<\/text>/g)].map((t) => ({
    name: `axis "${plain(t[2])}"`,
    fx: pct(attr(t[1], "x")),
    fy: pct(attr(t[1], "y")),
    dx: Number(attr(t[1], "dx") ?? 0),
    dy: Number(attr(t[1], "dy") ?? 0),
    anchor: (attr(t[1], "text-anchor") ?? "start") as Line["anchor"],
    width: textWidth(t[1], t[2]),
  }));

/** The two axis rules (the 30% ink lines; the 5% ones are gridlines). */
const parseRules = (markup: string) =>
  [...markup.matchAll(/<line x1="([\d.]+)%" y1="([\d.]+)%" x2="([\d.]+)%" y2="([\d.]+)%" stroke="color-mix\(in srgb, var\(--text\) 30%/g)].map((m) =>
    m.slice(1, 5).map((v) => Number(v) / 100),
  );

const lineBox = (x: number, baseline: number, anchor: Line["anchor"], width: number): Box => {
  const l = anchor === "end" ? x - width : anchor === "middle" ? x - width / 2 : x;
  return { l, r: l + width, t: baseline - ABOVE, b: baseline + BELOW };
};
const overlaps = (a: Box, b: Box) => Math.min(a.r, b.r) > Math.max(a.l, b.l) && Math.min(a.b, b.b) > Math.max(a.t, b.t);
const ptToBox = (x: number, y: number, b: Box) => Math.hypot(Math.max(b.l - x, 0, x - b.r), Math.max(b.t - y, 0, y - b.b));
const segToPt = (x1: number, y1: number, x2: number, y2: number, x: number, y: number) => {
  const vx = x2 - x1;
  const vy = y2 - y1;
  const k = Math.max(0, Math.min(1, ((x - x1) * vx + (y - y1) * vy) / (vx * vx + vy * vy)));
  return Math.hypot(x1 + k * vx - x, y1 + k * vy - y);
};
const segToBox = (x1: number, y1: number, x2: number, y2: number, b: Box) => {
  let best = Infinity;
  for (let i = 0; i <= 100; i++) best = Math.min(best, ptToBox(x1 + ((x2 - x1) * i) / 100, y1 + ((y2 - y1) * i) / 100, b));
  return best;
};

/** Every problem with the plot laid out `width` px wide. */
function problems(units: Unit[], width: number, markup = html): string[] {
  const W = width;
  const H = (W * 330) / 1280;
  const out: string[] = [];
  const laid = units.map((u) => {
    const cx = u.fx * W;
    const cy = u.fy * H;
    return {
      ...u,
      cx,
      cy,
      boxes: u.lines.map((l) => lineBox(cx + l.dx, cy + l.dy, l.anchor, l.width)),
      seg: u.leader ? ([cx + u.leader[0], cy + u.leader[1], cx + u.leader[2], cy + u.leader[3]] as const) : null,
    };
  });
  const axis = parseAxisText(markup).map((a) => ({
    name: a.name,
    boxes: [lineBox(a.fx * W + a.dx, a.fy * H + a.dy, a.anchor, a.width)],
  }));
  const labelled = [...laid.map((u) => ({ name: u.name, boxes: u.boxes })), ...axis];
  const rules: Box[] = parseRules(markup).map(([x1, y1, x2, y2]) => ({
    l: Math.min(x1, x2) * W - 0.5,
    r: Math.max(x1, x2) * W + 0.5,
    t: Math.min(y1, y2) * H - 0.5,
    b: Math.max(y1, y2) * H + 0.5,
  }));

  for (let i = 0; i < labelled.length; i++)
    for (let j = i + 1; j < labelled.length; j++)
      for (const a of labelled[i].boxes)
        for (const b of labelled[j].boxes)
          if (overlaps(a, b)) out.push(`${labelled[i].name} overlaps ${labelled[j].name}`);
  for (const t of labelled)
    for (const d of laid)
      for (const b of t.boxes) if (ptToBox(d.cx, d.cy, b) < d.r) out.push(`${t.name} overlaps ${d.name}'s dot`);
  for (const t of laid) for (const b of t.boxes) for (const rule of rules) if (overlaps(b, rule)) out.push(`${t.name} crosses an axis rule`);
  for (const t of labelled)
    for (const b of t.boxes) if (b.l < 0 || b.r > W || b.t < 0 || b.b > H) out.push(`${t.name} is clipped`);

  for (const u of laid) {
    if (u.seg) {
      const [x1, y1, x2, y2] = u.seg;
      const start = Math.hypot(x1 - u.cx, y1 - u.cy) - u.r;
      if (start < 0 || start > 3) out.push(`${u.name}'s hairline does not start at its dot`);
      const end = Math.min(...u.boxes.map((b) => ptToBox(x2, y2, b)));
      if (end > 4) out.push(`${u.name}'s hairline does not reach its label`);
      for (const d of laid)
        if (d !== u && segToPt(x1, y1, x2, y2, d.cx, d.cy) - d.r < 2) out.push(`${u.name}'s hairline grazes ${d.name}'s dot`);
      for (const t of labelled)
        if (t.name !== u.name && t.boxes.some((b) => segToBox(x1, y1, x2, y2, b) < 2)) out.push(`${u.name}'s hairline grazes ${t.name}`);
      continue;
    }
    // No hairline: its own dot must be the one nearest the name's anchor point.
    const nb = u.boxes[0];
    const ax = u.lines[0].anchor === "end" ? nb.r : nb.l;
    const ay = (nb.t + nb.b) / 2 + 2;
    const own = Math.hypot(u.cx - ax, u.cy - ay);
    for (const d of laid)
      if (d !== u && Math.hypot(d.cx - ax, d.cy - ay) <= own * 1.15) out.push(`"${u.name}" reads as ${d.name}'s label`);
  }
  return out;
}

/** The plot's width at a 1240 window, and where it stops growing (1366 up). */
const PLOT_WIDTHS = Array.from({ length: 1158 - 1038 + 1 }, (_, i) => 1038 + i);
const units = parseUnits(html);

/** The same plot with some labels set as an earlier version had them. */
const withPlacement = (place: Record<string, { dx: number; dy: number; inline?: boolean; leader?: Unit["leader"] }>) =>
  units.map((u) => {
    const p = place[u.name];
    if (!p) return u;
    const name = u.lines[0];
    const nameWidth = u.name.length * ADVANCE;
    const figuresWidth = u.lines.length === 2 ? u.lines[1].width : name.width - nameWidth - 7;
    const lines: Line[] = p.inline
      ? [{ dx: p.dx, dy: p.dy, anchor: "start", width: nameWidth + 7 + figuresWidth }]
      : [
          { dx: p.dx, dy: p.dy, anchor: "start", width: nameWidth },
          { dx: p.dx, dy: p.dy + 13, anchor: "start", width: figuresWidth },
        ];
    return { ...u, lines, leader: p.leader ?? null };
  });

describe("the field's labels at every width the plot is drawn at", () => {
  it("parses every dot, its label and the axis text", () => {
    expect(units.length).toBe(dots.length);
    expect(parseAxisText(html).length).toBe(8);
    expect(parseRules(html).length).toBe(2);
    // BNXN's label is two lines; Victony's runs on one, as Tiwa Savage's does.
    expect(units.find((u) => u.name === "BNXN")!.lines.length).toBe(2);
    expect(units.find((u) => u.name === "Victony")!.lines.length).toBe(1);
  });

  it("no label touches another, a dot or a rule, none is clipped, and each is tied to its own dot — 1,038 to 1,158px", () => {
    const found = new Map<string, number[]>();
    for (const w of PLOT_WIDTHS) for (const p of problems(units, w)) found.set(p, [...(found.get(p) ?? []), w]);
    expect([...found].map(([p, ws]) => `${p} (plot ${ws[0]}–${ws[ws.length - 1]}px)`)).toEqual([]);
  });

  it("BNXN, Fireboy DML and Victony each carry a hairline to their own dot", () => {
    for (const n of ["BNXN", "Fireboy DML", "Victony"]) expect(units.find((u) => u.name === n)!.leader, n).not.toBeNull();
  });

  it("negative control: the column as burnaboystats.com draws it, at 11px, overlaps", () => {
    // app/components/HubScatter.tsx on main, 7 Oct 2026: bnxn {14, -10},
    // "fireboy-dml" {14, -12}, victony {14, 2} — set in a scaled viewBox there.
    const shipped = withPlacement({ BNXN: { dx: 14, dy: -10 }, "Fireboy DML": { dx: 14, dy: -12 }, Victony: { dx: 14, dy: 2 } });
    const p = problems(shipped, 1038);
    expect(p).toContain("BNXN overlaps Fireboy DML");
    expect(p).toContain("Fireboy DML overlaps Victony");
  });

  it("negative control: the first re-placement (no hairlines) reads Fireboy DML as BNXN's dot", () => {
    // e03d4319, 7 Oct 2026: bnxn {14, -30}, "fireboy-dml" {14, -22}, victony {14, 0}.
    const stacked = withPlacement({ BNXN: { dx: 14, dy: -30 }, "Fireboy DML": { dx: 14, dy: -22 }, Victony: { dx: 14, dy: 0 } });
    for (const w of [1038, 1158]) {
      const p = problems(stacked, w);
      expect(p.some((x) => x.startsWith('"Fireboy DML" reads as BNXN\'s label')), `plot ${w}px`).toBe(true);
      expect(p.some((x) => x.includes("overlaps"))).toBe(false);
    }
  });
});
