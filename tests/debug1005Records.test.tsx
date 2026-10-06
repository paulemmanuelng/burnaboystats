import { describe, it, expect, vi } from "vitest";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { createElement, type ReactNode } from "react";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound() — the fixture slug no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: ReactNode; prefetch?: boolean }) =>
    createElement("a", { href, ...rest }, children),
}));

import { albums, eps, compilations } from "../app/data/albums";
import { albumPages } from "../app/data/albumPages";
import { songs } from "../app/data/songs";
import { allItems, features, singles, COUNTRIES } from "../app/data/certifications";
import { singleCharts, allChartItems, BURNA_LAST_CHART_SWEEP } from "../app/data/charts";
import { statBoxes, BURNA_YT_AUDIENCE, BURNA_YT_AUDIENCE_WORDS, rankOf, tiedHot100Count } from "../app/data/africasBiggest";
import { HOT100_READ_ON_LONG, HOT100_CHART_DATE_LONG } from "../app/data/hot100Weeks";
import { stats as byTheNumbers } from "../app/data/byTheNumbers";
import { firstGroups } from "../app/data/firsts";
import { spotifyGlobalRank } from "../app/data/spotify";
import { ceremonies } from "../app/data/awards";
import { timelineEras } from "../app/data/timeline";
import { tours } from "../app/data/tours";
import { faqs } from "../app/data/faqs";
import { updates } from "../app/data/updates";
import { liveCharts } from "../app/data/liveCharts";
import {
  DAI_DAI_APPLE_ITUNES_DAYS_AS_OF_LONG,
  DAI_DAI_APPLE_ITUNES_DAYS_AS_OF_LONG_ES,
  DAI_DAI_ITUNES_NO1_COUNTRIES_AS_OF_LONG,
  DAI_DAI_ITUNES_NO1_COUNTRIES_AS_OF_LONG_ES,
} from "../app/data/daiDai";
import { DAI_DAI_2026_MOST_NO1_THROUGH_LONG } from "../app/data/daiDaiNo1Claim";
import { issuingBodyCount, issuerOf } from "../app/lib/certs";
import { certsInView, homeCodeFor } from "../app/lib/certScope";
import { featuredTitlesOf } from "../app/lib/certUnits";
import { BURNA } from "../app/data/afrobeats";
import { marketsShown, findings } from "../app/lib/analysisFindings";
import { marketsByVolume } from "../app/lib/analysis";
import { hasOwnBreadcrumb, FEED_DESCRIPTION } from "../app/lib/seo";
import { findCard, getStatCards, FIRST_KEY_ALIASES } from "../app/lib/statCards";
import { titleKey } from "../app/lib/titleKey";
import { catalogueTitle } from "../app/lib/liveChartTitles";
import { ledgerRows } from "../app/lib/homeData";
import { changedSentence } from "../app/lib/recentNumberOnes";
import { LIVE_CADENCE_LABEL } from "../app/lib/liveChartMeta";
import { noRowLabelClause, burnaNoRowLabelPlaques } from "../app/lib/offRegister";
import { UPDATED_NOTE } from "../app/lib/api";
import { enGbDate, noSept, shortStamp } from "../app/lib/dates";
import { dayBySlug } from "../app/lib/onThisDay";
import { dayPostCard, sharePublisher } from "../app/lib/onThisDayShare";
import { opensDialog } from "../app/lib/clickIntent";
import Discography from "../app/components/Discography";
import TierDonut from "../app/components/TierDonut";
import VisualizedPage from "../app/records/visualized/page";
import DaiDaiPageES, { metadata as esMetadata } from "../app/dai-dai/es/page";
import { metadata as updatesMetadata } from "../app/updates/page";
import OnThisDayDayPage from "../app/on-this-day/[day]/page";

/**
 * The live debug pass of 5 Oct 2026, PR "records": certifications, records,
 * charts, live charts, songs and albums, Dai Dai, home, the feeds and the API,
 * On This Day. One guard per finding where a guard is cheap; each keeps the
 * string or value the live site shipped as its negative control. The song-page
 * guards (seo-02, music-14) are in tests/songFacts.test.ts, the replay tiles'
 * (music-03) in tests/replayGlobalTiles.test.tsx and the live-chart builder's
 * (core-01) in tests/liveCharts.test.ts.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const textOf = (html: string) =>
  (new DOMParser().parseFromString(html, "text/html").body.textContent ?? "").replace(/\s+/g, " ");
/** The text of the server-rendered element whose class names include `cls`. */
const classText = (html: string, cls: RegExp) =>
  [...new DOMParser().parseFromString(html, "text/html").querySelectorAll("[class]")]
    .filter((el) => (el.getAttribute("class") ?? "").split(/\s+/).some((c) => cls.test(c)))
    .map((el) => (el.textContent ?? "").replace(/\s+/g, " ").trim());

// ── Songs and albums ────────────────────────────────────────────────────────

