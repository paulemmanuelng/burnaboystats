import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours/festivals",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _p, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import FestivalsPage from "../app/records/tours/festivals/page";
import { tours, festivals, otherShows, concerts } from "../app/data/tours";
import { showDateIso } from "../app/lib/tourDeepLink";
import { rowsRepeatingATourDate, tourMapTotals } from "../app/lib/tourMapData";
import { onThisDayEvents } from "../app/lib/onThisDay";
import { GET as toursApi } from "../app/api/v1/tours/route";

/**
 * Owner question #32 (live debug 15 Oct 2026, festivals-03; Paul: "yes to
 * all"): SummerJam 2025 (Cologne, 6 July 2025) was an I Told Them… Tour date
 * at a festival, listed on /records/tours but not on Festivals & Shows, which
 * had only the 2024 edition. It is listed there too, sourced as the tour row
 * is, and marked as that tour's date so no count takes the night twice.
 */

const dom = (html: string) => new DOMParser().parseFromString(html, "text/html");
const text = (e: Element | null) => (e?.textContent ?? "").replace(/\s+/g, " ").trim();
const SJ = festivals.find((f) => f.name === "SummerJam Festival" && f.year === "2025");
const ITT = tours.find((t) => t.name === "I Told Them… Tour")!;

describe("#32: SummerJam 2025 is on Festivals & Shows as well as the Tours page", () => {
  it("the row: dated, placed with the 2024 edition, and naming the tour it was a date of", () => {
    expect(SJ).toBeDefined();
    expect(SJ).toMatchObject({ date: "2025-07-06", location: "Fühlinger See, Cologne, Germany", tour: ITT.name });
    expect(SJ!.note).toContain("6 July 2025");
    expect(SJ!.note).toContain("I Told Them… Tour date");
  });

  it("the tour still holds the night: one I Told Them… date on the same day, at SummerJam", () => {
    const same = (ITT.dates ?? []).filter((d) => showDateIso(d.date) === SJ!.date);
    expect(same.map((d) => `${d.venue} · ${d.city}`)).toEqual(["SummerJam Festival · Cologne"]);
  });

  it("both layouts of the festivals page list it with the festivals headlined", () => {
    const d = dom(renderToStaticMarkup(<FestivalsPage />));
    const desk = [...d.querySelectorAll("section#headlined [class*='_row_']")].map(text);
    expect(desk.filter((r) => r.startsWith("2025") && r.includes("SummerJam Festival"))).toHaveLength(1);
    expect(desk.filter((r) => r.startsWith("2024") && r.includes("SummerJam Festival"))).toHaveLength(1);
    expect(text(d.getElementById("m-headlined")).match(/SummerJam Festival/g)).toHaveLength(2);
  });

  it("the night counts once on the map (as the tour date) and once on On This Day", () => {
    expect(rowsRepeatingATourDate).toEqual(["SummerJam Festival"]);
    expect(tourMapTotals.appearances).toBe(festivals.length + otherShows.length + concerts.length - 1);
    const day = onThisDayEvents.filter((e) => e.date === "2025-07-06" && e.kind === "show");
    expect(day.map((e) => [e.id, e.source.data])).toEqual([["show:2025-07-06:summerjam-festival", "tours"]]);
  });

  it("the open API names the tour on the row, so a consumer can count it once", async () => {
    const api = JSON.parse(await (await toursApi()).text());
    const rows = api.data.festivals.filter((f: { name: string }) => f.name === "SummerJam Festival");
    expect(rows.map((f: { year: string; tour: string | null }) => [f.year, f.tour])).toEqual([
      ["2025", ITT.name],
      ["2024", null],
    ]);
    expect(api.description).toContain("count it once");
  });
});

describe("#32 negative control: the lists main shipped", () => {
  it("origin/main a9574c64 listed only the 2024 SummerJam on Festivals & Shows", () => {
    // festivals, otherShows and concerts on main: every SummerJam row, by year.
    const SHIPPED = ["SummerJam Festival 2024"];
    const now = [...festivals, ...otherShows, ...concerts].filter((f) => f.name === "SummerJam Festival").map((f) => `${f.name} ${f.year}`);
    expect(now).not.toEqual(SHIPPED);
    expect(now).toEqual(["SummerJam Festival 2025", "SummerJam Festival 2024"]);
    // and on main no row repeated a tour date
    expect(rowsRepeatingATourDate).not.toEqual([]);
  });
});
