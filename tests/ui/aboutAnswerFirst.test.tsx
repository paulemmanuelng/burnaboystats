import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/about",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AboutPage from "../../app/about/page";
import { facts, ABOUT_CHECKED_ON, ABOUT_FACT_SOURCES } from "../../app/data/about";
import { albums } from "../../app/data/albums";
import { albumPagePath } from "../../app/lib/releasePages";
import { BURNA_BOY_REAL_NAME } from "../../app/lib/seo";
import { provDateText } from "../../app/lib/provenance";
import desk from "../../app/about/about.module.css";
import phone from "../../app/components/mobileAbout.module.css";
import { rules, winning } from "../fixtures/cssRules";

/**
 * /about, answer first (design review 8 Oct 2026, J1-14; fixes 24, 25, 30
 * and 33). Both layouts open on the heading CP1 set ("About Burna Boy", his
 * name the gold split word) and its real-name lede, then the six fast facts
 * and their P1 — "Checked {ABOUT_CHECKED_ON}" on the day the facts were last
 * re-read by hand. From 1240 the desktop hero gives his studio albums a
 * column, each linking its album page; the bio below runs one column at the
 * measure.
 */

const DOC = new DOMParser().parseFromString(renderToStaticMarkup(<AboutPage />), "text/html");
const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const DESK_ROOT = DOC.querySelector(`.${desk.desktopOnly}`)!;
const PHONE_ROOT = DOC.querySelector(`.${phone.screen}`)!;
const DESK_CSS = readFileSync("app/about/about.module.css", "utf8");
const any = () => true;
/** a precedes b in source order. */
const before = (a: Element, b: Element) => !!(a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING);

