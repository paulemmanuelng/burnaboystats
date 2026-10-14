import { renderToStaticMarkup } from "react-dom/server";
import { existsSync } from "node:fs";
import { join, resolve } from "node:path";
import type { ReactNode } from "react";

let path = "/";
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => path,
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the first static param no longer resolves");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MobileTabBar from "../../app/components/MobileTabBar";
import { hasOwnActionBar } from "../../app/lib/mobileScreens";
import { read, rules, winning } from "../fixtures/cssRules";

/**
 * How a phone screen ends (owner, 14 Oct 2026, from his phone: an empty band at
 * the end of a page; then "Remove the doubled tab-bar spacer on /faq,
 * /contact, /embed").
 *
 * A fixed bar sits over the foot of every phone screen, so the last line needs
 * clearance or it hides beneath it. There are two bars and two clearances:
 *
 * - The five-tab bar (MobileTabBar), on every route where hasOwnActionBar is
 *   false. The body clears it: globals.css, body:has(.mobileTabBarPresent),
 *   padding-bottom 64px + max(30px, inset) = 94px over an 87px bar, which
 *   leaves the 7px the phone home ends on. A screen's own spacer must not
 *   stack on that padding: /faq, /contact and /embed each drew a 96px
 *   `.spacer` after their last block, so the page ended on 96 + 7 = 103px of
 *   empty band above the bar (measured on the dev server at 375 × 667 and
 *   430 × 932, 14 Oct 2026). /about had the same band until PR #487.
 * - A screen's own action bar, on the routes where hasOwnActionBar is true.
 *   The tab bar stands down there and the body has no padding, so the screen's
 *   spacer IS the clearance: it sits right before the action bar and is at
 *   least the bar's height. Those spacers stay.
 *
 * Everything here is derived: the routes from app/<route>/page.tsx, a route's
 * phone screens from the Mobile* components its page imports (followed through
 * the components that import more of them), which bar it gets from
 * MobileTabBar itself, and the spacer and action-bar classes from each
 * screen's own stylesheet. Pages are named by hand only as a sanity check on
 * the derivation, in the negative control, and in the two awaiting a ruling.
 */

const ROOT = join(__dirname, "..", "..");
const COMPONENTS = join(ROOT, "app/components");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const phone = (m: string | null) => m === null || /max-width:\s*900px/.test(m);

type Params = Record<string, string>;
type PageModule = {
  default: (props: { params: Promise<Params>; searchParams: Promise<Params> }) => ReactNode | Promise<ReactNode>;
  generateStaticParams?: () => Params[] | Promise<Params[]>;
};
const PAGES = import.meta.glob<PageModule>("../../app/**/page.tsx");
const MODULES = import.meta.glob<{ default: Record<string, string> }>("../../app/**/*.module.css", { eager: true });
/**
 * A stylesheet's scoped class names. Under vitest a CSS module is a proxy that
 * names ANY key it is asked for (no own keys to list), so a name is only
 * evidence when the stylesheet itself has the rule — read with rules().
 */
const classesOf = (cssFile: string) => MODULES[`../../${cssFile.slice(ROOT.length + 1)}`]?.default ?? {};
const hasRule = (cssFile: string, selector: string) => rules(read(cssFile)).some((r) => r.selector === selector);

/** A Mobile* component that draws a phone screen: it renders `styles.screen`, a rule its stylesheet has. */
type Screen = { name: string; code: string; css: string; k: Record<string, string> };

/** The Mobile* components a file imports, followed into each one's own imports. */
function screensOf(code: string, seen = new Set<string>()): Screen[] {
  const out: Screen[] = [];
  for (const m of code.matchAll(/^import Mobile\w+(?:,\s*\{[^}]*\})? from "(?:\.\.?\/)+(?:components\/)?(Mobile\w+)";$/gm)) {
    const name = m[1];
    const file = join(COMPONENTS, `${name}.tsx`);
    if (seen.has(name) || !existsSync(file)) continue;
    seen.add(name);
    const own = read(file);
    const cssName = own.match(/^import styles from "\.\/([\w.]+\.module\.css)";$/m)?.[1];
    const css = cssName ? join(COMPONENTS, cssName) : "";
    if (css && /styles\.screen\b/.test(own) && hasRule(css, ".screen")) out.push({ name, code: own, css, k: classesOf(css) });
    out.push(...screensOf(own, seen));
  }
  return out;
}

