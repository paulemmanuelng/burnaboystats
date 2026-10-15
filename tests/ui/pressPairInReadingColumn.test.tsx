import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/press",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import PressPage from "../../app/press/page";
import styles from "../../app/press/press.module.css";
import { EMBED_FITS } from "../../app/lib/embedSnippet";
import { EMBED_WIDGETS } from "../../app/lib/embedWidgets";
import { trees } from "../fixtures/phoneTrees";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * pressPairInReadingColumn (Paul, 15 Oct 2026: "yes to Job 6", call 1).
 * On /press at ≥1240, fix 133's band put the default stat card and the live
 * embed across the frame (x 80–1360 at 1440), so it had to start under the
 * downloads, and the reading column ended 620px above them: an empty column
 * beside "Download the data" at 1240 and 1440 (next dev, 15 Oct). The pair
 * now sits in the reading column (x 80–900 at 1440), under "Why the numbers
 * hold up", beside the downloads. J6-3's order stays: trust before the pair,
 * in the source and on screen. The phone is not touched.
 */

const CSS = read("app/press/press.module.css");

/** Does a rule's @media apply at viewport width `w`? */
const applies = (media: string | null, w: number) =>
  media === null ||
  media
    .replace(/^@media\s*/, "")
    .split(/\s+and\s+/)
    .every((part) => {
      const min = part.match(/min-width:\s*(\d+)px/);
      if (min) return w >= Number(min[1]);
      const max = part.match(/max-width:\s*(\d+)px/);
      if (max) return w <= Number(max[1]);
      throw new Error(`unhandled media: ${media}`);
    });

/** A module selector, its class names swapped for the built ones. */
const built = (sel: string) => sel.replace(/\.([A-Za-z_][\w-]*)/g, (_, c: string) => `.${(styles as Record<string, string>)[c] ?? c}`);
/** Class-level specificity is all these rules use: one per class, attribute or pseudo-class. */
const specificity = (sel: string) => (sel.match(/\.[\w-]+|\[[^\]]*\]|:(?!:)[\w-]+/g) ?? []).length;

/** The value press.module.css gives `prop` on `el` at width `w`: highest specificity, then last. */
function cascaded(el: Element, prop: string, w: number, css = CSS): string | undefined {
  let best: { spec: number; at: number; v: string } | undefined;
  for (const r of rules(css)) {
    if (!applies(r.media, w)) continue;
    const v = decl(r.body, prop);
    if (v === undefined) continue;
    for (const sel of r.selector.split(",").map((s) => s.trim())) {
      if (!el.matches(built(sel))) continue;
      const spec = specificity(sel);
      if (!best || spec > best.spec || (spec === best.spec && r.at >= best.at)) best = { spec, at: r.at, v };
    }
  }
  return best?.v;
}

const { desktop } = trees(renderToStaticMarkup(<PressPage />));
const split = desktop!.querySelector(`.${styles.split}`)!;
const pair = desktop!.querySelector("#cards")!.closest("section")!.parentElement!;
const kid = (id: string) => [...split.children].find((c) => c.getAttribute("aria-labelledby") === id)!;

/** The split's numbers, read from its rule at ≥1240. */
function frame(w: number) {
  const body = rules(CSS).filter((r) => applies(r.media, w) && r.selector === ".split").map((r) => r.body).join(";");
  const max = parseFloat(decl(body, "max-width")!);
  const pad = parseFloat(decl(body, "padding-inline")!);
  const gap = parseFloat(decl(body, "column-gap")!);
  const cols = decl(body, "grid-template-columns")!;
  const side = parseFloat(cols.match(/(\d+)px\s*$/)![1]);
  const outer = Math.min(w, max);
  const left = (w - outer) / 2 + pad;
  const reading = outer - 2 * pad - side - gap;
  return { left, right: left + reading, reading, cols };
}

describe("pressPairInReadingColumn: from 1240 the card and the embed are in the reading column", () => {
  it.each([1240, 1440])("%ipx: the pair's column is the reading column's, the downloads' is the other", (w) => {
    expect(pair.className).toContain(styles.assets);
    expect(pair.parentElement).toBe(split);
    expect(cascaded(pair, "grid-column", w)).toBe("1");
    for (const id of ["figures", "cite", "api", "trust"]) expect(cascaded(kid(id), "grid-column", w), id).toBe("1");
    expect(cascaded(kid("downloads"), "grid-column", w)).toBe("2");
    expect(cascaded(kid("downloads"), "grid-row", w)).toBe("1 / -1");
  });

  it("x 80–900 at 1440; at 1240 the column is x 40–740", () => {
    expect(frame(1440).cols).toBe("minmax(0, 1fr) 420px");
    expect([frame(1440).left, frame(1440).right]).toEqual([80, 900]);
    expect([frame(1240).left, frame(1240).right]).toEqual([40, 740]);
  });

  it.each([1240, 1440])("%ipx: side by side, each half holds the embed at a width it is built for", (w) => {
    expect(cascaded(pair, "display", w)).toBe("grid");
    expect(cascaded(pair, "grid-template-columns", w)).toBe("repeat(2, minmax(0, 1fr))");
    const gap = parseFloat(cascaded(pair, "column-gap", w)!);
    const half = (frame(w).reading - gap) / 2;
    const embed = EMBED_WIDGETS[0];
    expect(half).toBeGreaterThanOrEqual(EMBED_FITS.min);
    // the card and the embed shrink to their half (max-width: 100%), never past it
    expect(Math.min(embed.width, half)).toBeLessThanOrEqual(half);
    if (w === 1440) expect(half).toBeGreaterThanOrEqual(embed.width); // both at their own 360
  });

  it("J6-3's order stays: trust, then the pair, last in the split, in the source and on screen", () => {
    expect(split.lastElementChild).toBe(pair);
    expect(pair.previousElementSibling).toBe(kid("trust"));
    const left = [...split.children].filter((c) => cascaded(c, "grid-column", 1440) === "1");
    expect(left.map((c) => c.getAttribute("aria-labelledby") ?? (c === pair ? "pair" : "?"))).toEqual(["figures", "cite", "api", "trust", "pair"]);
    expect(cascaded(split, "grid-auto-flow", 1440) ?? "row").not.toMatch(/dense/);
  });

  it("below 1240 nothing moves: the split is a block and the pair is last, two-up from 901", () => {
    expect(cascaded(split, "display", 1239)).toBeUndefined();
    expect(cascaded(pair, "grid-column", 1239)).toBeUndefined();
    expect(cascaded(pair, "grid-template-columns", 1024)).toBe("repeat(2, minmax(0, 1fr))");
  });

  it("negative control: main's band spans both columns from 1240", () => {
    // app/press/press.module.css on 51ad46b1, line 203, in the 1240 block.
    const main = CSS.replace(/(\.split > \.splitSide \{ grid-column: 2; grid-row: 1 \/ -1; \})/, "$1\n  .split > .assets { grid-column: 1 / -1; }");
    expect(main).not.toBe(CSS);
    expect(cascaded(pair, "grid-column", 1440, main)).toBe("1 / -1");
    expect(cascaded(pair, "grid-column", 1240, main)).toBe("1 / -1");
  });
});
