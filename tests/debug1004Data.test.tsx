import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import sitemap from "../app/sitemap";
import { siteUrl } from "../app/site";
import ArtistPage from "../app/afrobeats/[artist]/page";
import CertificationsPage from "../app/certifications/page";
import RecordsPage from "../app/records/page";
import { disputedCounts, daiDaiRegisterClauses, daiDaiUnpricedMarkets, DAI_DAI_FAN_LINES, DAI_DAI_FAN_MARKETS } from "../app/data/rejectedClaims";
import { allItems, COUNTRIES, CERTS_VERIFIED_ON, CERTS_EDITED_ON, CERTS_STAMP, announcedPlaques } from "../app/data/certifications";
import { artistBySlug, priceRelease } from "../app/lib/certUnits";
import { awardLabel } from "../app/lib/awardName";
import { CERT_HEADER, certificationRows, DATA_DOWNLOADS, plaqueSource, registerUrl } from "../app/lib/dataDownloads";
import { GET as certificationsJson } from "../app/api/v1/certifications/route";
import { GET as toursJson } from "../app/api/v1/tours/route";
import { GET as llmsTxt } from "../app/llms.txt/route";
import { EMBED_WIDGETS } from "../app/lib/embedWidgets";
import { onThisDayEvents, tourKey } from "../app/lib/onThisDay";
import { revenueShows, revenueStands } from "../app/data/tourRevenue";
import { REVENUE_BODY, REVENUE_EDITED_ON, REVENUE_READ_ON, REVENUE_STAMP, revenueRowBody } from "../app/lib/revenueSource";
import { getStatCards } from "../app/lib/statCards";
import { homeScoreboard } from "../app/lib/homeScoreboard";
import { tours, festivals, otherShows, concerts, upcomingShows, TOURS_EDITED_ON } from "../app/data/tours";
import { performedCountries } from "../app/data/performedCountries";
import { tourMapCountries } from "../app/lib/tourMapData";
import { searchDocs } from "../app/lib/searchIndex";
import { AFROBEATS_EDITED_ON, afrobeatsArtists, pageStamp } from "../app/data/afrobeats";
import { comparableArtists } from "../app/lib/certUnits";
import { tourDateNote } from "../app/lib/tourMeta";
import ToursExplorer from "../app/components/ToursExplorer";
import { provenanceTileSentence } from "../app/lib/offRegister";
import { generateImageMetadata as afrobeatsOgMetadata } from "../app/afrobeats/opengraph-image";

/**
 * The live-debug findings of 4–5 Oct 2026 on data and sourcing, one block per
 * finding id (~/burnaboy-work/debug-1004/findings.json). Each holds the fix to
 * the data, and carries the live string or value that shipped as its negative
 * control. C-01/D-01 live in tests/countrySharedRecords.test.tsx, C-02 in
 * tests/updatesSnapshots.test.ts and tests/cars.test.ts.
 */

