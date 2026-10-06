import Link from "next/link";
import styles from "./unmerge.module.css";
import KeepExploring from "../../components/KeepExploring";
import BreadcrumbBar from "../../components/BreadcrumbBar";
import MobileUnmerge, { type SumStep } from "../../components/MobileUnmerge";
import { pageMetadata, CANONICAL_ORIGIN, SITE_NAME, BURNA_BOY_REF } from "../../lib/seo";
import { spotifyTotalStreams, spotifyTotalStreamsExact } from "../../data/streamingTotals";

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
 * the two remixes today at roughly 52.1M and 3.4M — not the ~232M and ~130M they
 * carried before 10 February. The figures below are stated as "roughly" where
 * they move daily, and exactly where they are fixed points in the arithmetic.
 */

const VERIFIED_ON = "17 September 2026";
// What the two remixes read at Spotify on VERIFIED_ON — one home each, printed
// in the FAQ and the prose (they were typed twice and could have disagreed).
// Rounded to the 100,000 because they move daily; re-read them together with
// the date, never one without the other.
const ENJOY_NOW = "52.1 million";
const FINDERS_NOW = "3.4 million";
// The day this correction was published, and the day the two remixes were read
// at source. A publication date does not move, so it is deliberately NOT taken
// from the updates feed: datePublished was reading `lastUpdated`, the newest
// date anywhere on the site, so the ClaimReview re-dated itself every time an
// unrelated fact was logged. dateModified read lastUpdated too until the
// review of the 5 Oct 2026 debug PR (seo-12), and is gone: that is the newest
// date anywhere in the feed (10-04 on 5 Oct), not this page's, and the sitemap
// dates the route by its own feed entries (09-17). What moves here is the stats
// bot's daily career total, which carries no as-of date. If the bot ever writes
// one beside spotifyTotalStreamsExact, that date can be dateModified here and
// a contentStamp entry in app/sitemap.ts, both at once.
const PUBLISHED = "2026-08-21";

// The one live input on this page, and everything after it is derived.
//
// spotifyTotalStreams is the site's own published career figure, written daily
// by the stats bot — so quoting it here means this page moves with the rest of
// the site instead of freezing on the day it was written. It is a display
// string ("10.78B"), rounded to two decimals, and that rounding is the reason
// the gain below is stated as "about": deriving an exact-looking 1,580,447,326
// from a rounded input would be false precision dressed up as arithmetic.
const CORRECTED_2025_CLOSE = 9_199_552_674;

/** "10,778,724,833" -> 10778724833. Returns null for anything unexpected rather
 *  than guessing, so a change in the bot's format shows up as an absent
 *  sentence rather than a wrong number. */
function parseExact(display: string): number | null {
  if (!/^[\d,]+$/.test(display.trim())) return null;
  const n = Number(display.replace(/,/g, ""));
  return Number.isFinite(n) && n > 0 ? n : null;
}

const totalToday = parseExact(spotifyTotalStreamsExact);
const gainedSinceCorrection = totalToday === null ? null : totalToday - CORRECTED_2025_CLOSE;
/** The gain, exact, with a rounded gloss — the digits for anyone checking the
 *  subtraction, the billions for anyone reading the sentence. */
const exactly = (n: number) => n.toLocaleString("en-US");
const asBillions = (n: number) => `${(n / 1_000_000_000).toFixed(2)} billion`;

// The arithmetic, as separate rows so it can be read line by line rather than
// taken on trust. Every figure here is a fixed point in the calculation, not a
// live number — these do not move, which is why they are written down.
//
// `step` is how each row reads in the ledger (design response item 51): a
// remix's "before" and "after" share one tinted group, and a "result" is
// marked = under a heavier rule. The labels and notes are unchanged.
const SUMS: { label: string; value: string; note?: string; step?: SumStep }[] = [
  { label: "Career Spotify streams, 31 December 2025", value: "9,508,991,024", note: "as his counter then read" },
  { label: "“Enjoy Yourself — Remix”, before the correction", value: "232,346,699", step: "before" },
  { label: "“Enjoy Yourself — Remix”, after", value: "50,077,530", note: "moved to the original: 182,269,169", step: "after" },
  { label: "“Finders Keepers — Remix”, before", value: "130,244,873", step: "before" },
  { label: "“Finders Keepers — Remix”, after", value: "3,075,692", note: "moved to the original: 127,169,181", step: "after" },
  { label: "Total reallocated to the original recordings", value: "309,438,350", note: "not deleted — moved", step: "result" },
  { label: "His true 2025 closing total", value: "9,199,552,674", note: "9,508,991,024 − 309,438,350", step: "result" },
  { label: "His counter on 12 February 2026", value: "9,438,600,171" },
  { label: "Actual streams gained in 2026 by then", value: "+239,047,497", note: "9,438,600,171 − 9,199,552,674", step: "result" },
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
    a: `His career total stands at ${spotifyTotalStreamsExact} (${spotifyTotalStreams}), built daily from Spotify's per-track counts (kworb's mirror, anchored to a dated ChartMasters read). Measured against his corrected 2025 close of 9,199,552,674 — the figure after the reallocated streams were taken out — that is ${totalToday !== null ? exactly(totalToday - CORRECTED_2025_CLOSE) : "over a billion"} added since. Every one of those arrived on a counter that no longer contained the moved streams.`,
  },
  {
    q: "How can this be checked?",
    a: `Open the two remixes on Spotify. As of ${VERIFIED_ON} they show roughly ${ENJOY_NOW} and ${FINDERS_NOW} plays — not the 232 million and 130 million they carried before 10 February 2026. If the streams had been deleted as fraudulent they would not appear on the original recordings either, and they do.`,
  },
];

