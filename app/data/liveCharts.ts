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
export const liveChartsUpdated = "2026-08-14";

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
            "country": "OM",
            "name": "Oman",
            "position": 2,
            "movement": 4
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
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
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
            "country": "TJ",
            "name": "Tajikistan",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 5,
            "movement": 2
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
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 7,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 10,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 12,
            "movement": 4
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 12,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 13,
            "movement": 9
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 14,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": -2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 17,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 17,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 20,
            "movement": -5
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 21,
            "movement": 56
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 25,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 34,
            "movement": -10
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 34,
            "movement": -9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 36,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 99
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 36,
            "movement": 3
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 39,
            "movement": -2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 41,
            "movement": 18
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 56,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 57,
            "movement": 4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 60,
            "movement": -25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 3
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 68,
            "movement": -24
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 69,
            "movement": -26
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 70,
            "movement": -9
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 71,
            "movement": 0
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 73,
            "movement": 20
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 73,
            "movement": -41
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 84,
            "movement": 4
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
            "country": "RU",
            "name": "Russia",
            "position": 88,
            "movement": -6
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
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 7
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
            "country": "IN",
            "name": "India",
            "position": 115,
            "movement": -15
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 118,
            "movement": -29
          },
          {
            "country": "US",
            "name": "United States",
            "position": 130,
            "movement": -11
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 132,
            "movement": -34
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 134,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": -34
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 161,
            "movement": null,
            "status": "new"
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
            "country": "KH",
            "name": "Cambodia",
            "position": 181,
            "movement": -44
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 181,
            "movement": -23
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 186,
            "movement": -45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": -8
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 195,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 200,
            "movement": -77
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
            "movement": 0
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
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 12,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 13,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 14,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 14,
            "movement": -1
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
            "country": "IL",
            "name": "Israel",
            "position": 16,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 17,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 19,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 24,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 30,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 31,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 32,
            "movement": -1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 38,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 38,
            "movement": 0
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 48,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 59,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -6
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 66,
            "movement": -2
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 71,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 75,
            "movement": 1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 77,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 80,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -9
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 85,
            "movement": -2
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 89,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 98,
            "movement": -4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 100,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 110,
            "movement": -15
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 112,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 122,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 133,
            "movement": -21
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 145,
            "movement": 3
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 160,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
            "movement": -43
          },
          {
            "country": "IN",
            "name": "India",
            "position": 165,
            "movement": -2
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 5,
        "entries": [
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 6
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
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 3,
            "movement": 2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 3,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": 8
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 3,
            "movement": 4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 4,
            "movement": 4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 4,
            "movement": 16
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 11,
            "movement": -4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 11,
            "movement": -2
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 11,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 14,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 14,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -9
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 16,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 16,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 16,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": -3
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 18,
            "movement": -12
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 18,
            "movement": 4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 19,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": 2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 20,
            "movement": -5
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 23,
            "movement": -10
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 27,
            "movement": -14
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 38,
            "movement": 35
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 42,
            "movement": 39
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 63,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 71,
            "movement": -9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 89,
            "movement": -58
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 90,
            "movement": -47
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 95,
            "movement": -59
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 96,
            "movement": -70
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 5,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 1,
            "movement": 4
          },
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 11
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
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 3,
            "movement": 2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 4,
            "movement": 22
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 5,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 6,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 7,
            "movement": 9
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 9,
            "movement": 6
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": 7
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": -7
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 13,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": -13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 18,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 18,
            "movement": -9
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 21,
            "movement": 160
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 31,
            "movement": -28
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 69,
            "movement": -55
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 86,
            "movement": -6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 93,
            "movement": -10
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 97,
            "movement": -21
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 99,
            "movement": -6
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 132,
            "movement": 16
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
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 54
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 45,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": -7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 67,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 72,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 79,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 38
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 92,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 97,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 127,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 156,
            "movement": -10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 161,
            "movement": 18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 162,
            "movement": 10
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
            "country": "NA",
            "name": "Namibia",
            "position": 35,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 61,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 126,
            "movement": null,
            "status": "new"
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
            "country": "MR",
            "name": "Mauritania",
            "position": 11,
            "movement": 121
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 43
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
            "position": 72,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 96,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 50
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": -36
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": 56
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 143,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 18,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
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
            "position": 185,
            "movement": -50
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
            "movement": -1
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
            "position": 110,
            "movement": -15
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
            "position": 22,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": -20
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
            "position": 48,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": -14
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
            "position": 67,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 103
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 101,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 107,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -48
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 143,
            "movement": -127
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 191,
            "movement": -29
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
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 10
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
            "position": 93,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 156,
            "movement": -46
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 160,
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
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
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
            "position": 130,
            "movement": -3
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
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 0
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 94,
            "movement": -7
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 108,
            "movement": 49
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 173,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 189,
            "movement": -64
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
            "position": 52,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 63,
            "movement": 76
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 97,
            "movement": 40
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": -10
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 130,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": 57
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 135,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -15
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 149,
            "movement": 13
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
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 173,
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 45,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -62
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -42
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -21
          },
          {
            "country": "KW",
            "name": "Kuwait",
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 152,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": -25
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
            "movement": -105
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
            "movement": -130
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
            "position": 7,
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
            "position": 27,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": -4
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
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 30,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": 46
          },
          {
            "country": "FR",
            "name": "France",
            "position": 141,
            "movement": -16
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 154,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 168,
            "movement": -24
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
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": 35
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
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 200,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": -24
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
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -14
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
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 117,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": -2
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
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 13
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
            "position": 16,
            "movement": 65
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 93,
            "movement": 56
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
            "position": 121,
            "movement": 8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 166,
            "movement": 17
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 169,
            "movement": -63
          },
          {
            "country": "BZ",
            "name": "Belize",
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
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 72,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 86,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -10
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
            "position": 16,
            "movement": 9
          },
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
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": 36
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
            "position": 110,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": -54
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": -53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -23
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
            "position": 24,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
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
            "position": 75,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
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
            "position": 98,
            "movement": -41
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
            "position": 43,
            "movement": 8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": 42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": -15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 185,
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": 80
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
            "position": 186,
            "movement": 9
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
            "position": 161,
            "movement": -30
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
            "position": 72,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 89,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": -5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": -4
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
            "position": 75,
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
            "position": 117,
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
            "position": 60,
            "movement": 57
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 93,
            "movement": -9
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
            "country": "MY",
            "name": "Malaysia",
            "position": 187,
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
            "position": 155,
            "movement": 3
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
            "position": 192,
            "movement": -26
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
            "position": 191,
            "movement": -7
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -1
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
            "position": 120,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "All Eyes On Me",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 192,
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
            "position": 159,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 12,
            "movement": 22
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
            "position": 19,
            "movement": -11
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
            "position": 133,
            "movement": -9
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
            "position": 66,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "This Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 145,
            "movement": null,
            "status": "new"
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
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 162,
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
            "position": 145,
            "movement": -7
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
            "position": 67,
            "movement": -41
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
            "position": 184,
            "movement": -11
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
