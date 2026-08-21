import Link from "next/link";
import styles from "./unmerge.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, asDateTime } from "../../lib/seo";
import { lastUpdated } from "../../lib/api";
import { spotifyTotalStreams } from "../../data/streamingTotals";

/**
 * The February 2026 Spotify correction, explained once, properly.
 *
 * A claim circulates that Burna Boy "lost streams to a bot purge" in February
 * 2026. He did not. Spotify un-merged two remixes whose play counts had been
 * wrongly combined with the original recordings, and roughly 309 million
 * streams moved to the versions that had earned them. Nothing was deleted;
 * nothing was flagged as fraudulent.
 *
 * This page exists because that correction has no home anywhere on the internet
 * that a search engine or an answer engine can cite. The evidence is spread
 * across a chart-tracker's timeline in screenshots, which is exactly the kind of
 * source this site is built to replace. Someone asking an AI "did Burna Boy get
 * caught for bot streams" in 2028 should be able to get a sourced answer.
 *
 * Built for extraction, deliberately: the H1 is the question, the first two
 * sentences are the whole answer, the arithmetic is laid out so it can be
 * checked rather than believed, and the FAQ carries the phrasings people
 * actually type. See app/lib/boardFaqs.ts for the same reasoning applied to the
 * board.
 *
 * VERIFICATION. The claim was checked against the platform, not taken from the
 * timeline that made it: kworb's mirror of Spotify's own per-track counts shows
 * the two remixes today at roughly 51.9M and 3.3M — not the ~232M and ~130M they
 * carried before 10 February. The figures below are stated as "roughly" where
 * they move daily, and exactly where they are fixed points in the arithmetic.
 */

const VERIFIED_ON = "21 August 2026";

// The one live input on this page, and everything after it is derived.
//
// spotifyTotalStreams is the site's own published career figure, written daily
// by the stats bot — so quoting it here means this page moves with the rest of
// the site instead of freezing on the day it was written. It is a display
// string ("10.78B"), rounded to two decimals, and that rounding is the reason
// the gain below is stated as "about": deriving an exact-looking 1,580,447,326
// from a rounded input would be false precision dressed up as arithmetic.
const CORRECTED_2025_CLOSE = 9_199_552_674;

/** "10.78B" -> 10780000000. Returns null for anything unexpected rather than
 *  guessing, so a change in the bot's format shows up as an absent sentence
 *  rather than a wrong number. */
function parseBillions(display: string): number | null {
  const m = /^([\d.]+)B$/.exec(display.trim());
  if (!m) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) ? Math.round(n * 1_000_000_000) : null;
}

const totalToday = parseBillions(spotifyTotalStreams);
const gainedSinceCorrection = totalToday === null ? null : totalToday - CORRECTED_2025_CLOSE;
/** 1580447326 -> "1.58 billion", matching the precision of the input. */
const asBillions = (n: number) => `${(n / 1_000_000_000).toFixed(2)} billion`;

// The arithmetic, as separate rows so it can be read line by line rather than
// taken on trust. Every figure here is a fixed point in the calculation, not a
// live number — these do not move, which is why they are written down.
const SUMS: { label: string; value: string; note?: string }[] = [
  { label: "Career Spotify streams, 31 December 2025", value: "9,508,991,024", note: "as his counter then read" },
  { label: "“Enjoy Yourself — Remix”, before the correction", value: "232,346,699" },
  { label: "“Enjoy Yourself — Remix”, after", value: "50,077,530", note: "moved to the original: 182,269,169" },
  { label: "“Finders Keepers — Remix”, before", value: "130,244,873" },
  { label: "“Finders Keepers — Remix”, after", value: "3,075,692", note: "moved to the original: 127,169,181" },
  { label: "Total reallocated to the original recordings", value: "309,438,350", note: "not deleted — moved" },
  { label: "His true 2025 closing total", value: "9,199,552,674", note: "9,508,991,024 − 309,438,350" },
  { label: "His counter on 12 February 2026", value: "9,438,600,171" },
  { label: "Actual streams gained in 2026 by then", value: "+239,047,497", note: "9,438,600,171 − 9,199,552,674" },
];

