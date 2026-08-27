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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 21
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 35,
            "movement": 153
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 56,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -8
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 69,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 72,
            "movement": -26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": -46
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": 51
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 107,
            "movement": -101
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 108,
            "movement": -66
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -42
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 125,
            "movement": -26
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 129,
            "movement": -66
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": 7
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 161,
            "movement": -136
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 165,
            "movement": -135
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 11,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 15,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 42,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 1
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 53,
            "movement": 56
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 83,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": -59
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 161,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 166,
            "movement": -22
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
            "position": 40,
            "movement": 7
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
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 96,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 103,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 124,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 138,
            "movement": 49
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 143,
            "movement": 25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 167,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 174,
            "movement": -53
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 36,
            "movement": -6
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
            "position": 127,
            "movement": 17
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": 88
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": 102
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 43,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 76,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": 28
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 93,
            "movement": 40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": -22
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 107,
            "movement": 69
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 126,
            "movement": -80
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 126,
            "movement": 58
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 180,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 32,
            "movement": -8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": -8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 98,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": -33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 162,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
            "movement": 2
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
            "country": "LR",
            "name": "Liberia",
            "position": 60,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -29
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 109,
            "movement": 82
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 145,
            "movement": -19
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
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
            "position": 150,
            "movement": 18
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
            "country": "OM",
            "name": "Oman",
            "position": 88,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 48
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 149,
            "movement": -11
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
    "title": "Get Layd - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": -80
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 173,
            "movement": -37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "MY HEALER",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 74
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 190,
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
            "position": 129,
            "movement": 2
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
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 80,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": -10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 125,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": 69
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f5c91242bfb5ed7be4ccb2b435b6f7f/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 171,
            "movement": -96
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 187,
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
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 65,
            "movement": 5
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
            "position": 94,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 122,
            "movement": -20
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 140,
            "movement": 44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": -40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": 26
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
            "position": 195,
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
            "position": 148,
            "movement": null,
            "status": "new"
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
            "position": 64,
            "movement": 3
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 153,
            "movement": 0
          },
          {
            "country": "DZ",
            "name": "Algeria",
            "position": 165,
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
    "title": "DON'T LOVE ME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": 28
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
            "position": 173,
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
    "title": "Isaka II",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 9
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
            "position": 115,
            "movement": 79
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
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c9d87c5a3f02efbf52b0a27d553f1a87/500x500-000000-80-0-0.jpg"
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
            "position": 156,
            "movement": -7
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 146,
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
            "movement": -6
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
  