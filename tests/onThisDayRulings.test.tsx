import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

let pathname = "/on-this-day";
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => pathname,
  notFound: () => {
    throw new Error("notFound() — the fixture day no longer exists");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import DayPage, { generateMetadata } from "../app/on-this-day/[day]/page";
import CalendarPage, { metadata as calendarMetadata } from "../app/on-this-day/page";
import MobileOnThisDayDay from "../app/components/MobileOnThisDayDay";
import MobileOnThisDayIndex from "../app/components/MobileOnThisDayIndex";
import OnThisDayBand from "../app/components/OnThisDayBand";
import MobileOnThisDayCard from "../app/components/MobileOnThisDayCard";
import MobileTabBar from "../app/components/MobileTabBar";
import { footerColumns } from "../app/lib/links";
import { navGroups } from "../app/lib/navGroups";
import { CANONICAL_ORIGIN } from "../app/lib/seo";
import {
  calendarToday,
  dayBySlug,
  dayPageTitle,
  dayShareText,
  isIndexableDay,
  onThisDayDays,
  onThisDayEvents,
  onThisDayFor,
} from "../app/lib/onThisDay";

/**
 * The rulings Paul delegated on 26 Sep 2026 (the contrast, tracking, tablet,
 * tab-bar, copy and nit calls on PR 344) and the SEO audit's follow-ups for
 * On This Day, each pinned where it lives.
 */

const css = {
  desk: readFileSync("app/on-this-day/onThisDay.module.css", "utf8"),
  phone: readFileSync("app/components/mobileOnThisDay.module.css", "utf8"),
  band: readFileSync("app/components/onThisDayBand.module.css", "utf8"),
};
const globals = readFileSync("app/globals.css", "utf8");

const doc = (html: string) => {
  const el = document.createElement("div");
  el.innerHTML = html;
  return el;
};
const day = (slug: string) => {
  const d = dayBySlug(slug);
  if (!d) throw new Error(`no day ${slug}`);
  return d;
};

// ── Ruling 1: gold labels on a raised hover ─────────────────────────────────

/** A token's light-theme value: the first argument of its light-dark(). */
const light = (token: string) => {
  const m = globals.match(new RegExp(`--${token}: light-dark\\((#[0-9a-fA-F]{6}), #[0-9a-fA-F]{6}\\)`));
  if (!m) throw new Error(`no light-dark() for --${token}`);
  return m[1];
};
const luminance = (hex: string) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const [r, g, b] = c.map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a: string, b: string) => {
  const [x, y] = [luminance(a), luminance(b)].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

/** Every innermost rule in a stylesheet, comments dropped. */
const rules = (sheet: string) =>
  [...sheet.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)].map((m) => ({
    selectors: m[1].trim().split(/\s*,\s*/),
    body: m[2],
  }));

/** The classes a sheet presses in on a state, the classes it sets in gold,
 *  and the light-theme overrides that put a gold class in ink on a state. */
function audit(sheet: string) {
  const rs = rules(sheet);
  const raised: [string, string][] = [];
  const gold = new Set<string>();
  const inked = new Set<string>();
  for (const r of rs) {
    for (const s of r.selectors) {
      const state = s.match(/^\.(\w+)(:hover|:active|\[aria-pressed="true"\])$/);
      if (state && /background:\s*var\(--bg-raised\)/.test(r.body)) raised.push([state[1], state[2]]);
      const plain = s.match(/^\.(\w+)$/);
      if (plain && /(?:^|[;\s])color:\s*var\(--gold\)/.test(r.body)) gold.add(plain[1]);
      const ink = s.match(/^:global\(:root\[data-theme="light"\]\) \.(\w+)(:hover|:active) \.(\w+)$/);
      if (ink && /color:\s*var\(--text\)/.test(r.body)) inked.add(`${ink[1]}${ink[2]} ${ink[3]}`);
    }
  }
  return { raised, gold, inked };
}

const hasClass = (el: Element, name: string) => new RegExp(`(^|\\s)_${name}_[0-9a-f]+(\\s|$)`).test(el.className);
const ARROWS_ONLY = /^[\s←→↗↓↑]*$/;

/** Gold text inside a pressed-in control, with no light-theme ink override —
 *  arrows excepted (the ruling lets an arrow stay gold). */
