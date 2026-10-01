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
import AfricasBiggestPage, {
  pageFaqs,
  BIGGEST_MEASURED_IDS,
  BIGGEST_LEFT_OUT,
} from "../app/records/africas-biggest/page";
import { carFaqs } from "../app/lib/carFaqs";
import { cars, CARS_LAST_SWEEP, carsListYear } from "../app/data/cars";
import { statBoxes, EAS_STREAMS_COUNTED_TO, HIGHLIGHT, spotifyLeadStreams, streamsShort } from "../app/data/africasBiggest";
import { hot100Artists } from "../app/data/hot100Weeks";
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
    // The ranked boards the answer reads, from the page itself; the year board
    // (most-streamed) is checked on its own below.
    const MEASURED = BIGGEST_MEASURED_IDS.filter((id) => boardOf(id).layout === "list");
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

    // Every act with a No. 1 among Billboard's own rows — read off the rows,
    // not off the board the answer is built from.
    const hot100No1Acts = hot100Artists.filter((x) => x.songs.some((s) => s.peak === 1)).map((x) => x.name);
    const namesEveryNo1 = (text: string) => hot100No1Acts.every((n) => text.includes(n));
    const andList = (xs: string[]) => (xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs.at(-1)}`);

    it("calls the Hot 100 peak joint, naming every African No. 1", () => {
      const hot = boardOf("billboard-hot-100-peak").entries!;
      const joint = hot.filter((e) => e.value === hot[0].value).map((e) => e.name);
      expect(joint.length, "the premise: more than one African Hot 100 No. 1").toBeGreaterThan(1);
      expect([...joint].sort()).toEqual([...hot100No1Acts].sort());
      expect(a).toContain(`${andList(joint)} share the highest Billboard Hot 100 peak (${hot[0].value})`);
      expect(namesEveryNo1(a)).toBe(true);
    });

    it("negative control: the clause this answer carried before Hugh Masekela was on the board", () => {
      // Built from the board as it was typed then (tests/topSearchFaqs.test.tsx
      // at d0c35182 asserted exactly this line).
      const SHIPPED = "Wizkid and Tems share the highest Billboard Hot 100 peak (No. 1)";
      expect(hot100No1Acts).toContain("Hugh Masekela");
      expect(namesEveryNo1(SHIPPED)).toBe(false);
    });

    it("sorts every board on the page: measured, or left out with a reason", () => {
      const ids = statBoxes.map((b) => b.id);
      const unaccounted = ids.filter((id) => !BIGGEST_MEASURED_IDS.includes(id) && !(id in BIGGEST_LEFT_OUT));
      expect(unaccounted, "a board the answer neither reads nor says why it skips").toEqual([]);
      expect(BIGGEST_MEASURED_IDS.filter((id) => id in BIGGEST_LEFT_OUT), "measured AND left out").toEqual([]);
      const stale = [...BIGGEST_MEASURED_IDS, ...Object.keys(BIGGEST_LEFT_OUT)].filter((id) => !ids.includes(id));
      expect(stale, "names a board the page no longer has").toEqual([]);
      for (const [id, why] of Object.entries(BIGGEST_LEFT_OUT)) expect(why.length, id).toBeGreaterThan(20);
    });

    it("negative control: the set this answer shipped with left three boards in neither list", () => {
      // The measure ids as d0c35182 shipped them, against today's left-out list.
      const SHIPPED = [
        "best-selling-african-artist-eas",
        "monthly-listeners-peak",
        "billboard-global-200-peak",
        "most-hot-100-entries",
        "most-hot-100-weeks",
        "billboard-hot-100-peak",
        "biggest-spotify-debut",
        "most-streamed-african-artist",
      ];
      const unaccounted = statBoxes
        .map((b) => b.id)
        .filter((id) => !SHIPPED.includes(id) && !(id in BIGGEST_LEFT_OUT));
      expect(unaccounted).toEqual(["most-200m-stream-songs", "most-followed-spotify", "youtube-music-audience-peak"]);
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

describe("/records/africas-biggest names every African Hot 100 No. 1", () => {
  // Hugh Masekela topped the chart as the lead act in 1968; the answer and the
  // peak board named only Wizkid and Tems until 30 Sep 2026. Read here off
  // Billboard's rows in data/hot100Weeks.ts, not off the board or the helpers
  // the answer is built from.
  const Q = "Which African artists have reached No. 1 on the Billboard Hot 100?";
  const a = abAnswer(Q);
  const no1s = hot100Artists
    .flatMap((x) => x.songs.filter((s) => s.peak === 1).map((s) => ({ name: x.name, song: s })))
    .sort((x, y) => (x.song.peakDate ?? "").localeCompare(y.song.peakDate ?? ""));
  const namesEvery = (text: string) => no1s.every((n) => text.includes(n.name));

  it("names each one with the song and the year it got there", () => {
    expect(no1s.length, "the premise: more than one").toBeGreaterThan(1);
    expect(namesEvery(a)).toBe(true);
    for (const n of no1s) {
      expect(a, n.name).toContain(`“${n.song.title}” (${n.song.peakDate!.slice(0, 4)})`);
    }
  });

  it("says who was first, and that only the first did it as the lead act", () => {
    const [first, ...rest] = no1s;
    expect(first.song.credit, "the premise: the first No. 1 is a lead credit").toBe(first.name);
    for (const n of rest) expect(n.song.credit, n.name).toMatch(/ Featuring /);
    expect(a).toContain(`${first.name} was the first, and the only one as the lead act`);
  });

  it("negative control: the answer the site shipped leaves Hugh Masekela out", () => {
    const SHIPPED =
      "Wizkid (“One Dance” with Drake) and Tems (“Wait for U” with Future and Drake) have both topped the Billboard Hot 100 through featured credits. The highest Hot 100 peak for a lead African act is Rema's “Calm Down” at No. 3, ahead of Tyla's “Water” (No. 7) and Burna Boy's “Dai Dai” with Shakira (No. 17). Burna Boy's best featured placing is higher still — “WGFT” with Gunna at No. 16.";
    expect(namesEvery(SHIPPED)).toBe(false);
  });

  it("page.tsx types no name, title or year of it", () => {
    const src = stripComments(read("app/records/africas-biggest/page.tsx"));
    const faq = src.slice(src.indexOf("const hot100No1Answer"), src.indexOf("})();", src.indexOf("const hot100No1Answer")));
    expect(faq.length).toBeGreaterThan(0);
    for (const n of no1s) {
      expect(faq, n.name).not.toContain(n.name);
      expect(faq, n.song.title).not.toContain(n.song.title);
      expect(faq, n.song.peakDate).not.toContain(n.song.peakDate!.slice(0, 4));
    }
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


describe("the most-streamed answer leads with lead credits (Paul, 30 Sep 2026)", () => {
  const faq = pageFaqs.find((f) => f.q === "Who is the most-streamed African artist on Spotify?")!;
  const ranked = [...spotifyLeadStreams].sort((a, b) => b.lead - a.lead);

  it("names the lead-credit leader and the next two, with their figures, from the reading", () => {
    expect(faq, "the question is still on the page").toBeTruthy();
    expect(ranked[0].lead, "a tie at the top needs a rewrite, not a crown").toBeGreaterThan(ranked[1].lead);
    expect(faq.a).toContain(`it is ${ranked[0].name}: ${streamsShort(ranked[0].lead)} Spotify streams as a lead artist`);
    expect(faq.a).toContain(`${ranked[1].name} (${streamsShort(ranked[1].lead)})`);
    expect(faq.a).toContain(`${ranked[2].name} (${streamsShort(ranked[2].lead)})`);
  });

  it("says why a bigger overall total is not a bigger lead total, only while that is true", () => {
    const overall = [...spotifyLeadStreams].sort((a, b) => b.lead + b.feat - (a.lead + a.feat))[0];
    if (overall.name !== ranked[0].name)
      expect(faq.a).toContain(`${overall.name}'s overall Spotify total is higher, because ${streamsShort(overall.feat)} of it comes from songs where ${overall.name} is the featured artist.`);
    else expect(faq.a).not.toContain("overall Spotify total is higher");
  });

  it("no figure in the answer is typed", () => {
    const src = readFileSync(join(process.cwd(), "app/records/africas-biggest/page.tsx"), "utf8");
    const body = src.slice(src.indexOf("const leadStreamsAnswer"), src.indexOf("const biggestAnswer"));
    expect(/\d\.\d+B/.test(body), "a typed streams figure").toBe(false);
    // Negative control: the answer this replaced, verbatim, led with yearly totals and no lead count.
    const SHIPPED = "Burna Boy was the most-streamed African artist globally in both 2024 and 2025, and holds the highest Spotify monthly-listener peak of any African artist. Tems, Wizkid, Tyla and Asake also rank among the most-streamed African artists each year.";
    expect(SHIPPED.includes("as a lead artist")).toBe(false);
    expect(faq.a).not.toBe(SHIPPED);
  });

  it("the biggest-artist answer credits the lead-credit leader first among that artist's measures", () => {
    const big = pageFaqs.find((f) => f.q === "Who is the biggest artist in Africa?")!;
    expect(big.a).toContain(`${ranked[0].name} leads on Spotify streams as a lead artist (${streamsShort(ranked[0].lead)})`);
    expect(BIGGEST_MEASURED_IDS, "an off-board measure is not a board the answer reads").not.toContain("spotify-lead-streams");
  });
});
