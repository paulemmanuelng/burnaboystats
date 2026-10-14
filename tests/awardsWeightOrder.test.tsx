import { describe, it, expect, vi, afterEach } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/awards",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AwardsPage from "../app/records/awards/page";
import MobileAwards from "../app/components/MobileAwards";
import pageStyles from "../app/records/awards/awards.module.css";
import phoneStyles from "../app/components/mobileAwards.module.css";
import {
  AWARD_BODY_TIERS,
  rankedCeremonies,
  ceremonies,
  ceremonyWins,
  honours,
  totalWins,
  type Ceremony,
} from "../app/data/awards";

/**
 * Award bodies by weight, Grammys first, on both layouts of /records/awards.
 *
 * Paul, 14 Oct 2026: "for the awards arrangement, i feel grammy is way too down
 * the page, possible to arrange it based on what awarding body carries more
 * weight....grammys, bet etc". The phone listed bodies by most wins, which put
 * the Headies first and the Grammys 35th; the desktop explorer listed them in
 * awards.ts's entry order, BET Hip Hop ahead of the BRITs. Both now read
 * `rankedCeremonies`, built from AWARD_BODY_TIERS.
 *
 * The order is checked where a reader meets it, in a render of the page: the
 * phone's body headings, the desktop's groups and its "Award body" chips.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const at = (url: string) => window.history.replaceState({}, "", url);
afterEach(() => at("/"));

const names = (list: readonly Ceremony[]) => list.map((c) => c.name);
const byClass = (root: Element, cls: string) => [...root.getElementsByClassName(cls)] as HTMLElement[];

/** The phone prints four bodies under the design's shorter names (page.tsx's
 *  SHORT_NAME: "AFRIMA", "Soundcity MVP" …). Back to the data's name by the
 *  relation those follow, a leading part or the bracketed acronym, and only
 *  when exactly one body fits. */
const fullName = (shown: string) => {
  if (ceremonies.some((c) => c.name === shown)) return shown;
  const fits = ceremonies.filter((c) => c.name.startsWith(`${shown} `) || c.name.endsWith(`(${shown})`));
  return fits.length === 1 ? fits[0].name : `?${shown}`;
};

/** The phone ledger's bodies, top to bottom, with the tally each prints. */
const phoneBodies = (root: Element) =>
  byClass(root, phoneStyles.bodyName).map((h) => {
    const tally = byClass(h.parentElement!, phoneStyles.tally)[0]?.textContent;
    return `${fullName(h.textContent ?? "")} · ${tally}`;
  });
const tallied = (list: readonly Ceremony[]) => list.map((c) => `${c.name} · ${ceremonyWins(c)} of ${c.noms.length}`);

const desktopOf = (root: Element) => byClass(root, pageStyles.desktopOnly)[0];
/** The desktop explorer's ceremony groups, top to bottom. */
const desktopGroups = (root: Element) => byClass(desktopOf(root), pageStyles.ceremonyName).map((h) => h.textContent);
/** The desktop's "Award body" filter row. */
const bodyRow = (root: Element) =>
  byClass(desktopOf(root), pageStyles.filterLabel).find((l) => l.textContent === "Award body")!.parentElement!;
/** That row's chips, "All" dropped. */
const bodyChips = (root: Element) => {
  const chips = [...bodyRow(root).querySelectorAll("button[aria-pressed]")].map((b) => b.textContent);
  expect(chips[0]).toBe("All");
  return chips.slice(1);
};

const BODY_PREVIEW = Number(read("app/components/AwardExplorer.tsx").match(/const BODY_PREVIEW = (\d+);/)![1]);

/** Where each tier starts in the ranked list. */
const tierSlices = () => {
  let start = 0;
  return AWARD_BODY_TIERS.map((t) => {
    const slice = rankedCeremonies.slice(start, start + t.bodies.length);
    start += t.bodies.length;
    return { t, slice };
  });
};

/** Most wins first, ties on fewer nominations. */
const inWinsOrder = (list: readonly Ceremony[]) =>
  list.every(
    (c, i) =>
      i === 0 ||
      ceremonyWins(list[i - 1]) > ceremonyWins(c) ||
      (ceremonyWins(list[i - 1]) === ceremonyWins(c) && list[i - 1].noms.length <= c.noms.length),
  );

