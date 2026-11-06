// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=asake from kworb's artist page.
  //
  // PLATFORM chart data for Asake: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-11-06";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-06T19:29Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 13,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 17,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": -2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 18,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 23,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 27,
            "movement": -15
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 42,
            "movement": -25
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 46,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 53,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 70,
            "movement": 6
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 77,
            "movement": 94
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 81,
            "movement": 8
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 91,
            "movement": -18
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 93,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 113,
            "movement": 64
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 119,
            "movement": -6
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 119,
            "movement": -7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 138,
            "movement": -86
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
            "movement": -87
          },
          {
            "country": "LU",
            "name": "Luxembourg",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 195,
            "movement": -28
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 198,
            "movement": -55
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
            "position": 3,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 32,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 45,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": -51
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 158,
            "movement": -52
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 100,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 116,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 119,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 175,
            "movement": -3
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
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -53
          },
          {
            "country": "ZA",
            "name": "South Africa",
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
            "position": 64,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
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
            "position": 6,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 44,
            "movement": 71
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 49,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 62,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 82,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 87,
            "movement": 7
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 90,
            "movement": 36
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 138,
            "movement": -4
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "position": 22,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
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
            "position": 12,
            "movement": 1
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
            "position": 10,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -7
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 84,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": 12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 149,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 180,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -8
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
            "position": 55,
            "movement": -6
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
            "position": 16,
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
            "position": 47,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 83
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 31,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 39
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 59,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 119
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": 40
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": 61
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": -6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 99,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 108,
            "movement": 31
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 131,
            "movement": -49
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 200,
            "movement": -59
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
            "position": 7,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 25,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": -23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 43,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 51,
            "movement": 37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -29
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": 12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": -60
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": -46
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": -39
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -108
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 196,
            "movement": -114
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
            "position": 8,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 116
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 87,
            "movement": 89
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": -22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
            "movement": -26
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 178,
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
            "position": 14,
            "movement": 2
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
            "position": 22,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 59,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": -7
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
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 195,
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
            "position": 3,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": 8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 113,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": -34
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -29
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
            "position": 157,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 32,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 58,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 65,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": -20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 167,
            "movement": -42
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 41
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
            "position": 148,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -34
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 92,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -59
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": 27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": 3
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
            "position": 11,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": 48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 173,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -4
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
            "position": 100,
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
            "position": 17,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 49
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 194,
            "movement": -28
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
            "position": 15,
            "movement": 1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": 31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": 41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -5
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
            "position": 44,
            "movement": 3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 126,
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
            "position": 19,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 70
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 38,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": 20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 149,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
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
            "position": 106,
            "movement": 20
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
            "position": 15,
            "movement": 181
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
            "position": 46,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -10
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 43,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 2
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 85,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 99,
            "movement": 32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 123,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 163,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": -27
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
            "position": 156,
            "movement": -51
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 11,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": 11
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
            "movement": -1
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
            "position": 28,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 133,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 197,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": 176
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 172,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": -1
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
            "position": 153,
            "movement": -61
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
            "position": 71,
            "movement": 5
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
            "position": 81,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 73,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": -59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 149,
            "movement": -79
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
            "position": 70,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
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
            "position": 40,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 81,
            "movement": -47
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
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
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
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
            "position": 34,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 57
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": -52
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 159,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 199,
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
            "position": 43,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -10
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
            "position": 86,
            "movement": 22
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
            "position": 37,
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
            "position": 53,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": -63
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 35,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 14
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
            "position": 108,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": 18
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
            "position": 48,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playtime",
    "platforms": [
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
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": -37
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 19
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
            "position": 86,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
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
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 117,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aloe Vera",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3074abf102bd38e5ea6f05abf2200fae/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 3
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
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 49,
            "movement": 14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/378f569589ef115812041d5044282ced/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Active",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 163,
            "movement": 30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Uhh Yeahh",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-04",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yoga",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 153,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 155,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness (feat. Asake, Gunna)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 39
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Uptown Disco",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-05",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d54453224f17a5f5271d50f793fca7b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -2
          }
        ]
      }
    ],
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
  