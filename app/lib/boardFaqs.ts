// Answer-first Q&A for the board's artist pages, derived from the same data the
// page renders.
//
// The board shipped with good technical SEO — Dataset and MusicGroup schema,
// breadcrumbs, canonicals, every route in the sitemap — and no FAQ at all. That
// is the gap that matters for AI answers rather than blue links: ChatGPT,
// Perplexity, Google's AI Overviews and Grok answer "how many certifications
// does Wizkid have" by lifting a passage that already reads like an answer, and
// a well-formed FAQ is the most liftable shape there is. /dai-dai and
// /records/africas-biggest have carried one for months, with a comment saying
// exactly that. The twenty-eight newest routes did not.
//
// Every answer is COMPUTED. Three rules, learned the hard way on this repo:
//   - No superlatives that the data does not prove. The board already shipped
//     two false ones ("the only artist in this field who does", "more home-chart
//     chart-toppers than anyone else") and both had to be retracted.
//   - Comparisons name the real number on both sides, so the sentence stays true
//     when either moves.
//   - Singulars are handled, because one artist here charts in exactly one
//     country and another has single-plaque releases.
//
// These are not written for query permutations — they are the four questions a
// reader actually arrives with, which is also the line the scaled-content-abuse
// policy draws.

import {
  certCount,
  countryCount,
  chartNo1s,
  chartEntries,
  countryMeta,
  type AfroArtist,
} from "../data/afrobeats";
import { count } from "./plural";
import { opponentOf } from "./headToHead";

export interface Faq {
  q: string;
  a: string;
}

/** "Diamond", "6× Platinum" — the tier as the ledger writes it. */
function tierLabel(level: string, x?: number): string {
  return x && x > 1 ? `${x}× ${level}` : level;
}

/**
 * The artist's single most decorated release, as a phrase.
 * Returns undefined rather than a guess when the register is empty.
 */
function topPlaque(a: AfroArtist): string | undefined {
  const order = ["Diamond", "Platinum", "Gold", "Silver"];
  let best: { title: string; label: string; rank: number; x: number } | undefined;
  for (const r of a.releases) {
    for (const c of r.certs) {
      const rank = order.indexOf(c.level);
      const x = c.x ?? 1;
      if (rank < 0) continue;
      if (!best || rank < best.rank || (rank === best.rank && x > best.x)) {
        best = { title: r.title, label: tierLabel(c.level, c.x), rank, x };
      }
    }
  }
  return best ? `“${best.title}” (${best.label})` : undefined;
}

/**
 * The questions a reader brings to a board artist page, answered in the first
 * sentence.
 *
 * The comparison uses the artist's HEAD-TO-HEAD PEER, not Burna Boy. That
 * pairing already exists in headToHead.ts and its comment explains why: nine
 * pages all measured against him asked the same question and got the same
 * answer, "he is bigger". Burna is the opponent for Wizkid alone, because that
 * is the one comparison that has always been the genre's actual argument. This
 * FAQ reads off the same map, so the page and its Q&A cannot disagree about who
 * an artist is measured against.
 */
