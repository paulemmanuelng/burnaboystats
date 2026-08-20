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

  wizkid: { focal: "center 24%", opacity: 0.42, grayscale: 0.25, mode: "default" },
  // Contained, not cropped, and no mask fade — the crown is a mark, not a face.
  davido: { focal: "center", opacity: 0.3, grayscale: 0, mode: "emblem" },
  rema: { ...DEFAULTS },
  // A dark shot: it can carry more opacity and less grey before it competes.
  tems: { focal: "center 30%", opacity: 0.5, grayscale: 0.15, mode: "default" },
  tyla: { ...DEFAULTS },
  "ayra-starr": { ...DEFAULTS },
  // A warm shot — held down so the hero does not turn gold.
  asake: { focal: "center 24%", opacity: 0.36, grayscale: 0.3, mode: "default" },
  "omah-lay": { focal: "center 24%", opacity: 0.42, grayscale: 0.25, mode: "default" },
  // A busy pattern behind him, so the heaviest grey on the board.
  "seyi-vibez": { focal: "36% 20%", opacity: 0.38, grayscale: 0.35, mode: "default" },
};

export const portraitArtFor = (slug: string): PortraitArt => PORTRAIT_ART[slug] ?? DEFAULTS;
