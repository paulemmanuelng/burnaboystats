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
  export const liveChartsUpdated = "2026-10-01";
  /** The minute the snapshot was taken, so a reader can tell a 17:20 board
   *  from a fresh one — the job fires a few times a day, not on the hour. */
  export const liveChartsBuiltAt = "2026-10-01T13:21Z";
  
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
            "country": "NA",
            "name": "Namibia",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 2,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 2,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 3,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 3,
            "movement": 1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 6,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 6,
            "movement": 0
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 6,
            "movement": 1
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 6,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 7,
            "movement": -1
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 7,
            "movement": 0
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 9,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 12,
            "movement": 3
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 13,
            "movement": 123
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 13,
            "movement": 3
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 17,
            "movement": 0
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 19,
            "movement": -4
          },
          {
            "country": "MZ",
            "name": "Mozambique",
            "position": 20,
            "movement": 41
          },
          {
            "country": "KW",
            "name": "Kuwait",
            "position": 38,
            "movement": 6
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 45,
            "movement": 8
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 48,
            "movement": 4
          },
          {
            "country": "UK",
            "name": "United Kingdom",
            "position": 49,
            "movement": 3
          },
          {
            "country": "ZA",
            "name": "South Africa",
            "position": 51,
            "movement": -2
          },
          {
            "country": "IE",
            "name": "Ireland",
            "position": 62,
            "movement": -9
          },
          {
            "country": "MT",
            "name": "Malta",
            "position": 70,
            "movement": -18
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 82,
            "movement": 17
          },
          {
            "country": "JM",
            "name": "Jamaica",
            "position": 96,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SC",
            "name": "Seychelles",
            "position": 98,
            "movement": 30
          },
          {
            "country": "PT",
            "name": "Portugal",
            "position": 100,
            "movement": -27
          },
          {
            "country": "JO",
            "name": "Jordan",
            "position": 120,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CA",
            "name": "Canada",
            "position": 127,
            "movement": 4
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 132,
            "movement": 11
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 139,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TR",
            "name": "Turkey",
            "position": 176,
            "movement": null,
            "status": "new"
          },
          {
            "country": "AG",
            "name": "Antigua and Barbuda",
            "position": 183,
            "movement": null,
            "status": "new"
          },
          {
            "country": "VC",
            "name": "St. Vincent and The Grenadines",
            "position": 194,
            "movement": -98
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
            "movement": -1
          }
        ]
      },
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MY",
            "name": "Malaysia",
            "position": 124,
            "movement": -29
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 3,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 6,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 6,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 7,
            "movement": 4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 11,
            "movement": 1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 14,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 19,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 21,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 22,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 24,
            "movement": 0
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 26,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 37,
            "movement": 2
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 67,
            "movement": -4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 78,
            "movement": -2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 88,
            "movement": 5
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 107,
            "movement": -24
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 180,
            "movement": null,
            "status": "new"
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
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
            "country": "NG",
            "name": "Nigeria",
            "position": 42,
            "movement": 8
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 50,
            "movement": 8
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 56,
            "movement": 20
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 65,
            "movement": -6
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 98,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 140,
            "movement": 11
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 148,
            "movement": -17
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
            "position": 35,
            "movement": -25
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 178,
            "movement": -36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
            "movement": -162
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
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
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
            "position": 9,
            "movement": 0
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
            "position": 6,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 15,
            "movement": 1
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 19,
            "movement": 40
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 21,
            "movement": 10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 26,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 30,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 34,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 36,
            "movement": 10
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 44,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 45,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 51,
            "movement": 7
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 63,
            "movement": 41
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 71,
            "movement": -6
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 95,
            "movement": -7
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 134,
            "movement": 9
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 144,
            "movement": -28
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 176,
            "movement": -36
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 177,
            "movement": -1
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 98,
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
            "position": 42,
            "movement": 0
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
            "position": 40,
            "movement": -1
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
            "position": 26,
            "movement": 32
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
            "movement": -12
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/580fc298c0319c8037b1062f389790b0/500x500-000000-80-0-0.jpg"
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
            "position": 6,
            "movement": -1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 9,
            "movement": 0
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 11,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 12,
            "movement": -4
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 16,
            "movement": 1
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 16,
            "movement": 6
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": 1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 22,
            "movement": 4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 22,
            "movement": 1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 27,
            "movement": -3
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 29,
            "movement": 5
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 49,
            "movement": 4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 60,
            "movement": 20
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 100,
            "movement": 1
          },
          {
            "country": "AO",
            "name": "Angola",
            "position": 102,
            "movement": 4
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 110,
            "movement": -1
          },
          {
            "country": "DM",
            "name": "Dominica",
            "position": 149,
            "movement": -64
          },
          {
            "country": "BW",
            "name": "Botswana",
            "position": 194,
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
            "position": 17,
            "movement": -1
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
            "position": 6,
            "movement": 20
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
            "position": 12,
            "movement": -6
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 9,
            "movement": 8
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 10,
            "movement": -1
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 14,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 15,
            "movement": 4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 17,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 18,
            "movement": -7
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 19,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 20,
            "movement": 2
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 20,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 35,
            "movement": 75
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 39,
            "movement": 44
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 43,
            "movement": 8
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 60,
            "movement": -49
          },
          {
            "country": "TC",
            "name": "Turks and Caicos",
            "position": 65,
            "movement": -53
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 71,
            "movement": 19
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 72,
            "movement": 15
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 73,
            "movement": 5
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 76,
            "movement": 85
          },
          {
            "country": "GW",
            "name": "Guinea-Bissau",
            "position": 81,
            "movement": 18
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": -16
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 133,
            "movement": 5
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
            "position": 112,
            "movement": -20
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Mr. Money With The Vibe",
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
            "country": "UG",
            "name": "Uganda",
            "position": 7,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 8,
            "movement": 3
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 8,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 9,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 11,
            "movement": 53
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 12,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 15,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 17,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 17,
            "movement": -1
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 20,
            "movement": 40
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 27,
            "movement": 7
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 40,
            "movement": -1
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 46,
            "movement": 42
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 78,
            "movement": -59
          },
          {
            "country": "QA",
            "name": "Qatar",
            "position": 81,
            "movement": -50
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 82,
            "movement": -3
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 91,
            "movement": 17
          },
          {
            "country": "SZ",
            "name": "Swaziland",
            "position": 125,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 134,
            "movement": 20
          },
          {
            "country": "MZ",
            "name": "Mozambique",
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
            "position": 9,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 11,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 18,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 24,
            "movement": 15
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 32,
            "movement": -5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 43,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 46,
            "movement": 17
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 47,
            "movement": -17
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 49,
            "movement": -2
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 64,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 65,
            "movement": -14
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 107,
            "movement": 3
          },
          {
            "country": "CV",
            "name": "Cape Verde",
            "position": 109,
            "movement": -78
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 110,
            "movement": -8
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 119,
            "movement": -8
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 128,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 151,
            "movement": null,
            "status": "new"
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 156,
            "movement": 40
          },
          {
            "country": "GD",
            "name": "Grenada",
            "position": 162,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 177,
            "movement": -60
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
            "position": 13,
            "movement": 1
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
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 5,
            "movement": 0
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 9,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 15,
            "movement": 17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 15,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 17,
            "movement": -6
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 27,
            "movement": 2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 32,
            "movement": 11
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 34,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 39,
            "movement": 1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 42,
            "movement": 3
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 44,
            "movement": -4
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 51,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 81,
            "movement": 2
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 101,
            "movement": 18
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 113,
            "movement": 20
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 145,
            "movement": 18
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
            "position": 136,
            "movement": 5
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
            "position": 8,
            "movement": 1
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
            "position": 25,
            "movement": 2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 29,
            "movement": 0
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 37,
            "movement": 2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 40,
            "movement": 5
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 62,
            "movement": 39
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 64,
            "movement": -1
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 68,
            "movement": 7
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 68,
            "movement": 0
          },
          {
            "country": "CG",
            "name": "Republic of the Congo",
            "position": 72,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 78,
            "movement": 3
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 16
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 88,
            "movement": 34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 111,
            "movement": -2
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 122,
            "movement": null,
            "status": "new"
          },
          {
            "country": "MG",
            "name": "Madagascar",
            "position": 167,
            "movement": -11
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 168,
            "movement": -33
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
            "movement": 33
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 56,
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
            "position": 75,
            "movement": 9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/15071ecd8b0292000edb00d1152ff166/500x500-000000-80-0-0.jpg"
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
            "position": 3,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 8,
            "movement": 0
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 16,
            "movement": -3
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 20,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 27,
            "movement": 9
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 31,
            "movement": null,
            "status": "new"
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 44,
            "movement": -4
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 46,
            "movement": -3
          },
          {
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 49,
            "movement": 0
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 60,
            "movement": -4
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 114,
            "movement": -27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 142,
            "movement": -95
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 151,
            "movement": -85
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 179,
            "movement": -56
          },
          {
            "country": "ZW",
            "name": "Zimbabwe",
            "position": 190,
            "movement": -84
          },
          {
            "country": "AE",
            "name": "United Arab Emirates",
            "position": 192,
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
    "title": "MCBH",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "LR",
            "name": "Liberia",
            "position": 26,
            "movement": 14
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 30,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 44,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 49,
            "movement": -2
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 56,
            "movement": -1
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 61,
            "movement": -3
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 61,
            "movement": -2
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 69,
            "movement": -30
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 78,
            "movement": 3
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 108,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
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
            "position": 25,
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
            "position": 38,
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
            "position": 10,
            "movement": 36
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
            "position": 20,
            "movement": -6
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
            "position": 19,
            "movement": 0
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 30,
            "movement": 36
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 32,
            "movement": 15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 40,
            "movement": 2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 45,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 50,
            "movement": 3
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 58,
            "movement": 9
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 64,
            "movement": -4
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 77,
            "movement": 5
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 81,
            "movement": -27
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 118,
            "movement": 31
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 139,
            "movement": 16
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 161,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SN",
            "name": "Senegal",
            "position": 199,
            "movement": -42
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
            "position": 87,
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
    "title": "Wa",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 58,
            "movement": 0
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 60,
            "movement": 1
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 66,
            "movement": -15
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 74,
            "movement": -1
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 78,
            "movement": 26
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 97,
            "movement": -6
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 108,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 113,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 118,
            "movement": 4
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 122,
            "movement": 50
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 125,
            "movement": 46
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
            "position": 67,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 191,
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
            "position": 37,
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
            "position": 27,
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
    "title": "Remember",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 17,
            "movement": 39
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 40,
            "movement": 5
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 62,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 86,
            "movement": -7
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 86,
            "movement": -17
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 91,
            "movement": 82
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 98,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 129,
            "movement": 2
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 138,
            "movement": 7
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 153,
            "movement": 13
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 167,
            "movement": 12
          },
          {
            "country": "ML",
            "name": "Mali",
            "position": 171,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 183,
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
            "position": 50,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 12,
            "movement": 12
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 35,
            "movement": 0
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 38,
            "movement": -4
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 48,
            "movement": -1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 66,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 69,
            "movement": 11
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 78,
            "movement": 31
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 107,
            "movement": 66
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 108,
            "movement": 3
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 109,
            "movement": -45
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 119,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 180,
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
            "position": 88,
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
            "position": 64,
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
    "title": "Bandana",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "KE",
            "name": "Kenya",
            "position": 35,
            "movement": 9
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 39,
            "movement": 23
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 39,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 70,
            "movement": 39
          },
          {
            "country": "NA",
            "name": "Namibia",
            "position": 72,
            "movement": 4
          },
          {
            "country": "PG",
            "name": "Papua New Guinea",
            "position": 83,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 102,
            "movement": -14
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 103,
            "movement": -35
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 125,
            "movement": -17
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 126,
            "movement": -1
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 137,
            "movement": 15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 172,
            "movement": -39
          },
          {
            "country": "FJ",
            "name": "Fiji",
            "position": 189,
            "movement": -103
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
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3a0ea8b02098effdf5ecce496d515176/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Eja Meja",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 1,
        "entries": [
          {
            "country": "TD",
            "name": "Chad",
            "position": 1,
            "movement": 48
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 14,
            "movement": 1
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 32,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 37,
            "movement": -5
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 43,
            "movement": -17
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 55,
            "movement": -2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 95,
            "movement": -34
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 111,
            "movement": -6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 116,
            "movement": 5
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 138,
            "movement": 32
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 149,
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
            "position": 34,
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
            "position": 98,
            "movement": -5
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
            "position": 36,
            "movement": -5
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/065baff6ae2b9caecf19bb6aa423644a/500x500-000000-80-0-0.jpg"
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
            "position": 26,
            "movement": -4
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 38,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 40,
            "movement": -6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 41,
            "movement": 29
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 53,
            "movement": -16
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 69,
            "movement": 0
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 77,
            "movement": 21
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 84,
            "movement": 19
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 112,
            "movement": -16
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 142,
            "movement": -34
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 153,
            "movement": 8
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 196,
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
            "position": 53,
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
            "position": 36,
            "movement": 28
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
            "position": 16,
            "movement": -1
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 42,
            "movement": -26
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 64,
            "movement": 1
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 67,
            "movement": -2
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 69,
            "movement": -15
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 145,
            "movement": -1
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 182,
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
            "position": 70,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 83,
            "movement": 1
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 94,
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
            "position": 62,
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
            "position": 22,
            "movement": -4
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
            "country": "LR",
            "name": "Liberia",
            "position": 30,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 31,
            "movement": -18
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 40,
            "movement": 2
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 46,
            "movement": 2
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 53,
            "movement": -20
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 66,
            "movement": -9
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 94,
            "movement": null,
            "status": "new"
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 135,
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
            "position": 26,
            "movement": -1
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
            "position": 155,
            "movement": -10
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
            "movement": -24
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
            "position": 30,
            "movement": -8
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
            "country": "SL",
            "name": "Sierra Leone",
            "position": 30,
            "movement": 43
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 32,
            "movement": -4
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 76,
            "movement": 16
          },
          {
            "country": "TD",
            "name": "Chad",
            "position": 82,
            "movement": -35
          },
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 84,
            "movement": 11
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 85,
            "movement": -13
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 112,
            "movement": 19
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 126,
            "movement": 18
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 140,
            "movement": 33
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 157,
            "movement": -18
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 172,
            "movement": -39
          },
          {
            "country": "MW",
            "name": "Malawi",
            "position": 195,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "album"
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
            "position": 10,
            "movement": 9
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 47,
            "movement": 10
          },
          {
            "country": "BF",
            "name": "Burkina Faso",
            "position": 84,
            "movement": null,
            "status": "new"
          },
          {
            "country": "TZ",
            "name": "Tanzania",
            "position": 113,
            "movement": -10
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 122,
            "movement": -31
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 151,
            "movement": -25
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 91,
            "movement": 1
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
            "position": 69,
            "movement": -1
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
            "position": 88,
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
            "position": 55,
            "movement": null,
            "status": "re"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
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
            "position": 59,
            "movement": 43
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 70,
            "movement": -3
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 92,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 106,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 165,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 186,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 195,
            "movement": -40
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 198,
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
            "position": 90,
            "movement": 10
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
            "position": 44,
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
    "title": "Oba",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "GM",
            "name": "Gambia",
            "position": 81,
            "movement": -8
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 104,
            "movement": -13
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 109,
            "movement": 6
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 114,
            "movement": -7
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 121,
            "movement": 2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 144,
            "movement": null,
            "status": "new"
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 192,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 200,
            "movement": -30
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
            "position": 54,
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
    "title": "Asambe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 109,
            "movement": -5
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 117,
            "movement": 14
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 130,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 151,
            "movement": -61
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 170,
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
            "position": 139,
            "movement": 14
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
            "position": 94,
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
    "title": "Nzaza",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 103,
            "movement": 36
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 107,
            "movement": -2
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 127,
            "movement": 6
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 142,
            "movement": null,
            "status": "new"
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
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
            "position": 40,
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
            "position": 36,
            "movement": 4
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
            "country": "CI",
            "name": "Côte d'Ivoire",
            "position": 73,
            "movement": -8
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 89,
            "movement": 27
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 109,
            "movement": 48
          },
          {
            "country": "ZM",
            "name": "Zambia",
            "position": 149,
            "movement": 6
          },
          {
            "country": "CM",
            "name": "Cameroon",
            "position": 170,
            "movement": -25
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 194,
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
            "position": 146,
            "movement": 4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/af30a7aeb43913343236936ca5237084/500x500-000000-80-0-0.jpg"
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
            "position": 61,
            "movement": 69
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 102,
            "movement": -10
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 128,
            "movement": -6
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 196,
            "movement": null,
            "status": "new"
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
        "platform": "Deezer",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 53,
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
            "country": "LR",
            "name": "Liberia",
            "position": 40,
            "movement": -10
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 89,
            "movement": -17
          },
          {
            "country": "UG",
            "name": "Uganda",
            "position": 97,
            "movement": -25
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 99,
            "movement": 6
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 111,
            "movement": 17
          },
          {
            "country": "GH",
            "name": "Ghana",
            "position": 156,
            "movement": 22
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/89d5885fe38a406504224ed98c1ab605/500x500-000000-80-0-0.jpg"
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
            "position": 102,
            "movement": 27
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 170,
            "movement": -41
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 184,
            "movement": -16
          },
          {
            "country": "BJ",
            "name": "Benin",
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
            "position": 63,
            "movement": 8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Skilful",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 98,
            "movement": null,
            "status": "new"
          },
          {
            "country": "GM",
            "name": "Gambia",
            "position": 116,
            "movement": 52
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 137,
            "movement": -22
          },
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 140,
            "movement": -6
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 162,
            "movement": -26
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/6e1ad63b14bb184c957d0887f1097e43/500x500-000000-80-0-0.jpg"
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
            "position": 55,
            "movement": -2
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 82,
            "movement": 4
          },
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
    "cover": "https://cdn-images.dzcdn.net/images/cover/671d8a1ee4c2d4ca3e7c32877bbfee6a/500x500-000000-80-0-0.jpg"
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
            "position": 123,
            "movement": null,
            "status": "new"
          },
          {
            "country": "NE",
            "name": "Niger",
            "position": 179,
            "movement": -66
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
            "position": 47,
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
    "title": "Turbulence",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 102,
            "movement": -2
          },
          {
            "country": "SL",
            "name": "Sierra Leone",
            "position": 166,
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
            "position": 92,
            "movement": -6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 115,
            "movement": -8
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
            "position": 129,
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
            "position": 47,
            "movement": -45
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/3e2739afe89b70d123d223f12e6f5d92/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dupe",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 157,
            "movement": -6
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
            "position": 190,
            "movement": -22
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
            "position": 182,
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
            "position": 75,
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
            "position": 156,
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
            "position": 82,
            "movement": -4
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Terminator",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 175,
            "movement": -7
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
            "position": 100,
            "movement": -8
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/f15012ed6d84db07276cff80e8dcd75f/500x500-000000-80-0-0.jpg"
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
            "position": 124,
            "movement": 59
          },
          {
            "country": "LR",
            "name": "Liberia",
            "position": 150,
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
    "title": "Fuji Vibe",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NE",
            "name": "Niger",
            "position": 143,
            "movement": -45
          },
          {
            "country": "BJ",
            "name": "Benin",
            "position": 167,
            "movement": 21
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
            "position": 178,
            "movement": 14
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
            "position": 140,
            "movement": -7
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/a4c216574fd4d381c73a4df2f512f599/500x500-000000-80-0-0.jpg"
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
            "position": 161,
            "movement": -6
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
            "position": 193,
            "movement": null,
            "status": "new"
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
            "position": 9,
            "movement": -4
          },
          {
            "country": "KE",
            "name": "Kenya",
            "position": 97,
            "movement": null,
            "status": "new"
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
            "position": 97,
            "movement": -3
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
            "position": 137,
            "movement": -9
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 119,
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
            "position": 168,
            "movement": 6
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Basquiat",
    "platforms": [
      {
        "platform": "Spotify",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 189,
            "movement": 11
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/57c1ee5810247893a3fc33500c08d5b8/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Goodbye",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "MR",
            "name": "Mauritania",
            "position": 146,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d096ea1c1019d1af67c0a2e434890e1e/500x500-000000-80-0-0.jpg"
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
            "position": 199,
            "movement": 0
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/d3d1d769407f8180412a67a4f9ef7c85/500x500-000000-80-0-0.jpg"
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
            "position": 147,
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/77fc9f281aabc0cfb5c17649afe08c8c/500x500-000000-80-0-0.jpg"
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
            "movement": 1
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/2538836fe7ba780c5a3a4c04aef4fac5/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Dull",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "SL",
            "name": "Sierra Leone",
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
    "title": "Stubborn",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 122,
            "movement": null,
            "status": "new"
          }
        ]
      }
    ],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/8ecef1fd19cf7846a2fe2cf0e3ef3532/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Che Che",
    "platforms": [
      {
        "platform": "iTunes",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 103,
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
    "title": "Ololade Asake - EP",
    "platforms": [
      {
        "platform": "Apple Music",
        "numberOnes": 0,
        "entries": [
          {
            "country": "NG",
            "name": "Nigeria",
            "position": 115,
            "movement": -1
          }
        ]
      }
    ],
    "kind": "album",
    "cover": "https://cdn-images.dzcdn.net/images/cover/692c4f384976719fee0db6f5309d7c8d/500x500-000000-80-0-0.jpg"
  },
  {
    "title": "Happiness",
    "platforms": [],
    "kind": "song",
    "cover": "https://cdn-images.dzcdn.net/images/cover/1aca731992c29efe91ca4639235a69c8/500x500-000000-80-0-0.jpg"
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
  