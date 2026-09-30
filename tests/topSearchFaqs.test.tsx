import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
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

import CarsPage, { metadata as carsMetadata } from "../app/records/cars/page";
import AfricasBiggestPage, { pageFaqs } from "../app/records/africas-biggest/page";
import { carFaqs } from "../app/lib/carFaqs";
import { cars, CARS_LAST_SWEEP, carsListYear } from "../app/data/cars";
import { statBoxes, EAS_STREAMS_COUNTED_TO, HIGHLIGHT } from "../app/data/africasBiggest";
import { faqs as siteFaqs } from "../app/data/faqs";
import { modelShort } from "../app/lib/garage";
import { cardinalWord } from "../app/lib/plural";
import carStyles from "../app/records/cars/cars.module.css";
import deepStyles from "../app/components/mobileDeepPage.module.css";
import faqSectionStyles from "../app/components/mobileFaqSection.module.css";
import abStyles from "../app/records/africas-biggest/africas-biggest.module.css";
import mabStyles from "../app/components/mobileAfricasBiggest.module.css";

/**
 * The top searches, answered on the pages they land on (30 Sep 2026).
 *
 * Search Console had /records/cars as the site's top search page (230 clicks in
 * 28 days) with no FAQ at all, its fastest-growing query "how many cars does
 * burna boy have" (+667%). /records/africas-biggest had an FAQ, but not the two
 * questions it is found by: "biggest artist in africa" and "best selling african
 * artist of all time". These pin three things:
 *
 *   - every figure in the new answers is the data's, checked against the rows
 *     themselves rather than against the constants the answers are built from
 *     (a reconcile built from its own constant balances for any value);
 *   - the car page's <title> carries the list's own year, inside the 60
 *     characters the SEO gate allows, and the year is not typed;
 *   - both layouts paint every new answer, because the FAQPage node goes out at
 *     every width and each page's desktop half is display:none on a phone.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const stripComments = (src: string) => src.replace(/\/\/.*$|\/\*[\s\S]*?\*\//gm, "");
const norm = (el: Element | null) => (el?.textContent ?? "").replace(/\s+/g, " ").trim();

function served(el: React.ReactElement): HTMLElement {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  return host;
}

function faqNode(host: HTMLElement) {
  const nodes = [...host.querySelectorAll('script[type="application/ld+json"]')]
    .map((s) => JSON.parse(s.textContent ?? "{}"))
    .filter((j) => j["@type"] === "FAQPage");
  expect(nodes.length, "one FAQPage node").toBe(1);
  return nodes[0].mainEntity.map((m: { name: string; acceptedAnswer: { text: string } }) => ({
    q: m.name,
    a: m.acceptedAnswer.text,
  }));
}

/* ══ /records/cars ═══════════════════════════════════════════════════════ */

// The garage, re-derived from the rows here rather than read off the
// constants carFaqs.ts is built from.
const current = cars.filter((c) => !c.status);
const byValue = [...current].sort((a, b) => b.valueUsd - a.valueUsd);
const usd = (n: number) => `$${(n / 1e6).toFixed(2)}M`;
const total = usd(current.reduce((s, c) => s + c.valueUsd, 0));
const sold = cars.filter((c) => c.status === "sold").length;
const unseen = cars.filter((c) => c.status === "unconfirmed").length;
const top = byValue[0];
const runnerUp = byValue[1];

const carAnswer = (q: string) => carFaqs.find((f) => f.q === q)?.a ?? "";
const HOW_MANY = "How many cars does Burna Boy have?";
const WORTH = "How much is Burna Boy's car collection worth?";
const PRICIEST = "What is Burna Boy's most expensive car?";

/** Every collection size a sentence states, as the updates-log guard reads them. */
const sizesIn = (text: string) =>
  [...text.matchAll(/(\d+)[- ](?:confirmed )?(?:cars?|vehicles?)\b/g)].map((m) => Number(m[1]));
const statesTheSize = (text: string) => sizesIn(text).length > 0 && sizesIn(text).every((n) => n === current.length);
const statesTheValue = (text: string) =>
  [...text.matchAll(/\$[\d.]+ ?(?:M\b|million)/g)].map((m) => m[0]).includes(total);
