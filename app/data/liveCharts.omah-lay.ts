// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=omah-lay from kworb's artist page.
  //
  // PLATFORM chart data for Omah Lay: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
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
  export const liveChartsUpdated = "2026-08-30";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 41,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 124,
            "movement": -94
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 141,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": -77
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
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
            "position": 47,
            "movement": 6
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
            "position": 92,
            "movement": -33
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
            "position": 61,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
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
            "position": 12,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 4
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 34,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 34,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 80,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": -45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": -30
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 104,
            "movement": -20
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 165,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 165,
            "movement": -74
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 171,
            "movement": -92
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 182,
            "movement": -76
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
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 150
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 45,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 46,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": 74
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 26
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 85,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 108,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": 11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 128,
            "movement": 12
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 137,
            "movement": 18
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 158,
            "movement": -56
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 175,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 54,
            "movement": 49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -40
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
            "position": 68,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -106
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
            "position": 95,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
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
            "position": 113,
            "movement": 22
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
            "position": 16,
            "movement": -1
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
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 49,
            "movement": 30
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": 19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 73,
            "movement": 36
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": 33
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
            "movement": -51
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 142,
            "movement": 26
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 178,
            "movement": -7
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 199,
            "movement": -70
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
            "position": 174,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 82
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 83,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 175,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 195,
            "movement": -41
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
            "position": 46,
            "movement": 36
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 96,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": 54
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": 22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 167,
            "movement": 10
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
    "title": "Infinity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 116,
            "movement": 44
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 126,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 137,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 154,
            "movement": -19
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Forever",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 105,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 142,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 143,
            "movement": 25
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
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": 24
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 125,
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
            "position": 101,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gut Genug",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -22
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
            "position": 199,
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
            "position": 180,
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
            "position": 51,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4f5c145b06c62888141b2a7eabad4b3/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
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
            "position": 91,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
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
            "position": 55,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 129,
            "movement": 56
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -56
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
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
            "position": 80,
            "movement": -4
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 194,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
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
            "position": 106,
            "movement": -6
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
            "position": 138,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "reason",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
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
            "position": 157,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
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
            "position": 163,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
    "title": "WATER SPIRIT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 25,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "COPING MECHANISM",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ghost",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b4fd7e67b985be9489dbf58dc74497b/500x500-000000-80-0-0.jpg"
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
            "position": 63,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "People",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
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
  export const liveCountryCount = new Set(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries.map((e) => e.country)))
  ).size;
  
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
  