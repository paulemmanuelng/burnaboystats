import { count, plural } from "../../lib/plural";
import { Fragment, type ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./artist.module.css";
import KeepExploring from "../../components/KeepExploring";
import MobileCerts from "../../components/MobileCerts";
import CertExplorer from "../../components/CertExplorer";
import { lastUpdated } from "../../lib/api";
import { isIssuerMarker } from "../../lib/certs";
import { plaqueMarker } from "../../lib/issuerMarker";
import { pageMetadata, CANONICAL_ORIGIN, datasetJsonLd } from "../../lib/seo";
import { artistFaqs, faqJsonLd } from "../../lib/boardFaqs";
import { tierOf, type Release, type Country } from "../../data/certifications";
import { opponentOf } from "../../lib/headToHead";
import { compareWithLinks } from "../../lib/comparePairs";
import { showsHrefFor } from "../../lib/showsBoard";
import { SHOWS_LABEL } from "../../lib/showsDeepLink";
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
  chartGlobalsClause,
  topAward,
  offRegisterPhrase,
  offRegisterHold,
  offRegisterCount,
  certProvenance,
  type Tier,
  AFROBEATS_LAST_FULL_SWEEP,
  lastVerifiedOn,
  chartPageStamp,
} from "../../data/afrobeats";
import { LIVE_CADENCE_ADVERB } from "../../lib/liveChartMeta";
import { awardLabel, awardRank } from "../../lib/awardName";
import CertViewSwap from "../../components/CertViewSwap";
import { featuredTitlesOf } from "../../lib/certUnits";
import {
  ALL_VIEW, certsInView, creditSwitchable, emptyViewSentence, homeCodeFor, scopeSwitchable, viewKey, viewNoun, viewsOffered,
  type CertView, type CertViewKey,
} from "../../lib/certScope";

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
  //
  // "Plaques", as Burna Boy's own certifications title says (26 Sep 2026): the
  // board titles said "159 Awards in 21 Countries" until 5 Oct 2026, and
  // "Awards" reads as trophies won. Longest swept title: 54 of 60 characters.
  return pageMetadata({
    title: a.swept
      ? `${a.name} Certifications — ${count(certCount(a), "Plaque", "Plaques")} in ${countryCount(a)} ${
          countryCount(a) === 1 ? "Country" : "Countries"
        }`
      : `${a.name} — The Afrobeats Board`,
    description: a.swept
      ? `${a.name}: ${count(certCount(a), "certification", "certifications")} across ${count(countryCount(a), "country", "countries")}, topped by ${topAward(a) ? plaqueLabel(topAward(a)!) : "a plaque"}, plus ${count(chartEntries(a), "official chart entry", "official chart entries")}${
          // No "and 0 No. 1s" for an artist without one (Oxlade, Tiwa Savage).
          chartNo1s(a) ? ` and ${count(chartNo1s(a), "No. 1", "No. 1s")}` : ""
        } — every figure read at source.`
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
  // "9 plaques in South Africa, read from the label's own award, and 1 in
  // France, read from SNEP's own announcement" when some plaques are not
  // register rows (the owner's rulings of 3 Oct 2026), else undefined — every
  // "read in the issuing body's own register" line below qualifies itself with it.
  const offRegister = offRegisterPhrase(a);
  const hold = offRegisterHold(a);
  // One formatted date for both layouts — the phone's lede carried none until
  // 17 Sep 2026 while the desktop printed it in the provenance line. The later
  // of verifiedOn and the last full sweep: verifiedOn is the last read that
  // CHANGED a plaque, and thirteen pages said "last verified 6 September"
  // under "re-read at every register on 2 October" (debug pass, 5 Oct 2026).
  const verifiedLong = new Date(`${lastVerifiedOn(a)}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  // "Re-read at every register" dates from the last FULL sweep, not from
  // verifiedOn, which a partial read moves (debug pass, 3 Oct 2026).
  const fullSweepLong = new Date(`${AFROBEATS_LAST_FULL_SWEEP}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
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
  const compareWith = compareWithLinks(a.slug);
  // "Biggest shows": the box-office board opened on their nights — undefined
  // while they have no reported single night (lib/showsBoard), so their bars
  // stay as they were.
  const shows = showsHrefFor(a.slug);
  const idx = afrobeatsArtists.findIndex((x) => x.slug === a.slug);
  const next = afrobeatsArtists[(idx + 1) % afrobeatsArtists.length];

  // Every country this artist holds a plaque in, best tier first — the strip
  // under the headline, and the thing the tables are hard to read at a glance.
  // `body` rides along so a plaque from a separate award PROGRAMME can be
  // marked. Ayra Starr's "Santa" and Rema's "Bubalu" are RIAA LATIN — a
  // different register with thresholds a sixteenth of the main programme's —
  // and this strip rendered them as plain US Platinum until 11 Sep 2026. Same
  // marker Burna's explorer paints beside "Dai Dai".
  // Ranked by awardRank (lib/awardName): tier, then multiplier, then any half
  // step on top — Wizkid's 🇲🇽 "4× Platinum + Gold" outranks a 4× Platinum.
  const stripFor = (x: AfroArtist) => {
    const byCountry = new Map<string, { level: Tier; x?: number; plus?: Tier; body?: string; provenance?: string }>();
    for (const r of x.releases)
      for (const c of r.certs) {
        const cur = byCountry.get(c.c);
        if (!cur || awardRank(c) > awardRank(cur))
          byCountry.set(c.c, { level: c.level, x: c.x, plus: c.plus, body: c.body, provenance: certProvenance(c) });
      }
    return [...byCountry.entries()].sort((p, q) => awardRank(q[1]) - awardRank(p[1]));
  };

  // The two switches (lib/certScope), /compare's style. The home-country switch
  // (named by a.country: "Nigeria", "South Africa") leaves out the home-country
  // plaques; "Featured appearances" off leaves out the guest spots by
  // /compare's own rule (certUnits.featuredTitlesOf — the releases filed under
  // "Featured appearances"). Each view is the same artist with fewer releases,
  // so every helper below — certCount, countryCount, tierCount,
  // offRegisterPhrase — counts it exactly as it counts the full one. A switch
  // is offered only when it changes something.
  const home = homeCodeFor(a.country);
  const featured = featuredTitlesOf(a.slug);
  const offered = { scope: scopeSwitchable(a.releases, home), credit: creditSwitchable(a.releases, featured) };
  const views = viewsOffered(offered);
  const aView = (v: CertView): AfroArtist => ({ ...a, releases: certsInView(a.releases, { home, featured }, v) });
  /** A block in every view the switches offer, or the one it always was. */
  const scoped = (build: (x: AfroArtist, v: CertView) => ReactNode) => {
    if (views.length === 1) return build(a, ALL_VIEW);
    const byKey: Partial<Record<CertViewKey, ReactNode>> & { all: ReactNode } = { all: build(a, ALL_VIEW) };
    for (const v of views.slice(1)) byKey[viewKey(v)] = build(aView(v), v);
    return <CertViewSwap views={byKey} offered={offered} />;
  };

  const dataset = a.swept
    ? datasetJsonLd({
        name: `${a.name} music certifications by country`,
        description: `Every certification held by ${a.name} — ${count(total, "plaque", "plaques")} across ${count(countries, "country", "countries")}, each read in the issuing body's own register${offRegister ? ` (except ${offRegister}, ${hold})` : ""} and counted one plaque per title per country at its current tier.`,
        path: `/afrobeats/${a.slug}`,
        keywords: [a.name, "certifications", "RIAA", "BPI", "gold", "platinum", "diamond", "Afrobeats"],
        variableMeasured: ["Certification tier", "Country / territory", "Release", "Certifying body"],
        // The sweep that produced these figures, not the newest date in the whole
        // updates feed — or a later edit made without a register read. One
        // helper dates this and the sitemap's lastmod, so the two cannot
        // disagree (they did for CKay and Olamide: 18 Sep / 6 Sep here, 3 Oct
        // there; debug pass 4 Oct 2026, D-05). chartPageStamp, not pageStamp:
        // the page prints chart rows, and the board's chart sweep of 2 Oct
        // changed them for artists whose plaque stamp is older (5 Oct 2026).
        dateModified: chartPageStamp(a),
        about: { name: a.name, sameAs: [a.wikipedia, `https://open.spotify.com/artist/${a.spotifyId}`] },
      })
    : null;

  // The mobile screen is Burna Boy's certifications screen (screen 02), reused
  // rather than redrawn — it already solves "hundreds of plaques on a phone",
  // with the tier bars, the tier rail and the expandable list. It takes the
  // site's own Release shape, so the board's rows are mapped onto it.
  const mobileReleases: Release[] = a.releases.map((r) => ({
    title: r.title,
    // `body` must survive this mapping: MobileCerts paints the programme marker
    // off it, and dropping it here is why the board's two RIAA Latin plaques
    // showed no label on a phone.
    // `provenance` likewise: the explorer's hover says when a plaque is not a
    // register row ("France — SNEP, announced on its own X account, 6 Apr 2026").
    certs: r.certs.map((c) => {
      const provenance = certProvenance(c);
      // `plus` too: the half step AMPROFON prints on top ("4× Platinum + Gold")
      // is part of the badge's words on both layouts.
      return { c: c.c, level: c.level, ...(c.x ? { x: c.x } : {}), ...(c.plus ? { plus: c.plus } : {}), ...(c.body ? { body: c.body } : {}), ...(provenance ? { provenance } : {}) };
    }),
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

  // The phone's hero sentence, for either view. Round 2 of the design (4 Oct
  // 2026) moved the counts to the big number and the off-register detail and
  // the date to the caption under the tier bars (mobileProvenance), so the
  // sentence keeps only what stays true in that place: where the plaques were
  // read and how many releases hold them. It still says when some plaques were
  // NOT read in a register ("except 11 noted below") — without that, Tyla's
  // lede would claim all 75 came from one, when 11 did not.
  function mobileLede(x: AfroArtist, view: CertView) {
    if (certCount(x) === 0) return emptyViewSentence(a!.name, view, a!.country);
    const offRegisterN = offRegisterCount(x);
    return `Every ${view.scope === "intl" ? "international " : ""}${a!.name} plaque${view.credit === "lead" ? " on a lead credit" : ""}, read in the issuing body's own register${offRegisterN ? `, except ${offRegisterN} noted below` : ""} — from ${count(x.releases.length, "certified release", "certified releases")}.`;
  }

  // The phone's provenance caption under the tier bars, for either view: which
  // plaques are not register rows, recounted for the view (offRegisterPhrase's
  // view parameter, item 26b), then the date. A view that holds nothing has no
  // caption — its lede is the one sentence (emptyViewSentence).
  function mobileProvenance(view: CertView): string | undefined {
    if (certCount(aView(view)) === 0) return undefined;
    const phrase = offRegisterPhrase(a!, "short", view);
    return phrase ? `Read off-register: ${phrase}. Last verified ${verifiedLong}.` : `Last verified ${verifiedLong}.`;
  }

  // "By the numbers" — the cards and the provenance line under them, for either
  // view. The "all" view is the page as it has always read.
  function headline(x: AfroArtist, view: CertView) {
    const n = certCount(x);
    const k = countryCount(x);
    const offRegisterX = offRegisterPhrase(x);
    // A view that holds nothing: one sentence, not two 0 cards (and the
    // strip below draws nothing either).
    if (n === 0) return <p className={styles.provenance}>{emptyViewSentence(a!.name, view, a!.country)}</p>;
    return (
      <>
        <div className={styles.numGrid}>
          <div className={`${styles.numCard} ${styles.numLead}`}>
            <span className={styles.numValue}>{n}</span>
            <span className={styles.numLabel}>{viewKey(view) === "all" ? "certifications worldwide" : viewNoun(n, view)}</span>
          </div>
          <div className={styles.numCard}>
            <span className={styles.numValue}>{k}</span>
            <span className={styles.numLabel}>{plural(k, "country", "countries")}</span>
          </div>
          {TIERS.map((t) =>
            tierCount(x, t) > 0 ? (
              <div key={t} className={styles.numCard}>
                <span className={styles.numValue}>{tierCount(x, t)}</span>
                <span className={styles.numLabel}>{t.toLowerCase()}</span>
              </div>
            ) : null
          )}
        </div>

        {/* Verified-at-source line: the site's actual differentiator. */}
        <p className={styles.provenance}>
          Every figure read in an issuing body&apos;s own register
          {offRegisterX ? ` — except ${offRegisterX}, ${offRegisterHold(x)}` : ""}
          {" "}— last verified{" "}
          {verifiedLong}. Counted by the same rules, set out in the{" "}
          <Link href="/methodology#principles">methodology</Link>: one plaque per title per
          country at its current tier, {view.credit === "lead" ? "lead credits only (featured appearances left out)" : "lead and featured credits both"}.
        </p>
      </>
    );
  }

  // "Where the plaques are" — the count and the strip, for either view.
  function strip(x: AfroArtist) {
    const k = countryCount(x);
    // Empty view: the sentence in the headline's place says it (see headline).
    // `false`, not null and not an empty fragment: CertViewSwap falls back to
    // the all-view on a nullish view, and the RSC payload flattens a keyless
    // fragment to its children — `<></>` reached the client as undefined, so
    // Tiwa Savage's empty view showed the all-view strip (debug 4 Oct, B-01).
    if (k === 0) return false;
    return (
      <>
        <div className={styles.sectionHead}>
          <h2 id="countries" className={styles.h2}>Where the plaques are</h2>
          <span className={styles.sectionMeta}>{count(k, "country", "countries")} · best tier shown</span>
        </div>
        <div className={styles.pills}>
          {stripFor(x).map(([code, t]) => {
            const c = countryMeta(code);
            return (
              <span key={code} className={`${styles.cert} ${styles[tierOf(t.level)]}`} title={`${c.name} — ${t.body ?? c.body}${t.provenance ? `, ${t.provenance}` : ""}`}>
                <span className={styles.flag} aria-hidden="true">{c.flag}</span>
                {awardLabel(t)}
                {/* A separate programme is a different award — derived, as on
                    Burna's page: whatever the override adds beyond the country's
                    default body. Reads "Latin" for RIAA Latin; a label's
                    plaque always names its issuer (plaqueMarker). */}
                {t.body && plaqueMarker(t, c.body) && (
                  <span className={isIssuerMarker(t.body) ? `${styles.badgeProgram} ${styles.badgeIssuer}` : styles.badgeProgram}>
                    {plaqueMarker(t, c.body)}
                  </span>
                )}
                <span className={styles.certCountry}>{c.name}</span>
              </span>
            );
          })}
        </div>
      </>
    );
  }

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
          design.
          `faqs` is not decoration. The FAQPage node above goes out at every
          width, but the visible questions were in the `.desktopOnly` half
          below, which is display:none on a phone — so across every board
          page the schema promised Googlebot (which renders at phone width)
          and every phone reader answers the page did not show them. Un-hiding
          that half is not the fix here: it would paint the whole desktop tree
          on a phone. The answers come to the screen instead. */}
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
        lede={mobileLede(a, ALL_VIEW)}
        ledes={Object.fromEntries(views.slice(1).map((v) => [viewKey(v), mobileLede(aView(v), v)]))}
        provenance={Object.fromEntries(views.map((v) => [viewKey(v), mobileProvenance(v)]))}
        home={home}
        homeName={a.country}
        featured={[...featured]}
        faqs={faqs}
        showActionBar
        compareSlug={a.slug}
        showsHref={shows}
        compareWith={compareWith}
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
              {/* The three things this page is for, reachable from the hero
                  rather than only from the panels further down. The two boards
                  are named with their own figures, so each says what is behind
                  it; Compare is an action, worded as it is everywhere else on
                  the site, and short enough that the row stays one line at
                  desktop widths (a figure on it pushed it to a second line)
                  — for an artist without a shows button. */}
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
                {/* Their nights on the box-office board, beside Compare — only
                    while they have one (the owner, 4 Oct 2026). The two go
                    on their own row together, after the live-charts button:
                    four buttons never fit one row, and "Biggest shows" was
                    left alone on a line of its own at 1024, 1440 and 1920
                    (debug pass 4 Oct 2026, B-04). */}
                {shows ? (
                  <span className={styles.heroPair}>
                    <Link href={`/compare?a=${a.slug}`} className="btn btnSecondary">
                      Compare ↗
                    </Link>
                    <Link href={shows} className="btn btnSecondary">
                      {SHOWS_LABEL} ↗
                    </Link>
                  </span>
                ) : (
                  <Link href={`/compare?a=${a.slug}`} className="btn btnSecondary">
                    Compare ↗
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
        {/* In the section head every other h2 here sits in, so the grid
            starts 16px under it rather than on its baseline (B-16). */}
        <div className={styles.sectionHead}>
          <h2 id="headline" className={styles.h2}>By the numbers</h2>
        </div>
        {/* Swapped by the explorer's switches below. */}
        {scoped(headline)}
      </section>
      )}

      {/* ── Country strip ────────────────────────────────────── */}
      {a.swept && (
      <section className={styles.sectionPad} aria-labelledby="countries">
        {scoped(strip)}
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
        home={home}
        homeName={a.country}
        featured={[...featured]}
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
                  <b>{chartTerritories(a)}</b> {plural(chartTerritories(a), "territory", "territories")}
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
                {/* The territory count above includes Billboard's global
                    charts wherever the artist has one (chartGlobalLines), so
                    the standard names them — the charts page's own clause. */}
                {`Principal national chart per country${chartGlobalsClause(a)} — the standard set out in the methodology.`}
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
                  <b>{live.placements}</b> {plural(live.placements, "placement", "placements")}
                </span>
                <span className={styles.chartFig}>
                  <b>{live.countries}</b> {plural(live.countries, "country", "countries")}
                </span>
                {/* Services, not chart lines: Spotify's weekly albums chart is
                    Spotify, and the sentence below names six services. */}
                <span className={styles.chartFig}>
                  <b>{live.services}</b> {plural(live.services, "platform", "platforms")}
                </span>
              </span>
              <span className={styles.chartCtaNote}>
                Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country charts, rebuilt{" "}
                {LIVE_CADENCE_ADVERB} by the same job that tracks Burna Boy — platform charts, not official ones.
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
              {count(countries, "country", "countries")} · {count(chartNo1s(a), "chart No. 1", "chart No. 1s")}
            </span>
          </div>
          <div className={styles.compareCell}>
            <span className={styles.compareName}>{rival.name}</span>
            {/* Gold marks Burna, and only Burna, IN THIS COMPARISON — a mixed
                pair. Two board artists are peers here, so neither cell gets to
                be the headline. The page's own lead card above is its subject's
                and stays gold (Paul, 4 Oct 2026; tests/goldMarksHisRows.test.ts). */}
            <span className={rival.isBurna ? `${styles.compareValue} ${styles.compareGold}` : styles.compareValue}>
              {rival.total}
            </span>
            <span className={styles.compareLabel}>
              {count(rival.countries, "country", "countries")} · {count(rival.no1s, "chart No. 1", "chart No. 1s")}
            </span>
          </div>
        </div>
        <p className={styles.compareNote}>
          Both counted identically.{" "}
          {/* The pair is every plaque each holds, whatever the switches above
              say — said only while one is off, so the static page is as it
              was. */}
          {scoped((_x, v) => (viewKey(v) === "all" ? null : <>Every plaque held: the switches above do not narrow this pair.{" "}</>))}
          {rival.isBurna
            ? `Burna Boy's figures update daily; this board was last re-read at every register on ${fullSweepLong}.`
            : `Both are read at source; this board was last re-read at every register on ${fullSweepLong}.`}{" "}
          <Link href={rival.href}>{rival.name}&apos;s page ↗</Link>
        </p>
        {/* Every head-to-head page this artist is on, by its own URL — the
            phone screen carries the same list (E-10, Paul, 24 Sep 2026). */}
        <nav aria-label={`Compare ${a.name} with…`}>
          <p className={styles.provenance}>
            Compare with…{" "}
            {compareWith.map((c, i) => (
              <Fragment key={c.href}>
                {i > 0 && " · "}
                <Link href={c.href}>{c.name}</Link>
              </Fragment>
            ))}
          </p>
        </nav>
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
        {/* Secondary: "Next" is this row's one gold action, and Compare is
            already in the hero (design review B-13, 8 Oct 2026). */}
        <Link href={`/compare?a=${a.slug}`} className="btn btnSecondary">Compare ↗</Link>
        <Link href="/certifications" className="btn btnSecondary">Burna Boy&apos;s ledger ↗</Link>
      </section>

      {/* ── Common questions ───────────────────────────────────── */}
      {/* Answer-first, and every figure computed — see lib/boardFaqs.ts. These
          are the questions readers and answer engines actually ask about a
          board artist, and a well-formed FAQ is the most liftable shape there
          is for an AI answer.
          This copy stays .desktopOnly, and that is now safe rather than a bug.
          It used to be the only copy: the schema went out at every width while
          this section sat inside the .desktopOnly wrapper opened above, so
          below 900px — phone readers, and Googlebot, which renders at phone
          width — the answers were display:none. The fix for /music/[song] was
          to un-hide its section, which cannot work here: this wrapper holds the
          entire desktop page, not just the FAQ. So the same `faqs` array is
          also handed to MobileCerts at the top of this file, which renders it
          into the phone screen. Two copies of the questions, one per layout,
          exactly as both layouts' <h1>s already work.
          tests/faqMobileVisibility.test.tsx asserts it for every board artist. */}
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
