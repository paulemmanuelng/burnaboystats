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
  export const liveChartsUpdated = "2026-11-26";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-11-26T08:26Z";
  
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 4,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 13,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 13,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 17,
            "movement": -3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 18,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 19,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 21,
            "movement": 7
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 23,
            "movement": -3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 27,
            "movement": -18
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 35,
            "movement": -20
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 43,
            "movement": -18
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": 35
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 62,
            "movement": -36
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 77,
            "movement": 47
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 96,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 98,
            "movement": -29
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 98,
            "movement": 2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 115,
            "movement": -28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 141,
            "movement": -53
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 9,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 13,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": 99
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 33,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 41,
            "movement": 17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 66,
            "movement": 2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 76,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 84,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": 30
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": -25
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 149,
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
            "position": 81,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 85,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 136,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 165,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 171,
            "movement": -11
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
            "position": 28,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -26
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
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 26,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 29,
            "movement": -8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 46,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 73,
            "movement": -39
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 74,
            "movement": 3
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 118,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 148,
            "movement": -27
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": -71
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Eswatini",
            "position": 177,
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
            "position": 21,
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
            "position": 42,
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
            "position": 14,
            "movement": 39
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 18,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 50,
            "movement": -12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 61,
            "movement": 58
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 82,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 87,
            "movement": -41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 124,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 174,
            "movement": -63
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
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
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
            "position": 63,
            "movement": -3
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 16,
            "movement": -12
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
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 15,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 21,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 28,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 33,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": -33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 58,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": 102
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 83,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 95,
            "movement": -21
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": 8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 132,
            "movement": -70
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": -70
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 8,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 12,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": -32
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 63,
            "movement": -11
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 66,
            "movement": -43
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 69,
            "movement": 51
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 70,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 76,
            "movement": -31
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 105,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 160,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 166,
            "movement": -42
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 172,
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
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 118,
            "movement": -64
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
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 80,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 124,
            "movement": -25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
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
            "position": 11,
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
            "position": 40,
            "movement": 117
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
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 12,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 22,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 114,
            "movement": -20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 142,
            "movement": -5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": -19
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 189,
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
            "position": 19,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 34,
            "movement": 8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": 35
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 67,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 36
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 128,
            "movement": -70
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 158,
            "movement": -68
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 170,
            "movement": -92
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 198,
            "movement": -16
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 153,
            "movement": -56
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": -107
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
            "position": 62,
            "movement": 0
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
            "position": 75,
            "movement": 0
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
            "position": 60,
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 9,
            "movement": 37
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 80,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 110,
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
            "position": 26,
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
            "position": 109,
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
            "position": 89,
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
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 6
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
            "position": 61,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 122,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": 66
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": 45
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -14
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
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": -11
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 57,
            "movement": 49
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 110,
            "movement": -60
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -76
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 143,
            "movement": -43
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 153,
            "movement": -57
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 64,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 65,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 101,
            "movement": -53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -75
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 120,
            "movement": -44
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BB",
            "name": "Barbados",
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
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": 48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 133,
            "movement": -3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 165,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
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
            "position": 151,
            "movement": 21
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
            "position": 61,
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 131,
            "movement": -56
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 190,
            "movement": -88
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
            "position": 27,
            "movement": -25
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
            "position": 15,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 105,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 186,
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
            "position": 27,
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
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 24,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 30,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": -9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 72,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 79,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 181,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
            "movement": -3
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
            "position": 19,
            "movement": 8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 56,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
            "movement": 13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 200,
            "movement": -57
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
            "position": 117,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 61,
            "movement": 9
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
            "position": 45,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": -20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 72,
            "movement": 89
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": 53
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 117,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 133,
            "movement": -35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
            "movement": -45
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
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": 84
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 30
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 59
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 126,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
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
            "position": 44,
            "movement": -3
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
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 140,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 173,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 200,
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
            "position": 20,
            "movement": -14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 54,
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
            "position": 144,
            "movement": -3
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
            "position": 125,
            "movement": -19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
            "movement": -47
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 198,
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
            "position": 64,
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
            "country": "TD",
            "name": "Chad",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 159,
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
            "position": 126,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 62,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": -16
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
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
            "position": 190,
            "movement": -14
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
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
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
            "position": 129,
            "movement": -2
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
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 41,
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
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 47,
            "movement": 28
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
            "movement": -44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
    "title": "Playtime",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 16
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
            "position": 199,
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
            "position": 78,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-06",
    "cover": "https://cdn-images.dzcdn.net/images/cover/97149d1f6e57643e99218b59521459b4/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": -41
          },
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
            "position": 24,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 97,
            "movement": -59
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-10",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 44,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-21",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 186,
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
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-19",
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
            "position": 111,
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
            "position": 32,
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
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-13",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
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
            "position": 12,
            "movement": -1
          }
        ]
      }
    ],
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 23
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 107,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-01-01",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 36,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ako",
    "platforms": [
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
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 170,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-22",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 148,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 149,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
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
            "position": 150,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 159,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
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
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 152,
            "movement": -32
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
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "firstSeen": "2026-11-23",
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
            "country": "SR",
            "name": "Suriname",
            "position": 15,
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
    "title": "Wa (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "firstSeen": "2026-11-25",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "Deezer",
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
    "firstSeen": "2026-11-25",
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
  