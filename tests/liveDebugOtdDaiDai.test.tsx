import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/dai-dai",
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
import { keepSeparators, onThisDayFor, type OnThisDayPick } from "../app/lib/onThisDay";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import { numberOneCountries } from "../app/components/DaiDaiFigures";
import { countryName, plaqueX } from "../app/components/DaiDaiRecord";
import { plaqueSentence, issueList, listJoin } from "../app/components/daiDaiStoryFacts";
import { weeksAtPeak } from "../app/data/charts";
import { DAI_DAI_GLOBAL_EXCL_US_NO1 } from "../app/data/daiDai";

/**
 * The live debug of 27 Sep 2026: On This Day's home card and the Dai Dai page,
 * measured on burnaboystats.com at the widths and themes named in each block.
 * Layout needs a browser, so the CSS checks read the rules the way the cascade
 * will — rule, media block and order. Each negative control is the rule, line
 * or markup that shipped.
 */

type Rule = { media: string | null; selector: string; body: string };

/** Top-level rules and rules one @media deep, comments stripped. */
function rules(css: string): Rule[] {
  const src = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const out: Rule[] = [];
  const walk = (text: string, media: string | null) => {
    let i = 0;
    while (i < text.length) {
      const open = text.indexOf("{", i);
      if (open < 0) break;
      const head = text.slice(i, open).trim();
      let depth = 1;
      let j = open + 1;
      while (j < text.length && depth > 0) {
        if (text[j] === "{") depth++;
        else if (text[j] === "}") depth--;
        j++;
      }
      const body = text.slice(open + 1, j - 1);
      if (head.startsWith("@media")) walk(body, head);
      else out.push({ media, selector: head, body });
      i = j;
    }
  };
  walk(src, null);
  return out;
}

const read = (p: string) => readFileSync(p, "utf8");
const decl = (body: string, prop: string) => body.match(new RegExp(`(?:^|;|\\s)${prop}\\s*:\\s*([^;]+)`))?.[1].trim();

/** The winning value of `prop` for exactly `selector` at `width`: last in source order. */
function valueAt(css: string, selector: string, prop: string, width: number): string | undefined {
  let win: string | undefined;
  for (const r of rules(css)) {
    if (r.media !== null) {
      const m = r.media.match(/^@media \(max-width: (\d+)px\)$/);
      if (!m || Number(m[1]) < width) continue;
    }
    if (!r.selector.split(",").map((s) => s.trim()).includes(selector)) continue;
    const v = decl(r.body, prop);
    if (v !== undefined) win = v;
  }
  return win;
}
const px = (v: string | undefined) => parseFloat(v ?? "NaN");

const html = (el: React.ReactElement) => {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  return host;
};

// ── otd-1 ──────────────────────────────────────────────────────────────────

describe("otd-1: the home kicker never strands a figure from its word", () => {
  // Live, 26 Sep 2026 ~22:35 UTC: "On this day · coming up in 11 days · 7" /
  // "October" at 1440, 1240, 390 and 360; "… coming up in 11" / "days · 7
  // October" at 1024. keepSeparators bound only the " · " joins.
  const stranded = (s: string) => /\d (?=[A-Z]|days?\b)/.test(s);
  const kicker = (host: HTMLElement) => [...host.querySelectorAll("p")].find((p) => p.textContent!.startsWith("On this day"))!.textContent!;

  const coming = (() => {
    for (let t = Date.UTC(2026, 8, 26); t < Date.UTC(2027, 8, 26); t += 86_400_000) {
      const pick = onThisDayFor(new Date(t + 12 * 3_600_000));
      if (pick?.mode === "coming" && pick.ahead >= 2) return pick;
    }
    throw new Error("no coming-up date with two or more days to go");
  })();
  const today = (() => {
    for (let t = Date.UTC(2027, 0, 1); ; t += 86_400_000) {
      const pick = onThisDayFor(new Date(t + 12 * 3_600_000));
      if (pick?.mode === "today") return pick;
    }
  })() as OnThisDayPick;

  it.each([
    ["coming up", coming],
    ["today", today],
  ])("%s: both layouts bind the day to its month and the count to 'days'", (_, pick) => {
    for (const host of [html(<OnThisDayBand pick={pick} />), html(<MobileOnThisDayCard pick={pick} />)]) {
      const k = kicker(host);
      expect(k).toContain(pick.day.label.replace(" ", " "));
      expect(stranded(k), JSON.stringify(k)).toBe(false);
    }
  });

  it("negative control: the shipped kicker leaves both breaks open", () => {
    const shipped = `On this day · ${keepSeparators("coming up in 11 days · 7 October")}`;
    expect(stranded(shipped)).toBe(true);
    expect(shipped).toContain("7 October");
    expect(shipped).toContain("11 days");
  });
});

