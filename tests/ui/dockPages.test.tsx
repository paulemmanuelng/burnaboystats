import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfricasBiggestPage from "../../app/records/africas-biggest/page";
import AwardsPage from "../../app/records/awards/page";
import FirstsPage from "../../app/records/firsts/page";
import MethodologyPage from "../../app/methodology/page";
import TimelinePage from "../../app/timeline/page";
import FaqPage from "../../app/faq/page";
import FestivalsPage from "../../app/records/tours/festivals/page";
import MobileAfricasBiggest from "../../app/components/MobileAfricasBiggest";
import abStyles from "../../app/records/africas-biggest/africas-biggest.module.css";
import abPhone from "../../app/components/mobileAfricasBiggest.module.css";
import dockStyles from "../../app/components/dockIndex.module.css";
import mmPhone from "../../app/components/mobileMethodology.module.css";
import firstsPhone from "../../app/components/mobileFirsts.module.css";
import faqPhone from "../../app/components/mobileFaq.module.css";
import awardsPhone from "../../app/components/mobileAwards.module.css";
import festPhone from "../../app/components/mobileFestivals.module.css";
import tlStyles from "../../app/timeline/timeline.module.css";
import barStyles from "../../app/components/indexBar.module.css";
import { statBoxes } from "../../app/data/africasBiggest";
import { africaBoards } from "../../app/lib/africaBoards";
import { othersLead } from "../../app/lib/africaBoardFilter";
import { timelineEras } from "../../app/data/timeline";
import { firstGroups } from "../../app/data/firsts";
import { dom, text } from "../fixtures/phoneTrees";

/**
 * dockPages (Job 4 · J4-7, fixes 85, 86, 90): the docking indexes applied.
 *
 * Every long page carries one index per layout — DockIndex on the phone,
 * IndexBar on the desktop, where the page has one — and its items are the
 * page's own section list, in the order the page renders them, each landing
 * on a target in the same layout. The jump rails they replaced are gone:
 * Africa's Biggest's desktop pills, firsts' "Jump to" band, the timeline's
 * span chips in the hero, the FAQ's phone rail (it is the dock now). On
 * Africa's Biggest the phone dock lists only the boards its filter shows
 * (fix 90). Every list below is read off the rendered page, so a new section
 * without an entry, or an entry without a section, fails.
 */

type Layout = "phone" | "desk";
const html = (page: () => React.ReactElement | Promise<React.ReactElement>) => async () => renderToStaticMarkup(await page());

/** The boxes each layout hides: a phone hides the desktop's, a desktop the phone's. */
const PHONE_ONLY = [
  abPhone.screen,
  awardsPhone.screen,
  firstsPhone.screen,
  festPhone.screen,
  faqPhone.screen,
  mmPhone.backBar,
  mmPhone.screenHead,
  mmPhone.screen,
  tlStyles.mobileBackBar,
  dockStyles.dock,
];
const DESK_ONLY = ["desktopOnly", "desktopCrumbs", barStyles.dockBar];
/** Whether an element is drawn on a layout. */
function onLayout(el: Element, layout: Layout) {
  for (let e: Element | null = el; e; e = e.parentElement) {
    const classes = [...e.classList];
    if (layout === "phone" && classes.some((c) => DESK_ONLY.some((x) => c === x || c.includes(`_${x}_`) || c.includes(`__${x}`)))) return false;
    if (layout === "desk" && PHONE_ONLY.some((x) => classes.includes(x))) return false;
  }
  return true;
}
const docks = (d: Document, layout: Layout) =>
  [...d.querySelectorAll(layout === "phone" ? '[data-dock="phone"]' : '[data-dock="desk"]')];
