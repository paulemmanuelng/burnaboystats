import { size, contentType } from "../lib/og-image";
import { BODY, BodyBox, Figure, MonoLines, monoText, ogFigureCard, ogFigureVersions } from "../lib/og-figure";
import { fitSize } from "../lib/ogFit";
import { plural } from "../lib/plural";
import { totalAwards, countryCount } from "../data/certifications";

export { size, contentType };
export const alt = "Burna Boy Certifications — Silver, Gold, Platinum & Diamond";

/**
 * The /certifications preview, figure first (Job 6 · J6-4): his
 * certifications count, large, and the countries they come from, both read
 * from the data. The noun is "certifications", the page's own, not the old
 * card's "awards" (fix 102's noun).
 */
const WIDTH = BODY.right - BODY.left;
const figure = totalAwards().toLocaleString("en-US");
const label = `${plural(totalAwards(), "certification", "certifications")} · ${countryCount} ${plural(countryCount, "country", "countries")}`;
const FIGURE = fitSize([figure], WIDTH, 220);

// Versioned by what it prints, so the preview follows the data.
export const generateImageMetadata = () => ogFigureVersions([figure, label], alt);

export default function Image() {
  return ogFigureCard(
    <BodyBox>
      <Figure value={figure} size={FIGURE} />
      <MonoLines lines={monoText(label, WIDTH)} style={{ marginTop: 18 }} />
    </BodyBox>,
  );
}
