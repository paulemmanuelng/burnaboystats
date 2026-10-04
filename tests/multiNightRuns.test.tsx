import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { render, fireEvent } from "@testing-library/react";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/revenue",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RevenuePage from "../app/records/tours/revenue/page";
import { revenueStands } from "../app/data/tourRevenue";
import { RUNS_HEADING, RUNS_LEDE, runYear, shortDates } from "../app/lib/multiNightRuns";

/**
 * The multi-night runs — concerts reported only as one combined total for
 * several nights. The owner, 3 Oct 2026: "the list that shows the concerts with
 * more that one night, ensure they are properly stated so it has a good
 * heading". Until then both layouts headed it with a mono label, "Reported as a
 * stand — one figure for the run", and the phone rows said "· 2 shows" beside
 * "over 2 nights".
 *
 * Since 4 Oct 2026 the runs are a chip on the board's rail, between All and
 * Burna Boy (the owner: "let's [take] the multi-night runs and put it here"),
 * not a section beneath the board. These assertions moved with them: each one
 * now reads the chip's view, on both layouts, with RUNS_HEADING as the view's
 * accessible heading (#runs-title, #runs-title-m). The chip itself is pinned
 * in tests/runsChip.test.tsx.
 */

const decode = (s: string) =>
  s.replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">");
