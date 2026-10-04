import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

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
import { revenueShows } from "../app/data/tourRevenue";
import { text, trees } from "./fixtures/phoneTrees";

/**
 * The phone board on /records/tours/revenue names the artist on EVERY row, his
 * included, in the same place and format as everyone else's:
 * "<artist> · <city> · <year>". The owner, 3 Oct 2026, with a phone screenshot
 * of the board: his name should appear in the list of his shows, placed just
 * as the other artists' are. Until then his rows read "<city> · <tour> ·
 * <year>" ("London · I Told Them… Tour · 2024") while Fally Ipupa's read
 * "Fally Ipupa · Paris · 2023" — the one row with no name was the page's own
 * subject.
 */

const { phone } = trees(renderToStaticMarkup(<RevenuePage />));

/** The board's rows: each holds a rank, a venue line and a meta line. */
const boardRows = () =>
  [...phone!.querySelectorAll("div")].filter((el) => {
    const kids = [...el.children];
    return kids.length === 3 && /\brank\b|_rank_|__rank/.test(kids[0].className) && /venue/.test(el.innerHTML);
  });
/** A row's meta line: the second line under its venue. */
const metaOf = (row: Element) => text(row.children[1].children[1]);

/** The rule: the meta line opens with the artist's name, then " · ". */
const startsWithArtist = (meta: string, artist: string) => meta.startsWith(`${artist} · `);

describe("phone board: every row names its artist first, his too", () => {
  it("renders one row per show", () => {
    expect(phone).toBeDefined();
    expect(boardRows().length).toBe(revenueShows.length);
  });

  it("every row's meta is exactly “<artist> · <city> · <year>”", () => {
    const rows = boardRows();
    const wrong = revenueShows.flatMap((s, i) => {
      const meta = metaOf(rows[i]);
      return meta === `${s.artist} · ${s.city} · ${s.year}` && startsWithArtist(meta, s.artist)
        ? []
        : [`#${i + 1} ${s.artist}: "${meta}"`];
    });
    expect(wrong).toEqual([]);
  });

  it("his rows are on the board and read like everyone else's", () => {
    const rows = boardRows();
    const his = revenueShows.flatMap((s, i) => (s.artist === "Burna Boy" ? [metaOf(rows[i])] : []));
    expect(his.length).toBeGreaterThan(0);
    for (const m of his) expect(startsWithArtist(m, "Burna Boy")).toBe(true);
    expect(his).toContain("Burna Boy · London · 2024");
  });

  it("negative control: the row the site shipped fails the rule", () => {
    // His London Stadium night as the phone board printed it before the fix.
    expect(startsWithArtist("London · I Told Them… Tour · 2024", "Burna Boy")).toBe(false);
    // …and another artist's row as shipped passes, so the rule is not vacuous.
    expect(startsWithArtist("Fally Ipupa · Paris · 2023", "Fally Ipupa")).toBe(true);
  });
});
