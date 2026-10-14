import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

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

import ToursPage from "../../app/records/tours/page";
import { upcomingShows } from "../../app/data/tours";
import { splitAnnounced, splitPlayed, ticketsShow, yearOnly, ANNOUNCED_TAG, PLAYED_TAG } from "../../app/lib/announcedShows";
import { rules } from "../fixtures/cssRules";

/**
 * J3-12 (design review 8 Oct 2026, fixes 56, 66, 73): the desktop tours hero's
 * panel becomes the Announced list. Its label counts the shows still to come
 * ("Announced · 3"); a show whose day has gone by sits in a "Played" sub-box
 * after it and is never counted; the list is printed there once (the copy
 * above the tours is gone); dates are ink and a bare year is muted; at 1024
 * the panel stays beside the lede. Walked across the shows' own days, from
 * the real tours.ts.
 */

const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

function deskOn(iso: string) {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(`${iso}T12:00:00Z`));
  const doc = parse(renderToStaticMarkup(ToursPage()));
  vi.useRealTimers();
  return doc.querySelector('[class*="_desktopOnly_"]')!;
}

/** The panel, read: its groups (tag, venues), and any announced list outside it. */
function readPanel(desk: Element) {
  const panel = desk.querySelector('[class*="_ticketPanel_"]');
  const groups = [...(panel?.querySelectorAll("[data-announced]") ?? [])].map((g) => ({
    kind: g.getAttribute("data-announced"),
    tag: clean(g.querySelector('[class*="_upcomingTag_"]')?.textContent),
    venues: [...g.querySelectorAll('[class*="_upcomingVenue_"]')].map((v) => v.firstChild?.textContent ?? ""),
  }));
  const outside = [...desk.querySelectorAll("[data-announced]")].filter((g) => !panel?.contains(g)).length;
  return { panel, groups, outside };
}

const DAYS = ["2026-10-08", "2026-10-26", "2026-10-30", "2028-01-01"];

describe.each(DAYS)("on %s", (day) => {
  const desk = deskOn(day);
  const { announced, played } = splitAnnounced(upcomingShows, day);
  const { awaiting, noReport } = splitPlayed(played);
  const { panel, groups, outside } = readPanel(desk);

  it("the panel is in the hero, and no announced list is printed outside it", () => {
    expect(panel).not.toBeNull();
    expect(panel!.closest("section")!.querySelector("h1")).not.toBeNull();
    expect(outside).toBe(0);
  });

  it("the label counts the announced shows only; played ones sit in Played sub-boxes, never in the list", () => {
    const want = [
      ...(announced.length ? [{ kind: "announced", tag: `${ANNOUNCED_TAG} · ${announced.length}`, venues: announced.map((u) => u.venue) }] : []),
      ...(awaiting.length ? [{ kind: "played", tag: PLAYED_TAG, venues: awaiting.map((u) => u.venue) }] : []),
      ...(noReport.length ? [{ kind: "played", tag: PLAYED_TAG, venues: noReport.map((u) => u.venue) }] : []),
    ];
    expect(groups).toEqual(want);
  });

  it("dated `when`s are ink, a bare year muted", () => {
    for (const w of panel!.querySelectorAll('[class*="_upcomingWhen_"]')) {
      expect(/_whenYear_/.test(w.className), w.textContent!).toBe(yearOnly(w.textContent!));
    }
  });
});

describe("the words and colours", () => {
  it("on 8 Oct 2026 the label reads 'Announced · 3' and London Stadium's '2027' is the muted one", () => {
    const { groups, panel } = readPanel(deskOn("2026-10-08"));
    expect(groups[0].tag).toBe(`${ANNOUNCED_TAG} · ${upcomingShows.length}`);
    const muted = [...panel!.querySelectorAll('[class*="_whenYear_"]')].map((w) => w.textContent);
    expect(muted).toEqual(upcomingShows.filter((u) => yearOnly(u.when)).map((u) => u.when));
    expect(muted).toContain("2027");
  });

  it("the CSS: dates --text, a year --text-muted, the panel opened by a 2px --rule line", () => {
    const css = readFileSync(join(process.cwd(), "app/records/tours/tours.module.css"), "utf8");
    const top = (sel: string) => rules(css).filter((r) => r.media === null && r.selector === sel).map((r) => r.body).join(";");
    expect(top(".upcomingWhen")).toMatch(/color:\s*var\(--text\)/);
    expect(top(".whenYear")).toMatch(/color:\s*var\(--text-muted\)/);
    expect(top(".ticketPanel")).toMatch(/border-top:\s*2px solid var\(--rule\)/);
    const phone = readFileSync(join(process.cwd(), "app/components/mobileTours.module.css"), "utf8");
    expect(rules(phone).find((r) => r.selector === ".whenYear.whenYear")!.body).toMatch(/color:\s*var\(--text-muted\)/);
  });

  it("at 901–1239 the panel stays beside the lede (fix 73)", () => {
    const css = readFileSync(join(process.cwd(), "app/records/tours/tours.module.css"), "utf8");
    const band = rules(css).filter((r) => r.media === "@media (max-width: 1239px)" && r.selector === ".heroGrid");
    expect(band.map((r) => r.body).join(";")).toMatch(/grid-template-columns:\s*minmax\(0, 1fr\) 360px/);
  });

  it("no show is on sale today, so no show prints a Tickets ↗ of its own", () => {
    expect(upcomingShows.filter((u) => u.onSale)).toEqual([]);
    expect(ticketsShow(upcomingShows)).toBeNull();
    const { panel } = readPanel(deskOn("2026-10-08"));
    expect([...panel!.querySelectorAll("[data-announced] a")]).toEqual([]);
  });
});

describe("negative control: main's hero and its list below it", () => {
  // records/tours/page.tsx on main (f20b5347), rendered: the panel was a
  // generic tickets box, and the shows were listed under the hero, above the
  // tours, in `{shownGroups.map((g) => ( <div key={g.key} className={styles.upcoming} data-announced=…>`.
  const SHIPPED = `<div class="_desktopOnly_x"><section class="_band_x"><div class="_heroGrid_x"><div><h1 class="_h1_x">Tours</h1></div><div class="_ticketPanel_x"><div class="_kicker_x">Upcoming dates &amp; tickets</div><div class="_ticketBtns_x"><a class="btn btnPrimary" href="https://www.ticketmaster.com/burna-boy-tickets/artist/2486272">Tickets · Ticketmaster ↗</a><a class="btn btnSecondary" href="https://www.onaspaceship.com/tour">Official tour site ↗</a></div></div></div></section><section class="_band_x"><div class="_upcoming_x" data-announced="announced"><div class="_upcomingHead_x"><span class="_upcomingTag_x">Announced</span><span class="_upcomingNote_x">Not yet played — no gross, no attendance</span></div></div></section></div>`;

  it("reads as a panel with no list, and a list outside the hero", () => {
    const { groups, outside } = readPanel(parse(SHIPPED).querySelector('[class*="_desktopOnly_"]')!);
    expect(groups).toEqual([]);
    expect(outside).toBe(1);
  });
});
