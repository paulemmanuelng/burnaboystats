// Where each car meets the floor, as a fraction of its hero's height.
//
// The page sits a car on the ring by this number, so it has to describe the
// car and not the frame. Every render is a three-quarter view: the NEAR wheel
// is 80-100px lower in the image than the far one, and the spread depends on
// the car and the camera. Aligning on the lowest pixel put the near wheel on
// the ring's centre line and left the whole car in the ellipse's upper half,
// leaning out of it. The midpoint of the two wheel contact lines is what makes
// the ring pass behind the far wheels and in front of the near ones.
//
// Run after re-exporting a hero, and paste the value into `groundLine`:
//   node scripts/measure-ground-line.mjs
import { readdir } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const DIR = new URL("../public/cars/", import.meta.url);

// PNG is read by hand rather than pulling in an image dependency for one job.
// Only the alpha channel matters, and sharp/jimp are not in this project.
const { execFileSync } = require("node:child_process");

const files = (await readdir(DIR)).filter((f) => f.endsWith(".png")).sort();
console.log("slug                                  groundLine");
for (const file of files) {
  const path = new URL(file, DIR).pathname;
  // Python + Pillow is already a dependency of the cut-out pipeline.
  const out = execFileSync("python3", [
    "-c",
    `
from PIL import Image
import numpy as np, sys
im = Image.open(sys.argv[1]).convert("RGBA")
a = np.asarray(im.split()[-1]); car = a > 200
W, H = im.size
ys, xs = np.nonzero(car); x0, x1 = xs.min(), xs.max(); span = x1 - x0
bot = {x: np.nonzero(car[:, x])[0].max() for x in range(x0, x1 + 1) if car[:, x].any()}
L = [v for k, v in bot.items() if k < x0 + span * 0.38]
R = [v for k, v in bot.items() if k > x0 + span * 0.62]
print(round(((max(L) + max(R)) / 2) / H, 4))
`,
    path,
  ]).toString().trim();
  console.log(`${file.replace(/\.png$/, "").padEnd(36)} ${out}`);
}
