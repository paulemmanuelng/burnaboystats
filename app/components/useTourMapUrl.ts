"use client";

import { useEffect, useRef } from "react";
import { replaceUrl } from "../lib/deepLink";
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
 *
 * Every replace keeps the entry's own state and leaves the router's keys out
 * (lib/deepLink replaceUrl), so Next's patched replaceState copies its state
 * back and learns the new address. The drop of a code that is not a country
 * also waits one timer turn (debug 7 Oct 2026). On arrival it ran in this
 * effect, and the app router, ABOVE the page, patches history in an effect of
 * its own that runs later in the same commit: the unpatched replaceState left
 * the entry with state null, and Next ignores a popstate with no state. Live,
 * /records/tours/map?country=zz, the link to the box-office board, then Back:
 * the address read /records/tours/map and "Highest-grossing shows" stayed on
 * screen. As the box-office board's unknown ?artist= (lib/useBoardView).
 */
export function useTourMapUrl(played: readonly { a2: string }[], onUrl: (p: CountryParam, initial: boolean) => void) {
  const pushed = useRef(false);
  const cb = useRef(onUrl);
  useEffect(() => {
    cb.current = onUrl;
  });
  useEffect(() => {
    // A Back that leaves the map fires popstate here before the map unmounts;
    // a drop only ever applies to the map's own address.
    const page = window.location.pathname;
    let drop: ReturnType<typeof setTimeout> | undefined;
    const read = (initial: boolean) => {
      const p = readCountryParam(window.location.search, played);
      if (p?.kind === "invalid") {
        clearTimeout(drop);
        drop = setTimeout(() => {
          if (window.location.pathname !== page) return;
          if (readCountryParam(window.location.search, played)?.kind !== "invalid") return;
          replaceUrl(withCountry(window.location.href, null));
        }, 0);
      }
      cb.current(p, initial);
    };
    read(true);
    const onPop = () => {
      pushed.current = false;
      read(false);
    };
    window.addEventListener("popstate", onPop);
    return () => {
      clearTimeout(drop);
      window.removeEventListener("popstate", onPop);
    };
  }, [played]);

  const hasParam = () => new URLSearchParams(window.location.search).has("country");
  return {
    open(a2: string) {
      const url = withCountry(window.location.href, a2);
      if (hasParam()) replaceUrl(url);
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
      } else replaceUrl(withCountry(window.location.href, null));
    },
  };
}
