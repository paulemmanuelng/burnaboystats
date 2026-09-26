import { render, fireEvent } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { join } from "node:path";

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

import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import DaiDaiVideoPoster from "../app/components/DaiDaiVideoPoster";
import {
  FigureGlobalRun,
  FigureNumberOnes,
  FigurePlaques,
  FigureSpotifySpells,
  EN_FIGURE_LABELS,
  globalNo1Spells,
  numberOneCountries,
  plaqueGroups,
} from "../app/components/DaiDaiFigures";
import { allChartItems, daiDaiNumberOnes, weeksAtPeak, weeksOnChart } from "../app/data/charts";
import { allItems, daiDaiCertCount } from "../app/data/certifications";
import {
  DAI_DAI_GLOBAL_200_RUN,
  DAI_DAI_SPOTIFY_NO1_SPELLS,
  DAI_DAI_SPOTIFY_NO1_DAYS,
  DAI_DAI_SPOTIFY_NO1_FIRST_DAY,
  DAI_DAI_SPOTIFY_NO1_LAST_DAY,
  DAI_DAI_HALFTIME_VIDEO_ID,
} from "../app/data/daiDai";

/**
 * The Dai Dai story as redesigned on 26 Sep 2026: seven chapters, each with its
 * own figure, every figure read from data.
 *
 * The design file's numbers were placeholders (its Global 200 weeks were
 * "sample frames"), so what is asserted here is that each figure agrees with
 * the entry it draws from — the same entries the prose, the cards and the FAQ
 * read — and that nothing a reader cannot verify gets drawn.
 */

const read = (p: string) => readFileSync(join(process.cwd(), p), "utf8");
const html = (el: React.ReactElement) => {
  const host = document.createElement("div");
  host.innerHTML = renderToStaticMarkup(el);
  return host;
};
const DAY = 86_400_000;
const t = (iso: string) => Date.parse(`${iso}T00:00:00Z`);

describe("chapter 02: the Global 200 run is the chart entry, week by week", () => {
  const glb = allChartItems.find((r) => r.title === "Dai Dai")!.entries.find((e) => e.c === "GLB")!;

  it("has one cell per week on the chart, a week apart", () => {
    expect(DAI_DAI_GLOBAL_200_RUN.length).toBe(weeksOnChart("Dai Dai", "GLB"));
    DAI_DAI_GLOBAL_200_RUN.slice(1).forEach((w, i) => {
      expect(t(w.issue) - t(DAI_DAI_GLOBAL_200_RUN[i].issue), `${w.issue} is not a week after the issue before it`).toBe(7 * DAY);
    });
  });

  it("counts the entry's weeks at No. 1, and bottoms out at its peak", () => {
    expect(DAI_DAI_GLOBAL_200_RUN.filter((w) => w.pos === 1).length).toBe(weeksAtPeak("Dai Dai", "GLB"));
    const read = DAI_DAI_GLOBAL_200_RUN.flatMap((w) => (w.pos == null ? [] : [w.pos]));
    expect(Math.min(...read)).toBe(glb.peak);
  });

  it("hatches every unread week and never gives it a neighbour's bar", () => {
    const d = html(<FigureGlobalRun t={EN_FIGURE_LABELS} />);
    const cells = [...d.querySelectorAll("li")];
    expect(cells.length).toBe(DAI_DAI_GLOBAL_200_RUN.length);
    DAI_DAI_GLOBAL_200_RUN.forEach((w, i) => {
      const bar = cells[i].querySelector('[class*="bar"][class*="barUnread"], [style*="height"]');
      if (w.pos == null) {
        expect(cells[i].querySelector('[style*="height"]'), `week ${i + 1} is unread but drew a sized bar`).toBeNull();
        expect(cells[i].textContent).toContain("no reading held");
      } else {
        expect(bar, `week ${i + 1} was read but drew no bar`).not.toBeNull();
        expect(cells[i].textContent).toContain(`No. ${w.pos}`);
      }
    });
  });

  it("says the run's shape from the run, and the Excl. US weeks from charts.ts", () => {
    const spells = globalNo1Spells();
    expect(spells.reduce((n, s) => n + s.length, 0)).toBe(weeksAtPeak("Dai Dai", "GLB"));
    const text = html(<FigureGlobalRun t={EN_FIGURE_LABELS} />).textContent ?? "";
    expect(text).toContain(`${spells[0].length} straight`);
    expect(text).toContain(`then ${spells[1].length} more`);
    expect(text).toContain(`And ${weeksAtPeak("Dai Dai", "GLBX")} straight weeks at No. 1 on the Global 200 Excl. US`);
  });
});

