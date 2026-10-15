import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent, screen } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AwardsPage from "../app/records/awards/page";
import awardStyles from "../app/components/mobileAwards.module.css";
import { totalWins, totalNominations, decidedNominations, pendingNominations } from "../app/data/awards";
import ByTheNumbersPage from "../app/records/by-the-numbers/page";
import sitemap from "../app/sitemap";
import { recordShelves } from "../app/lib/recordShelves";
import { routeDay } from "../app/lib/routeStamps";
import { lastUpdated } from "../app/lib/api";
import { updates } from "../app/data/updates";
import { shortStamp } from "../app/lib/dates";
import VisualizedPage from "../app/records/visualized/page";
import visStyles from "../app/components/mobileVisualized.module.css";
import { decl, read, rules } from "./fixtures/cssRules";
import ChartsPage from "../app/records/charts/page";
import { chartSourceSplit } from "../app/data/charts";
import MobileAfricasBiggest from "../app/components/MobileAfricasBiggest";
import { africaBoards, boardsHeLeads, boardsOthersLead } from "../app/lib/africaBoards";
import { othersLead } from "../app/lib/africaBoardFilter";
import AwardExplorer from "../app/components/AwardExplorer";
import desktopAwards from "../app/records/awards/awards.module.css";
import { ceremonies } from "../app/data/awards";
import { readDeepLink } from "../app/lib/deepLink";

/**
 * The live debug pass of 15 Oct 2026 (part 2), records lane (/records and its
 * pages, /on-this-day). One block per finding; each negative control is what
 * the site shipped (origin/main 6062f806), verbatim.
 */

const words = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");

// ── REC-8 ───────────────────────────────────────────────────────────────────

describe("REC-8: the awards strike rate names what it is taken over", () => {
  const cellOf = (doc: Document, label: string) =>
    [...doc.querySelectorAll(`.${awardStyles.statCell}`)].find((c) => words(c.querySelector(`.${awardStyles.statLabel}`)) === label)!;
  /** Whether a note under `total` says what its rate is a share of: either the
   *  rate is wins over the printed total, or the note prints its own base. */
  const honest = (note: string, total: number) => {
    const rate = Number(note.match(/^(\d+)%/)?.[1]);
    if (Math.round((totalWins / total) * 100) === rate) return true;
    const base = Number(note.match(/^\d+% of (\d+) decided/)?.[1]);
    return Math.round((totalWins / base) * 100) === rate && base < total;
  };

  it("the phone stat box: 35% of 238 decided, 11 pending, under 249 nominations", () => {
    expect(pendingNominations).toBeGreaterThan(0);
    const doc = parse(renderToStaticMarkup(<AwardsPage />));
    const cell = cellOf(doc, "Nominations");
    expect(words(cell.querySelector(`.${awardStyles.statValue}`))).toBe(String(totalNominations));
    const note = words(cell.querySelector(`.${awardStyles.statNote}`));
    const rate = Math.round((totalWins / decidedNominations) * 100);
    expect(note).toBe(`${rate}% of ${decidedNominations} decided, ${pendingNominations} pending`);
    expect(decidedNominations + pendingNominations).toBe(totalNominations);
    expect(honest(note, totalNominations)).toBe(true);
    // Two lines at 390 ("35% of 238 decided," / "11 pending"): a comma, so no
    // "·" ends the first.
    expect(note).not.toContain("·");
  });

  it("negative control: the shipped '35% strike rate' under 249 is neither 83/249 nor names its base", () => {
    const shipped = "35% strike rate";
    expect(Math.round((83 / 249) * 100)).toBe(33);
    // With the page's own figures: the rate is over the decided ones only.
    expect(honest(`${Math.round((totalWins / decidedNominations) * 100)}% strike rate`, totalNominations)).toBe(false);
    expect(shipped).not.toMatch(/decided|pending/);
  });
});

// ── REC-13 ──────────────────────────────────────────────────────────────────

describe("REC-13: the /records card, the sitemap and By the Numbers itself print one day", () => {
  const ROUTE = "/records/by-the-numbers";

  it("the card's day is the page's own stamp (lastUpdated)", () => {
    const card = recordShelves().flatMap((s) => s.books).find((b) => b.href === ROUTE)!;
    expect(card.day).toBe(lastUpdated);
    expect(routeDay(ROUTE)).toBe(lastUpdated);
    const entry = sitemap().find((e) => e.url.endsWith(ROUTE))!;
    expect(new Date(entry.lastModified!).toISOString().slice(0, 10)).toBe(lastUpdated);
  });

  it("the page prints that day on both layouts", () => {
    const t = words(parse(renderToStaticMarkup(<ByTheNumbersPage />)).body);
    expect(t).toContain(`Updated ${shortStamp(lastUpdated)}`);
  });

  it("negative control: the shipped card read the feed alone — 16 Sep, a month behind the page", () => {
    const feedOnly = updates
      .filter((u) => u.href === ROUTE || u.href.startsWith(`${ROUTE}/`))
      .map((u) => u.date)
      .sort()
      .at(-1);
    expect(feedOnly).toBe("2026-09-16");
    expect(feedOnly).not.toBe(lastUpdated);
  });
});