const faqs = [
  {
    q: "Did Burna Boy lose Spotify streams to bot or fraud removal?",
    a: "No. In February 2026 Spotify un-merged two remixes — “Enjoy Yourself (Remix)” with Pop Smoke and “Finders Keepers (Remix)” — whose play counts had been wrongly combined with the original recordings. About 309 million streams moved to those originals, which had earned them. No streams were deleted, and Spotify did not flag anything as artificial. A reallocation and a purge look similar on a total and are not the same event.",
  },
  {
    q: "How many Spotify streams did Burna Boy actually have at the end of 2025?",
    a: "About 9.20 billion. His counter read 9,508,991,024 on 31 December 2025, but roughly 309 million of that belonged to the original versions of two remixes and was moved to them in February 2026. Subtracting those gives a true closing total of 9,199,552,674.",
  },
  {
    q: "Did his stream count go down in 2026?",
    a: "The displayed total dropped once, on 10 February 2026, when the correction landed. His actual streaming did not fall: by 12 February his counter stood at 9,438,600,171, which is 239,047,497 more than his corrected 2025 close. The apparent drop was an accounting fix applied to the past, not a loss in the present.",
  },
  {
    q: "What is a Spotify merge, and why does it happen?",
    a: "Spotify sometimes combines the play counts of two recordings it treats as the same track — commonly an original and a remix sharing a title. While merged, both show the combined figure. When the platform separates them, each recording keeps only its own plays, so one number falls and the other rises by the same amount. The catalogue is unchanged; only the attribution is corrected.",
  },
  {
    q: "How many Spotify streams does Burna Boy have now?",
    a: `His career total stands at ${spotifyTotalStreams}. Measured against his corrected 2025 close of 9,199,552,674 — the figure after the reallocated streams were taken out — that is roughly ${totalToday !== null ? asBillions(totalToday - CORRECTED_2025_CLOSE) : "one and a half billion"} added since. Every one of those arrived on a counter that no longer contained the moved streams.`,
  },
  {
    q: "How can this be checked?",
    a: `Open the two remixes on Spotify. As of ${VERIFIED_ON} they show roughly 51.9 million and 3.3 million plays — not the 232 million and 130 million they carried before 10 February 2026. If the streams had been deleted as fraudulent they would not appear on the original recordings either, and they do.`,
  },
];

export const metadata = pageMetadata({
  // The bare question, 43 chars: it is what people type, and the gate caps
  // titles at 60.
  title: "Did Burna Boy Lose Spotify Streams to Bots?",
  description:
    "No. In February 2026 Spotify un-merged two remixes and moved ~309M streams to the original recordings. Nothing was deleted. The full arithmetic, checkable.",
  path: "/analysis/spotify-unmerge",
  shareTitle: "The February 2026 Spotify correction, explained",
  shareDescription:
    "Not a bot purge — an un-merge. ~309M streams moved to the recordings that earned them, and the numbers add up.",
});

