import { render } from "@testing-library/react";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import AfricasBiggestPage from "../app/records/africas-biggest/page";
import AwardsPage from "../app/records/awards/page";
import { stats as byTheNumbers } from "../app/records/by-the-numbers/page";
import {
  BURNA_PEAK_LISTENERS,
  BURNA_PEAK_LISTENERS_RISE,
  BURNA_PEAK_LISTENERS_SET_ON,
  BURNA_PEAK_LISTENERS_SET_ON_LONG,
} from "../app/data/africasBiggest";
import { monthlyListenersSeries } from "../app/data/trends";
import { youtubeTotalViews, youtubeTotalViewsAsOf } from "../app/data/streamingTotals";
import abStyles from "../app/records/africas-biggest/africas-biggest.module.css";
import deltaStyles from "../app/components/TrendDelta.module.css";
import faqSectionStyles from "../app/components/mobileFaqSection.module.css";

/**
 * Three ways a figure can be published without the thing that makes it true.
 *
 * Every number on this site is only worth what its provenance is worth, and the
 * provenance is usually a DATE — the day the figure was read. These are the
 * three ways that date had gone missing, each of them invisible to every other
 * test in the suite because the page still renders and the number is still
 * right:
 *
 *   1. a percentage labelled with a window it was not measured over;
 *   2. a hand-counted headline figure printed with no date at all, while the
 *      constant holding its date sat in the repo referenced by nothing;
 *   3. (not a date, but the same class of thing) a section heading that repeats
 *      the first item under it, so the screen answers one question where it
 *      answers five.
 *
 * Where a claim can be derived, it is asserted against its source rather than
 * against a copy of itself — RETRACTIONS.md #6 is the standing reason: two
 * copies of a wrong number agree perfectly.
 */

/* ── 1. The hero on /records/africas-biggest ──────────────────────────────── */

/** The same formatting the page uses for a bar label, restated here so the
 *  expectation is computed from the series rather than typed. */
const shortDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  });

/** Wording that tells a reader a figure is still moving. Same family as the one
 *  in liveClaims.test.ts, which guards the leaderboard note further down this
 *  same page — the hero above it was outside that guard entirely, which is how
 *  one page came to carry both "Climbing fast" and "an all-time high … not a
 *  reading of today" about one number. */
const ONGOING =
  /climbing|still (?:rising|growing)|and (?:still )?counting|keeps? (?:climbing|rising)|continues? to (?:climb|rise)/i;

describe("the peak-listeners hero states the window it actually measured", () => {
  const hero = () => {
    const { container } = render(<AfricasBiggestPage />);
    const row = container.querySelector(`.${abStyles.trendValueRow}`);
    const note = container.querySelector(`.${abStyles.trendNote}`);
    if (!row || !note) throw new Error("the hero trend block is no longer on the page");
    return {
      value: row.querySelector(`.${abStyles.trendValue}`)!.textContent ?? "",
      label: row.querySelector(`.${deltaStyles.label}`)?.textContent ?? "",
      note: note.textContent ?? "",
    };
  };

  it("names both endpoints of the window instead of calling it 'this month'", () => {
    // The bug: "▲ +26.9% this month" over a 1 Jul → 10 Aug window that had
    // closed 25 days before the page was read. "this month" is a label no
    // measurement can ever contradict, which is exactly why it went stale
    // without anything noticing.
    const { label } = hero();
    expect(label, "the delta label must be derived from the window, not typed").toContain(
      shortDate(BURNA_PEAK_LISTENERS_RISE.from.date)
    );
    expect(label).toContain(shortDate(BURNA_PEAK_LISTENERS_RISE.to.date));
    expect(label.toLowerCase()).not.toMatch(/this (?:month|week|year)/);
  });

  it("dates the peak in the prose beside it, and does not call it a climb", () => {
    // The page contradicted itself: this note said "Climbing fast on the 'Dai
    // Dai' World Cup run" while the leaderboard note lower down had already
    // been corrected to "an all-time high set on 10 August 2026, not a reading
    // of today". Same number, same page, two accounts of it.
    const { note } = hero();
    expect(note, "the hero must date the high it is printing").toContain(
      BURNA_PEAK_LISTENERS_SET_ON_LONG
    );
    expect(
      ONGOING.test(note),
      `the hero writes a frozen figure as a running one: ${JSON.stringify(note)}`
    ).toBe(false);
  });

  it("prints the same peak the leaderboard below it prints", () => {
    // It used to read the tail of the trend series while the board read the
    // constant. Two sources for one number on one page is a drift waiting to
    // happen the first time only one of them is written.
    expect(hero().value).toBe(BURNA_PEAK_LISTENERS);
  });
});

