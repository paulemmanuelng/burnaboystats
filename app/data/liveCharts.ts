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
export const liveChartsUpdated = "2026-08-18";

/** Every platform represented in the current snapshot. */
export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];

export const liveCharts: LiveRelease[] = [
  {
    "title": "Dai Dai",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 56,
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
            "movement": 1
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
            "country": "SV",
            "name": "El Salvador",
            "position": 1,
            "movement": 2
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
            "country": "GH",
            "name": "Ghana",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 1,
            "movement": 2
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
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 1,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "NO",
            "name": "Norway",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 1,
            "movement": 1
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 1,
            "movement": 1
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
            "country": "BH",
            "name": "Bahrain",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BD",
            "name": "Bangladesh",
            "position": 2,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 2
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
            "country": "HU",
            "name": "Hungary",
            "position": 2,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "MG",
            "name": "Madagascar",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CD",
            "name": "Dem. Rep. of the Congo",
            "position": 3,
            "movement": 1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
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
            "country": "AM",
            "name": "Armenia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 4,
            "movement": 2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 4,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 4,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "ET",
            "name": "Ethiopia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 5,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": -4
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
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 0
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 1
          },
          {
            "country": "AL",
            "name": "Albania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "BA",
            "name": "Bosnia and Herzegovina",
            "position": 8,
            "movement": 1
          },
          {
            "country": "PR",
            "name": "Puerto Rico",
            "position": 9,
            "movement": 3
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 10,
            "movement": 3
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": -8
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 11,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": 1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 17,
            "movement": -4
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": -4
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 20,
            "movement": null,
            "status": "re"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 28,
            "movement": 1
          },
          {
            "country": "IN",
            "name": "India",
            "position": 40,
            "movement": -14
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 70,
            "movement": -18
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
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 2,
            "movement": 39
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
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 3,
            "movement": 1
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
            "country": "LT",
            "name": "Lithuania",
            "position": 4,
            "movement": -2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 4,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 5,
            "movement": -2
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 7,
            "movement": -2
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 8,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 10,
            "movement": -8
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 12,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 13,
            "movement": -4
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 14,
            "movement": -9
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 16,
            "movement": -4
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 16,
            "movement": -11
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 17,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": -2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 18,
            "movement": -5
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 21,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 23,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 23,
            "movement": -5
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 27,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 31,
            "movement": -4
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 32,
            "movement": 1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 33,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 36,
            "movement": -10
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 38,
            "movement": 24
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 43,
            "movement": 2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 44,
            "movement": 38
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 47,
            "movement": -11
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 54,
            "movement": -11
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 62,
            "movement": -21
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 62,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 67,
            "movement": -23
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 69,
            "movement": 20
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 71,
            "movement": 17
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 74,
            "movement": -22
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 74,
            "movement": -4
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 75,
            "movement": 67
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 77,
            "movement": -1
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 79,
            "movement": -20
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": -8
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 85,
            "movement": 18
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 87,
            "movement": -22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 90,
            "movement": 56
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": 20
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 102,
            "movement": -25
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 108,
            "movement": 1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 109,
            "movement": 48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 127,
            "movement": -20
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 138,
            "movement": -25
          },
          {
            "country": "US",
            "name": "United States",
            "position": 141,
            "movement": -8
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 143,
            "movement": -65
          },
          {
            "country": "IN",
            "name": "India",
            "position": 145,
            "movement": -41
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 147,
            "movement": -17
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 160,
            "movement": -127
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 163,
            "movement": 29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 178,
            "movement": -15
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 188,
            "movement": -154
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 192,
            "movement": -36
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
            "movement": 1
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
            "country": "LU",
            "name": "Luxembourg",
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
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": -1
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 6,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 8,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 9,
            "movement": 2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 9,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 9,
            "movement": -5
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 11,
            "movement": 1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 12,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 17,
            "movement": -7
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 19,
            "movement": -2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 25,
            "movement": -6
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 28,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 30,
            "movement": -1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 38,
            "movement": -3
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 43,
            "movement": 3
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 44,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 52,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 53,
            "movement": -5
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 53,
            "movement": -11
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 55,
            "movement": -1
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 70,
            "movement": 5
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 71,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 86,
            "movement": -4
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 97,
            "movement": -2
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 115,
            "movement": -1
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 117,
            "movement": 18
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 125,
            "movement": -12
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 126,
            "movement": -5
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 128,
            "movement": -20
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 139,
            "movement": -8
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 148,
            "movement": -4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 158,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 159,
            "movement": -25
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 187,
            "movement": -26
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 195,
            "movement": -12
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
            "position": 5,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 10,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 13,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 13,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 14,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 14,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 15,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": -2
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 18,
            "movement": 0
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 19,
            "movement": -1
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 26,
            "movement": 0
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
            "position": 33,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 36,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 38,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 49,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 3
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 69,
            "movement": -10
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
            "position": 85,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 86,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 88,
            "movement": -5
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 91,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": 3
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 103,
            "movement": -2
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 106,
            "movement": -9
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 106,
            "movement": -14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 115,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 7
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 121,
            "movement": -9
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 138,
            "movement": -16
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 163,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 177,
            "movement": -12
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 191,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 194,
            "movement": -3
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
            "country": "PT",
            "name": "Portugal",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
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
            "country": "IL",
            "name": "Israel",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
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
            "country": "BO",
            "name": "Bolivia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 5,
            "movement": 0
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 9,
            "movement": 0
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 9,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 12,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 12,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 15,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 16,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 17,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 24,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 26,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 28,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 28,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 32,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 35,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 43,
            "movement": 0
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 55,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 55,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 57,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 81,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 81,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 92,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 4,
        "entries": [
          {
            "country": "BY",
            "name": "Belarus",
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
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 5
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 3,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 5,
            "movement": 4
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 6,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 7,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 9,
            "movement": 92
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 10,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 11,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": 14
          },
          {
            "country": "US",
            "name": "United States",
            "position": 15,
            "movement": -5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 22,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 25,
            "movement": 43
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 29,
            "movement": -19
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 33,
            "movement": -32
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 52,
            "movement": -39
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 82,
            "movement": -75
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 133,
            "movement": -87
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 148,
            "movement": -103
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
            "position": 16,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 62,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -53
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": -31
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": -10
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": -53
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 144,
            "movement": -60
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 145,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 155,
            "movement": -11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": -10
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 199,
            "movement": -101
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": -8
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 136,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": 3
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 138,
            "movement": 39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 141,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": 25
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 159,
            "movement": -74
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 188,
            "movement": -4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 190,
            "movement": -48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
            "movement": -91
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -53
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 198,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 25,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 157,
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
            "position": 98,
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
            "position": 94,
            "movement": -9
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": 105
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 51,
            "movement": 4
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 61,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": -7
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 86,
            "movement": -30
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 90,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 63
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": 4
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 114,
            "movement": -84
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 47
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 146,
            "movement": -31
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 167,
            "movement": 17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 185,
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
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": -4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 31,
            "movement": 123
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 32,
            "movement": 66
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 50,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 102,
            "movement": 77
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 102,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": 41
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
            "position": 91,
            "movement": 0
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
            "position": 42,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -22
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": 63
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": -26
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 141,
            "movement": -107
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 162,
            "movement": -83
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 173,
            "movement": -49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 182,
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 58,
            "movement": -1
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
            "position": 150,
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 44,
            "movement": 82
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": -27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 23
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 96,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": -53
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": 52
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 150,
            "movement": -42
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 183,
            "movement": null,
            "status": "new"
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 46,
            "movement": 30
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 50,
            "movement": 3
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 69,
            "movement": -45
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 85,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": 55
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": 11
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 126,
            "movement": 43
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 135,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": -69
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": 3
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
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
            "position": 157,
            "movement": -2
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 95
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -35
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -73
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": -2
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
            "position": 29,
            "movement": -1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 31,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
            "movement": -1
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
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": 38
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": 11
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
            "position": 19,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": 68
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": -86
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": 25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
    "title": "I Told Them...",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 23,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 0
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 103
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 171,
            "movement": -114
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 182,
            "movement": -91
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 196,
            "movement": -137
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 198,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 19,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": -1
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
            "position": 47,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
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
            "position": 28,
            "movement": -24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": -21
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 43,
            "movement": -2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -16
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": -21
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 123,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 60,
            "movement": -16
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 82,
            "movement": -53
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 89,
            "movement": 11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 164,
            "movement": 34
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
            "position": 61,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": 0
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
            "position": 55,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 155,
            "movement": -82
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -73
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
            "position": 36,
            "movement": 0
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
            "position": 44,
            "movement": -3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 95,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": -25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
            "movement": -32
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 196,
            "movement": -58
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
            "country": "AI",
            "name": "Anguilla",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 73,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -4
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
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": -6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 23
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
            "position": 59,
            "movement": null,
            "status": "re"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
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
            "country": "TD",
            "name": "Chad",
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
    "title": "23",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 3
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
            "movement": 2
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
            "position": 139,
            "movement": 12
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
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -6
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
            "position": 115,
            "movement": 28
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 136,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 69,
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
            "position": 142,
            "movement": 43
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
            "position": 197,
            "movement": -16
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
            "position": 193,
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
            "country": "FJ",
            "name": "Fiji",
            "position": 153,
            "movement": 36
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -14
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
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
    "title": "Sekkle Down",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Wetin Man Go Do",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -4
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
            "position": 70,
            "movement": -1
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
            "position": 63,
            "movement": -1
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
            "position": 162,
            "movement": -13
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": -4
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
            "position": 157,
            "movement": 11
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
            "position": 192,
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
