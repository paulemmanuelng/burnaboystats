import { readFileSync } from "node:fs";
import { act, fireEvent, render } from "@testing-library/react";

/** The path usePathname() returns; each test sets it before rendering. */
const nav = vi.hoisted(() => ({ path: "/music" }));
vi.mock("next/navigation", () => ({
  usePathname: () => nav.path,
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn() }),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import Nav from "../../app/components/Nav";
import MobileNavSheet from "../../app/components/MobileNavSheet";
import { navGroups, navSearchHint } from "../../app/lib/navGroups";
import { suggestedSearchDocs } from "../../app/lib/searchSuggested";

/**
 * Paul, 7 Oct 2026: "in the nav, replace the stats card with gross page".
 *
 * The desktop bar's one pill linked to /share as "Stat card", and the menu
 * sheet's foot carried "Stat card ↗" to the same page. Both now go to the
 * gross page, /records/tours/revenue (the "Highest-grossing shows" board), as
 * "Box office". The bar and the sheet are separate components, so each is
 * checked on its own. Stat cards stay reachable: the sheet's list keeps its
 * "Stat cards" row, and /share is untouched.
 *
 * Each check is a function that lists what is wrong, run on the rendered
 * components and, as a negative control, on the markup and CSS main shipped
 * before the change, verbatim.
 */

const GROSS = "/records/tours/revenue";
const strip = (s: string) => s.replace(/\/\*[\s\S]*?\*\//g, "");
const text = (el: Element) => (el.textContent ?? "").replace(/\s+/g, " ").trim();

/** The bar's pill is its only .btn (the search trigger and flips are not). */
function barProblems(root: HTMLElement): string[] {
  const p: string[] = [];
  const pills = [...root.querySelectorAll<HTMLAnchorElement>("a.btn")];
  if (pills.length !== 1) return [`${pills.length} pills in the bar`];
  const [pill] = pills;
  if (pill.getAttribute("href") !== GROSS) p.push(`the pill goes to ${pill.getAttribute("href")}`);
  if (text(pill) !== "Box office") p.push(`the pill reads "${text(pill)}"`);
  if (!pill.classList.contains("navBoxOffice")) p.push(`the pill is .${[...pill.classList].join(".")}`);
  if (!pill.classList.contains("btnPrimary")) p.push("the pill lost .btnPrimary's shape and type");
  const icons = pill.querySelectorAll("svg");
  if (icons.length !== 1 || icons[0].getAttribute("width") !== "14" || icons[0].getAttribute("aria-hidden") !== "true")
    p.push("the pill's icon is not one hidden 14px svg");
  if (root.querySelector('a[href="/share"]')) p.push("a /share link in the bar");
  return p;
}

/** The sheet foot's one link. */
function footProblems(foot: HTMLElement): string[] {
  const links = [...foot.querySelectorAll("a")];
  const p: string[] = [];
  const hrefs = links.map((a) => a.getAttribute("href"));
  if (JSON.stringify(hrefs) !== JSON.stringify([GROSS])) p.push(`the foot links to ${hrefs.join(", ")}`);
  const labels = links.map(text);
  if (JSON.stringify(labels) !== JSON.stringify(["Box office ↗"])) p.push(`the foot reads ${labels.join(", ")}`);
  return p;
}

/** The pill keeps the old one's outline look and its 900px breakpoint. */
function cssProblems(raw: string): string[] {
  const css = strip(raw);
  const p: string[] = [];
  if (/\.navStatCard\b/.test(css)) p.push(".navStatCard is still styled");
  const base = css.match(/(?:^|\})\s*\.navBoxOffice\s*\{([^}]*)\}/)?.[1];
  if (base === undefined) return [...p, "no .navBoxOffice rule"];
  // Outline, no gold fill: the bar is on every page and this is no page's
  // primary action (the gold pill is the page's own).
  for (const [prop, value] of [
    ["background-color", "transparent"],
    ["background-image", "none"],
    ["-webkit-text-fill-color", "var(--text)"],
    ["border-color", "var(--btn-edge)"],
  ]) {
    if (!new RegExp(`(?:^|[;\\s])${prop}:\\s*${value.replace(/[()]/g, "\\$&")}\\s*;`).test(base)) p.push(`${prop} is not ${value}`);
  }
  if (!/\.navBoxOffice:hover\s*\{[^}]*border-color:\s*var\(--gold\)/.test(css)) p.push("the hover lost its gold edge");
  if (!/@media \(max-width: 900px\)\s*\{\s*\.navBoxOffice\s*\{\s*display:\s*none;\s*\}\s*\}/.test(css))
    p.push("not hidden at 900px like the rest of the desktop bar's extras");
  return p;
}

function renderBar() {
  const { container } = render(<Nav suggested={suggestedSearchDocs()} />);
  return container.querySelector<HTMLElement>('nav[aria-label="Primary"]')!;
}
function renderSheet() {
  render(<MobileNavSheet groups={navGroups} updated="7 Oct 2026" searchHint={navSearchHint} />);
  const dialog = document.querySelector<HTMLElement>('[role="dialog"][aria-label="Site menu"]')!;
  return { dialog, foot: dialog.querySelector<HTMLElement>('[class*="foot"]')! };
}

beforeEach(() => {
  nav.path = "/music";
});

