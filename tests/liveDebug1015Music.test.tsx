import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { render, act } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import SongPage from "../app/music/[song]/page";
import AlbumPage from "../app/music/albums/[album]/page";
import songStyles from "../app/music/[song]/song.module.css";
import { decl, read, rules } from "./fixtures/cssRules";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import storyStyles from "../app/components/DaiDaiStory.module.css";
import { CHAPTER_IDS } from "../app/lib/daiDaiChapters";

/**
 * The live debug pass of 15 Oct 2026, music lane (/music/[song],
 * /music/albums/[album], /dai-dai, /music/listeners). Each block holds one
 * finding; each negative control is what the site shipped (origin/main
 * 51ad46b1), pasted verbatim.
 */

const SONG_CSS = "app/music/[song]/song.module.css";
const PHONE = "@media (max-width: 900px)";

const host = (html: string) => {
  const d = document.createElement("div");
  d.innerHTML = html;
  return d;
};

// ── music-01 ────────────────────────────────────────────────────────────────

describe("music-01: the last onward button clears the fixed action bar on a phone", () => {
  /** A phone-block value of `prop` on `.cls` (the last rule naming it exactly). */
  const phone = (css: string, cls: string, prop: string) => {
    let v: string | undefined;
    for (const r of rules(css)) {
      if (r.media !== PHONE || !r.selector.split(",").map((s) => s.trim()).includes(`.${cls}`)) continue;
      v = decl(r.body, prop) ?? v;
    }
    return v;
  };
  const INSET = "env(safe-area-inset-bottom, 22px)";
  /** A length as px plus whether it adds the home indicator's inset. */
  const length = (v: string) => {
    const m = v.match(/^calc\(([\d.]+)px \+ (env\([^)]*\))\)$/);
    if (m) return { px: Number(m[1]), inset: m[2] === INSET };
    expect(v, "a plain length or calc(Npx + inset)").toMatch(/^[\d.]+px$/);
    return { px: parseFloat(v), inset: false };
  };
  /** The four sides of a padding shorthand. */
  const sides = (v: string) => {
    const p = v.match(/calc\([^)]*\)\)|[^\s]+/g)!;
    const [t, r = t, b = t, l = r] = p;
    return { t, r, b, l };
  };

  /** The fixed bar's height on a phone, from its own rules, with inset `i`. */
  function barHeight(css: string, i: number): number {
    const pad = sides(phone(css, "mobileActionBar", "padding")!);
    const top = length(pad.t);
    const bottom = length(pad.b);
    const border = parseFloat(phone(css, "mobileActionBar", "border-top")!);
    const row = Math.max(parseFloat(phone(css, "mobilePrimary", "min-height")!), parseFloat(phone(css, "mobileShare", "height")!));
    return border + top.px + row + bottom.px + (bottom.inset ? i : 0);
  }
  /** Room under the last onward button, with inset `i`: the phone's
   *  padding-bottom, else the bottom of its padding shorthand. */
  function onwardRoom(css: string, i: number): number {
    const b = length(phone(css, "onward", "padding-bottom") ?? sides(phone(css, "onward", "padding")!).b);
    return b.px + (b.inset ? i : 0);
  }

  it("the bar is 75px plus the inset", () => {
    expect(barHeight(read(SONG_CSS), 0)).toBe(75);
    expect(barHeight(read(SONG_CSS), 34)).toBe(109);
  });

  it.each([0, 34])("with a %ipx home indicator, at least 16px of air between the button and the bar", (i) => {
    const css = read(SONG_CSS);
    expect(onwardRoom(css, i) - barHeight(css, i)).toBeGreaterThanOrEqual(16);
  });

  it("negative control: the shipped fixed 76px — 1px clear with no inset, 33px under the bar on an iPhone", () => {
    // origin/main 51ad46b1, the phone block of song.module.css.
    const shipped = read(SONG_CSS).replace(
      /\.onward \{ padding: 28px 18px; padding-bottom: calc\(95px \+ env\(safe-area-inset-bottom, 22px\)\); \}/,
      ".onward { padding: 28px 18px 76px; }",
    );
    expect(shipped).toContain(".onward { padding: 28px 18px 76px; }");
    expect(onwardRoom(shipped, 0) - barHeight(shipped, 0)).toBe(1);
    expect(onwardRoom(shipped, 34) - barHeight(shipped, 34)).toBe(-33);
  });

  it.each([
    ["/music/last-last", () => SongPage({ params: Promise.resolve({ song: "last-last" }) })],
    ["/music/albums/love-damini", () => AlbumPage({ params: Promise.resolve({ album: "love-damini" }) })],
  ])("%s: the onward row is the page's last section, over the same fixed bar", async (_, page) => {
    const d = host(renderToStaticMarkup((await page()) as React.ReactElement));
    const onward = d.querySelector(`section.${songStyles.onward}`);
    expect(onward).not.toBeNull();
    expect(onward!.querySelectorAll(".btn").length).toBeGreaterThan(0);
    expect(d.querySelector(`.${songStyles.mobileActionBar}`)).not.toBeNull();
    const sections = [...d.querySelectorAll("section")];
    expect(sections.at(-1)).toBe(onward);
  });
});

