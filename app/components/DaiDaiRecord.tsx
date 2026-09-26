import type { ReactNode } from "react";
import styles from "../dai-dai/dai-dai.module.css";
import { spotifyImage, spotifySrcSet } from "../lib/spotifyImage";
import { allChartItems, CHART_COUNTRIES, weeksAtPeak, weeksOnChart } from "../data/charts";
import { DAI_DAI_OTHER_CHARTS } from "../data/daiDai";
import { plaqueGroups } from "./DaiDaiFigures";
import type { NationalRow } from "./DaiDaiNumbers";
import type { Tier } from "../data/certifications";

/**
 * The reference half of the Dai Dai page — "The record" — as the redesign of
 * 26 Sep 2026 draws it (designs/desktop/Dai Dai Redesign.dc.html, approved by
 * Paul): a band that breaks the story from the reference sections, then the
 * lineup, the takeover, the numbers, the FAQ and the outro, each under a 34px
 * ink heading with no gold half. Both editions render these same pieces from
 * one stylesheet and pass their own words.
 */

/** The break between the story and the reference sections. */
export function RecordBand({ title, lead, more }: { title: string; lead: string; more: string }) {
  return (
    <div className={styles.band}>
      <div className={styles.bandInner}>
        <h2 className={styles.bandTitle}>{title}</h2>
        {/* The phone artboard draws the first sentence alone. */}
        <p className={styles.bandText}>
          {lead}
          <span className={styles.bandMore}> {more}</span>
        </p>
      </div>
    </div>
  );
}

/** A reference section's head: the h2, and beside it (desktop) a label or a sentence. */
export function SectionHead({
  id,
  title,
  aside,
  asideKind = "text",
  stackOnPhone = false,
  hideAsideOnPhone = false,
}: {
  id: string;
  title: string;
  aside?: ReactNode;
  /** "label": the lineup's mono date line. "text": a sentence. */
  asideKind?: "label" | "text";
  /** The takeover's sentence stays on the phone, under the heading. */
  stackOnPhone?: boolean;
  hideAsideOnPhone?: boolean;
}) {
  return (
    <div className={`${styles.head} ${stackOnPhone ? styles.headStack : ""}`}>
      <h2 id={id} className={styles.h2}>
        {title}
      </h2>
      {aside ? (
        <span
          className={`${asideKind === "label" ? styles.headLabel : styles.headText} ${hideAsideOnPhone ? styles.desktopOnlyInline : ""}`}
        >
          {aside}
        </span>
      ) : null}
    </div>
  );
}

export interface LineupAct {
  name: string;
  img: string;
  tag?: string;
  headliner?: boolean;
}