const read = (f: string) => readFileSync(f, "utf8");
const text = (h: string) =>
  h.replace(/<[^>]+>/g, " ").replace(/&#x27;/g, "'").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/\s+/g, " ");
const json = async (r: Response) => JSON.parse(await r.text());
const fmt = (n: number) => n.toLocaleString("en-US");

// ── C-03: the Dai Dai rebuttal on /methodology ─────────────────────────────
describe("C-03: the 6,050,000 rebuttal says only what the registers say today", () => {
  const dd = priceRelease(artistBySlug("burna-boy")!, "Dai Dai")!;
  const bodyCountry = (body: string) => Object.entries(COUNTRIES).find(([, c]) => c.body === body)?.[0];

  /** What a paragraph claims about a body that the song's plaques contradict. */
  function contradictions(reason: string): string[] {
    const out: string[] = [];
    for (const m of reason.matchAll(/the ([A-Z][\w ]*?)'s (?:only award is|awards are|is) (?:(?:its|the) (\w+) programme's )?([^,;]+), at least ([\d,]+)(?: units)?, not ([\d,]+)/g)) {
      const [, body, , award, floor, fan] = m;
      const c = bodyCountry(body);
      const lines = dd.byCountry.filter((l) => l.country === c && l.counted && l.top);
      const units = lines.reduce((n, l) => n + l.units, 0);
      const labels = lines.map((l) => awardLabel(l.top!));
      if (!labels.includes(award.trim())) out.push(`${body}: says ${award.trim()}, holds ${labels.join(" + ") || "none"}`);
      if (Number(floor.replace(/,/g, "")) !== units) out.push(`${body}: says at least ${floor}, prices ${fmt(units)}`);
      if (units >= Number(fan.replace(/,/g, ""))) out.push(`${body}: rebuts ${fan}, but prices ${fmt(units)} — at or above it`);
    }
    for (const m of reason.matchAll(/([A-Z][\w ]*?) and ([A-Z][\w ]*?) hold no award/g))
      for (const body of [m[1], m[2]]) {
        const c = bodyCountry(body.trim());
        if (dd.release.certs.some((x) => x.c === c)) out.push(`${body.trim()}: "holds no award", holds one`);
      }
    return out;
  }

  const reason = disputedCounts.find((c) => /6,050,000/.test(c.claim))!.reason;

  it("every body the paragraph names holds the tier and the floor it states", () => {
    expect(contradictions(reason)).toEqual([]);
    // Not vacuous: fed the US line as it stood at 6× (360,000, under the fan's
    // 935,000), the builder writes the RIAA clause the page printed until 7 Oct.
    const at6x = {
      ...dd,
      byCountry: dd.byCountry.map((l) => (l.country === "US" && l.top ? { ...l, units: 360_000, top: { ...l.top, x: 6 } } : l)),
    };
    expect(daiDaiRegisterClauses(at6x)).toEqual(["the RIAA's only award is its Latin programme's 6× Platino, at least 360,000 units, not 935,000"]);
  });

  it("a fan line the register now meets or passes is not rebutted (the BPI's Gold, 400,000; the RIAA's 19× Platino, 1,140,000)", () => {
    const uk = dd.byCountry.filter((l) => l.country === "UK").reduce((n, l) => n + l.units, 0);
    expect(uk).toBeGreaterThanOrEqual(DAI_DAI_FAN_LINES.find((f) => f.c === "UK")!.units);
    expect(reason).not.toMatch(/BPI/);
    // 7 Oct 2026: RIAA's database lists the 19× Platino (award 454813), 19 ×
    // 60,000 = 1,140,000, past the fan line's 935,000 — so the RIAA clause
    // drops out the way the BPI's did, and with it the whole sentence.
    const us = dd.byCountry.filter((l) => l.country === "US").reduce((n, l) => n + l.units, 0);
    expect(us).toBe(1_140_000);
    expect(us).toBeGreaterThanOrEqual(DAI_DAI_FAN_LINES.find((f) => f.c === "US")!.units);
    expect(reason).not.toMatch(/RIAA/);
    expect(reason).not.toContain("Where a register does speak");
    expect(daiDaiRegisterClauses()).toEqual([]);
  });

  it("negative control: the RIAA clause as it shipped on 6 Oct 2026 (6× Platino) fails", () => {
    // daiDaiRegisterClauses()'s output on origin/main before the 19× landed,
    // verbatim from the rebuttal on /methodology.
    const shipped =
      "Where a register does speak, it says less: the RIAA's only award is its Latin programme's 6× Platino, at least 360,000 units, not 935,000.";
    expect(contradictions(shipped)).toEqual([
      "RIAA: says 6× Platino, holds 19× Platino",
      "RIAA: says at least 360,000, prices 1,140,000",
      "RIAA: rebuts 935,000, but prices 1,140,000 — at or above it",
    ]);
  });

  it("negative control: the paragraph as it shipped on 4 Oct 2026 fails on every body", () => {
    const shipped =
      "Where a register does speak, it says less: the RIAA's only award is the Latin programme's 2× Platino, at least 120,000 units, not 935,000; the BPI's is Silver, at least 200,000, not 370,000; BVMI and Music Canada hold no award for the song.";
    expect(contradictions(shipped)).toEqual([
      "RIAA: says 2× Platino, holds 19× Platino",
      "RIAA: says at least 120,000, prices 1,140,000",
      "RIAA: rebuts 935,000, but prices 1,140,000 — at or above it",
      "BPI: says Silver, holds Gold",
      "BPI: says at least 200,000, prices 400,000",
      "BPI: rebuts 370,000, but prices 400,000 — at or above it",
      'BVMI: "holds no award", holds one',
      'Music Canada: "holds no award", holds one',
    ]);
  });

  it("\"no register prices the song at all\" names only fan markets where the song holds no plaque", () => {
    const held = new Set(dd.release.certs.map((x) => x.c));
    const named = reason.match(/its lines for (.+?) sit where no register prices the song at all/)?.[1] ?? "";
    for (const m of DAI_DAI_FAN_MARKETS) {
      const certified = m.codes.some((c) => held.has(c));
      // A market the sentence names holds no plaque; one it leaves out holds one.
      expect(named.includes(m.name), m.name).toBe(!certified);
    }
    // Today: none of the four is certified, so the sentence names all four.
    expect(daiDaiUnpricedMarkets()).toEqual(["India", "MENA", "Brazil", "Mexico"]);
    expect(named).toBe("India, MENA, Brazil and Mexico");
    // Negative control: the typed sentence that shipped, against the song
    // with a Mexican plaque (AMPROFON) — the market drops out of the list, and
    // the shipped words still name it.
    const shipped = "its lines for India, MENA, Brazil and Mexico sit where no register prices the song at all";
    const withMx = [...dd.release.certs, { c: "MX" }];
    expect(daiDaiUnpricedMarkets(withMx)).toEqual(["India", "MENA", "Brazil"]);
    expect(shipped).toContain("Mexico");
    // Every market certified: the clause goes, not a list of none.
    expect(daiDaiUnpricedMarkets([{ c: "IN" }, { c: "AE" }, { c: "BR" }, { c: "MX" }])).toEqual([]);
  });
});

