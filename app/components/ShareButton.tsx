"use client"; // needs the Web Share API / clipboard + a little click state

import { useState } from "react";
import { track } from "../lib/analytics";
import styles from "./ShareButton.module.css";

// A share button. On mobile it opens the native share sheet (which renders the
// page's Open Graph card preview); on desktop browsers without the Web Share
// API it copies the link and confirms.
export default function ShareButton({
  url,
  title,
  text,
}: {
  url: string;
  title: string;
  text: string;
}) {
  const [copied, setCopied] = useState(false);

  async function onShare() {
    track("share_click", { url });
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // user cancelled, or the payload was rejected — fall through to copy
      }
    }
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard blocked — nothing else we can safely do */
    }
  }

  return (
    <button type="button" className={styles.share} onClick={onShare} aria-label="Share this page">
      {copied ? (
        "Link copied ✓"
      ) : (
        <>
          <span className={styles.icon} aria-hidden="true">↗</span>
          Share
        </>
      )}
    </button>
  );
}
