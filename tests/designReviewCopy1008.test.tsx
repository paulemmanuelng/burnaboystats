import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AboutPage from "../app/about/page";
import aboutStyles from "../app/about/about.module.css";
import mobileAboutStyles from "../app/components/mobileAbout.module.css";
import { BURNA_BOY_REAL_NAME } from "../app/lib/seo";
import Home from "../app/page";
import CertificationsPage from "../app/certifications/page";
import ArtistPage from "../app/afrobeats/[artist]/page";
import SongPage from "../app/music/[song]/page";
import AlbumPage from "../app/music/albums/[album]/page";
import AnalysisPage from "../app/analysis/page";
import VisualizedPage from "../app/records/visualized/page";
import MethodologyPage from "../app/methodology/page";
import TimelinePage from "../app/timeline/page";
import FaqPage from "../app/faq/page";
import CountryPage from "../app/compare/in/[country]/page";
import { sectionLinks } from "../app/components/KeepExploring";
import mobileCertStyles from "../app/components/mobileCerts.module.css";
import { totalAwards, countryCount } from "../app/data/certifications";
import { readFileSync } from "node:fs";
import AfrobeatsPage from "../app/afrobeats/page";
import hubStyles from "../app/afrobeats/afrobeats.module.css";
import mobileHubStyles from "../app/components/mobileAfrobeatsHub.module.css";
import songStyles from "../app/music/[song]/song.module.css";
import { chartEntryCount } from "../app/data/charts";
import { artistBySlug, chartEntries, lastVerifiedOn, AFROBEATS_LAST_FULL_SWEEP } from "../app/data/afrobeats";
import ChartsPage from "../app/records/charts/page";
import ArtistChartsPage from "../app/afrobeats/[artist]/charts/page";
import certStyles from "../app/certifications/certifications.module.css";
import chartStyles from "../app/records/charts/charts.module.css";
import mobileChartStyles from "../app/components/mobileOfficialCharts.module.css";
import { songs } from "../app/data/songs";
import { roleTag } from "../app/data/songRoles";
import { timelineEras } from "../app/data/timeline";
import { onThisDayEvents } from "../app/lib/onThisDay";
import { timelineDate, timelineDay } from "../app/lib/timelineDates";
import timelineStyles from "../app/timeline/timeline.module.css";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ContactPage from "../app/contact/page";
import PressPage from "../app/press/page";
import ApiPage from "../app/api/page";
import EmbedPage from "../app/embed/page";
import RevenuePage from "../app/records/tours/revenue/page";
import ErrorPage from "../app/error";
import CopyButton from "../app/components/CopyButton";
import copyStyles from "../app/components/copyButton.module.css";
import { metadata as biggestMeta } from "../app/records/africas-biggest/page";
import { metadata as methodologyMeta } from "../app/methodology/page";
import { CREDIT_LINE } from "../app/lib/credit";
import { DATASET_CITATION } from "../app/lib/dataDownloads";
import { LICENSE } from "../app/lib/api";
import { embedSnippet } from "../app/lib/embedSnippet";
import { embedMetas } from "../app/lib/embedWidgets";
import { GET as llmsTxt } from "../app/llms.txt/route";

/**
 * The copy fixes of the 8 Oct 2026 design review (SUGGESTIONS.md §3, the
 * owner's "go" of 8 Oct). One block per item; every negative control is the
 * line the live site served before the fix.
 */

const dom = (html: string) => new DOMParser().parseFromString(html, "text/html");
const text = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

// ── Copy 1 (C-10) ─────────────────────────────────────────────────────────

