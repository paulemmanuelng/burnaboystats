import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/tours",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import ToursExplorer from "../../app/components/ToursExplorer";
import MobileTours from "../../app/components/MobileTours";
import styles from "../../app/records/tours/tours.module.css";
import phoneStyles from "../../app/components/mobileTours.module.css";
import { tours } from "../../app/data/tours";
import { revenueShows, revenueStands } from "../../app/data/tourRevenue";
import { tourBoxOffice } from "../../app/lib/tourBoxOffice";
import { shortGross } from "../../app/lib/grossLabel";
import { standDays } from "../../app/lib/multiNightRuns";
import { RUNS_HREF } from "../../app/lib/showsDeepLink";
import { BOX_OFFICE_NOTE, NO_NIGHT_REPORT } from "../../app/lib/tourNights";
import { CAPACITIES_SENTENCE, tourDateNote } from "../../app/lib/tourMeta";
import { rules } from "../fixtures/cssRules";

/**
 * J3-11 (design review 8 Oct 2026; the response's own test name, "a run's
 * figure renders once", with fixes 56, 59, 60 and 73). The I Told Them… Tour
 * table carries two runs, Scotiabank Arena (24–25 Feb 2024) and Bell Centre
 * (28–29 Feb 2024), each reported by the body as one figure for two nights.
 * The table keeps one row per night and prints each run's figures once, in
 * cells spanning its nights, bracketed by a 2px --rule line, linking to the
 * runs view — never to a rank, since the board never ranks a run.
 */

const box = tourBoxOffice(tours);
const ITT = "I Told Them… Tour";
const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const runsOf = revenueStands.filter((r) => r.artist === "Burna Boy" && r.tour === ITT);
const count = (hay: string, needle: string) => hay.split(needle).length - 1;
const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ").trim();

const desk = () => render(<ToursExplorer tours={tours} boxOffice={box} />);
const phone = () =>
  render(
    <MobileTours
      tours={tours}
      topGross="$30.46M"
      topTourName="I Told Them…"
      countryCount={40}
      regionCount={6}
      biggestNight="60,000"
      biggestVenue="London Stadium"
      yearSpan="2018–2026"
      hisShowCount={20}
      revenueShowCount={60}
      appearanceCount={50}
      headlinedCount={30}
      today="2026-10-14"
      boxOffice={box}
    />,
  );

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  window.history.replaceState(null, "", "/");
});

/** The desktop table's rows for one venue, in order. */
const rowsAt = (root: HTMLElement, venue: string) =>
  [...root.querySelectorAll("tbody tr")].filter((tr) => tr.querySelector(`.${styles.dVenue}`)?.textContent === venue);

