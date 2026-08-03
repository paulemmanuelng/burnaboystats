import {
  numberOnesByRelease,
  numberOneCountryCount,
  chartingReleaseCount,
  marketProfile,
  marketsByVolume,
  certsByCountry,
  diamondCerts,
  diamondCountries,
  chartedCountryCount,
  countryNumberOnes,
  countryNumberOneReleases,
  daiDaiCountryNumberOnes,
  daiDaiNumberOneShare,
} from "./analysis";
import { daiDaiChartEntryCount, chartEntryCount } from "../data/charts";
import { totalAwards } from "../data/certifications";

// The four findings, lifted out of the /analysis page so the homepage can lead
// with one. They were the only genuine editorial voice on the site and they sat
// three clicks deep, behind a footer link.
//
// Numbers are interpolated from lib/analysis.ts so a data change can never
// leave the prose quoting a stale figure, and tests/analysis.test.ts guards the
// shape each argument rests on.
/** One bar in a finding's chart column. `hot` is the row the finding is about. */
export interface FindingBar {
  name: string;
  value: string;
  /** 0–1 of the largest bar in this set. */
  frac: number;
  hot?: boolean;
}

export interface Finding {
  id: string;
  kicker: string;
  h: string;
  stats: { v: string; l: string }[];
  body: string[];
  links: { href: string; label: string }[];
  /** The evidence, charted — the desktop page runs it beside the prose. */
  chartLabel: string;
  bars: FindingBar[];
  chartNote: string;
}

// Bars are scaled against the largest in their own set, so each chart answers
// its own question rather than being comparable across findings.
const toBars = (rows: { name: string; n: number; hot?: boolean }[]): FindingBar[] => {
  const max = Math.max(...rows.map((r) => r.n), 1);
  return rows.map((r) => ({ name: r.name, value: String(r.n), frac: r.n / max, hot: r.hot }));
};

const uk = marketProfile("UK");
const us = marketProfile("US");
const fr = marketProfile("FR");
const topCert = certsByCountry[0];
const diamondHome = diamondCerts[0]?.country ?? "France";
const ddEntryShare = Math.round((daiDaiChartEntryCount / chartEntryCount) * 100);

