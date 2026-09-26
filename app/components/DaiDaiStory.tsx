import Link from "next/link";
import styles from "./DaiDaiStory.module.css";
import DaiDaiBackBar from "./DaiDaiBackBar";
import { daiDaiFigures, EN_FIGURE_LABELS, type FigureLabels } from "./DaiDaiFigures";
import { cardinalWord } from "../lib/plural";
import { daiDaiNumberOnes, weeksAtPeak } from "../data/charts";
import { daiDaiCertCount } from "../data/certifications";
import { DAI_DAI_RELEASE_DATE, DAI_DAI_HALFTIME_DATE } from "../data/daiDai";

// Every figure here is "Dai Dai"'s OWN — never Burna Boy's artist-wide totals
// (monthly listeners, YouTube audience, career certs). Burna had a huge
// catalogue and was already climbing before this song; the page credits the
// song for what the song did, and keeps Shakira in frame as the co-lead.
//
// The story, as redesigned on 26 Sep 2026 (docs/design/dai-dai-redesign,
// designs/desktop/Dai Dai Redesign.dc.html, approved by Paul):
//   - desktop: each chapter is one row — the text at 56ch on the left, its own
//     figure on the right at 620px, sized to its content. No sticky 572px stage
//     and no ~830px of scroll per chapter; no blurred backdrop, so the h1 is
//     the page's largest first paint;
//   - phone: figure, then kicker, title and sentence, all scrolling together —
//     nothing pinned under the back bar — with the back bar's counter reading
//     the chapter whose kicker has crossed the bar, and clearing once the story
//     has ended;
//   - seven figures, one per chapter, all drawn from data (DaiDaiFigures).
//
// A server component: the figures read charts.ts and certifications.ts, and
// only the back bar's counter needs the browser.

export type SceneKey =
  | "hero"
  | "global1"
  | "no1s"
  | "streaming"
  | "certs"
  | "worldsong"
  | "halftime";

export interface Step {
  scene: SceneKey;
  kicker: string;
  title: string;
  body: string;
  /** An arrow link under the sentence, to the page that holds the detail. */
  link?: { href: string; label: string };
}

/** The story's own chrome words, per edition. Placeholders: {n}, {from}, {to}. */
export interface StoryLabels {
  story: string;
  /** "{n} chapters · {from} → {to}" */
  meta: string;
  end: string;
  back: string;
  menu: string;
}

export const EN_STORY_LABELS: StoryLabels = {
  story: "The story",
  meta: "{n} chapters · {from} → {to}",
  end: "End of the story",
  back: "Back",
  menu: "Open menu",
};

interface Props {
  /** Which language to spell counts in, and to date the chrome in. */
  lang?: "en" | "es";
  /** Override the narrative — the Spanish edition passes its own. */
  steps?: Step[];
  labels?: StoryLabels;
  figureLabels?: FigureLabels;
}

// The narrative — framed as the Shakira × Burna Boy collaboration it is, not one
// artist's star power. Numbers are injected from live data so it never goes stale.
function buildSteps(p: { daiDaiNo1s: number; daiDaiCerts: number; weeksGLB: number | null; weeksGLBX: number | null; lang: "en" | "es" }): Step[] {
  return [
    {
      scene: "hero",
      kicker: "15 May 2026",
      title: "A World Cup anthem, together",
      body: "The 2026 FIFA World Cup unveiled its official song — “Dai Dai”, a collaboration between two global superstars: Shakira and Burna Boy. Latin pop meets Afrobeats on the planet's biggest stage.",
    },
    {
      scene: "global1",
      kicker: "The record",
      title: "No. 1 on the Billboard Global 200",
      body: `Within weeks their song topped Billboard's flagship, US-inclusive worldwide chart — Shakira's second-ever Global 200 No. 1, and the first time in history an African artist has helped lead it. After four straight weeks it slipped to No. 3, then took the chart back for three weeks — the issues of 22 and 29 August and 5 September — ${cardinalWord(p.weeksGLB, p.lang)} weeks at No. 1 in all. On the Global 200 Excl. US it ran ${cardinalWord(p.weeksGLBX, p.lang)} straight weeks at No. 1, 4 July to 5 September.`,
    },
    {
      scene: "no1s",
      kicker: "Worldwide",
      title: "No. 1 in country after country",
      body: `“Dai Dai” hit No. 1 in ${p.daiDaiNo1s} countries — from France and Germany to the Netherlands and the UAE — and topped both of Billboard's global charts. The reach of a true worldwide collaboration.`,
      link: { href: "/records/charts?song=Dai%20Dai", label: "Every chart position" },
    },
    {
      scene: "streaming",
      kicker: "On streaming",
      title: "The most-streamed song on Earth",
      body: "“Dai Dai” topped Spotify's Global Top Songs chart on both the Daily and Weekly lists — 37 days as the single most-streamed song on the planet, a run reclaimed in August, and the first time an African artist has ever led it.",
    },
    {
      scene: "certs",
      kicker: "Certified worldwide",
      title: "The plaques rolled in",
      body: `The song earned its own plaques — Diamond in France, 2× Platinum in Canada, 6× Platinum (Latin) in the US, Platinum in Spain, Slovakia, Portugal, Hungary, Austria, Greece and Sweden, Gold in Colombia, the Czech Republic, Italy, Poland, Belgium and Germany, and Silver in the UK. ${p.daiDaiCerts} certifications for Shakira and Burna Boy's collaboration, and counting.`,
      link: { href: "/certifications#release=Dai%20Dai", label: "All certifications" },
    },
    {
      scene: "worldsong",
      kicker: "The record",
      title: "The biggest World Cup anthem ever",
      body: "No FIFA World Cup song has ever charted this high: “Dai Dai” is the highest-peaking World Cup anthem in Spotify Global history — Shakira's Latin pop and Burna Boy's Afrobeats meeting at the very top.",
    },
    {
      scene: "halftime",
      kicker: "History made · 19 July",
      title: "History on the World Cup Final stage",
      body: "Shakira and Burna Boy took “Dai Dai” to the first-ever FIFA World Cup Final halftime show at MetLife Stadium on 19 July — before a global audience of billions, alongside Madonna, BTS and Justin Bieber.",
    },
  ];
}

