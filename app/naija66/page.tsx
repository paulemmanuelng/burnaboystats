import Link from "next/link";
import styles from "./naija66.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import MobileNaija66 from "../components/MobileNaija66";
import Naija66Provider from "../components/Naija66Provider";
import { HuntBoard, HuntKeyForm } from "../components/Naija66Play";
import { pageMetadata } from "../lib/seo";
import { DROP_HOURS, HOW_IT_WORKS, RULES } from "../lib/naija66/copy";
import { NAIJA66_X_HANDLE, NAIJA66_X_URL } from "../data/naija66";

export const metadata = pageMetadata({
  title: "Naija @ 66 — Burna Boy Stats Independence Day Hunt",
  description:
    "Nigeria turns 66 on 1 October. Five keys are hidden across Burna Boy Stats — enter one first and win a month of Spotify Premium. Free to play.",
  path: "/naija66",
  shareTitle: "Naija @ 66 — the Independence Day key hunt",
  shareDescription: "Five keys hidden across Burna Boy Stats on 1 October. Find one first, win a month of Spotify Premium.",
});

/**
 * /naija66 — Nigeria's 66th Independence Day key hunt (1-2 October 2026).
 *
 * The rules, the live board of the five prizes and the key box. The page is
 * static; everything that moves (the board, a claim, a winner's code) comes
 * from /api/naija66/* in the browser, through one Naija66Provider shared by
 * both layouts. The phone screen is MobileNaija66; the desktop page is below.
 */
export default function Naija66Page() {
  return (
    <main id="content">
      <Naija66Provider>
        <MobileNaija66 />

        <div className={styles.desktopOnly}>
          <BreadcrumbBar path="/naija66" />

          {/* ── Hero, with the key box as its right column ────────────── */}
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
                <p className={styles.lede}>
                  Five keys are hidden across Burna Boy Stats. Follow the clues on X, find the
                  badge, and be the first to enter its key — each one wins a month of Spotify
                  Premium.
                </p>
                <p className={styles.drops}>
                  <span className={styles.liveDot} aria-hidden="true" />
                  Keys drop at {DROP_HOURS} WAT on 1 October ·{" "}
                  <a href={NAIJA66_X_URL} target="_blank" rel="noopener noreferrer" className={styles.xLink}>
                    Clues from {NAIJA66_X_HANDLE} ↗
                  </a>
                </p>
              </div>
              <HuntKeyForm layout="desktop" />
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
                How it works
              </h2>
              <ol className={styles.steps}>
                {HOW_IT_WORKS.map((s, i) => (
                  <li key={s.title} className={styles.step}>
                    <span className={styles.stepNo}>{String(i + 1).padStart(2, "0")}</span>
                    <h3 className={styles.stepTitle}>{s.title}</h3>
                    <p className={styles.stepText}>{s.text}</p>
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
                Burna Boy Stats is an unofficial fan site. <Link href="/">Back to the stats →</Link>
              </p>
            </div>
          </section>
        </div>
      </Naija66Provider>
    </main>
  );
}
