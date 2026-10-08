import { describe, it, expect, vi, afterEach } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursPage from "../app/records/tours/page";
import MobileTours from "../app/components/MobileTours";
import { tours, upcomingShows } from "../app/data/tours";
import {
  foldAnnounced,
  lastPossibleDay,
  moreShowsLabel,
  splitAnnounced,
  SHOW_FEWER,
} from "../app/lib/announcedShows";

/**
 * The phone Tours page's Announced card, folded (Paul, 8 Oct 2026): "i want
 * the later shows to collapse where the first he will do remain visible,
 * unless someone collapses to see two other shows". The next show to come
 * stays open; every later one sits behind one toggle under it, worded from the
 * count. Desktop is untouched, and this is the only fold on the screen.
 *
 * The real tours.ts is read throughout: on 8 Oct 2026 it holds three announced
 * shows (Stade de France 25 Oct, Apple Music Hall 29 Oct, London Stadium 2027),
 * and the dates below walk the card through three, two, one and none.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

/** The whole page as the server renders it on `iso` (noon UTC). */
function pageOn(iso: string) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(`${iso}T12:00:00Z`));
  const html = renderToStaticMarkup(ToursPage());
  vi.useRealTimers();
  const doc = parse(html);
  return {
    html,
    phone: doc.querySelector('[class*="_screen_"]')!,
    desktop: doc.querySelector('[class*="_desktopOnly_"]')!,
  };
}

/** What a reader sees of one card, from its markup alone: the shows not inside
 *  a `hidden` region, the folded ones, and the toggle. Run against the shipped
 *  card below as well, so it reads a card with no fold correctly. */
function readCard(card: Element) {
  const venue = (row: Element) => clean(row.querySelector('[class*="_upcomingVenue_"]')?.textContent);
  const rows = [...card.querySelectorAll('[class*="_upcomingShow_"]')];
  const toggle = card.querySelector("button");
  const regionId = toggle?.getAttribute("aria-controls") ?? null;
  return {
    visible: rows.filter((r) => !r.closest("[hidden]")).map(venue),
    folded: rows.filter((r) => r.closest("[hidden]")).map(venue),
    toggle,
    region: regionId ? card.ownerDocument.getElementById(regionId) : null,
    /** The toggle's words, then its glyph (aria-hidden, so not in its name). */
    label: clean(
      [...(toggle?.childNodes ?? [])]
        .filter((n) => !(n instanceof Element && n.getAttribute("aria-hidden") === "true"))
        .map((n) => n.textContent)
        .join(""),
    ),
    glyph: clean(toggle?.querySelector('[aria-hidden="true"]')?.textContent),
  };
}
const announcedCard = (root: Element) => root.querySelector('[data-announced="announced"]');
const playedCard = (root: Element) => root.querySelector('[data-announced="played"]');

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.useRealTimers();
});

describe("8 Oct 2026, three announced shows to come", () => {
  const { phone } = pageOn("2026-10-08");
  const card = readCard(announcedCard(phone)!);
  const announced = splitAnnounced(upcomingShows, "2026-10-08").announced;

  it("the real data has three or more, so the fold is exercised on what ships", () => {
    expect(announced.length).toBeGreaterThanOrEqual(3);
  });

  it("exactly one show is visible: the next one, Stade de France", () => {
    expect(card.visible).toEqual(["Stade de France"]);
    expect(card.visible[0]).toBe(foldAnnounced(announced).next!.venue);
  });

  it("every later show sits in the hidden region the toggle controls, shut", () => {
    expect(card.folded).toEqual(announced.slice(1).map((u) => u.venue));
    expect(card.toggle).not.toBeNull();
    expect(card.toggle!.getAttribute("type")).toBe("button");
    expect(card.toggle!.getAttribute("aria-expanded")).toBe("false");
    expect(card.region).not.toBeNull();
    expect(card.region!.hasAttribute("hidden")).toBe(true);
    // The region holds every folded row and nothing else of the card.
    expect(card.region!.querySelectorAll('[class*="_upcomingShow_"]').length).toBe(announced.length - 1);
  });

  it("the toggle's count is derived: '2 more shows ▾', the glyph kept out of its name", () => {
    expect(card.label).toBe(moreShowsLabel(announced.length - 1));
    expect(card.label).toBe("2 more shows");
    expect(card.glyph).toBe("▾");
  });

  it("the head still counts every announced show, folded or not", () => {
    expect(clean(announcedCard(phone)!.querySelector('[class*="_upcomingHead_"]')?.textContent)).toBe(
      `Announced${announced.length} shows`,
    );
  });

  it("is the only fold on the screen: one hidden region; the tour rows are the only other toggles", () => {
    expect(phone.querySelectorAll("[hidden]").length).toBe(1);
    expect(phone.querySelectorAll("[aria-expanded]").length).toBe(tours.length + 1);
    expect(phone.querySelectorAll("[aria-controls]").length).toBe(1);
  });
});