describe("desktop: a run's figures render once, across its nights", () => {
  it("the data has the two runs the review drew", () => {
    expect(runsOf.map((r) => r.venue)).toEqual(["Scotiabank Arena", "Bell Centre"]);
  });

  it.each(runsOf.map((r) => [r.venue, r] as const))("%s: tickets and gross once, spanning both night rows", (venue, r) => {
    const { container } = desk();
    const text = container.textContent ?? "";
    expect(count(text, r.tickets), r.tickets).toBe(1);
    expect(count(text, usd(r.revenue)), usd(r.revenue)).toBe(1);
    const rows = rowsAt(container, venue);
    expect(rows.length).toBe(r.shows);
    expect(rows.map((tr) => tr.getAttribute("data-show"))).toEqual(standDays(r.dates));
    const [lead, ...rest] = rows;
    const tickets = lead.querySelector(`.${styles.dNum}`)!;
    expect(tickets.textContent).toBe(r.tickets);
    expect(tickets.getAttribute("rowspan")).toBe(String(r.shows));
    expect(tickets.classList.contains(styles.runSpan)).toBe(true);
    expect(lead.querySelector(`.${styles.dGross}`)!.getAttribute("rowspan")).toBe(String(r.shows));
    for (const tr of rest) expect(tr.querySelector(`.${styles.dNum}, .${styles.dGross}, .${styles.dBoard}`)).toBeNull();
    const link = lead.querySelector(`.${styles.dBoard} a`)!;
    expect(clean(link.textContent)).toBe(`Run · ${r.shows} nights ↗`);
    expect(link.getAttribute("href")).toBe(RUNS_HREF);
  });

  it("no run's Board cell carries a rank", () => {
    const { container } = desk();
    for (const r of runsOf) for (const tr of rowsAt(container, r.venue)) expect(tr.textContent).not.toMatch(/No\. \d/);
  });

  it("the run bracket is a 2px --rule line, never gold (fix 56)", () => {
    const css = readFileSync(join(process.cwd(), "app/records/tours/tours.module.css"), "utf8");
    const body = rules(css).find((x) => x.media === null && x.selector === ".runSpan")!.body;
    expect(body).toMatch(/border-left:\s*2px solid var\(--rule\)/);
    expect(body).not.toMatch(/--gold/);
  });

  it("a single night reads its own figures and 'No. {n} ↗'; a night with no report a dash, never zero, and no Board link (fixes 59, 69)", () => {
    const { container } = desk();
    const nights = box[ITT];
    for (const venue of ["BMO Stadium", "TD Garden", "Mercedes-Benz Arena"]) {
      const [tr] = rowsAt(container, venue);
      const n = nights[tr.getAttribute("data-show")!];
      expect(n.kind, venue).toBe("night");
      if (n.kind !== "night") continue;
      expect(tr.querySelector(`.${styles.dNum}`)!.textContent).toBe(n.tickets);
      expect(tr.querySelector(`.${styles.dGross}`)!.textContent).toBe(n.grossFull);
      expect(clean(tr.querySelector(`.${styles.dBoard} a`)!.textContent)).toBe(`No. ${n.rank} ↗`);
      expect(tr.querySelector(`.${styles.dBoard} a`)!.getAttribute("href")).toBe(`/records/tours/revenue#k-night-${n.rank}`);
    }
    // Mercedes-Benz Arena: on the board, its capacity not stated (fix 59).
    expect(clean(rowsAt(container, "Mercedes-Benz Arena")[0].querySelector(`.${styles.dCap}`)!.textContent)).toBe("—Capacity not stated");
    // Waldbühne: no report — a dash in Tickets and Gross, an empty Board cell, its capacity.
    const [wald] = rowsAt(container, "Waldbühne");
    const cap = tours.find((t) => t.name === ITT)!.dates!.find((d) => d.venue === "Waldbühne")!.cap!;
    expect(clean(wald.querySelector(`.${styles.dNum}`)!.textContent)).toBe(`—${NO_NIGHT_REPORT}`);
    expect(clean(wald.querySelector(`.${styles.dGross}`)!.textContent)).toBe(`—${NO_NIGHT_REPORT}`);
    expect(wald.querySelector(`.${styles.dBoard}`)!.childNodes.length).toBe(0);
    expect(wald.querySelector(`.${styles.dCap}`)!.textContent).toBe(cap.toLocaleString("en-US"));
    expect(wald.textContent).not.toMatch(/\b0\b/);
  });

  it("the head: Date, Venue, City, Country, City (merged), Tickets, Gross, Board, Capacity", () => {
    const { container } = desk();
    expect([...container.querySelectorAll("thead th")].map((th) => th.textContent)).toEqual([
      "Date", "Venue", "City", "Country", "City", "Tickets", "Gross", "Board", "Capacity",
    ]);
  });

  it("at 901–1239 City and Country merge into one column and capacity drops; nowhere else (fix 73)", () => {
    const css = readFileSync(join(process.cwd(), "app/records/tours/tours.module.css"), "utf8");
    const band = rules(css).filter((x) => x.media === "@media (min-width: 901px) and (max-width: 1239px)");
    const hidden = band.filter((x) => /display:\s*none/.test(x.body)).flatMap((x) => x.selector.split(",").map((s) => s.trim()));
    const shown = band.filter((x) => /display:\s*table-cell/.test(x.body)).flatMap((x) => x.selector.split(",").map((s) => s.trim()));
    expect(hidden).toEqual(expect.arrayContaining([".nightTable .colCity", ".nightTable .colCountry", ".nightTable .colCap", ".nightTable .dCity", ".nightTable .dCountry", ".nightTable .dCap"]));
    expect(shown).toEqual(expect.arrayContaining([".nightTable .colPlace", ".nightTable .dPlace"]));
    // Out of that band the merged cell is never shown.
    const top = rules(css).filter((x) => x.media === null && x.selector.split(",").map((s) => s.trim()).includes(".dPlace"));
    expect(top.some((x) => /display:\s*none/.test(x.body))).toBe(true);
    // And every hidden rule is scoped to the board table, so the five columns never move.
    expect(hidden.every((s) => s.startsWith(".nightTable "))).toBe(true);
  });

  it("a tour with no board night keeps today's five columns (fix 73)", () => {
    const { container } = desk();
    fireEvent.click(screen.getByRole("button", { name: /African Giant Tour/ }));
    expect([...container.querySelectorAll("thead th")].map((th) => th.textContent)).toEqual(["Date", "Venue", "City", "Country", "Capacity"]);
    expect(container.querySelector(`.${styles.nightTable}`)).toBeNull();
  });
});