export default function SpotifyUnmergePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  // ClaimReview is the schema built for exactly this: a circulating claim, the
  // thing it says, and a rating. Kept scrupulously narrow — it reviews the
  // "bot removal" claim only, and rates it on what the platform's own numbers
  // show, not on anything about the people repeating it.
  const claimReviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "ClaimReview",
    datePublished: lastUpdated,
    url: `${CANONICAL_ORIGIN}/analysis/spotify-unmerge`,
    claimReviewed:
      "Burna Boy had Spotify streams removed in February 2026 because they were artificial or bot-generated.",
    author: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 1,
      bestRating: 5,
      worstRating: 1,
      alternateName: "False — the streams were reallocated, not removed",
    },
    itemReviewed: {
      "@type": "Claim",
      appearance: { "@type": "CreativeWork", name: "Social media commentary, February 2026" },
    },
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Did Burna Boy lose Spotify streams to bots? What really happened",
    description:
      "The February 2026 Spotify correction explained: two remixes were un-merged and about 309 million streams moved to the original recordings. Nothing was deleted.",
    datePublished: "2026-08-21",
    dateModified: asDateTime(lastUpdated),
    inLanguage: "en",
    author: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: { "@type": "MusicGroup", name: "Burna Boy" },
    url: `${CANONICAL_ORIGIN}/analysis/spotify-unmerge`,
  };

  return (
    <main id="content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      <BreadcrumbBar path="/analysis/spotify-unmerge" />

      <section className={`${styles.wrap} ${styles.heroPad}`}>
        <div className={styles.kicker}>The February 2026 correction</div>
        <h1 className={styles.h1}>
          Did Burna Boy lose Spotify streams <span className="inkText">to bots?</span>
        </h1>
        {/* The answer, complete, in the first two sentences — so it can be lifted
            on its own without the rest of the page for context. */}
        <p className={styles.answer}>
          <strong>No.</strong> In February 2026 Spotify un-merged two remixes whose play
          counts had been wrongly combined with the original recordings, and about{" "}
          <strong>309 million streams moved to those originals</strong>. Nothing was
          deleted, and nothing was flagged as artificial — a reallocation and a purge look
          the same on a running total, and are not the same event.
        </p>
        <p className={styles.sub}>
          Verified against Spotify&apos;s own per-track counts on {VERIFIED_ON}. Every
          figure below is checkable, and the arithmetic is set out rather than asserted.
        </p>
      </section>

      <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="what">
        <h2 id="what" className={styles.h2}>What actually happened</h2>
        <p className={styles.p}>
          Spotify sometimes combines the play counts of two recordings it treats as one
          track — most often an original and a remix that share a title. While they are
          merged, both display the combined figure. Two of Burna Boy&apos;s guest
          appearances were in that state:{" "}
          <strong>&ldquo;Enjoy Yourself (Remix)&rdquo;</strong> with Pop Smoke and{" "}
          <strong>&ldquo;Finders Keepers (Remix)&rdquo;</strong>.
        </p>
        <p className={styles.p}>
          On 10 February 2026 Spotify separated them. Each recording kept only the plays it
          had earned, so the remixes fell and the originals rose by the same amount. The
          plays still exist and are still on the platform; they are simply counted against
          the version that earned them. Because the remixes are the versions Burna Boy
          appears on, his artist total fell by the difference.
        </p>

        <h2 className={styles.h2}>The arithmetic</h2>
        <p className={styles.p}>
          These are fixed points, not live figures — which is why they are written down
          rather than derived. Read down the column and the total resolves.
        </p>
        <dl className={styles.sums}>
          {SUMS.map((s) => (
            <div key={s.label} className={styles.sumRow}>
              <dt className={styles.sumLabel}>
                {s.label}
                {s.note ? <span className={styles.sumNote}>{s.note}</span> : null}
              </dt>
              <dd className={styles.sumValue}>{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className={styles.p}>
          So the year that supposedly went backwards was, in fact,{" "}
          <strong>239 million streams forward</strong> by 12 February. The drop everyone
          saw was a correction applied to the past, not a loss in the present.
        </p>

        <h2 className={styles.h2}>Where that leaves him today</h2>
        {totalToday !== null && gainedSinceCorrection !== null ? (
          <>
            <p className={styles.p}>
              His career Spotify total now stands at{" "}
              <strong>{spotifyTotalStreams}</strong> — about{" "}
              <strong>{asBillions(gainedSinceCorrection)}</strong> more than the corrected
              2025 close of 9,199,552,674. Every one of those was added after the
              correction, on a counter that already had the reallocated streams taken out
              of it.
            </p>
            <p className={styles.p}>
              That is the number the &ldquo;bot purge&rdquo; framing cannot account for. A
              catalogue that had been inflated by fake plays does not add{" "}
              {asBillions(gainedSinceCorrection)} in the months after the platform
              supposedly cleaned it up.
            </p>
          </>
        ) : null}
        <p className={styles.sub}>
          The career total is read from Spotify daily and updates on its own; the figures
          in the table above are fixed points and do not move. The gain is given to the
          same precision as the total it is derived from — the underlying count is exact,
          the published one is rounded, and inventing digits it does not have would be
          false precision.
        </p>

        <h2 className={styles.h2}>How to check it yourself</h2>
        <p className={styles.p}>
          Open the two remixes on Spotify. As of {VERIFIED_ON} they show roughly{" "}
          <strong>51.9 million</strong> and <strong>3.3 million</strong> plays — not the
          232 million and 130 million they carried before 10 February 2026. Then open the
          original recordings: the difference is there. Had the streams been removed as
          fraudulent, they would not appear on the originals either.
        </p>
        <p className={styles.p}>
          This site&apos;s own streaming figures are read from the platform after the
          correction, so nothing here was ever inflated by the merge. How every number is
          sourced is set out on the{" "}
          <Link href="/methodology" className={styles.link}>methodology page</Link>, and the
          current totals are on{" "}
          <Link href="/records/by-the-numbers" className={styles.link}>by the numbers</Link>.
        </p>
      </section>

      <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="faq">
        <h2 id="faq" className={styles.h2}>Common questions</h2>
        <div className={styles.faqList}>
          {faqs.map((f) => (
            <div key={f.q} className={styles.faqItem}>
              <h3 className={styles.faqQ}>{f.q}</h3>
              <p className={styles.faqA}>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <KeepExploring current="/analysis" />
    </main>
  );
}
