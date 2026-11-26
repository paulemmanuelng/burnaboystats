/**
 * Box office (spec 4.7) and Box office by country (4.8): the full lists as
 * burnaboystats shows them today, with the leader named from the data
 * wherever the pages name "his" — the artist with the largest summed gross,
 * the artist who leads the most countries — and no artist pinned first in
 * any list (burnaboystats' chips put Burna Boy first, chipOrder; these do
 * not). Every money figure ships beside the display forms the pages print.
 */

import { revenueShows, revenueStands } from "../../data/tourRevenue";
import { showsBoard } from "../showsBoard";
import { nightCounts, pct } from "../showsChips";
import { artistSlug } from "../showsDeepLink";
import { showsBoardTitle } from "../showsTitle";
import { compactGross } from "../grossLabel";
import { numberWord } from "../homeData";
import { runRankCeiling, runsBasis } from "../multiNightRuns";
import { REVENUE_AS_OF, REVENUE_PUBLISHERS, REVENUE_READ_ON, REVENUE_SOURCE, REVENUE_STAMP, revenueRowBody } from "../revenueSource";
import {
  CONTINENT_ORDER,
  continentAnchor,
  countryAnchor,
  leaderLine,
  leadsOnTotal,
  nightsLabel,
  revenueByCountry,
  runsNote,
  summaryLine,
  usdFull,
  usdM,
  type ArtistTotal,
} from "../revenueByCountry";
import { dataLineFor } from "../provenanceSpecs";
import { absoluteDataLine, type Seo } from "./artist";
import { dated, lastModifiedOf } from "./shared";

const money = (value: number) => ({ value, compact: compactGross(value), full: usdFull(value) });

const sourceBlock = () => ({
  line: REVENUE_SOURCE,
  publishers: [...REVENUE_PUBLISHERS],
  readOn: dated(REVENUE_READ_ON),
  asOf: REVENUE_AS_OF,
});

// ── 4.7 ─────────────────────────────────────────────────────────────────────