describe("phone: a run is one row for its nights", () => {
  it.each(runsOf.map((r) => [r.venue, r.shows, r] as const))("%s: one whole-row link, '… · %s nights · Run →', both nights listed", (venue, _shows, r) => {
    window.history.replaceState(null, "", `/records/tours#tour=i-told-them-tour&date=${standDays(r.dates)[0]}`);
    const { container } = phone();
    const rows = [...container.querySelectorAll(`.${phoneStyles.dateRow}`)].filter((el) => el.querySelector(`.${phoneStyles.dateVenue}`)?.textContent === venue);
    expect(rows.length).toBe(1);
    const [row] = rows;
    expect(row.tagName).toBe("A");
    expect(row.getAttribute("href")).toBe(RUNS_HREF);
    expect(row.getAttribute("data-show")).toBe(standDays(r.dates)[0]);
    expect(row.getAttribute("data-show-nights")).toBe(standDays(r.dates).join(" "));
    expect(clean(row.querySelector(`.${phoneStyles.dateFigs}`)!.textContent)).toBe(`${r.tickets} tickets · ${shortGross(r.revenue)} · ${r.shows} nights · Run`);
    expect(row.querySelector(`.${phoneStyles.roadArrow}`)!.textContent).toBe("→");
  });

  it("a deep link to the run's second night lands on that one row", () => {
    const calls: Element[] = [];
    const proto = Element.prototype as unknown as { scrollIntoView?: () => void };
    const had = proto.scrollIntoView;
    proto.scrollIntoView = function (this: Element) {
      calls.push(this);
    };
    vi.spyOn(Element.prototype, "getClientRects").mockImplementation(() => [{}] as unknown as DOMRectList);
    try {
      window.history.replaceState(null, "", "/records/tours#tour=i-told-them-tour&date=2024-02-25");
      phone();
      expect(calls.length).toBe(1);
      expect(calls[0].getAttribute("data-show-nights")).toBe("2024-02-24 2024-02-25");
    } finally {
      proto.scrollIntoView = had;
    }
  });
});

describe("negative controls", () => {
  it("main's five-column table (head ending Capacity) prints no run figure at all", () => {
    // ToursExplorer without the board's figures is main's table, verbatim:
    // the five heads ending `<th className={styles.colCap}>Capacity</th>`.
    const { container } = render(<ToursExplorer tours={tours} />);
    expect([...container.querySelectorAll("thead th")].map((th) => th.textContent)).toEqual(["Date", "Venue", "City", "Country", "Capacity"]);
    const [scotia] = runsOf;
    expect(count(container.textContent ?? "", scotia.tickets)).toBe(0);
  });

  it("the canvas's Bell Centre row (Scotiabank's figures) fails the derived ones", () => {
    // Ledgers.dc.html §7: trow(t, 'Feb 28, 2024', 'Bell Centre', …, '29,579', '$2,800,000', 'Run · 2 nights ↗', …)
    const bell = runsOf.find((r) => r.venue === "Bell Centre")!;
    expect(["29,579", "$2,800,000"]).not.toEqual([bell.tickets, usd(bell.revenue)]);
  });

  it("a run given a board rank, as J3-11 first drew it, fails the guard", () => {
    // The change list's first draft gave the Scotiabank run the rank its
    // combined $2,801,928 would take among single nights ("No. 4" on 8 Oct).
    const [scotia] = runsOf;
    const wouldBe = 1 + revenueShows.filter((s) => s.revenue > scotia.revenue).length;
    const drawnRow = `<table><tbody><tr><td>Feb 24, 2024</td><td>Scotiabank Arena</td><td>${scotia.tickets}</td><td>${usd(scotia.revenue)}</td><td>No. ${wouldBe} ↗</td></tr></tbody></table>`;
    const tr = new DOMParser().parseFromString(drawnRow, "text/html").querySelector("tr")!;
    expect(tr.textContent).toMatch(/No\. \d/);
  });
});

