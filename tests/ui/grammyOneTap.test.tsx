import { describe, it, expect, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/awards",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AwardsPage from "../../app/records/awards/page";
import MobileAwards from "../../app/components/MobileAwards";
import styles from "../../app/components/mobileAwards.module.css";
import dockStyles from "../../app/components/dockIndex.module.css";
import { ceremonies, rankedCeremonies, honours, DOCK_MAJORS } from "../../app/data/awards";
import { trees, text } from "../fixtures/phoneTrees";
import { read, winning } from "../fixtures/cssRules";

/**
 * grammyOneTap (Job 4 · J4-7; the design response's test, fixes 87 and 90).
 *
 * The phone awards page keeps its filter rail in the flow and gains a docking
 * index under it: every body the filter shows, in the list's own order — the
 * weight order of 14 Oct 2026 (Paul: "grammy is way too down the page"),
 * which leads with the six majors — and after them "All {n}", a jump to the
 * head of the list with no glyph (fixes 7, 81, 83; C-19 amended, Paul 14 Oct:
 * "use the defaults"). So the Grammy is one tap from the first screen. The
 * chips print the names the list prints (C-18); the body in view is the
 * current chip (JumpSpy). Each body's "{n} wins" tally is ink (fix 87).
 */

// The canvas's six majors, in its order (Wayfinding §6, the Awards frame:
// "Grammy · BET · BRIT · MOBO · BBMA · AMAs"), by the data's names.
const CANVAS_MAJORS = ["Grammy Awards", "BET Awards", "BRIT Awards", "MOBO Awards", "Billboard Music Awards", "American Music Awards"];
const anchor = (name: string) => `award-body-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
const winsOf = (name: string) => ceremonies.find((c) => c.name === name)!.noms.filter((n) => n.won).length;

const phoneOf = () => trees(renderToStaticMarkup(AwardsPage())).phone!;
const dockIn = (root: Element) => root.querySelector('[data-dock="phone"]');
const chipsIn = (root: Element) => [...(dockIn(root)?.querySelectorAll(`a.${dockStyles.dockChip}`) ?? [])];
const chipName = (a: Element) => (a.firstChild?.textContent ?? "").trim();
/** The bodies the list renders, in order: each body's root carries its anchor. */
const bodiesIn = (root: Element) => [...root.querySelectorAll('[id^="award-body-"]')];

/** The Grammy is one tap away: a docking index whose majors lead with it, landing on a body this screen renders. */
function grammyOneTap(root: Element) {
  const chips = chipsIn(root);
  const grammy = chips.slice(0, CANVAS_MAJORS.length).find((a) => a.getAttribute("href") === `#${anchor("Grammy Awards")}`);
  return !!grammy && !!root.querySelector(`[id="${anchor("Grammy Awards")}"]`);
}

