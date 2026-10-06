import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import type { ReactNode } from "react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import { songs, daiDaiStoryPage } from "../../app/data/songs";

/**
 * V-music-01, the full-site debug of 5 Oct 2026: the song picker ("All 15
 * song pages", one row both layouts share) always opened at its start, so the
 * chip for the song being read — aria-current="page", the one in the N2 wash —
 * was off-row on 12 of the 14 song pages at 390 (On the Low to Smoke;
 * Smoke's chip at x=2232–2373 in a row spanning 18–372) and cut at the edge on
 * Ye; at 1440 it was off-row on TaTaTa to Smoke and cut on 23. Measured
 * live in headless Chrome: scrollLeft 0 on every page, both widths.
 *
 * jsdom does no layout, so the row is laid out here the way Chrome laid it
 * out on the live site: each chip's measured width, 8px gaps, the row from
 * x=18 (354px wide) on a phone and from x=40 (1360px) at 1440, and a
 * scrollLeft that clamps like a browser's. The fix was also grafted onto the
 * live pages (all 14 at 320, 390, 768, 1024 and 1440, dark and light): every
 * current chip whole in the row, centred unless the row's end is reached, the
 * page itself never scrolled (also from mid-page), no overflow.
 */
const GAP = 8;
/** Chip widths at 390 and 1440 (the same font at both), live, 5 Oct 2026. */
const WIDTH: Record<string, number> = {
  "/dai-dai": 142,
  "/music/last-last": 157,
  "/music/ye": 114,
  "/music/on-the-low": 169,
  "/music/wgft": 136,
  "/music/city-boys": 158,
  "/music/jerusalema": 222,
  "/music/alone": 135,
  "/music/23": 115,
  "/music/tatata": 141,
  "/music/rizzla": 137,
  "/music/boshe-nlo": 163,
  "/music/darko": 135,
  "/music/like-to-party": 178,
  "/music/smoke": 141,
};
const widthOf = (a: Element) => WIDTH[a.getAttribute("href") ?? ""] ?? 150;
const SCREENS = { "390": { left: 18, width: 354 }, "1440": { left: 40, width: 1360 } } as const;
let row: (typeof SCREENS)[keyof typeof SCREENS] = SCREENS["390"];

const scrolls = new WeakMap<Element, number>();
/** The picker: the row whose first chip is the Dai Dai story's. */
const isRail = (el: Element) => el.firstElementChild?.getAttribute("href") === daiDaiStoryPage.href;
const chips = (rail: Element) => [...rail.children];
const contentWidth = (rail: Element) => chips(rail).reduce((t, c, i) => t + widthOf(c) + (i ? GAP : 0), 0);
const maxScroll = (rail: Element) => Math.max(0, contentWidth(rail) - row.width);
const rect = (left: number, width: number) =>
  ({ left, right: left + width, width, top: 0, bottom: 46, height: 46, x: left, y: 0 }) as DOMRect;

let scrollIntoView: ReturnType<typeof vi.fn>;
beforeEach(() => {
  row = SCREENS["390"];
  const desc = (p: "scrollLeft" | "scrollWidth" | "clientWidth") => Object.getOwnPropertyDescriptor(Element.prototype, p)!;
  const scrollLeft = desc("scrollLeft");
  vi.spyOn(Element.prototype, "scrollLeft", "get").mockImplementation(function (this: Element) {
    return isRail(this) ? (scrolls.get(this) ?? 0) : scrollLeft.get!.call(this);
  });
  vi.spyOn(Element.prototype, "scrollLeft", "set").mockImplementation(function (this: Element, v: number) {
    if (isRail(this)) scrolls.set(this, Math.min(Math.max(0, v), maxScroll(this)));
    else scrollLeft.set!.call(this, v);
  });
  const scrollWidth = desc("scrollWidth");
  vi.spyOn(Element.prototype, "scrollWidth", "get").mockImplementation(function (this: Element) {
    return isRail(this) ? Math.max(contentWidth(this), row.width) : scrollWidth.get!.call(this);
  });
  const clientWidth = desc("clientWidth");
  vi.spyOn(Element.prototype, "clientWidth", "get").mockImplementation(function (this: Element) {
    return isRail(this) ? row.width : clientWidth.get!.call(this);
  });
  const original = Element.prototype.getBoundingClientRect;
  vi.spyOn(Element.prototype, "getBoundingClientRect").mockImplementation(function (this: Element) {
    if (isRail(this)) return rect(row.left, row.width);
    const rail = this.parentElement;
    if (rail && isRail(rail)) {
      const before = chips(rail).slice(0, chips(rail).indexOf(this));
      const x = before.reduce((t, c) => t + widthOf(c) + GAP, 0);
      return rect(row.left + x - (scrolls.get(rail) ?? 0), widthOf(this));
    }
    return original.call(this);
  });
  // The row moves; the page must not (a reload restored mid-page).
  scrollIntoView = vi.fn();
  Element.prototype.scrollIntoView = scrollIntoView as unknown as Element["scrollIntoView"];
});
afterEach(() => {
  cleanup();
  vi.doUnmock("../../app/music/[song]/PickerRail");
  vi.restoreAllMocks();
  // @ts-expect-error jsdom has no scrollIntoView of its own
  delete Element.prototype.scrollIntoView;
});

