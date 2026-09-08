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
  export const liveChartsUpdated = "2026-09-08";
  
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
            "position": 23,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 51,
            "movement": 3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 51,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 59,
            "movement": 9
          },
          {
            "country": "US",
            "name": "United States",
            "position": 63,
            "movement": -7
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 78,
            "movement": -1
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 86,
            "movement": 12
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 91,
            "movement": -18
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 96,
            "movement": 5
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 99,
            "movement": 4
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 102,
            "movement": -3
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 105,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 113,
            "movement": 16
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 113,
            "movement": 17
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 117,
            "movement": -6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 117,
            "movement": -22
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 126,
            "movement": 2
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 130,
            "movement": 4
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 155,
            "movement": -2
          },
          {
            "country": "SG",
            "name": "Singapore",
            "position": 172,
            "movement": -24
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 174,
            "movement": 4
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 186,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 200,
            "movement": -7
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
            "country": "BH",
            "name": "Bahrain",
            "position": 59,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 73,
            "movement": -16
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 101,
            "movement": -5
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 113,
            "movement": 32
          },
          {
            "country": "MM",
            "name": "Myanmar",
            "position": 116,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 137,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": -33
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 147,
            "movement": 44
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 175,
            "movement": -14
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 185,
            "movement": -17
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 186,
            "movement": -5
          },
          {
            "country": "TN",
            "name": "Tunisia",
            "position": 198,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 200,
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
            "position": 186,
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
            "country": "PH",
            "name": "Philippines",
            "position": 59,
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
            "position": 2,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 55,
            "movement": -19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 85,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 116,
            "movement": -17
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 120,
            "movement": 35
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 125,
            "movement": -3
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 137,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 150,
            "movement": 32
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
            "position": 28,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 44,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 76,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 101,
            "movement": -7
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
            "position": 31,
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
            "position": 86,
            "movement": -83
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
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 12,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 66,
            "movement": -11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 90,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": 25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": 18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 126,
            "movement": 37
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 146,
            "movement": -25
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 165,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
            "movement": -90
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 198,
            "movement": -31
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 92,
            "movement": null,
            "status": "new"
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 37,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 40,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 63,
            "movement": 46
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 72,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 86,
            "movement": 9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 94,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": -1
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 171,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": -12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 191,
            "movement": -64
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 61,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": 22
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 97,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 150,
            "movement": 10
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 76
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": -57
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 71,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 72,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 103,
            "movement": -17
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -13
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 158,
            "movement": -37
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 184,
            "movement": -65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 191,
            "movement": 2
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
            "movement": -3
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 95
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 65,
            "movement": -57
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 173,
            "movement": -26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 199,
            "movement": -76
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
            "position": 54,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 16,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 57,
            "movement": 15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 115,
            "movement": -64
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": 53
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 130,
            "movement": -28
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 188,
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
            "country": "BG",
            "name": "Bulgaria",
            "position": 58,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 60,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 86,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 94,
            "movement": -19
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 110,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 112,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -82
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": 31
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 187,
            "movement": 6
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
            "position": 92,
            "movement": 14
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
            "position": 15,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 13,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -5
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": -1
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 124,
            "movement": -31
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 22,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 43,
            "movement": 25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 50,
            "movement": -14
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 69,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 91,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": 36
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 112,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 138,
            "movement": -102
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 170,
            "movement": -83
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 183,
            "movement": -32
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 190,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 54,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 104,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 141,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 153,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 169,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 70
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 83,
            "movement": -24
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 129,
            "movement": -50
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 183,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 191,
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
            "position": 159,
            "movement": -14
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
            "position": 70,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 36
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
            "movement": -9
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 62,
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
            "position": 56,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -21
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 148,
            "movement": 37
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 75,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 96,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": -19
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
            "position": 106,
            "movement": -88
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 78,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 100,
            "movement": -59
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 106,
            "movement": -25
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 115,
            "movement": -1
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 192,
            "movement": -94
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "DM",
            "name": "Dominica",
            "position": 155,
            "movement": -57
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 185,
            "movement": 1
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 193,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 27,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": 28
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
            "position": 132,
            "movement": -4
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
            "position": 73,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
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
            "position": 119,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "IL",
            "name": "Israel",
            "position": 88,
            "movement": null,
            "status": "new"
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
            "position": 174,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 22,
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
            "position": 194,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 90,
            "movement": -4
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 91,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 85,
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
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 137,
            "movement": 0
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
            "position": 198,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 155,
            "movement": 13
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
            "position": 115,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Call Me Every Day",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
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
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 46,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 144,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nowo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 76,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/7498fe9018c0f5133ccf398df5edaac2/500x500-000000-80-0-0.jpg"
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
            "position": 21,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ec91c9f741208370ed9ab6b9029e90cc/500x500-000000-80-0-0.jpg"
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
            "position": 100,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 104,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Drogba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b5c2e2be723408f28befdd7a53e1c64a/500x500-000000-80-0-0.jpg"
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
            "position": 70,
            "movement": -28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
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
            "position": 112,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/27ab85a0fa9ffa1c5a337c8e8ce43194/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid ​(f​eat​. Asake, Wizkid, Skillibeng​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "No Stress",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 142,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/31566a105920b61a40e268a4b8997791/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Anxious",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BB",
            "name": "Barbados",
            "position": 90,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bc2fb454695d80d8c78f43478549c26f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oshe",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/c2155cc0c6043fe98970ef934de897c7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Low",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/aee8b9b05ce18a4c68b9c061c936f791/500x500-000000-80-0-0.jpg"
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
    "title": "COCA BODY",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 142,
            "movement": -118
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d29154f5a62852850a946c85673fe9fc/500x500-000000-80-0-0.jpg"
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
  