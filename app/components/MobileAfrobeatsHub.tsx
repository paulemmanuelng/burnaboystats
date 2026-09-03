import Link from "next/link";
import styles from "./mobileAfrobeatsHub.module.css";
import BackLink from "./BackLink";
import MobileMenuButton from "./MobileMenuButton";
import ScrollRail from "./ScrollRail";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";
import { BLANK_PIXEL } from "../lib/blankPixel";

/**
 * Mobile screen for /afrobeats.
 *
 * The phone used to get the desktop grid squeezed by media queries: four
 * columns down to two, tiles cropped, Burna the first half-width cell among ten
 * — the least differentiated he is anywhere on the site, on the one page whose
 * job is to place him against the field.
 *
 * The design's structural change is the door: Burna is a full-width card above
 * the wall, in colour, gold-bordered, leading to the site itself. The nine
 * behind him are a two-up wall of greyed tiles. Nothing on this screen holds
 * state — the wall is the whole field at once, which is the point.
 */

export interface HubTile {
  slug: string;
  name: string;
  flag: string;
  image: string;
  certs: number;
  countries: number;
  badge: string | null;
}

export interface HubPill {
  key: string;
  name: string;
  href: string;
  value: number;
  isBurna: boolean;
}

export default function MobileAfrobeatsHub({
  boardCount,
  burna,
  artists,
  chartRail,
  liveRail,
  sweptRange,
  liveNote,
}: {
  boardCount: number;
  burna: { name: string; flag: string; image: string; href: string; certs: number; countries: number };
  artists: HubTile[];
  chartRail: HubPill[];
  liveRail: HubPill[];
  sweptRange: string;
  liveNote: string;
}) {
  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back home" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>The Afrobeats Board</span>
        <MobileMenuButton />
      </div>

      <div className={styles.hero}>
        <div className={styles.eyebrow}>
          <span className={styles.eyebrowRule} aria-hidden="true" />
          One rule, {boardCount} verified artists
        </div>
        <h1 className={styles.h1}>
          The Afrobeats <span className={styles.ink}>Board</span>
        </h1>
        <p className={styles.lede}>
          Where Burna Boy stands among the genre&rsquo;s biggest names — counted the same way he
          is, every figure read in the issuing body&rsquo;s own register.
        </p>
        <div className={styles.cadence}>Reviewed weekly · Burna Boy&rsquo;s pages daily</div>
      </div>

      {/* The door. He is not a cell in the wall — he is the way into the site. */}
      <div className={styles.doorPad}>
        <Link href={burna.href} className={styles.door}>
          {/* A real <img>, not a CSS background. The preload scanner cannot see a
              background-image, so this one — the largest thing on the screen and
              this page's LCP element — did not begin downloading until CSS had
              parsed and the box had been laid out. As an <img> it is discovered
              while the HTML is still streaming, and the priority hint puts it
              ahead of the nine greyed tiles behind it. */}
          {/* Gated behind a media query for the same reason the hero portrait is:
              this screen is display:none on desktop, where a hidden EAGER <img>
              would still be fetched though the old background never was. The
              scanner reads `media` before fetching, so desktop takes the 1x1. */}
          {/* Same reasoning as the certs hero: hoisted into <head> by React, gated
              to phones so desktop never fetches it. This is the board's LCP. */}
          <link
            rel="preload"
            as="image"
            imageSrcSet={spotifySrcSet(burna.image)}
            imageSizes="calc(100vw - 36px)"
            media="(max-width: 900px)"
          />
          <picture style={{ display: "contents" }}>
            <source
              media="(max-width: 900px)"
              srcSet={spotifySrcSet(burna.image)}
              sizes="calc(100vw - 36px)"
            />
            { }
            <img
              className={styles.doorArt}
              src={BLANK_PIXEL}
              alt=""
              aria-hidden="true"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <span className={styles.doorScrim} aria-hidden="true" />
          <span className={styles.doorBody}>
            <span className={styles.doorTop}>
              <span className={styles.flag} aria-hidden="true">{burna.flag}</span>
              <span className={styles.anchorTag}>This site</span>
            </span>
            <span className={styles.doorFoot}>
              <span className={styles.doorName}>{burna.name}</span>
              <span className={styles.doorStat}>
                <strong>{burna.certs}</strong> certifications · {burna.countries} countries
              </span>
              <span className={styles.doorLink}>His certifications, in full →</span>
            </span>
          </span>
        </Link>
      </div>

      <div className={styles.wallPad}>
        <div className={styles.wall}>
          {artists.map((a) => (
            <Link
              key={a.slug}
              href={`/afrobeats/${a.slug}`}
              className={styles.tile}
              prefetch={false}
            >
              {/* Lazy: at 412x915 only the first row of the wall is on screen, so
                  the rest no longer compete with the door for bandwidth. */}
              {/* Lazy is already enough to keep the hidden desktop layout from
                  fetching these, so no media gate is needed here. `cover` on a
                  187x220 tile fits the square by HEIGHT, so it paints 220 wide,
                  not 187 — sizes describes the render, not the box. */}
              {/* eslint-disable-next-line @next/next/no-img-element -- decorative CDN portrait */}
              <img
                className={styles.art}
                src={spotifyImage(a.image, 320)}
                srcSet={spotifySrcSet(a.image, 320)}
                sizes="calc((100vw - 39px) * 0.59)"
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
              <span className={styles.scrim} aria-hidden="true" />
              <span className={styles.tileBody}>
                <span className={styles.tileTop}>
                  <span className={styles.flag} aria-hidden="true">{a.flag}</span>
                  {a.badge ? (
                    <span className={styles.badge}>{a.badge}</span>
                  ) : (
                    <span className={styles.badgeBound}>top award</span>
                  )}
                </span>
                <span className={styles.tileFoot}>
                  <span className={styles.tileName}>{a.name}</span>
                  <span className={styles.tileStat}>
                    <strong>{a.certs}</strong> · {a.countries}{" "}
                    {a.countries === 1 ? "country" : "countries"}
                  </span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Two rails, two kinds of record, told apart by colour before the label
          is read: gold is permanent, green is this hour. */}
      <div className={styles.rails}>
        <div className={styles.railLabel}>Chart peaks · permanent record</div>
        <ScrollRail className={styles.rail} label="Chart peaks by artist">
          {chartRail.map((r) => (
            <Link
              key={r.key}
              href={r.href}
              className={r.isBurna ? `${styles.pill} ${styles.pillAnchor}` : styles.pill}
              prefetch={false}
            >
              {r.name} <span className={styles.pillNum}>{r.value}</span>
            </Link>
          ))}
        </ScrollRail>

        <div className={styles.liveLabel}>
          <span className={styles.liveDot} aria-hidden="true" />
          Charting now · rebuilt hourly
        </div>
        <ScrollRail className={styles.rail} label="Live chart placements by artist">
          {liveRail.map((r) => (
            <Link
              key={r.key}
              href={r.href}
              className={
                r.isBurna ? `${styles.pill} ${styles.pillAnchor}` : `${styles.pill} ${styles.pillLive}`
              }
              prefetch={false}
            >
              {r.name} <span className={styles.pillNumLive}>{r.value}</span>
            </Link>
          ))}
        </ScrollRail>
        <p className={styles.railNote}>{liveNote}</p>
      </div>

      <div className={styles.foot}>
        <p>
          Counted under the rules on the <Link href="/methodology">methodology page</Link>.
          Last read at source {sweptRange}.
        </p>
      </div>
    </div>
  );
}
