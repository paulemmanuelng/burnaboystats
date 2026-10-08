import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { render } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: vi.fn(), prefetch: vi.fn(), replace: vi.fn(), back: vi.fn() }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
  notFound: () => {
    throw new Error("notFound()");
  },
}));
vi.mock("next/link", () => ({
  default: ({ href, children, prefetch: _prefetch, ...rest }: { href: string; children: React.ReactNode; prefetch?: boolean | null }) => (
    <a href={href} {...rest}>
      {children}
    </a>
  ),
}));

import CertHistoryByYear from "../app/components/CertHistoryByYear";
import deskStyles from "../app/certifications/certifications.module.css";
import {
  COUNTRIES,
  CERTS_STAMP,
  intlCertHistory,
  intlCertsInYear,
  bestIntlYearBefore,
  albums as burnaAlbums,
  singles as burnaSingles,
  features as burnaFeatures,
} from "../app/data/certifications";
import { allFirsts } from "../app/data/firsts";
import { downloadBySlug, CERT_HEADER, certificationRows } from "../app/lib/dataDownloads";
import overridesFile from "../app/data/roleOverrides.json";
import { BURNA_ROLES, BOARD_ROLES, SONG_ROLES_READ_ON, roleTag, roleTagEs } from "../app/data/songRoles";
import { artistBySlug } from "../app/data/afrobeats";
import sitemap from "../app/sitemap";
import { siteUrl } from "../app/site";
import { songs } from "../app/data/songs";
import DaiDaiPage from "../app/dai-dai/page";
import DaiDaiPageES from "../app/dai-dai/es/page";
import daiDaiStyles from "../app/dai-dai/dai-dai.module.css";
import SongPage from "../app/music/[song]/page";
import songStyles from "../app/music/[song]/song.module.css";

/**
 * The live debug pass of 7 Oct 2026 (read on burnaboystats.com on 8 Oct, after
 * #441 and #445 had merged). Each block holds one finding; each negative
 * control is the line, sentence or date the live site served.
 */

const NBSP = " ";

// ── DATA-1 ─────────────────────────────────────────────────────────────────

describe("DATA-1: a year's count of certifications is never called plaques", () => {
  // Live on /certifications, under "Certifications by year": the 2026 note.
  const SHIPPED =
    "72 international plaques and counting — the most certified African artist of 2026, and Burna Boy's biggest certification year on record, past his own previous best of 45 in 2023.";

  /** Distinct plaques the log touches in a year — one per release and
   *  country, however many tiers it climbed — counted here, not imported. */
  const intlPlaquesInYear = (year: number) =>
    new Set(intlCertHistory.filter((e) => e.year === year).map((e) => `${e.album ? "album" : "song"}|${e.title}|${e.country}`)).size;

  /** Every "N … plaques" the copy states about a year whose count is not
   *  that year's distinct plaques. */
  const misnamed = (text: string, year: number) =>
    [...text.matchAll(/(\d+) (?:international )?(?:song and album )?plaques\b/g)]
      .map((m) => Number(m[1]))
      .filter((n) => n !== intlPlaquesInYear(year));

  it("2026 has upgrade rows, so a plaque count and a certification count differ", () => {
    // 72 rows of the dated log, 58 plaques: "Dai Dai" US is 2x, 6x and 19x
    // (one plaque), and ES, FR and PT climbed three tiers each in the year.
    expect(intlCertsInYear(2026)).toBeGreaterThan(intlPlaquesInYear(2026));
    const dd = intlCertHistory.filter((e) => e.year === 2026 && e.title === "Dai Dai" && e.country === "US");
    expect(dd.map((e) => e.x)).toEqual([2, 6, 19]);
  });

  it("the /certifications log's 2026 note counts certifications, upgrades included, and says so", () => {
    const { container } = render(<CertHistoryByYear history={intlCertHistory} countries={COUNTRIES} />);
    const notes = [...container.getElementsByClassName(deskStyles.yearNote)].map((p) => p.textContent!);
    expect(notes).toHaveLength(1);
    const note = notes[0];
    expect(note).toContain(`${intlCertsInYear(2026)} international certifications and counting, upgrades included`);
    expect(misnamed(note, 2026)).toEqual([]);
    // The prior best it is set against is the same kind of count.
    const best = bestIntlYearBefore(2026)!;
    expect(best[1]).toBe(intlCertsInYear(best[0]));
    expect(note).toContain(`previous best of ${best[1]} in ${best[0]}`);
  });

  it("the /records/firsts entry calls the same figure certifications", () => {
    const first = allFirsts.find((f) => f.title === "Most certifications by an African artist in a single year")!;
    expect(first.text).toContain(`${intlCertsInYear(2026)} international song and album certifications in 2026`);
    expect(misnamed(first.text, 2026)).toEqual([]);
  });

  it("negative control: the note the site shipped called the 72 rows plaques", () => {
    expect(misnamed(SHIPPED, 2026)).toEqual([72]);
  });
});