/** The literal tab bar for a path: is `.mobileTabBarPresent` in what it renders? */
const showsTabBar = (p: string) => {
  path = p;
  return renderToStaticMarkup(<MobileTabBar />).includes("mobileTabBarPresent");
};

type Route = { template: string; path: string; file: string; load: () => Promise<PageModule>; screens: Screen[]; tabBar: boolean };

const ROUTES: Route[] = [];
for (const [key, load] of Object.entries(PAGES)) {
  const file = resolve(__dirname, key);
  const template = key.replace("../../app", "").replace(/\/page\.tsx$/, "") || "/";
  const screens = screensOf(read(file));
  if (!screens.length) continue;
  let concrete = template;
  if (template.includes("[")) {
    // One real page per dynamic route: the first one the route builds.
    const first = (await (await load()).generateStaticParams?.())?.[0];
    if (!first) continue;
    concrete = template.replace(/\[(\w+)\]/g, (_, seg: string) => first[seg]);
  }
  ROUTES.push({ template, path: concrete, file, load, screens, tabBar: showsTabBar(concrete) });
}

/**
 * Doubled the same way, and NOT in this change: the owner named /faq, /contact
 * and /embed. Measured on the dev server, 14 Oct 2026, at 375 × 667 and
 * 430 × 932, and reported for his call. Delete a line when its spacer goes;
 * the guard then holds that page too.
 */
const AWAITING_RULING = new Map<string, string>([
  ["/updates", "MobileUpdates' 96px .spacer over the body's tab-bar clearance, a 103px band"],
  ["/afrobeats/[artist]/charts", "MobileOfficialCharts' 110px .spacer, drawn although showActionBar={false} leaves the tab bar showing, a 117px band"],
]);

async function renderPage(r: Route) {
  const mod = await r.load();
  const first = r.template.includes("[") ? (await mod.generateStaticParams?.())?.[0] ?? {} : {};
  path = r.path;
  const el = await mod.default({ params: Promise.resolve(first), searchParams: Promise.resolve({}) });
  return parse(renderToStaticMarkup(<>{el}</>));
}

/** Rendered screens of a route's page, each with the stylesheet it came from. */
const screensIn = (doc: Document, r: Route) =>
  r.screens.flatMap((s) => [...doc.querySelectorAll(`.${s.k.screen}`)].map((el) => ({ el, s })));

const isEmptyBox = (el: Element) =>
  el.children.length === 0 && !(el.textContent ?? "").trim() && !/^(img|svg|iframe|input|button|textarea|select|video|canvas|hr|details)$/i.test(el.tagName);

/**
 * Why a screen on the tab bar does not end on its content; [] when it does.
 * Its last block is content and nothing follows it: not the screen's own
 * `.spacer`, and not an empty box doing a spacer's job under another name.
 */
function tabBarEndProblems(screen: Element, k: Record<string, string>): string[] {
  const out: string[] = [];
  if (k.spacer && screen.querySelector(`.${k.spacer}`)) out.push("draws its .spacer, stacked on the body's tab-bar clearance");
  const last = screen.lastElementChild;
  if (!last) return [...out, "an empty screen"];
  if (isEmptyBox(last)) out.push(`ends on an empty <${last.tagName.toLowerCase()} class="${last.className}">, a spacer on the tab bar's clearance`);
  return out;
}

/** The px a clearance block's height starts from: "104px" → 104, "calc(150px + env(…))" → 150. */
const px = (v: string | undefined) => Number(v?.match(/(\d+(?:\.\d+)?)px/)?.[1] ?? NaN);

/**
 * The action bar a deep screen pins over its foot: 12 + 50 + 12px and its 1px
 * rule (globals.css, the focus-clearance note beside the tab bar's padding),
 * before the safe-area inset. A clearance shorter than this hides the last line.
 */
const ACTION_BAR_PX = 12 + 50 + 12 + 1;

/** The rule in a stylesheet whose scoped class is `scoped`, by its local name. */
const localOf = (cssFile: string, scoped: string) =>
  rules(read(cssFile))
    .flatMap((r) => r.selector.match(/\.[\w-]+/g) ?? [])
    .map((c) => c.slice(1))
    .find((c) => classesOf(cssFile)[c] === scoped);

