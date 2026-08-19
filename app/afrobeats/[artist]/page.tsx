import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./artist.module.css";
import KeepExploring from "../../components/KeepExploring";
import MobileMenuButton from "../../components/MobileMenuButton";
import BackLink from "../../components/BackLink";
import { pageMetadata, CANONICAL_ORIGIN, datasetJsonLd } from "../../lib/seo";
import { tierOf, totalAwards, countryCount as burnaCountries } from "../../data/certifications";
import { numberOnes as burnaNo1s, chartEntryCount as burnaEntries } from "../../data/charts";
import { liveBoardFor } from "../../data/liveBoards";
import {
  artistBySlug,
  afrobeatsSlugs,
  afrobeatsArtists,
  certCount,
  countryCount,
  tierCount,
  type AfroArtist,
  countryMeta,
  plaqueLabel,
  chartEntries,
  chartTerritories,
  chartNo1s,
  topAward,
  type Tier,
} from "../../data/afrobeats";

export const dynamicParams = false;
export function generateStaticParams() {
  return afrobeatsSlugs.map((artist) => ({ artist }));
}

export async function generateMetadata({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  if (!a) return {};
  // Both strings stay inside the SEO gate's limits at every artist's name
  // length. The title carries the page's ranking claim as a figure, the way the
  // site's own certification titles do, and it moves when the register does —
  // a pending artist has nothing verified yet, so it must not claim a number.
  return pageMetadata({
    title: a.swept
      ? `${a.name} Certifications — ${certCount(a)} Awards in ${countryCount(a)} ${
          countryCount(a) === 1 ? "Country" : "Countries"
        }`
      : `${a.name} — The Afrobeats Board`,
    description: a.swept
      ? `${a.name}: ${certCount(a)} certifications across ${countryCount(a)} countries, topped by ${topAward(a) ? plaqueLabel(topAward(a)!) : "a plaque"}, plus ${chartEntries(a)} official chart entries and ${chartNo1s(a)} No. 1s — every figure read at source.`
      : `${a.name} on The Afrobeats Board. The certification and chart registers are scheduled to be read at source — no figures are published here until they are.`,
    path: `/afrobeats/${a.slug}`,
    shareTitle: `${a.name} — The Afrobeats Board`,
    shareDescription: a.swept
      ? `${certCount(a)} certifications, ${countryCount(a)} countries, verified at source.`
      : "Register sweep scheduled — no figures until they are read at source.",
    // Indexable the moment the sweep lands; until then the page has no figures
    // a search engine could rank it for, and three of them read alike.
    noindex: !a.swept,
  });
}

const TIERS: Tier[] = ["Diamond", "Platinum", "Gold", "Silver"];
const SECTIONS = ["Albums", "Lead singles", "Featured appearances"] as const;

/** Highest tier first, then bigger multipliers — same order the site's own
 *  certification ledger uses, so the two read identically. */
function sortCerts(a: AfroArtist["releases"][number]["certs"]) {
  const rank: Record<Tier, number> = { Diamond: 0, Platinum: 1, Gold: 2, Silver: 3 };
  return [...a].sort((x, y) => rank[x.level] - rank[y.level] || (y.x ?? 1) - (x.x ?? 1));
}

export default async function AfroArtistPage({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  if (!a) notFound();

  const live = liveBoardFor(a.slug);
  const total = certCount(a);
  const countries = countryCount(a);
  const burnaTotal = totalAwards();
  const idx = afrobeatsArtists.findIndex((x) => x.slug === a.slug);
  const next = afrobeatsArtists[(idx + 1) % afrobeatsArtists.length];

  // Every country this artist holds a plaque in, best tier first — the strip
  // under the headline, and the thing the tables are hard to read at a glance.
  const byCountry = new Map<string, { level: Tier; x?: number }>();
  const rank: Record<Tier, number> = { Diamond: 0, Platinum: 1, Gold: 2, Silver: 3 };
  for (const r of a.releases)
    for (const c of r.certs) {
      const cur = byCountry.get(c.c);
      if (!cur || rank[c.level] < rank[cur.level] || (c.level === cur.level && (c.x ?? 1) > (cur.x ?? 1)))
        byCountry.set(c.c, { level: c.level, x: c.x });
    }
  const countryStrip = [...byCountry.entries()].sort(
    (p, q) => rank[p[1].level] - rank[q[1].level] || (q[1].x ?? 1) - (p[1].x ?? 1)
  );

  const dataset = a.swept
    ? datasetJsonLd({
        name: `${a.name} music certifications by country`,
        description: `Every certification held by ${a.name} — ${total} plaques across ${countries} countries, each read in the issuing body's own register and counted one plaque per title per country at its current tier.`,
        path: `/afrobeats/${a.slug}`,
        keywords: [a.name, "certifications", "RIAA", "BPI", "gold", "platinum", "diamond", "Afrobeats"],
        variableMeasured: ["Certification tier", "Country / territory", "Release", "Certifying body"],
        about: { name: a.name, sameAs: [a.wikipedia, `https://open.spotify.com/artist/${a.spotifyId}`] },
      })
    : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: a.name,
    alternateName: a.fullName,
    url: `${CANONICAL_ORIGIN}/afrobeats/${a.slug}`,
    image: a.image,
    sameAs: [a.wikipedia, `https://open.spotify.com/artist/${a.spotifyId}`],
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {dataset && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      )}

      <nav className={styles.crumbs} aria-label="Breadcrumb">
        <Link href="/afrobeats">← The Afrobeats Board</Link>
        <span aria-hidden="true">/</span>
        <span className={styles.crumbCurrent}>{a.name}</span>
      </nav>

      <div className={styles.mobileBackBar}>
        <BackLink href="/afrobeats" aria-label="Back to the board" className={styles.mobileBackBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.mobileBackLabel}>{a.name}</span>
        <MobileMenuButton />
      </div>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.heroPad}>
        <div className={styles.heroCard}>
          <img className={styles.heroBackdrop} src={a.image} alt="" aria-hidden="true" />
          <div className={styles.heroScrim} />
          <div className={styles.heroGrid}>
            <img className={styles.portrait} src={a.image} alt={`${a.name}`} width={220} height={220} />
            <div>
              <div className={styles.kicker}>
                {a.flag} {a.country}
              </div>
              <h1 className={styles.title}>{a.name}</h1>
              <p className={styles.fullName}>{a.fullName}</p>
              <p className={styles.hook}>{a.hook}</p>
              {/* The two things this page is for, reachable from the hero
                  rather than only from the panels further down. */}
              <div className={styles.heroActions}>
                {a.charts.length > 0 && (
                  <Link href={`/afrobeats/${a.slug}/charts`} className="btn btnPrimary">
                    Official chart peaks — {chartEntries(a)} entries
                  </Link>
                )}
                {live && (
                  <Link href={`/afrobeats/${a.slug}/live`} className={`btn btnSecondary ${styles.heroLive}`}>
                    <span className={styles.liveDot} aria-hidden="true" />
                    Live charts — {live.placements} placements today
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {!a.swept && (
        <section className={styles.sectionPad}>
          <div className={styles.pending}>
            <div className={styles.pendingKicker}>Sweep scheduled</div>
            {/* One expression, not an expression followed by wrapped text: JSX
                dropped the space after {a.name} when the sentence wrapped, and
                every pending page published "Omah Layis on the board". */}
            <p className={styles.pendingBody}>
              {`${a.name} is on the board because the streaming data puts them in the genre’s top tier, but their registers have not been read yet. This site does not publish figures it has not verified at source, so there are no numbers here until the sweep runs — rather than a fan tally standing in for one.`}
            </p>
          </div>
        </section>
      )}

      {/* ── Headline ─────────────────────────────────────────── */}
      {a.swept && (
      <section className={styles.sectionPad} aria-labelledby="headline">
        <h2 id="headline" className={styles.h2}>By the numbers</h2>
        <div className={styles.numGrid}>
          <div className={`${styles.numCard} ${styles.numLead}`}>
            <span className={styles.numValue}>{total}</span>
            <span className={styles.numLabel}>certifications worldwide</span>
          </div>
          <div className={styles.numCard}>
            <span className={styles.numValue}>{countries}</span>
            <span className={styles.numLabel}>countries</span>
          </div>
          {TIERS.map((t) =>
            tierCount(a, t) > 0 ? (
              <div key={t} className={styles.numCard}>
                <span className={styles.numValue}>{tierCount(a, t)}</span>
                <span className={styles.numLabel}>{t.toLowerCase()}</span>
              </div>
            ) : null
          )}
        </div>

        {/* Verified-at-source line: the site's actual differentiator. */}
        <p className={styles.provenance}>
          Every figure read in an issuing body&apos;s own register — last verified{" "}
          {new Date(`${a.verifiedOn}T12:00:00Z`).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          . Counted by the same rules as{" "}
          <Link href="/certifications">Burna Boy&apos;s {burnaTotal}</Link>: one plaque per title per
          country at its current tier, lead and featured credits both.
        </p>
      </section>
      )}

      {/* ── Country strip ────────────────────────────────────── */}
      {a.swept && (
      <section className={styles.sectionPad} aria-labelledby="countries">
        <div className={styles.sectionHead}>
          <h2 id="countries" className={styles.h2}>Where the plaques are</h2>
          <span className={styles.sectionMeta}>{countries} countries · best tier shown</span>
        </div>
        <div className={styles.pills}>
          {countryStrip.map(([code, t]) => {
            const c = countryMeta(code);
            return (
              <span key={code} className={`${styles.cert} ${styles[tierOf(t.level)]}`} title={c.body}>
                <span className={styles.flag} aria-hidden="true">{c.flag}</span>
                {t.x && t.x > 1 ? `${t.x}× ` : ""}
                {t.level}
                <span className={styles.certCountry}>{c.name}</span>
              </span>
            );
          })}
        </div>
      </section>
      )}

      {/* ── Release tables ───────────────────────────────────── */}
      {SECTIONS.map((sec) => {
        const rows = a.releases.filter((r) => r.kind === sec);
        if (!rows.length) return null;
        const n = rows.reduce((x, r) => x + r.certs.length, 0);
        return (
          <section key={sec} className={styles.sectionPad} aria-labelledby={`sec-${sec}`}>
            <div className={styles.sectionHead}>
              <h2 id={`sec-${sec}`} className={styles.h2}>{sec}</h2>
              <span className={styles.sectionMeta}>
                {rows.length} {rows.length === 1 ? "release" : "releases"} · {n}{" "}
                {n === 1 ? "plaque" : "plaques"}
              </span>
            </div>
            <div className={styles.rows}>
              {[...rows]
                .sort((x, y) => y.certs.length - x.certs.length)
                .map((r) => (
                  <div key={`${sec}-${r.title}`} className={styles.row}>
                    <div className={styles.rowHead}>
                      {r.cover ? (
                        // eslint-disable-next-line @next/next/no-img-element -- remote artwork at a fixed 44px
                        <img className={styles.cover} src={r.cover} alt="" width={44} height={44} loading="lazy" />
                      ) : (
                        <span className={styles.coverBlank} aria-hidden="true" />
                      )}
                      <span className={styles.rowTitle}>{r.title}</span>
                      <span className={styles.rowCount}>
                        {r.certs.length} {r.certs.length === 1 ? "plaque" : "plaques"}
                      </span>
                    </div>
                    <div className={styles.rowCerts}>
                      {sortCerts(r.certs).map((c) => {
                        const meta = countryMeta(c.c);
                        return (
                          <span
                            key={`${r.title}-${c.c}`}
                            className={`${styles.cert} ${styles[tierOf(c.level)]}`}
                            title={`${meta.name} — ${meta.body}`}
                          >
                            <span className={styles.flag} aria-hidden="true">{meta.flag}</span>
                            {plaqueLabel(c)}
                            <span className={styles.certCountry}>{meta.name}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        );
      })}

      {/* ── Official charts, its own board ───────────────────── */}
      {a.charts.length > 0 && (
        <section className={styles.chartPad} aria-labelledby="charts">
          <Link href={`/afrobeats/${a.slug}/charts`} className={styles.chartCta}>
            <span className={styles.chartCtaGlow} aria-hidden="true" />
            <span className={styles.chartCtaBody}>
              <span className={styles.chartCtaKicker}>Official charts</span>
              <h2 id="charts" className={styles.chartCtaTitle}>
                {a.name}&apos;s peak positions, country by country
              </h2>
              <span className={styles.chartCtaFigures}>
                <span className={styles.chartFig}>
                  <b>{chartEntries(a)}</b> entries
                </span>
                <span className={styles.chartFig}>
                  <b>{chartTerritories(a)}</b> territories
                </span>
                <span className={styles.chartFig}>
                  <b>{chartNo1s(a)}</b> No. 1{chartNo1s(a) === 1 ? " placement" : " placements"}
                </span>
              </span>
              <span className={styles.chartCtaNote}>
                Principal national chart per country — the same standard as Burna Boy&apos;s{" "}
                {burnaEntries} entries and {burnaNo1s} No. 1s.
              </span>
            </span>
            <span className={styles.chartCtaArrow} aria-hidden="true">
              Open the chart board →
            </span>
          </Link>
        </section>
      )}

      {/* ── Live charts, where they are placing right now ────── */}
      {live && (
        <section className={styles.chartPad} aria-labelledby="live">
          <Link href={`/afrobeats/${a.slug}/live`} className={`${styles.chartCta} ${styles.liveCta}`}>
            <span className={styles.chartCtaGlow} aria-hidden="true" />
            <span className={styles.chartCtaBody}>
              <span className={styles.liveKicker}>
                <span className={styles.liveDot} aria-hidden="true" />
                Live now
              </span>
              <h2 id="live" className={styles.chartCtaTitle}>
                Where {a.name} is charting today
              </h2>
              <span className={styles.chartCtaFigures}>
                <span className={styles.chartFig}>
                  <b>{live.placements}</b> placements
                </span>
                <span className={styles.chartFig}>
                  <b>{live.countries}</b> countries
                </span>
                <span className={styles.chartFig}>
                  <b>{live.platformTotals.length}</b> platforms
                </span>
              </span>
              <span className={styles.chartCtaNote}>
                Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts, rebuilt
                hourly by the same job that tracks Burna Boy — platform charts, not official ones.
              </span>
            </span>
            <span className={styles.chartCtaArrow} aria-hidden="true">
              Open the live board →
            </span>
          </Link>
        </section>
      )}

      {/* ── Against Burna ────────────────────────────────────── */}
      {a.swept && (
      <section className={styles.compare} aria-labelledby="vs">
        <div className={styles.compareKicker}>Head to head</div>
        <h2 id="vs" className={styles.compareTitle}>
          {a.name} and Burna Boy, same rules
        </h2>
        <div className={styles.compareGrid}>
          <div className={styles.compareCell}>
            <span className={styles.compareName}>{a.name}</span>
            <span className={styles.compareValue}>{total}</span>
            <span className={styles.compareLabel}>
              {countries} countries · {chartNo1s(a)} chart No. 1s
            </span>
          </div>
          <div className={styles.compareCell}>
            <span className={styles.compareName}>Burna Boy</span>
            <span className={`${styles.compareValue} ${styles.compareGold}`}>{burnaTotal}</span>
            <span className={styles.compareLabel}>
              {burnaCountries} countries · {burnaNo1s} chart No. 1s
            </span>
          </div>
        </div>
        <p className={styles.compareNote}>
          Both counted identically. Burna Boy&apos;s figures update daily; this board is reviewed weekly.
        </p>
      </section>
      )}

      <section className={styles.onward}>
        <Link href="/afrobeats" className="btn btnSecondary">← The Afrobeats Board</Link>
        <Link href={`/afrobeats/${next.slug}`} className="btn btnPrimary">
          Next: {next.name} →
        </Link>
        {a.charts.length > 0 && (
          <Link href={`/afrobeats/${a.slug}/charts`} className="btn btnSecondary">
            Chart peaks ↗
          </Link>
        )}
        {live && (
          <Link href={`/afrobeats/${a.slug}/live`} className="btn btnSecondary">
            Live charts ↗
          </Link>
        )}
        <Link href="/certifications" className="btn btnSecondary">Burna Boy&apos;s ledger ↗</Link>
      </section>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/afrobeats" />
      </div>
    </main>
  );
}