describe.each([
  ["desktop", () => DESK_ROOT, `h1.${desk.h1}`, "inkText", `.${desk.lede}`, `.${desk.fact}`, `.${desk.factLabel}`, `.${desk.factValue}`],
  ["phone", () => PHONE_ROOT, `h1.${phone.title}`, phone.gold, `.${phone.lede}`, `.${phone.fact}`, `.${phone.factLabel}`, `.${phone.factValue}`],
] as const)("%s", (_layout, root, h1Sel, goldClass, ledeSel, factSel, labelSel, valueSel) => {
  it("the heading CP1 set: 'About Burna Boy', his name the gold split word (fix 25)", () => {
    const h1 = root().querySelector(h1Sel)!;
    expect(words(h1)).toBe("About Burna Boy");
    expect(words(h1.querySelector(`.${goldClass}`))).toBe("Burna Boy");
  });

  it("the lede is the real-name answer, the same line on both layouts", () => {
    const lede = words(root().querySelector(ledeSel));
    expect(lede.startsWith(`Burna Boy's real name is ${BURNA_BOY_REAL_NAME}.`)).toBe(true);
    expect(lede).toBe(words(DESK_ROOT.querySelector(`.${desk.lede}`)));
  });

  it("the six fast facts from data/about.ts, in order", () => {
    const rows = [...root().querySelectorAll(factSel)].map((f) => [words(f.querySelector(labelSel)), words(f.querySelector(valueSel))]);
    expect(rows).toEqual(facts.map((f) => [f.label, f.value]));
    expect(rows.length).toBe(6);
  });

  it("one P1, after the facts: the three sources, 'Checked {ABOUT_CHECKED_ON}', /methodology#principles ↗", () => {
    const p1s = root().querySelectorAll('[data-provenance="p1"]');
    expect(p1s.length).toBe(1);
    const p1 = p1s[0];
    const lastFact = [...root().querySelectorAll(factSel)].pop()!;
    expect(before(lastFact, p1)).toBe(true);
    expect(words(p1.querySelector("[data-provenance-sources]"))).toMatch(new RegExp(`${ABOUT_FACT_SOURCES.join("(?: · |, )")}$`));
    const date = p1.querySelector("[data-provenance-date]")!;
    expect(words(date)).toBe(`Checked ${provDateText({ label: "Checked", day: ABOUT_CHECKED_ON })}`);
    expect(date.querySelector("time")?.getAttribute("datetime")).toBe(ABOUT_CHECKED_ON);
    const method = p1.querySelector("[data-provenance-method]")!;
    expect(method.getAttribute("href")).toBe("/methodology#principles");
    expect(words(method)).toMatch(/^How (this is|it's) counted ↗$/);
    // /about has no JSON route, so no "Open data".
    expect(words(p1)).not.toContain("Open data");
  });

  it("the facts and the P1 come before the bio", () => {
    const p1 = root().querySelector('[data-provenance="p1"]')!;
    const bio = [...root().querySelectorAll("p")].find((p) => words(p).startsWith("Burna Boy — born"))!;
    expect(before(p1, bio)).toBe(true);
  });
});

describe("the desktop hero", () => {
  const hero = DESK_ROOT.querySelector(`.${desk.heroGrid}`)!;

  it("holds the facts and the P1 (fix 24: they left the bio's column)", () => {
    expect(hero.querySelectorAll(`.${desk.fact}`).length).toBe(6);
    expect(hero.querySelector('[data-provenance="p1"]')).not.toBeNull();
    expect(DESK_ROOT.querySelector('[class*="factCol"]')).toBeNull();
  });

  it("the albums column: data/albums.ts in order, each row to its album page (fix 33)", () => {
    const nav = hero.querySelector('nav[aria-label="Studio albums"]')!;
    expect(words(nav.querySelector(`.${desk.albumsHead}`))).toBe(`Studio albums · ${albums.length}`);
    const rows = [...nav.querySelectorAll(`a.${desk.albumRow}`)];
    expect(rows.map((a) => words(a.querySelector(`.${desk.albumTitle}`)))).toEqual(albums.map((a) => a.title));
    expect(rows.map((a) => a.getAttribute("href"))).toEqual(albums.map((a) => albumPagePath(a.title)));
    expect(rows.map((a) => words(a.querySelector(`.${desk.albumMeta}`)))).toEqual(albums.map((a) => `${a.year}→`));
    expect(rows.length).toBe(8);
    // Every row reaches an album page, never the /music fallback.
    for (const a of rows) expect(a.getAttribute("href")).toMatch(/^\/music\/albums\//);
    // Negative control: the canvas's "Redemption 2015" is an EP, not in the list.
    expect(rows.map((a) => words(a))).not.toContain("Redemption2015→");
    expect(albums.map((a) => a.title)).not.toContain("Redemption");
  });

  it("CSS: the albums are cut below 1240, the facts run three ruled columns, the bio sits at the measure (fix 30)", () => {
    expect(winning(DESK_CSS, ".albums", "display", (m) => m === "@media (max-width: 1239px)")).toBe("none");
    expect(winning(DESK_CSS, ".heroGrid", "grid-template-columns", (m) => m === "@media (max-width: 1239px)")).toBe("minmax(0, 1fr)");
    expect(winning(DESK_CSS, ".facts", "grid-template-columns", any)).toBe("repeat(3, minmax(0, 1fr))");
    expect(winning(DESK_CSS, ".bioCol p", "max-width", any)).toBe("var(--measure)");
    // One column: no rule sets a grid on the bio band any more.
    expect(rules(DESK_CSS).filter((r) => r.selector === ".split").map((r) => r.body)).not.toContainEqual(expect.stringMatching(/grid-template-columns/));
    // The year muted, the arrow gold (a whole-row link's →).
    expect(winning(DESK_CSS, ".albumMeta", "color", any)).toBe("var(--text-muted)");
    expect(winning(DESK_CSS, ".albumGo", "color", any)).toBe("var(--gold)");
  });
});

describe("the check date is a real re-read", () => {
  it("ABOUT_CHECKED_ON is a day that has happened", () => {
    expect(ABOUT_CHECKED_ON).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(Date.parse(`${ABOUT_CHECKED_ON}T00:00:00Z`)).toBeLessThanOrEqual(Date.now());
  });
});

describe("negative controls: /about as it shipped on 8 Oct 2026", () => {
  it("the old heading and lede fail", () => {
    // Verbatim from burnaboystats.com/about, 8 Oct 2026.
    const shipped = new DOMParser().parseFromString(
      `<h1 class="about-module__-i9KWa__h1">About the <span class="inkText">Giant</span></h1><p class="about-module__-i9KWa__lede">The story of Damini Ogulu — Afrobeats&#x27; African Giant.</p>`,
      "text/html",
    );
    expect(words(shipped.querySelector("h1"))).not.toBe("About Burna Boy");
    expect(words(shipped.querySelector("p")).startsWith(`Burna Boy's real name is ${BURNA_BOY_REAL_NAME}.`)).toBe(false);
  });

  it("a hero with the facts but no P1 fails", () => {
    const noP1 = DESK_ROOT.querySelector(`.${desk.heroGrid}`)!.cloneNode(true) as Element;
    noP1.querySelector('[data-provenance="p1"]')!.remove();
    expect(noP1.querySelectorAll('[data-provenance="p1"]').length).not.toBe(1);
  });
});