/**
 * Why a screen with its own action bar does not clear it; [] when it does.
 * The clearance is the screen's `.spacer` right before the bar, or — where a
 * page moved it out (/methodology, whose shared sections follow the screen) —
 * an empty aria-hidden block at the very end of <main>, shown on a phone.
 * Either way its phone height is at least the bar's.
 */
function actionBarClearanceProblems(doc: Document, screen: Element, s: Screen, pageCss: string | undefined): string[] {
  const bar = [...screen.children].find((c) => s.k.actionBar && c.classList.contains(s.k.actionBar));
  if (!bar) return []; // no bar on this screen, nothing to clear
  const before = bar.previousElementSibling;
  if (s.k.spacer && before?.classList.contains(s.k.spacer)) {
    const h = px(winning(read(s.css), ".spacer", "height", phone));
    return h >= ACTION_BAR_PX ? [] : [`.spacer is ${h}px, under the ${ACTION_BAR_PX}px action bar`];
  }
  const main = doc.querySelector("main")!;
  const foot = [...main.children].filter((c) => c.tagName !== "SCRIPT").at(-1);
  if (foot && pageCss && isEmptyBox(foot) && foot.getAttribute("aria-hidden") === "true") {
    const local = localOf(pageCss, foot.className);
    const css = read(pageCss);
    const h = local ? px(winning(css, `.${local}`, "height", (m) => m !== null && /max-width:\s*900px/.test(m))) : NaN;
    return h >= ACTION_BAR_PX ? [] : [`the page's foot block ${local ? `.${local}` : foot.className} is ${h}px on a phone, under the ${ACTION_BAR_PX}px action bar`];
  }
  return ["an action bar with no spacer before it and no foot block after the screen"];
}

const TAB_BAR = ROUTES.filter((r) => r.tabBar);
// Every route off the tab bar whose phone screen can pin an action bar — by the
// bar, not by the spacer, so a spacer that goes missing is caught, not dropped.
const ACTION_BAR = ROUTES.filter((r) => !r.tabBar && r.screens.some((s) => /styles\.actionBar\b/.test(s.code)));

describe("which bar a phone screen ends above", () => {
  it("the routes are read from app/, and the tab bar renders exactly where hasOwnActionBar is false", () => {
    // the derivation finds the pages it is about, on both sides
    expect(TAB_BAR.map((r) => r.template)).toEqual(expect.arrayContaining(["/", "/about", "/faq", "/contact", "/embed"]));
    expect(ACTION_BAR.map((r) => r.template)).toEqual(expect.arrayContaining(["/certifications", "/api", "/records/tours/revenue"]));
    for (const r of ROUTES) expect(r.tabBar, r.path).toBe(!hasOwnActionBar(r.path));
    // the body's padding is the tab bar's clearance, under the phone breakpoint
    expect(winning(read(join(ROOT, "app/globals.css")), "body:has(.mobileTabBarPresent)", "padding-bottom", (m) => m !== null && /max-width:\s*900px/.test(m))).toBe(
      "calc(64px + max(30px, env(safe-area-inset-bottom, 0px)))",
    );
    // the awaiting list names real tab-bar routes, so it cannot hide a typo
    for (const t of AWAITING_RULING.keys()) expect(TAB_BAR.map((r) => r.template), t).toContain(t);
  });

  it("no page on the tab bar draws a spacer of its own, outside its phone screens", () => {
    for (const key of Object.keys(PAGES)) {
      const template = key.replace("../../app", "").replace(/\/page\.tsx$/, "") || "/";
      if (hasOwnActionBar(template)) continue;
      expect(read(resolve(__dirname, key)), template).not.toMatch(/styles\.spacer\b/);
    }
  });
});