describe("music-05: a label field holds labels", () => {
  it("no release's label carries a co-artist; Steel & Copper prints its ℗ line", () => {
    const all = [...albums, ...eps, ...compilations];
    expect(all.filter((a) => /\bwith\b|\bfeat\.|\bft\./i.test(a.label)).map((a) => `${a.title}: ${a.label}`)).toEqual([]);
    const sc = eps.find((e) => e.title === "Steel & Copper")!;
    expect(sc.label).toBe("Atlantic · Bad Habit · Spaceship");
    expect(sc.credit).toBe("with DJDS");
    // Negative control: the field as /music printed it.
    expect(/\bwith\b/i.test("with DJDS · Spaceship")).toBe(true);
  });
});

describe("music-08: an ongoing chart claim in song or album prose carries a date", () => {
  const STILL = /still (?:charting|on (?:the|that) chart)/i;
  const undated = (s: string) =>
    s.split(/(?<=[.!?])\s+/).filter((sentence) => STILL.test(sentence) && !/\b20\d\d\b/.test(sentence));
  it("every 'still charting' sentence names the issue it was read on", () => {
    const texts = [...albumPages, ...songs].flatMap((p) => [p.blurb, ...(p.faqs ?? []).map((f) => f.a)]);
    expect(texts.flatMap(undated)).toEqual([]);
  });
  it("every chart-entry note that says a run is still going names the issue it was read on", () => {
    // charts.ts notes print in the /records/charts title, aria-label and the
    // phone's hidden text. Twice as Tall's Nigerian note read "still charting"
    // and three "Peak still open" notes "read while … still on the chart", all
    // with no date; every one was read on the 10 Sep 2026 issue.
    // The date has to sit in the clause that makes the claim: Twice as Tall's
    // note carried a year, but it was the peak's ("February 2023").
    const ONGOING = /still (?:charting|on\b)/i;
    const undatedClaim = (note: string) =>
      note.split(/[;—]/).some((clause) => ONGOING.test(clause) && !/\b20\d\d\b/.test(clause));
    const notes = allChartItems.flatMap((r) => r.entries.map((e) => [`${r.title} ${e.c}`, e.note ?? ""] as const));
    expect(notes.filter(([, n]) => undatedClaim(n)).map(([k]) => k)).toEqual([]);
    // Negative controls: two of the notes as they shipped.
    expect(undatedClaim("TurnTable Official Top 100 Albums — 17 on the 2 and 16 February 2023 issues; still charting.")).toBe(true);
    expect(undatedClaim("Peak still open — read while the release is still on the chart, so it may yet climb.")).toBe(true);
    // "Peak still open" alone is not an ongoing claim the guard should read.
    expect(undatedClaim("Peak still open — 41 on the 4 Jul 2024 issue")).toBe(false);
  });
  it("negative control: the African Giant answer as it shipped", () => {
    expect(
      undated(
        "African Giant charted in nine countries, peaking at No. 12 in the Netherlands, No. 16 in the UK, No. 23 in Nigeria (where it is still charting) and No. 104 on the US Billboard 200.",
      ),
    ).toHaveLength(1);
  });
});

describe("music-09: /music links to every album page", () => {
  const html = renderToStaticMarkup(<Discography albums={albums} />);
  it("each studio album card is a real link to its page; the dialog still opens on a plain click", () => {
    for (const p of albumPages) expect(html, p.slug).toContain(`href="/music/albums/${p.slug}"`);
    expect(html).toContain('aria-haspopup="dialog"');
    // A modified or middle click goes to the page instead.
    expect(opensDialog({ button: 0, metaKey: false, ctrlKey: false, shiftKey: false, altKey: false })).toBe(true);
    expect(opensDialog({ button: 0, metaKey: true, ctrlKey: false, shiftKey: false, altKey: false })).toBe(false);
    expect(opensDialog({ button: 1, metaKey: false, ctrlKey: false, shiftKey: false, altKey: false })).toBe(false);
  });
  it("the phone grid links them too", () => {
    const src = read("app/components/MobileMusic.tsx");
    expect(src).toContain("href={`/music/albums/${page.slug}`}");
  });
  it("negative control: the EPs, which have no page, stay buttons", () => {
    const epHtml = renderToStaticMarkup(<Discography albums={eps} layout="pair" />);
    expect(epHtml).not.toContain("/music/albums/");
    expect(epHtml).toContain("<button");
  });
});

