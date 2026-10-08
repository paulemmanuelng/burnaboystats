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
  keepFigures,
  keepSeparators,
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
      expect(host.textContent).toContain(keepFigures(keepSeparators(`On this day · coming up in ${days} day${days === 1 ? "" : "s"} · ${pick.day.label}`)));
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
        expect(host.textContent).toContain(keepFigures(keepSeparators(`On this day · today, ${pick.day.label}`)));
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
      // J0-4 (Option A): desktop's day link is a text link (↗); the phone's is
      // a 44px whole row (→).
      const { desk, phone } = html(pick);
      for (const [host, arrow] of [[desk, "↗"], [phone, "→"]] as const) {
        // The arrow link. The title and the picture go to the day too (the
        // next block); this is the one that says where it goes.
        const ends = new RegExp(`\\s*${arrow}$`);
        const day = [...host.querySelectorAll(`a[href="/on-this-day/${pick.day.slug}"]`)].filter((a) => ends.test(a.textContent ?? ""));
        expect(day.map((a) => (a.textContent ?? "").replace(ends, ""))).toEqual([want]);
        expect([...host.querySelectorAll('a[href="/on-this-day"]')].length).toBe(1);
      }
    }
  });
});

describe("the picture and the title open the day's page, not the card (Paul, 26 Sep 2026)", () => {
  // "on the homepage, when i click on this, it should take me to the page, not
  // the picture, the text now isnt clickable on homepage." "Save or share ↓"
  // and "The card ↓" stay the ways to the image.

  /** 7 October as it shipped before (the home card of 26 Sep 2026, rendered
   *  from main): the phone's thumbnail went to the PNG, the desktop's picture
   *  was no link, and neither title nor the phone's card line was one. */
  const SHIPPED = {
    deskTitle: '<h2 id="otd-title" class="_title_c1e3a3">“Want It All” hit No. 8 in Nigeria</h2>',
    deskPicture:
      '<div class="_cardCol_c1e3a3"><img src="/on-this-day/7-october/card?w=320" alt="The 7 October card: 2021, “Want It All” hit No. 8 in Nigeria" width="150" height="188" loading="lazy" decoding="async" class="_cardImg_c1e3a3"/><a href="/on-this-day/7-october/card" download="burna-boy-on-this-day-7-october.png" class="btn btnSecondary _cardBtn_c1e3a3"><span>The card<span class="visuallyHidden"> for 7 October</span></span><span aria-hidden="true">↓</span></a></div>',
    phoneTitle: '<h2 id="otd-title-m" class="_homeTitle_b8fde5">“Want It All” hit No. 8 in Nigeria</h2>',
    phoneThumb:
      '<a href="/on-this-day/7-october/card" class="_homeThumb_b8fde5"><img src="/on-this-day/7-october/card?w=320" alt="The 7 October card: 2021, “Want It All” hit No. 8 in Nigeria" width="96" height="120" loading="lazy" decoding="async"/></a>',
    phoneName: '<p class="_homeCardName_b8fde5">The 7 October card, ready to post</p>',
  };
  const doc = (s: string) => {
    const el = document.createElement("div");
    el.innerHTML = s;
    return el;
  };
  /** Where the preview picture's link goes; null when the picture is no link. */
  const pictureHref = (host: Element) => host.querySelector("img")!.closest("a")?.getAttribute("href") ?? null;
  /** Where the title's link goes; null when the title is no link. */
  const titleHref = (host: Element) => host.querySelector("h2 a")?.getAttribute("href") ?? null;
  /** The phone's "The <day> card, ready to post" line, and its link if any. */
  const nameLink = (host: Element, label: string) =>
    [...host.querySelectorAll("p")].find((p) => p.textContent === `The ${label} card, ready to post`)?.querySelector("a") ?? null;
  const picks = () => [at(COMING), ...[...TODAY_BY_COUNT.values()].map(at)];

  it("the preview picture links to /on-this-day/<day>, named for where it goes", () => {
    for (const pick of picks()) {
      const dayHref = `/on-this-day/${pick.day.slug}`;
      for (const host of Object.values(html(pick))) {
        expect(pictureHref(host)).toBe(dayHref);
        const link = host.querySelector("img")!.closest("a")!;
        expect(link.getAttribute("aria-label")).toBe(`Open ${pick.day.label}`);
        expect(link.hasAttribute("download")).toBe(false);
        // The link carries the name; the picture inside it is silent.
        expect(host.querySelector("img")!.getAttribute("alt")).toBe("");
      }
    }
    // A negative control: the shipped markup fails it on both layouts.
    expect(pictureHref(doc(SHIPPED.phoneThumb))).toBe("/on-this-day/7-october/card");
    expect(pictureHref(doc(SHIPPED.deskPicture))).toBeNull();
  });

  it("the title is a link to the same page, inside its h2, in the lead's words", () => {
    for (const pick of picks()) {
      const { desk, phone } = html(pick);
      for (const [host, id] of [[desk, "otd-title"], [phone, "otd-title-m"]] as const) {
        const h2 = host.querySelector("h2")!;
        expect(h2.id).toBe(id);
        expect(titleHref(host)).toBe(`/on-this-day/${pick.day.slug}`);
        expect(h2.querySelectorAll("a").length).toBe(1);
        expect(h2.querySelector("a")!.textContent).toBe(homeRows(pick)[0].headline);
      }
    }
    expect(titleHref(doc(SHIPPED.deskTitle))).toBeNull();
    expect(titleHref(doc(SHIPPED.phoneTitle))).toBeNull();
  });

  it("the phone's \"The <day> card, ready to post\" opens the day's page too", () => {
    for (const pick of picks()) {
      const link = nameLink(html(pick).phone, pick.day.label);
      expect(link?.getAttribute("href")).toBe(`/on-this-day/${pick.day.slug}`);
    }
    expect(nameLink(doc(SHIPPED.phoneName), "7 October")).toBeNull();
  });

  it("the card is still one tap away: the only links to it are the save buttons", () => {
    const toCard = (host: Element) => [...host.querySelectorAll('a[href$="/card"]')];
    for (const pick of picks()) {
      const card = `/on-this-day/${pick.day.slug}/card`;
      const { desk, phone } = html(pick);
      for (const [host, n] of [[desk, 2], [phone, 1]] as const) {
        const links = toCard(host);
        expect(links.length).toBe(n);
        for (const a of links) {
          expect(a.getAttribute("href")).toBe(card);
          expect(a.classList.contains("btnSecondary")).toBe(true);
          expect(a.hasAttribute("download")).toBe(true);
        }
      }
      expect(toCard(phone)[0].textContent).toBe("Save or share↓");
    }
    // The shipped thumbnail was a link to the card that was no button.
    expect(toCard(doc(SHIPPED.phoneThumb)).filter((a) => !a.classList.contains("btnSecondary")).length).toBe(1);
  });

  it("no link sits inside another", () => {
    /** The deepest <a> nesting in a raw markup string (a parser would undo it). */
    const depth = (markup: string) => {
      let d = 0;
      let max = 0;
      for (const m of markup.matchAll(/<a\b|<\/a>/g)) {
        d += m[0] === "</a>" ? -1 : 1;
        max = Math.max(max, d);
      }
      return max;
    };
    for (const pick of picks()) {
      expect(depth(renderToStaticMarkup(<OnThisDayBand pick={pick} />))).toBe(1);
      expect(depth(renderToStaticMarkup(<MobileOnThisDayCard pick={pick} />))).toBe(1);
    }
    // A negative control: the shipped thumbnail wrapped in the day's link, the
    // shortcut this guard is here to stop.
    expect(depth(`<a href="/on-this-day/7-october">${SHIPPED.phoneThumb}</a>`)).toBe(2);
  });

  it("the title stays in ink; the phone's new targets are at least 44px", () => {
    const band = readFileSync("app/components/onThisDayBand.module.css", "utf8");
    const phone = readFileSync("app/components/mobileOnThisDay.module.css", "utf8");
    const rule = (sheet: string, sel: string) => sheet.match(new RegExp(`\\n${sel.replace(/[.:]/g, "\\$&")} \\{([^}]*)\\}`))?.[1] ?? "";
    for (const [sheet, title, link] of [[band, ".title", ".titleLink"], [phone, ".homeTitle", ".homeTitleLink"]] as const) {
      expect(rule(sheet, title)).not.toMatch(/--gold/);
      expect(rule(sheet, link)).toMatch(/color: inherit;/);
      expect(sheet).not.toMatch(new RegExp(`\\${link}[^{]*\\{[^}]*--gold`));
    }
    // One line of the phone title, plus the layer above and below it.
    const size = Number(rule(phone, ".homeTitle").match(/font-size: (\d+)px;/)![1]);
    const lh = Number(rule(phone, ".homeTitle").match(/line-height: ([\d.]+);/)![1]);
    const pad = Number(rule(phone, ".homeTitleLink::after").match(/inset: -(\d+)px 0;/)![1]);
    expect(size * lh + 2 * pad).toBeGreaterThanOrEqual(44);
    // The card line keeps its natural height (a min-height moved it and the
    // button 12.6px down the box at 390); its layer lifts one line to 44px.
    const nameLink = rule(phone, ".homeCardNameLink");
    expect(nameLink).not.toMatch(/min-height|height:|padding|display: flex/);
    expect(nameLink).toMatch(/position: relative;/);
    const small = Number(readFileSync("app/globals.css", "utf8").match(/--type-small: ([\d.]+)px;/)![1]);
    const nameLh = Number(rule(phone, ".homeCardName").match(/line-height: ([\d.]+);/)![1]);
    const [, up, down] = rule(phone, ".homeCardNameLink::after").match(/inset: -(\d+)px 0 -(\d+)px;/)!.map(Number);
    expect(small * nameLh + up + down).toBeGreaterThanOrEqual(44);
    // It reaches into the 8px gap over the button, never onto it.
    expect(down).toBeLessThan(Number(rule(phone, ".homeCardCopy").match(/gap: (\d+)px;/)![1]));
    // The thumbnail is 96×120.
    expect(rule(phone, ".homeThumb")).toMatch(/width: 96px; height: 120px;/);
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

  it("the title is Anton 40 on desktop, and History made's title size at 1239 and under", () => {
    // Ruling 4 (26 Sep 2026): item 13's "28/32" is the band's padding, not the
    // title. At 901–1239 the title takes History made's title size, read here
    // from app/page.module.css so the two cannot drift apart.
    expect(band).toMatch(/\.title \{[^}]*font-size: 40px;/);
    const historyTitle = home.match(/\.historyTitle \{([^}]*)\}/)![1];
    const size = historyTitle.match(/font-size: ([^;]+);/)![1];
    const lh = historyTitle.match(/line-height: ([^;]+);/)![1];
    // History made's title does not step at this width, so its base rule is the one in force.
    const blocks = [...home.matchAll(/@media \(max-width: 1239px\) \{\n([\s\S]*?)\n\}/g)].map((m) => m[1]);
    expect(blocks.some((b) => /\.historyTitle/.test(b))).toBe(false);
    expect(size).toBe("32px");
    expect(tablet(band)).toContain(`.title { font-size: ${size}; line-height: ${lh}; }`);
    // A negative control: the first build's tablet title.
    expect(".title { font-size: 28px; line-height: 32px; }").not.toContain(`font-size: ${size};`);
  });

  it("at 1239 and under its padding is History made's, so the two bands' edges line up", () => {
    const blocks = [...home.matchAll(/@media \(max-width: 1239px\) \{\n([\s\S]*?)\n\}/g)].map((m) => m[1]);
    const history = blocks.map((b) => b.match(/\.historyInner \{ padding: ([^;]+); \}/)?.[1]).find(Boolean)!;
    expect(history).toBeTruthy();
    expect(tablet(band)).toContain(`.inner { padding: ${history}; }`);
  });
});