export function boxOfficeFeed() {
  const b = showsBoard();
  const { top, last } = b;
  const leader = b.artists[0];
  const counts = nightCounts(revenueShows.map((s) => s.artist));
  const seen = Object.keys(counts);
  // By nights on the board, most first, ties in the board's order (the order
  // the artists first appear down the ranked list): no artist moved up.
  const chips = [...seen]
    .sort((x, y) => counts[y] - counts[x] || seen.indexOf(x) - seen.indexOf(y))
    .map((artist) => ({ artist, slug: artistSlug(artist), nights: counts[artist] }));
  const runCeiling = runRankCeiling(
    revenueStands.map((s) => s.revenue),
    revenueShows.map((s) => s.revenue),
  );
  const topLead = `${top.artist}${top.artist.endsWith("s") ? "'" : "'s"} $${(top.revenue / 1e6).toFixed(2)}M ${top.venue} concert`;
  const title = showsBoardTitle(top.artist);

  const seo: Seo & { itemList: { name: string }[] } = {
    title,
    description: `Every verified single-show gross by an African artist — ${b.count} shows, ranked by box-office gross and led by ${topLead}.`,
    shareTitle: title,
    shareDescription: `Every verified single-show gross by an African artist — ${b.count} shows, ranked.`,
    noindex: false,
    dataset: {
      name: "Highest-grossing shows by African artists",
      // Round 14 drops "I have verified" from the page's intro, and so here.
      description: `Every reported single-show gross by an African artist — ${b.count} shows, ranked by box-office gross, led by ${topLead}.`,
      // The page's keywords lead with Burna Boy, the site's subject; here the
      // board's leader by gross, whoever that is.
      keywords: [leader.artist, "box office", "highest-grossing shows", "highest-grossing concert", "African artist revenue", "touring revenue"],
      variableMeasured: ["Artist", "Venue", "Tour", "Year", "Tickets sold", "Gross"],
      dateModified: REVENUE_STAMP,
      // No artist: a list of many artists' shows is about none of them.
      about: [],
    },
    itemList: revenueShows.map((s) => ({ name: `${s.artist} — ${s.venue}, ${s.city} (${s.year})` })),
  };

  return {
    dataAsOf: REVENUE_STAMP,
    data: {
      top: {
        artist: top.artist,
        slug: artistSlug(top.artist),
        venue: top.venue,
        city: top.city,
        flag: top.flag,
        tour: top.tour,
        year: top.year,
        ...(top.tickets ? { tickets: top.tickets } : {}),
        revenue: top.revenue,
        compact: compactGross(top.revenue),
        full: usdFull(top.revenue),
      },
      last: {
        artist: last.artist,
        slug: artistSlug(last.artist),
        venue: last.venue,
        city: last.city,
        flag: last.flag,
        year: last.year,
        revenue: last.revenue,
        compact: compactGross(last.revenue),
        full: usdFull(last.revenue),
      },
      figures: {
        count: b.count,
        artists: b.artists.length,
        millionPlus: b.millionPlus,
        boardGross: money(b.boardGross),
        spread: `${b.spread}×`,
      },
      leader: {
        artist: leader.artist,
        slug: artistSlug(leader.artist),
        top10: [...revenueShows].sort((x, y) => y.revenue - x.revenue).slice(0, 10).filter((s) => s.artist === leader.artist).length,
        share: { value: leader.share, pct: pct(leader.share) },
        gross: money(leader.gross),
        nights: leader.count,
      },
      artists: b.artists.map((x) => ({
        artist: x.artist,
        slug: artistSlug(x.artist),
        count: x.count,
        gross: x.gross,
        share: x.share,
        pct: pct(x.share),
      })),
      chips,
      shows: revenueShows.map((s, i) => ({
        rank: String(i + 1).padStart(2, "0"),
        artist: s.artist,
        slug: artistSlug(s.artist),
        venue: s.venue,
        city: s.city,
        flag: s.flag,
        tour: s.tour,
        year: s.year,
        ...(s.tickets ? { tickets: s.tickets } : {}),
        revenue: s.revenue,
        compact: compactGross(s.revenue),
        full: usdFull(s.revenue),
        // The publisher the row rests on, as the site prints a row's source
        // (revenueRowBody): the raw note is the maintainer's working record
        // (which post, whose screenshot), which no page and no API publishes.
        source: revenueRowBody(s.source),
      })),
      stands: revenueStands.map((s) => ({
        artist: s.artist,
        slug: artistSlug(s.artist),
        venue: s.venue,
        city: s.city,
        flag: s.flag,
        tour: s.tour,
        dates: s.dates,
        nights: s.shows,
        tickets: s.tickets,
        revenue: s.revenue,
        compact: compactGross(s.revenue),
        source: revenueRowBody(s.source),
      })),
      runs: {
        basis: {
          desktop: runsBasis(revenueStands.length, false),
          phone: runsBasis(revenueStands.length, false, { short: true }),
        },
        splitNote: `No per-night split is invented for them: each total would sit in the top ${numberWord(runCeiling).toLowerCase()} of a board of single nights it never had.`,
      },
      nightCounts: counts,
      source: sourceBlock(),
      anyDash: revenueShows.some((s) => !s.tickets),
      dataLine: absoluteDataLine(dataLineFor("tours", "tours")),
      seo,
      share: {
        top: { artist: top.artist, venue: top.venue, city: top.city, year: top.year, revenue: top.revenue, compact: compactGross(top.revenue) },
        leader: { artist: leader.artist, share: pct(leader.share) },
        count: b.count,
      },
      lastModified: lastModifiedOf("/afrobeats/box-office", REVENUE_STAMP),
    },
  };
}

// ── 4.8 ─────────────────────────────────────────────────────────────────────

/** One artist's line in a country or continent, every money figure beside
 *  the one form both layouts print it in (usdM: "$15.50M", "$385K"). */
const totalOut = (a: ArtistTotal) => ({
  artist: a.artist,
  slug: artistSlug(a.artist),
  total: a.total,
  totalM: usdM(a.total),
  shows: a.shows,
  best: a.best
    ? {
        venue: a.best.venue,
        city: a.best.city,
        year: a.best.year,
        revenue: a.best.revenue,
        revenueM: usdM(a.best.revenue),
        ...(a.best.tickets ? { tickets: a.best.tickets } : {}),
      }
    : null,
  stands: a.stands.map((s) => ({ ...s, revenueM: usdM(s.revenue) })),
  runsNote: runsNote(a),
});

