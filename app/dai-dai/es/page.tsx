import Link from "next/link";
import styles from "../dai-dai.module.css";
import DaiDaiStory, { type Step } from "../../components/DaiDaiStory";
import DaiDaiConquest, { type ConquestCountry } from "../../components/DaiDaiConquest";
import DaiDaiReplay from "../../components/DaiDaiReplay";
import DaiDaiReplayMultiples from "../../components/DaiDaiReplayMultiples";
import { buildReplayData } from "../../components/daiDaiReplayData";
import { ES_REPLAY_LABELS } from "../../components/daiDaiReplayLabels";
import { Leads, NationalTable, RuledLists, type LeadFigure, type NumbersLabels, type RecordRow } from "../../components/DaiDaiNumbers";
import { RecordBand, SectionHead, Lineup, nationalRow, daiDaiCountries, countryName, topPlaque, plaqueCountries, byVisibleName, plaqueX, thousands } from "../../components/DaiDaiRecord";
import FaqList from "../../components/FaqList";
import KeepExploring from "../../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../../lib/seo";
import { lastUpdated } from "../../lib/api";
import {
  daiDaiNumberOnes,
  daiDaiChartEntryCount,
  CHART_COUNTRIES,
  weeksAtPeak,
  weeksOnChart,
} from "../../data/charts";
import { liveCharts } from "../../data/liveCharts";
import { LIVE_CADENCE_ES } from "../../lib/liveChartMeta";
import { daiDaiCertCount } from "../../data/certifications";
import { DAI_DAI_COVER, DAI_DAI_RELEASE_DATE, DAI_DAI_HALFTIME_DATE, DAI_DAI_VIDEO_ID, DAI_DAI_SPOTIFY_BODY_READ, DAI_DAI_VIDEO_VIEWS, DAI_DAI_1B_DAYS, DAI_DAI_1B_RANK_ES, DAI_DAI_SPOTIFY_STREAMS, DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG_ES, DAI_DAI_SPOTIFY_NO1_READ_ON_LONG_ES, DAI_DAI_SPOTIFY_NO1_FIRST_LONG_ES, DAI_DAI_SPOTIFY_NO1_LAST_LONG_ES, DAI_DAI_SPOTIFY_TOP10_DAYS, DAI_DAI_SPOTIFY_DAYS_OFF, DAI_DAI_SPOTIFY_NO1_DAYS, DAI_DAI_ITUNES_NO1_COUNTRIES, DAI_DAI_STORY_PUBLISHED, DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS, DAI_DAI_APPLE_EUROPE_NO1_DAYS, DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS, DAI_DAI_UWC_NO1_WEEKS, DAI_DAI_DEEZER_WORLDWIDE_PEAK, DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS, BURNA_GLOBAL_DIGITAL_ARTIST_POSITION, BURNA_GLOBAL_DIGITAL_ARTIST_POINTS, daiDaiSpotifyDaysOnChart, daiDaiSpotifyStraightDays, daiDaiYouTubeDaysAtNo1 } from "../../data/daiDai";
import { spotifyImage, spotifySrcSet } from "../../lib/spotifyImage";
import { daiDaiEsOgId } from "./ogId";
import LangSwitch from "../LangSwitch";
import { BLANK_PIXEL } from "../../lib/blankPixel";
import { BURNA_PORTRAIT, SHAKIRA_PORTRAIT } from "../../lib/artistImages";

/**
 * "Dai Dai" en español — the Spanish edition of the story page.
 *
 * A real page at its own URL rather than a translate widget: a client-side
 * toggle is invisible to search engines, and half this song's audience searches
 * in Spanish ("la canción del Mundial 2026"). With hreflang tying the two
 * editions together, Google can serve whichever one matches the searcher.
 *
 * Every FIGURE is imported from the same data the English page reads — including
 * the two bot-written constants, which is exactly why they were moved to
 * app/data/daiDai.ts. Only the words are Spanish; the numbers can never drift
 * apart from the English edition because there is only one copy of them.
 */

const EN_PATH = "/dai-dai";
const ES_PATH = "/dai-dai/es";

// Every country the song charted in, for the takeover grid, named in Spanish
// and, within a peak, in the order of those Spanish names.
const conquestCountries: ConquestCountry[] = byVisibleName(
  daiDaiCountries.map((e) => ({
    code: e.c,
    flag: CHART_COUNTRIES[e.c]?.flag ?? "🏳",
    name: countryName(e.c, "es"),
    peak: e.peak,
  })),
  "es",
);
const conquestTotal = conquestCountries.length;
const conquestNo1 = conquestCountries.filter((c) => c.peak === 1).length;
// Las semanas se leen de los datos, igual que en la edición inglesa — una cifra
// escrita a mano en dos idiomas se desincroniza el doble de rápido.
import { cardinalWord, millonesEs, millonesCortoEs } from "../../lib/plural";

