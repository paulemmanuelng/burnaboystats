import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import OnThisDayBand from "../app/components/OnThisDayBand";
import MobileOnThisDayCard from "../app/components/MobileOnThisDayCard";
import {
  KIND_MARK,
  anniversary,
  homeRows,
  isRecordLine,
  neighbours,
  onThisDayDays,
  onThisDayFor,
  type OnThisDayPick,
} from "../app/lib/onThisDay";

/**
 * The home card as the design response draws it (§2 Home card; change list
 * items 6–8 and 13, approved 26 Sep 2026): the lead milestone is the title,
 * the date and countdown sit in the kicker, the other anniversaries run
 * newest first with their own ages, a "Next on the calendar" teaser fills in
 * when there are fewer than two, the day's card is a small lazy WebP with an
 * outlined button — and no gold action. Every expected figure is worked out
 * here from the data.
 */

const at = (iso: string) => onThisDayFor(new Date(`${iso}T12:00:00Z`))!;
const byKey = new Map(onThisDayDays.map((d) => [d.key, d]));

function html(pick: OnThisDayPick) {
  const host = (s: string) => {
    const el = document.createElement("div");
    el.innerHTML = s;
    return el;
  };
  return {
    desk: host(renderToStaticMarkup(<OnThisDayBand pick={pick} />)),
    phone: host(renderToStaticMarkup(<MobileOnThisDayCard pick={pick} />)),
  };
}

/** A 2026 date with no anniversary on it, found from the data. */
const COMING = (() => {
  for (let t = Date.UTC(2026, 8, 26); ; t += 86_400_000) {
    const iso = new Date(t).toISOString().slice(0, 10);
    const d = byKey.get(iso.slice(5));
    if (!d || !d.events.some((e) => e.year < 2026)) return iso;
  }
})();

/** Dates in 2027 whose anniversaries number 1, 2, 3 and more than 3. */
const TODAY_BY_COUNT = (() => {
  const out = new Map<string, string>();
  for (const d of onThisDayDays) {
    const n = d.events.filter((e) => e.year < 2027).length;
    const k = n > 3 ? ">3" : String(n);
    if (n && !out.has(k) && d.key !== "02-29") out.set(k, `2027-${d.key}`);
  }
  return out;
})();

const ago = (n: number) => `${n} year${n === 1 ? "" : "s"} ago`;

describe("the title is the lead milestone; the date moves to the kicker", () => {
  it("coming up: the kicker counts the days, the meta names the anniversary", () => {
    const pick = at(COMING);
    expect(pick.mode).toBe("coming");
    const days = Math.round((Date.parse(pick.iso) - Date.parse(COMING)) / 86_400_000);
    const lead = pick.events[0];
    const n = Number(pick.iso.slice(0, 4)) - lead.year;
    for (const host of Object.values(html(pick))) {
      expect(host.querySelector("h2")!.textContent).toBe(lead.headline);
      expect(host.textContent).toContain(`On this day · coming up in ${days} day${days === 1 ? "" : "s"} · ${pick.day.label}`);
      expect(host.textContent).toContain(`${anniversary(n)} on ${pick.day.label}`);
      expect(host.textContent).not.toMatch(/Coming up:/);
    }
  });

  it("today: the kicker says today, the meta says how long ago", () => {
    for (const iso of TODAY_BY_COUNT.values()) {
      const pick = at(iso);
      expect(pick.mode).toBe("today");
      const lead = pick.events[0];
      for (const host of Object.values(html(pick))) {
        expect(host.querySelector("h2")!.textContent).toBe(lead.headline);
        expect(host.textContent).toContain(`On this day · today, ${pick.day.label}`);
        expect(host.textContent).toContain(`${ago(2027 - lead.year)} today`);
        expect(host.textContent).toContain(KIND_MARK[lead.kind].word);
        expect(host.textContent).toContain(lead.detail);
      }
    }
  });
});

