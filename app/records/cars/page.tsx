import Link from "next/link";
import styles from "./cars.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileDeepPage from "../../components/MobileDeepPage";
import GatedImage from "../../components/GatedImage";
import { numberWord } from "../../lib/homeData";
import { garage, currentCars, soldCars, unconfirmedCars, carCount, totalValueFormatted } from "../../data/cars";
import { usdFull, usdShort, rankLabel, modelShort, marqueTally } from "../../lib/garage";
import { pageMetadata, datasetJsonLd } from "../../lib/seo";

export const metadata = pageMetadata({
  title: `Burna Boy's Car Collection — ${carCount} Cars Worth ${totalValueFormatted}+`,
  description:
    `Every car in Burna Boy's garage, priced and sourced: ${carCount} vehicles worth a reported ${totalValueFormatted}+, led by his ₦9bn one-of-one Bugatti Chiron.`,
  path: "/records/cars",
  shareTitle: "Burna Boy's Car Collection",
  shareDescription: `${carCount} cars worth a reported ${totalValueFormatted}+, led by a ₦9bn Bugatti Chiron — every car, priced.`,
});

const carsDataset = datasetJsonLd({
  name: "Burna Boy's car collection",
  description: `Burna Boy's reported car collection — ${carCount} confirmed vehicles and their reported purchase value.`,
  path: "/records/cars",
  keywords: ["Burna Boy", "cars", "car collection", "supercars", "net worth"],
  variableMeasured: ["Make", "Model", "Year", "Reported value"],
});

// ItemList so search + AI engines can read the ranked collection as a list —
// each item now pointing at the car's own page.
const carsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Burna Boy's car collection",
  numberOfItems: garage.length,
  itemListElement: garage.map((c) => ({
    "@type": "ListItem",
    position: c.rank,
    name: `${c.make} ${c.model}${c.year ? ` (${c.year})` : ""}`,
    url: `https://burnaboystats.com/records/cars/${c.slug}`,
  })),
};

// "At a glance" summary — brand tally + a few crowd-pleasing superlatives, from
// the current (value-sorted) cars so they stay in sync with the list below.
const makeTally = marqueTally(currentCars);
const priciest = currentCars[0];
const highlights = [
  { label: "Most expensive", value: `${priciest.make} ${modelShort(priciest.model)}`, meta: `${priciest.valueNaira} (reported)` },
  { label: "Only one in Africa", value: "Ferrari SF90 Spider", meta: "reported" },
  { label: "Most of one brand", value: `${makeTally[0][1]}× ${makeTally[0][0]}`, meta: "his favourite marque" },
];

// The garage's headline car, read from the data so the stat cell can never
// name a car the list no longer leads with.
const topCar = garage[0];
const topCarValue = usdShort(topCar.valueUsd);
const topCarName = `${topCar.make} ${modelShort(topCar.model)}`;

// The five no longer counted, by value — kept for the record, pictured never.
const former = [...soldCars, ...unconfirmedCars];

// Sizes the browser can pick a rung from: three columns inside the 1240px
// measure at desktop, two from 900px, one below.
// 370px, not 385: a tile is ~370px wide inside the 1240 measure, and declaring
// 385 pushed every request one rung up the srcset — 640w for an image that
// never renders wider than 384.
const TILE_SIZES = "(min-width: 1240px) 370px, (min-width: 901px) 50vw, 100vw";

