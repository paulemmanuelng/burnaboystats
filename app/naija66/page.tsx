import Link from "next/link";
import styles from "./naija66.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileNaija66 from "../components/MobileNaija66";
import { HuntBoard, HuntFlowBox } from "../components/Naija66Play";
import Naija66Words from "../components/Naija66Words";
import { pageMetadata } from "../lib/seo";
import { DROPPED, ENDED, HOW_IT_WORKS, LEDE, PRIZE, RULES, X_LINK } from "../lib/naija66/copy";
import { NAIJA66_X_URL } from "../data/naija66";

export const metadata = pageMetadata({
  title: "Naija @ 66 — Burna Boy Stats Independence Day Hunt",
  description: `Nigeria turned 66 on 1 October 2026. Five codes hid in words on Burna Boy Stats, each worth ${PRIZE.long}. The hunt has ended.`,
  path: "/naija66",
  shareTitle: "Naija @ 66 — the Independence Day key hunt",
  shareDescription: `Five codes hid in words on Burna Boy Stats on 1 October 2026, each worth ${PRIZE.long}. The hunt has ended — see the final board.`,
});

/**
 * /naija66 — Nigeria's 66th Independence Day key hunt (1-2 October 2026).
 *
 * The hunt has ended (2 Oct 2026, midnight WAT): the page stays up as its
 * record — the final board of the five prizes, how it worked and the rules,
 * all in the past tense. Fully static: no poll and no API. The phone screen
 * is MobileNaija66; the desktop page is below.
 */
export default function Naija66Page() {
  return (
    <main id="content">
      <MobileNaija66 />

      <div className={styles.desktopOnly}>
        <BreadcrumbBar path="/naija66" />

        {/* ── Hero, with the flow box as its right column ───────────── */}
        <section className={styles.band}>
          <div className={`${styles.wide} ${styles.hero}`}>
            <div>
              <div className={styles.eyebrow}>
                <span className={styles.flag} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span>Nigeria at 66 · Independence Day · 1 October 2026</span>
              </div>
              <h1 className={styles.h1}>
                Naija @ <span className={styles.green}>66</span>
              </h1>
              <p className={styles.lede}>{LEDE}</p>
              <p className={styles.drops}>
                {/* No separator: the flex gap spaces the link, and it wraps to its own
                    line at 1440 without leaving a dangling "·" behind. */}
                {ENDED} {DROPPED}
                <a href={NAIJA66_X_URL} target="_blank" rel="noopener noreferrer" className={styles.xLink}>
                  {X_LINK} ↗
                </a>
              </p>
            </div>
            <HuntFlowBox layout="desktop" />
          </div>
        </section>

        {/* ── The board ─────────────────────────────────────────────── */}
        <section className={styles.band} aria-labelledby="naija66-board">
          <div className={`${styles.wide} ${styles.section}`}>
            <div className={styles.eyebrow}>Five prizes</div>
            <h2 id="naija66-board" className={styles.h2}>
              The <span className={styles.green}>board</span>
            </h2>
            <HuntBoard layout="desktop" />
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────── */}
        <section className={styles.band} aria-labelledby="naija66-how">
          <div className={`${styles.wide} ${styles.section}`}>
            <div className={styles.eyebrow}>Four steps</div>
            <h2 id="naija66-how" className={styles.h2}>
              How it worked
            </h2>
            <ol className={styles.steps}>
              {HOW_IT_WORKS.map((s, i) => (
                <li key={s.title} className={styles.step}>
                  <span className={styles.stepNo}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepText}>
                    <Naija66Words words={s.words} />
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Rules ─────────────────────────────────────────────────── */}
        <section className={styles.bandLast} aria-labelledby="naija66-rules">
          <div className={`${styles.wide} ${styles.section}`}>
            <div className={styles.eyebrow}>The small print</div>
            <h2 id="naija66-rules" className={styles.h2}>
              Rules
            </h2>
            <ul className={styles.rules}>
              {RULES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className={styles.back}>
              Burna Boy Stats is an unofficial fan site. <Link href="/">← Back to the stats</Link>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