export function boxOfficeCountriesFeed() {
  const b = revenueByCountry();

  // Every artist's gross across every country (runs included), largest
  // first: the overall leader is whoever holds the most, named from the data.
  const overall = new Map<string, { total: number }>();
  for (const c of b.countries)
    for (const a of c.artists) overall.set(a.artist, { total: (overall.get(a.artist)?.total ?? 0) + a.total });
  const overallRanked = [...overall.entries()].sort((x, y) => y[1].total - x[1].total || x[0].localeCompare(y[0]));
  const [leadName, lead] = overallRanked[0];

  // Who leads the most countries; ties to the larger overall gross, then name.
  const led = new Map<string, number>();
  for (const c of b.countries) led.set(c.leader.artist, (led.get(c.leader.artist) ?? 0) + 1);
  const grossOf = (artist: string) => overall.get(artist)?.total ?? 0;
  const [mostLedName, mostLedCount] = [...led.entries()].sort(
    (x, y) => y[1] - x[1] || grossOf(y[0]) - grossOf(x[0]) || x[0].localeCompare(y[0]),
  )[0];

  const max = Math.max(...b.countries.map((c) => c.total));
  const summary = summaryLine(b);

  const seo: Seo & { itemList: { name: string }[] } = {
    title: "Highest-Grossing African Artists by Country",
    description: `Who leads every country and continent for reported box office by African artists — ${nightsLabel(b.showCount)} in ${b.countryCount} countries, totals and best nights.`,
    shareTitle: "Highest-grossing African artists by country",
    shareDescription: `Who leads each of ${b.countryCount} countries for reported box office by African artists. ${mostLedName} leads ${mostLedCount}.`,
    noindex: false,
    dataset: {
      name: "Reported box office by country — African artists",
      description: `Reported box-office grosses by African artists summed by country and continent — ${summary} — with each artist's total and best single night.`,
      keywords: [leadName, "box office", "by country", "African artist revenue", "touring revenue", "Boxscore"],
      variableMeasured: ["Country", "Continent", "Artist", "Total reported gross", "Reported nights", "Best single night"],
      dateModified: REVENUE_STAMP,
      about: [],
    },
    itemList: b.countries.map((c) => ({
      name: `${c.name} — ${usdFull(c.total)} reported; led by ${c.leader.artist} (${usdFull(c.leader.total)})`,
    })),
  };

  return {
    dataAsOf: REVENUE_STAMP,
    data: {
      countries: b.countries.map((c) => ({
        flag: c.flag,
        name: c.name,
        continent: c.continent,
        anchor: countryAnchor(c.name),
        total: c.total,
        totalM: usdM(c.total),
        shows: c.shows,
        leader: totalOut(c.leader),
        leaderShare: c.leader.total / c.total,
        leaderLine: { desk: leaderLine(c, usdM), phone: leaderLine(c, usdM, { reported: false }) },
        leadsOnTotal: { desk: leadsOnTotal(c, usdM, "desk"), phone: leadsOnTotal(c, usdM, "phone") },
        artists: c.artists.map(totalOut),
      })),
      continents: b.continents.map((k) => ({
        continent: k.continent,
        anchor: continentAnchor(k.continent),
        total: k.total,
        totalM: usdM(k.total),
        shows: k.shows,
        leader: k.leader ? totalOut(k.leader) : null,
        artists: k.artists.map(totalOut),
        countries: k.countries.map((c) => c.name),
      })),
      totals: {
        grandTotal: b.grandTotal,
        grandTotalM: usdM(b.grandTotal),
        showCount: b.showCount,
        singleShows: b.singleShows,
        standCount: b.standCount,
        countryCount: b.countryCount,
        continentCount: b.continentCount,
        continentsAll: CONTINENT_ORDER.length,
      },
      mostLed: { artist: mostLedName, slug: artistSlug(mostLedName), count: mostLedCount, of: b.countryCount },
      overallLeader: {
        artist: leadName,
        slug: artistSlug(leadName),
        total: lead.total,
        totalM: usdM(lead.total),
        share: { value: lead.total / b.grandTotal, pct: pct(lead.total / b.grandTotal) },
        // The board's runs, as the share line counts them: "…of every
        // reported gross, 4 runs included" (runsBasis over every run).
        runs: b.standCount,
        runsBasis: runsBasis(b.standCount, true),
      },
      others: {
        total: b.grandTotal - lead.total,
        totalM: usdM(b.grandTotal - lead.total),
        artists: overall.size - 1,
      },
      ladder: b.countries.map((c, i) => ({
        rank: String(i + 1).padStart(2, "0"),
        flag: c.flag,
        name: c.name,
        leader: c.leader.artist,
        total: c.total,
        totalM: usdM(c.total),
        w: c.total / max,
        leaderShare: c.leader.total / c.total,
      })),
      summary,
      dataLine: absoluteDataLine(dataLineFor("tours", "tours")),
      source: sourceBlock(),
      seo,
      lastModified: lastModifiedOf("/afrobeats/box-office/countries", REVENUE_STAMP),
    },
  };
}
