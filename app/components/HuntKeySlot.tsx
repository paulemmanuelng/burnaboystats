"use client"; // reads the pathname and the visitor's clock

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { huntEpoch } from "../lib/naija66/clock";
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
 * snapshot is "before", so the server's HTML never carries the slot at all and
 * hydration has nothing to disagree about. The epoch (how many keys have
 * dropped) rides on the URL, so a page left open across a drop asks again.
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
const clientEpoch = () => huntEpoch(Date.now());
const serverEpoch = () => -1;

export default function HuntKeySlot() {
  const pathname = usePathname();
  const epoch = useSyncExternalStore(EVERY_30_S, clientEpoch, serverEpoch);
  const [found, setFound] = useState<string | null>(null);

  if (!pathname || epoch < 1 || epoch > 5) return null;

  const src = `/api/naija66/badge?p=${encodeURIComponent(pathname)}&v=${epoch}`;
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
