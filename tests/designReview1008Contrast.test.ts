import { describe, it, expect } from "vitest";
import { decl, read, rules, winning } from "./fixtures/cssRules";

/**
 * Design review of 8 Oct 2026, quick win 13 (R-08, MU-28, B-09, CC-11):
 * readability slips under the standard. Measured on the live site:
 *   - the rank numerals in Africa's Biggest year chips, light: 3.95:1 (25 of
 *     them), Burna Boy's gold chip 2.87:1 — 70% opacity on the chip's ink;
 *   - the live-charts "no change" dash: 2.11:1 light, 2.53:1 dark (half
 *     opacity on --text-muted);
 *   - the board photo tiles' keyboard ring: the global 2px gold, the same as
 *     the anchor's "this site" frame, and #ffb627 on paper (1.25:1), because a
 *     tile is a dark island;
 *   - text under the 11px floor (globals.css): the car tile badge (10px, both
 *     layouts), the phone car tile's maker line (10.5px), the phone "No
 *     longer counted" tag (10.5px), the listeners city country (10.5px
 *     laptop, 10px phone) and the phone methodology source tags (10px). The
 *     issuer marker ("Sony Music Africa", 9px) is NOT raised: the owner asked
 *     for it on 3 Oct 2026 and labelMarker.test.tsx keeps it.
 */

const GLOBALS = read("app/globals.css");

/** A token's light and dark hex from its `light-dark(#L, #D)` declaration. */
function token(name: string): { light: string; dark: string } {
  const m = GLOBALS.match(new RegExp(`${name}:\\s*light-dark\\((#[0-9a-f]{6}),\\s*(#[0-9a-f]{6})\\)`, "i"));
  if (!m) throw new Error(`no light-dark() for ${name}`);
  return { light: m[1], dark: m[2] };
}
const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const mix = (fg: number[], bg: number[], a: number) => fg.map((c, i) => c * a + bg[i] * (1 - a));
const lum = (c: number[]) =>
  c.map((v) => v / 255).map((v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4))).reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
const ratio = (a: number[], b: number[]) => {
  const [x, y] = [lum(a), lum(b)];
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};
/** Text `fg` at `opacity` over `bg`, as painted. */
const contrast = (fg: string, bg: number[] | string, opacity = 1) => {
  const ground = typeof bg === "string" ? rgb(bg) : bg;
  return ratio(mix(rgb(fg), ground, opacity), ground);
};
const opacityOf = (body: string) => Number(decl(body, "opacity") ?? 1);

describe("R-08: the year-chip rank numerals hold AA on paper", () => {
  const CSS = read("app/records/africas-biggest/africas-biggest.module.css");
  const rank = (css: string) => rules(css).find((r) => r.selector === ".chipRank")!.body;
  const PAPER = token("--bg").light;
  // Burna Boy's chip: his gold over the chip's own wash, 14% x the light --wash-strength.
  const washStrength = Number(GLOBALS.match(/:root\[data-theme="light"\]\s*\{[^}]*--wash-strength:\s*([\d.]+)/)![1]);
  const himPlate = mix(rgb(token("--gold-wash-base").light), rgb(PAPER), 0.14 * washStrength);

  it("muted by colour (--text-muted), at full strength; his chip keeps its gold at full strength", () => {
    expect(decl(rank(CSS), "color")).toBe("var(--text-muted)");
    expect(opacityOf(rank(CSS))).toBe(1);
    expect(winning(CSS, ".chipHim .chipRank", "color", () => true)).toBe("inherit");
    expect(contrast(token("--text-muted").light, PAPER)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(token("--text-muted").dark, token("--bg").dark)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(token("--gold-ink").light, himPlate)).toBeGreaterThanOrEqual(4.5);
  });

  it("negative control: the shipped rule — 70% of the chip's ink — fails on paper", () => {
    const shipped = `.chipRank { font-family: var(--font-mono), monospace; font-size: 11px; font-weight: 700; opacity: 0.7; }`;
    const o = opacityOf(rank(shipped));
    expect(contrast(token("--text-body").light, PAPER, o)).toBeLessThan(4.5); // 3.95 measured
    expect(contrast(token("--gold-ink").light, himPlate, o)).toBeLessThan(4.5);
  });
});

