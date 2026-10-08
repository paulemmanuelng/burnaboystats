import { describe, it, expect, vi } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import TimelinePage from "../app/timeline/page";
import timelineStyles from "../app/timeline/timeline.module.css";
import UpdatesFeed from "../app/components/UpdatesFeed";
import MobileUpdates from "../app/components/MobileUpdates";
import desktopUpdates from "../app/updates/updates.module.css";
import phoneUpdates from "../app/components/mobileUpdates.module.css";
import RankedBars from "../app/components/RankedBars";
import barStyles from "../app/components/RankedBars.module.css";
import { timelineEras } from "../app/data/timeline";
import { allFirsts } from "../app/data/firsts";
import { updates, type UpdateCategory } from "../app/data/updates";
import { UPDATE_MARK } from "../app/lib/updateInk";
import { KIND_MARK } from "../app/lib/onThisDayKinds";
import { RECORD_PILL } from "../app/lib/tourMeta";
import { decl, read, rules } from "./fixtures/cssRules";

/**
 * Job 0 colour roles (design review 8 Oct 2026, J0-6 with fixes 4, 5 and 16):
 * each colour has one job, and a value never borrows another family's colour.
 *  - Capacity reads "{n} cap" in --text-body, never cyan (fix 16).
 *  - Timeline kinds and /updates categories are On This Day's ink shape and
 *    word; "First" is an ink outline flag set from a `first` field, only on
 *    entries firsts.ts lists (fix 5).
 *  - "At No. 1" on /live-charts is green (built: 98f75d85, 83a4745e).
 *  - One record treatment: the ink outline "Record" tag on a --rule edge.
 *  - Single-series bars on --other; gold only on his bar or the live year
 *    (fix 4; the 3:1 floor is tests/dataMark3to1.test.ts).
 */

const GOLD = /--gold|--color-accent|--display-ramp|#945e00|#ffb627/i;
const NON_INK = /--gold|--cyan|--silver|--ember|--green|--tier-|--color-accent/;
const dom = (html: string) => new DOMParser().parseFromString(html, "text/html");
const body = (css: string, sel: string) => rules(css).filter((r) => r.selector.split(",").map((s) => s.trim()).includes(sel)).map((r) => r.body).join(";");