const weeksGLB = weeksAtPeak("Dai Dai", "GLB");
const weeksGLBX = weeksAtPeak("Dai Dai", "GLBX");
// The national-charts table reads every peak and week count itself
// (nationalRow); these are the ones the rows' own sentences still quote.
const weeksUK = weeksAtPeak("Dai Dai", "UK");
const runUK = weeksOnChart("Dai Dai", "UK");
const runAT = weeksOnChart("Dai Dai", "AT");
const runSE = weeksOnChart("Dai Dai", "SE");
const runNL = weeksOnChart("Dai Dai", "NL");
// The Spotify entry position, as Spotify's own chart row prints it.
const debutAt = DAI_DAI_SPOTIFY_BODY_READ.debutPosition;
// The halftime date, as the lineup's line and the sixth lead figure print it.
const halftime = (opts: Intl.DateTimeFormatOptions) =>
  new Date(`${DAI_DAI_HALFTIME_DATE}T12:00:00Z`).toLocaleDateString("es-ES", { ...opts, timeZone: "UTC" });
const halftimeShort = halftime({ day: "numeric", month: "short" });
const halftimeLong = halftime({ day: "numeric", month: "long", year: "numeric" });
// The UK peak, for the FAQ answer that is also FAQPage structured data.
const peakUK = daiDaiCountries.find((e) => e.c === "UK")?.peak;
// The Global Digital Artist row's points, grouped as this edition writes them.
const gdaPoints = thousands(BURNA_GLOBAL_DIGITAL_ARTIST_POINTS, ".");
// Spanish names a plaque's multiple in words ("doble platino"); a multiple the
// table does not hold falls back to the figure.
const MULTIPLE_ES: Record<number, string> = { 2: "doble", 3: "triple", 4: "cuádruple", 5: "quíntuple", 6: "séxtuple", 7: "séptuple", 8: "óctuple", 9: "nónuple", 10: "décuple" };
const multipleEs = (code: string) => { const x = plaqueX(code); return MULTIPLE_ES[x] ?? `${x}×`; };
// The plaques, for the fifth lead figure's caption, read from the plaque wall.
// Spanish prose writes the tier in lower case.
const certCountries = plaqueCountries();
const topPlaqueWords = topPlaque({ diamond: "diamante", platinum: "platino", gold: "oro", silver: "plata" }, "es", " en ");

// La repetición bajo la cuadrícula: la carrera oficial de Dai Dai en listas,
// semana a semana, desde app/data/daiDaiRuns.ts. Su fotograma final es esta cuadrícula.
const replayData = buildReplayData("es");

const conquestIntro = `“Dai Dai” ha entrado en las listas de ${conquestTotal} países y ha llegado al número 1 en ${conquestNo1} de ellos: cada celda muestra su pico.`;

// Same derivation as the English page: the live board decides, not a sentence.
const ddLive = liveCharts.find((r) => r.kind === "song" && r.title === "Dai Dai");
const liveOnes = (platform: string) =>
  ddLive?.platforms
    .find((p) => p.platform === platform)
    ?.entries.filter((e) => e.position === 1 && !/world/i.test(e.name)).length ?? 0;
const platformOnes = ["YouTube", "Apple Music", "Deezer", "Spotify", "iTunes", "Shazam"]
  .map((p) => [p, liveOnes(p)] as const)
  .filter(([, n]) => n > 0);
const liveOnesLabel = `ahora mismo en las listas por país de ${platformOnes
  .map(([p, n], i) => (i === 0 ? `${p} (${n} países)` : `${p} (${n})`))
  .join(", ")
  .replace(/, ([^,]*)$/, " y $1")} — ${LIVE_CADENCE_ES} desde el panel en vivo`;
// The same counts as a ruled-list row, as the English edition builds it.
const liveOnesKey = `N.º 1 ahora mismo: ${platformOnes.map(([p], i) => (i === 0 ? `países en ${p}` : p)).join(" · ")}`;
const liveOnesValue = platformOnes.map(([, n]) => n).join(" · ");

// Same date as the English edition's PUBLISHED, from the same home: the
// Article node's datePublished and the og:type "article" date.
const PUBLISHED = DAI_DAI_STORY_PUBLISHED;

export const metadata = pageMetadata({
  title: "Dai Dai — el himno del Mundial 2026 de Shakira y Burna Boy",
  description: `“Dai Dai”, de Shakira y Burna Boy: ${DAI_DAI_SPOTIFY_NO1_DAYS} días como la canción más escuchada del mundo, número 1 en ${daiDaiNumberOnes} países y el show de medio tiempo de la Final del Mundial.`,
  path: ES_PATH,
  shareTitle: "La historia de Dai Dai — Shakira y Burna Boy",
  shareDescription:
    "El himno del Mundial 2026 de Shakira y Burna Boy — número 1 en el mundo entero.",
  locale: "es_ES",
  languages: { en: EN_PATH, es: ES_PATH, "x-default": EN_PATH },
  article: { publishedTime: PUBLISHED },
});