// ── music-03 ────────────────────────────────────────────────────────────────

describe("music-03: after a hero-tile jump the phone counter names the chapter on screen", () => {
  type IORecord = { cb: IntersectionObserverCallback; opts?: IntersectionObserverInit; targets: Element[] };

  /** Record the observers the back bar makes, at phone width. */
  function phoneObservers() {
    const ios: IORecord[] = [];
    const ros: { cb: ResizeObserverCallback; targets: Element[] }[] = [];
    const IO0 = window.IntersectionObserver;
    const RO0 = window.ResizeObserver;
    const MM0 = window.matchMedia;
    window.IntersectionObserver = class {
      rec: IORecord;
      constructor(cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) {
        this.rec = { cb, opts, targets: [] };
        ios.push(this.rec);
      }
      observe(t: Element) {
        this.rec.targets.push(t);
      }
      unobserve() {}
      disconnect() {
        this.rec.targets = [];
      }
      takeRecords() {
        return [];
      }
    } as unknown as typeof IntersectionObserver;
    window.ResizeObserver = class {
      rec: { cb: ResizeObserverCallback; targets: Element[] };
      constructor(cb: ResizeObserverCallback) {
        this.rec = { cb, targets: [] };
        ros.push(this.rec);
      }
      observe(t: Element) {
        this.rec.targets.push(t);
      }
      unobserve() {}
      disconnect() {}
    } as unknown as typeof ResizeObserver;
    window.matchMedia = ((q: string) => ({
      matches: /max-width: 900px/.test(q),
      media: q,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
    })) as unknown as typeof window.matchMedia;
    return {
      ios,
      ros,
      restore() {
        window.IntersectionObserver = IO0;
        window.ResizeObserver = RO0;
        window.matchMedia = MM0;
      },
    };
  }

  const BAR_BOTTOM = 69;
  const LINE = BAR_BOTTOM + 24;
  /** Each chapter's kicker below its top on a 390 phone, measured live after
   *  the jump (the figure is laid out above it): dd-ch02..05. */
  const KICKER_BELOW: Record<string, number> = { "dd-ch02": 281, "dd-ch03": 338, "dd-ch04": 221, "dd-ch05": 327 };
  const CHAPTER_H = 760;

  /** The page as it stands after a jump to `id`: that chapter's top at the
   *  site's 88px scroll margin, the rest stacked above and below it. */
  function geometry(chapters: Element[], id: string) {
    const at = chapters.findIndex((c) => c.id === id);
    expect(at, id).toBeGreaterThan(0);
    const top = new Map<Element, number>();
    chapters.forEach((c, i) => {
      const t = 88 + (i - at) * CHAPTER_H;
      top.set(c, t);
      const k = c.querySelector("[data-dd-kicker]");
      if (k) top.set(k, t + (KICKER_BELOW[c.id] ?? 300));
    });
    return top;
  }

  /** The bar's own rule, applied to the elements it watches: the last one
   *  whose top has crossed the line, else the first. */
  const counterFor = (watched: Element[], top: Map<Element, number>) => {
    let current = 0;
    watched.forEach((w, i) => {
      if (top.get(w)! <= LINE) current = i;
    });
    return `${String(current + 1).padStart(2, "0")} / 07`;
  };

  it.each([
    ["/dai-dai", DaiDaiPage],
    ["/dai-dai/es", DaiDaiPageES],
  ])("%s: every chapter box carries the counter's mark, with or without an anchor", (_, Page) => {
    const d = host(renderToStaticMarkup(<Page />));
    const boxes = [...d.querySelectorAll(`.${storyStyles.chapter}`)];
    expect(boxes).toHaveLength(7);
    expect(boxes.every((b) => b.hasAttribute("data-dd-chapter"))).toBe(true);
    expect(boxes.filter((b) => !b.id).length).toBeGreaterThan(0);
    expect(d.querySelectorAll("[data-dd-chapter]")).toHaveLength(7);
  });

  it.each([
    ["/dai-dai", DaiDaiPage],
    ["/dai-dai/es", DaiDaiPageES],
  ])("%s: each hero-tile jump reads as the chapter it lands on", (_, Page) => {
    const rec = phoneObservers();
    try {
      const view = render(<Page />);
      const bar = view.container.querySelector(`.${storyStyles.backBar}`)!;
      const step = () => bar.querySelector(`.${storyStyles.backStep}`)!.textContent;
      bar.getBoundingClientRect = () => ({ bottom: BAR_BOTTOM }) as DOMRect;
      const ro = rec.ros.find((r) => r.targets.includes(bar))!;
      act(() => ro.cb([], {} as ResizeObserver));
      const chapters = [...view.container.querySelectorAll(`.${storyStyles.chapter}`)];
      const io = rec.ios.find((r) => r.opts?.rootMargin === `-${LINE}px 0px 10000% 0px`)!;
      // The bar watches the chapter boxes themselves.
      expect(io.targets).toEqual(chapters);

      for (const [n, id] of Object.values(CHAPTER_IDS).map((id) => [Number(id.slice(-2)), id] as const)) {
        const top = geometry(chapters, id);
        act(() =>
          io.cb(
            io.targets.map(
              (t) => ({ target: t, boundingClientRect: { top: top.get(t)!, bottom: top.get(t)! + CHAPTER_H }, rootBounds: { top: LINE } }) as unknown as IntersectionObserverEntry,
            ),
            {} as IntersectionObserver,
          ),
        );
        expect(step(), id).toBe(`${String(n).padStart(2, "0")} / 07`);
        expect(counterFor(chapters, top), id).toBe(step());
      }
    } finally {
      rec.restore();
    }
  });

  it("negative control: the shipped kicker rule gives the previous chapter (01, 02, 03, 04)", () => {
    // origin/main 51ad46b1, app/components/DaiDaiBackBar.tsx:
    const SHIPPED = `      const ks = [...document.querySelectorAll("[data-dd-kicker]")];`;
    const selector = SHIPPED.match(/querySelectorAll\("([^"]+)"\)/)![1];
    const d = host(renderToStaticMarkup(<DaiDaiPage />));
    const chapters = [...d.querySelectorAll(`.${storyStyles.chapter}`)];
    const counters = Object.values(CHAPTER_IDS).map((id) => counterFor([...d.querySelectorAll(selector)], geometry(chapters, id)));
    expect(counters).toEqual(["01 / 07", "02 / 07", "03 / 07", "04 / 07"]);
  });
});
