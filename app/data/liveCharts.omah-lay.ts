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
  export const liveChartsUpdated = "2026-08-29";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
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
            "position": 9,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 13,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 14,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 15,
            "movement": 59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": 34
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 37,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 63
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -19
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 60,
            "movement": 52
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": -65
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -29
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": 31
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 171,
            "movement": -112
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 171,
            "movement": 23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 14,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": -1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 30,
            "movement": 76
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 92,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": 33
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 158,
            "movement": 22
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
            "position": 93,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
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
            "position": 59,
            "movement": -39
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
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Influence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 95,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
            "movement": -30
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
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 49,
            "movement": 41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 102,
            "movement": 43
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -13
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 108,
            "movement": -64
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 115,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": -51
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
            "position": 41,
            "movement": 51
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 161,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 174,
            "movement": 9
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 53,
            "movement": -7
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
            "position": 101,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 185,
            "movement": -9
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 154,
            "movement": -59
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": -153
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 196,
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
    "title": "i'm a mess",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 125
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 82,
            "movement": 79
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
            "movement": 2
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 183,
            "movement": -43
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 195,
            "movement": -8
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
            "position": 56,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": -29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": -21
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
            "position": 160,
            "movement": -28
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
            "position": 76,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": 35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": 28
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 61,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 66,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 124,
            "movement": 34
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
            "movement": -7
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 112,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 149,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 168,
            "movement": -16
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
            "position": 92,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 145,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
            "movement": null,
            "status": "new"
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
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
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
            "position": 58,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 163,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4f5c145b06c62888141b2a7eabad4b3/500x500-000000-80-0-0.jpg"
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
            "position": 75,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 180,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DON'T LOVE ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 164,
            "movement": -5
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
            "country": "TD",
            "name": "Chad",
            "position": 110,
            "movement": -52
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": 16
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
            "position": 100,
            "movement": -19
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
            "position": 164,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": -44
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 170
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 106,
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
    "title": "ARTIFICIAL HAPPINESS",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 179,
            "movement": -28
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -5
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
            "position": 90,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "reason",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 161,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
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
            "position": 61,
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
  