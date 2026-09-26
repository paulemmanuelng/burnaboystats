import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { cardinalWord, ordinalWord, millonesEs } from "../app/lib/plural";
import { cadenceOf, LIVE_CADENCE_ES } from "../app/lib/liveChartMeta";
import { weeksAtPeak, weeksOnChart, daiDaiChartEntryCount, daiDaiNumberOnes } from "../app/data/charts";
import { daiDaiCertCount } from "../app/data/certifications";
import { daiDaiSpotifyDaysOnChart, daiDaiSpotifyStraightDays, daiDaiYouTubeDaysAtNo1, DAI_DAI_1B_DAYS, DAI_DAI_1B_RANK_EN, DAI_DAI_1B_RANK_ES, DAI_DAI_SPOTIFY_CONFIRMED_THROUGH, DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG, DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG_ES, DAI_DAI_SPOTIFY_NO1_READ_ON_LONG, DAI_DAI_SPOTIFY_NO1_READ_ON_LONG_ES, DAI_DAI_SPOTIFY_NO1_FIRST_LONG, DAI_DAI_SPOTIFY_NO1_FIRST_LONG_ES, DAI_DAI_SPOTIFY_NO1_LAST_LONG, DAI_DAI_SPOTIFY_NO1_LAST_LONG_ES, DAI_DAI_SPOTIFY_TOP10_DAYS, DAI_DAI_SPOTIFY_DAYS_OFF } from "../app/data/daiDai";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";

// The Article check below renders both editions; these two stand in for the
// router the way every other rendering test here does.
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
}));
vi.mock("next/link", async () => {
  const { createElement } = await import("react");
  return {
    default: ({ href, children, ...rest }: { href: string; children?: unknown }) =>
      createElement("a", { href, ...rest }, children as never),
  };
});

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
  runAT: weeksOnChart("Dai Dai", "AT"),
  runSE: weeksOnChart("Dai Dai", "SE"),
  runNL: weeksOnChart("Dai Dai", "NL"),
  // These three pre-date the longevity work. The old pattern excluded braces,
  // so it had been silently skipping the three hero cards for as long as they
  // have been template literals — the parity check was covering 20 cards and
  // quietly ignoring the biggest three.
  daiDaiChartEntryCount,
  daiDaiNumberOnes,
  daiDaiCertCount,
  daiDaiSpotifyDaysOnChart,
  daiDaiSpotifyStraightDays,
  daiDaiYouTubeDaysAtNo1,
  // Not figures but dates: the charts the Spotify run was last read off, which
  // both cards now name instead of calling the run live. TWO anchors since
  // 9 Sep 2026 — the streak and the days at No. 1 each carry their own (they
  // re-converged on the 13 Sep chart on 14 Sep 2026, and may split again) —
  // plus, since 14 Sep, the first and last days at No. 1, walked at the body.
  // One spelling per edition, so the digit comparison below sees the same
  // digits on each side, as it should.
  DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG,
  DAI_DAI_SPOTIFY_STREAK_READ_ON_LONG_ES,
  DAI_DAI_SPOTIFY_NO1_READ_ON_LONG,
  DAI_DAI_SPOTIFY_NO1_READ_ON_LONG_ES,
  DAI_DAI_SPOTIFY_NO1_FIRST_LONG,
  DAI_DAI_SPOTIFY_NO1_FIRST_LONG_ES,
  DAI_DAI_SPOTIFY_NO1_LAST_LONG,
  DAI_DAI_SPOTIFY_NO1_LAST_LONG_ES,
  DAI_DAI_SPOTIFY_TOP10_DAYS,
  // The days-off count, which both editions now render as a WORD rather than
  // typing it. It shipped as "every day but one" in English and "todos los días
  // salvo uno" in Spanish and was wrong in both for four months; interpolating
  // it means the next correction reaches both editions or neither.
  DAI_DAI_SPOTIFY_DAYS_OFF,
  // The billion-views milestone: the days, and the rank as each edition
  // spells it ("joint 5th" / "5.º (empatado)"), all derived from one list.
  DAI_DAI_1B_DAYS,
  DAI_DAI_1B_RANK_EN,
  DAI_DAI_1B_RANK_ES,
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
  doble: "2", triple: "3", cuádruple: "4", quíntuple: "5", séxtuple: "6",
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