// ── otd-4 ──────────────────────────────────────────────────────────────────

describe("otd-4: at 320 the phone calendar's month jumps are 44 wide", () => {
  // Live at 320: the column is 284px, and six jumps at 6px apart were 42.3.
  const jumpWidth = (css: string, width: number) => {
    const inner = width - 2 * 18;
    const gap = px(valueAt(css, ".monthJumps", "gap", width));
    return (inner - 5 * gap) / 6;
  };
  const CSS = read("app/components/mobileOnThisDay.module.css");

  it("every phone width from 320 to 430", () => {
    for (let w = 320; w <= 430; w++) expect(jumpWidth(CSS, w), `${w}px`).toBeGreaterThanOrEqual(44);
  });
  it("and 360 up keep the drawn 6px", () => {
    expect(valueAt(CSS, ".monthJumps", "gap", 360)).toBe("6px");
  });
  it("negative control: the shipped rule", () => {
    const shipped = `.monthJumps {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 6px;\n}`;
    expect(jumpWidth(shipped, 320)).toBeCloseTo(42.33, 2);
  });
});

// ── daidai-en-2 ────────────────────────────────────────────────────────────

describe("daidai-en-2: the phone replay's map fills its column", () => {
  // Live at 390: the Europe view's map column was 347.1 wide against a 354
  // tray; after World it was 354 — the toggle and the map changed width.
  const CSS = read("app/components/DaiDaiReplay.module.css");
  it("the phone body stretches its children", () => {
    expect(valueAt(CSS, ".body", "display", 390)).toBe("flex");
    expect(valueAt(CSS, ".body", "align-items", 390)).toBe("stretch");
  });
  it("negative control: the shipped phone body inherited the grid's start", () => {
    const shipped = `.body {\n  display: grid;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .body {\n    display: flex;\n    flex-direction: column;\n  }\n}`;
    expect(valueAt(shipped, ".body", "align-items", 390)).toBe("start");
  });
});

// ── daidai-en-3 ────────────────────────────────────────────────────────────

describe("daidai-en-3: the Singapore label is never set under 11px", () => {
  // Rendered size = font-size × the world map's screen scale. The smallest
  // desktop scale measured live is 0.786, at 1240; a 15px scrollbar takes it
  // to about 0.775. On the phone's World view it is about 0.38.
  const MIN_DESKTOP_SCALE = 0.775;
  const CSS = read("app/components/DaiDaiReplay.module.css");
  it("desktop and tablet: at least 11px at the smallest scale", () => {
    expect(px(valueAt(CSS, ".sgLabel", "font-size", 1240)) * MIN_DESKTOP_SCALE).toBeGreaterThanOrEqual(11);
  });
  it("phone: not drawn at all", () => {
    expect(valueAt(CSS, ".sgLabel", "display", 390)).toBe("none");
    expect(valueAt(CSS, ".sgLabel", "display", 1240)).toBeUndefined();
  });
  it("negative control: the shipped 13px printed 10.1px", () => {
    expect(13 * MIN_DESKTOP_SCALE).toBeLessThan(11);
  });
});

// ── daidai-en-4 / daidai-es-site-2 ─────────────────────────────────────────

