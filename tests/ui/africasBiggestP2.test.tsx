import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/records/africas-biggest",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfricasBiggestPage from "../../app/records/africas-biggest/page";
import desk from "../../app/records/africas-biggest/africas-biggest.module.css";
import phone from "../../app/components/mobileAfricasBiggest.module.css";
import MobileAfricasBiggest from "../../app/components/MobileAfricasBiggest";
import {
  statBoxes,
  LISTENERS_PEAKS_READ_ON,
  asOfLabel,
  type LeaderboardBox,
} from "../../app/data/africasBiggest";
import { readingsUsed500, standings500 } from "../../app/data/african500m";
import { africaBoards, type Board } from "../../app/lib/africaBoards";
import { DATE_LABELS, methodParts, type ProvDate } from "../../app/lib/provenance";
import { read, winning } from "../fixtures/cssRules";

/**
 * J1-9 (design review 8 Oct 2026, fixes 12 and 22): every Africa's Biggest
 * board ends in a P2 on both layouts: one or two short source names, each with
 * its date and the date's kind, always visible, and "Method ▾" opening the
 * board's existing source text word for word. Before this the desktop folded
 * the whole source behind "Source ▾" and the phone showed none.
 *
 * Every date comes from a named constant or the reading the board is built on;
 * a month prints "as of", a board with no recorded read says so (Paul decides
 * (a)). The expected lines are formatted here, not by the component's helper,
 * so the two cannot agree by sharing a mistake.
 */

const ROOT = join(__dirname, "..", "..");
const parse = (html: string) => new DOMParser().parseFromString(html, "text/html");
const norm = (el: Element | null | undefined) => (el?.textContent ?? "").replace(/ /g, " ").replace(/\s+/g, " ").trim();
const squash = (s: string) => s.replace(/\s+/g, " ").trim();
const top = (m: string | null) => m === null;
const doc = parse(renderToStaticMarkup(<AfricasBiggestPage />));
const inDesktop = (el: Element) => Boolean(el.closest(`.${desk.desktopOnly}`));

const MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
/** "read 14 Oct 2026" · "as of Aug 2026" · "read date not recorded". */
function kindAndDate(d: ProvDate): string {
  if ("unrecorded" in d) return "read date not recorded";
  if ("month" in d) {
    const [y, m] = d.month.split("-").map(Number);
    return `as of ${MON[m - 1]} ${y}`;
  }
  const [y, m, day] = d.day.split("-").map(Number);
  return `${d.label.toLowerCase()} ${day} ${MON[m - 1]} ${y}`;
}
const lineOf = (box: LeaderboardBox) => box.sources.map((s) => `${s.name} · ${kindAndDate(s.date)}`).join(" · ");
const longDay = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${LONG[m - 1]} ${y}`;
};
const longMonth = (ym: string) => {
  const [y, m] = ym.split("-").map(Number);
  return `${LONG[m - 1]} ${y}`;
};

/** Why a board's foot is not a P2 of its own source; [] when it is. */
function p2Problems(card: Element, box: LeaderboardBox): string[] {
  const p2 = card.querySelectorAll('[data-provenance="p2"]');
  if (p2.length !== 1) return [`${p2.length} P2s`];
  const out: string[] = [];
  const line = norm(p2[0].querySelector("[data-provenance-sources]"));
  if (line !== lineOf(box)) out.push(`line "${line}"`);
  const details = p2[0].querySelector("details");
  if (!details) return [...out, "no Method disclosure"];
  if (details.contains(p2[0].querySelector("[data-provenance-sources]"))) out.push("the line is inside the fold");
  const method = [...details.querySelectorAll("p")].map(norm).join(" ");
  if (method !== squash(box.source)) out.push("the method is not the board's own source text");
  return out;
}

const deskCards = [...doc.querySelectorAll(`.${desk.box}`)];
const phoneCards = [...doc.querySelectorAll('[data-provenance="p2"]')].filter((n) => !inDesktop(n)).map((n) => n.parentElement!);
const boxByTitle = (t: string) => statBoxes.find((b) => b.title === t)!;

describe("J1-9: a P2 on every board, both layouts", () => {
  it("desktop: 20 boards, one P2 each, its line built from the board's sources and its method the board's own text", () => {
    expect(deskCards).toHaveLength(statBoxes.length);
    for (const card of deskCards) {
      const box = boxByTitle(norm(card.querySelector("h3")));
      expect(p2Problems(card, box), box.id).toEqual([]);
    }
    expect(doc.querySelectorAll(`.${desk.desktopOnly} [data-provenance="p2"]`)).toHaveLength(statBoxes.length);
  });

  it("phone: 20 P2s in the boards' order, each its board's", () => {
    expect(phoneCards).toHaveLength(africaBoards.length);
    phoneCards.forEach((card, i) => {
      expect(norm(card.querySelector("h2")), africaBoards[i].id).toBe(africaBoards[i].title);
      expect(p2Problems(card, statBoxes[i]), statBoxes[i].id).toEqual([]);
    });
  });

  it("the line is always visible and 'Method ▾' starts shut; the old 'Source ▾' fold is gone", () => {
    for (const p2 of doc.querySelectorAll('[data-provenance="p2"]')) {
      const details = p2.querySelector("details")!;
      expect(details.hasAttribute("open")).toBe(false);
      expect(norm(details.querySelector("summary"))).toBe("Method ▾");
    }
    expect(doc.querySelectorAll('[class*="sourceSummary"], [class*="sourceWrap"], [class*="sourceText"]')).toHaveLength(0);
    const css = read(join(ROOT, "app/records/africas-biggest/africas-biggest.module.css"));
    expect(css).not.toMatch(/\.source(Wrap|Summary|Chevron|Text)\b/);
  });

  it("the method splits into sentences, never after an abbreviation", () => {
    for (const b of statBoxes) {
      const parts = methodParts(b.source);
      expect(parts.join(" "), b.id).toBe(squash(b.source));
      for (const p of parts.slice(0, -1)) expect(p, b.id).not.toMatch(/\b(Excl|No|Vol|St|vs|feat|ft)\.$/);
    }
    const g200 = methodParts(statBoxes.find((b) => b.id === "billboard-global-200-peak")!.source);
    expect(g200).toContain("Rema's “Calm Down” peaked higher still on the separate Global 200 Excl. US chart, at No. 1.");
    // Negative control: the two halves the split printed before J1-9 taught it
    // the abbreviations (dev server, 14 Oct 2026).
    expect(g200).not.toContain("Rema's “Calm Down” peaked higher still on the separate Global 200 Excl.");
    expect(g200).not.toContain("US chart, at No. 1.");
  });

  it("'Method ▾' is a 24px target on desktop and 44 × 72 on the phone", () => {
    const d = read(join(ROOT, "app/components/provenance.module.css"));
    const p = read(join(ROOT, "app/components/mobileProvenance.module.css"));
    expect(parseFloat(winning(d, ".p2Summary", "height", top) ?? "")).toBeGreaterThanOrEqual(24);
    expect(parseFloat(winning(d, ".p2Summary", "min-width", top) ?? "")).toBeGreaterThanOrEqual(24);
    expect(parseFloat(winning(p, ".p2Summary", "min-height", top) ?? "")).toBeGreaterThanOrEqual(44);
    expect(parseFloat(winning(p, ".p2Summary", "min-width", top) ?? "")).toBeGreaterThanOrEqual(72);
  });
});

describe("J1-9: the sources and their dates", () => {
  it("one or two sources a board, every label from fix 10's set, 'as of' on a month only", () => {
    for (const b of statBoxes) {
      expect([1, 2], b.id).toContain(b.sources.length);
      for (const s of b.sources) {
        expect(s.name.trim().length, b.id).toBeGreaterThan(0);
        expect(DATE_LABELS as readonly string[], b.id).toContain(s.date.label);
        if ("month" in s.date) expect(s.date.label, b.id).toBe("As of");
        if ("day" in s.date) expect(s.date.day, b.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      }
    }
  });

  it("the undated board says so, and names what the board names", () => {
    const debut = statBoxes.find((b) => b.id === "biggest-spotify-debut")!;
    expect(lineOf(debut)).toBe("streaming trackers · read date not recorded");
    expect(debut.source).toContain("sourced from streaming trackers");
    const shown = deskCards.find((c) => norm(c.querySelector("h3")) === debut.title)!;
    expect(shown.querySelector('[data-provenance="p2"] time')).toBeNull();
  });

  it("the 500M board names kworb, and Spotify's own count while a reading of it is in use", () => {
    const b = statBoxes.find((x) => x.id === "most-500m-stream-songs")!;
    const used = readingsUsed500(standings500);
    expect(b.sources[0].name).toBe("kworb");
    expect(b.sources).toHaveLength(used.length ? 2 : 1);
    if (used.length) {
      const newest = used.map((u) => u.song.reading.read).sort().at(-1)!;
      expect(b.sources[1]).toEqual({ name: used[0].song.reading.source, date: { label: "Read", day: newest } });
    }
  });

  it("the running streams year is dated by its own row, as its note is", () => {
    const b = statBoxes.find((x) => x.id === "most-streamed-african-artist")!;
    const running = b.rows!.find((r) => r.inProgress)!;
    expect(b.sources).toEqual([{ name: "kworb", date: { label: "Read", day: running.asOf } }]);
    expect(running.note).toContain(asOfLabel(running.asOf!));
  });

  it("every other date in a P2 is the date the board's own source sentence prints", () => {
    // Two P2 dates are not in the sentence, each for its reason: the running
    // streams year's (its note prints it, above), and the 14 Oct 2026 kworb
    // re-read of the listener peaks, newer than the sentence's "as of".
    const notInSentence = new Set([`most-streamed-african-artist:kworb`, `monthly-listeners-peak:kworb`]);
    for (const b of statBoxes)
      for (const s of b.sources) {
        if (notInSentence.has(`${b.id}:${s.name}`) || "unrecorded" in s.date) continue;
        const words = "month" in s.date ? longMonth(s.date.month) : longDay(s.date.day);
        expect(b.source, `${b.id} ${s.name}`).toContain(words);
      }
    expect(statBoxes.find((b) => b.id === "monthly-listeners-peak")!.sources[0]).toEqual({
      name: "kworb",
      date: { label: "Read", day: LISTENERS_PEAKS_READ_ON },
    });
  });

  it("no date is typed into a board's sources: each is a named constant or the board's reading", () => {
    const src = read(join(ROOT, "app/data/africasBiggest.ts"));
    const block = src.slice(src.indexOf("export const statBoxes"), src.indexOf("\n];\n", src.indexOf("export const statBoxes")));
    expect(block).not.toMatch(/\b(day|month)\s*:\s*["'`]\d/);
    expect(block).not.toMatch(/p2(Read|AsOf|ChartDated)\([^)]*["'`]\d{4}/);
    // and every constant the sources name is a YYYY-MM or YYYY-MM-DD declaration
    for (const m of src.matchAll(/^export const ([A-Z0-9_]+(?:_ON|_AS_OF|_REREAD)) = "([^"]+)";/gm))
      expect(m[2], m[1]).toMatch(m[1].endsWith("_ON") ? /^\d{4}-\d{2}-\d{2}$/ : /^\d{4}-\d{2}$/);
  });

  it("each sentence that now prints a constant reads exactly as it shipped", () => {
    // Verbatim from app/data/africasBiggest.ts on main e85e6efe (14 Oct 2026).
    const SHIPPED: Record<string, string> = {
      "billboard-global-200-peak": "Best peak on Billboard's Global 200 chart (US-inclusive), lead or featured credit, per Billboard and each song's Wikipedia-cited chart history. Rema's “Calm Down” peaked higher still on the separate Global 200 Excl. US chart, at No. 1. Re-read at Billboard's own chart histories, September 2026.",
      "most-200m-stream-songs": "Songs with 200M+ Spotify streams (all credits), counted from kworb.net stream totals, read 28 September 2026 — figures shift as songs cross the threshold. CKay’s fourth is the North African remix of “love nwantiti” (204M), a separate version the rule above counts on its own; Tyla’s sixth is WizTheMc’s “Show Me Love (with Tyla)”. Seether’s four are “Fake It”, “Remedy”, “Fine Again” and their “Careless Whisper” (205M).",
      "highest-spotify-global-peak": "Peak positions on Spotify's Daily Top Songs Global chart, each artist's best-charting song across all credits, from chart-tracking accounts. As of August 2026.",
      "spotify-global-album-peak": "Peak positions on Spotify's Weekly Top Albums Global chart (Friday-to-Thursday weeks), each artist's highest-charting album of their own; nationality decides who counts. Soundtracks and compilations are left out: Black Panther: Wakanda Forever – Music From and Inspired By, which Spotify credits to Rihanna and Tems, reached No. 7 on 11–17 November 2022. The chart's archive begins in October 2020. The week each peak was set: Love, Damini No. 17, 8–14 July 2022; M$NEY No. 18, 1–7 May 2026; Morayo No. 22, 22–28 November 2024; Rave & Roses No. 24, 28 April–4 May 2023; TYLA No. 29, 22–28 March 2024; 5ive No. 29, 18–24 April 2025. All but Rave & Roses peaked in their first week (it entered at No. 32 the week before). Checked and lower: I Told Them… No. 30, The Year I Turned 21 No. 37, SWAGUU No. 40, Lungu Boy No. 45, No Sign of Weakness No. 50, Timeless No. 54, Born in the Wild No. 81, Work of Art No. 135 and Made in Lagos No. 190. The six peaks above were read on charts.spotify.com, 25 September 2026; the lower checks there and in kworb's archived copies of the chart.",
      "daily-peak-streams-ng": "Highest single-day Spotify streams across an artist's full catalogue, from chart-tracking accounts, as of 22 August 2026. Nigerian artists only — a national list, not the pan-African comparison the rest of this page makes. Top five shown; the ranking continues CKay (8.2M), Ayra Starr (7.8M), Omah Lay (7.7M), ODUMODUBLVCK (7.5M) and Olamide (7.4M).",
      "youtube-music-audience-peak": "Peak monthly audience on YouTube (YouTube for Artists), from chart-tracking accounts. As of August 2026 — figures update as they climb.",
      "youtube-audience-world": "Highest monthly audience peaks on YouTube for any artist worldwide (YouTube for Artists), from chart-tracking accounts. As of August 2026 — live figures, so the order can change as they climb.",
      "fastest-to-a-billion-youtube": "Days from each video's premiere to its billionth view, as published by Chart Data and Pop Core, read 11 September 2026. A tie shares its rank.",
      "apple-music-global-no1": "Songs by African artists to reach No. 1 on the Apple Music Global Top 100. As of July 2026.",
    };
    for (const [id, text] of Object.entries(SHIPPED)) expect(statBoxes.find((b) => b.id === id)!.source, id).toBe(text);
    // The two built sentences keep their dated words too.
    expect(statBoxes.find((b) => b.id === "monthly-listeners-peak")!.source).toMatch(
      /^Peak Spotify monthly listeners, as of August 2026\. Burna Boy, Tyla, Tems and Rema are kworb's recorded peaks; /,
    );
    expect(statBoxes.find((b) => b.id === "spotify-top-artists-peak")!.source).toContain(
      "the other four peaks are as chart-tracking accounts published them in July 2026. Nigerian artists only",
    );
  });

  it("negative controls: the fold as shipped, and the canvas's WORLD sample", () => {
    // Verbatim from https://burnaboystats.com/records/africas-biggest, 8 Oct 2026.
    const shipped = parse(
      `<div class="africas-biggest-module__mRA60W__box"><details class="africas-biggest-module__mRA60W__sourceWrap"><summary class="africas-biggest-module__mRA60W__sourceSummary">Source ▾</summary><p class="africas-biggest-module__mRA60W__sourceText">Days from each video&#x27;s premiere to its billionth view, as published by Chart Data and Pop Core, read 11 September 2026. A tie shares its rank.</p></details></div>`,
    ).body.firstElementChild!;
    const fastest = statBoxes.find((b) => b.id === "fastest-to-a-billion-youtube")!;
    expect(p2Problems(shipped, fastest)).toEqual(["0 P2s"]);
    // Proof.dc.html §4's WORLD board, a sample only (fix 22).
    expect(lineOf(fastest)).not.toBe("YouTube (via Guinness World Records) · read 5 Oct 2026");
    expect(lineOf(fastest)).toBe("Chart Data and Pop Core · read 11 Sep 2026");
  });
});

