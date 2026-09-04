import { count } from "../../lib/plural";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./artist.module.css";
import KeepExploring from "../../components/KeepExploring";
import MobileCerts from "../../components/MobileCerts";
import CertExplorer from "../../components/CertExplorer";
import { lastUpdated } from "../../lib/api";
import { pageMetadata, CANONICAL_ORIGIN, datasetJsonLd } from "../../lib/seo";
import { artistFaqs, faqJsonLd } from "../../lib/boardFaqs";
import { tierOf, type Release, type Country } from "../../data/certifications";
import { opponentOf } from "../../lib/headToHead";
import { andMore, topBody, topPlatform } from "../../lib/boardNotes";
import { liveBoardFor } from "../../data/liveBoards";
import { spotifyImage, spotifySrcSet } from "../../lib/spotifyImage";
import {
  artistBySlug,
  afrobeatsSlugs,
  afrobeatsArtists,
  certCount,
  countryCount,
  tierCount,
  type AfroArtist,
  countryMeta,
  chartCountryMeta,
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
      ? `${a.name}: ${count(certCount(a), "certification", "certifications")} across ${count(countryCount(a), "country", "countries")}, topped by ${topAward(a) ? plaqueLabel(topAward(a)!) : "a plaque"}, plus ${count(chartEntries(a), "official chart entry", "official chart entries")} and ${count(chartNo1s(a), "No. 1", "No. 1s")} — every figure read at source.`
      : `${a.name} on The Afrobeats Board. The certification and chart registers are scheduled to be read at source — no figures are published here until they are.`,
    path: `/afrobeats/${a.slug}`,
    shareTitle: `${a.name} — The Afrobeats Board`,
    shareDescription: a.swept
      ? `${count(certCount(a), "certification", "certifications")}, ${count(countryCount(a), "country", "countries")}, verified at source.`
      : "Register sweep scheduled — no figures until they are read at source.",
    // Indexable the moment the sweep lands; until then the page has no figures
    // a search engine could rank it for, and three of them read alike.
    noindex: !a.swept,
  });
}

const TIERS: Tier[] = ["Diamond", "Platinum", "Gold", "Silver"];

/** Highest tier first, then bigger multipliers — same order the site's own
 *  certification ledger uses, so the two read identically. */

