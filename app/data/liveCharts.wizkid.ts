// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=wizkid from kworb's artist page.
  //
  // PLATFORM chart data for Wizkid: where each release is sitting RIGHT
  // NOW on Spotify, Apple Music, iTunes, Deezer, Shazam and YouTube country
  // charts. This is not official-chart data — the official national peaks that
  // feed the site's headline totals live elsewhere, and the two are kept apart
  // on purpose.
  
  import { countriesOf } from "../lib/liveChartMeta";
  
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
  export const liveChartsUpdated = "2026-10-13";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-13T22:48Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "One Dance",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 40,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 44,
            "movement": -16
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 50,
            "movement": 1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 51,
            "movement": -8
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 77,
            "movement": 46
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 117,
            "movement": 30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": 4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 130,
            "movement": -73
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 135,
            "movement": -47
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 139,
            "movement": 28
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 141,
            "movement": -20
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": -40
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 167,
            "movement": -30
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 170,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 180,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 189,
            "movement": -10
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
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
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 33,
            "movement": 5
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 65,
            "movement": 2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 91,
            "movement": -4
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 96,
            "movement": -23
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 109,
            "movement": 0
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 109,
            "movement": -8
          },
          {
            "country": "US",
            "name": "United States",
            "position": 109,
            "movement": -13
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 115,
            "movement": 61
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 140,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 152,
            "movement": 6
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 154,
            "movement": -22
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 156,
            "movement": -28
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 156,
            "movement": -7
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 159,
            "movement": 10
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 172,
            "movement": -63
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 173,
            "movement": -34
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 176,
            "movement": -11
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PA",
            "name": "Panama",
            "position": 197,
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
            "country": "AT",
            "name": "Austria",
            "position": 183,
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
            "country": "NE",
            "name": "Niger",
            "position": 7,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 39,
            "movement": -24
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 41,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 82,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 85,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 115,
            "movement": 8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 132,
            "movement": -40
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 152,
            "movement": 12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 172,
            "movement": -65
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 189,
            "movement": -14
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
            "position": 53,
            "movement": 1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 57,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": -2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 107,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 112,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 127,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -9
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
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 62,
            "movement": -14
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
            "position": 55,
            "movement": 1
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 38,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 40,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 51,
            "movement": -29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 68
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 79,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 89,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 100,
            "movement": 27
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 134,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 164,
            "movement": -27
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 196,
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
            "position": 3,
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
            "position": 156,
            "movement": 1
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
            "country": "TD",
            "name": "Chad",
            "position": 7,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 50,
            "movement": 18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 57,
            "movement": 12
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 59,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": -17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 87,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 117,
            "movement": -51
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 121,
            "movement": 33
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 138,
            "movement": 39
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 143,
            "movement": 16
          },
          {
            "country": "DM",
            "name": "Dominica",
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
            "position": 78,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 85,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b1eb19b96a5e2985053b8bef3138498f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": 2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 62,
            "movement": -22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": 102
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": 29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": 29
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 144,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": -49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 173,
            "movement": -77
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
            "position": 22,
            "movement": -1
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
            "position": 47,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 7
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -10
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
            "position": 20,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 94
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 58,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 63,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 77,
            "movement": -31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -42
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 154,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 172,
            "movement": -19
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
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
            "country": "KE",
            "name": "Kenya",
            "position": 33,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 36,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 53,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 56,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 85,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 88,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 101,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 124,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
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
            "position": 62,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 18,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 19,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 29,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 90,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 95,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 124,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 128,
            "movement": -30
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 136,
            "movement": 32
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 143,
            "movement": -58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 152,
            "movement": 42
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": -1
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 40,
            "movement": 145
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -29
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 93,
            "movement": 52
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 106,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -22
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 168,
            "movement": -43
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 54
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 109,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 113,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 140,
            "movement": 50
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 24,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 47,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 178,
            "movement": 5
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 48,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 94,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 97,
            "movement": 22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 108,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 76,
            "movement": 23
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 115,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 190,
            "movement": -51
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
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 24,
            "movement": 97
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 58,
            "movement": -21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": -33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -51
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": -7
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 132,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": -9
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 76,
            "movement": -15
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 85,
            "movement": -12
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -24
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 94,
            "movement": 78
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 135,
            "movement": 49
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -7
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 198,
            "movement": -38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
            "movement": -17
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
            "position": 181,
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
            "position": 116,
            "movement": -97
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": -21
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 118,
            "movement": 61
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 150,
            "movement": -51
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 199,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 73,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 169,
            "movement": -31
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 85,
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
            "position": 142,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
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
            "position": 36,
            "movement": -3
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 144,
            "movement": -40
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 88,
            "movement": 3
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
            "movement": -5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
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
            "position": 86,
            "movement": 3
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
            "position": 50,
            "movement": null,
            "status": "re"
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
            "country": "CM",
            "name": "Cameroon",
            "position": 88,
            "movement": -3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 98,
            "movement": 9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 164,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 188,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Made In Lagos",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": 0
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 85,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 96,
            "movement": 0
          }
        ]
      },
      {
        "platform": "Spotify Albums",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": -3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 52,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
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
            "position": 188,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": -21
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
            "position": 106,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
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
            "position": 108,
            "movement": -4
          },
          {
            "country": "CV",
            "name": "Cape Verde",
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
            "position": 37,
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
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 96,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
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
            "position": 161,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Don't Dull",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
            "movement": -9
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
            "position": 39,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "The Matter",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 128,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5956f4fdf351532267e5538e2373615b/500x500-000000-80-0-0.jpg"
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
            "position": 9,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/19a1c3f3be9c5bc9f76b78e60302e989/500x500-000000-80-0-0.jpg"
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
            "position": 120,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Totori",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 123,
            "movement": -16
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/75b1090ea3e3c3521e8d82009a8b1b7d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SN",
            "name": "Senegal",
            "position": 105,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Holla at Your Boy",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
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
            "position": 193,
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
    "title": "Energy",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PAMI",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 97,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/bd76a1b1daca04cea85edf1c9b022a27/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mighty Wine",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 91,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 109,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fever",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 173,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f4b6e3fe68fe1e1f8bcc5749bddf2955/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessed",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 99,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Slow Whine",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 181,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1079769bab009299da36d7680437e608/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos to Kampala",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": 18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
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
            "position": 154,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
  // Counted by the site's own rule (app/lib/liveChartMeta.ts): kworb labels
  // Britain "UK" on five platforms and "GB" on Spotify's, and emits "WW" for
  // its worldwide chart. A raw code count claimed the UK twice and the world
  // as a nation — the share card said 151 countries where the page said 149.
  export const liveCountryCount = countriesOf(
    liveCharts.flatMap((r) => r.platforms.flatMap((p) => p.entries))
  );
  
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
  