const pricesTheTopCar = (text: string) => text.includes(usd(top.valueUsd)) && text.includes(top.valueNaira);

// The garage total an update shipped until 12 Sep 2026 (#160), after the
// re-pricing had moved on from it.
const SHIPPED_GARAGE_LINE =
  "Two Mercedes-Maybach GLS 600s: Burna Boy bought a pair — gifting one to his mother and keeping the other for his own garage — with his confirmed collection now at 15 cars worth a reported $16.46M.";
// The /faq answer that priced the Bugatti at its pre-conversion dollar figure
// until 8 Sep 2026 (#207).
const SHIPPED_PRICIEST_ANSWER =
  "Burna Boy's most expensive car is his ₦9 billion one-of-one widebody Bugatti Chiron — a custom build by Dubai's Venuum, unveiled in July 2026 and billed as the world's first widebody Chiron. It is reported as the most expensive car in West Africa (around $6.19 million).";

describe("/records/cars answers the three questions it is searched for", () => {
  it("asks exactly those three, in that order", () => {
    expect(carFaqs.map((f) => f.q)).toEqual([HOW_MANY, WORTH, PRICIEST]);
  });

  it("how many: the current cars, and the ones recorded but not counted", () => {
    const a = carAnswer(HOW_MANY);
    expect(a).toContain(`Burna Boy currently owns ${current.length} confirmed cars.`);
    expect(statesTheSize(a)).toBe(true);
    expect(a.toLowerCase()).toContain(`${cardinalWord(sold + unseen)} more are recorded but not counted`);
    expect(a).toContain(`${cardinalWord(sold)} he has reportedly sold`);
    expect(a).toContain(`${cardinalWord(unseen)} that haven't been seen with him in years`);
    expect(a.split(/(?<=\.)\s/).length, "one or two sentences").toBeLessThanOrEqual(2);
  });

  it("worth: the reported total of the current cars, and the estimate named as one", () => {
    const a = carAnswer(WORTH);
    expect(a).toContain(`worth a reported ${total}+ in total`);
    expect(statesTheValue(a)).toBe(true);
    expect(statesTheSize(a)).toBe(true);
    const estimates = current.filter((c) => c.valueBasis === "estimate");
    expect(estimates.length, "the GLS 600 is priced by the site, not a report").toBeGreaterThan(0);
    for (const c of estimates) expect(a).toContain(`${c.make} ${modelShort(c.model)}'s estimated`);
    // The page's own caveat, in its own word.
    expect(a).toContain("import-inclusive");
    expect(a.split(/(?<=\.)\s/).length, "one or two sentences").toBeLessThanOrEqual(2);
  });

  it("most expensive: the top car by value, at both of its prices, and what it leads", () => {
    // "Most expensive" is a strict claim. If two cars ever share the top value
    // this fails, and the answer needs rewriting rather than naming one.
    expect(runnerUp.valueUsd).toBeLessThan(top.valueUsd);
    const a = carAnswer(PRICIEST);
    expect(a).toContain(`most expensive car is his ${top.make} ${modelShort(top.model)}`);
    expect(pricesTheTopCar(a)).toBe(true);
    expect(a).toContain(`ahead of the ${runnerUp.make} ${modelShort(runnerUp.model)} at ${usd(runnerUp.valueUsd)}`);
    expect(a.split(/(?<=\.)\s/).length, "one or two sentences").toBeLessThanOrEqual(2);
  });

  it("the checks refuse the stale lines the site actually shipped", () => {
    expect(statesTheSize(SHIPPED_GARAGE_LINE)).toBe(false);
    expect(statesTheValue(SHIPPED_GARAGE_LINE)).toBe(false);
    expect(pricesTheTopCar(SHIPPED_PRICIEST_ANSWER)).toBe(false);
  });

  it("types no figure and no car — every one is read from data/cars.ts", () => {
    const src = stripComments(read("app/lib/carFaqs.ts"));
    const typed = (s: string) =>
      /[$₦]\s?\d/.test(s) || /\b\d+\s+(?:confirmed\s+)?cars?\b/.test(s) || cars.some((c) => s.includes(c.make));
    expect(typed(src)).toBe(false);
    // Negative control: the /faq line that shipped a typed price and name.
    expect(typed(SHIPPED_PRICIEST_ANSWER)).toBe(true);
  });
});

