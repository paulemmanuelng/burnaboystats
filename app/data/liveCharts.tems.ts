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
  export const liveChartsUpdated = "2026-11-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-08T22:11Z";
  
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
            "country": "OM",
            "name": "Oman",
            "position": 3,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 8,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 8,
            "movement": 2
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 12,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 18,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": 36
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 21,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 21,
            "movement": 10
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 21,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 25,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 26,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -1
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 27,
            "movement": 49
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 27,
            "movement": 5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 27,
            "movement": 7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 28,
            "movement": 14
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 30,
            "movement": 65
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 32,
            "movement": 5
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 33,
            "movement": -8
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 34,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 8
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 34,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 36,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 42,
            "movement": -13
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 42,
            "movement": 48
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": -12
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 43,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": 0
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 49,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 49,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 49,
            "movement": 5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 50,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 50,
            "movement": -24
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 53,
            "movement": -19
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 55,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 60,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 1
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 61,
            "movement": -8
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 61,
            "movement": 1
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 62,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 62,
            "movement": -14
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 62,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": -1
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 67,
            "movement": 24
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 68,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 69,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 71,
            "movement": 43
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 72,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 79,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 81,
            "movement": 24
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 85,
            "movement": -46
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 94,
            "movement": 2
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 95,
            "movement": -21
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 95,
            "movement": -37
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 98,
            "movement": 14
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 101,
            "movement": -25
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 103,
            "movement": -35
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 103,
            "movement": 5
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 105,
            "movement": 52
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": 32
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 107,
            "movement": 61
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 118,
            "movement": -75
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 119,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -5
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 126,
            "movement": -16
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 127,
            "movement": -6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 128,
            "movement": -7
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 128,
            "movement": -31
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 134,
            "movement": 15
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 139,
            "movement": 7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 149,
            "movement": 10
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 156,
            "movement": -3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 172,
            "movement": -2
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 172,
            "movement": 15
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 183,
            "movement": -24
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 185,
            "movement": -66
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 190,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 195,
            "movement": -38
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
            "position": 19,
            "movement": 2
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 22,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 28,
            "movement": 1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 32,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 33,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 41,
            "movement": -1
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 45,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 51,
            "movement": -7
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 58,
            "movement": -12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 65,
            "movement": -5
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 70,
            "movement": -2
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 85,
            "movement": 4
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 86,
            "movement": 5
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 88,
            "movement": -6
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 93,
            "movement": -12
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 95,
            "movement": -2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 102,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 108,
            "movement": -8
          },
          {
            "country": "FR",
            "name": "France",
            "position": 109,
            "movement": -2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 130,
            "movement": -5
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 132,
            "movement": -9
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 134,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 139,
            "movement": 5
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 140,
            "movement": 0
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 147,
            "movement": -2
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 155,
            "movement": -6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 173,
            "movement": 1
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 176,
            "movement": 12
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 181,
            "movement": -5
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
            "position": 24,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 24,
            "movement": -5
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 31,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 53,
            "movement": -10
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 56,
            "movement": -2
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 56,
            "movement": -7
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 74,
            "movement": 2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 79,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 79,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 83,
            "movement": -2
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 83,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 96,
            "movement": -5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 101,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 109,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 113,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 121,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 140,
            "movement": -19
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 141,
            "movement": -17
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 142,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 149,
            "movement": -12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 172,
            "movement": -15
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 175,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 177,
            "movement": 4
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 179,
            "movement": -12
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 180,
            "movement": -22
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
            "position": 15,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 26,
            "movement": 4
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 29,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 7
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 38,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 38,
            "movement": 1
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 41,
            "movement": -8
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -3
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 44,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 45,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": 4
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
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 19,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -13
          },
          {
            "country": "IN",
            "name": "India",
            "position": 59,
            "movement": -36
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -92
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 168,
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
            "position": 20,
            "movement": 4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 32,
            "movement": 34
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 40,
            "movement": -8
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 41,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 11
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 51,
            "movement": -7
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 56,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 68,
            "movement": 6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 71,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": -16
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 83,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 86,
            "movement": 9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 102,
            "movement": 13
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 110,
            "movement": -74
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 114,
            "movement": -64
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 151,
            "movement": -17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 156,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 162,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 170,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -1
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 187,
            "movement": -31
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
            "country": "BM",
            "name": "Bermuda",
            "position": 22,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 61,
            "movement": 19
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 61,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -34
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 77,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 22
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 114,
            "movement": 35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 131,
            "movement": -12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 142,
            "movement": 41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": -37
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 154,
            "movement": -72
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 158,
            "movement": -108
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 179,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": -103
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
            "position": 3,
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
            "country": "US",
            "name": "United States",
            "position": 50,
            "movement": 0
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
            "position": 30,
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
            "country": "US",
            "name": "United States",
            "position": 12,
            "movement": -3
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
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": -45
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": -2
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 190,
            "movement": -102
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 190,
            "movement": -52
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": 52
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 125,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 147,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -9
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 198,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 193,
            "movement": -4
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
            "position": 91,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 60,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": 23
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 178,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": -12
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 98,
            "movement": 36
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 198,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -113
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4bfd7acfa6aaa14c1497f19aeb5a0536/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 119,
            "movement": 42
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ordinary People",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 74,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1adb08918cf6abd499a3c41e2093b5d2/500x500-000000-80-0-0.jpg"
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
            "position": 131,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What You Need - A COLORS SHOW",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "US",
            "name": "United States",
            "position": 185,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8e6a8bc36abf9401abf57794db386b13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
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
            "movement": 0
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
  