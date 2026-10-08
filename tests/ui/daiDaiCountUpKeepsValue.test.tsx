import { render, cleanup, act } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

import DaiDaiCountUp from "../../app/components/DaiDaiCountUp";
import styles from "../../app/components/DaiDaiCountUp.module.css";
import { daiDaiChartEntryCount, daiDaiNumberOnes } from "../../app/data/charts";
import { daiDaiCertCount } from "../../app/data/certifications";
import { read, rules, decl } from "../fixtures/cssRules";

/**
 * Design review of 8 Oct 2026, quick win 4 (MU-02). Dai Dai's "by the
 * numbers" count-up wrote "0" into each figure's text as soon as it learnt the
 * figure started below the fold, and the live figure went to opacity 0 — so
 * until a reader scrolled there the page held zeros. Read from the live DOM
 * without scrolling, at 390 and at 1440: "0 · 0 · No. 1 · 499M (opacity 0) ·
 * 0 · 19 Jul". A phone's full-page screenshot, a printout, reader mode and a
 * translation all took the zeros.
 *
 * Now the figure's own text is the real figure at every moment; the count is
 * an aria-hidden face drawn over it while the figure arrives, print shows the
 * real figure whatever the motion is doing, and reduced motion runs nothing.
 */

type Entry = Pick<IntersectionObserverEntry, "isIntersecting" | "intersectionRatio">;
let report: (e: Entry) => void = () => {};
let frames: FrameRequestCallback[] = [];
let clock = 0;
let reduced = false;

beforeEach(() => {
  frames = [];
  clock = 0;
  reduced = false;
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      constructor(cb: IntersectionObserverCallback) {
        report = (e) => cb([e as IntersectionObserverEntry], this as unknown as IntersectionObserver);
      }
      observe() {}
      unobserve() {}
      disconnect() {}
      takeRecords() {
        return [];
      }
    },
  );
  vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => frames.push(cb));
  vi.stubGlobal("cancelAnimationFrame", () => {});
  vi.spyOn(performance, "now").mockImplementation(() => clock);
  vi.spyOn(window, "matchMedia").mockImplementation(
    (q: string) => ({ matches: reduced && /reduce/.test(q), media: q, addEventListener() {}, removeEventListener() {} }) as unknown as MediaQueryList,
  );
});
afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

/** The text a printout, a translation or a screen reader takes: everything
 *  but what is hidden from the accessibility tree. */
function readable(el: Element) {
  const clone = el.cloneNode(true) as Element;
  clone.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
  return clone.textContent;
}
const runFrames = (ts: number) => {
  const due = frames;
  frames = [];
  act(() => due.forEach((cb) => cb(ts)));
};

const figures = [
  ["official chart entries", daiDaiChartEntryCount],
  ["countries at No. 1", daiDaiNumberOnes],
  ["certifications", daiDaiCertCount],
] as const;

