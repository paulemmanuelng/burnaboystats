// GENERATED FILE — do not edit by hand.
  // Rebuilt several times a day by scripts/build-live-charts.mjs --artist=asake from kworb's artist page.
  //
  // PLATFORM chart data for Asake: where each release is sitting RIGHT
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
  export const liveChartsUpdated = "2026-09-24";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-09-24T17:15Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 4,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 1,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "UG",
            "name": "Uganda",
            "position": 1,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 2,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 3,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 4,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 5,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 7,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 7,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 7,
            "movement": 0
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 26,
            "movement": 62
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 33,
            "movement": 30
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 34,
            "movement": -12
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 37,
            "movement": -14
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 38,
            "movement": 82
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 40,
            "movement": -4
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 44,
            "movement": -9
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 48,
            "movement": -23
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 54,
            "movement": -2
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 59,
            "movement": -15
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 61,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 64,
            "movement": 14
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 72,
            "movement": 40
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 81,
            "movement": -20
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 90,
            "movement": -1
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 91,
            "movement": 14
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 98,
            "movement": -26
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 109,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 116,
            "movement": -17
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 120,
            "movement": -76
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 150,
            "movement": -11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 169,
            "movement": null,
            "status": "new"
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 171,
            "movement": null,
            "status": "new"
          }
        ]
      },
      {
        "platform": "Spotify Albums",
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
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude",
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
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 2,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 2,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 4,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 5,
            "movement": -2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 22,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 27,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 39,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": -2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 45,
            "movement": 11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 54,
            "movement": -6
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 77,
            "movement": -11
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
            "position": 47,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 48,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 72,
            "movement": 1
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 86,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 88,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 145,
            "movement": 22
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 159,
            "movement": 4
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
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 37,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 44,
            "movement": 24
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
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 79,
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
            "position": 12,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 7,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 10,
            "movement": 4
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 13,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 13,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 17,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 21,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -13
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 35,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 45,
            "movement": 47
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 64,
            "movement": 11
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 75,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 76,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 78,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 98,
            "movement": -57
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 99,
            "movement": 52
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 122,
            "movement": 50
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": -33
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 132,
            "movement": -70
          },
          {
            "country": "MU",
            "name": "Mauritius",
            "position": 182,
            "movement": -152
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
            "position": 8,
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
            "position": 4,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Forgiveness",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 4,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 15,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 20,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 50,
            "movement": -18
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 57,
            "movement": -7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 61,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 70,
            "movement": 2
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 99,
            "movement": 38
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 104,
            "movement": 12
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 145,
            "movement": -19
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 184,
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
            "position": 23,
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
            "position": 12,
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
            "position": 6,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WORSHIP",
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 19,
            "movement": -12
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": 4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 23,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 28,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 28,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 55,
            "movement": -19
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 64,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": 5
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 104,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 111,
            "movement": 51
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 117,
            "movement": 25
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 130,
            "movement": -15
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
            "position": 34,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
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
            "position": 41,
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
            "position": 20,
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
      },
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 38,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 4,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 7,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 11,
            "movement": 34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 60
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 22,
            "movement": 46
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 29,
            "movement": 7
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 33,
            "movement": -5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": 8
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 65,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 70,
            "movement": -27
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 94,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 118,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 138,
            "movement": 22
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 194,
            "movement": -92
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
            "position": 9,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 12,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 15,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 52
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 49,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 60,
            "movement": -31
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": -45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 86,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 107,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 119,
            "movement": 44
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 142,
            "movement": -84
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 162,
            "movement": -129
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 186,
            "movement": -56
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 193,
            "movement": -97
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 197,
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
            "position": 7,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 8,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 14,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 21,
            "movement": 26
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 19
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 23,
            "movement": 20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": -21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 44,
            "movement": 53
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -9
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 50,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 51,
            "movement": 17
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": 10
          },
          {
            "country": "CY",
            "name": "Cyprus",
            "position": 114,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 136,
            "movement": 2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 170,
            "movement": -75
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 176,
            "movement": -120
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
            "position": 14,
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
            "position": 53,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "WHY LOVE",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 10,
            "movement": 7
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 12,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 17,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 29,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 56,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 60,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 74,
            "movement": 2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 82,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": 3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 174,
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
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 12
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 43,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 44,
            "movement": -19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 47,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 60,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 90,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 125,
            "movement": -73
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 144,
            "movement": -23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 154,
            "movement": -3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 164,
            "movement": 17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 168,
            "movement": 19
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
            "position": 21,
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
            "position": 51,
            "movement": -16
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
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "BADMAN GANGSTA",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 9,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 29,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 36,
            "movement": -23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 39,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 45,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 54,
            "movement": -9
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 60,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": -16
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 98,
            "movement": 6
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 101,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 103,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 103,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
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
            "position": 76,
            "movement": -1
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
            "position": 82,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Jogodo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 24,
            "movement": 9
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": 9
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 34,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 38,
            "movement": -5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 39,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 72,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 83,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 91,
            "movement": 6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": 22
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": -39
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 155,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 157,
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
            "position": 54,
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
            "position": 110,
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
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": -11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 31,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": 119
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 51,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 65,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 91,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 101,
            "movement": 17
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 108,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 113,
            "movement": -38
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 121,
            "movement": -61
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -42
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
            "movement": 3
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
            "position": 27,
            "movement": -22
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
            "position": 83,
            "movement": -31
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
            "position": 67,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 26,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 30,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 33,
            "movement": 21
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 37,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 41,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 49,
            "movement": 9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": -3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 92,
            "movement": -84
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 117,
            "movement": 14
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 148,
            "movement": -62
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 153,
            "movement": -7
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 160,
            "movement": -37
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
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
            "position": 15,
            "movement": 156
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 48,
            "movement": 7
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 86
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 89,
            "movement": -38
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 93,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 109,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 143,
            "movement": 12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 185,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
            "movement": -91
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
            "position": 102,
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
            "position": 45,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Remember",
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
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": 102
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 70,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": 17
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 103,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": -36
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 134,
            "movement": 20
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 138,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 20
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": -28
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
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
            "position": 53,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 37,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 41,
            "movement": 3
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 75,
            "movement": -29
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 79,
            "movement": 101
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 97,
            "movement": -12
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 112,
            "movement": 42
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 123,
            "movement": -62
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 125,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 132,
            "movement": -19
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
            "movement": 12
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 184,
            "movement": -12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 186,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 191,
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
            "position": 105,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 33
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 27,
            "movement": 12
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 58,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 62,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 20
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 159,
            "movement": 10
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 175,
            "movement": -30
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
            "position": 64,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 92,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 100,
            "movement": -16
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
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 2,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 18,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 22,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 25,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 25,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 75,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 80,
            "movement": 14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 126,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
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
            "position": 38,
            "movement": -1
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
            "position": 136,
            "movement": 11
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
            "position": 31,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 103,
            "movement": 4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 113,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 120,
            "movement": 27
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 178,
            "movement": 0
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 99,
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
            "country": "KE",
            "name": "Kenya",
            "position": 187,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 106,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 11
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 35
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 42,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 79,
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
            "position": 26,
            "movement": 2
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
            "position": 104,
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
            "position": 84,
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
            "position": 22,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 65,
            "movement": -12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 88,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 114,
            "movement": -44
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 115,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 125,
            "movement": -26
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": -37
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 134,
            "movement": -23
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 171,
            "movement": 22
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 182,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 33,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 80,
            "movement": 58
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 83,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 153,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 164,
            "movement": -83
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 179,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 196,
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
            "position": 107,
            "movement": 0
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
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 93,
            "movement": -27
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 100,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 168,
            "movement": 13
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
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
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 60,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": 125
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 81,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": -52
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 184,
            "movement": -20
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 193,
            "movement": -18
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 9,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 145,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 155,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
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
            "position": 43,
            "movement": 47
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 92,
            "movement": 42
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 100,
            "movement": 41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
            "movement": 6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": 2
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
            "position": 101,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 37,
            "movement": 0
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 69,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 80,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
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
            "position": 137,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 56,
            "movement": -25
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 148,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 22
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": -37
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
            "position": 52,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 130,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 198,
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
            "position": 91,
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
            "position": 10,
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
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 126,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 88,
            "movement": -15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 126,
            "movement": -64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 136,
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
            "position": 197,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 148,
            "movement": 44
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
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
            "position": 162,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 63,
            "movement": 0
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
            "position": 71,
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
            "position": 83,
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
            "position": 53,
            "movement": -25
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Sungba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 38,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 49,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 148,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 82,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 197,
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
            "position": 59,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
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
            "country": "LR",
            "name": "Liberia",
            "position": 180,
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
            "position": 123,
            "movement": 3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 98,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 106,
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
            "position": 94,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 175,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 200,
            "movement": -34
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
            "position": 151,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mentally",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 97,
            "movement": 2
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
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
    "title": "Alaye",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
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
            "position": 149,
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
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 85,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": -2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BW",
            "name": "Botswana",
            "position": 37,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 110,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Baba God",
    "platforms": [
      {
        "platform": "Spotify",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Bad Boy - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "I Believe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 177,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2:30",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "What's Up My G",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 185,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness ​(f​eat​. Asake, Gunna​)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 144,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Worldwide",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 81,
            "movement": -71
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Psycho",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "My Heart",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 87,
            "movement": -74
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Active",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 176,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/678e2eec76ee9bd39c394da63d24b4b9/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 179,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 117,
            "movement": -90
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Gratitude (Live in London)",
    "kind": "song",
    "platforms": [
      {
        "platform": "YouTube",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": -3
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
  