// ── C-05 / D-02: Dai Dai's Danish Gold is the body's publication ───────────
describe("C-05/D-02: the Danish Gold is named as the chart it was read on", () => {
  const SHIPPED_ROW =
    "Burna Boy,Dai Dai,Shakira & Burna Boy,single,Lead singles,DK,Denmark,IFPI Denmark,Gold,1,45000,,true,,http://ifpi.dk/certificeringer-0,2026-10-04,register,";
  const col = (r: unknown[], name: string) => r[CERT_HEADER.indexOf(name as (typeof CERT_HEADER)[number])];
  const dk = certificationRows.find((r) => r[0] === "Burna Boy" && r[1] === "Dai Dai" && col(r, "country_code") === "DK")!;

  it("the CSV row says announcement and links no register", () => {
    expect(col(dk, "source")).toBe("announcement");
    expect(col(dk, "register_url")).toBeNull();
    // Negative control: the row /api/v1/certifications.csv served on 4 Oct.
    const shipped = SHIPPED_ROW.split(",");
    expect(shipped[CERT_HEADER.indexOf("source")]).toBe("register");
    expect(shipped[CERT_HEADER.indexOf("register_url")]).toBe("http://ifpi.dk/certificeringer-0");
    expect(shipped[CERT_HEADER.indexOf("source")]).not.toBe(col(dk, "source"));
  });

  it("the JSON API marks it too, and its description says why", async () => {
    const body = await json(certificationsJson());
    const cert = body.data.releases.find((r: { title: string }) => r.title === "Dai Dai").certifications.find((c: { countryCode: string }) => c.countryCode === "DK");
    expect(cert.source).toBe("announcement");
    // A register row carries no `source` at all.
    const us = body.data.releases.find((r: { title: string }) => r.title === "Dai Dai").certifications.find((c: { countryCode: string }) => c.countryCode === "US");
    expect(us.source).toBeUndefined();
    expect(body.description).toContain("the body's own published chart where its database has not yet listed the certification");
  });

  it("the helpers agree for every Burna Boy plaque marked as one", () => {
    expect(announcedPlaques.map((x) => `${x.release.title}|${x.cert.c}`)).toEqual(["Dai Dai|DK"]);
    for (const { cert } of announcedPlaques) {
      expect(plaqueSource(cert, COUNTRIES[cert.c])).toBe("announcement");
      expect(registerUrl(cert, COUNTRIES[cert.c])).toBeNull();
    }
  });

  it("the embed's source line and /certifications' sources line name the chart", () => {
    const certs = EMBED_WIDGETS.find((w) => w.slug === "certifications")!;
    // Since 5 Oct 2026 (core-12) it names the label's plaque too, the route
    // "Dai Dai"'s Colombian Gold and "All Eyes on Me"'s 19× Platinum rest on.
    expect(certs.content.source).toMatch(
      /^each certifying body's own register — or, where it lists none, a label's own plaque or the body's published chart — most recently read /,
    );
    // Shipped: "each certifying body's own register, most recently read 4 October 2026",
    // then "each certifying body's own register or published chart, most recently read …".
    expect(certs.content.source).not.toMatch(/^each certifying body's own register or published chart, most recently read/);
    expect(certs.content.source).not.toMatch(/^each certifying body's own register, most recently read/);
    const t = text(renderToStaticMarkup(<CertificationsPage />));
    // With, since 5 Oct 2026, the no-row label route between them (core-12).
    expect(t).toContain(
      "(or, in a market with no current public register, from the label's own plaque; where the register holds no row for the title, from the label's own award; or from the body's own published chart where its register has not yet listed the certification)",
    );
  });
});

// ── C-06 / D-03 / E-12 / F-04: TouringData, where the row is TouringData's ──
describe("C-06/D-03/E-12/F-04: a figure from one box-office row names that row's publisher", () => {
  const top = [...revenueShows].sort((a, b) => b.revenue - a.revenue)[0];

  it("every grossed On This Day show names a body its row's source names", () => {
    const grossed = onThisDayEvents.filter((e) => e.kind === "show" && e.href === "/records/tours/revenue");
    expect(grossed.length).toBeGreaterThanOrEqual(30);
    const bad = grossed.filter((e) => {
      const row = revenueShows.find((r) => r.artist === "Burna Boy" && e.headline.includes(r.venue) && e.date.startsWith(r.year));
      return !row || !row.source.includes(e.body);
    });
    expect(bad.map((e) => `${e.id}: ${e.body}`)).toEqual([]);
    // Negative control: the body every one of them carried until 5 Oct 2026.
    expect(revenueShows.filter((r) => r.artist === "Burna Boy").some((r) => r.source.includes("Billboard Boxscore"))).toBe(false);
  });

  it("revenueRowBody reads the publisher a row names first, and a quoted body behind press", () => {
    expect(revenueRowBody(top.source)).toBe(REVENUE_BODY);
    expect(revenueRowBody("Billboard Boxscore, report of 1 Jan 2025")).toBe("Billboard Boxscore");
    expect(revenueRowBody("Afrobeats Intelligence, quoting Pollstar, 2 Feb 2025")).toBe("Pollstar");
    // Every row on the board leads with TouringData today.
    expect(new Set([...revenueShows, ...revenueStands].map((r) => revenueRowBody(r.source)))).toEqual(new Set([REVENUE_BODY]));
  });

  it("the concert stat card cites TouringData; the tour card keeps Boxscore and attributes the night", () => {
    const cards = getStatCards();
    const concert = cards.find((c) => c.id === "concert")!;
    const tour = cards.find((c) => c.id === "tour")!;
    expect(concert.source).toBe("TouringData");
    expect(concert.source).not.toBe("Billboard Boxscore"); // shipped
    expect(tour.source).toBe("Billboard Boxscore");
    expect(tour.detail).toContain(`from ${top.tickets} tickets, per TouringData — the biggest concert`);
  });

  it("the /records hero tile names TouringData, on both layouts", () => {
    const t = text(renderToStaticMarkup(<RecordsPage />));
    expect(t).toContain("Biggest African crowd in TouringData's box-office reports");
    expect(t).not.toContain("Biggest African crowd in Billboard's box-office figures");
  });

  it("the home scoreboard's tour gross links where tour totals are", () => {
    const tile = homeScoreboard.find((s) => s.label === "Highest tour gross")!;
    expect(tile.href).toBe("/records/tours");
    expect(tile.href).not.toBe("/records/tours/revenue"); // shipped
    expect(tile.source).toBe("Billboard Boxscore");
  });
});

// ── C-07: Ireland, and the Love, Damini run ────────────────────────────────
describe("C-07: a map line names no more nights than the card counts; Love, Damini is partial", () => {
  const MONTH = /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b/g;

  /** A line that names months ("(Mar & Dec 2022)") against the tour dates the
   *  card counts in that country — more months than dates is the C-07 shape. */
  const overstated = (country: string, line: string, dates: number) => {
    const months = line.match(MONTH)?.length ?? 0;
    return months > dates ? [`${country}: "${line}" beside ${dates} tour date${dates === 1 ? "" : "s"}`] : [];
  };
  const datesIn = (country: string) => tours.flatMap((t) => t.dates ?? []).filter((d) => d.country === country).length;

  it("every country's lines", () => {
    const bad = performedCountries.flatMap((c) => c.events.flatMap((e) => overstated(c.name, e, datesIn(c.name))));
    expect(bad).toEqual([]);
    const ie = tourMapCountries.find((c) => c.name === "Ireland")!;
    expect(ie.documented).toBe("1 tour date · 1 city · 2022");
    expect(ie.events).toEqual(["3Arena, Dublin (2022)"]);
  });

  it("negative control: the Ireland line that shipped", () => {
    expect(overstated("Ireland", "3Arena, Dublin (Mar & Dec 2022)", datesIn("Ireland"))).toHaveLength(1);
  });

  it("the note under Love, Damini's dates keeps its count and capacities, and says only that the list is short", () => {
    const ld = tours.find((t) => t.name === "Love, Damini Tour")!;
    const want = `${ld.dates!.length} documented dates. ${ld.partialNote} Capacities are the venues’ standard listed capacities.`;
    expect(tourDateNote(ld)).toBe(want);
    // What live printed before it was marked partial, both sentences kept.
    expect(want).toContain(`${ld.dates!.length} documented dates.`);
    expect(want).toContain("Capacities are the venues’ standard listed capacities.");
    expect(ld.partialNote).toBe("Not every night of the run is listed here.");
    // Rendered: the desktop accordion opens the record tour by default, so the
    // run is passed as one to open it. The note sits under its date table.
    const html = renderToStaticMarkup(<ToursExplorer tours={[{ ...ld, record: true }]} />);
    expect(text(html)).toContain(want);
    expect(ld.dates!.filter((d) => d.cap).length).toBeGreaterThan(0); // the capacities sentence describes a column with values
    // Negative control: the note the PR's first push printed for it — false for
    // a publicly announced stadium tour — and the capacities sentence it dropped.
    const shipped = "Confirmed dates only — the full itinerary was never publicly documented.";
    expect(text(html)).not.toContain("the full itinerary was never publicly documented");
    expect(tourDateNote({ ...ld, partialNote: undefined })).toBe(shipped);
    // A partial run with no reason of its own keeps the stock note (Space Drift).
    expect(tourDateNote(tours.find((t) => t.name === "Space Drift World Tour")!)).toBe(shipped);
  });

  it("/api/v1/tours publishes Love, Damini as a partial run, with its own reason", async () => {
    const body = await json(toursJson());
    const ld = body.data.tours.find((t: { name: string }) => t.name === "Love, Damini Tour");
    expect(ld.partial).toBe(true); // false, beside its own definition, until 5 Oct 2026
    // The reason is the one printed under its dates, not the stock one.
    expect(ld.partialNote).toBe("Not every night of the run is listed here.");
    expect(tourDateNote(tours.find((t) => t.name === "Love, Damini Tour")!)).toContain(ld.partialNote);
    const sd = body.data.tours.find((t: { name: string }) => t.name === "Space Drift World Tour");
    expect(sd.partialNote).toBe(tourDateNote(tours.find((t) => t.name === "Space Drift World Tour")!));
    expect(body.data.tours.filter((t: { partial: boolean; partialNote: string | null }) => !t.partial && t.partialNote !== null)).toEqual([]);
    // Negative control: the description the PR's first push served, which
    // gave every partial run the untrue "never documented" reason.
    expect(body.description).not.toContain("because its full itinerary was never documented or its routing changed");
    expect(body.description).toContain("`partialNote` gives that run's own reason");
  });

  it("a gross joins only its own tour's night: every joined row names the tour the date is on", () => {
    let joined = 0;
    for (const e of onThisDayEvents.filter((x) => x.kind === "show" && x.href === "/records/tours/revenue")) {
      if (e.source.data !== "tours") continue;
      const { tour, index } = e.source;
      const d = tours.find((t) => t.name === tour)!.dates![index];
      const rows = revenueShows.filter((r) => r.artist === "Burna Boy" && r.venue === d.venue.replace(/\s*\(.*\)$/, "") && d.date.endsWith(r.year));
      expect(rows.filter((r) => tourKey(r.tour) === tourKey(tour)).length, e.id).toBe(1);
      joined++;
    }
    // The same 30 nights joined before the tour was part of the key.
    expect(joined).toBe(30);
    expect(tourKey("Space Drift World Tour")).toBe(tourKey("Space Drift Tour"));
    expect(tourKey("Love, Damini Tour")).not.toBe(tourKey("Space Drift Tour"));
  });
});

// ── D-04: lastmod for the routes whose content changed ─────────────────────
describe("D-04: /certifications, /records/tours and the map are dated by their data", () => {
  const rows = sitemap();
  const day = (path: string) => {
    const r = rows.find((x) => x.url === `${siteUrl}${path}`);
    return r?.lastModified ? new Date(r.lastModified).toISOString().slice(0, 10) : undefined;
  };
  const later = (...ds: string[]) => ds.sort().at(-1)!;

  it("each route's lastmod is at least its data's date", () => {
    expect(day("/certifications")! >= CERTS_VERIFIED_ON).toBe(true);
    expect(day("/records/tours")! >= later(TOURS_EDITED_ON, REVENUE_READ_ON)).toBe(true);
    expect(day("/records/tours/map")! >= later(TOURS_EDITED_ON, REVENUE_READ_ON)).toBe(true);
    // Negative control: the lastmods the live sitemap served on 5 Oct 2026.
    expect("2026-09-30" >= CERTS_VERIFIED_ON).toBe(false);
    expect("2026-09-25" >= TOURS_EDITED_ON).toBe(false);
    expect("2026-08-15" >= TOURS_EDITED_ON).toBe(false);
  });

  it("the Datasets declare the same day", () => {
    const certs = read("app/certifications/page.tsx");
    expect(certs).toContain("dateModified: CERTS_STAMP,");
    expect(read("app/records/tours/map/page.tsx")).toContain("dateModified: [TOURS_EDITED_ON, REVENUE_STAMP].sort().at(-1)!,");
  });

  it("TOURS_EDITED_ON moves with the tour data: an edit to it without a new stamp fails here", () => {
    // Re-pin BOTH lines when the data changes, and move TOURS_EDITED_ON to the
    // day of the edit. Dublin's 3Arena night joined on 4 Oct 2026 and nothing
    // moved the routes' dates (D-04); this is what would have said so.
    const print = (data: unknown) => createHash("sha256").update(JSON.stringify(data)).digest("hex").slice(0, 16);
    const fingerprint = print({ tours, festivals, otherShows, concerts, upcomingShows, performedCountries });
    // The stamp is the day the edit LANDS: main already said 2026-10-05 (the
    // first 5 Oct merge) before the debug pass's edits below were committed on
    // 6 Oct, so leaving it there dated them a day early (review of that PR).
    // Re-pinned 6 Oct 2026 when the records lane's five "Sep" notes (core-19)
    // merged onto the tours lane's edits; the stamp was already that day.
    // Re-pinned again the same day when the owner's rulings merged: No Sign of
    // Weakness's note, "across its four shows" (tourscars-21).
    expect({ fingerprint, stamp: TOURS_EDITED_ON }).toEqual({ fingerprint: "149269fa92f5e646", stamp: "2026-10-06" });
    // Negative control for core-19: the notes' "Sept" as it shipped is another
    // fingerprint.
    const septAsShipped = (rows: typeof festivals) => rows.map((r) => ({ ...r, note: r.note.replace(/\b(\d{1,2} )?Sep\b/g, "$1Sept") }));
    expect(
      print({ tours, festivals: septAsShipped(festivals), otherShows: septAsShipped(otherShows), concerts: septAsShipped(concerts), upcomingShows, performedCountries }),
    ).not.toBe(fingerprint);
    // Negative control for the 5 Oct debug pass's edits: the Fillmore back
    // under Washington, D.C., as it shipped, is another fingerprint.
    const fillmoreAsShipped = tours.map((t) => ({
      ...t,
      dates: t.dates?.map((d) => (d.venue === "The Fillmore" && d.city === "Silver Spring, MD" ? { ...d, venue: "The Fillmore Silver Spring", city: "Washington, D.C." } : d)),
    }));
    expect(print({ tours: fillmoreAsShipped, festivals, otherShows, concerts, upcomingShows, performedCountries })).not.toBe(fingerprint);
    // Negative control for tourscars-21: the note's "four arena shows", as it
    // shipped, is another fingerprint.
    const arenaAsShipped = tours.map((t) =>
      t.name === "No Sign of Weakness Tour" ? { ...t, note: t.note.replace("across its four shows", "across four arena shows") } : t,
    );
    expect(arenaAsShipped).not.toEqual(tours);
    expect(print({ tours: arenaAsShipped, festivals, otherShows, concerts, upcomingShows, performedCountries })).not.toBe(fingerprint);
    // Negative control: the data before this PR's edits (Love, Damini not
    // partial and with no reason of its own; Ireland's "(Mar & Dec 2022)")
    // prints another fingerprint, so an edit that leaves the stamp behind
    // cannot pass.
    const before = {
      tours: tours.map((t) => (t.name === "Love, Damini Tour" ? { ...t, partial: undefined, partialNote: undefined } : t)),
      festivals,
      otherShows,
      concerts,
      upcomingShows,
      performedCountries: performedCountries.map((c) => (c.name === "Ireland" ? { ...c, events: ["3Arena, Dublin (Mar & Dec 2022)"] } : c)),
    };
    expect(print(before)).not.toBe(fingerprint);
  });
});

// ── D-04, review: the routes still dated behind their content ──────────────
describe("D-04 (review): /methodology, /afrobeats and the box-office routes are dated by their data", () => {
  const rows = sitemap();
  const day = (path: string) => {
    const r = rows.find((x) => x.url === `${siteUrl}${path}`);
    return r?.lastModified ? new Date(r.lastModified).toISOString().slice(0, 10) : undefined;
  };
  const print = (data: unknown) => createHash("sha256").update(JSON.stringify(data)).digest("hex").slice(0, 16);
  const boardNewest = afrobeatsArtists.filter((a) => a.swept).map(pageStamp).sort().at(-1)!;

  it("/methodology and /afrobeats: at least the plaques they print, Burna Boy's and the board's", () => {
    for (const path of ["/methodology", "/afrobeats"]) {
      expect(day(path)! >= CERTS_STAMP, path).toBe(true);
      expect(day(path)! >= boardNewest, path).toBe(true);
    }
    // What they print that moved on 5 Oct: the board's off-register count.
    expect(provenanceTileSentence()).toContain(`of the board's plaques`);
    // Negative controls: the lastmods the PR's preview served.
    expect("2026-09-14" >= CERTS_STAMP).toBe(false); // /methodology
    expect("2026-10-04" >= CERTS_STAMP).toBe(false); // /afrobeats, max(verifiedOn)
  });

  it("the box-office routes: the read, or a later edit to the rows", () => {
    expect(REVENUE_STAMP).toBe([REVENUE_READ_ON, REVENUE_EDITED_ON].sort().at(-1));
    for (const path of ["/records/tours/revenue", "/records/tours/revenue/countries", "/records/tours", "/records/tours/map", "/records"])
      expect(day(path)! >= REVENUE_STAMP, path).toBe(true);
    // /records prints the board's rows and the crowd tile's publisher, read
    // off its row; the preview served 2026-10-03 for it, as it did for the
    // board itself (negative control below).
    expect(read("app/records/tours/revenue/page.tsx")).toContain("dateModified: REVENUE_STAMP,");
    // Negative control: the preview's /records/tours/revenue, while it printed
    // 5 Oct's "Bell Centre".
    expect("2026-10-03" >= REVENUE_STAMP).toBe(false);
  });

  it("REVENUE_EDITED_ON moves with the board's rows: an edit without a new stamp fails here", () => {
    // Re-pin BOTH when a row changes, and move REVENUE_EDITED_ON (or, for a
    // re-read at the bodies, REVENUE_READ_ON) to the day of the edit.
    const fingerprint = print({ revenueShows, revenueStands });
    // 2026-10-06: the day Space Drift's rename landed; main already said
    // 2026-10-05 for the Bell Centre edit before it (review of the 5 Oct PR).
    expect({ fingerprint, stamp: REVENUE_STAMP }).toEqual({ fingerprint: "f96dc013b02eb5dc", stamp: "2026-10-06" });
    // Negative control: the rows with Montreal's arena as it shipped.
    const before = { revenueShows, revenueStands: revenueStands.map((r) => (r.venue === "Bell Centre" ? { ...r, venue: "Centre Bell" } : r)) };
    expect(print(before)).not.toBe(fingerprint);
    // And with Space Drift's board name as it shipped until the 5 Oct debug pass.
    const spaceDriftAsShipped = { revenueShows: revenueShows.map((r) => (r.tour === "Space Drift World Tour" ? { ...r, tour: "Space Drift Tour" } : r)), revenueStands };
    expect(print(spaceDriftAsShipped)).not.toBe(fingerprint);
  });

  it("CERTS_EDITED_ON moves with the plaques' provenance: an edit without a new stamp fails here", () => {
    // The fields an edit without a register read changes: who issued it, where
    // it was published, what it was read from — and each country's body as the
    // routes print it (/certifications, /compare/in, /methodology, the CSV).
    // Re-pin BOTH when one changes, and move CERTS_EDITED_ON (or
    // CERTS_VERIFIED_ON, for a read).
    const provenance = (items: typeof allItems) =>
      items.flatMap((r) =>
        r.certs.filter((c) => c.source || c.announced || c.body || c.provenance).map((c) => ({ title: r.title, ...c })),
      );
    const bodies = (countries: typeof COUNTRIES) => Object.entries(countries).map(([code, c]) => [code, c.body]);
    const fingerprint = print({ plaques: provenance(allItems), bodies: bodies(COUNTRIES) });
    // 2026-10-06: core-08's two body names (IFPI Switzerland, Pro Música
    // Colombia) landed then, after main already said 2026-10-05 for the Danish
    // Gold; the bodies were outside this fingerprint, so nothing caught it
    // (review of the 5 Oct debug PR).
    // 2026-10-07: Turkey (COUNTRIES.TR, Sony Music Türkiye) and "Dai Dai"'s two
    // label plaques — the Turkish Diamond and the Colombian Platinum, now Sony
    // Music's — on the owner's ruling, no register read.
    // 2026-10-07 again: "Dai Dai"'s RIAA Latin plaque, 6× → 19× and moved to
    // the end of its list — a register read, so CERTS_VERIFIED_ON moved.
    expect({ fingerprint, stamp: CERTS_STAMP }).toEqual({ fingerprint: "d961b13e34be7753", stamp: "2026-10-07" });
    expect(CERTS_STAMP).toBe([CERTS_VERIFIED_ON, CERTS_EDITED_ON].sort().at(-1));
    // Negative control: the Danish Gold as it shipped, a plain register row.
    const before = allItems.map((r) =>
      r.title === "Dai Dai" ? { ...r, certs: r.certs.map((c) => (c.c === "DK" ? { c: c.c, level: c.level } : c)) } : r,
    );
    expect(print({ plaques: provenance(before), bodies: bodies(COUNTRIES) })).not.toBe(fingerprint);
    // And the two bodies as they shipped until the 5 Oct debug pass.
    const bodiesAsShipped = {
      ...COUNTRIES,
      CH: { ...COUNTRIES.CH, body: "IFPI" },
      CO: { ...COUNTRIES.CO, body: "Pro Musica Colombia" },
    };
    expect(print({ plaques: provenance(allItems), bodies: bodies(bodiesAsShipped) })).not.toBe(fingerprint);
  });
});

// ── D-05: one stamp for the page and the sitemap ───────────────────────────
describe("D-05: a board artist page's Dataset dateModified is the sitemap's lastmod", () => {
  const datasetDate = async (slug: string) => {
    const h = renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: slug }) }));
    const nodes = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
    return nodes.find((n) => n["@type"] === "Dataset")?.dateModified as string | undefined;
  };

  it("CKay and Olamide declare 3 Oct, as their sitemap rows do", async () => {
    for (const slug of ["ckay", "olamide"]) {
      const a = afrobeatsArtists.find((x) => x.slug === slug)!;
      expect(await datasetDate(slug), slug).toBe(pageStamp(a));
      expect(pageStamp(a)).toBe(AFROBEATS_EDITED_ON[slug]);
    }
    // Negative controls: the dateModified the live pages served (verifiedOn).
    expect(await datasetDate("ckay")).not.toBe("2026-09-18");
    expect(await datasetDate("olamide")).not.toBe("2026-09-06");
  });

  it("every swept artist: page and sitemap agree", () => {
    const rows = sitemap();
    for (const a of afrobeatsArtists.filter((x) => x.swept)) {
      const r = rows.find((x) => x.url === `${siteUrl}/afrobeats/${a.slug}`)!;
      expect(new Date(r.lastModified!).toISOString().slice(0, 10) >= pageStamp(a), a.slug).toBe(true);
    }
    expect(comparableArtists.length).toBeGreaterThan(afrobeatsArtists.filter((x) => x.swept).length - 1);
  });
});

