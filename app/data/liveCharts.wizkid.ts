// GENERATED FILE — do not edit by hand.
  // Rebuilt hourly by scripts/build-live-charts.mjs --artist=wizkid from kworb's artist page.
  //
  // PLATFORM chart data for Wizkid: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-11";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 40,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 62,
            "movement": 4
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 75,
            "movement": 8
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 82,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 101,
            "movement": 6
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 102,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 103,
            "movement": 6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 114,
            "movement": -28
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 122,
            "movement": -4
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 122,
            "movement": 10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 124,
            "movement": -11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 127,
            "movement": 10
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 151,
            "movement": -15
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 153,
            "movement": 26
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 157,
            "movement": 11
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 157,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 170,
            "movement": -15
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 171,
            "movement": -12
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 178,
            "movement": 8
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 56,
            "movement": 6
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 67,
            "movement": -28
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 78,
            "movement": 53
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 82,
            "movement": -44
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 97,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 25
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 124,
            "movement": 5
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 137,
            "movement": 18
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -1
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 166,
            "movement": 25
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 174,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 186,
            "movement": 12
          },
          {
            "country": "CH",
            "name": "Switzerland",
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
            "country": "PL",
            "name": "Poland",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IT",
            "name": "Italy",
            "position": 135,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/56bdb7a86a27fadb96332c0c8f1b8e81/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MONEY CONSTANT",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 15,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 22,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 47,
            "movement": 34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -2
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 68,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": -49
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": 27
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 100,
            "movement": 22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 121,
            "movement": -13
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 131,
            "movement": -12
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 146,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 156,
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
            "position": 31,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 35,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": -13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 181,
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
            "position": 27,
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
            "position": 193,
            "movement": -172
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Come Closer",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 89,
            "movement": 14
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 98,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 104,
            "movement": 17
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 111,
            "movement": -44
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 173,
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
            "position": 60,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joro",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 27,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 32,
            "movement": 7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 36,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 41,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 45,
            "movement": -11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 45,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 77
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 92,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 117,
            "movement": 15
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 158,
            "movement": -106
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 187,
            "movement": -98
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 199,
            "movement": -123
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos: Deluxe Edition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 21,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 54,
            "movement": 20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 57,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": -10
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 62,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 65,
            "movement": -22
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 91,
            "movement": -54
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": -70
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": -30
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 169,
            "movement": -90
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 175,
            "movement": -49
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 190,
            "movement": -112
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BG",
            "name": "Bulgaria",
            "position": 97,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 29,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 36,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 39,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 46,
            "movement": 30
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 76,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": 57
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 146,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": -83
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": -78
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
            "position": 33,
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
            "position": 22,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 51
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 64,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 67,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 127,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 149,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 156,
            "movement": -68
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 172,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 182,
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
            "position": 84,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 74,
            "movement": -21
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 91,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 154,
            "movement": 26
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 160,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
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
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": 69
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": 48
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 100,
            "movement": -32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 102,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 119,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 150,
            "movement": -18
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 175,
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
            "position": 43,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 39,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 71,
            "movement": -21
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 79,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -26
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 139,
            "movement": -102
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 181,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 171,
            "movement": 24
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 178,
            "movement": -94
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 194,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 92,
            "movement": -16
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 112,
            "movement": -47
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 186,
            "movement": 8
          },
          {
            "country": "BS",
            "name": "The Bahamas",
            "position": 186,
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
            "position": 187,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 51,
            "movement": 41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 67,
            "movement": -42
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": -33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 142,
            "movement": -44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 165,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": -67
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 51,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 195,
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
            "position": 169,
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
            "position": 100,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": 123
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 160,
            "movement": -9
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
            "position": 62,
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
            "position": 39,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 48,
            "movement": 16
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 139,
            "movement": -21
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 178,
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
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "More Love, Less Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 33
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 103,
            "movement": -28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 164,
            "movement": 20
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 170,
            "movement": -47
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 39,
            "movement": 14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 80,
            "movement": -11
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 93,
            "movement": 51
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Essence",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 21,
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
            "position": 167,
            "movement": 9
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 146,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 159,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 188,
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
            "position": 163,
            "movement": -3
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
            "position": 74,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 123,
            "movement": -72
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
            "position": 146,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 133,
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
            "position": 117,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 160,
            "movement": -12
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
            "position": 170,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 49,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 90,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -31
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -2
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 158,
            "movement": -93
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Iskolodo",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Time",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 43,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec91c9f741208370ed9ab6b9029e90cc/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "U Don't Know",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cbd8af17625915ac863ee340498d5d9f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ebelebe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 93,
            "movement": 27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/afea1bda5fb6b9c56301ea949d4516bf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holla at Your Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 158,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "More",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": -30
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -66
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dis Love",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bc0d04683a3ba1691887cf597749de93/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "EASY WITH ME",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e5bc56dd547bcc84a47089b865230cb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Energy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 133,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Call Me Every Day",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/cc269116fe4da8b1054a18ef7f1e39a8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 162,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 185,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -158
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alive",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 165,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nights In The Sun",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a3e5df13a8fa9f76a2125b8c27dc164f/500x500-000000-80-0-0.jpg"
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
  