// The FAQ's questions and answers, read by the /faq page and by two things
// that only need to count them: the nav sheet's FAQ row (lib/navGroups.ts) and
// /llms.txt.
//
// They lived in app/faq/page.tsx until 23 Sep 2026. navGroups imported them
// from there, and the root layout imports navGroups, so the FAQ page's CSS
// (faq.module.css, and MobileFaq's, KeepExploring's and BreadcrumbBar's) was
// linked, render-blocking, on every page of the site. Here, with no CSS
// imports, the count costs nothing but the text. tests/rootLayoutCss.test.ts
// fails if the layout reaches a page module again.
import { totalAwards, countryCount } from "./certifications";
import { totalWins, totalNominations, ceremonyCount, ceremonies } from "./awards";
import { daiDaiNumberOnes } from "./charts";
// Country charts only: charts.ts's numberOnes also counts Billboard's two
// global charts, which this answer's "official national chart" does not cover.
import { countryNumberOnes, countryNumberOneReleases } from "../lib/analysis";
import { countryCount as performedCountryCount, regionCount } from "./performedCountries";
import { festivals } from "./tours";
import { carCount, totalValueReported, topCarValueFormatted } from "./cars";
import { BURNA_HOT_100_ENTRIES } from "./africasBiggest";
// The leaf module, not daiDai.ts: the root layout reaches this file through
// navGroups. The claim can still be overtaken, so it is printed with its date,
// as /dai-dai and /records/africas-biggest print it; the FAQ said "the
// longest-running No. 1 by any 2026 release", undated, over a total of two
// spells (5 Oct 2026, core-02).
import { DAI_DAI_2026_MOST_NO1_THROUGH_LONG } from "./daiDaiNo1Claim";
import { studioAlbumsInOrder, eps } from "./albums";
import { currentCars } from "./cars";
import { carFaqs } from "../lib/carFaqs";
import { biggestAnswer, andList } from "../lib/biggestArtist";
import { BURNA_BOY_REAL_NAME, BURNA_BOY_BIRTH_DATE, BURNA_BOY_BIRTHPLACE } from "../lib/seo";
import { longDate } from "../lib/searchSnippets";
import { cardinalWord, plural } from "../lib/plural";

const total = totalAwards();
const grammyNoms = ceremonies.find((c) => c.name === "Grammy Awards")?.noms.length ?? 0;
const afroNationCount = festivals.filter((f) => f.name === "Afro Nation").length;

// The four questions the site is searched for most (Search Console, three
// months to 4 Oct 2026): "burna boy real name", "burna boy albums", "how many
// cars does burna boy have" and "who is the biggest artist in africa". Each
// answer is built from the data rather than typed — the albums answer typed
// "8 studio albums" and its list, the cars answer typed the marques and the
// two sold cars, and the biggest-artist question had a typed answer of its
// own beside the computed one on /records/africas-biggest.
const albumsAnswer =
  `Burna Boy has released ${studioAlbumsInOrder.length} studio albums — ` +
  `${andList(studioAlbumsInOrder.map((a) => `${a.title} (${a.year})`))} — plus ${eps.length} ${plural(eps.length, "EP", "EPs")}.`;
// /records/cars's own answer, word for word, then what the garage is worth and
// what it is made of — the marques in the order the cars are valued.
const CARS_Q = "How many cars does Burna Boy have?";
const carsHowMany = carFaqs.find((f) => f.q === CARS_Q)!;
const marques = [...new Set(currentCars.map((c) => c.make))];
const carsAnswer =
  `${carsHowMany.a} The ${carCount} confirmed cars are worth a reported ${totalValueReported}, across ` +
  `${cardinalWord(marques.length)} marques: ${andList(marques)}.`;

// Age is computed from his birthdate at build time so it never goes stale.
// The date itself is lib/seo.ts's, the one the Person node and /about print.
const [bornYear, bornMonth, bornDay] = BURNA_BOY_BIRTH_DATE.split("-").map(Number);
const BORN = { year: bornYear, month: bornMonth, day: bornDay };
const BORN_ON = longDate(BURNA_BOY_BIRTH_DATE);
const nowDate = new Date();
const hadBirthday =
  nowDate.getMonth() + 1 > BORN.month ||
  (nowDate.getMonth() + 1 === BORN.month && nowDate.getDate() >= BORN.day);
