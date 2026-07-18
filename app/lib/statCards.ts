import { totalAwards, countryCount } from "../data/certifications";
import { numberOnes } from "../data/charts";
import { monthlyListenersValues } from "../data/trends";

// Shareable "stat cards" — a Burna Boy headline stat rendered as a downloadable
// image (the Receiptify/Volt.fm-style viral artifact). Values are data-driven so
// the cards never go stale. Server-only (pulls the big data modules).
export interface StatCard {
  id: string;
  value: string;
  label: string;
  kicker: string;
  chip: string;
}

export function getStatCards(): StatCard[] {
  const listeners = monthlyListenersValues[monthlyListenersValues.length - 1];
  return [
    { id: "african-giant", value: `${totalAwards()}`, label: `certifications across ${countryCount} countries`, kicker: "The most-certified African artist in history", chip: "Most-certified" },
    { id: "dai-dai", value: "No. 1", label: "“Dai Dai” — the biggest song in the world", kicker: "The 2026 FIFA World Cup anthem, with Shakira", chip: "Dai Dai · No. 1" },
    { id: "no1s", value: `${numberOnes}`, label: "No. 1 chart placements worldwide", kicker: "Nigeria, the UK, the Netherlands, Colombia & more", chip: "No. 1s" },
    { id: "listeners", value: `${listeners}M`, label: "Spotify monthly listeners", kicker: "The most of any African artist", chip: "Monthly listeners" },
    { id: "tour", value: "$30.46M", label: "highest-grossing African tour ever", kicker: "The I Told Them… Tour", chip: "Record tour" },
    { id: "grammy", value: "2021", label: "Grammy winner — Best Global Music Album", kicker: "Twice as Tall", chip: "Grammy" },
    { id: "concert", value: "$6.15M", label: "biggest concert by an African artist", kicker: "London Stadium · June 2024", chip: "Biggest concert" },
    { id: "followers", value: "17.0M", label: "Spotify followers — most of any African artist", kicker: "The most-followed African artist on Spotify", chip: "Followers" },
  ];
}