function unguarded(markup: Element, sheet: string) {
  const { raised, gold, inked } = audit(sheet);
  const out: string[] = [];
  for (const [a, state] of raised) {
    for (const host of [...markup.querySelectorAll("*")].filter((e) => hasClass(e, a))) {
      for (const b of gold) {
        for (const el of [...host.querySelectorAll("*")].filter((e) => hasClass(e, b))) {
          if (ARROWS_ONLY.test(el.textContent ?? "")) continue;
          if (!inked.has(`${a}${state} ${b}`)) out.push(`${a}${state} ${b}`);
        }
      }
    }
  }
  return [...new Set(out)].sort();
}

describe("ruling 1: a small gold label on a pressed-in (--bg-raised) control reads in ink on paper", () => {
  it("the reason, from the tokens: gold on --bg-raised is under 4.5:1 in light; ink is well over", () => {
    const gold = light("gold-ink");
    const raised = light("bg-raised");
    expect(contrast(gold, raised)).toBeCloseTo(4.14, 2);
    expect(contrast(gold, raised)).toBeLessThan(4.5);
    expect(contrast(light("text"), raised)).toBeGreaterThan(4.5);
  });

  it("the pager label goes to --text on the desktop's hover and the phone's press, in light only", () => {
    expect(audit(css.desk).inked).toContain("pagerCard:hover pagerLabel");
    expect(audit(css.phone).inked).toContain("pagerCard:active pagerLabel");
    // Scoped to light: no unscoped rule takes the gold off in dark.
    for (const sheet of [css.desk, css.phone]) {
      expect(sheet).not.toMatch(/^\.pagerCard:(hover|active) \.pagerLabel/m);
    }
  });

  it("no other gold label on these pages sits in a raised hover without the same rule", async () => {
    const d = day("16-august");
    const page = renderToStaticMarkup(await DayPage({ params: Promise.resolve({ day: d.slug }) }));
    const phoneDay = renderToStaticMarkup(<MobileOnThisDayDay day={d} />);
    const pick = onThisDayFor(new Date("2026-09-26T12:00:00Z"))!;
    const cal = renderToStaticMarkup(CalendarPage());
    const phoneCal = renderToStaticMarkup(<MobileOnThisDayIndex today={calendarToday(new Date())} />);
    expect(unguarded(doc(page.replace(phoneDay, "") + cal.replace(phoneCal, "")), css.desk)).toEqual([]);
    expect(unguarded(doc(phoneDay + phoneCal + renderToStaticMarkup(<MobileOnThisDayCard pick={pick} />)), css.phone)).toEqual([]);
    expect(unguarded(doc(renderToStaticMarkup(<OnThisDayBand pick={pick} />)), css.band)).toEqual([]);
  });

  it("a negative control: the sheets as built find the pager label on both layouts", async () => {
    const d = day("16-august");
    const page = renderToStaticMarkup(await DayPage({ params: Promise.resolve({ day: d.slug }) }));
    const phoneDay = renderToStaticMarkup(<MobileOnThisDayDay day={d} />);
    const shipped = (sheet: string) => sheet.replace(/^:global\(:root\[data-theme="light"\]\) \.pagerCard:(hover|active) \.pagerLabel[^\n]*\n/m, "");
    expect(unguarded(doc(page.replace(phoneDay, "")), shipped(css.desk))).toEqual(["pagerCard:hover pagerLabel"]);
    expect(unguarded(doc(phoneDay), shipped(css.phone))).toEqual(["pagerCard:active pagerLabel"]);
  });
});

// ── Ruling 3: heading tracking ──────────────────────────────────────────────

describe("ruling 3: the Anton headings carry no tracking, as the artboards draw them", () => {
  const decl = (sheet: string, cls: string) => rules(sheet).find((r) => r.selectors.includes(`.${cls}`))?.body ?? "";
  const cases: [keyof typeof css, string][] = [
    ["band", "title"],
    ["phone", "homeTitle"],
    ["phone", "calMonthName"],
    ["desk", "monthName"],
    ["desk", "h1"],
    ["phone", "title"],
    ["phone", "dayTitle"],
  ];

  it.each(cases)("%s .%s: letter-spacing 0, not left to the global h1 (0.01em) or h2 (-0.02em) rule", (sheet, cls) => {
    expect(decl(css[sheet], cls)).toMatch(/letter-spacing: 0;/);
  });

  it("the global rules those classes override are still there — so a missing 0 would show", () => {
    expect(globals).toMatch(/h1, h2, h3 \{[^}]*letter-spacing: -0\.02em;/);
    expect(globals).toMatch(/\nh1 \{[^}]*letter-spacing: 0\.01em;/);
  });
});

// ── Ruling 4: no separator left hanging at a line's end ─────────────────────

