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
  export const liveChartsUpdated = "2026-09-15";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
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
            "position": 17,
            "movement": 122
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 86,
            "movement": 25
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 101,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -49
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 132,
            "movement": -47
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -58
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": 0
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 150,
            "movement": -75
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 151,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 167,
            "movement": -12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 193,
            "movement": -3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 195,
            "movement": -48
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 39,
            "movement": -25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": 23
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 51,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 106,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 116,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 127,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 178,
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
            "country": "SN",
            "name": "Senegal",
            "position": 164,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -93
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
            "position": 65,
            "movement": -8
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
            "position": 37,
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
            "position": 27,
            "movement": 3
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
            "country": "LR",
            "name": "Liberia",
            "position": 14,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -9
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 19,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 30,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 28
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 48,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 70,
            "movement": 104
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 80,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 122,
            "movement": 69
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": -51
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 124,
            "movement": -69
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 138,
            "movement": 53
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 161,
            "movement": 39
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 172,
            "movement": -52
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 196,
            "movement": -127
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 30,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 44,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 62,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": -43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
            "movement": 30
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 147,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 148,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 164,
            "movement": -85
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 180,
            "movement": -44
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
            "position": 48,
            "movement": 21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 64,
            "movement": 54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 159,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
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
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 18,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -12
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
            "position": 110,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 133,
            "movement": 52
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
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "movement": 13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 129,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 136,
            "movement": -34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
            "movement": -41
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
            "country": "CM",
            "name": "Cameroon",
            "position": 165,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -69
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
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": null,
            "status": "new"
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
        "platform": "Shazam",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 199,
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
            "position": 34,
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
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
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
            "position": 138,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ff869559b2b6b876cc2b7811bb7e4436/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 168,
            "movement": -62
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 190,
            "movement": -28
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 186,
            "movement": -1
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
            "position": 73,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/39ef498a2ba8764bae8c87f00ae13441/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": 71
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -50
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
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 150,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
            "movement": -57
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
            "position": 4,
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
            "position": 33,
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
    "title": "Namek",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "FR",
            "name": "France",
            "position": 76,
            "movement": 1
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 151,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/aed5606a9b6dd1485de036b6852d08ce/500x500-000000-80-0-0.jpg"
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
            "position": 115,
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
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Lo lo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
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
    "title": "Bad",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 138,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f31fc975fcb1a6ea4130d536558ecd96/500x500-000000-80-0-0.jpg"
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
            "position": 127,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d015c74bed325b8928343913858fb3c2/500x500-000000-80-0-0.jpg"
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
            "position": 157,
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
            "position": 99,
            "movement": -5
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
            "country": "BJ",
            "name": "Benin",
            "position": 199,
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": -20
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
  