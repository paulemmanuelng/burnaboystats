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
export const liveChartsUpdated = "2026-07-30";

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
            "country": "TW",
            "name": "Taiwan",
            "position": 13,
            "movement": null,
            "status": "re"
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
        "numberOnes": 18,
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
            "country": "OM",
            "name": "Oman",
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
            "country": "TN",
            "name": "Tunisia",
            "position": 1,
            "movement": 12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 1,
            "movement": 12
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 2,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
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
            "country": "UK",
            "name": "United Kingdom",
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
            "country": "KG",
            "name": "Kyrgyzstan",
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 5,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 5,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 6,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
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
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 7,
            "movement": 2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": 1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 7,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 8,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 8,
            "movement": 1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 9,
            "movement": 19
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": 19
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 12,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 13,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 14,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 17,
            "movement": 83
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 19,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": 3
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 20,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 21,
            "movement": -9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 21,
            "movement": 3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 21,
            "movement": -6
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 25,
            "movement": 7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 26,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 26,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 27,
            "movement": -3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 30,
            "movement": -10
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 30,
            "movement": -4
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 31,
            "movement": 2
          },
          {
            "country": "IN",
            "name": "India",
            "position": 32,
            "movement": -5
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 32,
            "movement": -4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 36,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 40,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 46,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 53,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 56,
            "movement": 11
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 58,
            "movement": -9
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 63,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 72,
            "movement": -52
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 75,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 81,
            "movement": -25
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 91,
            "movement": -35
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 96,
            "movement": -8
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 96,
            "movement": -5
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 97,
            "movement": -1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 101,
            "movement": -1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 107,
            "movement": -10
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 107,
            "movement": -25
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 109,
            "movement": -60
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 116,
            "movement": -34
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 126,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": -78
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -43
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 142,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 28
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 149,
            "movement": -14
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 160,
            "movement": -18
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 181,
            "movement": -40
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 191,
            "movement": -97
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 199,
            "movement": -15
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
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
            "country": "DE",
            "name": "Germany",
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
            "country": "SG",
            "name": "Singapore",
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
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": -1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 7,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 8,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 9,
            "movement": -1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 9,
            "movement": -3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 9,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 11,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 11,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 17,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 19,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 23,
            "movement": -6
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 24,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 25,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 27,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 28,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 28,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 30,
            "movement": -5
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 30,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 32,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 34,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 35,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -8
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 38,
            "movement": -12
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 39,
            "movement": -9
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 40,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 44,
            "movement": -13
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 45,
            "movement": -9
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 47,
            "movement": -5
          },
          {
            "country": "IN",
            "name": "India",
            "position": 47,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 53,
            "movement": -10
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 56,
            "movement": -7
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 59,
            "movement": -13
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 62,
            "movement": -17
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 67,
            "movement": -24
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 73,
            "movement": -23
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 74,
            "movement": -24
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 77,
            "movement": -25
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 81,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -9
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 89,
            "movement": -17
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 118,
            "movement": -8
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 122,
            "movement": -25
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 150,
            "movement": -44
          },
          {
            "country": "CN",
            "name": "China",
            "position": 160,
            "movement": -45
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 192,
            "movement": -31
          }
        ]
      },
      {
        "platform": "Spotify",
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
            "country": "DE",
            "name": "Germany",
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
            "country": "CY",
            "name": "Cyprus",
            "position": 2,
            "movement": 3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
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
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 4,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 6,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 8,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 8,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 12,
            "movement": -4
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 13,
            "movement": -5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 14,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 15,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 16,
            "movement": -12
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 18,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 23,
            "movement": 3
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 26,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 26,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 33,
            "movement": -5
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 34,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 36,
            "movement": 6
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 38,
            "movement": -8
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 43,
            "movement": -4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 43,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 44,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -1
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 47,
            "movement": 0
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 53,
            "movement": -8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 56,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 57,
            "movement": -8
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 67,
            "movement": -17
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 78,
            "movement": 7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 82,
            "movement": -10
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 83,
            "movement": -1
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 87,
            "movement": -16
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 89,
            "movement": -32
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 95,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 115,
            "movement": -4
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 115,
            "movement": -7
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 120,
            "movement": -10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 127,
            "movement": -13
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 158,
            "movement": -30
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 160,
            "movement": -6
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 171,
            "movement": -14
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 180,
            "movement": -20
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": -2
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
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": 85
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 7,
            "movement": 28
          },
          {
            "country": "US",
            "name": "United States",
            "position": 8,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": -2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 9,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 14,
            "movement": -12
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": -5
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 18,
            "movement": 23
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 31,
            "movement": -6
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 33,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 40,
            "movement": -17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 42,
            "movement": -25
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 53,
            "movement": -5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 57,
            "movement": 20
          },
          {
            "country": "IN",
            "name": "India",
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 60,
            "movement": -44
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 60,
            "movement": -7
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 67,
            "movement": 3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 67,
            "movement": -5
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 68,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 69,
            "movement": -33
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 78,
            "movement": -17
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 83,
            "movement": -19
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 86,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 87,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 93,
            "movement": -9
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 97,
            "movement": -52
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -26
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 111,
            "movement": -94
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 171,
            "movement": -110
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 9,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 1,
            "movement": null,
            "status": "new"
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
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 1,
            "movement": 5
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
            "country": "GT",
            "name": "Guatemala",
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
            "country": "ES",
            "name": "Spain",
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
            "country": "BO",
            "name": "Bolivia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": -3
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": -3
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 5,
            "movement": 3
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 6,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 7,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": 4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 8,
            "movement": 3
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 8,
            "movement": 20
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 10,
            "movement": -7
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 13,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 13,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 14,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 15,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 17,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 18,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 24,
            "movement": -6
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 24,
            "movement": 20
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 36,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 48,
            "movement": 2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 52,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -19
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 53,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 27,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 51,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": -44
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 106,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 166,
            "movement": -65
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 198,
            "movement": 1
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
            "position": 39,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Love, Damini",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 25,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": 54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 70,
            "movement": -25
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": -26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 86,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": -58
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 96,
            "movement": -9
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": 53
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": -104
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 161,
            "movement": -31
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 163,
            "movement": -52
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 171,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": -22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 180,
            "movement": -22
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 189,
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 24
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": 53
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -43
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -83
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -52
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 156,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 165,
            "movement": -49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": -77
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
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 59,
            "movement": 15
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
            "position": 66,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -16
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
            "position": 112,
            "movement": 1
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 69,
            "movement": null,
            "status": "new"
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
            "position": 32,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 42,
            "movement": 1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 83,
            "movement": 50
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": -14
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 106,
            "movement": -78
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -70
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": 13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 137,
            "movement": -51
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": -2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 153,
            "movement": -30
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 158,
            "movement": -69
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 162,
            "movement": -22
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 163,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 164,
            "movement": -36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": 11
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -9
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 179,
            "movement": -68
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 121,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 159,
            "movement": 11
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
            "position": 24,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 95,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": 34
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 180,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 184,
            "movement": -62
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 185,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": -110
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
            "position": 32,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -6
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
            "position": 185,
            "movement": -7
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
            "position": 43,
            "movement": 3
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
            "position": 84,
            "movement": -33
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
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 5
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 55,
            "movement": 118
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 40
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": 56
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": -67
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 180,
            "movement": -70
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": -2
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
            "position": 41,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -36
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -3
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": -67
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 146,
            "movement": -69
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 180,
            "movement": -106
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
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": 103
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 40,
            "movement": 53
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": 77
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 56
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 89
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -51
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -13
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
            "position": 4,
            "movement": -3
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 1
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
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 73,
            "movement": 94
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": -42
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 130,
            "movement": -71
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 184,
            "movement": -93
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 196,
            "movement": -21
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
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": -36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -8
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 30,
            "movement": 89
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 100,
            "movement": -5
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 124,
            "movement": -53
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 164,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 21,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": -12
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
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": -82
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
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
            "movement": -1
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
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 190,
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": null,
            "status": "new"
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
            "position": 37,
            "movement": 29
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 74,
            "movement": 11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 84,
            "movement": 37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": 29
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
            "position": 169,
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
            "position": 54,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": -36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 188,
            "movement": -4
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
            "movement": 1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 51,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": null,
            "status": "new"
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
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 148,
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": 34
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 196,
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
            "country": "BW",
            "name": "Botswana",
            "position": 99,
            "movement": 35
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 126,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 134,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 141,
            "movement": -56
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
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 139,
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
            "position": 114,
            "movement": -2
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
            "movement": 9
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
            "position": 175,
            "movement": -12
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
            "position": 122,
            "movement": -37
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
            "position": 79,
            "movement": -14
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
            "position": 63,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 59
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 182,
            "movement": -9
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
            "position": 80,
            "movement": 9
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
            "position": 179,
            "movement": -10
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -3
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
            "position": 114,
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
            "position": 65,
            "movement": -63
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
            "position": 122,
            "movement": 12
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 162,
            "movement": -9
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 76,
            "movement": -57
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
            "movement": -1
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 149,
            "movement": null,
            "status": "new"
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
            "country": "CO",
            "name": "Colombia",
            "position": 24,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Gum Body",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -26
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
            "movement": 15
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": -6
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
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": null,
            "status": "new"
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
            "position": 148,
            "movement": -9
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
            "position": 174,
            "movement": -12
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
