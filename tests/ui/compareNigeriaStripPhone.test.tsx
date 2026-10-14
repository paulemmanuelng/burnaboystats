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
import { artistBySlug, nigeriaDefault } from "../../app/lib/certUnits";
import { rules, winning } from "../fixtures/cssRules";

/**
 * J2-1 with fix 36 (design review 8 Oct 2026): on a phone pair page the
 * Nigeria strip sits directly under the switches in every state, and says
 * what it says on desktop. Separated: "{flag} Nigeria — separated.", the TCSN
 * sentence, each side's Nigerian certifications, then "Include Nigeria".
 * Included: "Nigeria — included." and "Separate Nigeria". Included by
 * default: the switch reads "included · by default" and the strip carries
 * "Nigeria included by default — {reason}". The switch words stay
 * "included" / "included · by default" / "separated" (never /certifications'
 * "left out"), and the action carries no glyph (fix 51).
 *
 * The TCSN sentence's first half now shows on the phone. Paul ruled on
 * 23 Sep 2026 that the paragraph was desktop-only; fix 36 (accepted 8 Oct)
 * puts it in the phone strip, and its second half stays desktop's (Q6).
 */

const CSS = readFileSync("app/compare/compare.module.css", "utf8");
const root = (markup: string) => {
  const d = document.createElement("div");
  d.innerHTML = markup;
  return d;
};
const norm = (s: string | null | undefined) => (s ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const pairPage = async (slug: string) => root(renderToStaticMarkup(await PairPage({ params: Promise.resolve({ pair: slug }) })));
const query = async (sp: Record<string, string>) => root(renderToStaticMarkup(await ComparePage({ searchParams: Promise.resolve(sp) })));
const at = (w: number) => (m: string | null) => m === null || (/max-width: 900px/.test(m) ? w <= 900 : /max-width: 360px/.test(m) ? w <= 360 : /min-width: 901px/.test(m) ? w > 900 : false);

/** The class names an element carries, as the stylesheet spells them. */
// The module's names as the stylesheet spells them, keyed by the test build's (the import is a proxy, not a map).
const SOURCE = new Map([...new Set([...CSS.matchAll(/\.([A-Za-z_][\w-]*)/g)].map((m) => m[1]))].map((n) => [String((styles as Record<string, string>)[n]), n]));
const names = (el: Element) => [...el.classList].map((c) => SOURCE.get(c) ?? c);
/** display at a width, for a flow child: its own classes, scoped under .flowPair when it is one. */
function display(el: Element, w: number): string {
  let v: string | undefined;
  for (const n of names(el)) {
    const own = winning(CSS, `.${n}`, "display", at(w));
    if (own !== undefined) v = own;
  }
  if (el.parentElement?.classList.contains(styles.flowPair))
    for (const n of names(el)) {
      const scoped = winning(CSS, `.flowPair > .${n}`, "display", at(w));
      if (scoped !== undefined) v = scoped;
    }
  return v ?? "block";
}
const order = (el: Element, w: number) => {
  let v = 0;
  for (const n of names(el)) {
    const o = winning(CSS, `.flowPair > .${n}`, "order", at(w));
    if (o !== undefined) v = Number(o);
  }
  return v;
};
/** The flow's shown children at a phone width, in the order the column paints them. */
const painted = (page: Element, w: number) => {
  const flow = page.querySelector(`.${styles.flowPair}`)!;
  return [...flow.children]
    .map((el, i) => ({ el, i }))
    .filter(({ el }) => display(el, w) !== "none")
    .sort((x, y) => order(x.el, w) - order(y.el, w) || x.i - y.i)
    .map(({ el }) => el);
};
/** Hidden by an ancestor's or its own display: none at width w (only the strip's own classes matter here). */
const hiddenAt = (el: Element, w: number) => {
  for (let n: Element | null = el; n && !n.classList.contains(styles.ngStrip); n = n.parentElement)
    for (const c of names(n)) if (winning(CSS, `.${c}`, "display", at(w)) === "none") return true;
  return false;
};

const STATES = [
  { label: "separated (the default)", page: () => pairPage("burna-boy-vs-wizkid"), head: "🇳🇬 Nigeria — separated.", action: "Include Nigeria", sw: "separated", byDefault: false },
  { label: "included (ng=1)", page: () => query({ a: "burna-boy", b: "wizkid", ng: "1" }), head: "🇳🇬 Nigeria — included.", action: "Separate Nigeria", sw: "included", byDefault: false },
  { label: "included by default", page: () => pairPage("burna-boy-vs-black-sherif"), head: "🇳🇬 Nigeria — included.", action: "Separate Nigeria", sw: "included · by default", byDefault: true },
] as const;

describe("fix 36: the phone strip, directly under the switches, in every state", () => {
  it("premise: Burna Boy vs Black Sherif opens with Nigeria included by default, with a reason", () => {
    const d = nigeriaDefault(artistBySlug("burna-boy")!, artistBySlug("black-sherif")!, true);
    expect(d.on).toBe(true);
    expect(d.reason).toMatch(/^Nigeria included: /);
  });

  it.each(STATES)("$label", async (s) => {
    const page = await s.page();
    const strip = page.querySelector(`section.${styles.ngStrip}`)!;
    expect(strip).not.toBeNull();
    for (const w of [320, 390, 900]) {
      const seq = painted(page, w);
      const i = seq.findIndex((el) => el.classList.contains(styles.controls));
      expect(i, `${w}: the switches are painted`).toBeGreaterThanOrEqual(0);
      expect(seq[i + 1], `${w}: the strip follows the switches`).toBe(strip);
    }
    expect(norm(strip.querySelector("h2")?.textContent)).toBe(s.head);
    // The TCSN sentence: the first half shows on a phone, the second does not.
    const [first, second] = [...strip.querySelectorAll(`.${styles.ngWhy} > span`)];
    expect(norm(first.textContent)).toBe("TCSN's register is request-based, so a title missing from it proves nothing about what it sold — only that nobody applied.");
    expect(second.classList.contains(styles.ngWhyMore)).toBe(true);
    for (const w of [320, 390, 900]) {
      expect(hiddenAt(first, w), `${w}: first half shown`).toBe(false);
      expect(hiddenAt(second, w), `${w}: second half hidden`).toBe(true);
    }
    for (const w of [901, 1440]) expect(hiddenAt(second, w), `${w}: desktop keeps both`).toBe(false);
    // Each side's Nigerian certifications, then the action, in words with no glyph.
    const figures = [...strip.querySelectorAll(`.${styles.ngFigures} > span`)].map((x) => norm(x.textContent));
    expect(figures).toHaveLength(2);
    for (const f of figures) expect(f).toMatch(/^.+ — \d+ certs? · at least [\d,]+$/);
    expect(norm(strip.querySelector(`.${styles.ngAction}`)?.textContent)).toBe(s.action);
    // The switch's words.
    const sw = [...page.querySelectorAll(`.${styles.switch}`)].find((x) => /Nigeria:/.test(x.textContent ?? ""))!;
    expect(norm(sw.textContent)).toBe(`Nigeria: ${s.sw}`);
    expect(page.textContent).not.toMatch(/left out/);
    // The by-default line, in the strip, phone only; desktop keeps its why-line.
    const def = strip.querySelector(`.${styles.ngDefault}`);
    if (s.byDefault) {
      const reason = nigeriaDefault(artistBySlug("burna-boy")!, artistBySlug("black-sherif")!, true).reason!.replace(/^Nigeria included: /, "");
      expect(norm(def?.textContent)).toBe(`Nigeria included by default — ${reason}`);
      expect(norm(def?.textContent)).toBe("Nigeria included by default — Black Sherif has no certifications outside Nigeria.");
      for (const w of [320, 390, 900]) expect(hiddenAt(def!, w), `${w}`).toBe(false);
      for (const w of [901, 1440]) expect(hiddenAt(def!, w), `${w}`).toBe(true);
      const why = page.querySelector(`.${styles.whyDefault}`)!;
      expect(norm(why.textContent)).toContain(`Nigeria included by default — ${reason}`);
      for (const w of [320, 390, 900]) expect(display(why, w), `${w}: the why-line gives way`).toBe("none");
      for (const w of [901, 1440]) expect(display(why, w), `${w}: desktop keeps it`).not.toBe("none");
    } else {
      expect(def).toBeNull();
    }
  });
});

describe("negative control: the shipped phone hid the whole paragraph", () => {
  it("main's .ngWhy { display: none; } inside the shipped 760 board block", () => {
    // main e85e6efe, compare.module.css:1426-1437, verbatim (comment cut).
    const shipped = "@media (max-width: 760px) {\n  .cbThresholds { display: none; }\n  .cbThFold { display: block; }\n  .ngWhy { display: none; }\n}";
    const phone = (m: string | null) => m === null || /max-width: 760px/.test(m);
    expect(winning(shipped, ".ngWhy", "display", phone)).toBe("none");
    // Today no rule hides the paragraph itself, on any layout.
    for (const r of rules(CSS)) if (r.selector.split(",").map((x) => x.trim()).includes(".ngWhy")) expect(r.body).not.toMatch(/display:\s*none/);
  });
});
