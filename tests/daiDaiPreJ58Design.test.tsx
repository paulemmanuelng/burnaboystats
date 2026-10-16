import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import pageStyles from "../app/dai-dai/dai-dai.module.css";
import storyStyles from "../app/components/DaiDaiStory.module.css";
import figureStyles from "../app/components/DaiDaiFigures.module.css";
import { read, winning } from "./fixtures/cssRules";

/**
 * The Dai Dai page keeps the design it had before Job 5 · J5-8 (07c7c820,
 * merged in #496), which the owner had reverted on 16 Oct 2026 ("revert the
 * dai dai design … i liked the older design"): no four-figure strip in the
 * hero, and chapter 02's Global 200 figure with no "not read" bracket, its
 * unread weeks the full-height hatched cells they were before.
 *
 * Each negative control is J5-8's own markup, as the dev server rendered
 * origin/main db35e489 on 16 Oct 2026 (/dai-dai and /dai-dai/es), pasted
 * verbatim; the CSS one is the rule it shipped.
 */

const SHIPPED_STRIP_EN = '<div class="daiDaiStrip_strip__0af2I"><a href="#dd-ch02" class="daiDaiStrip_tile__eXmeN"><span class="daiDaiStrip_value__VHgc7">No. 1</span><span class="daiDaiStrip_label__ZdBXM">Billboard Global 200\u00a0· 7\u00a0wks</span></a><a href="#dd-ch04" class="daiDaiStrip_tile__eXmeN"><span class="daiDaiStrip_value__VHgc7">37</span><span class="daiDaiStrip_label__ZdBXM">days No. 1 on Spotify Global</span></a><a href="#dd-ch03" class="daiDaiStrip_tile__eXmeN"><span class="daiDaiStrip_value__VHgc7">26</span><span class="daiDaiStrip_label__ZdBXM">countries at No. 1</span></a><a href="#dd-ch05" class="daiDaiStrip_tile__eXmeN"><span class="daiDaiStrip_value__VHgc7">19</span><span class="daiDaiStrip_label__ZdBXM">certifications</span></a></div>';
const SHIPPED_STRIP_ES = '<div class="daiDaiStrip_strip__0af2I"><a href="#dd-ch02" class="daiDaiStrip_tile__eXmeN"><span class="daiDaiStrip_value__VHgc7">N.º 1</span><span class="daiDaiStrip_label__ZdBXM">Billboard Global 200\u00a0· 7\u00a0sem.</span></a><a href="#dd-ch04" class="daiDaiStrip_tile__eXmeN"><span class="daiDaiStrip_value__VHgc7">37</span><span class="daiDaiStrip_label__ZdBXM">días en el N.º 1 en Spotify Global</span></a><a href="#dd-ch03" class="daiDaiStrip_tile__eXmeN"><span class="daiDaiStrip_value__VHgc7">26</span><span class="daiDaiStrip_label__ZdBXM">países en el N.º 1</span></a><a href="#dd-ch05" class="daiDaiStrip_tile__eXmeN"><span class="daiDaiStrip_value__VHgc7">19</span><span class="daiDaiStrip_label__ZdBXM">certificaciones</span></a></div>';
const SHIPPED_BRACKET_EN = '<div class="DaiDaiFigures_unreadRow__OFcnt" style="grid-template-columns:repeat(17, minmax(0, 1fr))" aria-hidden="true"><span class="DaiDaiFigures_unreadBracket__MQsHL" style="grid-column:2 / 7"><span class="DaiDaiFigures_unreadText__vMTdq">not read</span></span></div>';
const SHIPPED_BRACKET_ES = '<div class="DaiDaiFigures_unreadRow__OFcnt" style="grid-template-columns:repeat(17, minmax(0, 1fr))" aria-hidden="true"><span class="DaiDaiFigures_unreadBracket__MQsHL" style="grid-column:2 / 7"><span class="DaiDaiFigures_unreadText__vMTdq">sin lectura</span></span></div>';
// origin/main db35e489, app/components/DaiDaiFigures.module.css:
const SHIPPED_UNREAD_RULE = ".barUnread {\n  height: 6px;";

const FIGURES_CSS = "app/components/DaiDaiFigures.module.css";

const host = (html: string) => {
  const d = document.createElement("div");
  d.innerHTML = html;
  return d;
};

/** The hero's text block holds the kicker, the h1, the lede and the actions,
 *  in that order, and its one in-page link is "Skip to the numbers". */
