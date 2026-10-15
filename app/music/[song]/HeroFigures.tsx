import styles from "./song.module.css";
import type { ReleaseFigures } from "../../lib/releaseFigures";

/**
 * The hero's figure column, on the song and album pages alike (Job 4 · J4-5,
 * fixes 82, 88, 89): countries charted, best chart peak, certifications.
 *
 * The figures are lib/releaseFigures' — the lookups the /music cards make — so
 * a card and its page never print two numbers. At ≥1240 a 320px column on a
 * solid --bg-soft panel, whatever the cover behind it; at 901–1239 one row of
 * three under the content; on a phone it is not drawn, and the "By the
 * numbers" grid keeps the three cards it holds at ≥901 (.inHero).
 *
 * A record that holds nothing — no chart run, no certification — prints "—"
 * over each label (fix 82). A release that charted but holds no certification
 * prints its 0: that is a figure, not an absence (C-15).
 */
export default function HeroFigures({ figures: f }: { figures: ReleaseFigures }) {
  const none = f.bestPeak === null && f.certs === 0;
  const cells = [
    { v: none ? null : `${f.countries}`, l: !none && f.countries === 1 ? "country charted" : "countries charted" },
    { v: f.bestPeak === null ? null : `No. ${f.bestPeak}`, l: "best chart peak" },
    { v: none ? null : `${f.certs}`, l: !none && f.certs === 1 ? "certification" : "certifications" },
  ];
  return (
    <div className={styles.heroFigures}>
      {cells.map((c) => (
        <div key={c.l} className={styles.heroFig}>
          <span className={`${styles.heroFigValue} ${c.v === null ? styles.heroFigMissing : ""}`}>{c.v ?? "—"}</span>
          <span className={styles.heroFigLabel}>{c.l}</span>
        </div>
      ))}
    </div>
  );
}
