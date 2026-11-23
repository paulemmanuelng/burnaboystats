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
  export const liveChartsUpdated = "2026-11-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-23T07:44Z";
  
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "BN",
            "name": "Brunei Darussalam",
            "position": 11,
            "movement": 32
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 13,
            "movement": -1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 17,
            "movement": -3
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 19,
            "movement": -3
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 21,
            "movement": 87
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 21,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 22,
            "movement": 6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 26,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": -5
          },
          {
            "country": "KG",
            "name": "Kyrgyzstan",
            "position": 27,
            "movement": 8
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 28,
            "movement": 17
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 28,
            "movement": -6
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 32,
            "movement": 13
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 37,
            "movement": -8
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 38,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 0
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 41,
            "movement": -7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 47,
            "movement": 37
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 47,
            "movement": 13
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 51,
            "movement": 8
          },
          {
            "country": "TM",
            "name": "Turkmenistan",
            "position": 53,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 57,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": 9
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 62,
            "movement": 33
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 62,
            "movement": -18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 62,
            "movement": 9
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 62,
            "movement": -11
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 63,
            "movement": -14
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 66,
            "movement": -24
          },
          {
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 68,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 71,
            "movement": 4
          },
          {
            "country": "MN",
            "name": "Mongolia",
            "position": 71,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": 83
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": -5
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 79,
            "movement": 99
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AM",
            "name": "Armenia",
            "position": 83,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 83,
            "movement": -46
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 85,
            "movement": -52
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": -4
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 91,
            "movement": -71
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 91,
            "movement": -16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 91,
            "movement": -5
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 96,
            "movement": -22
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 102,
            "movement": -13
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 107,
            "movement": -8
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 113,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 114,
            "movement": -45
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 115,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 115,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": -19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 126,
            "movement": -8
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 128,
            "movement": 16
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 134,
            "movement": -81
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 134,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 139,
            "movement": -38
          },
          {
            "country": "MD",
            "name": "Moldova",
            "position": 170,
            "movement": -25
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 174,
            "movement": -30
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 174,
            "movement": 18
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 175,
            "movement": -41
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 180,
            "movement": -111
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 187,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 188,
            "movement": 9
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 192,
            "movement": 0
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 196,
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 29,
            "movement": -4
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 36,
            "movement": -12
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 42,
            "movement": -15
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 56,
            "movement": -5
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 66,
            "movement": -17
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 71,
            "movement": -13
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 77,
            "movement": -10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 80,
            "movement": -14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 81,
            "movement": -8
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 94,
            "movement": -21
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 95,
            "movement": -14
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 105,
            "movement": -37
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 112,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 5
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 122,
            "movement": -14
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 135,
            "movement": -38
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 144,
            "movement": -13
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 149,
            "movement": -21
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 157,
            "movement": -33
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 178,
            "movement": -11
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 180,
            "movement": -44
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 181,
            "movement": -11
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 184,
            "movement": -29
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 198,
            "movement": -68
          },
          {
            "country": "SK",
            "name": "Slovakia",
            "position": 200,
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
            "position": 31,
            "movement": 0
          },
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 31,
            "movement": 1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 33,
            "movement": 2
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 36,
            "movement": 3
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 46,
            "movement": 3
          },
          {
            "country": "BR",
            "name": "Brazil",
            "position": 52,
            "movement": -3
          },
          {
            "country": "GR",
            "name": "Greece",
            "position": 52,
            "movement": 2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 56,
            "movement": -6
          },
          {
            "country": "TH",
            "name": "Thailand",
            "position": 64,
            "movement": -6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 67,
            "movement": -3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 88,
            "movement": -5
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 101,
            "movement": -7
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 108,
            "movement": -12
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 111,
            "movement": 3
          },
          {
            "country": "PH",
            "name": "Philippines",
            "position": 112,
            "movement": 4
          },
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 113,
            "movement": -8
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 126,
            "movement": 15
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 138,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 146,
            "movement": -11
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 156,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 167,
            "movement": -12
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 170,
            "movement": -24
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 180,
            "movement": -2
          },
          {
            "country": "CN",
            "name": "China",
            "position": 181,
            "movement": -11
          },
          {
            "country": "PE",
            "name": "Peru",
            "position": 196,
            "movement": 2
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
            "position": 6,
            "movement": 9
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 7,
            "movement": -5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 9,
            "movement": 37
          },
          {
            "country": "UA",
            "name": "Ukraine",
            "position": 33,
            "movement": -30
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "HU",
            "name": "Hungary",
            "position": 40,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -20
          },
          {
            "country": "SI",
            "name": "Slovenia",
            "position": 96,
            "movement": -31
          },
          {
            "country": "IN",
            "name": "India",
            "position": 108,
            "movement": -29
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
            "movement": 0
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 77,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 93,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 41,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 55
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 58,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": 8
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 72,
            "movement": -43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 3
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 76,
            "movement": -10
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 79,
            "movement": 9
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 103,
            "movement": 61
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 106,
            "movement": 17
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 110,
            "movement": -34
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 114,
            "movement": 0
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -18
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 138,
            "movement": 14
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 153,
            "movement": -28
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 154,
            "movement": -32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -26
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 156,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": 3
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 176,
            "movement": -5
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 190,
            "movement": -23
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 196,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d1bd3da6698dd5eafc5b4514317039c4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Born in the Wild",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 105,
            "movement": -63
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": 44
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
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
            "position": 103,
            "movement": -20
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
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 48,
            "movement": 26
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 71,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 121,
            "movement": -27
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 133,
            "movement": -110
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -17
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 199,
            "movement": -27
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
            "position": 99,
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
    "title": "What You Need",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 16,
            "movement": 26
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 2
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 81,
            "movement": -11
          },
          {
            "country": "US",
            "name": "United States",
            "position": 118,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": -85
          },
          {
            "country": "LC",
            "name": "St. Lucia",
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
            "country": "BB",
            "name": "Barbados",
            "position": 42,
            "movement": -12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 119,
            "movement": 63
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
            "position": 18,
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
    "title": "Me & U",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 190,
            "movement": -31
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
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -169
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
            "position": 66,
            "movement": 5
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 152,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/21ffdcad2bde4b25ba9a5a3a53193b05/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Is A Kingdom",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 192,
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
            "position": 48,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/584f40f4d2b62b611a7ab8561b656ff3/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 56
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 18
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ce05cbc4b96c6856fa0954980a9ea9e5/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 4
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
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": -3
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 194,
            "movement": -21
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
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
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 33,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/53e9db9663c87b34723c17bcf9c2a8e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Love Me JeJe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
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
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": 23
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
            "position": 130,
            "movement": 19
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
  