import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/on-this-day",
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

import DayPage from "../app/on-this-day/[day]/page";
import MobileOnThisDayDay from "../app/components/MobileOnThisDayDay";
import {
  dayBySlug,
  dayLede,
  dayLedeShort,
  isRecordLine,
  onThisDayDays,
  yearGroups,
  type OnThisDayDay,
} from "../app/lib/onThisDay";
import { parsePreviewWidth } from "../app/lib/cardPreview";

/**
 * The day pages as the design response draws them (§2 Day pages, approved
 * 26 Sep 2026): grouped by year, the lead marked "On the card", record lines
 * promoted, the whole row the link, one gold action per layout, and the card
 * preview served small. Checked against the served markup of both layouts.
 */

async function layouts(slug: string) {
  const day = dayBySlug(slug)!;
  const page = renderToStaticMarkup(await DayPage({ params: Promise.resolve({ day: slug }) }));
  const phone = renderToStaticMarkup(<MobileOnThisDayDay day={day} />);
  expect(page).toContain(phone);
  return { day, desk: page.replace(phone, ""), phone };
}

const count = (html: string, needle: string | RegExp) =>
  typeof needle === "string" ? html.split(needle).length - 1 : [...html.matchAll(needle)].length;
const text = (html: string) => html.replace(/<[^>]+>/g, "");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/'/g, "&#x27;").replace(/"/g, "&quot;");

describe("a day's events, grouped by year", () => {
  it("every day: newest year first, each year once, every event once, the lead first in its year", () => {
    for (const d of onThisDayDays) {
      const groups = yearGroups(d);
      const years = groups.map((g) => g.year);
      expect(years).toEqual([...new Set(d.events.map((e) => e.year))].sort((a, b) => b - a));
      expect(groups.flatMap((g) => g.events).length).toBe(d.events.length);
      const home = groups.find((g) => g.year === d.lead.year)!;
      expect(home.events[0]).toBe(d.lead);
    }
  });

  it("a day whose lead is not the newest row keeps the lead in its own year", () => {
    // The data decides which days these are; 11 July (the 2025 album under a
    // 2026 show) was one when the design was drawn.
    const later = onThisDayDays.filter((d) => d.events.some((e) => e.year > d.lead.year));
    expect(later.length).toBeGreaterThan(0);
    for (const d of later) expect(yearGroups(d)[0].year).toBeGreaterThan(d.lead.year);
  });
});

describe("record lines are read off the data", () => {
  it("promotes the record sentences and leaves plain details alone", () => {
    // The literal details the site prints.
    expect(isRecordLine({ detail: "First African artist to sell out the world's most famous arena." })).toBe(true);
    expect(isRecordLine({ detail: "$6.15M from 58,973 tickets: the highest-grossing single concert by any African artist." })).toBe(true);
    expect(isRecordLine({ detail: "IFPI Sverige" })).toBe(false);
    expect(isRecordLine({ detail: "African Giant Tour" })).toBe(false);
    expect(isRecordLine({ detail: "Daily Top Songs Global — the first of 37 days at No. 1" })).toBe(false);
  });
});