describe("Copy 1 (C-10): /about answers the real-name search in its own heading and opening line", () => {
  /** What a reader who searched "burna boy real name" needs from the first
   *  two lines: whose page it is, then the name. */
  const answers = (h1: string, lede: string) =>
    /Burna Boy/.test(h1) && lede.startsWith(`Burna Boy's real name is ${BURNA_BOY_REAL_NAME}`);

  // Live on burnaboystats.com/about, both layouts, 8 Oct 2026.
  const SHIPPED_H1 = "About the Giant";
  const SHIPPED_LEDE = "The story of Damini Ogulu — Afrobeats' African Giant.";

  it("both layouts: the h1 names him and the lede leads with the real name from lib/seo.ts", () => {
    const d = dom(renderToStaticMarkup(<AboutPage />));
    const h1s = [...d.querySelectorAll("h1")].map(text);
    expect(h1s).toEqual(["About Burna Boy", "About Burna Boy"]);
    const desk = text(d.querySelector(`.${aboutStyles.lede}`));
    const phone = text(d.querySelector(`.${mobileAboutStyles.lede}`));
    for (const lede of [desk, phone]) expect(answers(h1s[0], lede), lede).toBe(true);
    expect(desk).toBe(phone);
    // The fast fact reads the same constant.
    expect(d.body.textContent).toContain(`Real name${BURNA_BOY_REAL_NAME}`);
  });

  it("negative control: the heading and lede the site shipped do not answer it", () => {
    expect(answers(SHIPPED_H1, SHIPPED_LEDE)).toBe(false);
  });
});

// ── Copy 2 (B-10, MU-24) ──────────────────────────────────────────────────

describe("Copy 2 (B-10, MU-24): a plaque is a certification, never an award", () => {
  /** "Awards" used for plaques: a count, a tier or a ledger word before it, or
   *  a plaque phrase after it. Real awards ("83 award wins", "48 award
   *  bodies", "Grammy Award") are left alone. */
  const PLAQUE_AWARD =
    /\b(?:\d+|silver|gold|platinum|diamond|N×|top|highest|sales)\s+awards?\b(?!\s+(?:wins?|bodies|body|nominations?|ceremon|show|from \d+ nominations))|\bawards?\s+(?:across|from the RIAA)\b|counting awards|fewer awards|listed the award\b|the award is real|report awards/gi;
  const misnamed = (t: string) => [...t.matchAll(PLAQUE_AWARD)].map((m) => m[0]);

  // Each line as the live site served it on 8 Oct 2026.
  const SHIPPED = [
    "Certifications · 251 awards across 27 countries", // Keep exploring, most pages
    "Certifications 4 awards", // /music/wgft section meta
    "Certifications 8 awards", // /music/albums/love-damini
    "Silver, Gold, Platinum and Diamond awards from the RIAA, BPI, SNEP, Music Canada and 23 more — across 93 certified releases.", // phone lede
    "251 awards from 27 countries. Filter by tier", // home ledger
    "Highest award", // home ledger column
    "All 8 Diamond awards come from SNEP and Epic Records", // home tier note
    "Counting awards flatters markets that certify early and often", // /analysis
    "crowned by 8 Diamond awards (", // /records/visualized
    "A register can publish fewer awards than it has issued", // /methodology
    "An N× award is priced here as N × Platinum.", // /compare footnotes
    "the award is real, the scale is not published", // /compare/in/colombia
    "Burna Boy's 100th current Platinum award worldwide.", // /timeline
    "The award is real but the rest is not.", // /methodology, claims checked and not published
  ];

  const pages = async () => ({
    home: renderToStaticMarkup(<Home />),
    certs: renderToStaticMarkup(<CertificationsPage />),
    wizkid: renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) })),
    wgft: renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: "wgft" }) })),
    loveDamini: renderToStaticMarkup(await AlbumPage({ params: Promise.resolve({ album: "love-damini" }) })),
    analysis: renderToStaticMarkup(<AnalysisPage />),
    visualized: renderToStaticMarkup(<VisualizedPage />),
    methodology: renderToStaticMarkup(<MethodologyPage />),
    timeline: renderToStaticMarkup(<TimelinePage />),
    faq: renderToStaticMarkup(<FaqPage />),
    colombia: renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country: "colombia" }) })),
    us: renderToStaticMarkup(await CountryPage({ params: Promise.resolve({ country: "united-states" }) })),
  });

  it("no page calls a plaque an award — labels, units, ledes, notes", async () => {
    const found: string[] = [];
    for (const [name, html] of Object.entries(await pages())) {
      for (const m of misnamed(text(dom(html).body))) found.push(`${name}: ${m}`);
    }
    expect(found).toEqual([]);
  });

  it("the Keep exploring card and the song and album meta count certifications", async () => {
    expect(sectionLinks.certifications.desc).toBe(`${totalAwards()} certifications across ${countryCount} countries`);
    const p = await pages();
    expect(text(dom(p.wgft).body)).toMatch(/Certifications\s*\d+ certifications/);
    expect(text(dom(p.loveDamini).body)).toMatch(/Certifications\s*\d+ certifications/);
  });

  it("the phone total's unit says Certifications, on Burna Boy's page and a board artist's", async () => {
    const p = await pages();
    for (const html of [p.certs, p.wizkid]) {
      const unit = dom(html).querySelector(`.${mobileCertStyles.totalUnit}`)!;
      expect(unit.innerHTML).toMatch(/^Certifications<br>\d+ countr(y|ies)$/);
    }
    // The board artist's phone lede names the same noun ("Every Wizkid certification, …").
    expect(text(dom(p.wizkid).body)).toContain("Every Wizkid certification, read in the issuing body's own register");
  });

  it("the hub's empty top-tier slot says cert, not award", () => {
    const src = readFileSync("app/components/MobileAfrobeatsHub.tsx", "utf8");
    expect(src).toContain(">top cert<");
    expect(src).not.toContain(">top award<");
  });

  it("negative control: every line the site shipped is caught", () => {
    for (const line of SHIPPED) expect(misnamed(line), line).not.toEqual([]);
  });
});