// ── DATA-2 ─────────────────────────────────────────────────────────────────

describe("DATA-2: the certifications file's kind description covers every row", () => {
  // Live on /api, /press and the /api/v1 index, 8 Oct 2026.
  const SHIPPED =
    "kind is the artist's own role on the record: a lead single where the song is on one of their own Spotify releases or they are listed first on it, a featured appearance otherwise.";

  const kindIdx = CERT_HEADER.indexOf("kind");
  const artistIdx = CERT_HEADER.indexOf("artist");
  const releaseIdx = CERT_HEADER.indexOf("release");

  /** Rows filed against the plain rule, and whether the text accounts for them. */
  const unexplained = (what: string): string[] => {
    const out: string[] = [];
    for (const o of overridesFile.overrides) {
      const name = artistBySlug(o.artist)!.name;
      if (!what.includes(`${name}'s “${o.siteTitle}”`)) out.push(`override ${name} “${o.siteTitle}”`);
    }
    const billing = [
      ...[...burnaSingles, ...burnaFeatures].map((r) => BURNA_ROLES[r.title]),
      ...Object.values(BOARD_ROLES).flatMap((roles) => Object.values(roles)),
    ].some((r) => r?.rule === "billing");
    if (billing && !/the billing decides/.test(what)) out.push("billing fallback");
    return out;
  };

  it("the overrides are in the file, filed featured though each is on the artist's own single", () => {
    expect(overridesFile.overrides.length).toBeGreaterThan(0);
    for (const o of overridesFile.overrides) {
      const name = artistBySlug(o.artist)!.name;
      const rows = certificationRows.filter((r) => r[artistIdx] === name && r[releaseIdx] === o.siteTitle);
      expect(rows.length, `${name} ${o.siteTitle}`).toBeGreaterThan(0);
      for (const r of rows) expect(r[kindIdx]).toBe("Featured appearances");
    }
    expect(burnaAlbums.length).toBeGreaterThan(0);
  });

  it("the description names each override and the billing fallback", () => {
    const what = downloadBySlug("certifications").what;
    expect(unexplained(what)).toEqual([]);
    // The rule itself still reads as before, first.
    expect(what).toContain(SHIPPED);
  });

  it("negative control: the shipped description accounts for none of them", () => {
    expect(unexplained(SHIPPED)).toEqual([
      ...overridesFile.overrides.map((o) => `override ${artistBySlug(o.artist)!.name} “${o.siteTitle}”`),
      "billing fallback",
    ]);
  });
});

// ── DATA-3 ─────────────────────────────────────────────────────────────────

describe("DATA-3: the pages that print his Rule C roles are dated by them", () => {
  const rows = sitemap();
  const day = (path: string) => {
    const r = rows.find((x) => x.url === `${siteUrl}${path}`);
    return r?.lastModified ? new Date(r.lastModified).toISOString().slice(0, 10) : undefined;
  };
  /** A lastmod that is missing or older than the data the page prints. */
  const behind = (said: string | undefined, stamp: string) => said === undefined || said < stamp;

  it("/records/firsts is no older than the roles or the plaques it prints", () => {
    expect(behind(day("/records/firsts"), SONG_ROLES_READ_ON)).toBe(false);
    expect(behind(day("/records/firsts"), CERTS_STAMP)).toBe(false);
  });

  it("every song page, and both Dai Dai editions, are no older than the role their kicker prints", () => {
    const stale = [...songs.map((s) => `/music/${s.slug}`), "/dai-dai", "/dai-dai/es"].filter((p) =>
      behind(day(p), SONG_ROLES_READ_ON),
    );
    expect(stale).toEqual([]);
  });

  it("negative control: the dates the live sitemap served on 8 Oct 2026", () => {
    const LIVE: Record<string, string> = {
      "/records/firsts": "2026-09-24",
      "/music/jerusalema": "2026-09-17",
      "/music/last-last": "2026-09-17",
      "/music/tatata": "2026-08-11",
    };
    for (const said of Object.values(LIVE)) expect(behind(said, SONG_ROLES_READ_ON)).toBe(true);
  });
});

