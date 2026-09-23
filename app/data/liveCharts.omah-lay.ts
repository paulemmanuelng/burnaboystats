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
  export const liveChartsUpdated = "2026-09-23";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-23T07:50Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 12,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 39,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 40,
            "movement": 123
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 46,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -39
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 85,
            "movement": -59
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 111,
            "movement": 32
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 125,
            "movement": -16
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 126,
            "movement": -87
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 146,
            "movement": 36
          },
          {
            "country": "PT",
            "name": "Portugal",
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
            "position": 12,
            "movement": -3
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
            "country": "LR",
            "name": "Liberia",
            "position": 19,
            "movement": -17
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 39,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -38
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": -22
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 96,
            "movement": -24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 101,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 110,
            "movement": -5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": 72
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 130,
            "movement": 2
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 185,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 188,
            "movement": -45
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 194,
            "movement": -24
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
            "position": 32,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": 134
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -16
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 139,
            "movement": 49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": -21
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
            "movement": -33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
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
            "position": 72,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
            "movement": -24
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
            "position": 11,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 36,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 61,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -45
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 119,
            "movement": -39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 151,
            "movement": -29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 190,
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
            "position": 74,
            "movement": 1
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
            "position": 174,
            "movement": 1
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 72,
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
            "position": 47,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 90,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 121,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 184,
            "movement": -90
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": 170
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": 132
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 38,
            "movement": -14
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
            "position": 142,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 139,
            "movement": 2
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 0
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
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": -42
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": -26
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -37
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
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
            "position": 156,
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
            "position": 79,
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
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ML",
            "name": "Mali",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": -64
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 197,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "AZ",
            "name": "Azerbaijan",
            "position": 44,
            "movement": -14
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 90,
            "movement": 37
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 162,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
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
            "position": 136,
            "movement": -18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 190,
            "movement": -1
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
            "position": 81,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 165,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "As We Get High",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 33,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -39
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b4d2ad60759dd994a1a8440baa1c61e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MY HEALER",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 98,
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
            "position": 162,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Company",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": null,
            "status": "new"
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6d9ca878974f4d47b8d671a0ea95ecd2/500x500-000000-80-0-0.jpg"
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
            "position": 68,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 186,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Waist",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -2
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
            "position": 136,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DON'T LOVE ME",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 166,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "movement": -2
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
            "position": 134,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Moving",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "YE",
            "name": "Yemen",
            "position": 64,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f913fed89932ceb56f7809aa7f811c0c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Godly",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 80,
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
    "title": "Tonight",
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
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1a9dbee3a264aea0fb54aef116dfd507/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WATER SPIRIT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 120,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "CANADA BREEZE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 125,
            "movement": -32
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "HOLY GHOST",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 159,
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
    "title": "10 Toes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
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
            "position": 176,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Hello Brother",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ef0cdba98ec2ded511a923054520c656/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MARY GO ROUND",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
  