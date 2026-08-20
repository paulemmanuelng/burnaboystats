// How each artist's portrait is treated where it sits behind hero type.
//
// One treatment, ten value sets — the designer's JOB 2 / §5a table. A single
// rule for ten photographs does not work: the shots differ in how bright their
// backdrops are, how warm they are, and where the face sits in a 640×640 square.
// Burna's, for instance, is a pale studio backdrop with him centre-left, so the
// spec's provisional "center 18%" crops to empty wall above his head — the table
// marks those values "TBV", meaning set them with eyes on the photo.
//
// Two knobs beyond position:
//   opacity   — warm or gold-heavy shots go lower, so a hero never becomes a
//               second gold field
//   grayscale — busy or colourful shots go higher, so the portrait stays behind
//               the type instead of competing with it
//
// "emblem" is Davido's: his shot reads as a crown mark rather than a face, so it
// is contained rather than cropped, and it keeps its edges instead of dissolving.

export type PortraitMode = "default" | "emblem";

export interface PortraitArt {
  /** background-position — where the subject actually is in the square. */
  focal: string;
  opacity: number;
  grayscale: number;
  mode: PortraitMode;
}

const DEFAULTS: PortraitArt = {
  focal: "center 24%",
  opacity: 0.42,
  grayscale: 0.25,
  mode: "default",
};

export const PORTRAIT_ART: Record<string, PortraitArt> = {
  // Set by eye: pale studio backdrop, subject centre-left, head around 38% down.
  // Lower opacity and heavier grey because the backdrop is bright — at the table's
  // 0.5 it washed the hero into flat mid-grey instead of reading as a portrait.
  "burna-boy": { focal: "26% 36%", opacity: 0.42, grayscale: 0.3, mode: "default" },

  // Face sits at ~37% of his photo; through the box's 445px of overflow that
  // needs X≈23% to land in the visible window. "center" showed the empty
  // right side of a dark rust backdrop — his hero rendered as nothing.
  wizkid: { focal: "23% 24%", opacity: 0.46, grayscale: 0.25, mode: "default" },
  // Contained, not cropped, and no mask fade — the crown is a mark, not a face.
  davido: { focal: "center", opacity: 0.3, grayscale: 0, mode: "emblem" },
  // Face ~45% across, hard white flare on the right — aim left of centre.
  rema: { focal: "37% 24%", opacity: 0.52, grayscale: 0.15, mode: "default" }, // backlit dark shot — the Tems treatment
  // A dark shot: it can carry more opacity and less grey before it competes.
  tems: { focal: "center 30%", opacity: 0.5, grayscale: 0.15, mode: "default" },
  tyla: { ...DEFAULTS },
  // Face ~58% across the purple shot.
  "ayra-starr": { focal: "58% 22%", opacity: 0.44, grayscale: 0.25, mode: "default" },
  // An extreme close-up, face filling the right 60% — aim well right.
  asake: { focal: "70% 32%", opacity: 0.4, grayscale: 0.3, mode: "default" },
  "omah-lay": { focal: "center 24%", opacity: 0.42, grayscale: 0.25, mode: "default" },
  // A busy pattern behind him, so the heaviest grey on the board.
  "seyi-vibez": { focal: "36% 20%", opacity: 0.38, grayscale: 0.35, mode: "default" },
};

export const portraitArtFor = (slug: string): PortraitArt => PORTRAIT_ART[slug] ?? DEFAULTS;
