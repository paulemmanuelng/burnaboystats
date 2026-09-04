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
  export const liveChartsUpdated = "2026-09-04";
  
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
            "position": 9,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 16,
            "movement": 52
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
            "position": 20,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 37,
            "movement": -3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 38,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 38
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 55,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 92,
            "movement": 47
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 120,
            "movement": 18
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
            "position": 114,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 164,
            "movement": -5
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
            "position": 46,
            "movement": 6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 8,
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
            "position": 46,
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
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 12,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 38
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 17,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": -2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 34,
            "movement": 79
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 47,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 42
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 64,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 175,
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
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 161
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 42,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": 49
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 65,
            "movement": -22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 77,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 98,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": 35
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 134,
            "movement": 23
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 141,
            "movement": 20
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 147,
            "movement": -25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 168,
            "movement": -100
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
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
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 71,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 9
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 100,
            "movement": -23
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 123,
            "movement": 38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 146,
            "movement": 20
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 148,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 151,
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
            "position": 156,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
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
            "position": 45,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 97
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 77,
            "movement": -24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 142,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 193,
            "movement": -3
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
            "position": 90,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": 20
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
            "position": 18,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": null,
            "status": "re"
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
            "position": 97,
            "movement": 27
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
            "position": 77,
            "movement": -30
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 84,
            "movement": 33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 99,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 167,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 176,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 179,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 145,
            "movement": 3
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
            "position": 68,
            "movement": 100
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": 71
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 191,
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
            "position": 80,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": 17
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
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 137,
            "movement": -30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": -67
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
            "position": 134,
            "movement": -28
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
            "country": "SN",
            "name": "Senegal",
            "position": 98,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 105,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 151,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 153,
            "movement": 25
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
            "position": 91,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ada9bcfee9900dd72f862562ae032550/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "As We Get High",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NL",
            "name": "Netherlands",
            "position": 168,
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
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
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
            "movement": -48
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b4d2ad60759dd994a1a8440baa1c61e8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Waist",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 3
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
            "position": 55,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "soso",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 105,
            "movement": 67
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
            "movement": -138
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e51306cd0211b33a043b1fef073026e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DON'T LOVE ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": 50
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 193,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "position": 74,
            "movement": -6
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 128,
            "movement": 7
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
            "position": 103,
            "movement": 7
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
            "position": 92,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 136,
            "movement": -16
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
            "position": 62,
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
    "title": "Damn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 145,
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
    "title": "HOLY GHOST",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 197,
            "movement": -79
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
            "position": 60,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 158,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Moving",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 50,
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
    "title": "CANADA BREEZE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 98,
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
    "title": "ARTIFICIAL HAPPINESS",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -1
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
            "position": 186,
            "movement": -1
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
            "position": 92,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "attention",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
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
    "title": "understand",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ebaba8c1ec645c396628a92f7aca871b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 198,
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
    "title": "reason",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/fc81a1daef5228b3e31fb1f37bc1ad67/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "People",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dda3f7dc6c530814d51c9cb6eca57be/500x500-000000-80-0-0.jpg"
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
  