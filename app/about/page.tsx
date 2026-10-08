import Link from "next/link";
import styles from "./about.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileAbout from "../components/MobileAbout";
import KeepExploring from "../components/KeepExploring";
import {
  pageMetadata,
  CANONICAL_ORIGIN,
  BURNA_BOY_PERSON,
  BURNA_BOY_REAL_NAME,
  BURNA_BOY_BIRTH_DATE,
  BURNA_BOY_BIRTHPLACE,
} from "../lib/seo";
import { aboutTitle, aboutDescription } from "../lib/searchSnippets";
import { grammyWins } from "../data/awards";

// "burna boy real name" (2,225 impressions in three months to 4 Oct 2026, at
// 0.1%) and "damini ogulu" land here: the answer leads both lines, read from
// the one home of the name and the birth date (lib/seo.ts).
export const metadata = pageMetadata({
  title: aboutTitle({ realName: BURNA_BOY_REAL_NAME }),
  description: aboutDescription({
    realName: BURNA_BOY_REAL_NAME,
    birthDate: BURNA_BOY_BIRTH_DATE,
    birthplace: BURNA_BOY_BIRTHPLACE,
    grammyWins,
  }),
  path: "/about",
  shareTitle: "About Burna Boy",
  shareDescription: "Biography & career timeline of the African Giant.",
});

/** The opening line both layouts print: the real-name answer first. */
const aboutLede = `Burna Boy's real name is ${BURNA_BOY_REAL_NAME}. This is the story of Afrobeats' African Giant.`;

// Verified quick facts (sources: Wikipedia, Grammy.com, Billboard).
const facts = [
  { label: "Real name", value: BURNA_BOY_REAL_NAME },
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
  { year: "2025", title: "No Sign of Weakness", text: "Releases his eighth studio album and becomes the first Nigerian artist to headline the legendary Red Rocks Amphitheatre, opening the North American leg of the No Sign of Weakness Tour — a world tour across Oceania, North America and Europe." },
  { year: "2026", title: "The World Cup year", text: "Headlines the 2026 FIFA World Cup Opening Ceremony in Mexico City alongside Shakira, performing the official tournament song, “Dai Dai” — which in July becomes the first African artist's No. 1 on the Billboard Global 200, before he becomes the first African artist to perform at the World Cup Final halftime show (19 July)." },
];

// Person entity for the biography page — reinforces "real name / birth name / age"
// queries and gives Google + AI answer engines a clean, self-contained entity.
// Complements the site-wide MusicGroup markup in layout.tsx (a solo artist can be
// both) — and says so: the shared @id makes this Person and that MusicGroup one
// entity rather than two strangers with the same name. sameAs is the vetted
// profile list used site-wide, Wikidata included (lib/seo.ts).
// The node itself is lib/seo.ts's BURNA_BOY_PERSON, which the home page names
// as its mainEntity too; this page adds its own address.
const personJsonLd = {
  "@context": "https://schema.org",
  ...BURNA_BOY_PERSON,
  url: `${CANONICAL_ORIGIN}/about`,
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
      <MobileAbout facts={facts} timeline={timeline} lede={aboutLede} />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/about" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Biography
            </div>
            {/* The top search ("burna boy real name") lands here, so the
                heading names him and the opening line answers it, from the
                one home of the name (lib/seo.ts). Until 8 Oct 2026 they read
                "About the Giant" / "The story of Damini Ogulu — …" and the
                answer first appeared in the body (design review C-10). */}
            {/* The name held together, as on the phone heading. */}
            <h1 className={styles.h1}>
              About <span className="inkText">Burna{"\u00a0"}Boy</span>
            </h1>
            <p className={styles.lede}>{aboutLede}</p>
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
            <h2 className={styles.h2}>Milestones of a global icon</h2>
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