const links = (dock: Element) => [...dock.querySelectorAll<HTMLAnchorElement>(`a.${dockStyles.dockChip}, a.${barStyles.dockLink}`)];
const label = (a: Element) => (a.firstChild?.textContent ?? "").trim();
const hrefs = (dock: Element) => links(dock).map((a) => a.getAttribute("href")!);
/** The target of each link, which must be drawn on the dock's own layout. */
function targetsOn(d: Document, dock: Element, layout: Layout) {
  return links(dock).map((a) => {
    const t = d.getElementById(a.getAttribute("href")!.slice(1));
    expect(t, a.getAttribute("href")!).not.toBeNull();
    expect(onLayout(t!, layout), `${a.getAttribute("href")} drawn on the ${layout}`).toBe(true);
    return t!;
  });
}
/** Targets in the order the page renders them: the index runs down the page. */
const inPageOrder = (els: Element[]) =>
  els.every((e, i) => i === 0 || (els[i - 1].compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING) !== 0);

/** A jump list outside the docks: what the docks replaced (by its label). */
const railsOutsideDocks = (root: Document | Element, label: string) =>
  [...root.querySelectorAll(`nav[aria-label="${label}"]`)].filter((n) => !n.closest("[data-dock]"));
/** Firsts' shipped band: a "Jump to" label before its chips. */
const jumpToLabels = (root: Document | Element) => [...root.querySelectorAll("span")].filter((e) => text(e) === "Jump to");

describe("dockPages: Africa's Biggest", () => {
  const page = html(AfricasBiggestPage);

  it("desktop: one IndexBar of every board in render order, then the questions", async () => {
    const d = dom(await page());
    const [bar, ...more] = docks(d, "desk");
    expect(more).toEqual([]);
    const boards = [...d.querySelectorAll(`.${abStyles.box}[id]`)].filter((b) => onLayout(b, "desk"));
    expect(boards).toHaveLength(statBoxes.length);
    expect(hrefs(bar)).toEqual([...boards.map((b) => `#${b.id}`), "#faq"]);
    const targets = targetsOn(d, bar, "desk");
    expect(inPageOrder(targets)).toBe(true);
    expect(links(bar).map(label)).toEqual([...boards.map((b) => text(b.querySelector("h3"))), text(d.getElementById("faq")!.querySelector("h2"))]);
    expect(text(bar.querySelector(`.${barStyles.dockPos}`))).toBe(`1 of ${boards.length + 1}`);
  });

  it("phone: one DockIndex of the boards, under the filter and its count", async () => {
    const d = dom(await page());
    const [dock, ...more] = docks(d, "phone");
    expect(more).toEqual([]);
    const boards = [...d.querySelectorAll(`.${abPhone.board}`)];
    expect(boards).toHaveLength(africaBoards.length);
    expect(hrefs(dock)).toEqual(boards.map((b) => `#${b.id}`));
    expect(links(dock).map(label)).toEqual(boards.map((b) => text(b.querySelector("h2"))));
    targetsOn(d, dock, "phone");
    expect(dock.previousElementSibling?.className).toContain(abPhone.metaBar);
  });

  it("phone: the dock lists only the boards the filter shows (fix 90)", async () => {
    render(<MobileAfricasBiggest boards={africaBoards} leads={0} others={0} stats={[]} faqs={[]} />);
    for (const [chip, keep] of [
      ["He leads", (b: (typeof africaBoards)[number]) => b.leads],
      // The page's own count's predicate since 15 Oct 2026: a by-year board
      // is under neither chip (REC-5). It was !b.leads.
      ["Others lead", othersLead],
    ] as const) {
      await userEvent.click(screen.getByRole("button", { name: chip }));
      const nav = screen.getByRole("navigation", { name: "Jump to a board" });
      const shown = africaBoards.filter(keep);
      expect(within(nav).getAllByRole("link").map((a) => a.getAttribute("href"))).toEqual(shown.map((b) => `#m-${b.id}`));
      for (const b of shown) expect(document.getElementById(`m-${b.id}`), b.id).not.toBeNull();
    }
  });

  it("the pills under the hero are gone", async () => {
    expect(railsOutsideDocks(dom(await page()), "Jump to a section")).toEqual([]);
  });
});

