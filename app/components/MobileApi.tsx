import Link from "next/link";
import styles from "./mobileApi.module.css";
import CopyButton from "./CopyButton";

/**
 * Mobile screen 23 — Open data API.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile Deep Pages.dc.html, screen
 * 23. Four blocks — Endpoints, Try it, Before you use it, Licence & attribution
 * — rather than a row list, because this screen is documentation: someone has
 * to be able to read what an endpoint returns and copy a working command.
 *
 * The bottom bar is the one place on the mobile site where the action is a copy
 * rather than a link, which is why it reuses CopyButton: it reverts on its own
 * and stays silent if the clipboard refuses, instead of claiming a copy that
 * never happened.
 */
export default function MobileApi({
  version,
  lede,
  pills,
  endpoints,
  caveats,
  curl,
  attribution,
  base,
}: {
  version: string;
  lede: string;
  /** First pill is the live one and takes the green dot. */
  pills: string[];
  endpoints: { path: string; what: string; size: string }[];
  caveats: { h: string; p: string }[];
  curl: string;
  attribution: string;
  base: string;
}) {
  return (
    <div className={styles.screen}>
      <div className={styles.backBar}>
        <Link href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </Link>
        <span className={styles.backLabel}>Open data API</span>
        <span className={styles.badge}>{version}</span>
      </div>

      <div className={styles.hero}>
        <div className={styles.kicker}>Free · no key · no rate limit</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Open data <span className={styles.gold}>API</span>
        </h1>
        <p className={styles.lede}>{lede}</p>
        <div className={styles.pills}>
          {pills.map((p, i) => (
            <span key={p} className={`${styles.pill} ${i === 0 ? styles.pillLive : ""}`}>
              {i === 0 && <span className={styles.pillDot} aria-hidden="true" />}
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Endpoints</h2>
        <p className={styles.blockIntro}>
          All <span className={styles.code}>GET</span>, all JSON, all sending{" "}
          <span className={styles.code}>Access-Control-Allow-Origin: *</span> so you can call
          them straight from the browser.
        </p>
        {endpoints.map((e) => (
          <a key={e.path} href={`${base}${e.path}`} className={styles.endpoint}>
            <span className={styles.endpointTop}>
              <span className={styles.verb}>GET</span>
              <span className={styles.path}>
                /api/{version}
                {e.path}
              </span>
              <span className={styles.size}>{e.size}</span>
            </span>
            <span className={styles.what}>{e.what}</span>
          </a>
        ))}
      </div>

      <div className={`${styles.block} ${styles.blockSoft}`}>
        <h2 className={styles.blockTitle}>Try it</h2>
        <div className={styles.codeBox}>
          <code className={styles.codeLine}>{curl}</code>
        </div>
        <p className={styles.blockBody}>
          Every response uses the same envelope — the data, plus where it came from and when
          it last changed. <span className={styles.code}>updated</span> is the date of the
          most recent real change, not the last deploy, so you can use it to decide whether
          to re-fetch.
        </p>
      </div>

      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Before you use it</h2>
        {caveats.map((c) => (
          <div key={c.h} className={styles.caveat}>
            <p className={styles.caveatBody}>
              <strong className={styles.caveatLead}>{c.h}</strong> {c.p}
            </p>
          </div>
        ))}
      </div>

      <div className={styles.licence}>
        <h2 className={styles.licenceTitle}>Licence &amp; attribution</h2>
        <p className={styles.licenceBody}>
          Released under CC BY 4.0. Use it commercially, remix it, redistribute it — just
          credit the source:
        </p>
        <div className={styles.codeBox}>
          <code className={styles.codeAttr}>{attribution}</code>
        </div>
      </div>

      <div className={styles.spacer} />
      <div className={styles.actionBar}>
        <CopyButton value={curl} className={styles.actionPrimary} label="Copy the curl" />
      </div>
    </div>
  );
}