describe("grammyOneTap: the phone awards dock", () => {
  const phone = phoneOf();

  it("the data's first tier is the canvas's six majors, and the dock's leading set is that tier", () => {
    expect([...DOCK_MAJORS]).toEqual(CANVAS_MAJORS);
  });

  it("sits under the filter rail and the list's count line, in the flow, and the Grammy is the first chip", () => {
    const dock = dockIn(phone)!;
    expect(dock, "the phone dock").not.toBeNull();
    expect(dock.querySelector("nav")?.getAttribute("aria-label")).toBe("Jump to an award body");
    // The filter rail stays in the flow above it (fix 90), then the count line.
    expect(dock.previousElementSibling?.className).toContain(styles.metaBar);
    expect(dock.previousElementSibling?.previousElementSibling?.querySelector('[aria-pressed="true"]')).not.toBeNull();
    expect(grammyOneTap(phone)).toBe(true);
    const first = chipsIn(phone)[0];
    expect(chipName(first)).toBe("Grammy Awards");
    expect(first.getAttribute("href")).toBe(`#${anchor("Grammy Awards")}`);
  });

  it("the six majors in the canvas's order, then 'All {n}', then every other body in the list's own order", () => {
    const chips = chipsIn(phone);
    const bodies = bodiesIn(phone);
    expect(chips.slice(0, 6).map(chipName)).toEqual(CANVAS_MAJORS);
    const all = chips[6];
    // n is the bodies the list shows; unfiltered, every body in the data.
    expect(text(all)).toBe(`All ${bodies.length}`);
    expect(bodies.length).toBe(ceremonies.length);
    expect(text(all)).not.toMatch(/[↗→↓←↑]/);
    expect(all.querySelector(`.${dockStyles.dockCount}`)).toBeNull();
    // Every body chip, in order, is the list's own order.
    const bodyChips = chips.filter((a) => a !== all);
    expect(bodyChips.map((a) => a.getAttribute("href"))).toEqual(bodies.map((b) => `#${b.id}`));
    expect(bodies.map((b) => b.id)).toEqual(rankedCeremonies.map((c) => anchor(c.name)));
  });

  it("'All {n}' lands on the head of the list, its count line, in this layout's tree", () => {
    const all = chipsIn(phone)[6];
    const head = phone.querySelector(`[id="${all.getAttribute("href")!.slice(1)}"]`)!;
    expect(head, "the list head").not.toBeNull();
    expect(head.className).toContain(styles.metaBar);
    expect(text(head)).toMatch(new RegExp(`· ${bodiesIn(phone).length} bodies`));
  });

  it("each chip prints the heading its body prints (C-18), with its wins, and lands on it", () => {
    for (const a of chipsIn(phone).filter((c) => /^#award-body-/.test(c.getAttribute("href")!))) {
      const body = phone.querySelector(`[id="${a.getAttribute("href")!.slice(1)}"]`)!;
      expect(body, a.getAttribute("href")!).not.toBeNull();
      expect(chipName(a)).toBe(text(body.querySelector("h2")));
      const data = rankedCeremonies.find((c) => anchor(c.name) === body.id)!;
      expect(text(a.querySelector(`.${dockStyles.dockCount}`))).toBe(String(winsOf(data.name)));
    }
  });

  it("the dock follows the filter: 'Wins only' drops the bodies with no win, and every chip still lands", async () => {
    render(
      <MobileAwards ceremonies={rankedCeremonies} majors={DOCK_MAJORS} honours={honours} stats={[]} wins={0} footNote="" faqs={[]} />,
    );
    await userEvent.click(screen.getByRole("button", { name: "Wins only" }));
    const nav = screen.getByRole("navigation", { name: "Jump to an award body" });
    const chips = within(nav).getAllByRole("link");
    const withWins = rankedCeremonies.filter((c) => winsOf(c.name) > 0);
    const goneMajors = CANVAS_MAJORS.filter((m) => winsOf(m) === 0);
    expect(goneMajors.length).toBeGreaterThan(0); // BRIT and the AMAs, today
    for (const m of goneMajors) expect(chips.map(chipName)).not.toContain(m);
    const keptMajors = CANVAS_MAJORS.filter((m) => winsOf(m) > 0);
    expect(chips.slice(0, keptMajors.length).map(chipName)).toEqual(keptMajors);
    expect(chips[keptMajors.length].textContent).toBe(`All ${withWins.length}`);
    for (const a of chips) expect(document.getElementById(a.getAttribute("href")!.slice(1)), a.getAttribute("href")!).not.toBeNull();
    expect(chips).toHaveLength(withWins.length + 1);
  });
});

describe("fix 87: each body's '{n} wins' tally is ink", () => {
  const CSS = read("app/components/mobileAwards.module.css");
  it(".tallyWon resolves to --text", () => {
    expect(winning(CSS, ".tallyWon", "color", () => true)).toBe("var(--text)");
  });
  it("negative control: the rule as it shipped until Job 0", () => {
    // `git show ab737a3d^:app/components/mobileAwards.module.css`, line 206.
    const SHIPPED_UNTIL_JOB0 = ".tallyWon { color: var(--gold); }";
    expect(winning(SHIPPED_UNTIL_JOB0, ".tallyWon", "color", () => true)).not.toBe("var(--text)");
  });
});

describe("grammyOneTap negative control: the shipped phone screen", () => {
  it("had no dock, and opened its list on the Headies (most wins first), the Grammy far below", () => {
    // MobileAwards as shipped (main e85e6efe): the count line, then the
    // bodies straight after it, in most-wins order.
    const shipped =
      `<div class="${styles.screen}"><div class="${styles.metaBar}"><span>249 nominations · 49 bodies</span></div>` +
      `<div id="${anchor("The Headies")}"><div class="${styles.bodyHead}"><h2 class="${styles.bodyName}">The Headies</h2></div></div>` +
      `<div id="${anchor("Grammy Awards")}"><div class="${styles.bodyHead}"><h2 class="${styles.bodyName}">Grammy Awards</h2></div></div></div>`;
    const host = document.createElement("div");
    host.innerHTML = shipped;
    expect(grammyOneTap(host)).toBe(false);
    expect(text(host.querySelector("h2"))).toBe("The Headies");
  });
});
