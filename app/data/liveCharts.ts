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
            "country": "QA",
            "name": "Qatar",
            "position": 4,
            "movement": 5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 4,
            "movement": 0
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
            "movement": 0
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
            "country": "LV",
            "name": "Latvia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 9,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 10,
            "movement": -7
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
            "country": "NP",
            "name": "Nepal",
            "position": 12,
            "movement": 33
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 13,
            "movement": 1
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
            "country": "CA",
            "name": "Canada",
            "position": 15,
            "movement": -1
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": 26
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 18,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 18,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 19,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 20,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 21,
            "movement": 13
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
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 23,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 25,
            "movement": -5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 26,
            "movement": 5
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
            "movement": -3
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
            "position": 33,
            "movement": -2
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
            "country": "UY",
            "name": "Uruguay",
            "position": 38,
            "movement": 40
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
            "country": "MG",
            "name": "Madagascar",
            "position": 51,
            "movement": -3
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 52,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": 15
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 53,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 16
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 55,
            "movement": 2
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 58,
            "movement": 15
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
            "country": "PA",
            "name": "Panama",
            "position": 89,
            "movement": -10
          },
          {
            "country": "US",
            "name": "United States",
            "position": 89,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 101,
            "movement": 20
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 106,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 33
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
            "country": "SC",
            "name": "Seychelles",
            "position": 114,
            "movement": -6
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 121,
            "movement": 0
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 125,
            "movement": -17
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 129,
            "movement": 0
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
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": -17
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
            "country": "SN",
            "name": "Senegal",
            "position": 195,
            "movement": -31
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
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 3
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
            "country": "CZ",
            "name": "Czech Republic",
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
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": 9
          },
          {
            "country": "FR",
            "name": "France",
            "position": 4,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 4,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 5,
            "movement": 12
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 5,
            "movement": 6
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 6,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 7,
            "movement": 1
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
            "movement": 3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 9,
            "movement": 2
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 11,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 11,
            "movement": 4
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 13,
            "movement": 3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 15,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 19,
            "movement": 6
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 20,
            "movement": 11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 24,
            "movement": 6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 24,
            "movement": 9
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 25,
            "movement": 12
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 26,
            "movement": 16
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 26,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": 17
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 38,
            "movement": 6
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 43,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 44,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 46,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 56,
            "movement": 0
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 58,
            "movement": 18
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 61,
            "movement": 0
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 62,
            "movement": 30
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 63,
            "movement": 2
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 66,
            "movement": 9
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 73,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 74,
            "movement": 11
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 84,
            "movement": 4
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 86,
            "movement": 10
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 92,
            "movement": -6
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 93,
            "movement": 7
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 93,
            "movement": 29
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 103,
            "movement": -3
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 130,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 131,
            "movement": 20
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 135,
            "movement": 36
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 136,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -4
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 137,
            "movement": -19
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 142,
            "movement": -1
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 162,
            "movement": 20
          },
          {
            "country": "IN",
            "name": "India",
            "position": 179,
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
            "country": "GR",
            "name": "Greece",
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
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 2,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 2,
            "movement": 2
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": 1
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
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": 2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 3,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": 78
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 5,
            "movement": 24
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 5,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 6,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 7,
            "movement": -5
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": -7
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 10,
            "movement": 2
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 26,
            "movement": -14
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
            "position": 28,
            "movement": -21
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 33,
            "movement": 2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 34,
            "movement": -7
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 47,
            "movement": -13
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 55,
            "movement": -15
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 58,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 74,
            "movement": -13
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 78,
            "movement": -57
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 95,
            "movement": -27
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 127,
            "movement": 56
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 130,
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
            "position": 43,
            "movement": -1
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
            "position": 90,
            "movement": 4
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
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": 10
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
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": 25
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
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": -79
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 185,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -61
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
    "title": "African Giant",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": -5
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
            "position": 109,
            "movement": 3
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
            "country": "AO",
            "name": "Angola",
            "position": 184,
            "movement": -24
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 196,
            "movement": -31
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
            "movement": 1
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
            "position": 175,
            "movement": -3
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": 8
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
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 167,
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
            "movement": 2
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 15
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
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 47,
            "movement": -18
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 49,
            "movement": null,
            "status": "new"
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 107,
            "movement": -55
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
            "position": 140,
            "movement": 5
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
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": -49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 163,
            "movement": null,
            "status": "new"
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
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": null,
            "status": "new"
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
            "position": 122,
            "movement": 8
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
            "position": 56,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -15
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
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 131,
            "movement": null,
            "status": "new"
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
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
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
            "position": 115,
            "movement": 16
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
            "position": 10,
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 12
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 69,
            "movement": 15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": -23
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
            "position": 112,
            "movement": -5
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
            "movement": 50
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": -38
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 166,
            "movement": -36
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 179,
            "movement": -39
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
            "position": 23,
            "movement": 2
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
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": 13
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 185,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 74,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
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
            "position": 115,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 123,
            "movement": -39
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 63,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 92,
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
            "country": "NA",
            "name": "Namibia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": 58
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 138,
            "movement": -45
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 170,
            "movement": -110
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
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -4
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -5
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
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -74
          },
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
            "position": 66,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": -21
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 14
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
            "country": "QA",
            "name": "Qatar",
            "position": 100,
            "movement": null,
            "status": "new"
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
            "country": "OM",
            "name": "Oman",
            "position": 178,
            "movement": 12
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 185,
            "movement": 6
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
            "position": 72,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 91,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 30,
            "movement": -4
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
            "position": 80,
            "movement": 0
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
            "position": 189,
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
            "position": 188,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -8
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
            "position": 46,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 106,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 117,
            "movement": 2
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
            "position": 54,
            "movement": -2
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 77,
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
            "position": 176,
            "movement": -172
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
            "position": 99,
            "movement": 9
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
            "position": 152,
            "movement": 16
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -4
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
            "movement": 7
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
            "movement": null,
            "status": "new"
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
            "position": 97,
            "movement": -2
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
    "title": "Hossana",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 35,
            "movement": -23
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
    "title": "Yaba Buluku",
    "platforms": [
      {
        "platform": "iTunes",
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
            "position": 142,
            "movement": 5
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
            "position": 190,
            "movement": -99
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
    "title": "L.I.F.E - Leaving an Impact for Eternity",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -3
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
