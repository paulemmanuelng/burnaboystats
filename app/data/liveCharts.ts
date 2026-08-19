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
export const liveChartsUpdated = "2026-08-19";

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
            "country": "EE",
            "name": "Estonia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 3,
            "movement": 1
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "UK",
            "name": "United Kingdom",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 3,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 5,
            "movement": 2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 6,
            "movement": -2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 6,
            "movement": 1
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 7,
            "movement": 9
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 8,
            "movement": 2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 10,
            "movement": -2
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 10,
            "movement": 0
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 11,
            "movement": 0
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 15,
            "movement": 3
          },
          {
            "country": "LY",
            "name": "Libya",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 15,
            "movement": 173
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 17,
            "movement": 6
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 17,
            "movement": 2
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 17,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 17,
            "movement": -3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 18,
            "movement": 14
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 18,
            "movement": 21
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 18,
            "movement": -8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 19,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": -2
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 22,
            "movement": -5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 24,
            "movement": -6
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 29,
            "movement": -2
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 30,
            "movement": 14
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 31,
            "movement": -17
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 31,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 31,
            "movement": -29
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 34,
            "movement": 2
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 34,
            "movement": 40
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 35,
            "movement": -1
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 40,
            "movement": 22
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 41,
            "movement": -8
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 42,
            "movement": 1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 43,
            "movement": 4
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 47,
            "movement": -17
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 47,
            "movement": -8
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 50,
            "movement": 25
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 54,
            "movement": -31
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 56,
            "movement": -14
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 58,
            "movement": 32
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 73,
            "movement": -11
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 76,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 77,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 79,
            "movement": -41
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 81,
            "movement": -2
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 87,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -21
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 91,
            "movement": -12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 94,
            "movement": -25
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 96,
            "movement": -22
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 100,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": -18
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 122,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 128,
            "movement": -72
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 129,
            "movement": -42
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 149,
            "movement": -2
          },
          {
            "country": "IN",
            "name": "India",
            "position": 149,
            "movement": -4
          },
          {
            "country": "US",
            "name": "United States",
            "position": 151,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 164,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -47
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 172,
            "movement": -64
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
            "movement": -3
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 179,
            "movement": 10
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 181,
            "movement": -38
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 198,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 5,
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
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
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
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": -1
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 2,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 3,
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": -3
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 9,
            "movement": -2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 10,
            "movement": 1
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 11,
            "movement": -3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 11,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 11,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 11,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 11,
            "movement": -2
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 13,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 13,
            "movement": 0
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 13,
            "movement": -1
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 14,
            "movement": -4
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 16,
            "movement": 1
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 22,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 23,
            "movement": -6
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 25,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 26,
            "movement": -7
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 31,
            "movement": -6
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 33,
            "movement": -5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 42,
            "movement": -12
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 49,
            "movement": -11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 51,
            "movement": -7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 57,
            "movement": -2
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 64,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 70,
            "movement": -17
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 72,
            "movement": -19
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 76,
            "movement": -33
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 85,
            "movement": -14
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 94,
            "movement": -24
          },
          {
            "country": "US",
            "name": "United States",
            "position": 112,
            "movement": -26
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 113,
            "movement": -16
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 119,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 128,
            "movement": -3
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 131,
            "movement": -3
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 143,
            "movement": -17
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 151,
            "movement": -36
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 157,
            "movement": 2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 174,
            "movement": -26
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 194,
            "movement": 1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 197,
            "movement": -58
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
            "country": "CO",
            "name": "Colombia",
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
            "country": "PH",
            "name": "Philippines",
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
            "country": "IL",
            "name": "Israel",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MA",
            "name": "Morocco",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GT",
            "name": "Guatemala",
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
            "country": "UA",
            "name": "Ukraine",
            "position": 4,
            "movement": 0
          },
          {
            "country": "HR",
            "name": "Croatia",
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
            "country": "PY",
            "name": "Paraguay",
            "position": 6,
            "movement": 0
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SV",
            "name": "El Salvador",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 12,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
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
            "country": "RO",
            "name": "Romania",
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
            "country": "BO",
            "name": "Bolivia",
            "position": 14,
            "movement": 0
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 17,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 18,
            "movement": 0
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 20,
            "movement": 0
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 20,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 25,
            "movement": 0
          },
          {
            "country": "HN",
            "name": "Honduras",
            "position": 26,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 26,
            "movement": 0
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 28,
            "movement": 0
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 29,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 34,
            "movement": 0
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 60,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 63,
            "movement": 0
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 72,
            "movement": 0
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 74,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 81,
            "movement": 0
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
            "country": "AT",
            "name": "Austria",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 9,
            "movement": -2
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
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": 4
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
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": 1
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 14,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
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
            "country": "IE",
            "name": "Ireland",
            "position": 15,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 15,
            "movement": -2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 16,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 16,
            "movement": 0
          },
          {
            "country": "FR",
            "name": "France",
            "position": 17,
            "movement": -2
          },
          {
            "country": "RU",
            "name": "Russia",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 18,
            "movement": -2
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 19,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 20,
            "movement": -2
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
            "position": 32,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 34,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 35,
            "movement": 2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 36,
            "movement": -10
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 43,
            "movement": -5
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 50,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -3
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 71,
            "movement": -2
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 82,
            "movement": -10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 88,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 90,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 91,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 95,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": 16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 105,
            "movement": -6
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 110,
            "movement": -7
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 113,
            "movement": -7
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 117,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 123,
            "movement": -17
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 125,
            "movement": -4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 147,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": 1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 171,
            "movement": -8
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 183,
            "movement": -6
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 198,
            "movement": -4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 3,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 1,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 1,
            "movement": null,
            "status": "new"
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
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 2,
            "movement": 0
          },
          {
            "country": "ES",
            "name": "Spain",
            "position": 2,
            "movement": 7
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
            "movement": 13
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 3,
            "movement": -1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 4,
            "movement": -3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 5,
            "movement": 8
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 5,
            "movement": 2
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 5,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 7,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 8,
            "movement": 4
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 8,
            "movement": -3
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 12,
            "movement": -11
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 13,
            "movement": -7
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 16,
            "movement": -5
          },
          {
            "country": "US",
            "name": "United States",
            "position": 16,
            "movement": 0
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 20,
            "movement": -18
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 25,
            "movement": 3
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 34,
            "movement": -31
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 38,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 50,
            "movement": -31
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 53,
            "movement": -6
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 72,
            "movement": -48
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 80,
            "movement": -45
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 94,
            "movement": -7
          },
          {
            "country": "IN",
            "name": "India",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 196,
            "movement": -59
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
            "position": 26,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 64
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 44,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 25
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 66,
            "movement": -4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 71,
            "movement": 105
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": 32
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 46
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 76
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 134,
            "movement": -41
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 147,
            "movement": -3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 168,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 186,
            "movement": -71
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -82
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
            "movement": 2
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
            "position": 63,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -22
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -6
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": 137
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -1
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 71,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 109,
            "movement": -39
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 113,
            "movement": -62
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 117,
            "movement": -27
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 126,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -49
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 143,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 155,
            "movement": -9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 168,
            "movement": -2
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
            "movement": -93
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 193,
            "movement": -38
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
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 45,
            "movement": 93
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 23
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": 141
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": 76
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 126,
            "movement": 15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 126,
            "movement": 64
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 134,
            "movement": 23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": -70
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": 49
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": 14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 195,
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
            "position": 24,
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
            "position": 105,
            "movement": -11
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
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 2
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
            "position": 16,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 64,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 7
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 97,
            "movement": -65
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 106,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": -8
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 142,
            "movement": -129
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": -50
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
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
            "position": 73,
            "movement": 0
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 38,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": 5
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 62,
            "movement": 88
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": 59
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 68,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 22
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 16
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 156,
            "movement": -112
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 162,
            "movement": 21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 185,
            "movement": -89
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
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 46,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 67,
            "movement": -21
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -1
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 122,
            "movement": 78
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 124,
            "movement": 11
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 126,
            "movement": 6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 135,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": 29
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 173,
            "movement": 10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 189,
            "movement": -104
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
            "position": 143,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 1,
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
            "position": 98,
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 16,
            "movement": 76
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 4
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 65,
            "movement": 98
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 74,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 107,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": -32
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 163,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 177,
            "movement": -36
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 190,
            "movement": -28
          },
          {
            "country": "SZ",
            "name": "Swaziland",
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
            "position": 23,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 60,
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
            "position": 142,
            "movement": 8
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 67
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 77,
            "movement": -15
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 89,
            "movement": -24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": -45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 75
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": -70
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 0
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 154,
            "movement": -103
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 179,
            "movement": 17
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": -9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 84
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
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
    "title": "Last Last",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 107,
            "movement": -79
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 189,
            "movement": -49
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 18,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 46,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 90,
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
    "title": "It's Plenty",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 31,
            "movement": 133
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 68,
            "movement": 21
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 103,
            "movement": -43
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 122,
            "movement": -40
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 59,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 78,
            "movement": 6
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 71,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 32
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -41
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
            "position": 39,
            "movement": 0
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
            "position": 14,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 70,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
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
            "position": 99,
            "movement": 7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 104,
            "movement": 19
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
            "position": 76,
            "movement": -32
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 93,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 106,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 154,
            "movement": 42
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
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 157,
            "movement": -4
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
            "position": 70,
            "movement": -43
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
            "movement": 5
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
            "position": 90,
            "movement": 3
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
            "position": 131,
            "movement": 8
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
            "position": 40,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": 3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 91,
            "movement": -4
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 61,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 33
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
    "kind": "album"
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
            "position": 136,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
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
            "position": 95,
            "movement": 0
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
    "title": "Love",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 39,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
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
            "position": 132,
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
            "position": 181,
            "movement": 16
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
            "movement": -7
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
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
            "movement": -38
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
            "position": 182,
            "movement": -27
          },
          {
            "country": "GM",
            "name": "Gambia",
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
    "title": "Don't Let Me Drown",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EG",
            "name": "Egypt",
            "position": 46,
            "movement": 0
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Buy You Life",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Own It",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "RU",
            "name": "Russia",
            "position": 151,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
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
            "position": 60,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Jagele",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
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
            "position": 68,
            "movement": 2
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
            "country": "NE",
            "name": "Niger",
            "position": 131,
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
            "movement": -2
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
            "position": 168,
            "movement": -26
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
            "movement": 13
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
            "country": "LY",
            "name": "Libya",
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
            "movement": 9
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
            "position": 189,
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
