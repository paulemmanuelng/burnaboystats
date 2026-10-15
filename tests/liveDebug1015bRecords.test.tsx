import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

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
