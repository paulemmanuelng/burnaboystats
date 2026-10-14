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

import ComparePage, { generateMetadata } from "../../app/compare/page";
import styles from "../../app/compare/compare.module.css";
import { compare } from "../../app/lib/certUnits";
import { featuredPairs, pairSlug } from "../../app/lib/comparePairs";
import { PICKER_FOLD, pickerArtists } from "../../app/lib/comparePicker";
import { winning } from "../fixtures/cssRules";

/**
 * J2-9 with fixes 38, 47 and 51 (design review 8 Oct 2026): /compare opens on
 * the board's first head-to-head, both sides filled, with "Change" on each,
 * so its first screen carries a figure. The pair is featuredPairs()[0], never
 * typed. The canonical and the title stay /compare's; the mode control, all
 * eleven head-to-heads and "Or pick a market" stay (fix 47); the pair on
 * screen is the N2 chip (fix 38); "The full table: {A} vs {B} ↗" leads to the
 * pair's own page (fix 51). The preview is the tool: no table, no strip, no
 * dataset, no exit.
 *
 * The bot-flood rule (#464): the preview mints no new query link. Its
 * head-to-heads and its full-table link are static pair pages, and its
 * remaining /compare? links are ones the live hub or pair page already served.
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
const root = (markup: string) => {
  const d = document.createElement("div");
  d.innerHTML = markup;
  return d;
};
const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const num = (s: string | null | undefined) => Number(norm(s).replace(/,/g, ""));
const hub = async (sp: Record<string, string> = {}) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));
const at = (w: number) => (m: string | null) => m === null || (/max-width: 900px/.test(m) ? w <= 900 : /max-width: 360px/.test(m) ? w <= 360 : /min-width: 901px/.test(m) ? w > 900 : false);
const [A, B] = featuredPairs()[0];

describe("/compare opens on the first head-to-head", () => {
  it("premise: the first head-to-head is Burna Boy vs Wizkid today", () => {
    expect([A.slug, B.slug]).toEqual(["burna-boy", "wizkid"]);
  });

  it("the hub's own head, both sides filled, and the figures are that pair's", async () => {
    const page = await hub();
    expect(norm(page.querySelector("h1")?.textContent)).toBe("Certified units, compared");
    expect(norm(page.querySelector(`.${styles.kicker}`)?.textContent)).toBe("Certifications › Compare");
    // The hub keeps its generic lede (it belongs here) and no pair line.
    expect(norm(page.querySelector(`.${styles.lede}`)?.textContent)).toMatch(/^Every certification is a floor/);
    expect(page.querySelector(`.${styles.pairLine}`)).toBeNull();
    const result = page.querySelector("#result")!;
    expect(result).not.toBeNull();
    const c = compare(A, B, { includeFeatures: true });
    expect([...result.querySelectorAll(`.${styles.figure}`)].map((f) => num(f.textContent))).toEqual([c.a.total, c.b.total]);
    expect([...page.querySelectorAll(`.${styles.slotTitle}`)].map((x) => norm(x.textContent))).toEqual([A.name, B.name]);
    // The phone's back bar names the hub, not the sample pair.
    expect(norm(page.querySelector(`.${styles.backLabel}`)?.textContent)).toBe("Compare");
    expect(page.querySelector(`.${styles.backBar} a`)?.getAttribute("href")).toBe("/certifications");
  });

  it("each side's Change drops that side and keeps the other", async () => {
    const page = await hub();
    const want = [`/compare?b=${B.slug}`, `/compare?a=${A.slug}`];
    expect([...page.querySelectorAll(`.${styles.slotClear}`)].map((l) => l.getAttribute("href"))).toEqual(want);
    expect([...page.querySelectorAll(`.${styles.changeRow} a.${styles.changeLink}`)].map((l) => l.getAttribute("href"))).toEqual(want);
    expect([...page.querySelectorAll(`.${styles.changeRow} a.${styles.changeLink}`)].map((l) => norm(l.textContent))).toEqual([`${A.name} Change`, `${B.name} Change`]);
  });

  it("one 'The full table: {A} vs {B} ↗', to the pair's own page, in the coverage line's place", async () => {
    const page = await hub();
    const links = [...page.querySelectorAll(`a.${styles.fullTable}`)];
    expect(links).toHaveLength(1);
    expect(norm(links[0].textContent)).toBe(`The full table: ${A.name} vs ${B.name} ↗`);
    expect(links[0].getAttribute("href")).toBe(`/compare/${pairSlug(A, B)}`);
    expect(links[0].closest(`.${styles.diffRow}`)).not.toBeNull();
    expect(page.querySelector(`.${styles.scope}`)).toBeNull();
    // The action colour, a text link.
    expect(winning(CSS, ".fullTable", "color", at(1440))).toBe("var(--gold)");
    expect(parseFloat(winning(CSS, ".fullTable", "min-height", at(390)) ?? "0")).toBeGreaterThanOrEqual(44);
  });

  it("the preview is the tool, not the pair page: no table, strip, summary, dataset, More with or exit", async () => {
    const page = await hub();
    expect(page.querySelector("table")).toBeNull();
    expect(page.querySelector(`.${styles.ngStrip}`)).toBeNull();
    expect(page.querySelector(`.${styles.summaryRow}`)).toBeNull();
    expect(page.querySelector(`.${styles.moreWith}`)).toBeNull();
    expect(page.querySelector('section[aria-label="Next"]')).toBeNull();
    expect(page.innerHTML).not.toContain('"@type":"Dataset"');
    // ...and keeps the tool's foot: the three method cards.
    expect(page.querySelectorAll(`.${styles.method} > div`)).toHaveLength(3);
  });

  it("features off: the preview holds, its figures are lead credits only, and the full table is still the static page", async () => {
    const page = await hub({ feat: "0" });
    const c = compare(A, B, { includeFeatures: false });
    expect([...page.querySelector("#result")!.querySelectorAll(`.${styles.figure}`)].map((f) => num(f.textContent))).toEqual([c.a.total, c.b.total]);
    expect(page.querySelector(`a.${styles.fullTable}`)?.getAttribute("href")).toBe(`/compare/${pairSlug(A, B)}`);
    // The switch turns features back on at /compare itself.
    const feat = [...page.querySelectorAll(`.${styles.switch}`)].find((x) => /Featured appearances:/.test(x.textContent ?? ""))!;
    expect(feat.getAttribute("href")).toBe("/compare");
    // No pair query link: a pair is only ever its static page.
    for (const a of page.querySelectorAll("a[href^='/compare?']")) expect(a.getAttribute("href"), a.getAttribute("href") ?? "").not.toMatch(/[?&]a=.*&b=|[?&]b=.*&a=/);
  });

  it("all eleven head-to-heads stay, each a static pair page, the one on screen the N2 chip", async () => {
    const page = await hub();
    const links = [...page.querySelectorAll(`a.${styles.featuredLink}`)];
    expect(links.map((l) => l.getAttribute("href"))).toEqual(featuredPairs().map(([x, y]) => `/compare/${pairSlug(x, y)}`));
    const on = links.filter((l) => l.classList.contains(styles.featuredOn));
    expect(on).toHaveLength(1);
    expect(on[0].getAttribute("aria-current")).toBe("true");
    expect(on[0].getAttribute("href")).toBe(`/compare/${pairSlug(A, B)}`);
    for (const l of links.filter((x) => x !== on[0])) expect(l.hasAttribute("aria-current")).toBe(false);
    expect(norm(page.querySelector(`.${styles.featuredAside}`)?.textContent)).toBe("Or pick a market — certified units country by country ↗");
    // N2 on both layouts, the others on --btn-edge.
    for (const w of [390, 1440]) {
      expect(winning(CSS, ".featuredOn", "border-color", at(w))).toBe("var(--chip-on-edge)");
      expect(winning(CSS, ".featuredOn", "background", at(w))).toBe("var(--chip-on-wash)");
      expect(winning(CSS, ".featuredOn", "color", at(w))).toBe("var(--chip-on-ink)");
      expect(winning(CSS, ".featuredLink", "border", at(w))).toBe("1px solid var(--btn-edge)");
    }
    // Before the slots on desktop, as the canvas draws /compare.
    const featured = page.querySelector(`.${styles.featured}`)!;
    expect(page.querySelector(`nav.${styles.seg}`)!.compareDocumentPosition(featured) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(featured.compareDocumentPosition(page.querySelector(`.${styles.slots}`)!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("no new query link: every /compare? link is one the live hub or pair page served", async () => {
    // live/hub.html and live/pair.html (burnaboystats.com, 8 Oct 2026): the
    // hub's switches and modes, and the pair page's two side clears. (The
    // hub also served its 40 picker chips, /compare?a=…#slot-b and
    // /compare?b=…#slot-a; the preview carries none of them.)
    const SERVED = new Set(["/compare?feat=0", "/compare?mode=albums", "/compare?mode=songs", "/compare?ng=1", "/compare?a=burna-boy", "/compare?b=wizkid"]);
    const page = await hub();
    const q = [...page.querySelectorAll("a[href^='/compare?']")].map((a) => a.getAttribute("href")!);
    expect(q.length).toBeGreaterThan(0);
    for (const h of q) expect(SERVED.has(h), h).toBe(true);
  });

  it("the head and canonical stay /compare's", async () => {
    const m = await generateMetadata({ searchParams: Promise.resolve({}) });
    expect(m.alternates?.canonical).toBe("/compare");
    expect(String(m.title)).toBe("Compare Certified Units — Burna Boy vs Wizkid & More");
  });

  it("a side's Change brings its picker back: /compare?b=wizkid offers every other artist, eight shown", async () => {
    const page = await hub({ b: B.slug });
    const slotA = page.querySelector("#slot-a")!;
    expect(slotA.classList.contains(styles.slotEmpty)).toBe(true);
    const names = [...slotA.querySelectorAll(`a.${styles.chip}`)].map((a) => norm(a.textContent));
    const want = pickerArtists(B.slug).map((x) => x.name);
    expect(names).toEqual(want);
    expect(norm(slotA.querySelector("summary")?.textContent)).toContain(`+ ${want.length - PICKER_FOLD} more`);
    // Not the preview: no featured row, no N2 chip, no full-table link.
    expect(page.querySelector(`.${styles.featured}`)).toBeNull();
    expect(page.querySelector(`a.${styles.fullTable}`)).toBeNull();
  });
});

describe("the preview on a phone", () => {
  const SOURCE = new Map([...new Set([...CSS.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((m) => m[1]))].map((n) => [String((styles as Record<string, string>)[n]), n]));
  const names = (el: Element) => [...el.classList].map((c) => SOURCE.get(c) ?? c);
  const prop = (el: Element, p: string, w: number) => {
    let v: string | undefined;
    for (const n of names(el)) {
      const own = winning(CSS, `.${n}`, p, at(w));
      if (own !== undefined) v = own;
    }
    for (const n of names(el)) {
      const scoped = winning(CSS, `.flowHub > .${n}`, p, at(w));
      if (scoped !== undefined) v = scoped;
    }
    return v;
  };
  const painted = (flow: Element, w: number) =>
    [...flow.children]
      .map((el, i) => ({ el, i }))
      .filter(({ el }) => prop(el, "display", w) !== "none")
      .sort((x, y) => Number(prop(x.el, "order", w) ?? 0) - Number(prop(y.el, "order", w) ?? 0) || x.i - y.i)
      .map(({ el }) => el);

  it("at 390: the head-to-heads, the change row, the switches, both totals, the verdict and the full table, then the lede", async () => {
    const page = await hub();
    const flow = page.querySelector(`.${styles.flowHub}`)!;
    expect(flow).not.toBeNull();
    for (const w of [320, 390, 900]) expect(painted(flow, w).map((el) => names(el)[0]), `${w}`).toEqual(["featured", "changeRow", "controls", "head", "diffRow", "lede"]);
    for (const w of [901, 1440]) expect(prop(flow, "display", w), `${w}`).toBe("contents");
  });

  it("focus follows the eye: chips, the changes and the menu, the switches, the full table", async () => {
    const page = await hub();
    const flow = page.querySelector(`.${styles.flowHub}`)!;
    const w = 390;
    const shown = (el: Element) => {
      for (let n: Element | null = el; n && n !== flow; n = n.parentElement) {
        if (prop(n, "display", w) === "none") return false;
        if (n !== el && n.tagName === "DETAILS" && !n.hasAttribute("open") && el.tagName !== "SUMMARY") return false;
      }
      return true;
    };
    const SEL = "a[href], summary, button, input";
    const inDom = [...flow.querySelectorAll(SEL)].filter(shown);
    const byPaint = painted(flow, w).flatMap((el) => [...el.querySelectorAll(SEL)].filter(shown));
    expect(inDom).toEqual(byPaint);
    const label = (el: Element) => norm(el.textContent);
    expect(inDom.slice(0, featuredPairs().length).map((a) => a.getAttribute("href"))).toEqual(featuredPairs().map(([x, y]) => `/compare/${pairSlug(x, y)}`));
    expect(inDom.slice(featuredPairs().length).map(label)).toEqual([
      "certified units country by country ↗",
      `${A.name} Change`,
      `${B.name} Change`,
      "Comparison mode: Artists ▾▴",
      "Featured appearances: on · every cert held",
      "Nigeria: separated",
      `The full table: ${A.name} vs ${B.name} ↗`,
    ]);
  });

  it("one rule between each part: the change row's foot, then the totals' top; the switches draw none (review, 14 Oct 2026)", async () => {
    const page = await hub();
    const flow = page.querySelector(`.${styles.flowHub}`)!;
    const part = (n: string) => [...flow.children].find((el) => names(el).includes(n))!;
    const drawn = (v: string | undefined) => Boolean(v && v !== "0" && !/^0(px)?\b|none/.test(v));
    for (const w of [320, 390, 900]) {
      expect(drawn(prop(part("changeRow"), "border-bottom", w)), `${w}`).toBe(true);
      expect(prop(part("changeRow"), "margin-bottom", w), `${w}`).toBe("0");
      expect(drawn(prop(part("controls"), "border-top", w)), `${w}`).toBe(false);
      expect(drawn(prop(part("controls"), "border-bottom", w)), `${w}`).toBe(false);
      expect(prop(part("controls"), "margin-bottom", w), `${w}`).toBe("0");
    }
    // The pair page's switches keep both rules (J2-1's order puts them between the verdict and the strip).
    expect(drawn(winning(CSS, ".controls", "border-top", at(390)))).toBe(true);
    // Negative control: J2-9 as first built (b2e47eb0, never shipped): the
    // change row kept 14px under its rule and the switches kept both of theirs,
    // two pairs of rules 14px and 24px apart.
    const first = CSS.replace(".flowHub > .changeRow { order: -1; margin-bottom: 0; }", ".flowHub > .changeRow { order: -1; margin-bottom: 14px; }").replace(
      /\n {2}\.flowHub > \.controls \{[^}]*\}/,
      "",
    );
    expect(first).not.toBe(CSS);
    expect(winning(first, ".flowHub > .controls", "border-top", at(390))).toBeUndefined();
    expect(winning(first, ".controls", "border-top", at(390))).toBe("1px solid var(--rule-soft)");
    expect(winning(first, ".flowHub > .changeRow", "margin-bottom", at(390))).toBe("14px");
  });

  it("desktop: the verdict row ends on the method cards' own rule, not a second one 24px over it (review, 14 Oct 2026)", async () => {
    const page = await hub();
    const flow = page.querySelector(`.${styles.flowHub}`)!;
    const diff = [...flow.children].find((el) => names(el).includes("diffRow"))!;
    // The cards follow the preview (the visually hidden heading between them draws nothing).
    const method = page.querySelector(`.${styles.method}`)!;
    expect(method).not.toBeNull();
    expect(flow.compareDocumentPosition(method) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    for (const w of [901, 1024, 1440]) {
      expect(prop(diff, "border-bottom", w), `${w}`).toBe("0");
      expect(prop(diff, "margin-bottom", w), `${w}`).toBe("0");
      expect(winning(CSS, ".method", "border-top", at(w)), `${w}`).toBe("1px solid var(--rule)");
    }
    // A pair view's verdict row keeps its rule: the Nigeria strip and the summary follow it.
    expect(winning(CSS, ".diffRow", "border-bottom", at(1440))).toBe("1px solid var(--rule-soft)");
  });

  it("the chips are one row that scrolls sideways inside the page", () => {
    const sel = ".flowHub .featuredList";
    expect(winning(CSS, sel, "flex-wrap", at(390))).toBe("nowrap");
    expect(winning(CSS, sel, "overflow-x", at(390))).toBe("auto");
    expect(winning(CSS, sel, "overscroll-behavior-x", at(390))).toBe("contain");
    expect(winning(CSS, ".flowHub .featuredList > li", "flex", at(390))).toBe("none");
    expect(winning(CSS, sel, "flex-wrap", at(1440))).toBeUndefined();
  });
});

describe("negative controls: the live hub", () => {
  it("opened on two empty slots with no result, and no head-to-head was current", () => {
    // live/hub.html (burnaboystats.com, 8 Oct 2026), verbatim.
    const slot = root('<div class="compare-module__-ZWgpW__slot compare-module__-ZWgpW__slotEmpty" id="slot-a"><p class="compare-module__-ZWgpW__prompt">Choose an artist</p></div>');
    expect(slot.querySelector("#result")).toBeNull();
    expect(slot.querySelector('[class~="compare-module__-ZWgpW__slotEmpty"]')).not.toBeNull();
    const chip = root('<a class="compare-module__-ZWgpW__featuredLink" href="/compare/burna-boy-vs-wizkid">Burna Boy vs Wizkid</a>').querySelector("a")!;
    expect([...chip.classList].some((c) => /featuredOn/.test(c))).toBe(false);
    expect(chip.hasAttribute("aria-current")).toBe(false);
  });
});