// ── REC-15 ──────────────────────────────────────────────────────────────────

describe("REC-15: /records/visualized on a phone leaves space under its closing note", () => {
  const VIS_CSS = read("app/components/mobileVisualized.module.css");
  const PROV_CSS = read("app/components/mobileProvenance.module.css");
  /** The bottom side of a margin or padding shorthand, in px. */
  const bottom = (v: string | undefined) => {
    if (!v) return 0;
    const p = v.split(/\s+/);
    return parseFloat(p.length >= 3 ? p[2] : p[0]) || 0;
  };
  const prop = (css: string, sel: string, name: string) =>
    rules(css)
      .filter((r) => r.selector.split(",").map((x) => x.trim()).includes(sel))
      .map((r) => decl(r.body, name))
      .filter(Boolean)
      .at(-1);
  /** Px between the note's last line and the screen's bottom edge. */
  const spaceUnder = (note: Element, visCss: string) => {
    const own = [...note.classList].map((c) => c.match(/^_(.+)_[0-9a-f]+$/)?.[1] ?? c).filter((c) => c !== "p3");
    const margin = own.reduce((n, c) => Math.max(n, bottom(prop(visCss, `.${c}`, "margin"))), 0);
    return bottom(prop(PROV_CSS, ".p3", "padding")) + margin + bottom(prop(visCss, ".screen", "padding"));
  };

  it("the note is the screen's last block and clears the edge by the other record pages' 24px", () => {
    const doc = parse(renderToStaticMarkup(<VisualizedPage />));
    const screen = doc.querySelector(`.${visStyles.screen}`)!;
    const note = screen.lastElementChild!;
    expect(note.getAttribute("data-provenance")).toBe("p3");
    expect(note.classList.contains(visStyles.footSlot)).toBe(true);
    expect(spaceUnder(note, VIS_CSS)).toBe(24);
  });

  it("negative control: the shipped note had no slot, so 0px under it", () => {
    const shipped = document.createElement("div");
    shipped.innerHTML = '<div class="p3" data-provenance="p3"><p class="p3Note">…could drift out of step.</p></div>';
    expect(spaceUnder(shipped.firstElementChild!, VIS_CSS)).toBe(0);
  });
});

// ── REC-2 ───────────────────────────────────────────────────────────────────

describe("REC-2: the /records/charts method note does not call 18 airplay countries a handful", () => {
  /** A vague "few" for a set the same note counts at more than five. */
  const VAGUE = /\b(handful|a few|several)\b/;
  const contradicts = (note: string, counted: number) => VAGUE.test(note) && counted > 5;

  it("the note keeps the derived count and the rule, with no vague quantifier", () => {
    const doc = parse(renderToStaticMarkup(<ChartsPage />));
    const note = [...doc.querySelectorAll('[data-provenance="p3"]')].map(words).find((t) => t.startsWith("Peak positions on each country"))!;
    expect(note).toBeTruthy();
    expect(note).toContain(`${chartSourceSplit.airplayMonitor} are airplay or broadcast-monitor charts`);
    expect(note).toContain(
      "excluded, as are airplay charts — with one narrow exception: in countries that publish no non-airplay national chart at all, the airplay chart is the only national chart there is, and is used.",
    );
    expect(chartSourceSplit.airplayMonitor).toBeGreaterThan(5);
    expect(contradicts(note, chartSourceSplit.airplayMonitor)).toBe(false);
  });

  it("negative control: the shipped sentence beside the shipped count", () => {
    const shipped =
      "18 are airplay or broadcast-monitor charts — Monitor Latino, TopHit, Radiomonitor, Ipsos, BMAT, PROPHON — counted only where the country publishes no other national chart. … excluded, as are airplay charts — with one narrow exception: in the handful of countries that publish no non-airplay national chart at all, the airplay chart is the only national chart there is, and is used.";
    expect(contradicts(shipped, 18)).toBe(true);
  });
});

// ── REC-5 ───────────────────────────────────────────────────────────────────

