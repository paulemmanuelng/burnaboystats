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
export const liveChartsUpdated = "2026-08-17";

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
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 1
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 2,
            "movement": 1
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
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 2,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 4,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
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
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 4,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 5,
            "movement": 31
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 5,
            "movement": -1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 6,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 9,
            "movement": -1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 9,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 9,
            "movement": 2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": -2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 11,
            "movement": -1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 11,
            "movement": -4
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 13,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 16,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 18,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 19,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 24,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 26,
            "movement": 3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 27,
            "movement": -1
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 29,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 33,
            "movement": -22
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 33,
            "movement": 17
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 34,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 34,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 36,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 36,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 41,
            "movement": -26
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 41,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": 30
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 45,
            "movement": -2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": 55
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 57,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 59,
            "movement": 4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 62,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 65,
            "movement": -10
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 70,
            "movement": -7
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 71,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 76,
            "movement": -1
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 77,
            "movement": -22
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 78,
            "movement": -60
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 82,
            "movement": 47
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 88,
            "movement": 14
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 89,
            "movement": -36
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 103,
            "movement": -14
          },
          {
            "country": "IN",
            "name": "India",
            "position": 104,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -4
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 109,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 112,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 113,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 113,
            "movement": 16
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 116,
            "movement": -33
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 130,
            "movement": 18
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -20
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 142,
            "movement": -53
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 146,
            "movement": 0
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 155,
            "movement": -4
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 156,
            "movement": 9
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 157,
            "movement": -8
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 163,
            "movement": 28
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 7,
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
            "country": "PT",
            "name": "Portugal",
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
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 3,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 3,
            "movement": 10
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 7,
            "movement": 1
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 7,
            "movement": 6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 7,
            "movement": -3
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 7,
            "movement": -6
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 8,
            "movement": -2
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 9,
            "movement": 8
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 9,
            "movement": -6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 11,
            "movement": 42
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 13,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 13,
            "movement": -2
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 13,
            "movement": -12
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 14,
            "movement": -1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 15,
            "movement": -10
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 15,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 15,
            "movement": 9
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": -3
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 17,
            "movement": 19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": -5
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 22,
            "movement": -3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 23,
            "movement": 19
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 25,
            "movement": -17
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": 10
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 29,
            "movement": 30
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 29,
            "movement": -13
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 29,
            "movement": 26
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 66
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 37,
            "movement": -13
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 51,
            "movement": -23
          },
          {
            "country": "US",
            "name": "United States",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 58,
            "movement": 29
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 61,
            "movement": 18
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 66,
            "movement": -44
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 67,
            "movement": -3
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 74,
            "movement": -8
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 84,
            "movement": -8
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
            "country": "WW",
            "name": "Worldwide",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "position": 3,
            "movement": 1
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
            "country": "IS",
            "name": "Iceland",
            "position": 4,
            "movement": 2
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
            "movement": 2
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 5,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 6,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 7,
            "movement": 3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 10,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 11,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 12,
            "movement": 1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 12,
            "movement": 1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 12,
            "movement": 1
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 17,
            "movement": 11
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": 3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 18,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 19,
            "movement": 4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 19,
            "movement": 10
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 26,
            "movement": 4
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 29,
            "movement": 13
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 35,
            "movement": 9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 42,
            "movement": 6
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 45,
            "movement": -1
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 46,
            "movement": 22
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 48,
            "movement": 13
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 52,
            "movement": 7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 54,
            "movement": 1
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 68,
            "movement": 21
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 75,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
            "movement": 27
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 95,
            "movement": 9
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 108,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 113,
            "movement": -25
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 114,
            "movement": 22
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 121,
            "movement": -5
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 131,
            "movement": 38
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 134,
            "movement": 6
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 135,
            "movement": 49
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 144,
            "movement": -2
          },
          {
            "country": "PK",
            "name": "Pakistan",
            "position": 161,
            "movement": 4
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 164,
            "movement": 17
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 183,
            "movement": 8
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
            "country": "DE",
            "name": "Germany",
            "position": 6,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 6,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
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
            "country": "PT",
            "name": "Portugal",
            "position": 12,
            "movement": 1
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
            "movement": -1
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
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 15,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 17,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": 1
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 18,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 20,
            "movement": 2
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
            "position": 29,
            "movement": 1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 30,
            "movement": 3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 36,
            "movement": -5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 36,
            "movement": 1
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 42,
            "movement": 0
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 52,
            "movement": -4
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 65,
            "movement": 7
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 65,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 4
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 73,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 74,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 74,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": 4
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 94,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": -12
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 99,
            "movement": -1
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 101,
            "movement": -13
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 109,
            "movement": -10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 109,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 153,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 161,
            "movement": -23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": -31
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 165,
            "movement": -34
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 167,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -14
          },
          {
            "country": "IN",
            "name": "India",
            "position": 181,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 1,
            "movement": 1
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 2,
            "movement": 1
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
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
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
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 4,
            "movement": 7
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 6,
            "movement": -4
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 6,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 7,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 8,
            "movement": -3
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 12,
            "movement": 1
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 16,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 17,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 19,
            "movement": 27
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 21,
            "movement": -16
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 49,
            "movement": -45
          },
          {
            "country": "IN",
            "name": "India",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 64,
            "movement": -51
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 78,
            "movement": 49
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 131,
            "movement": -5
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 165,
            "movement": 24
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
            "position": 20,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 84,
            "movement": 24
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 96,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": 35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": -58
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 106,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": -22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 138,
            "movement": -77
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 141,
            "movement": 12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 142,
            "movement": -86
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 144,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
            "movement": -26
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 178,
            "movement": -2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 59,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": -11
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 0
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 30,
            "movement": 108
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 55,
            "movement": 4
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 56,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": -25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 82,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 99,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": -29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 115,
            "movement": -76
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 132,
            "movement": -17
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 150,
            "movement": -98
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 154,
            "movement": -39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -53
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 180,
            "movement": -28
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 180,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -52
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 198,
            "movement": -107
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
            "position": 12,
            "movement": 52
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 85,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 101,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 109,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 136,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 139,
            "movement": 46
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 142,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 143,
            "movement": -31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
            "movement": -72
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": 35
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 177,
            "movement": -88
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -40
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 184,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 25,
            "movement": 1
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
            "position": 97,
            "movement": 13
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
            "position": 7,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": -71
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 133,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 150,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 179,
            "movement": -51
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
            "position": 81,
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
            "country": "BT",
            "name": "Bhutan",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": 8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 57,
            "movement": 25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 76,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 117,
            "movement": -8
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 126,
            "movement": 49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": 50
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 133,
            "movement": 25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 145,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": -21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 163,
            "movement": -35
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
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
            "position": 155,
            "movement": 1
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
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": -4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 79,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": -48
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -11
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 124,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 10
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
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
            "position": 24,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 57,
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
            "position": 151,
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
            "country": "TD",
            "name": "Chad",
            "position": 16,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -52
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 198,
            "movement": -1
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
            "position": 9,
            "movement": -1
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
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -28
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 108,
            "movement": -25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 112,
            "movement": -11
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 126,
            "movement": 53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": -66
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -49
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 196,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 20,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": 85
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 57,
            "movement": 79
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": 2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 91,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 44
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": -134
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 186,
            "movement": -23
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
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 136,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -21
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
            "position": 18,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": -56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
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
            "position": 20,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 24,
            "movement": 1
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
            "position": 48,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": 0
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
            "position": 4,
            "movement": 84
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": 97
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 168,
            "movement": 24
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 44,
            "movement": 114
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 96,
            "movement": 75
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 100,
            "movement": -14
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 121,
            "movement": 23
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
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
            "position": 40,
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 37,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 93,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": -12
          },
          {
            "country": "FR",
            "name": "France",
            "position": 164,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -17
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
            "position": 85,
            "movement": 12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 121,
            "movement": -6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 160,
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
            "position": 36,
            "movement": 10
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -24
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 155,
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
            "country": "KE",
            "name": "Kenya",
            "position": 33,
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
            "position": 41,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 66,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 83,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": 19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": 38
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
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 81,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
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
            "country": "MR",
            "name": "Mauritania",
            "position": 73,
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
    "title": "My Oasis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 65,
            "movement": -39
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 99,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
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
            "country": "KE",
            "name": "Kenya",
            "position": 7,
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
            "position": 72,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
            "movement": -30
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
            "position": 96,
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
            "position": 193,
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
            "position": 156,
            "movement": 14
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
            "position": 75,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": -23
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
            "position": 130,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": -12
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
            "position": 123,
            "movement": 4
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
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": 2
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
    "title": "Jerusalema",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 94,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 38
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Naughty By Nature",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
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
            "position": 35,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "JA ARA E",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
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
    "title": "Bank On It",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
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
            "position": 54,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Run My Race",
    "platforms": [
      {
        "platform": "iTunes",
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
    "title": "Kilometre",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 69,
            "movement": -2
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
            "country": "LR",
            "name": "Liberia",
            "position": 148,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CZ",
            "name": "Czech Republic",
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
    "title": "Rockstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 167,
            "movement": -47
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
            "position": 149,
            "movement": 4
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
            "position": 89,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 6
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
            "movement": 1
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
