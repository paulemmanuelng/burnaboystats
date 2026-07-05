// Burna Boy's car collection — reported purchase values. Most entries are
// sourced from Pulse Nigeria's itemised breakdown (Nov 2025), the most detailed
// single source found; the ₦9bn Bugatti Chiron is from July 2026 coverage
// (Daily Post, Ripples, The Niche) of its unveiling. Photos are stock images of
// the same model (via Wikimedia Commons, free-licensed) — NOT photos of his
// specific car — since no free-to-reuse photo of his actual vehicles exists.
// Values are reported in Nigerian naira import-inclusive pricing; USD figures
// use the source's own conversion (~₦1,455/$).

export interface Car {
  make: string;
  model: string;
  year?: number;
  valueUsd: number;
  valueNaira: string;
  image: string;
  imageSourceUrl: string; // Wikipedia article the photo is from (attribution + license info)
  note?: string; // optional highlight (e.g. a one-of-one custom build)
}

export const cars: Car[] = [
  {
    make: "Bugatti", model: "Chiron (Venuum Widebody)",
    valueUsd: 6_190_000, valueNaira: "₦9 billion",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Bugatti_Chiron_1.jpg/1280px-Bugatti_Chiron_1.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Bugatti_Chiron",
    note: "Unveiled July 2026 — a one-of-one custom build by Dubai's Venuum, billed as the world's first widebody Chiron, with his name engraved on the rear spoiler. Reported as the most expensive car in West Africa.",
  },
  {
    make: "McLaren", model: "Senna (Carbon Fibre Edition)",
    valueUsd: 2_200_000, valueNaira: "₦3.2 billion",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/McLaren_Senna_IMG_3279.jpg/1280px-McLaren_Senna_IMG_3279.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/McLaren_Senna",
  },
  {
    make: "Ferrari", model: "Purosangue", year: 2024,
    valueUsd: 1_400_000, valueNaira: "₦2.1 billion",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ferrari_Purosangue_DSC_7008.jpg/1280px-Ferrari_Purosangue_DSC_7008.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Ferrari_Purosangue",
  },
  {
    make: "Lamborghini", model: "Revuelto",
    valueUsd: 1_030_000, valueNaira: "₦1.5 billion",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg/1280px-Lamborghini_Revuelto_DSC_6985_%28cropped%29.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Lamborghini_Revuelto",
  },
  {
    make: "Lamborghini", model: "Aventador SVJ",
    valueUsd: 867_500, valueNaira: "₦1.258 billion",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Lamborghini_Aventador_S_%2844554%29.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Lamborghini_Aventador",
  },
  {
    make: "Lamborghini", model: "Urus (Novitec Edition)", year: 2022,
    valueUsd: 800_000, valueNaira: "₦1.16 billion",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lamborghini_Urus_SE_DSC_8524.jpg/1280px-Lamborghini_Urus_SE_DSC_8524.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Lamborghini_Urus",
  },
  {
    make: "Ferrari", model: "812 GTS",
    valueUsd: 600_000, valueNaira: "₦870 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2019_Ferrari_812_Superfast_S-A_6.5.jpg/1280px-2019_Ferrari_812_Superfast_S-A_6.5.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Ferrari_812_Superfast",
  },
  {
    make: "Ferrari", model: "488 Spider",
    valueUsd: 472_000, valueNaira: "₦684.4 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/2016_Ferrari_488_Spider_%2838806%29.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Ferrari_488",
  },
  {
    make: "Rolls-Royce", model: "Cullinan",
    valueUsd: 427_000, valueNaira: "₦619.15 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg/1280px-2019_Rolls-Royce_Cullinan_V12_Automatic_6.75_Front.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Rolls-Royce_Cullinan",
  },
  {
    make: "Rolls-Royce", model: "Dawn",
    valueUsd: 350_000, valueNaira: "₦507.5 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/2019_Rolls-Royce_Dawn_V12_Automatic_6.6.jpg/1280px-2019_Rolls-Royce_Dawn_V12_Automatic_6.6.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Rolls-Royce_Dawn",
  },
  {
    make: "Bentley", model: "Continental GT", year: 2017,
    valueUsd: 270_000, valueNaira: "₦391.5 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Bentley_Continental_GT_First_Edition_%2849919050697%29_%28cropped%29_%28cropped%29.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Bentley_Continental_GT",
  },
  {
    make: "Ferrari", model: "458 Italia", year: 2013,
    valueUsd: 230_000, valueNaira: "₦333.5 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Ferrari_458_Fort_Worth_June_2016_56_%28Ferrari%29_%28cropped-2%29.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Ferrari_458",
  },
  {
    make: "Mercedes-Maybach", model: "S650",
    valueUsd: 228_000, valueNaira: "₦330.6 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mercedes-Benz_W223_IMG_6663.jpg/1280px-Mercedes-Benz_W223_IMG_6663.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Mercedes-Benz_S-Class",
  },
  {
    make: "Mercedes-Maybach", model: "G63",
    valueUsd: 202_000, valueNaira: "₦292.9 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Mercedes-Benz_W463_G_350_BlueTEC_01.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Mercedes-Benz_G-Class",
  },
  {
    make: "Ferrari", model: "328 GTB", year: 1988,
    valueUsd: 180_000, valueNaira: "₦261 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Ferrari_328_GTS_-_Flickr_-_Alexandre_Pr%C3%A9vot_%284%29_%28cropped%29.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Ferrari_328",
  },
  {
    make: "Range Rover", model: "Autobiography",
    valueUsd: 167_000, valueNaira: "₦242.15 million",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/2022_Land_Rover_Range_Rover_SE_P440e_AWD_Automatic_3.0_Front.jpg/1280px-2022_Land_Rover_Range_Rover_SE_P440e_AWD_Automatic_3.0_Front.jpg",
    imageSourceUrl: "https://en.wikipedia.org/wiki/Range_Rover",
  },
];

// Reported as a more recent addition (not in the itemised Pulse Nigeria list
// above, so not folded into the total) — value not publicly disclosed.
export const recentAddition: Car = {
  make: "Rolls-Royce", model: "Spectre",
  valueUsd: 0, valueNaira: "value undisclosed",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/2024_Rolls-Royce_Spectre_in_Midnight_Sapphire_over_Silver%2C_front_left.jpg/1280px-2024_Rolls-Royce_Spectre_in_Midnight_Sapphire_over_Silver%2C_front_left.jpg",
  imageSourceUrl: "https://en.wikipedia.org/wiki/Rolls-Royce_Spectre",
};

export const totalValueUsd = cars.reduce((sum, c) => sum + c.valueUsd, 0);
export const carCount = cars.length;

function formatUsd(n: number): string {
  return `$${(n / 1_000_000).toFixed(2)}M`;
}
export const totalValueFormatted = formatUsd(totalValueUsd);