describe("dockPages: Awards (phone; grammyOneTap holds the rest)", () => {
  it("one DockIndex on the phone, none on the desktop, every chip landing on the phone's list", async () => {
    const d = dom(await html(AwardsPage)());
    const [dock, ...more] = docks(d, "phone");
    expect(more).toEqual([]);
    expect(docks(d, "desk")).toEqual([]);
    targetsOn(d, dock, "phone");
  });
});

describe("dockPages: Firsts", () => {
  const page = html(FirstsPage);
  it("desktop: an IndexBar of the five categories, landing on each section", async () => {
    const d = dom(await page());
    const [bar, ...more] = docks(d, "desk");
    expect(more).toEqual([]);
    const sections = [...d.querySelectorAll("section[id]")].filter((s) => onLayout(s, "desk") && s.querySelector("h2"));
    expect(sections).toHaveLength(firstGroups.length);
    expect(hrefs(bar)).toEqual(sections.map((s) => `#${s.id}`));
    expect(links(bar).map(label)).toEqual(sections.map((s) => text(s.querySelector("h2"))));
    expect(inPageOrder(targetsOn(d, bar, "desk"))).toBe(true);
    expect(text(bar.querySelector(`.${barStyles.dockKicker}`))).toBe("Firsts & Records");
  });
  it("phone: one DockIndex (built in J4-10) and the 'Jump to' band is gone", async () => {
    const d = dom(await page());
    expect(docks(d, "phone")).toHaveLength(1);
    targetsOn(d, docks(d, "phone")[0], "phone");
    expect(jumpToLabels(d)).toEqual([]);
  });
});

describe("dockPages: Methodology (fix 86: the IndexBar is the index)", () => {
  const page = html(MethodologyPage);
  const h2sOn = (d: Document, layout: Layout) => [...d.querySelectorAll("main h2")].filter((h) => onLayout(h, layout));

  it.each(["desk", "phone"] as const)("%s: one index, its items the page's h2s in the order this layout prints them", async (layout) => {
    const d = dom(await page());
    const [dock, ...more] = docks(d, layout);
    expect(more).toEqual([]);
    const h2s = h2sOn(d, layout);
    expect(h2s.length).toBeGreaterThan(5);
    // Every h2 has an id and the index lists exactly those, with its words.
    expect(h2s.map((h) => h.id).filter((id) => !id)).toEqual([]);
    expect(hrefs(dock)).toEqual(h2s.map((h) => `#${h.id}`));
    expect(links(dock).map(label)).toEqual(h2s.map((h) => text(h)));
    targetsOn(d, dock, layout);
    if (layout === "desk") expect(text(dock.querySelector(`.${barStyles.dockPos}`))).toBe(`1 of ${h2s.length}`);
  });

  it("both indexes are direct children of <main>, so neither lets go before the shared sections end", async () => {
    const d = dom(await page());
    for (const layout of ["desk", "phone"] as const) expect(docks(d, layout)[0].parentElement?.tagName, layout).toBe("MAIN");
  });

  it("a layout's copy of a closing section is the other layout's twin", async () => {
    const d = dom(await page());
    const desk = hrefs(docks(d, "desk")[0]).map((h) => h.slice(1));
    const phone = new Set(hrefs(docks(d, "phone")[0]).map((h) => h.slice(1)));
    // Shared sections share one id; every other desktop id has an "m-" twin on the phone.
    for (const id of desk) expect(phone.has(id) || phone.has(`m-${id}`), id).toBe(true);
  });
});