describe("daidai-en-4: the phone EN/ES switch's options are 44 × 44", () => {
  // Live at 320–430: EN 41.7×42 and ES 42.7×42 inside an 86.3×44 group with a
  // 1px edge.
  const CSS = read("app/dai-dai/dai-dai.module.css");
  const inside = (css: string) => px(valueAt(css, ".lang", "height", 390)) - 2 * px(decl(rules(css).find((r) => r.selector === ".lang")!.body, "border"));
  it("each option is 44 tall inside the edge, and 44 wide at least", () => {
    expect(inside(CSS)).toBeGreaterThanOrEqual(44);
    expect(px(valueAt(CSS, ".langItem", "min-width", 390))).toBeGreaterThanOrEqual(44);
    expect(valueAt(CSS, ".langItem", "justify-content", 390)).toBe("center");
  });
  it("the desktop pill keeps its drawn 36px", () => {
    expect(valueAt(CSS, ".lang", "height", 1440)).toBe("36px");
  });
  it("negative control: the shipped phone switch", () => {
    const shipped = `.lang {\n  display: inline-flex;\n  height: 36px;\n  border: 1px solid var(--btn-edge);\n}\n@media (max-width: 900px) {\n  .lang { flex: none; height: 44px; }\n  .langItem { padding: 0 13px; }\n}`;
    expect(inside(shipped)).toBe(42);
    expect(valueAt(shipped, ".langItem", "min-width", 390)).toBeUndefined();
  });
});

// ── daidai-es-site-1 ───────────────────────────────────────────────────────

describe("daidai-es-site-1: chapter 03 names its countries in the edition's language", () => {
  /** Chapter 03's cells: the list with one titled cell per No. 1 country. */
  const cells = (host: HTMLElement) => {
    const list = [...host.querySelectorAll("ul")].find(
      (ul) => ul.children.length === numberOneCountries.length && [...ul.children].every((li) => li.hasAttribute("title")),
    );
    expect(list, "chapter 03's list was not found").toBeTruthy();
    return [...list!.children].map((li) => ({
      code: li.querySelector('[aria-hidden="true"]:nth-child(2)')!.textContent!,
      title: li.getAttribute("title")!,
      said: li.querySelector(".visuallyHidden")!.textContent!,
    }));
  };

  it.each([
    ["en", DaiDaiPage],
    ["es", DaiDaiPageES],
  ] as const)("%s: every tooltip and screen-reader name is the edition's own", (lang, Page) => {
    const got = cells(html(<Page />));
    expect(got.map((c) => c.code)).toEqual(numberOneCountries.map((c) => c.code));
    for (const c of got) {
      expect(c.title, c.code).toBe(countryName(c.code, lang));
      expect(c.said, c.code).toBe(countryName(c.code, lang));
    }
  });

  it("negative control: the shipped English names differ from the Spanish on most cells", () => {
    // Shipped on /dai-dai/es: title="Switzerland", "Germany", "Netherlands"…
    const differ = numberOneCountries.filter((c) => countryName(c.code, "en") !== countryName(c.code, "es"));
    expect(differ.length).toBeGreaterThanOrEqual(18);
    expect(countryName("CH", "es")).not.toBe("Switzerland");
  });
});

// ── daidai-en-5 ────────────────────────────────────────────────────────────