describe("the rise behind that percentage", () => {
  it("is measured to the PEAK reading, not merely the newest one", () => {
    // `to` is what the displayed figure is. Measuring to the latest point would
    // make the percentage describe a number the page is not showing the moment
    // monthly listeners fall and the series keeps logging.
    const highest = Math.max(...monthlyListenersSeries.map((p) => p.value));
    expect(BURNA_PEAK_LISTENERS_RISE.to.value).toBe(highest);
    expect(BURNA_PEAK_LISTENERS_RISE.to.date).toBe(BURNA_PEAK_LISTENERS_SET_ON);
  });

  it("is measured from the first logged reading, and the arithmetic is the two of them", () => {
    const { from, to, pct } = BURNA_PEAK_LISTENERS_RISE;
    expect(from).toBe(monthlyListenersSeries[0]);
    expect(pct).toBeCloseTo(((to.value - from.value) / from.value) * 100, 10);
  });

  it("agrees with the constant the page displays", () => {
    // The bot writes BURNA_PEAK_LISTENERS and appends the trend point in ONE
    // pass (spotify-peak-listeners: siteTargets + trendSeries). A half-applied
    // run is the failure this catches: the percentage would then be measured to
    // a different number than the one printed beside it.
    expect(Number.parseFloat(BURNA_PEAK_LISTENERS)).toBe(BURNA_PEAK_LISTENERS_RISE.to.value);
    expect(BURNA_PEAK_LISTENERS.endsWith("M"), "the peak is published in millions").toBe(true);
  });
});

describe("no percentage on the site is labelled with a window it did not measure", () => {
  // The whole class of bug in one grep. A relative-time label ("this month",
  // "last week") is written once and then cannot be wrong in any way a build, a
  // type or a render test can see — it just quietly stops describing the data
  // behind it. Every TrendDelta label must therefore come from the measurement,
  // not from a string literal.
  it("no TrendDelta is given a hardcoded relative-time label", () => {
    const offenders: string[] = [];
    const walk = (dir: string): void => {
      for (const e of readdirSync(dir, { withFileTypes: true })) {
        const path = join(dir, e.name);
        if (e.isDirectory()) walk(path);
        else if (/\.tsx$/.test(e.name)) {
          for (const [line] of readFileSync(path, "utf8").matchAll(
            /<TrendDelta[^>]*label="[^"]*\b(?:this|last|past|next)\s+(?:day|week|month|quarter|year)[^"]*"[^>]*>/g
          )) {
            offenders.push(`${path}: ${line.trim()}`);
          }
        }
      }
    };
    walk("app");
    expect(
      offenders,
      "derive the label from the window the number was measured over"
    ).toEqual([]);
  });
});

/* ── 2. Hand-maintained figures carry the day they were counted ───────────── */

const longDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

describe("the all-time YouTube total is published with its measurement date", () => {
  const row = () => {
    const s = byTheNumbers.find((x) => x.label === "YouTube views, all-time");
    if (!s) throw new Error("the YouTube total is no longer on /records/by-the-numbers");
    return s;
  };

  it("still prints the figure from its one home", () => {
    expect(row().num).toBe(youtubeTotalViews);
  });

  it("prints the day it was counted", () => {
    // This is the ONLY headline figure on the site that no source can refresh:
    // kworb sees 187 of his 344 videos, so the 4.0B is counted by hand at
    // youtube.com/@BurnaBoy/about. It rendered undated, and `youtubeTotalViewsAsOf`
    // — the stamp built to date it — was imported by nothing.
    expect(row().sub, "a hand-counted figure with no date could be any age").toContain(
      longDate(youtubeTotalViewsAsOf)
    );
  });

  it("carries a real, already-happened date", () => {
    // The page's own "Updated {month year}" cannot stand in for this: it comes
    // from the updates log and advances whenever ANY fact on the site is logged,
    // including facts nowhere near this number, so it can run months ahead of
    // when the 4.0B was last counted. Hence a per-figure date — and a per-figure
    // date is only worth anything if it is a day someone could actually have
    // done the counting on.
    expect(youtubeTotalViewsAsOf, "keep it ISO so it sorts and parses").toMatch(
      /^\d{4}-\d{2}-\d{2}$/
    );
    const stamp = Date.parse(`${youtubeTotalViewsAsOf}T12:00:00Z`);
    expect(Number.isNaN(stamp), "not a real calendar date").toBe(false);
    expect(stamp, "a figure cannot have been counted in the future").toBeLessThanOrEqual(Date.now());
  });
});

