import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
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
import { tours, festivals, otherShows, upcomingShows, type Festival } from "../app/data/tours";
import { liveMoments } from "../app/data/liveMoments";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { firstGroups } from "../app/data/firsts";
import { updates } from "../app/data/updates";
import { tourKey } from "../app/lib/onThisDay";
import { byYearDesc, PHONE_SOURCE_NOTE } from "../app/lib/festivalOrder";
import RevenuePage from "../app/records/tours/revenue/page";

// The tours and box-office findings of the debug pass of 5 Oct 2026: each one
// a sentence or a figure the site printed that its own data contradicted.

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const n = (s: string) => Number(s.replace(/,/g, ""));

// ── tourscars-02: the I Told Them… board rows against the tour's total ──────
describe("I Told Them…: the board's nights against TouringData's tour total", () => {
  const itt = tours.find((t) => t.name === "I Told Them… Tour")!;
  const rows = [
    ...revenueShows.filter((r) => r.artist === "Burna Boy" && r.tour === itt.name).map((r) => ({ venue: r.venue, flag: r.flag, g: r.revenue, t: n(r.tickets!), shows: 1 })),
    ...revenueStands.filter((r) => r.artist === "Burna Boy" && r.tour === itt.name).map((r) => ({ venue: r.venue, flag: r.flag, g: r.revenue, t: n(r.tickets), shows: r.shows })),
  ];
  const sum = (rs: typeof rows) => rs.reduce((a, r) => ({ g: a.g + r.g, t: a.t + r.t, shows: a.shows + r.shows }), { g: 0, t: 0, shows: 0 });
  const EUROPE = ["🇬🇧", "🇫🇷", "🇩🇪", "🇧🇪"];
  const eu = sum(rows.filter((r) => EUROPE.includes(r.flag)));
  const na = sum(rows.filter((r) => !EUROPE.includes(r.flag)));

  // TouringData's own totals (posts of 29 Dec 2025 and 13 Jun 2024, owner's
  // screenshots; tours.ts carries the first as the tour's gross and tickets).
  const TD = { all: { g: 30_463_574, t: 302_801 }, na: { g: 15_192_820, t: 152_378 }, eu: { g: 15_270_754, t: 150_423 }, canadaTickets: 69_219 };

  it("the tour card keeps TouringData's own total", () => {
    expect([itt.gross, itt.tickets, itt.shows]).toEqual(["$30.46M", TD.all.t.toLocaleString("en-US"), 22]);
    expect(TD.na.g + TD.eu.g).toBe(TD.all.g);
    expect(TD.na.t + TD.eu.t).toBe(TD.all.t);
  });

  it("Europe's six nights equal TouringData's Europe total exactly", () => {
    expect(eu).toEqual({ g: TD.eu.g, t: TD.eu.t, shows: 6 });
  });

  it("North America's sixteen nights differ from TD's North America total by TD's own Canada discrepancy, and only by it", () => {
    expect(na.shows).toBe(16);
    // The rows are TD's per-show figures; TD's aggregate is $11,267 more and
    // 631 tickets fewer.
    expect({ g: TD.na.g - na.g, t: TD.na.t - na.t }).toEqual({ g: 11_267, t: -631 });
    // The same 631 tickets separate TD's "69,219 tickets sold in 6 shows" in
    // Canada (13 Jun 2024) from the six Canadian rows it posted show by show.
    const canada = sum(rows.filter((r) => r.flag === "🇨🇦"));
    expect(canada.shows).toBe(6);
    expect(canada.t - TD.canadaTickets).toBe(631);
    // So a re-typed row anywhere else on the board would break the equality.
    expect(sum(rows)).toEqual({ g: 30_452_307, t: 303_432, shows: 22 });
  });

  it("the four rows of TD's 13 Jun 2024 post are exactly as TD posted them", () => {
    // 118.png (from:touringdata burnaboy, read 3 Oct 2026): the per-show post.
    const posted: Record<string, [number, number]> = {
      "Capital One Arena": [13_892, 1_724_853],
      "Hard Rock Live": [5_591, 965_925],
      "Amalie Arena": [5_890, 580_424],
      "Rogers Arena": [7_198, 527_395],
    };
    for (const [venue, [t, g]] of Object.entries(posted)) {
      const r = revenueShows.filter((x) => x.artist === "Burna Boy" && x.tour === itt.name && x.venue === venue);
      expect(r.map((x) => [n(x.tickets!), x.revenue]), venue).toEqual([[t, g]]);
    }
  });
});

