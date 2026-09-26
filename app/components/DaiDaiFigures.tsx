import type { ReactNode } from "react";
import styles from "./DaiDaiFigures.module.css";
import DaiDaiVideoPoster from "./DaiDaiVideoPoster";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";
import { cardinalWord } from "../lib/plural";
import { allChartItems, CHART_COUNTRIES, weeksAtPeak } from "../data/charts";
import { allItems as certReleases, type Tier } from "../data/certifications";
import {
  DAI_DAI_RELEASE_DATE,
  DAI_DAI_HALFTIME_DATE,
  DAI_DAI_HALFTIME_VIDEO_ID,
  DAI_DAI_GLOBAL_200_RUN,
  DAI_DAI_SPOTIFY_NO1_SPELLS,
  DAI_DAI_SPOTIFY_NO1_DAYS,
  DAI_DAI_SPOTIFY_BODY_READ,
  DAI_DAI_COVER,
} from "../data/daiDai";

/**
 * The seven chapter figures of the Dai Dai story — one component each, drawn
 * from design_handoff_burnaboystats/designs/desktop/Dai Dai Chapter Figure.dc.html
 * (desktop and phone sizes are that file's `desk` and `phone` values).
 *
 * Server components on purpose: they read charts.ts, certifications.ts and
 * daiDai.ts, and none of that belongs in a client bundle. Only the halftime
 * poster is interactive, and it is its own client component.
 *
 * Every figure here is data. The design file's 7, 26, 37, 17 and its sample
 * Global 200 weeks were placeholders; the cells, counts, spells and plaques
 * below are read from the same entries the rest of the page reads, so the
 * figures and the prose beside them move together.
 */

/** The words inside the figures, per edition. Chart names stay as they are —
 *  "Billboard Global 200" is the chart's name in any language. Placeholders:
 *  {n}, {a}, {b}, {dip}, {date}. */
export interface FigureLabels {
  locale: "en-GB" | "es-ES";
  released: string;
  coverAlt: string;
  credit: string;
  weeksAt1: string;
  weekByWeek: string;
  /** A week cell's own label, printed under every fourth bar. */
  weekTick: string;
  /** A week's bar, for a screen reader: "Chart dated {date}: No. {n}". */
  weekRead: string;
  weekUnread: string;
  /** "{a} straight, a week at No. {dip}, then {b} more." */
  globalSpells: string;
  /** "And {n} straight weeks at No. 1 on the Global 200 Excl. US." */
  globalExUs: string;
  countriesAt1: string;
  daysAt1: string;
  /** "Spotify Global daily · {n} spells" — {n} is spelled out. */
  spells: string;
  /** The strip for a screen reader: "{n} days at No. 1, in these spells: {list}". */
  spellsRead: string;
  certs: string;
  /** The tier words, keyed in lower case: a map of words, not of colours
   *  (tests/tierColourParity reads Diamond:/Platinum:… maps as colour maps). */
  tiers: Record<Lowercase<Tier>, string>;
  /** "{n}× {tier}" — a multi-platinum plaque. */
  multiple: string;
  spotifyPeak: string;
  biggest: string;
  /** "{date} · MetLife Stadium" */
  venue: string;
  watch: string;
  play: string;
  videoTitle: string;
}

export const EN_FIGURE_LABELS: FigureLabels = {
  locale: "en-GB",
  released: "Released",
  coverAlt: "Dai Dai single cover — Shakira × Burna Boy, 2026 FIFA World Cup",
  credit: "Shakira × Burna Boy",
  weeksAt1: "weeks at No. 1",
  weekByWeek: "week by week",
  weekTick: "w{n}",
  weekRead: "Chart dated {date}: No. {n}",
  weekUnread: "Chart dated {date}: no reading held",
  globalSpells: "{a} straight, a week at No. {dip}, then {b} more.",
  globalExUs: "And {n} straight weeks at No. 1 on the Global 200 Excl. US.",
  countriesAt1: "countries at No. 1",
  daysAt1: "days at No. 1",
  spells: "Spotify Global daily · {n} spells",
  spellsRead: "{n} days at No. 1, in these spells: {list}.",
  certs: "certifications",
  tiers: { diamond: "Diamond", platinum: "Platinum", gold: "Gold", silver: "Silver" },
  multiple: "{n}× {tier}",
  spotifyPeak: "Spotify Global peak",
  biggest: "The highest-peaking World Cup anthem in Spotify Global history",
  venue: "{date} · MetLife Stadium",
  watch: "Watch the halftime show",
  play: "Play the halftime show",
  videoTitle: "Shakira and Burna Boy at the 2026 FIFA World Cup Final halftime show",
};