describe("a screen on the five-tab bar ends on its content, the body's padding its only clearance", () => {
  it.each(TAB_BAR.filter((r) => !AWAITING_RULING.has(r.template)).map((r) => [r.template, r] as const))("%s", async (_t, r) => {
    const doc = await renderPage(r);
    const found = screensIn(doc, r);
    expect(found.length, `${r.path}: no phone screen rendered`).toBeGreaterThan(0);
    for (const { el, s } of found) expect(tabBarEndProblems(el, s.k), `${r.path} (${s.name})`).toEqual([]);
  });

  for (const [t, why] of AWAITING_RULING) it.todo(`${t} — ${why}; awaiting the owner's go-ahead (14 Oct 2026)`);

  it("no stylesheet of a tab-bar screen keeps a .spacer rule with nothing left to draw it", () => {
    const tabOnly = new Map<string, Screen>();
    for (const r of TAB_BAR) for (const s of r.screens) tabOnly.set(s.name, s);
    for (const r of ROUTES.filter((x) => !x.tabBar)) for (const s of r.screens) tabOnly.delete(s.name);
    for (const s of tabOnly.values()) {
      if (/styles\.spacer\b/.test(s.code)) continue; // still drawn: the render test above judges it
      expect(rules(read(s.css)).map((x) => x.selector), s.css).not.toContain(".spacer");
    }
  });
});

describe("a screen with its own action bar keeps the spacer that clears it", () => {
  it.each(ACTION_BAR.map((r) => [r.template, r] as const))("%s", async (_t, r) => {
    const doc = await renderPage(r);
    const found = screensIn(doc, r);
    expect(found.length, `${r.path}: no phone screen rendered`).toBeGreaterThan(0);
    const pageCssName = read(r.file).match(/^import styles from "\.\/([\w.]+\.module\.css)";$/m)?.[1];
    const pageCss = pageCssName ? join(r.file, "..", pageCssName) : undefined;
    const bars = found.filter(({ el, s }) => [...el.children].some((c) => s.k.actionBar && c.classList.contains(s.k.actionBar)));
    expect(bars.length, `${r.path}: the tab bar stands down here, so the screen should pin its own bar`).toBeGreaterThan(0);
    for (const { el, s } of found) expect(actionBarClearanceProblems(doc, el, s, pageCss), `${r.path} (${s.name})`).toEqual([]);
  });
});

/**
 * The negative control: /faq as it shipped until this change. The line is
 * verbatim from app/components/MobileFaq.tsx (line 97 at 9873d85a) and the
 * rule from mobileFaq.module.css (line 164); the element is what that line
 * rendered under vitest, read from this file's own run against 9873d85a
 * (14 Oct 2026), where /faq, /contact and /embed failed and nothing else did.
 * It came last, straight after the list of questions.
 */
const SHIPPED_FAQ_SPACER_LINE = "      <div className={styles.spacer} />";
const SHIPPED_FAQ_SPACER_RULE = ".spacer { height: 96px; }";
const SHIPPED_FAQ_SPACER_HTML = '<div class="_spacer_a857ca"></div>';

describe("the guard catches the /faq the site shipped", () => {
  it("the shipped screen, its spacer last, fails; the screen as it is now passes", async () => {
    const r = ROUTES.find((x) => x.template === "/faq")!;
    const doc = await renderPage(r);
    const [{ el, s }] = screensIn(doc, r);
    expect(tabBarEndProblems(el, s.k)).toEqual([]);
    // the questions are the screen's last block now
    expect(el.lastElementChild!.className).toBe(s.k.list);

    // the shipped line is the spacer the scans look for, and its rule is gone
    expect(/styles\.spacer\b/.test(SHIPPED_FAQ_SPACER_LINE)).toBe(true);
    expect(rules(SHIPPED_FAQ_SPACER_RULE).map((x) => x.selector)).toEqual([".spacer"]);
    expect(hasRule(s.css, ".spacer")).toBe(false);
    // what it rendered was the module's own spacer class
    expect(SHIPPED_FAQ_SPACER_HTML).toBe(`<div class="${s.k.spacer}"></div>`);

    // put it back after the questions, where it shipped: caught twice over
    const shipped = el.cloneNode(true) as Element;
    shipped.insertAdjacentHTML("beforeend", SHIPPED_FAQ_SPACER_HTML);
    expect(tabBarEndProblems(shipped, s.k)).toEqual([
      "draws its .spacer, stacked on the body's tab-bar clearance",
      `ends on an empty <div class="${s.k.spacer}">, a spacer on the tab bar's clearance`,
    ]);
    // and under any other class name, the empty last box alone still is
    const renamed = el.cloneNode(true) as Element;
    renamed.insertAdjacentHTML("beforeend", '<div class="_foot_renamed"></div>');
    expect(tabBarEndProblems(renamed, s.k)).toHaveLength(1);
  });
});
