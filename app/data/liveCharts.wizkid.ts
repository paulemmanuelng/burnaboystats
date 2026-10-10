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
  export const liveChartsUpdated = "2026-10-10";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-10T21:48Z";
  
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
            "country": "OM",
            "name": "Oman",
            "position": 38,
            "movement": 7
          },
          {
            "country": "MS",
            "name": "Montserrat",
            "position": 40,
            "movement": 0
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 52,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NP",
            "name": "Nepal",
            "position": 52,
            "movement": 39
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 58,
            "movement": 7
          },
          {
            "country": "BT",
            "name": "Bhutan",
            "position": 62,
            "movement": 77
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 78,
            "movement": 40
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 91,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 102,
            "movement": -41
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 109,
            "movement": 9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 127,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 132,
            "movement": -35
          },
          {
            "country": "BH",
            "name": "Bahrain",
            "position": 136,
            "movement": -26
          },
          {
            "country": "SA",
            "name": "Saudi Arabia",
            "position": 151,
            "movement": -40
          },
          {
            "country": "LA",
            "name": "Laos",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BZ",
            "name": "Belize",
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MV",
            "name": "Maldives",
            "position": 182,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 184,
            "movement": 7
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 194,
            "movement": -58
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 200,
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
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -8
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
            "position": 76,
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
            "position": 4,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 10,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": -12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 20,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 48,
            "movement": 10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": -27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 63,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 66,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 80,
            "movement": 31
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 172,
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
            "position": 48,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 51,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 94,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 96,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": -15
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 144,
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
            "position": 37,
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
            "position": 7,
            "movement": 2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 14,
            "movement": 52
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": 0
          },
          {
            "country": "OM",
            "name": "Oman",
            "position": 56,
            "movement": 27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 61,
            "movement": -10
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 67,
            "movement": 7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": -15
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 89,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 93,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 99,
            "movement": 67
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 100,
            "movement": 34
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 104,
            "movement": -35
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 111,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 141,
            "movement": 9
          },
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 164,
            "movement": 19
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 167,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 168,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 186,
            "movement": -36
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
            "position": 120,
            "movement": 15
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
            "position": 3,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 13,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 32,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 36,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 37,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 43,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 78,
            "movement": -9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 83,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 86,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 107,
            "movement": -10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 111,
            "movement": -35
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 132,
            "movement": -29
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 138,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KY",
            "name": "Cayman Islands",
            "position": 146,
            "movement": 11
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
            "position": 173,
            "movement": -2
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
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -74
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 120,
            "movement": -13
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": -25
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 167,
            "movement": -27
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 181,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 188,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 190,
            "movement": -71
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 192,
            "movement": -5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 195,
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
            "position": 51,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 65,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 67,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 111,
            "movement": -2
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
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 17,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 24,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 27,
            "movement": 8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 53,
            "movement": 18
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 80,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 126,
            "movement": 50
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 152,
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
            "position": 63,
            "movement": -11
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
            "movement": -35
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 17,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 69,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 73,
            "movement": 14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 79,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 85,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 107,
            "movement": -26
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 120,
            "movement": 20
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 129,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 140,
            "movement": 54
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
    "title": "Ginger",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 26,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": 16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 79,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 125,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -30
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 140,
            "movement": -12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 161,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 55,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 56,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 78
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": -23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": 5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 117,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 192,
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
            "position": 120,
            "movement": -16
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
            "position": 107,
            "movement": -103
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Final",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 9,
            "movement": 115
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 96,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 102,
            "movement": -7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 122,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": -11
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
            "position": 21,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": 9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 155,
            "movement": -8
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
            "position": 53,
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
    "title": "Morayo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 19,
            "movement": 14
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 20,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 46,
            "movement": 13
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 63,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 77,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 104,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 127,
            "movement": 42
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 156,
            "movement": -72
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 163,
            "movement": 33
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
            "position": 36,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 63,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 71,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 81,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 85,
            "movement": -13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -28
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 122,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 169,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 175,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 194,
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
    "title": "Sounds From The Other Side",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 55,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 34
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 131,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 161,
            "movement": 16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 170,
            "movement": -33
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
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -113
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
            "position": 172,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 182,
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
            "position": 194,
            "movement": -16
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
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 171
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 159,
            "movement": -40
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 193,
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
            "position": 168,
            "movement": -4
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
            "position": 33,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 100,
            "movement": -19
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 147,
            "movement": 20
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
            "position": 126,
            "movement": -113
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
            "position": 90,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9be0538ebbb9c6fd3dcb74844e7e2e2a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "One Condition",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 73,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 93,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -18
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 182,
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
    "title": "More Love, Less Ego",
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
            "country": "KE",
            "name": "Kenya",
            "position": 99,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 188,
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
            "position": 53,
            "movement": -13
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/e4286ac8a38829b6cf5d225c311bccf7/500x500-000000-80-0-0.jpg"
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
            "position": 47,
            "movement": 0
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
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": -2
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
            "position": 25,
            "movement": 49
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 3
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
    "title": "Sponono",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 16,
            "movement": 21
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 50,
            "movement": 16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 66,
            "movement": 7
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 84,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f830d11dfb6ee3025b93e60a0e15f075/500x500-000000-80-0-0.jpg"
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
            "position": 74,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 75,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 149,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/09422f55197ec57417a5742ce5801f13/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "In My Bed",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
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
            "country": "SN",
            "name": "Senegal",
            "position": 118,
            "movement": -2
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
            "country": "MZ",
            "name": "Mozambique",
            "position": 155,
            "movement": -12
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 196,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/332d8393d5c9e2d7c5345b8e5fd2a049/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Don't Dull",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
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
    "title": "SoundMan, Vol. 1",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 188,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b6c9342dc0ab40a9e837ebb16a8b24dd/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Daddy Yo",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 42
          }
        ]
      }
    ],
    "kind": "song"
  },
  {
    "title": "Fever",
    "platforms": [
      {
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
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
    "title": "Mighty Wine",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 16,
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
    "title": "Gyrate",
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
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": -3
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
            "position": 135,
            "movement": -9
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
            "position": 182,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 111,
            "movement": -24
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1079769bab009299da36d7680437e608/500x500-000000-80-0-0.jpg"
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
            "position": 150,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0af8d1b7ecebd4fec1dbb6c048f2105f/500x500-000000-80-0-0.jpg"
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
            "position": 152,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/26df7d9096b19210b3bccce5eca135dc/500x500-000000-80-0-0.jpg"
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
            "position": 116,
            "movement": 26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/4e3a6bee57e9a7a41c399565a7cf72c1/500x500-000000-80-0-0.jpg"
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
            "position": 84,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ee712ec0084d50159ae6564de833ce12/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gimme Dat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SB",
            "name": "Solomon Islands",
            "position": 186,
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
    "title": "Kese",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -101
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/b83e12a893bcd9bca6f6e84283dbedaa/500x500-000000-80-0-0.jpg"
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
            "position": 121,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/19a1c3f3be9c5bc9f76b78e60302e989/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": 4
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
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/5956f4fdf351532267e5538e2373615b/500x500-000000-80-0-0.jpg"
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
  