const fill = (t: string, v: Record<string, string | number>) =>
  t.replace(/\{(\w+)\}/g, (_, k: string) => String(v[k] ?? `{${k}}`));

const day = (iso: string) => new Date(`${iso}T12:00:00Z`);
const fmt = (iso: string, locale: string, opts: Intl.DateTimeFormatOptions) =>
  day(iso).toLocaleDateString(locale, { ...opts, timeZone: "UTC" });
const DAY_MS = 86_400_000;
const daysBetween = (from: string, to: string) => Math.round((day(to).getTime() - day(from).getTime()) / DAY_MS);

/** The five peak bands (globals.css --peak-band-*), a data colour per position. */
const bandOf = (pos: number) => (pos === 1 ? "b1" : pos <= 5 ? "b5" : pos <= 10 ? "b10" : pos <= 40 ? "b40" : "rest");

const COVER = DAI_DAI_COVER;

// ── Data, derived once ─────────────────────────────────────────────────────

const daiDai = allChartItems.find((r) => r.title === "Dai Dai");

/** The No. 1 countries, longest reign first — the peak-only No. 1s (no week
 *  count published) close the block. Global charts are not countries. */
export const numberOneCountries = (daiDai?.entries ?? [])
  .filter((e) => e.peak === 1 && e.c !== "GLB" && e.c !== "GLBX")
  .sort((a, b) => (b.weeksAtPeak ?? 0) - (a.weeksAtPeak ?? 0) || a.c.localeCompare(b.c, "en"))
  .map((e) => ({ code: e.c, flag: CHART_COUNTRIES[e.c]?.flag ?? "🏳", name: CHART_COUNTRIES[e.c]?.name ?? e.c }));

/** Maximal runs of consecutive No. 1 issues in the Global 200 run. */
export function globalNo1Spells(run: readonly { pos: number | null }[] = DAI_DAI_GLOBAL_200_RUN) {
  const spells: { start: number; length: number }[] = [];
  run.forEach((w, i) => {
    if (w.pos !== 1) return;
    const last = spells[spells.length - 1];
    if (last && last.start + last.length === i) last.length++;
    else spells.push({ start: i, length: 1 });
  });
  return spells;
}

/** One group per plaque kind, in tier order: Diamond, multi-platinum, the
 *  Latin programme's multi-platinum (its own programme, never merged with the
 *  standard one), Platinum, Gold, Silver. */
export function plaqueGroups() {
  const certs = certReleases.find((r) => r.title === "Dai Dai")?.certs ?? [];
  const RANK: Record<Tier, number> = { Diamond: 0, Platinum: 1, Gold: 2, Silver: 3 };
  const groups = new Map<string, { tier: Tier; x: number; programme?: string; codes: string[] }>();
  for (const c of certs) {
    const programme = c.body && /latin/i.test(c.body) ? c.body : undefined;
    const x = c.x ?? 1;
    const key = `${c.level}|${x}|${programme ?? ""}`;
    const g = groups.get(key) ?? { tier: c.level, x, programme, codes: [] };
    g.codes.push(c.c);
    groups.set(key, g);
  }
  return [...groups.values()].sort(
    (a, b) =>
      RANK[a.tier] - RANK[b.tier] ||
      Number(b.x > 1) - Number(a.x > 1) ||
      Number(!!a.programme) - Number(!!b.programme) ||
      b.x - a.x,
  );
}

// ── The seven figures ──────────────────────────────────────────────────────

