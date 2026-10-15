import Link from "../../../components/SiteLink";
import styles from "./festivals.module.css";
import BreadcrumbBar from "../../../components/BreadcrumbBar";
import MobileFestivals from "../../../components/MobileFestivals";
import Provenance from "../../../components/Provenance";
import { dataLineFor, festivalsP1 } from "../../../lib/provenanceSpecs";
import { numberWord } from "../../../lib/homeData";
import { festivals, otherShows, concerts, FESTIVALS_VERIFIED_ON, type Festival } from "../../../data/tours";
import { byYearDesc, PHONE_SOURCE_NOTE, FESTIVAL_GROUP_NAMES, FESTIVALS_KICKER } from "../../../lib/festivalOrder";
import { pageMetadata } from "../../../lib/seo";

export const metadata = pageMetadata({
  title: "Burna Boy Festivals — Afro Nation & Every Big-Stage Show",
  description:
    "Every major festival and show Burna Boy has performed — headline sets, solo concerts, and other big-stage appearances like Glastonbury and Wireless.",
  path: "/records/tours/festivals",
  shareTitle: "Burna Boy — Festivals & Shows",
  shareDescription: "Every festival he's headlined, plus other big-stage appearances.",
});


const headlined = byYearDesc(festivals);
const soloConcerts = byYearDesc(concerts);
const others = byYearDesc(otherShows);
const total = headlined.length + soloConcerts.length + others.length;
const afroNation = headlined.filter((f) => f.name === "Afro Nation").length;

const groups = [
  {
    id: "headlined",
    title: FESTIVAL_GROUP_NAMES.headlined,
    hint: `Where he topped the bill — including ${afroNation} Afro Nation editions.`,
    unit: "sets",
    items: headlined,
  },
  {
    id: "concerts",
    title: FESTIVAL_GROUP_NAMES.concerts,
    hint: "His own standalone headline concerts — separate from the routed tours and festival sets.",
    unit: "shows",
    items: soloConcerts,
  },
  {
    id: "others",
    title: FESTIVAL_GROUP_NAMES.others,
    hint: "Major festival appearances where he wasn't the headliner.",
    unit: "appearances",
    items: others,
  },
];

// The month of FESTIVALS_VERIFIED_ON (data/tours.ts), the day these lists last
// changed. The stamp dates the most recent verification behind this list — not
// every row, and not the day the page is served — so it moves when the data
// does and at no other time. It was typed "September 2026" (the Reggae Land
// 2026 re-read) and stayed there when the rows were edited on 6 Oct 2026
// (live debug 15 Oct 2026, festivals-01).
const verifiedMonth = new Date(`${FESTIVALS_VERIFIED_ON}T12:00:00Z`).toLocaleDateString("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
const SOURCE_NOTE = `Festival headline sets and other major festival / one-off appearances, verified against press and festival line-ups, as of ${verifiedMonth}. His own headline tours and every tour date are on the Tours page. More appearances are added as they are confirmed.`;

// The phone sections' row shape: year in the lead column, then name and location.
const toRow = (f: Festival) => ({ lead: f.year, title: f.name, meta: f.location });

// The phone's first stat cell, and its dock chip's word for the same list
// ("Headlined · {n}", fix 81): one word, so the two cannot drift apart.
const HEADLINED = "Headlined";

export default function FestivalsPage() {
  return (
    <main id="content">
      {/* Mobile is screen 13 — three sections, not a flat list, every one
          open in full under a docking index (J4-Q3, Job 4 · J4-10). Figures
          derived: the mock says 57/30; the data is whatever the arrays hold
          (59/32 on 16 Sep 2026). */}
      <MobileFestivals
        total={total}
        lede={`${numberWord(total)} documented appearances — ${headlined.length} festivals headlined, including ${numberWord(afroNation).toLowerCase()} Afro Nation editions.`}
        stats={[
          { value: String(headlined.length), label: HEADLINED },
          { value: String(afroNation), label: "Afro Nation" },
          { value: String(soloConcerts.length), label: FESTIVAL_GROUP_NAMES.concerts },
          { value: String(total), label: "Total" },
        ]}
        // The desktop groups' ids with the phone's "m-" (headlined, concerts,
        // others), so the two layouts' anchors never collide.
        sections={[
          { id: "m-headlined", name: FESTIVAL_GROUP_NAMES.headlined, dockLabel: HEADLINED, rows: headlined.map(toRow) },
          { id: "m-concerts", name: FESTIVAL_GROUP_NAMES.concerts, rows: soloConcerts.map(toRow) },
          { id: "m-others", name: FESTIVAL_GROUP_NAMES.others, rows: others.map(toRow) },
        ]}
        sourceNote={PHONE_SOURCE_NOTE}
        data={dataLineFor("tours")}
        p1={festivalsP1()}
        kicker={FESTIVALS_KICKER}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/records/tours/festivals" />

        {/* ── Hero ───────────────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad}`}>
            <div className={styles.heroRow}>
              <div className={styles.heroText}>
                <div className={styles.eyebrow}>
                  <span className={styles.eyebrowRule} aria-hidden="true" />
                  {FESTIVALS_KICKER}
                </div>
                <h1 className={styles.h1}>
                  Festivals <span className="inkText">&amp; Shows</span>
                </h1>
                <p className={styles.lede}>
                  The festivals Burna Boy has headlined — and the other big stages he&apos;s
                  played. {total} documented appearances across{" "}
                  {numberWord(groups.length).toLowerCase()} categories.
                </p>
                {/* P1 (J1-11, fix 24): the hero's sources and edit stamp. */}
                <Provenance size="p1" {...festivalsP1()} className={styles.p1Slot} />
              </div>
              {/* In the hero, not the count strip: the strip's three cells are
                  anchors to the sections below, and a fourth link there would
                  read as a fourth category. A stand-alone link to another
                  page, so ↗. */}
              <Link href="/records/tours/map" className={styles.mapLink}>
                Where he&apos;s performed ↗
              </Link>
            </div>
          </div>
        </section>

        {/* ── Count band ─────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={styles.wide}>
            <div className={styles.countGrid}>
              {groups.map((g) => (
                <a key={g.id} href={`#${g.id}`} className={styles.countCell}>
                  <div className={styles.countValue}>{g.items.length}</div>
                  <div className={styles.countLabel}>{g.title}</div>
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
                <h2 className={styles.h2}>{g.title}</h2>
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
            {/* JSON only: tours.csv is the box-office board, and these
                appearances are in /api/v1/tours, not in the file. */}
            <Provenance size="p3" data={dataLineFor("tours")}>
              {SOURCE_NOTE}
            </Provenance>
            <Link href="/records/tours" className={`btn btnSecondary ${styles.back}`}>
              ← Tours
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
