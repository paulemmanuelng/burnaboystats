/**
 * The anchors of the Dai Dai story's chapters 02–05 (site review 8 Oct 2026,
 * Job 5 · J5-8, fix 109), keyed by each chapter's scene — so a reorder of the
 * story cannot point a hero-strip tile at the wrong chapter. DaiDaiStory sets
 * them on the chapters (both editions); DaiDaiStrip links to them.
 */
export const CHAPTER_IDS = { global1: "dd-ch02", no1s: "dd-ch03", streaming: "dd-ch04", certs: "dd-ch05" } as const;
export type ChapterScene = keyof typeof CHAPTER_IDS;
export const chapterId = (scene: string): string | undefined => CHAPTER_IDS[scene as ChapterScene];