describe("REC-5: the phone's 'Others lead' chip shows the boards the page counts", () => {
  const yearBoards = africaBoards.filter((b) => b.years);

  it("the chip lists boardsOthersLead boards, no by-year board, none led by him", () => {
    expect(yearBoards.length).toBeGreaterThan(0);
    const { container, unmount } = render(
      <MobileAfricasBiggest boards={africaBoards} leads={boardsHeLeads} others={boardsOthersLead} stats={[]} faqs={[]} />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Others lead" }));
    const shown = [...container.querySelectorAll('[id^="m-"]')].map((el) => el.id.slice(2));
    expect(shown).toHaveLength(boardsOthersLead);
    expect(shown).toEqual(africaBoards.filter(othersLead).map((b) => b.id));
    for (const y of yearBoards) expect(shown).not.toContain(y.id);
    for (const id of shown) expect(africaBoards.find((b) => b.id === id)!.rows[0].his, id).toBe(false);
    unmount();
  });

  it("one predicate behind the count and the chip", () => {
    expect(read("app/lib/africaBoards.ts")).toContain("export const boardsOthersLead = africaBoards.filter(othersLead).length;");
    expect(read("app/components/MobileAfricasBiggest.tsx")).toContain('filter === "leads" ? b.leads : othersLead(b)');
    // Type-only import: the client screen stays clear of the board data.
    expect(read("app/lib/africaBoardFilter.ts")).toMatch(/^import type \{ Board \} from "\.\/africaBoards";/);
  });

  it("negative control: the shipped chip (!b.leads) kept the by-year board, with his row first", () => {
    const shipped = africaBoards.filter((b) => !b.leads);
    expect(shipped.length).toBe(boardsOthersLead + yearBoards.length);
    const year = shipped.find((b) => b.years)!;
    expect(year.rows[0].his).toBe(true);
  });
});

// ── REC-9 ───────────────────────────────────────────────────────────────────

describe("REC-9: a desktop #body= arrival brings the filtered awards into view", () => {
  const AFRIMA = "All Africa Music Awards (AFRIMA)";

  /** Renders the explorer at `hash`, on screen, and returns the scrolls it asked for. */
  function arrive(hash: string) {
    window.history.replaceState(null, "", `/records/awards${hash}`);
    const scrolls: { el: Element; opts: unknown }[] = [];
    const proto = Element.prototype as unknown as Record<string, unknown>;
    const saved = { rects: proto.getClientRects, into: proto.scrollIntoView, raf: window.requestAnimationFrame };
    proto.getClientRects = function () {
      return [{ width: 1, height: 1 }];
    };
    proto.scrollIntoView = function (this: Element, opts: unknown) {
      scrolls.push({ el: this, opts });
    };
    window.requestAnimationFrame = (cb: FrameRequestCallback) => {
      cb(0);
      return 1;
    };
    try {
      const r = render(<AwardExplorer />);
      return { ...r, scrolls };
    } finally {
      proto.getClientRects = saved.rects;
      proto.scrollIntoView = saved.into;
      window.requestAnimationFrame = saved.raf;
    }
  }

  it("the filter bar, its body chip pressed, lands at the top", () => {
    expect(ceremonies.some((c) => c.name === AFRIMA)).toBe(true);
    const { container, scrolls, unmount } = arrive(`#body=${encodeURIComponent(AFRIMA)}`);
    const bar = container.querySelector(`.${desktopAwards.filterBar}`)!;
    expect(scrolls).toEqual([{ el: bar, opts: { block: "start" } }]);
    expect(screen.getByRole("button", { name: AFRIMA }).getAttribute("aria-pressed")).toBe("true");
    // Every group under it is the body's own.
    const groups = [...container.querySelectorAll(`.${desktopAwards.ceremonyName}`)].map((h) => h.textContent);
    expect(groups).toEqual([AFRIMA]);
    unmount();
  });

  it("no scroll for a bare visit or a body the page does not list", () => {
    for (const hash of ["", "#body=Not%20An%20Award", "#faq"]) {
      const { scrolls, unmount } = arrive(hash);
      expect(scrolls, hash || "(none)").toEqual([]);
      unmount();
    }
    window.history.replaceState(null, "", "/");
  });

  it("the bar clears the 69px navbar as an [id] jump does", () => {
    const css = read("app/records/awards/awards.module.css");
    const bar = rules(css).filter((r) => r.media === null && r.selector === ".filterBar").at(-1)!;
    expect(decl(bar.body, "scroll-margin-top")).toBe("calc(88px + env(safe-area-inset-top, 0px))");
  });

  it("negative control: the shipped handler set the filter and asked for no scroll", () => {
    window.history.replaceState(null, "", `/records/awards#body=${encodeURIComponent(AFRIMA)}`);
    const scrolled = vi.fn();
    let set: string | null = null;
    // app/components/AwardExplorer.tsx at origin/main, verbatim.
    const setCeremony = (v: string | null) => (set = v);
    const read = (initial: boolean) => {
      const b = readDeepLink("body", false);
      if (!initial || b) setCeremony(b && ceremonies.some((c) => c.name === b) ? b : null);
    };
    read(true);
    expect(set).toBe(AFRIMA);
    expect(scrolled).not.toHaveBeenCalled();
    window.history.replaceState(null, "", "/");
  });
});
