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
  export const liveChartsUpdated = "2026-10-11";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-11T22:01Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
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
            "position": 37,
            "movement": -3
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 64,
            "movement": -3
          },
          {
            "country": "GB",
            "name": "United Kingdom",
            "position": 92,
            "movement": 3
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 93,
            "movement": -12
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 99,
            "movement": -12
          },
          {
            "country": "US",
            "name": "United States",
            "position": 104,
            "movement": -4
          },
          {
            "country": "AU",
            "name": "Australia",
            "position": 109,
            "movement": -9
          },
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 130,
            "movement": -19
          },
          {
            "country": "LV",
            "name": "Latvia",
            "position": 143,
            "movement": -7
          },
          {
            "country": "AT",
            "name": "Austria",
            "position": 146,
            "movement": -4
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 148,
            "movement": -19
          },
          {
            "country": "RO",
            "name": "Romania",
            "position": 150,
            "movement": -17
          },
          {
            "country": "LT",
            "name": "Lithuania",
            "position": 158,
            "movement": -7
          },
          {
            "country": "CH",
            "name": "Switzerland",
            "position": 158,
            "movement": -6
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 159,
            "movement": 10
          },
          {
            "country": "EE",
            "name": "Estonia",
            "position": 170,
            "movement": -24
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 180,
            "movement": -20
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
            "position": 40,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 43,
            "movement": 3
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 83,
            "movement": -45
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 84,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 6
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 110,
            "movement": 48
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 111,
            "movement": 40
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 116,
            "movement": -64
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 129,
            "movement": 7
          },
          {
            "country": "LB",
            "name": "Lebanon",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SE",
            "name": "Sweden",
            "position": 148,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 168,
            "movement": -41
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 173,
            "movement": 27
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 188,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 190,
            "movement": -6
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NZ",
            "name": "New Zealand",
            "position": 69,
            "movement": null,
            "status": "new"
          },
          {
            "country": "EG",
            "name": "Egypt",
            "position": 95,
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
            "position": 5,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": 11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 36,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 14
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": 11
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 70,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 71,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": 21
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 152,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 176,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 188,
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
            "position": 46,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": -3
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 120,
            "movement": 24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": -9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
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
            "position": 53,
            "movement": -6
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
            "position": 47,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5b290018c14b243dc3cd77ef4166ee0f/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 20,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 41,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 57,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 71,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 76,
            "movement": 23
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
            "position": 85,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 94,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 95,
            "movement": 9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 96,
            "movement": -12
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 133,
            "movement": -22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 138,
            "movement": 3
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 147,
            "movement": 39
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 165,
            "movement": -65
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 170,
            "movement": -157
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 188,
            "movement": -21
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 195,
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
            "position": 26,
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
            "position": 85,
            "movement": 35
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
            "position": 90,
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
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 17,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 35,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 44,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 53,
            "movement": 3
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 59,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 70,
            "movement": 8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 77,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 84,
            "movement": 2
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 122,
            "movement": 10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 132,
            "movement": -25
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 133,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 195,
            "movement": -84
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 15,
            "movement": 0
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
            "position": 182,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/18e2a836169d9104959e633694424136/500x500-000000-80-0-0.jpg"
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
            "position": 42,
            "movement": 68
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 75,
            "movement": 45
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 115,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": 58
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 148,
            "movement": 44
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": 35
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": 19
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 188,
            "movement": -21
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
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 112,
            "movement": -1
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
            "position": 19,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 80
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 46,
            "movement": 33
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 50,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 66,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 69
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": -9
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 185,
            "movement": -56
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
            "position": 25,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": -3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 41,
            "movement": -17
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": -19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 83,
            "movement": -66
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 93,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 119,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 139,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -18
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
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
            "position": 63,
            "movement": -11
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
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 92,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": -26
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 115,
            "movement": 19
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 120,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 126,
            "movement": 14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 145,
            "movement": -66
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 187,
            "movement": -26
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
            "movement": 3
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 43,
            "movement": -24
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 77
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 123,
            "movement": -46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 131,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 139,
            "movement": -35
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": -5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 194,
            "movement": -76
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
            "position": 35,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 36,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 84,
            "movement": 59
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 91,
            "movement": -20
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 106,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": -17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 121,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 122,
            "movement": 47
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 165,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 177,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "album",
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
            "country": "TD",
            "name": "Chad",
            "position": 36,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 89,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 92,
            "movement": 8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
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
            "position": 120,
            "movement": -16
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": 97
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 52,
            "movement": -13
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": -34
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 118,
            "movement": -25
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": 11
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
    "title": "Final",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 36,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": -20
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
            "position": 76,
            "movement": 26
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 129,
            "movement": -33
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -72
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3cda4cca35e5a322d6ad9e71c49dbecf/500x500-000000-80-0-0.jpg"
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
            "position": 38,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 155,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 156,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 180,
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
            "position": 62,
            "movement": -9
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
            "position": 26,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 59,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 75,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 184,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Superstar",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 34,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 66
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 102,
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
            "position": 163,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/73/bd/59/73bd5950-72b7-8758-e91f-b2a16d558c57/0.jpg/300x300bb.jpg"
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
            "position": 34,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 144,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 200,
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
            "position": 7,
            "movement": 0
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 48,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 84,
            "movement": 8
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
            "position": 138,
            "movement": 44
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": -9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 87,
            "movement": -13
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 152,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 196,
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
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 95,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 114,
            "movement": -41
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 120,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 187,
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
            "position": 145,
            "movement": 12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e53dccb976a98d09db9a195ce84162f2/500x500-000000-80-0-0.jpg"
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
            "position": 10,
            "movement": 115
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 48,
            "movement": -1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 87,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": 3
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 117,
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
            "position": 91,
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
    "title": "Slow",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
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
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": 3
          }
        ]
      },
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JP",
            "name": "Japan",
            "position": 24,
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
    "title": "forever be mine",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 182,
            "movement": -26
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 93,
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
    "title": "Balance",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 42,
            "movement": null,
            "status": "new"
          },
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 134,
            "movement": 61
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3aff665181b245d2bd9c43afb536db2e/500x500-000000-80-0-0.jpg"
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
            "position": 191,
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
            "position": 124,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/67996ba3c56f059ae5a870268c66b39f/500x500-000000-80-0-0.jpg"
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
            "position": 133,
            "movement": 46
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 164,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5956f4fdf351532267e5538e2373615b/500x500-000000-80-0-0.jpg"
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
            "position": 13,
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
    "title": "Stay For The Night",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": 54
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/26df7d9096b19210b3bccce5eca135dc/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 30,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Pressure",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "JP",
            "name": "Japan",
            "position": 79,
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
    "title": "Gyrate",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 126,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bend Down Pause",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 74,
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
    "title": "Holla at Your Boy",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
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
            "position": 114,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
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
            "position": 154,
            "movement": -4
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
            "country": "LR",
            "name": "Liberia",
            "position": 113,
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
    "title": "Blessed",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 95,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 142,
            "movement": -31
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
            "position": 180,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8f2d40ca3352120f01ae569e541c6e84/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Can't Believe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 191,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2f25b7d9807558219cbe7646ad27e092/500x500-000000-80-0-0.jpg"
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
            "position": 170,
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
    "title": "Frames",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
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
            "position": 142,
            "movement": 14
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
  