// ── Capacity (fix 16) ─────────────────────────────────────────────────────
describe("capacity: --text-body, '{n} cap' with no period, never cyan", () => {
  it("the phone date table and the desktop table set capacity in --text-body", () => {
    expect(decl(body(read("app/components/mobileTours.module.css"), ".dateCap"), "color")).toBe("var(--text-body)");
    expect(decl(body(read("app/records/tours/tours.module.css"), ".dCap"), "color")).toBe("var(--text-body)");
  });
  it("the phone upcoming card prints '{n} cap', and the date table's number stands alone under 'Venue capacity'", () => {
    const src = read("app/components/MobileTours.tsx");
    expect(src).toMatch(/\$\{u\.cap\.toLocaleString\("en-US"\)\} cap`/);
    expect(src).not.toMatch(/ cap\.`/);
    expect(src).toMatch(/<span className=\{styles\.dateHeadRight\}>Venue capacity<\/span>/);
    expect(src).toMatch(/<span className=\{styles\.dateCap\}>\s*\{d\.cap \? d\.cap\.toLocaleString\("en-GB"\) :/);
  });
  it("no tours stylesheet paints anything cyan", () => {
    for (const f of ["app/components/mobileTours.module.css", "app/records/tours/tours.module.css"]) {
      expect(read(f).replace(/\/\*[\s\S]*?\*\//g, "")).not.toMatch(/var\(--cyan\)/);
    }
  });
  it("negative control: the shipped phone .dateCap (cyan mono) fails", () => {
    // mobileTours.module.css on 63e558a9, verbatim (tests/toursColourRulings keeps it too).
    const shipped = `.dateCap {
  font-family: var(--font-mono), monospace;
  font-weight: 700;
  font-size: 12px;
  color: var(--cyan);
  font-variant-numeric: tabular-nums;
  flex: none;
}`;
    expect(decl(body(shipped, ".dateCap"), "color")).not.toBe("var(--text-body)");
  });
});

// ── Timeline kinds and the First flag (fix 5) ─────────────────────────────
// Each timeline entry flagged `first` and the firsts.ts line(s) that hold the
// same milestone. A flagged entry missing here fails, and so does a mapped
// firsts.ts title that disappears — the flag cannot outlive its first.
const FIRSTS_FOR: Record<string, string[]> = {
  "First Afrobeats artist to sell out the SSE Arena, Wembley": ["First Afrobeats artist to sell out the SSE Arena, Wembley"],
  "The Grammy": ["First winner of the Grammy for Best Global Music Album"],
  "First African artist to headline the Hollywood Bowl": ["First African artist to headline the Hollywood Bowl"],
  "First Nigerian artist to headline & sell out Madison Square Garden": ["First Nigerian artist to headline & sell out Madison Square Garden"],
  "First African artist to perform at a UEFA Champions League final": ["First African artist to perform at a UEFA Champions League final"],
  "Stadium history, twice": ["First African artist to headline & sell out a UK stadium", "First African artist to headline & sell out a US stadium"],
  "I Told Them… debuts at UK No. 1": ["First Afrobeats artist to top the UK Official Albums Chart"],
  "The I Told Them… Tour": ["Highest-grossing tour ever by an African artist"],
  "First African artist on the Grammys' main telecast stage": ["First African artist to perform on the Grammys' main telecast stage"],
  "The biggest single show by any African artist": ["Highest-grossing single concert by any African artist"],
  "Red Rocks, Stade de France, New Zealand": [
    "First Nigerian artist to headline Red Rocks Amphitheatre",
    "First African artist to headline the Stade de France",
    "First African artist to headline a stadium concert in New Zealand",
  ],
  "Five albums on the Billboard 200": ["First Nigerian artist to chart five albums on the Billboard 200"],
  "First African artist to headline a FIFA World Cup opening ceremony": ["First African artist to headline a FIFA World Cup opening ceremony"],
  "No. 1 on the Billboard Global 200": ["First African artist to reach No. 1 on the Billboard Global 200"],
  "The World Cup Final halftime show": ["First African artist to perform at a FIFA World Cup Final halftime show"],
  "60 million monthly listeners": ["First African artist to reach 60 million Spotify monthly listeners"],
};
const KIND_WORDS = ["Release", "Charts", "Awards", "Show", "Certification", "Milestone"];

describe("timeline kinds: On This Day's ink shape and word; 'First' a flag", () => {
  const entries = timelineEras.flatMap((e) => e.entries);
  const page = dom(renderToStaticMarkup(TimelinePage()));
  const rows = [...page.querySelectorAll(`.${timelineStyles.entryTop}`)];

  it("renders one badge per entry, each a known word, with its mark (Milestone alone has none)", () => {
    expect(rows).toHaveLength(entries.length);
    rows.forEach((row, i) => {
      const badge = row.querySelector(`.${timelineStyles.kind}`)!;
      const word = badge.textContent!.trim();
      expect(KIND_WORDS, entries[i].title).toContain(word);
      const path = badge.querySelector("svg path");
      if (word === "Milestone") expect(path, entries[i].title).toBeNull();
      else {
        const kind = Object.values(KIND_MARK).find((m) => m.word === word)!;
        expect(path?.getAttribute("d"), entries[i].title).toBe(kind.d);
      }
      expect(badge.getAttribute("style"), entries[i].title).toBeNull();
    });
  });

  it("album → Release, chart → Charts, award → Awards, tour → Show, certification → Certification, milestone → Milestone", () => {
    const WANT = { album: "Release", chart: "Charts", award: "Awards", tour: "Show", certification: "Certification", milestone: "Milestone" };
    rows.forEach((row, i) => {
      expect(row.querySelector(`.${timelineStyles.kind}`)!.textContent!.trim(), entries[i].title).toBe(WANT[entries[i].kind]);
    });
    // Every kind the data uses is exercised.
    expect(new Set(entries.map((e) => e.kind))).toEqual(new Set(Object.keys(WANT)));
  });

  it("the badge is an ink outline on a --rule edge, and no kind keeps a colour rule", () => {
    const css = read("app/timeline/timeline.module.css");
    const kind = body(css, ".kind");
    expect(decl(kind, "color")).toBe("var(--text)");
    expect(decl(kind, "border")).toBe("1px solid var(--rule)");
    expect(kind).not.toMatch(NON_INK);
    expect(rules(css).filter((r) => /\.kind_/.test(r.selector)).map((r) => r.selector)).toEqual([]);
    const flag = body(css, ".flag");
    expect(decl(flag, "color")).toBe("var(--text)");
    expect(decl(flag, "border")).toBe("1px solid var(--rule)");
    expect(flag).not.toMatch(NON_INK);
  });

  it("'First' prints only on entries flagged `first`, and every flag maps to a firsts.ts line", () => {
    const firstTitles = new Set(allFirsts.map((f) => f.title));
    const flagged = entries.filter((e) => e.first).map((e) => e.title);
    expect(flagged.sort()).toEqual(Object.keys(FIRSTS_FOR).sort());
    for (const [title, lines] of Object.entries(FIRSTS_FOR)) {
      for (const l of lines) expect(firstTitles.has(l), `${title} → "${l}" is not in firsts.ts`).toBe(true);
    }
    rows.forEach((row, i) => {
      const flag = row.querySelector(`.${timelineStyles.flag}`);
      expect(!!flag, entries[i].title).toBe(!!entries[i].first);
      if (flag) expect(flag.textContent).toBe("First");
    });
  });

  it("negative controls: the shipped badge rule and the shipped milestone word fail", () => {
    // timeline.module.css and timeline/page.tsx on main d3c39eda.
    const shippedRule = `.kind_album { color: var(--gold); border-color: var(--tier-gold-edge, var(--line)); }`;
    expect(shippedRule).toMatch(NON_INK);
    const shippedLabels: Record<string, string> = { album: "Album", milestone: "First", award: "Award", certification: "Certification", tour: "Live", chart: "Charts" };
    expect(shippedLabels.milestone).not.toBe("Milestone");
    expect(KIND_WORDS).not.toContain(shippedLabels.album);
    expect(KIND_WORDS).not.toContain(shippedLabels.tour);
  });
});

// ── /updates categories (fix 5; C-2 for the chips) ────────────────────────
describe("/updates: seven category words in ink, a shape only where one maps", () => {
  const WANT: Record<UpdateCategory, string | null> = {
    Charts: "chart",
    Certifications: "certification",
    Streaming: "streaming",
    Awards: "award",
    Tours: "show",
    "Firsts & Records": null,
    Lifestyle: null,
  };

  it("UPDATE_MARK covers the seven categories with fix 5's mapping", () => {
    expect(UPDATE_MARK).toEqual(WANT);
  });

  it.each([
    ["desktop", () => renderToStaticMarkup(<UpdatesFeed items={updates} />), desktopUpdates.tag],
    ["phone", () => renderToStaticMarkup(<MobileUpdates items={updates} lastEntry="1 Oct 2026" />), phoneUpdates.tag],
  ])("%s: every row tag is ink (no inline colour) with its category's mark or none", (_l, html, tagClass) => {
    const tags = [...dom(html()).querySelectorAll(`.${tagClass}`)];
    expect(tags.length).toBeGreaterThan(100);
    for (const t of tags) {
      expect(t.getAttribute("style")).toBeNull();
      expect(t.querySelector("[style]")).toBeNull();
      const cat = t.textContent!.trim() as UpdateCategory;
      const want = WANT[cat];
      expect(want === undefined, cat).toBe(false);
      const path = t.querySelector("svg path");
      if (want) expect(path?.getAttribute("d"), cat).toBe(KIND_MARK[want as keyof typeof KIND_MARK].d);
      else expect(path, cat).toBeNull();
    }
  });

  it.each([
    ["app/updates/updates.module.css"],
    ["app/components/mobileUpdates.module.css"],
  ])("%s: .tag is an ink outline on a --rule edge; no dot rules remain", (file) => {
    const css = read(file);
    const tag = body(css, ".tag");
    expect(decl(tag, "color")).toBe("var(--text)");
    expect(decl(tag, "border")).toBe("1px solid var(--rule)");
    expect(rules(css).filter((r) => /\.(tagDot|chipDot)\b/.test(r.selector))).toEqual([]);
  });

  it("negative control: the shipped category inks are colours, not shapes", () => {
    // app/lib/updateInk.ts:13–14 on main d3c39eda.
    const shipped = { Certifications: "var(--gold)", Charts: "var(--cyan)" };
    for (const v of Object.values(shipped)) {
      expect(Object.keys(KIND_MARK)).not.toContain(v);
      expect(v).toMatch(NON_INK);
    }
  });
});

// ── At No. 1 (built) ──────────────────────────────────────────────────────
describe("'At No. 1' on /live-charts is green (built: 98f75d85, 83a4745e)", () => {
  it("the desktop top entry's position is green, not gold", () => {
    const css = read("app/live-charts/liveCharts.module.css");
    expect(decl(body(css, ".entryTop .pos"), "color")).toBe("var(--green)");
    expect(body(css, ".entryTop")).not.toMatch(GOLD);
  });
});

// ── One record treatment ──────────────────────────────────────────────────
describe("one record treatment: the ink outline 'Record' tag on a --rule edge", () => {
  it.each([
    ["app/records/tours/tours.module.css", ".recordPill"],
    ["app/components/mobileTours.module.css", ".recordBadge"],
    ["app/on-this-day/onThisDay.module.css", ".recordLabel"],
    ["app/components/mobileOnThisDay.module.css", ".recordLabel"],
  ])("%s %s", (file, sel) => {
    const b = body(read(file), sel);
    expect(decl(b, "border")).toBe("1px solid var(--rule)");
    expect(decl(b, "border-radius")).toBe("3px");
    expect(b).not.toMatch(NON_INK);
    const c = decl(b, "color");
    if (c !== undefined) expect(c).toBe("var(--text)");
  });
  it("the word is 'Record'", () => {
    expect(RECORD_PILL).toBe("Record");
  });
});

// ── Single-series bars (fix 4) ────────────────────────────────────────────
describe("single-series bars: --other; gold only on his bar or the live year", () => {
  const CSS = read("app/components/RankedBars.module.css");

  it("the fill is --other, the gold tone alone is gold, and the first row is not singled out", () => {
    expect(decl(body(CSS, ".fill"), "background")).toBe("var(--other)");
    expect(decl(body(CSS, ".muted .fill"), "background")).toBe("var(--other)");
    expect(decl(body(CSS, ".gold .fill"), "background")).toBe("var(--gold-fill)");
    expect(rules(CSS).filter((r) => /first-child/.test(r.selector))).toEqual([]);
  });

  it("RankedBars puts the gold class only on a tone: 'gold' row", () => {
    const d = dom(
      renderToStaticMarkup(
        <RankedBars
          ariaLabel="test"
          items={[
            { name: "Plain", value: 9, displayValue: "9" },
            { name: "His", value: 5, displayValue: "5", tone: "gold" },
            { name: "Other", value: 3, displayValue: "3", tone: "muted" },
          ]}
        />,
      ),
    );
    const rowsOf = [...d.querySelectorAll(`.${barStyles.row}`)];
    expect(rowsOf.map((r) => r.classList.contains(barStyles.gold))).toEqual([false, true, false]);
    expect(rowsOf.map((r) => r.classList.contains(barStyles.muted))).toEqual([false, false, true]);
  });

  it("the phone visualized bars: --other, his gold only where the desktop row is gold", () => {
    const css = read("app/components/mobileVisualized.module.css");
    expect(decl(body(css, ".barFill"), "background")).toBe("var(--other)");
    expect(decl(body(css, ".barFillHis"), "background")).toMatch(/--gold/);
    expect(read("app/records/visualized/page.tsx")).toMatch(/his: b\.tone === "gold",/);
    expect(read("app/components/MobileVisualized.tsx")).toMatch(/it\.his \? styles\.barFillHis : ""/);
  });

  it("negative control: the shipped RankedBars fill and first-row rule are caught", () => {
    // app/components/RankedBars.module.css on main d3c39eda.
    const shipped = `.fill {
  height: 100%;
  border-radius: 999px;
  background: var(--gold-fill);
}
.row:first-child:not(.muted) .fill {
  background: var(--gold-bright);
}`;
    expect(decl(body(shipped, ".fill"), "background")).not.toBe("var(--other)");
    expect(rules(shipped).filter((r) => /first-child/.test(r.selector))).toHaveLength(1);
  });
});