describe("music-10/11/12/13: small copy fixes", () => {
  it("the listeners legend completes its sentence", () => {
    expect(read("app/music/listeners/page.tsx")).toContain("A country with at least one city in the top {cityCount}");
  });

  it("L.I.F.E's expansion is written one way", () => {
    for (const f of ["app/data/albumPages.ts", "app/data/timeline.ts", "app/data/songs.ts"])
      expect(read(f), f).not.toContain("Impact For Eternity");
  });

  it("a single named in a L.I.F.E answer is spelled as the track list spells it", () => {
    const life = albums.find((a) => a.title === "L.I.F.E")!;
    const fold = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const misspelt = (text: string) =>
      [...text.matchAll(/“([^”]+)”/g)]
        .map((m) => m[1])
        .filter((t) => life.tracks.some((tr) => fold(tr) === fold(t) && tr !== t));
    const answers = songs.flatMap((s) => s.faqs.filter((f) => /L\.I\.F\.E/.test(f.q)).map((f) => f.a));
    expect(answers.length).toBeGreaterThan(0);
    expect(answers.flatMap(misspelt)).toEqual([]);
    // Negative control: the Like to Party answer as it shipped.
    expect(misspelt("Five: “Like to Party” (2012), “Tonight” (2012), “Always Love You” (2013), “Run My Race” (2013) and “Yawa Dey” (2013).")).toEqual(["Yawa Dey"]);
  });

  it("the On a Spaceship FAQ promises only what the Rizzla page says", () => {
    const answer = albumPages.find((a) => a.slug === "on-a-spaceship")!.faqs.map((f) => f.a).find((a) => /Rizzla/.test(a))!;
    const rizzla = songs.find((s) => s.slug === "rizzla")!;
    const page = [rizzla.blurb, ...rizzla.extraFacts.map((f) => f.l), ...rizzla.faqs.map((f) => f.a)].join(" ");
    expect(answer).not.toMatch(/dancehall/);
    expect(/dancehall/.test(page)).toBe(false);
    for (const claim of ["24 March 2016", "Pulse Nigeria", "NotJustOk"]) expect(page, claim).toContain(claim);
  });
});

// ── Dai Dai ─────────────────────────────────────────────────────────────────

describe("music-04: the English chrome declares its language", () => {
  it("skip link, nav, menu sheet, footer and back-to-top say lang=en", () => {
    const layout = read("app/layout.tsx");
    expect(layout).toContain('<a href="#content" className="skipLink" lang="en">');
    expect(layout).toContain('<footer className="footer" lang="en">');
    expect(read("app/components/Nav.tsx")).toMatch(/<header\s+lang="en"/);
    expect(read("app/components/MobileNavSheet.tsx")).toMatch(/hidden=\{!open\}[\s\S]{0,120}lang="en"/);
    expect(read("app/components/BackToTop.tsx")).toContain('lang="en"');
    // The menu's one Spanish label says so.
    expect(read("app/lib/navGroups.ts")).toContain('{ label: "Dai Dai en español", href: "/dai-dai/es", meta: "ES", lang: "es" }');
  });
});

describe("music-06: the Apple Music and iTunes rows are dated on both editions", () => {
  it("each row reads its as-of constant, formatted, never typed", () => {
    expect(DAI_DAI_APPLE_ITUNES_DAYS_AS_OF_LONG).toBe("21 August 2026");
    expect(DAI_DAI_APPLE_ITUNES_DAYS_AS_OF_LONG_ES).toBe("21 de agosto de 2026");
    expect(DAI_DAI_ITUNES_NO1_COUNTRIES_AS_OF_LONG).toBe("21 August 2026");
    expect(DAI_DAI_ITUNES_NO1_COUNTRIES_AS_OF_LONG_ES).toBe("21 de agosto de 2026");
    const en = read("app/dai-dai/page.tsx");
    const es = read("app/dai-dai/es/page.tsx");
    const line = (src: string, re: RegExp) => src.split("\n").find((l) => re.test(l)) ?? "";
    expect(line(en, /k: "Apple Music Europe, No\. 1"/)).toContain("${DAI_DAI_APPLE_ITUNES_DAYS_AS_OF_LONG}");
    expect(line(en, /k: "iTunes worldwide, No\. 1"/)).toContain("${DAI_DAI_APPLE_ITUNES_DAYS_AS_OF_LONG}");
    expect(line(en, /k: "iTunes No\. 1, countries"/)).toContain("${DAI_DAI_ITUNES_NO1_COUNTRIES_AS_OF_LONG}");
    expect(line(es, /k: "Apple Music Europa, N\.º 1"/)).toContain("${DAI_DAI_APPLE_ITUNES_DAYS_AS_OF_LONG_ES}");
    expect(line(es, /k: "iTunes mundial, N\.º 1"/)).toContain("${DAI_DAI_APPLE_ITUNES_DAYS_AS_OF_LONG_ES}");
    expect(line(es, /k: "iTunes N\.º 1, países"/)).toContain("${DAI_DAI_ITUNES_NO1_COUNTRIES_AS_OF_LONG_ES}");
  });
});