describe("the desktop bar's pill is the gross page", () => {
  it('links to /records/tours/revenue as "Box office", and no longer to /share', () => {
    expect(barProblems(renderBar())).toEqual([]);
  });

  it("keeps the old pill's outline look and its 900px breakpoint, under the new name", () => {
    expect(cssProblems(readFileSync("app/globals.css", "utf8"))).toEqual([]);
  });

  it("is not marked as the current page elsewhere", () => {
    expect(renderBar().querySelector("a.navBoxOffice")).not.toHaveAttribute("aria-current");
  });

  it("is marked as the current page on /records/tours/revenue", () => {
    nav.path = GROSS;
    expect(renderBar().querySelector("a.navBoxOffice")).toHaveAttribute("aria-current", "page");
  });
});

describe("the menu sheet's foot is the gross page", () => {
  it('links to /records/tours/revenue as "Box office ↗", and no longer to /share', () => {
    expect(footProblems(renderSheet().foot)).toEqual([]);
  });

  it("closes the sheet on tap, as the Stat card link did", () => {
    const { dialog, foot } = renderSheet();
    act(() => {
      window.dispatchEvent(new CustomEvent("mobile-nav-open", { detail: null }));
    });
    expect(dialog).not.toHaveAttribute("hidden");
    const link = foot.querySelector("a")!;
    // jsdom cannot follow the link; the router would, and the sheet stays put.
    link.addEventListener("click", (e) => e.preventDefault());
    fireEvent.click(link);
    expect(dialog).toHaveAttribute("hidden");
  });

  it("is not marked as the current page elsewhere", () => {
    expect(renderSheet().foot.querySelector("a")).not.toHaveAttribute("aria-current");
  });

  it("is marked as the current page on /records/tours/revenue", () => {
    nav.path = GROSS;
    expect(renderSheet().foot.querySelector("a")).toHaveAttribute("aria-current", "page");
  });

  it("gives back the label's extra 8px on the narrowest phones, so the foot stays one row", () => {
    // "Box office ↗" is 128.5px to "Stat card ↗"'s 120.5; at 320 the status
    // beside it ("Updated 7 Oct 2026") broke onto two lines in headless Chrome
    // until the pill lost 4px of padding a side below 360.
    const css = strip(readFileSync("app/components/mobileNavSheet.module.css", "utf8"));
    expect(css).toMatch(/\.boxOffice\s*\{[^}]*padding:\s*0 16px;/);
    expect(css).toMatch(/@media \(max-width: 359px\)\s*\{\s*\.boxOffice\s*\{\s*padding:\s*0 12px;\s*\}\s*\}/);
    expect(css).not.toMatch(/\.statCard\b/);
  });

  it("stat cards stay one tap away: the sheet's list keeps its Stat cards row to /share", () => {
    const { dialog, foot } = renderSheet();
    const row = [...dialog.querySelectorAll("a")].find((a) => a.getAttribute("href") === "/share");
    expect(row).toBeDefined();
    expect(foot.contains(row!)).toBe(false);
    expect(text(row!)).toContain("Stat cards");
  });
});

describe("negative control: the bar, the foot and the CSS as main shipped them are caught", () => {
  // Rendered by main's Nav.tsx and MobileNavSheet.tsx before 7 Oct 2026.
  const SHIPPED_BAR = `<nav aria-label="Primary"><a href="/share" class="btn btnPrimary navStatCard"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 12v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7"></path><path d="M12 3v12"></path><path d="m7 8 5-5 5 5"></path></svg>Stat card</a></nav>`;
  const SHIPPED_FOOT = `<div class="_foot_x"><span class="_status_x"><span class="_dot_x" aria-hidden="true"></span>Updated 7 Oct 2026</span><a class="_statCard_x" href="/share">Stat card ↗</a></div>`;
  // globals.css on main, the pill's three rules.
  const SHIPPED_CSS = `.navStatCard {
  height: 38px;
  padding: 0 18px;
  font-size: 11.5px;
  gap: 8px;
  flex: none;
  background-color: transparent;
  background-image: none;
  color: var(--text);
  -webkit-text-fill-color: var(--text);
  border-color: var(--btn-edge);
  box-shadow: none;
}
.navStatCard:hover {
  border-color: var(--gold);
  color: var(--gold-display);
  -webkit-text-fill-color: var(--gold);
  box-shadow: none;
}
@media (max-width: 900px) {
  .navStatCard { display: none; }
}`;
  const parse = (html: string) => new DOMParser().parseFromString(html, "text/html").body.firstElementChild as HTMLElement;

  it("the shipped bar is caught", () => {
    expect(barProblems(parse(SHIPPED_BAR))).toEqual([
      "the pill goes to /share",
      'the pill reads "Stat card"',
      "the pill is .btn.btnPrimary.navStatCard",
      "a /share link in the bar",
    ]);
  });

  it("the shipped foot is caught", () => {
    expect(footProblems(parse(SHIPPED_FOOT))).toEqual(["the foot links to /share", "the foot reads Stat card ↗"]);
  });

  it("the shipped CSS is caught", () => {
    expect(cssProblems(SHIPPED_CSS)).toEqual([".navStatCard is still styled", "no .navBoxOffice rule"]);
    // …and the same rules renamed pass, so the check reads the look, not the name.
    expect(cssProblems(SHIPPED_CSS.replace(/navStatCard/g, "navBoxOffice"))).toEqual([]);
  });
});
