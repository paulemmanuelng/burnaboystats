"use client"; // the tier rail filters the list

import { useState, useEffect, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./mobileCerts.module.css";
import { badgeWeight } from "../lib/certs";
import ScrollRail from "./ScrollRail";
import { titleKey } from "../lib/titleKey";
import { coverFor } from "../lib/covers";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";
import { count } from "../lib/plural";
import { BLANK_PIXEL } from "../lib/blankPixel";
import { portraitArtFor } from "../lib/portraitArt";
import { certHistoryYears } from "../data/certifications";
import type { CertEvent, Country, Release } from "../data/certifications";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";
import MobileFaqSection from "./MobileFaqSection";
import type { Faq } from "./FaqList";

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
const INK: Record<Tier, string> = {
  Diamond: "#8fe3f0",
  Platinum: "#dfe2e8",
  Gold: "#ffb627",
  Silver: "#b8bcc4",
};
const GRAD: Record<Tier, string> = {
  Diamond: "linear-gradient(90deg,#4fb9cc,#8fe3f0)",
  Platinum: "linear-gradient(90deg,#9aa1ad,#dfe2e8)",
  Gold: "linear-gradient(90deg,#ff7a1a,#ffd24a)",
  Silver: "linear-gradient(90deg,#7e828a,#b8bcc4)",
};

const ROWS_SHOWN = 10;

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
   * Only /afrobeats/[artist] passes any: those fifteen pages emit the node at
   * every width while their visible copy sat in the page's `.desktopOnly`
   * half, which is display:none on a phone. Burna Boy's /certifications, this
   * component's other caller, emits no FAQPage and passes nothing — which is
   * what keeps that screen untouched.
   */
  faqs?: Faq[];
  /** The board's screens end in the five-tab bar instead of an action bar. */
  showActionBar?: boolean;
}) {
  const art = (title: string) => (covers ? covers[title] : coverFor(title));
  // The list runs albums, singles and features together, so an album needs
  // saying — on desktop the three are separate sections and the grouping does
  // this job for free.
  const albumTitles = new Set(albums.map((a) => titleKey(a.title)));
  const portraitArt = portraitArtFor(portraitSlug ?? "burna-boy");
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

  // Read the deep link once on mount — client-only, exactly as CertExplorer
  // does it, so /certifications stays statically rendered. The FRAGMENT is the
  // live form; the query string is still read so older links keep working (see
  // CertExplorer for why the crawlable ?release= variant was retired). The
  // focused release is un-folded at the same time: the bar promises "every
  // certification", and Dai Dai's would otherwise stay behind the "+N" chip.
  useEffect(() => {
    const fromHash = new URLSearchParams(window.location.hash.replace(/^#/, "")).get("release");
    const r = fromHash ?? new URLSearchParams(window.location.search).get("release");
    if (!r) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount read of a browser-only URL param
    setFocus(r);
    setOpenBadges(new Set([r]));
  }, []);

  const tierCount = TIER_ORDER.reduce<Record<Tier, number>>(
    (acc, name) => {
      acc[name] = releases.reduce(
        (n, r) => n + r.certs.filter((c) => c.level === name).length,
        0
      );
      return acc;
    },
    { Diamond: 0, Platinum: 0, Gold: 0, Silver: 0 }
  );
  const maxTier = Math.max(...TIER_ORDER.map((t) => tierCount[t]));

  const matching = releases
    .filter((r) => (!focus || r.title === focus) && (!tier || r.certs.some((c) => c.level === tier)))
    .slice()
    // Albums lead, then the songs — each block running most-certified to
    // least. The blocks aren't labelled; the ALBUM tag on each album row is
    // what carries the split.
    .sort((a, b) => {
      const aAlbum = albumTitles.has(titleKey(a.title)) ? 0 : 1;
      const bAlbum = albumTitles.has(titleKey(b.title)) ? 0 : 1;
      return aAlbum - bAlbum || b.certs.length - a.certs.length;
    });
  const rows = expanded ? matching : matching.slice(0, ROWS_SHOWN);
  const hidden = matching.length - rows.length;

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
        <span className={styles.backCount}>{total}</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
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
                783px render: a soft hero where the background always fetched 640. */}
            {/* Preload, media-gated to phones. React hoists this into <head>, which
                is the earliest a fetch can possibly start — earlier even than the
                scanner reaching this element. Worth doing because of an accident
                this conversion removed: the desktop hero used to be an EAGER <img>
                on the same URL, so phones were quietly riding its fetch. Now that
                the desktop copy is correctly lazy and on a smaller rung, the phone
                has to ask for its own, and this is what keeps that ask early. */}
            <link
              rel="preload"
              as="image"
              imageSrcSet={spotifySrcSet(portrait)}
              imageSizes="190vw"
              media="(max-width: 900px)"
            />
            <picture style={{ display: "contents" }}>
              <source media="(max-width: 900px)" srcSet={spotifySrcSet(portrait)} sizes="190vw" />
            { }
            <img
              className={portraitArt.mode === "emblem" ? `${styles.heroArt} ${styles.heroArtEmblem}` : styles.heroArt}
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
            <span className={styles.heroScrim} aria-hidden="true" />
          </>
        )}
        <div className={styles.kicker}>Certified worldwide</div>
        {/* The page's <h1>. Screen 02 leads with the total rather than a worded
            title, so the total IS the heading — it reads "221 awards, 25
            countries". Both layouts sit in the DOM at once, so the document
            carries two h1s, one per layout, and only ever one is visible. */}
        <h1 className={styles.totalRow}>
          {/* Whose numbers these are. The desktop <h1> on this screen's other
              caller names the artist outright, but the desktop layout is
              display:none on a phone and so is out of the accessibility tree
              entirely — which left every one of the board's artist pages with
              a single <h1> reading "103 awards / 21 countries" and no name in
              it. Nothing to look at changes; the heading just stops being
              anonymous to anyone navigating by heading. */}
          <span className="visuallyHidden">{subject}: </span>
          <span className={styles.total}>{total}</span>
          <span className={styles.totalUnit}>
            awards
            <br />
            {countryCount} {countryCount === 1 ? "country" : "countries"}
          </span>
        </h1>
        <p className={styles.lede}>
          {lede ??
            `Silver, Gold, Platinum and Diamond awards from the RIAA, BPI, SNEP, Music Canada and ${countryCount - 4} more — across ${releases.length} certified releases.`}
        </p>

        <div className={styles.tierList}>
          {TIER_ORDER.filter((name) => tierCount[name] > 0).map((name) => (
            <div key={name} className={styles.tierRow}>
              <div className={styles.tierTop}>
                <span className={styles.tierName} style={{ color: INK[name] }}>{name}</span>
                <span className={styles.tierCount}>{tierCount[name]}</span>
                <span className={styles.tierPct}>
                  {Math.round((tierCount[name] / total) * 100)}%
                </span>
              </div>
              <div className={styles.tierTrack}>
                <div
                  className={styles.tierFill}
                  style={{ width: `${(tierCount[name] / maxTier) * 100}%`, background: GRAD[name] }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The deep-linked focus, announced the way the desktop explorer announces
          it. Sits above the tier rail and above the list, so a #release= that
          matches nothing still leaves a way back to the full ledger. */}
      {focus && (
        <div className={styles.focusBar}>
          <span>
            Showing every certification for <b>{focus}</b>
          </span>
          <button type="button" className={styles.focusClear} onClick={() => setFocus(null)}>
            Show all releases ✕
          </button>
        </div>
      )}

      {/* Tier rail */}
      <ScrollRail id="cert-rail" className={styles.rail} label="Filter by certification tier">
        <button
          type="button"
          className={`${styles.chip} ${!tier ? styles.chipOn : ""}`}
          onClick={() => setTier(null)}
        >
          {!tier ? null : <span className={styles.chipDot} style={{ background: INK.Gold }} />}
          All {total}
        </button>
        {TIER_ORDER.filter((name) => tierCount[name] > 0).map((name) => (
          <button
            key={name}
            type="button"
            className={`${styles.chip} ${tier === name ? styles.chipOn : ""}`}
            style={tier === name ? undefined : { color: INK[name] }}
            onClick={() => setTier(tier === name ? null : name)}
          >
            {tier === name ? null : <span className={styles.chipDot} style={{ background: INK[name] }} />}
            {name} {tierCount[name]}
          </button>
        ))}
      </ScrollRail>

      <div className={styles.listLabel}>Most-certified releases</div>

      <div className={styles.list}>
        {rows.map((r, i) => (
          // Deliberately not interactive: the row already shows every one of
          // the release's certifications, so a tap has nothing to reveal. It
          // linked to /certifications?release=… for a while, which on a phone
          // only re-navigated the same page and jumped to the top.
          <div key={r.title} className={styles.row}>
            <div className={styles.rowTop}>
              <span className={styles.rank}>{String(i + 1).padStart(2, "0")}</span>
              {/* Same treatment as the live-charts rows: the release's art,
                  resolved by title, riding between rank and name. */}
              <span
                className={styles.rowCover}
                aria-hidden="true"
                style={{ backgroundImage: `url(${spotifyImage(art(r.title) ?? "", 300)})` }}
              />
              <div className={styles.rowMain}>
                <div className={styles.rowTitle}>
                  {r.title}
                  {albumTitles.has(titleKey(r.title)) && (
                    <span className={styles.albumTag}>Album</span>
                  )}
                </div>
                <div className={styles.rowMeta}>
                  {[r.credit, r.year].filter(Boolean).join(" · ")}
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
                const sorted = [...r.certs].sort((x, y) => badgeWeight(y) - badgeWeight(x));
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
                      className={styles.badge}
                      style={{ color: ink, borderColor: ink }}
                    >
                      <span className={styles.flag}>{countries[c.c].flag}</span>
                      {c.x ? `${c.x}× ` : ""}
                      {c.level}
                      {c.body && c.body !== countries[c.c].body && (
                        <span className={styles.badgeProgram}>
                          {c.body.replace(countries[c.c].body, "").trim() || c.body}
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
        ))}
      </div>

      {/* The whole ledger is here — the button opens the rest in place rather
          than sending a phone reader to the desktop table. It only appears
          when there is actually something left to reveal: filtering to
          Diamond leaves six releases, all of them already on screen. */}
      {matching.length > ROWS_SHOWN && (
        <button
          type="button"
          className={styles.allBtn}
          aria-expanded={expanded}
          onClick={() => setExpanded((o) => !o)}
        >
          {expanded ? `Show the top ${ROWS_SHOWN}` : `All ${matching.length} releases`}
          <span aria-hidden="true">{expanded ? "↑" : `+${hidden}`}</span>
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

      {/* ── The dated log ─────────────────────────────────────────── */}
      {history.length > 0 && (
      <section className={styles.log}>
        <div className={styles.logHead}>
          <div className={styles.logKicker}>The dated log</div>
          <h2 className={styles.logTitle}>Certifications by year</h2>
          <p className={styles.logLede}>
            Each international announcement as it landed — a release can appear twice in a
            year if it was certified at two tiers. Nigeria’s TCSN plaques count in the
            totals and the country grid, not in this log.
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
                    {[e.album ? "Album" : e.credit, countries[e.country].body]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                </div>
                <span className={styles.badge} style={{ color: ink, borderColor: ink }}>
                  <span className={styles.flag}>{countries[e.country].flag}</span>
                  {e.x ? `${e.x}× ` : ""}
                  {e.level}
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
          fifteen screens this follows the two board links directly. */}
      {faqs && faqs.length > 0 && (
        <MobileFaqSection title="Common questions" items={faqs} />
      )}

      <div className={styles.spacer} />

      {/* Action bar — replaces the tab bar on a deep screen */}
      {showActionBar && (
      <div className={styles.actionBar}>
        <Link href="/share" className={styles.actionPrimary}>
          Make a stat card ↗
        </Link>
        <button
          type="button"
          aria-label="Filter by tier"
          className={styles.actionIcon}
          onClick={() => document.getElementById("cert-rail")?.scrollIntoView({ behavior: "smooth" })}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 7h16M7 12h10M10 17h4" />
          </svg>
        </button>
      </div>
      )}
    </div>
  );
}
