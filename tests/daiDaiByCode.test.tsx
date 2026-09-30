import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { buildReplayData } from "../app/components/daiDaiReplayData";
import { EN_REPLAY_LABELS, ES_REPLAY_LABELS } from "../app/components/daiDaiReplayLabels";
import DaiDaiReplay from "../app/components/DaiDaiReplay";
import { byCode, multiplesOrder } from "../app/components/DaiDaiReplayMultiples";

/**
 * The replay orders chart codes without ICU (speed pass, 30 Sep 2026).
 *
 * DaiDaiReplay built `new Intl.Collator("en")` at module scope, for one job:
 * breaking ties between chart codes. Building it cost 22-24 ms of /dai-dai's
 * hydration task on a 4x-throttled phone, and nothing else on the route's
 * client code needs a collator. byCode compares code units instead. For
 * [A-Z]+ strings that is the "en" collation's order, so every sort gives what
 * it gave before, and in every locale (tests/clientLocale.test.tsx).
 */
const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const collator = new Intl.Collator("en").compare;
const editions = [["en", EN_REPLAY_LABELS], ["es", ES_REPLAY_LABELS]] as const;

describe("chart codes are [A-Z]+, where code-unit order is the en collation", () => {
  for (const [lang] of editions) {
    const data = buildReplayData(lang);
    const codes = [...data.countries, ...data.globals].map((r) => r.code);

    it(`${lang}: every code, countries and globals, is [A-Z]+`, () => {
      expect(codes.length).toBeGreaterThan(60);
      for (const c of codes) expect(c).toMatch(/^[A-Z]+$/);
    });

    it(`${lang}: byCode and Intl.Collator("en") agree on every pair`, () => {
      // A comparison sort's result depends only on the comparator's signs, so
      // agreement on every pair means identical output from every sort that
      // breaks its ties with either one: the ranking's groups at any frame,
      // and the small multiples.
      for (const a of codes) for (const b of codes) expect(Math.sign(byCode(a, b)), `${a} vs ${b}`).toBe(Math.sign(collator(a, b)));
    });

    it(`${lang}: multiplesOrder gives what it gave with the collator`, () => {
      const withCollator = [...data.countries].sort(
        (a, b) =>
          a.peak - b.peak ||
          Number(b.pts.length > 0) - Number(a.pts.length > 0) ||
          (b.weeksAtPeak ?? 0) - (a.weeksAtPeak ?? 0) ||
          a.code.localeCompare(b.code, "en"),
      );
      expect(multiplesOrder(data.countries).map((r) => r.code)).toEqual(withCollator.map((r) => r.code));
    });

    it(`${lang}: the ranking's chips at the end frame are in the collator's order`, () => {
      const labels = lang === "en" ? EN_REPLAY_LABELS : ES_REPLAY_LABELS;
      const html = renderToStaticMarkup(<DaiDaiReplay data={data} labels={labels} />);
      const chips = [...html.matchAll(/data-chip="([A-Z]+)"/g)].map((m) => m[1]);
      const withCollator = [...data.countries]
        .sort(
          (a, b) =>
            a.best - b.best ||
            Number(b.pts.length > 0) - Number(a.pts.length > 0) ||
            (b.weeksAtPeak ?? 0) - (a.weeksAtPeak ?? 0) ||
            collator(a.code, b.code),
        )
        .map((r) => r.code);
      expect(chips.length).toBe(data.countries.length);
      expect(chips).toEqual(withCollator);
    });
  }

  it("negative control: outside [A-Z], the two orders part", () => {
    // "Ch" and "CZ": code units put Z (90) before h (104); the collation reads
    // "ch" before "cz". So the [A-Z]+ check above is what makes them equal.
    expect(Math.sign(byCode("Ch", "CZ"))).toBe(1);
    expect(Math.sign(collator("Ch", "CZ"))).toBe(-1);
  });
});

describe("the replay builds no collator", () => {
  const builds = (src: string) => /new\s+Intl\.Collator\s*\(/.test(src);

  it("DaiDaiReplay.tsx constructs no Intl.Collator, nor does its multiples module", () => {
    expect(builds(read("app/components/DaiDaiReplay.tsx"))).toBe(false);
    expect(builds(read("app/components/DaiDaiReplayMultiples.tsx"))).toBe(false);
    expect(read("app/components/DaiDaiReplayMultiples.tsx")).not.toMatch(/\.localeCompare\(/);
  });

  it("negative control: the line DaiDaiReplay.tsx shipped fails", () => {
    expect(builds(`const byCode = new Intl.Collator("en").compare;`)).toBe(true);
  });
});
