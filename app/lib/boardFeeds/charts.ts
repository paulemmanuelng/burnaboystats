/**
 * Artist · Charts (spec 4.4): app/afrobeats/[artist]/charts/page.tsx's
 * figures, orders and sentences, every one in its Billboard twin, with each
 * row flagged `billboard` where the switch takes it down. The source note is
 * round 14's neutral form ("the same standard for every artist on the board").
 */

import {
  AFROBEATS_LAST_CHART_SWEEP,
  bestPeaks,
  chartEntries,
  chartGlobalLines,
  chartNo1s,
  chartSourceClause,
  chartTerritories,
} from "../../data/afrobeats";
import { BURNA_LAST_CHART_SWEEP } from "../../data/charts";
import { byReachOrder } from "../chartOrder";
import { MOST_CHARTED_SHOWN, mostCharted, regionOf } from "../chartRegions";
import { monogramFor } from "../monogram";
import { count } from "../plural";
import { aboutOf, segmentsOf, type Seo } from "./artist";
import {
  artistRef,
  boardArtistBySlug,
  chartStamp,
  chartsHref,
  dated,
  isBillboardRow,
  isBurna,
  lastModifiedOf,
  liveBoardOf,
  liveHref,
  peakMeta,
  twin,
  type BoardArtist,
} from "./shared";

const chartTitle = (a: BoardArtist) => {
  const n = chartNo1s(a);
  return n ? `${a.name} Chart History — ${count(n, "No. 1", "No. 1s")} & Chart Peaks` : `${a.name} Chart History & Chart Peaks`;
};
const no1Tail = (n: number, one: string, many: string, lead: string) => (n ? `${lead}${count(n, one, many)}` : "");
const ofThemAtNo1 = (n: number) => (n ? `, ${n} of them at No. 1` : "");

export function chartsFeed(slug: string) {
  const a = boardArtistBySlug(slug);
  if (!a || a.charts.length === 0) return null;

  const sweep = dated(isBurna(a) ? BURNA_LAST_CHART_SWEEP : AFROBEATS_LAST_CHART_SWEEP);
  const codes = [...new Set(a.charts.flatMap((r) => r.entries.map((e) => e.c)))];

  /** The page's own orders, for either twin. */
  const ordersOf = (x: BoardArtist) => {
    const byName = [...new Set(x.charts.flatMap((r) => r.entries.map((e) => e.c)))].sort((p, q) =>
      peakMeta(a, p).name.localeCompare(peakMeta(a, q).name),
    );
    return {
      split: {
        albums: x.charts.filter((r) => r.kind === "Albums").sort(byReachOrder).map((r) => r.title),
        singles: x.charts.filter((r) => r.kind === "Singles").sort(byReachOrder).map((r) => r.title),
      },
      rail: [...byName].sort(
        (p, q) =>
          x.charts.filter((r) => r.entries.some((e) => e.c === q)).length -
          x.charts.filter((r) => r.entries.some((e) => e.c === p)).length,
      ),
    };
  };

  const statsOf = (x: BoardArtist) => {
    const globalLines = chartGlobalLines(x);
    return {
      entries: chartEntries(x),
      no1s: chartNo1s(x),
      territories: chartTerritories(x),
      releases: x.charts.length,
      globalLines,
      territoryNote: globalLines ? `incl. ${count(globalLines, "global chart", "global charts")}` : "national charts",
    };
  };

  const seoOf = (x: BoardArtist): Seo => {
    const entries = chartEntries(x);
    const territories = chartTerritories(x);
    const no1s = chartNo1s(x);
    return {
      title: chartTitle(x),
      description: `Every ${a.name} official chart peak worldwide — ${count(entries, "entry", "entries")} across ${count(territories, "territory", "territories")}, read from ${chartSourceClause(x, true)}.`,
      shareTitle: `${a.name} — Official Chart Peaks`,
      shareDescription: `${count(entries, "entry", "entries")}, ${count(territories, "territory", "territories")}${no1Tail(no1s, "No. 1", "No. 1s", ", ")}.`,
      noindex: false,
      dataset: {
        name: `${a.name} official chart peaks by country`,
        description: `${a.name}'s peak positions on official singles and album charts across ${count(territories, "territory", "territories")} — every charting release and its highest position, chart by chart, read from ${chartSourceClause(x)}${no1Tail(no1s, "No. 1 peak", "No. 1 peaks", ", including ")}.`,
        keywords: [a.name, "chart positions", "official charts", "peak chart position", "Afrobeats charts"],
        variableMeasured: ["Peak chart position", "Country / territory", "Release", "Chart"],
        dateModified: chartStamp(a),
        about: [aboutOf(a)],
      },
    };
  };

  const orders = twin(a, ordersOf);
  const live = liveBoardOf(a.slug);

  return {
    dataAsOf: chartStamp(a),
    data: {
      artist: artistRef(a),
      segments: segmentsOf(a),
      releases: a.charts.map((r) => ({
        title: r.title,
        kind: r.kind,
        ...(r.cover ? { cover: r.cover } : {}),
        letter: monogramFor(r.title),
        entries: r.entries.map((e) => {
          const m = peakMeta(a, e.c);
          return {
            c: e.c,
            country: m.name,
            flag: m.flag,
            body: m.body,
            peak: e.peak,
            ...(e.note ? { note: e.note } : {}),
            ...(e.weeksAtPeak !== undefined ? { weeksAtPeak: e.weeksAtPeak } : {}),
            ...(e.weeks !== undefined ? { weeks: e.weeks } : {}),
            billboard: isBillboardRow(a, e.c),
          };
        }),
      })),
      order: { all: orders.all.split, withoutBillboard: orders.withoutBillboard.split },
      railOrder: { all: orders.all.rail, withoutBillboard: orders.withoutBillboard.rail },
      mostCharted: twin(a, (x) => mostCharted(x.charts, MOST_CHARTED_SHOWN)),
      countries: Object.fromEntries(
        codes.map((code) => {
          const m = peakMeta(a, code);
          return [code, { code, name: m.name, flag: m.flag, body: m.body, region: regionOf(code) }];
        }),
      ),
      stats: twin(a, statsOf),
      sourceClause: twin(a, (x) => ({ long: chartSourceClause(x), short: chartSourceClause(x, true) })),
      chartSweep: sweep,
      ledes: twin(a, (x) => {
        const s = statsOf(x);
        return {
          phone: `${count(s.entries, "entry", "entries")} across ${count(s.territories, "territory", "territories")}${ofThemAtNo1(s.no1s)} — every peak read from ${chartSourceClause(x)}.`,
          desktop: `${a.name}’s peak positions on the world’s official charts — ${count(s.entries, "entry", "entries")} across ${count(s.territories, "territory", "territories")}${ofThemAtNo1(s.no1s)}, read from ${chartSourceClause(x)}, not from a platform or genre listing.`,
        };
      }),
      sourceNote: twin(
        a,
        (x) =>
          `Peaks on ${chartSourceClause(x)} — the same standard for every artist on the board. Genre and platform charts excluded; airplay charts only where a country publishes no other. Last re-read in the board's chart sweep of ${sweep.long}.`,
      ),
      liveHref: live ? liveHref(a.slug) : null,
      seo: twin(a, seoOf),
      share: twin(a, (x) => ({
        bestPeaks: bestPeaks(x, 8).map((e) => {
          const m = peakMeta(a, e.c);
          return { c: e.c, flag: m.flag, name: m.name, peak: e.peak };
        }),
      })),
      lastModified: lastModifiedOf(chartsHref(a.slug), chartStamp(a)),
    },
  };
}
