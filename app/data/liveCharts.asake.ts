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
  export const liveChartsUpdated = "2026-11-21";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-21T07:15Z";
  
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
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -1
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 10,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 13,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": 0
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 16,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 17,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 19,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 31,
            "movement": -27
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 37,
            "movement": -30
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 44,
            "movement": -16
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 56,
            "movement": 61
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": 52
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 62,
            "movement": 41
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 79,
            "movement": -38
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 89,
            "movement": -10
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 90,
            "movement": -21
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 93,
            "movement": -6
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 116,
            "movement": -12
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 131,
            "movement": 9
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 175,
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
            "position": 3,
            "movement": 0
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
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 21,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 39,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 47,
            "movement": -4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 85,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 94,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 102,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 103,
            "movement": -18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 111,
            "movement": -29
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 162,
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
            "position": 84,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 139,
            "movement": -7
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 162,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
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
            "position": 6,
            "movement": -1
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
            "position": 4,
            "movement": 20
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
            "position": 22,
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
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 28,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 40,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 60,
            "movement": 107
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 76,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": 2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 95,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 138,
            "movement": -31
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 142,
            "movement": -85
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 146,
            "movement": -37
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 184,
            "movement": -49
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
            "movement": -1
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
            "position": 51,
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
            "position": 25,
            "movement": 0
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
            "position": 14,
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
    "title": "IKEBE 3000",
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
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 43,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 129,
            "movement": -4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 173,
            "movement": -50
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
            "position": 14,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 103,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": 35
          },
          {
            "country": "WW",
            "name": "Worldwide",
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
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
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
            "position": 9,
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
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 20,
            "movement": 67
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 35,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 42,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 58,
            "movement": -5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 60,
            "movement": 108
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 45
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": -43
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 74,
            "movement": 85
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 111,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": -60
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
            "movement": 15
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": 14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 43,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 63,
            "movement": 93
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -16
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 102,
            "movement": 50
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 104,
            "movement": -32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 112,
            "movement": 27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 116,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
            "movement": -39
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
            "country": "SR",
            "name": "Suriname",
            "position": 19,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 53,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 85,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -32
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 93,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 170,
            "movement": -33
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
            "position": 58,
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
            "position": 135,
            "movement": -118
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
            "position": 86,
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
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 74,
            "movement": 21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 101,
            "movement": -47
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 107,
            "movement": -26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 170,
            "movement": -41
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 171,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 188,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": 33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 72,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 88,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 159,
            "movement": -61
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": -54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": -96
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
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
            "position": 13,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 31,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": -6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 51,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -12
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 157,
            "movement": 29
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 158,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 168,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": 4
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 182,
            "movement": -76
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
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
            "position": 161,
            "movement": -9
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
            "position": 22,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 48,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": -52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 138,
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
            "position": 60,
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
            "position": 49,
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": 10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 50,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": 115
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": -46
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -44
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
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
            "position": 16,
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
            "position": 18,
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
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -18
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 79,
            "movement": 24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 81,
            "movement": 43
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 94,
            "movement": -83
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": -29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": -64
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 66,
            "movement": -53
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 105,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": -47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
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
            "position": 45,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 20
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 183,
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
            "position": 28,
            "movement": 0
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
            "movement": 1
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
            "position": 42,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 78,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 120,
            "movement": -11
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 136,
            "movement": -16
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": -47
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
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 56
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 81,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": 20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": -39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": 4
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 172,
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
            "position": 17,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 76
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": -38
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 104,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": 72
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
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
            "position": 118,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": -15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 83,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 109,
            "movement": 53
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": -5
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
            "position": 30,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -9
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 41,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 122,
            "movement": 70
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": -42
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
            "position": 162,
            "movement": -15
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
            "position": 57,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": 68
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": -34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": 36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 169,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
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
            "position": 56,
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 160,
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
            "position": 55,
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
            "position": 104,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": -76
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 183,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 166,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
            "movement": 3
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
            "position": 128,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 137,
            "movement": -58
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": -36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
            "position": 158,
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
            "position": 68,
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
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
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
            "position": 197,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
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
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 182,
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
            "position": 39,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playtime",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -1
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 184,
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
            "position": 41,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/97149d1f6e57643e99218b59521459b4/500x500-000000-80-0-0.jpg"
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
            "position": 82,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 199,
            "movement": -21
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
            "position": 125,
            "movement": 16
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
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": -34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
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
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 130,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 146,
            "movement": -136
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 106,
            "movement": -10
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
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aloe Vera",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -19
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PL",
            "name": "Poland",
            "position": 139,
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
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 42,
            "movement": 2
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 46,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 101,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 171,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Active",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Uhh Yeahh",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -50
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 142,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wave",
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
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 60,
            "movement": 0
          }
        ]
      }
    ],
    "firstSeen": "2026-11-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": -1
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
  