export function artistFaqs(a: AfroArtist): Faq[] {
  const total = certCount(a);
  const countries = countryCount(a);
  const no1s = chartNo1s(a);
  const entries = chartEntries(a);
  const plaque = topPlaque(a);

  const faqs: Faq[] = [
    {
      q: `How many certifications does ${a.name} have?`,
      a:
        `${a.name} has ${count(total, "certification", "certifications")} across ` +
        `${count(countries, "country", "countries")}, counted one plaque per title per country at ` +
        `its current tier${plaque ? `. The most decorated is ${plaque}` : ""}. Every figure is read ` +
        `from the certifying body's own register, not from press coverage.`,
    },
    {
      q: `How many No. 1s does ${a.name} have?`,
      a:
        no1s === 0
          ? `${a.name} has no official chart No. 1 on the charts this site tracks, from ` +
            `${count(entries, "entry", "entries")} in total. Peaks are read from each country's own ` +
            `principal singles or albums chart — platform charts like Spotify or Apple Music are ` +
            `counted separately, on the live board.`
          : `${a.name} has ${count(no1s, "No. 1 placement", "No. 1 placements")} on official national ` +
            `charts, from ${count(entries, "entry", "entries")} in total. A No. 1 counts each time a ` +
            `release reaches the top of a country's chart, not the number of releases that have done ` +
            `it, and platform charts are counted separately on the live board.`,
    },
  ];

  // The question a real reader arrived with, twice: the Nigerian counts here do
  // not match TurnTable's own website, because that page serves a hard cap of
  // 500 rows and currently displays NO Silver awards for anyone. An artist with
  // Silver plaques therefore CANNOT be reconciled against the live page, and a
  // fan checking in good faith concludes the site invented them. Only asked
  // where it applies — one artist on the board holds no Nigerian Silver at all,
  // and answering an objection nobody can raise about her is noise.
  const ngCerts = a.releases.flatMap((r) => r.certs).filter((c) => c.c === "NG");
  const ngSilver = ngCerts.filter((c) => c.level === "Silver").length;
  if (ngSilver > 0) {
    faqs.push({
      q: `Why don't ${a.name}'s Nigerian certifications match TurnTable's website?`,
      a:
        `Because TurnTable's public certification page shows only part of its own register: it ` +
        `serves a hard cap of 500 rows and currently displays no Silver awards at all, for any ` +
        `artist. ${a.name} holds ${count(ngSilver, "Silver plaque", "Silver plaques")} among ` +
        `${count(ngCerts.length, "Nigerian plaque", "Nigerian plaques")} here, so at least that many ` +
        `cannot appear on the live page. They are read from the same register's own archived ` +
        `captures rather than inferred — open the February 2026 capture and search ` +
        `${a.name}'s name to see them.`,
    });
  }

  // Only when the artist has a pairing — a new artist joins the board before
  // anyone decides who they belong next to, and a comparison against nobody is
  // worse than no question.
  const rival = opponentOf(a);
  if (rival) {
    faqs.push({
      q: `Is ${a.name} more certified than ${rival.name}?`,
      a:
        total === rival.total
          ? `They are level: ${a.name} and ${rival.name} both hold ` +
            `${count(total, "plaque", "plaques")}, counted under the same rule — one plaque per title ` +
            `per country at its current tier. ${a.name} holds them across ` +
            `${count(countries, "country", "countries")}, ${rival.name} across ${rival.countries}.`
          : total > rival.total
            ? `Yes. ${a.name} holds ${count(total, "plaque", "plaques")} to ${rival.name}'s ` +
              `${rival.total}, counted under the same rule: one plaque per title per country at its ` +
              `current tier. The country spread differs too — ${countries} against ${rival.countries}.`
            : `No. ${a.name} holds ${count(total, "plaque", "plaques")}; ${rival.name} holds ` +
              `${rival.total}, counted under the same rule — one plaque per title per country at its ` +
              `current tier. The country spread differs too: ${countries} against ${rival.countries}.`,
    });
  }

  if (countries > 0) {
    // Names, not the two-letter codes — "NG, US" is not an answer a reader or an
    // answer engine can use. Biggest registers first so the list leads with the
    // ones people recognise.
    const byCount = new Map<string, number>();
    for (const r of a.releases) for (const c of r.certs) byCount.set(c.c, (byCount.get(c.c) ?? 0) + 1);
    const list = [...byCount.entries()]
      .sort((x, y) => y[1] - x[1])
      .map(([code]) => countryMeta(code).name);
    faqs.push({
      q: `Which countries has ${a.name} been certified in?`,
      a:
        `${a.name} holds plaques in ${count(countries, "country", "countries")}` +
        `${list.length ? `, including ${list.slice(0, 6).join(", ")}` : ""}` +
        `${list.length > 6 ? " and more" : ""}. Each is awarded by that country's own certifying body, ` +
        `and the full country-by-country breakdown is on this page.`,
    });
  }

  return faqs;
}

/** FAQPage structured data for a set of questions. */
export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