describe("dockPages: Timeline (fix 85: era names, the era in view current)", () => {
  it.each(["desk", "phone"] as const)("%s: one index of the eras by name", async (layout) => {
    const d = dom(await html(TimelinePage)());
    const [dock, ...more] = docks(d, layout);
    expect(more).toEqual([]);
    const eras = [...d.querySelectorAll('section[id^="era-"]')];
    expect(eras).toHaveLength(timelineEras.length);
    expect(hrefs(dock)).toEqual(eras.map((e) => `#${e.id}`));
    expect(links(dock).map(label)).toEqual(timelineEras.map((e) => e.name));
    expect(links(dock).map(label)).toEqual(eras.map((e) => text(e.querySelector("h2"))));
    expect(inPageOrder(targetsOn(d, dock, layout))).toBe(true);
  });
  it("the span chips are out of the hero, and both indexes follow it", async () => {
    const d = dom(await html(TimelinePage)());
    expect(railsOutsideDocks(d, "Jump to an era")).toEqual([]);
    const hero = d.querySelector("main h1")!.closest("section")!;
    for (const layout of ["desk", "phone"] as const) {
      expect(hero.contains(docks(d, layout)[0])).toBe(false);
      expect(hero.compareDocumentPosition(docks(d, layout)[0]) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    }
  });
});

describe("dockPages: FAQ (phone; fix 85: the chip rail docks)", () => {
  it("the rail is the DockIndex: one chip per category, landing on its first question, with its count", async () => {
    const d = dom(await html(FaqPage)());
    const [dock, ...more] = docks(d, "phone");
    expect(more).toEqual([]);
    expect(docks(d, "desk")).toEqual([]);
    const targets = targetsOn(d, dock, "phone");
    expect(inPageOrder(targets)).toBe(true);
    const items = [...d.querySelectorAll(`.${faqPhone.item}`)];
    const groupOf = (i: Element) => text(i.querySelector(`.${faqPhone.itemGroup}`));
    const groups = [...new Set(items.map(groupOf))];
    expect(groups.length).toBeGreaterThan(1);
    expect(links(dock).map(label)).toEqual(groups);
    expect(links(dock).map((a) => text(a.querySelector(`.${dockStyles.dockCount}`)))).toEqual(
      groups.map((g) => String(items.filter((i) => groupOf(i) === g).length)),
    );
    // Each chip lands on its group's first question.
    expect(targets.map((t) => groupOf(t))).toEqual(groups);
    const phone = d.querySelector(`.${faqPhone.screen}`)!;
    expect(railsOutsideDocks(phone, "Jump to a category")).toEqual([]);
  });
});

describe("dockPages: Festivals (phone, J4-10)", () => {
  it("one DockIndex, every chip landing on a phone section", async () => {
    const d = dom(await html(FestivalsPage)());
    expect(docks(d, "phone")).toHaveLength(1);
    targetsOn(d, docks(d, "phone")[0], "phone");
  });
});

describe("dockPages negative controls: the rails as shipped", () => {
  it("Africa's Biggest's desktop pills and the timeline's chips in the hero are what the check catches", () => {
    // main e85e6efe: africas-biggest/page.tsx:403–409 and timeline/page.tsx:114–121, rendered.
    const ab = dom(
      `<main><section class="africas-biggest-module__x__wrap"><nav class="africas-biggest-module__x__jumpNav" aria-label="Jump to a section"><a href="#billboard">On the Billboard charts</a><a href="#streaming">On streaming</a><a href="#faq">Common questions</a></nav></section></main>`,
    );
    const tl = dom(
      `<main><section class="timeline-module__x__hero"><h1>The Career Timeline</h1><nav class="timeline-module__x__jumpRow" aria-label="Jump to an era"><a href="#era-0" class="timeline-module__x__jumpChip">2010 – 2015</a></nav></section></main>`,
    );
    expect(railsOutsideDocks(ab, "Jump to a section")).toHaveLength(1);
    expect(railsOutsideDocks(tl, "Jump to an era")).toHaveLength(1);
    // and firsts' shipped band (firsts/page.tsx:85–96 on main e85e6efe)
    const firsts = dom(`<section class="x"><div><span class="y">Jump to</span><a href="#stadiums-arenas">Stadiums &amp; arenas<span>9</span></a></div></section>`);
    expect(jumpToLabels(firsts)).toHaveLength(1);
    // and neither is a dock: a page with only them has no index at all
    expect(docks(ab, "desk")).toEqual([]);
    expect(docks(tl, "phone")).toEqual([]);
  });
});
