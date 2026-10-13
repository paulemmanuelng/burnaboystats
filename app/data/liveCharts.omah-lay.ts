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
  export const liveChartsUpdated = "2026-10-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-13T22:49Z";
  
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": 33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 16,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 47,
            "movement": 50
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 69,
            "movement": -41
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
            "movement": -9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 79,
            "movement": 57
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": -31
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 133,
            "movement": -66
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": -22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": -75
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -57
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "position": 11,
            "movement": 0
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
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 57,
            "movement": 0
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 64,
            "movement": 66
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 71,
            "movement": 18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": 92
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": 61
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 101,
            "movement": -24
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 121,
            "movement": -52
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 148,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": -45
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 148,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "position": 15,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 115,
            "movement": -36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 145,
            "movement": 22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 166,
            "movement": 27
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 173,
            "movement": -50
          },
          {
            "country": "MW",
            "name": "Malawi",
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 96,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 84,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 85,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 96,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 20
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 113,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 141,
            "movement": -44
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 192,
            "movement": -52
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
            "position": 76,
            "movement": 6
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
            "position": 52,
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
            "position": 79,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 111,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -56
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
            "position": 48,
            "movement": -14
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 165,
            "movement": -22
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
            "position": 148,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 187,
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
            "position": 128,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "i'm a mess",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": -54
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 192,
            "movement": -40
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": -46
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 80,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 200,
            "movement": -24
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
            "position": 200,
            "movement": -2
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "IL",
            "name": "Israel",
            "position": 14,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
            "position": 78,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 140,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 180,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Waist",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 88,
            "movement": 104
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
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
            "position": 98,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 69,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 148,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DON'T LOVE ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 170,
            "movement": 21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forever",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 159,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": 15
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
            "position": 68,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 190,
            "movement": -6
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
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "reason",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 124,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ghost",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
            "position": 188,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WATER SPIRIT",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 77,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/02e3bf9a87b002f4e52e9395e8a7348b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Moving",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f913fed89932ceb56f7809aa7f811c0c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MARY GO ROUND",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
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
    "title": "Godly",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed64774f56cf5d0f3fcb8e25c9fe39f6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Soweto",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "ARTIFICIAL HAPPINESS",
    "platforms": [
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "safe haven",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
            "position": 95,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "COPING MECHANISM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
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
    "title": "As We Get High",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b4d2ad60759dd994a1a8440baa1c61e8/500x500-000000-80-0-0.jpg"
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
  