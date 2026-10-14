import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/compare",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, scroll: _s, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean; scroll?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ComparePage from "../../app/compare/page";
import PairPage from "../../app/compare/[pair]/page";
import styles from "../../app/compare/compare.module.css";
import { rules, winning } from "../fixtures/cssRules";

/**
 * J2-1 with fix 43 (design review 8 Oct 2026): on a phone pair page the two
 * slot cards and the segmented mode control give way to one compact row —
 * "{A} CHANGE · {B} CHANGE" and a mode menu. Each change is ONE link the full
 * 56px row tall and at least 44px wide; the menu is a native <details> with
 * the four modes as links (Song vs song · Album vs album · Artist totals · By
 * country), so it works without script, behind a 44px summary.
 *
 * No new link: the change hrefs are the slot cards' own clears and the menu's
 * are the segment's, which the bot-flood rule (#464) needs as much as the
 * design does.
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
const PAGE = readFileSync("app/compare/page.tsx", "utf8");
const root = (markup: string) => {
  const d = document.createElement("div");
  d.innerHTML = markup;
  return d;
};
const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const pairPage = async (slug: string) => root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
const query = async (sp: Record<string, string>) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));
const at = (w: number) => (m: string | null) => m === null || (/max-width: 900px/.test(m) ? w <= 900 : /max-width: 360px/.test(m) ? w <= 360 : /min-width: 901px/.test(m) ? w > 900 : false);
const px = (v: string | undefined) => parseFloat(v ?? "0");

describe("the mode menu: a <details> of four links that works without script", () => {
  it("four modes, the current one a span with aria-current, the rest links with the segment's hrefs", async () => {
    for (const [page, current] of [
      [await pairPage("burna-boy-vs-wizkid"), "Artist totals"],
      [await query({ a: "burna-boy", b: "wizkid", feat: "0" }), "Artist totals"],
    ] as const) {
      const menu = page.querySelector(`details.${styles.modeMenu}`)!;
      expect(menu).not.toBeNull();
      expect(menu.hasAttribute("open")).toBe(false);
      const items = [...menu.querySelectorAll("li")];
      expect(items.map((li) => norm(li.textContent))).toEqual(["Song vs song", "Album vs album", "Artist totals", "By country"]);
      const on = menu.querySelector('[aria-current="page"]')!;
      expect(on.tagName).toBe("SPAN");
      expect(on.classList.contains(styles.modeOn)).toBe(true);
      expect(norm(on.textContent)).toBe(current);
      // The segment's links, mode for mode: the two can never drift.
      const seg = new Map([...page.querySelectorAll(`nav.${styles.seg} a`)].map((x) => [norm(x.querySelector(`.${styles.segLong}`)?.textContent), x.getAttribute("href")]));
      const menuLinks = [...menu.querySelectorAll("a")].map((x) => [norm(x.textContent), x.getAttribute("href")] as const);
      expect(menuLinks.length).toBe(3);
      for (const [label, h] of menuLinks) expect(h, label).toBe(seg.get(label));
    }
  });

  it("the summary names the current mode, with ▾ shut and ▴ open in their own elements, and a 44px target", async () => {
    const summary = (await pairPage("burna-boy-vs-wizkid")).querySelector(`.${styles.modeSummary}`)!;
    expect(summary.tagName).toBe("SUMMARY");
    expect(norm(summary.textContent)).toBe("Comparison mode: Artists ▾▴");
    expect(summary.querySelector(`.${styles.whenClosed}`)?.textContent).toBe("▾");
    expect(summary.querySelector(`.${styles.whenOpen}`)?.textContent).toBe("▴");
    // Exactly one of the two shows per state.
    const hide = rules(CSS).find((r) => r.selector.includes(".modeMenu[open] .whenClosed"))!;
    expect(hide.selector).toContain(".modeMenu:not([open]) .whenOpen");
    expect(hide.body).toMatch(/display:\s*none/);
    for (const w of [320, 390, 900]) expect(px(winning(CSS, ".modeSummary", "min-height", at(w))), `${w}`).toBeGreaterThanOrEqual(44);
    expect(winning(CSS, ".modeSummary", "border", at(390))).toBe("1px solid var(--btn-edge)");
    // Each mode in the open list is a 44px row too.
    expect(px(winning(CSS, ".modeItem", "min-height", at(390)))).toBeGreaterThanOrEqual(44);
  });

  it("the current mode is the segment's ink fill, never gold", () => {
    expect(winning(CSS, ".modeOn", "background", at(390))).toBe("var(--text)");
    expect(winning(CSS, ".modeOn", "color", at(390))).toBe("var(--bg)");
    for (const r of rules(CSS).filter((x) => /\.mode(On|Item|List|Summary|Menu)\b/.test(x.selector))) expect(r.body, r.selector).not.toMatch(/--gold/);
  });

  it("the page stays a server page: no client component, no script for the menu", () => {
    expect(PAGE).not.toMatch(/^["']use client["']/m);
    expect(PAGE).toMatch(/function ModeMenu\(/);
    expect(PAGE).not.toMatch(/onClick|useState|aria-expanded/);
  });
});

describe("the change row: one link per side, the full row tall, to the slot's own clear", () => {
  it("Burna Boy vs Wizkid: '{A} CHANGE · {B} CHANGE', each to the same href as its slot card's ✕", async () => {
    const page = await pairPage("burna-boy-vs-wizkid");
    const row = page.querySelector(`.${styles.changeRow}`)!;
    const links = [...row.querySelectorAll(`a.${styles.changeLink}`)];
    expect(links.map((l) => norm(l.textContent))).toEqual(["Burna Boy Change", "Wizkid Change"]);
    expect(links.map((l) => l.getAttribute("href"))).toEqual(["/compare?b=wizkid", "/compare?a=burna-boy"]);
    // The slot cards' clears, which already link there on every pair page.
    const clears = [...page.querySelectorAll(`.${styles.slotClear}`)].map((l) => l.getAttribute("href"));
    expect(clears).toEqual(links.map((l) => l.getAttribute("href")));
    // The visible text is the accessible name: no aria-label over it.
    for (const l of links) expect(l.hasAttribute("aria-label")).toBe(false);
    expect(norm(row.querySelector(`.${styles.changeSep}`)?.textContent)).toBe("·");
  });

  it("each link is 56px tall and at least 44px wide; the name ellipsises, the word does not", () => {
    for (const w of [320, 390, 900]) {
      expect(px(winning(CSS, ".changeLink", "min-height", at(w))), `${w}`).toBeGreaterThanOrEqual(56);
      expect(px(winning(CSS, ".changeLink", "min-width", at(w))), `${w}`).toBeGreaterThanOrEqual(44);
    }
    expect(winning(CSS, ".changeName", "text-overflow", at(390))).toBe("ellipsis");
    expect(winning(CSS, ".changeWord", "flex", at(390))).toBe("none");
    // A text link, so gold: the action colour.
    expect(winning(CSS, ".changeWord", "color", at(390))).toBe("var(--gold)");
  });

  it("the narrowest phones (≤360, compare's one small-phone edge) set each name over its CHANGE inside the same 56px link; wider, the row is one line (review, 14 Oct 2026)", () => {
    for (const w of [320, 360]) {
      expect(winning(CSS, ".changeLink", "flex-direction", at(w)), `${w}`).toBe("column");
      expect(winning(CSS, ".changeName", "max-width", at(w)), `${w}`).toBe("100%");
      expect(px(winning(CSS, ".changeLink", "min-height", at(w))), `${w}`).toBeGreaterThanOrEqual(56);
    }
    for (const w of [375, 390, 900]) expect(winning(CSS, ".changeLink", "flex-direction", at(w)), `${w}`).toBeUndefined();
    // The name still ellipsises, never the word, and the mode menu keeps its reserve.
    expect(winning(CSS, ".changeName", "text-overflow", at(320))).toBe("ellipsis");
    expect(winning(CSS, ".changeWord", "flex", at(320))).toBe("none");
    expect(winning(CSS, ".changeLinks", "padding-right", at(320))).toBe(winning(CSS, ".changeLinks", "padding-right", at(390)));
    // Negative control: J2-1 as first built (1707d51d, never shipped) had no
    // narrow rule, so at 320 the link stayed one line: "Burn… CHANGE · W…
    // CHANGE", about 20px a name beside the menu's reserve.
    const first = CSS.replace(/\n {2}\.changeLink \{ flex-direction: column;[^}]*\}/, "");
    expect(first).not.toBe(CSS);
    expect(winning(first, ".changeLink", "flex-direction", at(320))).toBeUndefined();
  });

  it("phone only: hidden above 900, where the slots and the segment are the controls; at or below, the slots and the segment go", () => {
    for (const w of [1440, 1024, 901]) expect(winning(CSS, ".changeRow", "display", at(w)), `${w}`).toBe("none");
    for (const w of [900, 390, 320]) {
      expect(winning(CSS, ".changeRow", "display", at(w)), `${w}`).toBe("block");
      expect(winning(CSS, ".flowPair > .seg", "display", at(w)), `${w}`).toBe("none");
      expect(winning(CSS, ".flowPair > .slots", "display", at(w)), `${w}`).toBe("none");
    }
    for (const w of [1440, 901]) {
      expect(winning(CSS, ".flowPair > .seg", "display", at(w)), `${w}`).toBeUndefined();
      expect(winning(CSS, ".flowPair > .slots", "display", at(w)), `${w}`).toBeUndefined();
    }
  });

  it("only a pair view carries it", async () => {
    expect((await pairPage("burna-boy-vs-wizkid")).querySelectorAll(`.${styles.changeRow}`).length).toBe(1);
    for (const page of [
      await query({ a: "burna-boy" }),
      await query({ mode: "songs", a: "burna-boy", b: "wizkid", sa: "Last Last", sb: "Essence" }),
      await query({ mode: "country" }),
      await query({ a: "burna-boy", b: "burna-boy" }),
    ])
      expect(page.querySelector(`.${styles.changeRow}`)).toBeNull();
  });

  it("no new link: every href in the row is one the desktop page already carries", async () => {
    const page = await pairPage("burna-boy-vs-wizkid");
    const row = page.querySelector(`.${styles.changeRow}`)!;
    const elsewhere = new Set(
      [...page.querySelectorAll("a")].filter((a) => !row.contains(a)).map((a) => a.getAttribute("href")),
    );
    for (const a of row.querySelectorAll("a")) expect(elsewhere.has(a.getAttribute("href")), a.getAttribute("href") ?? "").toBe(true);
  });
});

describe("negative controls: the shipped pair page", () => {
  it("served the segment and no <details> before the result, and the segment's base is under the 44px floor", () => {
    // live/pair.html (burnaboystats.com, 8 Oct 2026), the head of the controls.
    const live = '<nav class="compare-module__-ZWgpW__seg" aria-label="Comparison mode">';
    const d = root(`${live}</nav><div id="result"></div>`);
    expect(d.querySelector('nav[aria-label="Comparison mode"]')).not.toBeNull();
    expect(d.innerHTML.slice(0, d.innerHTML.indexOf('id="result"'))).not.toContain("<details");
    // main's base .segItem (e85e6efe, compare.module.css:75-87), verbatim: 40px.
    const shipped = `.segItem {\n  font-family: var(--font-mono), monospace;\n  font-size: var(--type-label);\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  padding: 9px 16px;\n  border-radius: 999px;\n  color: var(--text-muted);\n  min-height: 40px;\n  display: inline-flex;\n  align-items: center;\n}`;
    expect(px(winning(shipped, ".segItem", "min-height", () => true))).toBeLessThan(44);
  });
});
