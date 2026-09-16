"use client";

// "Follow the run" — the site's return-visitor hook. A stats site about a live
// chart run is worth coming back to, but every visit was one-and-done: there was
// no way to be reminded. This offers the ways back:
//   • Install the site as an app (Add to Home Screen) — a real home-screen icon
//   • Follow on X for the updates as they land
//   • The RSS feed
// The Saturday digest is not here: its module is the hero's right column at
// the top of the page (design response §1), and this panel — read by the
// person who reached the foot of the log — only points back up to it.
//
// The install button only appears when the browser actually offers it (Chrome/
// Edge/Android fire `beforeinstallprompt`). iOS Safari never does, so there we
// show the manual Share → "Add to Home Screen" hint instead of a dead button.

import { useEffect, useState } from "react";
import styles from "./FollowPanel.module.css";

const X_URL = "https://x.com/paulemmanuelng";

interface InstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function FollowPanel({ subscribeEnabled = false }: { subscribeEnabled?: boolean }) {
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  // Read once on mount from browser-only APIs (display-mode + UA). Kept as one
  // object so the mount read is a single state write.
  const [env, setEnv] = useState({ installed: false, isIOS: false });
  const { installed, isIOS } = env;

  useEffect(() => {
    // Register the service worker (it caches nothing — it exists so the site is
    // installable; see public/sw.js).
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }

    const onPrompt = (e: Event) => {
      e.preventDefault(); // keep the mini-infobar away; we use our own button
      setInstallPrompt(e as InstallPromptEvent);
    };
    const onInstalled = () => {
      setEnv((e) => ({ ...e, installed: true }));
      setInstallPrompt(null);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    window.addEventListener("appinstalled", onInstalled);

    // One-time mount read: whether we're already running as an installed app,
    // and whether this is iOS (which never fires an install event, so it needs
    // the manual Share → Add to Home Screen hint instead of a button).
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time mount read of browser-only APIs
    setEnv({
      installed: window.matchMedia("(display-mode: standalone)").matches,
      isIOS: /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !("MSStream" in window),
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", onPrompt);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  const install = async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === "accepted") setEnv((e) => ({ ...e, installed: true }));
    setInstallPrompt(null);
  };

  return (
    <aside className={styles.wrap} aria-labelledby="follow-title">
      <p className={styles.eyebrow}>Keep the site close</p>
      <h2 id="follow-title" className={styles.title}>
        Follow <span className="goldText">the run</span>
      </h2>
      <p className={styles.blurb}>
        The numbers here move most days. Keep the site one tap away.
        {subscribeEnabled && (
          <>
            {" "}
            Prefer email?{" "}
            <a href="#digest" className={styles.digestLink}>
              The Saturday digest ↑
            </a>
          </>
        )}
      </p>

      <div className={styles.actions}>
        {installed ? (
          <span className={styles.installed}>✓ Installed — it&apos;s on your home screen</span>
        ) : installPrompt ? (
          <button type="button" className={styles.primary} onClick={install}>
            ⤓ Install the app
          </button>
        ) : isIOS ? (
          <span className={styles.hint}>
            To install: tap <b>Share</b> → <b>Add to Home Screen</b>
          </span>
        ) : null}

        <a className={styles.secondary} href={X_URL} target="_blank" rel="noopener noreferrer">
          Follow on X ↗
        </a>
        <a className={styles.secondary} href="/rss.xml">
          RSS feed ↗
        </a>
      </div>
    </aside>
  );
}
