"use client"; // date-gated: renders only on July 2 (Burna Boy's birthday), every year

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import styles from "./BirthdayCelebration.module.css";

const BIRTH_YEAR = 1991; // Damini Ebunoluwa Ogulu, born July 2, 1991
const COLORS = ["#ffb627", "#ffd24a", "#c98a2e", "#e2342b", "#f5f4f0"];
const PIECE_COUNT = 56;
const CONFETTI_MS = 12_000; // one celebratory burst, then out of the way

// 35 → "35th", 41 → "41st", …
function ordinal(n: number): string {
  const t = n % 10, h = n % 100;
  if (t === 1 && h !== 11) return `${n}st`;
  if (t === 2 && h !== 12) return `${n}nd`;
  if (t === 3 && h !== 13) return `${n}rd`;
  return `${n}th`;
}

type BirthdayState = { age: number; year: number; dismissed: boolean };

export default function BirthdayCelebration() {
  const [bday, setBday] = useState<BirthdayState | null>(null);
  const [confettiOn, setConfettiOn] = useState(true);

  // Client-only date check (the site is statically prerendered, so the
  // build-time date means nothing — the visitor's clock decides). Reading the
  // date + sessionStorage is browser-only, so this must run after mount.
  useEffect(() => {
    const now = new Date();
    if (now.getMonth() !== 6 || now.getDate() !== 2) return; // July = month 6
    const year = now.getFullYear();
    const dismissed = !!sessionStorage.getItem(`birthday-dismissed-${year}`);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount read of browser-only APIs
    setBday({ age: year - BIRTH_YEAR, year, dismissed });
    const timer = setTimeout(() => setConfettiOn(false), CONFETTI_MS);
    return () => clearTimeout(timer);
  }, []);

  // Deterministic pseudo-random spread so the burst looks scattered but
  // renders identically across re-renders.
  const pieces = useMemo(
    () =>
      Array.from({ length: PIECE_COUNT }, (_, i) => ({
        left: `${(i * 37) % 100}%`,
        size: 6 + ((i * 13) % 7),
        color: COLORS[i % COLORS.length],
        delay: `${((i * 29) % 40) / 10}s`,
        duration: `${5.5 + ((i * 17) % 30) / 10}s`,
        sway: `${-70 + ((i * 53) % 140)}px`,
        spin: `${540 + ((i * 97) % 540)}deg`,
        round: i % 4 === 0,
      })),
    []
  );

  if (!bday) return null;

  const dismiss = () => {
    sessionStorage.setItem(`birthday-dismissed-${bday.year}`, "1");
    setBday({ ...bday, dismissed: true });
  };

  return (
    <>
      {confettiOn && !bday.dismissed && (
        <div className={styles.confetti} aria-hidden="true">
          {pieces.map((p, i) => (
            <span
              key={i}
              className={`${styles.piece} ${p.round ? styles.round : ""}`}
              style={
                {
                  left: p.left,
                  width: p.size,
                  height: p.round ? p.size : p.size * 1.6,
                  background: p.color,
                  animationDelay: p.delay,
                  animationDuration: p.duration,
                  "--sway": p.sway,
                  "--spin": p.spin,
                } as CSSProperties
              }
            />
          ))}
        </div>
      )}

      {!bday.dismissed && (
        <aside className={styles.banner} role="note" aria-label={`Burna Boy turns ${bday.age} today`}>
          <span className={styles.cake} aria-hidden="true">🎂</span>
          <span className={styles.text}>
            <strong className={styles.title}>Happy {ordinal(bday.age)} Birthday, African Giant</strong>
            <span className={styles.sub}>
              Damini “Burna Boy” Ogulu · born July 2, 1991 ·{" "}
              <Link href="/about" className={styles.link}>his story →</Link>
            </span>
          </span>
          <button type="button" className={styles.close} aria-label="Dismiss birthday banner" onClick={dismiss}>
            ×
          </button>
        </aside>
      )}
    </>
  );
}
