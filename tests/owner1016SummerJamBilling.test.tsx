import { readFileSync } from "node:fs";
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
import { festivals, otherShows, concerts, FESTIVALS_VERIFIED_ON, TOURS_EDITED_ON } from "../app/data/tours";
import { tourMapTotals } from "../app/lib/tourMapData";

/**
 * SummerJam 2025 (owner, 16 Oct 2026: "for other 4, do your recommendation").
 * PR #509 filed the 6 July 2025 set under "Festivals headlined" on a press
 * preview (notjustok, 26 Jun 2025, "set to headline Day 3"). The festival's
 * own bill for that day decides it: summerjam.de's "Sunday" post of 26 June
 * 2025 (Wayback 20250716014310) is the day's poster, and it sets BURNA BOY
 * first and largest, over BEENIE MAN and MORGAN HERITAGE — the top of the
 * Sunday bill. So the row stays with the festivals headlined, its note says
 * what that bill shows, and its source is the festival's page, not the
 * preview.
 */

const SJ = festivals.find((f) => f.name === "SummerJam Festival" && f.year === "2025")!;
/** The festival's Sunday 06.07.25 poster, top to bottom (the first three
 *  lines, the largest type): read off the image, typed here. */
const SUNDAY_BILL = ["Burna Boy", "Beenie Man", "Morgan Heritage"];
/** The comment block over the row in app/data/tours.ts. */
function sourceOf(): string {
  const src = readFileSync("app/data/tours.ts", "utf8");
  const at = src.indexOf('{ year: "2025", date: "2025-07-06", name: "SummerJam Festival"');
  expect(at).toBeGreaterThan(0);
  const lines = src.slice(0, at).split("\n");
  const block: string[] = [];
  for (let i = lines.length - 2; i >= 0 && lines[i].trim().startsWith("//"); i--) block.unshift(lines[i].trim().replace(/^\/\/ ?/, ""));
  return block.join(" ");
}
/** What a note must say for the row to stand on the festival's bill: the day
 *  and its top, the acts under him as the poster sets them. */
const readsTheBill = (note: string) =>
  /^Top of the bill on the final day \(Sunday 6 July 2025\)/.test(note) && note.includes(`over ${SUNDAY_BILL[1]} and ${SUNDAY_BILL[2]}`);

describe("SummerJam 2025: the festival's own bill keeps it with the festivals headlined", () => {
  it("the row is in the headlined list, not the other appearances", () => {
    expect(SJ).toBeDefined();
    expect(otherShows.some((f) => f.name === "SummerJam Festival")).toBe(false);
    expect(concerts.some((f) => f.name === "SummerJam Festival")).toBe(false);
  });

  it("the note reads the festival's Sunday bill: top of it, over Beenie Man and Morgan Heritage", () => {
    expect(readsTheBill(SJ.note)).toBe(true);
    expect(SJ.note).toContain("I Told Them… Tour date");
    expect(SJ.note).not.toMatch(/Billed to headline/);
  });

  it("the source over the row is the festival's page, with its capture, not the preview", () => {
    const src = sourceOf();
    expect(src).toContain("summerjam.de/en/news/Sunday_post_725.html");
    expect(src).toContain("Wayback 20250716014310");
    expect(src).toContain("BURNA BOY first and largest, over BEENIE MAN and MORGAN HERITAGE");
    expect(src).not.toContain("notjustok");
    // The tour row's sources stay with it.
    expect(src).toContain("Wayback 20250718173700");
    expect(src).toContain("setlist.fm");
  });

  it("the festivals page prints the note under Festivals headlined, and the phone's list keeps the row there", () => {
    const d = new DOMParser().parseFromString(renderToStaticMarkup(<FestivalsPage />), "text/html");
    const clean = (s: string | null | undefined) => (s ?? "").replace(/\s+/g, " ");
    // The laptop's rows carry their notes; the phone's carry name and place.
    expect(clean(d.querySelector("section#headlined")?.textContent)).toContain("Top of the bill on the final day (Sunday 6 July 2025)");
    expect(clean(d.getElementById("m-headlined")?.textContent)).toContain("2025SummerJam FestivalFühlinger See, Cologne, Germany");
  });

  it("no count moves: the row was already a festival headlined, and the map still takes the night once", () => {
    expect(tourMapTotals.appearances).toBe(festivals.length + otherShows.length + concerts.length - 1);
    expect(festivals.filter((f) => f.tour)).toEqual([SJ]);
  });

  it("the stamps move to the day of the edit", () => {
    expect(FESTIVALS_VERIFIED_ON).toBe("2026-10-16");
    // Moved on since: 21 Oct 2026, Rolling Loud India joined the announced
    // shows (tests/debug1004Data.test.tsx pins the day of each edit).
    expect(TOURS_EDITED_ON >= "2026-10-16").toBe(true);
  });
});

describe("negative control: what origin/main ships", () => {
  it("main's note, a press preview's wording, does not read the festival's bill", () => {
    // app/data/tours.ts:539 on origin/main db35e489.
    const SHIPPED =
      "Billed to headline the final day (6 July 2025) — an I Told Them… Tour date, moved there that day from SparkassenPark Mönchengladbach, whose tickets were valid at the festival.";
    expect(readsTheBill(SHIPPED)).toBe(false);
    expect(SJ.note).not.toBe(SHIPPED);
  });

  it("main's source for the billing was the preview", () => {
    // The comment over the row on origin/main db35e489, its last line.
    const SHIPPED = 'notjustok, 26 Jun 2025, "set to headline Day 3" (6 July).';
    expect(SHIPPED).toContain("notjustok");
    expect(sourceOf()).not.toContain(SHIPPED);
  });
});
