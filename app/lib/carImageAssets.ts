/**
 * Every garage car's tile and hero, as static imports.
 *
 * The files stay where they were — public/cars/<slug>-tile.jpg and
 * public/cars/<slug>.png, written by scripts/build-car-hero.py, read through
 * the string paths in app/data/cars.ts by tests/cars.test.ts and by the share
 * card, which loads the hero off disk. Only the URL the pages paint from
 * changes.
 *
 * Why, measured on 23 Sep 2026: next/image stamps every public-folder src
 * with &dpl=<deploymentId>, so each production deploy — about ten a day —
 * gave all 630 image URLs on /records/cars a new address. A returning
 * visitor re-downloaded the phone's LCP tile in full every time, not even a
 * 304: the old copy sat in their cache under a URL no page asked for any
 * more. A static import is served from /_next/static/immutable/media/ under
 * its own content hash, and the loader leaves dpl off those (Next 16's
 * image-loader.js), which is how the fonts already survive deploys. Same
 * bytes, same widths, same quality, so the pixels are unchanged; a photo
 * replaced in place gets a new hash, and so a new URL, on its own.
 *
 * The imports are spelled out one by one because the bundler can only
 * fingerprint a path it can read at build time. tests/carImageAssets.test.tsx
 * fails if a garage car is missing either of its two, or if a line points at
 * another car's file.
 */

import type { StaticImageData } from "next/image";
import bugattiChironTile from "../../public/cars/bugatti-chiron-tile.jpg";
import bugattiChironHero from "../../public/cars/bugatti-chiron.png";
import mclarenSennaTile from "../../public/cars/mclaren-senna-tile.jpg";
import mclarenSennaHero from "../../public/cars/mclaren-senna.png";
import ferrariSf90SpiderTile from "../../public/cars/ferrari-sf90-spider-tile.jpg";
import ferrariSf90SpiderHero from "../../public/cars/ferrari-sf90-spider.png";
import ferrariPurosangueTile from "../../public/cars/ferrari-purosangue-tile.jpg";
import ferrariPurosangueHero from "../../public/cars/ferrari-purosangue.png";
import lamborghiniRevueltoTile from "../../public/cars/lamborghini-revuelto-tile.jpg";
import lamborghiniRevueltoHero from "../../public/cars/lamborghini-revuelto.png";
import rollsRoyceCullinanBlackBadgeTile from "../../public/cars/rolls-royce-cullinan-black-badge-tile.jpg";
import rollsRoyceCullinanBlackBadgeHero from "../../public/cars/rolls-royce-cullinan-black-badge.png";
import lamborghiniAventadorSvjRoadsterTile from "../../public/cars/lamborghini-aventador-svj-roadster-tile.jpg";
import lamborghiniAventadorSvjRoadsterHero from "../../public/cars/lamborghini-aventador-svj-roadster.png";
import rollsRoyceDawnTile from "../../public/cars/rolls-royce-dawn-tile.jpg";
import rollsRoyceDawnHero from "../../public/cars/rolls-royce-dawn.png";
import ferrari812GtsTile from "../../public/cars/ferrari-812-gts-tile.jpg";
import ferrari812GtsHero from "../../public/cars/ferrari-812-gts.png";
import mercedesSlsAmgTile from "../../public/cars/mercedes-sls-amg-tile.jpg";
import mercedesSlsAmgHero from "../../public/cars/mercedes-sls-amg.png";
import porsche911Gt3RsTile from "../../public/cars/porsche-911-gt3-rs-tile.jpg";
import porsche911Gt3RsHero from "../../public/cars/porsche-911-gt3-rs.png";
import lamborghiniUrusTile from "../../public/cars/lamborghini-urus-tile.jpg";
import lamborghiniUrusHero from "../../public/cars/lamborghini-urus.png";
import mercedesMaybachS680Tile from "../../public/cars/mercedes-maybach-s680-tile.jpg";
import mercedesMaybachS680Hero from "../../public/cars/mercedes-maybach-s680.png";
import mercedesMaybachGls600Tile from "../../public/cars/mercedes-maybach-gls-600-tile.jpg";
import mercedesMaybachGls600Hero from "../../public/cars/mercedes-maybach-gls-600.png";
import ferrariTestarossaTile from "../../public/cars/ferrari-testarossa-tile.jpg";
import ferrariTestarossaHero from "../../public/cars/ferrari-testarossa.png";
import ferrari328GtsTile from "../../public/cars/ferrari-328-gts-tile.jpg";
import ferrari328GtsHero from "../../public/cars/ferrari-328-gts.png";

