import StatCardMaker from "../components/StatCardMaker";
import MobileStatCards from "../components/MobileStatCards";
import KeepExploring from "../components/KeepExploring";
import BreadcrumbBar from "../components/BreadcrumbBar";
import styles from "./share.module.css";
import { getStatCards } from "../lib/statCards";
import { updates } from "../data/updates";
import { pageMetadata, CANONICAL_ORIGIN } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Make a Burna Boy Stat Card — Download & Share the Numbers",
  description:
    "Pick a Burna Boy record — certifications, No. 1s, the record tour, Spotify listeners — and download a clean card to share on X, Instagram and WhatsApp.",
  path: "/share",
  shareTitle: "Burna Boy Stat Cards",
  shareDescription:
    "Pick a record and download a shareable Burna Boy stat card.",
});

// Verified date rides the newest logged update, so it's never hand-maintained.
const verified = new Date(`${updates[0].date}T00:00:00Z`).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

// Cards are computed on the server (they pull the big data modules); only the
// lightweight choice + provenance goes to the client, which previews each via
// the /stat-card image route.
export default function SharePage() {
  const choices = getStatCards().map((c) => ({
    id: c.id,
    chip: c.chip,
    label: c.label,
    detail: c.detail,
    source: c.source,
    href: c.href,
  }));

  return (
    <main id="content">
      {/* Mobile is screen 24 — its own screen, because the design's own lede
          states the rule the desktop maker breaks: story ratio is the default
          on a phone. Separate state, not one shared toggle. */}
      <MobileStatCards cards={choices} pageUrl={`${CANONICAL_ORIGIN}/share`} />

      <div className={styles.desktopOnly}>
      <BreadcrumbBar path="/share" />

      <section className={`${styles.wrap} ${styles.heroPad}`}>
        <div className={styles.kicker}>Built for the timeline</div>
        <h1 className={styles.h1}>
          Stat <span className="inkText">Cards</span>
        </h1>
        <p className={styles.lede}>
          Pick a Burna Boy record and download a card built for sharing — the numbers, the
          African Giant, one tap away.
        </p>
      </section>

      <StatCardMaker
        cards={choices}
        verified={verified}
        pageUrl={`${CANONICAL_ORIGIN}/share`}
      />

      <KeepExploring current="/share" />
      </div>
    </main>
  );
}