describe("music-17/18/19, seo-07: the Spanish edition matches the English", () => {
  const html = renderToStaticMarkup(<DaiDaiPageES />);
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));

  it("the FAQ runs in the English order: the two halftime questions follow the UK one", () => {
    const qs: string[] = ld.find((x) => x["@type"] === "FAQPage").mainEntity.map((q: { name: string }) => q.name);
    const at = (re: RegExp) => qs.findIndex((q) => re.test(q));
    expect(at(/Reino Unido/)).toBeGreaterThanOrEqual(0);
    expect(at(/Cuándo fue el show/)).toBe(at(/Reino Unido/) + 1);
    expect(at(/Quiénes actuaron/)).toBe(at(/Reino Unido/) + 2);
    expect(at(/Ghetto Kids/)).toBe(at(/Reino Unido/) + 3);
  });

  it("the UK row keeps the 'highest in history' clause", () => {
    expect(textOf(html)).toContain("y con diferencia la canción mundialista más alta en la historia de esa lista, por encima del N.º 21");
  });

  it("the share text names the halftime show", () => {
    const og = esMetadata.openGraph as { description?: string };
    expect(og.description).toBe(
      "El himno del Mundial 2026 de Shakira y Burna Boy — número 1 en el mundo entero, e interpretado en el show de medio tiempo de la Final.",
    );
  });

  it("the breadcrumb trail is Spanish and the page writes its own", () => {
    expect(hasOwnBreadcrumb("/dai-dai/es")).toBe(true);
    const crumbs = ld.find((x) => x["@type"] === "BreadcrumbList");
    expect(crumbs.itemListElement.map((i: { name: string }) => i.name)).toEqual(["Inicio", "La historia de Dai Dai", "Español"]);
    // Negative control: the generated trail it replaced.
    expect(crumbs.itemListElement.map((i: { name: string }) => i.name)).not.toEqual(["Home", "The Dai Dai Story", "Español"]);
  });
});

// ── Certifications and records ─────────────────────────────────────────────

describe("records-01: a release Burna leads is not a featured appearance", () => {
  it("no `features` entry is credited 'feat.' — that credit names the guests on his own release", () => {
    expect(features.filter((r) => /^feat\./i.test(r.credit ?? "")).map((r) => r.title)).toEqual([]);
    expect(singles.some((r) => r.title === "Toni-Ann Singh")).toBe(true);
    // The two files agree: charts.ts files it as a single too.
    expect(singleCharts.some((r) => r.title === "Toni-Ann Singh")).toBe(true);
  });
});

describe("records-20: issuing bodies are counted from who issued the plaques", () => {
  const home = homeCodeFor(BURNA.country);
  const featured = featuredTitlesOf("burna-boy");
  const view = (scope: "all" | "intl", credit: "all" | "lead") => certsInView(allItems, { home, featured }, { scope, credit });
  /** The count /certifications printed: the COUNTRIES register map's bodies. */
  const shipped = (rows: typeof allItems) => new Set(rows.flatMap((r) => r.certs.map((c) => COUNTRIES[c.c].body))).size;

  it("folds a programme into its body and ČNS IFPI's two registers into one", () => {
    expect(issuerOf({ c: "US", body: "RIAA Latin" })).toBe("RIAA");
    expect(issuerOf({ c: "SK" })).toBe(issuerOf({ c: "CZ" }));
    const all = new Set(allItems.flatMap((r) => r.certs.map(issuerOf)));
    expect(all.has("Sony Music Africa")).toBe(true);
    expect(all.has("Sony Music Colombia")).toBe(true);
    expect([...all].some((b) => /Pro M[uú]sica Colombia/i.test(b))).toBe(false);
  });

  it("the lead-credit views drop the body only a feature brought in", () => {
    expect(issuingBodyCount(view("all", "all"))).toBe(26);
    expect(issuingBodyCount(view("all", "lead"))).toBe(issuingBodyCount(view("all", "all")) - 3);
    // Negative control: the register-map count printed one more on both lead views.
    expect(shipped(view("all", "lead"))).toBe(issuingBodyCount(view("all", "lead")) + 1);
    expect(shipped(view("intl", "lead"))).toBe(issuingBodyCount(view("intl", "lead")) + 1);
  });
});

describe("records-04/05/18: the Africa's Biggest boards", () => {
  const box = (id: string) => statBoxes.find((b) => b.id === id)!;

  it("an entry level with the one above it shares its rank", () => {
    const untied: string[] = [];
    for (const b of statBoxes.filter((x) => x.layout === "list")) {
      const es = b.entries ?? [];
      es.forEach((e, i) => {
        if (i > 0 && e.value && e.value === es[i - 1].value && !e.tie) untied.push(`${b.id}: ${e.name} (${e.value})`);
      });
    }
    expect(untied).toEqual([]);
    const ranks = (id: string) => box(id).entries!.map((_, i, es) => rankOf(es, i));
    expect(ranks("most-200m-stream-songs").slice(2)).toEqual([3, 3, 5]);
    expect(ranks("apple-music-global-no1")).toEqual([1, 1]);
  });

  it("the single-day board's note counts no boards", () => {
    const note = box("daily-peak-streams-ng").note!;
    expect(note.startsWith("Burna Boy does not lead this board, and it is here for that reason.")).toBe(true);
    expect(note).not.toContain("The board on this page Burna Boy does not lead");
  });

  it("crossSite-13: the Hot 100 entries board is stamped with the read its counts come from", () => {
    const src = box("most-hot-100-entries").source;
    expect(src).toContain(`Read ${HOT100_READ_ON_LONG}, as of the chart dated ${HOT100_CHART_DATE_LONG}.`);
    expect(src).not.toContain("As of July 2026");
  });

  it("crossSite-13: the shared 'Tyla & Hugh Masekela · tied' row holds only while their counts are equal", () => {
    const row = box("most-hot-100-entries").entries.find((e) => e.name === "Tyla & Hugh Masekela")!;
    expect(row.value).toBe(`${tiedHot100Count("Tyla", "Hugh Masekela")}`);
    expect(box("most-hot-100-entries").note).toContain(`tied on ${tiedHot100Count("Tyla", "Hugh Masekela")};`);
    // Negative control: two acts that are not tied (Tems 8, Tyla 4) throw.
    expect(() => tiedHot100Count("Tyla", "Tems")).toThrow(/no longer tied/);
  });

  it("crossSite-03: the monthly-listeners board prints the rank the by-the-numbers tile links it for", () => {
    const tile = byTheNumbers.find((s) => s.label === "Global rank by Spotify listeners")!;
    expect(tile.href).toBe("/records/africas-biggest");
    expect(box("monthly-listeners-peak").source).toContain(`No. ${spotifyGlobalRank} among all artists worldwide`);
  });
});