describe("/records/cars <title> carries the list's own year", () => {
  // The year of the last full re-verification or the newest addition, read
  // off the rows here.
  const listYear = Math.max(
    ...[CARS_LAST_SWEEP, ...current.filter((c) => c.addedOn).map((c) => c.addedOn!)].map((s) =>
      Number(/\b(\d{4})\b/.exec(s)![1])
    )
  );
  const title = String(carsMetadata.title);
  const hasYear = (t: string) => t.includes(`(${listYear})`);

  it("is the list's year, and a year", () => {
    expect(carsListYear).toBe(listYear);
    expect(listYear).toBeGreaterThanOrEqual(2026);
  });

  it("states the year, the count and the total, inside the SEO gate's 60 characters", () => {
    expect(title).toBe(`Burna Boy's Car Collection (${listYear}) — ${current.length} Cars Worth ${total}+`);
    expect(hasYear(title)).toBe(true);
    expect(title.length).toBeLessThanOrEqual(60);
  });

  it("negative control: the title the page shipped until this change has no year", () => {
    expect(hasYear("Burna Boy's Car Collection — 16 Cars Worth $17.54M+")).toBe(false);
  });

  it("the year is derived, not typed and not the build clock", () => {
    const typedYear = /title: `[^`]*\(20\d\d\)/;
    const src = read("app/records/cars/page.tsx");
    expect(src).not.toMatch(typedYear);
    expect(src).toContain("carsListYear");
    // The line a typed-year version would have shipped.
    expect("  title: `Burna Boy's Car Collection (2026) — ${carCount} Cars Worth ${totalValueFormatted}+`,").toMatch(
      typedYear
    );
    expect(stripComments(read("app/data/cars.ts"))).not.toMatch(/get(?:UTC)?FullYear|new Date\(\)/);
  });

  it("keeps the share title the page already used", () => {
    const og = carsMetadata.openGraph as { title?: unknown } | undefined;
    expect(og?.title).toBe("Burna Boy's Car Collection");
  });
});

