import Link from "next/link";
import styles from "./cars.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileDeepPage from "../../components/MobileDeepPage";
import { numberWord } from "../../lib/homeData";
import { cars, currentCars, soldCars, unconfirmedCars, carCount, totalValueFormatted } from "../../data/cars";
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

// ItemList so search + AI engines can read the ranked collection as a list.
const carsItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Burna Boy's car collection",
  numberOfItems: currentCars.length,
  itemListElement: currentCars.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${c.make} ${c.model}${c.year ? ` (${c.year})` : ""}`,
  })),
};

function formatUsd(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}

// "At a glance" summary — brand tally + a few crowd-pleasing superlatives, from
// the current (value-sorted) cars so they stay in sync with the list below.
const byMake = new Map<string, number>();
for (const c of currentCars) byMake.set(c.make, (byMake.get(c.make) ?? 0) + 1);
const makeTally = [...byMake.entries()].sort((a, b) => b[1] - a[1]);
const priciest = currentCars[0];
const highlights = [
  { label: "Most expensive", value: `${priciest.make} ${priciest.model.split(" (")[0]}`, meta: `${priciest.valueNaira} (reported)` },
  { label: "Only one in Africa", value: "Ferrari SF90 Spider", meta: "reported" },
  { label: "Most of one brand", value: `${makeTally[0][1]}× ${makeTally[0][0]}`, meta: "his favourite marque" },
];

// The design's chip rail and row list. Marque counts are derived across the
// whole collection (the design counts the garage, not only what is still in
// it); the row titles split make + base model, with the design's descriptor
// as the subtitle.
const marqueCounts = cars.reduce<Record<string, number>>((acc, c) => {
  const marque = c.make === "Mercedes-Maybach" ? "Maybach" : c.make;
  acc[marque] = (acc[marque] ?? 0) + 1;
  return acc;
}, {});

const CHIP_MARQUES = ["Ferrari", "Lamborghini", "Maybach", "Rolls-Royce"];

const topCars = currentCars.slice(0, 6);
const topValue = topCars[0]?.valueUsd ?? 1;
const usd = (n: number) => `$${(n / 1e6).toFixed(2)}M`;

// The design shows "Bugatti Chiron" with "Venuum Widebody — one of one"
// underneath; the data keeps the qualifier inside `model`.
const splitModel = (model: string) => {
  const m = model.match(/^([^(]+?)\s*\((.+)\)$/);
  return m ? { base: m[1].trim(), qualifier: m[2].trim() } : { base: model, qualifier: "" };
};

export default function CarsPage() {
  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(carsDataset) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(carsItemList) }} />
      {/* Mobile is screen 18 on the shared deep-page grammar. */}
      <MobileDeepPage
        label="Car collection"
        badge={String(carCount)}
        kicker="The garage, priced"
        titlePre="Car "
        titleGold="collection"
        lede={`${numberWord(carCount)} confirmed cars worth a reported ${totalValueFormatted} — led by a one-of-one ₦9bn Bugatti.`}
        stats={[
          { value: String(carCount), label: "Confirmed cars" },
          { value: totalValueFormatted, label: "Reported value" },
        ]}
        chips={CHIP_MARQUES.filter((m) => marqueCounts[m]).map((m, i) => ({
          label: `${marqueCounts[m]} ${m}`,
          on: i === 0,
        }))}
        chipsLabel="Collection by marque"
        listTitle="Ranked by what each cost"
        listMeta="import-inclusive"
        rows={topCars.map((c, i) => {
          const { base, qualifier } = splitModel(c.model);
          return {
            rank: String(i + 1).padStart(2, "0"),
            title: `${c.make} ${base}`,
            sub: qualifier || c.desc.split(".")[0],
            value: usd(c.valueUsd),
            bar: c.valueUsd / topValue,
            lead: i < 2,
          };
        })}
        footNote="Unlike charts and certifications, a car collection has no official record. Reconstructed from press and sightings; only cars confirmed by multiple sources are listed."
        ctaLabel="The full garage"
        ctaHref="#the-garage"
      />

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
            million McLaren Senna. Below is every car priced individually, plus the ones
            he&apos;s since let go.
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

        {/* ── The garage ───────────────────────────────────────── */}
        <section className={styles.listWrap} id="the-garage">
          <div className={styles.list}>
            {currentCars.map((c, i) => (
              <div key={`${c.make}-${c.model}`} className={styles.carRow}>
                <span className={`${styles.rank} ${i === 0 ? styles.rankLead : ""}`}>
                  {i + 1}
                </span>
                <div>
                  <span className={styles.make}>{c.make}</span>
                  <h2 className={`${styles.model} ${i === 0 ? styles.modelLead : ""}`}>
                    {c.model}
                  </h2>
                  <p className={styles.desc}>{c.desc}</p>
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.carLink}
                    >
                      {c.linkLabel ?? "See Burna in it"} ↗
                    </a>
                  )}
                </div>
                <div className={styles.priceCol}>
                  <span className={`${styles.usd} ${i === 0 ? styles.usdLead : ""}`}>
                    {usd(c.valueUsd)}
                  </span>
                  <span className={styles.naira}>{c.valueNaira}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── No longer counted ────────────────────────────────── */}
        <section className={styles.formerWrap}>
          <h2 className={styles.h2}>
            <span className={styles.goldFlat}>No longer counted</span>
          </h2>
          <p className={styles.formerLede}>
            Kept for the record — cars he&apos;s reportedly sold, or that haven&apos;t been
            seen with him in years. These don&apos;t count toward the totals above.
          </p>
          <div className={styles.formerList}>
            {[...soldCars, ...unconfirmedCars].map((c) => (
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
                  <span className={styles.formerUsd}>{usd(c.valueUsd)}</span>
                  <span className={styles.formerNaira}>{c.valueNaira}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── A note on this list ──────────────────────────────── */}
        <section className={styles.noteWrap}>
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
              Naira figures are import-inclusive and USD figures use each source&apos;s own
              conversion (~₦1,455/$), so they run higher than international sticker prices.
              The McLaren Senna is the one confirmed price — $2M, posted by Burna Boy himself.
              Last fully re-verified July 2026.
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
