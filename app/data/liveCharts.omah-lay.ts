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
  export const liveChartsUpdated = "2026-09-05";
  
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
            "position": 7,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": 2
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 24,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -9
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 59,
            "movement": -42
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 62,
            "movement": 2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 67,
            "movement": 81
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 72,
            "movement": -55
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": -35
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 85,
            "movement": -11
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": 43
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TJ",
            "name": "Tajikistan",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 128,
            "movement": -6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 133,
            "movement": -99
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 141,
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
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 31,
            "movement": -15
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 37,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": -5
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 104,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": -7
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
            "position": 43,
            "movement": 3
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
            "position": 34,
            "movement": -26
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
            "position": 64,
            "movement": -18
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
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 4
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -24
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 104,
            "movement": 42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 109,
            "movement": -24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": -45
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 10
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 146,
            "movement": -57
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 189,
            "movement": -66
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 13
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 59,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": -28
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 115,
            "movement": -54
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -23
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": 3
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
            "position": 17,
            "movement": 1
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
            "position": 96,
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
            "position": 97,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 62,
            "movement": 85
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 71
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -50
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 77,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 24
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 112,
            "movement": -14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 130,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 133,
            "movement": -56
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 149,
            "movement": -84
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 48,
            "movement": 42
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": 27
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": 13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 174,
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
            "position": 144,
            "movement": 1
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 100,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 134,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 139,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 150,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": -32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 185,
            "movement": -12
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
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
            "position": 28,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": -24
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
            "position": 152,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b4d2ad60759dd994a1a8440baa1c61e8/500x500-000000-80-0-0.jpg"
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": -2
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
            "position": 62,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": 39
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 127,
            "movement": -67
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 192,
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
            "position": 133,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
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
            "position": 78,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 105,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 107,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 158,
            "movement": -19
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
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -71
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
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
            "country": "ZA",
            "name": "South Africa",
            "position": 134,
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
    "title": "Waist",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 73
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
            "movement": -83
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
            "position": 54,
            "movement": 1
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 127,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 197,
            "movement": -4
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
            "position": 85,
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
    "title": "Holy Ghost",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "OM",
            "name": "Oman",
            "position": 153,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 185,
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
            "movement": -1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 141,
            "movement": -13
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
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": 10
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
            "position": 113,
            "movement": -10
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
            "position": 76,
            "movement": 16
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
    "title": "ARTIFICIAL HAPPINESS",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 178,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "People",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ID",
            "name": "Indonesia",
            "position": 183,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dda3f7dc6c530814d51c9cb6eca57be/500x500-000000-80-0-0.jpg"
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
            "position": 89,
            "movement": 3
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
    "title": "WATER SPIRIT",
    "platforms": [
      {
        "platform": "iTunes",
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
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
            "movement": -8
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
  