describe("crossSite-03: a by-the-numbers tile links to a page that shows its figure", () => {
  const first = (re: RegExp) => firstGroups.flatMap((g) => g.items).find((f) => re.test(f.title))!;
  it("Hot 100 entries and YouTube views link to the firsts, which state them", () => {
    const hot = byTheNumbers.find((s) => s.label === "Billboard Hot 100 entries")!;
    const yt = byTheNumbers.find((s) => s.label === "YouTube views, all-time")!;
    expect(hot.href).toBe("/records/firsts");
    expect(yt.href).toBe("/records/firsts");
    expect(first(/Most Billboard Hot 100 entries/)).toBeDefined();
    expect(first(/Hot 100 six years running/)).toBeDefined();
    expect(first(/4 billion YouTube views/)).toBeDefined();
    // Negative control: /records/charts and /music, where they pointed, state neither.
    expect(read("app/records/charts/page.tsx")).not.toMatch(/six years running|Hot 100 entries/);
  });
});

describe("records-09: one name for the YouTube audience, and a peak is not 'now'", () => {
  it("no surface calls it YouTube Music; the first states the peak and its day", () => {
    const tile = byTheNumbers.find((s) => s.num === BURNA_YT_AUDIENCE)!;
    expect(tile.label).toBe("YouTube monthly audience, at peak");
    const f = firstGroups.flatMap((g) => g.items).find((x) => /700 million/.test(x.title))!;
    expect(`${f.title} ${f.text}`).not.toMatch(/YouTube Music/);
    expect(f.text).not.toContain(`now ${BURNA_YT_AUDIENCE_WORDS}`);
    expect(f.text).toContain(`peaked at ${BURNA_YT_AUDIENCE_WORDS} on 12 August 2026`);
  });
  it("the old title's stat card still resolves", () => {
    const old = titleKey("First African artist to surpass 700 million YouTube Music monthly audience");
    expect(FIRST_KEY_ALIASES[old]).toBeDefined();
    expect(findCard(`first-${old}`)?.label).toBe("First African artist to surpass 700 million monthly audience on YouTube");
  });
});

describe("records-11: the phone firsts note promises nothing the page lacks", () => {
  it("no 'sourced on the desktop page'", () => {
    const note = read("app/records/firsts/page.tsx").match(/sourceNote="([^"]+)"/)![1];
    expect(note).toBe("Every milestone was cross-checked against multiple sources before it was listed. Tap a category to open it.");
    // Negative control: the note as it shipped points at a layout with no per-item sources.
    expect(/desktop/.test("Each milestone is a documented first, sourced on the desktop page. Tap a category to open it.")).toBe(true);
    expect(note).not.toMatch(/desktop/);
  });
});

describe("records-13/16/21/22: /records/visualized", () => {
  const html = renderToStaticMarkup(<VisualizedPage />);
  const t = textOf(html);

  it("the peak bands are named by their ranges", () => {
    for (const label of ["2–5", "6–10", "11–40", "41+"]) expect(t, label).toContain(label);
    expect(t).not.toMatch(/No\. 1 \d+ Top 5 \d+/);
  });

  it("the donut's percentages add up to 100", () => {
    const segs = [46, 55, 32, 135, 116].map((value, i) => ({ label: String(i), value, color: "red" }));
    const d = renderToStaticMarkup(<TierDonut segments={segs} total={384} centerNum="46" centerLabel="x" ariaLabel="x" />);
    const pcts = classText(d, /(^|_)pct(_|$)/).map((s) => Number(s.replace("%", "")));
    expect(pcts).toEqual([12, 14, 9, 35, 30]);
    // Negative control: rounded one by one, as shipped — 99.
    expect(segs.map((s) => Math.round((s.value / 384) * 100)).reduce((a, b) => a + b, 0)).toBe(99);
  });

  it("the phone's certifying countries keep the country tied with the sixth", () => {
    // Denmark and Australia both hold 10 plaques today.
    expect(t).toMatch(/The 7 biggest of \d+ certifying countries/);
    expect(t).not.toMatch(/The 6 biggest of \d+ certifying countries/);
  });

  it("the sweep date is the site's stamp, not an ISO day", () => {
    const iso = read("app/data/liveCharts.ts").match(/liveChartsUpdated = "(\d{4}-\d{2}-\d{2})"/)![1];
    expect(t).toContain(`Last swept ${shortStamp(iso)}.`);
    expect(t).not.toContain(`Last swept ${iso}`);
  });

  it("/analysis keeps a market tied with the tenth, and its caption counts them", () => {
    const tenth = marketsByVolume[9];
    expect(marketsShown.filter((m) => m.entries === tenth.entries).length).toBe(
      marketsByVolume.filter((m) => m.entries === tenth.entries).length,
    );
    const f = findings.find((x) => x.id === "britain-not-america")!;
    expect(f.bars.length).toBe(marketsShown.length);
    expect(f.chartNote.startsWith(`Top ${marketsShown.length} markets`)).toBe(true);
  });
});