describe("MU-28: the live-charts 'no change' dash is text, at full --text-muted", () => {
  const flat = (css: string) => rules(css).find((r) => r.selector === ".moveFlat")!.body;
  it("no opacity on it, and --text-muted holds AA in both themes", () => {
    const body = flat(read("app/live-charts/liveCharts.module.css"));
    expect(decl(body, "color")).toBe("var(--text-muted)");
    expect(opacityOf(body)).toBe(1);
    expect(contrast(token("--text-muted").light, token("--bg").light)).toBeGreaterThanOrEqual(4.5);
    expect(contrast(token("--text-muted").dark, token("--bg").dark)).toBeGreaterThanOrEqual(4.5);
  });
  it("negative control: the shipped half opacity", () => {
    const o = opacityOf(flat(`.moveFlat { font-size: 0.8rem; color: var(--text-muted); opacity: 0.5; }`));
    expect(contrast(token("--text-muted").light, token("--bg").light, o)).toBeLessThan(3); // 2.11 measured
  });
});

describe("B-09: a focused board tile has its own ring, unlike the anchor's frame and visible on paper", () => {
  // Inside a .photoTile the dark palette is pinned, so a tile's tokens take
  // their DARK value in both themes; the page around it takes the theme's.
  const island = (name: string) => token(name).dark;
  const ring = (file: string, selector: string) =>
    rules(read(file)).find((r) => r.selector.split(",").map((s) => s.trim()).includes(selector))?.body;
  const cases: [string, string][] = [
    ["app/afrobeats/afrobeats.module.css", ".tile:focus-visible"],
    ["app/components/mobileAfrobeatsHub.module.css", ".tile:focus-visible"],
    ["app/components/mobileAfrobeatsHub.module.css", ".door:focus-visible"],
  ];
  const anchorFrame = decl(rules(read("app/afrobeats/afrobeats.module.css")).find((r) => r.selector === ".tileAnchor::after")!.body, "border")!;

  for (const [file, selector] of cases) {
    it(`${file.split("/").pop()} ${selector}`, () => {
      const body = ring(file, selector);
      expect(body, "rule present").toBeDefined();
      const outline = decl(body!, "outline")!;
      const shadow = decl(body!, "box-shadow")!;
      // Not the anchor's gold frame.
      expect(outline).not.toContain("var(--gold");
      expect(anchorFrame).toContain("var(--gold)");
      // Two tones: the island's light ink inside, its near-black ground outside.
      expect(outline).toBe("2px solid var(--text)");
      expect(shadow).toBe("0 0 0 2px var(--bg)");
      // Over its neighbours (they would paint over the outer ring).
      expect(Number(decl(body!, "z-index"))).toBeGreaterThan(0);
      // >= 3:1 (non-text) on either page: the dark outer ring on paper, the
      // light inner ring against the island's own dark ground on a dark page.
      expect(contrast(island("--bg"), token("--bg").light)).toBeGreaterThanOrEqual(3);
      expect(contrast(island("--text"), token("--bg").dark)).toBeGreaterThanOrEqual(3);
    });
  }

  it("negative control: the shipped ring is the global gold — the frame's colour, 1.25:1 on paper", () => {
    const global = rules(GLOBALS).find((r) => r.selector.startsWith("a:focus-visible"))!;
    expect(decl(global.body, "outline")).toBe("2px solid var(--gold)");
    expect(anchorFrame).toBe("2px solid var(--gold)");
    // --gold is --gold-ink; inside the island it is the dark value, on paper.
    expect(contrast(island("--gold-ink"), token("--bg").light)).toBeLessThan(3);
  });
});

describe("QW13: the texts that sat under the 11px floor", () => {
  const LABEL = Number(GLOBALS.match(/--type-label:\s*([\d.]+)px/)![1]);
  const px = (v: string | undefined) => (v === "var(--type-label)" ? LABEL : parseFloat(v ?? "NaN"));
  const cases: [string, string, string][] = [
    ["app/records/cars/cars.module.css", ".tileBadge", "10px"],
    ["app/records/cars/cars.module.css", ".mFormerTag", "10.5px"],
    ["app/components/mobileDeepPage.module.css", ".tileBadge", "10px"],
    ["app/components/mobileDeepPage.module.css", ".tileSub", "10.5px"],
    ["app/music/listeners/listeners.module.css", ".cityCountry", "10.5px"],
    ["app/components/mobileListeners.module.css", ".cityCountry", "10px"],
    ["app/components/mobileMethodology.module.css", ".areaTag", "10px"],
  ];
  it("the floor token is 11px", () => expect(LABEL).toBe(11));
  for (const [file, selector, shipped] of cases) {
    it(`${file.split("/").pop()} ${selector}: on the floor (shipped ${shipped})`, () => {
      const size = winning(read(file), selector, "font-size", () => true);
      expect(px(size)).toBeGreaterThanOrEqual(11);
      expect(px(shipped)).toBeLessThan(11); // negative control: the shipped size
    });
  }
});
