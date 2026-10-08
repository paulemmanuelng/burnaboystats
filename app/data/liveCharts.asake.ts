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
  export const liveChartsUpdated = "2026-10-08";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-08T06:10Z";
  
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
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 2,
            "movement": 0
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
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 4,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 4,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 5,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 6,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 6,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 7,
            "movement": -2
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
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 10,
            "movement": 3
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 11,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 12,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 14,
            "movement": 68
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 14,
            "movement": 19
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 16,
            "movement": -6
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 21,
            "movement": -14
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 41,
            "movement": 4
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 46,
            "movement": 7
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 50,
            "movement": 3
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 63,
            "movement": -2
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 71,
            "movement": -18
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 75,
            "movement": -56
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 80,
            "movement": -13
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 87,
            "movement": -22
          },
          {
            "country": "BM",
            "name": "Bermuda",
            "position": 98,
            "movement": 0
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 104,
            "movement": -30
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 108,
            "movement": -35
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 134,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 154,
            "movement": 1
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 168,
            "movement": -123
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
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 4,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 0
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 10,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": 14
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 21,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 24,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 25,
            "movement": 7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 28,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 30,
            "movement": -4
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 55,
            "movement": 1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 71,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 93,
            "movement": 71
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 97,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 109,
            "movement": -22
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 175,
            "movement": -7
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
            "position": 29,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 33,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 41,
            "movement": -1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 43,
            "movement": 2
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 94,
            "movement": 6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 105,
            "movement": -13
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 123,
            "movement": -1
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 155,
            "movement": -18
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "QA",
            "name": "Qatar",
            "position": 47,
            "movement": -29
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": -142
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
            "position": 10,
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
            "position": 9,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "IKEBE 3000",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 1,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 3,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 13,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 25,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 35,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 40,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 50,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 80,
            "movement": 120
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 191,
            "movement": null,
            "status": "new"
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 200,
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
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 8,
            "movement": 9
          },
          {
            "country": "WW",
            "name": "Worldwide",
            "position": 54,
            "movement": 23
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 58,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 61,
            "movement": 48
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 66,
            "movement": 28
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 77,
            "movement": 40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 91,
            "movement": 31
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 98,
            "movement": 19
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 108,
            "movement": 30
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 108,
            "movement": 50
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 150,
            "movement": 40
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
            "position": 12,
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
            "country": "LR",
            "name": "Liberia",
            "position": 2,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 6,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 18,
            "movement": 7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 32,
            "movement": 101
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 32,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 37,
            "movement": -3
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 54,
            "movement": -1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 55,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 68,
            "movement": 55
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 87,
            "movement": 28
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 99,
            "movement": 10
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 133,
            "movement": 39
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 157,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 164,
            "movement": -16
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
            "position": 7,
            "movement": 3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 89,
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
            "position": 19,
            "movement": 1
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
            "position": 10,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 15,
            "movement": null,
            "status": "new"
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 17,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 20,
            "movement": 32
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 33,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 34,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 36,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 46,
            "movement": 6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 58,
            "movement": -16
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 62,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 73,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 120,
            "movement": -57
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 137,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 147,
            "movement": -2
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 164,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 171,
            "movement": 9
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
            "position": 63,
            "movement": 7
          },
          {
            "country": "NG",
            "name": "Nigeria",
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
            "country": "SZ",
            "name": "Swaziland",
            "position": 41,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 191,
            "movement": -142
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
            "movement": 3
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
            "movement": 25
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
            "position": 5,
            "movement": 53
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 6,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 6,
            "movement": 3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 13,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 19,
            "movement": 2
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 19,
            "movement": 34
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 20,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -2
          },
          {
            "country": "SR",
            "name": "Suriname",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 25,
            "movement": 33
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 44,
            "movement": -11
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 48,
            "movement": -8
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 49,
            "movement": -3
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 61,
            "movement": 22
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 62,
            "movement": 36
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 81,
            "movement": 15
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 104,
            "movement": -69
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 107,
            "movement": 31
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 109,
            "movement": -72
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 187,
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
    "title": "Work Of Art",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 14,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 16,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 23,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 24,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 26,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 29,
            "movement": -8
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 41,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 60,
            "movement": -6
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 63,
            "movement": 107
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 75,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 80,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 81,
            "movement": -6
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 82,
            "movement": -6
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -7
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 86,
            "movement": -7
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 87,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 118,
            "movement": 32
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 139,
            "movement": -22
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 149,
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
    "title": "WHY LOVE",
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
            "country": "LR",
            "name": "Liberia",
            "position": 7,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 0
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 16,
            "movement": 5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 18,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": 3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 28,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 30,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 33,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 52,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 63,
            "movement": -22
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 65,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 117,
            "movement": 20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 122,
            "movement": 31
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 139,
            "movement": 3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 156,
            "movement": -39
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 177,
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
            "position": 177,
            "movement": 15
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
            "position": 186,
            "movement": -30
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
            "position": 71,
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
    "title": "M$NEY Live in London",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 14,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 16,
            "movement": 3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 21,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -14
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 44,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 59,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 59,
            "movement": -31
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 65,
            "movement": -8
          },
          {
            "country": "IS",
            "name": "Iceland",
            "position": 105,
            "movement": -59
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 140,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 149,
            "movement": -59
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 150,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 161,
            "movement": -10
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 173,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 183,
            "movement": -65
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
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 25,
            "movement": -17
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 5,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 6,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 16,
            "movement": -3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": 6
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": -13
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 42,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 61,
            "movement": -12
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 74,
            "movement": -33
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 92,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -18
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 118,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 138,
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
            "position": 12,
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
            "position": 16,
            "movement": 27
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
            "position": 134,
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
    "title": "Lungu Boy",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 12,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 19,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 26,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 30,
            "movement": 1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 37,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 41,
            "movement": 32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 44,
            "movement": -20
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 50,
            "movement": 10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 19
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 80,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 82,
            "movement": -32
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 92,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 104,
            "movement": -14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 121,
            "movement": -45
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 157,
            "movement": -26
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 196,
            "movement": -41
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
            "position": 17,
            "movement": 10
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
            "position": 38,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 41,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 61,
            "movement": 5
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": 3
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": -20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 78,
            "movement": 7
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 88,
            "movement": -5
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 104,
            "movement": 43
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 114,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 119,
            "movement": 0
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 169,
            "movement": -6
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 171,
            "movement": -54
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
            "position": 25,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 20,
            "movement": 2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 36,
            "movement": 10
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 43,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 43,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 51,
            "movement": -14
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 54,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 71,
            "movement": 15
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 74,
            "movement": -8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 82,
            "movement": -5
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 115,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 139,
            "movement": 16
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 146,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 146,
            "movement": -4
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 186,
            "movement": -13
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
            "position": 60,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/ca53dc32e25c8249389aa28d80ad8fe7/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 48,
            "movement": -22
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 52,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 53,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 57,
            "movement": -5
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 58,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 85,
            "movement": 25
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 134,
            "movement": -28
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "position": 26,
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
            "position": 138,
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
            "position": 37,
            "movement": 19
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
            "position": 17,
            "movement": -12
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 22,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": -4
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 45,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 52,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 35
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 90,
            "movement": -10
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 97,
            "movement": 38
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 110,
            "movement": -27
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 116,
            "movement": 0
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 153,
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
            "position": 108,
            "movement": 3
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
            "position": 69,
            "movement": -19
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
            "position": 63,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
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
            "position": 39,
            "movement": -3
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 43,
            "movement": 12
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": -4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 73,
            "movement": -14
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 93,
            "movement": -18
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 94,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 110,
            "movement": -24
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 138,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 144,
            "movement": 11
          },
          {
            "country": "FM",
            "name": "Micronesia",
            "position": 154,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 166,
            "movement": -1
          },
          {
            "country": "BW",
            "name": "Botswana",
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
            "position": 143,
            "movement": 7
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
            "position": 169,
            "movement": 17
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
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
            "position": 4,
            "movement": 25
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 30,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 35,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 52,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 56,
            "movement": 19
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 77,
            "movement": 3
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 78,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 90,
            "movement": 32
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 110,
            "movement": -23
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 148,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 154,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 155,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 178,
            "movement": -32
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
            "position": 50,
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
            "position": 21,
            "movement": -6
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
            "country": "UG",
            "name": "Uganda",
            "position": 25,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 35,
            "movement": 10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 69,
            "movement": -6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 79,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 85,
            "movement": -30
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 143,
            "movement": -37
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 147,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 188,
            "movement": -12
          },
          {
            "country": "TZ",
            "name": "Tanzania",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -2
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 108,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 110,
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
            "position": 57,
            "movement": 0
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
            "position": 69,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/868b5607719ea2740a79887299cdb5be/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Chanel",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 21
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 20,
            "movement": -1
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 22,
            "movement": 4
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 25,
            "movement": -10
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 31,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 53,
            "movement": -3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 54,
            "movement": 1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 135,
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
            "position": 28,
            "movement": -7
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
            "position": 138,
            "movement": -9
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
            "position": 72,
            "movement": -28
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
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 61,
            "movement": 21
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 63,
            "movement": -3
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 71,
            "movement": -44
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 76,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 81,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 135,
            "movement": -9
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 137,
            "movement": -48
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 163,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 172,
            "movement": -19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 189,
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
            "position": 51,
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
            "position": 36,
            "movement": 0
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 82,
            "movement": -6
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 93,
            "movement": 33
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 101,
            "movement": -11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 106,
            "movement": 50
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 107,
            "movement": 15
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 130,
            "movement": -9
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 136,
            "movement": -14
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 152,
            "movement": -18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 153,
            "movement": 5
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 196,
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
    "title": "Lonely At The Top",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 31,
            "movement": 13
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 68,
            "movement": 11
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 74,
            "movement": -14
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 125,
            "movement": -11
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 141,
            "movement": -8
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -29
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
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 121,
            "movement": 10
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
            "position": 59,
            "movement": 4
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
            "position": 42,
            "movement": 44
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
            "country": "NE",
            "name": "Niger",
            "position": 54,
            "movement": 12
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 72,
            "movement": 14
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 83,
            "movement": -7
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 91,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 99,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
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
            "position": 46,
            "movement": 0
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
            "country": "NG",
            "name": "Nigeria",
            "position": 154,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 160,
            "movement": -41
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 162,
            "movement": -12
          },
          {
            "country": "KE",
            "name": "Kenya",
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
            "position": 43,
            "movement": -3
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
            "position": 106,
            "movement": -17
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BJ",
            "name": "Benin",
            "position": 96,
            "movement": 18
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 129,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 143,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 152,
            "movement": -11
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 171,
            "movement": -21
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
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
            "position": 122,
            "movement": 1
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
            "country": "UG",
            "name": "Uganda",
            "position": 67,
            "movement": -11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 89,
            "movement": -11
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 135,
            "movement": -32
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 158,
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
            "position": 139,
            "movement": 13
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
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 77,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 84,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 118,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 180,
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
            "position": 141,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Joha",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 66,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 113,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 149,
            "movement": -40
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 200,
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
            "movement": -15
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "NO COMPETITION",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 51,
            "movement": 55
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 65,
            "movement": 54
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 71,
            "movement": 4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 75,
            "movement": -7
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 154,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 67,
            "movement": -1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 91,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 99,
            "movement": -10
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 199,
            "movement": -29
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 119,
            "movement": 31
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 121,
            "movement": 64
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 139,
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
            "position": 176,
            "movement": -39
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 158,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 185,
            "movement": -31
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
            "position": 144,
            "movement": -9
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
            "position": 115,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 82,
            "movement": 69
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": 38
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 162,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 98,
            "movement": 4
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
            "position": 178,
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
            "position": 11,
            "movement": 13
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
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
            "position": 139,
            "movement": 42
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 182,
            "movement": -34
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": -2
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
            "position": 193,
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
            "position": 115,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 85,
            "movement": 0
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
            "position": 176,
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 97,
            "movement": -2
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
            "position": 113,
            "movement": 10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 105,
            "movement": -3
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
            "position": 70,
            "movement": -19
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
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
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 195,
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
    "title": "2Factor",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 156,
            "movement": -12
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
            "position": 185,
            "movement": -10
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/0dd0b79a37a28f75ab7f61b38d0dccda/500x500-000000-80-0-0.jpg"
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
            "position": 78,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/9b36905d4dcb4eb744bb219d311a52e5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 78,
            "movement": 2
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 79,
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
    "title": "Ego - Live in London",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 148,
            "movement": 6
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
            "position": 186,
            "movement": -21
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Omo Ope",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/636b24b8b52148a55ce3bf9c263ba19e/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Peace Be Unto You",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 161,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f70fc3aeb97c91d07c50ba62d8fa0f57/500x500-000000-80-0-0.jpg"
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
            "position": 167,
            "movement": -14
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 40,
            "movement": -36
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 161,
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
    "title": "Getting Paid (feat. Asake, Wizkid, Skillibeng)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -23
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness (feat. Asake, Gunna)",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 187,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
            "position": 200,
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
    "title": "Kings Intro",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 122,
            "movement": 1
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
  