const age = nowDate.getFullYear() - BORN.year - (hadBirthday ? 0 : 1);

// The design's six groups, in its order. Each is a sticky heading on desktop
// and a chip in the mobile rail.
export const GROUPS = [
  { id: "artist", kicker: "The artist", title: "Burna Boy, the artist" },
  { id: "worldcup", kicker: "2026", title: "The World Cup" },
  { id: "awards", kicker: "Trophies", title: "Awards & certifications" },
  { id: "music", kicker: "The catalogue", title: "Music & charts" },
  { id: "live", kicker: "On the road", title: "Live & touring" },
  { id: "cars", kicker: "The garage", title: "The car collection" },
] as const;

type GroupId = (typeof GROUPS)[number]["id"];

// Answer-first Q&A — figures pull from the site's own data so they stay in sync.
export const faqs: { g: GroupId; q: string; a: string }[] = [
  {
    g: "artist",
    q: "Who is Burna Boy?",
    a: `Burna Boy is a Grammy-winning Nigerian singer, songwriter and Afro-fusion pioneer. Born ${BURNA_BOY_REAL_NAME} on ${BORN_ON} in Port Harcourt, Nigeria, he is widely known as the "African Giant" and is one of the most successful African artists in history.`,
  },
  {
    g: "artist",
    q: "What is Burna Boy's real name?",
    a: `Burna Boy's real name is ${BURNA_BOY_REAL_NAME}. He was born on ${BORN_ON} in ${BURNA_BOY_BIRTHPLACE}, and performs under the stage name Burna Boy.`,
  },
  {
    g: "artist",
    q: "How old is Burna Boy?",
    a: `Burna Boy is ${age} years old. He was born ${BURNA_BOY_REAL_NAME} on ${BORN_ON} in Port Harcourt, Nigeria.`,
  },
  {
    g: "worldcup",
    q: "Did Burna Boy perform at the 2026 World Cup halftime show?",
    a: `Yes. Burna Boy performed "Dai Dai" with Shakira at the first-ever FIFA World Cup Final halftime show on 19 July 2026 at MetLife Stadium — the first African artist ever to perform at a World Cup Final halftime show. The bill also featured Madonna, BTS, Justin Bieber and Coldplay, with Uganda's Triplets Ghetto Kids joining them on stage.`,
  },
  {
    g: "worldcup",
    q: "What is Burna Boy's World Cup song?",
    a: `"Dai Dai", his collaboration with Shakira, is the official song of the 2026 FIFA World Cup. It reached No. 1 on both Billboard global charts and on the official singles chart in ${daiDaiNumberOnes} countries, and spent 37 days at No. 1 on Spotify's Global Daily Top Songs chart as the most-streamed song in the world, between 30 June and 22 August 2026 — the most days at No. 1 by any song in 2026 through the chart dated ${DAI_DAI_2026_MOST_NO1_THROUGH_LONG}.`,
  },
  {
    g: "awards",
    q: "How many Grammys has Burna Boy won?",
    a: `Burna Boy has won 1 Grammy Award — Best Global Music Album for "Twice as Tall" at the 2021 ceremony, where he became the first-ever winner of that renamed category. He has ${grammyNoms} Grammy nominations across his career.`,
  },
  {
    g: "awards",
    q: "How many awards has Burna Boy won in total?",
    a: `Burna Boy has won ${totalWins} awards from ${totalNominations} nominations across ${ceremonyCount} different award bodies, including the Grammys, BET Awards, MOBO Awards, MTV EMAs, The Headies and AFRIMA.`,
  },
  {
    g: "awards",
    q: "How many certifications does Burna Boy have?",
    a: `Burna Boy has ${total} music certifications — Silver, Gold, Platinum and Diamond awards across ${countryCount} countries, from bodies including the RIAA (US), BPI (UK), SNEP (France), Music Canada and TurnTable (Nigeria).`,
  },
  {
    g: "live",
    q: "What is Burna Boy's highest-grossing tour?",
    a: `The I Told Them… Tour is the highest-grossing tour by an African artist in history, earning $30.46 million from 302,801 tickets across 2023–2025.`,
  },
  {
    g: "live",
    q: "What is the biggest concert by an African artist?",
    a: `Burna Boy's June 2024 concert at London Stadium grossed $6.15 million from 58,973 tickets — the highest-grossing single concert by any African artist.`,
  },
  {
    g: "music",
    q: "How many Billboard Hot 100 entries does Burna Boy have?",
    a: `Burna Boy has ${BURNA_HOT_100_ENTRIES} Billboard Hot 100 entries — the most by any African artist. He is also the first African artist to chart on the Hot 100 for six consecutive years (2021–2026).`,
  },
  {
    g: "music",
    q: "How many albums does Burna Boy have?",
    a: albumsAnswer,
  },
  {
    g: "music",
    q: "What is Burna Boy's biggest song?",
    a: `By chart performance it is "Dai Dai" with Shakira, the 2026 FIFA World Cup song — No. 1 on both Billboard global charts and in ${daiDaiNumberOnes} countries. His biggest solo song is "Last Last" (2022), certified Diamond in France and his most-streamed solo song. His biggest featured credit is "Location" with Dave, certified 5× Platinum in the UK.`,
  },
  {
    g: "music",
    q: "How many number-one songs does Burna Boy have?",
    a: `Burna Boy has ${countryNumberOneReleases} releases that have reached No. 1 on an official national chart — ${countryNumberOnes} chart-topping placements in all, since several reached No. 1 in more than one country at once. His No. 1s span Nigeria, the UK, South Africa, the Netherlands, Switzerland and Colombia, among others.`,
  },
  {
    g: "worldcup",
    q: "What records has Burna Boy set for African music?",
    a: `Burna Boy was the first African artist to headline a FIFA World Cup opening ceremony and the first to perform at a World Cup Final halftime show (both 2026), the first to sell out a stadium in the United States (Citi Field, 2023) and to headline a UK stadium (London Stadium, 2023), and the first African artist to pass 2 billion UK streams.`,
  },
  {
    g: "cars",
    q: CARS_Q,
    a: carsAnswer,
  },
  {
    g: "cars",
    q: "What is Burna Boy's most expensive car?",
    a: `Burna Boy's most expensive car is his ₦9 billion one-of-one widebody Bugatti Chiron — a custom build by Dubai's Venuum, unveiled in July 2026 and billed as the world's first widebody Chiron. It is reported as the most expensive car in West Africa (${topCarValueFormatted} at the naira-to-dollar rate on the day it was announced).`,
  },
  {
    g: "cars",
    q: "How much is Burna Boy's car collection worth?",
    a: `Burna Boy's ${carCount}-car collection is worth a reported ${totalValueReported} in total, based on itemised entertainment-press valuations (import-inclusive) — led by his ₦9 billion Bugatti Chiron, a McLaren Senna and a Ferrari Purosangue.`,
  },
  {
    g: "artist",
    // The searched wording, and /records/africas-biggest's answer to it: the
    // leader of every measure, by name, rather than a "yes" (lib/biggestArtist.ts).
    q: "Who is the biggest artist in Africa?",
    a: biggestAnswer,
  },
  {
    g: "artist",
    q: "What genre is Burna Boy's music?",
    a: `Burna Boy makes Afrobeats and what he calls "Afro-fusion" — a blend of Afrobeats, Afrobeat, dancehall, reggae, hip-hop and R&B.`,
  },
  {
    g: "live",
    q: "How many countries has Burna Boy performed in?",
    a: `Burna Boy has performed live in ${performedCountryCount} countries across ${regionCount} regions — from arena tours and stadium nights to festival headline sets, on every inhabited continent.`,
  },
  {
    g: "live",
    q: "How many times has Burna Boy headlined Afro Nation?",
    a: `Burna Boy has headlined Afro Nation ${afroNationCount} times — five editions in Portugal (2019, 2022, 2023, 2025 and 2026), plus Miami and Detroit in 2023.`,
  },
];
