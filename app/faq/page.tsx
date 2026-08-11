import styles from "./faq.module.css";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileFaq from "../components/MobileFaq";
import { pageMetadata } from "../lib/seo";
import { totalAwards, countryCount } from "../data/certifications";
import { totalWins, totalNominations, ceremonyCount, ceremonies } from "../data/awards";
import { numberOnes, numberOneReleases, daiDaiNumberOnes } from "../data/charts";
import { countryCount as performedCountryCount, regionCount } from "../data/performedCountries";
import { festivals } from "../data/tours";
import { carCount, totalValueFormatted } from "../data/cars";

export const metadata = pageMetadata({
  title: "Burna Boy FAQ — Grammys, Certifications, Records & Stats",
  description:
    "Quick answers to the most-asked questions about Burna Boy — Grammys, certifications, his highest-grossing tour, Hot 100 entries and more.",
  path: "/faq",
  shareTitle: "Burna Boy FAQ",
  shareDescription: "Quick answers: Grammys, certifications, tours, chart records and more.",
});

const total = totalAwards();
const grammyNoms = ceremonies.find((c) => c.name === "Grammy Awards")?.noms.length ?? 0;
const afroNationCount = festivals.filter((f) => f.name === "Afro Nation").length;

// Age is computed from his birthdate at build time so it never goes stale.
const BORN = { year: 1991, month: 7, day: 2 }; // 2 July 1991
const nowDate = new Date();
const hadBirthday =
  nowDate.getMonth() + 1 > BORN.month ||
  (nowDate.getMonth() + 1 === BORN.month && nowDate.getDate() >= BORN.day);
const age = nowDate.getFullYear() - BORN.year - (hadBirthday ? 0 : 1);