describe("AWARD_BODY_TIERS places every award body exactly once", () => {
  it("every body in the data is in exactly one tier, and every tier name is a body", () => {
    const tiered = AWARD_BODY_TIERS.flatMap((t) => t.bodies);
    expect(names(ceremonies).filter((n) => tiered.filter((x) => x === n).length !== 1)).toEqual([]);
    expect(tiered.filter((x) => !ceremonies.some((c) => c.name === x))).toEqual([]);
    expect(new Set(AWARD_BODY_TIERS.map((t) => t.tier)).size).toBe(AWARD_BODY_TIERS.length);
  });

  it("rankedCeremonies is the same bodies as the data, each once", () => {
    expect(rankedCeremonies).toHaveLength(ceremonies.length);
    expect(new Set(rankedCeremonies)).toEqual(new Set(ceremonies));
  });

  it("opens on the Global majors, the canvas's six in the canvas's order, Grammy first", () => {
    const [majors] = AWARD_BODY_TIERS;
    expect(majors.tier).toBe("Global majors");
    expect(rankedCeremonies[0].name).toBe("Grammy Awards");
    expect(names(rankedCeremonies.slice(0, majors.bodies.length))).toEqual(majors.bodies);
    // The design brief's own list (the canvas itself, Wayfinding.dc.html, is
    // not in the repo): "Grammy, BET, BRIT, MOBO, Billboard Music Awards, AMAs".
    // Each entry is a body's whole name, its name less " Awards", or its
    // initials + "s"; exactly one body may fit each.
    const brief = read("docs/design/site-review-2026-10/README.md").match(/"Majors" block \(([^)]+)\)/)![1].split(", ");
    const initials = (n: string) => n.split(" ").map((w) => w[0]).join("");
    const named = brief.map((w) =>
      ceremonies.filter((c) => c.name === w || c.name === `${w} Awards` || `${initials(c.name)}s` === w).map((c) => c.name),
    );
    expect(named.every((m) => m.length === 1), JSON.stringify(named)).toBe(true);
    expect(named.flat()).toEqual(majors.bodies);
  });

  it("a listed tier keeps its listed order; the byWins tier runs most wins first", () => {
    for (const { t, slice } of tierSlices()) {
      if (t.byWins) {
        expect(new Set(names(slice)), t.tier).toEqual(new Set(t.bodies));
        expect(inWinsOrder(slice), t.tier).toBe(true);
      } else {
        expect(names(slice), t.tier).toEqual(t.bodies);
      }
    }
  });

  it("the byWins tier is not listed in that order already, so the sort is what puts it there", () => {
    const tail = AWARD_BODY_TIERS.find((t) => t.byWins)!;
    expect(inWinsOrder(tail.bodies.map((n) => ceremonies.find((c) => c.name === n)!))).toBe(false);
  });
});

describe("/records/awards lists the bodies in that order on both layouts", () => {
  it("the phone ledger", () => {
    const { container } = render(<AwardsPage />);
    expect(phoneBodies(container)).toEqual(tallied(rankedCeremonies));
  });

  it("the desktop explorer's groups", () => {
    const { container } = render(<AwardsPage />);
    expect(desktopGroups(container)).toEqual(names(rankedCeremonies));
  });

  it("the desktop's Award body chips: the first BODY_PREVIEW, then all of them", () => {
    const { container } = render(<AwardsPage />);
    expect(BODY_PREVIEW).toBeGreaterThan(AWARD_BODY_TIERS[0].bodies.length);
    expect(bodyChips(container)).toEqual(names(rankedCeremonies.slice(0, BODY_PREVIEW)));
    const more = byClass(desktopOf(container), pageStyles.moreBodies)[0];
    expect(more.textContent).toBe(`Show all ${ceremonies.length} ▾`);
    fireEvent.click(more);
    expect(bodyChips(container)).toEqual(names(rankedCeremonies));
  });

  it("#body= still lands on both layouts, for a body past the chip preview", () => {
    const last = rankedCeremonies.at(-1)!;
    // Guard: the phone prints this one under its own name.
    expect(fullName(last.name)).toBe(last.name);
    const into = vi.fn();
    const had = Element.prototype.scrollIntoView;
    vi.spyOn(Element.prototype, "getClientRects").mockImplementation(() => [{}] as unknown as DOMRectList);
    Element.prototype.scrollIntoView = into;
    try {
      at(`/records/awards#body=${encodeURIComponent(last.name)}`);
      const { container } = render(<AwardsPage />);
      // Desktop: the preview plus the linked body, pressed, and only its group.
      expect(bodyChips(container)).toEqual([...names(rankedCeremonies.slice(0, BODY_PREVIEW)), last.name]);
      const pressed = [...bodyRow(container).querySelectorAll('button[aria-pressed="true"]')];
      expect(pressed.map((b) => b.textContent)).toEqual([last.name]);
      expect(desktopGroups(container)).toEqual([last.name]);
      // Phone: its heading scrolled into view.
      expect(into).toHaveBeenCalledTimes(1);
      expect((into.mock.contexts[0] as HTMLElement).textContent?.startsWith(last.name)).toBe(true);
    } finally {
      vi.restoreAllMocks();
      Element.prototype.scrollIntoView = had;
    }
  });
});

describe("negative control: the orders that shipped fail the same checks", () => {
  // The phone's comparator as shipped in app/records/awards/page.tsx until
  // 14 Oct 2026, word for word.
  const shippedSort = (a: Ceremony, b: Ceremony) =>
    b.noms.filter((n) => n.won).length - a.noms.filter((n) => n.won).length || a.noms.length - b.noms.length;
  const shipped = [...ceremonies].sort(shippedSort);
  const majors = AWARD_BODY_TIERS[0].bodies;

  it("the phone's most-wins sort does not open on the Grammys", () => {
    const grammyAt = shipped.findIndex((c) => c.name === "Grammy Awards") + 1;
    expect(grammyAt, `the Grammys sat ${grammyAt} of ${shipped.length} under the shipped sort`).toBeGreaterThan(1);
    expect(names(shipped.slice(0, majors.length))).not.toEqual(majors);
  });

  it("the phone ledger rendered from the shipped sort fails the render check", () => {
    const { container } = render(
      <MobileAwards ceremonies={shipped} honours={honours} stats={[]} wins={totalWins} footNote="" faqs={[]} />,
    );
    // The extractor itself works on it: every body found, under the order shipped.
    expect(phoneBodies(container)).toEqual(tallied(shipped));
    expect(phoneBodies(container)).not.toEqual(tallied(rankedCeremonies));
  });

  it("the desktop's entry order does not open on the six majors", () => {
    expect(names(ceremonies.slice(0, majors.length))).not.toEqual(majors);
    expect(names(ceremonies)).not.toEqual(names(rankedCeremonies));
  });
});
