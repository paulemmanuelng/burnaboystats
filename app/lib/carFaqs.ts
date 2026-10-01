// Answer-first Q&A for /records/cars, the site's top search page.
//
// Search Console, 28 days to 30 Sep 2026: /records/cars took 230 clicks and had
// no FAQ, while its fastest-growing query was "how many cars does burna boy
// have" (+667%), with "burna boy car collection worth" behind it. The page
// answered all three questions below, but in a hero, a stat strip and a note —
// not in the question-and-answer shape an answer engine lifts whole.
//
// Every figure and every name is read from app/data/cars.ts, and each answer
// words its fact the way the page already does: "confirmed cars", "worth a
// reported … +", "recorded but not counted", "import-inclusive". The /faq
// page's copy of the most-expensive answer priced the Bugatti at "around $6.19
// million" for a day after the ₦9bn was re-converted (#207) — a typed figure
// beside a derived one — which is the drift these are built to avoid.
//
// tests/topSearchFaqs.test.tsx holds each answer to the data and both layouts to
// rendering them.

import {
  currentCars,
  soldCars,
  unconfirmedCars,
  carCount,
  totalValueReported,
  topCar,
  topCarValueFormatted,
  valueWord,
} from "../data/cars";
import { modelShort, usdShort } from "./garage";
import { cardinalWord, plural } from "./plural";
import type { Faq } from "./boardFaqs";

const capitalise = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** "two he has reportedly sold and three that haven't been seen with him in
 *  years" — the page's two reasons a car is not counted, each only when a car
 *  carries it. */
function notCountedPhrase(): string {
  const sold = soldCars.length;
  const unseen = unconfirmedCars.length;
  const parts = [
    sold > 0 ? `${cardinalWord(sold)} he has reportedly sold` : "",
    unseen > 0
      ? `${cardinalWord(unseen)} that ${plural(unseen, "hasn't", "haven't")} been seen with him in years`
      : "",
  ].filter(Boolean);
  return parts.join(" and ");
}

/** The current cars whose value the site estimated rather than read off a
 *  dated report — the GLS 600 today. The page labels them "estimated". */
const estimated = currentCars.filter((c) => valueWord(c) === "estimated");

function estimateClause(): string {
  if (estimated.length === 0) return "";
  if (estimated.length === 1) {
    const c = estimated[0];
    return `, with the ${c.make} ${modelShort(c.model)}'s estimated`;
  }
  return `, with ${cardinalWord(estimated.length)} of them estimated`;
}

/** What the top car leads: the next car down, or the several tied there. */
function runnerUpPhrase(): string {
  const next = currentCars[1];
  if (!next) return "";
  const level = currentCars.filter((c) => c.valueUsd === next.valueUsd);
  return level.length === 1
    ? `the ${next.make} ${modelShort(next.model)} at ${usdShort(next.valueUsd)}`
    : `${cardinalWord(level.length)} cars at ${usdShort(next.valueUsd)} each`;
}

const former = soldCars.length + unconfirmedCars.length;

export const carFaqs: Faq[] = [
  {
    q: "How many cars does Burna Boy have?",
    a:
      `Burna Boy currently owns ${carCount} confirmed cars.` +
      (former > 0
        ? ` ${capitalise(cardinalWord(former))} more ${plural(former, "is", "are")} recorded but not counted: ${notCountedPhrase()}.`
        : ""),
  },
  {
    q: "How much is Burna Boy's car collection worth?",
    a:
      `Burna Boy's ${carCount} confirmed cars are worth a reported ${totalValueReported} in total: ` +
      `the sum of each car's reported price${estimateClause()}. The prices are import-inclusive, so ` +
      `they run higher than international sticker prices, and cars he has sold or not been seen with ` +
      `in years are left out.`,
  },
  {
    q: "What is Burna Boy's most expensive car?",
    a:
      `Burna Boy's most expensive car is his ${topCar.make} ${modelShort(topCar.model)}, worth a ` +
      `${valueWord(topCar)} ${topCar.valueNaira} — about ${topCarValueFormatted}.` +
      (currentCars.length > 1
        ? ` It leads his ${carCount} confirmed cars, ahead of ${runnerUpPhrase()}.`
        : ""),
  },
];
