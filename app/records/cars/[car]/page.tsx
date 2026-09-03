import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from "./car.module.css";
import KeepExploring from "../../../components/KeepExploring";
import MobileMenuButton from "../../../components/MobileMenuButton";
import BackLink from "../../../components/BackLink";
import { pageMetadata, CANONICAL_ORIGIN } from "../../../lib/seo";
import { carBySlug, carSlugs, garage } from "../../../data/cars";
import {
  modelShort,
  usdFull,
  rankLabel,
  carTitle,
  carDescription,
  performanceBars,
  specRows,
  neighbours,
} from "../../../lib/garage";

// Only the fifteen current cars are routes — anything else 404s. The five no
// longer counted have no slug, no image and no page (spec §7.3).
export const dynamicParams = false;

export function generateStaticParams() {
  return carSlugs.map((car) => ({ car }));
}

export async function generateMetadata({ params }: { params: Promise<{ car: string }> }) {
  const { car: slug } = await params;
  const car = carBySlug(slug);
  if (!car) return {};
  return pageMetadata({
    title: carTitle(car),
    description: carDescription(car),
    path: `/records/cars/${car.slug}`,
    shareTitle: `${car.make} ${modelShort(car.model)} — Burna Boy's cars`,
    shareDescription: `Reported value ${usdFull(car.valueUsd)} · ${car.valueNaira}. Ranked ${car.rank} of ${garage.length} in the garage.`,
  });
}

/* The floor under the hero — the frame's dimension ring, rebuilt as geometry
   with NO numerals (spec §5.2). Copied from the design file verbatim. */
function Floor() {
  return (
    <svg className={styles.floor} viewBox="0 0 1200 632" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <radialGradient id="carFloorGlow" cx="50%" cy="62%" r="55%">
          <stop offset="0" stopColor="rgba(224,138,46,0.16)" />
          <stop offset="0.55" stopColor="rgba(224,138,46,0.04)" />
          <stop offset="1" stopColor="rgba(224,138,46,0)" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="1200" height="632" fill="url(#carFloorGlow)" />
      <g stroke="rgba(245,240,232,0.06)" strokeWidth="1">
        <path d="M 600,150 L 60,632" />
        <path d="M 600,150 L 1140,632" />
        <path d="M 600,150 L 300,632" />
        <path d="M 600,150 L 900,632" />
        <line x1="0" y1="392" x2="1200" y2="392" />
        <line x1="0" y1="470" x2="1200" y2="470" />
        <line x1="0" y1="560" x2="1200" y2="560" />
      </g>
      <ellipse cx="600" cy="452" rx="470" ry="118" fill="none" stroke="rgba(224,138,46,0.55)" strokeWidth="1.2" />
      <ellipse cx="600" cy="452" rx="470" ry="118" fill="none" stroke="rgba(224,138,46,0.18)" strokeWidth="6" />
      <ellipse cx="600" cy="452" rx="392" ry="96" fill="none" stroke="rgba(224,138,46,0.22)" strokeWidth="1" strokeDasharray="3 9" />
      <g stroke="rgba(224,138,46,0.5)" strokeWidth="1">
        <line x1="130" y1="452" x2="1070" y2="452" strokeDasharray="2 6" />
        <line x1="1010" y1="230" x2="1010" y2="410" />
        <line x1="1002" y1="230" x2="1018" y2="230" />
        <line x1="1002" y1="410" x2="1018" y2="410" />
      </g>
    </svg>
  );
}

/* The ring at phone and tablet widths, drawn in the hero image's own box.
   Its viewBox is the hero canvas and cy is the canvas's ground line — 475 of
   660 — so the car's tyres land on the ellipse by construction, at any size. */
function Ring() {
  return (
    <svg className={styles.ring} viewBox="0 0 898 660" preserveAspectRatio="none" aria-hidden="true">
      <ellipse cx="449" cy="475" rx="406" ry="106" fill="none" stroke="rgba(224,138,46,0.5)" strokeWidth="2" />
      <ellipse cx="449" cy="475" rx="406" ry="106" fill="none" stroke="rgba(224,138,46,0.16)" strokeWidth="11" />
      <ellipse cx="449" cy="475" rx="337" ry="88" fill="none" stroke="rgba(224,138,46,0.2)" strokeWidth="2" strokeDasharray="7 18" />
      <line x1="0" y1="475" x2="898" y2="475" stroke="rgba(245,240,232,0.06)" strokeWidth="2" />
    </svg>
  );
}

