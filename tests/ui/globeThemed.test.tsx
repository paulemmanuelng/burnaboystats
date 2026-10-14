import { act } from "@testing-library/react";
import { createRoot, type Root } from "react-dom/client";

import GlobeCanvas, { GLOBE_PALETTES } from "../../app/components/GlobeCanvas";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * globeThemed (site review 8 Oct 2026, Job 5 · J5-7, fix 104; owner J5-Q2:
 * globe (b), themed): the home globe follows the page's theme, as the
 * masthead does. On paper: a paper ocean (--bg) inside a 1px --rule edge,
 * not-performed land in --bg-raised with --line borders, performed countries
 * in #945e00, a faint graticule — and no night vignette or gold glow (C-17).
 * Dark is as built. Both homes draw the same component.
 */
const GLOBALS = read("app/globals.css");
/** A token's light and dark values from its light-dark() declaration. */
function pair(name: string): [string, string] {
  const m = new RegExp(`${name}:\\s*light-dark\\(\\s*(#[0-9a-f]{6}|rgba\\([^)]*\\))\\s*,\\s*(#[0-9a-f]{6}|rgba\\([^)]*\\))\\s*\\)`, "i").exec(GLOBALS);
  if (!m) throw new Error(`no light-dark() pair for ${name}`);
  return [m[1], m[2]];
}
const squash = (v: string) => v.replace(/\s+/g, "").toLowerCase();
const rgb = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const lum = (hex: string) =>
  rgb(hex)
    .map((v) => v / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
    .reduce((s, v, i) => s + v * [0.2126, 0.7152, 0.0722][i], 0);
const ratio = (a: string, b: string) => {
  const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

describe("globeThemed: the palettes are the theme's own (fix 104)", () => {
  it("light is the paper tokens and the light gold", () => {
    const L = GLOBE_PALETTES.light;
    expect(L.ocean).toBe(pair("--bg")[0]);
    expect(L.land).toBe(pair("--bg-raised")[0]);
    expect(squash(L.stroke)).toBe(squash(pair("--line")[0]));
    expect(L.performed).toBe("#945e00");
    expect(L.performed).toBe(pair("--gold-fill")[0]);
    expect(squash(L.grid)).toBe("rgba(23,20,15,0.06)");
  });

  it("dark is as built", () => {
    // GlobeCanvas.tsx:20–24 on main e85e6efe.
    expect(GLOBE_PALETTES.dark).toEqual({
      ocean: "#0d0f14",
      land: "#2a2a33",
      performed: "#ffb627",
      stroke: "#0a0a0b",
      grid: "rgba(245,244,240,0.05)",
    });
  });

  it("performed countries stand apart from the rest in both themes (≥ 3:1)", () => {
    for (const p of Object.values(GLOBE_PALETTES)) expect(ratio(p.performed, p.land)).toBeGreaterThanOrEqual(3);
  });

  it("the frame on paper: a 1px --rule edge and no shadow or glow; dark keeps its own", () => {
    const css = read("app/components/GlobeTeaser.module.css");
    const light = rules(css).filter((r) => r.selector === ':global(:root[data-theme="light"]) .canvas');
    expect(light).toHaveLength(1);
    expect(decl(light[0].body, "border")).toBe("1px solid var(--rule)");
    expect(decl(light[0].body, "box-shadow")).toBe("none");
    const base = rules(css).find((r) => r.media === null && r.selector === ".canvas")!;
    expect(decl(base.body, "box-shadow")).toMatch(/inset -22px -14px 46px rgba\(0, 0, 0, 0\.72\)/);
  });
});

describe("globeThemed: the canvas paints the page's theme, and repaints when it flips", () => {
  let root: Root | null = null;
  let host: HTMLDivElement | null = null;
  let fills: string[] = [];
  beforeEach(() => {
    fills = [];
    const ctx = new Proxy(
      {},
      {
        get: (_t, k) => (k === "fillStyle" || k === "strokeStyle" ? "" : () => {}),
        set: (_t, k, v) => {
          if (k === "fillStyle") fills.push(String(v));
          return true;
        },
      },
    );
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(ctx as unknown as CanvasRenderingContext2D);
    vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockReturnValue(200);
    vi.spyOn(HTMLElement.prototype, "clientHeight", "get").mockReturnValue(200);
    class Stub {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    vi.stubGlobal("ResizeObserver", Stub);
    vi.stubGlobal("IntersectionObserver", Stub);
    vi.stubGlobal("matchMedia", () => ({ matches: true, addEventListener() {}, removeEventListener() {} }));
    vi.stubGlobal("requestAnimationFrame", () => 0);
  });
  afterEach(() => {
    act(() => root?.unmount());
    host?.remove();
    root = host = null;
    delete document.documentElement.dataset.theme;
    vi.restoreAllMocks();
    vi.unstubAllGlobals();
  });
  const mount = () => {
    host = document.body.appendChild(document.createElement("div"));
    root = createRoot(host);
    act(() => root!.render(<GlobeCanvas />));
  };

  it("on paper the ocean is paper and the land the paper tokens; no night colour is painted", () => {
    document.documentElement.dataset.theme = "light";
    mount();
    const L = GLOBE_PALETTES.light;
    for (const c of [L.ocean, L.land, L.performed]) expect(fills).toContain(c);
    for (const c of Object.values(GLOBE_PALETTES.dark)) expect(fills).not.toContain(c);
  });

  it("on black the built colours, and a flip to paper repaints in the paper palette", async () => {
    document.documentElement.dataset.theme = "dark";
    mount();
    expect(fills).toContain(GLOBE_PALETTES.dark.ocean);
    expect(fills).not.toContain(GLOBE_PALETTES.light.ocean);
    fills = [];
    await act(async () => {
      document.documentElement.dataset.theme = "light";
      await new Promise((r) => setTimeout(r, 0));
    });
    expect(fills).toContain(GLOBE_PALETTES.light.ocean);
  });

  it("negative control: the shipped single palette painted a night disc on the paper page", () => {
    // GlobeCanvas.tsx:20 on main e85e6efe: const OCEAN = "#0d0f14"; (one
    // palette for both themes).
    const shippedOcean = '#0d0f14';
    const paper = pair("--bg")[0];
    expect(ratio(shippedOcean, paper)).toBeGreaterThan(15);
    expect(GLOBE_PALETTES.light.ocean).not.toBe(shippedOcean);
  });
});