// ── Copy 3 (B-11, MU-08, B-22) ────────────────────────────────────────────

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
const nb = (t: string) => t.replace(/\u00a0/g, " ");

describe("Copy 3 (B-11): a count of chart entries is labelled as one, and every count has its unit", () => {
  /** A label over a chart-entry figure that calls it peaks. */
  const peaksForEntries = (label: string) => /chart peaks/i.test(label);
  // Live on /afrobeats and /afrobeats/wizkid, 8 Oct 2026.
  const SHIPPED = ["Chart peaks · permanent record", "Chart peaks", "Official chart peaks — 240 entries"];
  const SHIPPED_PHONE_TILE = "25 · 1 country";
  // "certs" on the phone tile, the short form allowed where space is tight.
  const tileHasUnits = (t: string) => /^\d+ (certifications|certs?) · \d+ countr(y|ies)$/.test(nb(t));

  it("the hub's rails, both layouts, say chart entries over Burna Boy's chart-entry count", () => {
    const d = dom(renderToStaticMarkup(<AfrobeatsPage />));
    const desk = d.querySelector(`.${hubStyles.chartRail}`)!;
    expect(text(desk.querySelector(`.${hubStyles.railLabel}`))).toBe("Chart entries");
    expect(text(desk)).toContain(`Burna Boy ${chartEntryCount}`);
    const phoneLabel = d.querySelector(`.${mobileHubStyles.railLabel}`)!;
    expect(text(phoneLabel)).toBe("Chart entries · permanent record");
    expect(phoneLabel.nextElementSibling!.getAttribute("aria-label")).toBe("Chart entries by artist");
    for (const l of [text(desk.querySelector(`.${hubStyles.railLabel}`)), text(phoneLabel)]) expect(peaksForEntries(l)).toBe(false);
  });

  it("every phone hub tile gives its count a unit, as the desktop tile does", () => {
    const d = dom(renderToStaticMarkup(<AfrobeatsPage />));
    const tiles = [...d.querySelectorAll(`.${mobileHubStyles.tileStat}`)].map((e) => e.textContent!);
    expect(tiles.length).toBeGreaterThan(10);
    for (const t of tiles) expect(tileHasUnits(t), t).toBe(true);
    // The break falls after the dot: the count and its noun, and the country
    // count and its noun, are each held together.
    for (const t of tiles) expect(t).toMatch(/^\d+\u00a0certs?\u00a0· \d+\u00a0countr(y|ies)$/);
  });

  it("the artist hero's charts button names the page and counts entries", async () => {
    const w = artistBySlug("wizkid")!;
    const t = text(dom(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) }))).body);
    expect(t).toContain(`Official charts — ${chartEntries(w)} entries`);
    expect(t).not.toContain("Official chart peaks");
  });

  it("negative control: the labels and tile the site shipped", () => {
    for (const l of SHIPPED) expect(peaksForEntries(l), l).toBe(true);
    expect(tileHasUnits(SHIPPED_PHONE_TILE)).toBe(false);
  });
});

