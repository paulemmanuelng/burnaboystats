import { describe, it, expect, vi, beforeEach } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RevenuePage from "../app/records/tours/revenue/page";
import CountriesPage from "../app/records/tours/revenue/countries/page";
import ToursPage from "../app/records/tours/page";
import VisualizedPage from "../app/records/visualized/page";
import AfrobeatsPage from "../app/afrobeats/page";
import Home from "../app/page";
import ScrollRail, { RAIL_FADE, RAIL_PAD, bringIntoRail } from "../app/components/ScrollRail";
import JumpSpy from "../app/components/JumpSpy";
import AnchorTwins, { twinAnchor } from "../app/components/AnchorTwins";
import MobileTourMap from "../app/components/MobileTourMap";
import { tourMapProps } from "../app/lib/tourMapData";
import { revenueShows } from "../app/data/tourRevenue";
import { shortDates } from "../app/lib/multiNightRuns";
import { pct, shownLine } from "../app/lib/showsChips";
import { REVENUE_SOURCE } from "../app/lib/revenueSource";
import {
  continentAnchor, countryAnchor, heroFigures, nightsLabel, revenueByCountry, runTickets, shareOf, usdM,
} from "../app/lib/revenueByCountry";
import { text, trees } from "./fixtures/phoneTrees";
import phoneRevenue from "../app/components/mobileRevenue.module.css";
import phoneCountries from "../app/components/mobileRevenueCountries.module.css";
import deskCountries from "../app/records/tours/revenue/countries/countries.module.css";
import tourMapStyles from "../app/components/mobileTourMap.module.css";
import vizStyles from "../app/components/mobileVisualized.module.css";
import hubStyles from "../app/afrobeats/afrobeats.module.css";

/**
 * The live debug pass of 4 Oct 2026, PR Y (layout and accessibility): the
 * box-office boards, the scroll rails, /records/tours, /records/visualized,
 * the tour map, the Afrobeats hub, /compare and the home page. Each case keeps
 * the string or value the live site shipped as its negative control. The
 * certifications pages' cases are in tests/ui/debug1004Certs.test.tsx.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const css = (p: string) => read(p).replace(/\/\*[\s\S]*?\*\//g, "");
/** The body of the first rule whose selector is exactly `sel` after `from`. */
const ruleOf = (src: string, sel: string, from = 0) => {
  const s = src.slice(from);
  const m = s.match(new RegExp(`(?:^|[\\n}])\\s*${sel.replace(/[.()[\]*"=:]/g, "\\$&")}\\s*\\{([^}]*)\\}`));
  return m?.[1] ?? null;
};
const NB = " ";

// Every test that mounts a board starts on a fresh history entry at a bare
// address: the boards now write both (A-03).
beforeEach(() => window.history.replaceState(null, "", "/"));

