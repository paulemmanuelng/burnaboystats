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
export const liveChartsUpdated = "2026-08-01";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 62,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 1,
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 1,
            "movement": 2
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
            "movement": 1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 1,
            "movement": 3
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
            "country": "CL",
            "name": "Chile",
            "position": 1,
            "movement": 1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
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
            "country": "CY",
            "name": "Cyprus",
            "position": 1,
            "movement": 3
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
            "movement": 1
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 1,
            "movement": 1
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
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 1,
            "movement": 1
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
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 1,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 1,
            "movement": 1
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
            "country": "NL",
            "name": "Netherlands",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 1,
            "movement": 1
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 8
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
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 1
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
            "movement": 1
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
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 1,
            "movement": 4
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
            "movement": 1
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
            "country": "UY",
            "name": "Uruguay",
            "position": 1,
            "movement": 2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 2,
            "movement": 2
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
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 2,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 2,
            "movement": 3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 3,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 3,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 3,
            "movement": 4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 3,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 3,
            "movement": 5
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 3,
            "movement": 5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": 5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 3,
            "movement": 9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 3,
            "movement": 2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 4,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 1
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 4,
            "movement": 1
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GE",
            "name": "Georgia",
            "position": 4,
            "movement": 3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 5,
            "movement": 1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": 5
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 6,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 6,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": -1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 7,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 1
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 2
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 9,
            "movement": 2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 10,
            "movement": 9
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 10,
            "movement": 5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 12,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 12,
            "movement": 7
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 17,
            "movement": null,
            "status": "re"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 19,
            "movement": 27
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 23,
            "movement": 19
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 32,
            "movement": 40
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 34,
            "movement": 23
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 64,
            "movement": null,
            "status": "new"
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
            "movement": 0
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
            "country": "AE",
            "name": "United Arab Emirates",
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
            "country": "OM",
            "name": "Oman",
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
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 2,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 2,
            "movement": 2
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
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -2
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
            "country": "AM",
            "name": "Armenia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 5,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 1
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
            "country": "FJ",
            "name": "Fiji",
            "position": 6,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 6,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 6,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 7,
            "movement": -1
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
            "country": "MD",
            "name": "Moldova",
            "position": 8,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 9,
            "movement": -5
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 14,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 15,
            "movement": -14
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 16,
            "movement": -6
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 17,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 17,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 18,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 19,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 20,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": 7
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 25,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 26,
            "movement": -13
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 28,
            "movement": 2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 31,
            "movement": -2
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 31,
            "movement": 4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 33,
            "movement": -19
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 33,
            "movement": -7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 35,
            "movement": 1
          },
          {
            "country": "IN",
            "name": "India",
            "position": 36,
            "movement": 0
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 41,
            "movement": -6
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 42,
            "movement": 57
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 43,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 45,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": 10
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 47,
            "movement": -17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 48,
            "movement": 67
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 50,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 53,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 57,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 36
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 64,
            "movement": -60
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": -9
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 74,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 74,
            "movement": 45
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 78,
            "movement": -20
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 80,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
            "movement": -9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 83,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": -10
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 96,
            "movement": 8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 99,
            "movement": 1
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 99,
            "movement": -1
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 102,
            "movement": 30
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 103,
            "movement": -32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 108,
            "movement": 16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": 51
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 110,
            "movement": -66
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 113,
            "movement": 0
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 115,
            "movement": -5
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 131,
            "movement": -14
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 135,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": 17
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 149,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": -19
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 194,
            "movement": -13
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 198,
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
            "country": "DK",
            "name": "Denmark",
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": -1
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
            "country": "WW",
            "name": "Worldwide",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 9,
            "movement": -1
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 10,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": -7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": 1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 15,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 15,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 19,
            "movement": -1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 23,
            "movement": -9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 24,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 27,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 28,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 30,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 30,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 31,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": -1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 36,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 37,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 38,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 48,
            "movement": -15
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 48,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 53,
            "movement": -10
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 53,
            "movement": -11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 59,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 59,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -10
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 63,
            "movement": -12
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 64,
            "movement": -3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 65,
            "movement": -6
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 66,
            "movement": -16
          },
          {
            "country": "IN",
            "name": "India",
            "position": 67,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 82,
            "movement": -5
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 82,
            "movement": -20
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 89,
            "movement": -21
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 89,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 108,
            "movement": -13
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 110,
            "movement": -29
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 110,
            "movement": -17
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 114,
            "movement": -12
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 128,
            "movement": -17
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 145,
            "movement": -12
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 196,
            "movement": -28
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 11,
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
            "movement": 1
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
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
            "country": "PL",
            "name": "Poland",
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
            "country": "GB",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 5,
            "movement": 0
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
            "movement": 11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 6,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 8,
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
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 11,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 17,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 17,
            "movement": -3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 22,
            "movement": 4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 28,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 28,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 31,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 32,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 35,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 41,
            "movement": 2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 42,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 44,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 50,
            "movement": -14
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 50,
            "movement": -3
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 52,
            "movement": -9
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 53,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 56,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 69,
            "movement": -13
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 75,
            "movement": -8
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 81,
            "movement": 6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 82,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 86,
            "movement": -7
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 88,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 89,
            "movement": -11
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 91,
            "movement": -8
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 97,
            "movement": -2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 122,
            "movement": -7
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 127,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -14
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 129,
            "movement": -9
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 139,
            "movement": -12
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 171,
            "movement": -13
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 174,
            "movement": 6
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 181,
            "movement": -21
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 191,
            "movement": -20
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
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 1,
            "movement": 3
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
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 4,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 16
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": -3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": -3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 5,
            "movement": 17
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 5,
            "movement": 1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 5,
            "movement": 37
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 6,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 7,
            "movement": 18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 8,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 9,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 9,
            "movement": -4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 10,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 10,
            "movement": 22
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": -9
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 12,
            "movement": 16
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 15,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 15,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 17,
            "movement": -4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 24,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -14
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 29,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 33,
            "movement": -18
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 35,
            "movement": -29
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 35,
            "movement": 42
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 37,
            "movement": -3
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 44,
            "movement": 1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 48,
            "movement": -32
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 54,
            "movement": -36
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 60,
            "movement": -45
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": -23
          },
          {
            "country": "US",
            "name": "United States",
            "position": 77,
            "movement": -44
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 85,
            "movement": -80
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 94,
            "movement": -48
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 4,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 1,
            "movement": 78
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 9
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": 1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 3,
            "movement": 1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": 3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 3,
            "movement": 7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 5,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": -1
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 8,
            "movement": -4
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 8,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 8,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 10,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 11,
            "movement": -8
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 12,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 20,
            "movement": -15
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 21,
            "movement": -17
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 25,
            "movement": 36
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 26,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 30,
            "movement": -11
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 35,
            "movement": -16
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 42,
            "movement": 75
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 47,
            "movement": -43
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 47,
            "movement": 32
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 48,
            "movement": -9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 52,
            "movement": -9
          },
          {
            "country": "IN",
            "name": "India",
            "position": 69,
            "movement": -45
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 72,
            "movement": -9
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 76,
            "movement": -12
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 76,
            "movement": -59
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 91,
            "movement": -69
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 92,
            "movement": -72
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 92,
            "movement": -38
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 113,
            "movement": -106
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -106
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 155,
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
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 23,
            "movement": 54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 50,
            "movement": 139
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
            "movement": -29
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": 40
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 77,
            "movement": 101
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 94,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 21
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 104,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": 72
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": -67
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 142,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 151,
            "movement": -25
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 159,
            "movement": -74
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": -19
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 173,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 183,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": -10
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 197,
            "movement": -95
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 142
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 127
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 43,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 76,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": -41
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": -18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 112,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -31
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 141,
            "movement": 59
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 142,
            "movement": -70
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": -42
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 155,
            "movement": -113
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 180,
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
            "position": 37,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -1
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
            "position": 23,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 21
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 68,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 102,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 105,
            "movement": 41
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 120,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 122,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -45
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 146,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 196,
            "movement": -21
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
            "position": 36,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
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
            "position": 174,
            "movement": 11
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
            "position": 56,
            "movement": -3
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
            "position": 79,
            "movement": -37
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
            "position": 44,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 74
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": 50
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 85,
            "movement": 44
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 94,
            "movement": 43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": 41
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 135,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -7
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
            "movement": -99
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 197,
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 0
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
            "position": 101,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
            "movement": -14
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
            "position": 109,
            "movement": 3
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
            "position": 66,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
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
            "position": 22,
            "movement": 3
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
            "position": 32,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 59,
            "movement": -38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 22
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 64,
            "movement": 73
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 67,
            "movement": -49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 147,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 150,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -51
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": -68
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
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 84
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 84,
            "movement": -36
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 104,
            "movement": 22
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 129,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 162,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 194,
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
            "position": 192,
            "movement": -108
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
            "position": 33,
            "movement": 90
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 42,
            "movement": 66
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 42,
            "movement": -16
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 56,
            "movement": 44
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": -20
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 76,
            "movement": 1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 84,
            "movement": -64
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": 96
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 11
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 122,
            "movement": -56
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 128,
            "movement": 65
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 150,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 156,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": -61
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 186,
            "movement": -43
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 194,
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
            "position": 126,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 154,
            "movement": 5
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
            "position": 10,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 70,
            "movement": 99
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 102,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": -18
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 130,
            "movement": 15
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 140,
            "movement": 20
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
            "movement": -21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 199,
            "movement": -1
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
            "position": 25,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 30,
            "movement": 56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": -35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -77
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 156,
            "movement": -100
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 198,
            "movement": -139
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
            "position": 34,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 21,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": 12
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
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": -24
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
            "position": 24,
            "movement": -23
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 68,
            "movement": -57
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 185,
            "movement": -12
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 191,
            "movement": 7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 191,
            "movement": -124
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 94,
            "movement": -4
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": -2
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 137,
            "movement": null,
            "status": "new"
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
            "position": 79,
            "movement": null,
            "status": "re"
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
            "position": 22,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 47,
            "movement": 17
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 60,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -10
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
            "position": 69,
            "movement": 130
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
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
            "position": 52,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": 35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 51,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 4,
            "movement": 28
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 87,
            "movement": -49
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
            "position": 82,
            "movement": null,
            "status": "re"
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
            "position": 46,
            "movement": 18
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 101,
            "movement": 27
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 113,
            "movement": 55
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": -34
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
            "position": 171,
            "movement": 5
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
            "position": 200,
            "movement": -6
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
            "position": 171,
            "movement": -18
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
            "position": 97,
            "movement": -8
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
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -21
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
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": null,
            "status": "re"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 144,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -2
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
            "position": 112,
            "movement": 12
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
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -13
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": null,
            "status": "new"
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 91,
            "movement": 12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 161,
            "movement": 20
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
            "position": 131,
            "movement": 0
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
            "position": 154,
            "movement": -105
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
            "position": 137,
            "movement": -27
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
            "movement": -104
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
            "position": 14,
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
            "position": 76,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Kabiyesi",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -17
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
            "country": "EG",
            "name": "Egypt",
            "position": 25,
            "movement": null,
            "status": "new"
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
            "position": 5,
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
            "position": 149,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Giza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 140,
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jerusalema",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AR",
            "name": "Argentina",
            "position": 32,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Dangote",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": null,
            "status": "new"
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
    "title": "Donne-moi l'accord",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 134,
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
            "position": 64,
            "movement": 0
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
            "position": 157,
            "movement": 4
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
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 171,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Don't Let Me Drown (From F1® The Movie)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 25,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ]
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
