import Link from "next/link";
import styles from "./mobileAfrobeatsHub.module.css";
import BackLink from "./BackLink";
import MobileMenuButton from "./MobileMenuButton";
import ScrollRail from "./ScrollRail";

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
          <span
            className={styles.doorArt}
            style={{ backgroundImage: `url(${burna.image})` }}
            aria-hidden="true"
          />
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
              <span className={styles.doorLink}>His full record — this site →</span>
            </span>
          </span>
        </Link>
      </div>

      <div className={styles.wallPad}>
        <div className={styles.wall}>
          {artists.map((a) => (
            <Link key={a.slug} href={`/afrobeats/${a.slug}`} className={styles.tile}>
              <span
                className={styles.art}
                style={{ backgroundImage: `url(${a.image})` }}
                aria-hidden="true"
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
            >
              {r.name} <span className={styles.pillNumLive}>{r.value}</span>
            </Link>
          ))}
        </ScrollRail>
        <p className={styles.railNote}>{liveNote}</p>
      </div>

      <div className={styles.foot}>
        <p>
          Counted under the rules on the <Link href="/methodology#principles">methodology page</Link>.
          Last read at source {sweptRange}.
        </p>
      </div>
    </div>
  );
}
