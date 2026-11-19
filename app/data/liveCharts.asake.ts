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
  export const liveChartsUpdated = "2026-11-19";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-19T20:42Z";
  
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 4,
            "movement": 127
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": 1
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
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 7,
            "movement": 57
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 14,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 16,
            "movement": -3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 16,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 17,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 18,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": 1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 28,
            "movement": 28
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 41,
            "movement": -19
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 69,
            "movement": 30
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 79,
            "movement": 5
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 93,
            "movement": -3
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 102,
            "movement": 27
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 103,
            "movement": 7
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 104,
            "movement": 20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 114,
            "movement": -24
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 117,
            "movement": 4
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 140,
            "movement": -16
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 162,
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
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 37,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 43,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": 41
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 82,
            "movement": 90
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 85,
            "movement": 2
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": -11
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 131,
            "movement": -37
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
            "position": 69,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 132,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 148,
            "movement": 18
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 165,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": 15
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
            "position": 6,
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
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 20,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 33,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 45,
            "movement": 2
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 92,
            "movement": 24
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 101,
            "movement": 16
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 107,
            "movement": 5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 109,
            "movement": 15
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 152,
            "movement": 33
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 167,
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
            "position": 26,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
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
            "movement": -3
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
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 15,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 53,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -41
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": -47
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 87,
            "movement": 97
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 121,
            "movement": 6
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 141,
            "movement": 33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 159,
            "movement": -51
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 168,
            "movement": -59
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
            "position": 9,
            "movement": 0
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
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": 64
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 50,
            "movement": -20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 66,
            "movement": -22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 72,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 82,
            "movement": -27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": -16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 101,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": -43
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -62
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": 9
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": -41
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 169,
            "movement": -61
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
            "movement": -1
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
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": 3
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": -13
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
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -21
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
            "position": 13,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 34,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": -5
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 37,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 68,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 98,
            "movement": 48
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 137,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 184,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 189,
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
            "position": 47,
            "movement": -6
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
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 16,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 38,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": -26
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 54,
            "movement": 14
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": 60
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 129,
            "movement": 11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": 7
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 38,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 73,
            "movement": -10
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 74,
            "movement": -28
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -66
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -67
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
            "movement": -35
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 189,
            "movement": -137
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
            "position": 12,
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
            "position": 162,
            "movement": -58
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 88,
            "movement": 6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": -22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": 43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": -51
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -121
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": -108
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 180,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 181,
            "movement": -132
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 60,
            "movement": -20
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
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 33,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": 106
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 130,
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
            "position": 60,
            "movement": -10
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
            "position": 56,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "SR",
            "name": "Suriname",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 52
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": 63
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 76,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 83,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": -42
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 103,
            "movement": 58
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": 15
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 166,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": 9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 20,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": -24
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 78,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 84,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": 1
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 177,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": -39
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 186,
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
            "position": 136,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -35
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
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
            "position": 31,
            "movement": -8
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -24
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 90,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": -78
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 191,
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
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 109,
            "movement": -36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": 44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 65
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 8
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 156,
            "movement": 31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 197,
            "movement": -43
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
            "position": 114,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -109
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": -50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
            "position": 99,
            "movement": -4
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
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 16,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": -30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 149,
            "movement": -39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
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
            "position": 25,
            "movement": -7
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
            "position": 39,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 23
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": 31
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 162,
            "movement": -61
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
            "position": 45,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": 26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 32,
            "movement": 2
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 42,
            "movement": 3
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
            "position": 101,
            "movement": 7
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
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
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
            "position": 44,
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
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 60
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 121,
            "movement": 5
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
            "position": 70,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 92
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": 17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "position": 118,
            "movement": -10
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
            "position": 79,
            "movement": 84
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 125,
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
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 126
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": 84
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": -59
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": -5
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
            "position": 141,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -5
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
            "country": "TD",
            "name": "Chad",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
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
            "position": 117,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": -18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 180,
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
    "title": "Aloe Vera",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 1
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
            "position": 183,
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
            "country": "LU",
            "name": "Luxembourg",
            "position": 85,
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
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
            "movement": -7
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
            "position": 6,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": -11
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
            "position": 169,
            "movement": 7
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
            "position": 172,
            "movement": -28
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
            "position": 36,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/97149d1f6e57643e99218b59521459b4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 51
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-14",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 158,
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
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
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
            "position": 194,
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
            "position": 55,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
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
            "position": 58,
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
    "title": "Uhh Yeahh",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
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
            "position": 42,
            "movement": -18
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
            "position": 84,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 61,
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
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 44,
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
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gold",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 174,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
    "cover": "https://cdn-images.dzcdn.net/images/cover/abc1e9a3c70d9ee2784cdefc48a3ae3b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2:30",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-17",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 182,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
  