function Frame({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={`${styles.fig} ${className ?? ""}`}>{children}</div>;
}

/** 01 — the cover and the release date. */
export function FigureRelease({ t }: { t: FigureLabels }) {
  const dayMonth = fmt(DAI_DAI_RELEASE_DATE, t.locale, { day: "numeric", month: "short" }).replace(/\.$/, "");
  const year = fmt(DAI_DAI_RELEASE_DATE, t.locale, { year: "numeric" });
  return (
    <Frame>
      <div className={styles.release}>
        {/* On a phone this is the only cover (the hero's is desktop-only), and
            it sits below the hero on screen 1: eager, so it is there when the
            chapter scrolls in, but low priority, so the text paints first. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className={styles.cover}
          src={spotifyImage(COVER, 300)}
          srcSet={spotifySrcSet(COVER)}
          sizes="(max-width: 900px) 120px, 220px"
          alt={t.coverAlt}
          width={220}
          height={220}
          loading="eager"
          fetchPriority="low"
        />
        <div className={styles.releaseText}>
          <span className={styles.eyebrow}>{t.released}</span>
          <span className={styles.releaseDate}>
            {dayMonth}
            <br />
            {year}
          </span>
          <span className={styles.credit}>{t.credit}</span>
        </div>
      </div>
    </Frame>
  );
}

/** 02 — the Billboard Global 200 run, one cell per issue. A week with no
 *  reading is hatched with a dashed outline and never takes a neighbour's. */
export function FigureGlobalRun({ t }: { t: FigureLabels }) {
  const run = DAI_DAI_GLOBAL_200_RUN;
  const weeks = weeksAtPeak("Dai Dai", "GLB");
  const weeksExUs = weeksAtPeak("Dai Dai", "GLBX");
  const spells = globalNo1Spells(run);
  // "4 straight, a week at No. 3, then 3 more" — only when the run has exactly
  // that shape, with the week between the spells actually read.
  const between = spells.length === 2 ? run.slice(spells[0].start + spells[0].length, spells[1].start) : [];
  const shaped = between.length === 1 && between[0].pos != null;
  return (
    <Frame>
      <div className={styles.head}>
        <span className={styles.big}>{weeks}</span>
        <span className={styles.mid}>{t.weeksAt1}</span>
      </div>
      <div className={styles.eyebrowTight}>Billboard Global 200 · {t.weekByWeek}</div>
      <ol className={styles.bars} style={{ gridTemplateColumns: `repeat(${run.length}, minmax(0, 1fr))` }}>
        {run.map((w, i) => {
          const date = fmt(w.issue, t.locale, { day: "numeric", month: "long", year: "numeric" });
          const said = w.pos == null ? fill(t.weekUnread, { date }) : fill(t.weekRead, { date, n: w.pos });
          return (
            <li key={w.issue} className={styles.barCell} title={said}>
              <span className={styles.barTrack} aria-hidden="true">
                {w.pos == null ? (
                  <span className={`${styles.bar} ${styles.barUnread}`} />
                ) : (
                  <span
                    className={`${styles.bar} ${styles[bandOf(w.pos)]}`}
                    // The design's scale: 56px at No. 1, 9px less per place. A
                    // debut far down the chart keeps a 4px sliver, so a week on
                    // the chart never reads as a week off it.
                    style={{ height: `${Math.max(56 - (w.pos - 1) * 9, 4)}px` }}
                  />
                )}
              </span>
              <span className={styles.barTick} aria-hidden="true">
                {i % 4 === 0 ? fill(t.weekTick, { n: i + 1 }) : ""}
              </span>
              <span className="visuallyHidden">{said}</span>
            </li>
          );
        })}
      </ol>
      <p className={styles.note}>
        {shaped
          ? `${fill(t.globalSpells, { a: spells[0].length, dip: between[0].pos!, b: spells[1].length })} `
          : ""}
        {fill(t.globalExUs, { n: weeksExUs ?? "" })}
      </p>
    </Frame>
  );
}

/** 03 — the No. 1 cells, one per country, from charts.ts. */
export function FigureNumberOnes({ t }: { t: FigureLabels }) {
  const ones = numberOneCountries;
  return (
    <Frame>
      <div className={styles.head}>
        <span className={styles.big}>{ones.length}</span>
        <span className={styles.mid}>{t.countriesAt1}</span>
      </div>
      <ul className={styles.ones}>
        {ones.map((c) => (
          <li key={c.code} className={styles.one} title={c.name}>
            <span className={styles.oneFlag} aria-hidden="true">{c.flag}</span>
            <span className={styles.oneCode} aria-hidden="true">{c.code}</span>
            <span className="visuallyHidden">{c.name}</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

/** 04 — the days at No. 1 on Spotify's global daily chart, as its spells. */
export function FigureSpotifySpells({ t }: { t: FigureLabels }) {
  const spells = DAI_DAI_SPOTIFY_NO1_SPELLS;
  const first = spells[0][0];
  const last = spells[spells.length - 1][1];
  const span = daysBetween(first, last) + 1;
  const on = (i: number) => {
    const iso = new Date(day(first).getTime() + i * DAY_MS).toISOString().slice(0, 10);
    return spells.some(([a, b]) => iso >= a && iso <= b);
  };
  const short = (iso: string) => fmt(iso, t.locale, { day: "numeric", month: "short" }).replace(/\.$/, "");
  const long = (iso: string) => fmt(iso, t.locale, { day: "numeric", month: "long" });
  const list = spells.map(([a, b]) => (a === b ? long(a) : `${long(a)}–${long(b)}`)).join("; ");
  // The halftime show falls inside the run; its tick sits on its own day.
  const mark = daysBetween(first, DAI_DAI_HALFTIME_DATE);
  const markAt = mark > 0 && mark < span - 1 ? ((mark + 0.5) / span) * 100 : null;
  return (
    <Frame>
      <div className={styles.head}>
        <span className={styles.big}>{DAI_DAI_SPOTIFY_NO1_DAYS}</span>
        <span className={styles.mid}>{t.daysAt1}</span>
      </div>
      <div className={styles.eyebrowTight}>{fill(t.spells, { n: cardinalWord(spells.length, t.locale === "es-ES" ? "es" : "en") })}</div>
      <div className={styles.strip} role="img" aria-label={fill(t.spellsRead, { n: DAI_DAI_SPOTIFY_NO1_DAYS, list })}>
        {Array.from({ length: span }, (_, i) => (
          <span key={i} className={on(i) ? styles.dayOn : styles.day} />
        ))}
      </div>
      <div className={styles.ticks} aria-hidden="true">
        <span className={styles.tickStart}>{short(first)}</span>
        {markAt != null ? (
          <span className={styles.tickMid} style={{ left: `${markAt}%` }}>
            {short(DAI_DAI_HALFTIME_DATE)}
          </span>
        ) : null}
        <span className={styles.tickEnd}>{short(last)}</span>
      </div>
    </Frame>
  );
}

const TIER_INK: Record<Tier, string> = {
  Diamond: styles.tierDiamond,
  Platinum: styles.tierPlatinum,
  Gold: styles.tierGold,
  Silver: styles.tierSilver,
};

/** 05 — the plaque wall, by tier, in the tier inks. */
export function FigurePlaques({ t }: { t: FigureLabels }) {
  const groups = plaqueGroups();
  const total = groups.reduce((n, g) => n + g.codes.length, 0);
  return (
    <Frame>
      <div className={styles.head}>
        <span className={styles.big}>{total}</span>
        <span className={styles.mid}>{t.certs}</span>
      </div>
      <dl className={styles.tiers}>
        {groups.map((g) => {
          const word = t.tiers[g.tier.toLowerCase() as Lowercase<Tier>];
          const name = g.x > 1 ? fill(t.multiple, { n: g.x, tier: word }) : word;
          return (
            <div key={`${g.tier}${g.x}${g.programme ?? ""}`} className={styles.tierRow}>
              <dt className={`${styles.tier} ${TIER_INK[g.tier]}`}>
                {g.programme ? `${name} · ${g.programme}` : name}
              </dt>
              <dd className={styles.codes}>
                {g.codes.map((c) => (
                  <span key={c} className={styles.code}>{c}</span>
                ))}
              </dd>
            </div>
          );
        })}
      </dl>
    </Frame>
  );
}

/** 06 — the Spotify Global peak, and what it makes the song. */
export function FigureSpotifyPeak({ t }: { t: FigureLabels }) {
  const no = t.locale === "es-ES" ? "N.º" : "No.";
  return (
    <Frame>
      <div className={styles.peak}>
        <div className={styles.peakFigure}>
          <span className={styles.big}>
            {no} {DAI_DAI_SPOTIFY_BODY_READ.peak}
          </span>
          <span className={styles.peakLabel}>{t.spotifyPeak}</span>
        </div>
        <p className={styles.statement}>{t.biggest}</p>
      </div>
    </Frame>
  );
}

/** 07 — the halftime show as a tap-to-play poster. The external link moved
 *  here from the hero. */
export function FigureHalftime({ t }: { t: FigureLabels }) {
  const date = fmt(DAI_DAI_HALFTIME_DATE, t.locale, { day: "numeric", month: "long", year: "numeric" });
  return (
    <Frame>
      <DaiDaiVideoPoster videoId={DAI_DAI_HALFTIME_VIDEO_ID} play={t.play} title={t.videoTitle} />
      <div className={styles.videoMeta}>
        <span className={styles.eyebrowTight}>{fill(t.venue, { date })}</span>
        <a
          className={styles.watch}
          href={`https://youtu.be/${DAI_DAI_HALFTIME_VIDEO_ID}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.watch} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </Frame>
  );
}

/** The seven, in chapter order. */
export function daiDaiFigures(t: FigureLabels): ReactNode[] {
  return [
    <FigureRelease key="release" t={t} />,
    <FigureGlobalRun key="global" t={t} />,
    <FigureNumberOnes key="ones" t={t} />,
    <FigureSpotifySpells key="spells" t={t} />,
    <FigurePlaques key="plaques" t={t} />,
    <FigureSpotifyPeak key="peak" t={t} />,
    <FigureHalftime key="halftime" t={t} />,
  ];
}
