import { KIND_MARK, type OnThisDayKind } from "../lib/onThisDayKinds";

/**
 * An On this day kind's mark: ■ Release · ▲ Charts · ◆ Streaming ·
 * ○ Certification · ★ Awards · ● Show. Drawn in currentColor — the ink of the
 * text around it — so a kind never carries a colour of its own
 * (lib/onThisDay.ts KIND_MARK).
 *
 * Beside its word the mark is decoration and stays out of the accessibility
 * tree. Where it is drawn alone (`alone`), it is an image named by the kind.
 */
export function KindMark({
  kind,
  size = 10,
  alone = false,
  className,
}: {
  kind: OnThisDayKind;
  size?: number;
  alone?: boolean;
  className?: string;
}) {
  const m = KIND_MARK[kind];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      className={className}
      {...(alone ? { role: "img", "aria-label": m.aria } : { "aria-hidden": true, focusable: false })}
    >
      <path
        d={m.d}
        fill={m.filled ? "currentColor" : "none"}
        stroke={m.filled ? "none" : "currentColor"}
        strokeWidth={m.filled ? undefined : 1.8}
      />
    </svg>
  );
}

/** The kind as a pill: its mark and its word. The pill's box is the caller's. */
export function KindPill({ kind, className }: { kind: OnThisDayKind; className?: string }) {
  return (
    <span className={className}>
      <KindMark kind={kind} />
      {KIND_MARK[kind].word}
    </span>
  );
}
