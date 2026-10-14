import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import HubScatter, { hubKey, type ScatterDot } from "../../app/components/HubScatter";
import { sweptArtists, certCount, countryCount, BURNA } from "../../app/data/afrobeats";
import { totalAwards, countryCount as burnaCountries } from "../../app/data/certifications";
import { plaqueDomain, sqrtTicks } from "../../app/lib/hubScatterScale";

/**
 * sqrtTicksFromMax (site review 8 Oct 2026, Job 5 · J5-4 (d), fix 102): the
 * hub scatter's plaque axis is square-root, 440px tall, with ticks from the
 * deepest dot, a y title that names the scale, and a key read off the plot.
 */
const dots: ScatterDot[] = [
  { slug: "burna-boy", name: BURNA.name, countries: burnaCountries, plaques: totalAwards(), anchor: true },
  ...sweptArtists.map((a) => ({ slug: a.slug, name: a.name, countries: countryCount(a), plaques: certCount(a), anchor: false })),
];
const html = renderToStaticMarkup(HubScatter({ dots }));
const max = Math.max(...dots.map((d) => d.plaques));
const domain = plaqueDomain(max);
const H = 440;

/** The y tick labels: the texts hung 8px left of the y rule. */
const renderedTicks = (markup: string) =>
  [...markup.matchAll(/<text x="[\d.]+%" dx="-8" y="([\d.]+)%" dy="4"[^>]*>([^<]+)<\/text>/g)].map((m) => ({ y: (Number(m[1]) / 100) * H, v: Number(m[2]) }));
/** Each dot's centre, from its nested svg's fraction of the 440px frame. */
const dotYs = (markup: string) =>
  [...markup.matchAll(/<svg x="[\d.]+%" y="([\d.]+)%" overflow="visible">/g)].map((m) => (Number(m[1]) / 100) * H);

describe("sqrtTicks(max)", () => {
  it("steps of 10/20/25/50/… that give four or more under the max, a half step near zero", () => {
    expect(sqrtTicks(260)).toEqual([0, 25, 50, 100, 150, 200, 250]);
    expect(sqrtTicks(248)).toEqual([0, 25, 50, 100, 150, 200]);
    expect(sqrtTicks(90)).toEqual([0, 10, 20, 40, 60, 80]);
  });
});

describe("the hub scatter on a square-root y", () => {
  it("draws the ticks of the plotted max, each at √(value / domain) up the plot", () => {
    const ticks = renderedTicks(html);
    expect(ticks.map((t) => t.v)).toEqual(sqrtTicks(max));
    for (const t of ticks) expect(t.y).toBeCloseTo(390 - Math.sqrt(t.v / domain) * 360, 1);
  });

  it("puts every dot at √(plaques / domain) of the plot", () => {
    const sorted = [...dots].sort((a, b) => b.plaques - a.plaques);
    const ys = dotYs(html);
    expect(ys.length).toBe(dots.length);
    ys.forEach((y, i) => expect(y).toBeCloseTo(390 - Math.sqrt(sorted[i].plaques / domain) * 360, 1));
  });

  it("names the scale on its y title, and the frame is 440px", () => {
    expect(html).toContain(">CERTIFICATIONS, SQUARE-ROOT SCALE ↑</text>");
    expect(readFileSync("app/components/hubScatter.module.css", "utf8")).toMatch(/\.frame \{ position: relative; height: 440px; \}/);
  });

  it("the key names the dots where they fall", () => {
    const k = hubKey(dots);
    const read = html.match(/<span class="[^"]*read[^"]*">([\s\S]*?)<\/span>/)![1].replace(/<!-- -->/g, "").replace(/&amp;/g, "&");
    if (k.deep) {
      expect(read).toContain(`top-left = deep at home (${k.deep})`);
      const d = dots.find((x) => x.name === k.deep)!;
      // Deepest of the dots in the upper-left quadrant.
      expect(d.countries).toBeLessThan(Math.max(26, ...dots.map((x) => x.countries)) / 2);
    }
    for (const n of k.both) expect(read).toContain(n);
    if (k.wide) expect(read).toContain(`wide & shallow (${k.wide})`);
    expect(k.both).toContain(BURNA.name);
  });

  it("negative control: the shipped linear y crowded the field into the bottom of the plot", () => {
    // HubScatter.tsx:45 on main e85e6efe: `280 - (p / domain) * 250`, a 330px
    // frame. The share of the plot height each dot sits at, linear against √.
    const linear = dots.map((d) => d.plaques / domain);
    const root = dots.map((d) => Math.sqrt(d.plaques / domain));
    const below40 = (fs: number[]) => fs.filter((f) => f < 0.4).length;
    expect(below40(root)).toBeLessThan(below40(linear));
    // The deepest home record among the rest sits far higher on √.
    const seyiLike = dots.filter((d) => !d.anchor).sort((a, b) => b.plaques / b.countries - a.plaques / a.countries)[0];
    expect(Math.sqrt(seyiLike.plaques / domain) - seyiLike.plaques / domain).toBeGreaterThan(0.15);
    // And the key was typed in the source, not read off the dots.
    expect(readFileSync("app/components/HubScatter.tsx", "utf8")).not.toContain("deep at home (Seyi Vibez)");
  });
});
