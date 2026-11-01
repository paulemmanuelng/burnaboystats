// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=omah-lay from kworb's artist page.
  //
  // PLATFORM chart data for Omah Lay: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-01T06:12Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "CLARITY OF MIND",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 2
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 7,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 8,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 8,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 10,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 14,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 16,
            "movement": 6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 17,
            "movement": 26
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 19,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 26,
            "movement": 31
          },
          {
            "country": "FR",
            "name": "France",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 35,
            "movement": 25
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 41,
            "movement": 5
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 42,
            "movement": 6
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 43,
            "movement": 23
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 44,
            "movement": 30
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 53,
            "movement": 20
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 59,
            "movement": 25
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 63,
            "movement": -21
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 64,
            "movement": -5
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 73,
            "movement": 8
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 74,
            "movement": 99
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 84,
            "movement": -8
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 92,
            "movement": 4
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 95,
            "movement": -14
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 120,
            "movement": 26
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 128,
            "movement": -19
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 162,
            "movement": -18
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 195,
            "movement": -145
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
            "position": 10,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 36
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 108,
            "movement": 22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 110,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 129,
            "movement": -28
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 135,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 138,
            "movement": 52
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 181,
            "movement": -112
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -19
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
            "position": 18,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BACK TO LAGOS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 19,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 37,
            "movement": 106
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 48
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 53
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 84
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": 96
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 48
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": 57
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 121,
            "movement": 58
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 128,
            "movement": 66
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 184,
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
            "position": 23,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Influence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": 100
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -37
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 157,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 196,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 197,
            "movement": -61
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
            "position": 158,
            "movement": -29
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 166,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "TAKE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 23,
            "movement": 62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 42,
            "movement": 52
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 61,
            "movement": 139
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 73,
            "movement": 0
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 82,
            "movement": 99
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 180,
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
            "position": 72,
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 94,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5850c8b89e4f4726c16ef035da9edaf4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I AM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": -8
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 58,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": -8
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 146,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": -60
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 198,
            "movement": -80
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
            "position": 71,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 23
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": 1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": -30
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
            "position": 123,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 168,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "i'm a mess",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 16
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
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
            "position": 177,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Get Layd - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 73
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -59
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 190,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ghost",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 43
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
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
            "movement": 4
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -58
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
            "position": 29,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b4fd7e67b985be9489dbf58dc74497b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "soso",
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
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": -49
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 151,
            "movement": -23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Infinity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 115
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 65,
            "movement": 35
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 112,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MY HEALER",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": -51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
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
            "position": 183,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forever",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 162,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 171,
            "movement": 21
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
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DON'T LOVE ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 21,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KEEP GOING",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
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
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 46
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CANADA BREEZE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": -31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": 10
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
            "position": 61,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Namek",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 88,
            "movement": -7
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 181,
            "movement": 8
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
            "position": 98,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WATER SPIRIT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
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
            "position": 31,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HOLY GHOST FIRE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": 23
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
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/585803a576ab859fac7aaf8a9e8741fd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WAIST",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 17
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
            "position": 186,
            "movement": -115
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 198,
            "movement": -26
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
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
    "title": "What Have We Done - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": -62
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed64774f56cf5d0f3fcb8e25c9fe39f6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1724f66c550648b497bd7ccec64b9179/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ARTIFICIAL HAPPINESS",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "10 Toes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "reason",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 129,
            "movement": 46
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "understand",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebaba8c1ec645c396628a92f7aca871b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "COPING MECHANISM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 126,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1a9dbee3a264aea0fb54aef116dfd507/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
            "movement": -83
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-28",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
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
  