export default function CarsPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(carsDataset) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(carsItemList) }} />
      {/* Mobile is screen 18 on the shared deep-page grammar — rebuilt with
          tiles (designs/mobile/Cars - Mobile.dc.html). Two stat cells, no chip
          rail, and each row is now a 16:10 illustration over its meta; the
          whole tile is one link to the car's page. */}
      <MobileDeepPage
        label="Car collection"
        badge={String(carCount)}
        kicker="The garage, priced"
        titlePre="Car "
        titleGold="collection"
        titleSize={40}
        lede={`${numberWord(carCount)} confirmed cars worth a reported ${totalValueFormatted} — led by a one-of-one ₦9bn Bugatti. Tap any car for its page.`}
        stats={[
          { value: totalValueFormatted, label: "Total value" },
          { value: topCarValue, label: topCarName },
        ]}
        listTitle="Ranked by what each cost"
        listMeta="illustrations"
        rows={garage.map((c) => ({
          rank: rankLabel(c.rank),
          title: c.model,
          sub: c.make,
          value: usdShort(c.valueUsd),
          lead: c.rank === 1,
          href: `/records/cars/${c.slug}`,
          ariaLabel: `${c.make} ${c.model}, ranked ${c.rank}, reported value ${usdFull(c.valueUsd)} — open the car's page`,
          tile: {
            src: c.image.preview.src,
            alt: c.image.alt,
            width: c.image.preview.width,
            height: c.image.preview.height,
            badge: c.image.caption,
            // The first two are above the fold on a phone.
            eager: c.rank <= 2,
          },
        }))}
      >
        {/* No longer counted — text only, no pictures, no pages (§7.3). */}
        <section className={styles.mFormer} aria-labelledby="m-former">
          <h3 id="m-former" className={styles.mFormerTitle}>No longer counted</h3>
          <p className={styles.mFormerNote}>
            <b className={styles.mFormerLead}>Not pictured:</b> recorded but not counted — sold, or not seen with him in years. No page of their own.
          </p>
          <div className={styles.mFormerList}>
            {former.map((c) => (
              <div key={`${c.make}-${c.model}`} className={styles.mFormerRow}>
                <span className={styles.mFormerMain}>
                  <span className={`${styles.mFormerTag} ${c.status === "sold" ? styles.mFormerSold : ""}`}>
                    {c.status === "sold" ? "Sold" : "Unconfirmed"}
                  </span>
                  <span className={styles.mFormerName}>{c.make} {c.model}</span>
                </span>
                <span className={styles.mFormerValue}>{usdShort(c.valueUsd)}</span>
              </div>
            ))}
          </div>
        </section>
        <div className={styles.mNote}>
          <p className={styles.mNoteText}>
            Unlike charts and certifications, a car collection has no official record. Reconstructed from press and sightings; only cars confirmed by multiple sources are listed. Images are illustrations of each model, not his cars.
          </p>
        </div>
      </MobileDeepPage>

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/cars" />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className={styles.heroWrap}>
          <div className={styles.kicker}>The garage · priced individually</div>
          <h1 className={styles.h1}>
            Car <span className="inkText">Collection</span>
          </h1>
          <p className={styles.lede}>
            Burna Boy currently owns {carCount} confirmed cars — a collection worth a reported{" "}
            {totalValueFormatted}+, led by a one-of-one ₦9 billion Bugatti Chiron and a $2
            million McLaren Senna. Every car below opens to its own page: specifications, where
            it stands in the garage, and the source that put it on this list.
          </p>

          <div className={styles.statGrid}>
            <div className={styles.statCell}>
              <div className={styles.statNum}>{carCount}</div>
              <div className={styles.statLabel}>Confirmed cars</div>
            </div>
            <div className={styles.statCell}>
              <div className={styles.statNum}>{totalValueFormatted}+</div>
              <div className={styles.statLabel}>Reported value</div>
            </div>
            {highlights.slice(0, 2).map((h) => (
              <div key={h.label} className={styles.statCell}>
                <div className={styles.highlightLabel}>{h.label}</div>
                <div className={styles.highlightValue}>{h.value}</div>
                <div className={styles.highlightMeta}>{h.meta}</div>
              </div>
            ))}
          </div>

          <div className={styles.tally}>
            <span className={styles.tallyLabel}>By marque</span>
            {makeTally.map(([make, n]) => (
              <span key={make} className={styles.tallyChip}>
                <b className={styles.tallyNum}>{n}</b>
                <span className={styles.tallyMake}>{make}</span>
              </span>
            ))}
          </div>
        </section>

        {/* ── The garage — image tiles, ranked most-expensive-first ── */}
        <section className={styles.garageWrap} id="the-garage" aria-labelledby="the-garage-title">
          <div className={styles.garageHead}>
            <h2 id="the-garage-title" className={styles.h2}>The garage</h2>
            <span className={styles.garageMeta}>Ranked by reported value · every image is an illustration of the model</span>
          </div>
          <div className={styles.tiles}>
            {garage.map((c) => (
              /* One link per tile — a make, a model and a picture that each
                 linked separately would be three tab stops for one destination. */
              <Link
                key={c.slug}
                href={`/records/cars/${c.slug}`}
                className={`${styles.tile} ${c.rank === 1 ? styles.tileLead : ""}`}
                aria-label={`${c.make} ${c.model}, ranked ${c.rank}, reported value ${usdFull(c.valueUsd)} — open the car's page`}
              >
                <span className={styles.tileImg}>
                  <GatedImage
                    src={c.image.preview.src}
                    alt={c.image.alt}
                    width={c.image.preview.width}
                    height={c.image.preview.height}
                    sizes={TILE_SIZES}
                    media="(min-width: 901px)"
                    eager={c.rank <= 3}
                    className={styles.tilePic}
                  />
                  <span className={styles.tileBadge}>{c.image.caption}</span>
                </span>
                <span className={styles.tileMeta}>
                  <span className={styles.tileRow}>
                    <span className={styles.tileRank}>{rankLabel(c.rank)}</span>
                    <span className={styles.tileMake}>{c.make}</span>
                  </span>
                  <span className={`${styles.tileModel} ${c.model.length > 22 ? styles.tileModelLong : ""}`}>
                    {c.model}
                  </span>
                  <span className={styles.tileValue}>
                    {usdFull(c.valueUsd)} <span className={styles.tileNaira}>· {c.valueNaira}</span>
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── No longer counted ────────────────────────────────── */}
        <section className={styles.formerWrap}>
          <h2 className={styles.h2}>
            <span className={styles.goldFlat}>No longer counted</span>
          </h2>
          <p className={styles.formerLede}>
            <b className={styles.formerLead}>Not pictured: these cars are recorded but not counted.</b>{" "}
            Kept for the record — cars he&apos;s reportedly sold, or that haven&apos;t been
            seen with him in years. They don&apos;t count toward the totals above and have no
            page of their own.
          </p>
          <div className={styles.formerList}>
            {former.map((c) => (
              <div key={`${c.make}-${c.model}`} className={styles.formerRow}>
                <div>
                  <span
                    className={`${styles.tag} ${c.status === "sold" ? styles.tagSold : styles.tagUnconfirmed}`}
                  >
                    {c.status === "sold" ? "Sold" : "Unconfirmed"}
                  </span>
                  <span className={styles.make}>{c.make}</span>
                  <h3 className={styles.formerModel}>{c.model}</h3>
                  <p className={styles.formerDesc}>{c.desc}</p>
                </div>
                <div className={styles.priceCol}>
                  <span className={styles.formerUsd}>{usdFull(c.valueUsd)}</span>
                  <span className={styles.formerNaira}>{c.valueNaira}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── A note on this list ──────────────────────────────── */}
        <section className={styles.noteWrap} id="note">
          <div className={styles.note}>
            <div className={styles.noteKicker}>A note on this list</div>
            <p className={styles.noteText}>
              This list isn&apos;t guaranteed complete. Unlike this site&apos;s charts,
              certifications and awards — which trace to an official chart body or academy —
              a celebrity car collection has no equivalent record. It&apos;s reconstructed
              from entertainment press and social sightings, which vary a lot in reliability
              (some outlets have reported cars that don&apos;t check out) and can lag a real
              purchase by days or weeks. Only cars confirmed by multiple independent sources
              are listed here.
            </p>
            <p className={styles.noteFine}>
              The car images are illustrations of each model, not photographs of his cars —
              none of his own vehicles has a free-to-reuse image. Naira figures are
              import-inclusive and USD figures use each source&apos;s own conversion
              (~₦1,455/$), so they run higher than international sticker prices. The McLaren
              Senna is the one confirmed price — $2M, posted by Burna Boy himself. Last fully
              re-verified July 2026.
            </p>
          </div>
        </section>

        {/* ── Onward ───────────────────────────────────────────── */}
        <section className={styles.actionWrap}>
          <div className={styles.actions}>
            <Link href="/records" className="btn btnSecondary">← Career records</Link>
            <Link href="/records/by-the-numbers" className="btn btnPrimary">By the numbers ↗</Link>
            <Link href="/records/tours" className="btn btnSecondary">Tours &amp; live ↗</Link>
          </div>
        </section>

        <KeepExploring current="/records/cars" />
      </div>
    </main>
  );
}
