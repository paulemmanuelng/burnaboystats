/**
 * Artist · Certifications (spec 4.3): app/afrobeats/[artist]/page.tsx's
 * figures and sentences for one artist, for every view its switches offer,
 * built by the page's own helpers (certScope, mostCertified, offRegister,
 * boardFaqs, provenanceSpecs). The page computes a few things inline — the
 * country strip, the phone lede and caption — and those are built here the
 * same way, word for word; tests/boardFeeds.test.ts renders the page and holds
 * the two equal, so neither can move alone.
 *
 * Differences the move asks for (round 14): the head-to-head is the board's
 * order (the No. 1 meets No. 2), not lib/headToHead's curated pairing; links
 * are FaveIQ paths; chart figures come in their Billboard twins.
 */

import {
  AFROBEATS_LAST_FULL_SWEEP,
  certCount,
  certProvenance,
  chartEntries,
  chartGlobalsClause,
  chartNo1s,
  chartTerritories,
  countryCount,
  lastVerifiedOn,
  offRegisterCount,
  offRegisterHold,
  offRegisterPhrase,
  plaqueLabel,
  topAward,
  type AfroCert,
  type AfroRelease,
  type Tier,
} from "../../data/afrobeats";
import { TIER_ORDER, tierOf } from "../../data/certifications";
import {
  ALL_VIEW,
  certKicker,
  certTotals,
  certsInView,
  creditSwitchable,
  emptyViewSentence,
  homeCodeFor,
  scopeSwitchable,
  viewKey,
  viewNoun,
  viewsOffered,
  type CertView,
  type CertViewKey,
} from "../certScope";
import { featuredTitlesOf } from "../certUnits";
import { awardLabel, awardRank } from "../awardName";
import { plaqueMarker } from "../issuerMarker";
import { isIssuerMarker, badgeWeight, byMostCertified } from "../certs";
import { byStripOrder, mostCertified, rowAnchor, stripMeta } from "../mostCertified";
import { monogramFor } from "../monogram";
import { wholePercents } from "../wholePercents";
import { boardRegisterBodies, dataLineFor } from "../provenanceSpecs";
import { artistFaqs } from "../boardFaqs";
import { andMore, topBody, topPlatform } from "../boardNotes";
import { compareWithLinks } from "../comparePairs";
import { showsHrefFor } from "../showsBoard";
import { LIVE_CADENCE_ADVERB } from "../liveChartMeta";
import { withLatestRead } from "../boardCadence";
import { BURNA_BOY_ID } from "../seo";
import { count } from "../plural";
import { countryMeta } from "../../data/afrobeats";
import { boardOrderSlugs } from "./board";
import {
  abs,
  artistHref,
  artistRef,
  boardArtistBySlug,
  boardArtists,
  certStamp,
  chartStamp,
  chartsHref,
  dated,
  faveiqPath,
  isBurna,
  lastModifiedOf,
  liveBoardOf,
  liveHref,
  longDay,
  peakMeta,
  sameAsOf,
  twin,
  type ArtistRef,
  type BB,
  type BoardArtist,
  type Dated,
} from "./shared";

// ── Shared shapes ───────────────────────────────────────────────────────────

export type CertOut = {
  c: string;
  level: Tier;
  x: number;
  plus?: Tier;
  body: string;
  source?: "label" | "announcement";
  announced?: { via: string; on: string };
  label: string;
  marker?: string;
  issuerMarker: boolean;
  tierClass: "diamond" | "platinum" | "gold" | "silver";
  provenance?: string;
  home: boolean;
};

export type Segment = {
  key: "certs" | "charts" | "live";
  label: string;
  short: string;
  count?: number | BB<number>;
  href: string;
};

export type Seo = {
  title: string;
  description: string;
  shareTitle: string;
  shareDescription: string;
  noindex: boolean;
  dataset?: {
    name: string;
    description: string;
    keywords: string[];
    variableMeasured: string[];
    dateModified: string;
    about: { name: string; sameAs?: string[]; id?: string }[];
  };
};

export type DataLineOut = {
  json: string;
  csv?: { href: string; filename: string };
  licence: { name: string; url: string };
  cite: string;
};

/** dataLineFor's line with every address absolute: the open data stays here. */
export const absoluteDataLine = (d: ReturnType<typeof dataLineFor>): DataLineOut => ({
  json: abs(d.json),
  ...(d.csv ? { csv: { href: abs(d.csv.href), filename: d.csv.filename } } : {}),
  licence: d.licence,
  cite: d.cite,
});

