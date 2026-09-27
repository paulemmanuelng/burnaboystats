import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { act, fireEvent, render, within } from "@testing-library/react";
import { isValidElement, type ReactElement, type ReactNode } from "react";

/**
 * Text paints while you scroll (27 Sep 2026). Paul: on his phone, the On This
 * Day calendar and the Dai Dai page drew their text seconds late while he
 * scrolled. iPhone Safari draws the next strip of a page only when the page's
 * main thread is free, so these guards hold the work that thread did while a
 * reader scrolls — and the sizes that decide it — to what the fix measured:
 *
 *   - On This Day's desktop months are ONE block of server HTML: every date,
 *     label and headline still in the page, none of it for React to rebuild,
 *     hydrate or watch on a phone, where the block is display:none;
 *   - no calendar day link prefetches, so none watches the viewport;
 *   - nothing on Dai Dai runs script on scroll: the back bar's chapter counter
 *     follows IntersectionObservers, and the site bar and back-to-top button
 *     listen only where they can be seen;
 *   - the flag-emoji render test skips the systems that draw flags;
 *   - the replay's phone pass is the chips and the world map, not the whole
 *     module; the world map is not drawn on a phone until picked; the
 *     scrubber leaves vertical swipes to the page.
 *
 * Each check has a negative control built from what the site shipped.
 */

const nav = vi.hoisted(() => ({ push: vi.fn(), path: "/on-this-day" }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: nav.push, prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => nav.path,
}));
// The Link stand-in says whether the link prefetches, the prop that decides
// whether next/link watches it for the viewport.
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch, ...rest }: { href: string; children: ReactNode; prefetch?: boolean }) => (
    <a href={href} data-prefetch={prefetch === false ? "off" : "on"} {...rest}>
      {children}
    </a>
  ),
}));
const flags = vi.hoisted(() => ({ polyfill: vi.fn() }));
vi.mock("country-flag-emoji-polyfill", () => ({ polyfillCountryFlagEmojis: flags.polyfill }));

import CalendarPage from "../app/on-this-day/page";
import styles from "../app/on-this-day/onThisDay.module.css";
import { desktopMonthsHtml } from "../app/on-this-day/desktopMonths";
import StaticLinks from "../app/components/StaticLinks";
import { KindMark } from "../app/components/OnThisDayKind";
import DaiDaiBackBar from "../app/components/DaiDaiBackBar";
import BackToTop from "../app/components/BackToTop";
import Nav from "../app/components/Nav";
import FlagEmojiPolyfill, { DRAWS_FLAGS } from "../app/components/FlagEmojiPolyfill";
import DaiDaiReplay from "../app/components/DaiDaiReplay";
import { buildReplayData } from "../app/components/daiDaiReplayData";
import { EN_REPLAY_LABELS } from "../app/components/daiDaiReplayLabels";
import { worldShapes } from "../app/data/worldShapes";
import {
  MONTHS,
  calendarDayLabel,
  calendarMonthDays,
  calendarToday,
  monthDefault,
  monthSub,
  onThisDayDays,
  type OnThisDayToday,
} from "../app/lib/onThisDay";

const read = (p: string) => readFileSync(p, "utf8");

/** A DOM subtree as text: tags, attributes sorted, text merged — so React's
 *  <!-- --> separators and attribute order do not count, and nothing else is
 *  forgiven. */
function canon(html: string): string {
  const host = document.createElement("div");
  host.innerHTML = html.replace(/<!-- -->/g, "");
  const walk = (n: Node): string => {
    if (n.nodeType === Node.TEXT_NODE) return n.textContent ?? "";
    if (n.nodeType !== Node.ELEMENT_NODE) return "";
    const el = n as Element;
    const attrs = [...el.attributes].map((a) => `${a.name}="${a.value}"`).sort().join(" ");
    return `<${el.localName}${attrs ? " " + attrs : ""}>${[...el.childNodes].map(walk).join("")}</${el.localName}>`;
  };
  return [...host.childNodes].map(walk).join("");
}

/** Every element in a React element tree as returned by a server component,
 *  without rendering the components in it. */
function elements(node: ReactNode, out: ReactElement[] = []): ReactElement[] {
  if (Array.isArray(node)) node.forEach((n) => elements(n, out));
  else if (isValidElement(node)) {
    out.push(node);
    elements((node.props as { children?: ReactNode }).children, out);
  }
  return out;
}

