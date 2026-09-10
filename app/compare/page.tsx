import Link from "next/link";
import styles from "./compare.module.css";
import BreadcrumbBar from "../components/BreadcrumbBar";
import KeepExploring from "../components/KeepExploring";
import { pageMetadata } from "../lib/seo";
import { siteUrl } from "../site";
import { countryMeta } from "../data/afrobeats";
import { HEAD_TO_HEAD } from "../lib/headToHead";
import {
  artistBySlug,
  comparableArtists,
  compare,
  priceArtist,
  priceRelease,
  type ArtistUnits,
  type ComparableArtist,
  type ComparableRelease,
  type ComparisonRow,
  type CountryLine,
} from "../lib/certUnits";

/**
 * /compare — two artists, or two records, priced by the units behind their
 * plaques.
 *
 * WHY THIS IS A SERVER PAGE DRIVEN BY THE QUERY STRING rather than a client app
 * holding state. Three reasons, in order of how much they mattered:
 *
 *  1. Every comparison becomes a URL. "Burna vs Wizkid, features on, Nigeria
 *     included" is a link somebody can paste into the argument they are already
 *     having, which is the entire point of the page.
 *  2. The engine reads the whole plaque corpus — 16 artists, 1,212 plaques and
 *     the 27-body threshold table. Shipping that to the browser to power four
 *     toggles would be a large bundle for state a query string already holds.
 *  3. It renders complete without JavaScript, so a crawler sees the numbers.
 *
 * The cost is that a toggle is a navigation. At this page's size that is a
 * fetch, and it buys shareability outright.
 */

export const metadata = pageMetadata({
  title: "Compare Certified Units — Burna Boy vs Wizkid & More",
  description:
    "Compare two Afrobeats artists or two songs by the units behind their certifications — every plaque priced at its own body's published threshold, under identical rules.",
  path: "/compare",
  shareTitle: "Certified units, compared",
  shareDescription:
    "Two records, or two catalogues, priced at each certifying body's own threshold. A floor for both sides under identical rules.",
});

type SP = Record<string, string | string[] | undefined>;
const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

const fmt = (n: number) => n.toLocaleString("en-US");
const tierClass = (level: string) =>
  level === "Diamond" ? styles.tDiamond
  : level === "Platinum" ? styles.tPlatinum
  : level === "Gold" ? styles.tGold
  : styles.tSilver;
const plaque = (top: { level: string; x: number } | null) =>
  top ? `${top.x > 1 ? `${top.x}× ` : ""}${top.level}` : "";

/** Rebuild the URL with one thing changed. Every control on this page is a link,
 *  so this is the only state setter there is. */
function href(sp: SP, patch: Record<string, string | null>) {
  const q = new URLSearchParams();
  for (const [k, v] of Object.entries(sp)) {
    const s = one(v);
    if (s) q.set(k, s);
  }
  for (const [k, v] of Object.entries(patch)) {
    if (v === null) q.delete(k);
    else q.set(k, v);
  }
  const s = q.toString();
  return s ? `/compare?${s}` : "/compare";
}

/** The board's own curated pairings, reused as suggestions — they are better
 *  than anything a cold picker would offer, and two of them are Paul's. */
function suggestionsFor(slug: string | undefined, exclude: string | undefined) {
  const partner = slug ? HEAD_TO_HEAD[slug] : undefined;
  const ordered = [
    ...(partner ? [partner] : []),
    "burna-boy", "wizkid", "rema", "tems", "tyla", "davido", "asake", "ayra-starr",
  ];
  return [...new Set(ordered)]
    .filter((s) => s !== slug && s !== exclude)
    .map((s) => artistBySlug(s))
    .filter((a): a is ComparableArtist => Boolean(a))
    .slice(0, 6);
}

