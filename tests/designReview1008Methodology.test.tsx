import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/methodology",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import MethodologyPage from "../app/methodology/page";
import { afrobeatsArtists } from "../app/data/afrobeats";
import S from "../app/methodology/methodology.module.css";
import M from "../app/components/mobileMethodology.module.css";
import { read, winning } from "./fixtures/cssRules";

/**
 * Design review of 8 Oct 2026, quick win 3 (C-01). On a phone, /methodology's
 * back bar (back, "METHODOLOGY", menu) is the page's only chrome. It was
 * sticky inside the phone screen, and the five sections the page renders once
 * for both layouts (core-11, 6 Oct) sit AFTER that screen — so the bar let go
 * of the top at 5,090px of an 18,674px page. Measured on the live site at
 * 390x844: its top was 0 at 10% of the scroll, −328 at 30% and −11,026 at
 * 90%. The same sections kept the desktop's 13.5px body and a 22px h2 under
 * the screen's 16px and 20px.
 */

const CSS_PAGE = read("app/methodology/methodology.module.css");
const CSS_PHONE = read("app/components/mobileMethodology.module.css");
const atPhone = (m: string | null) => m === null || /\(max-width:\s*900px\)/.test(m);
const atDesktop = (m: string | null) => m === null || /\(min-width:\s*901px\)/.test(m);

const doc = (html: string) => new DOMParser().parseFromString(html, "text/html");