describe("chapter 03: the No. 1 cells are charts.ts's No. 1 countries", () => {
  it("draws one cell per No. 1 country, no global chart among them", () => {
    const expected = allChartItems
      .find((r) => r.title === "Dai Dai")!
      .entries.filter((e) => e.peak === 1 && e.c !== "GLB" && e.c !== "GLBX")
      .map((e) => e.c)
      .sort();
    expect(numberOneCountries.map((c) => c.code).sort()).toEqual(expected);
    expect(numberOneCountries.length).toBe(daiDaiNumberOnes);
    const d = html(<FigureNumberOnes t={EN_FIGURE_LABELS} />);
    expect(d.querySelectorAll("li").length).toBe(daiDaiNumberOnes);
    expect(d.textContent).toContain(String(daiDaiNumberOnes));
  });
});

describe("chapter 04: the six spells are the 37 days", () => {
  const len = ([a, b]: readonly [string, string]) => (t(b) - t(a)) / DAY + 1;

  it("add up to the days-at-No. 1 constant, between its first and last days", () => {
    expect(DAI_DAI_SPOTIFY_NO1_SPELLS.reduce((n, s) => n + len(s), 0)).toBe(DAI_DAI_SPOTIFY_NO1_DAYS);
    expect(DAI_DAI_SPOTIFY_NO1_SPELLS[0][0]).toBe(DAI_DAI_SPOTIFY_NO1_FIRST_DAY);
    expect(DAI_DAI_SPOTIFY_NO1_SPELLS.at(-1)![1]).toBe(DAI_DAI_SPOTIFY_NO1_LAST_DAY);
  });

  it("are in order, never overlap and never touch (a touching pair is one spell)", () => {
    DAI_DAI_SPOTIFY_NO1_SPELLS.forEach(([a, b], i) => {
      expect(t(b) >= t(a)).toBe(true);
      if (i > 0) expect(t(a) - t(DAI_DAI_SPOTIFY_NO1_SPELLS[i - 1][1]), `spell ${i + 1} touches the one before`).toBeGreaterThan(DAY);
    });
  });

  it("lights exactly those days on the strip", () => {
    const d = html(<FigureSpotifySpells t={EN_FIGURE_LABELS} />);
    const strip = d.querySelector('[role="img"]')!;
    const days = [...strip.children];
    expect(days.length).toBe((t(DAI_DAI_SPOTIFY_NO1_LAST_DAY) - t(DAI_DAI_SPOTIFY_NO1_FIRST_DAY)) / DAY + 1);
    expect(days.filter((el) => /dayOn/.test(el.className)).length).toBe(DAI_DAI_SPOTIFY_NO1_DAYS);
    expect(d.textContent).toContain(`${DAI_DAI_SPOTIFY_NO1_DAYS}`);
    expect(d.textContent).toContain("six spells");
  });
});

describe("chapter 05: the plaque wall is the certification list", () => {
  it("names every plaque once, in its own tier, the Latin programme apart", () => {
    const certs = allItems.find((r) => r.title === "Dai Dai")!.certs;
    const groups = plaqueGroups();
    expect(groups.flatMap((g) => g.codes).sort()).toEqual(certs.map((c) => c.c).sort());
    expect(groups.reduce((n, g) => n + g.codes.length, 0)).toBe(daiDaiCertCount);
    const latin = groups.filter((g) => g.programme);
    expect(latin.every((g) => g.codes.every((c) => certs.find((x) => x.c === c)?.body === g.programme))).toBe(true);
    const d = html(<FigurePlaques t={EN_FIGURE_LABELS} />);
    expect(d.querySelectorAll("dt").length).toBe(groups.length);
    expect(d.textContent).toContain(String(daiDaiCertCount));
  });
});

describe("chapter 07: the halftime video is a poster until a tap", () => {
  it("ships no player — no iframe, no youtube-nocookie request — in the served page", () => {
    for (const Page of [DaiDaiPage, DaiDaiPageES]) {
      const served = renderToStaticMarkup(<Page />);
      expect(served).not.toContain("<iframe");
      expect(served).not.toContain("youtube-nocookie");
      expect(served).toContain(`i.ytimg.com/vi/${DAI_DAI_HALFTIME_VIDEO_ID}/`);
    }
  });

  it("creates the player only when the poster is pressed", () => {
    const { container, getByRole } = render(
      <DaiDaiVideoPoster videoId={DAI_DAI_HALFTIME_VIDEO_ID} play="Play the halftime show" title="Halftime" />,
    );
    expect(container.querySelector("iframe")).toBeNull();
    fireEvent.click(getByRole("button", { name: "Play the halftime show" }));
    const frame = container.querySelector("iframe");
    expect(frame?.getAttribute("src")).toContain(`youtube-nocookie.com/embed/${DAI_DAI_HALFTIME_VIDEO_ID}`);
  });
});

