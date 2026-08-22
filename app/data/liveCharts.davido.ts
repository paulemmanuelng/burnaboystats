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
  export const liveChartsUpdated = "2026-08-22";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "Oriadé",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 2,
            "movement": 68
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 6,
            "movement": 24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 10,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": -5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 11,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 12,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 14,
            "movement": -11
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 14,
            "movement": 6
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 35,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 38,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 41,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 59,
            "movement": 33
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 69,
            "movement": 21
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 79,
            "movement": -6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 90,
            "movement": -27
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 91,
            "movement": -34
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": -25
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 103,
            "movement": -28
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 135,
            "movement": -21
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 149,
            "movement": -57
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 152,
            "movement": -40
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 160,
            "movement": -84
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 182,
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
            "country": "TR",
            "name": "Turkey",
            "position": 38,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "B4 B4",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 2,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": 0
          },
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
            "country": "CM",
            "name": "Cameroon",
            "position": 8,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": -3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 25,
            "movement": 57
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 28,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 37,
            "movement": 12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 38,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 188,
            "movement": -6
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 43,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 51,
            "movement": 2
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 66,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": 12
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 129,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 143,
            "movement": -6
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
            "position": 7,
            "movement": -4
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 108,
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
            "position": 3,
            "movement": null,
            "status": "new"
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
    "title": "I Know Who I Be",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": 0
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 29,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": -11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 55,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 63,
            "movement": -20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 69,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 80,
            "movement": -20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -21
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 99,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": -8
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 107,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 162,
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
            "position": 14,
            "movement": -1
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
            "position": 84,
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
            "position": 13,
            "movement": 2
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
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9eb91a56d2af511c4024d6eb0ee97f60/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nakupenda",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 25,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 39,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -24
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 78,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 115,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
            "movement": -22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -19
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
            "position": 53,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 54,
            "movement": -4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 65,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 114,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 123,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 131,
            "movement": 9
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
            "movement": 4
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
            "position": 83,
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
            "position": 49,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/86051e2caa464c95b96cef12d3ae570a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "With You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 99,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 150,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 156,
            "movement": -27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 158,
            "movement": -31
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
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
            "position": 116,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 167,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 185,
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
            "position": 4,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -18
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
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
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
            "position": 118,
            "movement": -8
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
            "position": 12,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": 16
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 16,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 51,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 55,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 57,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 62,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": 57
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 68,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 95,
            "movement": 14
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 97,
            "movement": -14
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 111,
            "movement": -61
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 114,
            "movement": -15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
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
            "position": 4,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 6,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 64,
            "movement": 26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 77,
            "movement": -43
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -25
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
            "position": 14,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 93,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 185,
            "movement": -41
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
            "position": 10,
            "movement": 0
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
            "position": 36,
            "movement": -22
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
            "position": 24,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 23,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 31,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 43,
            "movement": 30
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 44,
            "movement": -7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 47,
            "movement": 73
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 52,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -60
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 134,
            "movement": -50
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": -32
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
            "position": 13,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 71,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": 111
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 97,
            "movement": -13
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 111,
            "movement": 17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 156,
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
            "position": 29,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 24
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
            "position": 72,
            "movement": 4
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
            "position": 83,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 22
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
            "country": "LR",
            "name": "Liberia",
            "position": 23,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -46
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": -21
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": 18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 185,
            "movement": -50
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
            "country": "NG",
            "name": "Nigeria",
            "position": 98,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 45,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": -21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": 23
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 178,
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 120
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 73,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 106,
            "movement": -12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 178,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 199,
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
    "title": "Gimme Dat Ting",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": -11
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": -45
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 130,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
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
            "position": 46,
            "movement": -2
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
            "position": 40,
            "movement": -16
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
            "country": "NE",
            "name": "Niger",
            "position": 44,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 49,
            "movement": 22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 75,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -11
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 193,
            "movement": -87
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 58,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 66,
            "movement": 15
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 181,
            "movement": -17
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
            "position": 43,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 111,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 128,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6f5e2eeac47abb6bf1bcc293125e0016/500x500-000000-80-0-0.jpg"
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
            "position": 74,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 101,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 176,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -28
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -30
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
            "position": 80,
            "movement": 2
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
            "position": 183,
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
            "position": 34,
            "movement": -7
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
            "position": 51,
            "movement": -24
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -33
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
            "position": 101,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 195,
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
            "position": 65,
            "movement": -8
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
            "position": 98,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 14,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 47,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": 12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 61,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -17
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 129,
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
    "title": "Blow My Mind",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 85,
            "movement": -31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 158,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 196,
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
    "title": "A Better Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": 14
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 177,
            "movement": -15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 192,
            "movement": -31
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sensational",
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
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -101
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -35
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 177,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 195,
            "movement": -64
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e8b1b523f139f23bac60bc70528f386a/500x500-000000-80-0-0.jpg"
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
            "position": 71,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 94,
            "movement": -30
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
            "position": 84,
            "movement": 8
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GD",
            "name": "Grenada",
            "position": 71,
            "movement": -6
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
            "country": "LR",
            "name": "Liberia",
            "position": 81,
            "movement": -34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 99,
            "movement": -64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
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
            "position": 76,
            "movement": 4
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
            "position": 77,
            "movement": -61
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Julie",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": -27
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 128,
            "movement": -69
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -101
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
            "movement": -11
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
            "position": 90,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -32
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
            "movement": -2
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
            "position": 82,
            "movement": -54
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": -36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
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
            "position": 124,
            "movement": -12
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
            "position": 88,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": -28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 200,
            "movement": -94
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
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fans Mi",
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
            "position": 171,
            "movement": -17
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
            "position": 87,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/49e60bcc245747acb829b0a96723c176/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": -11
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
            "position": 193,
            "movement": -18
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
            "position": 57,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 157,
            "movement": 24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "My Light",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -41
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
            "position": 131,
            "movement": -8
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
            "position": 23,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 80,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": -4
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
            "position": 84,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9119c622011c2f9e2c0fd2ae9bcaec51/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 64,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Sound",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 173,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/80fe4f71f92865be0d0f8d558cf54a72/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oriade",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 63,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "AWAY",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 5
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
            "position": 73,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Maserati",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 2,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1713aad5a0a697ac1db7ce7b8a167c27/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Electricity",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 108,
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
    "title": "Like",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d50e6c1e1ff65a58b2ae4051876d7e7e/500x500-000000-80-0-0.jpg"
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
            "position": 124,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skelewu",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 89,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23726f80ac87dcce3846c3b638cba30d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Intro",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 120,
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
    "title": "Father",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 175,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/132d4358890f5675bd291681812647e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baddest Boy",
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
    "kind": "song"
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
            "position": 188,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1d5dfc880396e953e316456a394d7353/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Doe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af0fe2d45c77e4c6ce3a82432577c861/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bum Bum",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 176,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/40df9e584ee9772e237099eb66366cd1/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Very Special",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 198,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
  