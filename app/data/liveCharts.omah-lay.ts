// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=omah-lay from kworb's artist page.
  //
  // PLATFORM chart data for Omah Lay: where each release is sitting RIGHT
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
    platforms: LivePlatform[];
  }
  
  /** When this snapshot was taken (ISO date). */
  export const liveChartsUpdated = "2026-09-28";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-28T05:28Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "CLARITY OF MIND",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 28,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 31,
            "movement": 24
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 44,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": -15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 63,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 113,
            "movement": 26
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 120,
            "movement": -85
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": -41
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": -30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 167,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 168,
            "movement": -131
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": -19
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 48,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": 30
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -8
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": 22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 105,
            "movement": 28
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 111,
            "movement": 24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 169,
            "movement": -32
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 171,
            "movement": -108
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 175,
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
            "position": 16,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I AM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 43,
            "movement": -17
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 57,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 72,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": 54
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": 28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
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
            "position": 171,
            "movement": -141
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
            "position": 151,
            "movement": -22
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
            "position": 54,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 45
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 131,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": -36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 200,
            "movement": -33
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 87,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -142
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
            "position": 141,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
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
            "position": 139,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Influence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": -62
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": -7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 160,
            "movement": -139
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": -35
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
            "position": 103,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "i'm a mess",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 149,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Get Layd - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": 58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Infinity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 137,
            "movement": -32
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 181,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MY HEALER",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
            "movement": 16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 175,
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
            "position": 165,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forever",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": 7
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
            "position": 186,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Waist",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
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
            "position": 86,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "As We Get High",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -78
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
            "position": 119,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b4d2ad60759dd994a1a8440baa1c61e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 48
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Namek",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 94,
            "movement": 2
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": 63
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -21
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": 47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Company",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": -21
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
            "position": 168,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d9ca878974f4d47b8d671a0ea95ecd2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "10 Toes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 86,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ghost",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b4fd7e67b985be9489dbf58dc74497b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DON'T LOVE ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "woman",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1724f66c550648b497bd7ccec64b9179/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What Have We Done - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album"
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
  