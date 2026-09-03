"use client"; // interactive: filter releases by tier and country

import Link from "next/link";

import { useEffect, useState } from "react";
import styles from "../certifications/certifications.module.css";
import { tierOf, type Cert, type Country, type Release } from "../data/certifications";
import { matches, badgeWeight, byMostCertified } from "../lib/certs";
import { releasePathFor } from "../lib/releasePages";
import { coverFor } from "../lib/covers";
import { spotifyImage } from "../lib/spotifyImage";
import { track } from "../lib/analytics";
import FilterEmpty from "./FilterEmpty";

const TIERS = ["Diamond", "Platinum", "Gold", "Silver"];

// Tier colours carry data meaning and are never recoloured to gold.
const TIER_INK: Record<string, string> = {
  Diamond: "var(--cyan)",
  Platinum: "var(--silver)",
  Gold: "var(--gold)",
  Silver: "#b8bcc4",
};

type Countries = Record<string, Country>;

function Badge({ cert, countries, dim }: { cert: Cert; countries: Countries; dim: boolean }) {
  const country = countries[cert.c];
  return (
    <span
      className={`${styles.cBadge} ${styles[tierOf(cert.level)]} ${dim ? styles.badgeDim : ""}`}
      title={`${country.name} — ${cert.body ?? country.body}`}
    >
      <span className={styles.flag}>{country.flag}</span>
      {cert.x ? `${cert.x}× ` : ""}
      {cert.level}
      {/* A separate program is a different award, and a tooltip is not a
          distinction a phone can see. Dai Dai's US plaque is RIAA LATIN — a
          different register with different thresholds from the main program —
          and it rendered identically to one. The marker is derived: whatever
          the override adds beyond the country's default body. */}
      {cert.body && cert.body !== country.body && (
        <span className={styles.badgeProgram}>
          {cert.body.replace(country.body, "").trim() || cert.body}
        </span>
      )}
    </span>
  );
}

function CertCard({
  item,
  countries,
  country,
  tier,
  covers,
  links,
}: {
  item: Release;
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
             passes their covers in, exactly as MobileCerts does. */
          style={{ backgroundImage: `url(${spotifyImage((covers ? covers[item.title] : coverFor(item.title)) ?? "", 300)})` }}
        />
        <span className={styles.certText}>
          {/* A row was a dead end: the best writing on the site lives on the
              song and album pages, and nothing here pointed at it. Linked only
              where a page exists — 13 of the 85 certified titles — so the rest
              stay plain text rather than becoming links that go nowhere. */}
          {releasePathFor(links, item.title) ? (
            <Link href={releasePathFor(links, item.title)!} className={styles.certTitleLink}>
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
}) {
  const [country, setCountry] = useState<string | null>(null);
  const [tier, setTier] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  // A single-release focus, deep-linked via ?release=… (e.g. from the Dai Dai story).
  const [focus, setFocus] = useState<string | null>(null);

  // Read the deep-link once on mount (client-only, keeps the page static).
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
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    const fromHash = new URLSearchParams(hash).get("release");
    const r = fromHash ?? new URLSearchParams(window.location.search).get("release");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount read of a browser-only URL param
    if (r) setFocus(r);
  }, []);

  // Track filter engagement (fires once per change; skips the empty initial state).
  useEffect(() => {
    if (country || tier) track("cert_filter", { country: country ?? "", tier: tier ?? "" });
  }, [country, tier]);

  const groups = [
    { label: "Albums", items: albums },
    { label: "Singles", items: singles },
    { label: "Featured Appearances", items: features },
  ].map((g) => ({
    ...g,
    items: g.items.filter((it) => (!focus || it.title === focus) && matches(it, country, tier)).sort(byMostCertified),
  }));

  const totalAll = albums.length + singles.length + features.length;
  const totalShown = groups.reduce((n, g) => n + g.items.length, 0);
  const shownCerts = groups.reduce(
    (n, g) => n + g.items.reduce((m, it) => m + it.certs.length, 0),
    0
  );
  const active = country || tier;

  return (
    <>
      <section className={styles.filterBand}>
        <div className={styles.wide}>
      {focus && (
        <div className={styles.focusBar}>
          <span>
            Showing every certification for <b>{focus}</b>
          </span>
          <button type="button" className={styles.clearBtn} onClick={() => setFocus(null)}>
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
          {totalShown} {totalShown === 1 ? "release" : "releases"} shown, {shownCerts} {shownCerts === 1 ? "certification" : "certifications"}
        </span>

        <div id="cert-filters" className={`${styles.filterBody} ${filtersOpen ? styles.filterOpen : ""}`}>
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
              className={`${styles.fChip} ${!country ? styles.fChipOn : ""}`}
              aria-pressed={!country}
              onClick={() => setCountry(null)}
            >
              All
            </button>
            {Object.entries(countries).map(([code, c]) => (
              <button
                key={code}
                type="button"
                className={`${styles.fChip} ${country === code ? styles.fChipOn : ""}`}
                aria-pressed={country === code}
                title={`${c.name} — ${c.body}`}
                onClick={() => setCountry(country === code ? null : code)}
              >
                <span className={styles.flag}>{c.flag}</span>
                {code}
              </button>
            ))}
          </div>

          <div className={styles.filterMeta}>
            Showing <b>{totalShown}</b> of {totalAll} releases ·{" "}
            <b>{shownCerts}</b> certifications
            <button
              type="button"
              className={styles.clearBtn}
              onClick={() => {
                setCountry(null);
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
        // The country is the narrower of the two, so it is what the second
        // button drops — a tier alone almost always still has matches.
        <FilterEmpty
          body={`There's no ${[tier, "certification", country && `from ${countries[country]?.name ?? country}`]
            .filter(Boolean)
            .join(" ")}. That's a real gap in the record, not a missing page.`}
          onClear={() => {
            setCountry(null);
            setTier(null);
          }}
          narrowest={
            country
              ? { label: countries[country]?.name ?? country, drop: () => setCountry(null) }
              : tier
                ? { label: tier, drop: () => setTier(null) }
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
                      <CertCard key={it.title} item={it} countries={countries} country={country} tier={tier} covers={covers} links={links} />
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
