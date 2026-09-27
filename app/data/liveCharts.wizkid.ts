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
  export const liveChartsUpdated = "2026-09-27";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-27T12:07Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","iTunes"];
  
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
            "position": 34,
            "movement": -2
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 63,
            "movement": -2
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 78,
            "movement": -12
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 86,
            "movement": 0
          },
          {
            "country": "US",
            "name": "United States",
            "position": 89,
            "movement": -3
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 90,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 105,
            "movement": 1
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 107,
            "movement": -2
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 123,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 127,
            "movement": 8
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 157,
            "movement": -14
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 158,
            "movement": -8
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 158,
            "movement": -5
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 159,
            "movement": 17
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 162,
            "movement": -51
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 171,
            "movement": 25
          },
          {
            "country": "DE",
            "name": "Germany",
            "position": 172,
            "movement": -6
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 173,
            "movement": -39
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 41,
            "movement": -2
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 42,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 42,
            "movement": -9
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 49,
            "movement": -6
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 84,
            "movement": 16
          },
          {
            "country": "UZ",
            "name": "Uzbekistan",
            "position": 98,
            "movement": 32
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 100,
            "movement": -12
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 108,
            "movement": -25
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 109,
            "movement": -25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 136,
            "movement": 25
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 169,
            "movement": -49
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 175,
            "movement": -80
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 177,
            "movement": -2
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 195,
            "movement": -1
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
            "position": 36,
            "movement": -9
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 99,
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
            "country": "UG",
            "name": "Uganda",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 26,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 50,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 52,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 58,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 59,
            "movement": 25
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 122,
            "movement": 62
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 125,
            "movement": 35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 153,
            "movement": -7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 159,
            "movement": 7
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
            "position": 37,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": -5
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 93,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": -10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 128,
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
            "position": 48,
            "movement": -2
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
            "position": 53,
            "movement": -41
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
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 28,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": 65
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": -12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 0
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 81,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 4
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 95,
            "movement": 28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 108,
            "movement": -53
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 140,
            "movement": -33
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 157,
            "movement": -20
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 187,
            "movement": -29
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "country": "AT",
            "name": "Austria",
            "position": 85,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -148
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
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
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
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 32,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": 34
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -23
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": -5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": -5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 98,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 99,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 105,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": -20
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 176,
            "movement": -34
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 185,
            "movement": 2
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 198,
            "movement": -93
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
            "position": 148,
            "movement": 13
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
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": 51
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 89,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": -45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 110,
            "movement": -22
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 146,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 147,
            "movement": 40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 190,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -25
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
            "position": 48,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 68,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 81,
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
            "position": 53,
            "movement": 1
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
            "position": 11,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 50,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 58,
            "movement": 37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": -32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 67,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 35
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -69
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 101,
            "movement": 39
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 200,
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
            "position": 18,
            "movement": 2
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
            "position": 23,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 37,
            "movement": 40
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 70,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 81,
            "movement": 8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": -26
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 112,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
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
            "position": 51,
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
            "position": 43,
            "movement": -37
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
            "position": 32,
            "movement": -17
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
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 36
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 55,
            "movement": 68
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 56,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 97,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 107,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 149,
            "movement": -22
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 195,
            "movement": -35
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
            "position": 25,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 29,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 91
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 74,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 88,
            "movement": 32
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 109,
            "movement": 38
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 127,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 176,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "REAL, Vol. 1 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 74
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 30,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 68,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 92,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 107,
            "movement": 18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 114,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 171,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 173,
            "movement": -42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 198,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 12,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 30
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": 88
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": -68
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
            "movement": -36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 143,
            "movement": 14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 176,
            "movement": 6
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
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 54,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -15
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 145,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 161,
            "movement": -5
          },
          {
            "country": "YE",
            "name": "Yemen",
            "position": 183,
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
            "position": 132,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a8dc47ce1fd807b1814e8171a91c1fc9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jam",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 130,
            "movement": 69
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 141,
            "movement": 40
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 167,
            "movement": 10
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
            "position": 62,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": 0
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": -3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 62,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 65,
            "movement": 5
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 109,
            "movement": -40
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": -17
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
            "position": 50,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 133,
            "movement": 49
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 181,
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
            "position": 123,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 114,
            "movement": 36
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 164,
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
            "position": 87,
            "movement": 0
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 59,
            "movement": 91
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 104,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 178,
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
            "position": 89,
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
            "position": 97,
            "movement": -72
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 8,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 35,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 197,
            "movement": -6
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
            "movement": -13
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
            "position": 181,
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 134,
            "movement": 11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 153,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 194,
            "movement": -21
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
            "position": 128,
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
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 66,
            "movement": 0
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 172,
            "movement": -135
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 177,
            "movement": -39
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "country": "ZA",
            "name": "South Africa",
            "position": 112,
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
    "title": "Tonight",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 73,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 179,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 182,
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
            "position": 87,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 34
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 35,
            "movement": 3
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 67,
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
            "position": 95,
            "movement": -10
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
            "position": 120,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
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
            "position": 59,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": 2
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 89,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
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
            "position": 23,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 74,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 148,
            "movement": -71
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
            "position": 120,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 86,
            "movement": -2
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
            "position": 77,
            "movement": -60
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
            "position": 170,
            "movement": 6
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
            "position": 139,
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
    "title": "BIG TIME",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
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
            "position": 89,
            "movement": -68
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 141,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BROWN SKIN GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/38dc027b0eae49a8e7fd7af3312a00a6/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Billionaires Club",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 94,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "DYNAMITE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 136,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b9de2c8e816295f124dd7b227f7fa668/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Energy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/24a4bbe1d6d25c216426e42587156a04/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Getting Paid",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -69
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lagos to Kampala",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 57,
            "movement": -42
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Don't Care",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
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
    "title": "Wine to the Top",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 169,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3d18f71e03fb2831c2ceac5b8285f068/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Call Me Every Day",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 161,
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
    "title": "Manya",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 197,
            "movement": -148
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2743eaf3ad111a1da4f940966bfea480/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Apple Music Live: Wizkid",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "S2 - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 198,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ad33274548de3455303618bb650b6d86/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": 9
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
  