"use client";

import { useEffect, useSyncExternalStore, type ReactElement } from "react";
import styles from "./themeToggle.module.css";

/**
 * Appearance control — dark, light, or follow the device.
 *
 * The three states are NOT two booleans. "System" is a standing instruction
 * that has to keep being obeyed after the page loads: an OS that flips to
 * light at sunset must flip the page with it. So the CHOICE and the APPLIED
 * theme are separate things here. `localStorage.theme` holds the choice
 * (dark | light | system); `data-theme` on <html> holds the resolved theme,
 * and it is always dark or light so that CSS never has to ask a media query
 * what "no attribute" meant.
 *
 * The same resolution runs in an inline script in layout.tsx before first
 * paint; this component only takes over once React is running.
 *
 * The choice is read through useSyncExternalStore rather than into state in an
 * effect. localStorage IS an external store shared with that inline script and
 * with any other tab, which is what this hook exists for — and it means the
 * component never calls setState during an effect, and the only place the DOM
 * is written is one effect keyed on the choice.
 */

type Choice = "dark" | "light" | "system";

const QUERY = "(prefers-color-scheme: light)";
/** Same-tab notification; `storage` only fires in OTHER tabs. */
const CHANGED = "burnaboystats:themechange";

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGED, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGED, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getChoice(): Choice {
  try {
    const v = localStorage.getItem("theme");
    if (v === "light" || v === "dark" || v === "system") return v;
  } catch {
    /* private mode, storage disabled — fall through to the default */
  }
  // Unset means dark: the site's default is today's design, not "whatever the
  // device says". System is an opt-in, which is why it is stored explicitly.
  return "dark";
}

/** On the server there is no storage, and dark is what the markup assumes. */
const getServerChoice = (): Choice => "dark";

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
  const choice = useSyncExternalStore(subscribe, getChoice, getServerChoice);

  // The one place <html> is written. Re-runs when the choice changes, and while
  // the choice is "system" it also follows the OS — the listener is removed the
  // moment the choice is not "system", so an explicit pick is never overridden.
  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const apply = () => {
      document.documentElement.dataset.theme =
        choice === "system" ? (mq.matches ? "light" : "dark") : choice;
    };
    apply();
    if (choice !== "system") return;
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [choice]);

  const pick = (next: Choice) => {
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* the theme still applies for this page view */
    }
    window.dispatchEvent(new Event(CHANGED));
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
