import { describe, it, expect } from "vitest";
import { albumPages, albumPageBySlug, albumPageByTitle } from "../app/data/albumPages";
import { albums } from "../app/data/albums";
import { albumCharts } from "../app/data/charts";
import { allItems, COUNTRIES, tierOf } from "../app/data/certifications";
import { CHART_COUNTRIES } from "../app/data/charts";
import { ceremonies } from "../app/data/awards";
import { sameTitle } from "../app/lib/titleKey";

/**
 * data/albumPages.ts had no test, while data/songs.ts and data/cars.ts — the
 * two files it is modelled on — are both gated.
 *
 * The gap matters because of how the page fails. /music/albums/[slug] looks its
 * album up in albums.ts BY TITLE and calls notFound() when the lookup misses,
 * while sitemap.ts lists the route from the slug regardless. So a one-character
 * title typo publishes a 404 in the sitemap, drops the album's chart and
 * certification blocks, and unlinks it from the song pages and the release
 * explorers (lib/releasePages.ts joins on the same title) — and the build still
 * succeeds, because a 404 is a legitimate outcome of a static render. Nothing
 * else on the site is looking.
 */
describe("album pages data", () => {
  it("every album page has a unique, url-safe slug", () => {
    const slugs = albumPages.map((a) => a.slug);
    expect(new Set(slugs).size, "a duplicate slug would list the same route twice").toBe(
      slugs.length
    );
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9-]+$/);
  });

  // The failure this file exists for. sameTitle, not ===, because albums.ts
  // writes "I Told Them…" with a real ellipsis where charts.ts writes "..." —
  // the join the page itself uses.
  it("every album page resolves to exactly one album in albums.ts", () => {
    for (const p of albumPages) {
      const found = albums.filter((a) => sameTitle(a.title, p.title));
      expect(
        found.length,
        `${p.slug}: "${p.title}" matches ${found.length} albums — the page would 404 while the sitemap still lists it`
      ).toBe(1);
    }
  });

  it("every studio album has a page, and every page is a studio album", () => {
    const missing = albums.filter((a) => !albumPages.some((p) => sameTitle(p.title, a.title)));
    expect(missing.map((a) => a.title), "album with no deep-dive page").toEqual([]);
    expect(albumPages.length).toBe(albums.length);
  });

  // Chart and cert blocks are joined by title too, so an album that HAS data in
  // those files must reach it. Only the albums that charted are asserted — the
  // first three predate his chart entries entirely.
  it("an album with chart or certification data actually joins to it", () => {
    for (const p of albumPages) {
      const chartRow = albumCharts.find((r) => sameTitle(r.title, p.title));
      const certRow = allItems.find((r) => sameTitle(r.title, p.title));
      const charted = albumCharts.some((r) => sameTitle(r.title, p.title));
      if (charted) expect(chartRow!.entries.length, `${p.slug} charts`).toBeGreaterThan(0);
      if (certRow) expect(certRow.certs.length, `${p.slug} certs`).toBeGreaterThan(0);
    }
    // The premise: if this drops to zero the check above has stopped checking.
    expect(
      albumPages.filter((p) => albumCharts.some((r) => sameTitle(r.title, p.title))).length
    ).toBeGreaterThanOrEqual(5);
  });

  it("each album page carries SEO fields and at least one FAQ", () => {
    for (const p of albumPages) {
      // Google truncates a title past ~60 characters and a description past
      // ~160. scripts/check-seo.mjs catches these too, but only after a full
      // next build — the same bound is here so an edit fails in seconds.
      expect(p.metaTitle.length, `title too short: ${p.slug}`).toBeGreaterThan(10);
      expect(p.metaTitle.length, `title too long: ${p.slug}`).toBeLessThanOrEqual(60);
      expect(p.metaDescription.length, `description too short: ${p.slug}`).toBeGreaterThan(50);
      expect(p.metaDescription.length, `description too long: ${p.slug}`).toBeLessThanOrEqual(160);
      // tagline is the OG share description; blurb is the page's opening.
      expect(p.tagline.length, `tagline missing: ${p.slug}`).toBeGreaterThan(10);
      expect(p.blurb.length, `blurb missing: ${p.slug}`).toBeGreaterThan(100);
      // An empty FAQ array renders a FAQPage node with no questions in it.
      expect(p.faqs.length, `no FAQ: ${p.slug}`).toBeGreaterThan(0);
      for (const f of p.faqs) {
        expect(f.q.length, `${p.slug}: empty question`).toBeGreaterThan(5);
        expect(f.a.length, `${p.slug}: empty answer`).toBeGreaterThan(20);
      }
      // extraFacts sit in the same grid as the derived chart/cert facts, so a
      // blank one renders an empty cell rather than nothing.
      for (const f of p.extraFacts) {
        expect(f.v.length, `${p.slug}: fact with no value`).toBeGreaterThan(0);
        expect(f.l.length, `${p.slug}: fact with no label`).toBeGreaterThan(0);
      }
    }
  });

  it("albumPageByTitle survives the ellipsis both datasets spell differently", () => {
    // charts.ts and certifications.ts write "I Told Them...", albums.ts writes
    // "I Told Them…". Both must reach the page, or the song pages and the
    // release explorers quietly stop linking to it.
    expect(albumPageByTitle("I Told Them…")?.slug).toBe("i-told-them");
    expect(albumPageByTitle("I Told Them...")?.slug).toBe("i-told-them");
  });

  it("albumPageBySlug finds and misses correctly", () => {
    expect(albumPageBySlug("african-giant")?.title).toBe("African Giant");
    expect(albumPageBySlug("nope")).toBeUndefined();
  });

  /**
   * Album prose types figures the page derives beside them — track counts,
   * country counts, chart peaks, plaque tiers, Album of the Year nominations —
   * and they drifted: African Giant said "seven countries, peaking at No. 12 in
   * Ireland" (nine; Ireland's peak is 80), On a Spaceship "his longest album"
   * (a three-way tie). Nothing tied the words to the data until 18 Sep 2026.
   */
  it("every typed count, peak, tier and nomination in album prose equals the data", () => {
    const WORDS: Record<string, number> = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20 };
    const num = (w: string) => (/^\d+$/.test(w) ? Number(w) : WORDS[w.toLowerCase()]);
    const ALIAS: Record<string, string> = { "the UK": "GB", UK: "GB", "the Netherlands": "NL", "the US": "US", US: "US", Nigeria: "NG", Ireland: "IE", Canada: "CA", France: "FR", Sweden: "SE", Belgium: "BE", Germany: "DE", Switzerland: "CH", Norway: "NO", Austria: "AT", Portugal: "PT", Denmark: "DK", "New Zealand": "NZ", Australia: "AU" };
    const codeOf = (name: string) => {
      if (ALIAS[name]) return ALIAS[name] === "GB" ? "UK" : ALIAS[name];
      const hit = Object.entries(CHART_COUNTRIES).find(([, m]) => m.name === name);
      return hit?.[0];
    };
    const problems: string[] = [];
    for (const p of albumPages) {
      const album = albums.find((a) => sameTitle(a.title, p.title));
      const chart = albumCharts.find((r) => sameTitle(r.title, p.title));
      const cert = allItems.find((r) => sameTitle(r.title, p.title));
      const countries = chart ? chart.entries.filter((e) => e.c !== "GLB" && e.c !== "GLBX") : [];
      const texts = [p.blurb, p.metaDescription, ...p.extraFacts.map((f) => `${f.v} ${f.l}`), ...p.faqs.flatMap((f) => [f.q, f.a])];
      for (const text of texts) {
        for (const m of text.matchAll(/\b(\w+)[- ]tracks?\b(?! deluxe)/gi)) {
          // "the 19-track deluxe edition" names the OTHER edition and is exempt.
          const n = num(m[1]);
          if (n != null && album && n !== album.tracks.length) problems.push(`${p.slug}: "${m[0]}" but albums.ts holds ${album.tracks.length}`);
        }
        for (const m of text.matchAll(/(?:charted|charting|certifications|certified) in (\w+) countries/gi)) {
          const n = num(m[1]);
          const isCert = /certif/i.test(m[0]);
          const want = isCert ? (cert ? new Set(cert.certs.map((c) => c.c)).size : 0) : countries.length;
          if (n != null && n !== want) problems.push(`${p.slug}: "${m[0]}" but the data holds ${want}`);
        }
        for (const m of text.matchAll(/No\. (\d+) (?:in|on) (?:the )?([A-Z][A-Za-z ]+?)(?=[,.;)]| and | —|$)/g)) {
          const code = codeOf(m[2].replace(/^US Billboard 200$/, "US").replace(/^Billboard 200$/, "US").trim());
          if (!code) continue;
          const row = chart?.entries.find((e) => e.c === code);
          if (!row || row.peak !== Number(m[1])) problems.push(`${p.slug}: "${m[0]}" but charts.ts holds ${row ? row.peak : "no entry"} for ${code}`);
        }
        for (const m of text.matchAll(/(\d+)× Platinum in ([A-Z][a-z]+)/g)) {
          const code = codeOf(m[2]);
          const c = cert?.certs.find((x) => x.c === code);
          if (!c || tierOf(c.level) !== "platinum" || (c.x ?? 1) !== Number(m[1])) problems.push(`${p.slug}: "${m[0]}" but certifications.ts holds ${c ? `${c.level}${c.x ? ` ×${c.x}` : ""}` : "no plaque"}`);
        }
        for (const m of text.matchAll(/(\d+)× nom/g)) {
          const noms = ceremonies.flatMap((b) => b.noms.filter((n) => n.category === "Album of the Year" && !n.won && sameTitle(n.work ?? "", p.title)));
          if (Number(m[1]) !== noms.length) problems.push(`${p.slug}: "${m[0]}" but awards.ts holds ${noms.length} Album of the Year nominations`);
        }
      }
    }
    expect(problems).toEqual([]);
  });

  it("Love, Damini's tracks 6–10 are in the release's order", () => {
    // Read at Spotify, Apple and Deezer on 18 Sep 2026; Wikipedia's order was the outlier.
    expect(albums.find((a) => a.title === "Love, Damini")!.tracks.slice(5, 10)).toEqual(["Whiskey", "Last Last", "Different Size (feat. Victony)", "It's Plenty", "Dirty Secrets"]);
  });
});
