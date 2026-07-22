import { totalAwards, countryCount, allItems, tierOf, daiDaiCertCount } from "../data/certifications";
import { numberOnes, chartEntryCount, chartCountryCount, daiDaiNumberOnes, daiDaiChartEntryCount } from "../data/charts";
import { monthlyListenersValues } from "../data/trends";
import { totalWins, totalNominations, ceremonyCount } from "../data/awards";

// Shareable "stat cards" — a Burna Boy headline stat rendered as a downloadable
// image (the Receiptify/Volt.fm-style viral artifact). Values are data-driven so
// the cards never go stale. Server-only (pulls the big data modules).

// A small "FIFA-style" supporting stat (value + short label).
export interface SignatureStat {
  value: string;
  label: string;
}

export interface StatCard {
  id: string;
  value: string;
  label: string;
  kicker: string;
  chip: string;
  // Three supporting stats, each relevant to THIS card's headline (not generic).
  stats: SignatureStat[];
}

// Count certification plaques of a given tier across the whole catalogue.
const tierCount = (tier: "diamond" | "platinum") =>
  allItems.reduce((n, it) => n + it.certs.filter((c) => tierOf(c.level) === tier).length, 0);

export function getStatCards(): StatCard[] {
  const listeners = monthlyListenersValues[monthlyListenersValues.length - 1];
  const diamond = tierCount("diamond");
  const platinum = tierCount("platinum");

  return [
    {
      id: "african-giant",
      value: `${totalAwards()}`,
      label: `certifications across ${countryCount} countries`,
      kicker: "The most-certified African artist in history",
      chip: "Most-certified",
      stats: [
        { value: `${countryCount}`, label: "Countries" },
        { value: `${diamond}`, label: "Diamond" },
        { value: `${platinum}`, label: "Platinum" },
      ],
    },
    {
      id: "dai-dai",
      value: "No. 1",
      label: "“Dai Dai” — the biggest song in the world",
      kicker: "The 2026 FIFA World Cup anthem, with Shakira",
      chip: "Dai Dai · No. 1",
      stats: [
        { value: `${daiDaiNumberOnes}`, label: "Country No.1s" },
        { value: `${daiDaiChartEntryCount}`, label: "Chart entries" },
        { value: `${daiDaiCertCount}`, label: "Certifications" },
      ],
    },
    {
      id: "no1s",
      value: `${numberOnes}`,
      label: "No. 1 chart placements worldwide",
      kicker: "Nigeria, the UK, the Netherlands, Colombia & more",
      chip: "No. 1s",
      stats: [
        { value: `${chartCountryCount}`, label: "Countries" },
        { value: `${chartEntryCount}`, label: "Chart entries" },
        { value: "No.1", label: "Global 200" },
      ],
    },
    {
      id: "listeners",
      value: `${listeners}M`,
      label: "Spotify monthly listeners",
      kicker: "The most of any African artist",
      chip: "Monthly listeners",
      stats: [
        { value: "17.1M", label: "Followers" },
        { value: "747M", label: "YouTube peak" },
        { value: "No.1", label: "Spotify Global" },
      ],
    },
    {
      id: "tour",
      value: "$30.46M",
      label: "highest-grossing African tour ever",
      kicker: "The I Told Them… Tour",
      chip: "Record tour",
      stats: [
        { value: "$6.15M", label: "Biggest concert" },
        { value: "302K", label: "Tickets sold" },
        { value: "22", label: "Shows" },
      ],
    },
    {
      id: "grammy",
      value: "2021",
      label: "Grammy winner — Best Global Music Album",
      kicker: "Twice as Tall",
      chip: "Grammy",
      stats: [
        { value: `${totalWins}`, label: "Award wins" },
        { value: `${totalNominations}`, label: "Nominations" },
        { value: `${ceremonyCount}`, label: "Award bodies" },
      ],
    },
    {
      id: "concert",
      value: "$6.15M",
      label: "biggest concert by an African artist",
      kicker: "London Stadium · June 2024",
      chip: "Biggest concert",
      stats: [
        { value: "$30.46M", label: "Record tour" },
        { value: "80K", label: "Capacity" },
        { value: "1st", label: "UK stadium" },
      ],
    },
    {
      id: "followers",
      value: "17.1M",
      label: "Spotify followers — most of any African artist",
      kicker: "The most-followed African artist on Spotify",
      chip: "Followers",
      stats: [
        { value: `${listeners}M`, label: "Monthly listeners" },
        { value: "747M", label: "YouTube peak" },
        { value: "#1", label: "Most-followed" },
      ],
    },
  ];
}
