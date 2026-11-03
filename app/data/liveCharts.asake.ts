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
  export const liveChartsUpdated = "2026-11-03";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-03T14:21Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 3,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
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
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -2
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
            "country": "SN",
            "name": "Senegal",
            "position": 8,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 11,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 13,
            "movement": 3
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 16,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 19,
            "movement": 26
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 23,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 32,
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 51,
            "movement": 6
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 60,
            "movement": 73
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 67,
            "movement": 31
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 70,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 71,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 82,
            "movement": 41
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 85,
            "movement": -25
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 91,
            "movement": -9
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 140,
            "movement": 6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 145,
            "movement": -112
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 153,
            "movement": -4
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 192,
            "movement": -139
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
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 13,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 35,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 58,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 62,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 101,
            "movement": -9
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
            "position": 56,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 111,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": -36
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
            "position": 2,
            "movement": 95
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -20
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
            "movement": 52
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
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
            "position": 4,
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 48,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 56,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 67,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": -46
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 102,
            "movement": 7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 150,
            "movement": 24
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 157,
            "movement": -8
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 172,
            "movement": 26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 200,
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
            "position": 21,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 69,
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
            "position": 11,
            "movement": 1
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
            "position": 186,
            "movement": -18
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
            "position": 9,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 24,
            "movement": 52
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 48,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 60,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 129,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 142,
            "movement": -22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 154,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 166,
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
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
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 24,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 42,
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
            "position": 40,
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 19,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": 6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 39,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 45,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": 64
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": -17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 62,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": 28
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": -18
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 125,
            "movement": -99
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 134,
            "movement": -67
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 134,
            "movement": -81
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 140,
            "movement": -60
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 193,
            "movement": -111
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
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 11,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -9
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 26,
            "movement": 65
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 28,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 28,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 38,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": -7
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": 21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": -11
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 100,
            "movement": -49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 159,
            "movement": -81
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
            "movement": 1
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
            "position": 4,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 66,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": -31
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
            "movement": -24
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 127,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 144,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
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
            "position": 42,
            "movement": 42
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
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 34,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 44
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 56,
            "movement": 52
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 69,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": -14
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 72,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -50
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 105,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -33
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 162,
            "movement": -38
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 173,
            "movement": -52
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
            "position": 4,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 2
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
            "position": 11,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": 21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
            "movement": 21
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 105,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
            "movement": -41
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
            "position": 172,
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
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "position": 18,
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
            "position": 50,
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 2,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 123,
            "movement": 10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
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
            "position": 44,
            "movement": -5
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
            "position": 160,
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
            "position": 27,
            "movement": 58
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
            "country": "ML",
            "name": "Mali",
            "position": 19,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 24,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": -29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 64,
            "movement": 6
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 79,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 123,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 129,
            "movement": 39
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 130,
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
            "position": 126,
            "movement": 16
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
            "position": 57,
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
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 49,
            "movement": 96
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": 45
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 54,
            "movement": 132
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -46
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 95,
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
            "position": 23,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 102,
            "movement": -23
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": -65
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 32,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": -11
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 95,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 138,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 151,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": -45
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
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
            "position": 118,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 198,
            "movement": -38
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
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 124,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -32
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": -62
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 13,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -1
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
            "position": 59,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
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
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": -48
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -65
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 197,
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
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "position": 64,
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
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": -30
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "movement": -12
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
            "position": 185,
            "movement": -18
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -16
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 123,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 192,
            "movement": -58
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
            "movement": -14
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
            "position": 78,
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": 74
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
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
            "position": 131,
            "movement": 6
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
            "position": 60,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": 42
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": -51
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 132,
            "movement": 47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
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
            "position": 121,
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
            "position": 61,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 189,
            "movement": -15
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
            "position": 10,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
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
            "position": 109,
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
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 52,
            "movement": -28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 128,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 175,
            "movement": -46
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
            "position": 62,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 174,
            "movement": -6
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
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 190,
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
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": 66
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 147,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 178,
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
            "position": 95,
            "movement": 2
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
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 5
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -19
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 25,
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
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": -4
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
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
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
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
            "position": 91,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-18",
    "cover": "https://cdn-images.dzcdn.net/images/cover/378f569589ef115812041d5044282ced/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 165,
            "movement": -18
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
            "position": 127,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "movement": -5
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
            "position": 171,
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
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 191,
            "movement": -56
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
            "position": 73,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
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
            "position": 117,
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
    "title": "PALAZZO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0bcd709f154f3696394779095ad0c3c9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Introduction",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 176,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 195,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-01",
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
            "position": 158,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 101,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Active",
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
    "firstSeen": "2026-11-03",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 173,
            "movement": -48
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-10-20",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-03",
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
  