describe("Copy 3 (MU-08): /music/alone gives one count of its charts", () => {
  const WORD: Record<string, number> = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
  /** Every bare "N charts" / "N official charts" on a page — a count the
   *  reader has to set against "8 countries charted". */
  const chartCounts = (t: string) =>
    [...t.matchAll(/\b(\d+|one|two|three|four|five|six|seven|eight|nine|ten) (?:official )?charts\b/gi)].map((m) => WORD[m[1].toLowerCase()] ?? Number(m[1]));

  // Live on /music/alone, 8 Oct 2026: the section meta and the blurb.
  const SHIPPED = ["Chart peaks 9 charts · best No. 17", "No. 28 in the UK and a run across nine official charts — and topped the UK's Afrobeats chart."];

  it("the section meta and the blurb count countries plus the global chart, as the card and FAQ do", async () => {
    const d = dom(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: "alone" }) })));
    const t = text(d.body);
    expect(chartCounts(t)).toEqual([]);
    const meta = [...d.querySelectorAll(`.${songStyles.sectionMeta}`)].map((e) => nb(text(e)));
    expect(meta).toContain("8 countries + Billboard Global 200 · best No. 17");
    expect(t).toContain("8countries charted");
    expect(t).toContain("charting in eight countries plus the Billboard Global 200");
    expect(t).toContain("charted in eight countries plus the Billboard Global 200");
  });

  it("the genre chart's No. 1 says it is not one of the peaks below", async () => {
    const t = text(dom(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: "alone" }) }))).body);
    expect(t).toContain("No. 1UK Official Afrobeats Chart — a genre chart, not one of the peaks below");
  });

  it("negative control: the shipped meta and blurb each carry a second count", () => {
    for (const l of SHIPPED) expect(chartCounts(l), l).toEqual([9]);
  });
});

describe("Copy 3 (B-22): an artist page's two dates each say what they date", () => {
  /** A date printed with no event named: "last verified 7 October" with no
   *  subject, or the board's sweep worded as if it dated this artist. */
  const unnamed = (t: string) => {
    const bare = (t.match(/last verified \d/gi) ?? []).length - (t.match(/registers last verified \d/gi) ?? []).length;
    return bare + (t.match(/this board was last re-read at every register/gi) ?? []).length;
  };
  // Live on /afrobeats/tyla, 8 Oct 2026 (desktop provenance, phone caption, head-to-head).
  const SHIPPED = [
    "Every figure read in an issuing body's own register — except 10 plaques in South Africa — last verified 7 October 2026.",
    "Last verified 7 October 2026.",
    "Both are read at source; this board was last re-read at every register on 2 October 2026.",
  ];

  it("Tyla: her registers' date and the board sweep's, each named, on both layouts", async () => {
    const tyla = artistBySlug("tyla")!;
    expect(lastVerifiedOn(tyla) > AFROBEATS_LAST_FULL_SWEEP).toBe(true); // two different dates on one page
    const t = text(dom(renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "tyla" }) }))).body);
    expect(unnamed(t)).toBe(0);
    expect(t.split(`Tyla's registers last verified ${longDate(lastVerifiedOn(tyla))}.`).length - 1).toBe(2);
    expect(t).toContain(`the last full board sweep re-read every register on ${longDate(AFROBEATS_LAST_FULL_SWEEP)}.`);
  });

  it("negative control: each line as shipped names no event", () => {
    for (const l of SHIPPED) expect(unnamed(l), l).toBe(1);
  });
});