describe("the box-office table's heads and note (review, 14 Oct 2026)", () => {
  const TOURS_CSS = readFileSync(join(process.cwd(), "app/records/tours/tours.module.css"), "utf8");
  const GLOBALS_CSS = readFileSync(join(process.cwd(), "app/globals.css"), "utf8");
  /** [ids, classes, elements] for the simple selectors these sheets use. */
  const specificity = (sel: string): [number, number, number] => {
    const s = sel.replace(/::[\w-]+/g, " ");
    return [
      (s.match(/#[\w-]+/g) ?? []).length,
      (s.match(/\.[\w-]+|\[[^\]]*\]|:(?!:)[\w-]+/g) ?? []).length,
      (s.match(/(?:^|[\s>+~])[a-z][\w-]*/gi) ?? []).length,
    ];
  };
  const beats = (a: number[], b: number[]) => a[0] - b[0] || a[1] - b[1] || a[2] - b[2];
  /** The text-align a desktop `th` with `cls` gets: .tableBase th (globals, first) against the module's rules naming it. */
  const headAlign = (moduleCss: string, cls: string) => {
    const candidates = [
      ...rules(GLOBALS_CSS).filter((r) => r.media === null && r.selector.split(",").map((s) => s.trim()).includes(".tableBase th")),
      ...rules(moduleCss).filter((r) => r.media === null),
    ]
      .flatMap((r) => r.selector.split(",").map((s) => ({ sel: s.trim(), body: r.body })))
      .filter(({ sel, body }) => (sel === ".tableBase th" || new RegExp(`\\.${cls}$`).test(sel)) && /text-align\s*:/.test(body));
    let win: { sel: string; body: string } | undefined;
    for (const c of candidates) if (!win || beats(specificity(c.sel), specificity(win.sel)) >= 0) win = c;
    return win?.body.match(/text-align\s*:\s*([\w-]+)/)?.[1];
  };

  it.each(["colNightTickets", "colNightGross", "colCap"])("the %s head sits right, over its right-aligned figures", (cls) => {
    expect(headAlign(TOURS_CSS, cls)).toBe("right");
  });

  it("the capacities sentence is a span of its own, hidden with the Capacity column at 901–1239 only", () => {
    const { container } = desk();
    const note = container.querySelector(`.${styles.nightTable} + .${styles.dateNote}`)!;
    expect(note).not.toBeNull();
    const cap = note.querySelector(`.${styles.capNote}`)!;
    expect(cap.textContent).toBe(CAPACITIES_SENTENCE);
    // The whole note still reads as before: the tour's date note, then the board's.
    const itt = tours.find((t) => t.name === ITT)!;
    expect(clean(note.textContent)).toBe(clean(`${tourDateNote(itt)} ${BOX_OFFICE_NOTE}`));
    const hidden = rules(TOURS_CSS).filter((r) => /display:\s*none/.test(r.body) && r.selector.includes(".capNote"));
    expect(hidden.map((r) => [r.media, r.selector])).toEqual([["@media (min-width: 901px) and (max-width: 1239px)", ".nightTable + .dateNote .capNote"]]);
  });

  it("a tour with no board night keeps its note whole (its capacities are on screen at every width)", () => {
    const { container } = desk();
    fireEvent.click(screen.getByRole("button", { name: /African Giant Tour/ }));
    expect(container.querySelector(`.${styles.capNote}`)).toBeNull();
  });

  it("negative control: the heads as J3-11 first built them lose to .tableBase th", () => {
    // tours.module.css at 247a9823 (the J3-11 commit before this review), verbatim.
    const FIRST = `.colNightTickets { width: 110px; text-align: right; }
.colNightGross { width: 130px; text-align: right; }
.colBoard { width: 130px; }
.nightTable .colCap { width: 100px; }`;
    expect(headAlign(FIRST, "colNightTickets")).toBe("left");
    expect(headAlign(FIRST, "colNightGross")).toBe("left");
  });
});
