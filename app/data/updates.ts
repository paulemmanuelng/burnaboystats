// LATEST UPDATES — a running log of real facts about Burna Boy (chart peaks,
// certifications, records, streaming milestones), so a repeat visitor can see
// what's new without spotting the diff themselves. Add a new entry to the TOP
// of the array whenever a real fact changes — and move it to the top even if
// you're only updating an existing figure, so the freshest fact always leads.
//
// This list is Burna Boy news only — never log site/dev changes here (new
// filters, new pages, SEO tweaks, etc.). Nobody visiting this page cares that
// a meta description got shorter.
//
// Every entry must read as news ABOUT BURNA BOY, not as dev/changelog copy —
// state the fact itself, never "logged X, fixed Y, added a missing Z" (that's
// how the fact was produced, not the fact).
//
// Vary sentence openers — don't start every entry with "Burna Boy". Lead with
// the number, the song, or the milestone instead. Use past tense for facts
// that were true before today and are only being caught up on now (e.g. a
// career award tally) — reserve present/"just happened" phrasing for things
// that are genuinely new this week (a debut chart peak, a fresh streaming high).

export type UpdateCategory = "Charts" | "Certifications" | "Streaming" | "Firsts & Records" | "Awards" | "Tours" | "Lifestyle";

export interface Update {
  date: string; // ISO "YYYY-MM-DD"
  category: UpdateCategory;
  text: string;
  href: string;
}

