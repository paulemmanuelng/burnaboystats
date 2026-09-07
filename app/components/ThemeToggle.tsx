"use client";

import { useEffect, useState, type ReactElement } from "react";
import styles from "./themeToggle.module.css";

/**
 * Appearance control — dark, light, or follow the device.
 *
 * The three states are NOT two booleans. "System" is a standing instruction
 * that has to keep being obeyed after the page loads: an OS that flips to
 * light at sunset must flip the page with it, which is why the choice and the
 * applied theme are separate things here. `localStorage.theme` holds the
 * CHOICE (dark | light | system); `data-theme` on <html> holds the RESOLVED
 * theme (dark | light), and it is always one of those two so that CSS never
 * has to ask a media query what "no attribute" meant.
 *
 * The same resolution runs in an inline script in layout.tsx before first
 * paint. This component only takes over once React is running — which is why
 * it renders nothing selected until it has mounted: on the server there is no
 * localStorage to read, and guessing would light the wrong segment for a
 * frame.
 */

type Choice = "dark" | "light" | "system";

const QUERY = "(prefers-color-scheme: light)";
const resolve = (c: Choice): "dark" | "light" =>
  c === "system" ? (window.matchMedia(QUERY).matches ? "light" : "dark") : c;

const OPTIONS: { value: Choice; label: string; icon: ReactElement }[] = [
  {
    value: "dark",
    label: "Dark",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
      </svg>
    ),
  },
  {
    value: "light",
    label: "Light",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    value: "system",
    label: "System",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
];

export default function ThemeToggle({ variant = "compact" }: { variant?: "compact" | "full" }) {
  const [choice, setChoice] = useState<Choice | null>(null);

  // Read the stored choice once mounted. Unset means dark — the site's default
  // is today's design, not "whatever the device says"; system is opt-in.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem("theme");
    } catch {
      /* private mode, storage disabled — fall through to the default */
    }
    setChoice(stored === "light" || stored === "system" ? stored : "dark");
  }, []);

  // While the choice is "system", the OS is the source of truth and can change
  // under us. The listener is removed the moment the choice is not "system",
  // so an explicit pick is never overridden at sunset.
  useEffect(() => {
    if (choice !== "system") return;
    const mq = window.matchMedia(QUERY);
    const sync = () => {
      document.documentElement.dataset.theme = mq.matches ? "light" : "dark";
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [choice]);

  const pick = (next: Choice) => {
    setChoice(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* the theme still applies for this page view */
    }
    document.documentElement.dataset.theme = resolve(next);
  };

  return (
    <div
      className={`${styles.seg} ${variant === "full" ? styles.full : styles.compact}`}
      role="radiogroup"
      aria-label="Appearance"
    >
      {OPTIONS.map((o) => {
        const on = choice === o.value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={on}
            aria-label={variant === "compact" ? o.label : undefined}
            title={variant === "compact" ? o.label : undefined}
            className={`${styles.opt} ${on ? styles.on : ""}`}
            onClick={() => pick(o.value)}
          >
            <span className={styles.icon}>{o.icon}</span>
            {variant === "full" && <span className={styles.label}>{o.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
