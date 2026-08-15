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
export const liveChartsUpdated = "2026-08-15";

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
            "country": "TM",
            "name": "Turkmenistan",
            "position": 1,
            "movement": 4
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
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 3,
            "movement": -1
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
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
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 2
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
            "country": "KW",
            "name": "Kuwait",
            "position": 9,
            "movement": 8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": 1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 9,
            "movement": 21
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 10,
            "movement": 16
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 10,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 12,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 12,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 13,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 14,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 16,
            "movement": -2
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 17,
            "movement": -7
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
            "country": "BY",
            "name": "Belarus",
            "position": 21,
            "movement": -8
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
            "position": 29,
            "movement": -6
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 29,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 31,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 32,
            "movement": 137
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
            "position": 34,
            "movement": 5
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
            "position": 45,
            "movement": -6
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 50,
            "movement": 10
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 51,
            "movement": -10
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 53,
            "movement": 20
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 53,
            "movement": 27
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 56,
            "movement": 12
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
            "country": "AO",
            "name": "Angola",
            "position": 59,
            "movement": -38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": -26
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 63,
            "movement": -49
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 3
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 73,
            "movement": -41
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 84,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 85,
            "movement": 24
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 86,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 88,
            "movement": 30
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 90,
            "movement": -8
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 91,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": 65
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 103,
            "movement": -18
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 103,
            "movement": -9
          },
          {
            "country": "IN",
            "name": "India",
            "position": 115,
            "movement": -15
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 118,
            "movement": 16
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 119,
            "movement": -7
          },
          {
            "country": "US",
            "name": "United States",
            "position": 122,
            "movement": -19
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 132,
            "movement": -34
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 149,
            "movement": 37
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 154,
            "movement": 27
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
            "country": "HK",
            "name": "Hong Kong",
            "position": 181,
            "movement": -23
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
        "numberOnes": 6,
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
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
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 8,
            "movement": 2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 8,
            "movement": 4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 8,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 9,
            "movement": 2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 10,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": 1
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 19,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 22,
            "movement": -3
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 32,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 33,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 38,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 45,
            "movement": -1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 46,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 54,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 63,
            "movement": 5
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 64,
            "movement": -2
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 65,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 71,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 84,
            "movement": -5
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 88,
            "movement": -6
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 93,
            "movement": 31
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 94,
            "movement": -8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 96,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 100,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 125,
            "movement": -12
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 130,
            "movement": -11
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 135,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 146,
            "movement": -2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 161,
            "movement": -11
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 178,
            "movement": 1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 180,
            "movement": -4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 182,
            "movement": -10
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
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 1,
            "movement": 20
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 1,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 23
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 1,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 1,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 13
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": 3
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
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 5,
            "movement": 10
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 6,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 6,
            "movement": -4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 7,
            "movement": -3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 8,
            "movement": -7
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -7
          },
          {
            "country": "US",
            "name": "United States",
            "position": 17,
            "movement": -8
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 18,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 18,
            "movement": -11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": 32
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 21,
            "movement": 4
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 39,
            "movement": -30
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 39,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 82,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 94,
            "movement": 7
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 95,
            "movement": -11
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 97,
            "movement": -7
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 98,
            "movement": -91
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 117,
            "movement": 12
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
            "country": "MR",
            "name": "Mauritania",
            "position": 5,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 54
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -5
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
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 44
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 103,
            "movement": -31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 156,
            "movement": -29
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
            "position": 168,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
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
            "position": 33,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -26
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
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
            "position": 42,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 45,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 51
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
            "position": 130,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 136,
            "movement": 57
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
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": 7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 196,
            "movement": -11
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
            "movement": -1
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
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -17
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 59,
            "movement": 48
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": -14
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
            "country": "SC",
            "name": "Seychelles",
            "position": 86,
            "movement": -21
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
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 165,
            "movement": null,
            "status": "new"
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
            "position": 199,
            "movement": -27
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
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 16,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -8
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
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": -25
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 183,
            "movement": -10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
    "title": "Ye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 28,
            "movement": null,
            "status": "new"
          },
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
            "position": 67,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -7
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 197,
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
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 57,
            "movement": 3
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
            "movement": 3
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
            "position": 38,
            "movement": 21
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 52,
            "movement": 7
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 63,
            "movement": 76
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
            "country": "KY",
            "name": "Cayman Islands",
            "position": 134,
            "movement": null,
            "status": "new"
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
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": 14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": -99
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
            "position": 136,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 194,
            "movement": -9
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
            "position": 23,
            "movement": -4
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
            "position": 46,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 105,
            "movement": -21
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 125,
            "movement": 17
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 150,
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
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": 23
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 186,
            "movement": null,
            "status": "new"
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": -2
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
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": null,
            "status": "new"
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
            "position": 8,
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
            "position": 28,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": -1
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
            "position": 16,
            "movement": -3
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
            "country": "SC",
            "name": "Seychelles",
            "position": 56,
            "movement": -1
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
            "position": 76,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 102,
            "movement": 94
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
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": -47
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": -2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 176,
            "movement": -124
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
            "country": "TD",
            "name": "Chad",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 71,
            "movement": -32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 91,
            "movement": 80
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": 35
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
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 117
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
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -34
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": -18
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
            "position": 20,
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
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": 30
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
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": -43
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
            "country": "DM",
            "name": "Dominica",
            "position": 30,
            "movement": 139
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 47,
            "movement": 54
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 93,
            "movement": 56
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 167,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 69,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 2
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
            "position": 23,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 0
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
            "position": 72,
            "movement": -2
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
            "position": 174,
            "movement": 9
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
            "country": "MG",
            "name": "Madagascar",
            "position": 122,
            "movement": 63
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 144,
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
            "position": 112,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 119,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
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
    "title": "For My Hand",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 72,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": -2
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
            "position": 186,
            "movement": -32
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
            "position": 73,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 185,
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
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
            "position": 197,
            "movement": -1
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
            "position": 41,
            "movement": 19
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 95,
            "movement": -4
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
            "movement": 2
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
            "position": 134,
            "movement": -39
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 186,
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
            "position": 178,
            "movement": -24
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
            "position": 161,
            "movement": -17
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
            "position": 38,
            "movement": -19
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
            "position": 161,
            "movement": 3
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
            "movement": 0
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
    "title": "WE PRAY",
    "platforms": [
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
    "title": "Baddest",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
            "movement": 3
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
            "position": 186,
            "movement": -17
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
