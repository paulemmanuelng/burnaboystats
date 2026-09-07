// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=davido from kworb's artist page.
  //
  // PLATFORM chart data for Davido: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-07";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 3,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 1,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 80,
            "movement": -10
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 82,
            "movement": 81
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -4
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
            "position": 7,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 17,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 72,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": -4
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 88,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 130,
            "movement": 6
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 169,
            "movement": -24
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
            "position": 12,
            "movement": 167
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 76,
            "movement": -23
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Spotify",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
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
            "position": 4,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nakupenda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 52
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 98,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 119,
            "movement": 15
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 42,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 43,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 88,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 106,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 121,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -9
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": null,
            "status": "re"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 22,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
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
            "position": 32,
            "movement": 1
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
            "position": 141,
            "movement": -98
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 5,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 10,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 35,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 50,
            "movement": -2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 79,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 97,
            "movement": -23
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 101,
            "movement": 25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 105,
            "movement": -63
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 111,
            "movement": -12
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 116,
            "movement": -13
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": 2
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 128,
            "movement": -56
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 145,
            "movement": -49
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 169,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 52,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 82,
            "movement": -17
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 92,
            "movement": -53
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": 85
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": 25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 132,
            "movement": -96
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 139,
            "movement": 27
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 146,
            "movement": -49
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 181,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": -9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 46,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": 28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": 7
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
            "position": 55,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
            "movement": 4
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
            "position": 21,
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
            "position": 41,
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
            "position": 38,
            "movement": 0
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
            "position": 12,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 21,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 47,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 53,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 75,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 122,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 152,
            "movement": -60
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 189,
            "movement": -21
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
            "position": 5,
            "movement": 100
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
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
            "position": 14,
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
            "position": 95,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "UNAVAILABLE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 31,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 19
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": -22
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 149,
            "movement": -101
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 12,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 67,
            "movement": 40
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": 12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 104,
            "movement": 10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
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
            "position": 43,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 143,
            "movement": -8
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
            "position": 35,
            "movement": 0
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
            "position": 44,
            "movement": 0
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
            "position": 41,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "KANTE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 18,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": 8
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 84,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 114,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 115,
            "movement": 17
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 130,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": -55
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": 15
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
            "position": 69,
            "movement": -1
          }
        ]
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holy Ground",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 31,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 95,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 110,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 114,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -55
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 127,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 8,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 25
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 109,
            "movement": 20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 129,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 132,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 160,
            "movement": 27
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": 129
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -25
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 38
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
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
            "position": 176,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 104,
            "movement": -32
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 116,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 130,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 133,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 11
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 194,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 194,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 57,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": 28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": -73
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fall",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 174,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 198,
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 18,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 48,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 62,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -20
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 87,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 178,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 194,
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
            "country": "AI",
            "name": "Anguilla",
            "position": 53,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": 43
          },
          {
            "country": "AI",
            "name": "Anguilla",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 179,
            "movement": -54
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 193,
            "movement": -5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 200,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": -38
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 195,
            "movement": -142
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
            "position": 75,
            "movement": -8
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
            "position": 43,
            "movement": 0
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
            "position": 94,
            "movement": -38
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Champion Sound",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 159,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "If",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 16,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 51,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 62,
            "movement": 15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 85,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amazing Grace",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 112,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 116,
            "movement": -20
          }
        ]
      },
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": -59
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
            "position": 63,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 108,
            "movement": -14
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
            "position": 82,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "On The Road",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 91,
            "movement": 67
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -1
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
            "position": 89,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "OVER DEM",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 145,
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
            "country": "BW",
            "name": "Botswana",
            "position": 79,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Best",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Funds",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 196,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 4
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FIA",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Constantly",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Guide",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 89
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Zanzibar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Like",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Julie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 140,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dami Duro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 163,
            "movement": -130
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FOR YOU",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 108,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed05b8ce0b7f23d98282ed515664c286/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Spend Dat",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 74
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/eeedaecd7be328ebce48a16701042891/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 187,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gallardo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 123,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7e868a4868f2dbf0ca02ccab6c1166fe/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gobe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -89
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d7997ace25abd1a5cf1a8ae8d541a52a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Maserati",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": -122
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dun Rich",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 154,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f964c43946dc4486205f00b98a75176d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/329ae36eecf839ca2e82a46203a10cbc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Activate",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Son of Mercy - EP",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/50d12a3358fb88c810b8c9231ced0cd6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriade",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 149,
            "movement": -49
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
  