"use client"; // writes to the clipboard

import { useEffect, useState } from "react";

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
}: {
  value: string;
  className?: string;
  label?: string;
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
          // Say nothing rather than claim a copy that didn't happen.
        }
      }}
    >
      <span aria-live="polite">{copied ? "Copied ✓" : label}</span>
    </button>
  );
}