export default function DaiDaiPageES() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dai Dai — el himno oficial del Mundial de la FIFA 2026",
    description:
      "La historia de “Dai Dai”, el himno oficial del Mundial de la FIFA 2026 de Shakira y Burna Boy — su recorrido histórico en listas, streaming y certificaciones, y su actuación en el show de medio tiempo de la Final.",
    datePublished: PUBLISHED,
    dateModified: asDateTime(lastUpdated),
    // The id segment is not optional: generateImageMetadata puts it in the
    // path, so the bare route 404s and this field would cite a dead URL.
    image: [`${CANONICAL_ORIGIN}${ES_PATH}/opengraph-image/${daiDaiEsOgId}`],
    inLanguage: "es",
    author: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: {
      "@type": "MusicRecording",
      name: "Dai Dai",
      byArtist: [
        { "@type": "Person", name: "Shakira" },
        { "@type": "MusicGroup", name: "Burna Boy" },
      ],
      datePublished: DAI_DAI_RELEASE_DATE.slice(0, 7),
      genre: ["Afrobeats", "Latin pop"],
    },
    url: `${CANONICAL_ORIGIN}${ES_PATH}`,
  };

  // The halftime performance as a MusicEvent, as the English edition emits it
  // and with the same facts: the date, the stadium, the six acts of the lineup
  // above, Global Citizen, and the free, date-bounded offer (the long note on
  // the English node explains InStock). Only the words are Spanish, and the
  // image is this edition's own share card by its id-carrying URL.
  // tests/daiDaiMusicEvent.test.tsx holds the two nodes to each other.
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: "Show de medio tiempo de la Final del Mundial de la FIFA 2026",
    startDate: DAI_DAI_HALFTIME_DATE,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "MetLife Stadium",
      address: {
        "@type": "PostalAddress",
        addressLocality: "East Rutherford",
        addressRegion: "NJ",
        addressCountry: "US",
      },
    },
    performer: [
      { "@type": "Person", name: "Shakira" },
      { "@type": "MusicGroup", name: "Burna Boy" },
      { "@type": "Person", name: "Madonna" },
      { "@type": "MusicGroup", name: "BTS" },
      { "@type": "Person", name: "Justin Bieber" },
      { "@type": "MusicGroup", name: "Coldplay" },
    ],
    organizer: {
      "@type": "Organization",
      name: "Global Citizen",
      url: "https://www.globalcitizen.org",
    },
    about: { "@type": "MusicRecording", name: "Dai Dai" },
    url: `${CANONICAL_ORIGIN}${ES_PATH}`,
    image: `${CANONICAL_ORIGIN}${ES_PATH}/opengraph-image/${daiDaiEsOgId}`,
    description:
      "El primer show de medio tiempo de una Final del Mundial de la FIFA: Shakira y Burna Boy interpretaron “Dai Dai”, el himno oficial del torneo de 2026, junto a Madonna, BTS, Justin Bieber y Coldplay.",
    endDate: DAI_DAI_HALFTIME_DATE,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      url: `${CANONICAL_ORIGIN}${ES_PATH}`,
      validFrom: DAI_DAI_RELEASE_DATE,
      validThrough: DAI_DAI_HALFTIME_DATE,
    },
  };

  // The narrative, in Spanish. Scene keys match the English edition, so the
  // artwork and the scroll behaviour are shared and only the words change.
  const steps: Step[] = [
    {
      scene: "hero",
      kicker: "15 de mayo de 2026",
      title: "Un himno mundialista, a dúo",
      body: "El Mundial de la FIFA 2026 presentó su canción oficial: “Dai Dai”, una colaboración entre dos superestrellas globales, Shakira y Burna Boy. El pop latino y el afrobeats se encuentran en el escenario más grande del planeta.",
    },
    {
      scene: "global1",
      kicker: "El récord",
      title: "Número 1 en el Billboard Global 200",
      body: `En cuestión de semanas la canción lideró la lista mundial insignia de Billboard, la que incluye a Estados Unidos: el segundo número 1 de Shakira en el Global 200 y la primera vez en la historia que un artista africano ayuda a encabezarla. Tras cuatro semanas consecutivas bajó al N.º 3, y el 22 de agosto recuperó la cima por tres semanas —las listas del 22 y el 29 de agosto y del 5 de septiembre—: ${cardinalWord(weeksGLB, "es")} semanas en el número 1 en total. En el Global 200 Excl. US encadenó ${cardinalWord(weeksGLBX, "es")} semanas seguidas en el número 1, del 4 de julio al 5 de septiembre.`,
    },
    {
      scene: "no1s",
      kicker: "En todo el mundo",
      title: "Número 1 en un país tras otro",
      body: `“Dai Dai” llegó al número 1 en ${daiDaiNumberOnes} países —de Francia y Alemania a los Países Bajos y Emiratos Árabes Unidos— y encabezó las dos listas globales de Billboard. El alcance de una colaboración verdaderamente mundial.`,
      link: { href: "/records/charts?song=Dai%20Dai", label: "Todas las posiciones" },
    },
    {
      scene: "streaming",
      kicker: "En streaming",
      title: "La canción más escuchada del planeta",
      body: `“Dai Dai” lideró la lista Global Top Songs de Spotify tanto en su versión diaria como en la semanal: ${DAI_DAI_SPOTIFY_NO1_DAYS} días como la canción más escuchada del mundo, una racha recuperada en agosto, y la primera vez que un artista africano la encabeza.`,
    },
    {
      scene: "certs",
      kicker: "Certificada en el mundo entero",
      title: "Llegaron los discos",
      body: `La canción ganó sus propias certificaciones: diamante en Francia, doble platino en Canadá, séxtuple platino (latino) en Estados Unidos, platino en España, Eslovaquia, Portugal, Hungría, Austria, Grecia y Suecia, oro en Colombia, Chequia, Italia, Polonia, Bélgica y Alemania, y plata en el Reino Unido. Ya son ${daiDaiCertCount} certificaciones para la colaboración de Shakira y Burna Boy, y siguen sumando.`,
      link: { href: "/certifications#release=Dai%20Dai", label: "Todas las certificaciones" },
    },
    {
      scene: "worldsong",
      kicker: "El récord",
      title: "El himno mundialista más grande de la historia",
      body: "Ninguna canción de un Mundial de la FIFA había llegado tan alto: “Dai Dai” es el himno mundialista con el pico más alto en la historia del Spotify Global — el pop latino de Shakira y el afrobeats de Burna Boy encontrándose en la cumbre.",
    },
    // Chapter 07 carries the English chapter's facts (A-24, Paul, 24 Sep 2026):
    // the stage, the date, the audience and the co-headliners it names.
    {
      scene: "halftime",
      kicker: "Historia · 19 de julio",
      title: "Historia en el escenario de la Final del Mundial",
      body: "Shakira y Burna Boy llevaron “Dai Dai” al primer show de medio tiempo de una Final del Mundial de la FIFA, en el MetLife Stadium, el 19 de julio — ante una audiencia global de miles de millones, junto a Madonna, BTS y Justin Bieber.",
    },
  ];

  // Las cifras de la canción, como las dibuja el rediseño: seis cifras
  // principales con su pie, las listas nacionales en una tabla y las rachas,
  // los rankings y el video en listas. Cada fila conserva su frase fechada.
  const leads: LeadFigure[] = [
    { v: `${daiDaiChartEntryCount}`, cap: `Entradas en listas oficiales: ${conquestTotal} nacionales y las dos globales de Billboard` },
    { v: `${daiDaiNumberOnes}`, cap: "Países en el N.º 1 de su propia lista oficial" },
    // La nota del Global 200 es la de la antigua tarjeta, palabra por palabra
    // (restituida el 26 sep. 2026; nunca se reescribe, README §6).
    { v: "N.º 1", cap: "En las dos listas globales de Billboard: el Global 200 (algo inédito para un artista africano, y el segundo de Shakira) y el Global 200 Excl. US" },
    { v: millonesCortoEs(DAI_DAI_SPOTIFY_STREAMS), cap: "Reproducciones en Spotify — la octava canción de Burna Boy que supera los 300 millones, más que ningún otro artista africano", live: true },
    { v: `${daiDaiCertCount}`, cap: `Certificaciones, en ${certCountries} países — ${topPlaqueWords}` },
    { v: halftimeShort, cap: "Actuación en el primer show de medio tiempo de una final del Mundial" },
  ];

  const national: { c: string; l: string; other?: "MENA" | "BIG_TOP_40" | "RHYTHMIC" }[] = [
    { c: "DE", l: "en el número 1 de la lista oficial de sencillos de Alemania — y elegida Sommerhit 2026, la canción del verano del país, por GfK Entertainment, tras casi 60 millones de reproducciones alemanas" },
    { c: "CH", l: "en el número 1 de la lista oficial de Suiza — la racha más larga de cualquier canción en el país en lo que va de año" },
    { c: "FR", l: "en el número 1 de la lista oficial de sencillos de Francia (SNEP)" },
    { c: "AT", l: `en el número 1 del Ö3 Austria Top 40 — una racha ininterrumpida desde finales de junio, con ${runAT} semanas en lista` },
    { c: "BE", l: "en el número 1 del Ultratop 50 de Valonia — nueve seguidas, y número 1 también en Flandes" },
    { c: "NL", l: `en el número 1 del Single Top 100 neerlandés — dos en junio y cinco más desde finales de julio, en una permanencia de ${runNL} semanas` },
    { c: "SE", l: `en el número 1 de la Sverigetopplistan sueca, recuperado en la semana 34 tras una semana en el N.º 2 — ${runSE} semanas en lista` },
    { c: "NO", l: "en el número 1 de la VG-lista Topp 40 de Noruega — cuatro semanas consecutivas, desde la semana 31" },
    { c: "IN", l: "en la lista IMI International Top 20 Singles de la India — la primera canción de Burna Boy que encabeza una lista en ese país" },
    // Igual que en la edición inglesa: se retira la afirmación de actualidad,
    // que no se releía desde el 4 de agosto y no puede fecharse sin publicar
    // una semana de lista que nadie ha leído. El pico se mantiene.
    { c: "AE", l: "en el Official MENA Chart Top 20 y en la lista US World Digital Song Sales de Billboard", other: "MENA" },
    { c: "UK", l: `en la lista oficial de sencillos del Reino Unido — ${cardinalWord(weeksUK, "es")} semanas en ese pico, del 30 de julio al 27 de agosto de 2026, en una estancia de ${runUK} semanas contada hasta la lista del 24 de septiembre (N.º 31). La primera canción de un Mundial de la FIFA que entra en el top 10 británico, muy por encima del N.º 21 que alcanzó “Waka Waka” de la propia Shakira` },
    { c: "CA", l: "en el Billboard Canadian Hot 100 — un nuevo pico y el primer top 10 de Burna Boy en Canadá, donde su mejor posición había sido el N.º 14. Es también el primer top 10 canadiense de Shakira desde “She Wolf” en 2009" },
    { c: "US", l: "en el Billboard Hot 100 de Estados Unidos — un salto del 42 al 17 en la lista del 1 de agosto, el pico más alto de una canción mundialista en la historia del Hot 100. Luminate registró 8,6 millones de reproducciones en Estados Unidos (+69 %), 13,9 millones de audiencia radial (+11 %) y 7.000 copias vendidas (+322 %) en la semana de seguimiento del 17 al 23 de julio" },
    { c: "UK", l: "en el número 1 del Big Top 40 del Reino Unido (las listas del 9 al 30 de agosto de 2026) — la cuenta atrás nacional de las cadenas Capital y Heart, con Burna Boy recibiendo la placa de número 1", other: "BIG_TOP_40" },
    { c: "US", l: "en el número 1 de la lista Rhythmic Airplay de Billboard (con fecha del 5 y el 12 de septiembre de 2026) — el primer N.º 1 de Shakira en ese formato, veinte años después de que “Hips Don't Lie” llegara al N.º 5 — y N.º 2 en la lista del 19 de septiembre; en esa misma lista del 19 de septiembre figura en el N.º 26 de Pop Airplay, igualando el pico que fijó en la lista del 15 de agosto", other: "RHYTHMIC" },
  ];
  const nationalRows = national.map((r) => nationalRow(r, "es"));

  const numberLists: { title: string; rows: RecordRow[]; video?: boolean }[] = [
    {
      title: "Rachas en streaming",
      rows: [
        { v: `${DAI_DAI_SPOTIFY_NO1_DAYS} días`, l: `en total en el número 1 de la lista Global Daily Top Songs de Spotify —algo inédito para un artista africano, y la canción con más días en el número 1 de todo 2026, cinco por delante de “End of Beginning” de Djo (32) y seis de “Beauty And A Beat” de Justin Bieber y Nicki Minaj (31)—. Es un total cerrado: el primero en la lista del ${DAI_DAI_SPOTIFY_NO1_FIRST_LONG_ES} y el último en la del ${DAI_DAI_SPOTIFY_NO1_LAST_LONG_ES}, confirmado día a día hasta la lista del ${DAI_DAI_SPOTIFY_NO1_READ_ON_LONG_ES} — con ${DAI_DAI_SPOTIFY_TOP10_DAYS} días dentro del top 10 mundial en total, contados hasta esa misma lista`, k: "Spotify global diaria, N.º 1" },
        { v: `${DAI_DAI_SPOTIFY_WEEKLY_NO1_WEEKS} semanas`, l: "en el número 1 de la lista Global Weekly Top Songs de Spotify — una racha cerrada en la lista del 27 de agosto — en una estancia de 16 semanas contada hasta la lista del 10 de septiembre de 2026, con un pico de 40,28 millones de reproducciones en una sola semana", k: "Spotify global semanal, N.º 1" },
        { v: `${daiDaiSpotifyStraightDays}`, l: `entró en la lista Global Daily Top Songs de Spotify el 15 de mayo de 2026, el mismo día de su lanzamiento — cayó de ella durante ${cardinalWord(DAI_DAI_SPOTIFY_DAYS_OFF, "es")} días, volvió el 22 de mayo y no ha salido desde entonces: ${daiDaiSpotifyStraightDays} seguidos en la lista y ${daiDaiSpotifyDaysOnChart} en total, contados hasta la lista del ${DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG_ES}, que imprime ambas cifras en sus propias columnas (Spotify Charts)`, k: `Spotify global diaria — entró en el N.º ${debutAt}, luego días seguidos en la lista`, live: true },
        { v: `${DAI_DAI_APPLE_EUROPE_NO1_DAYS} días`, l: "en el número 1 de la lista europea de Apple Music, más 11 días en la cima de la lista mundial de Apple Music", k: "Apple Music Europa, N.º 1" },
        { v: `${DAI_DAI_ITUNES_WORLDWIDE_NO1_DAYS} días`, l: "en el número 1 de la lista mundial de canciones de iTunes, y 15 días en la cima de la lista europea de iTunes", k: "iTunes mundial, N.º 1" },
        { v: liveOnesValue, l: liveOnesLabel, k: liveOnesKey, live: true },
      ],
    },
    {
      title: "Rankings mundiales",
      rows: [
        { v: `${DAI_DAI_UWC_NO1_WEEKS} semanas`, l: "en el número 1 del United World Chart de Mediatraffic — 230.000 puntos en la semana del 26 de septiembre, y la primera canción de Burna Boy que lo lidera", k: "United World Chart, N.º 1" },
        { v: `${DAI_DAI_ITUNES_NO1_COUNTRIES}`, l: `en la lista de canciones de iTunes en ${DAI_DAI_ITUNES_NO1_COUNTRIES} países — Estados Unidos, Reino Unido, Canadá, Francia, Italia, Nueva Zelanda, India, España, Portugal, Hungría y decenas más, Bielorrusia la más reciente`, k: "iTunes N.º 1, países" },
        // Igual que en la edición inglesa: pico fechado, en pasado, sin el "23".
        { v: `N.º ${DAI_DAI_DEEZER_WORLDWIDE_PEAK}`, l: "en el Deezer Worldwide Top 100 — su pico, alcanzado el 26 de julio de 2026, cuando estaba en las listas de 57 países", k: "Deezer Worldwide, pico" },
        { v: `${DAI_DAI_SPOTIFY_MUSIC_VIDEO_NO1_DAYS} días`, l: "en el número 1 de la lista Global Music Video de Spotify, según el último recuento en la lista del 23 de agosto — es una playlist diaria sin archivo, así que el recuento se lleva a mano", k: "Spotify Global Music Video, N.º 1" },
        { v: `N.º ${BURNA_GLOBAL_DIGITAL_ARTIST_POSITION}`, l: `la posición de Burna Boy en el ranking Global Digital Artist (${gdaPoints} puntos) durante el recorrido`, k: "Ranking Global Digital Artist" },
      ],
    },
    {
      title: "El video",
      video: true,
      rows: [
        { v: millonesEs(DAI_DAI_VIDEO_VIEWS), l: `visualizaciones en YouTube — mil millones en ${DAI_DAI_1B_DAYS} días, el ${DAI_DAI_1B_RANK_ES} más rápido de la historia de YouTube y el primer video de 2026 en alcanzarlos. Antes: 500 millones en 59,4 días, 600 millones en 67 días (el más rápido de la carrera de ambos artistas hasta esa cifra) y 700 millones en 74,8 días`, k: "Visualizaciones en YouTube", live: true },
        { v: `${daiDaiYouTubeDaysAtNo1} días`, l: "seguidos en el número 1 como el video musical más visto del mundo en YouTube, del 9 de junio a la lista del 27 de agosto. Esa racha se cortó —el video quedó en el número 2 en las listas del 5 y el 6 de septiembre— y recuperó la cima: número 1 otra vez en la lista del 7 de septiembre de 2026, en su día 108 en la lista. Ese segundo tramo también terminó —número 2 en la lista del 14 de septiembre, tras una nueva entrada—. Los 80 son un total cerrado, no una racha en curso", k: "Seguidos en el N.º 1 de la lista mundial de videos de YouTube" },
      ],
    },
  ];

  const numbersLabels: NumbersLabels = {
    national: "Listas nacionales",
    cols: { country: "País", chart: "Lista", peak: "Pico", weeksAt1: "Semanas en el N.º 1", weeksOn: "Semanas en lista" },
    peak: "N.º {n}",
    notStated: "no consta",
    none: "ninguna",
    wkAt1: " sem. en el N.º 1",
    wkOn: " sem. en lista",
    weeksPrefix: "semanas: ",
    live: LIVE_CADENCE_ES,
    video: { id: DAI_DAI_VIDEO_ID, play: "Reproducir el video de “Dai Dai”", title: "Shakira y Burna Boy — “Dai Dai” (video oficial)" },
  };

  const faqs: { q: string; a: string }[] = [
    {
      q: "¿Quién canta “Dai Dai”?",
      a: "“Dai Dai” es una colaboración de 2026 entre la superestrella colombiana del pop Shakira y la estrella nigeriana del afrobeats Burna Boy. Es la canción oficial del Mundial de la FIFA 2026.",
    },
    {
      q: "¿“Dai Dai” es la canción del Mundial 2026?",
      a: `Sí. “Dai Dai” es el himno oficial del Mundial de la FIFA 2026, y Shakira y Burna Boy la interpretaron en vivo en el show de medio tiempo de la Final, el ${halftimeLong}.`,
    },
    {
      q: "¿“Dai Dai” llegó al número 1?",
      a: `Sí. “Dai Dai” llegó al número 1 del Billboard Global 200 y del Global 200 Excl. US, lideró la lista Global Top Songs de Spotify tanto en su versión diaria como en la semanal, y alcanzó el número 1 de la lista oficial de sencillos en ${daiDaiNumberOnes} países.`,
    },
    {
      q: "¿Hasta dónde llegó “Dai Dai” en el Reino Unido?",
      a: `“Dai Dai” alcanzó el número ${peakUK} de la lista oficial de sencillos del Reino Unido — la primera canción de un Mundial de la FIFA que entra en el top 10 británico, y con diferencia la canción mundialista más alta en la historia de esa lista, por encima de “Waka Waka (This Time for Africa)” de la propia Shakira, que llegó al número 21 en 2010.`,
    },
    {
      q: "¿Quiénes son los Ghetto Kids que actuaron con Shakira y Burna Boy?",
      a: "Los Triplets Ghetto Kids de Uganda —un grupo infantil de baile de Kampala que se hizo viral en internet— acompañaron a Shakira y Burna Boy en el escenario durante “Dai Dai” en el show de medio tiempo de la Final del Mundial 2026, después de que Shakira los invitara a la actuación.",
    },
    {
      q: "¿Cuántas certificaciones tiene “Dai Dai”?",
      a: `“Dai Dai” tiene ${daiDaiCertCount} certificaciones: diamante en Francia por la SNEP, ${multipleEs("CA")} platino en Canadá por Music Canada, ${multipleEs("US")} platino (latino) en Estados Unidos por la RIAA, platino en España, Eslovaquia, Portugal, Hungría, Austria, Grecia y Suecia, oro en Colombia, Chequia, Italia, Polonia, Bélgica y Alemania, y plata en el Reino Unido por la BPI.`,
    },
    {
      q: "¿Cuándo fue el show de medio tiempo de la Final del Mundial 2026?",
      a: `El primer show de medio tiempo de una Final del Mundial de la FIFA se celebró el ${halftimeLong} en el MetLife Stadium. Shakira y Burna Boy interpretaron “Dai Dai”, acompañados en el escenario por los Triplets Ghetto Kids de Uganda.`,
    },
    {
      q: "¿Quiénes actuaron en el show de medio tiempo de la Final?",
      a: `El primer show de medio tiempo de una Final del Mundial contó con Madonna, Shakira y Burna Boy (interpretando “Dai Dai”), BTS, Justin Bieber, el director de orquesta Gustavo Dudamel y el PS22 Chorus junto a Coldplay, con producción de Global Citizen, el ${halftimeLong} en el MetLife Stadium.`,
    },
  ];

  const straight = (t: string) => t.replace(/[“”]/g, '"').replace(/[’]/g, "'");
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "es",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: straight(f.q),
      acceptedAnswer: { "@type": "Answer", text: straight(f.a) },
    })),
  };

  const lineup: { name: string; img: string; tag?: string; headliner?: boolean }[] = [
    { name: "Shakira", img: SHAKIRA_PORTRAIT, tag: "Dai Dai", headliner: true },
    { name: "Burna Boy", img: BURNA_PORTRAIT, tag: "Dai Dai", headliner: true },
    { name: "Madonna", img: "https://i.scdn.co/image/ab6761610000e5ebed2208b41d49ebd24687985b", tag: "Music" },
    { name: "BTS", img: "https://i.scdn.co/image/ab6761610000e5ebf80ec63ea7a0ef0fba60957d", tag: "Dynamite" },
    { name: "Justin Bieber", img: "https://i.scdn.co/image/ab6761610000e5ebaf20f7db5288bce9beede034", tag: "Everything Hallelujah" },
    { name: "Coldplay", img: "https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb", tag: "con el PS22 Chorus" },
  ];

  return (
    <main id="content" lang="es">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />

      {/* The same hero as the English edition, in Spanish: one primary action
          and the EN/ES switch; the halftime link lives in chapter 07. */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <div className={styles.kicker}>Mundial de la FIFA 2026 · canción oficial</div>
          <h1 className={styles.h1}>
            La historia de <span className={`inkText ${styles.name}`}>Dai Dai</span>
          </h1>
          <p className={styles.lede}>
            <span className={styles.ledeWide}>
              La canción oficial del Mundial de Shakira × Burna Boy — del lanzamiento en mayo al
              primer show de medio tiempo de una final del Mundial, y después cada lista,
              certificación y reproducción que la respalda.
            </span>
            <span className={styles.ledeNarrow}>
              La canción oficial del Mundial de Shakira × Burna Boy, del lanzamiento al primer show
              de medio tiempo de una final.
            </span>
          </p>
          <div className={styles.heroActions}>
            <a className={`btn btnPrimary ${styles.skip}`} href="#numbers">Saltar a las cifras</a>
            <LangSwitch current="es" label="Idioma" />
          </div>
        </div>
        <figure className={styles.heroCover}>
          <picture>
            <source media="(max-width: 900px)" srcSet={BLANK_PIXEL} />
            <img
              className={styles.heroCoverImg}
              src={spotifyImage(DAI_DAI_COVER, 640)}
              srcSet={spotifySrcSet(DAI_DAI_COVER)}
              sizes="360px"
              alt="Portada del sencillo Dai Dai — Shakira × Burna Boy, Mundial de la FIFA 2026"
              width={360}
              height={360}
              fetchPriority="high"
            />
          </picture>
          <figcaption className={styles.heroCoverCaption}>
            Shakira × Burna Boy · sencillo · {DAI_DAI_RELEASE_DATE.slice(0, 4)}
          </figcaption>
        </figure>
      </section>

      <DaiDaiStory
        lang="es"
        steps={steps}
        labels={{
          story: "La historia",
          meta: "{n} capítulos · {from} → {to}",
          end: "Fin de la historia",
          back: "Volver",
          menu: "Abrir menú",
        }}
        figureLabels={{
          locale: "es-ES",
          released: "Lanzamiento",
          coverAlt: "Portada del sencillo Dai Dai — Shakira × Burna Boy, Mundial de la FIFA 2026",
          credit: "Shakira × Burna Boy",
          weeksAt1: "semanas en el N.º 1",
          weekByWeek: "semana a semana",
          weekTick: "w{n}",
          weekRead: "Lista del {date}: N.º {n}",
          weekUnread: "Lista del {date}: sin lectura",
          globalFirst: "Primer artista africano en lograrlo · el 2.º de Shakira",
          globalSpells: "{a} seguidas, una en el N.º {dip} y {b} más.",
          globalExUs: "Además, {n} semanas seguidas en el N.º 1 de la Global 200 sin EE. UU.",
          countriesAt1: "países en el N.º 1",
          daysAt1: "días en el N.º 1",
          spells: "Spotify Global daily · {n} rachas",
          spellsRead: "{n} días en el N.º 1, en estas rachas: {list}.",
          certs: "certificaciones",
          tiers: { diamond: "Diamante", platinum: "Platino", gold: "Oro", silver: "Plata" },
          multiple: "{n}× {tier}",
          spotifyPeak: "Pico en Spotify Global",
          biggest: "El himno mundialista con el pico más alto de la historia de Spotify Global",
          venue: "{date} · MetLife Stadium",
          watch: "Ver el show",
          play: "Reproducir el show de medio tiempo",
          videoTitle: "Shakira y Burna Boy en el show de medio tiempo de la Final del Mundial de la FIFA 2026",
        }}
      />

      <RecordBand
        title="El historial"
        lead="Las cifras de la propia canción, no los totales de la carrera de Burna Boy."
        more="Cada una nombra su lista."
      />

      <div className={styles.wrap}>
        <Lineup
          id="dd-lineup"
          title="El cartel del show de medio tiempo"
          meta={`${halftimeLong} · MetLife Stadium · producción de Global Citizen`}
          note="También en el cartel: los Triplets Ghetto Kids de Uganda en el escenario, el director Gustavo Dudamel y el PS22 Chorus."
          lineup={lineup}
        />

        <section className={`${styles.section} ${styles.sectionTakeover}`} aria-labelledby="dd-conquest">
          <SectionHead id="dd-conquest" title="La conquista mundial" aside={conquestIntro} stackOnPhone />
          <DaiDaiConquest
            countries={conquestCountries}
            labels={{
              aria: "“Dai Dai” entró en las listas de {total} países y llegó al número 1 en {ones} de ellos.",
              cell: "{name}, pico N.º {peak}",
              showAll: "Ver los {total}, con nombres",
              showFewer: "Ver menos",
            }}
          />
          <DaiDaiReplay data={replayData} labels={ES_REPLAY_LABELS} />
          <noscript>
            <DaiDaiReplayMultiples data={replayData} labels={ES_REPLAY_LABELS} />
          </noscript>
        </section>

        <section id="numbers" className={`${styles.section} ${styles.sectionNumbers}`} aria-labelledby="dd-numbers">
          <SectionHead
            id="dd-numbers"
            title="Dai Dai en cifras"
            aside="Las cifras de la propia canción, no los totales de la carrera de Burna Boy."
            hideAsideOnPhone
          />
          <Leads leads={leads} live={numbersLabels.live} />
          <NationalTable rows={nationalRows} t={numbersLabels} id="dd-national" />
          <RuledLists lists={numberLists} t={numbersLabels} idPrefix="dd-list" />
        </section>

        {/* Deliberately NOT .desktopOnly — see the note on the English page,
            which had the identical defect and is fixed in the same pass. Both
            editions share ONE stylesheet (../dai-dai.module.css), so the class
            hid the Spanish answers below 900px exactly as it hid the English
            ones, while this page's own FAQPage JSON-LD (inLanguage: "es") went
            out at every width.
            It matters at least as much here: half this song's audience searches
            in Spanish, which is the reason this edition exists at all, and a
            Spanish-language search for "¿quiénes son los Ghetto Kids?" arrives
            on a phone. A heading column and every answer open on a laptop.
            The Keep-exploring rail at the foot of this file stays .desktopOnly,
            exactly as on the English edition.
            The phone fold is FaqList, exactly as on the English edition —
            rendered open on the server and collapsed after mount, so a Spanish
            reader whose JavaScript never arrives still gets all eight answers.
            The control needs no translating: its accessible name is the
            question itself and its affordance is a +/−. */}
        <section className={styles.faq} aria-labelledby="dd-faq">
          <div className={styles.faqHead}>
            <h2 id="dd-faq" className={styles.h2}>
              Preguntas frecuentes
            </h2>
          </div>
          <FaqList
            items={faqs}
            classes={{
              list: styles.faqList,
              item: styles.faqItem,
              q: styles.faqQ,
              a: styles.faqA,
            }}
          />
        </section>

        {/* The English edition's outro, in Spanish. The way back to English is
            the hero's EN/ES switch, so the outro carries the same three links. */}
        <section className={styles.outro} aria-label="Más sobre el recorrido">
          <p className={styles.outroLead}>Cada cifra de esta página nombra la lista o el organismo que la publicó.</p>
          <div className={styles.outroLinks}>
            <Link href="/records/charts?song=Dai%20Dai" className={styles.outroLink}>Todas las posiciones <span aria-hidden="true">↗</span></Link>
            <Link href="/records/africas-biggest" className={styles.outroLink}>Lo más grande de África <span aria-hidden="true">↗</span></Link>
            <Link href="/music" className={styles.outroLink}>Discografía de Burna Boy <span aria-hidden="true">↗</span></Link>
          </div>
        </section>
      </div>

      {/* The English edition's rail, translated — desktop only there too: the
          five-tab bar is how a phone moves around this site. */}
      <div className={`${styles.desktopOnly} ${styles.exploreRail}`}>
        <KeepExploring current="/dai-dai/es" lang="es" />
      </div>
    </main>
  );
}
