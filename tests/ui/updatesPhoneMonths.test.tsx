import { act, cleanup, fireEvent, render } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/updates",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileUpdates from "../../app/components/MobileUpdates";
import { updates, type Update } from "../../app/data/updates";
import styles from "../../app/components/mobileUpdates.module.css";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * Job 4 · J4-8, J4-Q2 and fix 91: the phone /updates list under month labels.
 *
 * Each month's entries sit under a 28px label stuck under the back bar while
 * the month is in view, "{MONTH YEAR} · {n} entries", n under the active
 * filter. The digest band still follows the third entry, so a month it splits
 * is labelled again after it. After the 20th entry a 44px "Top" pill above
 * the tab bar returns to the filter rail (no glyph, not gold).
 *
 * Every label and count is computed here from the feed.
 */

const CSS = read("app/components/mobileUpdates.module.css");
const body = (sel: string) =>
  rules(CSS)
    .filter((r) => r.selector === sel)
    .map((r) => r.body)
    .join(";");
const MONTH = new Intl.DateTimeFormat("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
const entries = (n: number) => `${n} ${n === 1 ? "entry" : "entries"}`;

/** The labels a run of entries carries, in order, counted over `all`. */
function labelsFor(runs: Update[][], all: Update[]) {
  const count = (k: string) => all.filter((u) => u.date.startsWith(k)).length;
  return runs.flatMap((run) => {
    const keys = run.map((u) => u.date.slice(0, 7)).filter((k, i, a) => a.indexOf(k) === i);
    return keys.map((k) => `${MONTH.format(new Date(`${k}-01T00:00:00Z`))} · ${entries(count(k))}`);
  });
}
const labels = (c: HTMLElement) => [...c.querySelectorAll(`.${styles.dockMonth}`)].map((l) => l.textContent);

/** One animation frame: the pill reads the row's place once per frame. */
const frame = () => new Promise((r) => requestAnimationFrame(() => r(null)));

afterEach(() => {
  cleanup();
});

describe("J4-8 / fix 91: phone month labels", () => {
  it("one label per month, in order, with its count", () => {
    // Without the digest band the list is one run: no month is labelled twice.
    const { container } = render(<MobileUpdates items={updates} lastEntry="12 October 2026" />);
    expect(labels(container)).toEqual(labelsFor([updates], updates));
    expect(new Set(labels(container)).size).toBe(labels(container).length);
  });

  it("the digest band splits a month, which is labelled again after it", () => {
    const { container } = render(<MobileUpdates items={updates} lastEntry="12 October 2026" subscribeEnabled />);
    expect(labels(container)).toEqual(labelsFor([updates.slice(0, 3), updates.slice(3)], updates));
    const list = container.querySelector("#entries-m")!;
    expect(list.getAttribute("data-dock")).toBe("phone-month");
    // the band sits between the two runs
    const kids = [...list.children];
    const bandAt = kids.findIndex((k) => k.id === "digest-m");
    expect(bandAt).toBeGreaterThan(0);
    expect(kids.slice(0, bandAt).flatMap((g) => [...g.querySelectorAll(`.${styles.row}`)])).toHaveLength(3);
  });

  it("a filter re-counts every label under it", () => {
    const { container, getByRole } = render(<MobileUpdates items={updates} lastEntry="12 October 2026" />);
    fireEvent.click(getByRole("button", { name: /^Charts \d+$/ }));
    const charts = updates.filter((u) => u.category === "Charts");
    expect(labels(container)).toEqual(labelsFor([charts], charts));
    // and a count under the filter is not the month's count over the whole feed
    expect(labels(container)).not.toEqual(labelsFor([charts], updates));
  });

  it("each label is 28px with its rule, sticky under the back bar and its safe area, on --bg", () => {
    expect(decl(body(".dockMonth"), "position")).toBe("sticky");
    expect(decl(body(".dockMonth"), "top")).toBe("calc(69px + env(safe-area-inset-top, 0px))");
    expect(decl(body(".dockMonth"), "height")).toBe("28px");
    expect(decl(body(".dockMonth"), "background")).toBe("var(--bg)");
    expect(decl(body(".dockMonth"), "border-bottom")).toBe("1px solid var(--rule-soft)");
    expect(decl(body(".dockMonth"), "font-size")).toBe("11px");
  });
});

describe("J4-8 / fix 91: the phone Top pill", () => {
  it("an outlined 44px pill above the tab bar, back to the filter rail, no glyph", () => {
    const { container } = render(<MobileUpdates items={updates} lastEntry="12 October 2026" />);
    const pill = container.querySelector<HTMLAnchorElement>(`.${styles.topPill}`)!;
    expect(pill.getAttribute("href")).toBe("#updates-rail-m");
    expect(pill.textContent).toBe("Top");
    expect(container.querySelector("#updates-rail-m")?.querySelector('[aria-pressed="true"]')).not.toBeNull();
    const b = body(".topPill");
    expect(decl(b, "position")).toBe("fixed");
    expect(decl(b, "min-height")).toBe("44px");
    expect(decl(b, "bottom")).toBe("calc(var(--tabbar-h) + 12px)");
    expect(decl(b, "border")).toBe("1px solid var(--btn-edge)");
    expect(decl(b, "color")).toBe("var(--text)");
    expect(b).not.toMatch(/--gold/);
  });

  it("is hidden until the 20th entry of the filter has passed under the label, and again above it", async () => {
    const { container } = render(<MobileUpdates items={updates} lastEntry="12 October 2026" />);
    const list = container.querySelector<HTMLElement>("#entries-m")!;
    // jsdom lays nothing out: say this layout is the one on screen
    Object.defineProperty(list, "offsetParent", { get: () => document.body, configurable: true });
    const pill = container.querySelector(`.${styles.topPill}`)!;
    const rows = container.querySelectorAll<HTMLElement>(`.${styles.row}`);
    expect(rows.length).toBeGreaterThanOrEqual(20);
    let bottom = 2000;
    rows[19].getBoundingClientRect = () => ({ bottom }) as DOMRect;
    // Each move is one scroll event, as an instant jump is: the row's new
    // place, with no frames in between.
    const moveTo = async (b: number) => {
      bottom = b;
      await act(async () => {
        window.dispatchEvent(new Event("scroll"));
        await frame();
      });
      return pill.classList.contains(styles.topPillShown);
    };
    expect(pill.classList.contains(styles.topPillShown)).toBe(false);
    expect(decl(body(".topPill"), "visibility")).toBe("hidden");
    expect(decl(body(".topPillShown"), "visibility")).toBe("visible");
    // below the screen, not yet reached: hidden
    expect(await moveTo(2000)).toBe(false);
    // an instant jump far past it (reduced motion, End): the row never
    // crossed the screen, and the pill shows
    expect(await moveTo(-40000)).toBe(true);
    // wholly above the back bar (69) and the label (28), and not yet
    expect(await moveTo(69 + 28)).toBe(true);
    expect(await moveTo(69 + 28 + 1)).toBe(false);
    // an instant jump back to the top: hidden again
    expect(await moveTo(-40000)).toBe(true);
    expect(await moveTo(2000)).toBe(false);
  });

  it("a filter with fewer than 20 entries has no pill, wherever the page is", async () => {
    const counts = updates.reduce<Record<string, number>>((a, u) => ((a[u.category] = (a[u.category] ?? 0) + 1), a), {});
    const few = Object.keys(counts).find((c) => counts[c] < 20);
    expect(few, "a category with fewer than 20 entries").toBeDefined();
    const { container, getByRole } = render(<MobileUpdates items={updates} lastEntry="12 October 2026" />);
    const list = container.querySelector<HTMLElement>("#entries-m")!;
    Object.defineProperty(list, "offsetParent", { get: () => document.body, configurable: true });
    const pill = container.querySelector(`.${styles.topPill}`)!;
    container.querySelectorAll<HTMLElement>(`.${styles.row}`)[19].getBoundingClientRect = () => ({ bottom: -40000 }) as DOMRect;
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
      await frame();
    });
    expect(pill.classList.contains(styles.topPillShown)).toBe(true);
    fireEvent.click(getByRole("button", { name: new RegExp(`^${few!.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")} ${counts[few!]}$`) }));
    await act(async () => {
      window.dispatchEvent(new Event("scroll"));
      await frame();
    });
    expect(container.querySelectorAll(`.${styles.row}`).length).toBe(counts[few!]);
    expect(pill.classList.contains(styles.topPillShown)).toBe(false);
  });

  it("pressed, it goes to the rail and hands focus to the pressed chip", () => {
    const scrollIntoView = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoView as unknown as Element["scrollIntoView"];
    const { container, getByRole } = render(<MobileUpdates items={updates} lastEntry="12 October 2026" />);
    const charts = getByRole("button", { name: /^Charts \d+$/ });
    fireEvent.click(charts);
    fireEvent.click(container.querySelector(`.${styles.topPill}`)!);
    expect(scrollIntoView).toHaveBeenCalledTimes(1);
    expect(document.activeElement).toBe(charts);
    // @ts-expect-error jsdom has no scrollIntoView of its own
    delete Element.prototype.scrollIntoView;
  });
});

