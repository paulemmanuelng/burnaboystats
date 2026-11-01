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
  export const liveChartsUpdated = "2026-11-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-01T13:30Z";
  
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
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 10,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 12,
            "movement": 67
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 15,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 20,
            "movement": 32
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 37,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 40,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 42,
            "movement": 65
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 44,
            "movement": -2
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 48,
            "movement": 9
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 57,
            "movement": -6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 60,
            "movement": 4
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 69,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 74,
            "movement": -8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 87,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 93,
            "movement": -22
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 105,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 116,
            "movement": -15
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 125,
            "movement": -28
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 136,
            "movement": 15
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FR",
            "name": "France",
            "position": 165,
            "movement": 10
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 167,
            "movement": -51
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 17,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 40,
            "movement": 34
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 55,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 70,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 72,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 95,
            "movement": 37
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 121,
            "movement": -87
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 137,
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
            "position": 54,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 129,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": -21
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
            "position": 10,
            "movement": 14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -1
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
            "position": 43,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 92,
            "movement": -37
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
            "position": 8,
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
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": 121
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -12
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 47,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 47,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": 114
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": 54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": -51
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 97,
            "movement": -34
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 122,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
            "movement": -15
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
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 132,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 132,
            "movement": 31
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 163,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 178,
            "movement": -8
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
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
            "position": 39,
            "movement": 3
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
            "position": 35,
            "movement": -8
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
            "position": 42,
            "movement": 9
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
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 31,
            "movement": 49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -11
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 171,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 119,
            "movement": -10
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 120,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 145,
            "movement": -20
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 180,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": -6
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 26,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 43,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 51,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 125,
            "movement": 0
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 132,
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
            "position": 12,
            "movement": -1
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
            "position": 156,
            "movement": -30
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
            "position": 32,
            "movement": -12
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
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 34,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 65,
            "movement": 33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 65,
            "movement": 21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": 18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": -17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": 69
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": -71
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 130,
            "movement": -71
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 169,
            "movement": 20
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
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 54
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -9
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 37,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": -20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 41,
            "movement": 73
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": -59
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 184,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
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
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 126,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 151,
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
            "position": 184,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": 29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": 82
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 118,
            "movement": -50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": 1
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
            "position": 45,
            "movement": 3
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
            "position": 77,
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
            "position": 51,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": -86
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 159,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 190,
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
            "position": 21,
            "movement": -7
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
            "position": 68,
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
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 19,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 64,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 76,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": 87
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 137,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
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
            "position": 49,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": 21
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
            "position": 141,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 2,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 145,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 197,
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
            "position": 25,
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
            "position": 27,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -2
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
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 62
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": 71
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 89,
            "movement": 104
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 116,
            "movement": -43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": 0
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 165,
            "movement": 8
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
            "position": 111,
            "movement": -16
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": 26
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": 51
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
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
            "position": 26,
            "movement": -4
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
            "position": 58,
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
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 64,
            "movement": -27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 87,
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
            "position": 85,
            "movement": -13
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
            "position": 197,
            "movement": 1
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
            "position": 77,
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
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 67,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 134,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": -73
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 196,
            "movement": -40
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
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": 72
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": 28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 176,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 189,
            "movement": -51
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -6
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 124,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": -46
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
            "position": 89,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": -2
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
            "position": 66,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": 60
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
            "movement": -52
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 194,
            "movement": -74
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
            "position": 33,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
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
            "position": 40,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 76,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 118,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": -63
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
            "position": 118,
            "movement": 5
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 64,
            "movement": -29
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 93,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": 56
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -22
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
            "position": 47,
            "movement": -7
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
            "position": 88,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 112,
            "movement": -22
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
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 69
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 189,
            "movement": -19
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
            "position": 26,
            "movement": 45
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -48
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 127,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
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
            "position": 129,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 62,
            "movement": -45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -16
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
            "position": 110,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
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
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
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
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 27
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 186,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": -39
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
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 37,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": 32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": -15
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
            "position": 92,
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
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 131,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 156,
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
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": -19
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
            "position": 6,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -47
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 164,
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
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
            "position": 108,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-24",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 56
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/378f569589ef115812041d5044282ced/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Suru",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PALAZZO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 127,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0bcd709f154f3696394779095ad0c3c9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ligali",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What's Up My G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 151,
            "movement": -62
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
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
            "position": 167,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 151,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 179,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Worldwide",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-31",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-29",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid (feat. Asake, Wizkid, Skillibeng)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-30",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
  