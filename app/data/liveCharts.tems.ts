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
  export const liveChartsUpdated = "2026-11-22";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-22T06:55Z";
  
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
            "position": 7,
            "movement": 3
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 16,
            "movement": 12
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 18,
            "movement": 102
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 20,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 0
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 28,
            "movement": 15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 28,
            "movement": -4
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 29,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 31,
            "movement": -13
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 33,
            "movement": 69
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 34,
            "movement": -8
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 35,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 42,
            "movement": -3
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 43,
            "movement": 13
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 44,
            "movement": -17
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 45,
            "movement": -5
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 45,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 3
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 49,
            "movement": -19
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 51,
            "movement": -19
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 53,
            "movement": -38
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 57,
            "movement": 6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 57,
            "movement": -11
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 59,
            "movement": -26
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 60,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 62,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 69,
            "movement": -28
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 69,
            "movement": 3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 69,
            "movement": 66
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 71,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": -27
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 74,
            "movement": 102
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 75,
            "movement": 114
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": 5
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 77,
            "movement": 12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 84,
            "movement": -6
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 86,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": -3
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 89,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 15
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 95,
            "movement": 4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 99,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": 5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 101,
            "movement": -28
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 101,
            "movement": -13
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 103,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 105,
            "movement": -29
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 108,
            "movement": -58
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 109,
            "movement": -29
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 109,
            "movement": -92
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 118,
            "movement": -47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 134,
            "movement": -26
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 142,
            "movement": 11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": -65
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 144,
            "movement": -31
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 145,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": -76
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 167,
            "movement": -49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 178,
            "movement": -126
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 179,
            "movement": -36
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 192,
            "movement": -27
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 192,
            "movement": -39
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 197,
            "movement": -21
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
            "movement": 5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 25,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 27,
            "movement": 6
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 49,
            "movement": 14
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 51,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 58,
            "movement": -22
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 67,
            "movement": 14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 68,
            "movement": -8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 73,
            "movement": 16
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 73,
            "movement": 14
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 80,
            "movement": -14
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 81,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 97,
            "movement": 40
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 108,
            "movement": 12
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 118,
            "movement": 13
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 124,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -2
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 128,
            "movement": -11
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 130,
            "movement": 15
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 131,
            "movement": 2
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 136,
            "movement": -24
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 155,
            "movement": -1
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 167,
            "movement": -17
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 170,
            "movement": -9
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 177,
            "movement": -28
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 189,
            "movement": -3
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
            "position": 31,
            "movement": -3
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 32,
            "movement": -3
          },
          {
            "country": "US",
            "name": "United States",
            "position": 35,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 39,
            "movement": 2
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 49,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 49,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 50,
            "movement": -1
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 54,
            "movement": 0
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 58,
            "movement": -8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 64,
            "movement": -2
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 83,
            "movement": -6
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 94,
            "movement": -4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 96,
            "movement": -14
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 105,
            "movement": -16
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 114,
            "movement": -10
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 116,
            "movement": -7
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 135,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 140,
            "movement": -25
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 141,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 146,
            "movement": 0
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 155,
            "movement": -2
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 161,
            "movement": -8
          },
          {
            "country": "CN",
            "name": "China",
            "position": 170,
            "movement": -15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 178,
            "movement": -11
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 198,
            "movement": 1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 2,
            "movement": 48
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 15,
            "movement": 9
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 34,
            "movement": -28
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 40,
            "movement": -19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 55,
            "movement": -38
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 64,
            "movement": -32
          },
          {
            "country": "IN",
            "name": "India",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -11
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 83,
            "movement": -30
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 92,
            "movement": -11
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 93,
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
            "country": "AO",
            "name": "Angola",
            "position": 20,
            "movement": -3
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
            "position": 17,
            "movement": 1
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 29,
            "movement": 84
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 30,
            "movement": 4
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 49,
            "movement": -3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 66,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": -14
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -15
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 88,
            "movement": 82
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -1
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 114,
            "movement": -34
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 122,
            "movement": -25
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 123,
            "movement": -58
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 125,
            "movement": 66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": -16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 151,
            "movement": -19
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 152,
            "movement": -23
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 167,
            "movement": -34
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 171,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 191,
            "movement": -37
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
            "country": "TD",
            "name": "Chad",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 42,
            "movement": -36
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 56,
            "movement": 19
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": -30
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 70,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": 2
          },
          {
            "country": "US",
            "name": "United States",
            "position": 118,
            "movement": 15
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "BB",
            "name": "Barbados",
            "position": 30,
            "movement": -19
          },
          {
            "country": "US",
            "name": "United States",
            "position": 182,
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
            "position": 17,
            "movement": 0
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
            "position": 7,
            "movement": 1
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
            "country": "NP",
            "name": "Nepal",
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 38,
            "movement": 71
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 74,
            "movement": -26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 172,
            "movement": 6
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 190,
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
            "position": 122,
            "movement": 10
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
            "position": 78,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "SC",
            "name": "Seychelles",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": -7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -47
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 189,
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
            "position": 78,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 168,
            "movement": -5
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
            "position": 83,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/66c0e3ff739ce671cee90fea6eb1047c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 65,
            "movement": -36
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 190,
            "movement": 1
          },
          {
            "country": "BB",
            "name": "Barbados",
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
            "position": 32,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 159,
            "movement": -19
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 179,
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
            "position": 20,
            "movement": 142
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -12
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
            "position": 71,
            "movement": -7
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 144,
            "movement": -5
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 188,
            "movement": -77
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
            "position": 84,
            "movement": null,
            "status": "re"
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
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 66,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 173,
            "movement": 25
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
            "position": 25,
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
    "title": "African Love Story",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ce05cbc4b96c6856fa0954980a9ea9e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Black Panther: Wakanda Forever - Music From and Inspired By",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 118,
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
            "position": 58,
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
    "title": "Damages",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 3,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d1528266cd1263f06d630c1c73376d5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Key",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 117,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 149,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea8f80f2edb20885ac8aed8751716794/500x500-000000-80-0-0.jpg"
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
  