/** The bar's sticky containing block (its parent) holds every shared section, after the bar. */
function barSpansSharedSections(html: string) {
  const d = doc(html);
  const bar = d.querySelector(`.${M.backBar}`);
  const sections = [...d.querySelectorAll(`section.${S.shared}`)];
  if (!bar || sections.length === 0) return false;
  const block = bar.parentElement!;
  return sections.every(
    (s) => block.contains(s) && (bar.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0,
  );
}

describe("C-01: phone /methodology keeps its back bar for the whole page", () => {
  const html = renderToStaticMarkup(MethodologyPage());

  it("the bar's containing block is <main>, which holds all five shared sections", () => {
    const d = doc(html);
    const bar = d.querySelector(`.${M.backBar}`)!;
    expect(bar.parentElement?.tagName).toBe("MAIN");
    expect(bar.closest(`.${M.screen}`)).toBeNull();
    expect(d.querySelectorAll(`section.${S.shared}`)).toHaveLength(5);
    expect(barSpansSharedSections(html)).toBe(true);
    // Still the screen's bar: back, the label, the menu — before the hero.
    expect(bar.textContent).toContain("Methodology");
    expect(bar.querySelector('a[aria-label="Back"]')).not.toBeNull();
    const hero = d.querySelector(`.${M.hero}`)!;
    expect(bar.compareDocumentPosition(hero) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("negative control: the shipped nesting — the bar inside the screen — fails the same check", () => {
    // MobileMethodology as shipped: `<div className={styles.screen}>` then
    // `<div className={styles.backBar}>` as its first child; the shared
    // sections after the screen, in <main>.
    const shipped =
      `<main><div class="${M.screen}"><div class="${M.backBar}"><a aria-label="Back"></a>` +
      `<span class="${M.backLabel}">Methodology</span></div><div class="${M.hero}"></div></div>` +
      `<section class="${S.shared}" aria-labelledby="accessibility"><h2 id="accessibility">Who can read this site</h2></section></main>`;
    expect(barSpansSharedSections(shipped)).toBe(false);
  });

  it("the bar shows on a phone and stays hidden on a laptop, now that the screen no longer hides it", () => {
    expect(winning(CSS_PHONE, ".backBar", "display", atPhone)).toBe("flex");
    expect(winning(CSS_PHONE, ".backBar", "display", atDesktop)).toBe("none");
    expect(winning(CSS_PHONE, ".backBar", "position", atPhone)).toBe("sticky");
  });
});

describe("C-01: the shared sections take the phone screen's type", () => {
  const sharedBody = (css: string) => winning(css, ".shared .p", "font-size", (m) => m !== null && /\(max-width:\s*900px\)/.test(m));
  const sharedH2 = (css: string) => winning(css, ".shared .h2", "font-size", (m) => m !== null && /\(max-width:\s*900px\)/.test(m));

  it("16px body (--type-body, the screen's .itemBody) and the screen's 20px h2 (.blockTitle)", () => {
    expect(sharedBody(CSS_PAGE)).toBe("var(--type-body)");
    expect(winning(CSS_PHONE, ".itemBody", "font-size", () => true)).toBe("var(--type-body)");
    expect(sharedH2(CSS_PAGE)).toBe(winning(CSS_PHONE, ".blockTitle", "font-size", () => true));
  });

  it("negative control: the shipped phone rules — 13.5px body, 22px h2 — fail", () => {
    const shipped = `@media (max-width: 900px) {
  .shared { padding: 18px 18px 0; border-top: 1px solid var(--line); }
  .shared .h2 { font-size: 22px; }
  .shared .p { font-size: var(--type-small); line-height: var(--type-small-lh); margin-top: 12px; }
}`;
    expect(sharedBody(shipped)).not.toBe("var(--type-body)");
    expect(sharedH2(shipped)).not.toBe(winning(CSS_PHONE, ".blockTitle", "font-size", () => true));
  });
});

/**
 * PR #540, 14 Nov 2026. Paul ruled that TurnTable's own news articles count as
 * the body's announcement for a TCSN tier its register shows no row for, or a
 * lower one. The Feb 2026 capture shows each such plaque at a lower tier or not
 * at all, so "Open the capture … to check any figure yourself", the Nigeria
 * block's last line on both layouts, stopped being true of them. The block now
 * names them as the exception and sends them to their articles, which the
 * Certifications rule on the same page dates.
 */
describe("the Nigeria block sends TurnTable's article plaques to their articles, on both layouts", () => {
  const d = doc(renderToStaticMarkup(MethodologyPage()));
  const flat = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();
  const block = (id: string) => flat(d.getElementById(id)?.nextElementSibling?.textContent);
  const EXCEPTION =
    "The exceptions are the certifications counted from TurnTable's own news articles, which the capture shows at a lower tier or not at all: check each at its article, dated under Certifications above.";
  const namesArticles = (p: string) => p.endsWith(EXCEPTION) && p.includes("to check any figure") && p.indexOf("to check any figure") < p.indexOf(EXCEPTION);
  const articlePlaques = afrobeatsArtists.flatMap((a) => a.releases.flatMap((r) => r.certs)).filter((c) => c.c === "NG" && c.source === "announcement");

  it("desktop and phone both end on the exception, after the capture's line", () => {
    expect(articlePlaques.length).toBeGreaterThan(0);
    for (const id of ["source-shows-less", "m-source-shows-less"]) expect(namesArticles(block(id)), id).toBe(true);
  });

  it("the Certifications rule above it, on both layouts, dates every one of them", () => {
    const rule = "the certifying body's own published announcement stands where its database omits the row or holds only a lower tier: ";
    expect(flat(d.body.textContent).split(rule)).toHaveLength(3);
    const dated = flat(d.body.textContent).match(/announced by TurnTable \(TCSN\) on its own news site, \d{1,2} \w{3,4} 2026/g) ?? [];
    expect(dated).toHaveLength(articlePlaques.length * 2);
  });

  it("negative control: the phone's block as it shipped", () => {
    const shipped =
      "A register can publish fewer certifications than it has issued, and absence from one is not evidence against it. Nigeria is the sharpest case: TurnTable's public certification page serves a hard cap of 500 rows, and currently no Silver certifications at all — for any artist. This site reads that same register's own archived captures alongside the live page, so its Nigerian counts run higher than TurnTable's site shows today. Nothing is inferred: it is the same register, read further back. Open the capture below and search an artist's name to check any figure yourself.";
    expect(namesArticles(shipped)).toBe(false);
  });
});