// Every sentence lives here once and both layouts print it: the phone screen
// (MobileUnmerge) and the desktop column are separate designs carrying the
// same words. The answer and the questions are quoted and feed the structured
// data below, so they are never reworded.

// The answer, complete, in the first two sentences — so it can be lifted on
// its own without the rest of the page for context.
const ANSWER = (
  <>
    <strong>No.</strong> In February 2026 Spotify un-merged two remixes whose play
    counts had been wrongly combined with the original recordings, and about{" "}
    <strong>309 million streams moved to those originals</strong>. Nothing was
    deleted, and nothing was flagged as artificial — a reallocation and a purge look
    the same on a running total, and are not the same event.
  </>
);
const SUB = `Verified against Spotify's own per-track counts on ${VERIFIED_ON}. Every figure below is checkable, and the arithmetic is set out rather than asserted.`;

const WHAT_HAPPENED = [
  <>
    Spotify sometimes combines the play counts of two recordings it treats as one
    track — most often an original and a remix that share a title. While they are
    merged, both display the combined figure. Two of Burna Boy&apos;s guest
    appearances were in that state:{" "}
    <strong>&ldquo;Enjoy Yourself (Remix)&rdquo;</strong> with Pop Smoke and{" "}
    <strong>&ldquo;Finders Keepers (Remix)&rdquo;</strong>.
  </>,
  <>
    On 10 February 2026 Spotify separated them. Each recording kept only the plays it
    had earned, so the remixes fell and the originals rose by the same amount. The
    plays still exist and are still on the platform; they are simply counted against
    the version that earned them. Because the remixes are the versions Burna Boy
    appears on, his artist total fell by the difference.
  </>,
];

const ARITHMETIC_INTRO =
  "These are fixed points, not live figures — which is why they are written down rather than derived. Read down the column and the total resolves.";
const ARITHMETIC_CLOSE = (
  <>
    So the year that supposedly went backwards was, in fact,{" "}
    <strong>239 million streams forward</strong> by 12 February. The drop everyone
    saw was a correction applied to the past, not a loss in the present.
  </>
);

// "Where that leaves him today": null when the career total cannot be read,
// and then the figure block and both paragraphs go together (item 52).
const today =
  totalToday !== null && gainedSinceCorrection !== null
    ? {
        total: spotifyTotalStreamsExact,
        paragraphs: [
          <>
            His career Spotify total now stands at{" "}
            <strong>{spotifyTotalStreamsExact}</strong> ({spotifyTotalStreams}) — exactly{" "}
            <strong>{exactly(gainedSinceCorrection)}</strong> more than the corrected 2025
            close of 9,199,552,674, or about {asBillions(gainedSinceCorrection)}. Every
            one of those was added after the correction, on a counter that already had
            the reallocated streams taken out of it.
          </>,
          <>
            That is the number the &ldquo;bot purge&rdquo; framing cannot account for. A
            catalogue that had been inflated by fake plays does not add{" "}
            {asBillions(gainedSinceCorrection)} in the months after the platform
            supposedly cleaned it up.
          </>,
        ],
      }
    : null;
const TODAY_NOTE =
  "The career total is built daily from Spotify's per-track counts via kworb, anchored to ChartMasters, and updates on its own, so this figure moves; the table above is fixed points that do not. Both the exact count and the rounded one are written by the same daily job, so they can never disagree — and the subtraction is shown in full rather than rounded, because a page arguing that the numbers can be checked should let you check this one.";

/** "How to check it yourself". `link` is the layout's own class for a link in
 *  running prose. */