describe("ruling 4: every \" · \" in the home card's kicker and meta travels with the item after it", () => {
  /** Separators followed by anything but a no-break space. */
  const loose = (el: Element | null) => (el?.textContent ?? "").match(/·(?! )/g)?.length ?? 0;

  it("both layouts, coming up and today", () => {
    for (const iso of ["2026-09-26", "2026-12-08", "2027-08-16"]) {
      const pick = onThisDayFor(new Date(`${iso}T12:00:00Z`))!;
      for (const html of [renderToStaticMarkup(<OnThisDayBand pick={pick} />), renderToStaticMarkup(<MobileOnThisDayCard pick={pick} />)]) {
        const host = doc(html);
        const title = host.querySelector("h2")!;
        const kicker = title.previousElementSibling;
        const meta = title.nextElementSibling;
        expect(kicker?.textContent).toContain("·");
        expect(meta?.textContent).toContain("·");
        expect(loose(kicker)).toBe(0);
        expect(loose(meta)).toBe(0);
      }
    }
  });

  it("a negative control, with the meta the first build shipped: a plain space let the age wrap away", () => {
    const shipped = doc('<p><span>▲ Charts</span><span>2021</span><span aria-hidden="true">·</span><span>5th anniversary on 7 October</span></p>');
    const phone = doc("<p><span>▲ Charts</span>2021 · <span>5th anniversary on 7 October</span></p>");
    // The desktop's separator sat alone in its own flex item, so it could end a line.
    expect(shipped.querySelector("p")!.children[2].textContent).toBe("·");
    expect(loose(phone.querySelector("p"))).toBe(1);
  });
});

// ── Ruling 5: the tab bar ───────────────────────────────────────────────────

describe("ruling 5: the phone tab bar lights Records on the calendar and the day pages", () => {
  const lit = (path: string) => {
    pathname = path;
    const current = doc(renderToStaticMarkup(<MobileTabBar />)).querySelector('[aria-current="page"]');
    return current?.textContent ?? null;
  };

  it("/on-this-day and /on-this-day/<day>", () => {
    expect(lit("/on-this-day")).toMatch(/Records$/);
    expect(lit("/on-this-day/16-august")).toMatch(/Records$/);
  });

  it("and nothing else moved", () => {
    expect(lit("/")).toBe("Home");
    // /records/awards carries its own action bar; the hub and a car page light Records.
    expect(lit("/records")).toMatch(/Records$/);
    expect(lit("/records/cars/bugatti-chiron")).toMatch(/Records$/);
    expect(lit("/timeline")).toBeNull();
    expect(lit("/on-this-day-not-a-route")).toBeNull();
  });
});

// ── Ruling 6: the artboards' copy ───────────────────────────────────────────

describe("ruling 6: the copy the first build kept now reads as the artboards draw it", () => {
  pathname = "/on-this-day";

  it("the desktop lede joins with a colon", () => {
    const html = renderToStaticMarkup(CalendarPage()).replace(/\s+/g, " ");
    expect(html).toContain(`${onThisDayEvents.length} dated milestones on ${onThisDayDays.length} days of the year: album releases`);
    expect(html).not.toContain("days of the year — album releases");
  });

  it("the phone calendar's foot note is the artboard's short one, with the methodology link", () => {
    const note = [...doc(renderToStaticMarkup(<MobileOnThisDayIndex today={calendarToday(new Date())} />)).querySelectorAll("p")].at(-1)!;
    expect(note.textContent!.replace(/\s+/g, " ").trim()).toBe(
      "Only records that carry their own day are here. A record known only by its year stays off the calendar until its day is read — see the methodology.",
    );
    expect(note.querySelector("a")!.getAttribute("href")).toBe("/methodology");
  });

  it("the calendar link preview's sub-line is the artboard's", () => {
    const src = readFileSync("app/on-this-day/opengraph-image.tsx", "utf8");
    expect(src).toContain("A dated Burna Boy milestone for every day that has one, each on the day it happened.");
    expect(src).not.toContain("A dated milestone for every day that has one — each on the day it happened.");
  });
});

// ── SEO follow-ups ─────────────────────────────────────────────────────────