const pad = (n: number) => String(n).padStart(2, "0");
/** A word with an accented letter — Spanish, in practice ("dúo", "más"). */
const ACCENTED = /[ÁÉÍÓÚÑÜáéíóúñü]/;

/**
 * Room for a capital's accent, only on the lines that carry one.
 *
 * Uppercase Anton puts an acute 1.10em above the baseline (Ú: 2254 of 2048
 * units) and the drawn title line height is 0.95, so an accented word that
 * wraps onto a second line cuts into the letters above it — "DÚO" under "UN",
 * the collision the brief's Spanish screenshot shows even at 1.05. Each such
 * word becomes an inline-block with top padding, which deepens only the line
 * it sits on; every other line keeps the drawn 0.95.
 */
function withAccentRoom(title: string) {
  if (!ACCENTED.test(title)) return title;
  return title.split(/(\s+)/).map((part, i) =>
    ACCENTED.test(part) ? (
      <span key={i} className={styles.accentWord}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}
const fill = (t: string, v: Record<string, string | number>) =>
  t.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? `{${k}}`));
const dayMonth = (iso: string, locale: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString(locale, { day: "numeric", month: "long", timeZone: "UTC" });

export default function DaiDaiStory({ lang = "en", steps, labels = EN_STORY_LABELS, figureLabels = EN_FIGURE_LABELS }: Props) {
  const chapters =
    steps ??
    buildSteps({
      daiDaiNo1s: daiDaiNumberOnes,
      daiDaiCerts: daiDaiCertCount,
      weeksGLB: weeksAtPeak("Dai Dai", "GLB"),
      weeksGLBX: weeksAtPeak("Dai Dai", "GLBX"),
      lang,
    });
  const figures = daiDaiFigures(figureLabels);
  const locale = figureLabels.locale;

  return (
    <>
      {/* Phone only: the back bar, whose counter follows the chapters. */}
      <DaiDaiBackBar total={chapters.length} back={labels.back} menu={labels.menu} />

      <div className={styles.story}>
        <div className={styles.head}>
          <span className={styles.headTitle}>{labels.story}</span>
          <span className={styles.headMeta}>
            {fill(labels.meta, {
              n: chapters.length,
              from: dayMonth(DAI_DAI_RELEASE_DATE, locale),
              to: dayMonth(DAI_DAI_HALFTIME_DATE, locale),
            })}
          </span>
        </div>

        {chapters.map((s, i) => (
          <div key={s.scene} className={styles.chapter}>
            <div className={styles.text}>
              <div className={styles.kicker} data-dd-kicker="">
                <span className={styles.num}>{pad(i + 1)}</span>
                <span className={styles.rule} aria-hidden="true" />
                {s.kicker}
              </div>
              <h2 className={styles.title}>{withAccentRoom(s.title)}</h2>
              <p className={styles.body}>{s.body}</p>
              {s.link ? (
                <Link className={styles.link} href={s.link.href}>
                  {s.link.label} <span aria-hidden="true">↗</span>
                </Link>
              ) : null}
            </div>
            <div className={`${styles.figure} ${styles[`fh${i + 1}`] ?? ""}`}>{figures[i]}</div>
          </div>
        ))}

        <div className={styles.end} data-dd-story-end="">
          {labels.end}
        </div>
      </div>
    </>
  );
}