describe("daidai-en-5: the story's sentences read the figures they state", () => {
  const STORY = read("app/components/DaiDaiStory.tsx");
  const ES = read("app/dai-dai/es/page.tsx");
  const enSteps = STORY.slice(STORY.indexOf("function buildSteps"), STORY.indexOf("\n}\n", STORY.indexOf("function buildSteps")));
  const esSteps = ES.slice(ES.indexOf("const steps: Step[] = ["), ES.indexOf("\n  ];", ES.indexOf("const steps: Step[] = [")));

  const MONTH = "(?:January|February|March|April|May|June|July|August|September|October|November|December)";
  const MES = "(?:enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)";
  /** A date, a multiple or a counted run typed into a sentence. */
  const typed = (src: string) =>
    [
      ...src.matchAll(new RegExp(`\\b\\d{1,2} ${MONTH}\\b|\\b\\d{1,2} de ${MES}\\b|\\b\\d+× |\\b(?:doble|séxtuple) platino|\\b(?:four|three|cuatro|tres) (?:straight weeks|semanas)`, "g")),
    ].map((m) => m[0]);

  it("neither edition's steps type a date, a multiple or a run", () => {
    expect(enSteps.length).toBeGreaterThan(1000);
    expect(esSteps.length).toBeGreaterThan(1000);
    expect(typed(enSteps)).toEqual([]);
    expect(typed(esSteps)).toEqual([]);
  });

  it("negative control: the lines that shipped", () => {
    expect(typed(`kicker: "15 May 2026",`)).toEqual(["15 May"]);
    expect(typed("After four straight weeks it slipped to No. 3")).toEqual(["four straight weeks"]);
    expect(typed("Diamond in France, 2× Platinum in Canada, 6× Platinum (Latin) in the US")).toEqual(["2× ", "6× "]);
    expect(typed(`kicker: "Historia · 19 de julio",`)).toEqual(["19 de julio"]);
    expect(typed("diamante en Francia, doble platino en Canadá")).toEqual(["doble platino"]);
  });

  /** A chapter's sentence, as the page prints it. */
  const body = (host: HTMLElement, n: number) =>
    host.querySelectorAll("[data-dd-kicker]")[n - 1].parentElement!.querySelector("p")!.textContent!;
  const kick = (host: HTMLElement, n: number) => host.querySelectorAll("[data-dd-kicker]")[n - 1].textContent!;

  it("English: what the chapters say, read from the run, the plaques and the dates", () => {
    const d = html(<DaiDaiPage />);
    expect(kick(d, 1)).toContain("15 May 2026");
    expect(kick(d, 7)).toContain("History made · 19 July");
    expect(body(d, 7)).toContain("at MetLife Stadium on 19 July —");
    // The Global 200 run is final (charts.ts: "the run closed at seven").
    expect(body(d, 2)).toContain(
      "After four straight weeks it slipped to No. 3, then took the chart back for three weeks — the issues of 22 and 29 August and 5 September — seven weeks at No. 1 in all. On the Global 200 Excl. US it ran ten straight weeks at No. 1, 4 July to 5 September.",
    );
    expect(body(d, 5)).toContain(`The song earned its own plaques — ${plaqueSentence("en")}.`);
    expect(plaqueSentence("en")).toContain(`${plaqueX("CA")}× Platinum in Canada, Spain and Portugal, ${plaqueX("US")}× Platinum (Latin) in the US`);
    expect(plaqueSentence("en")).toMatch(/^Diamond in France, .*, and Gold in .* and the UK$/);
  });

  it("Spanish: the same facts, in its own words", () => {
    const d = html(<DaiDaiPageES />);
    expect(kick(d, 1)).toContain("15 de mayo de 2026");
    expect(kick(d, 7)).toContain("Historia · 19 de julio");
    expect(body(d, 7)).toContain("en el MetLife Stadium, el 19 de julio —");
    expect(body(d, 2)).toContain(
      "Tras cuatro semanas consecutivas bajó al N.º 3, y el 22 de agosto recuperó la cima por tres semanas —las listas del 22 y el 29 de agosto y del 5 de septiembre—: siete semanas en el número 1 en total. En el Global 200 Excl. US encadenó diez semanas seguidas en el número 1, del 4 de julio al 5 de septiembre.",
    );
    expect(body(d, 5)).toContain(`La canción ganó sus propias certificaciones: ${plaqueSentence("es")}.`);
    expect(plaqueSentence("es")).toMatch(/^diamante en Francia, doble platino en Canadá, España y Portugal, séxtuple platino \(latino\) en Estados Unidos, .*, y oro en .* y el Reino Unido$/);
  });

  it("the Excl. US span is as long as the entry's weeks at No. 1", () => {
    const [from, to] = DAI_DAI_GLOBAL_EXCL_US_NO1;
    expect((Date.parse(to) - Date.parse(from)) / (7 * 86_400_000) + 1).toBe(weeksAtPeak("Dai Dai", "GLBX"));
  });

  it("the helpers join and group as the page wrote them", () => {
    expect(issueList(["2026-08-22", "2026-08-29", "2026-09-05"], "en")).toBe("22 and 29 August and 5 September");
    expect(issueList(["2026-08-22", "2026-08-29", "2026-09-05"], "es")).toBe("del 22 y el 29 de agosto y del 5 de septiembre");
    expect(listJoin(["Grecia", "Italia"], "es")).toBe("Grecia e Italia");
    expect(listJoin(["Bélgica", "Alemania"], "es")).toBe("Bélgica y Alemania");
  });
});