// ── D-06: the labels the 4 Oct PRs introduced find their pages ────────────
describe("D-06: search finds the shows board, its runs and the Dublin night", () => {
  it("biggest shows → Highest-Grossing Shows", () => {
    expect(searchDocs("biggest shows")[0]?.path).toBe("/records/tours/revenue");
    // Live on 4 Oct: Tours & Live and Dai Dai, not the board.
    expect(searchDocs("biggest shows")[0]?.path).not.toBe("/records/tours");
  });

  it("multi-night → the board that holds the runs", () => {
    expect(searchDocs("multi-night").map((d) => d.path)).toContain("/records/tours/revenue");
    expect(searchDocs("multi-night runs")[0]?.path).toBe("/records/tours/revenue");
  });

  it("dublin and 3arena → the day he played there", () => {
    for (const q of ["dublin", "3arena"]) expect(searchDocs(q).map((d) => d.path), q).toContain("/on-this-day/17-march");
  });
});

// ── D-07: one arena, one spelling ──────────────────────────────────────────
describe("D-07: Montreal's arena is the Bell Centre everywhere", () => {
  it("no board row spells it Centre Bell", () => {
    const venues = [...revenueShows, ...revenueStands].filter((r) => r.city === "Montreal").map((r) => r.venue);
    expect(venues).toContain("Bell Centre");
    expect(venues).not.toContain("Centre Bell");
    expect(tours.flatMap((t) => t.dates ?? []).filter((d) => d.city === "Montreal" && /Bell/.test(d.venue)).map((d) => d.venue)).toEqual(
      expect.arrayContaining(["Bell Centre"]),
    );
  });

  it("every venue the board and the tour dates share in a city is spelled one way", async () => {
    const body = await json(toursJson());
    const dated = new Set(tours.flatMap((t) => t.dates ?? []).map((d) => `${d.city}|${d.venue}`));
    const fold = (v: string) => v.toLowerCase().split(/\s+/).sort().join(" ");
    const foldedDated = new Map([...dated].map((k) => [`${k.split("|")[0]}|${fold(k.split("|")[1])}`, k]));
    const rows = [...body.data.highestGrossingShows, ...body.data.multiNightStands] as { city: string; venue: string }[];
    const split = rows.filter((r) => {
      const twin = foldedDated.get(`${r.city}|${fold(r.venue)}`);
      return twin && twin !== `${r.city}|${r.venue}`;
    });
    expect(split.map((r) => `${r.city}: ${r.venue}`)).toEqual([]);
    // Negative control: the stand as it shipped, "Centre Bell", is caught.
    expect(foldedDated.get(`Montreal|${fold("Centre Bell")}`)).toBe("Montreal|Bell Centre");
  });
});

