import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CompareView } from "../../page";
import { pageMetadata } from "../../../lib/seo";
import {
  certCountryCodes,
  countryCopy,
  countryFromSlug,
  countrySlug,
  priceCountry,
} from "../../../lib/certCountry";

/**
 * /compare/in/<country> — one market, every artist, ranked by certified units.
 *
 * 27 of them, one per country the board holds a plaque in, statically
 * generated. Each is the compare page in country mode with the country filled,
 * canonical to itself, with a title, description and share card built from the
 * live figures — the same arrangement the 120 pair pages use.
 */

// Only the generated countries exist. Anything else is a real 404 at the
// routing layer rather than a page that renders an empty board.
export const dynamicParams = false;

export function generateStaticParams() {
  return certCountryCodes().map((code) => ({ country: countrySlug(code) }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country } = await params;
  const code = countryFromSlug(country);
  if (!code) notFound();
  const board = priceCountry(code);
  const copy = countryCopy(board);
  return pageMetadata({
    title: copy.title,
    description: copy.description,
    path: `/compare/in/${countrySlug(code)}`,
    shareTitle: `Certified units in ${board.name}`,
    shareDescription: copy.sub,
  });
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const code = countryFromSlug(country);
  if (!code) notFound();
  return CompareView({
    sp: { mode: "country", country: countrySlug(code) },
    path: `/compare/in/${countrySlug(code)}`,
    leaf: priceCountry(code).name,
  });
}