// ── Copy 4 (CC-16, MU-23) ─────────────────────────────────────────────────

describe("Copy 4 (CC-16, MU-23): where the co-lead tag appears, a visible line says what it means", () => {
  const LINE = "co-lead: on one of Burna Boy's own releases, so counted as his lead (the rule ChartMasters uses).";
  /** Visible text only: a title attribute is not text, and is never shown on
   *  a phone. */
  const explains = (visible: string) => /co-lead: on one of Burna Boy's own releases, so counted as his lead/i.test(visible);
  // Live on /certifications and /records/charts, 8 Oct 2026: the row, with
  // the explanation only in the tag's title attribute.
  const SHIPPED_ROW =
    '<div class="certCredit">Gunna ft. Burna Boy · 2025 <span class="roleTag" title="A lead for Burna Boy with Gunna: the song is in his own Spotify discography">co-lead</span></div>';

  const lines = (html: string, cls: string) => [...dom(html).querySelectorAll(`.${cls}`)].map(text);

  it("/certifications: one line on each layout, over the rows that carry the tag", () => {
    const html = renderToStaticMarkup(<CertificationsPage />);
    expect(lines(html, certStyles.coLeadNote)).toEqual([LINE]);
    expect(lines(html, mobileCertStyles.coLeadNote)).toEqual([LINE]);
    // The word in the line is drawn as the tag is.
    const d = dom(html);
    expect(d.querySelector(`.${certStyles.coLeadNote} .${certStyles.roleTag}`)!.textContent).toBe("co-lead");
    expect(d.querySelector(`.${mobileCertStyles.coLeadNote} .${mobileCertStyles.roleTag}`)!.textContent).toBe("co-lead");
  });

  it("/records/charts: one line on each layout", () => {
    const html = renderToStaticMarkup(<ChartsPage />);
    expect(lines(html, chartStyles.coLeadNote)).toEqual([LINE]);
    expect(lines(html, mobileChartStyles.coLeadNote)).toEqual([LINE]);
  });

  it("song pages: under the credit on every co-lead song, on no other", async () => {
    for (const song of songs) {
      const html = renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: song.slug }) }));
      const note = lines(html, songStyles.coLeadNote);
      if (/^Co-lead/.test(roleTag(song.title))) expect(note, song.slug).toEqual(["Co-lead: on one of Burna Boy's own releases, so counted as his lead (the rule ChartMasters uses)."]);
      else expect(note, song.slug).toEqual([]);
    }
    // WGFT, the page the review read: "Gunna ft. Burna Boy" with the line under it.
    const wgft = dom(renderToStaticMarkup(await SongPage({ params: Promise.resolve({ song: "wgft" }) })));
    expect(wgft.querySelector(`.${songStyles.credit}`)!.nextElementSibling!.className).toBe(songStyles.coLeadNote);
  });

  it("no board page carries the line (no board row carries the tag)", async () => {
    const certs = renderToStaticMarkup(await ArtistPage({ params: Promise.resolve({ artist: "wizkid" }) }));
    const charts = renderToStaticMarkup(await ArtistChartsPage({ params: Promise.resolve({ artist: "wizkid" }) }));
    expect(explains(text(dom(certs).body))).toBe(false);
    expect(explains(text(dom(charts).body))).toBe(false);
  });

  it("negative control: the shipped row explains the tag only in a title attribute", () => {
    expect(explains(text(dom(SHIPPED_ROW).body))).toBe(false);
    expect(explains(LINE)).toBe(true);
  });
});

// ── Copy 5 (C-13) ─────────────────────────────────────────────────────────