/** One plaque with what its pill prints worked out (spec §3 `Cert`). */
export function certOut(c: AfroCert, home: string | undefined): CertOut {
  const own = countryMeta(c.c).body;
  const marker = plaqueMarker(c, own);
  const provenance = certProvenance(c);
  return {
    c: c.c,
    level: c.level,
    x: c.x ?? 1,
    ...(c.plus ? { plus: c.plus } : {}),
    body: c.body ?? own,
    ...(c.source ? { source: c.source } : {}),
    ...(c.announced ? { announced: c.announced } : {}),
    label: awardLabel(c),
    ...(marker ? { marker } : {}),
    issuerMarker: Boolean(marker && c.body && isIssuerMarker(c.body)),
    tierClass: tierOf(c.level),
    ...(provenance ? { provenance } : {}),
    home: c.c === home,
  };
}

/** The artist's three pages (lib/artistPages' segments, FaveIQ's paths): the
 *  charts count is a chart count, so it comes in its Billboard twin. */
export function segmentsOf(a: BoardArtist): Segment[] {
  const live = liveBoardOf(a.slug);
  const out: Segment[] = [
    { key: "certs", label: "Certifications", short: "Certs", ...(a.swept ? { count: certCount(a) } : {}), href: artistHref(a.slug) },
  ];
  if (a.charts.length > 0)
    out.push({ key: "charts", label: "Charts", short: "Charts", ...(a.swept ? { count: twin(a, chartEntries) } : {}), href: chartsHref(a.slug) });
  if (live) out.push({ key: "live", label: "Live", short: "Live", ...(a.swept ? { count: live.placements } : {}), href: liveHref(a.slug) });
  return out;
}

/** The board's other artists in its order: round 14's head-to-head is the
 *  first of them, so the No. 1 meets No. 2. */
export function opponentByBoard(a: BoardArtist): BoardArtist | null {
  const slug = boardOrderSlugs().find((s) => s !== a.slug);
  return slug ? (boardArtistBySlug(slug) ?? null) : null;
}

// ── The page's inline builders, word for word ───────────────────────────────

const registersVerifiedOf = (a: BoardArtist) => `${a.name}'s registers last verified ${longDay(lastVerifiedOn(a))}`;

/** The country strip: the best plaque per country, best first, as the page's
 *  stripFor builds it (its input to plaqueMarker carries no `source`). */
function stripFor(x: BoardArtist) {
  const byCountry = new Map<string, { level: Tier; x?: number; plus?: Tier; body?: string; provenance?: string }>();
  for (const r of x.releases)
    for (const c of r.certs) {
      const cur = byCountry.get(c.c);
      if (!cur || awardRank(c) > awardRank(cur))
        byCountry.set(c.c, { level: c.level, x: c.x, plus: c.plus, body: c.body, provenance: certProvenance(c) });
    }
  return [...byCountry.entries()]
    .sort((p, q) => awardRank(q[1]) - awardRank(p[1]))
    .map(([code, t]) => {
      const c = countryMeta(code);
      const marker = t.body ? plaqueMarker(t, c.body) : null;
      return {
        code,
        country: c.name,
        flag: c.flag,
        label: awardLabel(t),
        ...(marker ? { marker } : {}),
        issuerMarker: Boolean(marker && t.body && isIssuerMarker(t.body)),
        tierClass: tierOf(t.level),
        title: `${c.name} — ${t.body ?? c.body}${t.provenance ? `, ${t.provenance}` : ""}`,
      };
    });
}

/** The phone's hero sentence for a view (the page's mobileLede). */
function mobileLede(a: BoardArtist, x: BoardArtist, view: CertView): string {
  if (certCount(x) === 0) return emptyViewSentence(a.name, view, a.country);
  const offRegisterN = offRegisterCount(x);
  return `Every ${view.scope === "intl" ? "international " : ""}${a.name} certification${view.credit === "lead" ? " on a lead credit" : ""}, read in the issuing body's own register${offRegisterN ? `, except ${offRegisterN} noted below` : ""} — from ${count(x.releases.length, "certified release", "certified releases")}.`;
}

/** The phone's caption under the tier bars for a view (mobileProvenance). */
function mobileProvenance(a: BoardArtist, x: BoardArtist, view: CertView): string | null {
  if (certCount(x) === 0) return null;
  const phrase = offRegisterPhrase(a, "short", view);
  return phrase ? `Read off-register: ${phrase}. ${registersVerifiedOf(a)}.` : `${registersVerifiedOf(a)}.`;
}

// ── 4.3 ─────────────────────────────────────────────────────────────────────

