"use client"; // needs the Web Share API / clipboard + a little click state

import { useState } from "react";
import { track } from "../lib/analytics";
import styles from "./ShareButton.module.css";

// Share the page's generated card as an actual IMAGE file (with a short
// description + the link in the message), using the Web Share API's file
// support. Falls back to sharing/copying the link where files aren't supported.
export default function ShareButton({
  url,
  title,
  text,
  imageUrl,
  fileName = "share.png",
}: {
  url: string;
  title: string;
  text: string;
  imageUrl?: string;
  fileName?: string;
}) {
  const [status, setStatus] = useState<"idle" | "busy" | "copied">("idle");

  async function shareLink() {
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({ title, text, url });
        return true;
      } catch {
        /* cancelled / unsupported */
      }
    }
    return false;
  }

  async function onShare() {
    track("share_click", { url });

    // 1) Try to share the card as an image file, with the description + link.
    if (imageUrl && typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        setStatus("busy");
        const res = await fetch(imageUrl);
        const blob = await res.blob();
        const file = new File([blob], fileName, { type: blob.type || "image/png" });
        if (navigator.canShare?.({ files: [file] })) {
          await navigator.share({ files: [file], text: `${text}\n\n${url}` });
          setStatus("idle");
          return;
        }
        // Files not shareable here — share the link instead.
        setStatus("idle");
        if (await shareLink()) return;
      } catch {
        setStatus("idle");
        // fall through to link/copy
      }
    } else if (await shareLink()) {
      return;
    }

    // 2) Desktop / no Web Share API: copy the link.
    try {
      await navigator.clipboard.writeText(url);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("idle");
    }
  }

  const label = status === "copied" ? "Link copied ✓" : status === "busy" ? "Preparing…" : "Share";

  return (
    <button
      type="button"
      className={styles.share}
      onClick={onShare}
      aria-label="Share this page"
      disabled={status === "busy"}
    >
      {status === "idle" ? (
        <span className={styles.icon} aria-hidden="true">↗</span>
      ) : null}
      {label}
    </button>
  );
}