describe("the folded shows are in the server HTML", () => {
  const { html, phone } = pageOn("2026-10-08");
  const card = readCard(announcedCard(phone)!);

  it("each later show's venue, date, line and source is served inside the hidden region", () => {
    for (const u of upcomingShows.filter((s) => s.venue !== "Stade de France")) {
      const text = clean(card.region!.textContent);
      expect(text, u.venue).toContain(u.venue);
      expect(text, u.venue).toContain(u.when);
      expect(text, u.venue).toContain(clean(u.short.replace(/ /g, " ")));
      expect(html, u.venue).toContain(u.venue);
    }
  });

  it("a reader without JavaScript gets them open and no dead toggle", () => {
    const rule = clean(phone.querySelector("noscript")?.textContent);
    const regionClass = [...card.region!.classList].find((c) => c.includes("_upcomingMore_"))!;
    const toggleClass = [...card.toggle!.classList].find((c) => c.includes("_upcomingFold_"))!;
    expect(rule).toContain(`.${regionClass}[hidden]{display:block}`);
    expect(rule).toContain(`.${toggleClass}{display:none}`);
  });
});

describe("tapping the toggle", () => {
  const phone = (today = "2026-10-08") =>
    render(
      <MobileTours
        tours={tours}
        topGross="$30.46M"
        topTourName="I Told Them…"
        countryCount={50}
        regionCount={6}
        biggestNight="80,000"
        biggestVenue="London Stadium"
        yearSpan="2018 — 2026"
        hisShowCount={10}
        revenueShowCount={40}
        appearanceCount={30}
        headlinedCount={10}
        today={today}
      />,
    );

  it("opens the later shows in place and says 'Show fewer ▴'; a second tap folds them", async () => {
    const user = userEvent.setup();
    phone();
    const btn = screen.getByRole("button", { name: "2 more shows" });
    const region = document.getElementById(btn.getAttribute("aria-controls")!)!;
    expect(region).not.toBeVisible();
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "true");
    expect(btn).toHaveAccessibleName(SHOW_FEWER);
    expect(btn).toHaveTextContent(/^Show fewer▴$/);
    expect(region).toBeVisible();
    expect(region).toHaveTextContent("Apple Music Hall");
    expect(region).toHaveTextContent("London Stadium");
    await user.click(btn);
    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(btn).toHaveAccessibleName("2 more shows");
    expect(btn).toHaveTextContent(/^2 more shows▾$/);
    expect(region).not.toBeVisible();
  });

  it("holds the button under the finger both ways (lib/holdInPlace)", async () => {
    // jsdom has no layout, so the button's top is stood in: as if a browser
    // had moved it by the fold's own height at 390 (263px) when it shut. The
    // page must scroll that back, with scroll anchoring held off meanwhile.
    // Opening, where nothing moved it, scrolls nothing.
    const user = userEvent.setup();
    phone();
    const btn = screen.getByRole("button", { name: "2 more shows" });
    const scrollBy = vi.spyOn(window, "scrollBy").mockImplementation(() => {});
    vi.spyOn(btn, "getBoundingClientRect").mockImplementation(() => ({ top: 120 }) as DOMRect);
    await user.click(btn); // open, and nothing moved it: no scroll
    expect(btn).toHaveAttribute("aria-expanded", "true");
    expect(scrollBy).not.toHaveBeenCalled();
    let scrolled = false;
    let anchorDuring = "";
    scrollBy.mockImplementation(() => {
      anchorDuring = document.documentElement.style.overflowAnchor;
      scrolled = true;
    });
    vi.spyOn(btn, "getBoundingClientRect").mockImplementation(
      () => ({ top: btn.getAttribute("aria-expanded") === "false" && !scrolled ? 383 : 120 }) as DOMRect,
    );
    await user.click(btn); // shut
    expect(btn).toHaveAttribute("aria-expanded", "false");
    expect(scrollBy).toHaveBeenCalledWith({ top: 263, behavior: "instant" });
    expect(scrollBy).toHaveBeenCalledTimes(1);
    expect(anchorDuring).toBe("none");
    await vi.waitFor(() => expect(document.documentElement.style.overflowAnchor).toBe(""));
  });

  it("works from the keyboard: Enter opens, Space shuts", async () => {
    const user = userEvent.setup();
    phone();
    const btn = screen.getByRole("button", { name: "2 more shows" });
    btn.focus();
    expect(btn).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(btn).toHaveAttribute("aria-expanded", "true");
    await user.keyboard(" ");
    expect(btn).toHaveAttribute("aria-expanded", "false");
  });
});

