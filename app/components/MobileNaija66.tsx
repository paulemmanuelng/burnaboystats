import Link from "next/link";
import styles from "./mobileNaija66.module.css";
import BackLink from "./BackLink";
import MobileMenuButton from "./MobileMenuButton";
import { HuntBoard, HuntFlowBox } from "./Naija66Play";
import Naija66Words from "./Naija66Words";
import { DROP_HOURS, HOW_IT_WORKS, PRIZE, RULES, WHERE_NEXT } from "../lib/naija66/copy";
import { NAIJA66_X_URL } from "../data/naija66";

/**
 * The /naija66 phone screen.
 *
 * Its own running order for a thumb: how to win straight under the title,
 * then the board, the steps and the rules. Back bar like /contact's (so /naija66 is in BACK_BAR_ROUTES), and
 * the five-tab bar at its foot (so it is not an ACTION_BAR route).
 *
 * Every word it prints comes from lib/naija66/copy.ts, the same list the
 * desktop page prints.
 */
export default function MobileNaija66() {
  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Naija @ 66</span>
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>
          <span className={styles.flag} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>Independence Day · 1 Oct</span>
        </div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the
            document carries two — one per layout, only ever one visible. */}
        <h1 className={styles.title}>
          Naija @ <span className={styles.green}>66</span>
        </h1>
        <p className={styles.lede}>
          Five codes hide in words on pages of Burna Boy Stats, one at each drop. Tap the right
          word first and win {PRIZE.long}.
        </p>
        <p className={styles.drops}>
          <span className={styles.liveDot} aria-hidden="true" />
          Codes appear {DROP_HOURS} WAT
        </p>
        <a href={NAIJA66_X_URL} target="_blank" rel="noopener noreferrer" className={styles.xLink}>
          {WHERE_NEXT} ↗
        </a>
      </div>

      <HuntFlowBox layout="phone" />

      {/* The board */}
      <section className={styles.section} aria-labelledby="m-naija66-board">
        <div className={styles.sectionKicker}>Five prizes</div>
        <h2 id="m-naija66-board" className={styles.sectionTitle}>
          The board
        </h2>
      </section>
      <HuntBoard layout="phone" />

      {/* How it works */}
      <section className={styles.section} aria-labelledby="m-naija66-how">
        <div className={styles.sectionKicker}>Four steps</div>
        <h2 id="m-naija66-how" className={styles.sectionTitle}>
          How it works
        </h2>
        <ol className={styles.steps}>
          {HOW_IT_WORKS.map((s, i) => (
            <li key={s.title} className={styles.step}>
              <span className={styles.stepNo}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepText}>
                  <Naija66Words words={s.words} />
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Rules */}
      <section className={styles.section} aria-labelledby="m-naija66-rules">
        <div className={styles.sectionKicker}>The small print</div>
        <h2 id="m-naija66-rules" className={styles.sectionTitle}>
          Rules
        </h2>
        <ul className={styles.rules}>
          {RULES.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <p className={styles.note}>
          Burna Boy Stats is an unofficial fan site. <Link href="/">Back to the stats →</Link>
        </p>
      </section>
    </div>
  );
}