describe("J4-8 / fix 91 negative control: the shipped flat list", () => {
  it("main e85e6efe rendered the entries straight into the list, with no month label", () => {
    // MobileUpdates.tsx:163–167 on main, as rendered: the rows, then nothing else.
    const host = document.createElement("div");
    host.innerHTML = `<div id="entries-m" class="${styles.list}"><a class="${styles.row}" href="/x"></a><a class="${styles.row}" href="/y"></a></div>`;
    expect(host.querySelectorAll(`.${styles.dockMonth}`)).toHaveLength(0);
    expect(host.querySelector("#entries-m")?.getAttribute("data-dock")).toBeNull();
  });
});

describe("fix 91 negative control: the shipped observer missed an instant jump", () => {
  it("J4-8's first IntersectionObserver callback never runs when a jump skips the row, so the pill stayed hidden", () => {
    // MobileUpdates.tsx:99–101 as J4-8 first built it (review, 14 Oct), verbatim:
    //   ([e]) => setPast(!e.isIntersecting && e.boundingClientRect.bottom <= (e.rootBounds?.top ?? 0)),
    //   { rootMargin: "-97px 0px 0px 0px" },
    let past = false;
    const setPast = (v: boolean) => (past = v);
    const shipped = ([e]: { isIntersecting: boolean; boundingClientRect: { bottom: number }; rootBounds: { top: number } }[]) =>
      setPast(!e.isIntersecting && e.boundingClientRect.bottom <= (e.rootBounds?.top ?? 0));
    // An observer reports on observe() and then only when the row crosses
    // the root's edge (isIntersecting flips). Root: 97 down to the foot of a
    // 874px screen.
    const inRoot = (bottom: number, height = 80) => bottom > 97 && bottom - height < 874;
    let was: boolean | null = null;
    const move = (bottom: number) => {
      const now = inRoot(bottom);
      if (now !== was) shipped([{ isIntersecting: now, boundingClientRect: { bottom }, rootBounds: { top: 97 } }]);
      was = now;
    };
    move(2000); // first report: below the screen
    expect(past).toBe(false);
    move(-40000); // one instant jump to far past it: no crossing, no report
    expect(past).toBe(false); // the row is above the line, and the pill is still hidden
  });
});