async function songPage({ shipped = false } = {}) {
  vi.resetModules();
  if (shipped) {
    // Negative control: the row as it shipped, a plain <div> nothing scrolled.
    vi.doMock("../../app/music/[song]/PickerRail", async (importOriginal) => ({
      ...(await importOriginal<typeof import("../../app/music/[song]/PickerRail")>()),
      default: ({ className, children }: { className: string; children: ReactNode }) => <div className={className}>{children}</div>,
    }));
  }
  return (await import("../../app/music/[song]/page")).default;
}

/** Where the current song's chip sits in the row once the page has mounted. */
async function picker(slug: string, opts: { shipped?: boolean } = {}) {
  const SongPage = await songPage(opts);
  const { container } = render(await SongPage({ params: Promise.resolve({ song: slug }) }));
  const current = container.querySelectorAll('a[aria-current="page"]');
  expect(current, `one current chip on /music/${slug}`).toHaveLength(1);
  const chip = current[0];
  const rail = chip.parentElement!;
  expect(isRail(rail)).toBe(true);
  const r = rail.getBoundingClientRect();
  const c = chip.getBoundingClientRect();
  return {
    whole: c.left >= r.left && c.right <= r.right,
    partly: c.right > r.left && c.left < r.right,
    centreOff: Math.round((c.left + c.right) / 2 - (r.left + r.right) / 2),
    scrollLeft: rail.scrollLeft,
    max: maxScroll(rail),
  };
}

const slugs = songs.map((s) => s.slug);

describe("V-music-01: the song picker opens on the current song's chip", () => {
  it.each(Object.keys(SCREENS))("at %s every song page shows its own chip whole, centred where the row allows", async (w) => {
    row = SCREENS[w as keyof typeof SCREENS];
    for (const slug of slugs) {
      const p = await picker(slug);
      expect(p.whole, `/music/${slug} at ${w}`).toBe(true);
      // Centred, unless the row is already at an end (the first and last songs).
      if (p.scrollLeft > 0 && p.scrollLeft < p.max) expect(Math.abs(p.centreOff), `/music/${slug} at ${w}`).toBeLessThanOrEqual(1);
      cleanup();
    }
    expect(scrollIntoView).not.toHaveBeenCalled();
  });

  it("the row's ends hold: the first songs stay at the start at 1440, Smoke ends flush right", async () => {
    row = SCREENS["1440"];
    expect((await picker("last-last")).scrollLeft).toBe(0);
    cleanup();
    const smoke = await picker("smoke");
    expect(smoke.scrollLeft).toBe(smoke.max);
    expect(smoke.whole).toBe(true);
  });

  it("negative control: the shipped row hid the current chip on 12 of 14 pages at 390 and 6 at 1440, as measured live", async () => {
    const hidden: Record<string, string[]> = {};
    const cut: Record<string, string[]> = {};
    for (const w of Object.keys(SCREENS)) {
      row = SCREENS[w as keyof typeof SCREENS];
      hidden[w] = [];
      cut[w] = [];
      for (const slug of slugs) {
        const p = await picker(slug, { shipped: true });
        expect(p.scrollLeft).toBe(0);
        if (!p.partly) hidden[w].push(slug);
        else if (!p.whole) cut[w].push(slug);
        cleanup();
      }
    }
    expect(hidden["390"]).toEqual(["on-the-low", "wgft", "city-boys", "jerusalema", "alone", "23", "tatata", "rizzla", "boshe-nlo", "darko", "like-to-party", "smoke"]);
    expect(cut["390"]).toEqual(["ye"]);
    expect(hidden["1440"]).toEqual(["tatata", "rizzla", "boshe-nlo", "darko", "like-to-party", "smoke"]);
    expect(cut["1440"]).toEqual(["23"]);
  });
});