describe("the served day pages, both layouts", () => {
  const SLUGS = ["16-august", "8-october", "29-june", "11-july", "28-april", "16-january"];

  it.each(SLUGS)("%s: one year heading per year, one On the card tag, no See the record", async (slug) => {
    const { day, desk, phone } = await layouts(slug);
    const years = [...new Set(day.events.map((e) => e.year))];
    for (const html of [desk, phone]) {
      expect(count(html, /<h2[^>]*>\d{4}<\/h2>/g)).toBe(years.length);
      expect(count(text(html), "On the card")).toBe(1);
      expect(html).not.toMatch(/See the record/i);
      // Every event's row is a link to its record.
      for (const e of day.events) expect(html).toContain(`href="${esc(e.href)}"`);
    }
  });

  it("the On the card tag sits in the lead's own year group", async () => {
    const d = onThisDayDays.find((x) => yearGroups(x)[0].year !== x.lead.year)!;
    const { phone } = await layouts(d.slug);
    const leadGroup = phone.slice(phone.indexOf(`>${d.lead.year}</h2>`));
    const before = phone.slice(0, phone.indexOf(`>${d.lead.year}</h2>`));
    expect(text(before)).not.toContain("On the card");
    expect(text(leadGroup)).toContain("On the card");
  });

  it("a record line carries its RECORD label; a day without one has none", async () => {
    const withRecord = onThisDayDays.find((d) => d.events.some(isRecordLine))!;
    const without = onThisDayDays.find((d) => !d.events.some(isRecordLine) && d.events.length > 3)!;
    const a = await layouts(withRecord.slug);
    const b = await layouts(without.slug);
    const n = withRecord.events.filter(isRecordLine).length;
    expect(count(text(a.desk), "Record")).toBeGreaterThanOrEqual(n);
    expect(count(a.desk, />Record</g)).toBe(n);
    expect(count(a.phone, />Record</g)).toBe(n);
    expect(count(b.desk, />Record</g)).toBe(0);
    expect(count(b.phone, />Record</g)).toBe(0);
  });

  it.each(SLUGS)("%s: one gold action per layout, and the preview is the small WebP", async (slug) => {
    const { desk, phone } = await layouts(slug);
    expect(count(desk, "btnPrimary")).toBe(1);
    expect(count(phone, "btnPrimary")).toBe(1);
    expect(text(desk)).toContain("Download the card");
    expect(text(phone)).toContain("Save or share");
    expect(desk).toMatch(new RegExp(`<img[^>]*src="/on-this-day/${slug}/card\\?w=560"[^>]*>`));
    // Hidden on a phone, so a phone gets a blank pixel instead of the fetch.
    expect(desk).toMatch(/<source media="\(max-width: 900px\)" srcSet="data:image\/gif;base64,[^"]+"\/>\s*<img[^>]*card\?w=560/i);
    const deskImg = desk.match(/<img[^>]*card\?w=560[^>]*>/)![0];
    expect(deskImg).toContain('loading="eager"');
    expect(deskImg).toMatch(/fetchPriority="low"/i);
    const phoneImg = phone.match(/<img[^>]*card\?w=320[^>]*>/)![0];
    expect(phoneImg).toContain('loading="lazy"');
    // The 725 KB PNG is the download, never an <img>.
    expect(desk + phone).not.toMatch(/<img[^>]*\/card"/);
  });

  it("a one-event day is said as one", async () => {
    const one = onThisDayDays.filter((d) => d.events.length === 1);
    expect(one.length).toBeGreaterThan(0);
    for (const d of one) {
      expect(dayLede(d)).toMatch(new RegExp(`^One milestone is dated ${d.label}, from ${d.lead.year}\\.`));
      expect(dayLedeShort(d)).toBe(`One milestone, from ${d.lead.year}.`);
    }
    const busy = onThisDayDays.find((d) => d.events.length > 1) as OnThisDayDay;
    expect(dayLede(busy)).toMatch(new RegExp(`^${busy.events.length} milestones dated ${busy.label}`));
    const { desk } = await layouts(one[0].slug);
    expect(text(desk)).toContain(dayLede(one[0]));
  });

  it("the pager cards preview each neighbour's lead", async () => {
    const d = dayBySlug("16-august")!;
    const i = onThisDayDays.indexOf(d);
    const prev = onThisDayDays[i - 1];
    const next = onThisDayDays[i + 1];
    const { desk, phone } = await layouts(d.slug);
    for (const html of [desk, phone]) {
      expect(text(html)).toContain(esc(prev.lead.headline).replace(/&quot;/g, "\""));
      expect(text(html)).toContain(esc(next.lead.headline).replace(/&quot;/g, "\""));
    }
  });
});

describe("the card route's ?w=", () => {
  it("serves the full PNG, two preview widths, and nothing else", () => {
    expect(parsePreviewWidth(null)).toBeUndefined();
    expect(parsePreviewWidth("560")).toBe(560);
    expect(parsePreviewWidth("320")).toBe(320);
    for (const bad of ["", "561", "1080", "560px", "0560", "-1", "560&w=320"]) expect(parsePreviewWidth(bad)).toBeNull();
  });
});
