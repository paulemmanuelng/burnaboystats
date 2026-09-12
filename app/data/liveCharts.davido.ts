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
  export const liveChartsUpdated = "2026-09-12";
  
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 6,
            "movement": 38
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 22,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 31,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 0
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 52,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
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
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 10,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 18,
            "movement": -3
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
            "position": 2,
            "movement": 1
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 6,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 12,
            "movement": null,
            "status": "new"
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
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": -2
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
            "position": 5,
            "movement": -1
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
            "position": 8,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 26,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 39,
            "movement": 13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 68,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 30
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 133,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 169,
            "movement": 29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 40,
            "movement": 26
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
            "position": 75,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -4
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
            "position": 109,
            "movement": 12
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
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
            "position": 28,
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
            "position": 168,
            "movement": -138
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 4,
            "movement": 61
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 10,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 18,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 23,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 36,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": -7
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 69,
            "movement": 39
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 89,
            "movement": 22
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 102,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 128,
            "movement": -56
          },
          {
            "country": "LC",
            "name": "St. Lucia",
            "position": 140,
            "movement": -62
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": -20
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 157,
            "movement": -29
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 173,
            "movement": -22
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
            "position": 81,
            "movement": -8
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": 3
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": -6
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 92,
            "movement": 104
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 94,
            "movement": -24
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 39
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 100,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 101,
            "movement": 92
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": 19
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 116,
            "movement": 61
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -26
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 177,
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
            "country": "IL",
            "name": "Israel",
            "position": 74,
            "movement": -16
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
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 20,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 43,
            "movement": 9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 75,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
            "movement": 37
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 102,
            "movement": -16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -35
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
            "position": 96,
            "movement": -63
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
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
            "position": 21,
            "movement": -4
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
            "position": 165,
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
            "position": 17,
            "movement": 18
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
            "position": 17,
            "movement": -5
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": -5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 102,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": 61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": 40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -50
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 157,
            "movement": -15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 172,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 12,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -138
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
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 68,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 89,
            "movement": null,
            "status": "re"
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
            "position": 97,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": 41
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
            "position": 104,
            "movement": -3
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
            "country": "NG",
            "name": "Nigeria",
            "position": 23,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 32
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 59,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 61,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": 2
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 73,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 85,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": -38
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 187,
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 10,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": 32
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 21,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 95,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -44
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 102,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 147,
            "movement": -17
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
            "position": 65,
            "movement": -39
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 177,
            "movement": -34
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
            "movement": -4
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
            "position": 149,
            "movement": -139
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
            "position": 13,
            "movement": 12
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
            "movement": -10
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
            "country": "FJ",
            "name": "Fiji",
            "position": 13,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 83
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -13
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 125,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 148,
            "movement": -35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 190,
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
            "country": "KE",
            "name": "Kenya",
            "position": 101,
            "movement": -4
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
            "movement": -3
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
            "position": 68,
            "movement": 14
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
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 41,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 96,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 115,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 135,
            "movement": -15
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 150,
            "movement": 42
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 153,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 42
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 59
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 115,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 165,
            "movement": -18
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 195,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "TD",
            "name": "Chad",
            "position": 91,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 106,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 113,
            "movement": 25
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 154,
            "movement": 40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 177,
            "movement": 6
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
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
    "title": "D & G",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 38,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 64,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": -60
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 192,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": 117
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 75,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 90,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 32
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": -29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": -30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 176,
            "movement": 5
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
            "position": 51,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 86,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 68
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 151,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 159,
            "movement": 39
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 85,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 186,
            "movement": -48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -8
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
            "position": 17,
            "movement": 0
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 63,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 195,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "movement": 50
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 84,
            "movement": 50
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 171,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 58,
            "movement": 29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 66,
            "movement": 2
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
            "position": 98,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
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
            "position": 44,
            "movement": 18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": 48
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
            "position": 124,
            "movement": -24
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
            "country": "NG",
            "name": "Nigeria",
            "position": 51,
            "movement": 6
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -37
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": -36
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
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "QA",
            "name": "Qatar",
            "position": 68,
            "movement": -52
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 153,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Electricity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 85,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dd374a6d185e39c6c4f847704afc827e/500x500-000000-80-0-0.jpg"
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
            "position": 88,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 90,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 29,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "position": 125,
            "movement": -49
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
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
            "position": 57,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 131,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lover Boy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 144,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "High",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 161,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Titanium",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 173,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 178,
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
    "title": "FOR THE ROAD",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 179,
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
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 165,
            "movement": 22
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
            "position": 170,
            "movement": 28
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
    "title": "Baddest Boy",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0c0d1ba509c2a896097f11edcc957edf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Know Your Worth",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6233b002023b8914609a3d879b7817a4/500x500-000000-80-0-0.jpg"
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
  