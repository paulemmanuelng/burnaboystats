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
export const liveChartsUpdated = "2026-08-02";

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
            "country": "TM",
            "name": "Turkmenistan",
            "position": 1,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": -1
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
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 1
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
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
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
            "country": "IT",
            "name": "Italy",
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
            "country": "MD",
            "name": "Moldova",
            "position": 7,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 9,
            "movement": -3
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 12,
            "movement": 33
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 15,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": 26
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 19,
            "movement": -2
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 20,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": 3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 21,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 22,
            "movement": -8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 23,
            "movement": 10
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 24,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 25,
            "movement": -8
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 26,
            "movement": 5
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 28,
            "movement": -13
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 28,
            "movement": 36
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 31,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 34,
            "movement": 76
          },
          {
            "country": "IN",
            "name": "India",
            "position": 35,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 35,
            "movement": -2
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 35,
            "movement": 7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 37,
            "movement": -2
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 38,
            "movement": 40
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 39,
            "movement": 2
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 41,
            "movement": -10
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 46,
            "movement": -37
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 48,
            "movement": -22
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 49,
            "movement": 25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 49,
            "movement": -3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 51,
            "movement": -3
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 51,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": 15
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 54,
            "movement": -4
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 55,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 55,
            "movement": 2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 71,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 73,
            "movement": 10
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 79,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -1
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 86,
            "movement": 13
          },
          {
            "country": "US",
            "name": "United States",
            "position": 88,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -5
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 102,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": 2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 107,
            "movement": -27
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 108,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 33
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 114,
            "movement": -6
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 117,
            "movement": -15
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 119,
            "movement": -4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 121,
            "movement": -18
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 121,
            "movement": 14
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 129,
            "movement": 20
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 140,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 147,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -17
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 183,
            "movement": 15
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 195,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 195,
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
            "country": "IS",
            "name": "Iceland",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 6,
            "movement": 2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 7,
            "movement": 1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 8,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
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
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 11,
            "movement": -8
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
            "position": 12,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 13,
            "movement": -9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 15,
            "movement": 2
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 17,
            "movement": -11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 19,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 25,
            "movement": -11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 29,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 30,
            "movement": -8
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 31,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 33,
            "movement": 8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 37,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 42,
            "movement": 0
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 44,
            "movement": 6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 44,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 45,
            "movement": -13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 48,
            "movement": -17
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 52,
            "movement": -6
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 56,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 61,
            "movement": -11
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 65,
            "movement": -13
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 73,
            "movement": -20
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 75,
            "movement": -6
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 76,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 85,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 86,
            "movement": 2
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 88,
            "movement": 3
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 92,
            "movement": 5
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 96,
            "movement": -15
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 100,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 100,
            "movement": -14
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 118,
            "movement": 4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 122,
            "movement": 7
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 130,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 141,
            "movement": -2
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 151,
            "movement": 20
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 170,
            "movement": 4
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 171,
            "movement": 20
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 182,
            "movement": -1
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
            "movement": 2
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
            "country": "WW",
            "name": "Worldwide",
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
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 9,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 10,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "HR",
            "name": "Croatia",
            "position": 12,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 14,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 15,
            "movement": -10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 15,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": -2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 19,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 24,
            "movement": 0
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 26,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 31,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 31,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 34,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 36,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 40,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 40,
            "movement": -10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 41,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": -3
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 43,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 48,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -3
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 54,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 55,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -10
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 60,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 64,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -5
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 69,
            "movement": 13
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 71,
            "movement": -7
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 75,
            "movement": -10
          },
          {
            "country": "IN",
            "name": "India",
            "position": 75,
            "movement": -8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 77,
            "movement": -14
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 80,
            "movement": -21
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 84,
            "movement": -18
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 87,
            "movement": -5
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 97,
            "movement": -8
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 108,
            "movement": -19
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 109,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -19
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 120,
            "movement": -6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 122,
            "movement": -12
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 127,
            "movement": -17
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 141,
            "movement": -13
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 161,
            "movement": -16
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 5,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 2
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 2,
            "movement": 3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": 2
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 3,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 4,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 4,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": 3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": 7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 5,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 6,
            "movement": 11
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 8,
            "movement": -7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 9,
            "movement": 26
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 10,
            "movement": -2
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 12,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 12,
            "movement": -1
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 22,
            "movement": 30
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 22,
            "movement": 3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 27,
            "movement": -21
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 29,
            "movement": 8
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 35,
            "movement": -14
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 38,
            "movement": -20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 40,
            "movement": -14
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 47,
            "movement": -17
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 61,
            "movement": -13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 68,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 64
          },
          {
            "country": "IN",
            "name": "India",
            "position": 74,
            "movement": -13
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 78,
            "movement": -7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 100,
            "movement": -53
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 113,
            "movement": 0
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 123,
            "movement": -63
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 188,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 11,
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
            "country": "FI",
            "name": "Finland",
            "position": 1,
            "movement": 3
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
            "country": "SN",
            "name": "Senegal",
            "position": 1,
            "movement": 3
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
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 1,
            "movement": 3
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 3
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 2
          },
          {
            "country": "SI",
            "name": "Slovenia",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 3,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 3,
            "movement": 82
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
            "country": "HU",
            "name": "Hungary",
            "position": 4,
            "movement": 7
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 5,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 5,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 5,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 8,
            "movement": 4
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 8,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 8,
            "movement": -6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 8,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": 4
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 8,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 13,
            "movement": 3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 13,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 4
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 14,
            "movement": 80
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 15,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 15,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 16,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 17,
            "movement": 7
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 23,
            "movement": -16
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 27,
            "movement": 27
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 32,
            "movement": 5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 35,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 37,
            "movement": 23
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 45,
            "movement": -12
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 47,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 100,
            "movement": -71
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
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 3,
            "movement": 47
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 24,
            "movement": 118
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 57
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": -22
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 46,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 7
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 63,
            "movement": 41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -81
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 114,
            "movement": 9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": -52
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 27
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 185,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": -72
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 196,
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 92,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 114,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": 8
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 127,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": -9
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 179,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": 13
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "position": 37,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 1
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
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -11
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
            "position": 195,
            "movement": -21
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
            "position": 54,
            "movement": 2
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 41,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": -30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": -60
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 65
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 86,
            "movement": 63
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": 2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 104,
            "movement": 76
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 109,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -58
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -41
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 184,
            "movement": -24
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
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
            "position": 64,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 29,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 52,
            "movement": 32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": 4
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 89,
            "movement": -47
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -22
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 111,
            "movement": -55
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": 38
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 140,
            "movement": 39
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 145,
            "movement": -17
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 146,
            "movement": -70
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 147,
            "movement": 39
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": 6
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
            "position": 130,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 190,
            "movement": -36
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
            "movement": 2
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 68
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": 5
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 63,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": -9
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 93,
            "movement": -53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": 71
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 125,
            "movement": 25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 58
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 150,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 176,
            "movement": -109
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": 14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 182,
            "movement": -123
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 59
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": -20
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 107,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 141,
            "movement": 50
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 166,
            "movement": -36
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 179,
            "movement": -39
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 190,
            "movement": null,
            "status": "new"
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
            "position": 50,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": 37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 135,
            "movement": 43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": -67
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 155,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 160,
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
            "position": 36,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
            "movement": -3
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
            "position": 131,
            "movement": -22
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 9,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": -28
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 109,
            "movement": 85
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 118,
            "movement": 11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 123,
            "movement": -39
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
            "position": 99,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
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
            "position": 23,
            "movement": 2
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 9
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 53,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 78,
            "movement": 78
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": -52
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 185,
            "movement": 13
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
            "position": 40,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": 1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": -5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 195,
            "movement": -6
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 46
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 14
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
            "position": 58,
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
            "position": 16,
            "movement": 8
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 113,
            "movement": 78
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 133,
            "movement": -65
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 185,
            "movement": 6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 190,
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
            "position": 22,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": 2
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
            "position": 20,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": 8
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 58,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -6
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
            "position": 143,
            "movement": -74
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 25,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "position": 45,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": 45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": 44
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
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 88,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 117,
            "movement": 35
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 117,
            "movement": 2
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
            "movement": -2
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 52,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
            "movement": -3
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
            "position": 176,
            "movement": -172
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 163,
            "movement": 31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
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
            "country": "NG",
            "name": "Nigeria",
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
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -54
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 172,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 168,
            "movement": -19
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
            "position": 149,
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
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
            "position": 108,
            "movement": 4
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
            "position": 194,
            "movement": -23
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
            "position": 188,
            "movement": -17
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
            "position": 116,
            "movement": -19
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 108,
            "movement": 29
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 123,
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
            "position": 120,
            "movement": -29
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 135,
            "movement": 26
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
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": null,
            "status": "new"
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 106,
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
            "position": 173,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
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
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Different Size",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
            "movement": 161
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
            "position": 96,
            "movement": -82
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
            "position": 121,
            "movement": 19
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
            "position": 126,
            "movement": 5
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
    "title": "Hossana",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -12
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
    "title": "Big 7",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 147,
            "movement": 10
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
            "position": 91,
            "movement": -65
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
    "title": "On a Spaceship",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": null,
            "status": "new"
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
