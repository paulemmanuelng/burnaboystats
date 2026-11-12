// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=tems from kworb's artist page.
  //
  // PLATFORM chart data for Tems: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
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
    /** Release artwork, resolved at build time. Absent means unresolved — the
     *  page draws a monogram rather than borrowing another release's cover. */
    cover?: string;
    /** The snapshot date (ISO) this release first appeared on this board,
     *  carried from run to run. A new release's missing cover has a 7-day
     *  grace before it counts against the artwork floor (scripts/live-artists.mjs).
     *  "2026-01-01" means it was already here when the date began to be
     *  recorded (18 Oct 2026). Absent on a file whose covers are not resolved
     *  at build time. Bookkeeping only: the live-charts API leaves it out
     *  (withApiCountryCodes, app/lib/liveChartMeta.ts). */
    firstSeen?: string;
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-11-12";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-12T07:16Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Raindance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 6,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 10,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 10,
            "movement": 10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 10,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 11,
            "movement": 11
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 14,
            "movement": -3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 15,
            "movement": 16
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 17,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 19,
            "movement": 15
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 19,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 20,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 22,
            "movement": 5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 23,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 27,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 29,
            "movement": 6
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 32,
            "movement": -1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 34,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 34,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": -4
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 36,
            "movement": 7
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 41,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 42
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 43,
            "movement": -10
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 43,
            "movement": 138
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": 8
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 45,
            "movement": -9
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 46,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 47,
            "movement": -22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 48,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 50,
            "movement": -10
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 51,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 51,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 51,
            "movement": -1
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 51,
            "movement": 34
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 56,
            "movement": 3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 57,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 58,
            "movement": 1
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 58,
            "movement": -19
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 59,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 60,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 60,
            "movement": -19
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 62,
            "movement": -24
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 68,
            "movement": 7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 70,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 71,
            "movement": 50
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 73,
            "movement": -2
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 74,
            "movement": -21
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 77,
            "movement": 31
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 80,
            "movement": -44
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 81,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 82,
            "movement": -12
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 83,
            "movement": 1
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 85,
            "movement": 80
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 85,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": -9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 91,
            "movement": 95
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": -29
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 92,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 98,
            "movement": -6
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 110,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 111,
            "movement": 16
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 114,
            "movement": 4
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 120,
            "movement": 13
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 122,
            "movement": 21
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 124,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -4
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 136,
            "movement": 23
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 148,
            "movement": 10
          },
          {
            "country": "CZ",
            "name": "Czech Republic",
            "position": 150,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 159,
            "movement": 29
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 163,
            "movement": -10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 163,
            "movement": 10
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 165,
            "movement": -127
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 180,
            "movement": -25
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 182,
            "movement": 0
          },
          {
            "country": "PL",
            "name": "Poland",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 185,
            "movement": -55
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 194,
            "movement": -2
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 196,
            "movement": -29
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 25,
            "movement": 0
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 26,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 28,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 32,
            "movement": 0
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 33,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 44,
            "movement": -2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 50,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 51,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 57,
            "movement": -1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 64,
            "movement": 1
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 66,
            "movement": 6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 67,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 76,
            "movement": 5
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 89,
            "movement": -4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 90,
            "movement": -4
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 98,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 108,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 119,
            "movement": -5
          },
          {
            "country": "FR",
            "name": "France",
            "position": 136,
            "movement": -18
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 141,
            "movement": 6
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 142,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 152,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 154,
            "movement": -15
          },
          {
            "country": "CN",
            "name": "China",
            "position": 165,
            "movement": 7
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 165,
            "movement": -11
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 166,
            "movement": -25
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 167,
            "movement": -9
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 171,
            "movement": -27
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 183,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
            "movement": -19
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 18,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": -1
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 30,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 40,
            "movement": -1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 54,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 69,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 73,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 73,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 77,
            "movement": 7
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 78,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 79,
            "movement": 6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 87,
            "movement": -5
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 87,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 93,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 103,
            "movement": -2
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 112,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 6
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 115,
            "movement": 3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 118,
            "movement": 3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 122,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 125,
            "movement": -16
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 136,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 139,
            "movement": -7
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 154,
            "movement": 11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 166,
            "movement": 8
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 167,
            "movement": 15
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 12,
            "movement": 3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 30,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -4
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 37,
            "movement": 4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 39,
            "movement": -1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": -3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": 0
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 45,
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 47,
            "movement": -2
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
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 22,
            "movement": -1
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 23,
            "movement": -13
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 40,
            "movement": 99
          },
          {
            "country": "IN",
            "name": "India",
            "position": 51,
            "movement": 16
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 96,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -25
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 170,
            "movement": 9
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
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/02552930a9bbf685ec4f683ff0ca2029/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WAIT FOR U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 25,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 4
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 54,
            "movement": -14
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 7
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 75,
            "movement": 27
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 80,
            "movement": -34
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 90,
            "movement": -7
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 94,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 100,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 102,
            "movement": -1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 103,
            "movement": -65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 17
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 111,
            "movement": 20
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 127,
            "movement": 46
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 136,
            "movement": 22
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 147,
            "movement": 28
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 151,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": 25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 179,
            "movement": -39
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 196,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": 5
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 14,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 53,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 29
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 94,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": -14
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 119,
            "movement": 23
          },
          {
            "country": "US",
            "name": "United States",
            "position": 129,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 132,
            "movement": -16
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 136,
            "movement": -36
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 137,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 147,
            "movement": -69
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 177,
            "movement": -64
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
            "movement": -77
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BZ",
            "name": "Belize",
            "position": 6,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 61,
            "movement": -1
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 8,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 67,
            "movement": -58
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 107,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": -12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": -25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 193,
            "movement": -56
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 198,
            "movement": -41
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 194,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": -20
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 164,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 70,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
            "movement": -44
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 150,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 75,
            "movement": 21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 102,
            "movement": 7
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 170,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 61,
            "movement": 48
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 77,
            "movement": -55
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": -135
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fountains",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 157,
            "movement": -40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 73,
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
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d416dc66a55cc8914425c365c1e7b74/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Higher",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 22,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-11",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Unfortunate",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If Orange Was A Place - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 82,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b3aea8ba7c55e2eafd6672ff29668bdb/500x500-000000-80-0-0.jpg"
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
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
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
  