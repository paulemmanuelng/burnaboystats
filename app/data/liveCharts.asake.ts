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
  export const liveChartsBuiltAt = "2026-11-27T21:22Z";
  
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
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "KE",
            "name": "Kenya",
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
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 15,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 16,
            "movement": -1
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 19,
            "movement": 72
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 21,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 21,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 22,
            "movement": 4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 30,
            "movement": 22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 32,
            "movement": 29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 37,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 37,
            "movement": 159
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 64,
            "movement": -21
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 71,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 86,
            "movement": -52
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 90,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 102,
            "movement": -67
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 111,
            "movement": -5
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 190,
            "movement": -64
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 190,
            "movement": -21
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 1,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 41,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": -6
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 51,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": -37
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 143,
            "movement": -43
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 167,
            "movement": -3
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
            "position": 173,
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
            "position": 9,
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
            "position": 113,
            "movement": -100
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
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 18,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 40,
            "movement": -14
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 49,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 60,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 77,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 122,
            "movement": -31
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 124,
            "movement": -40
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 132,
            "movement": -16
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 195,
            "movement": -55
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 67
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
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 71
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 69,
            "movement": -16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 113,
            "movement": 34
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 136,
            "movement": -116
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 192,
            "movement": -10
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
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 33,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
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
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 69
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 31,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 38,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": 88
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 47,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 50,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": 63
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 74,
            "movement": -39
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 74,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": -14
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 126,
            "movement": -82
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 143,
            "movement": -43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 155,
            "movement": -2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 196,
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
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 19,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 29,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 31,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 32,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 48,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": -32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 94,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -41
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 103,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": -84
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 123,
            "movement": -81
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 151,
            "movement": 15
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 175,
            "movement": -61
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "position": 8,
            "movement": 2
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
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 29,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 54
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 101,
            "movement": -5
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
            "position": 101,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": -17
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
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 18,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 18,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 149,
            "movement": -24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 169,
            "movement": -28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 192,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 198,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 199,
            "movement": -43
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 58,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": -14
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
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
            "position": 58,
            "movement": -3
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -7
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 32,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 51,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 90,
            "movement": -19
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 93,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": -92
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": -1
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 7,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 61
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 180,
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
            "position": 29,
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
            "position": 109,
            "movement": -98
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
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 41
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": 62
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 138,
            "movement": -90
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 175,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": -86
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 197,
            "movement": -139
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
            "position": 11,
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
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": -19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 43,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": 33
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": -40
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 75,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 92,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": 69
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 113,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 128,
            "movement": -37
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
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
            "position": 192,
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
            "position": 47,
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 11,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 68
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 75,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
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
            "position": 35,
            "movement": 4
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
            "position": 9,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 24,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -62
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 135,
            "movement": -52
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": -51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 198,
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
            "position": 21,
            "movement": -4
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
            "position": 54,
            "movement": -1
          },
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
            "position": 78,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 97,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 179,
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
            "position": 123,
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
            "position": 2,
            "movement": 2
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
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 39,
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
            "position": 44,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 107,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 129,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -15
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
            "position": 49,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 89,
            "movement": 36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 90,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 167,
            "movement": -123
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 176,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
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
            "position": 135,
            "movement": -13
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
            "position": 34,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 152,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
            "movement": -15
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
            "position": 69,
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
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": -25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 95,
            "movement": -23
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 156,
            "movement": -79
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 41,
            "movement": -4
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
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 190,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
            "movement": -3
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
            "position": 169,
            "movement": 14
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
            "position": 39,
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
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 179,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
            "movement": -37
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
            "position": 50,
            "movement": -21
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
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
            "position": 106,
            "movement": -11
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
            "country": "GM",
            "name": "Gambia",
            "position": 57,
            "movement": 94
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 102,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 71,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 23,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 174,
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
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 102,
            "movement": 85
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": -43
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 176,
            "movement": -22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 11
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
            "position": 26,
            "movement": 58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 78
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": 6
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
            "movement": -34
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
            "position": 62,
            "movement": 24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 69,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 57
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 107,
            "movement": -23
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
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
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": 17
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
            "position": 33,
            "movement": -7
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
            "position": 28,
            "movement": 50
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "EE",
            "name": "Estonia",
            "position": 46,
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
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
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
            "position": 64,
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
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": 84
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 195,
            "movement": -23
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
            "position": 146,
            "movement": 15
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 147,
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
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 164,
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
            "position": 160,
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
    "title": "Blessings",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
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
            "position": 172,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 55,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Playtime",
    "platforms": [
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
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 75,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-27",
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
            "country": "SR",
            "name": "Suriname",
            "position": 30,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "album",
    "firstSeen": "2026-11-25",
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
  