describe("records-14: phone award rows run by year", () => {
  it("MobileAwards sorts each body's rows as the desktop explorer does", () => {
    expect(read("app/components/MobileAwards.tsx")).toMatch(/\.sort\(\(a, b\) => a\.year - b\.year\)/);
    // The data really is out of order in two bodies — the reason for the sort.
    const outOfOrder = ceremonies.filter((c) => c.noms.some((n, i) => i > 0 && n.year < c.noms[i - 1].year)).map((c) => c.name);
    expect(outOfOrder.length).toBeGreaterThan(0);
  });
});

describe("records-19: one credit per song on /records/awards", () => {
  it("Baddest, WGFT and Laho II each read one way", () => {
    const works = ceremonies.flatMap((c) => c.noms.map((n) => n.work ?? "")).filter(Boolean);
    const formsOf = (title: string) => [...new Set(works.filter((w) => w.startsWith(`${title} (`)))];
    expect(formsOf("Baddest")).toEqual(["Baddest (AKA ft. Burna Boy, Khuli Chana & Yanga Chief)"]);
    expect(formsOf("WGFT")).toEqual(["WGFT (Gunna ft. Burna Boy)"]);
    expect(formsOf("Laho II")).toEqual(["Laho II (Shallipopi & Burna Boy)"]);
  });
});

// ── Charts and live charts ──────────────────────────────────────────────────

describe("records-03/crossSite-08: /records/charts", () => {
  const src = read("app/records/charts/page.tsx");
  it("both layouts get the same most-charted-first order", () => {
    for (const k of ["albumCharts", "singleCharts", "featureCharts"]) expect(src).toContain(`[...${k}].sort(byReachOrder)`);
    expect(src).toMatch(/<MobileOfficialCharts\s+albums=\{albums\}\s+singles=\{singles\}\s+features=\{features\}/);
  });

  it("the 'as of' month is the last read at the bodies, which no dated read in charts.ts postdates", () => {
    expect(src).toContain("as of {checkedAsOf}.");
    expect(src).not.toContain("as of September 2026");
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const reads = [...read("app/data/charts.ts").matchAll(/[Rr]e-?read(?: at the bodies)? (\d{1,2}) ([A-Z][a-z]{2})[a-z]* (20\d\d)|[Rr]ead (\d{1,2}) ([A-Z][a-z]{2})[a-z]* (20\d\d)/g)].map((m) => {
      const [d, mo, y] = m[1] ? [m[1], m[2], m[3]] : [m[4], m[5], m[6]];
      return `${y}-${String(MONTHS.indexOf(mo) + 1).padStart(2, "0")}-${d.padStart(2, "0")}`;
    });
    expect(reads.length).toBeGreaterThan(0);
    expect(reads.filter((r) => r > BURNA_LAST_CHART_SWEEP)).toEqual([]);
    expect(reads.sort().at(-1)).toBe(BURNA_LAST_CHART_SWEEP);
  });
});

describe("core-09: titles as the site spells them", () => {
  it("the live board shows the catalogue's spelling and keeps the feed's for lookups", () => {
    expect(catalogueTitle("wgft")).toBe("WGFT");
    expect(catalogueTitle("WE PRAY")).toBe("We Pray");
    expect(catalogueTitle("I Told Them...")).toBe("I Told Them…");
    expect(catalogueTitle("No Sign Of Weakness")).toBe("No Sign of Weakness");
    expect(catalogueTitle("Twice As Tall")).toBe("Twice as Tall");
    expect(catalogueTitle("L.I.F.E - Leaving an Impact for Eternity")).toBe("L.I.F.E");
    // A title the catalogue does not hold passes through unchanged.
    expect(catalogueTitle("Some Other Song")).toBe("Some Other Song");
    expect(liveCharts.length).toBeGreaterThan(0);
  });
  it("the news feed spells WGFT and On the Low the site's way", () => {
    const texts = updates.map((u) => u.text).join("\n");
    expect(texts).not.toMatch(/“wgft”|“Wgft”|“On The Low”/);
  });
});