// ── records-12: one name for Space Drift ─────────────────────────────────────
describe("the board names each of his tours as the Tours page does", () => {
  it("every Burna Boy row whose tour is one of tours.ts's runs uses that run's exact name", () => {
    const names = new Map(tours.map((t) => [tourKey(t.name), t.name]));
    const off = [...revenueShows, ...revenueStands]
      .filter((r) => r.artist === "Burna Boy" && names.has(tourKey(r.tour)) && names.get(tourKey(r.tour)) !== r.tour)
      .map((r) => `${r.venue}: ${r.tour}`);
    expect(off).toEqual([]);
    expect(revenueShows.filter((r) => r.tour === "Space Drift World Tour").map((r) => r.venue).sort()).toEqual(["3Arena", "Madison Square Garden", "The O2 Arena"]);
    // Negative control: the board's name until 5 Oct 2026 is the same run by
    // key but not by name, so the check above would have listed three rows.
    expect(tourKey("Space Drift Tour")).toBe(tourKey("Space Drift World Tour"));
    expect("Space Drift Tour").not.toBe(names.get(tourKey("Space Drift Tour")));
  });
});

// ── tourscars-05: Madison Square Garden ──────────────────────────────────────
describe("the Madison Square Garden milestone makes the claim the site can source", () => {
  it("says Nigerian, as the verified first and the Space Drift note do", () => {
    const msg = liveMoments.find((m) => m.title === "Madison Square Garden (sold out)")!;
    expect(msg.text).toBe("First Nigerian artist to sell out the world's most famous arena.");
    const first = firstGroups.flatMap((g) => g.items).find((i) => /Madison Square Garden/.test(i.title))!;
    expect(first.title).toMatch(/^First Nigerian artist/);
    expect(tours.find((t) => t.name === "Space Drift World Tour")!.note).toContain("the first Nigerian artist to sell out the venue");
    // Negative control: the line as it shipped.
    expect("First African artist to sell out the world's most famous arena.").not.toBe(msg.text);
  });
});

// ── tourscars-06: Coachella ──────────────────────────────────────────────────
describe("the two Coachella notes do not contradict each other", () => {
  it("2019 played the main Coachella Stage, so 2023 claims no bigger stage", () => {
    const [y19, y23] = ["2019", "2023"].map((y) => otherShows.find((f) => f.name === "Coachella" && f.year === y)!);
    expect(y19.note).toContain("main Coachella Stage");
    expect(y23.note).not.toMatch(/bigger stage/);
    expect("Returned to Coachella for a second appearance, on a bigger stage than his 2019 debut.").toMatch(/bigger stage/);
  });
});

// ── tourscars-20: Brixton ────────────────────────────────────────────────────
describe("Life on the Outside's UK leg", () => {
  it("does not say Brixton 'capped' a leg it opened; it was the leg's biggest night", () => {
    const t = tours.find((x) => x.name === "Life on the Outside Tour")!;
    const uk = (t.dates ?? []).filter((d) => d.country === "UK");
    expect(uk[0].venue).toBe("O2 Academy Brixton");
    expect(uk.at(-1)!.venue).not.toBe("O2 Academy Brixton");
    expect(t.note).not.toMatch(/capped by a packed O2 Academy Brixton/);
    expect(t.note).toContain("its biggest night a packed O2 Academy Brixton");
    const biggest = uk.reduce((a, d) => ((d.cap ?? 0) > (a.cap ?? 0) ? d : a));
    expect(biggest.venue).toBe("O2 Academy Brixton");
  });
});