describe("two shows to come: one in the fold, worded in the singular", () => {
  it("26 Oct 2026: '1 more show ▾'", () => {
    const card = readCard(announcedCard(pageOn("2026-10-26").phone)!);
    expect(card.visible).toEqual(["Apple Music Hall"]);
    expect(card.folded).toEqual(["London Stadium"]);
    expect(card.label).toBe("1 more show");
    expect(card.glyph).toBe("▾");
    expect(moreShowsLabel(1)).toBe("1 more show");
    expect(moreShowsLabel(3)).toBe("3 more shows");
  });
});

describe("one announced show, or none: no toggle, the card as it was", () => {
  it("30 Oct 2026: London Stadium alone, its date in the head, nothing folded", () => {
    const { phone } = pageOn("2026-10-30");
    const el = announcedCard(phone)!;
    const card = readCard(el);
    expect(card.visible).toEqual(["London Stadium"]);
    expect(card.folded).toEqual([]);
    expect(card.toggle).toBeNull();
    expect(el.querySelector("[hidden]")).toBeNull();
    expect(el.querySelector("noscript")).toBeNull();
    expect(clean(el.querySelector('[class*="_upcomingWhen_"]')?.textContent)).toBe("2027");
  });

  it("the Played card is never folded, however many it holds", () => {
    const { phone } = pageOn("2026-10-30");
    const el = playedCard(phone)!;
    expect(el.querySelectorAll('[class*="_upcomingShow_"]').length).toBe(2);
    expect(el.querySelector("button")).toBeNull();
    expect(el.querySelector("[hidden]")).toBeNull();
  });

  it("1 Jan 2028, every show played: no Announced card, no toggle anywhere", () => {
    const { phone } = pageOn("2028-01-01");
    expect(announcedCard(phone)).toBeNull();
    expect(phone.querySelectorAll("[hidden]").length).toBe(0);
  });
});

describe("a show whose day has gone by is never the visible next show", () => {
  it("26 Oct 2026: Stade de France is in the Played card, not the Announced one", () => {
    const { phone } = pageOn("2026-10-26");
    const card = readCard(announcedCard(phone)!);
    expect([...card.visible, ...card.folded]).not.toContain("Stade de France");
    expect(clean(playedCard(phone)!.textContent)).toContain("Stade de France");
  });

  it("every day from 8 Oct 2026 to 1 Jan 2028: the next show is the earliest still to come", () => {
    const day = new Date("2026-10-08T12:00:00Z");
    let checked = 0;
    while (day.toISOString().slice(0, 10) <= "2028-01-01") {
      const today = day.toISOString().slice(0, 10);
      const { announced } = splitAnnounced(upcomingShows, today);
      const { next, later } = foldAnnounced(announced);
      if (next) {
        expect(lastPossibleDay(next.when)! >= today, today).toBe(true);
        for (const u of later) expect(lastPossibleDay(u.when)! >= lastPossibleDay(next.when)!, today).toBe(true);
      }
      expect((next ? 1 : 0) + later.length, today).toBe(announced.length);
      day.setUTCDate(day.getUTCDate() + 1);
      checked++;
    }
    expect(checked).toBeGreaterThan(400);
  });

  it("stored out of order, the earliest still to come leads, never a passed one", () => {
    const shows = [
      { when: "2027" },
      { when: "29 Oct 2026" },
      { when: "25 Oct 2026" },
      { when: "1 Mar 2027" },
    ];
    const { announced } = splitAnnounced(shows, "2026-10-26");
    const { next, later } = foldAnnounced(announced);
    expect(next?.when).toBe("29 Oct 2026");
    expect(later.map((s) => s.when)).toEqual(["1 Mar 2027", "2027"]);
    expect(foldAnnounced([])).toEqual({ next: null, later: [] });
  });
});