function atDate<T>(isoNoonUtc: string, f: () => T): T {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(`${isoNoonUtc}T12:00:00Z`));
  try {
    return f();
  } finally {
    vi.useRealTimers();
  }
}

/** The desktop months exactly as the site shipped them before 27 Sep 2026
 *  (app/on-this-day/page.tsx), with next/link's Link as the <a> it renders. */
function ShippedMonths({ today }: { today: OnThisDayToday }) {
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className={styles.months}>
      {MONTHS.map((name, i) => {
        const month = i + 1;
        const days = onThisDayDays.filter((d) => d.month === month);
        const byDay = new Map(days.map((d) => [d.day, d]));
        const lit = monthDefault(days, today)?.day;
        return (
          <section key={name} className={styles.month} aria-labelledby={`otd-cal-${month}`}>
            <div className={styles.monthHead}>
              <h2 id={`otd-cal-${month}`} className={styles.monthName}>
                {name}
              </h2>
              <span className={styles.monthSub}>
                {monthSub(days)}
                <span className="visuallyHidden"> milestones</span>
              </span>
            </div>
            <div className={styles.grid}>
              {Array.from({ length: calendarMonthDays(month) }, (_, j) => j + 1).map((n) => {
                const key = `${pad(month)}-${pad(n)}`;
                const d = byDay.get(n);
                const isToday = key === today.key;
                const cls = `${styles.cell} ${d ? styles.cellOn : styles.cellOff}${isToday ? ` ${styles.cellToday}` : ""}`;
                return d ? (
                  <a
                    key={n}
                    href={`/on-this-day/${d.slug}`}
                    data-day={n}
                    data-default={n === lit || undefined}
                    className={cls}
                    aria-label={calendarDayLabel(key, d)}
                    aria-current={isToday ? "date" : undefined}
                  >
                    {n}
                    <KindMark kind={d.lead.kind} size={8} className={styles.cellMark} />
                    {d.events.length > 1 && <span className={styles.cellCount}>{d.events.length}</span>}
                  </a>
                ) : (
                  <span key={n} className={cls} aria-current={isToday ? "date" : undefined}>
                    <span aria-hidden="true">{n}</span>
                    <span className="visuallyHidden">
                      {calendarDayLabel(key)}
                      {isToday && ", today"}
                    </span>
                  </span>
                );
              })}
            </div>
            <ol className={styles.monthList}>
              {days.map((d) => (
                <li key={d.key}>
                  <a
                    href={`/on-this-day/${d.slug}`}
                    data-day={d.day}
                    data-default={d.day === lit || undefined}
                    className={styles.listRow}
                    tabIndex={-1}
                  >
                    <span className={styles.listDay}>{d.day}</span>
                    <KindMark kind={d.lead.kind} alone className={styles.listMark} />
                    <span className={styles.listHeadline}>{d.lead.headline}</span>
                    <span className={styles.listMore}>
                      {d.events.length > 1 && (
                        <>
                          +{d.events.length - 1}
                          <span className="visuallyHidden"> more</span>
                        </>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </section>
        );
      })}
    </div>
  );
}

// A dated today and an empty one: the ring, the lit day and "today" in words
// all move with the date.
const DATED = `2026-${onThisDayDays.find((d) => d.events.length > 1)!.key}`;
const EMPTY = (() => {
  const keys = new Set(onThisDayDays.map((d) => d.key));
  for (let t = Date.UTC(2026, 8, 26); ; t += 86_400_000) {
    const iso = new Date(t).toISOString().slice(0, 10);
    if (!keys.has(iso.slice(5))) return iso;
  }
})();

describe("On This Day: the desktop months are one block of server HTML", () => {
  it.each([DATED, EMPTY])("its markup is the JSX it replaced, element for element (today %s)", (iso) => {
    const { built, shipped } = atDate(iso, () => {
      const today = calendarToday(new Date());
      return {
        built: `<div class="${styles.months}">${desktopMonthsHtml(today)}</div>`,
        shipped: renderToStaticMarkup(<ShippedMonths today={today} />),
      };
    });
    expect(canon(built)).toBe(canon(shipped));
    // …and it is all there: twelve months, every dated day twice (cell, row).
    const host = document.createElement("div");
    host.innerHTML = built;
    expect(host.querySelectorAll("section")).toHaveLength(12);
    expect(host.querySelectorAll('a[href^="/on-this-day/"]')).toHaveLength(onThisDayDays.length * 2);
  });

  it("escapes the way React does", () => {
    // A headline with every character React escapes would read the same both ways.
    const tricky = `Tom & "Jerry" <b>'s</b>`;
    const host = document.createElement("div");
    host.innerHTML = renderToStaticMarkup(<span title={tricky}>{tricky}</span>);
    const mine = document.createElement("div");
    const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" })[c]!);
    mine.innerHTML = `<span title="${esc(tricky)}">${esc(tricky)}</span>`;
    expect(mine.innerHTML).toBe(host.innerHTML);
    expect(read("app/on-this-day/desktopMonths.ts")).toContain(`"'": "&#x27;"`);
  });

  it("React holds the block as one node: the page's element tree has no day link in it", () => {
    const tree = atDate(DATED, () => CalendarPage());
    const all = elements(tree);
    const block = all.find((e) => e.type === StaticLinks)!;
    expect(block).toBeDefined();
    expect(typeof (block.props as { html: string }).html).toBe("string");
    expect((block.props as { children?: unknown }).children).toBeUndefined();
    const dayLinks = (els: ReactElement[]) =>
      els.filter((e) => /^\/on-this-day\/[a-z0-9-]+$/.test(String((e.props as { href?: string }).href ?? "")));
    // The Today panel's "Open …" is the page's one; the phone's are inside
    // client components, and the calendar's are in the block.
    expect(dayLinks(all)).toHaveLength(1);
    // Negative control: the months as shipped put every day link in the tree.
    const shipped = atDate(DATED, () => ShippedMonths({ today: calendarToday(new Date()) }));
    expect(dayLinks(elements(shipped)).length).toBe(onThisDayDays.length * 2);
  });

  it("no calendar day link prefetches, so none watches the viewport", () => {
    const html = atDate(DATED, () => renderToStaticMarkup(CalendarPage()));
    const host = document.createElement("div");
    host.innerHTML = html;
    const days = [...host.querySelectorAll<HTMLAnchorElement>('a[href^="/on-this-day/"]')];
    expect(days.length).toBeGreaterThan(onThisDayDays.length * 2);
    const watching = days.filter((a) => a.dataset.prefetch === "on");
    // Only the two Today panels' "Open …" links keep next/link's default.
    expect(watching.map((a) => a.textContent?.trim().replace(/\s*↗$/, ""))).toEqual([
      expect.stringMatching(/^Open /),
      expect.stringMatching(/^Open /),
    ]);
    // The phone's month panels: a Link each, not prefetching.
    expect(days.filter((a) => a.dataset.prefetch === "off")).toHaveLength(12);
    // The desktop block's links are plain <a>, which next/link never sees.
    expect(days.filter((a) => a.dataset.prefetch === undefined)).toHaveLength(onThisDayDays.length * 2);
  });
});

describe("StaticLinks: the block's links navigate in place, as next/link's did", () => {
  const html =
    '<a href="/on-this-day/3-january"><span>3</span></a><a href="https://example.com/x">out</a>' +
    '<a href="/on-this-day/4-january" target="_blank">new tab</a><a href="//example.com">protocol-relative</a>';

  it("a plain click on a same-site link is a router push; everything else is the browser's", () => {
    nav.push.mockClear();
    const { container } = render(<StaticLinks html={html} />);
    const [inSite, out, blank, rel] = [...container.querySelectorAll("a")];
    const clicked = (el: Element, init?: MouseEventInit) => fireEvent.click(el, init);
    expect(clicked(inSite.querySelector("span")!)).toBe(false); // default prevented
    expect(nav.push).toHaveBeenCalledWith("/on-this-day/3-january");
    nav.push.mockClear();
    for (const [el, init] of [
      [inSite, { metaKey: true }],
      [inSite, { ctrlKey: true }],
      [inSite, { shiftKey: true }],
      [out, {}],
      [blank, {}],
      [rel, {}],
    ] as const) {
      expect(clicked(el, init)).toBe(true);
    }
    expect(nav.push).not.toHaveBeenCalled();
  });
});

// ── Dai Dai: nothing runs on scroll ─────────────────────────────────────────

type IORecord = { cb: IntersectionObserverCallback; opts?: IntersectionObserverInit; targets: Element[] };

function recordObservers() {
  const ios: IORecord[] = [];
  const ros: { cb: ResizeObserverCallback; targets: Element[] }[] = [];
  const IO0 = window.IntersectionObserver;
  const RO0 = window.ResizeObserver;
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
  return {
    ios,
    ros,
    restore() {
      window.IntersectionObserver = IO0;
      window.ResizeObserver = RO0;
    },
  };
}

function atWidth(phone: boolean) {
  const mm = window.matchMedia;
  window.matchMedia = ((q: string) => ({
    matches: /max-width: 900px/.test(q) ? phone : false,
    media: q,
    addEventListener: () => {},
    removeEventListener: () => {},
  })) as unknown as typeof window.matchMedia;
  return () => {
    window.matchMedia = mm;
  };
}

/** window listeners added while f runs, by type. */
function windowListeners(f: () => void): string[] {
  const types: string[] = [];
  const add = window.addEventListener;
  window.addEventListener = function (this: Window, type: string, ...rest: unknown[]) {
    types.push(type);
    return (add as (...a: unknown[]) => void).call(this, type, ...rest);
  } as typeof window.addEventListener;
  try {
    f();
  } finally {
    window.addEventListener = add;
  }
  return types;
}

const entry = (target: Element, top: number, bottom: number, rootTop: number) =>
  ({ target, boundingClientRect: { top, bottom }, rootBounds: { top: rootTop }, isIntersecting: false }) as unknown as IntersectionObserverEntry;

describe("Dai Dai: the back bar's counter runs no script on scroll", () => {
  it("IntersectionObservers at the bar's line stand in for the scroll handler, and the counter reads them", () => {
    const rec = recordObservers();
    const restoreWidth = atWidth(true);
    try {
      let view!: ReturnType<typeof render>;
      const types = windowListeners(() => {
        view = render(
          <>
            <DaiDaiBackBar total={7} back="Back" menu="Open menu" />
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i} data-dd-kicker="">
                {i + 1}
              </div>
            ))}
            <div data-dd-story-end="">End of the story</div>
          </>,
        );
      });
      expect(types).not.toContain("scroll");
      expect(types).not.toContain("resize");
      const bar = view.container.querySelector("[class*=backBar]")!;
      const step = () => bar.querySelector("[class*=backStep]")!.textContent;
      expect(step()).toBe("01 / 07");

      // The bar reports its size; the line is its bottom edge.
      bar.getBoundingClientRect = () => ({ bottom: 69 }) as DOMRect;
      act(() => rec.ros[0].cb([], {} as ResizeObserver));
      const [kick, end] = rec.ios;
      expect(kick.opts).toMatchObject({ rootMargin: "-93px 0px 10000% 0px", threshold: 1 });
      expect(end.opts).toMatchObject({ rootMargin: "-69px 0px 10000% 0px", threshold: 0 });
      expect(kick.targets).toHaveLength(7);

      // Chapters 1–3 have crossed the line (kicker top ≤ 69 + 24); 4–7 have not.
      act(() => kick.cb(kick.targets.map((k, i) => entry(k, i < 3 ? 40 : 400 + i * 300, 0, 93)), {} as IntersectionObserver));
      expect(step()).toBe("03 / 07");
      act(() => kick.cb([entry(kick.targets[3], 93, 0, 93)], {} as IntersectionObserver));
      expect(step()).toBe("04 / 07");
      act(() => kick.cb([entry(kick.targets[3], 120, 0, 93)], {} as IntersectionObserver));
      expect(step()).toBe("03 / 07");
      // The end marker passes under the bar: the counter clears, and comes back.
      act(() => end.cb([entry(end.targets[0], 0, 60, 69)], {} as IntersectionObserver));
      expect(step()).toBe("");
      act(() => end.cb([entry(end.targets[0], 0, 300, 69)], {} as IntersectionObserver));
      expect(step()).toBe("03 / 07");
    } finally {
      restoreWidth();
      rec.restore();
    }
  });

  it("at desktop width, where the bar is display:none, it observes nothing", () => {
    const rec = recordObservers();
    const restoreWidth = atWidth(false);
    try {
      render(<DaiDaiBackBar total={7} back="Back" menu="Open menu" />);
      expect(rec.ros).toHaveLength(0);
      expect(rec.ios).toHaveLength(0);
    } finally {
      restoreWidth();
      rec.restore();
    }
  });

  it("the source adds no scroll listener (negative control: the line it shipped)", () => {
    const noScroll = (src: string) => !/addEventListener\(\s*["']scroll["']/.test(src);
    expect(noScroll(read("app/components/DaiDaiBackBar.tsx"))).toBe(true);
    expect(noScroll(`      window.addEventListener("scroll", schedule, { passive: true });`)).toBe(false);
  });
});

describe("the site bar and back-to-top listen only where they can be seen", () => {
  afterEach(() => {
    nav.path = "/on-this-day";
  });

  it("back-to-top: no scroll listener at phone width, where it is display:none", () => {
    for (const [phone, want] of [
      [true, 0],
      [false, 1],
    ] as const) {
      const restore = atWidth(phone);
      try {
        const types = windowListeners(() => void render(<BackToTop />));
        expect(types.filter((t) => t === "scroll"), phone ? "phone" : "desktop").toHaveLength(want);
      } finally {
        restore();
      }
    }
  });

  it("the site bar: none on a phone screen with its own chrome; still one where the bar shows", () => {
    for (const [path, phone, want] of [
      ["/dai-dai", true, 0],
      ["/on-this-day", true, 0],
      ["/dai-dai", false, 1],
      // Negative control: a phone page without its own chrome shows the bar, so it listens.
      ["/", true, 1],
    ] as const) {
      nav.path = path;
      const restore = atWidth(phone);
      try {
        const types = windowListeners(() => void render(<Nav />));
        expect(types.filter((t) => t === "scroll"), `${path} ${phone ? "phone" : "desktop"}`).toHaveLength(want);
      } finally {
        restore();
      }
    }
  });
});

describe("the flag-emoji test runs only where flags may be missing", () => {
  // Real browsers' strings.
  const UA = {
    iPhone: "Mozilla/5.0 (iPhone; CPU iPhone OS 18_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Mobile/15E148 Safari/604.1",
    iPad: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.6 Safari/605.1.15",
    Mac: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
    Android: "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Mobile Safari/537.36",
    Windows: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
    Linux: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36",
  };

  it.each(Object.entries(UA))("%s", (name, ua) => {
    flags.polyfill.mockClear();
    const spy = vi.spyOn(navigator, "userAgent", "get").mockReturnValue(ua);
    try {
      render(<FlagEmojiPolyfill />);
      const runs = name === "Windows" || name === "Linux";
      expect(flags.polyfill).toHaveBeenCalledTimes(runs ? 1 : 0);
      expect(DRAWS_FLAGS.test(ua)).toBe(!runs);
    } finally {
      spy.mockRestore();
    }
  });
});

// ── The replay ───────────────────────────────────────────────────────────────

describe("the replay's phone pass", () => {
  const data = buildReplayData("en");
  const last = data.frames.length - 1;

  it("the world map is not drawn on a phone until World is picked; the desktop draws both", () => {
    const restore = atWidth(true);
    try {
      const { container, getByRole } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
      const world = container.querySelector("svg[class*=world]")!;
      const europe = container.querySelector("svg[class*=europeSvg]")!;
      expect(world.querySelectorAll("use")).toHaveLength(0);
      expect(europe.querySelectorAll("use")).toHaveLength(worldShapes.length);
      fireEvent.click(getByRole("radio", { name: EN_REPLAY_LABELS.world }));
      expect(world.querySelectorAll("use")).toHaveLength(worldShapes.length);
    } finally {
      restore();
    }
    // Negative control: at desktop width both maps are drawn from the start.
    const { container } = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
    expect(container.querySelector("svg[class*=world]")!.querySelectorAll("use")).toHaveLength(worldShapes.length);
  });

  it("the player itself does not read the phone query: only the chips and the world map re-render as a phone hydrates", () => {
    const src = read("app/components/DaiDaiReplay.tsx");
    const player = src.slice(src.indexOf("export default function DaiDaiReplay("), src.indexOf("// ── The parts that differ on a phone"));
    const readsPhone = (s: string) => /usePhone\(|useSyncExternalStore\(subscribePhone/.test(s);
    expect(player.length).toBeGreaterThan(1000);
    expect(readsPhone(player)).toBe(false);
    expect(src.match(/usePhone\(\)/g)).toHaveLength(2);
    // Negative control: the line the player shipped with.
    expect(readsPhone("  const phone = useSyncExternalStore(subscribePhone, getPhone, getPhoneServer);")).toBe(true);
  });

  describe("the scrubber leaves vertical swipes to the page", () => {
    const setup = () => {
      const view = render(<DaiDaiReplay data={data} labels={EN_REPLAY_LABELS} />);
      const s = within(view.container).getByRole("slider");
      s.getBoundingClientRect = () => ({ left: 0, width: 100, top: 0, height: 44, right: 100, bottom: 44 }) as DOMRect;
      const rank = view.container.querySelector<HTMLElement>("[class*=rankCol]")!;
      Object.defineProperty(rank, "offsetHeight", { value: 480, configurable: true });
      const mode = () => view.container.firstElementChild!.getAttribute("data-mode");
      return { s, rank, mode, view };
    };
    const touch = { pointerId: 7, pointerType: "touch", button: 0 };

    it("CSS: pan-y, not none (negative control: the rule it shipped)", () => {
      const css = read("app/components/DaiDaiReplay.module.css");
      const rule = css.match(/\n\.slider \{([^}]*)\}/)![1];
      const pansY = (r: string) => /touch-action:\s*pan-y/.test(r) && !/touch-action:\s*none/.test(r);
      expect(pansY(rule)).toBe(true);
      expect(pansY("\n  cursor: pointer;\n  touch-action: none;\n")).toBe(false);
    });

    it("a finger moving down is the page's: no scrub, no seek", () => {
      const { s, mode } = setup();
      fireEvent.pointerDown(s, { ...touch, clientX: 10, clientY: 10 });
      fireEvent.pointerMove(s, { ...touch, clientX: 14, clientY: 60 });
      expect(mode()).toBe("poster");
      fireEvent.pointerCancel(s, { ...touch, clientX: 14, clientY: 60 });
      expect(mode()).toBe("poster");
      expect(s.getAttribute("aria-valuenow")).toBe(String(last));
    });

    it("a finger moving across scrubs once past 8px, and the ranking keeps its height meanwhile", () => {
      const { s, rank, mode } = setup();
      fireEvent.pointerDown(s, { ...touch, clientX: 10, clientY: 10 });
      fireEvent.pointerMove(s, { ...touch, clientX: 16, clientY: 11 });
      expect(mode()).toBe("poster"); // 6px: not yet
      fireEvent.pointerMove(s, { ...touch, clientX: 30, clientY: 12 });
      expect(mode()).toBe("scrubbing");
      expect(s.getAttribute("aria-valuenow")).toBe(String(Math.round(0.3 * last)));
      expect(rank.style.minHeight).toBe("480px");
      fireEvent.pointerUp(s, { ...touch, clientX: 50, clientY: 12 });
      expect(mode()).toBe("paused");
      expect(s.getAttribute("aria-valuenow")).toBe(String(Math.round(0.5 * last)));
      expect(rank.style.minHeight).toBe("");
    });

    it("a tap still seeks and closes the pinned card, as the press did; a mouse scrubs from the press", () => {
      const { s, mode, view } = setup();
      // The review's repro: Russia's card open, then a tap on the scrubber.
      const ru = data.countries.find((c) => c.code === "RU")!;
      const card = () => view.container.querySelector(`[role=group][aria-label="${ru.name}"]`);
      fireEvent.click(view.container.querySelector('[data-code="RU"]')!);
      expect(card()).not.toBeNull();
      fireEvent.pointerDown(s, { ...touch, clientX: 20, clientY: 20 });
      fireEvent.pointerUp(s, { ...touch, clientX: 20, clientY: 20 });
      expect(mode()).toBe("paused");
      expect(s.getAttribute("aria-valuenow")).toBe(String(Math.round(0.2 * last)));
      expect(card()).toBeNull();
      // Negative control: at a held week the card does show when picked, so
      // its absence above is the tap's doing (the PR's first cut left it open).
      fireEvent.click(view.container.querySelector('[data-code="RU"]')!);
      expect(card()).not.toBeNull();
      fireEvent.pointerDown(s, { pointerId: 1, pointerType: "mouse", button: 0, clientX: 80, clientY: 20 });
      expect(mode()).toBe("scrubbing");
      expect(s.getAttribute("aria-valuenow")).toBe(String(Math.round(0.8 * last)));
    });
  });
});