describe("no measurement stamp is dead code", () => {
  // The general rule behind the case above: a stamp that nothing renders is
  // indistinguishable from no stamp at all, and it goes dead silently — the
  // export still type-checks, the site still builds, and the figure it was
  // meant to date just goes out bare.
  const dataDir = "app/data";

  const appFiles = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
      e.isDirectory()
        ? appFiles(join(dir, e.name))
        : /\.tsx?$/.test(e.name)
          ? [join(dir, e.name)]
          : []
    );

  /**
   * Comments out first. Written the obvious way, this guard passed on a file
   * that had DROPPED the import and only mentioned the constant in a comment
   * explaining what it was for — which is precisely the shape a stamp goes dead
   * in, since the comment is what survives an edit that removes the render.
   * `[^:]` spares the `//` in an https:// URL.
   */
  const code = (file: string) =>
    readFileSync(file, "utf8")
      .replace(/\/\*[\s\S]*?\*\//g, "")
      .replace(/(^|[^:])\/\/[^\n]*/g, "$1");

  it("every *AsOf export in app/data is read by something outside its own file", () => {
    const orphans: string[] = [];
    const all = appFiles("app");
    for (const file of readdirSync(dataDir).filter((f) => f.endsWith(".ts"))) {
      const path = join(dataDir, file);
      for (const [, name] of code(path).matchAll(/export const (\w+AsOf)\b/g)) {
        const readers = all.filter((f) => f !== path && new RegExp(`\\b${name}\\b`).test(code(f)));
        if (readers.length === 0) orphans.push(`${path} → ${name}`);
      }
    }
    expect(
      orphans,
      "these stamps date a published figure but nothing renders them — wire them up or delete them"
    ).toEqual([]);
  });
});

/* ── 3. A section heading is not its own first question ───────────────────── */

describe("the awards FAQ on a phone", () => {
  it("is headed 'Common questions', not a copy of the question below it", () => {
    const { container } = render(<AwardsPage />);
    const section = container.querySelector(`.${faqSectionStyles.faq}`);
    if (!section) throw new Error("the phone FAQ section is no longer on /records/awards");

    const heading = section.querySelector(`.${faqSectionStyles.title}`)?.textContent ?? "";
    const questions = [...section.querySelectorAll(`.${faqSectionStyles.q}`)].map(
      (q) => q.textContent ?? ""
    );

    expect(questions.length, "the section should still be rendering its questions").toBeGreaterThan(1);
    expect(
      questions,
      `the heading "${heading}" repeats the item directly beneath it`
    ).not.toContain(heading);
    expect(heading).toBe("Common questions");
  });

  it("every mobile FAQ screen heads its section the same way", () => {
    // MobileCerts and MobileAfricasBiggest already said "Common questions";
    // /records/awards was the one screen out of step, and a heading that is
    // itself a question also tells a scanner the section answers one thing.
    const offenders: string[] = [];
    for (const file of readdirSync("app/components").filter((f) => f.endsWith(".tsx"))) {
      const src = readFileSync(join("app/components", file), "utf8");
      for (const [, title] of src.matchAll(/<MobileFaqSection\s+title="([^"]+)"/g)) {
        if (title !== "Common questions") offenders.push(`${file}: "${title}"`);
      }
    }
    expect(offenders, "a mobile FAQ section is headed with something else").toEqual([]);
  });
});