// ── crossSite-16: the NFL Paris kick-off ─────────────────────────────────────
describe("the NFL Paris halftime show is timed in the zone France keeps that day", () => {
  it("25 Oct 2026, 9:30 am ET is 2:30 pm in Paris, on CET", () => {
    const kickoff = new Date("2026-10-25T13:30:00Z");
    const paris = new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/Paris", hour: "numeric", minute: "2-digit", timeZoneName: "longOffset" }).format(kickoff);
    expect(paris).toBe("14:30 GMT+01:00");
    const ny = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(kickoff);
    expect(ny).toBe("9:30 AM EDT");
    const nfl = upcomingShows.find((s) => s.when === "25 Oct 2026")!;
    expect(nfl.note).toContain("2:30 pm CET (9:30 am ET)");
    // Neither the page nor the feed says CEST any more.
    expect([nfl.note, ...updates.map((u) => u.text)].join("\n")).not.toMatch(/\bCEST\b/);
  });
});

// ── tourscars-22: the order within a year ────────────────────────────────────
describe("the live milestones and the festival lists run newest first within a year", () => {
  it("the milestones, by hand, since the tour-show rows carry no date", () => {
    const year = (y: string) => liveMoments.filter((m) => m.year === y).map((m) => m.title);
    expect(year("2025")).toEqual(["Red Rocks Amphitheatre", "England Lionesses' Euro victory parade", "Stade de France, Paris"]);
    expect(year("2023")).toEqual(["Citi Field, New York (sold out)", "UEFA Champions League Final", "London Stadium (sold out)", "NBA All-Star Game halftime show"]);
    expect(year("2022").slice(0, 2)).toEqual(["Billboard Music Awards", "Madison Square Garden (sold out)"]);
    // Negative control: 2025 as the page printed it on 5 Oct 2026.
    expect(year("2025")).not.toEqual(["Stade de France, Paris", "Red Rocks Amphitheatre", "England Lionesses' Euro victory parade"]);
  });

  it("each festival section: dated rows newest first within the year, undated after them", () => {
    for (const list of [festivals, otherShows]) {
      const sorted = byYearDesc(list);
      for (let i = 1; i < sorted.length; i++) {
        const [a, b] = [sorted[i - 1], sorted[i]];
        expect(Number(a.year) >= Number(b.year)).toBe(true);
        if (a.year === b.year && b.date) expect(a.date && a.date >= b.date, `${a.name} before ${b.name}`).toBeTruthy();
      }
    }
    // The page sorts with this helper.
    expect(read("app/records/tours/festivals/page.tsx")).toContain('import { byYearDesc, PHONE_SOURCE_NOTE } from "../../../lib/festivalOrder";');
    const top = byYearDesc(festivals).filter((f) => f.year === "2026").map((f) => f.date);
    expect(top).toEqual(["2026-08-14", "2026-07-31", "2026-07-11", "2026-07-03"]);
    // Negative control: by year alone, as shipped, 2026 opened on North Sea Jazz.
    const yearOnly = (rows: Festival[]) => [...rows].sort((a, b) => Number(b.year) - Number(a.year));
    expect(yearOnly(festivals).filter((f) => f.year === "2026").map((f) => f.date)).not.toEqual(top);
  });

  it("the phone note names no data file and claims no order the data cannot give", () => {
    expect(PHONE_SOURCE_NOTE).not.toMatch(/\.ts\b|own line-up archive/);
    expect(PHONE_SOURCE_NOTE).toContain("by year, newest first");
    const SHIPPED = "From each festival's own line-up archive. tours.ts records no capacity field, so sections run newest-first rather than by size.";
    expect(SHIPPED).toMatch(/\.ts\b|own line-up archive/);
    expect(read("app/records/tours/festivals/page.tsx")).not.toContain(SHIPPED);
  });
});

// ── tourscars-11: the phone caption under the gross-by-artist bar ───────────
describe("the phone's gross-by-artist caption names a night as a night", () => {
  it("says 'smallest night', not 'down to', and the spread is top night over it", () => {
    const html = renderToStaticMarkup(RevenuePage());
    const cap = /class="[^"]*shareCap[^"]*">([\s\S]*?)<\/p>/.exec(html)![1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ");
    expect(cap).toMatch(/· smallest night \$[\d.]+K · top night \d+× bigger$/);
    expect(cap).not.toMatch(/down to/);
    // The smallest night on the board, and the spread the desktop prints.
    const smallest = Math.min(...revenueShows.map((r) => r.revenue));
    expect(cap).toContain(`$${(smallest / 1000).toFixed(1)}K`);
  });
});