describe("SEO A: a one-milestone day is noindex, follow — and still a live, linked page", () => {
  it("the predicate: two or more milestones", () => {
    expect(isIndexableDay(day("16-august"))).toBe(true);
    expect(isIndexableDay(day("8-october"))).toBe(false);
    // The audit's count: 120 of the 167 hold one event.
    expect(onThisDayDays.filter((d) => !isIndexableDay(d)).length).toBe(onThisDayDays.filter((d) => d.events.length === 1).length);
  });

  it("every day's metadata follows it", async () => {
    for (const d of onThisDayDays) {
      const meta = await generateMetadata({ params: Promise.resolve({ day: d.slug }) });
      if (isIndexableDay(d)) expect(meta.robots, d.slug).toBeUndefined();
      else expect(meta.robots, d.slug).toEqual({ index: false, follow: true });
    }
  });

  it("a noindexed day still renders, and the calendar still links it", async () => {
    const d = day("8-october");
    expect(renderToStaticMarkup(await DayPage({ params: Promise.resolve({ day: d.slug }) }))).toContain(d.lead.headline);
    expect(renderToStaticMarkup(CalendarPage())).toContain(`href="/on-this-day/${d.slug}"`);
  });
});

describe("SEO B: the calendar is in the footer sitemap and the phone nav sheet", () => {
  it("footer: The story, beside the career timeline", () => {
    const story = footerColumns.find((c) => c.label === "The story")!.links.map((l) => l.href);
    expect(story).toContain("/on-this-day");
    expect(story.indexOf("/on-this-day")).toBe(story.indexOf("/timeline") + 1);
  });

  it("nav sheet: The site, beside the career timeline, counting the dated days", () => {
    const site = navGroups.find((g) => g.name === "The site")!.items;
    const i = site.findIndex((r) => r.href === "/on-this-day");
    expect(site[i - 1].href).toBe("/timeline");
    expect(site[i].meta).toBe(`${onThisDayDays.length} dates`);
  });
});

describe("SEO C: the calendar's title counts what it holds", () => {
  it("derived, and inside 60 characters", () => {
    const title = String(calendarMetadata.title);
    expect(title).toBe(`Burna Boy On This Day — ${onThisDayEvents.length} Milestones on ${onThisDayDays.length} Dates`);
    expect(title.length).toBeLessThanOrEqual(60);
    // The promise it replaces: 167 of 366 dates carry a milestone.
    expect(title).not.toMatch(/every date/i);
  });
});

describe("SEO D: a one-milestone day's title names the milestone where it fits", () => {
  it("every day: counted when there are several, named when one fits, never over 60", () => {
    for (const d of onThisDayDays) {
      const t = dayPageTitle(d);
      expect(t.length, t).toBeLessThanOrEqual(60);
      const counted = `Burna Boy on This Day: ${d.label} — ${d.events.length} Milestone${d.events.length === 1 ? "" : "s"}`;
      const named = `${d.label} ${d.lead.year}: ${d.lead.headline}`;
      expect(t, d.slug).toBe(d.events.length > 1 || named.length > 60 ? counted : named);
    }
  });

  it("the days the audit looked at", () => {
    expect(dayPageTitle(day("8-october"))).toBe("8 October 2021: Burna Boy played Hollywood Bowl, Los Angeles");
    expect(dayPageTitle(day("16-august"))).toBe("Burna Boy on This Day: 16 August — 5 Milestones");
    // 84 characters named, so it keeps the date form.
    expect(dayPageTitle(day("28-april"))).toBe("Burna Boy on This Day: 28 April — 1 Milestone");
    // Not vacuous: most one-milestone days are named.
    const named = onThisDayDays.filter((d) => d.events.length === 1 && !dayPageTitle(d).startsWith("Burna Boy on This Day"));
    expect(named.length).toBeGreaterThan(60);
  });
});

describe("SEO E: no description ends a sentence twice", () => {
  const DOUBLE = /\.\.(?!\.)/;

  it("every day's description, link-preview description and share text", async () => {
    const bad: string[] = [];
    for (const d of onThisDayDays) {
      const meta = await generateMetadata({ params: Promise.resolve({ day: d.slug }) });
      const texts = [
        String(meta.description),
        String(meta.openGraph?.description),
        String(meta.twitter?.description),
        dayShareText(d, CANONICAL_ORIGIN),
      ];
      for (const t of texts) if (DOUBLE.test(t)) bad.push(`${d.slug}: ${t}`);
    }
    expect(bad).toEqual([]);
  });

  it("a negative control, with the description 7 March shipped", () => {
    // Read off the built page before the fix (next start, 26 Sep 2026).
    expect(DOUBLE.test("2024: Burna Boy played Capital One Arena, Washington, D.C.. Burna Boy on this day, 7 March.")).toBe(true);
    // And the four days whose lead ends in "D.C." still end it once.
    const dc = onThisDayDays.filter((d) => d.lead.headline.endsWith("D.C."));
    expect(dc.map((d) => d.slug).sort()).toEqual(["15-september", "30-may", "5-december", "7-march"]);
  });
});
