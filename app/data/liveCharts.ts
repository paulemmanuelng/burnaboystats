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
export const liveChartsUpdated = "2026-07-29";

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
        "numberOnes": 20,
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
            "country": "DK",
            "name": "Denmark",
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
            "country": "DE",
            "name": "Germany",
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
            "country": "AM",
            "name": "Armenia",
            "position": 2,
            "movement": 1
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 2,
            "movement": -1
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
            "movement": 1
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
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
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
            "country": "IT",
            "name": "Italy",
            "position": 4,
            "movement": -1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
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
            "country": "SG",
            "name": "Singapore",
            "position": 5,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
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
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 7,
            "movement": 5
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 7,
            "movement": 10
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 9,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 9,
            "movement": 1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 9,
            "movement": -4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 10,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 12,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 12,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 13,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 13,
            "movement": 74
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 13,
            "movement": 42
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 14,
            "movement": 8
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 15,
            "movement": 2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 16,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": 6
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 20,
            "movement": 7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 22,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 24,
            "movement": -12
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 25,
            "movement": 6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 26,
            "movement": -21
          },
          {
            "country": "IN",
            "name": "India",
            "position": 27,
            "movement": -3
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 28,
            "movement": 1
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 28,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 29,
            "movement": -11
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 32,
            "movement": -20
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 32,
            "movement": -4
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 33,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 42,
            "movement": -7
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 47,
            "movement": -9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 49,
            "movement": -15
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 49,
            "movement": -15
          },
          {
            "country": "US",
            "name": "United States",
            "position": 50,
            "movement": 2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 53,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": -16
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 56,
            "movement": 7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 56,
            "movement": 47
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 60,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 117
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 67,
            "movement": -19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 80,
            "movement": -36
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 82,
            "movement": 13
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 82,
            "movement": -21
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 88,
            "movement": -27
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 89,
            "movement": -10
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 94,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -16
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 96,
            "movement": -8
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 97,
            "movement": -14
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 100,
            "movement": -1
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 100,
            "movement": -73
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 112,
            "movement": -3
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 118,
            "movement": -16
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 135,
            "movement": -21
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 141,
            "movement": 8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 142,
            "movement": -27
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": -51
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 184,
            "movement": -22
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 194,
            "movement": -19
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
            "position": 2,
            "movement": 1
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
            "country": "PT",
            "name": "Portugal",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
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
            "country": "SE",
            "name": "Sweden",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 4,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 5,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 6,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 6,
            "movement": -1
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 6,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 6,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 7,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 8,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 8,
            "movement": -1
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 8,
            "movement": -3
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 10,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 12,
            "movement": -2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 20,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 20,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 23,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 23,
            "movement": -4
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 25,
            "movement": -7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 26,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 26,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 26,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 26,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 28,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 28,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -5
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 30,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 30,
            "movement": -6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 31,
            "movement": -3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 31,
            "movement": -4
          },
          {
            "country": "IN",
            "name": "India",
            "position": 33,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 36,
            "movement": -13
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 42,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 43,
            "movement": -8
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 43,
            "movement": -3
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 45,
            "movement": -20
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 46,
            "movement": -10
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 49,
            "movement": -14
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 50,
            "movement": -18
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 50,
            "movement": -22
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 52,
            "movement": -11
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 70,
            "movement": -16
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 72,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -9
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 97,
            "movement": -15
          },
          {
            "country": "KR",
            "name": "South Korea",
            "position": 106,
            "movement": -29
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 110,
            "movement": -15
          },
          {
            "country": "CN",
            "name": "China",
            "position": 115,
            "movement": -38
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 161,
            "movement": -29
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
            "country": "CY",
            "name": "Cyprus",
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
            "country": "CA",
            "name": "Canada",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 3,
            "movement": -2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GB",
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
            "country": "EE",
            "name": "Estonia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 5,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 7,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 8,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 8,
            "movement": -2
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 8,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 8,
            "movement": -3
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 9,
            "movement": -1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 12,
            "movement": -4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 18,
            "movement": -5
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 24,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 24,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 25,
            "movement": -6
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 26,
            "movement": -8
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 27,
            "movement": -2
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 30,
            "movement": -10
          },
          {
            "country": "US",
            "name": "United States",
            "position": 31,
            "movement": -5
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 37,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 38,
            "movement": -9
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 43,
            "movement": -9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 44,
            "movement": -17
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 45,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": -18
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 48,
            "movement": -9
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 48,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 49,
            "movement": -4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 52,
            "movement": -11
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 57,
            "movement": -10
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 62,
            "movement": -6
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 71,
            "movement": 2
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 73,
            "movement": -30
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 74,
            "movement": -13
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 75,
            "movement": -11
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 87,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 87,
            "movement": 4
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 103,
            "movement": -32
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 107,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 111,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 2
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 131,
            "movement": -53
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 133,
            "movement": -50
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 138,
            "movement": -49
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 140,
            "movement": -19
          },
          {
            "country": "IN",
            "name": "India",
            "position": 195,
            "movement": -58
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 1,
            "movement": 89
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 7
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 2,
            "movement": 59
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "DK",
            "name": "Denmark",
            "position": 3,
            "movement": 1
          },
          {
            "country": "FR",
            "name": "France",
            "position": 3,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 3,
            "movement": 2
          },
          {
            "country": "SK",
            "name": "Slovakia",
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
            "country": "AT",
            "name": "Austria",
            "position": 4,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 5,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 5,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": -4
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 7,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 7,
            "movement": -2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 7,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 10,
            "movement": -8
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 11,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 15,
            "movement": 2
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 15,
            "movement": -2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 17,
            "movement": -8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 18,
            "movement": -16
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 21,
            "movement": -11
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 25,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 26,
            "movement": -18
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 34,
            "movement": 9
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 40,
            "movement": -29
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 40,
            "movement": 12
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 46,
            "movement": -36
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 47,
            "movement": -45
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 48,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 53,
            "movement": -8
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 55,
            "movement": 56
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 57,
            "movement": -15
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 59,
            "movement": -11
          },
          {
            "country": "IN",
            "name": "India",
            "position": 60,
            "movement": -37
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 62,
            "movement": -8
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 65,
            "movement": 0
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 70,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -29
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 77,
            "movement": -27
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 80,
            "movement": -15
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 85,
            "movement": -15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": -7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 94,
            "movement": -43
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 97,
            "movement": -83
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 98,
            "movement": -26
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 100,
            "movement": -23
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 170,
            "movement": -108
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 12,
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
            "country": "DE",
            "name": "Germany",
            "position": 1,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 1,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SK",
            "name": "Slovakia",
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
            "country": "HU",
            "name": "Hungary",
            "position": 2,
            "movement": 2
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "MA",
            "name": "Morocco",
            "position": 3,
            "movement": 2
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 5,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 6,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 7,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 7,
            "movement": 28
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 8,
            "movement": -4
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 8,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 10,
            "movement": 3
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 11,
            "movement": -2
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 11,
            "movement": -1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 12,
            "movement": -5
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
            "country": "CH",
            "name": "Switzerland",
            "position": 14,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 15,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 15,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 18,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": 53
          },
          {
            "country": "US",
            "name": "United States",
            "position": 22,
            "movement": 11
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 28,
            "movement": -11
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 29,
            "movement": 44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 44,
            "movement": -37
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 46,
            "movement": -41
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 50,
            "movement": -5
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 56,
            "movement": -15
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
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 59,
            "movement": 49
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": 55
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 23
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": 14
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": -44
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -73
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": 43
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "position": 41,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 1
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
            "position": 62,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 199,
            "movement": -111
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
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 39,
            "movement": -6
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 43,
            "movement": 8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 86,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 87,
            "movement": 25
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 89,
            "movement": 40
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 111,
            "movement": 7
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 111,
            "movement": -58
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 123,
            "movement": -53
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 124,
            "movement": 34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -53
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 140,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 0
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 171,
            "movement": -25
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 176,
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
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
    "title": "On the Low",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 81,
            "movement": 83
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": 89
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 94,
            "movement": 29
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": -26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": 26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 117,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 122,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 130,
            "movement": -61
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 173,
            "movement": -6
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
            "movement": -3
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
            "position": 163,
            "movement": 19
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
            "position": 46,
            "movement": -5
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
            "movement": 97
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": -31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": 28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": 77
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 131,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -57
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 150,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": -79
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": -47
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 158,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": 7
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
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": 59
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 116,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -29
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 154,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": 7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 178,
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
            "position": 31,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 172,
            "movement": -21
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
            "position": 58,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": -18
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
            "movement": 8
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
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 59,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 74,
            "movement": 26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": 31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": -1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 175,
            "movement": -11
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 196,
            "movement": -23
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
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -87
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 120,
            "movement": -53
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": -28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": -95
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 188,
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
            "position": 31,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 92
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 1
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
            "position": 11,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 102
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -24
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": -14
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 77,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 17
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -29
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 178,
            "movement": -47
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
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 164,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": -44
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 53
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": 31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": 8
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
            "position": 24,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 16
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 31,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": -48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 49
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 86,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": 34
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 4,
            "movement": 148
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 71,
            "movement": 44
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 119,
            "movement": -53
          },
          {
            "country": "SR",
            "name": "Suriname",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": 6
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 27,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": 7
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 132,
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
            "position": 76,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -21
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
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
    "title": "Anybody",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 54
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 85,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -38
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
            "position": 172,
            "movement": 12
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
            "position": 85,
            "movement": -23
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
            "position": 65,
            "movement": -1
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
            "position": 38,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
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
            "position": 198,
            "movement": -30
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
            "position": 85,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 127,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": 57
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 134,
            "movement": 27
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
            "movement": -32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
            "movement": -16
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
            "position": 101,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
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
            "position": 152,
            "movement": 0
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 129,
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
            "position": 112,
            "movement": -10
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -12
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
            "position": 84,
            "movement": -3
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
            "position": 169,
            "movement": -2
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
            "position": 19,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
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
    "title": "City Boys",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
    "title": "WE PRAY",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SE",
            "name": "Sweden",
            "position": 134,
            "movement": 1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 153,
            "movement": -7
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
            "position": 4,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": -1
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
    "title": "Toni-Ann Singh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 46,
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
            "position": 115,
            "movement": 1
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
            "position": 70,
            "movement": -29
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
            "movement": -85
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
            "position": 79,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Tshwala Bam",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
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
            "position": 166,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Masculine",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -134
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
            "position": 139,
            "movement": -1
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
            "position": 162,
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
