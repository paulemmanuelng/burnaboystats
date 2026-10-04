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
  export const liveChartsUpdated = "2026-10-04";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-04T21:31Z";
  
  /** Every platform represented in the current snapshot. */
  export const livePlatforms: string[] = ["Apple Music","Deezer","Shazam","Spotify","Spotify Albums","YouTube","iTunes"];
  
  export const liveCharts: LiveRelease[] = [
  {
    "title": "M$NEY",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 2,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 2,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 3,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 3,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 5,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 5,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 8,
            "movement": 6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 8,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 10,
            "movement": -3
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 11,
            "movement": 14
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 11,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 12,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 14,
            "movement": 4
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 21,
            "movement": 9
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 26,
            "movement": -7
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 27,
            "movement": 10
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 37,
            "movement": -10
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 46,
            "movement": -1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 50,
            "movement": -37
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 55,
            "movement": 2
          },
          {
            "country": "BB",
            "name": "Barbados",
            "position": 63,
            "movement": 38
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 73,
            "movement": -8
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 82,
            "movement": null,
            "status": "new"
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 93,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 95,
            "movement": 35
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 112,
            "movement": 9
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 132,
            "movement": -80
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 141,
            "movement": -83
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 141,
            "movement": 34
          },
          {
            "country": "KN",
            "name": "Saint Kitts and Nevis",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 149,
            "movement": null,
            "status": "new"
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 189,
            "movement": -48
          },
          {
            "country": "GY",
            "name": "Guyana",
            "position": 190,
            "movement": -130
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 193,
            "movement": -129
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
            "position": 2,
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
        "numberOnes": 1,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 1,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 4,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 9,
            "movement": 5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 11,
            "movement": -2
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 14,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 27,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 32,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 46,
            "movement": 41
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 74,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 83,
            "movement": 27
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 85,
            "movement": 1
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 111,
            "movement": -13
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 164,
            "movement": -114
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
            "position": 32,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 37,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 46,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 12
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 97,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
            "movement": 15
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 133,
            "movement": 8
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 13,
            "movement": -10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 95,
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
            "position": 11,
            "movement": 2
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
            "position": 72,
            "movement": -8
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
            "position": 13,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 14,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 23,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 25,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": -4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 34,
            "movement": -15
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 42,
            "movement": -28
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 48,
            "movement": 9
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 52,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 53,
            "movement": 40
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 59,
            "movement": 35
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 69,
            "movement": -30
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 69,
            "movement": 75
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 69,
            "movement": -10
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 87,
            "movement": -2
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": -4
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 133,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 152,
            "movement": -110
          },
          {
            "country": "TT",
            "name": "Trinidad and Tobago",
            "position": 155,
            "movement": -116
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 158,
            "movement": -5
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 191,
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
            "position": 6,
            "movement": 0
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
            "country": "GM",
            "name": "Gambia",
            "position": 2,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "country": "UG",
            "name": "Uganda",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -2
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 16,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 9
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 23,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 23,
            "movement": -8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": 9
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 53,
            "movement": 62
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 55,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 73,
            "movement": -8
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": 6
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 109,
            "movement": 16
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 172,
            "movement": -13
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 174,
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
            "position": 18,
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
            "position": 15,
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
            "position": 30,
            "movement": -7
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
            "position": 7,
            "movement": 5
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
            "position": 9,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 17,
            "movement": 15
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 27,
            "movement": 35
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 33,
            "movement": 0
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 37,
            "movement": -18
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": -4
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 54,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 55,
            "movement": -20
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 55,
            "movement": -22
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 78,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 123,
            "movement": 27
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 157,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 187,
            "movement": -79
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 195,
            "movement": -97
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 199,
            "movement": -5
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
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 82,
            "movement": 8
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 160,
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
            "position": 44,
            "movement": -1
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
            "position": 41,
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
            "position": 37,
            "movement": 13
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
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 9,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 9,
            "movement": 4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 12,
            "movement": 4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 13,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 14,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": -8
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 34,
            "movement": -15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 39,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 42,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 47,
            "movement": -11
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": -18
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 93,
            "movement": 49
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 119,
            "movement": -4
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 124,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 162,
            "movement": -60
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 183,
            "movement": -21
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": 31
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 11,
            "movement": 8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 18,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 19,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 32,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": -7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 47,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": -9
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 61,
            "movement": 106
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 88,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 93,
            "movement": 58
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 99,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 120,
            "movement": -15
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 159,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 174,
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
            "position": 13,
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
            "position": 181,
            "movement": -131
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
            "position": 127,
            "movement": -9
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
            "position": 25,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 5,
            "movement": 1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 8,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 16,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 16,
            "movement": 1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 24,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 28,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 10
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 40,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 55,
            "movement": -6
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 75,
            "movement": 26
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 97,
            "movement": -5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 136,
            "movement": 15
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 149,
            "movement": 17
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
            "position": 99,
            "movement": -33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 4,
            "movement": 117
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 10,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 22,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 30,
            "movement": 107
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": 20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 51,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 59,
            "movement": 8
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 61,
            "movement": 56
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 99,
            "movement": 16
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 105,
            "movement": null,
            "status": "new"
          },
          {
            "country": "RS",
            "name": "Serbia",
            "position": 117,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 145,
            "movement": -83
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 161,
            "movement": -122
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 196,
            "movement": -74
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
            "movement": 0
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
            "position": 15,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 23,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 24,
            "movement": 40
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 32,
            "movement": 11
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 47,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -6
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -22
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 79,
            "movement": 37
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 80,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 97,
            "movement": -58
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 121,
            "movement": 12
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 130,
            "movement": -33
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 141,
            "movement": -46
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 193,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 196,
            "movement": 4
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
            "position": 12,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 20,
            "movement": 10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 27,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 27,
            "movement": 44
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 35,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 36,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 64,
            "movement": 12
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 70,
            "movement": 4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 71,
            "movement": -2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 76,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 104,
            "movement": -40
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 128,
            "movement": -27
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 134,
            "movement": -29
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 140,
            "movement": -34
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 189,
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
            "position": 82,
            "movement": 14
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
            "position": 56,
            "movement": -37
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
            "country": "KE",
            "name": "Kenya",
            "position": 28,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 31,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 45,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 56,
            "movement": 5
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 57,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 75,
            "movement": -35
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 84,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 84,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 118,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 126,
            "movement": 23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 147,
            "movement": 5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 158,
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
            "position": 18,
            "movement": 10
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 93,
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
            "position": 48,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "THAT GIRL",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 15,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 23,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 33,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 34,
            "movement": 29
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 41,
            "movement": -17
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 74,
            "movement": -12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 78,
            "movement": -1
          },
          {
            "country": "VG",
            "name": "British Virgin Islands",
            "position": 85,
            "movement": -62
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 114,
            "movement": -5
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 186,
            "movement": null,
            "status": "new"
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
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
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
            "position": 57,
            "movement": 3
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
            "position": 43,
            "movement": -3
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
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
            "position": 32,
            "movement": 4
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 44,
            "movement": -15
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 53,
            "movement": -1
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 67,
            "movement": 67
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 72,
            "movement": -6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 79,
            "movement": 66
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 81,
            "movement": -13
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 89,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 146,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 159,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 165,
            "movement": -63
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 171,
            "movement": -33
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 189,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 199,
            "movement": -55
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
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amapiano",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 22,
            "movement": 28
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 23,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 33,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 39,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": 13
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 54,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 72,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 74,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 74,
            "movement": 58
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 120,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 129,
            "movement": 5
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 192,
            "movement": -67
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 42
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": -7
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 26,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 29,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 31,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 24
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 63,
            "movement": -3
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 70,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 78,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 197,
            "movement": -28
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
            "movement": -2
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
            "position": 146,
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
            "position": 22,
            "movement": 77
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
            "position": 26,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 13,
            "movement": 60
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 25,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 39,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 43,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 50,
            "movement": -1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 60,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 61,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 62,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 63,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 86,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 141,
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
            "position": 26,
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
            "position": 16,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 33,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 56,
            "movement": 4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 66,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 81,
            "movement": 7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 87,
            "movement": -12
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 92,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 99,
            "movement": -16
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
            "position": 133,
            "movement": -31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 171,
            "movement": 26
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
            "movement": 13
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
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": 84
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 57,
            "movement": -35
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 59,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 73,
            "movement": 12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 104,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 145,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 174,
            "movement": -29
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 194,
            "movement": -143
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
            "position": 128,
            "movement": -109
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ikebe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 9,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 13,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 26,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 35,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 49,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": 26
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
            "movement": -10
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 116,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 132,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 199,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 29,
            "movement": 46
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 52,
            "movement": -8
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": 34
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 86,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 86,
            "movement": 2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 101,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 112,
            "movement": -33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": 41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 160,
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
            "position": 47,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 51,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -17
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 86,
            "movement": 11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 116,
            "movement": 56
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 124,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 134,
            "movement": -15
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 157,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 166,
            "movement": -18
          },
          {
            "country": "LR",
            "name": "Liberia",
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
            "position": 130,
            "movement": 23
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
            "position": 64,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 37,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 63,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 68,
            "movement": -20
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 87,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
            "movement": 30
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 100,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 129,
            "movement": 30
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 131,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 144,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 146,
            "movement": 25
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 105,
            "movement": -9
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 133,
            "movement": 36
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 135,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 141,
            "movement": 4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 153,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 154,
            "movement": -48
          },
          {
            "country": "GH",
            "name": "Ghana",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 129,
            "movement": 33
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Rora",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 68,
            "movement": 56
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 105,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 129,
            "movement": 30
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 191,
            "movement": -74
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
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": 40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": -23
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -10
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
            "movement": 8
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
            "position": 57,
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
            "position": 68,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Blessings",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "UG",
            "name": "Uganda",
            "position": 60,
            "movement": 8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 70,
            "movement": 5
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 77,
            "movement": -4
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 193,
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
            "position": 149,
            "movement": 10
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
            "position": 196,
            "movement": -116
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 90,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 135,
            "movement": 6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 146,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 160,
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
            "position": 164,
            "movement": 5
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
            "country": "LR",
            "name": "Liberia",
            "position": 49,
            "movement": 29
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 68,
            "movement": 21
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 69,
            "movement": 43
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 163,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 181,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 183,
            "movement": 11
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
            "position": 138,
            "movement": 13
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
            "position": 139,
            "movement": 29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Shazam",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 17,
            "movement": 29
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 38,
            "movement": 44
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
        "platform": "iTunes",
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/9bf17dcba25cf3ae10aa25070e72b58e/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 118,
            "movement": 39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 124,
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
            "position": 84,
            "movement": 20
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 55,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": 96
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 148,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 172,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Amen",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": 53
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 111,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 153,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 189,
            "movement": -73
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ototo",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 75,
            "movement": 15
          }
        ]
      },
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 143,
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
            "position": 83,
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
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 56,
            "movement": -36
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
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
            "position": 172,
            "movement": 15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Organise",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 100,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 141,
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
            "position": 82,
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
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 177,
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
            "position": 52,
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
    "title": "Ako",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
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
            "position": 181,
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
            "movement": 16
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
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 94,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "99",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 108,
            "movement": -7
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
            "position": 181,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Ego",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 159,
            "movement": 7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 123,
            "movement": 29
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
            "position": 171,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 135,
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
            "position": 143,
            "movement": -116
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
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
            "position": 186,
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
            "position": 159,
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
            "position": 6,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 93,
            "movement": 4
          }
        ]
      }
    ],
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 28
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 154,
            "movement": 32
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
            "position": 166,
            "movement": 5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mood",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
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
    "title": "Wave",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 179,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "position": 171,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": 43
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/dddc1ab2353b71ff80f1627a1e3e5f64/500x500-000000-80-0-0.jpg"
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
            "position": 179,
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
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 113,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
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
  