// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=fireboy-dml from kworb's artist page.
  //
  // PLATFORM chart data for Fireboy DML: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-10-18";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-18T07:15Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "ZUKO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 1,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 15,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": 56
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 21,
            "movement": 74
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 22,
            "movement": -9
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 22,
            "movement": 11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 30,
            "movement": -4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 31,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 32,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 34,
            "movement": -2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 44,
            "movement": -1
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 45,
            "movement": 5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 52,
            "movement": 82
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 53,
            "movement": 71
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 55,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
            "movement": -28
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 59,
            "movement": 14
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 59,
            "movement": 48
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 71,
            "movement": -7
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 77,
            "movement": -35
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 79,
            "movement": -9
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 97,
            "movement": -71
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 102,
            "movement": -30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 107,
            "movement": 33
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 144,
            "movement": 6
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 165,
            "movement": -122
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 180,
            "movement": -12
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da2c728690442570efd5b29209fca908/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 62,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 89,
            "movement": 8
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 96,
            "movement": 54
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 10
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 144,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 191,
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
            "position": 159,
            "movement": -26
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
            "position": 21,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ONE MAN REGIMENT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 49
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": 116
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 31
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 48,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18"
  },
  {
    "title": "Playboy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 74
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 94,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -3
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 147,
            "movement": -85
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
            "position": 56,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Laughter, Tears & Goosebumps",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 66
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 32
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": 47
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
            "position": 33,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IMALI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 78,
            "movement": 38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 88,
            "movement": 31
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
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9405ef9f7a00125ec0e7f408a7640d14/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playboy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/20b709c21edd2d8924cf88132a94ff1e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BY FIRE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
            "movement": -21
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
            "position": 34,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/169a811bba3c33c478651f1e2b250db6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "GODDESS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 178,
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
            "position": 18,
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
            "position": 48,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01"
  },
  {
    "title": "CLAAT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": -55
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": -45
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": -7
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
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/29bf5b5ad5f962997dbb7c369a8320d9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "APOLLO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 23,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 81
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 111,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 124,
            "movement": -31
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
            "position": 103,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DEAR FATHER",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": -17
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
            "position": 37,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18"
  },
  {
    "title": "adedamola",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
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
            "position": 65,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "C'EST LA VIE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
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
            "position": 42,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18"
  },
  {
    "title": "KILOWI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
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
            "position": 67,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18"
  },
  {
    "title": "SEX LOVE UNDERSTANDING TRUST",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
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
            "position": 65,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18"
  },
  {
    "title": "MIMI NAWE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -23
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
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18"
  },
  {
    "title": "FIGHTING",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 9
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18"
  },
  {
    "title": "ONAZO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 82,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18"
  },
  {
    "title": "So it Goes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": -10
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
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3fe94d046b5097983f35fcc47037c799/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "LIGHT OF DAWN",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18"
  },
  {
    "title": "Dopamine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": 32
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
            "position": 30,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2454c47103560319b1992920e1a866e9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Airplane Mode",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 51,
            "movement": 44
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd9b968d69b674b887fc7e166af5ae23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "iseoluwa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a687087e03dff683b56b53044b52c551/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "History",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a0db260ae940d4870a73c5a735408d67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "yawa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 157,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e01d168e57db1df9f9ce27151aff6d23/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Need You",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b8ce8a62a6484f053bdd2cf80818a2d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sere",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8aad871a69151cfd7c45139cb7215831/500x500-000000-80-0-0.jpg"
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
  