// ── Home, FAQ, methodology, timeline ───────────────────────────────────────

describe("core-02: the FAQ dates Dai Dai's 2026 claim", () => {
  it("as /dai-dai does, and not as a single run", () => {
    const a = faqs.map((f) => f.a).find((x) => /days at No\. 1 on Spotify's Global Daily/.test(x))!;
    expect(a).toContain(`the most days at No. 1 by any song in 2026 through the chart dated ${DAI_DAI_2026_MOST_NO1_THROUGH_LONG}.`);
    expect(a).not.toContain("longest-running");
  });
});

describe("core-03/15, otd-03: /methodology", () => {
  const src = read("app/methodology/page.tsx");
  it("the rules are counted", () => {
    expect(src).toContain("{numberWord(principles.length)} rules");
    expect(src).not.toMatch(/>Four rules</);
    const compare = src.slice(src.indexOf('aria-labelledby="certified-units"'), src.indexOf('aria-labelledby="dates"'));
    const leads = compare.match(/<p className=\{styles\.p\}>\s*<strong>/g) ?? [];
    expect(leads.length).toBe(5);
    expect(compare).toMatch(/so five\s+rules govern it/);
  });
  it("the Latin scale is stated exactly", () => {
    expect(src).not.toMatch(/a sixteenth of the standard scale|1,000,000, sixteen times/);
    expect(src).toContain("certifies at {latinShare}% of the standard scale");
  });
  it("On This Day's 'How dates are filed' links land on a section that answers it", () => {
    expect(src).toContain('<h2 id="dates" className={styles.h2}>How dates are filed</h2>');
    for (const f of ["app/components/MobileOnThisDayDay.tsx", "app/on-this-day/page.tsx", "app/components/MobileOnThisDayIndex.tsx"]) {
      expect(read(f), f).toContain('href="/methodology#dates"');
      expect(read(f), f).not.toContain('href="/methodology"');
    }
  });
});

describe("core-05/17: the timeline is in order", () => {
  const entries = timelineEras.flatMap((e) => e.entries);
  it("the Garden entry does not say the earlier Ziggo Dome night followed it", () => {
    const msg = entries.find((e) => /Madison Square Garden/.test(e.title))!;
    expect(msg.text).not.toMatch(/Ziggo Dome sellout follows/);
    const dates = tours.flatMap((t) => t.dates ?? []);
    const ziggo = Date.parse(dates.find((d) => d.venue === "Ziggo Dome")!.date);
    const garden = Date.parse(dates.find((d) => /Madison Square Garden/.test(d.venue))!.date);
    expect(ziggo).toBeLessThan(garden);
  });
  it("Stadium history sits between June and September 2023", () => {
    const i = entries.findIndex((e) => e.title === "Stadium history, twice");
    expect(entries[i].date).toBe("Jun–Jul 2023");
    expect(entries[i - 1].date).toBe("Jun 2023");
    expect(entries[i + 1].date).toBe("Sep 2023");
  });
});

describe("core-06: a No. 1 count beside a country figure", () => {
  it("llms.txt splits the 46 into national and global; the timeline tile pairs no country count", () => {
    const llms = read("app/llms.txt/route.ts");
    expect(llms).toContain("${countryNumberOnes} on\n  national charts across ${numberOneCountryCount} countries");
    expect(llms).not.toContain("They span");
    const tl = read("app/timeline/page.tsx");
    expect(tl).toContain('l: "No. 1 placements worldwide"');
    expect(tl).not.toContain("No. 1s · ${chartedCountryCount} countries charted");
  });
});

describe("crossSite-15: search chips name their dataset", () => {
  it("certifying countries, award bodies", () => {
    const src = read("app/lib/searchStats.ts");
    expect(src).toContain('"/about": `${countryCount} certifying countries`');
    expect(src).toContain('"/methodology": `${ceremonyCount} award bodies`');
  });
});

describe("core-16: home ledger credits name the album", () => {
  it("an album track without a song page names its album", () => {
    expect(ledgerRows.find((r) => r.title === "Gbona")?.credit).toBe("Burna Boy · African Giant");
    const bare = ledgerRows.filter((r) => r.credit === "Burna Boy").map((r) => r.title);
    const onAnAlbum = bare.filter((t) => albums.some((a) => a.tracks.some((tr) => titleKey(tr.replace(/\s*\((?:feat|with)\.?[^)]*\)\s*$/i, "")) === titleKey(t))));
    expect(onAnAlbum).toEqual([]);
  });
  it("'Onyeka (Baby)' names Twice as Tall, whose track list spells it 'Onyeka'", () => {
    expect(ledgerRows.find((r) => r.title === "Onyeka (Baby)")?.credit).toBe("Burna Boy · Twice as Tall");
    // Negative control: the two spellings are not one title key, which is why
    // the row read a bare "Burna Boy".
    expect(titleKey("Onyeka (Baby)")).not.toBe(titleKey("Onyeka"));
    expect(albums.find((a) => a.title === "Twice as Tall")!.tracks).toContain("Onyeka");
  });
});

