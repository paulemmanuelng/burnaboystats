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
  export const liveChartsUpdated = "2026-11-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-21T19:21Z";
  
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 15,
            "movement": 57
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
            "movement": 1
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 22,
            "movement": -3
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 24,
            "movement": 0
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 26,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 29,
            "movement": 9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 30,
            "movement": -1
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 31,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 32,
            "movement": -8
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 37,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 38,
            "movement": 5
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 39,
            "movement": 10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 41,
            "movement": -11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 43,
            "movement": 10
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 44,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": -15
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 45,
            "movement": -5
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 46,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 51,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 52,
            "movement": -14
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 57,
            "movement": 6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 59,
            "movement": -26
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 59,
            "movement": -18
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 60,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -21
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 67,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 71,
            "movement": -20
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 72,
            "movement": 6
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 73,
            "movement": 0
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 76,
            "movement": -16
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 77,
            "movement": 12
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 78,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": -37
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -25
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 83,
            "movement": -5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 86,
            "movement": -15
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
            "country": "SC",
            "name": "Seychelles",
            "position": 101,
            "movement": -13
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 102,
            "movement": 69
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 103,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": -34
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 107,
            "movement": -31
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 108,
            "movement": -58
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 109,
            "movement": -92
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 117,
            "movement": -16
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
            "country": "EE",
            "name": "Estonia",
            "position": 134,
            "movement": -26
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 135,
            "movement": -81
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 140,
            "movement": -41
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 142,
            "movement": -32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": -65
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 146,
            "movement": -24
          },
          {
            "country": "KH",
            "name": "Cambodia",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 153,
            "movement": 3
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 167,
            "movement": -49
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 176,
            "movement": -13
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 176,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -19
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 189,
            "movement": null,
            "status": "new"
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 23,
            "movement": 1
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 29,
            "movement": -2
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 33,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 36,
            "movement": -5
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 45,
            "movement": 3
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 60,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 63,
            "movement": 11
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 76,
            "movement": 0
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 80,
            "movement": -14
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 81,
            "movement": 1
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 87,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 89,
            "movement": -3
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 96,
            "movement": 5
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 112,
            "movement": -3
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 120,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -10
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 131,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 133,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 137,
            "movement": -2
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 145,
            "movement": 0
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 149,
            "movement": -17
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 150,
            "movement": -4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 154,
            "movement": -14
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 161,
            "movement": 4
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 186,
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
            "country": "TR",
            "name": "Turkey",
            "position": 13,
            "movement": 16
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 19,
            "movement": -16
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 25,
            "movement": -19
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 38,
            "movement": -32
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 42,
            "movement": -26
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 62,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -11
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 68,
            "movement": -51
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 87,
            "movement": -21
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 98,
            "movement": -14
          },
          {
            "country": "FR",
            "name": "France",
            "position": 133,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 29,
            "movement": -14
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
            "position": 11,
            "movement": 6
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
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": -5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 65,
            "movement": 53
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 66,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": -15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 97,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -52
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": 3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 114,
            "movement": -34
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 154,
            "movement": 39
          },
          {
            "country": "MT",
            "name": "Malta",
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
            "country": "KY",
            "name": "Cayman Islands",
            "position": 170,
            "movement": -48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 191,
            "movement": -52
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 194,
            "movement": -134
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 196,
            "movement": -79
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": 7
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 70,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 7
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 114,
            "movement": 58
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
            "position": 124,
            "movement": 6
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 148,
            "movement": -22
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
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
            "country": "BB",
            "name": "Barbados",
            "position": 13,
            "movement": -6
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
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 50
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
            "position": 80,
            "movement": -21
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": 27
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 77
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -11
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
      },
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 154,
            "movement": -14
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
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": null,
            "status": "new"
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
            "movement": -21
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
            "position": 29,
            "movement": null,
            "status": "new"
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
            "movement": -22
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "country": "BM",
            "name": "Bermuda",
            "position": 173,
            "movement": 25
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 19,
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
            "position": 181,
            "movement": 11
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
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
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
            "movement": -1
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
    "title": "African Love Story",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ce05cbc4b96c6856fa0954980a9ea9e5/500x500-000000-80-0-0.jpg"
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
            "position": 172,
            "movement": -71
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
  