describe("the rows: the lead, then the rest newest first, each with its own age", () => {
  it("every day of a year: at most three, the lead first, the rest by year", () => {
    for (let t = Date.UTC(2027, 0, 1); t < Date.UTC(2028, 0, 1); t += 86_400_000) {
      const pick = onThisDayFor(new Date(t))!;
      const rows = homeRows(pick);
      expect(rows[0]).toBe(pick.events[0]);
      expect(rows.length).toBe(Math.min(3, pick.events.length));
      const years = rows.slice(1).map((e) => e.year);
      expect(years).toEqual([...years].sort((a, b) => b - a));
      // The rest are the newest of the day's other anniversaries.
      const others = pick.events.slice(1).map((e) => e.year).sort((a, b) => b - a);
      expect(years).toEqual(others.slice(0, 2));
    }
  });

  it("desktop lists the rest under \"Also on\", with their ages; the phone lists them too", () => {
    const iso = TODAY_BY_COUNT.get(">3") ?? TODAY_BY_COUNT.get("3")!;
    const pick = at(iso);
    const [, ...rest] = homeRows(pick);
    const { desk, phone } = html(pick);
    expect(desk.textContent).toContain(
      pick.events.length > 3
        ? `Also on ${pick.day.label} · ${rest.length} of ${pick.events.length - 1} more`
        : `Also on ${pick.day.label}`,
    );
    for (const host of [desk, phone]) {
      const rows = [...host.querySelectorAll("ol a")];
      expect(rows.map((r) => r.getAttribute("href"))).toEqual(rest.map((e) => e.href));
      rows.forEach((r, i) => {
        expect(r.textContent).toContain(rest[i].headline);
        expect(r.textContent).toContain(ago(2027 - rest[i].year));
      });
    }
  });

  it("fewer than two other rows: desktop adds the next dated day as a teaser; the phone draws none", () => {
    for (const [k, iso] of TODAY_BY_COUNT) {
      const pick = at(iso);
      const next = neighbours(pick.day.key).next;
      const { desk, phone } = html(pick);
      const teaser = [...desk.querySelectorAll("a")].find((a) => a.textContent?.startsWith("Next"));
      if (k === "1" || k === "2") {
        expect(teaser?.getAttribute("href")).toBe(`/on-this-day/${next.slug}`);
        expect(teaser?.textContent).toContain(next.lead.headline);
        expect(teaser?.textContent).toContain(`${next.label} · ${next.lead.year}`);
      } else expect(teaser).toBeUndefined();
      if (k === "1") expect(desk.textContent).toContain("Next on the calendar");
      expect(phone.textContent).not.toContain("Next on the calendar");
      expect(phone.querySelector(`a[href="/on-this-day/${next.slug}"]`)).toBeNull();
    }
  });

  it("the links: the day, and the calendar", () => {
    for (const [k, iso] of TODAY_BY_COUNT) {
      const pick = at(iso);
      const want = k === "1" ? `${pick.day.label}, every year` : `All ${pick.events.length} on ${pick.day.label}`;
      for (const host of Object.values(html(pick))) {
        const day = [...host.querySelectorAll(`a[href="/on-this-day/${pick.day.slug}"]`)];
        expect(day.map((a) => (a.textContent ?? "").replace(/\s*↗$/, ""))).toEqual([want]);
        expect([...host.querySelectorAll('a[href="/on-this-day"]')].length).toBe(1);
      }
    }
  });
});

describe("the card, and no gold action", () => {
  it("a lazy 320px WebP preview (150×188 desktop, 96×120 phone), never the PNG", () => {
    const pick = at(COMING);
    const { desk, phone } = html(pick);
    for (const [host, w, h] of [[desk, "150", "188"], [phone, "96", "120"]] as const) {
      const imgs = [...host.querySelectorAll("img")];
      expect(imgs.length).toBe(1);
      expect(imgs[0].getAttribute("src")).toBe(`/on-this-day/${pick.day.slug}/card?w=320`);
      expect(imgs[0].getAttribute("loading")).toBe("lazy");
      expect([imgs[0].getAttribute("width"), imgs[0].getAttribute("height")]).toEqual([w, h]);
    }
  });

  it("the card's buttons are outlined secondaries; neither layout adds a gold one", () => {
    const pick = at(COMING);
    const { desk, phone } = html(pick);
    for (const host of [desk, phone]) {
      expect(host.querySelector(".btnPrimary")).toBeNull();
      expect(host.innerHTML).not.toMatch(/btnPrimary/);
    }
    const deskBtns = [...desk.querySelectorAll("a.btnSecondary")];
    expect(deskBtns.length).toBe(2); // the wide one, and the tablet's under the links
    for (const b of deskBtns) {
      expect(b.getAttribute("href")).toBe(`/on-this-day/${pick.day.slug}/card`);
      expect(b.getAttribute("download")).toBe(`burna-boy-on-this-day-${pick.day.slug}.png`);
      expect(b.textContent).toBe(`The card for ${pick.day.label}↓`);
    }
    const save = [...phone.querySelectorAll("a.btnSecondary")];
    expect(save.length).toBe(1);
    expect(save[0].textContent).toBe("Save or share↓");
    expect(save[0].getAttribute("href")).toBe(`/on-this-day/${pick.day.slug}/card`);
    expect(save[0].hasAttribute("download")).toBe(true);
  });

  it("a record lead prints its record sentence", () => {
    let pick: OnThisDayPick | undefined;
    for (let t = Date.UTC(2027, 0, 1); !pick && t < Date.UTC(2028, 0, 1); t += 86_400_000) {
      const p = onThisDayFor(new Date(t))!;
      if (p.mode === "today" && isRecordLine(p.events[0])) pick = p;
    }
    expect(pick).toBeDefined();
    for (const host of Object.values(html(pick!))) expect(host.textContent).toContain(pick!.events[0].detail);
  });
});

describe("the band's frame", () => {
  const band = readFileSync("app/components/onThisDayBand.module.css", "utf8");
  const home = readFileSync("app/page.module.css", "utf8");
  const tablet = (css: string) => css.match(/@media \(max-width: 1239px\) \{\n([\s\S]*?)\n\}/)![1];

  it("a 2px --rule under the band", () => {
    expect(band).toMatch(/\.band \{ border-bottom: 2px solid var\(--rule\); \}/);
  });

  it("the title is Anton 40 on desktop and 28/32 at 1239 and under", () => {
    expect(band).toMatch(/\.title \{[^}]*font-size: 40px;/);
    expect(tablet(band)).toContain(".title { font-size: 28px; line-height: 32px; }");
  });

  it("at 1239 and under its padding is History made's, so the two bands' edges line up", () => {
    const blocks = [...home.matchAll(/@media \(max-width: 1239px\) \{\n([\s\S]*?)\n\}/g)].map((m) => m[1]);
    const history = blocks.map((b) => b.match(/\.historyInner \{ padding: ([^;]+); \}/)?.[1]).find(Boolean)!;
    expect(history).toBeTruthy();
    expect(tablet(band)).toContain(`.inner { padding: ${history}; }`);
  });
});