describe("core-18: the home hero says the cadence once", () => {
  it("the status line has no cadence fallback of its own", () => {
    expect(changedSentence).not.toBe(LIVE_CADENCE_LABEL);
    if (!changedSentence) {
      expect(read("app/components/TodaysNumber.tsx")).toContain("{changedSentence && <span className={styles.statusText}>{changedSentence}</span>}");
      expect(read("app/components/MobileHome.tsx")).toContain("{changedSentence && <span>{changedSentence}</span>}");
    }
  });
});

describe("core-20: the primitives legend", () => {
  it("--cyan and --silver are peak bands; the tiers have their own inks", () => {
    const src = read("app/primitives/page.tsx");
    expect(src).not.toContain('"Diamond · Top 10"');
    expect(src).toContain('["--tier-diamond-ink", "Diamond"]');
  });
});

// ── Feeds and API ───────────────────────────────────────────────────────────

describe("core-12: the source statements name the no-row label route", () => {
  it("while All Eyes on Me's 19× Platinum stands, every short copy says so", () => {
    expect(burnaNoRowLabelPlaques.some((p) => /All Eyes on Me/.test(p))).toBe(true);
    const clause = noRowLabelClause(", or, ", "on ");
    expect(clause).toBe(", or, where the register holds no row for the title, on the label's own award");
    const card = getStatCards().find((c) => c.id === "african-giant")!;
    expect(card.detail).toContain("where the register holds no row for the title, on the label's own award");
    expect(read("app/curator/page.tsx")).toContain('${noRowLabelClause("; ", "on ")}');
    expect(read("app/api/v1/certifications/route.ts")).toContain('${noRowLabelClause(", or, ")}');
  });
});

describe("core-13: the API's updated note covers the live-charts snapshots", () => {
  it("says what updated means there", () => {
    expect(UPDATED_NOTE).toContain("on the two live-charts snapshots it is the day the snapshot was taken");
  });
});

describe("core-19: one short month — Sep", () => {
  it("the helper writes Sep where ICU writes Sept", () => {
    const d = new Date("2026-09-30T12:00:00Z");
    expect(enGbDate(d, { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })).toBe("30 Sep 2026");
    expect(shortStamp("2026-09-09")).toBe("9 Sep 2026");
    expect(noSept("30 Sept")).toBe("30 Sep");
    // A month that merely contains the letters is left alone.
    expect(noSept("30 September")).toBe("30 September");
  });
  it("no formatter or typed note still prints Sept", () => {
    // Outside comments: the notes and data only.
    const tourCode = read("app/data/tours.ts").replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/.*$/gm, "");
    expect(tourCode).not.toMatch(/\bSept\b/);
    expect(read("app/components/MobileUpdates.tsx")).toContain("noSept(DATE_FMT.format(asDate(u.date)))");
  });
});

describe("seo-13: /updates shares as Burna Boy news", () => {
  it("the share description is the feed's own sentence", () => {
    const og = updatesMetadata.openGraph as { description?: string };
    expect(og.description).toBe(FEED_DESCRIPTION);
    expect(FEED_DESCRIPTION).toContain("Burna Boy");
    expect(read("app/rss.xml/route.ts")).toContain("${escapeXml(FEED_DESCRIPTION)}");
  });
});

// ── On This Day ─────────────────────────────────────────────────────────────

describe("seo-06: the Fillmore Silver Spring is in Silver Spring", () => {
  it("filed in its own town, so 15 September no longer says Washington", () => {
    const row = tours.flatMap((t) => t.dates ?? []).find((d) => d.venue === "The Fillmore Silver Spring")!;
    expect(row.city).toBe("Silver Spring, MD");
    expect(dayBySlug("15-september")!.lead.headline).not.toMatch(/Washington, D\.C\./);
  });
});

describe("otd-02/09/11: the day pages and cards", () => {
  it("a card with no publisher is not promised a source", async () => {
    const page = async (day: string) =>
      textOf(renderToStaticMarkup(await OnThisDayDayPage({ params: Promise.resolve({ day }) })));
    const release = dayBySlug("17-january")!;
    expect(sharePublisher(release.lead)).toBeNull();
    const t = await page("17-january");
    expect(t).toContain("It names the date, so it stays true wherever it's reposted.");
    expect(t).not.toContain("It names the date and the source");
    const withSource = dayBySlug("15-july")!;
    expect(sharePublisher(withSource.lead)).not.toBeNull();
    expect(await page("15-july")).toContain("It names the date and the source, so it stays true");
  });

  it("the index lede does not call the Dai Dai single an album release", () => {
    expect(read("app/on-this-day/page.tsx")).not.toMatch(/album\s+releases, chart peaks/);
  });

  it("the BPI honour's card names the publisher, not the place", () => {
    expect(dayPostCard(dayBySlug("15-july")!, { withCover: false }).source).toBe("BPI");
  });
});
