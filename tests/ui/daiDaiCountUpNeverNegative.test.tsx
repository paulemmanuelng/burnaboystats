import { render, cleanup, act } from "@testing-library/react";

import DaiDaiCountUp from "../../app/components/DaiDaiCountUp";
import { daiDaiChartEntryCount, daiDaiNumberOnes } from "../../app/data/charts";
import { daiDaiCertCount } from "../../app/data/certifications";

/**
 * V-music-08 (debug pass, 5 Oct 2026): a frame of "Dai Dai en cifras" on
 * /dai-dai/es at 1024, light, read "-3" official chart entries, "-1" countries
 * at No. 1 and "-1" certifications (sweep frame dai-dai_es__1024l-11). The
 * count-up took its start from performance.now() in the IntersectionObserver
 * callback, then fed the frame's timestamp into p = (now − start) / 600, which
 * it only held at 1. A frame's timestamp is when the frame BEGAN, and the
 * callback can run after that — so the first tick's p can sit below 0, and the
 * ease-out 1 − (1 − p)^4 below 0 with it. The sweep's three readings fit one
 * frame 5.3–7.4ms early — 6.3 gives 70 → −3, 26 → −1, 18 → −1 (the figures the
 * page carried that day: text/dai-dai_es.html of the sweep).
 *
 * jsdom draws no frames, so the test stands them in: an observer it can fire,
 * a clock it sets, and a frame queue it runs with the timestamps it chooses.
 */

type Entry = Pick<IntersectionObserverEntry, "isIntersecting" | "intersectionRatio">;

let report: (e: Entry) => void = () => {};
let frames: FrameRequestCallback[] = [];
let clock = 0;

beforeEach(() => {
  frames = [];
  clock = 0;
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
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

/** What a reader SEES: the count's face while it is drawn over the figure,
 *  else the figure itself. Since 8 Oct 2026 (design review MU-02) the figure's
 *  own text never changes; the count is a face laid over it. */
function shown(el: HTMLElement) {
  const [figure, face] = [...el.children] as HTMLElement[];
  return el.hasAttribute("data-counting") ? face.textContent : figure.textContent;
}

/** Run the queued frames once, each stamped `ts`, and return what is shown. */
function frame(el: HTMLElement, ts: number) {
  const due = frames;
  frames = [];
  act(() => due.forEach((cb) => cb(ts)));
  return shown(el);
}

/** Load the figure below the fold, then scroll it half into view at `at` ms. */
function scrollIn(value: string, at: number) {
  const { container } = render(<DaiDaiCountUp value={value} />);
  const el = container.firstElementChild as HTMLElement;
  act(() => report({ isIntersecting: false, intersectionRatio: 0 })); // armed below the fold
  expect(shown(el)).toBe(value); // armed, but the real figure stays (MU-02)
  clock = at;
  act(() => report({ isIntersecting: true, intersectionRatio: 0.6 }));
  return el;
}

const figures = [
  ["official chart entries", daiDaiChartEntryCount],
  ["countries at No. 1", daiDaiNumberOnes],
  ["certifications", daiDaiCertCount],
] as const;

describe("a Dai Dai lead count-up never paints below 0", () => {
  it("the figures it counts are whole numbers above 0 (or nothing would count)", () => {
    for (const [, n] of figures) expect(n).toBeGreaterThan(0);
  });

  for (const [name, n] of figures) {
    it(`${name} (${n}): a first frame stamped 1–16ms before the observer's clock paints 0, not a minus`, () => {
      for (const early of [1, 6.3, 16]) {
        cleanup();
        frames = [];
        const el = scrollIn(String(n), 1000);
        expect(frame(el, 1000 - early)).toBe("0");
      }
    });

    it(`${name} (${n}): the count climbs from 0, never falls, and lands on ${n}`, () => {
      const el = scrollIn(String(n), 1000);
      const seen = [993.7, 1010, 1100, 1250, 1400, 1550, 1600].map((ts) => Number(frame(el, ts)));
      expect(Math.min(...seen)).toBeGreaterThanOrEqual(0);
      for (let i = 1; i < seen.length; i++) expect(seen[i]).toBeGreaterThanOrEqual(seen[i - 1]);
      expect(seen.at(-1)).toBe(n);
      expect(frames).toHaveLength(0); // done: no frame left queued
    });
  }

  it("negative control: the shipped tick, verbatim, paints the sweep's −3 · −1 · −1 from a frame 6.3ms early", () => {
    const shipped = (target: number, now: number, start: number) => {
      const p = Math.min(1, (now - start) / 600);
      const eased = 1 - Math.pow(1 - p, 4);
      return p < 1 ? String(Math.round(target * eased)) : String(target);
    };
    // The page's figures the day the sweep read it; today's are counted up the same way.
    expect([70, 26, 18].map((t) => shipped(t, 993.7, 1000))).toEqual(["-3", "-1", "-1"]);
    for (const [, n] of figures) expect(Number(shipped(n, 993.7, 1000))).toBeLessThan(0);
  });
});