describe("desktop is unchanged", () => {
  it("8 Oct 2026: one Announced box, every show a row in the open, no toggle, nothing hidden", () => {
    const { desktop } = pageOn("2026-10-08");
    const boxes = [...desktop.querySelectorAll("[data-announced]")];
    expect(boxes.map((b) => b.getAttribute("data-announced"))).toEqual(["announced"]);
    const rows = [...boxes[0].querySelectorAll('[class*="_upcomingRow_"]')];
    expect(rows.length).toBe(upcomingShows.length);
    upcomingShows.forEach((u, i) => {
      // Desktop prints the full note, not the phone's one line.
      expect(clean(rows[i].textContent)).toContain(u.venue);
      expect(clean(rows[i].textContent)).toContain(u.when);
      expect(clean(rows[i].textContent)).toContain(clean(u.note));
    });
    expect(boxes[0].querySelector("button, [hidden], [aria-controls], noscript")).toBeNull();
    expect(desktop.querySelector('[class*="_upcomingFold"], [class*="_upcomingMore_"]')).toBeNull();
    expect(desktop.querySelectorAll("[hidden]").length).toBe(0);
  });

  it("the desktop page's source has no part in the fold", () => {
    const src = readFileSync(join(__dirname, "../app/records/tours/page.tsx"), "utf8");
    expect(src).not.toMatch(/foldAnnounced|moreShowsLabel|SHOW_FEWER|upcomingFold|upcomingMore/);
  });
});

describe("the toggle's CSS", () => {
  const css = readFileSync(join(__dirname, "../app/components/mobileTours.module.css"), "utf8").replace(
    /\/\*[\s\S]*?\*\//g,
    "",
  );
  const rule = (sel: string) => new RegExp(`(^|\\n)\\${sel}\\s*\\{([^}]*)\\}`).exec(css)?.[2] ?? "";

  it("meets the 44px tap floor and keeps the site's focus ring", () => {
    expect(rule(".upcomingFold")).toMatch(/min-height:\s*44px/);
    // The global ring (globals.css, button:focus-visible) is never switched off.
    expect(css).not.toMatch(/\.upcomingFold[^{]*\{[^}]*outline:\s*(none|0)/);
  });

  it("the region sets no display of its own, so `hidden` folds it", () => {
    expect(rule(".upcomingMore")).not.toMatch(/display/);
  });
});

/**
 * Negative control: the phone card as it shipped on fix/dr-tours (bc52c8b8),
 * rendered on 8 Oct 2026, verbatim. Every show open, no toggle: the guard
 * above reads three visible shows in it, where the fold leaves one.
 */
const SHIPPED_CARD = `<div class="_upcoming_495aa4" data-announced="announced"><div class="_upcomingHead_495aa4"><span class="_upcomingTag_495aa4">Announced</span><span class="_upcomingCount_495aa4">3 shows</span></div><div class="_upcomingShow_495aa4"><div class="_upcomingRow_495aa4"><span class="_upcomingVenue_495aa4">Stade de France</span><span class="_upcomingDate_495aa4">25 Oct 2026</span></div><div class="_upcomingCity_495aa4">Paris, France</div><p class="_upcomingText_495aa4">Halftime show at the first NFL game in France, Steelers&nbsp;v&nbsp;Saints.</p><p class="_upcomingSource_495aa4">Announced by the NFL, 17&nbsp;September&nbsp;2026</p></div><div class="_upcomingShow_495aa4"><div class="_upcomingRow_495aa4"><span class="_upcomingVenue_495aa4">Apple Music Hall</span><span class="_upcomingDate_495aa4">29 Oct 2026</span></div><div class="_upcomingCity_495aa4">London, UK · 600 cap</div><p class="_upcomingText_495aa4">Apple's new Battersea venue, livestreamed worldwide on Apple Music.</p><p class="_upcomingSource_495aa4">Announced by Apple, 25&nbsp;September&nbsp;2026</p></div><div class="_upcomingShow_495aa4"><div class="_upcomingRow_495aa4"><span class="_upcomingVenue_495aa4">London Stadium</span><span class="_upcomingDate_495aa4">2027</span></div><div class="_upcomingCity_495aa4">London, UK · 80,000 cap</div><p class="_upcomingText_495aa4">His third night there, after 2023 and 2024. No&nbsp;date&nbsp;yet.</p><p class="_upcomingSource_495aa4">Announced by Burna Boy on X, 3&nbsp;August&nbsp;2026</p></div></div>`;

describe("negative control: the unfolded card that shipped", () => {
  it("reads as three visible shows and no toggle, so the fold guard fails on it", () => {
    const card = readCard(parse(SHIPPED_CARD).querySelector('[data-announced="announced"]')!);
    expect(card.visible).toEqual(["Stade de France", "Apple Music Hall", "London Stadium"]);
    expect(card.folded).toEqual([]);
    expect(card.toggle).toBeNull();
    expect(card.visible).not.toEqual(["Stade de France"]);
  });
});
