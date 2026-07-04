import styles from "./faq.module.css";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata } from "../lib/seo";
import { totalAwards, countryCount } from "../data/certifications";
import { totalWins, totalNominations, ceremonyCount, ceremonies } from "../data/awards";
import { numberOnes, numberOneReleases } from "../data/charts";
import { countryCount as performedCountryCount, regionCount } from "../data/performedCountries";
import { festivals } from "../data/tours";

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

// Answer-first Q&A — figures pull from the site's own data so they stay in sync.
const faqs: { q: string; a: string }[] = [
  {
    q: "Who is Burna Boy?",
    a: `Burna Boy is a Grammy-winning Nigerian singer, songwriter and Afro-fusion pioneer. Born Damini Ebunoluwa Ogulu on 2 July 1991 in Port Harcourt, Nigeria, he is widely known as the "African Giant" and is one of the most successful African artists in history.`,
  },
  {
    q: "How many Grammys has Burna Boy won?",
    a: `Burna Boy has won 1 Grammy Award — Best Global Music Album for "Twice as Tall" at the 2021 ceremony, where he became the first-ever winner of that renamed category. He has ${grammyNoms} Grammy nominations across his career.`,
  },
  {
    q: "How many awards has Burna Boy won in total?",
    a: `Burna Boy has won ${totalWins} awards from ${totalNominations} nominations across ${ceremonyCount} different award bodies, including the Grammys, BET Awards, MOBO Awards, MTV EMAs, The Headies and AFRIMA.`,
  },
  {
    q: "How many certifications does Burna Boy have?",
    a: `Burna Boy has ${total} music certifications — Silver, Gold, Platinum and Diamond awards across ${countryCount} countries, from bodies including the RIAA (US), BPI (UK), SNEP (France), Music Canada and TurnTable (Nigeria).`,
  },
  {
    q: "What is Burna Boy's highest-grossing tour?",
    a: `The I Told Them… Tour is the highest-grossing tour by an African artist in history, earning $30.46 million from 302,801 tickets across 2023–2025.`,
  },
  {
    q: "What is the biggest concert by an African artist?",
    a: `Burna Boy's June 2024 concert at London Stadium grossed $6.15 million from 58,973 tickets — the highest-grossing single concert by any African artist.`,
  },
  {
    q: "How many Billboard Hot 100 entries does Burna Boy have?",
    a: `Burna Boy has 9 Billboard Hot 100 entries — the most by any African artist. He is also the first African artist to chart on the Hot 100 for six consecutive years (2021–2026).`,
  },
  {
    q: "How many albums does Burna Boy have?",
    a: `Burna Boy has released 8 studio albums — L.I.F.E (2013), On a Spaceship (2015), Outside (2018), African Giant (2019), Twice as Tall (2020), Love, Damini (2022), I Told Them… (2023) and No Sign of Weakness (2025) — plus 2 EPs.`,
  },
  {
    q: "How many number-one songs does Burna Boy have?",
    a: `Burna Boy has ${numberOneReleases} releases that have reached No. 1 on an official national chart — ${numberOnes} chart-topping placements in all, since several reached No. 1 in more than one country at once. His No. 1s span Nigeria, the UK, South Africa, the Netherlands, Switzerland and Colombia, among others.`,
  },
  {
    q: "What records has Burna Boy set for African music?",
    a: `Burna Boy was the first African artist to headline a FIFA World Cup opening ceremony (2026), the first to sell out a stadium in the United States (Citi Field, 2023) and to headline a UK stadium (London Stadium, 2023), and the first African artist to surpass both 1 billion and 2 billion UK streams.`,
  },
  {
    q: "What genre is Burna Boy's music?",
    a: `Burna Boy makes Afrobeats and what he calls "Afro-fusion" — a blend of Afrobeats, Afrobeat, dancehall, reggae, hip-hop and R&B.`,
  },
  {
    q: "How many countries has Burna Boy performed in?",
    a: `Burna Boy has performed live in ${performedCountryCount} countries across ${regionCount} regions — from arena tours and stadium nights to festival headline sets, on every inhabited continent.`,
  },
  {
    q: "How many times has Burna Boy headlined Afro Nation?",
    a: `Burna Boy has headlined Afro Nation ${afroNationCount} times — five editions in Portugal (2019, 2022, 2023, 2025 and 2026), plus Miami and Detroit in 2023.`,
  },
];

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

      <header className="pageHeader container">
        <h1>
          Burna Boy <span className="accent">FAQ</span>
        </h1>
        <p>Quick, verified answers to the questions people ask most about the African Giant</p>
      </header>

      <div className="container">
        <div className={styles.list}>
          {faqs.map((f) => (
            <div key={f.q} className={styles.item}>
              <h2 className={styles.q}>{f.q}</h2>
              <p className={styles.a}>{f.a}</p>
            </div>
          ))}
        </div>

        <p className={styles.source}>
          Figures stay in sync with the site&apos;s certifications, charts, awards and
          tours data, verified against official sources as of July 2026.
        </p>
      </div>

      <KeepExploring current="/faq" />
    </main>
  );
}
