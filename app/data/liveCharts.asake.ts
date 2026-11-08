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
  export const liveChartsUpdated = "2026-11-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-08T13:30Z";
  
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
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 4,
            "movement": 0
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
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": 1
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 11,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 11,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 16,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 16,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 23,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 24,
            "movement": -11
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 33,
            "movement": -6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 40,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 53,
            "movement": 50
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 64,
            "movement": 5
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 67,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 71,
            "movement": 6
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 72,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": 55
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 91,
            "movement": -49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 111,
            "movement": -58
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 115,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 150,
            "movement": 26
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 155,
            "movement": -70
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 161,
            "movement": -113
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 162,
            "movement": -109
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 184,
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
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": -2
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 47,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 63,
            "movement": 35
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 96,
            "movement": -18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 102,
            "movement": -1
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 196,
            "movement": -166
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
            "position": 69,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 93,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 112,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 130,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": 19
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
            "position": 7,
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
            "position": 110,
            "movement": -12
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
            "position": 48,
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
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 8
          },
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
            "country": "MW",
            "name": "Malawi",
            "position": 2,
            "movement": 4
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
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 8,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 14,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 16,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 21,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 58,
            "movement": 7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 69,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 69,
            "movement": 13
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 90,
            "movement": -46
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 100,
            "movement": -17
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 111,
            "movement": 65
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 114,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 147,
            "movement": -9
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 193,
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
            "position": 12,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
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
            "position": 13,
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
            "position": 67,
            "movement": -56
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
            "position": 13,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 28,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 38,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 1
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
            "position": 44,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 56,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 80,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 93,
            "movement": -11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 120,
            "movement": -31
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 175,
            "movement": -163
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 194,
            "movement": -14
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 200,
            "movement": -10
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
            "position": 34,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": -27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 102,
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
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -30
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
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
            "position": 57,
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
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": 16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 32,
            "movement": 27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 43
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 45,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 32
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": 112
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": -8
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 130,
            "movement": -31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 140,
            "movement": -32
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 181,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 67
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 29,
            "movement": 75
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": 4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 50,
            "movement": 92
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 31
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 67,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": 31
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": 67
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": -54
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 60,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": -42
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
            "position": 21,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": 13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 186,
            "movement": 1
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 197,
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
            "position": 5,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 157,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": 40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 124,
            "movement": 66
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "position": 47,
            "movement": -3
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
            "position": 20,
            "movement": 75
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
            "country": "NE",
            "name": "Niger",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 28,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 73,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 92,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 116,
            "movement": -31
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 140,
            "movement": -70
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 163,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 188,
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
            "position": 48,
            "movement": 17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
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
            "position": 148,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 55
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 63,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -67
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 109,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 155,
            "movement": -85
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": -4
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 193,
            "movement": -75
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
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
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 7,
            "movement": 20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 125,
            "movement": -29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 149,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 160,
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
            "position": 137,
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 49,
            "movement": 47
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 57,
            "movement": 11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 60,
            "movement": 8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 60,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 96,
            "movement": -68
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 175,
            "movement": -43
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 185,
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
    "title": "Eja Meja",
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
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 46
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": -45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 126,
            "movement": 58
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": 47
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
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
            "position": 23,
            "movement": -6
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
            "position": 198,
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 27,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 67,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 140,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 155,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
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
            "position": 24,
            "movement": -3
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
            "movement": -19
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 28,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 76
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
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
            "position": 14,
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
            "position": 69,
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
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 63,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 108,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 148,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 174,
            "movement": -98
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 186,
            "movement": -122
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 192,
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
            "position": 151,
            "movement": 14
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
            "position": 24,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 31,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 95,
            "movement": 21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 96,
            "movement": 53
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 29
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
            "position": 91,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-06",
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
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 119,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 164,
            "movement": -128
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
            "position": 109,
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
            "position": 61,
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
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 71
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 42,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 89,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
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
            "position": 95,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 7
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
            "movement": -1
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
            "position": 57,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": 31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": -74
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
            "movement": -1
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
            "country": "GM",
            "name": "Gambia",
            "position": 82,
            "movement": 85
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 174,
            "movement": -159
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 5
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
            "country": "SC",
            "name": "Seychelles",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 48
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
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
            "country": "GD",
            "name": "Grenada",
            "position": 2,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -34
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
            "position": 133,
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
            "position": 65,
            "movement": 64
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06"
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
            "position": 93,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": 14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": 13
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 105,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
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
            "position": 113,
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
    "title": "Aloe Vera",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
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
            "position": 3,
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": 92
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 173,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 110,
            "movement": -24
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
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 152,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
            "movement": -9
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
            "position": 56,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": 35
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 177,
            "movement": -13
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
            "position": 98,
            "movement": 15
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
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": -1
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
            "country": "UG",
            "name": "Uganda",
            "position": 178,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 50,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 148,
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
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": -68
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 126,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
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
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 198,
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
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": 46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
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
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 139,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 149,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 180,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": 5
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
            "position": 89,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-08",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
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
            "position": 176,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": 53
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
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
            "position": 110,
            "movement": 5
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
            "position": 138,
            "movement": 9
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
            "position": 163,
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
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 160,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": -55
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/378f569589ef115812041d5044282ced/500x500-000000-80-0-0.jpg"
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
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-07",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Boy (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 97,
            "movement": -20
          }
        ]
      }
    ],
    "firstSeen": "2026-11-07",
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
  