import Link from "next/link";
import styles from "./updates.module.css";
import UpdatesFeed from "../components/UpdatesFeed";
import MobileUpdates from "../components/MobileUpdates";
import FollowPanel from "../components/FollowPanel";
import SubscribeBox from "../components/SubscribeBox";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import { updates } from "../data/updates";
import { pageMetadata } from "../lib/seo";

// pageMetadata() advertises the RSS feed, here as on every page, so readers
// auto-discover it.
export const metadata = pageMetadata({
  title: "Burna Boy News — Latest Chart, Award & Streaming Updates",
  description:
    "Every recent update to Burna Boy Stats — new chart peaks, certifications, streaming milestones and records, tracked as they happen.",
  path: "/updates",
  shareTitle: "Burna Boy Stats — Latest Updates",
  shareDescription: "What's new on the site, tracked as it happens.",
});

// ── Derived ────────────────────────────────────────────────────────────────
// Entries are stored newest-first, so the freshest date is simply the first.
const lastEntry = new Date(`${updates[0].date}T00:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
const certCount = updates.filter((u) => u.category === "Certifications").length;
const monthsTracked = new Set(updates.map((u) => u.date.slice(0, 7))).size;

const tally = [
  { value: String(updates.length), label: "Entries logged" },
  { value: String(certCount), label: "New certifications" },
  { value: String(monthsTracked), label: "Months tracked" },
];

// The digest module shows only once Resend is configured on the server; until
// then the API would answer 503 and a live button that says "not switched on
// yet" reads as broken. Without it the hero's right column keeps the tally it
// had before the digest, and the phone keeps its RSS link in the back bar.
const subscribeEnabled = Boolean(process.env.RESEND_API_KEY && process.env.RESEND_AUDIENCE_ID);

export default function UpdatesPage() {
  return (
    <main id="content">
      {/* Mobile is screen 06 — one block per entry, no month headings. */}
      <MobileUpdates items={updates} lastEntry={lastEntry} subscribeEnabled={subscribeEnabled} />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/updates" />

        {/* ── Hero ───────────────────────────────────────────── */}
        {/* The digest module is the hero's right column (design response §1):
            where a first-time reader is, and it costs the page no vertical
            room. It takes the place of the tally aside, which stays only as
            the fallback for a deploy with no Resend keys. */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.heroPad} ${subscribeEnabled ? styles.heroDigest : ""}`}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowRule} aria-hidden="true" />
                The change log
              </div>
              <h1 className={styles.h1}>
                Latest <span className="inkText">Updates</span>
              </h1>
              <p className={styles.lede}>
                Chart peaks, certifications and records, as they&apos;re added — every
                figure read at the body that publishes it.
              </p>
              <div className={styles.lastEntry}>
                <span className={styles.liveDot} aria-hidden="true" />
                Last entry <strong>{lastEntry}</strong>
                {subscribeEnabled && <> · {updates.length} entries</>}
              </div>
            </div>

            {subscribeEnabled ? (
              <SubscribeBox id="digest" entries="#entries" />
            ) : (
              <div className={styles.heroAside}>
                <div className={styles.eyebrow}>Tracked as it happens</div>
                <p className={styles.asideText}>
                  Certification announcements are read from the issuing body, chart peaks
                  from the national chart, and box-office figures from Billboard Boxscore.
                  Every entry links to the page holding the number.
                </p>
                <div className={styles.tally}>
                  {tally.map((t) => (
                    <div key={t.label}>
                      <div className={styles.tallyValue}>{t.value}</div>
                      <div className={styles.tallyLabel}>{t.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── Filter + feed ──────────────────────────────────── */}
        <UpdatesFeed items={updates} />

        {/* ── Follow panel ───────────────────────────────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.followPad}`}>
            <FollowPanel subscribeEnabled={subscribeEnabled} />
          </div>
        </section>

        {/* ── Source ─────────────────────────────────────────── */}
        <section className={styles.bandSurface}>
          <div className={`${styles.wide} ${styles.sourcePad}`}>
            <p className={styles.source}>
              Every entry links to the page where the figure lives, so the number behind
              the headline is always one click away. The full sourcing rules are in the{" "}
              <Link href="/methodology">methodology</Link>.
            </p>
          </div>
        </section>

        <KeepExploring current="/updates" />
      </div>
    </main>
  );
}