export function artistFeed(slug: string) {
  const a = boardArtistBySlug(slug);
  if (!a) return null;

  const home = homeCodeFor(a.country);
  const featured = featuredTitlesOf(a.slug);
  const offered = { scope: scopeSwitchable(a.releases, home), credit: creditSwitchable(a.releases, featured) };
  const views = viewsOffered(offered);
  const aView = (v: CertView): BoardArtist => ({ ...a, releases: certsInView(a.releases, { home, featured }, v) });

  const viewOut = (v: CertView) => {
    const x = aView(v);
    const t = certTotals(x.releases);
    const pct = wholePercents(TIER_ORDER.map((tier) => t.tiers[tier]));
    const phrase = offRegisterPhrase(x);
    return {
      total: t.total,
      countries: t.countries,
      tiers: t.tiers,
      tierPct: Object.fromEntries(TIER_ORDER.map((tier, i) => [tier, pct[i]])) as Record<Tier, number>,
      numLabel: viewKey(v) === "all" ? "certifications worldwide" : viewNoun(t.total, v),
      kicker: certKicker(v, a.country),
      lede: mobileLede(a, x, v),
      empty: t.total === 0 ? emptyViewSentence(a.name, v, a.country) : null,
      offRegister: phrase ? { phrase, hold: offRegisterHold(x) } : null,
      provenanceShort: mobileProvenance(a, x, v),
      strip: stripFor(x),
      mostCertified: mostCertified(x.releases, 5).map((r) => ({
        title: r.title,
        meta: stripMeta(r),
        anchor: rowAnchor(r.kind === "Albums" ? "album" : "song", r.title),
        ...(r.cover ? { cover: r.cover } : {}),
        letter: monogramFor(r.title),
      })),
      endRegisters: boardRegisterBodies(a, v),
    };
  };

  // The ledger's two orders: the desktop's (its three groups, each by
  // byMostCertified) and the phone's (albums first, then byStripOrder).
  const GROUPS: AfroRelease["kind"][] = ["Albums", "Lead singles", "Featured appearances"];
  const desktop = GROUPS.flatMap((k) => a.releases.filter((r) => r.kind === k).sort(byMostCertified));
  const phone = [...a.releases].sort(
    (p, q) => (p.kind === "Albums" ? 0 : 1) - (q.kind === "Albums" ? 0 : 1) || byStripOrder(p, q),
  );
  const place = (list: readonly AfroRelease[], r: AfroRelease) => list.indexOf(r) + 1;

  const live = liveBoardOf(a.slug);
  const hasCharts = a.charts.length > 0;
  const rival = a.swept ? opponentByBoard(a) : null;
  const fullSweep: Dated = dated(AFROBEATS_LAST_FULL_SWEEP);
  const rivalFor = rival ? { name: rival.name, total: certCount(rival), countries: countryCount(rival) } : null;
  const faqs = twin(a, (x) => artistFaqs(x, rivalFor));
  faqs.all.forEach((f, i) => {
    if (faqs.withoutBillboard[i]?.q !== f.q) throw new Error(`boardFeeds: ${a.slug}'s FAQ questions differ between the Billboard twins`);
  });
  const idx = boardArtists.findIndex((x) => x.slug === a.slug);
  const next = boardArtists[(idx + 1) % boardArtists.length];
  const shows = showsHrefFor(a.slug);
  const top = topAward(a);
  const offRegister = offRegisterPhrase(a);
  const hold = offRegisterHold(a);

  const seoOf = (x: BoardArtist): Seo => ({
    title: a.swept
      ? `${a.name} Certifications — ${count(certCount(a), "Plaque", "Plaques")} in ${countryCount(a)} ${countryCount(a) === 1 ? "Country" : "Countries"}`
      : `${a.name} — The Afrobeats Board`,
    description: a.swept
      ? `${a.name}: ${count(certCount(a), "certification", "certifications")} across ${count(countryCount(a), "country", "countries")}, topped by ${top ? plaqueLabel(top) : "a plaque"}, plus ${count(chartEntries(x), "official chart entry", "official chart entries")}${chartNo1s(x) ? ` and ${count(chartNo1s(x), "No. 1", "No. 1s")}` : ""} — every figure read at source.`
      : `${a.name} on The Afrobeats Board. The certification and chart registers are scheduled to be read at source — no figures are published here until they are.`,
    shareTitle: `${a.name} — The Afrobeats Board`,
    shareDescription: a.swept
      ? `${count(certCount(a), "certification", "certifications")}, ${count(countryCount(a), "country", "countries")}, verified at source.`
      : "Register sweep scheduled — no figures until they are read at source.",
    noindex: !a.swept,
    ...(a.swept
      ? {
          dataset: {
            name: `${a.name} music certifications by country`,
            description: `Every certification held by ${a.name} — ${count(certCount(a), "plaque", "plaques")} across ${count(countryCount(a), "country", "countries")}, each read in the issuing body's own register${offRegister ? ` (except ${offRegister}, ${hold})` : ""} and counted one plaque per title per country at its current tier.`,
            keywords: [a.name, "certifications", "RIAA", "BPI", "gold", "platinum", "diamond", "Afrobeats"],
            variableMeasured: ["Certification tier", "Country / territory", "Release", "Certifying body"],
            dateModified: chartStamp(a),
            about: [aboutOf(a)],
          },
        }
      : {}),
  });

  return {
    dataAsOf: withLatestRead([certStamp(a)]),
    data: {
      artist: {
        ...artistRef(a),
        hook: a.hook,
        swept: a.swept,
        ...(home ? { homeCode: home } : {}),
        homeName: a.country,
      },
      segments: segmentsOf(a),
      switches: offered,
      views: Object.fromEntries(views.map((v) => [viewKey(v), viewOut(v)])) as Partial<Record<CertViewKey, ReturnType<typeof viewOut>>>,
      releases: a.releases.map((r) => ({
        title: r.title,
        kind: r.kind,
        ...(r.cover ? { cover: r.cover } : {}),
        letter: monogramFor(r.title),
        anchor: rowAnchor(r.kind === "Albums" ? "album" : "song", r.title),
        featured: featured.has(r.title),
        order: { desktop: place(desktop, r), phone: place(phone, r) },
        certs: [...r.certs].sort((p, q) => badgeWeight(q) - badgeWeight(p)).map((c) => certOut(c, home)),
      })),
      countries: Object.fromEntries(
        [...new Set(a.releases.flatMap((r) => r.certs.map((c) => c.c)))].map((code) => {
          const m = countryMeta(code);
          return [code, { code, name: m.name, flag: m.flag, body: m.body, ...(m.url ? { url: m.url } : {}) }];
        }),
      ),
      verified: { day: dated(lastVerifiedOn(a)), sentence: registersVerifiedOf(a) },
      fullSweep,
      chartsCard: hasCharts
        ? {
            entries: twin(a, chartEntries),
            territories: twin(a, chartTerritories),
            no1s: twin(a, chartNo1s),
            note: twin(a, (x) => `Principal national chart per country${chartGlobalsClause(x)} — the standard set out in the methodology.`),
          }
        : null,
      liveCard: live
        ? { placements: live.placements, countries: live.countries, services: live.services, cadence: LIVE_CADENCE_ADVERB }
        : null,
      notes: {
        charts: hasCharts
          ? twin(a, (x) => {
              const b = topBody(x.charts.flatMap((r) => r.entries), (c) => peakMeta(a, c).body);
              return andMore(b.top, b.total) ?? null;
            })
          : null,
        live: live ? (andMore(topPlatform(live.platformTotals).top, topPlatform(live.platformTotals).total) ?? null) : null,
      },
      headToHead: rival
        ? {
            self: { total: certCount(a), countries: countryCount(a), no1s: twin(a, chartNo1s) },
            opponent: { artist: artistRef(rival), total: certCount(rival), countries: countryCount(rival), no1s: twin(rival, chartNo1s) },
            note: `Both are read at source; the last full board sweep re-read every register on ${fullSweep.long}.`,
          }
        : null,
      compareWith: compareWithLinks(a.slug).map((c) => ({ slug: c.slug, name: c.name, href: faveiqPath(c.href) })),
      showsHref: shows ? faveiqPath(shows) : null,
      next: { slug: next.slug, name: next.name, href: artistHref(next.slug) },
      faqs: faqs.all.map((f, i) => ({ q: f.q, a: { all: f.a, withoutBillboard: faqs.withoutBillboard[i].a } })),
      dataLine: absoluteDataLine(dataLineFor("afrobeats")),
      seo: {
        ...twin(a, seoOf),
        musicGroup: { name: a.name, alternateName: a.fullName, image: a.image, sameAs: sameAsOf(a) },
      },
      share: { topAward: top ? plaqueLabel(top) : null, total: certCount(a), countries: countryCount(a) },
      lastModified: lastModifiedOf(artistHref(a.slug), chartStamp(a)),
    },
  };
}

/** Who a Dataset is about. His node stays burnaboystats' own pointer
 *  (BURNA_BOY_REF's @id), as datasetJsonLd writes it today (spec §6). */
export const aboutOf = (a: BoardArtist): { name: string; sameAs?: string[]; id?: string } =>
  isBurna(a) ? { name: a.name, sameAs: sameAsOf(a), id: BURNA_BOY_ID } : { name: a.name, sameAs: sameAsOf(a) };

export type ArtistFeed = NonNullable<ReturnType<typeof artistFeed>>;
export type { ArtistRef };
