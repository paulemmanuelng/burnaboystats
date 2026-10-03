"use client"; // interactive: filter releases by tier and country

import Link from "next/link";

import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import styles from "../certifications/certifications.module.css";
import { tierOf, type Cert, type Country, type Release } from "../data/certifications";
import { matches, badgeWeight, byMostCertified, countryChipTitle, isIssuerMarker } from "../lib/certs";
import { releasePathFor, type ReleaseKind } from "../lib/releasePages";
import { coverFor } from "../lib/covers";
import { artAt } from "../lib/artAt";
import { track } from "../lib/analytics";
import FilterEmpty from "./FilterEmpty";
import { tierWord } from "../lib/awardName";
import { dropDeepLink, onDeepLinkChange, readDeepLink, readSavedView, saveView } from "../lib/deepLink";
import {
  certCountPhrase, certsInView, creditSwitchable, effectiveView, scopeSwitchable, viewNoun, type CertView,
} from "../lib/certScope";
import { useCertView } from "../lib/useCertView";
import CertViewSwitches from "./CertViewSwitches";
import { count } from "../lib/plural";

const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];
/** This explorer's key in the history entry's saved filters. */
const VIEW_ID = "certs";

// Tier colours carry data meaning and are never recoloured to gold.
// A tier's colour IS the tier. These read --cyan for Diamond and --silver for
// Platinum: the Top 10 and Top 40 PEAK-BAND tokens, which globals.css reserves
// for the chart screens in as many words. So the certification ledger painted
// its top two tiers in another palette's colours, and Silver in a raw hex that
// no theme could reach. Same four tokens as MobileCerts now.
const TIER_INK: Record<string, string> = {
  Diamond: "var(--tier-diamond-ink)",
  Platinum: "var(--tier-platinum-ink)",
  Gold: "var(--tier-gold-ink)",
  Silver: "var(--tier-silver-ink)",
};

type Countries = Record<string, Country>;

function Badge({ cert, countries, dim }: { cert: Cert; countries: Countries; dim: boolean }) {
  const country = countries[cert.c];
  return (
    <span
      className={`${styles.cBadge} ${styles[tierOf(cert.level)]} ${dim ? styles.badgeDim : ""}`}
      title={`${country.name} — ${cert.body ?? country.body}${cert.provenance ? `, ${cert.provenance}` : ""}`}
    >
      <span className={styles.flag}>{country.flag}</span>
      {cert.x ? `${cert.x}× ` : ""}
      {tierWord(cert.level, cert.body)}
      {/* A separate program is a different award, and a tooltip is not a
          distinction a phone can see. Dai Dai's US plaque is RIAA LATIN — a
          different register with different thresholds from the main program —
          and it rendered identically to one. The marker is derived: whatever
          the override adds beyond the country's default body. */}
      {cert.body && cert.body !== country.body && (
        <span className={isIssuerMarker(cert.body) ? `${styles.badgeProgram} ${styles.badgeIssuer}` : styles.badgeProgram}>
          {cert.body.replace(country.body, "").trim() || cert.body}
        </span>
      )}
    </span>
  );
}