export const updates: Update[] = [
  {
    date: "2026-07-19",
    category: "Firsts & Records",
    text: "History made: Shakira & Burna Boy performed “Dai Dai” at the first-ever FIFA World Cup Final halftime show — Burna Boy the first African artist to headline a World Cup halftime show, on a bill with Madonna, BTS & Justin Bieber.",
    href: "/dai-dai",
  },
  {
    date: "2026-07-19",
    category: "Charts",
    text: "“Dai Dai” tops iTunes worldwide — No. 1 on the iTunes song chart in dozens of countries, including a new No. 1 in the US, plus the UK, Canada, France, Ireland, Spain, the Netherlands, Norway & Switzerland.",
    href: "/dai-dai",
  },
  {
    date: "2026-07-19",
    category: "Streaming",
    text: "53.89 million monthly listeners: Burna Boy sets a new all-time Spotify peak of 53,893,724 — now No. 50 in the world, and the most of any African artist.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-19",
    category: "Streaming",
    text: "“Dai Dai” crosses 200 million Spotify streams in just 65 days — Burna Boy's 15th song past 200M, the most of any African artist — and has now spent 13 days at No.1 on Spotify's global chart.",
    href: "/dai-dai",
  },
  {
    date: "2026-07-19",
    category: "Charts",
    text: "More new charts for “Dai Dai”: No.10 on the global Apple Music Top Songs chart — Burna Boy's second straight year in the global Apple Music Top 10, after Gunna's “WGFT” (No.8, 2025) — and a No.17 debut in Malaysia (RIM).",
    href: "/dai-dai",
  },
  {
    date: "2026-07-18",
    category: "Charts",
    text: "A UK first: “Dai Dai” becomes the first FIFA World Cup song ever to reach the Official Singles Top 10, peaking at No.5 — the highest-charting World Cup song in UK history, surpassing Shakira's own “Waka Waka” (No.21 in 2010).",
    href: "/dai-dai",
  },
  {
    date: "2026-07-17",
    category: "Charts",
    text: "More “Dai Dai” climbs: the World Cup anthem hits new peaks of No.5 in the UK, No.6 in Italy, No.14 in Ireland and No.35 in Finland on their official singles charts.",
    href: "/dai-dai",
  },
  {
    date: "2026-07-17",
    category: "Tours",
    text: "Uganda's Triplets Ghetto Kids will join Shakira and Burna Boy on stage for “Dai Dai” at the 2026 World Cup Final halftime show on 19 July — Shakira invited the viral Kampala dance group herself.",
    href: "/dai-dai",
  },
  {
    date: "2026-07-16",
    category: "Charts",
    text: "Fresh “Dai Dai” peaks confirmed: the World Cup anthem reaches No.2 in Lithuania, No.3 in Nigeria and Uruguay, No.9 in Poland and No.12 in South Africa, and debuts at No.15 in New Zealand — now a No.1 in 15 countries.",
    href: "/dai-dai",
  },
  {
    date: "2026-07-16",
    category: "Streaming",
    text: "714 million on YouTube: Burna Boy becomes the first African artist in history to pass 700 million monthly audience on YouTube Music — now at 714 million, the biggest of any African artist.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-16",
    category: "Charts",
    text: "No.1 in the Middle East and Luxembourg: “Dai Dai” tops the Official MENA Chart's Top 20 and Luxembourg's Billboard chart, debuts at No.14 in Egypt and climbs to new peaks of No.26 in Hungary and No.21 in Israel.",
    href: "/records/charts",
  },
  {
    date: "2026-07-16",
    category: "Certifications",
    text: "40 certifications in a year: fresh Gold plaques for “Dai Dai” in Hungary (MAHASZ) and Slovakia (ČNS IFPI) take Burna Boy past 40 international certifications in 2026 — the most any African artist has earned in a single calendar year.",
    href: "/certifications",
  },
  {
    date: "2026-07-14",
    category: "Streaming",
    text: "The biggest song in the world: “Dai Dai” is No. 1 on Spotify's Global chart — the most-streamed song on the planet, topping both the Weekly and Daily Top Songs Global charts.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-14",
    category: "Charts",
    text: "#55 on the Billboard Hot 100: “Dai Dai” climbs 12 places to a new peak in its fourth week — and the Shakira & Burna Boy World Cup anthem is still rising elsewhere, hitting new highs on the Canadian Hot 100 (No.16), in the Czech Republic (No.8) and Singapore (No.20), plus a No.10 debut in Latvia.",
    href: "/records/charts",
  },
  {
    date: "2026-07-13",
    category: "Firsts & Records",
    text: "No.1 on the Billboard Global 200: “Dai Dai” becomes the first song by an African artist to top Billboard's flagship worldwide chart, per Billboard — Burna Boy's third week atop the Global 200 Excl. US too.",
    href: "/records/firsts",
  },
  {
    date: "2026-07-13",
    category: "Charts",
    text: "No.1 in France: “Dai Dai” climbs to the top of France's official SNEP Singles Chart (+2 from No.3) — a major-market chart-topper for the Shakira & Burna Boy anthem, which also just went Gold there.",
    href: "/records/charts",
  },
  {
    date: "2026-07-13",
    category: "Certifications",
    text: "Gold in France: “Dai Dai” is certified Single Or by SNEP, France's official body — 15 million equivalent streams for the Shakira collaboration.",
    href: "/certifications",
  },
  {
    date: "2026-07-13",
    category: "Charts",
    text: "iTunes domination: the World Cup anthem “Dai Dai” has topped Apple's Worldwide iTunes Song chart and reached No.1 on national iTunes download charts in more than 55 countries, from Argentina and Canada to Nigeria and the UAE.",
    href: "/records/charts",
  },
  {
    date: "2026-07-12",
    category: "Streaming",
    text: "699 million on YouTube: Burna Boy's monthly-audience peak climbs to a new high — the biggest of any African artist, and one of only six singers ever above it, behind only Bruno Mars, Rosé, Lady Gaga, Shakira and Michael Jackson.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-11",
    category: "Tours",
    text: "On the bill in Rotterdam: Burna Boy plays the North Sea Jazz Festival's landmark 50th edition on Saturday 11 July, a marquee name alongside John Legend & The Roots, Diana Krall and Thundercat.",
    href: "/records/tours",
  },
  {
    date: "2026-07-11",
    category: "Firsts & Records",
    text: "Oceania records stack up: the No Sign of Weakness run grossed $3.12M from 30,946 tickets across four arena shows — the highest-grossing tour and most tickets ever by an African act in the region.",
    href: "/records/firsts",
  },
  {
    date: "2026-07-11",
    category: "Charts",
    text: "Uruguay joins the map for “Dai Dai”: the Shakira collaboration debuts at No.5 on the CUD Monthly Digital Chart for June.",
    href: "/records/charts",
  },
  {
    date: "2026-07-09",
    category: "Charts",
    text: "Fresh “Dai Dai” peaks: No.8 in Italy, No.13 in the UK, No.16 in Ireland, No.10 on Poland's streaming chart and No.32 in Australia — plus a No.44 debut in Finland.",
    href: "/records/charts",
  },
  {
    date: "2026-07-09",
    category: "Awards",
    text: "Now 80 career award wins: Burna Boy's Best Afrobeats Entertainer trophy from the 2023 IRAWMA is confirmed against the ceremony's own winners list, across 43 award bodies from 206 nominations.",
    href: "/records/awards",
  },
  {
    date: "2026-07-09",
    category: "Charts",
    text: "Argentina makes 13: “Dai Dai” hits No.1 on the Billboard Argentina Hot 100 — a 13th country where the Shakira collaboration has topped the chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-09",
    category: "Streaming",
    text: "New No.1 on YouTube Music: Burna Boy's 662 million monthly audience peak is now the highest of any African artist, overtaking Tyla.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-09",
    category: "Certifications",
    text: "“Dai Dai” with Shakira goes 2× Latin Platinum: the RIAA certifies it for over 120,000 units in the US Latin market.",
    href: "/certifications",
  },
  {
    date: "2026-07-05",
    category: "Tours",
    text: "Set to headline the 2026 FIFA World Cup Final halftime show (19 July) — the first African artist ever to perform at one — on a bill with Madonna, Shakira, BTS, Justin Bieber and Coldplay.",
    href: "/records/tours",
  },
  {
    date: "2026-07-05",
    category: "Charts",
    text: "Another No.1 for “Dai Dai”: it tops Greece's official IFPI singles chart — a 12th chart-topping country.",
    href: "/records/charts",
  },
  {
    date: "2026-07-05",
    category: "Charts",
    text: "More climbs for “Dai Dai”: up to No.3 in Portugal, No.15 in the Czech Republic and No.26 in Israel, plus a debut at No.22 in Denmark.",
    href: "/records/charts",
  },
  {
    date: "2026-07-05",
    category: "Charts",
    text: "A new market for “Dai Dai”: a debut at No.25 on Singapore's official RIAS chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-05",
    category: "Charts",
    text: "More new peaks for “Dai Dai”: No.6 in Portugal, No.19 in Canada, No.39 in Brazil and No.67 on the US Billboard Hot 100.",
    href: "/records/charts",
  },
  {
    date: "2026-07-05",
    category: "Streaming",
    text: "50 million Spotify monthly listeners: Burna Boy becomes the first African artist in history to reach the mark.",
    href: "/records/firsts",
  },
  {
    date: "2026-07-05",
    category: "Charts",
    text: "A new peak of No.3 on the Billboard Global 200 — “Dai Dai” jumps six places on the world's biggest chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-05",
    category: "Charts",
    text: "New peaks for “Dai Dai”: No.1 in Lebanon and a new high of No.2 in India.",
    href: "/records/charts",
  },
  {
    date: "2026-07-05",
    category: "Streaming",
    text: "644 million monthly audience on YouTube Music — the first Nigerian artist past 600 million, now second among African artists behind only Tyla.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-05",
    category: "Certifications",
    text: "Gold in Spain: “Dai Dai” is certified Gold by Promusicae, past 50,000 units sold.",
    href: "/certifications",
  },
  {
    date: "2026-07-05",
    category: "Charts",
    text: "Up to No.3 in France: “Dai Dai” climbs to a new peak on the SNEP official singles chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-05",
    category: "Charts",
    text: "Now No.1 on both of Belgium's regional charts at once: “Dai Dai” tops the Flanders Top 50 after already leading Wallonia.",
    href: "/records/charts",
  },
  {
    date: "2026-07-05",
    category: "Lifestyle",
    text: "A vintage Ferrari Testarossa joins the fleet — spotted in London before being moved into his Lagos penthouse, taking the reported car collection to 19 vehicles worth over $18 million.",
    href: "/records/cars",
  },
  {
    date: "2026-07-05",
    category: "Lifestyle",
    text: "Two Mercedes-Maybach GLS 600s: Burna Boy bought a pair — gifting one to his mother and keeping the other for his own garage — with his confirmed collection now at 15 cars worth a reported $16.46M.",
    href: "/records/cars",
  },
  {
    date: "2026-07-05",
    category: "Lifestyle",
    text: "A ₦9 billion one-of-one Bugatti Chiron — billed as the world's first widebody Chiron — now leads a reported 18-car collection worth over $17 million, alongside a new Ferrari SF90 Spider.",
    href: "/records/cars",
  },
  {
    date: "2026-07-03",
    category: "Tours",
    text: "Five major European festivals headlined in one summer: We Love Green in Paris, SummerJam in Cologne, Gurtenfestival in Bern, Paléo in Nyon and Lollapalooza Berlin — all in 2024.",
    href: "/records/tours/festivals",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "A jump of nine in Italy: “Dai Dai” reaches a new peak of No.10 on the FIMI Official Singles Chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "Up to No.18 in the UK: “Dai Dai” climbs again on the Official Singles Chart, its 5th week there.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "No.1 in Germany: “Dai Dai” tops the Top 100 Singles Chart there this week.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "Up five spots in Ireland: “Dai Dai” climbs to No.27 on the Official Irish Singles Chart, its 5th week there.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Streaming",
    text: "47.87 million monthly listeners on Spotify — yet another all-time peak, still the highest ever recorded for an African artist.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "A leap from No.60 to No.5 in Lithuania: “Dai Dai” makes its biggest jump yet, now in its 5th week on the AGATA chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "Up to No.2 in Norway: “Dai Dai” climbs again in its 6th week on the VG-lista chart.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Tours",
    text: "Seven headline sets and counting at Afro Nation: five in Portugal (2019, 2022, 2023, 2025, 2026), plus Miami and Detroit in 2023.",
    href: "/records/tours/festivals",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "A new high for “Dai Dai” in Australia: No.47 on the ARIA Top 50.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Charts",
    text: "A new market for “Dai Dai”: a debut at No.7 in Ecuador.",
    href: "/records/charts",
  },
  {
    date: "2026-07-03",
    category: "Streaming",
    text: "592 million monthly audience peak on YouTube Music — third among African artists, behind only Tyla and Moliy, and still climbing.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-03",
    category: "Awards",
    text: "Ghana Music Awards UK confirmed as its own ceremony, separate from the main Ghana Music Awards — the career tally now reads 79 wins from 206 nominations across 43 award bodies worldwide.",
    href: "/records/awards",
  },
  {
    date: "2026-07-01",
    category: "Streaming",
    text: "No other African artist has ever cracked the top 4 on Spotify's Global Daily chart — Burna Boy is the only one to ever reach No. 1.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-01",
    category: "Firsts & Records",
    text: "No. 1 on Spotify's Global Daily chart: “Dai Dai” just made Burna Boy the first African artist ever to top it — and the highest-peaking FIFA World Cup anthem in the chart's history.",
    href: "/records/firsts",
  },
  {
    date: "2026-07-01",
    category: "Streaming",
    text: "47.38 million monthly listeners on Spotify — a new all-time peak, and the highest ever recorded for an African artist.",
    href: "/records/africas-biggest",
  },
  {
    date: "2026-07-01",
    category: "Charts",
    text: "A brand-new market: “Dai Dai” debuted at No.60 on the Billboard Japan Hot 100.",
    href: "/records/charts",
  },
  {
    date: "2026-07-01",
    category: "Charts",
    text: "Six new chart peaks in one week for “Dai Dai”: No.3 in Spain, No.14 in Hungary, No.38 in Israel, No.24 in Canada, No.63 in Brazil and No.74 in the US.",
    href: "/records/charts",
  },
  {
    date: "2026-07-01",
    category: "Certifications",
    text: "Platinum in South Africa too — “Last Last” pushed the worldwide certification count to 213.",
    href: "/certifications",
  },
  {
    date: "2026-07-01",
    category: "Firsts & Records",
    text: "No other African artist has held both a UK No.1 album and a UK No.1 single — until Burna Boy, now also the most certified African artist worldwide.",
    href: "/records/firsts",
  },
];

export function latestUpdates(n: number): Update[] {
  return updates.slice(0, n);
}
