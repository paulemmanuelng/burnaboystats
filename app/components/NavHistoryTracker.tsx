"use client"; // watches the route to know whether back has somewhere to go

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { noteJumpClick, noteNavigation, notePop, settleJump } from "../lib/backNav";

/**
 * Records that a client-side navigation happened, so the mobile back bars can
 * tell "go back to where you came from" apart from "there is nowhere to go
 * back to". Renders nothing; mounted once in the root layout so it sees every
 * route change regardless of which screen is showing. It also keeps in-page
 * "#…" jumps from leaving history entries that Back cannot return through
 * (lib/backNav noteJumpClick / settleJump).
 */
export default function NavHistoryTracker() {
  const pathname = usePathname();
  // The first run is the initial render, not a navigation.
  const seen = useRef(false);

  useEffect(() => {
    if (seen.current) noteNavigation();
    seen.current = true;
  }, [pathname]);

  // Back and forward are history traversals, not new pages — depth must fall,
  // not rise, or the back button at the top of the stack exits the site.
  useEffect(() => {
    window.addEventListener("popstate", notePop);
    // Capture, so a link's own handler stopping the click can't hide it.
    document.addEventListener("click", noteJumpClick, true);
    window.addEventListener("popstate", settleJump);
    window.addEventListener("hashchange", settleJump);
    return () => {
      window.removeEventListener("popstate", notePop);
      document.removeEventListener("click", noteJumpClick, true);
      window.removeEventListener("popstate", settleJump);
      window.removeEventListener("hashchange", settleJump);
    };
  }, []);

  return null;
}
