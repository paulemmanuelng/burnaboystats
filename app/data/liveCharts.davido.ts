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
  export const liveChartsUpdated = "2026-09-05";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 4,
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
            "country": "NG",
            "name": "Nigeria",
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
            "country": "MW",
            "name": "Malawi",
            "position": 9,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 34,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 35,
            "movement": 69
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 64,
            "movement": -14
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 67,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 68,
            "movement": -45
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": -10
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
            "position": 35,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -26
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 175,
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
            "position": 5,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 10,
            "movement": -3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 13,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 22,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 24,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 41,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 1
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 53,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": 76
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 71,
            "movement": -4
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 74,
            "movement": 68
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 86,
            "movement": -28
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 95,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": -19
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 111,
            "movement": -37
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": -55
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 115,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 121,
            "movement": -45
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 136,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 193,
            "movement": 3
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 198,
            "movement": -162
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
            "position": 100,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
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
            "position": 10,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 23,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": -8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 27,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 98,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -23
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 147,
            "movement": 31
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 182,
            "movement": -8
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
            "position": 31,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 5,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -36
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 72,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 83,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -29
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 139,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 161,
            "movement": 26
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
            "position": 16,
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
            "position": 48,
            "movement": -29
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
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 27,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -16
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 47,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 57,
            "movement": 93
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 61,
            "movement": 14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": -9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 64,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 79,
            "movement": 19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 104,
            "movement": -12
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 141,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 165,
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
    "title": "Already Falling",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 65,
            "movement": -25
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 74,
            "movement": 14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": -35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": -41
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -18
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
            "position": 30,
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
            "position": 16,
            "movement": -3
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
            "position": 93,
            "movement": -25
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 37
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": 26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 52,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -10
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -24
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 88,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": -40
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 199,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 76,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -24
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 123,
            "movement": 34
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 137,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 139,
            "movement": 5
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": -9
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
            "position": 68,
            "movement": -2
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
            "position": 17,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 0
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
            "position": 59,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 103,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 113,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 121,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -11
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
            "position": 72,
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
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -37
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 87,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": -18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 185,
            "movement": -88
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
            "position": 183,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 199,
            "movement": null,
            "status": "new"
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
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 125,
            "movement": 55
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -31
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 186,
            "movement": -19
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 197,
            "movement": -43
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
            "country": "MW",
            "name": "Malawi",
            "position": 30,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 52,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": -14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9fd1fc1b331838b6b0ba9b2eacbf31e/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 110,
            "movement": 16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 177,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 181,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -50
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 106
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 46
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 140,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": -63
          },
          {
            "country": "TD",
            "name": "Chad",
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
    "title": "Fall",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 13,
            "movement": 3
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 53,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": -4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 91,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 29
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": -53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -19
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 1,
        "entries": [
          {
            "country": "SG",
            "name": "Singapore",
            "position": 1,
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
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 47,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 92,
            "movement": 25
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": -19
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
            "position": 70,
            "movement": 1
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
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 32
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 118,
            "movement": 23
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 164,
            "movement": 36
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 166,
            "movement": -44
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 3
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
            "position": 56,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 74,
            "movement": -9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 81,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 95,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 155,
            "movement": 13
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
            "position": 140,
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
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 154,
            "movement": -40
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 176,
            "movement": 4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 189,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 117,
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
            "position": 47,
            "movement": -26
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
            "position": 53,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 156,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": 19
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
            "position": 74,
            "movement": -33
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 135,
            "movement": -16
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
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 119,
            "movement": 9
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
            "position": 55,
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
            "position": 190,
            "movement": 6
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 190,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d7997ace25abd1a5cf1a8ae8d541a52a/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": 58
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
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
            "position": 28,
            "movement": 76
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ed05b8ce0b7f23d98282ed515664c286/500x500-000000-80-0-0.jpg"
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
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
    "title": "Maserati",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
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
            "position": 153,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 163,
            "movement": -57
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Shakabulizzy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 166,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/acd552a8f2ba4e9f448a876eacb65d4d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
    "title": "La La",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Guide",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PICASSO",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
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
    "title": "Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 170,
            "movement": null,
            "status": "new"
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
            "position": 185,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Odo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Baba Olowo: The Genesis",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/798485d74c5c9cd451070cd502092ea6/500x500-000000-80-0-0.jpg"
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
  