// ── F-03 / C-08: the per-artist total says it is one ───────────────────────
describe("F-03/C-08: the per-artist plaque total is worded \"artist plaques\"", () => {
  const perArtist = comparableArtists.reduce((n, a) => n + a.releases.reduce((m, r) => m + r.certs.length, 0), 0);

  it("the CSV download, /press and llms.txt say artist plaques", async () => {
    const d = DATA_DOWNLOADS.find((x) => x.slug === "certifications")!;
    expect(d.countOf).toBe("artist plaques");
    expect(d.count).toBe(perArtist);
    const llms = await (await llmsTxt()).text();
    expect(llms).toContain(`/api/v1/certifications.csv (${d.count} artist plaques)`);
    expect(llms).not.toContain(`(${d.count} plaques)`); // shipped
  });

  it("both share cards: the /compare card and the /afrobeats card", () => {
    expect(read("app/compare/opengraph-image.tsx")).toContain('plaques.toLocaleString("en-US")} artist plaques across ${bodies} countries');
    expect(read("app/afrobeats/opengraph-image.tsx")).toContain('toLocaleString("en-US")} artist plaques, each read from the body or label that issued it');
    // The comment's stale "1,212" is gone (the total was 1,338 on 4 Oct).
    expect(read("app/compare/opengraph-image.tsx")).not.toContain("1,212");
  });

  it("the /afrobeats card re-versions with its footer wording, so its URL moves", () => {
    // Faces, read date and total are unchanged, so only the version key moves
    // the id; without it a cached "1,338 plaques" card stays up (review, C-08).
    const [meta] = afrobeatsOgMetadata();
    expect(read("app/afrobeats/opengraph-image.tsx")).toContain("const sig = `v5|");
    // Negative control: the og:image id live served on 5 Oct 2026, which the
    // PR's first push (key still v4) reproduced.
    expect(meta.id).not.toBe("1pez3cv");
  });
});

// ── A-05 (comment only): the money form the countries page prints ──────────
describe("A-05: revenueByCountry.ts no longer says the desktop prints full dollars", () => {
  it("the leaderLine comment matches RevenueCountries' one money form", () => {
    expect(read("app/lib/revenueByCountry.ts")).not.toContain("The desktop prints full dollars, the\n * phone the short form");
    expect(read("app/components/RevenueCountries.tsx")).toContain("usdM");
  });
});

// The rows the C-05 helpers read must stay Burna Boy's own: allItems is his.
it("Burna Boy's ledger is the one announcedPlaques reads", () => {
  expect(announcedPlaques.every((x) => allItems.includes(x.release))).toBe(true);
});