describe("Copy 5 (C-13): /timeline takes each day from On This Day, and its promise is true", () => {
  const entries = timelineEras.flatMap((e) => e.entries);
  const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const isDay = (label: string) => /^\d{1,2} [A-Z][a-z]{2} \d{4}$/.test(label);
  /** A lede that promises every milestone a date with no qualifier is only
   *  true if every label is a day. */
  const promiseHolds = (lede: string, labels: string[]) =>
    !/every milestone dated and linked/.test(lede) || labels.every(isDay);
  // Live on /timeline, 8 Oct 2026.
  const SHIPPED_LEDE =
    "From Port Harcourt mixtapes to the World Cup Final halftime show — sixteen years, era by era, every milestone dated and linked to the page that holds the working.";
  const SHIPPED_LABELS = entries.map((e) => e.date); // the typed labels the page printed

  it("every named event is on the calendar, and its day agrees with the typed label", () => {
    for (const e of entries.filter((x) => x.otd)) {
      const ev = onThisDayEvents.find((x) => x.id === e.otd);
      expect(ev, `${e.title}: ${e.otd}`).toBeDefined();
      const [y, m] = [ev!.date.slice(0, 4), MON[Number(ev!.date.slice(5, 7)) - 1]];
      expect(e.date.endsWith(y), `${e.title}: ${e.date} vs ${ev!.date}`).toBe(true);
      if (/^[A-Z][a-z]{2} \d{4}$/.test(e.date)) expect(e.date.startsWith(m), e.title).toBe(true);
      if (isDay(e.date)) expect(e.date).toBe(timelineDay(ev!.date));
    }
  });

  it("a milestone the calendar holds by its own page is named — every album release on it", () => {
    const albumReleases = new Set(onThisDayEvents.filter((x) => x.kind === "release").map((x) => x.href));
    for (const e of entries.filter((x) => x.kind === "album" && x.href && albumReleases.has(x.href)))
      expect(e.otd, e.title).toBeTruthy();
  });

  it("the page prints the day: L.I.F.E 12 Aug 2013, the SSE Arena 3 Nov 2019, Dai Dai 15 May 2026", () => {
    const d = dom(renderToStaticMarkup(<TimelinePage />));
    const labels = [...d.querySelectorAll(`.${timelineStyles.entryDate}`)].map(text);
    expect(labels).toEqual(entries.map(timelineDate));
    expect(labels).toContain("12 Aug 2013");
    expect(labels).toContain("3 Nov 2019");
    expect(labels).toContain("15 May 2026");
    expect(labels.filter(isDay).length).toBe(entries.filter((e) => e.otd || isDay(e.date)).length);
    const lede = text(d.querySelector(`.${timelineStyles.lede}`));
    expect(lede).toContain("every milestone dated — to the day where its record holds one —");
    expect(promiseHolds(lede, labels)).toBe(true);
  });

  it("negative control: the shipped lede over the shipped labels promised what half the entries lacked", () => {
    expect(SHIPPED_LABELS.filter((l) => !isDay(l)).length).toBeGreaterThan(10);
    expect(promiseHolds(SHIPPED_LEDE, SHIPPED_LABELS)).toBe(false);
  });
});

// ── Copy 6 (C-18, C-17) ───────────────────────────────────────────────────

