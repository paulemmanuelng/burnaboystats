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
  export const liveChartsUpdated = "2026-10-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-24T20:54Z";
  
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 9,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 12,
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 12,
            "movement": 1
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 15,
            "movement": 13
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 23,
            "movement": 1
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 24,
            "movement": 1
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 24,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 24,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 27,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 29,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 30,
            "movement": -9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 32,
            "movement": -7
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 34,
            "movement": 0
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 34,
            "movement": -1
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 38,
            "movement": 2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 45,
            "movement": -42
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 47,
            "movement": -26
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 48,
            "movement": -2
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 48,
            "movement": -3
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 51,
            "movement": 7
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 51,
            "movement": -21
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 52,
            "movement": -16
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 52,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 52,
            "movement": -4
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 52,
            "movement": 81
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 53,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -3
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 58,
            "movement": 32
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 58,
            "movement": -28
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 58,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 59,
            "movement": 24
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 62,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -19
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 75,
            "movement": -3
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 75,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 77,
            "movement": -32
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 81,
            "movement": 13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 83,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": -82
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -11
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 90,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 91,
            "movement": 9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 95,
            "movement": -25
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 97,
            "movement": 29
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 98,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -43
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 103,
            "movement": -21
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 108,
            "movement": -28
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 108,
            "movement": -35
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 108,
            "movement": -40
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 110,
            "movement": -19
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 113,
            "movement": -50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 117,
            "movement": -29
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 121,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 122,
            "movement": -72
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 123,
            "movement": -77
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 134,
            "movement": -35
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 136,
            "movement": -1
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 137,
            "movement": -5
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 141,
            "movement": -29
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 146,
            "movement": -20
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 149,
            "movement": -35
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 160,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 160,
            "movement": -102
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 6
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 171,
            "movement": -101
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 173,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 189,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 190,
            "movement": -39
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 17,
            "movement": -1
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 21,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 29,
            "movement": 1
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 34,
            "movement": 2
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 35,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 35,
            "movement": 1
          },
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 36,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 46,
            "movement": 0
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 49,
            "movement": 23
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 49,
            "movement": -3
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 50,
            "movement": -2
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 52,
            "movement": -5
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 53,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 64,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 68,
            "movement": -9
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 75,
            "movement": 17
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 85,
            "movement": 27
          },
          {
            "country": "MX",
            "name": "Mexico",
            "position": 86,
            "movement": -17
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 87,
            "movement": 0
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 95,
            "movement": -1
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 96,
            "movement": -1
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 98,
            "movement": -19
          },
          {
            "country": "CL",
            "name": "Chile",
            "position": 103,
            "movement": -11
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 105,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 107,
            "movement": -4
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 112,
            "movement": -3
          },
          {
            "country": "FR",
            "name": "France",
            "position": 114,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 120,
            "movement": -6
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 127,
            "movement": 2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 127,
            "movement": -10
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 134,
            "movement": -12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 134,
            "movement": -7
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 139,
            "movement": -8
          },
          {
            "country": "CR",
            "name": "Costa Rica",
            "position": 149,
            "movement": -6
          },
          {
            "country": "CO",
            "name": "Colombia",
            "position": 150,
            "movement": -30
          },
          {
            "country": "VN",
            "name": "Vietnam",
            "position": 153,
            "movement": 7
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 157,
            "movement": -6
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 158,
            "movement": -15
          },
          {
            "country": "AR",
            "name": "Argentina",
            "position": 162,
            "movement": -20
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 168,
            "movement": 8
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 169,
            "movement": 0
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 174,
            "movement": -2
          },
          {
            "country": "VE",
            "name": "Venezuela",
            "position": 176,
            "movement": -24
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 191,
            "movement": -7
          },
          {
            "country": "FI",
            "name": "Finland",
            "position": 199,
            "movement": -8
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 26,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 40,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 47,
            "movement": -11
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 52,
            "movement": -18
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 53,
            "movement": -6
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 56,
            "movement": 0
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 61,
            "movement": 4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 67,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 74,
            "movement": -14
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 77,
            "movement": -3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 83,
            "movement": -14
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 97,
            "movement": 6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 98,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 118,
            "movement": -23
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 124,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 130,
            "movement": -15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 130,
            "movement": -34
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 133,
            "movement": 7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 134,
            "movement": -13
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 139,
            "movement": -27
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 142,
            "movement": -26
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 144,
            "movement": -30
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 154,
            "movement": -16
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 175,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 184,
            "movement": 7
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 13,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 27,
            "movement": -2
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 27,
            "movement": -11
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 27,
            "movement": -4
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 30,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 34,
            "movement": 0
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 36,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 42,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": -7
          },
          {
            "country": "NO",
            "name": "Norway",
            "position": 47,
            "movement": 2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IN",
            "name": "India",
            "position": 9,
            "movement": 11
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 9,
            "movement": -3
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 27,
            "movement": 25
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 39,
            "movement": -5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 41,
            "movement": -21
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 71,
            "movement": -9
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 89,
            "movement": -38
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 93,
            "movement": -13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 136,
            "movement": -119
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 35,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -30
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 73,
            "movement": 0
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
            "position": 13,
            "movement": 2
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 26,
            "movement": -9
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 39,
            "movement": 40
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 40,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 45,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 51,
            "movement": 64
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 72,
            "movement": -65
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 73,
            "movement": -24
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 82,
            "movement": 4
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 94,
            "movement": -39
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 101,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -23
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 119,
            "movement": -26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 137,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": -34
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 140,
            "movement": 19
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 164,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 200,
            "movement": -131
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
            "position": 58,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 117,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 144,
            "movement": -126
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 166,
            "movement": 26
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 196,
            "movement": -23
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "DO",
            "name": "Dominican Republic",
            "position": 21,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 44,
            "movement": -21
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
            "position": 37,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": 43
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 173,
            "movement": -5
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
            "position": 200,
            "movement": -55
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
            "position": 61,
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
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 197,
            "movement": null,
            "status": "new"
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
            "position": 83,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 161,
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
    "title": "For Broken Ears",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 5
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 140,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 160,
            "movement": -54
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": 29
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 195,
            "movement": null,
            "status": "new"
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
            "position": 145,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 65,
            "movement": 5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 66,
            "movement": 28
          },
          {
            "country": "US",
            "name": "United States",
            "position": 121,
            "movement": 34
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 191,
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
            "position": 48,
            "movement": 3
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
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
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 4
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
            "movement": -4
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
            "position": 86,
            "movement": 96
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Free Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 183,
            "movement": -90
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 7
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
            "position": 49,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 138,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Burning",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 31,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wickedest",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aeeee8ad4c59f8b6440d19006f0f06e7/500x500-000000-80-0-0.jpg"
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
            "position": 113,
            "movement": 76
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": 1
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
            "position": 83,
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
  