// ── A-01 / A-02 / E-05 / B-missed: the rails ────────────────────────────────
describe("A-01 / E-05: a chip brought into a rail lands clear of its edge fades", () => {
  type FakeRail = { scrollWidth: number; clientWidth: number; scrollLeft: number; getBoundingClientRect(): DOMRect; scrollTo: ReturnType<typeof vi.fn> };
  const rail = (scrollLeft: number, scrollWidth = 900): FakeRail => ({
    scrollWidth,
    clientWidth: 390,
    scrollLeft,
    getBoundingClientRect: () => ({ left: 0, width: 390 }) as DOMRect,
    scrollTo: vi.fn(),
  });
  /** A chip at content offset `x`, as the viewport sees it from `r`. */
  const chip = (r: FakeRail, x: number, w: number) => ({ getBoundingClientRect: () => ({ left: x - r.scrollLeft, width: w }) as DOMRect });
  const go = (r: FakeRail, x: number, w: number, b: ScrollBehavior = "instant") =>
    bringIntoRail(r as unknown as HTMLElement, chip(r, x, w) as unknown as HTMLElement, b);

  it("the pad is the fade plus 8px, and the fade is the CSS's own 44px", () => {
    expect(RAIL_PAD).toBe(RAIL_FADE + 8);
    const sheet = css("app/components/scrollRail.module.css");
    expect(sheet).toContain(`calc(100% - ${RAIL_FADE}px)`);
    expect(sheet).toContain(`#000 ${RAIL_FADE}px`);
  });

  it("Tiwa Savage's chip, 138px wide: its right edge ends 52px in from a faded end (live: 18px, under the fade)", () => {
    const r = rail(0);
    const to = go(r, 412, 138);
    expect(r.scrollTo).toHaveBeenCalledWith({ left: to, behavior: "instant" });
    const rightInView = 412 + 138 - to;
    expect(to).toBeLessThan(900 - 390 - 2); // the end fade is still on…
    expect(rightInView).toBeLessThanOrEqual(390 - RAIL_FADE); // …and the chip is clear of it
    // Negative control: the live deep link left Tiwa Savage at 233–371 in the
    // 390 rail, the fade from 346: 25px of her count under it.
    expect(371).toBeGreaterThan(390 - RAIL_FADE);
  });

  it("the start fade too, and no pad at either end of the rail (no fade there)", () => {
    const r = rail(400);
    const to = go(r, 420, 90);
    expect(420 - to).toBeGreaterThanOrEqual(RAIL_FADE);
    const first = rail(200);
    expect(go(first, 18, 60)).toBe(0); // flush to the start: the start fade goes
    const last = rail(0);
    expect(go(last, 800, 90)).toBe(900 - 390); // flush to the end
  });

  it("passes the behaviour through: the rail's scroll-behavior: smooth turns “auto” into an animation", () => {
    expect(css("app/components/scrollRail.module.css")).toMatch(/\.rail\s*\{\s*scroll-behavior:\s*smooth;/);
    const r = rail(0);
    go(r, 600, 90, "instant");
    expect(r.scrollTo.mock.calls[0][0].behavior).toBe("instant");
    // Negative control: the shipped deep link asked for "auto" (MobileRevenue).
    const SHIPPED = 'const behavior: ScrollBehavior = reduce || !touched ? "auto" : "smooth";';
    expect(SHIPPED).toContain('"auto"');
    expect(read("app/components/MobileRevenue.tsx")).toContain('reduce || !touched ? "instant" : "smooth"');
  });
});

describe("A-02: a chip reached by Tab is brought clear of the fade; a pressed one is not moved", () => {
  const setup = () => {
    const scrollTo = vi.fn();
    const proto = HTMLElement.prototype as unknown as { scrollTo?: unknown };
    const had = proto.scrollTo;
    proto.scrollTo = scrollTo;
    let keyboard = true;
    const matches = Element.prototype.matches;
    const spies = [
      vi.spyOn(Element.prototype, "matches").mockImplementation(function (this: Element, sel: string) {
        if (sel === ":focus-visible") return keyboard;
        return matches.call(this, sel);
      }),
      vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function (this: HTMLElement) {
        const i = this.dataset.i;
        // Asake 8, live: focused at 380–464 in the 390 rail, 0px clear of the fade.
        return (i === undefined ? { left: 0, width: 390 } : { left: Number(i) * 95, width: 84 }) as DOMRect;
      }),
      vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockImplementation(() => 900),
      vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(() => 390),
    ];
    const r = render(
      <ScrollRail className="r" label="Filter the board">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <button key={i} type="button" data-i={i}>
            chip {i}
          </button>
        ))}
      </ScrollRail>,
    );
    return {
      r,
      scrollTo,
      setKeyboard: (k: boolean) => (keyboard = k),
      done: () => {
        spies.forEach((s) => s.mockRestore());
        proto.scrollTo = had;
        r.unmount();
      },
    };
  };

  it("Tab to the chip at 380–464: the rail scrolls it 52px clear of the end", () => {
    const t = setup();
    try {
      fireEvent.focus(t.r.container.querySelector('[data-i="4"]')!);
      expect(t.scrollTo).toHaveBeenCalledTimes(1);
      const { left } = t.scrollTo.mock.calls[0][0];
      expect(380 + 84 - left).toBeLessThanOrEqual(390 - RAIL_FADE);
    } finally {
      t.done();
    }
  });

  it("a press (no :focus-visible) leaves the rail alone — the reader can see what they pressed", () => {
    const t = setup();
    try {
      t.setKeyboard(false);
      fireEvent.focus(t.r.container.querySelector('[data-i="4"]')!);
      expect(t.scrollTo).not.toHaveBeenCalled();
    } finally {
      t.done();
    }
  });
});

