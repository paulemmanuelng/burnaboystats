import Link from "next/link";
import styles from "../dai-dai.module.css";
import DaiDaiStory, { type Step } from "../../components/DaiDaiStory";
import DaiDaiConquest, { type ConquestCountry } from "../../components/DaiDaiConquest";
import DaiDaiNumbers from "../../components/DaiDaiNumbers";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../../lib/seo";
import { lastUpdated } from "../../lib/api";
import {
  daiDaiNumberOnes,
  daiDaiChartEntryCount,
  allChartItems,
  CHART_COUNTRIES,
  weeksAtPeak,
  weeksOnChart,
} from "../../data/charts";
import { liveCharts } from "../../data/liveCharts";
import { daiDaiCertCount } from "../../data/certifications";
import { DAI_DAI_VIDEO_VIEWS, DAI_DAI_SPOTIFY_STREAMS } from "../../data/daiDai";
import { spotifyImage, spotifySrcSet } from "../../lib/spotifyImage";
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

const daiDai = allChartItems.find((r) => r.title === "Dai Dai");
const conquestCountries: ConquestCountry[] = (daiDai?.entries ?? [])
  .filter((e) => e.c !== "GLB" && e.c !== "GLBX")
  .map((e) => ({
    code: e.c,
    flag: CHART_COUNTRIES[e.c]?.flag ?? "🏳",
    name: CHART_COUNTRIES[e.c]?.name ?? e.c,
    peak: e.peak,
  }));
const conquestTotal = conquestCountries.length;
const conquestNo1 = conquestCountries.filter((c) => c.peak === 1).length;
// Las semanas se leen de los datos, igual que en la edición inglesa — una cifra
// escrita a mano en dos idiomas se desincroniza el doble de rápido.
import { cardinalWord, ordinalWord } from "../../lib/plural";

const weeksDE = weeksAtPeak("Dai Dai", "DE");
const weeksCH = weeksAtPeak("Dai Dai", "CH");
const weeksFR = weeksAtPeak("Dai Dai", "FR");
const weeksGLB = weeksAtPeak("Dai Dai", "GLB");
const weeksGLBX = weeksAtPeak("Dai Dai", "GLBX");
// The national runs verified on 22 Aug 2026, each read in the chart body's own
// week-by-week run rather than off a round-up. Norway carries no weeksOnChart:
// VG-lista's song page says 10 weeks where the circulating figure said 13, and
// an unpublished longevity figure is omitted here, never guessed.
const weeksAT = weeksAtPeak("Dai Dai", "AT");
const weeksBE = weeksAtPeak("Dai Dai", "BE");
const weeksNL = weeksAtPeak("Dai Dai", "NL");
const weeksSE = weeksAtPeak("Dai Dai", "SE");
const weeksNO = weeksAtPeak("Dai Dai", "NO");
const weeksUK = weeksAtPeak("Dai Dai", "UK");
const runUK = weeksOnChart("Dai Dai", "UK");

const conquestIntro = `“Dai Dai” ha entrado en las listas de ${conquestTotal} países — y ha llegado al número 1 en ${conquestNo1} de ellos. Los países en dorado son los número 1; el resto entró sin llegar a la cima.`;

// Same derivation as the English page: the live board decides, not a sentence.
const ddLive = liveCharts.find((r) => r.title === "Dai Dai");
const liveOnes = (platform: string) =>
  ddLive?.platforms
    .find((p) => p.platform === platform)
    ?.entries.filter((e) => e.position === 1 && !/world/i.test(e.name)).length ?? 0;
const platformOnes = ["YouTube", "Apple Music", "Deezer", "Spotify", "iTunes", "Shazam"]
  .map((p) => [p, liveOnes(p)] as const)
  .filter(([, n]) => n > 0);
const liveOnesLabel = `ahora mismo en las listas diarias de ${platformOnes
  .map(([p, n], i) => (i === 0 ? `${p} (${n} países)` : `${p} (${n})`))
  .join(", ")
  .replace(/, ([^,]*)$/, " y $1")} — actualizado cada hora desde el panel en vivo`;