export default async function CarPage({ params }: { params: Promise<{ car: string }> }) {
  const { car: slug } = await params;
  const car = carBySlug(slug);
  if (!car) notFound();

  const short = modelShort(car.model);
  const name = `${car.make} ${short}`;
  const total = garage.length;
  const { prev, next } = neighbours(car);
  const bars = performanceBars(car);
  const rows = specRows(car);
  // Pre-filled from manufacturer figures and unread by a person: the rows stay
  // behind one line until someone has checked each against the linked sheet.
  const pending = !car.specs.verified;
  const baseModel = car.specs.basis === "base model";
  const yearLine = car.year ? `Model year ${car.year}` : "Model year not reported";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: CANONICAL_ORIGIN },
      { "@type": "ListItem", position: 2, name: "Career Records", item: `${CANONICAL_ORIGIN}/records` },
      { "@type": "ListItem", position: 3, name: "Car Collection", item: `${CANONICAL_ORIGIN}/records/cars` },
      { "@type": "ListItem", position: 4, name: name, item: `${CANONICAL_ORIGIN}/records/cars/${car.slug}` },
    ],
  };

  const navCell = (c: typeof prev, dir: "prev" | "next") => (
    <Link
      href={`/records/cars/${c.slug}`}
      className={`${styles.navCell} ${dir === "next" ? styles.navNext : ""}`}
      aria-label={`${dir === "prev" ? "Previous" : "Next"} car: ${c.make} ${modelShort(c.model)}, ranked ${c.rank}`}
    >
      <Image
        className={styles.navThumb}
        src={c.image.preview.src}
        width={84}
        height={52}
        sizes="84px"
        alt=""
        aria-hidden="true"
      />
      <span className={styles.navText}>
        <span className={styles.navRank}>
          {dir === "prev" ? `← ${rankLabel(c.rank)}` : `${rankLabel(c.rank)} →`}
        </span>
        <span className={styles.navName}>{c.make} {modelShort(c.model)}</span>
      </span>
    </Link>
  );

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav className={styles.crumbs} aria-label="Breadcrumb">
        <Link href="/records">Career records</Link>
        <span aria-hidden="true">/</span>
        <Link href="/records/cars">Car collection</Link>
        <span aria-hidden="true">/</span>
        <span className={styles.crumbCurrent}>{name}</span>
      </nav>

      {/* The phone's back bar, in place of the crumbs. */}
      <div className={styles.mobileBackBar}>
        <BackLink href="/records/cars" aria-label="Back to the car collection" className={styles.mobileBackBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.mobileBackLabel}>{name}</span>
        <span className={styles.mobileBackRank}>{rankLabel(car.rank)} / {total}</span>
        <MobileMenuButton />
      </div>

      {/* ── The stage: the frame's composition as a grid ──────────
          Desktop: 318 / 1fr / 318, the floor behind. Tablet: one column.
          Phone: the same blocks, reordered top to bottom (§5.2). */}
      <div className={styles.stage}>
        <Floor />

        <div className={styles.headline}>
          <h1 className={styles.h1}>
            <span className={styles.make}>{car.make}</span>
            <span className={`${styles.model} inkText`}>{short}</span>
          </h1>
          <p className={styles.subtitle}>{car.subtitle}</p>
          {/* The 3D MODEL slot, repointed at the one figure the site holds (§5.3). */}
          <div className={styles.valueBox}>
            <span className={styles.valueUsd}>{usdFull(car.valueUsd)}</span>
            <span className={styles.valueNaira}>{car.valueNaira} · reported value</span>
          </div>
        </div>

        <figure className={styles.hero}>
          {/* The ring and the car share one box, so the tyres sit on the
              ellipse rather than near it. On desktop the ring comes from the
              stage's own floor SVG instead, and this box is positioned onto
              it — see .heroStage. */}
          <span className={styles.heroStage}>
            <Ring />
            {/* The page's LCP element. One copy at every width, so it can be a
                plain eager image with a preload. */}
            <Image
              className={styles.heroImg}
              src={car.image.hero.src}
              width={car.image.hero.width}
              height={car.image.hero.height}
              sizes="(min-width: 901px) 600px, 100vw"
              alt={car.image.alt}
              priority
            />
          </span>
          <figcaption className={styles.caption}>
            <span className={styles.captionRule} aria-hidden="true" />
            {car.image.caption}
            <span className={styles.captionRule} aria-hidden="true" />
          </figcaption>
        </figure>

        {/* Phone only: the value and the rank as two stat cells under the hero. */}
        <div className={styles.statCells}>
          <div className={styles.statCell}>
            <div className={styles.statValue}>{usdFull(car.valueUsd)}</div>
            <div className={styles.statLabel}>{car.valueNaira} · reported</div>
          </div>
          <div className={styles.statCell}>
            <div className={`${styles.statValue} ${styles.statGold}`}>
              {rankLabel(car.rank)}<span className={styles.statOf}> / {total}</span>
            </div>
            <div className={styles.statLabel}>Rank by value</div>
          </div>
        </div>

        <section className={styles.specs} aria-labelledby="car-specs">
          <div className={styles.card}>
            <div className={styles.cardHead}>
              <h2 id="car-specs" className={styles.cardTitle}>Specifications</h2>
              {baseModel && (
                <span
                  className={styles.baseTag}
                  title="Figures are for the standard production model; this car is a one-off build"
                >
                  Base model
                </span>
              )}
            </div>
            {pending ? (
              <p className={styles.pendingRow}>Specifications pending verification.</p>
            ) : (
              rows.map((r) => (
                <div key={r.k} className={styles.specRow}>
                  <span className={styles.specKey}>{r.k}</span>
                  <span className={styles.specVal}>{r.v}</span>
                </div>
              ))
            )}
            <a
              className={styles.specSource}
              href={car.specs.source}
              target="_blank"
              rel="noopener noreferrer"
            >
              Manufacturer figures <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <div className={styles.livery}>
          <div className={styles.liveryHead}>
            <span className={styles.cardTitle}>Livery</span>
            <span className={styles.liveryMeta}>sampled from the illustration</span>
          </div>
          <div className={styles.swatches} aria-hidden="true">
            {car.palette.map((hex) => (
              <span key={hex} className={styles.swatch} style={{ background: hex }} />
            ))}
          </div>
        </div>

        <section className={styles.performance} aria-labelledby="car-perf">
          <div className={`${styles.card} ${styles.perfCard}`}>
            <div className={styles.perfHead}>
              <h2 id="car-perf" className={styles.cardTitle}>Performance</h2>
              <span className={styles.perfBasis}>vs this garage</span>
            </div>
            <div className={styles.bars}>
              {bars.map((b) => (
                <div key={b.key} className={styles.bar} role="img" aria-label={b.aria}>
                  <span className={styles.barKey}>{b.key}</span>
                  <span className={styles.barTrack}>
                    <span className={styles.barFill} style={{ width: `${Math.round(b.share * 100)}%` }} />
                  </span>
                  <span className={`${styles.barVal} ${b.pending ? styles.barPending : ""}`}>{b.value}</span>
                </div>
              ))}
            </div>
            <p className={styles.perfNote}>
              Each bar is this car&apos;s figure as a share of the strongest in the collection — a comparison, not a score.
            </p>
          </div>
        </section>

        <div className={styles.below}>
          {/* The two things the frames left out (§8): the provenance paragraph
              and the value. */}
          <div className={styles.provenance}>
            <div className={styles.provKicker}>Why it&apos;s on this list</div>
            <p className={styles.provText}>{car.desc}</p>
            <div className={styles.provMeta}>
              <span>Rank <b className={styles.provRank}>{rankLabel(car.rank)}</b> of {total} by reported value</span>
              <span>{yearLine}</span>
              <span>Last re-verified July 2026</span>
            </div>
          </div>

          {/* BUILD YOURS → SOURCE (§5.3): the car's verification link. Without
              one, the slot says how the list is sourced — never an empty box,
              and not a link. */}
          {car.link ? (
            <a className={styles.source} href={car.link} target="_blank" rel="noopener noreferrer">
              <span className={styles.sourceText}>
                <span className={styles.sourceKicker}>Source</span>
                <span className={styles.sourceLabel}>{car.linkLabel ?? "See Burna in it"}</span>
              </span>
              <span className={styles.sourceArrow} aria-hidden="true">→</span>
            </a>
          ) : (
            <div className={`${styles.source} ${styles.sourceNone}`}>
              <span className={styles.sourceText}>
                <span className={`${styles.sourceKicker} ${styles.sourceKickerNone}`}>Sourcing</span>
                <span className={styles.sourceLabel}>Press &amp; sightings — see the list note</span>
              </span>
              <span className={`${styles.sourceArrow} ${styles.sourceArrowNone}`} aria-hidden="true">→</span>
            </div>
          )}
        </div>

        {/* Previous / next in rank order, wrapping at both ends. */}
        <nav className={styles.garageNav} aria-label="Previous and next car">
          {navCell(prev, "prev")}
          {navCell(next, "next")}
        </nav>
      </div>

      <div className={styles.desktopOnly}>
        <KeepExploring current="/records/cars" />
      </div>
    </main>
  );
}
