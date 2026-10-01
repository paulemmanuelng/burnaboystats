"use client";

import { useEffect, useRef } from "react";
import { readCountryParam, withCountry, type CountryParam } from "../lib/tourMapUrl";

/**
 * `?country=` for one layout of the tour map (design response item 76).
 *
 * - On load, and on Back or Forward, the layout is told what the address says
 *   (`onUrl`); a code that is not a country is dropped from the address.
 * - When a selection OPENS, one history entry is pushed; as it MOVES from
 *   country to country, that entry is replaced, so Back doesn't walk through
 *   every country tapped. Back then clears it.
 * - Closing a selection this page pushed goes back one entry; closing one the
 *   page was opened with just drops the parameter.
 *
 * Both layouts are in the page at once (CSS shows one); both listen, and only
 * the one on screen is ever used, so only it writes.
 */
export function useTourMapUrl(played: readonly { a2: string }[], onUrl: (p: CountryParam, initial: boolean) => void) {
  const pushed = useRef(false);
  const cb = useRef(onUrl);
  useEffect(() => {
    cb.current = onUrl;
  });
  useEffect(() => {
    const read = (initial: boolean) => {
      const p = readCountryParam(window.location.search, played);
      if (p?.kind === "invalid") window.history.replaceState(null, "", withCountry(window.location.href, null));
      cb.current(p, initial);
    };
    read(true);
    const onPop = () => {
      pushed.current = false;
      read(false);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [played]);

  const hasParam = () => new URLSearchParams(window.location.search).has("country");
  return {
    open(a2: string) {
      const url = withCountry(window.location.href, a2);
      if (hasParam()) window.history.replaceState(null, "", url);
      else {
        window.history.pushState(null, "", url);
        pushed.current = true;
      }
    },
    close() {
      if (!hasParam()) return;
      if (pushed.current) {
        pushed.current = false;
        window.history.back();
      } else window.history.replaceState(null, "", withCountry(window.location.href, null));
    },
  };
}
