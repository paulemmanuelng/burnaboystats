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
  export const liveChartsUpdated = "2026-11-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-10T19:47Z";
  
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
            "position": 3,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 10,
            "movement": 10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 14,
            "movement": 2
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 14,
            "movement": 12
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 15,
            "movement": -2
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 16,
            "movement": 14
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 19,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 36,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 57,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 59,
            "movement": -18
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 69,
            "movement": 32
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 70,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 79,
            "movement": -47
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 79,
            "movement": 63
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 81,
            "movement": -5
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 87,
            "movement": -10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 94,
            "movement": 7
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 112,
            "movement": -4
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 178,
            "movement": -17
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 184,
            "movement": -15
          },
          {
            "country": "IS",
            "name": "Iceland",
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
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
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
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 10,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 32,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 44,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 55,
            "movement": -47
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": -22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 137,
            "movement": 1
          },
          {
            "country": "SZ",
            "name": "Eswatini",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 102,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 106,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 115,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -9
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
            "position": 29,
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 42,
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
            "position": 4,
            "movement": 2
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
            "position": 138,
            "movement": -12
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
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 2,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 13,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 14,
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
            "position": 39,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 52,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 55,
            "movement": 24
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 62,
            "movement": 25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 71,
            "movement": -20
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 111,
            "movement": -27
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 119,
            "movement": 54
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 125,
            "movement": -80
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "position": 12,
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
            "position": 30,
            "movement": -17
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
            "position": 12,
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
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 17,
            "movement": 28
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 59,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -43
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 88,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 92,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 98,
            "movement": 32
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 101,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 117,
            "movement": -39
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": -91
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 162,
            "movement": -56
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
            "movement": 0
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
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 74
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 28,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 46
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 44,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 63,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": 46
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 100,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 103,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": -12
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 157,
            "movement": 37
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 169,
            "movement": -68
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
            "movement": -30
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
            "position": 9,
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
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 36,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 41,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 66,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 67,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 91,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": 28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 111,
            "movement": -42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 151,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 179,
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
            "movement": 1
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
            "movement": 49
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
            "position": 2,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": 25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 108,
            "movement": -26
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
            "position": 22,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 145,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 194,
            "movement": -4
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
            "position": 5,
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
            "position": 98,
            "movement": -83
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": 41
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 66,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 121,
            "movement": -1
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
            "position": 46,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -35
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
            "position": 73,
            "movement": -17
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
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 26,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 36,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 71,
            "movement": 4
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 141,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 142,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 161,
            "movement": -60
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
            "position": 160,
            "movement": -11
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 42,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 62,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 101,
            "movement": 31
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 116,
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
            "position": 43,
            "movement": -2
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
            "position": 36,
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 20,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 128,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 134,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 200,
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
            "position": 19,
            "movement": 1
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
            "position": 39,
            "movement": -11
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 26,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 56,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": -62
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": 37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 151,
            "movement": 23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 196,
            "movement": -46
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
            "position": 14,
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
            "position": 32,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 67,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": -33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 94,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 146,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": -40
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
            "position": 20,
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
            "position": 16,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 77,
            "movement": -16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 152,
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": -18
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 136,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 139,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 152,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -78
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -18
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
            "position": 155,
            "movement": -10
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
            "position": 29,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 31,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": -12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 89,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 130,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 138,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -71
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": -74
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
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
            "position": 131,
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": -49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 134,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
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
            "position": 89,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
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
            "position": 32,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 40,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 98,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": -42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 106,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
            "movement": -41
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
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 117,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 120,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 180,
            "movement": -84
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
            "position": 101,
            "movement": 4
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
            "position": 7,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 49,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
            "movement": -107
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
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 90,
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
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 34,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 192,
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
            "position": 42,
            "movement": -4
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
    "title": "Playtime",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 90,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 1
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 184,
            "movement": -115
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 199,
            "movement": -95
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 17,
            "movement": -8
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
            "position": 33,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/97149d1f6e57643e99218b59521459b4/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 157,
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
            "position": 38,
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": 38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 173,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 133,
            "movement": 42
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 165,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 116,
            "movement": -10
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
            "position": 65,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aloe Vera",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": -42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
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
            "position": 46,
            "movement": -7
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
            "position": 120,
            "movement": 47
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3074abf102bd38e5ea6f05abf2200fae/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -46
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
            "position": 115,
            "movement": -8
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
            "position": 91,
            "movement": 24
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 111,
            "movement": -78
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": -27
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -6
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
            "movement": 1
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
            "position": 10,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": 12
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
            "country": "NE",
            "name": "Niger",
            "position": 135,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 142,
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
            "position": 102,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": 35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
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
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
            "movement": -37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": 26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": 1
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 5
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
            "position": 162,
            "movement": 31
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
            "position": 94,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 152,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 101,
            "movement": -8
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
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 154,
            "movement": -133
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
            "position": 143,
            "movement": -9
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
            "position": 139,
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
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 68,
            "movement": 65
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Deezer",
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 97,
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
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -31
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
            "position": 163,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 101,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 133,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 159,
            "movement": 1
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
            "position": 167,
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 168,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": -3
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
  