describe("the story, in both editions", () => {
  const editions = [
    ["EN", DaiDaiPage],
    ["ES", DaiDaiPageES],
  ] as const;

  it.each(editions)("%s: seven chapters, each an h2 with its own figure", (_, Page) => {
    const d = html(<Page />);
    const kickers = d.querySelectorAll("[data-dd-kicker]");
    expect(kickers.length).toBe(7);
    expect(d.querySelector("[data-dd-story-end]")).not.toBeNull();
    kickers.forEach((k) => {
      const chapter = k.parentElement!.parentElement!;
      expect(chapter.querySelector("h2"), "a chapter lost its h2").not.toBeNull();
      expect(chapter.children.length, "a chapter lost its figure").toBe(2);
    });
    expect(d.querySelectorAll("h1").length).toBe(1);
  });

  it.each(editions)("%s: the hero has one primary action, to the numbers, and the EN/ES switch", (_, Page) => {
    const d = html(<Page />);
    const hero = d.querySelector("h1")!.closest("section")!;
    const primary = hero.querySelectorAll(".btnPrimary");
    expect(primary.length).toBe(1);
    expect(primary[0].getAttribute("href")).toBe("#numbers");
    expect(d.querySelector("#numbers")).not.toBeNull();
    const group = hero.querySelector('[role="radiogroup"]')!;
    expect(group.querySelectorAll('[role="radio"]').length).toBe(2);
    expect(group.querySelectorAll('[aria-checked="true"]').length).toBe(1);
    // The halftime link left the hero for chapter 07.
    expect(hero.innerHTML).not.toContain("youtu.be");
    expect(d.innerHTML).toContain(`https://youtu.be/${DAI_DAI_HALFTIME_VIDEO_ID}`);
  });

  it.each(editions)("%s: no blurred backdrop is painted anywhere", (_, Page) => {
    const served = renderToStaticMarkup(<Page />);
    expect(served).not.toMatch(/background-image:\s*url/);
    // The bars' backdrop-filter frosts the chrome; a plain filter: blur() is
    // what painted the smudged cover behind every scene.
    expect(read("app/components/DaiDaiStory.module.css")).not.toMatch(/(?<!backdrop-)filter:\s*blur/);
  });

  it("the back bar is drawn in the edition's language", () => {
    const en = html(<DaiDaiPage />);
    const es = html(<DaiDaiPageES />);
    expect(en.querySelector('[aria-label="Back"]')).not.toBeNull();
    expect(es.querySelector('[aria-label="Volver"]')).not.toBeNull();
    expect(es.querySelector('[aria-label="Abrir menú"]')).not.toBeNull();
    expect(es.querySelector('[aria-label="Back"]')).toBeNull();
  });

  it("an accented word in a title gets room above it; plain words do not", () => {
    const es = html(<DaiDaiPageES />);
    const duo = [...es.querySelectorAll("h2")].find((h) => h.textContent === "Un himno mundialista, a dúo")!;
    expect(duo, "chapter 01's Spanish title is missing").toBeTruthy();
    const padded = [...duo.querySelectorAll("span")].map((s) => s.textContent);
    expect(padded).toEqual(["dúo"]);
    // English titles carry no accents, so they render as plain text.
    const en = html(<DaiDaiPage />);
    const titles = [...en.querySelectorAll("[data-dd-kicker]")].map((k) => k.parentElement!.querySelector("h2")!);
    expect(titles.every((h) => h.children.length === 0)).toBe(true);
  });

  it("the Spanish figures carry every label the English ones do", () => {
    const es = read("app/dai-dai/es/page.tsx");
    const block = es.match(/figureLabels=\{\{([\s\S]*?)\}\}\n/)?.[1] ?? "";
    for (const key of Object.keys(EN_FIGURE_LABELS)) {
      expect(block, `the Spanish figures have no "${key}"`).toMatch(new RegExp(`\\b${key}:`));
    }
  });
});
