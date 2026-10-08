"use client"; // the tier rail filters the list

import { Fragment, useState, useEffect, useLayoutEffect, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./mobileCerts.module.css";
import { SHOWS_LABEL, SHOWS_SHORT } from "../lib/showsDeepLink";
import { badgeWeight, byMostCertified, certMatches, isIssuerMarker, issuingBodyCount, matches } from "../lib/certs";
import { plaqueMarker } from "../lib/issuerMarker";
import ScrollRail from "./ScrollRail";
import { titleKey } from "../lib/titleKey";
import { coverFor } from "../lib/covers";
import { spotifySrcSet } from "../lib/spotifyImage";
import { coverTile } from "../lib/coverTile";
import { count } from "../lib/plural";
import { BLANK_PIXEL } from "../lib/blankPixel";
import { portraitArtFor } from "../lib/portraitArt";
import { certHistoryYears } from "../data/certifications";
import type { Cert, CertEvent, Country, Release } from "../data/certifications";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import MobileFaqSection from "./MobileFaqSection";
import type { Faq } from "./FaqList";
import { awardLabel } from "../lib/awardName";
import { dropDeepLink, onDeepLinkChange, readDeepLink, readSavedView, saveView } from "../lib/deepLink";
import {
  ALL_VIEW, certCountPhrase, certKicker, certsInView, certTotals, creditSwitchable, effectiveView, scopeSwitchable, viewKey,
  viewNoun, logLedeTail, type CertView, type CertViewKey,
} from "../lib/certScope";
import { wholePercents } from "../lib/wholePercents";
import { useCertView } from "../lib/useCertView";
import { certSwap } from "../lib/certViewPrepaint";
import CertViewSwitches from "./CertViewSwitches";
import CoLeadTag from "./CoLeadTag";
import CoLeadNote from "./CoLeadNote";
import { holdInPlace } from "../lib/holdInPlace";

/**
 * The mobile certifications screen.
 *
 * A distinct screen, not the desktop page reflowed: one big total with the
 * tier bars stacked under it, a scrolling tier rail, then the most-certified
 * releases as stacked rows with their badges wrapped beneath each title.
 * Built from designs/mobile/Burna Boy Stats - Mobile.dc.html, screen 02.
 *
 * Every figure derives from app/data.
 */

const TIER_ORDER = ["Diamond", "Platinum", "Gold", "Silver"] as const;
type Tier = (typeof TIER_ORDER)[number];

// Tier colours carry data meaning and are never recoloured to gold.
//
// These are the --tier-* tokens, and they were not always. This screen carried
// its own four hex values, so a Diamond plaque rendered #8fe3f0 here and
// #31A1C0 on the desktop ledger — the same award in two colours, on a palette
// where the colour IS the tier. Worse, #8fe3f0 is --cyan, which globals.css
// reserves in as many words: "Top 10 peak band ONLY — see tier tokens below".
// The mobile certifications screen was painting its top tier in the chart
// screen's peak-band colour.
//
// Taking them from the tokens is also what makes theming possible: a light
// theme redefines --tier-* once, and a hardcoded copy here would keep painting
// the dark values over it.
// The INK role, not the FILL. A tier's fill carries the lightness spread that
// separates four tiers at 8px; as TEXT on paper it is 2.74:1 for Diamond and
// 1.07:1 for Platinum. Design §4.4 gives the tier word its own ink for exactly
// this, and in dark each ink IS its fill, so nothing moves there.
const INK: Record<Tier, string> = {
  Diamond: "var(--tier-diamond-ink)",
  Platinum: "var(--tier-platinum-ink)",
  Gold: "var(--tier-gold-ink)",
  Silver: "var(--tier-silver-ink)",
};
// The dark stop is DERIVED from the same token rather than typed, so the ramp
// cannot drift from the ink again, and it follows the token into any theme.
const GRAD: Record<Tier, string> = {
  Diamond: "linear-gradient(90deg,color-mix(in srgb,var(--tier-diamond-ink) 58%,var(--bg)),var(--tier-diamond-ink))",
  Platinum: "linear-gradient(90deg,color-mix(in srgb,var(--tier-platinum-ink) 58%,var(--bg)),var(--tier-platinum-ink))",
  Gold: "linear-gradient(90deg,color-mix(in srgb,var(--tier-gold-ink) 58%,var(--bg)),var(--tier-gold-ink))",
  Silver: "linear-gradient(90deg,color-mix(in srgb,var(--tier-silver-ink) 58%,var(--bg)),var(--tier-silver-ink))",
};

const ROWS_SHOWN = 10;
/** This screen's key in the history entry's saved filters (lib/deepLink.ts). */
const VIEW_ID = "certs-m";

// Derived, not a literal — see certHistoryYears in data/certifications.ts.
const YEARS = certHistoryYears;

export default function MobileCerts({
  releases,
  albums,
  history,
  countries,
  total,
  countryCount,
  covers,
  portrait,
  portraitSlug,
  portraitSlot = "box",
  brand,
  chartsHref,
  liveHref,
  chartsNote,
  liveNote,
  backHref = "/",
  backLabel = "Certifications",
  subject = "Burna Boy",
  lede,
  faqs,
  showActionBar = true,
  compareSlug = "burna-boy",
  showsHref,
  compareWith,
  countryBoards,
  home,
  homeName,
  featured,
  ledes,
  provenance,
  coLeads,
}: {
  releases: Release[];
  albums: Release[];
  /** The by-year log. Empty hides that section: the Afrobeats Board's artists
   *  have plaques but no dated award events, and a year rail over nothing is
   *  worse than no rail. */
  history: CertEvent[];
  countries: Record<string, Country>;
  total: number;
  countryCount: number;
  /** Artwork by release title. Burna Boy's page passes nothing, because the
   *  site's own catalogue lookup knows every one of his releases. */
  covers?: Record<string, string | undefined>;
  backHref?: string;
  backLabel?: string;
  /** Who the total belongs to. Names the <h1>, which is otherwise a bare number
   *  pair — see the heading itself. Every caller should pass its artist. */
  subject?: string;
  /** Art-direction token — see AfroArtist.brand. Undefined for everyone but
   *  the artist whose campaign has its own palette, which is what keeps this
   *  component's other caller (Burna Boy's own screen) untouched. */
  brand?: string;
  /** Replaces the hero sentence, which names Burna Boy's own certifying bodies. */
  lede?: string;
  /** The artist's portrait, blended into the hero behind the type. */
  portrait?: string;
  /** Which artist's treatment to use — see app/lib/portraitArt.ts. */
  portraitSlug?: string;
  /** Where the portrait sits (Claude Design round 2, item 34, option b).
   *  "square" is Burna Boy's /certifications hero ONLY: a fixed square, 80% of
   *  the hero's width, raised beside the total. Every board artist keeps "box",
   *  the live cover box their portraitArt.ts focal X was tuned against; Davido's
   *  emblem branch rides on "box" too. tests/ui/certsPortrait.test.tsx. */
  portraitSlot?: "box" | "square";
  /** This artist's official chart peaks, if they have a board. */
  chartsHref?: string;
  /** This artist's live board, if they have one. */
  liveHref?: string;
  /** Which register carries most of their peaks — "TurnTable and more". */
  chartsNote?: string;
  /** Which platform carries most of their live placements. */
  liveNote?: string;
  /**
   * The screen's own FAQ, when its route emits FAQPage.
   *
   * Only /afrobeats/[artist] passes any: every board page emits the node at
   * every width while their visible copy sat in the page's `.desktopOnly`
   * half, which is display:none on a phone. Burna Boy's /certifications, this
   * component's other caller, emits no FAQPage and passes nothing — which is
   * what keeps that screen untouched.
   */
  faqs?: Faq[];
  /** The board's screens end in the five-tab bar instead of an action bar. */
  showActionBar?: boolean;
  /** Which artist the Compare button pre-fills side A with. */
  compareSlug?: string;
  /** "Biggest shows" — the box-office board opened on this artist's nights
   *  (lib/showsBoard.showsHrefFor). Only an artist with a reported single
   *  night has one; absent, the bar is as it was. */
  showsHref?: string;
  /** Every head-to-head page this artist is on, canonical URLs — the plain
   *  "Compare with…" list under the boards (lib/comparePairs.compareWithLinks). */
  compareWith?: { name: string; href: string }[];
  /** Every country board (/compare/in/<country>), canonical URLs — folded
   *  under "Compare with…" the same way. Only /certifications passes it: the
   *  boards were linked from their own index and nowhere else. */
  countryBoards?: { name: string; href: string }[];
  /** The artist's home country code (lib/certScope.homeCodeFor) — what the
   *  International switch leaves out. Absent = no International switch. */
  home?: string;
  /** The artist's home country in full ("Nigeria", "South Africa") — the
   *  home switch's name (the artist's own `country` field). */
  homeName?: string;
  /** The titles of the artist's FEATURED appearances — the data's own group
   *  (Burna Boy's `features`, the board's "Featured appearances") — which the
   *  Lead switch leaves out. Absent or empty = no Lead switch. */
  featured?: readonly string[];
  /** The `lede` for each narrowed view, built on the server from the same
   *  helpers, because the board's lede states the totals. Absent = `lede`. */
  ledes?: Partial<Record<CertViewKey, string>>;
  /** The provenance caption under the tier bars, per view ("all" included),
   *  built on the server: "Read off-register: {phrase}. Last verified {date}."
   *  or "Last verified {date}." (Claude Design round 2, items 25/26/26b). Only
   *  the board passes it; Burna Boy's /certifications prints none, and a view
   *  that holds nothing prints none either. */
  provenance?: Partial<Record<CertViewKey, string>>;
  /** Burna Boy's co-leads: title -> the other acts he leads it with
   *  (songRoles.coLeadsFor, built on the server) — the "co-lead" tag on
   *  the row's credit line, as on the desktop explorer. Board pages pass none. */
  coLeads?: Readonly<Record<string, readonly string[]>>;
}) {
  const art = (title: string) => (covers ? covers[title] : coverFor(title));
  // The list runs albums, singles and features together, so an album needs
  // saying — on desktop the three are separate sections and the grouping does
  // this job for free.
  const albumTitles = new Set(albums.map((a) => titleKey(a.title)));
  const portraitArt = portraitArtFor(portraitSlug ?? "burna-boy");
  // The raised square (Burna Boy's /certifications only) or the live cover box.
  // The square paints at its own width, 80% of a full-width hero, so `sizes`
  // describes it directly; the box's 190vw is explained at the <img> below.
  const square = portraitSlot === "square";
  const heroArtClass = square
    ? `${styles.heroArt} ${styles.heroArtSlot}`
    : portraitArt.mode === "emblem"
      ? `${styles.heroArt} ${styles.heroArtEmblem}`
      : styles.heroArt;
  const heroArtSizes = square ? "80vw" : "190vw";
  const [tier, setTier] = useState<Tier | null>(null);
  // Rows whose full badge wall is open — keyed by title, folded by default.
  const [openBadges, setOpenBadges] = useState<Set<string>>(new Set());
  const [expanded, setExpanded] = useState(false);
  const [year, setYear] = useState(YEARS[0]);
  // A single-release focus, deep-linked via #release=… — the fragment the Dai
  // Dai story's "every certification" link carries. CertExplorer has read it
  // since that link shipped, but it sits inside /certifications' .desktopOnly
  // wrapper, so this screen never saw it: on a phone the tap landed on the
  // whole unfiltered ledger with nothing to say a filter was ever meant.
  const [focus, setFocus] = useState<string | null>(null);
  // A single-country focus, deep-linked via #country=… — search's link for
  // every certifying country. The desktop ledger has read it since 24 Sep
  // 2026, as a lit chip in its country row; this screen has no country row
  // and read only #release=, so on a phone a search result for Belgium
  // opened the whole unfiltered ledger of 250 plaques with nothing to say a
  // filter was meant (V-records-04, debug pass 5 Oct 2026). It narrows the
  // list and says so in a bar, the way #release= does.
  const [country, setCountry] = useState<string | null>(null);

  // Read the deep link on mount — client-only, exactly as CertExplorer
  // does it, so /certifications stays statically rendered. The FRAGMENT is the
  // live form; the query string is still read so older links keep working (see
  // CertExplorer for why the crawlable ?release= variant was retired). The
  // focused release is un-folded at the same time: the bar promises "every
  // certification", and Dai Dai's would otherwise stay behind the "+N" chip.
  //
  // Read again when the fragment changes, as the desktop explorer does, and
  // the tier comes back from this history entry on Back. A layout effect so
  // the list is right before the browser restores the scroll offset over it.
  useLayoutEffect(() => {
    const saved = readSavedView<{ tier: Tier | null; country?: string | null }>(VIEW_ID);
    const read = (initial: boolean) => {
      const r = readDeepLink("release", initial);
      setFocus(r);
      if (r) setOpenBadges(new Set([r]));
      // CertExplorer's reading, word for word: a country this page has no
      // name for is no focus at all.
      const c = readDeepLink("country", false);
      if (!initial || c) setCountry(c && countries[c] ? c : null);
      if (initial && saved) {
        setTier(saved.tier && TIER_ORDER.includes(saved.tier) ? saved.tier : null);
        setCountry(saved.country && countries[saved.country] ? saved.country : null);
      }
    };
    read(true);
    return onDeepLinkChange(() => read(false));
  }, [countries]);

  useEffect(() => {
    saveView(VIEW_ID, { tier, country });
  }, [tier, country]);

  // Clearing the country takes it out of the address bar too, or a reload
  // puts it back (C-10).
  const pickCountry = (c: string | null) => {
    setCountry(c);
    dropDeepLink("country");
  };

  // The two switches (lib/certScope), in /compare's style: the home country
  // ("Nigeria", "South Africa") and "Features".
  // Each is offered only when it changes something; in a narrowed view every
  // figure on this screen — the total, the countries, the tier bars and chips,
  // the list — is counted from the releases left in it.
  const [rawView, setView] = useCertView();
  const featuredSet = new Set(featured ?? []);
  const offered = { scope: scopeSwitchable(releases, home), credit: creditSwitchable(releases, featuredSet) };
  const view = effectiveView(rawView, offered);
  const narrowed = view.scope !== "all" || view.credit !== "all";
  const inScope = certsInView(releases, { home, featured: featuredSet }, view);
  const scopedTotals = certTotals(inScope);
  const shownTotal = narrowed ? scopedTotals.total : total;
  const shownCountries = narrowed ? scopedTotals.countries : countryCount;

  const tierCount = scopedTotals.tiers;
  // Each tier's share of the view, by largest remainder so the column adds
  // to 100 (B-10: Olamide's 31/24/44 read 99%, Rema's 11/55/26/9 101%).
  const tierPctList = wholePercents(TIER_ORDER.map((t) => tierCount[t]));
  const tierPct = Object.fromEntries(TIER_ORDER.map((t, i) => [t, tierPctList[i]])) as Record<Tier, number>;
  // The kicker, and whether it is one of the long scoped ones ("Outside
  // Nigeria · Lead credits") — longer than the all-view's "Certified
  // worldwide". Only those reach the raised square's face at 320 and 360, so
  // only they take the light kicker band (B-02).
  const kicker = certKicker(view, homeName ?? home ?? "");
  const longKicker = kicker.length > certKicker(ALL_VIEW, homeName ?? home ?? "").length;
  const caption = shownTotal > 0 ? provenance?.[viewKey(view)] : undefined;
  // At least 1: International + Lead can hold nothing at all (BNXN's
  // international plaques are all on other artists' songs), and the bars and
  // percentages must read 0, not NaN.
  const maxTier = Math.max(1, ...TIER_ORDER.map((t) => tierCount[t]));
  // A tier chip that the International view empties (a Diamond held only at
  // home) leaves the rail, so its selection cannot stand either.
  const shownTier = tier && tierCount[tier] > 0 ? tier : null;
  // The desktop's rule for a country the view leaves out (Nigeria under
  // "International"): read as no country, and dropped from state and the
  // address bar when the reader flips the switch that leaves it out.
  const holds = (list: Release[], c: string) => list.some((r) => r.certs.some((x) => x.c === c));
  const shownCountry = country && (!narrowed || holds(inScope, country)) ? country : null;
  const pickView = (patch: Partial<CertView>) => {
    const next = { ...view, ...patch };
    const nextNarrowed = next.scope !== "all" || next.credit !== "all";
    if (country && nextNarrowed && !holds(certsInView(releases, { home, featured: featuredSet }, next), country)) {
      pickCountry(null);
    }
    setView(patch);
  };
  // With a country focused, a row's plaques from there lead and the rest are
  // dimmed, as on the desktop ledger: Dai Dai folds at twelve of its eighteen,
  // and by weight alone its Colombian, Czech, Greek, Hungarian, Portuguese and
  // Slovak plaques all sat behind the "+6" — the row a filter kept, without
  // the plaque that kept it (the charts screen's V-records-03, here).
  // A tier chip alone does the same (V-afrobeats-09): with SILVER picked,
  // Wizkid's rows showed every Platinum and Gold at full strength beside the
  // one Silver that kept the row, where the desktop dims all but the Silver.
  const lit = (c: Cert) => (!shownCountry && !shownTier) || certMatches(c, shownCountry, shownTier);

  const matching = inScope
    // Tier and country on the SAME plaque (lib/certs.matches, V-records-01).
    .filter((r) => (!focus || r.title === focus) && matches(r, shownCountry, shownTier))
    .slice()
    // Albums lead, then the songs — each block running most-certified to
    // least, labelled and numbered from 01 on its own (see isAlbumRow below).
    // Albums first is deliberate; until 24 Sep 2026 the blocks ran unlabelled
    // under one count, so Dai Dai (17 certs) was "05" below Twice as Tall (1).
    // The same comparator the desktop uses (count, then the summed weight of
    // the tiers), so the two layouts rank identically: the phone used to break
    // ties by nothing, and Seyi Vibez's list put Bullion Van (one Gold) at 09
    // while Gwagwalada's 5× Platinum sat outside the ten.
    .sort((a, b) => {
      const aAlbum = albumTitles.has(titleKey(a.title)) ? 0 : 1;
      const bAlbum = albumTitles.has(titleKey(b.title)) ? 0 : 1;
      return aAlbum - bAlbum || byMostCertified(a, b);
    });
  const rows = expanded ? matching : matching.slice(0, ROWS_SHOWN);
  const hidden = matching.length - rows.length;
  const isAlbumRow = (r: Release) => albumTitles.has(titleKey(r.title));
  // The filters leave nothing: the phone's own empty state, which clears what
  // the desktop's "Clear filters" clears — the tier, the release focus AND the
  // two switches. Both switches off can empty a page on their own (Tiwa
  // Savage: her one international plaque a featured appearance), and a Clear
  // that left them off did nothing at all.
  const clearFilters = () => {
    setTier(null);
    pickCountry(null);
    if (narrowed) setView({ scope: "all", credit: "all" });
    if (focus) {
      setFocus(null);
      dropDeepLink("release");
    }
  };

  const events = history.filter((e) => e.year === year);
  const yearCounts = history.reduce<Record<number, number>>((acc, e) => {
    acc[e.year] = (acc[e.year] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div className={styles.screen} data-brand={brand}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href={backHref} aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>{backLabel}</span>
        <span className={styles.backCount}>{shownTotal}</span>
        <MobileMenuButton />
      </div>

      {/* Hero — recounted by the switches, so hidden at first paint on a link
          that turns one off (lib/certViewPrepaint, CC-22). */}
      <div className={styles.hero} {...certSwap}>
        {portrait && (
          <>
            {/* An <img>, not a background. This is the LCP element on both screens
                that use it — the artist page and /certifications — and a CSS
                background can carry neither a priority hint nor a srcset, and is
                not discoverable by the preload scanner at all. The focal, opacity
                and grey custom properties are untouched: only the paint mechanism
                changed.

                The <source media> is load-bearing. Both layouts sit in every
                document with one hidden by display:none, and the two mechanisms
                differ there — a hidden background is never fetched, a hidden EAGER
                <img> is. Without the gate, making this eager for mobile would bill
                every desktop visitor for a portrait they never see. The preload
                scanner evaluates `media` before it fetches, so desktop takes the
                1x1 and mobile still gets an eager, prioritised image.

                sizes is 190vw rather than the box's 76vw because the box is ~313px
                but its aspect-ratio is 2/5, and `cover` fits the 640 square by the
                LONG axis — so the image paints ~783px wide and is cropped to 313.
                Describing the box would let a DPR-1 phone pick the 320 rung for a
                783px render: a soft hero where the background always fetched 640.
                Burna Boy's raised square is not cropped at all — a square image
                in a square box 80% of the hero wide — so it says 80vw, and the
                preload below says the same (heroArtSizes). */}
            {/* Preload, media-gated to phones. Worth doing because of an accident
                this conversion removed: the desktop hero used to be an EAGER <img>
                on the same URL, so phones were quietly riding its fetch. Now that
                the desktop copy is correctly lazy and on a smaller rung, the phone
                has to ask for its own, and this is what keeps that ask early.

                It has a srcset and no href, so React emits it here rather than
                hoisting it into <head>. It is still in the first flight of HTML,
                and it is the request the hero is painted from — so its priority
                is the one that counts. An unhinted image preload goes out at Low:
                on 23 Sep 2026 Lighthouse flagged /certifications and the board's
                artist pages for an LCP portrait requested without a priority
                hint, level with the Spotify row covers below it, although the
                <img> already asked for high. */}
            <link
              rel="preload"
              as="image"
              imageSrcSet={spotifySrcSet(portrait)}
              imageSizes={heroArtSizes}
              media="(max-width: 900px)"
              fetchPriority="high"
            />
            <picture style={{ display: "contents" }}>
              <source media="(max-width: 900px)" srcSet={spotifySrcSet(portrait)} sizes={heroArtSizes} />
            { }
            <img
              className={heroArtClass}
              src={BLANK_PIXEL}
              alt=""
              style={{
                "--focal": portraitArt.focal,
                "--portrait-opacity": portraitArt.opacity,
                "--grayscale": portraitArt.grayscale,
              } as CSSProperties}
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
            />
            </picture>
            <span
              className={
                square
                  ? `${styles.heroScrim} ${styles.heroScrimSlot} ${longKicker ? styles.heroScrimLongKicker : ""}`
                  : styles.heroScrim
              }
              aria-hidden="true"
            />
          </>
        )}
        {/* Says which plaques the number below counts, so it follows the
            switches with it (lib/certScope.certKicker): "Certified worldwide"
            with both on, "Outside Nigeria · Lead credits" with both off. A
            word, never the colour alone; one line at 320. */}
        <div className={styles.kicker}>{kicker}</div>
        {/* The page's <h1>. Screen 02 leads with the total rather than a worded
            title, so the total IS the heading — it reads "221 awards, 25
            countries". Both layouts sit in the DOM at once, so the document
            carries two h1s, one per layout, and only ever one is visible. */}
        {/* Named outright for assistive tech: the figure, the unit and the
            country line below sit in separate spans and a <br> with no space
            between them, so the heading's text ran "159Awards21 countries"
            (design review B-01, afrobeatsA-21). Nothing to look at changes. */}
        <h1 className={styles.totalRow} aria-label={`${subject}: ${certCountPhrase(shownTotal, shownCountries, view)}`}>
          {/* Whose numbers these are. The desktop <h1> on this screen's other
              caller names the artist outright, but the desktop layout is
              display:none on a phone and so is out of the accessibility tree
              entirely — which left every one of the board's artist pages with
              a single <h1> reading "103 awards / 21 countries" and no name in
              it. Nothing to look at changes; the heading just stops being
              anonymous to anyone navigating by heading. */}
          {/* The scope words live in the kicker above (owner's ruling Q2, 4 Oct
              2026), so the visible unit is the same in every view; the hidden
              span keeps the heading whole for anyone navigating by headings:
              "Tyla, international certifications as lead artist: 64 Awards,
              23 countries". */}
          <span className="visuallyHidden">{subject}, {viewNoun(shownTotal, view)}: </span>
          <span className={styles.total}>{shownTotal}</span>
          {/* One text node: as two, the space between them was lost to the
              accessibility tree, which read "26COUNTRIES" (E-15). */}
          {/* "Certifications", the site's one noun for a plaque (owner's
              default, design review of 8 Oct 2026, B-10): it read "Awards",
              the word for Grammys, until then. */}
          <span className={styles.totalUnit}>
            Certifications
            <br />
            {`${shownCountries} ${shownCountries === 1 ? "country" : "countries"}`}
          </span>
        </h1>
        <p className={styles.lede}>
          {(narrowed ? ledes?.[viewKey(view)] ?? lede : lede) ??
            `Silver, Gold, Platinum and Diamond certifications from the RIAA, BPI, SNEP, Music Canada and ${issuingBodyCount(inScope) - 4} more — across ${inScope.length} certified releases.`}
        </p>

        {/* The two switches, /compare's own (CertViewSwitches), moved as they
            are — not restyled — to sit under the lede (Claude Design round 2,
            item 17; owner's ruling N1, 4 Oct 2026), above the tier bars they
            recount. Each control wraps inside itself, compare's way, so the
            row never scrolls sideways — see .viewRow. */}
        <CertViewSwitches
          view={view}
          offered={offered}
          onPick={pickView}
          homeName={homeName ?? home ?? ""}
          className={styles.viewRow}
        />
        {/* What a switch did, said once it is done — polite, so it waits. A
            live region speaks changes only, so the count it holds on load is
            not read out. It keeps the scoped noun (ruling Q2). */}
        <span aria-live="polite" className="visuallyHidden">
          {certCountPhrase(shownTotal, shownCountries, view)}
        </span>

        {/* A view that holds nothing draws no bars — not even the rule above
            them; the lede says why it is empty (lib/certScope.emptyViewSentence). */}
        {shownTotal > 0 && (
        <div className={styles.tierList}>
          {TIER_ORDER.filter((name) => tierCount[name] > 0).map((name) => (
            // One 32px line per tier (round 2, item 20): name · bar · count ·
            // share. The bars stay linear to the view's largest tier (maxTier).
            <div key={name} className={styles.tierRow}>
              <span className={styles.tierName} style={{ color: INK[name] }}>{name}</span>
              <span className={styles.tierTrack}>
                <span
                  className={styles.tierFill}
                  style={{ width: `${(tierCount[name] / maxTier) * 100}%`, background: GRAD[name] }}
                />
              </span>
              <span className={styles.tierCount}>{tierCount[name]}</span>
              <span className={styles.tierPct}>{tierPct[name]}%</span>
            </div>
          ))}
        </div>
        )}
        {/* Where the plaques were read and when, per view (item 26b): the
            detail the lede's "except N noted below" points at. */}
        {caption && <p className={styles.provenance}>{caption}</p>}
      </div>

      {/* The deep-linked focus, announced the way the desktop explorer announces
          it. Sits above the tier rail and above the list, so a #release= that
          matches nothing still leaves a way back to the full ledger. */}
      {focus && (
        <div className={styles.focusBar}>
          <span>
            Showing every certification for <b>{focus}</b>
          </span>
          <button
            type="button"
            className={styles.focusClear}
            onClick={() => {
              setFocus(null);
              // Out of the address bar too, or a reload puts it back.
              dropDeepLink("release");
            }}
          >
            Show all releases ✕
          </button>
        </div>
      )}
      {shownCountry && (
        <div className={styles.focusBar}>
          <span>
            Showing certifications from <b>{countries[shownCountry].name}</b>
          </span>
          <button type="button" className={styles.focusClear} onClick={() => pickCountry(null)}>
            Show all countries ✕
          </button>
        </div>
      )}

      {/* Tier rail. A view that holds nothing has no tiers to filter, so no
          rail and no list label either — only the empty card below, whose
          Clear turns the switches back on (round 2, item 24). */}
      {shownTotal > 0 && (
      <ScrollRail id="cert-rail" className={styles.rail} label="Filter by certification tier">
        {/* Toggle buttons, so each says whether it is on (E-03), as the
            year rail below and the shows rail do. */}
        <button
          type="button"
          aria-pressed={!shownTier}
          className={`${styles.chip} ${!shownTier ? styles.chipOn : ""}`}
          onClick={() => setTier(null)}
        >
          {!shownTier ? null : <span className={styles.chipDot} style={{ background: INK.Gold }} />}
          All {shownTotal}
        </button>
        {TIER_ORDER.filter((name) => tierCount[name] > 0).map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={shownTier === name}
            className={`${styles.chip} ${shownTier === name ? styles.chipOn : ""}`}
            style={shownTier === name ? undefined : { color: INK[name] }}
            onClick={() => setTier(shownTier === name ? null : name)}
          >
            {shownTier === name ? null : <span className={styles.chipDot} style={{ background: INK[name] }} />}
            {/* One text node, so it is named "Diamond 7", not "DIAMOND7" (E-15). */}
            {`${name} ${tierCount[name]}`}
          </button>
        ))}
      </ScrollRail>
      )}

      {shownTotal > 0 && <div className={styles.listLabel}>Most-certified releases</div>}

      {matching.length === 0 && (
        <div className={styles.empty} role="status">
          <p className={styles.emptyText}>Nothing matches these filters.</p>
          <button type="button" className={styles.emptyClear} onClick={clearFilters}>
            Clear filters
          </button>
        </div>
      )}

      {rows.length > 0 && (
      <div className={styles.list}>
        {rows.map((r, i) => {
          // Each block — albums, then songs — is labelled where it starts and
          // numbered from 01 within itself.
          const album = isAlbumRow(r);
          const startsBlock = i === 0 || isAlbumRow(rows[i - 1]) !== album;
          const n = rows.slice(0, i + 1).filter((x) => isAlbumRow(x) === album).length;
          return (
          <Fragment key={r.title}>
          {startsBlock && <div className={styles.blockLabel}>{album ? "Albums" : "Songs"}</div>}
          {startsBlock && !album && rows.some((x) => !isAlbumRow(x) && coLeads?.[x.title]?.length) && (
            <CoLeadNote className={styles.coLeadNote} tagClassName={styles.roleTag} />
          )}
          {/* Deliberately not interactive: the row already shows every one of
              the release's certifications, so a tap has nothing to reveal. It
              linked to /certifications?release=… for a while, which on a phone
              only re-navigated the same page and jumped to the top. */}
          <div className={styles.row}>
            <div className={styles.rowTop}>
              <span className={styles.rank}>{String(n).padStart(2, "0")}</span>
              {/* Same treatment as the live-charts rows: the release's art,
                  resolved by title, riding between rank and name. The slot
                  holds it back until the row nears the screen; see
                  .coverSlot (23 Sep 2026). */}
              <span className={styles.coverSlot}>
                <span
                  className={styles.rowCover}
                  aria-hidden="true"
                  /* 102 = 3x the 34px tile, not a board artist's 500px Deezer
                     or 300px Apple art (23 Sep 2026). No art on file draws
                     the release's initial (lib/coverTile.ts). */
                  {...coverTile(art(r.title), r.title, 102)}
                />
              </span>
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>
                  {r.title}
                  {albumTitles.has(titleKey(r.title)) && (
                    <span className={styles.albumTag}>Album</span>
                  )}
                </div>
                <div className={styles.rowMeta}>
                  {[r.credit, r.year].filter(Boolean).join(" · ")}
                  <CoLeadTag names={coLeads?.[r.title]} className={styles.roleTag} />
                </div>
              </div>
              <span className={styles.rowCount}>{count(r.certs.length, "cert", "certs")}</span>
            </div>
            <div className={styles.badges}>
              {(() => {
                // A row with 20+ plaques is a wall on a phone — Dai Dai and
                // Last Last each push past a dozen and a board artist can go
                // further. Past 15 the row folds: the twelve biggest show, a
                // "+N" chip opens the rest in place, "− less" folds it back.
                // Thresholds live here on purpose: fold at >15, show 12, so
                // the chip never appears just to hide two badges.
                const sorted = [...r.certs].sort(
                  (x, y) => Number(lit(y)) - Number(lit(x)) || badgeWeight(y) - badgeWeight(x)
                );
                const folded = sorted.length > 15 && !openBadges.has(r.title);
                return (folded ? sorted.slice(0, 12) : sorted);
              })()
                .map((c) => {
                  // Keyed off the level itself. tierOf() returns a lowercase
                  // slug ("gold"), which never matched this map — every badge
                  // was falling through to silver.
                  const ink = INK[c.level as Tier] ?? INK.Silver;
                  return (
                    <span
                      key={`${c.c}-${c.level}-${c.x ?? 1}`}
                      className={lit(c) ? styles.badge : `${styles.badge} ${styles.badgeDim}`}
                      style={{ color: ink, borderColor: ink }}
                      title={c.provenance ? `${countries[c.c].name} — ${c.body ?? countries[c.c].body}, ${c.provenance}` : undefined}
                    >
                      <span className={styles.flag}>{countries[c.c].flag}</span>
                      {/* awardLabel: "4× Platinum + Gold" keeps the half
                          step AMPROFON prints on top — the explorer's words. */}
                      {awardLabel(c)}
                      {c.body && plaqueMarker(c, countries[c.c].body) && (
                        <span className={isIssuerMarker(c.body) ? `${styles.badgeProgram} ${styles.badgeIssuer}` : styles.badgeProgram}>
                          {plaqueMarker(c, countries[c.c].body)}
                        </span>
                      )}
                    </span>
                  );
                })}
              {r.certs.length > 15 && (
                <button
                  type="button"
                  className={styles.badgeMore}
                  aria-expanded={openBadges.has(r.title)}
                  onClick={() =>
                    setOpenBadges((prev) => {
                      const next = new Set(prev);
                      if (next.has(r.title)) next.delete(r.title);
                      else next.add(r.title);
                      return next;
                    })
                  }
                >
                  {openBadges.has(r.title) ? "− less" : `+${r.certs.length - 12}`}
                </button>
              )}
            </div>
          </div>
          </Fragment>
          );
        })}
      </div>
      )}

      {/* The whole ledger is here — the button opens the rest in place rather
          than sending a phone reader to the desktop table. It only appears
          when there is actually something left to reveal: filtering to
          Diamond leaves six releases, all of them already on screen.
          Folding back holds the button under the finger (lib/holdInPlace):
          the rows it removes sit ABOVE it, so the page shrank by ~8,000px
          under a reader at the foot of the list and the browser left them on
          the FAQ, the button 187px off the top on Wizkid's phone page and
          4,973px on /certifications (V-afrobeats-01, debug pass 5 Oct 2026).
          Opening is left alone: the new rows land below row 10, where the
          reader is about to read on. */}
      {matching.length > ROWS_SHOWN && (
        <button
          type="button"
          className={styles.allBtn}
          aria-expanded={expanded}
          onClick={(e) =>
            expanded ? holdInPlace(e.currentTarget, () => setExpanded(false)) : setExpanded(true)
          }
        >
          {expanded ? `Show the top ${ROWS_SHOWN}` : `All ${matching.length} releases`}
          <span aria-hidden="true">{expanded ? null : `+${hidden}`}</span>
        </button>
      )}

      {/* The two other boards, side by side. The desktop page carries these as
          full-width panels, but both sat inside .desktopOnly — so on a phone
          this screen was a dead end: no way to reach the chart peaks or the
          live board without going back out through the hub. Under the ledger
          is where they belong, because that is the point a reader has finished
          with the plaques and wants the next kind of record. */}
      {(chartsHref || liveHref) && (
        <div className={styles.boards}>
          {chartsHref && (
            <Link href={chartsHref} className={styles.boardBtn}>
              <span className={styles.boardTop}>
                <span className={styles.boardLabel}>Chart peaks</span>
                <span className={styles.boardGo} aria-hidden="true">↗</span>
              </span>
              {chartsNote && <span className={styles.boardNote}>{chartsNote}</span>}
            </Link>
          )}
          {liveHref && (
            <Link href={liveHref} className={`${styles.boardBtn} ${styles.boardLive}`}>
              <span className={styles.boardTop}>
                <span className={styles.boardDot} aria-hidden="true" />
                <span className={styles.boardLabel}>Live charts</span>
                <span className={styles.boardGo} aria-hidden="true">↗</span>
              </span>
              {liveNote && <span className={styles.boardNote}>{liveNote}</span>}
            </Link>
          )}
        </div>
      )}

      {/* The pair pages, linked by their own URLs — the desktop half carries
          the same list. Plain links in the screen's existing label and lede
          styles (E-10, Paul, 24 Sep 2026). Folded by default on the phone
          (Paul, 25 Sep 2026): with 19 names it ran four rows of links. A native
          <details>, so every link is still served and crawlable, and it needs
          no script. */}
      {compareWith && compareWith.length > 0 && (
        <nav className={styles.logHead} aria-label={`Compare ${subject} with…`}>
          <details className={styles.compareFold}>
            <summary className={`${styles.logKicker} ${styles.compareSummary}`}>
              Compare with…
              <span className={styles.compareCount}>{count(compareWith.length, "artist", "artists")}</span>
              <span className={styles.compareChevron} aria-hidden="true">▾</span>
            </summary>
            {/* Each artist as one of the screen's own pills, not an underlined
                link (Paul, 25 Sep 2026). */}
            <ul className={styles.compareChips}>
              {compareWith.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={`${styles.chip} ${styles.compareChip}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </details>
        </nav>
      )}

      {/* The country boards, in the "Compare with…" fold's own pattern and
          pills — the desktop half carries the same list. Counted as markets,
          /compare/in's own word: a board is every artist's plaques in one
          market, and one of them (Mexico) holds none of his, so "27 countries"
          sat under a hero reading 26 countries (live-site debug, 26 Sep 2026). */}
      {countryBoards && countryBoards.length > 0 && (
        <nav className={styles.logHead} aria-label="Certified units by country">
          <details className={styles.compareFold}>
            <summary className={`${styles.logKicker} ${styles.compareSummary}`}>
              Certified units by country…
              <span className={styles.compareCount}>{count(countryBoards.length, "market", "markets")}</span>
              <span className={styles.compareChevron} aria-hidden="true">▾</span>
            </summary>
            <ul className={styles.compareChips}>
              {countryBoards.map((c) => (
                <li key={c.href}>
                  <Link href={c.href} className={`${styles.chip} ${styles.compareChip}`}>{c.name}</Link>
                </li>
              ))}
            </ul>
          </details>
        </nav>
      )}

      {/* ── The dated log ─────────────────────────────────────────── */}
      {history.length > 0 && (
      <section className={styles.log}>
        <div className={styles.logHead}>
          <div className={styles.logKicker}>The dated log</div>
          <h2 className={styles.logTitle}>Certifications by year</h2>
          <p className={styles.logLede}>
            Each international announcement as it landed — a release can appear twice in a
            year if it was certified at two tiers. {logLedeTail(view)}
          </p>
        </div>

        <ScrollRail className={styles.rail} label="Filter the log by year">
          {YEARS.map((y) => (
            <button
              key={y}
              type="button"
              className={`${styles.chip} ${year === y ? styles.chipOn : ""}`}
              aria-pressed={year === y}
              onClick={() => setYear(y)}
            >
              {y}
              <span className={styles.chipSep} aria-hidden="true">·</span>
              <span className={styles.chipCount}>{yearCounts[y] ?? 0}</span>
              <span className="visuallyHidden">certifications</span>
            </button>
          ))}
        </ScrollRail>

        <div className={styles.list}>
          {events.map((e, i) => {
            const ink = INK[e.level as Tier] ?? INK.Silver;
            return (
              <div key={`${e.title}-${e.country}-${i}`} className={styles.eventRow}>
                <div className={styles.rowMain}>
                  <div className={styles.eventTitle}>{e.title}</div>
                  <div className={styles.rowMeta}>
                    {[e.album ? "Album" : e.credit, e.body ?? countries[e.country].body]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                </div>
                <span className={styles.badge} style={{ color: ink, borderColor: ink }}>
                  <span className={styles.flag}>{countries[e.country].flag}</span>
                  {awardLabel(e)}
                </span>
              </div>
            );
          })}
        </div>
      </section>
      )}

      {/* The last content section, which is where the artist page's desktop
          layout puts it too: plaques, then the boards, then the questions a
          reader arrives with. A board artist passes history={[]}, so on those
          screens this follows the two board links directly. */}
      {faqs && faqs.length > 0 && (
        <MobileFaqSection title="Common questions" items={faqs} />
      )}

      <div className={styles.spacer} />

      {/* Action bar — replaces the tab bar on a deep screen */}
      {showActionBar && (
      <div className={styles.actionBar}>
        {/* Compare is the bar's one gold action, for every artist on the
            roster. Beside it, in the secondary style, "Biggest shows": the
            box-office board opened on this artist's nights — only where they
            have one. On Burna Boy's screen it took the Stat card's place (the
            owner, 4 Oct 2026: phone only; the desktop keeps its stat card). */}
        <Link href={`/compare?a=${compareSlug}`} className={styles.actionPrimary}>
          {compareSlug === "burna-boy" ? "Compare ↗" : `Compare ${subject} ↗`}
        </Link>
        {showsHref && (
          // "Biggest shows", read "Shows" under 390px: the long word is only
          // visually hidden there, so the accessible name never changes. One
          // inline run inside the flex link: as two flex items, the space
          // after "Biggest" was trimmed and the label read "BIGGESTSHOWS".
          <Link href={showsHref} className={styles.actionSecondary}>
            <span>
              <span className={styles.showsLong}>{SHOWS_LABEL.slice(0, -SHOWS_SHORT.length)}</span>
              {SHOWS_LABEL.slice(-SHOWS_SHORT.length)}
            </span>
          </Link>
        )}
        {/* The filter icon, except on a board artist's bar that carries the
            shows button: a named Compare ("Compare Tiwa Savage ↗"), the shows
            button and the icon cannot share one line at 320, so the icon gives
            way there — the tier rail it scrolls to is on this screen. His bar
            ("Compare ↗") keeps it, as does every bar without the button. */}
        {/* A view that holds nothing has no tier rail (round 2, item 24), so
            no icon that scrolls to it either (B-11: BNXN with both switches
            off offered one that did nothing). The scroll is instant under
            reduced motion (E-13): the global reduce rule cannot stop a
            scripted smooth scroll. */}
        {shownTotal > 0 && (!showsHref || compareSlug === "burna-boy") && (
        <button
          type="button"
          aria-label="Filter by tier"
          className={styles.actionIcon}
          onClick={() =>
            document.getElementById("cert-rail")?.scrollIntoView({
              behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
            })
          }
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 7h16M7 12h10M10 17h4" />
          </svg>
        </button>
        )}
      </div>
      )}
    </div>
  );
}
