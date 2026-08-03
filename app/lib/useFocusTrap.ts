"use client"; // a hook — only ever runs inside client components

import { useEffect, type RefObject } from "react";

/**
 * Keeps Tab focus inside an open modal, wrapping at both ends.
 *
 * aria-modal tells assistive tech the rest of the page is inert, but it does
 * nothing to the keyboard: without this, Tab walks straight out of the dialog
 * into the page behind it. SearchPalette and TracklistDialog each grew their
 * own copy of this logic; this is the shared version for the other dialogs,
 * PC and mobile alike.
 *
 * Listens in the capture phase on document so it works no matter which element
 * inside the dialog has focus, and only ever intervenes at the two ends — the
 * browser handles every Tab in between natively.
 */
export function useFocusTrap(ref: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const root = ref.current;
      if (!root) return;

      const focusable = [
        ...root.querySelectorAll<HTMLElement>(
          'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        ),
      ].filter(
        (el) =>
          !el.hasAttribute("disabled") &&
          // Excludes programmatic-only stops like the sheet's backdrop button.
          el.getAttribute("tabindex") !== "-1" &&
          el.getClientRects().length > 0
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const current = document.activeElement;

      // Focus outside the dialog (or on the boundary) gets pulled back in.
      if (e.shiftKey && (current === first || !root.contains(current))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (current === last || !root.contains(current))) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [ref, active]);
}
