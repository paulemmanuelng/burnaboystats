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
  export const liveChartsUpdated = "2026-08-27";
  
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 7,
            "movement": 118
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 8,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 29,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 32,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 47,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 53,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 58,
            "movement": 2
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": 34
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 79,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 5
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 98,
            "movement": -29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -27
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 112,
            "movement": -40
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 138,
            "movement": -64
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 146,
            "movement": -29
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 155,
            "movement": 1
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
            "country": "CV",
            "name": "Cape Verde",
            "position": 6,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 39,
            "movement": -6
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 47,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 4
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": 25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 156,
            "movement": -63
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 180,
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
            "position": 66,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 119,
            "movement": 3
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
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
            "movement": -4
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
    "title": "Boy Alone",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -1
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 44,
            "movement": 82
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 64,
            "movement": -16
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -46
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 70,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 25
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 82,
            "movement": 44
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": -11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": -55
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 113,
            "movement": -20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": -36
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 155,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 184,
            "movement": -98
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 189,
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
            "country": "BE",
            "name": "Belgium",
            "position": 68,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 45
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": 63
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 157,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": -61
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 167,
            "movement": -24
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 179,
            "movement": -47
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 189,
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
            "position": 106,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": -20
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 184,
            "movement": -13
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
            "position": 3,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 40,
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
            "position": 140,
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
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 101
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 87,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 98,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 111,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": -2
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
            "country": "SB",
            "name": "Solomon Islands",
            "position": 63,
            "movement": 46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -55
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 167,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -68
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 187,
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
            "position": 166,
            "movement": -16
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
            "country": "TD",
            "name": "Chad",
            "position": 8,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 50,
            "movement": 99
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 93,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 142,
            "movement": -21
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
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
            "country": "TN",
            "name": "Tunisia",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
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
            "position": 74,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 116,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 125,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -27
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
            "position": 83,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 116,
            "movement": -58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
            "movement": 50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": -27
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
            "movement": -1
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
            "position": 50,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 163,
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
            "position": 122,
            "movement": 7
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
            "position": 118,
            "movement": 19
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 125,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": 13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 187,
            "movement": 3
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
            "position": 71,
            "movement": 1
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
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 162,
            "movement": -60
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 192,
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
            "position": 48,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 161,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 168,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
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
            "position": 68,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -17
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
            "position": 161,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4f5c145b06c62888141b2a7eabad4b3/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 77
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 195,
            "movement": -84
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 139,
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
            "position": 93,
            "movement": 25
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
            "position": 65,
            "movement": 5
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 153,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 102,
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
    "title": "ARTIFICIAL HAPPINESS",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 89,
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
    "title": "DON'T LOVE ME – A COLORS SHOW",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/60f290691dca3993ab32ff0b9c9c262f/500x500-000000-80-0-0.jpg"
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
            "position": 172,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b38a20520a3084e0e07332273a98158a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Damn",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
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
    "title": "10 Toes",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 98,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d9cbcfdbfb5dab6a1a37aeae7039d83c/500x500-000000-80-0-0.jpg"
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
            "position": 176,
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
    "title": "Bad",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 185,
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
            "movement": 8
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
            "position": 59,
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
  