function CertCard({
  item,
  kind,
  countries,
  country,
  tier,
  covers,
  links,
}: {
  item: Release;
  /** Which page family the row may link into — an album row never lands on a
   *  song page, nor a single on an album page (lib/releasePages). */
  kind: ReleaseKind;
  countries: Countries;
  country: string | null;
  tier: string | null;
  covers?: Record<string, string | undefined>;
  /** title -> its own page, when it has one. Server-built (lib/releasePages)
   *  and passed in, so the song and album datasets stay out of this bundle. */
  links?: Record<string, string>;
}) {
  return (
    <div className={styles.certRow}>
      <div className={styles.certRowHead}>
        <span
          className={styles.certCover}
          aria-hidden="true"
          /* The site's own lookup knows Burna's catalogue only — a board artist
             passes their covers in, exactly as MobileCerts does. Sized at 114,
             3x the 38px tile: those covers are Deezer 500px and Apple 300px
             files, 1.9 MB on /afrobeats/wizkid for 0.3 MB of pixels (23 Sep 2026). */
          style={{ backgroundImage: `url(${artAt((covers ? covers[item.title] : coverFor(item.title)) ?? "", 114)})` }}
        />
        <span className={styles.certText}>
          {/* A row was a dead end: the best writing on the site lives on the
              song and album pages, and nothing here pointed at it. Linked only
              where a page exists — 13 of the 93 certified titles — so the rest
              stay plain text rather than becoming links that go nowhere. */}
          {releasePathFor(links, item.title, kind) ? (
            <Link href={releasePathFor(links, item.title, kind)!} className={styles.certTitleLink}>
              {item.title}
            </Link>
          ) : (
            <span className={styles.certTitle}>{item.title}</span>
          )}
          <span className={styles.certCredit}>
            {/* Not every release carries a year. Joining unconditionally printed
                "feat. Khalid · undefined" on the live page. */}
            {[item.credit, item.year].filter(Boolean).join(" · ")}
          </span>
        </span>
      </div>

      <div className={styles.badges}>
        {/* Same ordering as the release list: the plaque representing the most
            leads, rather than whatever order the data happened to be typed in. */}
        {[...item.certs]
          .sort((x, y) => badgeWeight(y) - badgeWeight(x))
          .map((cert) => {
            const dim = !!((country && cert.c !== country) || (tier && cert.level !== tier));
            return <Badge key={cert.c} cert={cert} countries={countries} dim={dim} />;
          })}
      </div>
    </div>
  );
}

