"use client"; // reads the pathname and the visitor's clock

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { badgeRound } from "../lib/naija66/clock";
import { hasOwnActionBar } from "../lib/mobileScreens";
import styles from "./huntKeySlot.module.css";

/**
 * The Naija @ 66 key slot — one per page, from the root layout.
 *
 * Every page on the site renders exactly this, with its own pathname in the
 * badge URL, so neither the HTML nor the component can tell a prize page from
 * a decoy: only the badge route knows, and it answers everyone else with one
 * identical blank PNG (app/api/naija66/badge/route.ts).
 *
 * WHEN. Only between the first drop and the close, by the visitor's clock —
 * outside that window it renders nothing and asks for nothing. The server
 * snapshot is null, so the server's HTML never carries the slot at all and
 * hydration has nothing to disagree about.
 *
 * ASKING AGAIN. A browser keeps an image for the life of the document, even
 * one sent no-store, and a client-side navigation keeps the document — so an
 * <img> whose URL was answered blank once stays blank on every return to
 * that page. The URL therefore changes whenever the answer might have:
 *   v  the round (clock.ts badgeRound): at each drop, and once more 90 seconds
 *      after it, for a phone whose clock runs ahead of the server's;
 *   n  the visit: one more on every change of page, so each arrival on a page
 *      is a fresh request, never a copy of the last one.
 *
 * SPACE. None, until a real badge arrives. The <img> sits absolutely
 * positioned inside a zero-height box: a blank 1x1 moves nothing on any page.
 * Only an image wider than a pixel — a key — opens the slot, at the foot of
 * the page just above the footer. On a phone screen whose own action bar
 * replaces the tab bar, the slot clears that bar itself, because it comes
 * after the screen's spacer.
 */

const EVERY_30_S = (onChange: () => void) => {
  const id = setInterval(onChange, 30_000);
  return () => clearInterval(id);
};
const clientRound = () => badgeRound(Date.now());
const serverRound = () => null;

export default function HuntKeySlot() {
  const pathname = usePathname();
  const round = useSyncExternalStore(EVERY_30_S, clientRound, serverRound);
  const [found, setFound] = useState<string | null>(null);
  // Counted in render, the way React adjusts state to a changed prop: the
  // first render on a new page already carries the new visit.
  const [visit, setVisit] = useState({ path: pathname, n: 0 });
  if (visit.path !== pathname) setVisit({ path: pathname, n: visit.n + 1 });

  if (!pathname || round === null) return null;

  const src = `/api/naija66/badge?p=${encodeURIComponent(pathname)}&v=${round}&n=${visit.n}`;
  const isFound = found === src;

  return (
    <div
      className={[styles.slot, isFound && styles.found, isFound && hasOwnActionBar(pathname) && styles.clearBar]
        .filter(Boolean)
        .join(" ")}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- a same-origin PNG whose size decides the layout; next/image would reserve space */}
      <img
        key={src}
        src={src}
        alt=""
        width={180}
        height={48}
        loading="lazy"
        decoding="async"
        className={styles.badge}
        onLoad={(e) => {
          if (e.currentTarget.naturalWidth > 1) setFound(src);
        }}
      />
      {isFound && (
        <Link href="/naija66" className={styles.claim}>
          Found a key? Claim it →
        </Link>
      )}
    </div>
  );
}
