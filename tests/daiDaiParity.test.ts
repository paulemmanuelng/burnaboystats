import { describe, it, expect } from "vitest";
import { cardinalWord, ordinalWord } from "../app/lib/plural";
import { weeksAtPeak, weeksOnChart, daiDaiChartEntryCount, daiDaiNumberOnes } from "../app/data/charts";
import { daiDaiCertCount } from "../app/data/certifications";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// The Spanish edition at /dai-dai/es is a hand-written translation, not a
// generated one — which means it can silently fall behind the English page.
// It did: it shipped with three of the six halftime acts missing (BTS, Justin
// Bieber, Coldplay) and with two number-card descriptions that quietly dropped
// their figures. Structure looked identical, so a className diff caught none of
// it. These tests compare CONTENT, which is the part that actually drifted.

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const EN = read("app/dai-dai/page.tsx");
const ES = read("app/dai-dai/es/page.tsx");

const lineupOf = (src: string) => {
  const block = src.match(/const lineup[\s\S]*?\n {2}\];/)?.[0] ?? "";
  return {
    names: [...block.matchAll(/name: "([^"]+)"/g)].map((m) => m[1]),
    imgs: [...block.matchAll(/img: ([^,]+),/g)].map((m) => m[1].trim()),
  };
};

// { v: <value>, l: "<description>" } — the shape every number card uses.
// `v` may not span lines, so the `{ v: string; l: string }[]` type annotation
// above the array can't bridge into the first real entry.
// `v` may be a plain string OR a template literal — longevity figures are read
// from the chart data now rather than typed, so a card can read
// `${weeksDE} weeks`. The old pattern excluded braces and silently dropped
// those three cards, which shifted every later index and made card 0 compare
// against card 3's value.
const cardsOf = (src: string) =>
  [...src.matchAll(/\{\s*v:\s*(`(?:[^`\\]|\\.)*`|[^,{}\n]+?),\s*l:\s*(?:"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)\s*\}/g)].map((m) => ({
    v: resolve(m[1].trim()),
    // `l` may be a template literal too, now that the Billboard card reads its
    // week counts from the data. Matching only double-quoted descriptions made
    // that card vanish from the English side and silently misaligned every
    // comparison after it — which is worse than failing, because the pairs it
    // then compared were real cards that simply were not each other's twin.
    l: resolve((m[2] ?? m[3] ?? "").trim()),
  }));

// Both editions read these from app/data/charts.ts, so they cannot disagree by
// construction — but the comparison still has to see a number, not the name of
// a variable. Resolving here keeps the test checking figures rather than
// identifiers, and it fails loudly if a page starts referencing something this
// map does not know.
const DERIVED: Record<string, number | string | null> = {
  weeksDE: weeksAtPeak("Dai Dai", "DE"),
  weeksCH: weeksAtPeak("Dai Dai", "CH"),
  weeksFR: weeksAtPeak("Dai Dai", "FR"),
  weeksGLB: weeksAtPeak("Dai Dai", "GLB"),
  weeksGLBX: weeksAtPeak("Dai Dai", "GLBX"),
  weeksAT: weeksAtPeak("Dai Dai", "AT"),
  weeksBE: weeksAtPeak("Dai Dai", "BE"),
  weeksNL: weeksAtPeak("Dai Dai", "NL"),
  weeksSE: weeksAtPeak("Dai Dai", "SE"),
  weeksNO: weeksAtPeak("Dai Dai", "NO"),
  weeksUK: weeksAtPeak("Dai Dai", "UK"),
  runUK: weeksOnChart("Dai Dai", "UK"),
  // These three pre-date the longevity work. The old pattern excluded braces,
  // so it had been silently skipping the three hero cards for as long as they
  // have been template literals — the parity check was covering 20 cards and
  // quietly ignoring the biggest three.
  daiDaiChartEntryCount,
  daiDaiNumberOnes,
  daiDaiCertCount,
};
// Two interpolation shapes appear in the cards: a bare `${weeksDE}`, and a
// `${ordinalWord(weeksGLB, "es")}` where the Spanish edition needs the word
// rather than the digit. The word form is resolved by calling the real helper,
// so this checks the shipped output and not a second copy of the number table.
const WORD_FNS: Record<string, (n: number | null, l: "en" | "es") => string> = {
  ordinalWord,
  cardinalWord,
};

const resolve = (v: string) => {
  const out = v
    .replace(/\$\{(\w+)\((\w+),\s*"(en|es)"\)\}/g, (_, fn: string, name: string, lang: string) => {
      const f = WORD_FNS[fn];
      if (!f) throw new Error(`parity test cannot resolve the call "${fn}(...)" — add it to WORD_FNS`);
      const n = DERIVED[name];
      if (n == null) throw new Error(`parity test cannot resolve "${name}" — add it to DERIVED`);
      return f(Number(n), lang as "en" | "es");
    })
    .replace(/\$\{(\w+)\}/g, (_, name: string) => {
      const n = DERIVED[name];
      if (n == null) throw new Error(`parity test cannot resolve "${name}" — add it to DERIVED`);
      return String(n);
    });
  // An interpolation this function does not understand used to survive as
  // literal text, so its figure simply vanished from the comparison and the
  // card looked like it had none. Fail loudly instead of comparing a lie.
  if (out.includes("${")) throw new Error(`parity test left an unresolved interpolation in: ${out}`);
  return out;
};

// Good Spanish spells small ordinals out — English's "a 4th consecutive week"
// becomes "cuarta semana consecutiva" — so a digit-only comparison would flag
// correct prose. These count as their numeral.
const ES_NUMERALS: Record<string, string> = {
  // Multiplier words, which Spanish prefers to a numeral: English's
  // "2x Platinum" is "doble platino", and neither carries a digit. Missing
  // these read as the Spanish edition having dropped a figure it states
  // perfectly well — it was only hidden until the card alignment was fixed.
  doble: "2", triple: "3", cuádruple: "4", quíntuple: "5",
  primer: "1", primera: "1", primero: "1",
  segundo: "2", segunda: "2", dos: "2",
  tercer: "3", tercera: "3", tercero: "3", tres: "3",
  cuarto: "4", cuarta: "4", cuatro: "4",
  quinto: "5", quinta: "5", cinco: "5",
  sexto: "6", sexta: "6", seis: "6",
  séptimo: "7", séptima: "7", siete: "7",
  octavo: "8", octava: "8", ocho: "8",
  noveno: "9", novena: "9", nueve: "9",
  décimo: "10", décima: "10", diez: "10",
  undécimo: "11", undécima: "11", once: "11",
  duodécimo: "12", duodécima: "12", doce: "12",
};

// Spanish writes 7.000 and 59,4 where English writes 7,000 and 59.4, so strip
// separators that sit between digits before comparing. Everything else about
// the sentence is free to differ — only the figures have to survive.
const figuresIn = (s: string, spanish = false) => {
  const found = new Set(s.replace(/(\d)[.,](?=\d)/g, "$1").match(/\d+/g) ?? []);
  if (spanish) {
    for (const w of s.toLowerCase().split(/[^a-zàáéíóúüñ]+/)) {
      if (ES_NUMERALS[w]) found.add(ES_NUMERALS[w]);
    }
  }
  return found;
};

const digits = (s: string) => (s.match(/\d+/g) ?? []).join("-");

describe("Dai Dai: Spanish edition matches the English one", () => {
  it("shows the same halftime lineup, in the same order", () => {
    const en = lineupOf(EN);
    const es = lineupOf(ES);
    expect(en.names.length).toBeGreaterThanOrEqual(6);
    expect(es.names).toEqual(en.names);
    // Same portraits too — a wrong image is as bad as a missing act.
    expect(es.imgs).toEqual(en.imgs);
  });

  it("has the same number of stat cards", () => {
    expect(cardsOf(EN).length).toBeGreaterThan(20);
    expect(cardsOf(ES).length).toBe(cardsOf(EN).length);
  });

  it("carries every figure from every English card into the Spanish one", () => {
    const en = cardsOf(EN);
    const es = cardsOf(ES);
    en.forEach((card, i) => {
      // The headline value: "No. 17" and "N.º 17" differ in wording, not number.
      expect(digits(es[i].v), `card ${i} value (${card.v})`).toBe(digits(card.v));
      // Every figure quoted in the English description must appear in Spanish.
      const inSpanish = figuresIn(es[i].l, true);
      const missing = [...figuresIn(card.l)].filter((n) => !inSpanish.has(n));
      expect(missing, `card ${i} dropped figures from: "${card.l}"`).toEqual([]);
    });
  });

  it("reads the bot-written figures from shared data, never its own copy", () => {
    // Both editions must import these; a hardcoded duplicate would go stale
    // within a day, because the stats bot only rewrites app/data/daiDai.ts.
    for (const [name, src] of [["EN", EN], ["ES", ES]] as const) {
      expect(src, `${name} must import the live figures`).toMatch(
        /import \{[^}]*DAI_DAI_VIDEO_VIEWS[^}]*\} from "[./]*(\.\.\/)*data\/daiDai"/
      );
      expect(src.includes('DAI_DAI_VIDEO_VIEWS = "'), `${name} must not redeclare them`).toBe(false);
    }
  });
});

// The certification-country prose exists in six places (EN stat-line, EN FAQ,
// EN story band, and the three Spanish equivalents). On 16-17 Aug 2026 the
// story band was left behind twice in a row: it still listed Hungary as Gold
// after its Platinum upgrade, and missed Italy's Gold entirely, so the band
// contradicted the stat-line directly above it. Assert the tier groupings
// agree across every copy rather than trusting six hand-edits to stay in step.
describe("Dai Dai certification prose stays consistent across all copies", () => {
  const en = [read("app/dai-dai/page.tsx"), read("app/components/DaiDaiStory.tsx")].join("\n");
  const goldLists = [...en.matchAll(/Gold in ([^.]*?), and Silver/g)].map((m) => m[1]);

  it("finds a Gold list in every English copy", () => {
    expect(goldLists.length).toBeGreaterThanOrEqual(3);
  });

  it("never lists Hungary among the Golds — it is Platinum", () => {
    for (const list of goldLists) expect(list).not.toMatch(/Hungary/);
  });

  it("lists Italy among the Golds in every English copy", () => {
    for (const list of goldLists) expect(list).toMatch(/Italy/);
  });
});