describe("A-08: the continent rail keeps the current chip clear of its fades", () => {
  it("Asia current at 312–373 in a 390 rail: scrolled clear (the shipped check called it “in view” and never scrolled)", () => {
    const names = ["africa", "europe", "north-america", "south-america", "asia", "oceania"];
    const x: Record<string, [number, number]> = {
      africa: [18, 62], europe: [88, 72], "north-america": [168, 60], "south-america": [236, 68], asia: [312, 61], oceania: [381, 79],
    };
    const tops: Record<string, number> = { africa: -900, europe: -600, "north-america": -300, "south-america": -100, asia: 120, oceania: 900 };
    const scrollTo = vi.fn();
    const proto = HTMLElement.prototype as unknown as { scrollTo?: unknown };
    const had = proto.scrollTo;
    proto.scrollTo = scrollTo;
    const spies = [
      vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockImplementation(function (this: HTMLElement) {
        const chip = this.getAttribute("href")?.slice(3);
        if (chip) return { left: x[chip][0], width: x[chip][1], top: 0 } as DOMRect;
        const target = this.id?.startsWith("m-") ? this.id.slice(2) : null;
        if (target && target in tops) return { top: tops[target], left: 0, width: 390 } as DOMRect;
        return { left: 0, width: 390, top: 0 } as DOMRect;
      }),
      vi.spyOn(HTMLElement.prototype, "offsetParent", "get").mockImplementation(() => document.body),
      vi.spyOn(HTMLElement.prototype, "scrollWidth", "get").mockImplementation(() => 478),
      vi.spyOn(HTMLElement.prototype, "clientWidth", "get").mockImplementation(() => 390),
    ];
    try {
      const { unmount } = render(
        <>
          <JumpSpy as="nav" label="Jump to a continent" offset={160}>
            <ScrollRail className="r" label="Continents">
              {names.map((n) => (
                <a key={n} href={`#m-${n}`}>
                  {n}
                </a>
              ))}
            </ScrollRail>
          </JumpSpy>
          {names.map((n) => (
            <section key={n} id={`m-${n}`} />
          ))}
        </>,
      );
      const current = document.querySelector('[aria-current="location"]')!;
      expect(current.getAttribute("href")).toBe("#m-asia");
      expect(scrollTo).toHaveBeenCalled();
      const { left, behavior } = scrollTo.mock.calls.at(-1)![0];
      expect(312 + 61 - left).toBeLessThanOrEqual(390 - RAIL_FADE);
      expect(behavior).toBe("smooth");
      unmount();
    } finally {
      spies.forEach((s) => s.mockRestore());
      proto.scrollTo = had;
    }
    // Negative control: the shipped test of "out of view" — the box, not the fade.
    const shippedOut = (l: number, w: number, sl: number, cw: number) => l < sl || l + w > sl + cw;
    expect(shippedOut(312, 61, 0, 390)).toBe(false);
  });
});

// ── A-03 / A-missed, A-10, A-11: the shows board's chips ───────────────────
function mountRevenue(url: string) {
  window.history.replaceState(window.history.state, "", url);
  const r = render(<RevenuePage />);
  const desktop = r.container.querySelector('[class*="desktopOnly"]') as HTMLElement;
  const phone = [...r.container.querySelectorAll("main > div")].find((d) => /screen/.test(d.className)) as HTMLElement;
  return { ...r, desktop, phone };
}
const label = (b: Element) => b.childNodes[0].textContent;
const chipsOf = (tree: HTMLElement) => [...tree.querySelectorAll("button[aria-pressed]")];
const pressed = (tree: HTMLElement) => chipsOf(tree).filter((b) => b.getAttribute("aria-pressed") === "true").map(label);
const chip = (tree: HTMLElement, name: string) => chipsOf(tree).find((b) => label(b) === name) as HTMLElement;
const search = () => window.location.search;

describe("A-03 / A-missed: the address bar and history follow the reader's chip, on both layouts", () => {
  it.each(["phone", "desktop"] as const)("%s: an artist puts ?artist=<slug> in the bar; All and the runs take it out", (w) => {
    const m = mountRevenue("/records/tours/revenue?artist=tiwa-savage");
    const tree = m[w];
    fireEvent.click(chip(tree, "Davido"));
    expect(search()).toBe("?artist=davido");
    // Negative control: the live page kept "?artist=tiwa-savage" here.
    expect(search()).not.toBe("?artist=tiwa-savage");
    fireEvent.click(chip(tree, w === "phone" ? "All" : "All artists"));
    expect(search()).toBe("");
    fireEvent.click(chip(tree, "Asake"));
    expect(search()).toBe("?artist=asake");
    fireEvent.click(chip(tree, "Multi-night runs"));
    expect(search()).toBe("");
    fireEvent.click(chip(tree, "Fireboy DML"));
    fireEvent.click(chip(tree, "Fireboy DML")); // toggled off: All
    expect(search()).toBe("");
    m.unmount();
  });

  it("Back returns the chip the reader left — the runs too, which have no address of their own", () => {
    // Tap, leave, come Back: the board mounts again in the same history entry.
    for (const [name, url] of [
      ["Asake", "?artist=asake"],
      ["Multi-night runs", ""],
    ] as const) {
      const first = mountRevenue("/records/tours/revenue");
      fireEvent.click(chip(first.phone, name));
      expect(search()).toBe(url);
      first.unmount();
      const back = mountRevenue(`/records/tours/revenue${url}`);
      expect(pressed(back.phone)).toEqual([name]);
      back.unmount();
    }
    // Negative control: a fresh entry (no saved chip) at the bare address is
    // All — what the live page showed after Back ("82 of 82 shows").
    window.history.replaceState(null, "", "/records/tours/revenue");
    const fresh = mountRevenue("/records/tours/revenue");
    expect(pressed(fresh.phone)).toEqual(["All"]);
    fresh.unmount();
  });
});

