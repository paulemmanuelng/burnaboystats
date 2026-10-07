"use client";

/**
 * Save a rendered stat card to the user's device.
 *
 * The obvious version — fetch a blob, click an <a download> — is a desktop
 * idiom that quietly fails on a phone, which is where these cards are actually
 * made:
 *
 *   - iOS Safari ignores the `download` attribute outright. Clicking an anchor
 *     at a blob: URL navigates the tab to the raw image instead of saving it,
 *     so the maker vanishes and the card is never saved.
 *   - Revoking the object URL on the line after `click()` races the browser's
 *     own handling of it. On desktop it usually wins; on a slower phone it
 *     revokes the blob mid-download and the file arrives empty or not at all.
 *
 * So this tries three routes, best first:
 *
 *   1. The native share sheet, when the platform can share files. On a phone
 *      this is the RIGHT action, not a fallback: it offers Save Image plus
 *      every app the user would post to. A cancelled sheet is a normal
 *      outcome, not an error.
 *   2. The anchor download, for desktop and Android — with the revoke deferred
 *      so it cannot outrun the browser.
 *   3. Opening the image in a new tab, so an iOS user without the share sheet
 *      can still long-press → Add to Photos.
 *
 * A button that says "Download PNG" passes `preferDownload` and starts at 2.
 * The desktop layouts' buttons do: desktop Chrome, Edge and Safari can share
 * files too, so on a share-first route their "↓ Download PNG" opened the OS
 * share sheet and saved nothing (debug pass 5 Oct 2026, V-core-06). The phone
 * screens keep the sheet, and say so — "Save or share ↓".
 */

/**
 * Whether this device can share files natively — memoised, because probing
 * builds a throwaway File and the answer cannot change within a document.
 * Read it through useSyncExternalStore so the server renders `false` and the
 * client corrects after hydration, with no mismatch.
 */
let fileShareProbe: boolean | undefined;
export function canShareFiles(): boolean {
  if (fileShareProbe === undefined) {
    fileShareProbe =
      typeof navigator !== "undefined" &&
      !!navigator.canShare?.({ files: [new File([], "c.png", { type: "image/png" })] });
  }
  return fileShareProbe;
}

/** No-op subscribe: the capability is fixed for the life of the document. */
export const subscribeNever = () => () => {};

export type SaveOutcome = "shared" | "downloaded" | "opened" | "cancelled" | "failed";

/** The card as a blob: the one network step between a tap and the sheet. */
export async function fetchCard(src: string): Promise<Blob> {
  const res = await fetch(src);
  if (!res.ok) throw new Error(String(res.status));
  return res.blob();
}

/**
 * `card` is that blob fetched before the tap. The share sheet opens only
 * inside the tap's user activation, which the fetch spends: Chrome allows 5 s,
 * iOS Safari may allow less, and an On This Day card took 0.8 s warm and
 * 1.6–2 s cold (debug pass 5 Oct 2026, V-otd-10). Held past that, the sheet
 * was refused and the tap fell through to a download. See OnThisDaySaveCard.
 */
export async function saveCard(
  src: string,
  filename: string,
  shareText?: string,
  { preferDownload = false, card }: { preferDownload?: boolean; card?: Promise<Blob> } = {}
): Promise<SaveOutcome> {
  let blob: Blob;
  try {
    blob = await (card ?? fetchCard(src));
  } catch {
    // Never leave the user with a dead button: the image itself is reachable.
    window.open(src, "_blank", "noopener");
    return "opened";
  }

  const file = new File([blob], filename, { type: blob.type || "image/png" });

  // 1. Native share sheet — unless the button promised a download.
  if (!preferDownload && typeof navigator !== "undefined" && navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text: shareText });
      return "shared";
    } catch (err) {
      // Dismissing the sheet is a choice, not a failure — don't fall through
      // to a download the user just declined.
      if ((err as Error)?.name === "AbortError") return "cancelled";
    }
  }

  // 2. Anchor download.
  const url = URL.createObjectURL(blob);
  try {
    const a = document.createElement("a");
    // Read before narrowing: TS treats `"download" in a` as a type guard, and
    // the negative branch narrows the anchor to `never`.
    const supportsDownload = typeof a.download === "string";
    a.href = url;
    a.download = filename;
    a.rel = "noopener";
    if (!supportsDownload) a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Deferred: revoking here synchronously is what truncates the file.
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
    return supportsDownload ? "downloaded" : "opened";
  } catch {
    URL.revokeObjectURL(url);
    // 3. Long-press route.
    window.open(src, "_blank", "noopener");
    return "opened";
  }
}