describe("J1-10: the phone footnote names what each board now shows", () => {
  const APPROVED = "Each board names its source and the date it was read. Tap Method for how it's counted.";
  const VARIANT = "Each board names its source and, where it is recorded, the date it was read. Tap Method for how it's counted.";
  const footOf = (boards: Board[]) =>
    norm(parse(renderToStaticMarkup(<MobileAfricasBiggest boards={boards} leads={0} others={0} stats={[]} faqs={[]} />)).querySelector(`.${phone.footNote}`));
  const firstSentences = (t: string) => t.slice(0, t.indexOf(" Gold marks his row"));

  it("while any board prints a month or no read date, it says 'where it is recorded' (C-14)", () => {
    const undated = africaBoards.some((b) => b.p2.sources.some((x) => !("day" in x.date)));
    const foot = norm(doc.querySelector(`.${phone.footNote}`));
    expect(firstSentences(foot)).toBe(undated ? VARIANT : APPROVED);
    expect(undated).toBe(true); // 14 Oct 2026: seven boards print a month, one no read date
    expect(foot).toMatch(/Gold marks his row wherever it falls — he tops \d+ of the \d+, another artist leads \d+/);
  });

  it("once every board prints a day, the approved sentence", () => {
    const dated = africaBoards.map((b) => ({
      ...b,
      p2: { ...b.p2, sources: [{ name: b.p2.sources[0].name, date: { label: "Read" as const, day: "2026-10-14" } }] as Board["p2"]["sources"] },
    }));
    expect(firstSentences(footOf(dated))).toBe(APPROVED);
  });

  it("negative control: the footnote as shipped sends readers to the desktop page", () => {
    // Verbatim from https://burnaboystats.com/records/africas-biggest, 8 Oct 2026.
    const shipped = parse(
      `<p class="mobileAfricasBiggest-module__MpN2xW__footNote">Each board cites its own source and date on the desktop page. Gold marks his row<!-- --> <strong>wherever it falls</strong> — he tops <!-- -->12<!-- --> of the <!-- -->20<!-- -->, another artist leads <!-- -->7<!-- -->, and the by-year board is a different shape. That honesty is the point of the page.</p>`,
    ).querySelector("p")!;
    expect([APPROVED, VARIANT]).not.toContain(firstSentences(norm(shipped)));
    expect(norm(shipped)).toMatch(/on the desktop page/);
    expect(norm(doc.querySelector(`.${phone.footNote}`))).not.toMatch(/desktop page/);
  });
});
