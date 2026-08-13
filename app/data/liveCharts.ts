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
export const liveChartsUpdated = "2026-08-13";

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
        "numberOnes": 12,
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
            "movement": 1
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
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 4,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
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
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 5,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 6,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 9,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 10,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 10,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 13,
            "movement": 9
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 14,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": 3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 15,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 21,
            "movement": 56
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 23,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 23,
            "movement": 2
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 24,
            "movement": -4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 26,
            "movement": 38
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 30,
            "movement": -1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 30,
            "movement": -5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 99
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 39,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 39,
            "movement": -3
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 41,
            "movement": 18
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 42,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 43,
            "movement": 3
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 56,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 60,
            "movement": -25
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 61,
            "movement": 15
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 61,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 68,
            "movement": -24
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 70,
            "movement": -9
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 71,
            "movement": -5
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 73,
            "movement": 20
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 80,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 85,
            "movement": -9
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 87,
            "movement": -12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 88,
            "movement": -9
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 93,
            "movement": -8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 94,
            "movement": -45
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 98,
            "movement": -30
          },
          {
            "country": "IN",
            "name": "India",
            "position": 100,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": -24
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 115,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 118,
            "movement": -29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 123,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 11
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 134,
            "movement": -17
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 158,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": 1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 169,
            "movement": -97
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 180,
            "movement": -2
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 181,
            "movement": -44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": -24
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 186,
            "movement": -45
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 7,
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
            "country": "SE",
            "name": "Sweden",
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
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 8,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 10,
            "movement": -1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 10,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 10,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 11,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 11,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 12,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 19,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 20,
            "movement": -5
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 20,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 31,
            "movement": -5
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 37,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 37,
            "movement": -2
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 44,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 45,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": -1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 62,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 68,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 72,
            "movement": 6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 72,
            "movement": 2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 79,
            "movement": -13
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 82,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 86,
            "movement": 4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 92,
            "movement": 13
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 93,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 113,
            "movement": -3
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 119,
            "movement": -7
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 124,
            "movement": -13
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 133,
            "movement": -16
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 144,
            "movement": -8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 150,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 172,
            "movement": 4
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 176,
            "movement": -16
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 179,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -11
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 196,
            "movement": -4
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
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
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
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 10,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 10,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 14,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 15,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 17,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 17,
            "movement": -1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 17,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 22,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 28,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 31,
            "movement": 5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 34,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 36,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 38,
            "movement": -3
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 43,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 64,
            "movement": -17
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 66,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 76,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 78,
            "movement": -7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 78,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 81,
            "movement": 2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 83,
            "movement": -5
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 88,
            "movement": -7
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 94,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 95,
            "movement": -4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 101,
            "movement": 4
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 110,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -13
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 112,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 119,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 148,
            "movement": -1
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 162,
            "movement": -20
          },
          {
            "country": "IN",
            "name": "India",
            "position": 163,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 200,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 6,
        "entries": [
          {
            "country": "CO",
            "name": "Colombia",
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
            "country": "HR",
            "name": "Croatia",
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
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 2,
            "movement": 48
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 4,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 4,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 5,
            "movement": 9
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 5,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": 1
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 6,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 7,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 7,
            "movement": 13
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
            "movement": 17
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 8,
            "movement": 8
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": 3
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 11,
            "movement": -8
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 13,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 13,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 2
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 13,
            "movement": 3
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
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 15,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 16,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 18,
            "movement": -16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 20,
            "movement": 2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 20,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 22,
            "movement": 25
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 22,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 23,
            "movement": -3
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 26,
            "movement": 5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 31,
            "movement": 5
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 36,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 47,
            "movement": -14
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 61,
            "movement": 4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 62,
            "movement": 24
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 73,
            "movement": -31
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 81,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 4,
        "entries": [
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "SK",
            "name": "Slovakia",
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
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 2,
            "movement": 2
          },
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
            "movement": 41
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 4,
            "movement": 84
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": 12
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 5,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": 2
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 6,
            "movement": -4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 9,
            "movement": 3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 15,
            "movement": -14
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 16,
            "movement": -10
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 21,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 21,
            "movement": -20
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 23,
            "movement": -17
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 29,
            "movement": -24
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IN",
            "name": "India",
            "position": 63,
            "movement": -17
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 77,
            "movement": -11
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 80,
            "movement": -5
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 83,
            "movement": -8
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 157,
            "movement": -31
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 198,
            "movement": -171
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
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 54,
            "movement": 70
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 63,
            "movement": 39
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": 38
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 72,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 122,
            "movement": 57
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 127,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 146,
            "movement": -30
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 162,
            "movement": 10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 182,
            "movement": -52
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": -2
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
            "position": 66,
            "movement": 1
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": 81
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 54
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 99,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 25
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 124,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": -65
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 175,
            "movement": -55
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -46
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 199,
            "movement": -9
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
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 69,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -9
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
            "movement": -50
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
            "position": 95,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
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
            "position": 20,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 76
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 49,
            "movement": 82
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 65,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": 68
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": -14
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 107,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -75
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 143,
            "movement": -127
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": -66
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 191,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 53,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 69,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 113,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -36
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 157,
            "movement": 34
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "DM",
            "name": "Dominica",
            "position": 21,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
            "movement": 2
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -15
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 59,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 110,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 114,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -40
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 139,
            "movement": -34
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 162,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": -55
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 180,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 197,
            "movement": -53
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
            "position": 137,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 185,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "HU",
            "name": "Hungary",
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -22
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
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": -48
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 157,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 173,
            "movement": 17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 189,
            "movement": -64
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
            "position": 67,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 77
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 45,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 103
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 139,
            "movement": -75
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 148,
            "movement": -111
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": -58
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 84,
            "movement": -59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": -64
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 166,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 5,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 52,
            "movement": 50
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 55,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -39
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 196,
            "movement": -105
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
            "position": 10,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 28,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": -11
          },
          {
            "country": "FR",
            "name": "France",
            "position": 125,
            "movement": -16
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 128,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 144,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": 23
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AO",
            "name": "Angola",
            "position": 39,
            "movement": 26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 126,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 171,
            "movement": -95
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
            "movement": -19
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
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": 36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": -54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": 1
          },
          {
            "country": "TN",
            "name": "Tunisia",
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
    "title": "Change Your Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 156,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
            "movement": -92
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": -80
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
            "position": 81,
            "movement": 54
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 101,
            "movement": 56
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 129,
            "movement": -61
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 169,
            "movement": -63
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 183,
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
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 81,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -8
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
            "position": 29,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
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
            "position": 183,
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
            "position": 57,
            "movement": null,
            "status": "new"
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
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 182,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -93
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
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
            "position": 134,
            "movement": -21
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
            "position": 51,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
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
            "position": 73,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 117,
            "movement": 0
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
            "position": 84,
            "movement": -5
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
            "position": 191,
            "movement": -1
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
    "title": "4 Kampé II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": 79
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
            "position": 119,
            "movement": 7
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
            "position": 60,
            "movement": 57
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 87,
            "movement": -83
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 106,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TM",
            "name": "Turkmenistan",
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
            "country": "SE",
            "name": "Sweden",
            "position": 140,
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
            "position": 158,
            "movement": 1
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
            "position": 65,
            "movement": 5
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -3
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
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
            "position": 145,
            "movement": -1
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 10
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
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
            "country": "NE",
            "name": "Niger",
            "position": 170,
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
            "position": 57,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": -13
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Be Honest",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 95,
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
            "country": "RO",
            "name": "Romania",
            "position": 86,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Sekkle Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Dey Play",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Wetin Man Go Do",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": null,
            "status": "new"
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
            "position": 34,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "28 grams",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
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
    "title": "Tested, Approved & Trusted",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": 2
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
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": 32
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
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": -11
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
            "position": 65,
            "movement": 2
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 26,
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
            "position": 173,
            "movement": 5
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
