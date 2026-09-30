"use client"; // reads the visitor's clock and the live prize count

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { bannerPhase, type BannerPhase } from "../lib/naija66/clock";
import type { HuntStatus } from "../lib/naija66/state";
import styles from "./naija66Banner.module.css";

const EVERY_MINUTE = (onChange: () => void) => {
  const id = setInterval(onChange, 60_000);
  return () => clearInterval(id);
};
const clientPhase = () => bannerPhase(Date.now());

/** The line the banner says, from the phase and (live) the prizes still out. */
export function bannerLine(phase: BannerPhase, left: number | null): string {
  if (phase === "tomorrow") return "Tomorrow 9am WAT: the Naija @ 66 hunt — five months of Spotify Premium";
  if (phase === "today") return "Today 9am WAT: the Naija @ 66 hunt — five months of Spotify Premium";
  if (left === null) return "Naija @ 66 is live — five months of Spotify Premium to find";
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

  useEffect(() => {
    if (phase !== "live") return;
    let alive = true;
    fetch("/api/naija66/status", { cache: "no-store" })
      .then((r) => (r.ok ? (r.json() as Promise<HuntStatus>) : null))
      .then((s) => {
        if (alive && s?.ready && Array.isArray(s.prizes)) {
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
        <span className={styles.line}>{bannerLine(phase, left)}</span>
        <span className={styles.cta}>
          <span className={styles.ctaWord}>{phase === "live" ? "Play" : "How it works"} </span>→
        </span>
      </span>
    </Link>
  );
}