/** The halftime bill — told here and only here. */
export function Lineup({
  id,
  title,
  meta,
  note,
  lineup,
}: {
  id: string;
  title: string;
  /** "19 July 2026 · MetLife Stadium · produced by Global Citizen" */
  meta: string;
  note: string;
  lineup: LineupAct[];
}) {
  return (
    <section className={styles.section} aria-labelledby={id}>
      <SectionHead id={id} title={title} aside={meta} asideKind="label" hideAsideOnPhone />
      <ul className={styles.lineupGrid}>
        {lineup.map((a) => (
          <li key={a.name} className={`${styles.lineupCard} ${a.headliner ? styles.lineupHeadliner : ""}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className={styles.lineupPhoto}
              src={spotifyImage(a.img, 320)}
              srcSet={spotifySrcSet(a.img)}
              sizes="(max-width: 900px) 84px, 132px"
              alt={a.name}
              width={132}
              height={132}
              loading="lazy"
            />
            <span className={styles.lineupName}>{a.name}</span>
            {a.tag ? <span className={styles.lineupTag}>{a.tag}</span> : null}
          </li>
        ))}
      </ul>
      {/* The phone artboard moves the date line down into the note. */}
      <p className={styles.lineupNote}>
        <span className={styles.phoneOnlyInline}>{meta}. </span>
        {note}
      </p>
    </section>
  );
}

// ── Row builders ──────────────────────────────────────────────────────────

const daiDaiEntries = allChartItems.find((r) => r.title === "Dai Dai")?.entries ?? [];

/** Every country the song charted in, in its chart order — the globals are not countries. */
export const daiDaiCountries = daiDaiEntries.filter((e) => e.c !== "GLB" && e.c !== "GLBX");

const esRegions = new Intl.DisplayNames(["es"], { type: "region" });

/** A country's name in the edition's language. English is the site's own
 *  table (CHART_COUNTRIES); Spanish is the ICU region name, read on the server
 *  so the browser's own ICU can never disagree with the HTML. */
export function countryName(code: string, lang: "en" | "es"): string {
  if (lang === "en") return CHART_COUNTRIES[code]?.name ?? code;
  return esRegions.of(code === "UK" ? "GB" : code) ?? CHART_COUNTRIES[code]?.name ?? code;
}

/** A row of the national-charts table, as its spec names it: a country code
 *  and the page's own sentence, and — for the three charts charts.ts does not
 *  hold — which of DAI_DAI_OTHER_CHARTS it is. Every figure is read here. */
export function nationalRow(
  spec: { c: string; l: string; other?: keyof typeof DAI_DAI_OTHER_CHARTS },
  lang: "en" | "es",
): NationalRow {
  if (spec.other) {
    const o = DAI_DAI_OTHER_CHARTS[spec.other];
    const region = spec.other === "MENA";
    return {
      code: spec.c,
      // A regional chart is no one country's: it gets the globe, not the UAE's flag.
      flag: region ? "🌍" : (CHART_COUNTRIES[spec.c]?.flag ?? "🏳"),
      country: region ? "MENA" : countryName(spec.c, lang),
      chart: o.chart,
      peak: o.peak,
      weeksAtNo1: o.peak === 1 ? o.weeksAtNo1 : 0,
      weeksOnChart: o.weeksOnChart,
      l: spec.l,
    };
  }
  const e = daiDaiEntries.find((x) => x.c === spec.c);
  if (!e) throw new Error(`Dai Dai has no ${spec.c} chart entry`);
  return {
    code: spec.c,
    flag: CHART_COUNTRIES[spec.c]?.flag ?? "🏳",
    country: countryName(spec.c, lang),
    // The chart column prints the chart's own name where the data holds one —
    // the three DAI_DAI_OTHER_CHARTS rows above do. charts.ts has no chart-name
    // field (ChartCountry is name, flag, body), so these rows print the body,
    // which for several countries is the chart's name ("Ö3 Austria Top 40",
    // "VG-lista") and for the rest the body that compiles it (26 Sep 2026).
    chart: CHART_COUNTRIES[spec.c]?.body ?? spec.c,
    peak: e.peak,
    weeksAtNo1: e.peak === 1 ? weeksAtPeak("Dai Dai", spec.c) : 0,
    weeksOnChart: weeksOnChart("Dai Dai", spec.c),
    l: spec.l,
  };
}

/**
 * The takeover grid's order: by peak, and within a peak by the country's name
 * as this edition prints it ("Alemania" before "Austria" on /es; "Austria"
 * before "Belgium" on /dai-dai) rather than by its ISO code. Sorted here, on
 * the server, with the edition's own collation; the grid then keeps this order
 * inside each peak, so the browser's ICU never decides it (the React #418 the
 * grid's comment records).
 */
export function byVisibleName<T extends { name: string; peak: number }>(cells: T[], lang: "en" | "es"): T[] {
  const collator = new Intl.Collator(lang === "es" ? "es" : "en-GB", { sensitivity: "base" });
  return [...cells].sort((a, b) => a.peak - b.peak || collator.compare(a.name, b.name));
}

/** The multiple on the song's plaque in one country: 2 for Canada's 2×
 *  Platinum, 6 for the RIAA Latin 6× Platino, 1 for a single plaque. Read from
 *  the plaque wall, so the FAQ answer (FAQPage structured data) moves with it. */
export function plaqueX(code: string): number {
  const g = plaqueGroups().find((x) => x.codes.includes(code));
  if (!g) throw new Error(`Dai Dai has no plaque in ${code}`);
  return g.x;
}

/** A whole number with its thousands marked by `sep` ("1,739", "1.739"),
 *  without asking the runtime's locale data: Spanish ICU leaves a four-digit
 *  number ungrouped, and the page has always printed "1.739". */
export const thousands = (n: number, sep: "," | ".") => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, sep);

/** The song's top plaque, in words: "Diamond in France". Read from the plaque
 *  wall's own grouping, so the caption moves the day a plaque does. */
export function topPlaque(tiers: Record<Lowercase<Tier>, string>, lang: "en" | "es", joiner: string): string {
  const top = plaqueGroups()[0];
  if (!top) return "";
  const tier = tiers[top.tier.toLowerCase() as Lowercase<Tier>];
  return `${top.x > 1 ? `${top.x}× ` : ""}${tier}${joiner}${countryName(top.codes[0], lang)}`;
}

/** How many countries the plaques come from. */
export function plaqueCountries(): number {
  return new Set(plaqueGroups().flatMap((g) => g.codes)).size;
}