describe("/records/cars paints the FAQ on both layouts", () => {
  const host = served(<CarsPage />);

  it("emits the three as FAQPage structured data", () => {
    expect(faqNode(host)).toEqual(carFaqs);
  });

  it("desktop: after the note on this list, before the onward links", () => {
    const desk = host.querySelector(`.${carStyles.desktopOnly}`)!;
    const section = desk.querySelector("section#faq")!;
    expect(section, "no desktop FAQ").toBeTruthy();
    expect(norm(section.querySelector("h2"))).toBe("Common questions");
    const items = [...section.querySelectorAll(`.${carStyles.faqItem}`)];
    expect(items.map((i) => ({ q: norm(i.querySelector("h3")), a: norm(i.querySelector("p")) }))).toEqual(carFaqs);
    const note = desk.querySelector("section#note")!;
    const onward = desk.querySelector(`.${carStyles.actionWrap}`)!;
    expect(note.compareDocumentPosition(section) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(section.compareDocumentPosition(onward) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("phone: inside the deep-page screen, last, open in the served HTML", () => {
    const screen = host.querySelector(`.${deepStyles.screen}`)!;
    const section = screen.querySelector(`.${faqSectionStyles.faq}`)!;
    expect(section, "no phone FAQ").toBeTruthy();
    expect(section.closest(`.${carStyles.desktopOnly}`)).toBeNull();
    expect(norm(section.querySelector("h2"))).toBe("Common questions");
    const items = [...section.querySelectorAll(`.${faqSectionStyles.item}`)];
    expect(items.map((i) => ({ q: norm(i.querySelector("h3")), a: norm(i.querySelector("p")) }))).toEqual(carFaqs);
    expect(section.querySelector("[hidden]")).toBeNull();
    const note = screen.querySelector(`.${carStyles.mNote}`)!;
    expect(note.compareDocumentPosition(section) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});

/* ══ /records/africas-biggest ════════════════════════════════════════════ */

const BIGGEST = "Who is the biggest artist in Africa?";
const BEST_SELLING = "Who is the best-selling African artist of all time?";
const abAnswer = (q: string) => pageFaqs.find((f) => f.q === q)?.a ?? "";
const boardOf = (id: string) => statBoxes.find((b) => b.id === id)!;

/** Rows sharing first place: marked joint, or level with the top on value. */
const topGroup = (entries: { name: string; value?: string; tie?: true }[]) => {
  const group = [entries[0]];
  for (const e of entries.slice(1)) {
    if (e.tie || (e.value !== undefined && e.value === entries[0].value)) group.push(e);
    else break;
  }
  return group;
};

/** A board figure as a number — "15.34M", "1.986B", "158 weeks", "9". */
const amount = (v?: string) => {
  const m = /^(\d+(?:\.\d+)?)\s*([MB])?/.exec(v ?? "");
  return m ? parseFloat(m[1]) * (m[2] === "B" ? 1e9 : m[2] === "M" ? 1e6 : 1) : NaN;
};

describe("/records/africas-biggest answers the two searches it is found by", () => {
  it("leads its FAQ with them, and keeps the five it had", () => {
    expect(pageFaqs.slice(0, 2).map((f) => f.q)).toEqual([BIGGEST, BEST_SELLING]);
    expect(pageFaqs.length).toBe(7);
  });

  describe("best-selling African artist", () => {
    const eas = boardOf("best-selling-african-artist-eas");
    const [first, second] = eas.entries!;
    const a = abAnswer(BEST_SELLING);
    const longDate = new Date(`${EAS_STREAMS_COUNTED_TO}T12:00:00Z`).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    });
    const dayMonth = longDate.replace(/ \d{4}$/, "");
    const printsTheStamp = (source: string) => source.includes(`stamped ${dayMonth}`);

    it("is the board's leader, by a real margin, at the board's figures", () => {
      // A tie would make "the best-selling" a crown the board does not award.
      expect(amount(first.value)).toBeGreaterThan(amount(second.value));
      expect(a).toContain(`${first.name} is the best-selling African artist of all time`);
      expect(a).toContain(`${first.value} to ${second.name}'s ${second.value}`);
      expect(a).toContain("equivalent album sales");
      expect(a).toContain(eas.meta.split(" · ").at(-1)!);
    });

    it("is dated by the day the board's source line prints", () => {
      expect(a).toContain(`counted to ${longDate}`);
      expect(printsTheStamp(eas.source)).toBe(true);
    });

    it("negative control: the source line of the 24 Sep reading carried another stamp", () => {
      const SHIPPED_24_SEP =
        "Burna Boy's and Wizkid's streams are both stamped 22 September, a same-date pair this time; Asake's are stamped 18 September, so his figure trails his real total by a few days of streams.";
      expect(printsTheStamp(SHIPPED_24_SEP)).toBe(false);
    });

    it("says who counts: African by nationality", () => {
      expect(a).toContain("counted by nationality");
    });

    it("page.tsx types none of the board's figures", () => {
      const src = stripComments(read("app/records/africas-biggest/page.tsx"));
      const typesOne = (s: string, values: string[]) => values.some((v) => s.includes(`"${v}"`) || s.includes(` ${v} `));
      expect(typesOne(src, eas.entries!.map((e) => e.value!))).toBe(false);
      // The row the 24 Sep reading shipped, with that reading's figure.
      expect(typesOne(`{ name: "Burna Boy", sub: "🇳🇬 Nigeria", value: "15.28M" }`, ["15.28M"])).toBe(true);
    });
  });

  describe("biggest artist in Africa — by measure, never a crown", () => {
    const a = abAnswer(BIGGEST);
    // The African boards that measure size. The page code says why the others
    // (world boards, Nigerian-only boards, single-release chart peaks) are out.
    const MEASURED = [
      "best-selling-african-artist-eas",
      "monthly-listeners-peak",
      "billboard-global-200-peak",
      "most-hot-100-entries",
      "most-hot-100-weeks",
      "billboard-hot-100-peak",
      "biggest-spotify-debut",
    ];
    const streams = boardOf("most-streamed-african-artist").rows!.find((r) => !r.inProgress)!;
    const leaders = [
      ...MEASURED.map((id) => topGroup(boardOf(id).entries!)),
      topGroup(streams.entries),
    ];
    const leaderNames = [...new Set(leaders.flat().map((e) => e.name))];
    const namesEveryLeader = (text: string) => leaderNames.every((n) => text.includes(n));

    it("says there is no single measure, before any name", () => {
      expect(a.startsWith("“Biggest” has no single measure")).toBe(true);
    });

    it("names every leader of every measure, with the board's own figure", () => {
      expect(namesEveryLeader(a)).toBe(true);
      for (const id of MEASURED) {
        const v = boardOf(id).entries![0].value!;
        expect(a, id).toContain(`(${v})`);
      }
      expect(a).toContain(`Spotify streams in ${streams.label} (${streams.entries[0].value})`);
    });

    it("counts the boards he does not lead — somebody else leads at least one", () => {
      expect(leaderNames.filter((n) => n !== HIGHLIGHT).length).toBeGreaterThan(0);
    });

    it("calls the Hot 100 peak joint: two No. 1s, one of them not first in the list", () => {
      const hot = boardOf("billboard-hot-100-peak").entries!;
      const joint = hot.filter((e) => e.value === hot[0].value).map((e) => e.name);
      expect(joint.length, "the premise: more than one African Hot 100 No. 1").toBeGreaterThan(1);
      expect(a).toContain(`${joint.join(" and ")} share the highest Billboard Hot 100 peak (${hot[0].value})`);
    });

    it("leaves the world boards' leaders out — they are not African artists", () => {
      for (const id of ["youtube-audience-world", "fastest-to-a-billion-youtube"]) {
        expect(a, id).not.toContain(boardOf(id).entries![0].name);
      }
    });

    it("negative control: the /faq answer to the same question names one artist and says yes", () => {
      const live = siteFaqs.find((f) => f.q === "Is Burna Boy the biggest African artist?")!.a;
      expect(live.startsWith("By several measures, yes.")).toBe(true);
      expect(namesEveryLeader(live)).toBe(false);
    });

    it("page.tsx types none of the figures it quotes", () => {
      const src = stripComments(read("app/records/africas-biggest/page.tsx"));
      const quoted = [...MEASURED.map((id) => boardOf(id).entries![0].value!), streams.entries[0].value!].filter(
        (v) => /^\d+(?:\.\d+)?[MB]$/.test(v)
      );
      expect(quoted.length).toBeGreaterThan(0);
      for (const v of quoted) expect(src, v).not.toContain(v);
    });
  });
});

describe("/records/africas-biggest paints the new questions on both layouts", () => {
  const host = served(<AfricasBiggestPage />);
  const pairs = (root: Element, item: string) =>
    [...root.querySelectorAll(`.${item}`)].map((i) => ({ q: norm(i.querySelector("h3")), a: norm(i.querySelector("p")) }));

  it("in the FAQPage node", () => {
    expect(faqNode(host)).toEqual(pageFaqs);
  });

  it("desktop: the Common questions section", () => {
    const section = host.querySelector(`.${abStyles.desktopOnly} section#faq`)!;
    expect(pairs(section, abStyles.faqItem)).toEqual(pageFaqs);
  });

  it("phone: the screen's FAQ section, opening on the biggest-artist answer", () => {
    const section = host.querySelector(`.${mabStyles.screen} .${faqSectionStyles.faq}`)!;
    expect(section.closest(`.${abStyles.desktopOnly}`)).toBeNull();
    const shown = pairs(section, faqSectionStyles.item);
    expect(shown).toEqual(pageFaqs);
    expect(shown[0].q).toBe(BIGGEST);
  });
});
