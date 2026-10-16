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
import ToursPage from "../app/records/tours/page";
import { festivals, otherShows, concerts } from "../app/data/tours";
import { byYearDesc } from "../app/lib/festivalOrder";
import { festivalsCard } from "../app/lib/ogTourCards";
import { GET as toursApi } from "../app/api/v1/tours/route";

/**
 * Owner question #31 (live debug 15 Oct 2026, festivals-02; Paul: "yes to
 * all"): North Sea Jazz 2026 was filed under "Festivals headlined", but its
 * own note only ever called him "a marquee name on the Saturday … bill …
 * alongside headliners", and no source says he headlined. It moves to the
 * other appearances; every count is read off the lists.
 */

const NAME = "North Sea Jazz Festival";
const dom = (html: string) => new DOMParser().parseFromString(html, "text/html");
const text = (e: Element | null) => (e?.textContent ?? "").replace(/\s+/g, " ").trim();
const names = (s: Element | null) => [...(s?.querySelectorAll("h3") ?? [])].map(text);

describe("#31: North Sea Jazz 2026 is one of the other appearances", () => {
  it("in the data: out of `festivals`, in `otherShows`, note and date unchanged", () => {
    expect(festivals.map((f) => f.name)).not.toContain(NAME);
    const row = otherShows.find((f) => f.name === NAME)!;
    expect(row).toMatchObject({ year: "2026", date: "2026-07-11", location: "Rotterdam, Netherlands" });
    expect(row.note).toMatch(/^A marquee name on the Saturday \(11 July\) bill/);
  });

  it("the desktop page lists it under the other festivals & shows, and the counts follow the lists", () => {
    const d = dom(renderToStaticMarkup(<FestivalsPage />));
    expect(names(d.querySelector("section#headlined")).some((n) => n.startsWith(NAME))).toBe(false);
    expect(names(d.querySelector("section#others")).some((n) => n.startsWith(NAME))).toBe(true);
    const cells = [...d.querySelectorAll('a[href^="#"][class*="countCell"]')].map((a) => [a.getAttribute("href"), text(a.querySelector('[class*="countValue"]'))]);
    expect(cells).toEqual([
      ["#headlined", String(festivals.length)],
      ["#concerts", String(concerts.length)],
      ["#others", String(otherShows.length)],
    ]);
    expect(text(d.querySelector("section#headlined [class*='groupCount']"))).toBe(`${festivals.length} sets`);
    expect(text(d.querySelector("section#others [class*='groupCount']"))).toBe(`${otherShows.length} appearances`);
  });

  it("2026's headline sets are the three that topped a bill, newest first", () => {
    expect(byYearDesc(festivals).filter((f) => f.year === "2026").map((f) => f.name)).toEqual(["Luna Loca launch", "Reggae Land", "Afro Nation"]);
  });

  it("the phone page, the Tours card, the preview card and the API read the same lists", async () => {
    const phone = dom(renderToStaticMarkup(<FestivalsPage />));
    const headlinedPhone = phone.getElementById("m-headlined");
    expect(headlinedPhone && text(headlinedPhone).includes(NAME)).toBe(false);
    expect(text(phone.getElementById("m-others"))).toContain(NAME);
    const tours = text(dom(renderToStaticMarkup(ToursPage())).body);
    expect(tours).toContain(`${festivals.length + concerts.length + otherShows.length} documented appearances · ${festivals.length} headlined`);
    expect(festivalsCard().figure).toBe(String(festivals.length));
    const api = JSON.parse(await (await toursApi()).text());
    expect(api.data.totals.festivals).toBe(festivals.length);
    expect(api.data.otherShows.map((f: { name: string }) => f.name)).toContain(NAME);
  });
});

describe("#31 negative control: the lists main shipped", () => {
  it("origin/main a9574c64 counted it among 2026's headline sets", () => {
    // byYearDesc(festivals) on main, its 2026 rows by name.
    const SHIPPED_2026 = ["Luna Loca launch", "Reggae Land", NAME, "Afro Nation"];
    expect(SHIPPED_2026).toContain(NAME);
    expect(byYearDesc(festivals).filter((f) => f.year === "2026").map((f) => f.name)).not.toEqual(SHIPPED_2026);
    // and the note it was filed under "headlined" with names the others as the headliners
    const SHIPPED_NOTE =
      "A marquee name on the Saturday (11 July) bill of the festival's landmark 50th edition at Rotterdam Ahoy, alongside headliners including John Legend & The Roots, Diana Krall, Charlie Puth and Thundercat.";
    expect(SHIPPED_NOTE).not.toMatch(/\bheadlined\b|\bheadliner of\b|topped/i);
  });
});
