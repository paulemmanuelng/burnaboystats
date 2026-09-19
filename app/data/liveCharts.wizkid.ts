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
  export const liveChartsUpdated = "2026-09-19";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-19T01:41Z";
  
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
            "position": 42,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -14
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 48,
            "movement": 65
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 54,
            "movement": 18
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 56,
            "movement": -14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 80,
            "movement": -41
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 81,
            "movement": 40
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 104,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 138,
            "movement": -72
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 175,
            "movement": -30
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 176,
            "movement": -40
          },
          {
            "country": "LK",
            "name": "Sri Lanka",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 177,
            "movement": -76
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 181,
            "movement": -10
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 182,
            "movement": 4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 188,
            "movement": -57
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 198,
            "movement": -89
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
            "position": 34,
            "movement": -1
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": 0
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 72,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 79,
            "movement": -1
          },
          {
            "country": "US",
            "name": "United States",
            "position": 82,
            "movement": 6
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 96,
            "movement": 22
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 96,
            "movement": 3
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 97,
            "movement": 6
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 108,
            "movement": 8
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 114,
            "movement": 56
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 114,
            "movement": 11
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 121,
            "movement": 18
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 129,
            "movement": 13
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 143,
            "movement": 18
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 151,
            "movement": 2
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 170,
            "movement": 3
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 173,
            "movement": 6
          },
          {
            "country": "KZ",
            "name": "Kazakhstan",
            "position": 173,
            "movement": 8
          },
          {
            "country": "DK",
            "name": "Denmark",
            "position": 189,
            "movement": 9
          },
          {
            "country": "BE",
            "name": "Belgium",
            "position": 192,
            "movement": -12
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 196,
            "movement": -82
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KR",
            "name": "South Korea",
            "position": 64,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 77,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MA",
            "name": "Morocco",
            "position": 94,
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
            "position": 2,
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 23,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 24,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 27,
            "movement": -16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 31,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 33,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": -14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 72,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 79,
            "movement": -6
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 108,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 130,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 154,
            "movement": 19
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 170,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 186,
            "movement": -25
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
            "position": 31,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 60,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
            "movement": -3
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
            "position": 136,
            "movement": -116
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 120
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 59,
            "movement": -5
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": -4
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 129,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 136,
            "movement": 25
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 174,
            "movement": -17
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 191,
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
            "position": 19,
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
            "position": 46,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": -3
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
            "position": 54,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 21,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 36,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 48,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 81,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": -6
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 99,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 99,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 116,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 185,
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
            "position": 150,
            "movement": -9
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
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": 26
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": -29
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 55,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 58,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": -23
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 69,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 76,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 127,
            "movement": -53
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 140,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 168,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "OM",
            "name": "Oman",
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
            "country": "SN",
            "name": "Senegal",
            "position": 195,
            "movement": null,
            "status": "new"
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
            "country": "NE",
            "name": "Niger",
            "position": 21,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 35,
            "movement": -13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 36,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 49,
            "movement": -39
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 65,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 71,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 80,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 82,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 136,
            "movement": 54
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 137,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": -11
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
            "position": 43,
            "movement": -2
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
            "position": 44,
            "movement": 13
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
    "title": "MMS",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 34,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 72,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 87,
            "movement": -24
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 88,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 140,
            "movement": -108
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -24
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
            "position": 110,
            "movement": -13
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 46,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 48,
            "movement": -25
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 36
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -55
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 189,
            "movement": -105
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
            "movement": -3
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 140,
            "movement": -115
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 20,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": -12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 49,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": 23
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 124,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 158,
            "movement": 21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 166,
            "movement": -17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 192,
            "movement": -132
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
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 45,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 76,
            "movement": -42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -47
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": -51
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": -38
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 166,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 170,
            "movement": -29
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
            "position": 28,
            "movement": -5
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
            "movement": -14
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
            "position": 30,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 62,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 65,
            "movement": -43
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 107,
            "movement": 39
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 112,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 117,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 141,
            "movement": -37
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 153,
            "movement": -57
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 48,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": -3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 49
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": 49
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 156,
            "movement": -103
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 157,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
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
            "position": 133,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ojuelegba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 146,
            "movement": 45
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 180,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 1,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 145,
            "movement": -114
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
            "position": 187,
            "movement": -11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 196,
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
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 34,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 78,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 194,
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
            "position": 168,
            "movement": -16
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
            "position": 158,
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
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": 79
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 176,
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
            "position": 85,
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
            "position": 134,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6ddb34c26029baeb2bd73c71bb8d839f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": 25
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 75,
            "movement": 17
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 88,
            "movement": 50
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 90,
            "movement": 15
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 100,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 132,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 175,
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
            "position": 152,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 136,
            "movement": -68
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": -78
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 199,
            "movement": -24
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
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -6
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 88,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": 12
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 1
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
            "position": 25,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 10
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 106,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 151,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 173,
            "movement": 21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 84,
            "movement": 88
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 120,
            "movement": 19
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 183,
            "movement": -27
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 141,
            "movement": -110
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 151,
            "movement": -36
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
            "position": 87,
            "movement": -2
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": -6
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
            "position": 107,
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
            "position": 39,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 140,
            "movement": 27
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 166,
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
    "title": "Slow",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": -6
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
            "position": 18,
            "movement": -5
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
            "position": 142,
            "movement": -59
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
            "position": 9,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e52f4bf8bdb05c98002b714669ee2c2/500x500-000000-80-0-0.jpg"
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
            "position": 198,
            "movement": -23
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
            "position": 135,
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bella",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": -22
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 181,
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
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 170,
            "movement": -36
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
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
            "position": 99,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sweet One",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
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
    "title": "Mood",
    "platforms": [
      {
        "platform": "Deezer",
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Piece of My Heart",
    "platforms": [
      {
        "platform": "iTunes",
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
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/23dec0c82a7bb91327d048b0019004bd/500x500-000000-80-0-0.jpg"
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
            "position": 167,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Girl",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 98,
            "movement": -84
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "PONGO",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SR",
            "name": "Suriname",
            "position": 187,
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
    "title": "Say My Name",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 167,
            "movement": -119
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9348290ff2c42fef0438d57515d5233a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Money & Love",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 171,
            "movement": -118
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "EASY WITH ME",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": -128
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2e5bc56dd547bcc84a47089b865230cb/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fake Love",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ea13491b73bc307a022486992ce5a56b/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Alive",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 193,
            "movement": -135
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/76f42907d9ab6c5cd7a89b4c86806f1c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 168,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
  