export default function CertExplorer({
  albums,
  singles,
  features,
  countries,
  totalCerts,
  covers,
  links,
  home,
  homeName,
  featured: featuredTitles,
}: {
  albums: Release[];
  singles: Release[];
  features: Release[];
  countries: Countries;
  totalCerts: number;
  /** Artwork by title for a non-Burna catalogue; absent = Burna's own lookup. */
  covers?: Record<string, string | undefined>;
  /** title -> its own page. Server-built (lib/releasePages) and passed in,
   *  so the song and album datasets stay out of this client bundle. */
  links?: Record<string, string>;
  /** The artist's home country code (lib/certScope.homeCodeFor) — what the
   *  International switch leaves out. Absent = no International switch. */
  home?: string;
  /** The artist's home country in full ("Nigeria", "South Africa") — the
   *  home switch's name (the artist's own `country` field). */
  homeName?: string;
  /** The titles of the artist's FEATURED appearances, by /compare's own rule
   *  (certUnits.featuredTitlesOf, built on the server) — what the Lead
   *  switch leaves out. Absent or empty = no Lead switch. */
  featured?: readonly string[];
}) {
  // The two switches (lib/certScope), in /compare's style: the home country
  // ("Nigeria", "South Africa") and "Featured appearances".
  // Each is rendered only when it changes something; a switch that is not
  // offered reads as "all" whatever the address bar says. The Lead switch's
  // featured appearances come from the server, by /compare's rule.
  const [rawView, setView] = useCertView();
  const featured = useMemo(() => new Set(featuredTitles ?? []), [featuredTitles]);
  const offered = useMemo(() => {
    const every = [...albums, ...singles, ...features];
    return { scope: scopeSwitchable(every, home), credit: creditSwitchable(every, featured) };
  }, [albums, singles, features, home, featured]);
  const view = effectiveView(rawView, offered);
  const narrowed = view.scope !== "all" || view.credit !== "all";
  const [country, setCountry] = useState<string | null>(null);
  const [tier, setTier] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  // A single-release focus, deep-linked via ?release=… (e.g. from the Dai Dai story).
  const [focus, setFocus] = useState<string | null>(null);

  // Read the deep-link on mount (client-only, keeps the page static).
  //
  // The FRAGMENT is the live form; the query string is still read so older
  // links keep working. They behave identically for a reader — this component
  // has always applied the focus client-side on mount — but not for Google. A
  // "?release=" URL is a separate URL: it got crawled, its canonical correctly
  // pointed back to /certifications, and Search Console then listed it forever
  // under "Alternate page with proper canonical tag". That status is not a
  // fault (it is the canonical working), but it can never be validated away
  // while the URL exists, so every validation run on it failed. A fragment is
  // never sent to the server and is not a separate URL, so the variant simply
  // stops existing to a crawler.
  //
  // It is read again whenever the fragment changes (a search result on this
  // same page, Back between two focuses), and #country= — search's link for a
  // country — sets the country filter. A layout effect, so the list is right
  // before the first paint: on Back, the browser restores the scroll offset
  // against whatever is on screen.
  useLayoutEffect(() => {
    // The filters this entry last showed, when the reader is coming Back to
    // it. They win over the fragment, which only says how the visit began.
    const saved = readSavedView<{ tier: string | null; country: string | null }>(VIEW_ID);
    const read = (initial: boolean) => {
      setFocus(readDeepLink("release", initial));
      const c = readDeepLink("country", false);
      if (!initial || c) setCountry(c && countries[c] ? c : null);
      if (initial && saved) {
        setTier(saved.tier && TIERS.includes(saved.tier) ? saved.tier : null);
        setCountry(saved.country && countries[saved.country] ? saved.country : null);
      }
    };
    read(true);
    return onDeepLinkChange(() => read(false));
  }, [countries]);

  // Remember the chips in this history entry, for Back (lib/deepLink.ts).
  useEffect(() => {
    saveView(VIEW_ID, { tier, country });
  }, [tier, country]);

  // Every control that changes the focus or the country also takes the
  // matching key out of the address bar. Clearing the focus left
  // #release=Dai%20Dai standing, so a reload put Dai Dai back.
  const clearFocus = () => {
    setFocus(null);
    dropDeepLink("release");
  };
  const pickCountry = (c: string | null) => {
    setCountry(c);
    dropDeepLink("country");
  };

  // Track filter engagement (fires once per change; skips the empty initial state).
  useEffect(() => {
    if (country || tier) track("cert_filter", { country: country ?? "", tier: tier ?? "" });
  }, [country, tier]);

  // The releases in view: under "International" every home-country plaque is
  // gone, under "Lead" every featured appearance, and with either any release
  // that held nothing else.
  const inView = (v: CertView) => ({
    albums: certsInView(albums, { home, featured }, v),
    singles: certsInView(singles, { home, featured }, v),
    features: certsInView(features, { home, featured }, v),
  });
  // A few hundred rows at most — recounted per render, no memo to keep in step.
  const scoped = inView(view);
  const codesOf = (g: ReturnType<typeof inView>) =>
    new Set([...g.albums, ...g.singles, ...g.features].flatMap((r) => r.certs.map((c) => c.c)));
  const viewCodes = codesOf(scoped);
  // A country chip whose plaques the view leaves out (Nigeria under
  // "International", a country Burna Boy is certified in only as a guest under
  // "Lead") leaves the row, so a selection of it cannot stand — read as no
  // country, and cleared from state (and the address bar) when the reader
  // flips the switch.
  const shownCountry = country && (!narrowed || viewCodes.has(country)) ? country : null;
  const pickView = (patch: Partial<CertView>) => {
    const next = { ...view, ...patch };
    const nextNarrowed = next.scope !== "all" || next.credit !== "all";
    if (country && nextNarrowed && !codesOf(inView(next)).has(country)) pickCountry(null);
    setView(patch);
  };

  const groups = [
    { label: "Albums", items: scoped.albums },
    { label: "Singles", items: scoped.singles },
    { label: "Featured Appearances", items: scoped.features },
  ].map((g) => ({
    ...g,
    items: g.items.filter((it) => (!focus || it.title === focus) && matches(it, shownCountry, tier)).sort(byMostCertified),
  }));

  const totalAll = scoped.albums.length + scoped.singles.length + scoped.features.length;
  const totalShown = groups.reduce((n, g) => n + g.items.length, 0);
  const shownCerts = groups.reduce(
    (n, g) => n + g.items.reduce((m, it) => m + it.certs.length, 0),
    0
  );
  const shownCountries = new Set(groups.flatMap((g) => g.items.flatMap((it) => it.certs.map((c) => c.c)))).size;
  // The All view's count line reads as it always has; a narrowed view says
  // what it is counting ("65 international certifications across 23 countries").
  const shownPhrase = narrowed
    ? certCountPhrase(shownCerts, shownCountries, view)
    : `${shownCerts} ${shownCerts === 1 ? "certification" : "certifications"}`;
  const active = shownCountry || tier;

  // Whether the deep-linked focus names a release this page carries — the
  // same test ChartExplorer makes. When it doesn't, the empty state has to say
  // the link is wrong, not that the record has a gap.
  const knownTitles = useMemo(
    () => new Set([...albums, ...singles, ...features].map((r) => r.title)),
    [albums, singles, features]
  );
  const unknownFocus = !!focus && !knownTitles.has(focus);

  // Every plaque per country IN THE VIEW, for the filter chips' hover text —
  // which says so when a country's plaques are not register rows
  // (countryChipTitle). Counted from the switched view, not the full ledger: a
  // chip filters the list the switches leave, so its hover describes those
  // plaques ("South Africa — Sony Music Africa, 9 label-issued plaques and 1
  // announced…" counts what a click on it will show). The All view is the full
  // ledger, so it reads exactly as before.
  const certsByCountry = new Map<string, Cert[]>();
  for (const it of [...scoped.albums, ...scoped.singles, ...scoped.features])
    for (const c of it.certs) certsByCountry.set(c.c, [...(certsByCountry.get(c.c) ?? []), c]);

  return (
    <>
      <section className={styles.filterBand}>
        <div className={styles.wide}>
      {focus && (
        <div className={styles.focusBar}>
          <span>
            Showing every certification for <b>{focus}</b>
          </span>
          <button type="button" className={styles.clearBtn} onClick={clearFocus}>
            Show all releases ✕
          </button>
        </div>
      )}

      <div className={styles.filterCard}>
        {/* The panel collapses to a toggle only on mobile, where the country
            row is 25 chips long; on desktop it is always open, as designed. */}
        <button
          type="button"
          className={styles.filterToggle}
          aria-expanded={filtersOpen}
          aria-controls="cert-filters"
          onClick={() => setFiltersOpen((o) => !o)}
        >
          <span>Filters{active ? ` · ${totalShown} shown` : ""}</span>
          <span aria-hidden="true">{filtersOpen ? "▲" : "▼"}</span>
        </button>

        {/* Filtering is a mouse-and-eyes affordance without this: the list
            changes and nothing announces it. The count beside "Filters" is the
            same fact, but it only appears once a filter is active.

            A sibling of the toggle, not a child of it: the redesign left
            `.filterToggle` at `display: none` at every width (the panel is
            always open now, and the later rule beats the 640px one that opens
            it), and a live region inside a `display: none` element is never
            announced at all. Polite, so it waits for a pause rather than
            interrupting. */}
        <span aria-live="polite" className="visuallyHidden">
          {totalShown} {totalShown === 1 ? "release" : "releases"} shown, {shownPhrase}
        </span>

        <div id="cert-filters" className={`${styles.filterBody} ${filtersOpen ? styles.filterOpen : ""}`}>
          {/* The two switches, /compare's own (CertViewSwitches), one row
              above the tier and country rows they narrow. Both default on;
              the Tier row's "All" right below is the way back to everything. */}
          <CertViewSwitches
            view={view}
            offered={offered}
            onPick={pickView}
            homeName={homeName ?? home ?? ""}
            className={styles.switchRow}
          />

          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Tier</span>
            <button
              type="button"
              className={`${styles.fChip} ${!tier ? styles.fChipOn : ""}`}
              aria-pressed={!tier}
              onClick={() => setTier(null)}
            >
              All
            </button>
            {TIERS.map((t) => (
              <button
                key={t}
                type="button"
                className={`${styles.fChip} ${tier === t ? styles.fChipOn : ""}`}
                aria-pressed={tier === t}
                onClick={() => setTier(tier === t ? null : t)}
              >
                <span className={styles.chipDot} style={{ background: TIER_INK[t] }} aria-hidden="true" />
                {t}
              </button>
            ))}
          </div>

          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Country</span>
            <button
              type="button"
              className={`${styles.fChip} ${!shownCountry ? styles.fChipOn : ""}`}
              aria-pressed={!shownCountry}
              onClick={() => pickCountry(null)}
            >
              All
            </button>
            {Object.entries(countries).filter(([code]) => !narrowed || viewCodes.has(code)).map(([code, c]) => (
              <button
                key={code}
                type="button"
                className={`${styles.fChip} ${country === code ? styles.fChipOn : ""}`}
                aria-pressed={country === code}
                title={countryChipTitle(c.name, c.body, certsByCountry.get(code) ?? [])}
                onClick={() => pickCountry(country === code ? null : code)}
              >
                <span className={styles.flag}>{c.flag}</span>
                {code}
              </button>
            ))}
          </div>

          <div className={styles.filterMeta}>
            {/* "65 international certifications across 23 countries" in a
                narrowed view; the All view reads as it always has. */}
            Showing <b>{totalShown}</b> of {totalAll} releases ·{" "}
            {narrowed ? (
              <span>
                <b>{shownCerts}</b> {viewNoun(shownCerts, view)} across {count(shownCountries, "country", "countries")}
              </span>
            ) : (
              <>
                <b>{shownCerts}</b> certifications
              </>
            )}
            <button
              type="button"
              className={styles.clearBtn}
              onClick={() => {
                pickCountry(null);
                setTier(null);
              }}
            >
              Clear ✕
            </button>
          </div>
        </div>
      </div>

        </div>
      </section>

      {totalShown === 0 ? (
        // The focus is the narrowest filter — one release of ninety-odd, and
        // the one a deep-linked reader never set — then the country, then the
        // tier, which alone almost always still has matches. The sentence is a
        // claim about the record, so it names the focus, and a focus this page
        // does not carry is a broken link, not a gap: "There's no
        // certification from Nigeria. That's a real gap in the record" was
        // printed about Dai Dai alone, and "There's no certification" about a
        // #release= naming nothing at all (24 Sep 2026).
        <FilterEmpty
          body={
            unknownFocus
              ? `No release on this page is called “${focus}”. That's a broken link, not a gap in the record.`
              : `There's no ${[
                  view.scope === "intl" && "international",
                  tier,
                  "certification",
                  view.credit === "lead" && "as lead artist",
                  focus && `for ${focus}`,
                  shownCountry && `from ${countries[shownCountry]?.name ?? shownCountry}`,
                ]
                  .filter(Boolean)
                  .join(" ")}. That's a real gap in the record, not a missing page.`
          }
          onClear={() => {
            pickCountry(null);
            setTier(null);
            clearFocus();
            // The switches too: both off can empty a page by themselves (BNXN,
            // Tiwa Savage), and a Clear that left them off cleared nothing.
            if (narrowed) setView({ scope: "all", credit: "all" });
          }}
          narrowest={
            focus
              ? { label: focus, drop: clearFocus }
              : shownCountry
                ? { label: countries[shownCountry]?.name ?? shownCountry, drop: () => pickCountry(null) }
                : tier
                  ? { label: tier, drop: () => setTier(null) }
                  : view.credit === "lead"
                    ? { label: "lead credits only", drop: () => setView({ credit: "all" }) }
                    : view.scope === "intl"
                      ? { label: `${homeName ?? home} left out`, drop: () => setView({ scope: "all" }) }
                      : undefined
          }
        />
      ) : (
        groups.map(
          (g) =>
            g.items.length > 0 && (
              <section key={g.label} className={styles.groupSection}>
                <div className={styles.wide}>
                  <div className={styles.groupHead}>
                    <h2 className={styles.groupTitle}>
                      <span className="inkText">{g.label}</span>
                    </h2>
                    <span className={styles.count}>({g.items.length})</span>
                  </div>
                  <div className={styles.groupList}>
                    {g.items.map((it) => (
                      <CertCard key={it.title} item={it} kind={g.label === "Albums" ? "album" : "song"} countries={countries} country={shownCountry} tier={tier} covers={covers} links={links} />
                    ))}
                  </div>
                </div>
              </section>
            )
        )
      )}
    </>
  );
}
