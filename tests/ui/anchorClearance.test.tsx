import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DockIndex from "../../app/components/DockIndex";
import IndexBar from "../../app/components/IndexBar";
import ComparePage from "../../app/compare/page";
import UpdatesPage from "../../app/updates/page";
import PairPage from "../../app/compare/[pair]/page";
import { decl, read, rules } from "../fixtures/cssRules";

/**
 * anchorClearance (Job 4 · J4-6; the design response's test): every [id]
 * under a dock has a scroll-margin-top at least the dock's bottom + 12, and
 * so does keyboard focus.
 *
 * A dock names itself with data-dock and globals.css keys the margins on it,
 * per layout (both layouts' docks are in every document; only one is drawn).
 * This reads the WINNING margin the way the cascade picks it — the [id] rules
 * tie on specificity and the focus rules are all zero, so the last one that
 * applies wins — at each layout's width, against each dock's own height read
 * from its own stylesheet (its rule included). The pages that carry a dock
 * join DOCKED as each lands (J4-7, J4-8, J4-10).
 *
 * The /compare family (Job 2's 69px back bar) carries no dock and keeps the
 * plain 88px / 81px, which clear its bar.
 */

const GLOBALS = read("app/globals.css");
const BAR = 69;
const AIR = 12; // a 2px ring at a 2px offset, and 8px of air
const FOCUSABLE = ":where(a[href], button, input, select, textarea, summary, iframe, [tabindex])";

const WIDTHS = { phone: [320, 375, 402, 900], desk: [901, 1024, 1240, 1440] } as const;
type Layout = keyof typeof WIDTHS;

const applies = (w: number) => (m: string | null) =>
  m === null ||
  m
    .replace(/^@media\s*/, "")
    .split(/\s+and\s+/)
    .every((part) => {
      const min = part.match(/min-width:\s*(\d+)px/);
      if (min) return w >= Number(min[1]);
      const max = part.match(/max-width:\s*(\d+)px/);
      if (max) return w <= Number(max[1]);
      return false; // (hover), (pointer), print: not the layout's
    });
const px = (v: string) => Number(/(-?\d+(?:\.\d+)?)px/.exec(v)?.[1] ?? NaN);

/** The scroll-margin-top the cascade gives an [id] ("id") or a plain focusable ("focus") on a page holding `dock`. */
function margin(css: string, kind: "id" | "focus", dock: string | null, w: number): number {
  const target = kind === "id" ? "[id]" : FOCUSABLE;
  const want = [target, ...(dock ? [`:where(body:has([data-dock="${dock}"])) ${target}`] : [])];
  let v: string | undefined;
  for (const r of rules(css)) {
    if (!applies(w)(r.media)) continue;
    if (!want.includes(r.selector.replace(/\s+/g, " ").trim())) continue;
    const d = decl(r.body, "scroll-margin-top");
    if (d !== undefined) v = d;
  }
  return v === undefined ? NaN : px(v);
}

/** Each dock's drawn height, its bottom rule included, from its own stylesheet. */
const DOCK_CSS = read("app/components/dockIndex.module.css");
const BAR_CSS = read("app/components/indexBar.module.css");
const STRIP_CSS = read("app/updates/updates.module.css");
const MONTH_CSS = read("app/components/mobileUpdates.module.css");
const bodyOf = (css: string, sel: string) => rules(css).find((r) => r.media === null && r.selector === sel)?.body ?? "";
const rule = (css: string, sel: string) => px(decl(bodyOf(css, sel), "border-bottom") ?? "0px") || 0;
const HEIGHT: Record<string, () => number> = {
  phone: () => {
    const pad = decl(bodyOf(DOCK_CSS, ".dockRail"), "padding")!.split(/\s+/).map(px);
    return pad[0] + px(decl(bodyOf(DOCK_CSS, ".dockChip"), "min-height")!) + (pad[2] ?? pad[0]) + rule(DOCK_CSS, ".dock");
  },
  // border-box: the 44px holds its rule
  desk: () => px(decl(bodyOf(BAR_CSS, ".dockBar"), "height")!),
  // /updates (J4-8): the desktop strip, 48px, and the phone month label, 28px, each with its rule
  "desk-strip": () => px(decl(bodyOf(STRIP_CSS, ".dockStrip"), "height")!),
  "phone-month": () => px(decl(bodyOf(MONTH_CSS, ".dockMonth"), "height")!),
};

/** An in-page target the dock links to, and the layout tree it must be in. */
type Target = { href: string; tree: "phone" | "desk" };
type Docked = { name: string; layout: Layout; dock: string; html: () => Promise<string> | string; targets?: Target[] };

/** The docks, as rendered. Pages join as they land. */
const DOCKED: Docked[] = [
  {
    name: "DockIndex",
    layout: "phone",
    dock: "phone",
    html: () => renderToStaticMarkup(<DockIndex label="Jump" items={[{ id: "a", label: "A" }]} />),
  },
  {
    name: "IndexBar",
    layout: "desk",
    dock: "desk",
    html: () => renderToStaticMarkup(<IndexBar kicker="Page" items={[{ id: "a", label: "A" }]} />),
  },
  {
    name: "/updates, desktop: the strip (J4-8)",
    layout: "desk",
    dock: "desk-strip",
    html: () => renderToStaticMarkup(UpdatesPage()),
    targets: [{ href: "#entries", tree: "desk" }],
  },
  {
    name: "/updates, phone: the month labels and the Top pill (J4-8)",
    layout: "phone",
    dock: "phone-month",
    html: () => renderToStaticMarkup(UpdatesPage()),
    targets: [{ href: "#updates-rail-m", tree: "phone" }],
  },
];