// The Spotify run is the figure that has gone stale twice while sitting inside
// a sentence, so neither edition may type it again. "98 days on the chart"
// shipped on 28 Aug 2026 as an elapsed-days count taken on 20 Aug, over a run
// that had a day missing from it — two errors no test could see, because a
// number in prose is not a number anything can read. Both editions now render
// daiDaiSpotifyDaysOnChart; this fails if either goes back to a literal.
describe("the Spotify chart run stays derived", () => {
  // Only the two cards that carry the run — "en la lista" also appears in the
  // Hot 100 card ("del 42 al 17 en la lista del 1 de agosto"), which is a
  // different sentence about a different chart.
  const spotifyCards = (src: string) =>
    src.split("\n").filter((l) => /Global Daily Top Songs|top 10 mundial|global Top 10/.test(l));

  it("is interpolated in both editions, never typed", () => {
    expect(EN).toMatch(/\$\{daiDaiSpotifyStraightDays\}\s+straight days on the chart/);
    expect(ES).toMatch(/\$\{daiDaiSpotifyStraightDays\}\s+seguidos en la lista/);

    const en = spotifyCards(EN);
    const es = spotifyCards(ES);
    expect(en.length, "no English Spotify cards matched").toBeGreaterThan(0);
    expect(es.length, "no Spanish Spotify cards matched").toBeGreaterThan(0);

    for (const l of en) {
      expect(l, "a typed day count is back in the English run").not.toMatch(
        /\b\d+\s+days (?:on the chart|and counting)\b/
      );
    }
    for (const l of es) {
      expect(l, "a typed day count is back in the Spanish run").not.toMatch(
        /\b\d+\s+(?:días\s+)?(?:en la lista\b|días y sumando\b)/
      );
    }
  });

  // Counting to today rather than to a chart someone has actually opened is
  // the same bug wearing a different hat: it would keep counting straight
  // through a drop-off nobody had checked for.
  it("counts only as far as a chart that has been read", () => {
    const today = new Date().toISOString().slice(0, 10);
    expect(DAI_DAI_SPOTIFY_CONFIRMED_THROUGH <= today).toBe(true);
    expect(daiDaiSpotifyDaysOnChart).toBeGreaterThan(0);
  });
});

// Debug fixes, 24 Sep 2026. The site gave two release dates: the story's
// "15 May 2026" and /timeline's "released 14 May", with the Spotify card
// saying the song entered "on 15 May 2026, the day after release". 15 May 2026
// is a Friday, and Spotify prints the day BEFORE for a Friday drop — so 14 May
// was Spotify's artefact, not the release.
describe("Dai Dai has one release date", () => {
  const STORY = read("app/components/DaiDaiStory.tsx");
  const TIMELINE = read("app/data/timeline.ts");

  it("is 15 May 2026 on the story, the timeline and both Spotify cards", () => {
    expect(new Date("2026-05-15T12:00:00Z").getUTCDay()).toBe(5); // a Friday
    expect(STORY).toContain('kicker: "15 May 2026"');
    expect(TIMELINE).toMatch(/“Dai Dai” arrives"[^}]*released 15 May\./);
    expect(EN).toContain("on 15 May 2026, its release day");
    expect(ES).toContain("el 15 de mayo de 2026, el mismo día de su lanzamiento");
  });

  it("refuses the lines the site shipped", () => {
    for (const src of [EN, ES, TIMELINE]) {
      expect(src).not.toContain("the day after release");
      expect(src).not.toContain("un día después de su lanzamiento");
      expect(src).not.toContain("released 14 May");
    }
  });
});

describe("the Spanish edition writes its figures in Spanish", () => {
  it("prints the bot's compact figures as millones, and says 'e hizo historia'", () => {
    expect(ES).toContain("millonesEs(DAI_DAI_VIDEO_VIEWS)");
    expect(ES).toContain("millonesEs(DAI_DAI_SPOTIFY_STREAMS)");
    expect(millonesEs("1.13B")).toBe("1130 millones");
    expect(millonesEs("468M")).toBe("468 millones");
    expect(millonesEs("40.28M")).toBe("40,28 millones");
    expect(ES).toContain("e hizo historia en el primer show");
    expect(ES).not.toContain("— y en historia en el primer show");
  });
});

describe("the live No. 1 line states no cadence the charts do not have", () => {
  it("does not call YouTube's weekly country charts daily, in either edition", () => {
    // "No. 1 right now on the daily charts of YouTube (21 countries)…" — YouTube's
    // are weekly (cadenceOf), and YouTube supplies most of those No. 1s.
    expect(cadenceOf("YouTube")).toBe("weekly");
    expect(EN).not.toContain("right now on the daily charts of");
    expect(ES).not.toContain("ahora mismo en las listas diarias de");
  });

  it("the Spanish line says the board's real cadence, from its one home", () => {
    expect(ES).toContain("${LIVE_CADENCE_ES} desde el panel en vivo");
    expect(LIVE_CADENCE_ES).toBe("actualizado varias veces al día");
  });
});

// The Article node, as each edition serves it. Structure is the part of this
// page's markup that CAN drift unseen: the English Article went without the
// `image` Google recommends while the Spanish one carried it, behind a comment
// saying the image URL 404s — true of the bare path, false of the one the
// same file's MusicEvent already cited.
const articleOf = (html: string): Record<string, unknown> | undefined =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1]) as Record<string, unknown>)
    .find((n) => n["@type"] === "Article");

