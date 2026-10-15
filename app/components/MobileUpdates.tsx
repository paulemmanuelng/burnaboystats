"use client"; // the category rail filters the feed

import { useEffect, useRef, useState } from "react";
import Link from "./SiteLink";
import SubscribeBox, { landedFromLocation } from "./SubscribeBox";
import styles from "./mobileUpdates.module.css";
import { markFor } from "../lib/updateInk";
import { KindMark } from "./OnThisDayKind";
import { noSept } from "../lib/dates";
import type { Update, UpdateCategory } from "../data/updates";
import MobileMenuButton from "./MobileMenuButton";
import BackLink from "./BackLink";

/**
 * The mobile updates screen.
 *
 * Built from designs/mobile/Burna Boy Stats - Mobile.dc.html, screen 06.
 *
 * Each entry is one block — category pill and date on top, the text beneath —
 * under a 28px month label that sticks under the back bar while its month is
 * in view: "{MONTH YEAR} · {n} entries", the count under the active filter
 * (J4-Q2, fix 91; screen 06's unheaded list is superseded). After the 20th
 * entry a "Top" pill above the tab bar returns to the filter rail. The filter
 * is the same set of categories, as a rail.
 *
 * The Saturday digest is a band after the third entry (design response §2):
 * on a phone everything costs vertical room, so the module pays for its place
 * by letting the reader see three entries first. The one exception is a
 * landing from the confirmation email (?subscribed=…), when it renders under
 * the hero — the reader came back for exactly that message.
 *
 * This screen keeps the five-tab bar, so there is no action bar here.
 */

const DATE_FMT = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  timeZone: "UTC",
});
const MONTH_FMT = new Intl.DateTimeFormat("en-GB", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});
const asDate = (iso: string) => new Date(`${iso}T00:00:00Z`);
const entries = (n: number) => `${n} ${n === 1 ? "entry" : "entries"}`;

/** The "Top" pill shows once this many entries have passed under the label. */
const TOP_AFTER = 20;
/** The back bar (69) and the docked month label (28) under it. */
const PASSED_LINE = 69 + 28;