/** The two layout trees of a rendered page: the phone screen and the desktop column. */
function treeOf(html: string, tree: "phone" | "desk") {
  const host = document.createElement("div");
  host.innerHTML = html;
  const desk = host.querySelector('[class*="desktopOnly"]');
  if (tree === "desk") return desk;
  const main = host.querySelector("main") ?? host;
  return [...main.children].find((c) => c !== desk && /screen/.test(String(c.className))) ?? null;
}

const docksIn = (html: string) => {
  const host = document.createElement("div");
  host.innerHTML = html;
  return [...host.querySelectorAll("[data-dock]")].map((d) => d.getAttribute("data-dock"));
};

describe("anchorClearance: under a dock, jumps and focus clear the dock's bottom + 12", () => {
  it.each(DOCKED.map((d) => [d.name, d] as const))("%s", async (_name, d) => {
    const html = await d.html();
    expect(docksIn(html)).toContain(d.dock);
    for (const t of d.targets ?? []) {
      const tree = treeOf(html, t.tree);
      expect(tree, `${t.tree} tree`).not.toBeNull();
      // the target is in the dock's own layout tree, and the dock links to it
      expect(tree!.querySelector(`[id="${t.href.slice(1)}"]`), t.href).not.toBeNull();
      expect(tree!.querySelector(`a[href="${t.href}"]`), t.href).not.toBeNull();
    }
    const h = HEIGHT[d.dock]();
    expect(h, `${d.dock} height`).toBeGreaterThan(0);
    for (const w of WIDTHS[d.layout]) {
      expect(margin(GLOBALS, "id", d.dock, w), `[id] at ${w}`).toBeGreaterThanOrEqual(BAR + h + AIR);
      expect(margin(GLOBALS, "focus", d.dock, w), `focus at ${w}`).toBeGreaterThanOrEqual(BAR + h + AIR);
    }
  });

  it("the response's numbers: 136 on a phone dock, 128 under the desktop bar", () => {
    expect(margin(GLOBALS, "id", "phone", 402)).toBe(136);
    expect(margin(GLOBALS, "id", "desk", 1440)).toBe(128);
    expect(HEIGHT.phone()).toBe(53); // 4 + 44 + 4, and its 1px rule
    expect(HEIGHT.desk()).toBe(44);
  });

  it("each layout's margins stay in its own layout: a phone dock does not move desktop jumps, nor the bar a phone's", () => {
    for (const w of WIDTHS.desk) expect(margin(GLOBALS, "id", "phone", w), `${w}`).toBe(88);
    for (const w of WIDTHS.phone) expect(margin(GLOBALS, "id", "desk", w), `${w}`).toBe(88);
  });

  it("the stuck docks' own controls take no margin (the focus exemption names them)", () => {
    const ex = rules(GLOBALS).find((r) => /^:where\(.*\)\s+\*$/.test(r.selector) && decl(r.body, "scroll-margin-top") === "0");
    expect(ex?.selector).toContain('[class*="__dock"]');
    // and it comes after every dock focus rule, so it wins inside the bars
    const lastFocus = Math.max(...rules(GLOBALS).filter((r) => r.selector.endsWith(FOCUSABLE)).map((r) => r.at));
    expect(ex!.at).toBeGreaterThan(lastFocus);
  });
});

describe("anchorClearance: the /compare family (Job 2's back bar) carries no dock and clears its 69px bar", () => {
  it.each([
    ["/compare", () => ComparePage({ searchParams: Promise.resolve({}) })],
    ["/compare/burna-boy-vs-wizkid", () => PairPage({ params: Promise.resolve({ pair: "burna-boy-vs-wizkid" }) })],
  ] as const)("%s", async (_path, page) => {
    expect(docksIn(renderToStaticMarkup(await page()))).toEqual([]);
    for (const w of [...WIDTHS.phone, ...WIDTHS.desk]) {
      expect(margin(GLOBALS, "id", null, w), `[id] at ${w}`).toBe(88);
      expect(margin(GLOBALS, "focus", null, w), `focus at ${w}`).toBeGreaterThanOrEqual(BAR + AIR);
    }
  });
});

describe("anchorClearance negative control: the shipped rules alone", () => {
  // main e85e6efe, app/globals.css, verbatim: the only jump margin.
  const SHIPPED = `[id] {
  scroll-margin-top: calc(88px + env(safe-area-inset-top, 0px));
}`;
  it("88px leaves a jump under a phone dock and under the desktop bar", () => {
    expect(margin(SHIPPED, "id", "phone", 402)).toBe(88);
    expect(margin(SHIPPED, "id", "phone", 402)).toBeLessThan(BAR + HEIGHT.phone() + AIR);
    expect(margin(SHIPPED, "id", "desk", 1440)).toBeLessThan(BAR + HEIGHT.desk() + AIR);
  });
});
