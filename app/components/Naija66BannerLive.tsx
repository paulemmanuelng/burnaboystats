"use client"; // reads the visitor's clock and the live prize count

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { FIRST_DROP_MS, bannerPhase, watHour, type BannerPhase } from "../lib/naija66/clock";
import { PRIZE } from "../lib/naija66/copy";
import type { HuntStatus } from "../lib/naija66/state";
import styles from "./naija66Banner.module.css";

const EVERY_MINUTE = (onChange: () => void) => {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
};
const clientPhase = () => bannerPhase(Date.now());

/** "9am WAT", from the committed schedule. */
const FIRST_HOUR = watHour(FIRST_DROP_MS);

/**
 * One status read for every banner on the page. The home page mounts the strip
 * once per layout and CSS hides one, but both run their effects, so each load
 * fetched the status twice — two function calls and two billed Redis reads for
 * one visible line (live debug, 1 Oct 2026). Both mount in one commit, so their
 * effects run in the same tick and the second joins the first's request. The
 * share ends when the request settles, so a later phase change reads afresh.
 */
let inFlight: Promise<HuntStatus | null> | null = null;
function readStatus(): Promise<HuntStatus | null> {
  inFlight ??= fetch("/api/naija66/status", { cache: "no-store" })
    .then((r) => (r.ok ? (r.json() as Promise<HuntStatus>) : null))
    .catch(() => null)
    .finally(() => {
      inFlight = null;
    });
  return inFlight;
}

/**
 * The line the banner says, from the phase and (live) the prizes still out.
 * `ready` is false when the server says the hunt is misconfigured (it fails
 * closed): then the banner must not call it live, because /naija66 will say it
 * isn't open.
 */
export function bannerLine(phase: BannerPhase, left: number | null, ready = true): string {
  if (phase === "tomorrow") return `Tomorrow ${FIRST_HOUR}: the Naija @ 66 hunt — ${PRIZE.banner}`;
  if (phase === "today") return `Today ${FIRST_HOUR}: the Naija @ 66 hunt — ${PRIZE.banner}`;
  if (!ready) return "Naija @ 66 — starting soon";
  if (left === null) return `Naija @ 66 is live — ${PRIZE.banner}`;
  if (left === 0) return "Naija @ 66 — all five prizes claimed. See the winners";
  return `Naija @ 66 is live — ${left} of 5 prizes left`;
}

/**
 * The home page's Naija @ 66 strip, in either layout.
 *
 * The server renders it in the phase it saw (the home page revalidates
 * hourly); the visitor's clock takes over after hydration. Every phase is one
 * line (desktop) or two (phone) in a box of fixed height, so nothing it says
 * can move the page. Once the hunt closes it renders nothing — and a cached
 * page that still carries it has already hidden it before first paint (see
 * Naija66Banner.tsx).
 */
export default function Naija66BannerLive({
  layout,
  initialPhase,
}: {
  layout: "desktop" | "phone";
  initialPhase: BannerPhase;
}) {
  const phase = useSyncExternalStore(EVERY_MINUTE, clientPhase, () => initialPhase);
  const [left, setLeft] = useState<number | null>(null);
  const [ready, setReady] = useState(true);

  useEffect(() => {
    if (phase !== "live") return;
    let alive = true;
    readStatus()
      .then((s) => {
        if (!alive || !s) return;
        if (s.ready === false) setReady(false);
        else if (s.ready && Array.isArray(s.prizes)) {
          setLeft(s.prizes.filter((p) => p.state === "live" || p.state === "sleeping").length);
        }
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [phase]);

  if (phase === "over") return null;

  return (
    <Link href="/naija66" className={`${styles.banner} ${layout === "phone" ? styles.phone : styles.desktop}`}>
      <span className={styles.inner}>
        <span className={styles.flag} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span className={styles.line}>{bannerLine(phase, left, ready)}</span>
        <span className={styles.cta}>
          <span className={styles.ctaWord}>{phase === "live" && ready ? "Play" : "How it works"} </span>→
        </span>
      </span>
    </Link>
  );
}
