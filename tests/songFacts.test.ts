import { describe, it, expect } from "vitest";
import { songs } from "../app/data/songs";
import { allItems, COUNTRIES, tierOf } from "../app/data/certifications";
import { allChartItems, singleCharts, featureCharts } from "../app/data/charts";

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
        song.metaDescription,
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
    const claims = [wgft.tagline, wgft.blurb, wgft.metaTitle, wgft.metaDescription, ...(wgft.extraFacts ?? []).map((f) => f.l), ...(wgft.faqs ?? []).map((f) => f.a)]
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