function heroProblems(page: Element): string[] {
  const out: string[] = [];
  const heroes = page.querySelectorAll(`section.${pageStyles.hero}`);
  if (heroes.length !== 1) return [`${heroes.length} heroes`];
  const text = heroes[0].querySelector(`.${pageStyles.heroText}`);
  if (!text) return ["no hero text block"];
  const kids = [...text.children].map((c) => c.className);
  const want = [pageStyles.kicker, pageStyles.h1, pageStyles.lede, pageStyles.heroActions];
  if (kids.length !== want.length || kids.some((k, i) => k !== want[i])) out.push(`hero text holds ${kids.length} blocks, not kicker/h1/lede/actions`);
  for (const a of heroes[0].querySelectorAll('a[href^="#"]')) {
    const href = a.getAttribute("href");
    if (href !== "#numbers") out.push(`hero jumps to ${href}`);
  }
  for (const el of page.querySelectorAll('[id^="dd-ch"]')) out.push(`chapter anchor #${el.id}`);
  return out;
}

/** Chapter 02's figure draws no bracket over its unread weeks: no text a
 *  reader sees reads "not read" / "sin lectura" (the hidden lines each week
 *  keeps for a screen reader are not drawn). */
function chapter02Problems(page: Element): string[] {
  const ch02 = page.querySelectorAll(`.${storyStyles.chapter}`)[1];
  if (!ch02) return ["no chapter 02"];
  const drawn = [...ch02.querySelectorAll('[aria-hidden="true"]')].map((e) => e.textContent ?? "").join(" ");
  return /not read|sin lectura/.test(drawn) ? ["a 'not read' bracket over the unread weeks"] : [];
}

/** An unread week is the hatched cell at the full track height, the No. 1
 *  bar's 56px, as before J5-8 — not a stub at the baseline. */
const unreadHeight = (css: string) => winning(css, ".barUnread", "height", (m) => m === null);

const EDITIONS = [
  ["/dai-dai", DaiDaiPage, SHIPPED_STRIP_EN, SHIPPED_BRACKET_EN],
  ["/dai-dai/es", DaiDaiPageES, SHIPPED_STRIP_ES, SHIPPED_BRACKET_ES],
] as const;

describe("Dai Dai keeps the pre-J5-8 design (owner, 16 Oct 2026)", () => {
  it.each(EDITIONS)("%s: the hero has no figure strip, and no chapter carries a tile's anchor", (_, Page) => {
    expect(heroProblems(host(renderToStaticMarkup(<Page />)))).toEqual([]);
  });

  it.each(EDITIONS)("%s: chapter 02 has no 'not read' bracket", (_, Page) => {
    const d = host(renderToStaticMarkup(<Page />));
    expect(chapter02Problems(d)).toEqual([]);
    // Its unread weeks are still there, each a hatched cell with no height of
    // its own and the hidden line that says it.
    const cells = [...d.querySelectorAll(`.${storyStyles.chapter}`)[1].querySelectorAll("li")];
    const unread = cells.filter((c) => c.querySelector(`.${figureStyles.barUnread}`));
    expect(unread.length).toBeGreaterThan(0);
    for (const c of unread) expect(c.querySelector('[style*="height"]')).toBeNull();
  });

  it("an unread week is drawn at the full 56px track height", () => {
    expect(unreadHeight(read(FIGURES_CSS))).toBe("56px");
  });

  it.each(EDITIONS)("negative control, %s: J5-8's strip in the hero fails", (_, Page, strip) => {
    const d = host(renderToStaticMarkup(<Page />));
    d.querySelector(`.${pageStyles.heroActions}`)!.insertAdjacentHTML("beforebegin", strip);
    expect(heroProblems(d)).toEqual([
      "hero text holds 5 blocks, not kicker/h1/lede/actions",
      "hero jumps to #dd-ch02",
      "hero jumps to #dd-ch04",
      "hero jumps to #dd-ch03",
      "hero jumps to #dd-ch05",
    ]);
  });

  it.each(EDITIONS)("negative control, %s: J5-8's bracket over chapter 02's unread weeks fails", (_, Page, _strip, bracket) => {
    const d = host(renderToStaticMarkup(<Page />));
    d.querySelectorAll(`.${storyStyles.chapter}`)[1].querySelector("ol")!.insertAdjacentHTML("beforebegin", bracket);
    expect(chapter02Problems(d)).toEqual(["a 'not read' bracket over the unread weeks"]);
  });

  it("negative control: J5-8's 6px stub fails", () => {
    const css = read(FIGURES_CSS);
    const shipped = css.replace(".barUnread {\n  height: 56px;", SHIPPED_UNREAD_RULE);
    expect(shipped).toContain(SHIPPED_UNREAD_RULE);
    expect(unreadHeight(shipped)).toBe("6px");
  });
});