// The design's six groups, in its order. Each is a sticky heading on desktop
// and a chip in the mobile rail.
const GROUPS = [
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
    a: `Burna Boy is a Grammy-winning Nigerian singer, songwriter and Afro-fusion pioneer. Born Damini Ebunoluwa Ogulu on 2 July 1991 in Port Harcourt, Nigeria, he is widely known as the "African Giant" and is one of the most successful African artists in history.`,
  },
  {
    g: "artist",
    q: "What is Burna Boy's real name?",
    a: `Burna Boy's real name is Damini Ebunoluwa Ogulu. He was born on 2 July 1991 in Port Harcourt, Rivers State, Nigeria, and performs under the stage name Burna Boy.`,
  },
  {
    g: "artist",
    q: "How old is Burna Boy?",
    a: `Burna Boy is ${age} years old. He was born Damini Ebunoluwa Ogulu on 2 July 1991 in Port Harcourt, Nigeria.`,
  },
  {
    g: "worldcup",
    q: "Did Burna Boy perform at the 2026 World Cup halftime show?",
    a: `Yes. Burna Boy performed "Dai Dai" with Shakira at the first-ever FIFA World Cup Final halftime show on 19 July 2026 at MetLife Stadium — the first African artist ever to headline a World Cup halftime show. The bill also featured Madonna, BTS, Justin Bieber and Coldplay, with Uganda's Triplets Ghetto Kids joining them on stage.`,
  },
  {
    g: "worldcup",
    q: "What is Burna Boy's World Cup song?",
    a: `"Dai Dai", his collaboration with Shakira, is the official song of the 2026 FIFA World Cup. It reached No. 1 on both Billboard global charts and on the official singles chart in ${daiDaiNumberOnes} countries, and has spent 29 days at No. 1 on Spotify's Global Daily Top Songs chart as the most-streamed song in the world — reclaiming the top spot in August as the longest-running No. 1 by any 2026 release.`,
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
    a: `Burna Boy has 9 Billboard Hot 100 entries — the most by any African artist. He is also the first African artist to chart on the Hot 100 for six consecutive years (2021–2026).`,
  },
  {
    g: "music",
    q: "How many albums does Burna Boy have?",
    a: `Burna Boy has released 8 studio albums — L.I.F.E (2013), On a Spaceship (2015), Outside (2018), African Giant (2019), Twice as Tall (2020), Love, Damini (2022), I Told Them… (2023) and No Sign of Weakness (2025) — plus 2 EPs.`,
  },
  {
    g: "music",
    q: "What is Burna Boy's biggest song?",
    a: `By chart performance it is "Dai Dai" with Shakira, the 2026 FIFA World Cup song — No. 1 on both Billboard global charts and in ${daiDaiNumberOnes} countries. His biggest solo song is "Last Last" (2022), certified Diamond in France and his most-streamed track. His biggest featured credit is "Location" with Dave, certified 5× Platinum in the UK.`,
  },
  {
    g: "music",
    q: "How many number-one songs does Burna Boy have?",
    a: `Burna Boy has ${numberOneReleases} releases that have reached No. 1 on an official national chart — ${numberOnes} chart-topping placements in all, since several reached No. 1 in more than one country at once. His No. 1s span Nigeria, the UK, South Africa, the Netherlands, Switzerland and Colombia, among others.`,
  },
  {
    g: "worldcup",
    q: "What records has Burna Boy set for African music?",
    a: `Burna Boy was the first African artist to headline a FIFA World Cup opening ceremony and the first to perform at a World Cup Final halftime show (both 2026), the first to sell out a stadium in the United States (Citi Field, 2023) and to headline a UK stadium (London Stadium, 2023), and the first African artist to surpass both 1 billion and 2 billion UK streams.`,
  },
  {
    g: "cars",
    q: "How many cars does Burna Boy have?",
    a: `Burna Boy currently has ${carCount} cars — a collection worth a reported ${totalValueFormatted}+, spanning Ferrari, Lamborghini, Rolls-Royce, McLaren, Bugatti, Porsche and Mercedes. Only vehicles confirmed still in his possession are counted; ones he has since sold (a Ferrari 458 Italia and 488 Spider) are listed separately.`,
  },
  {
    g: "cars",
    q: "What is Burna Boy's most expensive car?",
    a: `Burna Boy's most expensive car is his ₦9 billion one-of-one widebody Bugatti Chiron — a custom build by Dubai's Venuum, unveiled in July 2026 and billed as the world's first widebody Chiron. It is reported as the most expensive car in West Africa (around $6.19 million).`,
  },
  {
    g: "cars",
    q: "How much is Burna Boy's car collection worth?",
    a: `Burna Boy's ${carCount}-car collection is worth a reported ${totalValueFormatted}+ in total, based on itemised entertainment-press valuations (import-inclusive) — led by his ₦9 billion Bugatti Chiron, a McLaren Senna and a Ferrari Purosangue.`,
  },
  {
    g: "artist",
    q: "Is Burna Boy the biggest African artist?",
    a: `By several measures, yes. Burna Boy is the most-certified African artist in history (${total} certifications across ${countryCount} countries), holds the records for the highest-grossing tour and biggest single concert by an African artist, and was the first African artist to headline a FIFA World Cup opening ceremony and to perform at a World Cup Final halftime show. Alongside Wizkid and Davido, he is widely regarded as one of the artists who took Afrobeats global.`,
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

const SOURCE_NOTE =
  "Figures stay in sync with the site's certifications, charts, awards and tours data, verified against official sources as of August 2026.";

const groups = GROUPS.map((g) => ({
  ...g,
  items: faqs.filter((f) => f.g === g.id),
})).filter((g) => g.items.length > 0);

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqPage() {
  return (
    <main id="content">
      {/* FAQ structured data — helps Google and AI answer engines lift these answers. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Mobile is screen 08 — a flat list where each question carries its
          own category label, since a phone scrolls past sticky headings. */}
      <MobileFaq
        total={faqs.length}
        chips={groups.map((g) => ({ id: g.id, label: g.title, count: g.items.length }))}
        items={groups.flatMap((g) => g.items.map((f) => ({ group: g.title, q: f.q, a: f.a })))}
        source={SOURCE_NOTE}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/faq" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Answer first
            </div>
            <h1 className={styles.h1}>
              Burna Boy <span className="inkText">FAQ</span>
            </h1>
            <p className={styles.lede}>
              Quick, verified answers to the questions people ask most about the African
              Giant — every figure pulled from the same data as the rest of the site.
            </p>
          </div>
        </section>

        {/* ── Jump band ──────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={`${styles.wide} ${styles.jumpPad}`}>
            <span className={styles.jumpLabel}>Jump to</span>
            {groups.map((g) => (
              <a key={g.id} href={`#${g.id}`} className={styles.jumpChip}>
                {g.title}
                <span className={styles.jumpCount}>{g.items.length}</span>
              </a>
            ))}
            <span className={styles.jumpTotal}>{faqs.length} questions</span>
          </div>
        </section>

        {/* ── Groups ─────────────────────────────────────────── */}
        {groups.map((g) => (
          <section key={g.id} id={g.id} className={styles.band}>
            <div className={`${styles.wide} ${styles.groupPad}`}>
              <div className={styles.groupAside}>
                <div className={styles.groupKicker}>{g.kicker}</div>
                <h2 className={styles.groupTitle}>{g.title}</h2>
                <div className={styles.groupCount}>
                  {g.items.length} {g.items.length === 1 ? "question" : "questions"}
                </div>
              </div>
              <div className={styles.qList}>
                {g.items.map((f) => (
                  <div key={f.q} className={styles.item}>
                    <h3 className={styles.q}>{f.q}</h3>
                    <p className={styles.a}>{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── Source ─────────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={`${styles.wide} ${styles.sourcePad}`}>
            <p className={styles.source}>{SOURCE_NOTE}</p>
          </div>
        </section>

        <KeepExploring current="/faq" />
      </div>
    </main>
  );
}
