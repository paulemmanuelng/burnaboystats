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
  export const liveChartsUpdated = "2026-08-30";
  
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 5,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 7,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 19,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 26,
            "movement": 14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 42,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": 8
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 53,
            "movement": -7
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 57,
            "movement": -20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 63,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 64,
            "movement": -9
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": -17
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 86,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 94,
            "movement": -53
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 133,
            "movement": 34
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 143,
            "movement": 10
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 187,
            "movement": -1
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
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
        "numberOnes": 4,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 2,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 11,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 12,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 9
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 39,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": -9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -17
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 116,
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
            "position": 4,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 74,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 163,
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
            "position": 3,
            "movement": 114
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
            "position": 2,
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 8,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 79,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -33
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 86,
            "movement": 29
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 96,
            "movement": 39
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 21
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
            "position": 35,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 48,
            "movement": 4
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 67,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 118,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": -13
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
            "position": 64,
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
    "title": "Timeless",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 42,
            "movement": 32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 54,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 77,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 90,
            "movement": 17
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 124,
            "movement": -37
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 145,
            "movement": -8
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 160,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 166,
            "movement": -22
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 186,
            "movement": -32
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
            "position": 10,
            "movement": 0
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 23,
            "movement": 16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 59,
            "movement": 12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": -19
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 72,
            "movement": -12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 74,
            "movement": -69
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 97,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 159,
            "movement": -61
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
            "position": 47,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 136,
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
            "position": 15,
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
            "position": 5,
            "movement": 14
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
            "position": 14,
            "movement": -3
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
            "country": "NE",
            "name": "Niger",
            "position": 29,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 5
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 54,
            "movement": 49
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 131,
            "movement": -18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 135,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 141,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 162,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 173,
            "movement": -33
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 184,
            "movement": -40
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 68,
            "movement": -14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -106
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
            "position": 95,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 178,
            "movement": 7
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
            "position": 113,
            "movement": 22
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
            "position": 51,
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
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 100,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 116,
            "movement": -28
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 141,
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
            "position": 40,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 151,
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
            "position": 25,
            "movement": 1
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
            "position": 11,
            "movement": 13
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
            "position": 22,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 50,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 63,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 69,
            "movement": 15
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 69,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -59
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 110,
            "movement": 26
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
            "position": 6,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 60,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": 28
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 89,
            "movement": 66
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -20
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 100,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 103,
            "movement": -35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 111,
            "movement": -2
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
            "position": 98,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 174,
            "movement": 5
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
            "movement": 11
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -25
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
            "position": 16,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 55,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": 13
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 106,
            "movement": -31
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": 31
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": 10
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 193,
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
    "title": "A Good Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 29,
            "movement": 100
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": 10
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": 68
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": -72
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 123,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": 24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 177,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 193,
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
    "title": "5ive",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": 94
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 79,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 23
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 92,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 102,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 135,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 197,
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
            "position": 91,
            "movement": -17
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 118,
            "movement": -28
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 172,
            "movement": 0
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
            "position": 15,
            "movement": 1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 41,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 53,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -25
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
            "position": 37,
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
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 67,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": 55
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 130,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 169,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
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
            "position": 198,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "UG",
            "name": "Uganda",
            "position": 48,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": -34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -54
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 149,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 151,
            "movement": -92
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 198,
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 65,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 87,
            "movement": -42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": 35
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 196,
            "movement": -46
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
            "position": 46,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 59,
            "movement": 65
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 143,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 166,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": 4
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
            "position": 55,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b38babe761ad3914bfd843b8c199555/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": -9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 119,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 157,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 173,
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
            "position": 76,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 70,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": -15
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
            "position": 110,
            "movement": -24
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
            "position": 80,
            "movement": -13
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
            "position": 13,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 44,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 45,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7de07d81ce22dcf5be4caa2b2b9faace/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sensational",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 131,
            "movement": 28
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 138,
            "movement": -39
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 145,
            "movement": 41
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
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
    "title": "Tell Everybody",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -20
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
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
            "position": 68,
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
            "position": 122,
            "movement": -30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 158,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 82,
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
    "title": "Yaya",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 111,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -7
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
            "position": 54,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 154,
            "movement": -63
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 171,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/594be4990d2be6af325a4a0825960a9a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 116,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 8
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
            "position": 66,
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
            "position": 77,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 123,
            "movement": 34
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
            "position": 25,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 55,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/61fc2faba453737555d0b81de1e20c6a/500x500-000000-80-0-0.jpg"
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
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 146,
            "movement": null,
            "status": "new"
          },
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/c1eb4ca22f60cab34fec32e24d805b0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Anything",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
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
    "title": "Assurance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": 16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a880bf2aaa27d39c446bd9b19effd22e/500x500-000000-80-0-0.jpg"
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
            "position": 104,
            "movement": 46
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/28cbbe0064bd5b7494523e75b6ebeb95/500x500-000000-80-0-0.jpg"
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
            "position": 110,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "FEEL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 121,
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
    "title": "Like",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": -1
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
            "position": 135,
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
    "title": "Spend Dat",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 16,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song"
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
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/95ecb7f95449cc2d447857e552353218/500x500-000000-80-0-0.jpg"
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
            "position": 184,
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
    "title": "Aye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 185,
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
    "title": "Risky",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 188,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/da0c3e984d1fa2b9c54158ee1a02fbd1/500x500-000000-80-0-0.jpg"
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
            "position": 58,
            "movement": -20
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
            "position": 180,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/08304eb172098540c635de98530d4929/500x500-000000-80-0-0.jpg"
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
            "position": 196,
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
  