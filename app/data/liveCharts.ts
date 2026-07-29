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
            "country": "UZ",
            "name": "Uzbekistan",
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
            "country": "DK",
            "name": "Denmark",
            "position": 2,
            "movement": 0
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
            "country": "TM",
            "name": "Turkmenistan",
            "position": 2,
            "movement": -1
          },
          {
            "country": "AM",
            "name": "Armenia",
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
            "movement": -1
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 5,
            "movement": 13
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
            "country": "MU",
            "name": "Mauritius",
            "position": 7,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 8,
            "movement": -1
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 9,
            "movement": 0
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 9,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 10,
            "movement": 12
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 11,
            "movement": -1
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 12,
            "movement": -7
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 12,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 12,
            "movement": 21
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 12,
            "movement": -1
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 16,
            "movement": 0
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 17,
            "movement": -7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 17,
            "movement": 10
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 18,
            "movement": 41
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 19,
            "movement": -3
          },
          {
            "country": "MK",
            "name": "North Macedonia",
            "position": 22,
            "movement": -8
          },
          {
            "country": "IN",
            "name": "India",
            "position": 24,
            "movement": -7
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 25,
            "movement": 6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 26,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 26,
            "movement": -10
          },
          {
            "country": "HR",
            "name": "Croatia",
            "position": 27,
            "movement": -4
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 27,
            "movement": 15
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 27,
            "movement": -5
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 28,
            "movement": 0
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 29,
            "movement": 1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 34,
            "movement": -3
          },
          {
            "country": "UY",
            "name": "Uruguay",
            "position": 34,
            "movement": -15
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 35,
            "movement": -2
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 36,
            "movement": -10
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 38,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": -15
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 48,
            "movement": -5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 49,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 54,
            "movement": -1
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 55,
            "movement": 16
          },
          {
            "country": "US",
            "name": "United States",
            "position": 56,
            "movement": -4
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 58,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 58,
            "movement": 14
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 61,
            "movement": -15
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 61,
            "movement": 3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 63,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -4
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 81,
            "movement": -40
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 83,
            "movement": -17
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 87,
            "movement": -78
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 88,
            "movement": -11
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 89,
            "movement": -10
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 95,
            "movement": -35
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 99,
            "movement": 1
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 102,
            "movement": 0
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 103,
            "movement": -19
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 109,
            "movement": -53
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 114,
            "movement": 0
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 115,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 119,
            "movement": 32
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 149,
            "movement": -45
          },
          {
            "country": "EC",
            "name": "Ecuador",
            "position": 162,
            "movement": -53
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 175,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": -124
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -10
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 197,
            "movement": -24
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 197,
            "movement": -6
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
        "numberOnes": 5,
        "entries": [
          {
            "country": "AT",
            "name": "Austria",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GT",
            "name": "Guatemala",
            "position": 1,
            "movement": 89
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 1,
            "movement": 60
          },
          {
            "country": "CH",
            "name": "Switzerland",
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
            "country": "CZ",
            "name": "Czech Republic",
            "position": 2,
            "movement": 2
          },
          {
            "country": "FR",
            "name": "France",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 2,
            "movement": 67
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
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 3,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "country": "BR",
            "name": "Brazil",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 5,
            "movement": 3
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 5,
            "movement": -3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 5,
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
            "country": "BE",
            "name": "Belgium",
            "position": 7,
            "movement": -4
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "US",
            "name": "United States",
            "position": 7,
            "movement": -3
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 10,
            "movement": -5
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 11,
            "movement": -10
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 13,
            "movement": -11
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 15,
            "movement": -13
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 16,
            "movement": -7
          },
          {
            "country": "BO",
            "name": "Bolivia",
            "position": 16,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 18,
            "movement": -13
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 21,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 22,
            "movement": -14
          },
          {
            "country": "TW",
            "name": "Taiwan",
            "position": 22,
            "movement": -9
          },
          {
            "country": "NI",
            "name": "Nicaragua",
            "position": 25,
            "movement": -5
          },
          {
            "country": "BY",
            "name": "Belarus",
            "position": 28,
            "movement": -17
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 31,
            "movement": -25
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 32,
            "movement": 2
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 37,
            "movement": -20
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
            "position": 42,
            "movement": -32
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 45,
            "movement": 61
          },
          {
            "country": "PY",
            "name": "Paraguay",
            "position": 46,
            "movement": -15
          },
          {
            "country": "HK",
            "name": "Hong Kong",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 51,
            "movement": -6
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 54,
            "movement": -8
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 55,
            "movement": -13
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 62,
            "movement": -9
          },
          {
            "country": "JP",
            "name": "Japan",
            "position": 65,
            "movement": -21
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 65,
            "movement": -1
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 72,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": -28
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 77,
            "movement": -11
          },
          {
            "country": "IN",
            "name": "India",
            "position": 79,
            "movement": -56
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 83,
            "movement": -13
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 85,
            "movement": -74
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": -8
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 90,
            "movement": -41
          },
          {
            "country": "MO",
            "name": "Macau",
            "position": 93,
            "movement": -21
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 93,
            "movement": -16
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 142,
            "movement": -80
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
            "position": 23,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 15
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
            "country": "ML",
            "name": "Mali",
            "position": 59,
            "movement": 49
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": 55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 65
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": -23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": -44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 111,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -73
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": 43
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "position": 137,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 188,
            "movement": -100
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
            "position": 24,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -9
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 69,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": 37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": -49
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 123,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 126,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 128,
            "movement": 45
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 161,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": -85
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 177,
            "movement": -44
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 187,
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
            "position": 32,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 79,
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
    "title": "wgft",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 0
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 33,
            "movement": 6
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": 13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 53,
            "movement": -17
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 112,
            "movement": 18
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 118,
            "movement": 18
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 129,
            "movement": -80
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 143,
            "movement": -126
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 146,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": 33
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 160,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 165,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
            "movement": -60
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
            "position": 37,
            "movement": 2
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": 28
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 119,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 150,
            "movement": 42
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
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": -56
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 175,
            "movement": -47
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 197,
            "movement": -73
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
            "position": 58,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 74,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": 23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 117,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": -47
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
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
            "position": 170,
            "movement": -19
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 3
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 66,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 92,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": 40
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 164,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 173,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 180,
            "movement": -11
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
            "position": 12,
            "movement": -1
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
            "country": "MR",
            "name": "Mauritania",
            "position": 67,
            "movement": 35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": -14
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 84,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": -34
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
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 0
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
            "country": "TD",
            "name": "Chad",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 125,
            "movement": -38
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
            "position": 168,
            "movement": null,
            "status": "new"
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
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 6
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -3
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
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 21
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -14
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
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": null,
            "status": "new"
          },
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
            "country": "SC",
            "name": "Seychelles",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
            "movement": -66
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 21,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": 92
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 186,
            "movement": -85
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 198,
            "movement": -19
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
            "position": 25,
            "movement": 1
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
            "position": 78,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
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
            "position": 188,
            "movement": 7
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
    "title": "It's Plenty",
    "platforms": [
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
            "position": 70,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "Gbona",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": 72
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -21
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
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
    "title": "Real Life",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
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
            "position": 83,
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
            "position": 168,
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
    "title": "Laho II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": -57
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -27
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
            "position": 86,
            "movement": 33
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 130,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 161,
            "movement": -40
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": -1
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
            "position": 62,
            "movement": 49
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 170,
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
    "title": "Location",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 69
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
            "movement": 11
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
            "movement": 0
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
            "position": 167,
            "movement": 9
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
    "title": "Big 7",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 56,
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
            "position": 21,
            "movement": 171
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
            "position": 76,
            "movement": null,
            "status": "new"
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
            "country": "SR",
            "name": "Suriname",
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
    "title": "Update",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -1
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
            "position": 69,
            "movement": -28
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
            "position": 150,
            "movement": -126
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
            "position": 154,
            "movement": null,
            "status": "new"
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
            "position": 116,
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
            "position": 122,
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
    "title": "Special Someone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": -6
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
            "position": 152,
            "movement": -115
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
            "position": 138,
            "movement": 0
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
            "position": 161,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "On The Low",
    "kind": "song",
    "platforms": [
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
    ]
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
