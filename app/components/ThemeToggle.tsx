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
  // The OS is part of this store too: while the choice is "system" the RESOLVED
  // theme changes without anything being stored, and the mini flip has to know
  // which way it is flipping.
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", onChange);
  return () => {
    window.removeEventListener(CHANGED, onChange);
    window.removeEventListener("storage", onChange);
    mq.removeEventListener("change", onChange);
  };
}

/** What is actually painted right now, which is not the same as the choice. */
function getResolved(): "dark" | "light" {
  const c = getChoice();
  return c === "system" ? (window.matchMedia(QUERY).matches ? "light" : "dark") : c;
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

/** The strip behind a phone's status bar, per applied theme — layout.tsx's
 *  pre-paint script writes the same two values. */
const THEME_COLOR = { light: "#f7f4ee", dark: "#0a0a0b" } as const;

/**
 * Every theme-color tag to the APPLIED theme (data-theme on <html>).
 *
 * The tag is not ours to keep: it is the router's (layout.tsx's viewport), and
 * a client-side navigation can drop it and insert a fresh one carrying the
 * server's dark value. After a flip to light, tapping from /music to /records
 * did exactly that and turned the status-bar strip black over a paper page
 * until the next full load (debug pass 5 Oct 2026, V-global-10). So this runs
 * on every theme-color tag, and again whenever <head> changes.
 */
function paintThemeColor() {
  const want = THEME_COLOR[document.documentElement.dataset.theme === "light" ? "light" : "dark"];
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
    if (m.getAttribute("content") !== want) m.setAttribute("content", want);
  });
}

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

export default function ThemeToggle({
  variant = "compact",
}: {
  variant?: "compact" | "full" | "mini";
}) {
  const choice = useSyncExternalStore(subscribe, getChoice, getServerChoice);
  const resolved = useSyncExternalStore(subscribe, getResolved, getServerChoice) as "dark" | "light";

  // The one place <html> is written. Re-runs when the choice changes, and while
  // the choice is "system" it also follows the OS — the listener is removed the
  // moment the choice is not "system", so an explicit pick is never overridden.
  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const apply = () => {
      const t = choice === "system" ? (mq.matches ? "light" : "dark") : choice;
      document.documentElement.dataset.theme = t;
      // The strip behind the iOS status bar sits above the masthead, which now
      // themes — so it has to follow, or a light page keeps a black band.
      paintThemeColor();
    };
    apply();
    // ...and keeps following after the router re-renders the tag. Writing the
    // value it wants fires this once more and finds nothing left to change.
    const head = new MutationObserver(paintThemeColor);
    head.observe(document.head, { childList: true, subtree: true, attributes: true, attributeFilter: ["content"] });
    if (choice !== "system") return () => head.disconnect();
    mq.addEventListener("change", apply);
    return () => {
      head.disconnect();
      mq.removeEventListener("change", apply);
    };
  }, [choice]);

  const pick = (next: Choice) => {
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* the theme still applies for this page view */
    }
    window.dispatchEvent(new Event(CHANGED));
  };

  // The one-tap flip for the mobile bar. Not a picker: it shows the mode you
  // will GET and swaps to the other, which is why it can be a single 34px
  // circle where three 44px segments did not fit. "System" is still reachable,
  // in the sheet -- tapping this from system simply commits to what you see.
  if (variant === "mini") {
    const next = resolved === "dark" ? "light" : "dark";
    const label = next === "light" ? "Switch to light mode" : "Switch to dark mode";
    return (
      <button
        type="button"
        className={styles.mini}
        onClick={() => pick(next)}
        aria-label={label}
        title={label}
      >
        <span className={styles.icon}>
          {(next === "light" ? OPTIONS[1] : OPTIONS[0]).icon}
        </span>
      </button>
    );
  }

  // A radiogroup is ONE Tab stop: the checked option takes focus, and the arrow
  // keys move along the three and pick as they go, wrapping at the ends. Each
  // button was its own Tab stop and the arrows did nothing, so a keyboard or
  // screen-reader user met three loose buttons where the role promised radios
  // (debug pass 5 Oct 2026, V-global-18) -- the footer's control and the sheet's.
  return (
    <div
      className={`${styles.seg} ${variant === "full" ? styles.full : styles.compact}`}
      role="radiogroup"
      aria-label="Appearance"
    >
      {OPTIONS.map((o, i) => {
        const on = choice === o.value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={on}
            aria-label={variant === "compact" ? o.label : undefined}
            title={variant === "compact" ? o.label : undefined}
            tabIndex={on ? 0 : -1}
            className={`${styles.opt} ${on ? styles.on : ""}`}
            onClick={() => pick(o.value)}
            onKeyDown={(e) => {
              const to = e.key === "ArrowRight" || e.key === "ArrowDown" ? i + 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? i - 1 : null;
              if (to === null) return;
              e.preventDefault();
              const next = OPTIONS[(to + OPTIONS.length) % OPTIONS.length].value;
              pick(next);
              e.currentTarget.parentElement?.querySelector<HTMLButtonElement>(`[data-choice="${next}"]`)?.focus();
            }}
            data-choice={o.value}
          >
            <span className={styles.icon}>{o.icon}</span>
            {variant === "full" && <span className={styles.label}>{o.label}</span>}
          </button>
        );
      })}
    </div>
  );
}