describe("A-10: opened on one artist, the page goes to the board once, instantly", () => {
  it("both layouts: the filter box (desktop) and the rail (phone), block start, instant; not for a bare visit or a Back", () => {
    const calls: { el: Element; o: ScrollIntoViewOptions }[] = [];
    const proto = Element.prototype as unknown as { scrollIntoView?: (o?: ScrollIntoViewOptions) => void };
    const had = proto.scrollIntoView;
    proto.scrollIntoView = function (this: Element, o?: ScrollIntoViewOptions) {
      calls.push({ el: this, o: o! });
    };
    const spy = vi.spyOn(Element.prototype, "getClientRects").mockImplementation(() => [{}] as unknown as DOMRectList);
    try {
      const m = mountRevenue("/records/tours/revenue?artist=tiwa-savage");
      const box = m.desktop.querySelector('[role="group"][aria-label="Filter the board"]')!;
      const stick = m.phone.querySelector(`.${phoneRevenue.railStick}`)!;
      expect(calls.filter((c) => c.el === box).map((c) => c.o)).toEqual([{ block: "start", behavior: "instant" }]);
      expect(calls.filter((c) => c.el === stick).map((c) => c.o)).toEqual([{ block: "start", behavior: "instant" }]);
      // The reader picks on (either) layout: no further jump.
      fireEvent.click(chip(m.phone, "Davido"));
      fireEvent.click(chip(m.desktop, "Davido"));
      expect(calls.length).toBe(2); // once
      m.unmount();

      calls.length = 0;
      // Back to the entry the reader left on Davido: their scroll comes back
      // with it, so no jump.
      const back = mountRevenue("/records/tours/revenue?artist=davido");
      expect(calls).toEqual([]);
      back.unmount();
      window.history.replaceState(null, "", "/");
      const bare = mountRevenue("/records/tours/revenue");
      expect(calls).toEqual([]);
      bare.unmount();
    } finally {
      spy.mockRestore();
      proto.scrollIntoView = had;
    }
    // The landing clears the sticky chrome: the box under the 69px navbar
    // with the [id] jumps' 88px, the rail where it sticks.
    expect(ruleOf(css("app/records/tours/revenue/revenue.module.css"), ".filterBox")).toMatch(/scroll-margin-top:\s*calc\(88px/);
    expect(ruleOf(css("app/components/mobileRevenue.module.css"), ".railStick")).toMatch(/scroll-margin-top:\s*calc\(69px/);
  });
});

describe("A-11: the count line is worded the same on both layouts", () => {
  it("“16 of 82 shows · Tiwa Savage”; the desktop said “16 of 82 shown” and named nobody", () => {
    const total = revenueShows.length;
    expect(shownLine(16, total, "Tiwa Savage")).toBe(`16 of ${total} shows · Tiwa Savage`);
    expect(shownLine(total, total)).toBe(`${total} of ${total} shows`);
    const m = mountRevenue("/records/tours/revenue?artist=tiwa-savage");
    const live = (t: HTMLElement) => text(t.querySelector('[aria-live="polite"]'));
    expect(live(m.desktop)).toBe(live(m.phone));
    expect(live(m.desktop)).not.toBe(`16 of ${total} shown`);
    m.unmount();
  });
});

describe("A-12: the desktop hero tile “9 of 10” stays on one line", () => {
  it(".figValue is nowrap (it broke to “9 of” / “10” at 901–939)", () => {
    expect(ruleOf(css("app/records/tours/revenue/revenue.module.css"), ".figValue")).toMatch(/white-space:\s*nowrap/);
  });
});

// ── A-06 / A-07 / A-13 / A-14 / E-11 / D-13 / A-missed: no break inside a unit ──
const board = revenueByCountry();
const countriesPage = trees(renderToStaticMarkup(<CountriesPage />));
/** Does `unit` survive a line break: inside one nowrap element, or bound by no-break spaces? */
const kept = (root: Element, unit: string) =>
  [...root.querySelectorAll('[class*="nowrap"]')].some((e) => (e.textContent ?? "").includes(unit)) ||
  (root.textContent ?? "").includes(unit.replace(/ /g, NB));
const missing = (root: Element, units: string[]) => units.filter((u) => !kept(root, u));

describe("A-06 / E-11 / D-13 / A-missed: a run's dates and its “tickets over nights” never break", () => {
  const runs = board.countries.flatMap((c) => c.artists.flatMap((a) => a.stands.map((st) => ({ c, a, st }))));
  it("there are runs to check (Canada, the UK)", () => expect(runs.length).toBeGreaterThanOrEqual(3));
  it.each([
    ["desktop", deskCountries.run],
    ["phone", phoneCountries.run],
  ] as const)("%s: every run line keeps them whole, and no separator starts a line", (w, runClass) => {
    const tree = countriesPage[w]!;
    const lines = [...tree.querySelectorAll(`.${runClass}`)];
    expect(lines.length).toBe(runs.length);
    for (const { st } of runs) {
      const units = [st.tour, shortDates(st.dates), runTickets(st.tickets, st.shows)];
      const line = lines.find((l) => (l.textContent ?? "").replace(/\s+/g, " ").includes(st.venue))!;
      expect(missing(line, units), `${w} ${st.venue}`).toEqual([]);
      // "·" always rides on the line before: a no-break space ahead of it.
      const meta = (line.textContent ?? "").replace(/^Run · \d+ nights/, "");
      expect(meta, `${w} ${st.venue}`).not.toMatch(/ ·/);
    }
  });
  it("negative control: the live UK line, one plain run of text, keeps neither", () => {
    const shipped = document.createElement("span");
    shipped.textContent = "$2.88M · The O2 Arena, London · Made in Lagos Tour · 28–29 November and 1 December 2021 · 50,814 tickets over 3 nights";
    expect(missing(shipped, ["28–29 November and 1 December 2021", "50,814 tickets over 3 nights"])).toHaveLength(2);
  });
});

describe("A-07 / A-13 / A-missed: the lead lines and the method note keep their units", () => {
  it("phone and desktop country heads: “12 nights” whole (live at 320: “12 | nights”)", () => {
    for (const [w, cls] of [
      ["phone", phoneCountries.countryLead],
      ["desktop", deskCountries.countryLead],
    ] as const) {
      expect(countriesPage[w]!.querySelectorAll(`.${cls}`).length).toBe(board.countries.length);
      for (const c of board.countries) {
        const head = countriesPage[w]!.querySelector(`#${countryAnchor(c.name, w === "phone")} .${cls}`)!;
        expect(missing(head, [nightsLabel(c.shows)]), `${w} ${c.name}`).toEqual([]);
      }
    }
    // Negative control: the live Canada head at 320, plain text.
    const shipped = document.createElement("div");
    shipped.textContent = "Burna Boy leads · $3.12M of $4.49M · 76.9% · 12 nights";
    expect(missing(shipped, ["12 nights"])).toHaveLength(1);
  });
  it("continent leads: the figure and its share as one unit (live: “$21.18M | · 61.7%”)", () => {
    const leads = (w: "phone" | "desktop") =>
      [...countriesPage[w]!.querySelectorAll(`.${w === "phone" ? phoneCountries.contLead : deskCountries.cardLead}`)];
    const withBox = board.continents.filter((k) => k.countries.length > 0);
    for (const w of ["phone", "desktop"] as const) {
      const ls = leads(w);
      expect(ls.length).toBe(withBox.length);
      withBox.forEach((k, i) => {
        const L = k.leader!;
        expect(missing(ls[i], [`${usdM(L.total)} · ${pct(shareOf(L, k))}`]), `${w} ${k.continent}`).toEqual([]);
      });
    }
  });
  it("the method note: “(89 nights)” bound, on both layouts (live: “(89 | nights)”)", () => {
    for (const w of ["phone", "desktop"] as const) {
      const dd = [...countriesPage[w]!.querySelectorAll("dd")].map((d) => d.textContent ?? "").find((t) => t.includes("multi-night runs ("))!;
      expect(dd, w).toContain(`(${board.showCount}${NB}nights)`);
    }
  });
});

describe("A-14: the record line keeps “58,973 tickets” whole", () => {
  it("phone record card", () => {
    const page = trees(renderToStaticMarkup(<RevenuePage />));
    const line = page.phone!.querySelector(`.${phoneRevenue.recordLine}`)!;
    const t = revenueShows[0].tickets!;
    expect(missing(line, [`${t} tickets`])).toEqual([]);
    // Negative control: the shipped line appended it as plain text.
    const shipped = document.createElement("span");
    shipped.textContent = `Burna Boy · London Stadium, London · ${t} tickets`;
    expect(missing(shipped, [`${t} tickets`])).toHaveLength(1);
  });
});

// ── A-04 / F-06: phone hero tiles in ink ────────────────────────────────────
describe("A-04 / F-06: the countries and tours phone heroes follow the owner's #420 ruling", () => {
  it("countries phone: “9 of 12” and 65.3% in ink; $44.99M the one gold figure", () => {
    const sheet = css("app/components/mobileRevenueCountries.module.css");
    expect(ruleOf(sheet, ".sharePct")).toMatch(/color:\s*var\(--text\)/);
    expect(ruleOf(sheet, ".shareGold")).toMatch(/color:\s*var\(--gold\)/);
    expect(sheet).not.toMatch(/\.figHis/);
    const phone = countriesPage.phone!;
    const golds = [...phone.querySelectorAll(`.${phoneCountries.shareGold}`)].map((e) => text(e));
    expect(golds).toEqual([usdM(heroFigures(board).hisTotal)]);
  });
  it("/records/tours phone: the four tiles in ink (live: all four gold)", () => {
    const rule = ruleOf(css("app/components/mobileTours.module.css"), ".statValue")!;
    expect(rule).toMatch(/color:\s*var\(--text\)/);
    expect(rule).not.toMatch(/var\(--gold\)/);
  });
});

// ── E-01 ───────────────────────────────────────────────────────────────────
describe("E-01: focus is never hidden under a phone action bar", () => {
  const g = css("app/globals.css");
  it("any page with an action bar pads its bottom scroll by the bar's height — bottom only", () => {
    const rule = ruleOf(g, 'html:has([class*="__actionBar"])')!;
    expect(rule).toMatch(/scroll-padding-bottom:\s*calc\(80px \+ env\(safe-area-inset-bottom, 22px\)\)/);
    expect(rule).not.toMatch(/scroll-padding-top/);
    // Before the tab bar's and /compare's, so theirs win where they apply.
    const mine = g.indexOf('html:has([class*="__actionBar"])');
    expect(mine).toBeGreaterThan(0);
    expect(mine).toBeLessThan(g.indexOf("html:has(.mobileTabBarPresent)"));
    expect(mine).toBeLessThan(g.indexOf("html:has(.compareBoardBar)"));
    // 80 covers the bar — 12 + 50 + 12 padding and its 1px rule — and the
    // 4px focus ring (2px outline at a 2px offset) below the focused row.
    const bar = ruleOf(css("app/components/mobileRevenue.module.css"), ".actionBar")!;
    expect(bar).toMatch(/padding: 12px 18px calc\(12px/);
    expect(ruleOf(css("app/components/mobileCerts.module.css"), ".actionPrimary")).toMatch(/min-height:\s*50px/);
    // The compiled class carries "__actionBar": Next names a module class
    // <file>-module__<hash>__<name>, as a shipped one reads.
    expect("mobileHome-module__1cyKeW__boardCover").toMatch(/__boardCover$/);
  });
  it("negative control: as shipped, only the tab bar and /compare padded, so the countries board (an action bar, no tab bar) had none", () => {
    const shipped = g.replace(/html:has\(\[class\*="__actionBar"\]\)\s*\{[^}]*\}/, "");
    expect(shipped).not.toMatch(/__actionBar/);
  });
});

// ── E-14 ───────────────────────────────────────────────────────────────────
describe("E-14: the continent chips' names start with what they show", () => {
  it("“N. America (North America)”, no aria-label", () => {
    const rail = countriesPage.phone!.querySelector('[aria-label="Continents"]')!;
    const chips = [...rail.querySelectorAll("a")];
    expect(chips.length).toBe(board.continents.length);
    for (const a of chips) {
      expect(a.getAttribute("aria-label")).toBeNull();
      const hidden = [...a.querySelectorAll(".visuallyHidden")].map((h) => h.textContent).join("");
      const visible = (a.textContent ?? "").replace(hidden, "");
      expect((a.textContent ?? "").startsWith(visible)).toBe(true);
    }
    expect(chips.map((a) => a.textContent)).toContain("N. America (North America)");
    // Negative control: the shipped name did not contain the label shown.
    expect("North America".includes("N. America")).toBe(false);
  });
});

// ── A-15 ───────────────────────────────────────────────────────────────────
describe("A-15: a place's link from one layout lands on the other layout's copy", () => {
  it("every country and continent maps to its twin, both ways", () => {
    for (const c of board.countries) {
      expect(twinAnchor(countryAnchor(c.name))).toBe(countryAnchor(c.name, true));
      expect(twinAnchor(countryAnchor(c.name, true))).toBe(countryAnchor(c.name));
    }
    for (const k of board.continents) {
      expect(twinAnchor(continentAnchor(k.continent))).toBe(continentAnchor(k.continent, true));
      expect(twinAnchor(continentAnchor(k.continent, true))).toBe(continentAnchor(k.continent));
    }
    expect(twinAnchor("faq")).toBeNull();
  });
  it("#country-ireland on a phone (no box) scrolls to #m-country-ireland, instantly; a target with a box is left to the browser", () => {
    const calls: { id: string; o: ScrollIntoViewOptions }[] = [];
    const proto = Element.prototype as unknown as { scrollIntoView?: (o?: ScrollIntoViewOptions) => void };
    const had = proto.scrollIntoView;
    proto.scrollIntoView = function (this: Element, o?: ScrollIntoViewOptions) {
      calls.push({ id: this.id, o: o! });
    };
    const spy = vi.spyOn(Element.prototype, "getClientRects").mockImplementation(function (this: Element) {
      return (this.id.startsWith("m-") ? [{}] : []) as unknown as DOMRectList;
    });
    try {
      window.history.replaceState(null, "", "/records/tours/revenue/countries#country-ireland");
      const a = render(
        <>
          <div id="country-ireland" />
          <div id="m-country-ireland" />
          <AnchorTwins />
        </>,
      );
      expect(calls).toEqual([{ id: "m-country-ireland", o: { block: "start", behavior: "instant" } }]);
      a.unmount();
      calls.length = 0;
      window.history.replaceState(null, "", "/records/tours/revenue/countries#m-country-ireland");
      const b = render(
        <>
          <div id="country-ireland" />
          <div id="m-country-ireland" />
          <AnchorTwins />
        </>,
      );
      expect(calls).toEqual([]);
      b.unmount();
    } finally {
      spy.mockRestore();
      proto.scrollIntoView = had;
    }
  });
  it("the countries page mounts it", () => {
    expect(read("app/records/tours/revenue/countries/page.tsx")).toMatch(/<AnchorTwins \/>/);
  });
});

// ── F-10 ───────────────────────────────────────────────────────────────────
describe("F-10: every class the countries board names exists", () => {
  it("own.* in RevenueCountries.tsx are all rules in countries.module.css (own.shareHeadCell was not)", () => {
    // Read off the source: under vitest a module answers any name, so only
    // the stylesheet says which classes exist.
    const sheet = css("app/records/tours/revenue/countries/countries.module.css");
    const defined = (c: string) => new RegExp(`\\.${c}(?![\\w-])`).test(sheet);
    const used = [...new Set([...read("app/components/RevenueCountries.tsx").matchAll(/\bown\.(\w+)/g)].map((m) => m[1]))];
    expect(used.length).toBeGreaterThan(20);
    expect(used.filter((c) => !defined(c))).toEqual([]);
    // Negative control: the shipped reference names no rule.
    expect(defined("shareHeadCell")).toBe(false);
  });
});

// ── B-08 ───────────────────────────────────────────────────────────────────
describe("B-08: /records/tours keeps the space before “Box-office reports…”", () => {
  it("“…artist. Box-office reports” (live: “artist.Box-office”)", () => {
    const html = renderToStaticMarkup(<ToursPage />);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const note = [...doc.querySelectorAll("p")].map((p) => p.textContent ?? "").find((t) => t.includes(REVENUE_SOURCE))!;
    expect(note).toMatch(new RegExp(`\\. ${REVENUE_SOURCE.slice(0, 20)}`));
    expect(note).not.toMatch(/\.Box-office/);
  });
});

// ── F-08 ───────────────────────────────────────────────────────────────────
describe("F-08: every phone grosses bar names its artist in the same place", () => {
  it("the six rows each carry the tag; London Stadium is Burna's (live: “🇬🇧 London Stadium $6.15M”, no artist)", () => {
    const doc = new DOMParser().parseFromString(renderToStaticMarkup(<VisualizedPage />), "text/html");
    const chart = [...doc.querySelectorAll(`.${vizStyles.chartTitle}`)].find((h) => h.textContent === "Biggest single-show grosses")!.parentElement!;
    const rows = [...chart.querySelectorAll(`.${vizStyles.barRow}`)];
    expect(rows.length).toBe(6);
    for (const r of rows) expect(r.querySelector(`.${vizStyles.barTag}`)?.textContent ?? "", text(r)).toMatch(/^ \(\S+\)$/);
    expect(text(rows[0])).toContain(`${revenueShows[0].venue} (Burna)`);
    // The tag sits outside the truncating venue span.
    expect(rows[0].querySelector(`.${vizStyles.barVenue} .${vizStyles.barTag}`)).toBeNull();
  });
});

// ── F-01 / F-11: /compare ───────────────────────────────────────────────────
describe("F-01 / F-11: /compare on phones", () => {
  const sheet = css("app/compare/compare.module.css");
  const phone = sheet.indexOf("@media (max-width: 760px)");
  it("F-01: a chip that wraps is a rounded rectangle, a one-line chip still a pill (live: 999px on a 46px two-line chip)", () => {
    const r = Number(ruleOf(sheet, ".tierChip", phone)!.match(/border-radius:\s*(\d+)px/)![1]);
    expect(r).toBeGreaterThanOrEqual(25.6 / 2); // one line, 25.6px tall: a full pill
    expect(r).toBeLessThan(46.2 / 2); // two lines, 46.2px: corners clear of the text
    expect(999).toBeGreaterThan(46.2 / 2); // the shipped radius drew the wrapped chip as a capsule
  });
  it("F-11: the kicker clears the breadcrumb bar (live: kicker top = bar bottom, 0px)", () => {
    // The 16px moved to the base rule so desktop has it too (V-compareIn-10,
    // tests/ui/compareKickerGap.test.tsx); the phone block no longer restates it.
    expect(ruleOf(sheet, ".kicker")).toMatch(/margin:\s*16px 0 14px/);
    expect(ruleOf(sheet, ".kicker", phone)).toBeNull();
  });
});

// ── F-02: the hub ──────────────────────────────────────────────────────────
describe("F-02: on the hub's tiles only Burna Boy's plaque count is gold", () => {
  it("desktop tiles ink, his anchor tile gold; the phone grid (no tile of his) ink — live, all twenty gold", () => {
    const desk = css("app/afrobeats/afrobeats.module.css");
    expect(ruleOf(desk, ".tileStat strong")).toMatch(/color:\s*var\(--text\)/);
    expect(ruleOf(desk, ".tileAnchor .tileStat strong")).toMatch(/color:\s*var\(--gold\)/);
    expect(ruleOf(css("app/components/mobileAfrobeatsHub.module.css"), ".tileStat strong")).toMatch(/color:\s*var\(--text\)/);
    const doc = new DOMParser().parseFromString(renderToStaticMarkup(<AfrobeatsPage />), "text/html");
    // The gold rule's one tile is his.
    const anchors = [...doc.querySelectorAll(`.${hubStyles.tileAnchor}`)];
    expect(anchors.length).toBe(1);
    expect(text(anchors[0])).toContain("Burna Boy");
  });
});

// ── F-12 / F-13: separators and orphans ─────────────────────────────────────
describe("F-12: a tour-map region list never starts a line with “·”", () => {
  it("every separator is bound to the name before it (live Europe: “· Switzerland · Sweden …”)", () => {
    const doc = new DOMParser().parseFromString(renderToStaticMarkup(<MobileTourMap data={tourMapProps} />), "text/html");
    const lists = [...doc.querySelectorAll(`.${tourMapStyles.regionList}`)].map((p) => p.textContent ?? "");
    expect(lists.length).toBeGreaterThan(3);
    for (const l of lists) expect(l).not.toMatch(/ ·/);
    expect(" · ").toMatch(/ ·/); // the shipped join
  });
});

describe("F-13: the home title keeps “Dai Dai” together", () => {
  it("a no-break space inside it (live: “DAI”” alone on the second line)", () => {
    const html = renderToStaticMarkup(<Home />);
    expect(html).toContain(`“Dai${NB}Dai”`);
    expect(html).not.toContain("“Dai Dai”</h2>");
    // Not text-wrap: balance — measured on the preview at 1440 it split the
    // name instead: "Shakira × Burna" / "Boy — “Dai Dai”".
    expect(ruleOf(css("app/page.module.css"), ".historyTitle")).not.toMatch(/text-wrap:\s*balance/);
  });
});
