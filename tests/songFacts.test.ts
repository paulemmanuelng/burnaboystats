import { describe, it, expect } from "vitest";
import { songs } from "../app/data/songs";
import { songMetaDescription } from "../app/lib/songMeta";
import { albumPages } from "../app/data/albumPages";
import { allItems, COUNTRIES, tierOf } from "../app/data/certifications";
import { allChartItems, singleCharts, featureCharts, CHART_COUNTRIES } from "../app/data/charts";

/**
 * A hand-typed certification list in songs.ts has to match the cert data.
 *
 * That file's own header says each song's certifications are "pulled live from
 * data/certifications.ts by title, so those pages never drift". That is true of
 * the tables — but not of the `extraFacts` strings, which are typed by hand
 * beside them. "On the Low" listed Platinum in "the UK, NZ & Switzerland" and
 * stayed that way after Sweden certified it, so the page named three of four.
 *
 * The tables were right the whole time. Only the sentence was wrong, which is
 * why nothing caught it.
 */

/** How the facts abbreviate country names. */
const ALIAS: Record<string, string> = {
  "United Kingdom": "UK",
  "New Zealand": "NZ",
  "United States": "US",
};

describe("song-page extra facts", () => {
  it("a fact that names Platinum countries names all of them", () => {
    const problems: string[] = [];
    for (const song of songs) {
      const cert = (allItems as any[]).find((r) => r.title === song.title);
      if (!cert) continue;
      // Platinum exactly — Diamond is a separate tier and is stated separately.
      const platinum = cert.certs
        .filter((c: any) => tierOf(c.level) === "platinum")
        .map((c: any) => COUNTRIES[c.c]?.name ?? c.c);
      for (const f of song.extraFacts ?? []) {
        // Two label forms: "plus Platinum in the UK, NZ…" and "Ye"'s
        // `{ v: "Platinum", l: "certified in the US, UK, France…" }` — the second
        // escaped the first trigger for a month (17 Sep 2026).
        if (!(/Platinum in /.test(f.l) || (f.v === "Platinum" && /certified in /.test(f.l)))) continue;
        const names = (name: string) => f.l.includes(name) || f.l.includes(ALIAS[name] ?? name);
        // Only a fact that ENUMERATES is held to completeness. "4x Platinum in
        // Italy" names one country as a figure in its own right and is not
        // claiming to be the whole list; "plus Platinum in the UK, NZ,
        // Switzerland & Sweden" is, and that is the form that went stale.
        if (platinum.filter(names).length < 2) continue;
        const missing = platinum.filter((name: string) => !names(name));
        if (missing.length)
          problems.push(`${song.title}: fact omits Platinum in ${missing.join(", ")} — "${f.l}"`);
      }
    }
    expect(problems).toEqual([]);
  });

  /**
   * Prose counts typed in songs.ts have to equal what the page derives.
   *
   * The song page derives "14 countries charted" and "12 certifications
   * worldwide" from charts.ts and certifications.ts, but the blurb, the FAQ
   * answers and the meta description retype the same numbers by hand — and
   * they have drifted before: "On the Low" said "nine certifications" in three
   * literals while its row held ten (fixed 30 Aug 2026). Nothing tied them to
   * the data until 17 Sep 2026. Only figures that parse as numbers are held to
   * the data; "the certification and the numbers" is not a count.
   */
  it("a typed count of countries, certifications or the Nigerian figure equals the data", () => {
    const WORDS: Record<string, number> = {
      one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
      eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
      eighteen: 18, nineteen: 19, twenty: 20,
    };
    const num = (w: string) => (/^\d+$/.test(w) ? Number(w) : WORDS[w.toLowerCase()]);
    const problems: string[] = [];
    for (const song of songs) {
      const chart = allChartItems.find((r) => r.title === song.title);
      const cert = (allItems as any[]).find((r) => r.title === song.title);
      const countries = chart ? chart.entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX").length : 0;
      const ngPeak = chart?.entries.find((e) => e.c === "NG")?.peak;
      const certs = cert ? cert.certs.length : 0;
      const ng = cert?.certs.find((c: any) => c.c === "NG");
      const texts = [
        song.blurb,
        songMetaDescription(song),
        ...(song.extraFacts ?? []).map((f) => `${f.v} ${f.l}`),
        ...(song.faqs ?? []).flatMap((f) => [f.q, f.a]),
      ].filter(Boolean) as string[];
      for (const text of texts) {
        for (const m of text.matchAll(/(?:charted|charting) in (\w+) (?:countries|territories)/gi)) {
          const n = num(m[1]);
          if (n != null && n !== countries)
            problems.push(`${song.title}: "${m[0]}" but the chart data holds ${countries}`);
        }
        for (const m of text.matchAll(/(\w+) certifications?\b/gi)) {
          const n = num(m[1]);
          if (n != null && n !== certs)
            problems.push(`${song.title}: "${m[0]}" but the cert data holds ${certs}`);
        }
        for (const m of text.matchAll(/(\w+) chart entries\b/gi)) {
          const n = num(m[1]);
          const entries = chart ? chart.entries.length : 0;
          if (n != null && n !== entries)
            problems.push(`${song.title}: "${m[0]}" but the chart data holds ${entries}`);
        }
        for (const m of text.matchAll(/No\. 1 in (\w+) countries/gi)) {
          const n = num(m[1]);
          const ones = chart ? chart.entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX" && e.peak === 1).length : 0;
          if (n != null && n !== ones)
            problems.push(`${song.title}: "${m[0]}" but the chart data holds ${ones} at No. 1`);
        }
        for (const m of text.matchAll(/No\. (\d+) in Nigeria/g)) {
          if (Number(m[1]) !== ngPeak)
            problems.push(`${song.title}: "${m[0]}" but the Nigerian peak on file is ${ngPeak ?? "none"}`);
        }
        for (const m of text.matchAll(/(\d+)× Platinum (?:in Nigeria|at home)/g)) {
          if (Number(m[1]) !== (ng?.x ?? (ng?.level === "Platinum" ? 1 : 0)))
            problems.push(`${song.title}: "${m[0]}" but the Nigerian plaque on file is ${ng ? `${ng.level}${ng.x ? ` ×${ng.x}` : ""}` : "none"}`);
        }
      }
    }
    expect(problems).toEqual([]);
  });

  /**
   * A typed extra fact must not restate a derived card. "6 — countries at
   * No. 1 — Belgium, … & South Africa" sat under the derived "6 countries at
   * No. 1" on /music/jerusalema; when the South Africa row was retracted the
   * derived card moved to 5 and the typed one would have stayed at 6. Same for
   * a typed "N countries charted" or a typed video/stream count.
   */
  it("no extra fact restates a figure the page derives", () => {
    const RESTATES = /countries at No\. 1|countries charted|views on the official video|Spotify streams$/i;
    const problems = songs.flatMap((song) =>
      (song.extraFacts ?? []).filter((f) => RESTATES.test(f.l)).map((f) => `${song.title}: "${f.v} — ${f.l}"`),
    );
    expect(problems).toEqual([]);
  });

  /**
   * "Certified in N countries" and an "Is X certified?" answer are typed beside
   * a table that is derived. /music/alone's meta said "certified in five
   * countries" and its FAQ listed five countries for a month after Portugal's
   * Gold (AFP card, 30 Sep 2026) made the table six (5 Oct 2026 debug pass,
   * seo-02). The Platinum-list guard above never looked at FAQs or the meta.
   */
  it("a typed certified-country count or FAQ country list matches the cert data", () => {
    const WORDS: Record<string, number> = {
      one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
    };
    const problems: string[] = [];
    for (const song of songs) {
      const cert = (allItems as any[]).find((r) => r.title === song.title);
      const codes: string[] = [...new Set<string>((cert?.certs ?? []).map((c: any) => c.c))];
      const texts = [song.blurb, songMetaDescription(song), ...(song.faqs ?? []).map((f) => f.a)];
      for (const text of texts) {
        for (const m of text.matchAll(/certified in (\w+) countries/gi)) {
          const n = /^\d+$/.test(m[1]) ? Number(m[1]) : WORDS[m[1].toLowerCase()];
          if (n != null && n !== codes.length)
            problems.push(`${song.title}: "${m[0]}" but the cert data holds ${codes.length}`);
        }
      }
      // An answer to "Is X certified?" that lists countries is the whole list
      // unless it says "including".
      for (const f of song.faqs ?? []) {
        if (!/^Is “[^”]+” certified\?$/.test(f.q) || /including/i.test(f.a)) continue;
        const named = (code: string) => {
          const name = COUNTRIES[code]?.name ?? code;
          return f.a.includes(name) || f.a.includes(ALIAS[name] ?? name);
        };
        const missing = codes.filter((c) => !named(c));
        if (missing.length) problems.push(`${song.title}: "${f.q}" leaves out ${missing.join(", ")}`);
      }
    }
    expect(problems).toEqual([]);
  });

  /**
   * "France — its highest national peak" sat on /music/alone over a Nigerian
   * No. 17 the TurnTable sweep added on 18 Sep 2026, and the FAQ's "best peaks
   * were No. 19 in France…" left Nigeria out (seo-02). A superlative about a
   * peak has to be the data's.
   */
  it("a typed 'highest national peak' or 'best peaks were' names the data's best", () => {
    const problems: string[] = [];
    for (const song of songs) {
      const chart = allChartItems.find((r) => r.title === song.title);
      if (!chart) continue;
      const national = chart.entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX");
      const best = Math.min(...national.map((e) => e.peak));
      for (const f of song.extraFacts ?? []) {
        const v = Number(/^No\. (\d+)$/.exec(f.v)?.[1]);
        if (/highest national peak/i.test(f.l) && v !== best)
          problems.push(`${song.title}: "${f.v} — ${f.l}" but its best national peak is No. ${best}`);
        const outside = /highest peak outside (.+)$/i.exec(f.l)?.[1];
        if (outside) {
          const code = Object.keys(CHART_COUNTRIES).find((c) => CHART_COUNTRIES[c].name === outside);
          const rest = Math.min(...national.filter((e) => e.c !== code).map((e) => e.peak));
          if (!code || v !== rest) problems.push(`${song.title}: "${f.v} — ${f.l}" but the best peak outside ${outside} is No. ${rest}`);
        }
      }
      for (const f of song.faqs ?? []) {
        const m = /best peaks were No\. (\d+)/.exec(f.a);
        if (m && Number(m[1]) !== best)
          problems.push(`${song.title}: "${m[0]}" but its best national peak is No. ${best}`);
      }
    }
    expect(problems).toEqual([]);
  });

  /**
   * The page derives a "best chart peak worldwide" card; a typed card with the
   * same figure is a duplicate unless it adds a record the derived card cannot
   * say ("highest-ever Hot 100 peak", "the first Afrobeats album to top it").
   * Last Last lost its two duplicates on 17 Sep 2026; City Boys' "No. 2 —
   * Nigeria" and No Sign of Weakness's "No. 1 — Nigeria" repeated the pattern
   * (music-14, 5 Oct 2026).
   */
  it("a typed card that repeats the derived best peak adds a record", () => {
    const problems: string[] = [];
    for (const page of [...songs, ...albumPages] as { title: string; extraFacts?: { v: string; l: string }[] }[]) {
      const chart = allChartItems.find((r) => r.title === page.title);
      if (!chart) continue;
      const best = Math.min(...chart.entries.map((e) => e.peak));
      for (const f of page.extraFacts ?? []) {
        if (f.v === `No. ${best}` && !/highest|first|record|biggest|only/i.test(f.l))
          problems.push(`${page.title}: "${f.v} — ${f.l}" repeats the derived best-peak card`);
      }
    }
    expect(problems).toEqual([]);
  });

  /**
   * "Burna Boy's highest-ever Billboard Hot 100 peak" is typed on /music/wgft
   * (tagline, blurb, a card, the FAQ, both meta fields) and on the Africa's
   * Biggest board — six strings that stop being true the week any single or
   * feature peaks above No. 16. The data can say so; the prose cannot.
   */
  it("WGFT is the lowest US peak on file while the pages call it his highest-ever", () => {
    // Singles and features only — albumCharts holds a Billboard 200 No. 14.
    const usRows = [...singleCharts, ...featureCharts].flatMap((r) => r.entries.filter((e) => e.c === "US").map((e) => ({ title: r.title, peak: e.peak })));
    const best = usRows.reduce((a, b) => (b.peak < a.peak ? b : a));
    const wgft = songs.find((s) => s.slug === "wgft")!;
    const claims = [wgft.tagline, wgft.blurb, wgft.metaTitle, songMetaDescription(wgft), ...(wgft.extraFacts ?? []).map((f) => f.l), ...(wgft.faqs ?? []).map((f) => f.a)]
      .filter((t) => /highest|best/i.test(t ?? ""));
    expect(claims.length).toBeGreaterThan(0);
    expect(best, "a US peak above WGFT's 16 exists — rewrite the superlatives in songs.ts (wgft) and africasBiggest.ts").toEqual({ title: "WGFT", peak: 16 });
  });

  /**
   * certifications.ts's `year` is the release year (its own comment says so),
   * and songs.ts types the same year beside the slug. "23" carried 2022 in one
   * file and 2020 in the other for months; the parity test joins certs to
   * charts, and "23" has no chart row, so nothing looked.
   */
  it("a song's year matches its certification record's release year", () => {
    const problems: string[] = [];
    for (const song of songs) {
      const cert = (allItems as any[]).find((r) => r.title === song.title);
      if (cert && cert.year !== song.year) problems.push(`${song.title}: songs.ts ${song.year}, certifications.ts ${cert.year}`);
    }
    expect(problems).toEqual([]);
  });
});
