import {
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
export interface Finding {
  id: string;
  kicker: string;
  h: string;
  stats: { v: string; l: string }[];
  body: string[];
  links: { href: string; label: string }[];
}

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
  },
];