export const metadata = pageMetadata({
  title: "Dai Dai — el himno del Mundial 2026 de Shakira y Burna Boy",
  description:
    "“Dai Dai”, de Shakira y Burna Boy: 37 días como la canción más escuchada del mundo, número 1 en 27 países y el show de medio tiempo de la Final del Mundial.",
  path: ES_PATH,
  shareTitle: "La historia de Dai Dai — Shakira y Burna Boy",
  shareDescription:
    "El himno del Mundial 2026 de Shakira y Burna Boy — número 1 en el mundo entero.",
  locale: "es_ES",
  languages: { en: EN_PATH, es: ES_PATH, "x-default": EN_PATH },
});

export default function DaiDaiPageES() {
  const HALFTIME_VIDEO = "https://youtu.be/T3thHUtPdhc";

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Dai Dai — el himno oficial del Mundial de la FIFA 2026",
    description:
      "La historia de “Dai Dai”, el himno oficial del Mundial de la FIFA 2026 de Shakira y Burna Boy — su recorrido histórico en listas, streaming y certificaciones, y su actuación en el show de medio tiempo de la Final.",
    datePublished: "2026-07-16",
    dateModified: asDateTime(lastUpdated),
    image: [`${CANONICAL_ORIGIN}${ES_PATH}/opengraph-image`],
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
      datePublished: "2026-05",
      genre: ["Afrobeats", "Latin pop"],
    },
    url: `${CANONICAL_ORIGIN}${ES_PATH}`,
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
      body: `En cuestión de semanas la canción lideró la lista mundial insignia de Billboard, la que incluye a Estados Unidos: el segundo número 1 de Shakira en el Global 200 y la primera vez en la historia que un artista africano ayuda a encabezarla. Tras cuatro semanas consecutivas bajó al N.º 3, y el 22 de agosto recuperó la cima para una ${ordinalWord(weeksGLB, "es")} semana, un mes después del final del Mundial. Nunca ha dejado el número 1 del Global 200 Excl. US, donde ya suma ${cardinalWord(weeksGLBX, "es")} semanas.`,
    },
    {
      scene: "no1s",
      kicker: "En todo el mundo",
      title: "Número 1 en un país tras otro",
      body: `“Dai Dai” llegó al número 1 en ${daiDaiNumberOnes} países —de Francia y Alemania a los Países Bajos y Emiratos Árabes Unidos— y encabezó las dos listas globales de Billboard. El alcance de una colaboración verdaderamente mundial.`,
    },
    {
      scene: "streaming",
      kicker: "En streaming",
      title: "La canción más escuchada del planeta",
      body: "“Dai Dai” lideró la lista Global Top Songs de Spotify tanto en su versión diaria como en la semanal: 37 días como la canción más escuchada del mundo, una racha recuperada en agosto, y la primera vez que un artista africano la encabeza.",
    },
    {
      scene: "certs",
      kicker: "Certificada en el mundo entero",
      title: "Llegaron los discos",
      body: `La canción ganó sus propias certificaciones: doble platino (latino) en Estados Unidos, platino en España, Francia, Eslovaquia, Portugal y Hungría, oro en Colombia, Grecia, Chequia e Italia, y plata en el Reino Unido. Ya son ${daiDaiCertCount} certificaciones para la colaboración de Shakira y Burna Boy, y siguen sumando.`,
    },
    {
      scene: "worldsong",
      kicker: "El récord",
      title: "El himno mundialista más grande de la historia",
      body: "Ninguna canción de un Mundial de la FIFA había llegado tan alto: “Dai Dai” es el himno mundialista con el pico más alto en la historia del Spotify Global — el pop latino de Shakira y el afrobeats de Burna Boy encontrándose en la cumbre.",
    },
    {
      scene: "halftime",
      kicker: "19 de julio de 2026",
      title: "El show de medio tiempo de la Final",
      body: "Shakira y Burna Boy interpretaron “Dai Dai” en el primer show de medio tiempo de una Final del Mundial, en el MetLife Stadium, acompañados en el escenario por los Triplets Ghetto Kids de Uganda.",
    },
  ];

  const heroNumbers: { v: string; l: string }[] = [
    { v: `${daiDaiChartEntryCount}`, l: "entradas en listas oficiales de todo el mundo — en listas nacionales de sencillos, más las dos listas globales de Billboard" },
    { v: `${daiDaiNumberOnes}`, l: "países con la canción en el número 1 de su lista oficial de sencillos — de Francia y Alemania a Emiratos Árabes Unidos" },
    { v: "N.º 1", l: `en las dos listas globales de Billboard — ${ordinalWord(weeksGLB, "es")} semana en la cima del Global 200 (algo inédito para un artista africano, y el segundo de Shakira), recuperada en la lista del 22 de agosto tras una semana en el N.º 3, y ${ordinalWord(weeksGLBX, "es")} semana consecutiva en el Global 200 Excl. US` },
    { v: DAI_DAI_SPOTIFY_STREAMS, l: "reproducciones en Spotify — la octava canción de Burna Boy que supera los 300 millones, más que ningún otro artista africano, tras 37 días como la canción más escuchada del planeta" },
    { v: `${daiDaiCertCount}`, l: "certificaciones — doble platino (latino) en EE. UU., platino en España, Francia, Eslovaquia, Portugal y Hungría, oro en Colombia, Grecia, Chequia e Italia, y plata en el Reino Unido" },
    { v: "19 jul", l: "Shakira y Burna Boy interpretaron “Dai Dai” en vivo en el primer show de medio tiempo de una Final del Mundial de la FIFA" },
  ];

  const numberGroups = [
    {
      label: "Las rachas en streaming",
      intro: "Las rachas diarias y semanales, todas todavía en marcha.",
      items: [
        { v: "37 días", l: "en total en el número 1 de la lista Global Daily Top Songs de Spotify —algo inédito para un artista africano, y recuperado en agosto como la racha más larga de cualquier lanzamiento de 2026—; la canción con más días en el número 1 de todo 2026, ahora cinco por delante de “End of Beginning” de Djo (32) y seis de “Beauty And A Beat” de Justin Bieber y Nicki Minaj (31); más de 67 días dentro del top 10 mundial y 98 en la lista" },
        { v: "6 semanas", l: "en el número 1 de la lista Global Weekly Top Songs de Spotify, en su 13.ª semana en ella — con un pico de 40,28 millones de reproducciones en una sola semana" },
        { v: "58 días", l: "en el número 1 de la lista europea de Apple Music, más 11 días en la cima de la lista mundial de Apple Music" },
        { v: "40 días", l: "en el número 1 de la lista mundial de canciones de iTunes, y 15 días en la cima de la lista europea de iTunes" },
        { v: "N.º 1", l: liveOnesLabel },
      ],
    },
    {
      label: "Las listas nacionales",
      intro: "País por país, en las listas oficiales de sencillos.",
      items: [
        { v: `${weeksDE} semanas`, l: "en el número 1 de la lista oficial de sencillos de Alemania — y elegida Sommerhit 2026, la canción del verano del país, por GfK Entertainment, tras casi 60 millones de reproducciones alemanas" },
        { v: `${weeksCH} semanas`, l: "en el número 1 de la lista oficial de Suiza — la racha más larga de cualquier canción en el país en lo que va de año" },
        { v: `${weeksFR} semanas`, l: "en el número 1 de la lista oficial de sencillos de Francia (SNEP)" },
        { v: `${weeksAT} semanas`, l: "en el número 1 del Ö3 Austria Top 40 — una racha ininterrumpida desde finales de junio, con 13 semanas en lista" },
        { v: `${weeksBE} semanas`, l: "en el número 1 del Ultratop 50 de Valonia — nueve seguidas, y número 1 también en Flandes" },
        { v: `${weeksNL} semanas`, l: "en el número 1 del Single Top 100 neerlandés — dos en junio y cinco más desde finales de julio, en una permanencia de 13 semanas" },
        { v: `${weeksSE} semanas`, l: "en el número 1 de la Sverigetopplistan sueca, recuperado en la semana 34 — 14 semanas en lista" },
        { v: `${weeksNO} semanas`, l: "en el número 1 de la VG-lista Topp 40 de Noruega — cuatro semanas consecutivas, desde la semana 31" },
        { v: "N.º 1", l: "en la lista IMI International Top 20 Singles de la India — la primera canción de Burna Boy que encabeza una lista en ese país" },
        { v: "N.º 1", l: "en el Official MENA Chart Top 20 —todavía en la cima en su última semana— y en la lista US World Digital Song Sales de Billboard" },
        { v: "N.º 2", l: `en la lista oficial de sencillos del Reino Unido — ${weeksUK}.ª semana en ese pico, ya con ${runUK} semanas en lista. La primera canción de un Mundial de la FIFA que entra en el top 10 británico, muy por encima del N.º 21 que alcanzó “Waka Waka” de la propia Shakira` },
        { v: "N.º 3", l: "en el Billboard Canadian Hot 100 — un nuevo pico y el primer top 10 de Burna Boy en Canadá, donde su mejor posición había sido el N.º 14. Es también el primer top 10 canadiense de Shakira desde “She Wolf” en 2009" },
        { v: "N.º 17", l: "en el Billboard Hot 100 de Estados Unidos — un salto del 42 al 17 en la lista del 1 de agosto, el pico más alto de una canción mundialista en la historia del Hot 100. Luminate registró 8,6 millones de reproducciones en Estados Unidos (+69 %), 13,9 millones de audiencia radial (+11 %) y 7.000 copias vendidas (+322 %) en la semana de seguimiento del 17 al 23 de julio" },
        { v: "N.º 1", l: "en el Big Top 40 del Reino Unido por tercera semana — la cuenta atrás nacional de las cadenas Capital y Heart, con Burna Boy recibiendo la placa de número 1" },
        { v: "N.º 3", l: "en la lista Rhythmic Airplay de Billboard — un nuevo pico, el cuarto top 10 de Burna Boy en ese formato y el primero de Shakira en 20 años, desde “Hips Don't Lie” (2006). También es N.º 26 en Pop Airplay" },
      ],
    },
    {
      label: "Los rankings mundiales",
      intro: "Las listas que miden el planeta entero a la vez.",
      items: [
        { v: "8 semanas", l: "en el número 1 del United World Chart de Mediatraffic — 326.000 puntos en la semana del 22 de agosto, y la primera canción de Burna Boy que lo lidera" },
        { v: "N.º 1", l: "en la lista de canciones de iTunes en 73 países — Estados Unidos, Reino Unido, Canadá, Francia, Italia, Nueva Zelanda, India, España, Portugal, Hungría y decenas más, Bielorrusia la más reciente" },
        { v: "N.º 13", l: "en el Deezer Worldwide Top 100 — un nuevo pico, con presencia en 57 países y el número 1 en 23 de ellos" },
        { v: "29 días", l: "en el número 1 de la lista Global Music Video de Spotify — más que cualquier otra canción en esa lista, y no por poco: la siguiente racha más larga es de 3 días" },
        { v: "N.º 14", l: "la posición de Burna Boy en el ranking Global Digital Artist (1.739 puntos) durante el recorrido" },
      ],
    },
    {
      label: "El video",
      intro: "El video de “Dai Dai”, con carrera propia.",
      items: [
        { v: DAI_DAI_VIDEO_VIEWS, l: "visualizaciones en YouTube — 600 millones en 67 días, el video musical más rápido de la carrera de ambos artistas hasta esa cifra y el único de 2026 en alcanzarla. Superó los 500 millones en 59,4 días (el 12.º más rápido de la historia) y los 700 millones en 74,8 días — el 8.º video musical más rápido en la historia de YouTube" },
        { v: "48 días", l: "como el video musical más visto del mundo en YouTube — ya supera los 6,1 millones de “me gusta”" },
      ],
    },
  ];

  const faqs: { q: string; a: string }[] = [
    {
      q: "¿Quién canta “Dai Dai”?",
      a: "“Dai Dai” es una colaboración de 2026 entre la superestrella colombiana del pop Shakira y la estrella nigeriana del afrobeats Burna Boy. Es la canción oficial del Mundial de la FIFA 2026.",
    },
    {
      q: "¿“Dai Dai” es la canción del Mundial 2026?",
      a: "Sí. “Dai Dai” es el himno oficial del Mundial de la FIFA 2026, y Shakira y Burna Boy la interpretaron en vivo en el show de medio tiempo de la Final, el 19 de julio de 2026.",
    },
    {
      q: "¿“Dai Dai” llegó al número 1?",
      a: `Sí. “Dai Dai” llegó al número 1 del Billboard Global 200 y del Global 200 Excl. US, lideró la lista Global Top Songs de Spotify tanto en su versión diaria como en la semanal, y alcanzó el número 1 de la lista oficial de sencillos en ${daiDaiNumberOnes} países.`,
    },
    {
      q: "¿Hasta dónde llegó “Dai Dai” en el Reino Unido?",
      a: "“Dai Dai” alcanzó el número 2 de la lista oficial de sencillos del Reino Unido — la primera canción de un Mundial de la FIFA que entra en el top 10 británico, y con diferencia la canción mundialista más alta en la historia de esa lista, por encima de “Waka Waka (This Time for Africa)” de la propia Shakira, que llegó al número 21 en 2010.",
    },
    {
      q: "¿Quiénes son los Ghetto Kids que actuaron con Shakira y Burna Boy?",
      a: "Los Triplets Ghetto Kids de Uganda —un grupo infantil de baile de Kampala que se hizo viral en internet— acompañaron a Shakira y Burna Boy en el escenario durante “Dai Dai” en el show de medio tiempo de la Final del Mundial 2026, después de que Shakira los invitara a la actuación.",
    },
    {
      q: "¿Cuántas certificaciones tiene “Dai Dai”?",
      a: "“Dai Dai” tiene 11 certificaciones: doble platino (latino) en Estados Unidos por la RIAA, platino en España, Francia, Eslovaquia, Portugal y Hungría, oro en Colombia, Grecia, Chequia e Italia, y plata en el Reino Unido por la BPI.",
    },
    {
      q: "¿Cuándo fue el show de medio tiempo de la Final del Mundial 2026?",
      a: "El primer show de medio tiempo de una Final del Mundial de la FIFA se celebró el 19 de julio de 2026 en el MetLife Stadium. Shakira y Burna Boy interpretaron “Dai Dai”, acompañados en el escenario por los Triplets Ghetto Kids de Uganda.",
    },
    {
      q: "¿Quiénes actuaron en el show de medio tiempo de la Final?",
      a: "El primer show de medio tiempo de una Final del Mundial contó con Madonna, Shakira y Burna Boy (interpretando “Dai Dai”), BTS, Justin Bieber, el director de orquesta Gustavo Dudamel y el PS22 Chorus junto a Coldplay, con producción de Global Citizen, el 19 de julio de 2026 en el MetLife Stadium.",
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
    { name: "Shakira", img: SHAKIRA_PORTRAIT, tag: "“Dai Dai”", headliner: true },
    { name: "Burna Boy", img: BURNA_PORTRAIT, tag: "“Dai Dai”", headliner: true },
    { name: "Madonna", img: "https://i.scdn.co/image/ab6761610000e5ebed2208b41d49ebd24687985b", tag: "“Music”" },
    { name: "BTS", img: "https://i.scdn.co/image/ab6761610000e5ebf80ec63ea7a0ef0fba60957d", tag: "“Dynamite”" },
    { name: "Justin Bieber", img: "https://i.scdn.co/image/ab6761610000e5ebaf20f7db5288bce9beede034", tag: "“Everything Hallelujah”" },
    { name: "Coldplay", img: "https://i.scdn.co/image/ab6761610000e5eb1ba8fc5f5c73e7e9313cc6eb", tag: "con el PS22 Chorus" },
  ];

  return (
    <main id="content" lang="es">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className={`${styles.wrap} ${styles.heroPad}`}>
        <div className={styles.kicker}>Mundial de la FIFA 2026 · canción oficial</div>
        <h1 className={styles.h1}>
          La historia de <span className="inkText">Dai Dai</span>
        </h1>
        <p className={styles.lede}>
          Cómo el himno mundialista de Shakira y Burna Boy se convirtió en la canción más
          grande del mundo — y en historia en el primer show de medio tiempo de una Final
          del Mundial. Desplázate para seguir el recorrido.
        </p>
        <div className={styles.heroActions}>
          <a
            className="btn btnPrimary"
            href={HALFTIME_VIDEO}
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Ver el show de medio tiempo ↗
          </a>
          <Link className="btn btnSecondary" href={EN_PATH} hrefLang="en">
            Read in English
          </Link>
        </div>
      </section>

      <div className={styles.wrap}>
        <DaiDaiStory
          daiDaiNo1s={daiDaiNumberOnes}
          daiDaiCerts={daiDaiCertCount}
          weeksGLB={weeksGLB}
          weeksGLBX={weeksGLBX}
          lang="es"
          steps={steps}
          sceneCopy={{
            heroLabel: "Dai Dai · Shakira × Burna Boy",
            global1Note: "Primer artista africano en lograrlo · el 2.º de Shakira",
            no1sLabel: "países en el n.º 1",
            no1sLink: "Ver todas las posiciones de Dai Dai →",
            streamingNote: "Diaria y semanal · 37 días como la canción más escuchada del mundo",
            certsLabel: "certificaciones de Dai Dai",
            certsNote: "Doble platino (latino) en EE. UU. · platino en 5 países más",
            certsLink: "Ver las certificaciones de Dai Dai →",
            worldsongWord: "EL HIMNO\nMUNDIALISTA\nMÁS GRANDE",
            worldsongLabel: "El pico más alto en el Spotify Global",
            halftimeLabel: "Final del Mundial · show de medio tiempo",
            halftimeNote: "Shakira y Burna Boy · medio tiempo, 19 de julio",
          }}
        />

        <section className={styles.section} aria-labelledby="dd-lineup">
          <div className={styles.kicker}>19 de julio de 2026 · MetLife Stadium</div>
          <h2 id="dd-lineup" className={styles.h2}>
            El cartel del <span className={styles.gold}>show de medio tiempo</span>
          </h2>
          <p className={styles.sectionIntro}>
            El primer show de medio tiempo de una Final del Mundial de la FIFA, producido por
            Global Citizen. Shakira y Burna Boy interpretaron “Dai Dai” en un cartel de
            superestrellas globales.
          </p>
          <ul className={styles.lineupGrid}>
            {lineup.map((a) => (
              <li key={a.name} className={`${styles.lineupCard} ${a.headliner ? styles.lineupHeadliner : ""}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className={styles.lineupPhoto} src={spotifyImage(a.img, 320)} srcSet={spotifySrcSet(a.img)} sizes="128px" alt={a.name} width={128} height={128} loading="lazy" />
                <span className={styles.lineupName}>{a.name}</span>
                {a.tag ? <span className={styles.lineupTag}>{a.tag}</span> : null}
              </li>
            ))}
          </ul>
          <p className={styles.lineupNote}>
            También en el cartel: los Triplets Ghetto Kids de Uganda en el escenario, el
            director Gustavo Dudamel y el PS22 Chorus.
          </p>
        </section>

        <section className={styles.section} aria-labelledby="dd-conquest">
          <div className={styles.kicker}>País por país</div>
          <h2 id="dd-conquest" className={styles.h2}>
            La <span className={styles.gold}>conquista mundial</span>
          </h2>
          <p className={styles.sectionIntro}>{conquestIntro}</p>
          <DaiDaiConquest
            countries={conquestCountries}
            labels={{
              countries: "países",
              atNo1: "en el n.º 1",
              aria: "“Dai Dai” entró en las listas de {total} países y llegó al número 1 en {ones} de ellos.",
              peak: "{name} — pico n.º {peak}",
              legendOne: "N.º 1",
              legendCharted: "En lista",
              showAll: "Ver todos +",
              hide: "Ocultar −",
            }}
          />
        </section>

        <section id="numbers" className={styles.section} aria-labelledby="dd-numbers">
          <div className={styles.kicker}>El récord de la canción</div>
          <h2 id="dd-numbers" className={styles.h2}>
            Dai Dai <span className={styles.gold}>en cifras</span>
          </h2>
          <p className={styles.numIntro}>
            Estas son las cifras de “Dai Dai”, no los totales de la carrera de Burna Boy.
            Todas pertenecen a la canción.
          </p>
          <DaiDaiNumbers
            hero={heroNumbers}
            groups={numberGroups}
            foldMore="Ver el desglose completo ({n} más) +"
            foldLess="Ver menos −"
          />
        </section>

        <section className={`${styles.section} ${styles.desktopOnly}`} aria-labelledby="dd-faq">
          <div className={styles.kicker}>Respuestas claras</div>
          <h2 id="dd-faq" className={styles.h2}>
            Preguntas <span className={styles.gold}>frecuentes</span>
          </h2>
          <div className={styles.faqList}>
            {faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3 className={styles.faqQ}>{f.q}</h3>
                <p className={styles.faqA}>{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.outro}>
          <p className={styles.outroLead}>
            Una canción, un récord mundial y un artista africano en el número 1 de las listas
            más grandes del planeta. Explora los datos detrás del recorrido:
          </p>
          <div className={styles.outroLinks}>
            <Link href="/records/charts?song=Dai%20Dai" className="btn btnPrimary">
              Todas las posiciones ↗
            </Link>
            <Link href={EN_PATH} className="btn btnSecondary" hrefLang="en">
              Read in English ↗
            </Link>
          </div>
        </section>
      </div>

    </main>
  );
}
