import FaqList, { type Faq } from "./FaqList";
import styles from "./mobileFaqSection.module.css";

/**
 * The FAQ section on a bespoke mobile screen.
 *
 * Three routes hand their whole phone layout to a screen of their own —
 * /afrobeats/[artist] to MobileCerts, /records/awards to MobileAwards,
 * /records/africas-biggest to MobileAfricasBiggest — while their FAQ sat in
 * the page's `.desktopOnly` half, which is `display: none` below 900px. All
 * three emit FAQPage structured data at every width, so that was #170 again on
 * seventeen more routes: the questions went to Googlebot (which renders at
 * phone width) and to the reader who searched them, and the answers did not.
 * Un-hiding the desktop half was not an option — it would paint the entire
 * desktop tree on a phone — so the answers had to be rendered INSIDE the
 * mobile screen instead, which is what this is.
 *
 * Shared rather than written out three times because a question and its answer
 * look the same on all three: this is screen 08's row rhythm (an 18px band per
 * question, the answer 6px under it, ruled off), which is the site's one mobile
 * FAQ language and the rhythm /music/[song] and /dai-dai already borrowed for
 * their own phone FAQs. Three copies of it in three stylesheets is three
 * chances to drift. The section's own chrome is deliberately plain — a rule and
 * an Anton heading — so it reads as a trailing section on any of the three
 * screens without borrowing whichever accent that screen spends elsewhere.
 *
 * The fold, and the fact that it cannot put #170 back, is all in FaqList: it
 * renders flat and open on the server and collapses only after mount, at phone
 * width, so every answer is in the served HTML and survives a reader whose
 * JavaScript never lands.
 */
export default function MobileFaqSection({
  title,
  items,
}: {
  /** The desktop section's own heading, verbatim — the two layouts state the
   *  same thing, and passing it keeps them from drifting apart. */
  title: string;
  items: Faq[];
}) {
  // No id, deliberately. The desktop copy on two of these routes anchors at
  // `#faq`, and both layouts sit in the same document — a second `#faq` here
  // would resolve to whichever of the two is display:none. If this section ever
  // needs a jump target it takes an `m-` prefix, the way MobileFaq's do.
  return (
    <section className={styles.faq}>
      {/* h2. Every one of these screens puts its <h1> in the hero and its
          section headings at h2, and FaqList writes the questions as h3s. */}
      <h2 className={styles.title}>{title}</h2>
      <FaqList
        items={items}
        classes={{ list: styles.list, item: styles.item, q: styles.q, a: styles.a }}
      />
    </section>
  );
}