/** What a reader sees: tags out, entities decoded, whitespace collapsed. */
const textOf = (s: string) => decode(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

/** A chip by its label (its first text node), read from the DOM: getByRole
 *  over a whole layout of 82 rows takes seconds in jsdom. */
const chipNamed = (tree: Element, name: string) =>
  [...tree.querySelectorAll("button[aria-pressed]")].find((b) => b.childNodes[0].textContent === name) as HTMLElement;

/** The page with the runs chip on, on both layouts (both sit in the DOM at once). */
function runsView() {
  const { container, unmount } = render(<RevenuePage />);
  const desktop = container.querySelector('[class*="desktopOnly"]') as HTMLElement;
  const phone = [...container.querySelectorAll("main > div")].find((d) => /screen/.test(d.className)) as HTMLElement;
  for (const tree of [desktop, phone]) {
    fireEvent.click(chipNamed(tree, RUNS_HEADING));
  }
  return { container, desktop, phone, unmount };
}

/** Each layout's run rows and the text around them, in the runs view. */
const LAYOUTS = [
  {
    what: "desktop",
    id: "runs-title",
    view: (v: ReturnType<typeof runsView>) => v.desktop.querySelector('section[aria-labelledby="runs-title"]') as HTMLElement,
    rows: (v: ReturnType<typeof runsView>) => [
      ...v.desktop.querySelectorAll('section[aria-labelledby="runs-title"] [role="row"]'),
    ].slice(1),
  },
  {
    what: "phone",
    id: "runs-title-m",
    // The phone's heading and lede sit above the live count, then the rows.
    view: (v: ReturnType<typeof runsView>) => v.phone,
    rows: (v: ReturnType<typeof runsView>) => [...v.phone.querySelectorAll('[class*="showRow"]')],
  },
] as const;

/** Every way the old list put it: the "stand" jargon and "shows" for nights. */
const jargon = (readerText: string) =>
  [/\bstands?\b/i, /\bshows?\b/i].filter((re) => re.test(readerText)).map(String);

describe("multi-night runs: a proper heading on both layouts, now the chip's view", () => {
  it.each(LAYOUTS)("$what: the view is headed \"Multi-night runs\" with the one-line lede", ({ id }) => {
    const v = runsView();
    const h = v.container.querySelector(`#${id}`);
    expect(h, `no #${id}`).not.toBeNull();
    expect(h!.tagName).toBe("H2");
    expect(text(h)).toBe(RUNS_HEADING);
    expect(RUNS_HEADING).toBe("Multi-night runs");
    const sec = v.container.querySelector(`section[aria-labelledby="${id}"]`);
    expect(sec, `no section labelled by #${id}`).not.toBeNull();
    expect(text(sec)).toContain(RUNS_LEDE);
    v.unmount();
  });

  it("the lede says what the list is, in one sentence", () => {
    expect(RUNS_LEDE).toMatch(/two or more nights at the same venue/);
    expect(RUNS_LEDE).toMatch(/one combined total/);
    expect(RUNS_LEDE).toMatch(/rather than ranked against single nights\.$/);
    expect(RUNS_LEDE.split(/[.!?](\s|$)/).filter((x) => x && x.trim()).length).toBe(1);
  });

  it.each(LAYOUTS)("$what: one row per run, each naming its artist (his too), venue, city, year and dates", (l) => {
    const v = runsView();
    const rows = l.rows(v).map((r) => text(r));
    expect(rows.length).toBe(revenueStands.length);
    expect(revenueStands.some((s) => s.artist === "Burna Boy"), "no run of his: the 'his too' half proves nothing").toBe(true);
    revenueStands.forEach((s, i) => {
      for (const part of [s.flag, s.venue, s.city, s.artist, runYear(s.dates), shortDates(s.dates)]) {
        expect(rows[i], `row ${i + 1} (${s.venue}) is missing "${part}"`).toContain(part);
      }
      // The desktop board has a Tour column; a phone night's row has none, and
      // a run takes that row's format (the owner, 4 Oct 2026).
      if (l.what === "desktop") expect(rows[i]).toContain(s.tour);
    });
    v.unmount();
  });

  it.each(LAYOUTS)("$what: each run states its nights and its combined tickets", (l) => {
    const v = runsView();
    const rows = l.rows(v);
    revenueStands.forEach((s, i) => {
      expect(text(rows[i].querySelector('[class*="runNights"]'))).toBe(`${s.shows} nights · ${shortDates(s.dates)}`);
      expect(text(rows[i].querySelector('[class*="showTickets"]'))).toBe(s.tickets);
    });
    v.unmount();
  });

  it.each(LAYOUTS)("$what: says \"nights\", never \"shows\" or \"stand\", anywhere in the view", (l) => {
    const v = runsView();
    const live = (l.what === "desktop" ? v.desktop : v.phone).querySelector('[aria-live="polite"]');
    const said = [text(v.container.querySelector(`section[aria-labelledby="${l.id}"]`)), text(live), ...l.rows(v).map((r) => text(r))].join(" ");
    expect(jargon(said)).toEqual([]);
    v.unmount();
  });

  it("negative control: the heading and phone row as they shipped at f6048e12 fail the wording check", () => {
    expect(jargon("Reported as a stand — one figure for the run")).not.toEqual([]);
    expect(
      jargon("Scotiabank Arena Toronto · I Told Them… Tour · 24–25 February 2024 · 2 shows $2.802M 29,579 over 2 nights"),
    ).not.toEqual([]);
  });

  it("the source notes say \"multi-night runs\", not \"stands\"; RUNS_LEDE is said once a layout, in the chip's view only", () => {
    const page = textOf(renderToStaticMarkup(<RevenuePage />));
    expect(page).not.toMatch(/Stands reported only as one combined total/);
    expect(page).not.toMatch(/Reported as a stand/);
    // Since 4 Oct 2026 (debug pass 3 Oct, bo-06) the source notes no longer
    // repeat the runs sentence; the runs' own lede carries it — since the
    // chip (4 Oct), only while the chip is on, once on each layout.
    expect(page.match(/Multi-night runs reported only as one combined total/g)).toBeNull();
    expect(page.split(RUNS_LEDE).length - 1).toBe(0);
    const v = runsView();
    expect(text(v.container).split(RUNS_LEDE).length - 1).toBe(2);
    v.unmount();
  });

  it.each(LAYOUTS)("$what: his runs keep the gold gross; another artist's does not", (l) => {
    const v = runsView();
    const rows = l.rows(v);
    expect(revenueStands.some((s) => s.artist !== "Burna Boy"), "every run is his: the 'not gold' half proves nothing").toBe(true);
    revenueStands.forEach((s, i) => {
      const gold = rows[i].querySelectorAll('[class*="grossHis"]').length === 1;
      expect(gold, `${l.what} row ${i + 1} (${s.artist})`).toBe(s.artist === "Burna Boy");
    });
    v.unmount();
  });
});
