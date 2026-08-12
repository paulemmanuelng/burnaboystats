// GENERATED FILE — do not edit by hand.
// Rebuilt hourly by scripts/build-live-charts.mjs from kworb's artist page.
//
// PLATFORM chart data: where each release is sitting RIGHT NOW on Spotify,
// Apple Music, iTunes, Deezer, Shazam and YouTube country charts. This is not
// official-chart data — app/data/charts.ts holds the official national peaks
// that feed the site's headline totals, and the two are kept apart on purpose.

export interface LiveEntry {
  country: string; // ISO alpha-2
  name: string;
  position: number;
  // Movement against the chart's previous edition: 0 = no change, null = the
  // source flagged a new/re-entry, absent = the source reports no movement for
  // this platform at all (YouTube). Absent and null are different facts.
  movement?: number | null;
  /** Why there is no movement: the source flagged a new entry or a re-entry. */
  status?: "new" | "re";
}

export interface LivePlatform {
  platform: string;
  numberOnes: number;
  entries: LiveEntry[];
}

export interface LiveRelease {
  title: string;
  kind: "song" | "album";
  platforms: LivePlatform[];
}

/** When this snapshot was taken (ISO date). */
export const liveChartsUpdated = "2026-08-12";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 48,
        "entries": [
          {
            "country": "AR",
            "name": "Argentina",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 1,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 1,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 1,
            "movement": 0
          },
          {
            "country": "RE",
            "name": "Réunion",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 1,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 1,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 1,
            "movement": 0
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 2,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 3,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 3,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 4,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 4,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 5,
            "movement": 1
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 6,
            "movement": 1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": 1
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": -2
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 9,
            "movement": -5
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 9,
            "movement": 0
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 12,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 12,
            "movement": 2
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 13,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 13,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 13,
            "movement": 3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 15,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 19,
            "movement": -6
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 20,
            "movement": null,
            "status": "re"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 26,
            "movement": -5
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 29,
            "movement": 5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 29,
            "movement": -8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 52,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 10,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 2,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": 1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 3,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 5,
            "movement": -3
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 6,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 6,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 7,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": 1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 14,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 15,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 17,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 18,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 19,
            "movement": -3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 24,
            "movement": 90
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 29,
            "movement": -9
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 32,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 33,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 36,
            "movement": -3
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 37,
            "movement": -26
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 37,
            "movement": -11
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 37,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 43,
            "movement": 18
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 45,
            "movement": -12
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 51,
            "movement": -14
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 51,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 56,
            "movement": -12
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 56,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 58,
            "movement": -31
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 59,
            "movement": 34
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 62,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 69,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 69,
            "movement": -8
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 70,
            "movement": 5
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 78,
            "movement": -3
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 78,
            "movement": -27
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 79,
            "movement": 46
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 81,
            "movement": -24
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 82,
            "movement": -12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 83,
            "movement": -16
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 84,
            "movement": 31
          },
          {
            "country": "IN",
            "name": "India",
            "position": 90,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": 17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 94,
            "movement": -60
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 108,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -31
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 119,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 120,
            "movement": -8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 121,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 127,
            "movement": 58
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 137,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -27
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 143,
            "movement": 5
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 149,
            "movement": -7
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 155,
            "movement": -13
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 167,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 176,
            "movement": -68
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 192,
            "movement": -23
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 8,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 4,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 9,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 10,
            "movement": -5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 12,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 19,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 24,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 30,
            "movement": 9
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 33,
            "movement": -14
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 38,
            "movement": 5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 41,
            "movement": -12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 43,
            "movement": -4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": 2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 57,
            "movement": -24
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 59,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 66,
            "movement": -12
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 70,
            "movement": -27
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 76,
            "movement": 6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 84,
            "movement": -24
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 86,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 87,
            "movement": 38
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 106,
            "movement": -12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 107,
            "movement": -32
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 114,
            "movement": -17
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 118,
            "movement": -16
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 139,
            "movement": -29
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 146,
            "movement": -54
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 160,
            "movement": -31
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 163,
            "movement": -10
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 164,
            "movement": -28
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -12
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 184,
            "movement": -93
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 200,
            "movement": -47
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 10,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 14,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 18,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 18,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 26,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 30,
            "movement": 5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 32,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 36,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 38,
            "movement": -10
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 39,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 49,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 66,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 72,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": -13
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 80,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -12
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 88,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 90,
            "movement": -13
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 91,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 93,
            "movement": 13
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 97,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 104,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 117,
            "movement": -2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 139,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 140,
            "movement": -6
          },
          {
            "country": "IN",
            "name": "India",
            "position": 155,
            "movement": 4
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 174,
            "movement": -11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 176,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 181,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 7,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 1,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 1,
            "movement": 0
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 2,
            "movement": 9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 3,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 3,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 7,
            "movement": -4
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 8,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 8,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 9,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 9,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 11,
            "movement": 13
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -12
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 16,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 18,
            "movement": -12
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 18,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 22,
            "movement": -14
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 23,
            "movement": 5
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 25,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 32,
            "movement": -23
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 35,
            "movement": -29
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 37,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 42,
            "movement": -23
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 58,
            "movement": -22
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 60,
            "movement": -6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 60,
            "movement": 6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 69,
            "movement": 14
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 81,
            "movement": -37
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 86,
            "movement": -78
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 88,
            "movement": -56
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 5,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 8
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 6,
            "movement": 17
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 6,
            "movement": 76
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 11,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 12,
            "movement": -5
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 15,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 152
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 22,
            "movement": 103
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 24,
            "movement": -22
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 28,
            "movement": -25
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 29,
            "movement": 8
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 43,
            "movement": -9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 49,
            "movement": -18
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 50,
            "movement": -24
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 66,
            "movement": -22
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 70,
            "movement": -10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 73,
            "movement": -65
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": -4
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 154,
            "movement": -152
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 173,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -9
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
            "movement": -11
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 124,
            "movement": 37
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 126,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": -32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": -57
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": -10
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 150,
            "movement": 46
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 169,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 187,
            "movement": -7
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 192,
            "movement": -81
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 197,
            "movement": -36
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": 55
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 87,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 86
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": -34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 142,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 142,
            "movement": -45
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": -66
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 160,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -42
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 39
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 84,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 113,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 130,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 133,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": -25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
            "movement": -47
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 55
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 47,
            "movement": -2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 60,
            "movement": -7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 74,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": -36
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 112,
            "movement": 13
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 126,
            "movement": 23
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": 31
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 138,
            "movement": -40
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 142,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": 33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": 5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -123
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "No Sign Of Weakness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 105
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 58,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 77,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -47
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": -18
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 135,
            "movement": 24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 169,
            "movement": -101
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Dem Dey",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 16,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 124,
            "movement": -50
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 135,
            "movement": -30
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": -37
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 186,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": 52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": -53
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 191,
            "movement": -54
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 63,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": 13
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -15
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 22
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 181,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 36,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 39,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 99
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": -55
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 196,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Twice As Tall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": 39
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 199,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
            "movement": -57
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 33,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 22,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 57,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 95,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 105,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 114,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -8
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 95,
            "movement": 41
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 160,
            "movement": -84
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 81,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 87,
            "movement": -47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": -6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 60,
            "movement": 13
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 99,
            "movement": 22
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 199,
            "movement": -43
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Last Last",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 30,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 129,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 36,
            "movement": 81
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -32
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -123
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": 14
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 179,
            "movement": -35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -72
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 110,
            "movement": -29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 174,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 44,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": -43
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": -22
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 78,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Outside",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DK",
            "name": "Denmark",
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 33,
            "movement": 51
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Play Play",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 3,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 14
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 68,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -125
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 14
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Common Person",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -124
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 78,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 174,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Glory",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cloak & Dagger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 67,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Cheat On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Way Too Big",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Collateral Damage",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 98,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 68,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -123
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Apple Music Live: Burna Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 199,
            "movement": -114
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album"
  }
];

/** Totals, derived so they can never disagree with the data above. */
export const livePlacementCount = liveCharts.reduce(
  (n, r) => n + r.platforms.reduce((m, p) => m + p.entries.length, 0),
  0
);
export const liveNumberOnes = liveCharts.reduce(
  (n, r) => n + r.platforms.reduce((m, p) => m + p.numberOnes, 0),
  0
);
export const liveCountryCount = new Set(
  liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
).size;

/** Placements per platform, biggest first — powers the summary row. */
export const livePlatformTotals: { platform: string; placements: number; numberOnes: number }[] =
  livePlatforms
    .map((platform) => {
      const blocks = liveCharts.flatMap((r) => r.platforms.filter((p) => p.platform === platform));
      return {
        platform,
        placements: blocks.reduce((n, p) => n + p.entries.length, 0),
        numberOnes: blocks.reduce((n, p) => n + p.numberOnes, 0),
      };
    })
    .sort((a, b) => b.placements - a.placements);