export default async function AfroArtistPage({ params }: { params: Promise<{ artist: string }> }) {
  const { artist: slug } = await params;
  const a = artistBySlug(slug);
  if (!a) notFound();

  const live = liveBoardFor(a.slug);
  const faqs = artistFaqs(a);
  const total = certCount(a);
  const countries = countryCount(a);
  const rival = opponentOf(a);
  // Which register and which platform a reader is about to open. Both derived:
  // "and more" only appears when there genuinely is more than one.
  // chartCountryMeta, not countryMeta: this note names the chart bodies a
  // reader is about to open, and countryMeta answers with the CERTIFYING body —
  // so it named RIAA, BPI and BVMI as the sources of chart peaks.
  const bodies = topBody(a.charts.flatMap((r) => r.entries), (c) => chartCountryMeta(c).body);
  const chartsNote = andMore(bodies.top, bodies.total);
  const plats = live ? topPlatform(live.platformTotals) : { total: 0 };
  const liveNote = andMore(plats.top, plats.total);
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
        description: `Every certification held by ${a.name} — ${count(total, "plaque", "plaques")} across ${count(countries, "country", "countries")}, each read in the issuing body's own register and counted one plaque per title per country at its current tier.`,
        path: `/afrobeats/${a.slug}`,
        keywords: [a.name, "certifications", "RIAA", "BPI", "gold", "platinum", "diamond", "Afrobeats"],
        variableMeasured: ["Certification tier", "Country / territory", "Release", "Certifying body"],
        dateModified: lastUpdated,
        about: { name: a.name, sameAs: [a.wikipedia, `https://open.spotify.com/artist/${a.spotifyId}`] },
      })
    : null;

  // The mobile screen is Burna Boy's certifications screen (screen 02), reused
  // rather than redrawn — it already solves "hundreds of plaques on a phone",
  // with the tier bars, the tier rail and the expandable list. It takes the
  // site's own Release shape, so the board's rows are mapped onto it.
  const mobileReleases: Release[] = a.releases.map((r) => ({
    title: r.title,
    certs: r.certs.map((c) => ({ c: c.c, level: c.level, ...(c.x ? { x: c.x } : {}) })),
  }));
  const mobileAlbums = mobileReleases.filter((r) =>
    a.releases.some((x) => x.title === r.title && x.kind === "Albums")
  );
  const mobileCountries: Record<string, Country> = Object.fromEntries(
    [...new Set(a.releases.flatMap((r) => r.certs.map((c) => c.c)))].map((code) => [code, countryMeta(code)])
  );
  const mobileCovers = Object.fromEntries(a.releases.map((r) => [r.title, r.cover]));

  // The explorer takes Burna's three groups; the board names them differently
  // ("Lead singles" / "Featured appearances") but they are the same split.
  const explorerGroups = {
    albums: mobileReleases.filter((_, idx) => a.releases[idx].kind === "Albums"),
    singles: mobileReleases.filter((_, idx) => a.releases[idx].kind === "Lead singles"),
    features: mobileReleases.filter((_, idx) => a.releases[idx].kind === "Featured appearances"),
  };

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
    <main id="content" data-brand={a?.brand}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      {dataset && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset) }} />
      )}

      {/* Mobile is its own screen, not this page narrowed — the same rule the
          rest of the site follows. Burna Boy's certifications screen already
          carries 231 plaques on a phone; a board artist's 103 fit the same
          design. */}
      <MobileCerts
        releases={mobileReleases}
        albums={mobileAlbums}
        history={[]}
        countries={mobileCountries}
        total={total}
        countryCount={countries}
        covers={mobileCovers}
        portrait={a.image}
        portraitSlug={a.slug}
        brand={a.brand}
        chartsHref={a.charts.length > 0 ? `/afrobeats/${a.slug}/charts` : undefined}
        liveHref={live ? `/afrobeats/${a.slug}/live` : undefined}
        chartsNote={chartsNote}
        liveNote={liveNote}
        backHref="/afrobeats"
        backLabel={a.name}
        subject={a.name}
        lede={`Every ${a.name} plaque, read in the issuing body's own register — ${total} across ${countries} ${countries === 1 ? "country" : "countries"}, from ${a.releases.length} certified releases.`}
        showActionBar={false}
      />

      <div className={styles.desktopOnly}>
      <nav className={styles.crumbs} aria-label="Breadcrumb">
        <Link href="/afrobeats">← The Afrobeats Board</Link>
        <span aria-hidden="true">/</span>
        <span className={styles.crumbCurrent}>{a.name}</span>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.heroPad}>
        <div className={styles.heroCard}>
          {/* The backdrop is blurred 34px at 0.36 opacity, so resolution is thrown
              away by the filter — it was shipping the 640px portrait (~100KB) to
              paint a colour wash. The 160px rung looks identical through that blur
              and is the largest element on the page, so it also carries the
              priority hint: this is the LCP image. */}
          {/* eslint-disable-next-line @next/next/no-img-element -- decorative CDN backdrop */}
          <img
            className={styles.heroBackdrop}
            src={spotifyImage(a.image, 160)}
            alt=""
            aria-hidden="true"
            width={160}
            height={160}
            /* Lazy, not eager: this sits in the desktop-only layout, and a hidden
               <img> is still fetched when eager while a hidden background never
               was. Lazy keeps phones from paying for it. In-viewport lazy images
               load at layout anyway, and at the 160 rung it is ~8KB. */
            loading="lazy"
            decoding="async"
          />
          <div className={styles.heroScrim} />
          <div className={styles.heroGrid}>
            {/* 220px on desktop, 140px below 900px — the 320 rung covers both at
                DPR 1 and the srcset lets denser screens ask for 640 themselves. */}
            {/* eslint-disable-next-line @next/next/no-img-element -- remote CDN portrait */}
            <img
              className={styles.portrait}
              src={spotifyImage(a.image, 320)}
              srcSet={spotifySrcSet(a.image)}
              sizes="(max-width: 900px) 140px, 220px"
              alt={`${a.name}`}
              width={220}
              height={220}
              loading="lazy"
              decoding="async"
            />
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
          . Counted by the same rules, set out in the{" "}
          <Link href="/methodology#principles">methodology</Link>: one plaque per title per
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

      {/* ── The ledger, Burna's own explorer ─────────────────── */}
      {/* The page used to hand-roll its release tables — no tier or country
          filters, no "Showing X of Y" band, a different pill. Paul's call:
          every board artist's certs should read exactly like Burna's page, so
          this is the SAME component, fed this artist's catalogue. The only
          seam it needed was injectable artwork, the seam MobileCerts already
          had, because the site's own cover lookup knows one catalogue. */}
      <CertExplorer
        albums={explorerGroups.albums}
        singles={explorerGroups.singles}
        features={explorerGroups.features}
        countries={mobileCountries}
        totalCerts={total}
        covers={mobileCovers}
      />

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
                {/* Plain text, not a link: this whole card is an anchor, and a
                    nested <a> is invalid HTML — it broke hydration. The
                    methodology link the reader needs is in the provenance line
                    above, outside the card. */}
                Principal national chart per country — the standard set out in the methodology.
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

      {/* ── Head to head ─────────────────────────────────────── */}
      {a.swept && rival && (
      <section className={styles.compare} aria-labelledby="vs">
        <div className={styles.compareKicker}>Head to head</div>
        <h2 id="vs" className={styles.compareTitle}>
          {a.name} and {rival.name}, same rules
        </h2>
        <div className={styles.compareGrid}>
          <div className={styles.compareCell}>
            <span className={styles.compareName}>{a.name}</span>
            <span className={styles.compareValue}>{total}</span>
            <span className={styles.compareLabel}>
              {countries} {countries === 1 ? "country" : "countries"} · {chartNo1s(a)} chart No. 1s
            </span>
          </div>
          <div className={styles.compareCell}>
            <span className={styles.compareName}>{rival.name}</span>
            {/* Gold marks Burna, and only Burna. Two board artists are peers
                here, so neither cell gets to be the headline. */}
            <span className={rival.isBurna ? `${styles.compareValue} ${styles.compareGold}` : styles.compareValue}>
              {rival.total}
            </span>
            <span className={styles.compareLabel}>
              {rival.countries} {rival.countries === 1 ? "country" : "countries"} · {rival.no1s} chart No. 1s
            </span>
          </div>
        </div>
        <p className={styles.compareNote}>
          Both counted identically.{" "}
          {rival.isBurna
            ? "Burna Boy's figures update daily; this board is reviewed weekly."
            : "Both are read at source and reviewed weekly."}{" "}
          <Link href={rival.href}>{rival.name}&apos;s page ↗</Link>
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

      {/* ── Common questions ───────────────────────────────────── */}
      {/* Answer-first, and every figure computed — see lib/boardFaqs.ts. These
          are the questions readers and answer engines actually ask about a
          board artist, and a well-formed FAQ is the most liftable shape there
          is for an AI answer. Rendered visibly AND as FAQPage structured data,
          the same way /dai-dai and /records/africas-biggest already do it. */}
      <section id="faq" className={styles.faqPad}>
        <h2 className={styles.h2}>Common questions</h2>
        <div className={styles.faqList}>
          {faqs.map((f) => (
            <div key={f.q} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>
      </div>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/afrobeats" />
      </div>
    </main>
  );
}
