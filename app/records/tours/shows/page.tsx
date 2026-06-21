import Link from "next/link";
import styles from "../tours.module.css";
import { tours } from "../../../data/tours";

export const metadata = {
  title: "Burna Boy — Every Show, Concert & Festival",
  description:
    "A running, year-by-year list of the concerts and festivals Burna Boy has headlined across his career — venues, cities and capacities.",
  alternates: { canonical: "/records/tours/shows" },
};

type Row = { date: string; venue: string; city: string; country: string; cap?: number; tour: string };

const allShows: Row[] = tours
  .flatMap((t) => (t.dates ?? []).map((d) => ({ ...d, tour: t.name })))
  .sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

const years = Array.from(new Set(allShows.map((s) => s.date.slice(-4))));

export default function AllShowsPage() {
  return (
    <main id="content">
      <header className="pageHeader container">
        <h1>
          Every <span className="accent">Show</span>
        </h1>
        <p>Concerts &amp; festivals Burna Boy has headlined — year by year</p>
      </header>

      <div className="container">
        <p className={styles.source} style={{ marginTop: 8 }}>
          {allShows.length} headline dates so far, gathered from his tour
          itineraries. This list is still being expanded with festival sets and
          one-off shows — the full career list will be updated shortly.
        </p>

        {years.map((y) => {
          const shows = allShows.filter((s) => s.date.endsWith(y));
          return (
            <div key={y}>
              <h2 className={styles.yearHead}>
                {y} <span className={styles.count}>({shows.length})</span>
              </h2>
              <div className={styles.showList}>
                {shows.map((s, i) => (
                  <div key={`${s.date}-${i}`} className={styles.showRow}>
                    <span className={styles.showDate}>{s.date}</span>
                    <span className={styles.showVenue}>
                      {s.venue}
                      <span className={styles.showCity}>
                        {s.city}, {s.country} · <span className={styles.tourTag}>{s.tour}</span>
                      </span>
                    </span>
                    <span className={styles.capCol}>{s.cap ? s.cap.toLocaleString() : "—"}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <p className={styles.source}>
          Capacities are the venues&apos; standard listed capacities; festivals
          and a few small early venues are shown without one. Verified against
          tour announcements and press, June 2026.
        </p>
        <Link href="/records/tours" className={styles.back}>← Tours</Link>
      </div>
    </main>
  );
}