// Each finding: a claim, the evidence, and what follows from it. The numbers are
// interpolated from lib/analysis.ts so a data change can never leave the prose
// quoting a stale figure — and tests/analysis.test.ts guards the shape each
// argument rests on.
export const findings: Finding[] = [
  {
    id: "one-song",
    kicker: "Concentration",
    h: "One song holds half the record book",
    stats: [
      { v: `${daiDaiCountryNumberOnes}`, l: "Dai Dai country No. 1s" },
      { v: `${countryNumberOnes}`, l: "career country No. 1s" },
      { v: `${daiDaiNumberOneShare}%`, l: "of them, from one song" },
    ],
    body: [
      `Across a career spanning eight albums, Burna Boy has topped a national chart ${countryNumberOnes} times. ${daiDaiCountryNumberOnes} of those — ${daiDaiNumberOneShare}% — came from “Dai Dai” alone.`,
      `That is a startling degree of concentration. Most artists accumulate No. 1s gradually across a decade; here, a single 2026 World Cup record delivered more chart-toppers than the rest of the catalogue combined. It also accounts for ${ddEntryShare}% of all ${chartEntryCount} chart entries the site tracks.`,
      `The honest reading cuts both ways. It is the clearest evidence yet that a global platform — a World Cup halftime stage — converts into chart dominance at a scale ordinary promotion cannot buy. But it also means the headline “No. 1s” figure is far more fragile than it looks: strip out one song and the career total more than halves.`,
    ],
    links: [
      { href: "/dai-dai", label: "The Dai Dai story" },
      { href: "/records/charts", label: "Every chart entry" },
    ],
    chartLabel: "No. 1s by release",
    bars: toBars(
      numberOnesByRelease
        .slice(0, 8)
        .map((r) => ({ name: r.title, n: r.count, hot: r.title === "Dai Dai" }))
    ),
    chartNote:
      "Country charts only — the two Billboard Global charts are excluded, since a worldwide chart isn't a market.",
  },
  {
    id: "britain-not-america",
    kicker: "Geography",
    h: "He is a far bigger chart act in Britain than in America",
    stats: [
      { v: `${uk.entries}`, l: "UK chart entries" },
      { v: `${us.entries}`, l: "US chart entries" },
      { v: `${us.top10s}`, l: "US top 10s, ever" },
    ],
    body: [
      `The United Kingdom is his single strongest market by volume: ${uk.entries} chart entries, ${uk.top10s} of them top 10, and ${uk.numberOnes} No. 1s. The United States, for all the coverage it attracts, has produced ${us.entries} entries — and not one top 10 on either the Hot 100 or the Billboard 200. His best American peak is No. ${us.bestPeak}.`,
      `The pattern holds beyond those two. ${marketsByVolume
        .slice(0, 5)
        .map((m) => m.country)
        .join(", ")} lead the table, and the countries where he reaches No. 1 are overwhelmingly European.`,
      `This matters because the standard narrative treats American success as the measure of an Afrobeats crossover. By that yardstick Burna Boy looks like a near-miss. By the actual record, he is an established European chart fixture who happens to be a cult concern in the US — a materially different, and more interesting, career shape.`,
    ],
    links: [
      { href: "/records/charts", label: "Chart records by country" },
      { href: "/music/wgft", label: "His highest US peak" },
    ],
    chartLabel: "Chart entries by market",
    bars: toBars(
      marketsByVolume
        .slice(0, 10)
        .map((m) => ({ name: m.country, n: m.entries, hot: m.code === "UK" || m.code === "US" }))
    ),
    chartNote:
      "Top 10 markets by number of charting releases. The US sits high on volume and nowhere on peaks.",
  },
  {
    id: "diamond-country",
    kicker: "Sales depth",
    h: `${topCert.country} certifies him most — ${diamondHome} crowns him`,
    stats: [
      { v: `${topCert.count}`, l: `${topCert.country} certifications` },
      { v: `${diamondCerts.length}`, l: "Diamond certifications" },
      { v: `${diamondCountries.length}`, l: "country awarded them" },
    ],
    body: [
      `${topCert.country} has certified him ${topCert.count} times, more than any other market. But volume and depth are not the same thing. Every one of his ${diamondCerts.length} Diamond certifications — the highest tier there is — was awarded by a single body: ${diamondCerts[0]?.body ?? "SNEP"} in ${diamondHome}.`,
      `${diamondHome} is also where ${fr.entries} of his releases have charted, ${
        fr.numberOnes === 1 ? "one of them" : `${fr.numberOnes} of them`
      } at No. 1. No other market comes close to converting his catalogue into top-tier sales awards at that rate.`,
      `The takeaway for anyone reading the ${totalAwards()}-certification headline: a certification total is a sum of very different currencies. Counting awards flatters markets that certify early and often; counting tiers reveals where a catalogue genuinely sells. On the second measure, ${diamondHome} is his most important country in the world.`,
    ],
    links: [
      { href: "/certifications", label: "All certifications" },
      { href: "/music/on-the-low", label: "A French Diamond record" },
    ],
    chartLabel: "Certifications by country",
    bars: toBars(
      certsByCountry.slice(0, 10).map((c) => ({
        name: c.country,
        n: c.count,
        hot: c.country === topCert.country || c.country === diamondHome,
      }))
    ),
    chartNote: `${topCert.country} leads on volume; ${diamondHome} holds all ${diamondCerts.length} Diamond awards. Volume and depth are different measures.`,
  },
  {
    id: "reach-vs-dominance",
    kicker: "Reach vs dominance",
    h: "The reach is enormous. The dominance is narrow.",
    stats: [
      { v: `${chartedCountryCount}`, l: "countries charted" },
      { v: `${countryNumberOneReleases}`, l: "releases that ever hit No. 1" },
      { v: `${chartEntryCount}`, l: "total chart entries" },
    ],
    body: [
      `He has entered the national chart of ${chartedCountryCount} different countries — a genuinely rare footprint, and the strongest single argument for the “global artist” label. Yet of everything he has released, only ${countryNumberOneReleases} records have ever reached No. 1 anywhere.`,
      `Those two facts describe one artist: enormous breadth, concentrated peaks. He charts almost everywhere and wins in relatively few places. It is the profile of an artist whose audience is wide and shallow by market rather than narrow and deep — which is exactly what you would expect from a catalogue that travels on streaming and festival billing rather than on any one country's radio.`,
      `It also explains why a single event-driven song could move the totals so violently. When a career is built on breadth, a record that finally converts that breadth into No. 1s rewrites the summary overnight.`,
    ],
    links: [
      { href: "/records/tours/map", label: "Where he's performed" },
      { href: "/records/africas-biggest", label: "How he ranks in Africa" },
    ],
    chartLabel: "Reach against dominance",
    bars: toBars([
      { name: "Countries charted", n: chartedCountryCount, hot: true },
      { name: "Countries with a No. 1", n: numberOneCountryCount, hot: true },
      { name: "Charting releases", n: chartingReleaseCount },
      { name: "Releases with a No. 1", n: countryNumberOneReleases },
    ]),
    chartNote:
      "Breadth against depth, on the same scale. The gap between the pairs is the finding.",
  },
];

