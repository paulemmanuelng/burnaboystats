import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import RecordsPage from "../app/records/page";
import desk from "../app/records/records.module.css";
import phone from "../app/components/mobileRecords.module.css";
import { onThisDayDays } from "../app/lib/onThisDay";
import { revenueShows } from "../app/data/tourRevenue";

/**
 * recordsCardDescNoRepeatedCount (Paul, 15 Oct 2026: "yes to Job 4", call 2;
 * Job 4 C-8). On the /records hub, the On This Day and Highest-Grossing
 * Shows cards printed their count twice: in the figure slot ("162 / dates",
 * "82 / shows ranked") and again in the description ("162 dates in the
 * calendar…", "… — 82 shows"). The descriptions drop the count, on both
 * layouts; the figure slot, derived from the data, keeps it. No other card
 * changes.
 */

const html = renderToStaticMarkup(<RecordsPage />);
const doc = document.createElement("div");
doc.innerHTML = html;

const LAYOUTS = [
  { name: "desktop", tree: doc.querySelector(`.${desk.desktopOnly}`)!, card: desk.card, desc: desk.cardDesc, figure: desk.cardFigure, unit: desk.cardUnit },
  { name: "phone", tree: doc.querySelector(`.${phone.screen}`)!, card: phone.bookRow, desc: phone.bookDesc, figure: phone.bookFigure, unit: phone.bookUnit },
] as const;

const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();
/** Does `line` print `n`, in either way the site writes a count ("1234" or "1,234")? */
const prints = (line: string, n: number) => new RegExp(`(^|[^\\d,])(${n}|${n.toLocaleString("en-US")})(?![\\d,])`).test(line);

const CARDS = [
  { href: "/on-this-day", n: onThisDayDays.length, unit: "dates", desc: "Dates in the calendar, each with a milestone on it" },
  { href: "/records/tours/revenue", n: revenueShows.length, unit: "shows ranked", desc: "Every verified single-show gross by an African artist" },
] as const;

describe.each(LAYOUTS)("recordsCardDescNoRepeatedCount · $name", (L) => {
  const cardOf = (href: string) => [...L.tree.querySelectorAll(`a.${L.card}`)].find((a) => a.getAttribute("href") === href);

  it.each(CARDS)("$href: the figure slot keeps the count; the description does not repeat it", ({ href, n, unit, desc }) => {
    const card = cardOf(href);
    expect(card, href).toBeTruthy();
    expect(text(card!.querySelector(`.${L.figure}`))).toBe(n.toLocaleString("en-US"));
    expect(text(card!.querySelector(`.${L.unit}`)).toLowerCase()).toBe(unit);
    const line = text(card!.querySelector(`.${L.desc}`));
    expect(line).toBe(desc);
    expect(prints(line, n), `${href} desc "${line}"`).toBe(false);
  });
});

describe("recordsCardDescNoRepeatedCount · negative control", () => {
  it("main's two descriptions print the card's own figure", () => {
    // app/lib/recordBooks.ts on 51ad46b1, lines 36 and 39.
    const shipped = [
      { n: onThisDayDays.length, line: `${onThisDayDays.length} dates in the calendar, each with a milestone on it` },
      { n: revenueShows.length, line: `Every verified single-show gross by an African artist — ${revenueShows.length} shows` },
    ];
    for (const s of shipped) expect(prints(s.line, s.n), s.line).toBe(true);
    // and the check reads a count that is not there as absent
    expect(prints("Every verified single-show gross by an African artist", revenueShows.length)).toBe(false);
    expect(prints("1,620 dates", 1620)).toBe(true);
    expect(prints("11620 dates", 1620)).toBe(false);
  });
});
