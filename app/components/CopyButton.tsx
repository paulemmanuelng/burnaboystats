"use client"; // writes to the clipboard

import { useEffect, useState } from "react";

/**
 * The pre-Clipboard-API route: select the text in an off-screen textarea and
 * run the copy command. Only reached when writeText is missing or refuses —
 * an insecure context, an older in-app browser — and only for the buttons that
 * ask for it. Focus goes back where it was, so a keyboard user stays on the
 * button. True only if the browser reports the copy happened.
 */
function copyViaTextarea(value: string): boolean {
  const back = document.activeElement as HTMLElement | null;
  const ta = document.createElement("textarea");
  ta.value = value;
  ta.setAttribute("readonly", "");
  ta.setAttribute("aria-hidden", "true");
  Object.assign(ta.style, { position: "fixed", top: "0", left: "0", opacity: "0", pointerEvents: "none" });
  document.body.appendChild(ta);
  ta.select();
  ta.setSelectionRange(0, value.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {
    ok = false;
  }
  ta.remove();
  back?.focus();
  return ok;
}

/**
 * A copy-to-clipboard button that reports back in place.
 *
 * The confirmation replaces the label rather than appearing beside it, so the
 * control never changes width mid-interaction, and it reverts on its own — a
 * button stuck reading "Copied" tells you nothing about the next press.
 * `aria-live` announces the change to a screen reader, which otherwise gets no
 * signal that anything happened.
 */
export default function CopyButton({
  value,
  className,
  label = "Copy",
  fallback = false,
}: {
  value: string;
  className?: string;
  label?: string;
  /** When the Clipboard API is missing or refuses, try the textarea route
   *  before giving up (still silent if that fails too). */
  fallback?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      className={className}
      style={copied ? { color: "var(--green)", borderColor: "var(--green)" } : undefined}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
        } catch {
          // Clipboard access can be refused (insecure context, permissions).
          // Say nothing rather than claim a copy that didn't happen — unless
          // the older route is allowed here and reports that it worked.
          if (fallback && copyViaTextarea(value)) setCopied(true);
        }
      }}
    >
      <span aria-live="polite">{copied ? "Copied ✓" : label}</span>
    </button>
  );
}