const checkIt = (link: string) => [
  <>
    Open the two remixes on Spotify. As of {VERIFIED_ON} they show roughly{" "}
    <strong>{ENJOY_NOW}</strong> and <strong>{FINDERS_NOW}</strong> plays — not the
    232 million and 130 million they carried before 10 February 2026. Then open the
    original recordings: the difference is there. Had the streams been removed as
    fraudulent, they would not appear on the originals either.
  </>,
  <>
    This site&apos;s own streaming figures are built from the platform&apos;s per-track
    counts after the correction, so nothing here was ever inflated by the merge. How every number is
    sourced is set out on the{" "}
    <Link href="/methodology" className={link}>methodology page</Link>, and the
    current totals are on{" "}
    <Link href="/records/by-the-numbers" className={link}>by the numbers</Link>.
  </>,
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
  // An Article (and ClaimReview) in its structured data, so an article card too.
  article: { publishedTime: PUBLISHED },
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
    datePublished: PUBLISHED,
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
    datePublished: PUBLISHED,
    inLanguage: "en",
    author: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    publisher: { "@type": "Organization", name: SITE_NAME, url: CANONICAL_ORIGIN },
    about: BURNA_BOY_REF,
    url: `${CANONICAL_ORIGIN}/analysis/spotify-unmerge`,
  };

  return (
    <main id="content">
      {/* Emitted once for the page, never again from the phone tree (item 78). */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* The phone screen: its own back bar, no masthead and no breadcrumb
          (design response items 42–44). It comes first, so the FAQ answers a
          phone reader sees are the first copy in the document
          (tests/faqMobileVisibility.test.tsx). */}
      <MobileUnmerge
        answer={ANSWER}
        sub={SUB}
        whatHappened={WHAT_HAPPENED}
        arithmeticIntro={ARITHMETIC_INTRO}
        sums={SUMS}
        arithmeticClose={ARITHMETIC_CLOSE}
        today={today}
        todayNote={TODAY_NOTE}
        checkIt={checkIt}
        faqs={faqs}
      />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/analysis/spotify-unmerge" />

        <section className={`${styles.wrap} ${styles.heroPad}`}>
          <div className={styles.kicker}>The February 2026 correction</div>
          <h1 className={styles.h1}>
            Did Burna Boy lose Spotify streams <span className="inkText">to bots?</span>
          </h1>
          <p className={styles.answer}>{ANSWER}</p>
          <p className={styles.sub}>{SUB}</p>
        </section>

        <section className={`${styles.wrap} ${styles.sectionPad}`} aria-labelledby="what">
          <h2 id="what" className={styles.h2}>What actually happened</h2>
          {WHAT_HAPPENED.map((body, i) => (
            <p key={i} className={styles.p}>{body}</p>
          ))}

          <h2 className={styles.h2}>The arithmetic</h2>
          <p className={styles.p}>{ARITHMETIC_INTRO}</p>
          {/* Item 51: narrowed to 600px so each value sits beside its label;
              each remix's before and after share a tinted group; = marks the
              three results under a heavier rule, and is aria-hidden. The
              values are fixed literals, in ink (item 55). */}
          <dl className={styles.sums}>
            {SUMS.map((s) => (
              <div key={s.label} className={`${styles.sumRow} ${s.step ? styles[s.step] : ""}`}>
                <dt className={styles.sumLabel}>
                  {s.label}
                  {s.note ? <span className={styles.sumNote}>{s.note}</span> : null}
                </dt>
                <dd className={styles.sumValue}>
                  <span className={styles.sumOp} aria-hidden="true">
                    {s.step === "result" ? "=" : ""}
                  </span>
                  <span className={styles.sumFigure}>{s.value}</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className={styles.p}>{ARITHMETIC_CLOSE}</p>

          <h2 className={styles.h2}>Where that leaves him today</h2>
          {today ? (
            <>
              {/* Item 52: the page's one live figure, in its own block, inside
                  the same condition as the two paragraphs. */}
              <div className={styles.liveBlock}>
                <div className={styles.liveLabel}>
                  <span className={styles.liveDot} aria-hidden="true" />
                  Career Spotify streams · updates daily
                </div>
                <div className={styles.liveValue}>{today.total}</div>
              </div>
              {today.paragraphs.map((body, i) => (
                <p key={i} className={styles.p}>{body}</p>
              ))}
            </>
          ) : null}
          <p className={styles.sub}>{TODAY_NOTE}</p>

          <h2 className={styles.h2}>How to check it yourself</h2>
          {checkIt(`${styles.link} proseLink`).map((body, i) => (
            <p key={i} className={styles.p}>{body}</p>
          ))}
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
      </div>

      {/* Once, for both layouts. Its own route, not "/analysis": passing the
          parent's path handed this page the parent's explore list, and left
          the list authored for this one in links.ts unreachable. */}
      <KeepExploring current="/analysis/spotify-unmerge" />
    </main>
  );
}