function Slot({
  artist, release, priced, sp, side, mode,
}: {
  artist: ComparableArtist | null;
  release: ComparableRelease | null;
  priced: ArtistUnits | null;
  sp: SP;
  side: "a" | "b";
  mode: "songs" | "artists";
}) {
  if (!artist) {
    const others = suggestionsFor(one(sp[side === "a" ? "b" : "a"]), undefined);
    return (
      <div className={`${styles.slot} ${styles.slotEmpty}`}>
        <p className={styles.prompt}>Choose who to compare against</p>
        <div className={styles.chips}>
          {others.map((o) => (
            <Link key={o.slug} href={href(sp, { [side]: o.slug })} className={styles.chip}>
              {o.name}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const isSong = mode === "songs" && release;
  const img = isSong ? release.cover : artist.image;
  const title = isSong ? release.title : artist.name;
  const meta = isSong
    ? [artist.name, release.isFeature ? "featured" : release.format === "album" ? "album" : "lead single",
       release.credit, `${release.certs.length} plaque${release.certs.length === 1 ? "" : "s"}`]
        .filter(Boolean).join(" · ")
    : (() => {
        const n = priced ? priced.byCountry.length : 0;
        return `artist totals · ${priced ? `${priced.pricedPlaques} counted` : ""} · ${n} ${n === 1 ? "country" : "countries"}`;
      })();

  return (
    <div className={styles.slot}>
      {img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={img}
          alt=""
          className={`${styles.art} ${isSong ? "" : styles.artRound}`}
          width={56}
          height={56}
          loading="lazy"
        />
      ) : (
        <div className={`${styles.art} ${isSong ? "" : styles.artRound}`} aria-hidden="true" />
      )}
      <div className={styles.slotBody}>
        <p className={styles.slotTitle}>{title}</p>
        <p className={styles.slotMeta}>{meta}</p>
      </div>
    </div>
  );
}

function Cell({ line, lead }: { line: CountryLine | null; lead: boolean }) {
  // A blank cell reads as a rendering fault, so the words are the value.
  if (!line) return <span className={styles.noPlaque}>No plaque</span>;
  if (!line.counted) {
    return (
      <div className={styles.cell}>
        <span className={`${styles.tierChip} ${tierClass(line.top?.level ?? "Gold")}`}>
          {plaque(line.top)}
        </span>
        <span className={styles.notCounted}>not counted ¹</span>
      </div>
    );
  }
  return (
    <div className={styles.cell}>
      <span className={`${styles.tierChip} ${tierClass(line.top?.level ?? "Gold")}`}>
        {plaque(line.top)}
        {line.caveat ? " †" : ""}
      </span>
      <span className={`${styles.units} ${lead ? styles.unitsLead : styles.unitsBehind}`}>
        {fmt(line.units)}
      </span>
    </div>
  );
}

export default async function ComparePage({ searchParams }: { searchParams: Promise<SP> }) {
  const sp = await searchParams;
  const mode = one(sp.mode) === "songs" ? "songs" : "artists";
  const a = artistBySlug(one(sp.a) ?? "") ?? null;
  const b = artistBySlug(one(sp.b) ?? "") ?? null;
  const showAll = one(sp.all) === "1";

  const songA = mode === "songs" && a ? a.releases.find((r) => r.title === one(sp.sa)) ?? null : null;
  const songB = mode === "songs" && b ? b.releases.find((r) => r.title === one(sp.sb)) ?? null : null;

  const both = Boolean(a && b);
  // The engine decides Nigeria unless the reader has said otherwise; `ng` in the
  // URL is the override, never the default.
  const ngParam = one(sp.ng);
  const featParam = one(sp.feat);
  const c = both
    ? compare(a!, b!, {
        ...(ngParam ? { includeNigeria: ngParam === "1" } : {}),
        includeFeatures: featParam === "1",
      })
    : null;

  const soloPriced = a && !both ? priceArtist(a, { includeNigeria: false, includeFeatures: featParam === "1" }) : null;

  const songPriced = (art: ComparableArtist | null, rel: ComparableRelease | null) =>
    art && rel && c
      ? priceRelease(art, rel.title, { includeNigeria: c.options.includeNigeria, includeFeatures: true })
      : null;
  const spa = songPriced(a, songA);
  const spb = songPriced(b, songB);

  const useSongs = mode === "songs" && spa && spb;
  const totalA = useSongs ? spa!.total : c?.a.total ?? soloPriced?.total ?? 0;
  const totalB = useSongs ? spb!.total : c?.b.total ?? 0;
  const nameA = useSongs ? songA!.title : a?.name ?? "";
  const nameB = useSongs ? songB!.title : b?.name ?? "";

  const rows: ComparisonRow[] = useSongs
    ? (() => {
        const codes = [...new Set([
          ...spa!.byCountry.map((l) => l.country), ...spa!.listed.map((l) => l.country),
          ...spb!.byCountry.map((l) => l.country), ...spb!.listed.map((l) => l.country),
        ])];
        const find = (p: typeof spa, code: string) =>
          p!.byCountry.find((l) => l.country === code) ?? p!.listed.find((l) => l.country === code) ?? null;
        return codes
          .map((country) => {
            const la = find(spa, country);
            const lb = find(spb, country);
            return { country, body: countryMeta(country).body, a: la, b: lb, contested: Boolean(la && lb) };
          })
          .sort((x, y) =>
            Math.max(y.a?.units ?? 0, y.b?.units ?? 0) - Math.max(x.a?.units ?? 0, x.b?.units ?? 0) ||
            x.country.localeCompare(y.country));
      })()
    : c
      ? showAll
        ? [...c.rows, ...c.collapsed.flatMap((t) => t.rows)].sort((x, y) =>
            Math.max(y.a?.units ?? 0, y.b?.units ?? 0) - Math.max(x.a?.units ?? 0, x.b?.units ?? 0) ||
            x.country.localeCompare(y.country))
        : c.rows
      : [];

  const leadA = totalA >= totalB;
  const max = Math.max(totalA, totalB, 1);
  const diff = Math.abs(totalA - totalB);
  const ratio = Math.min(totalA, totalB) > 0 ? Math.max(totalA, totalB) / Math.min(totalA, totalB) : null;
  const ngOn = c?.options.includeNigeria ?? false;
  const scope = ngOn ? "27 countries · Nigeria included" : "26 countries · international";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Certifications", item: `${siteUrl}/certifications` },
      { "@type": "ListItem", position: 3, name: "Compare", item: `${siteUrl}/compare` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbBar path="/compare" />
      <main className={styles.wrap}>
        <p className={styles.kicker}>Certifications › Compare</p>
        <h1 className={styles.h1}>Certified units, compared</h1>
        <p className={styles.lede}>
          Every plaque is a floor — 3× Platinum in Nigeria means <em>at least</em> 300,000, and could be
          590,000. This page adds those floors up for two records or two artists, at each certifying
          body&apos;s own published threshold, under identical rules.
        </p>

        <nav className={styles.seg} aria-label="Comparison mode">
          <Link href={href(sp, { mode: "songs" })} className={`${styles.segItem} ${mode === "songs" ? styles.segOn : ""}`}>
            Song vs song
          </Link>
          <Link href={href(sp, { mode: "artists", sa: null, sb: null })} className={`${styles.segItem} ${mode === "artists" ? styles.segOn : ""}`}>
            Artist totals
          </Link>
        </nav>

        <div className={styles.slots}>
          <Slot artist={a} release={songA} priced={c?.a ?? soloPriced ?? null} sp={sp} side="a" mode={mode} />
          <span className={styles.vs}>vs</span>
          <Slot artist={b} release={songB} priced={c?.b ?? null} sp={sp} side="b" mode={mode} />
        </div>

        {mode === "songs" && a && !songA && (
          <div className={styles.chips} style={{ marginBottom: 22 }}>
            {a.releases.slice(0, 8).map((r) => (
              <Link key={r.title} href={href(sp, { sa: r.title })} className={styles.chip}>{r.title}</Link>
            ))}
          </div>
        )}
        {mode === "songs" && b && !songB && (
          <div className={styles.chips} style={{ marginBottom: 22 }}>
            {b.releases.slice(0, 8).map((r) => (
              <Link key={r.title} href={href(sp, { sb: r.title })} className={styles.chip}>{r.title}</Link>
            ))}
          </div>
        )}

        <div className={styles.controls}>
          {mode === "artists" && (
            <span className={styles.control}>
              <span className={styles.controlName}>Featured appearances</span>
              <Link href={href(sp, { feat: featParam === "1" ? "0" : "1" })} className={styles.switch}>
                <span className={`${styles.dot} ${featParam === "1" ? styles.dotOn : ""}`} />
                {featParam === "1" ? "on · lead + featured" : "off · lead credits only"}
              </Link>
            </span>
          )}
          <span className={styles.control}>
            <span className={styles.controlName}>Nigeria</span>
            <Link href={href(sp, { ng: ngOn ? "0" : "1" })} className={styles.switch}>
              <span className={`${styles.dot} ${ngOn ? styles.dotOn : ""}`} />
              {ngOn ? (ngParam ? "included" : "included · by default") : "separated"}
            </Link>
          </span>
          <Link href="/methodology#certified-units" className={styles.howLink}>How this is counted ↗</Link>
        </div>

        {c && c.nigeria.on && !ngParam && c.nigeria.reason && (
          <p className={styles.why}>
            <strong>Nigeria included by default</strong> — {c.nigeria.reason.replace(/^Nigeria included: /, "")}
          </p>
        )}

        {(both || a) && (
          <>
            <div className={styles.head}>
              <div className={styles.headCell}>
                <p className={styles.headName}>{nameA || a?.name} · at least</p>
                <p className={`${styles.figure} ${leadA ? styles.figureLead : styles.figureBehind}`}>{fmt(totalA)}</p>
                <p className={styles.headMeta}>
                  certified units · {ngOn ? "Nigeria included" : "international"}
                  {c ? ` · ${c.a.pricedPlaques} counted${c.a.excludedPlaques ? ` · ${c.a.excludedPlaques} not comparable` : ""}` : ""}
                </p>
                <div className={styles.bar}>
                  <div className={`${styles.barFill} ${leadA ? "" : styles.barFillBehind}`} style={{ width: `${(totalA / max) * 100}%` }} />
                </div>
              </div>
              {both && (
                <div className={styles.headCell}>
                  <p className={styles.headName}>{nameB} · at least</p>
                  <p className={`${styles.figure} ${leadA ? styles.figureBehind : styles.figureLead}`}>{fmt(totalB)}</p>
                  <p className={styles.headMeta}>
                    certified units · {ngOn ? "Nigeria included" : "international"}
                    {c ? ` · ${c.b.pricedPlaques} counted${c.b.excludedPlaques ? ` · ${c.b.excludedPlaques} not comparable` : ""}` : ""}
                  </p>
                  <div className={styles.bar}>
                    <div className={`${styles.barFill} ${leadA ? styles.barFillBehind : ""}`} style={{ width: `${(totalB / max) * 100}%` }} />
                  </div>
                </div>
              )}
            </div>

            <div className={styles.diffRow}>
              {both ? (
                <p className={styles.diff}>
                  <strong>{leadA ? nameA : nameB}</strong> leads by at least {fmt(diff)} certified units
                  {ratio && ratio >= 1.05 ? ` — ${ratio.toFixed(1)}× the other's floor` : ""}.
                </p>
              ) : (
                <p className={styles.diff}>
                  The country-by-country table appears when both sides are filled. Featured appearances are
                  off until you turn them on.
                </p>
              )}
              <span className={styles.scope}>{scope}</span>
            </div>
          </>
        )}

        {c && (
          <section className={styles.ngStrip} aria-label="Nigeria">
            <p className={styles.ngHead}>🇳🇬 Nigeria — {ngOn ? "included" : "separated"}.</p>
            <p className={styles.ngText}>
              TCSN&apos;s register is request-based, so a title missing from it proves nothing about what it
              sold — only that nobody applied. A gap between two artists there can measure paperwork rather
              than sales, which is why it is counted on its own line.
            </p>
            <div className={styles.ngFigures}>
              <span>{c.a.artist.name} — {c.a.nigeria.plaques} plaque{c.a.nigeria.plaques === 1 ? "" : "s"} · at least {fmt(c.a.nigeria.units)}</span>
              <span>{c.b.artist.name} — {c.b.nigeria.plaques} plaque{c.b.nigeria.plaques === 1 ? "" : "s"} · at least {fmt(c.b.nigeria.units)}</span>
            </div>
            <Link href={href(sp, { ng: ngOn ? "0" : "1" })} className={styles.ngAction}>
              {ngOn ? "Separate Nigeria" : "Include Nigeria"}
            </Link>
          </section>
        )}

        {both && rows.length > 0 && (
          <>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th scope="col">Country · {rows.length}</th>
                    <th scope="col" className={styles.thNum}>{nameA}</th>
                    <th scope="col" className={styles.thNum}>{nameB}</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => {
                    const m = countryMeta(r.country);
                    const av = r.a?.units ?? 0;
                    const bv = r.b?.units ?? 0;
                    return (
                      <tr key={r.country} className={r.country === "NG" && ngOn ? styles.ngRow : undefined}>
                        <td>
                          <span className={styles.country}>
                            <span className={styles.flag} aria-hidden="true">{m.flag}</span>
                            <span className={styles.countryName}>{m.name}</span>
                            <span className={styles.countryCode}>{r.country}</span>
                          </span>
                        </td>
                        <td className={styles.tdNum}><Cell line={r.a} lead={av >= bv} /></td>
                        <td className={styles.tdNum}><Cell line={r.b} lead={bv >= av} /></td>
                      </tr>
                    );
                  })}
                  {!useSongs && !showAll && c?.collapsed.map((t) => (
                    <tr key={t.side} className={styles.collapseRow}>
                      <td colSpan={3}>
                        <span className={styles.collapseText}>
                          + {t.countries} further countries where only {t.artist} is certified · at least {fmt(t.units)}
                        </span>
                        <Link href={href(sp, { all: "1" })} className={styles.showAll}>Show all ↓</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className={styles.notes}>
              {c && c.notCounted.length > 0 && (
                <p>
                  <strong>¹ Not counted</strong> —{" "}
                  {/* countryMeta, not the threshold record's `body`: that field
                      holds the research description — "PRO MÚSICA (Pro Música
                      Colombia) — IFPI-affiliated body covering Colombia, Ecuador
                      and Peru" — which is right in the sourcing file and unreadable
                      in a footnote. */}
                  {c.notCounted.map((n) => `${countryMeta(n.country).name} (${countryMeta(n.country).body})`).join(" · ")}. Listed,
                  never summed: these bodies publish no threshold this page can put on the same scale as the
                  rest.
                </p>
              )}
              {c && c.caveats.length > 0 && (
                <p><strong>† Multiplier assumed</strong> — {c.caveats.join(" ")}</p>
              )}
            </div>
          </>
        )}

        <div className={styles.method}>
          <div>
            <p className={styles.methodTitle}>One plaque per release per country</p>
            <p className={styles.methodBody}>
              At its current tier. Gold → Platinum → 2× Platinum is the same sales recertified, never three
              sales.
            </p>
          </div>
          <div>
            <p className={styles.methodTitle}>Each body&apos;s own threshold</p>
            <p className={styles.methodBody}>
              Streams-based bodies — France, Denmark, Norway and the Netherlands — are converted with the
              body&apos;s own published download-equivalence, never an estimate.
            </p>
          </div>
          <div>
            <p className={styles.methodTitle}>Not everything can be counted</p>
            <p className={styles.methodBody}>
              Sweden, Mexico and Poland publish no comparable single threshold; Greece, Belgium, Colombia,
              Czechia and Slovakia publish none at all. Those plaques are listed, not summed.
            </p>
          </div>
        </div>

        {both && (
          <section className={styles.exit} aria-label="Next">
            <p className={styles.exitKicker}>Next</p>
            <p className={styles.exitLead}>
              Two artists priced against each other — the other fourteen are one tap away, each with a ledger
              you can bring back here.
            </p>
            <Link href="/afrobeats" className="btn btnPrimary">The Afrobeats Board ↗</Link>
          </section>
        )}
      </main>
      <KeepExploring current="/compare" />
    </>
  );
}
