import Link from "next/link";
import styles from "./festivals.module.css";
import BreadcrumbBar from "../../../components/BreadcrumbBar";
import MobileFestivals from "../../../components/MobileFestivals";
import { numberWord } from "../../../lib/homeData";
import { festivals, otherShows, concerts, type Festival } from "../../../data/tours";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Festivals — Afro Nation & Every Big-Stage Show",
  description:
    "Every major festival and show Burna Boy has performed — headline sets, solo concerts, and other big-stage appearances like Glastonbury and Wireless.",
  path: "/records/tours/festivals",
  shareTitle: "Burna Boy — Festivals & Shows",
  shareDescription: "Every festival he's headlined, plus other big-stage appearances.",
});

const byYearDesc = (rows: Festival[]) =>
  [...rows].sort((a, b) => Number(b.year) - Number(a.year));

const headlined = byYearDesc(festivals);
const soloConcerts = byYearDesc(concerts);
const others = byYearDesc(otherShows);
const total = headlined.length + soloConcerts.length + others.length;
const afroNation = headlined.filter((f) => f.name === "Afro Nation").length;

const groups = [
  {
    id: "headlined",
    title: "Festivals headlined",
    hint: `Where he topped the bill — including ${afroNation} Afro Nation editions.`,
    unit: "sets",
    items: headlined,
  },
  {
    id: "concerts",
    title: "Solo concerts",
    hint: "His own standalone headline concerts — separate from the routed tours and festival sets.",
    unit: "shows",
    items: soloConcerts,
  },
  {
    id: "others",
    title: "Other festivals & shows",
    hint: "Major festival appearances where he wasn't the headliner.",
    unit: "appearances",
    items: others,
  },
];

// September because the Reggae Land 2026 entry was re-read against press in
// September: it had sat here as a future commitment ("Headlining…", no date)
// for five weeks after the set was played, on 31 July 2026. The stamp dates the
// most recent verification behind this list — not every row, and not the day
// the page is served. It moves when the data does and at no other time; the
// revenue page beside it correctly still reads August, because its figures have
// not been touched since 3 August 2026.
const SOURCE_NOTE =
  "Festival headline sets and other major festival / one-off appearances, verified against press and festival line-ups, as of September 2026. His own headline tours and every tour date are on the Tours page. More appearances are added as they are confirmed.";

// The accordion's row shape: year in the lead column, then name and location.
const toRow = (f: Festival) => ({ lead: f.year, title: f.name, meta: f.location });

export default function FestivalsPage() {
  return (
    <main id="content">
      {/* Mobile is screen 13 — three accordion sections, first one open, not a
          flat list. The screen carries every documented appearance, which is
          why the design folds them. Figures derived: the mock says 57/30, the
          data says 58/31. */}
      <MobileFestivals
        total={total}
        lede={`${numberWord(total)} documented appearances — ${headlined.length} festivals headlined, including ${numberWord(afroNation).toLowerCase()} Afro Nation editions. Tap a section to open it.`}
        stats={[
          { value: String(headlined.length), label: "Headlined" },
          { value: String(afroNation), label: "Afro Nation" },
          { value: String(soloConcerts.length), label: "Solo shows" },
          { value: String(total), label: "Total" },
        ]}
        sections={[
          { name: "Festivals headlined", rows: headlined.map(toRow) },
          { name: "Solo concerts", rows: soloConcerts.map(toRow) },
          { name: "Other appearances", rows: others.map(toRow) },
        ]}
        sourceNote="From each festival's own line-up archive. tours.ts records no capacity field, so sections run newest-first rather than by size."
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/tours/festivals" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad}`}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowRule} aria-hidden="true" />
              Big stages
            </div>
            <h1 className={styles.h1}>
              Festivals <span className="inkText">&amp; Shows</span>
            </h1>
            <p className={styles.lede}>
              The festivals Burna Boy has headlined — and the other big stages he&apos;s
              played. {total} appearances across three categories.
            </p>
          </div>
        </section>

        {/* ── Count band ─────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={styles.wide}>
            <div className={styles.countGrid}>
              {groups.map((g) => (
                <a key={g.id} href={`#${g.id}`} className={styles.countCell}>
                  <div className={styles.countValue}>{g.items.length}</div>
                  <div className={styles.countLabel}>
                    {g.id === "others" ? "Other big stages" : g.title}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Groups ─────────────────────────────────────────── */}
        {groups.map((g) => (
          <section key={g.id} id={g.id} className={styles.band}>
            <div className={`${styles.wide} ${styles.groupPad}`}>
              <div className={styles.groupHead}>
                <h2 className={styles.h2}>
                  <span className="inkText">{g.title}</span>
                </h2>
                <p className={styles.groupHint}>{g.hint}</p>
                <span className={styles.groupCount}>
                  {g.items.length} {g.unit}
                </span>
              </div>
              <div className={styles.list}>
                {g.items.map((f) => (
                  // Afro Nation appears three times in 2023 alone — Portimão,
                  // Miami and Detroit — so the location is part of the identity.
                  <div key={`${f.year}-${f.name}-${f.location}`} className={styles.row}>
                    <span className={styles.year}>{f.year}</span>
                    <div>
                      <h3 className={styles.name}>
                        {f.name} · <span className={styles.place}>{f.location}</span>
                      </h3>
                      <p className={styles.note}>{f.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* ── Source ─────────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={`${styles.wide} ${styles.sourcePad}`}>
            <p className={styles.sourceLine}>{SOURCE_NOTE}</p>
            <Link href="/records/tours" className={`btn btnSecondary ${styles.back}`}>
              ← Tours
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