describe("Copy 6 (C-18): the site speaks as one person", () => {
  /** "We", "us", "our" and "ours" as the site's own voice — quoted titles
   *  ("We Pray") left out. */
  const plural = (t: string) =>
    [...t.replace(/“[^”]*”/g, "").matchAll(/\b(?:[Ww]e|[Oo]urs?|[Uu]s)\b|\b[Ww]e['’](?:ll|re|ve|d)\b/g)].map((m) => m[0]);
  // Each line as the live site served it on 8 Oct 2026.
  const SHIPPED = [
    "Message us", // /contact kicker, both layouts
    "Spotted something we should fix, or just want to say hi? Use the form below — we love hearing from fellow fans.",
    "This is an unofficial fan site, so we can't pass messages to Burna Boy.",
    "Your message has been sent — it'll land in our inbox. We'll get back to you soon.",
    "Every figure on this site is verified against primary sources and free to use — all we ask is a credit with a link.",
    "If you build something with it, tell us and we'll share it.",
    "the primary sources we use, how we resolve conflicts, and how to report a correction.",
    "Counts that circulate higher than ours",
    "Checks that changed our own figures",
    "Something broke on our side",
    "Every reported single night by an African artist we have verified, ranked by gross",
    "leads 6 of the 8 we count",
  ];

  it("no 'we' on /contact, /press, /methodology, the box-office board, the error screen or the Africa's Biggest snippet", async () => {
    const found: string[] = [];
    const pages: Record<string, string> = {
      contact: renderToStaticMarkup(<ContactPage />),
      press: renderToStaticMarkup(<PressPage />),
      methodology: renderToStaticMarkup(<MethodologyPage />),
      revenue: renderToStaticMarkup(<RevenuePage />),
      error: renderToStaticMarkup(<ErrorPage error={new Error("x")} reset={() => {}} />),
    };
    for (const [name, html] of Object.entries(pages)) for (const m of plural(text(dom(html).body))) found.push(`${name}: ${m}`);
    for (const [name, d] of [["africas-biggest", String(biggestMeta.description)], ["methodology meta", String(methodologyMeta.description)]])
      for (const m of plural(d)) found.push(`${name}: ${m}`);
    expect(found).toEqual([]);
    // The contact form's own confirmation, and the digest's error.
    for (const f of ["app/components/ContactForm.tsx", "app/components/SubscribeBox.tsx", "app/global-error.tsx"]) {
      const src = readFileSync(f, "utf8").replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, "");
      expect(src, f).not.toMatch(/\bour inbox|We&apos;ll|on our side|gives us/);
    }
  });

  it("/methodology no longer calls the site a portfolio project", () => {
    const t = text(dom(renderToStaticMarkup(<MethodologyPage />)).body);
    expect(t).not.toMatch(/portfolio/i);
    expect(t).toContain("This is a fan-made project with no affiliation to Burna Boy");
  });

  it("negative control: every line the site shipped speaks as 'we'", () => {
    for (const line of SHIPPED) expect(plural(line), line).not.toEqual([]);
  });
});

describe("Copy 6 (C-17): one credit line, and one Copy button", () => {
  /** A credit line with its dated tail and any HTML taken off — what a
   *  reader is asked to print. */
  const lineOf = (s: string) =>
    text(dom(s).body)
      .replace(/, as of .*$/, "")
      .replace(/, data as of .*$/, "");
  // The four credit lines the site served on 8 Oct 2026.
  const SHIPPED = [
    "Data: Burna Boy Stats (burnaboystats.com)", // /press, plain
    "Source: Burna Boy Stats (burnaboystats.com), data as of 7 October 2026. CC BY 4.0.", // /press, dataset citation
    "Data from Burna Boy Stats — https://burnaboystats.com", // /api licence box
    "Data from Burna Boy Stats (https://burnaboystats.com)", // every /api/v1 response
  ];

  it("/press (both forms and the citation), /api, the JSON licence, /embed and llms.txt all print the same line", async () => {
    const press = dom(renderToStaticMarkup(<PressPage />));
    const pressCodes = [...press.querySelectorAll("code")].map((c) => c.textContent!).filter((c) => /Burna Boy Stats/.test(c) && c.length < 200);
    expect(pressCodes.length).toBeGreaterThanOrEqual(6); // three boxes, two layouts
    const api = dom(renderToStaticMarkup(<ApiPage />));
    // The credit boxes, not the JSON sample that quotes the payload.
    const apiCodes = [...api.querySelectorAll("code")].map((c) => c.textContent!).filter((c) => /Burna Boy Stats/.test(c) && c.length < 200);
    expect(apiCodes.length).toBeGreaterThanOrEqual(2); // both layouts
    const snippet = embedSnippet(embedMetas()[0], "auto").split("\n")[1];
    const llms = await llmsTxt().text();
    const lines = new Set([...pressCodes, ...apiCodes, DATASET_CITATION, LICENSE.attribution, snippet].map(lineOf));
    expect([...lines]).toEqual([CREDIT_LINE]);
    expect(CREDIT_LINE).toBe("Data from Burna Boy Stats (burnaboystats.com)");
    expect(llms).toContain(`with the credit line “${CREDIT_LINE}”`);
    // /embed says what the line under the iframe reads.
    expect(text(dom(renderToStaticMarkup(<EmbedPage />)).body)).toContain(`The line under the iframe, “${CREDIT_LINE}”`);
  });

  it("negative control: the site shipped four different credit lines", () => {
    expect(new Set(SHIPPED.map(lineOf)).size).toBe(4);
  });

  /** A page module's copy-button rule that draws a look of its own (rather
   *  than placing the shared button): any colour, border or background. */
  const drawsOwnLook = (rule: string) => /\b(color|border|background)\s*:/.test(rule);
  const ruleBody = (css: string, sel: string) => {
    const m = new RegExp(`\\n\\${sel} \\{([^}]*)\\}`).exec(css.replace(/\/\*[\s\S]*?\*\//g, ""));
    return m ? m[1] : null;
  };
  // api.module.css as it shipped (origin/main 63e558a9), the curl row's button.
  const SHIPPED_API_RULE = `
  margin-left: auto;
  min-height: 38px;
  padding: 0 15px;
  border-radius: 999px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);`;

  it("every Copy button on /press, /api and /embed, both layouts, is the one shared button", () => {
    for (const [name, html] of [["press", renderToStaticMarkup(<PressPage />)], ["api", renderToStaticMarkup(<ApiPage />)], ["embed", renderToStaticMarkup(<EmbedPage />)]] as const) {
      const buttons = [...dom(html).querySelectorAll("button")].filter((b) => /^(Copy|Copy HTML|Copy code)$/.test(text(b)));
      expect(buttons.length, name).toBeGreaterThanOrEqual(2);
      for (const b of buttons) expect(b.classList.contains(copyStyles.copy), `${name}: ${b.outerHTML.slice(0, 120)}`).toBe(true);
    }
    // The page modules only place it.
    for (const [file, sels] of [
      ["app/api/api.module.css", [".copyBtn", ".copyBtnSm"]],
      ["app/embed/embed.module.css", [".copyBtn"]],
      ["app/components/mobileEmbed.module.css", [".copyBtn"]],
      ["app/components/mobileApi.module.css", [".copySm"]],
    ] as const) {
      const css = readFileSync(file, "utf8");
      for (const sel of sels) {
        const body = ruleBody(css, sel);
        expect(body, `${file} ${sel}`).not.toBeNull();
        expect(drawsOwnLook(body!), `${file} ${sel}`).toBe(false);
      }
    }
  });

  it("one behaviour: a press with the Clipboard API refused falls back, on every button", async () => {
    Object.defineProperty(navigator, "clipboard", { value: { writeText: vi.fn(() => Promise.reject(new Error("NotAllowedError"))) }, configurable: true, writable: true });
    const exec = vi.fn(() => true);
    Object.defineProperty(document, "execCommand", { value: exec, configurable: true, writable: true });
    const { getByRole } = render(<CopyButton value="Data from Burna Boy Stats (burnaboystats.com)" />);
    fireEvent.click(getByRole("button"));
    await waitFor(() => expect(getByRole("button").textContent).toBe("Copied ✓"));
    expect(exec).toHaveBeenCalledWith("copy");
    delete (document as { execCommand?: unknown }).execCommand;
    delete (navigator as { clipboard?: unknown }).clipboard;
  });

  it("negative control: the shipped /api rule drew its own look, and the shipped default was no fallback", () => {
    expect(drawsOwnLook(SHIPPED_API_RULE)).toBe(true);
    expect("  fallback = false,").toMatch(/fallback = false/);
    expect(readFileSync("app/components/CopyButton.tsx", "utf8")).toMatch(/fallback = true,/);
  });
});