export default function MobileUpdates({
  items,
  lastEntry,
  subscribeEnabled = false,
}: {
  items: Update[];
  lastEntry: string;
  /** Resend is configured on the server — show the digest box, not the RSS link. */
  subscribeEnabled?: boolean;
}) {
  const [cat, setCat] = useState<UpdateCategory | null>(null);
  // Whether this is a landing from the confirm link — read once on mount, the
  // same way SubscribeBox reads it (a server render has no query string).
  const [landed, setLanded] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount read of the URL
    if (landedFromLocation()) setLanded(true);
  }, []);

  const counts = items.reduce<Record<string, number>>((acc, u) => {
    acc[u.category] = (acc[u.category] ?? 0) + 1;
    return acc;
  }, {});
  const cats = (Object.keys(counts) as UpdateCategory[]).sort(
    (a, b) => counts[b] - counts[a]
  );
  const shown = cat ? items.filter((u) => u.category === cat) : items;

  // Each month's count under the active filter, for its label.
  const inMonth = shown.reduce<Record<string, number>>((acc, u) => {
    const k = u.date.slice(0, 7);
    acc[k] = (acc[k] ?? 0) + 1;
    return acc;
  }, {});

  // The Top pill: shown once the 20th entry of the current filter has
  // scrolled up past the docked month label, hidden again above it. Read
  // from the row's place on each scroll frame, as lib/spy reads its targets:
  // an IntersectionObserver only fires when the row crosses the screen, so an
  // instant jump that skips it (reduced motion, End, a jump to the foot) left
  // the pill as it was.
  const list = useRef<HTMLDivElement>(null);
  const [past, setPast] = useState(false);
  useEffect(() => {
    const root = list.current;
    if (!root) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      // The desktop layout's copy of the page is not laid out: leave it.
      if (root.offsetParent === null) return;
      const nth = root.querySelectorAll(`.${styles.row}`)[TOP_AFTER - 1];
      // A filter with fewer than 20 entries has no pill. Otherwise the row
      // has passed once it is wholly above the back bar and the docked label.
      setPast(!!nth && nth.getBoundingClientRect().bottom <= PASSED_LINE);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [cat]);

  const toRail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rail = document.getElementById("updates-rail-m");
    if (!rail) return;
    e.preventDefault();
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    rail.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "start" });
    rail.querySelector<HTMLElement>('[aria-pressed="true"]')?.focus({ preventScroll: true });
  };

  // The digest band follows the third entry, unless the reader landed from
  // the confirm link (it is under the hero then).
  const band = subscribeEnabled && !landed;

  /** A run of entries under its month labels; a month the digest band splits is labelled again after it. */
  const months = (run: Update[], from: number) => {
    const groups: { key: string; items: { u: Update; i: number }[] }[] = [];
    run.forEach((u, k) => {
      const key = u.date.slice(0, 7);
      const last = groups[groups.length - 1];
      if (last?.key === key) last.items.push({ u, i: from + k });
      else groups.push({ key, items: [{ u, i: from + k }] });
    });
    return groups.map((g) => (
      <div key={`${g.key}-${from}`} className={styles.monthGroup}>
        <div className={styles.dockMonth}>
          {MONTH_FMT.format(asDate(`${g.key}-01`))} · {entries(inMonth[g.key])}
        </div>
        {g.items.map(({ u, i }) => row(u, i))}
      </div>
    ));
  };

  const row = (u: Update, i: number) => {
    const mark = markFor(u.category);
    return (
      <Link key={`${u.date}-${i}-${u.href}`} href={u.href} className={styles.row}>
        <div className={styles.rowTop}>
          <span className={styles.tag}>
            {mark && <KindMark kind={mark} />}
            {u.category}
          </span>
          <span className={styles.rowDate}>{noSept(DATE_FMT.format(asDate(u.date)))}</span>
        </div>
        <div className={styles.rowText}>{u.text}</div>
      </Link>
    );
  };

  return (
    <div className={styles.screen}>
      {/* Back bar */}
      <div className={styles.backBar}>
        <BackLink href="/" aria-label="Back" className={styles.backBtn}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </BackLink>
        <span className={styles.backLabel}>Updates</span>
        {subscribeEnabled ? (
          <a href="#digest-m" className={styles.subscribe}>Subscribe</a>
        ) : (
          <a href="/rss.xml" className={styles.rss}>RSS ↗</a>
        )}
        <MobileMenuButton />
      </div>

      {/* Hero */}
      <div className={styles.hero}>
        <div className={styles.kicker}>The change log</div>
        {/* The page's <h1>. Both layouts sit in the DOM at once, so the document
            carries two — one per layout, and only ever one is visible. The SEO
            gate checks that pairing rather than a bare count. */}
        <h1 className={styles.title}>
          Latest <span className={styles.gold}>Updates</span>
        </h1>
        <p className={styles.lede}>
          Chart peaks, certifications and records, as they&apos;re added.
        </p>
        <div className={styles.lastEntry}>
          <span className={styles.liveDot} aria-hidden="true" />
          Last entry <strong>{lastEntry}</strong>
        </div>
      </div>

      {/* Landing from the confirmation email: the module (the ticket, or the
          note above the form) sits right here, not three entries down. */}
      {subscribeEnabled && landed && <SubscribeBox id="digest-m" compact entries="#entries-m" />}

      {/* Filter rail. The selected chip is N2's ember edge, wash and ink label
          (styles.chipOn); a category keeps its colour on its dot, as the
          certifications tiers do. It was the category's colour (gold for
          "All") on the edge and label, set inline (owner, 5 Oct 2026). */}
      <div id="updates-rail-m" className={styles.rail}>
        <button
          type="button"
          aria-pressed={cat === null}
          onClick={() => setCat(null)}
          className={`${styles.chip} ${cat === null ? styles.chipOn : ""}`}
        >
          All {items.length}
        </button>
        {cats.map((c) => {
          const on = cat === c;
          const mark = markFor(c);
          return (
            <button
              key={c}
              type="button"
              aria-pressed={on}
              onClick={() => setCat(on ? null : c)}
              className={`${styles.chip} ${on ? styles.chipOn : ""}`}
            >
              {mark && <KindMark kind={mark} />}
              {c} {counts[c]}
            </button>
          );
        })}
      </div>

      <p className={styles.count}>
        {shown.length} {shown.length === 1 ? "entry" : "entries"}
      </p>

      {/* Feed. The digest band follows the third entry (or the last, when a
          filter leaves fewer); the back bar's "Subscribe" jumps to it. The band
          sits between two slices rather than inside the map so a filter change
          re-keys the rows around it without remounting a half-typed form. */}
      <div ref={list} id="entries-m" className={styles.list} data-dock="phone-month">
        {band ? (
          <>
            {months(shown.slice(0, 3), 0)}
            <SubscribeBox id="digest-m" compact entries="#entries-m" />
            {months(shown.slice(3), 3)}
          </>
        ) : (
          months(shown, 0)
        )}
      </div>

      {/* After the 20th entry, back to the filter rail (fix 91): an in-page
          jump, so no glyph; outlined, not gold. */}
      <a href="#updates-rail-m" className={`${styles.topPill} ${past ? styles.topPillShown : ""}`} onClick={toRail}>
        Top
      </a>

      {/* Not the old 96px spacer, which stacked on the body's tab-bar clearance
          (14 Oct 2026): only what the fixed Top pill above the tab bar needs,
          so the last entry ends clear of it — see .pillClear. */}
      <div className={styles.pillClear} aria-hidden="true" />
    </div>
  );
}
