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
  export const liveChartsUpdated = "2026-11-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-27T08:40Z";
  
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 15,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 17,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 23,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 26,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 34,
            "movement": 15
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 34,
            "movement": -7
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 35,
            "movement": -17
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 43,
            "movement": 34
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 52,
            "movement": -17
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 61,
            "movement": -18
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 71,
            "movement": 44
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 89,
            "movement": 7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 91,
            "movement": -24
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 100,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 126,
            "movement": -28
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 169,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 196,
            "movement": -45
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 24,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 36,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 67,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 70,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 100,
            "movement": -4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 164,
            "movement": -43
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
            "position": 85,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 129,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
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
            "position": 10,
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
            "position": 26,
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
            "position": 15,
            "movement": 13
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 26,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": -29
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 61,
            "movement": -15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": -10
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 91,
            "movement": -18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 116,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 140,
            "movement": 21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 181,
            "movement": -33
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
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -54
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
            "position": 19,
            "movement": 2
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
    "title": "WORSHIP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 7,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 20,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 53,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 182,
            "movement": -58
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "country": "KE",
            "name": "Kenya",
            "position": 81,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -11
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
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 75,
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
            "position": 58,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 152
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 19,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -13
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 42,
            "movement": 24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": 98
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 82,
            "movement": 23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": -27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 96,
            "movement": -26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 114,
            "movement": -51
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 166,
            "movement": 0
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": 51
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 32,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
            "movement": -12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 44
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": 27
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 92,
            "movement": 40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -69
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 100,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 128,
            "movement": -69
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": -54
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 153,
            "movement": 35
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
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": -28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": 22
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
            "position": 17,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 80,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": -11
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
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -155
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 5
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 36,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 45,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": 10
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": 48
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 154,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 194,
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
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 141,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": -67
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 198,
            "movement": -9
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
            "position": 100,
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 7,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 39,
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
            "position": 98,
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
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 65
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 65
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": -6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 12
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": -92
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": -117
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 186,
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": 42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 136,
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
            "position": 55,
            "movement": 7
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
            "position": 79,
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
            "position": 28,
            "movement": 32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 42,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 64,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 91,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -1
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 63,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 66,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 139,
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
            "position": 32,
            "movement": -6
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
            "movement": 87
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
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 48,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 54,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 30
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 101,
            "movement": 52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 168,
            "movement": -92
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 53,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -19
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
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 46,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 112,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 132,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": 20
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
            "position": 33,
            "movement": -6
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
    "title": "REAL, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 88,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 91,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": -13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": 27
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 41,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 133
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 57,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 159,
            "movement": -26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 189,
            "movement": -83
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
            "position": 122,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 191,
            "movement": -152
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
            "position": 122,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
            "movement": 5
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
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
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
            "position": 95,
            "movement": 49
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 77,
            "movement": -41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
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
            "position": 37,
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
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
            "movement": 7
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": -77
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": 25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": -10
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
            "position": 68,
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
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 128,
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
            "movement": 31
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 188,
            "movement": -154
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "position": 126,
            "movement": 3
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
            "position": 20,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 133,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": -20
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
            "position": 113,
            "movement": 13
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
            "position": 121,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": -43
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
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
    "title": "Playtime",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -63
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
            "position": 170,
            "movement": 29
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
            "position": 86,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/97149d1f6e57643e99218b59521459b4/500x500-000000-80-0-0.jpg"
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
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -60
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 161,
            "movement": -50
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
            "position": 193,
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
            "position": 187,
            "movement": -155
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": -5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 193,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 70,
            "movement": 79
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": -32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 141,
            "movement": -26
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
            "position": 73,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 61,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 152,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 5,
            "movement": 10
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 86,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
            "position": 56,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Trabaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 43,
            "movement": 107
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
            "position": 52,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baba God",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 75,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-26",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
            "position": 116,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 151,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
  