export interface CarImageAssets {
  /** public/cars/<slug>-tile.jpg — the 640×400 card on /records/cars and the car pages' nav. */
  tile: StaticImageData;
  /** public/cars/<slug>.png — the cut-out on the car's own page. */
  hero: StaticImageData;
}

/**
 * Only what the <img> is built from. A static import also carries an 8px
 * blurDataURL, and the car page hands its hero and nav thumbnails to
 * next/image, a client component, so the whole object is written into the
 * page's flight data. Passed straight through on 23 Sep 2026 that was three
 * base64 placeholders, about 2.2 KB, on every car page's HTML and again in its
 * .rsc — for a blur the site never draws.
 */
const bare = ({ src, width, height }: StaticImageData): StaticImageData => ({ src, width, height });

export const carImageAssets: Record<string, CarImageAssets> = {
  "bugatti-chiron": { tile: bare(bugattiChironTile), hero: bare(bugattiChironHero) },
  "mclaren-senna": { tile: bare(mclarenSennaTile), hero: bare(mclarenSennaHero) },
  "ferrari-sf90-spider": { tile: bare(ferrariSf90SpiderTile), hero: bare(ferrariSf90SpiderHero) },
  "ferrari-purosangue": { tile: bare(ferrariPurosangueTile), hero: bare(ferrariPurosangueHero) },
  "lamborghini-revuelto": { tile: bare(lamborghiniRevueltoTile), hero: bare(lamborghiniRevueltoHero) },
  "rolls-royce-cullinan-black-badge": { tile: bare(rollsRoyceCullinanBlackBadgeTile), hero: bare(rollsRoyceCullinanBlackBadgeHero) },
  "lamborghini-aventador-svj-roadster": { tile: bare(lamborghiniAventadorSvjRoadsterTile), hero: bare(lamborghiniAventadorSvjRoadsterHero) },
  "rolls-royce-dawn": { tile: bare(rollsRoyceDawnTile), hero: bare(rollsRoyceDawnHero) },
  "ferrari-812-gts": { tile: bare(ferrari812GtsTile), hero: bare(ferrari812GtsHero) },
  "mercedes-sls-amg": { tile: bare(mercedesSlsAmgTile), hero: bare(mercedesSlsAmgHero) },
  "porsche-911-gt3-rs": { tile: bare(porsche911Gt3RsTile), hero: bare(porsche911Gt3RsHero) },
  "lamborghini-urus": { tile: bare(lamborghiniUrusTile), hero: bare(lamborghiniUrusHero) },
  "mercedes-maybach-s680": { tile: bare(mercedesMaybachS680Tile), hero: bare(mercedesMaybachS680Hero) },
  "mercedes-maybach-gls-600": { tile: bare(mercedesMaybachGls600Tile), hero: bare(mercedesMaybachGls600Hero) },
  "ferrari-testarossa": { tile: bare(ferrariTestarossaTile), hero: bare(ferrariTestarossaHero) },
  "ferrari-328-gts": { tile: bare(ferrari328GtsTile), hero: bare(ferrari328GtsHero) },
};

/** A garage car's two images. Throws rather than falling back to the public
 *  path: a fallback would render the same pixels and quietly put that car
 *  back on a URL that changes with every deploy. */
export function carImages(slug: string): CarImageAssets {
  const assets = carImageAssets[slug];
  if (!assets) {
    throw new Error(`No static imports for the car "${slug}" — add its tile and hero to app/lib/carImageAssets.ts`);
  }
  return assets;
}