describe("Dai Dai: both editions' Article nodes carry the same fields", () => {
  it("refuses the English Article that shipped", () => {
    // Served by burnaboystats.com/dai-dai on 26 Sep 2026: no `image`.
    const shipped = articleOf(
      '<script type="application/ld+json">{"@context":"https://schema.org","@type":"Article","headline":"Dai Dai — Shakira & Burna Boy\'s 2026 FIFA World Cup Anthem","description":"The story of “Dai Dai”, the 2026 FIFA World Cup anthem by Shakira and Burna Boy — its record-breaking chart, streaming and certification run, and its live performance at the World Cup Final halftime show.","datePublished":"2026-07-16","dateModified":"2026-09-25T12:00:00+00:00","inLanguage":"en","author":{"@type":"Organization","name":"Burna Boy Stats","url":"https://burnaboystats.com"},"publisher":{"@type":"Organization","name":"Burna Boy Stats","url":"https://burnaboystats.com"},"about":{"@type":"MusicRecording","name":"Dai Dai","byArtist":[{"@type":"Person","name":"Shakira"},{"@type":"MusicGroup","name":"Burna Boy"}],"datePublished":"2026-05","genre":["Afrobeats","Latin pop"],"inLanguage":"en"},"url":"https://burnaboystats.com/dai-dai"}</script>'
    );
    expect(shipped).toBeDefined();
    // The same comparison the next test makes, against the live Spanish node.
    const es = articleOf(renderToStaticMarkup(DaiDaiPageES()));
    expect(Object.keys(shipped!).sort()).not.toEqual(Object.keys(es!).sort());
    expect(Object.keys(shipped!)).not.toContain("image");
  });

  it("has the same top-level keys in English and Spanish, image included", () => {
    const en = articleOf(renderToStaticMarkup(DaiDaiPage()));
    const es = articleOf(renderToStaticMarkup(DaiDaiPageES()));
    expect(en, "English Article not found").toBeDefined();
    expect(es, "Spanish Article not found").toBeDefined();
    expect(Object.keys(en!).sort()).toEqual(Object.keys(es!).sort());
    // By its real, id-carrying URL — never the bare route, which 404s.
    for (const [lang, node, path] of [["en", en!, "/dai-dai"], ["es", es!, "/dai-dai/es"]] as const) {
      const img = (node.image as string[])[0];
      expect(img, lang).toMatch(new RegExp(`^https://burnaboystats\\.com${path}/opengraph-image/[a-z0-9]+$`));
    }
  });
});