// ── screens-daidai-kicker-colead-split ─────────────────────────────────────

describe("the kickers that end on his role keep each item whole", () => {
  const host = (el: React.ReactElement) => {
    const d = document.createElement("div");
    d.innerHTML = renderToStaticMarkup(el);
    return d;
  };

  type Css = Record<string, string>;
  const decls = (css: string, cls: string): Css => {
    const out: Css = {};
    for (const m of css.replace(/\/\*[\s\S]*?\*\//g, "").matchAll(/([^{}]+)\{([^{}]*)\}/g)) {
      if (!m[1].split(",").some((sel) => sel.trim() === `.${cls}`)) continue;
      for (const part of m[2].split(";")) {
        const i = part.indexOf(":");
        if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
      }
    }
    return out;
  };

  /** Where a kicker could still break badly. jsdom does no layout, so this
   *  reads the markup every break depends on: each " · " bound to the item
   *  after it by a no-break space, and the role, separator included, inside
   *  the one inline-block unit. */
  function badBreaks(kicker: Element, roleClass: string, role: string): string[] {
    const out: string[] = [];
    const text = kicker.textContent!;
    if (/· /.test(text)) out.push("a separator with a breakable space after it");
    const unit = kicker.querySelector(`.${roleClass}`);
    if (!unit) out.push("no role unit");
    else if (unit.textContent !== `·${NBSP}${role}`) out.push(`role unit reads "${unit.textContent}"`);
    if (!text.endsWith(role)) out.push("the role is not the last item");
    return out;
  }

  it("the role unit is an inline-block no wider than its line, on both stylesheets", () => {
    for (const [file, cls] of [
      ["app/dai-dai/dai-dai.module.css", "kickerRole"],
      ["app/music/[song]/song.module.css", "kickerRole"],
    ]) {
      const d = decls(readFileSync(file, "utf8"), cls);
      expect(d.display, file).toBe("inline-block");
      expect(d["max-width"], file).toBe("100%");
    }
  });

  it("/dai-dai and /dai-dai/es: the hero kicker", () => {
    for (const [Page, role, middle] of [
      [DaiDaiPage, roleTag("Dai Dai"), `official${NBSP}song`],
      [DaiDaiPageES, roleTagEs("Dai Dai"), `canción${NBSP}oficial`],
    ] as const) {
      const d = host(<Page />);
      const kicker = d.querySelector(`.${daiDaiStyles.kicker}`)!;
      expect(kicker, role).not.toBeNull();
      expect(badBreaks(kicker, daiDaiStyles.kickerRole, role)).toEqual([]);
      // The middle item is one phrase: at 320 and 360 /es left "oficial"
      // alone on a line once the role moved down whole.
      expect(kicker.textContent).toContain(`·${NBSP}${middle}`);
    }
  });

  it("every song page's kicker", async () => {
    expect(songs.length).toBeGreaterThan(10);
    for (const s of songs) {
      const el = await SongPage({ params: Promise.resolve({ song: s.slug }) });
      const kicker = host(el as React.ReactElement).querySelector(`.${songStyles.kicker}`)!;
      expect(kicker, s.slug).not.toBeNull();
      expect(badBreaks(kicker, songStyles.kickerRole, roleTag(s.title)), s.slug).toEqual([]);
    }
  });

  it("negative control: the kicker the site shipped", () => {
    const d = document.createElement("div");
    d.innerHTML = `<div class="${daiDaiStyles.kicker}">2026 FIFA World Cup · official song · Co-lead with Shakira</div>`;
    expect(badBreaks(d.firstElementChild!, daiDaiStyles.kickerRole, "Co-lead with Shakira")).toEqual([
      "a separator with a breakable space after it",
      "no role unit",
    ]);
  });
});
