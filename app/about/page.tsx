import Link from "next/link";
import styles from "./about.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileAbout from "../components/MobileAbout";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata, CANONICAL_ORIGIN } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Real Name & Biography — Damini Ebunoluwa Ogulu",
  description:
    "Burna Boy's real name is Damini Ebunoluwa Ogulu, born 2 July 1991 in Port Harcourt, Nigeria — the full biography of the Grammy-winning African Giant.",
  path: "/about",
  shareTitle: "About Burna Boy",
  shareDescription: "Biography & career timeline of the African Giant.",
});

// Verified quick facts (sources: Wikipedia, Grammy.com, Billboard).
const facts = [
  { label: "Real name", value: "Damini Ebunoluwa Ogulu" },
  { label: "Born", value: "2 July 1991" },
  { label: "Birthplace", value: "Port Harcourt, Nigeria" },
  { label: "Genre", value: "Afro-fusion" },
  { label: "Labels", value: "Spaceship · Atlantic" },
  { label: "Grammy", value: "Winner, 2021" },
];

// Verified career milestones.
const timeline = [
  { year: "2013", title: "Debut album — L.I.F.E", text: "Releases his first studio album on Aristokrat Records." },
  { year: "2018", title: "Major-label debut — Outside", text: "Releases his third studio album, Outside — his first album for Atlantic Records (signed 2017)." },
  { year: "2019", title: "African Giant", text: "The album that made him a worldwide headline act. Becomes the first Afrobeats artist to sell out the SSE Arena, Wembley, and wins the BET Award for Best International Act." },
  { year: "2020", title: "Twice as Tall", text: "His fifth studio album arrives to worldwide acclaim." },
  { year: "2021", title: "Grammy winner", text: "Wins Best Global Music Album for Twice as Tall at the 63rd Grammy Awards." },
  { year: "2022", title: "Love, Damini", text: "Becomes the highest-debuting Nigerian album on the US Billboard 200." },
  { year: "2023", title: "Stadium history", text: "First African artist to sell out London Stadium, to about 60,000 fans, and to headline & sell out a stadium in the US (Citi Field). Also releases I Told Them…" },
  { year: "2025", title: "No Sign of Weakness", text: "Releases his eighth studio album and becomes the first Nigerian artist to headline the legendary Red Rocks Amphitheatre, on his biggest North American tour to date." },
  { year: "2026", title: "FIFA World Cup opener", text: "Headlines the 2026 FIFA World Cup Opening Ceremony in Mexico City alongside Shakira, performing the official tournament song, “Dai Dai.”" },
];

// Person entity for the biography page — reinforces "real name / birth name / age"
// queries and gives Google + AI answer engines a clean, self-contained entity.
// Complements the site-wide MusicGroup markup in layout.tsx (a solo artist can be
// both). sameAs mirrors the vetted profile list used site-wide.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Burna Boy",
  alternateName: "Damini Ebunoluwa Ogulu",
  birthDate: "1991-07-02",
  birthPlace: { "@type": "Place", name: "Port Harcourt, Rivers State, Nigeria" },
  nationality: { "@type": "Country", name: "Nigeria" },
  jobTitle: "Singer, songwriter",
  knowsAbout: ["Afrobeats", "Afro-fusion"],
  award: "Grammy Award for Best Global Music Album (2021)",
  url: `${CANONICAL_ORIGIN}/about`,
  sameAs: [
    "https://en.wikipedia.org/wiki/Burna_Boy",
    "https://www.instagram.com/burnaboygram",
    "https://twitter.com/burnaboy",
    "https://open.spotify.com/artist/3wcj11K77LjEY1PkEazffa",
    "https://music.apple.com/us/artist/burna-boy/591899010",
  ],
};

export default function AboutPage() {
  return (
    <main id="content">
      {/* Person structured data — bio-page entity signal for search + AI answers. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      {/* Mobile is screen 07 — facts first, abridged prose, same timeline. */}
      <MobileAbout facts={facts} timeline={timeline} />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/about" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Biography
            </div>
            <h1 className={styles.h1}>
              About the <span className="inkText">Giant</span>
            </h1>
            <p className={styles.lede}>
              The story of Damini Ogulu — Afrobeats&apos; African Giant.
            </p>
          </div>
        </section>

        {/* ── Biography + fast facts ─────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.split}`}>
            <div className={styles.bioCol}>
              <p>
                Burna Boy — born <strong>Damini Ebunoluwa Ogulu</strong>{" "}
                on 2 July 1991 in Port Harcourt — is one of the most successful African artists of all time,
                rising from Nigeria&rsquo;s music scene to become a global headliner and
                Grammy winner.
              </p>
              <p>
                Music runs in the family: his maternal grandfather, Benson Idonije, was a
                veteran broadcaster and critic who once managed the legendary Fela Kuti.
                Burna Boy blends Afrobeat, dancehall, reggae, hip-hop, R&amp;B and pop into
                a sound he calls &ldquo;Afro-fusion.&rdquo; His mother, Bose Ogulu, is also
                his manager.
              </p>
              <p>
                Since his 2013 debut L.I.F.E, he has released eight studio albums, won a
                Grammy, and made history as the first African artist to sell out stadiums in
                both the UK and the US — cementing his status as the self-styled
                &ldquo;African Giant.&rdquo;
              </p>
              <p>
                He also uses his platform for social justice: in 2020 he released
                &ldquo;20 10 20,&rdquo; dedicated to the victims of the Lekki shooting
                during Nigeria&rsquo;s #EndSARS protests, with proceeds going to a relief
                fund for those affected.
              </p>
              <p className={styles.wikiWrap}>
                <a
                  className={styles.wikiLink}
                  href="https://en.wikipedia.org/wiki/Burna_Boy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read his full biography on Wikipedia ↗
                </a>
              </p>
            </div>

            <div className={styles.factCol}>
              <div className={styles.eyebrow}>Fast facts</div>
              <div className={styles.facts}>
                {facts.map((f) => (
                  <div key={f.label} className={styles.fact}>
                    <span className={styles.factLabel}>{f.label}</span>
                    <span className={styles.factValue}>{f.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Timeline ───────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={`${styles.wide} ${styles.timelinePad}`}>
            <div className={styles.eyebrow}>Career timeline</div>
            <h2 className={styles.h2}>
              Milestones of a <span className="inkText">global icon</span>
            </h2>
            <div className={styles.timeline}>
              {timeline.map((t) => (
                <div key={t.year + t.title} className={styles.tRow}>
                  <span className={styles.tDot} aria-hidden="true" />
                  <div className={styles.tYear}>{t.year}</div>
                  <h3 className={styles.tTitle}>{t.title}</h3>
                  <p className={styles.tText}>{t.text}</p>
                </div>
              ))}
            </div>
            <p className={styles.tMoreLink}>
              <Link href="/timeline">The full career timeline — every milestone, dated →</Link>
            </p>
          </div>
        </section>

        <KeepExploring current="/about" />
      </div>
    </main>
  );
}
