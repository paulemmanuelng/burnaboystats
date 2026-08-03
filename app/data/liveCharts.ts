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
export const liveChartsUpdated = "2026-08-03";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 59,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 1,
            "movement": 0
          },
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
            "country": "CO",
            "name": "Colombia",
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
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 1,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
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
            "country": "KW",
            "name": "Kuwait",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
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
            "country": "MT",
            "name": "Malta",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 1,
            "movement": 2
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
            "country": "MK",
            "name": "North Macedonia",
            "position": 1,
            "movement": 2
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
            "movement": 2
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
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "AM",
            "name": "Armenia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 2,
            "movement": -1
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
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 2,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 2,
            "movement": 1
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
            "country": "NG",
            "name": "Nigeria",
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
            "country": "SG",
            "name": "Singapore",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 4,
            "movement": 2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 10
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 5,
            "movement": 5
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 5,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 6,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 6,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 8,
            "movement": 4
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 9,
            "movement": 4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 9,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 11,
            "movement": 7
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 11,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 13,
            "movement": 2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 14,
            "movement": -4
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 16,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 16,
            "movement": 7
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 18,
            "movement": -5
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 21,
            "movement": -2
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 21,
            "movement": 13
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 34,
            "movement": 30
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 36,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 9,
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
            "country": "CY",
            "name": "Cyprus",
            "position": 1,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
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
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 3,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": 5
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 4,
            "movement": -3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 6,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 6,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 7,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 7,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 10,
            "movement": -7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 11,
            "movement": -4
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 13,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 15,
            "movement": 13
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 17,
            "movement": 29
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 18,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 18,
            "movement": 8
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 18,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 19,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 19,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 21,
            "movement": 13
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 22,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 22,
            "movement": -3
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 22,
            "movement": -10
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 25,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 25,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 26,
            "movement": -6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 29,
            "movement": -14
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 30,
            "movement": 5
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 33,
            "movement": -2
          },
          {
            "country": "IN",
            "name": "India",
            "position": 41,
            "movement": -6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 42,
            "movement": 13
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 42,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 44,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 45,
            "movement": 8
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 49,
            "movement": -1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 52,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 55,
            "movement": -6
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 57,
            "movement": -3
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 58,
            "movement": -10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 58,
            "movement": 15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 63,
            "movement": -12
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 66,
            "movement": -28
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 67,
            "movement": -12
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 70,
            "movement": -42
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 34
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 73,
            "movement": -24
          },
          {
            "country": "US",
            "name": "United States",
            "position": 76,
            "movement": -7
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 77,
            "movement": -42
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 80,
            "movement": -9
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 80,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 12
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 89,
            "movement": -10
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 98,
            "movement": -12
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 101,
            "movement": 20
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 102,
            "movement": 19
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 108,
            "movement": -4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 113,
            "movement": 6
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 114,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 115,
            "movement": 14
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 125,
            "movement": -17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 133,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": -30
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 150,
            "movement": 33
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 159,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": -28
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 178,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": -36
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 187,
            "movement": -13
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 197,
            "movement": null,
            "status": "new"
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
            "country": "CY",
            "name": "Cyprus",
            "position": 1,
            "movement": 1
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
            "country": "NO",
            "name": "Norway",
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
            "country": "CH",
            "name": "Switzerland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 7,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 8,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 10,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 12,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": -5
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 18,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 18,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 24,
            "movement": -4
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 26,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 26,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 29,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 29,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 42,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 45,
            "movement": -10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 45,
            "movement": -21
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 47,
            "movement": -1
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 49,
            "movement": -6
          },
          {
            "country": "US",
            "name": "United States",
            "position": 50,
            "movement": -6
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 62,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 66,
            "movement": 0
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 68,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 69,
            "movement": -13
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 71,
            "movement": -13
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 73,
            "movement": -12
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 80,
            "movement": 6
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 89,
            "movement": -5
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 95,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 98,
            "movement": -6
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 98,
            "movement": -25
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 103,
            "movement": -29
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 105,
            "movement": -12
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 117,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 119,
            "movement": -16
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 121,
            "movement": 14
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 140,
            "movement": -4
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 148,
            "movement": -18
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 149,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": -17
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 164,
            "movement": -22
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 186,
            "movement": -24
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
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
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 7,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": -3
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 9,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 12,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 17,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 17,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 19,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 23,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 23,
            "movement": 1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 26,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 32,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 34,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": -1
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 44,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 47,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 47,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": -8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 50,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 60,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 62,
            "movement": -7
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 68,
            "movement": -14
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 69,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 76,
            "movement": -5
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 79,
            "movement": -10
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 80,
            "movement": -3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 81,
            "movement": -6
          },
          {
            "country": "IN",
            "name": "India",
            "position": 82,
            "movement": -7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 98,
            "movement": -14
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 99,
            "movement": -19
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 106,
            "movement": -19
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 116,
            "movement": -19
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 130,
            "movement": -3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 132,
            "movement": -24
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 134,
            "movement": -25
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 137,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -24
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 151,
            "movement": -29
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 159,
            "movement": -18
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 197,
            "movement": -36
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 8,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
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
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 3,
            "movement": 5
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 3,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 5,
            "movement": 3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 6,
            "movement": 2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 8,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": 4
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 9,
            "movement": -6
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 9,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 10,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 13,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 13,
            "movement": -9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 14,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 16,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 19,
            "movement": -4
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 19,
            "movement": -5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 19,
            "movement": 4
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 21,
            "movement": -4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 27,
            "movement": -23
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 37,
            "movement": 8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 38,
            "movement": 62
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 11
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 40,
            "movement": -5
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 42,
            "movement": -10
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 50,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 70,
            "movement": -33
          },
          {
            "country": "US",
            "name": "United States",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 80,
            "movement": -53
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 91,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 4,
        "entries": [
          {
            "country": "BR",
            "name": "Brazil",
            "position": 1,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 2,
            "movement": 35
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 3,
            "movement": -1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 4,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 72
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 7,
            "movement": -5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 9,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": -6
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 17,
            "movement": -6
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 17,
            "movement": -15
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": -5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 29,
            "movement": -12
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 44,
            "movement": -16
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 57,
            "movement": -8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 63,
            "movement": -16
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 63,
            "movement": -34
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 74,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 104,
            "movement": -31
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 125,
            "movement": -107
          },
          {
            "country": "IN",
            "name": "India",
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 27,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": 91
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 69,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": 35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": 14
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 107,
            "movement": 90
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 111,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 143,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 145,
            "movement": 38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 159,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
            "movement": 2
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 0
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
            "position": 188,
            "movement": -8
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": null,
            "status": "re"
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
            "position": 65,
            "movement": -11
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 34,
            "movement": 21
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
            "country": "BS",
            "name": "The Bahamas",
            "position": 47,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 107,
            "movement": -55
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 110,
            "movement": 36
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 126,
            "movement": 20
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 130,
            "movement": -34
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 140,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 153,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": 21
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 160,
            "movement": -71
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": -49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 173,
            "movement": -124
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 178,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 193,
            "movement": -82
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 200,
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
            "position": 127,
            "movement": -5
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
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": 25
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 26,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 140
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -4
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 60,
            "movement": 85
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 62,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 57
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 55
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 80,
            "movement": 10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 91,
            "movement": -28
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 94,
            "movement": -70
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 103,
            "movement": 11
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -71
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 147,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -48
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 162,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -79
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -61
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
            "position": 30,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 98,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 106,
            "movement": -35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 107,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": 27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
            "movement": -27
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 196,
            "movement": -31
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 199,
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
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 111
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 47
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 129,
            "movement": 6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -64
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 198,
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
            "movement": 1
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
            "position": 129,
            "movement": -14
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
            "position": 127,
            "movement": -13
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
            "position": 13,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -8
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 69,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": -17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 127,
            "movement": -81
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 141,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": -38
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 176,
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 87,
            "movement": 36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 90,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 115,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 194,
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 16
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 46,
            "movement": 17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -28
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 138,
            "movement": -45
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": -34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": 7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 170,
            "movement": -110
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": -41
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
            "movement": null,
            "status": "new"
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 124
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 34
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 85,
            "movement": -7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 105,
            "movement": -52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": 75
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 125,
            "movement": -76
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": -45
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": -80
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 198,
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
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 34,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 144,
            "movement": 51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 156,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 180,
            "movement": 8
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 161,
            "movement": -82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": null,
            "status": "new"
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 32,
            "movement": -16
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 99,
            "movement": 61
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 108,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 178,
            "movement": 12
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 35,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 66,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -21
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
            "movement": -17
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": null,
            "status": "re"
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
            "position": 62,
            "movement": null,
            "status": "new"
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
            "position": 18,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 189,
            "movement": 1
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
            "position": 59,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -8
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": null,
            "status": "new"
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": 13
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 105,
            "movement": 12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": -18
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 122,
            "movement": -5
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
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
            "position": 187,
            "movement": 11
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
            "position": 138,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 99,
            "movement": 64
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": null,
            "status": "new"
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
            "position": 39,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 64,
            "movement": -12
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
            "movement": 1
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 176,
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
            "position": 99,
            "movement": 9
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
            "position": 127,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 182,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -20
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 174,
            "movement": null,
            "status": "new"
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 144,
            "movement": -24
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 146,
            "movement": -11
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
            "position": 64,
            "movement": 0
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
            "position": 200,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Common Person",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": null,
            "status": "re"
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
            "position": 95,
            "movement": 2
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
            "country": "FM",
            "name": "Micronesia",
            "position": 12,
            "movement": 39
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
            "country": "TD",
            "name": "Chad",
            "position": 18,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 71,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Alone",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
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
    "title": "Rockstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 122,
            "movement": -26
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 139,
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -51
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Hossana",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Big 7",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "TaTaTa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Talibans II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": null,
            "status": "new"
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
            "position": 182,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Rollercoaster",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": null,
            "status": "new"
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
            "position": 67,
            "movement": 1
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
            "position": 142,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Yaba Buluku",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -94
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Deja-vu",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Redemption",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 164,
            "movement": 29
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
            "position": 179,
            "movement": -2
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