describe("MU-02: the real figure is in the page at every moment", () => {
  it("the server HTML holds each figure, and the face is empty and aria-hidden", () => {
    for (const [, n] of figures) {
      const d = new DOMParser().parseFromString(renderToStaticMarkup(<DaiDaiCountUp value={String(n)} />), "text/html");
      const root = d.body.firstElementChild!;
      expect(readable(root)).toBe(String(n));
      const face = root.querySelector(`.${styles.face}`)!;
      expect(face.getAttribute("aria-hidden")).toBe("true");
      expect(face.textContent).toBe("");
    }
  });

  for (const [name, n] of figures) {
    it(`${name} (${n}): below the fold, entering, counting and done — the text is ${n} throughout`, () => {
      const { container } = render(<DaiDaiCountUp value={String(n)} />);
      const el = container.firstElementChild as HTMLElement;
      const face = el.querySelector(`.${styles.face}`)!;
      // Armed below the fold: nothing changes, not even visually.
      act(() => report({ isIntersecting: false, intersectionRatio: 0 }));
      expect(readable(el)).toBe(String(n));
      expect(el.hasAttribute("data-counting")).toBe(false);
      // Entering the viewport: the face stands at 0 over the real figure.
      act(() => report({ isIntersecting: true, intersectionRatio: 0.2 }));
      expect(readable(el)).toBe(String(n));
      expect(el.hasAttribute("data-counting")).toBe(true);
      expect(face.textContent).toBe("0");
      // Half in view: the face counts; the figure's text never moves.
      clock = 1000;
      act(() => report({ isIntersecting: true, intersectionRatio: 0.6 }));
      for (const ts of [1000, 1100, 1300, 1500]) {
        runFrames(ts);
        expect(readable(el)).toBe(String(n));
        expect(Number(face.textContent)).toBeLessThanOrEqual(n);
      }
      runFrames(1600);
      expect(el.hasAttribute("data-counting")).toBe(false);
      expect(face.textContent).toBe("");
      expect(readable(el)).toBe(String(n));
    });
  }

  it("scrolled back out before the count began, the face goes and the figure is bare again", () => {
    const { container } = render(<DaiDaiCountUp value="70" />);
    const el = container.firstElementChild as HTMLElement;
    act(() => report({ isIntersecting: false, intersectionRatio: 0 }));
    act(() => report({ isIntersecting: true, intersectionRatio: 0.2 }));
    expect(el.hasAttribute("data-counting")).toBe(true);
    act(() => report({ isIntersecting: false, intersectionRatio: 0 }));
    expect(el.hasAttribute("data-counting")).toBe(false);
  });

  it("the live figure is not hidden below the fold; it fades only as it arrives", () => {
    const { container } = render(<DaiDaiCountUp value="499M" live />);
    const el = container.firstElementChild as HTMLElement;
    act(() => report({ isIntersecting: false, intersectionRatio: 0 }));
    expect(el.style.opacity).toBe("");
    act(() => report({ isIntersecting: true, intersectionRatio: 0.6 }));
    runFrames(16);
    expect(el.style.opacity).toBe("1");
    expect(readable(el)).toBe("499M");
  });

  it("under reduced motion nothing runs: no face, no fade", () => {
    reduced = true;
    const { container } = render(<DaiDaiCountUp value="70" />);
    const el = container.firstElementChild as HTMLElement;
    act(() => report({ isIntersecting: false, intersectionRatio: 0 }));
    act(() => report({ isIntersecting: true, intersectionRatio: 0.2 }));
    expect(el.hasAttribute("data-counting")).toBe(false);
  });

  it("print shows the figure: the face hidden, the figure's ink and full opacity restored", () => {
    const print = rules(read("app/components/DaiDaiCountUp.module.css")).filter((r) => r.media === "@media print");
    const body = (sel: string) => print.find((r) => r.selector === sel)?.body ?? "";
    expect(decl(body(".face"), "display")).toBe("none !important");
    expect(decl(body(".count[data-counting] .value"), "color")).toBe("inherit");
    expect(decl(body(".count"), "opacity")).toBe("1 !important");
  });

  it("the face's digits sit where the figure's do: it spans the figure's box and centres its line", () => {
    // Measured in headless Chrome mid-count (Range boxes of the figure's text
    // and the face's): as a block from top: 0 the face took .leadValue's
    // line-height 0.95, a line box shorter than the figure's text box (78px at
    // 52px), and its digits sat 15px high at 1440, 13px at 1024 and 10px at
    // 390, then dropped into place as the count ended. Spanning the figure's
    // own box, top to bottom, with its line centred, the baseline is the
    // figure's whatever the line-height or the font's metrics: measured
    // within 1px at all three widths, /dai-dai and /dai-dai/es.
    const css = read("app/components/DaiDaiCountUp.module.css");
    const face = rules(css).find((r) => r.media === null && r.selector === ".count[data-counting] .face")?.body ?? "";
    expect(decl(face, "position")).toBe("absolute");
    expect(decl(face, "top")).toBe("0");
    expect(decl(face, "bottom")).toBe("0");
    expect(decl(face, "display")).toBe("flex");
    expect(decl(face, "align-items")).toBe("center");
    // The figure is the box the face is placed against.
    expect(decl(rules(css).find((r) => r.media === null && r.selector === ".count")?.body ?? "", "position")).toBe("relative");
  });

  it("negative control: the first pass's face, a block from top: 0, had no box to centre in", () => {
    const firstPass = `display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  white-space: nowrap;`;
    expect(decl(firstPass, "bottom")).toBeUndefined();
    expect(decl(firstPass, "align-items")).toBeUndefined();
  });

  it("negative control: the shipped component left '0' in the text below the fold", () => {
    // DaiDaiCountUp as shipped rendered `<span>{value}</span>` and, once armed
    // below the fold, ran `text.nodeValue = "0"` (and `el.style.opacity = "0"`
    // for the live figure): the page read the six lead figures as
    // "0 · 0 · No. 1 · 499M (opacity 0) · 0 · 19 Jul".
    const shippedArmed = new DOMParser().parseFromString("<span>0</span>", "text/html").body.firstElementChild!;
    for (const [, n] of figures) expect(readable(shippedArmed)).not.toBe(String(n));
  });
});
