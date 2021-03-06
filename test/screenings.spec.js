import { jest } from "@jest/globals";
import comingScreenings from "../src/js/modules/screenings.js";

beforeEach(() => {
  // Fake the date to 2022-02-05 when running tests
  // so that the mock data never gets old
  jest.useFakeTimers();
  jest.setSystemTime(new Date(2022, 1, 5));
});

afterEach(() => {
  jest.clearAllTimers();
});

test("Correct response format", async () => {
  const payload = await comingScreenings();

  expect(payload.data.length).toBeGreaterThan(0);
  expect(payload.data[0].time).toBeTruthy();
  expect(payload.data[0].room).toBeTruthy();
  expect(payload.data[0].movie.title).toBeTruthy();
  expect(payload.data[0].movie.id).toBeGreaterThan(0);
  expect(payload.data[0].movie.image.url).toBeTruthy();
});

test("Upcoming screenings only", async () => {
  const payload = await comingScreenings();
  const now = new Date();

  expect(payload.data.length).toBeGreaterThan(0);
  payload.data.forEach((screening) => {
    const screeningTime = new Date(screening.time);
    expect(screeningTime > now).toBeTruthy();
  });
});

test("At most ten screenings", async () => {
  const payload = await comingScreenings();

  expect(payload.data.length).toBeLessThan(11);
});

// Mock API
const api = {
  async loadScreenings() {
    return [
      {
        "id": 49,
        "attributes": {
          "start_time": "2022-02-05T12:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:26.441Z",
          "updatedAt": "2022-01-23T10:32:26.441Z",
          "movie": {
            "data": {
              "id": 5,
              "attributes": {
                "title": "12 Angry Men",
                "imdbId": "tt0050083",
                "intro": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:01:21.807Z",
                "updatedAt": "2022-01-18T08:48:15.429Z",
                "publishedAt": "2022-01-17T05:01:24.036Z"
              }
            }
          }
        }
      },
      {
        "id": 50,
        "attributes": {
          "start_time": "2022-02-05T17:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:26.971Z",
          "updatedAt": "2022-01-23T10:32:26.971Z",
          "movie": {
            "data": {
              "id": 8,
              "attributes": {
                "title": "Idiocracy",
                "imdbId": "tt0387808",
                "intro": "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                },
                "createdAt": "2022-01-17T09:32:08.570Z",
                "updatedAt": "2022-01-18T08:48:02.876Z",
                "publishedAt": "2022-01-17T09:32:12.868Z"
              }
            }
          }
        }
      },
      {
        "id": 51,
        "attributes": {
          "start_time": "2022-02-05T19:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:27.507Z",
          "updatedAt": "2022-01-23T10:32:27.507Z",
          "movie": {
            "data": {
              "id": 10,
              "attributes": {
                "title": "Threat Level Midnight: The Movie",
                "imdbId": "tt11620828",
                "intro": "After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg"
                },
                "createdAt": "2022-01-17T10:51:45.145Z",
                "updatedAt": "2022-01-18T08:47:13.309Z",
                "publishedAt": "2022-01-17T10:51:53.355Z"
              }
            }
          }
        }
      },
      {
        "id": 52,
        "attributes": {
          "start_time": "2022-02-05T21:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:28.083Z",
          "updatedAt": "2022-01-23T10:32:28.083Z",
          "movie": {
            "data": {
              "id": 4,
              "attributes": {
                "title": "The Dark Knight",
                "imdbId": "tt0468569",
                "intro": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:00:58.423Z",
                "updatedAt": "2022-01-18T08:47:52.866Z",
                "publishedAt": "2022-01-17T05:01:00.594Z"
              }
            }
          }
        }
      },
      {
        "id": 53,
        "attributes": {
          "start_time": "2022-02-06T12:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:28.663Z",
          "updatedAt": "2022-01-23T10:32:28.663Z",
          "movie": {
            "data": {
              "id": 5,
              "attributes": {
                "title": "12 Angry Men",
                "imdbId": "tt0050083",
                "intro": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:01:21.807Z",
                "updatedAt": "2022-01-18T08:48:15.429Z",
                "publishedAt": "2022-01-17T05:01:24.036Z"
              }
            }
          }
        }
      },
      {
        "id": 54,
        "attributes": {
          "start_time": "2022-02-06T17:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:29.220Z",
          "updatedAt": "2022-01-23T10:32:29.220Z",
          "movie": {
            "data": {
              "id": 4,
              "attributes": {
                "title": "The Dark Knight",
                "imdbId": "tt0468569",
                "intro": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:00:58.423Z",
                "updatedAt": "2022-01-18T08:47:52.866Z",
                "publishedAt": "2022-01-17T05:01:00.594Z"
              }
            }
          }
        }
      },
      {
        "id": 55,
        "attributes": {
          "start_time": "2022-02-06T19:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:30.046Z",
          "updatedAt": "2022-01-23T10:32:30.046Z",
          "movie": {
            "data": {
              "id": 5,
              "attributes": {
                "title": "12 Angry Men",
                "imdbId": "tt0050083",
                "intro": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:01:21.807Z",
                "updatedAt": "2022-01-18T08:48:15.429Z",
                "publishedAt": "2022-01-17T05:01:24.036Z"
              }
            }
          }
        }
      },
      {
        "id": 56,
        "attributes": {
          "start_time": "2022-02-06T21:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:30.580Z",
          "updatedAt": "2022-01-23T10:32:30.580Z",
          "movie": {
            "data": {
              "id": 3,
              "attributes": {
                "title": "The Godfather: Part II",
                "imdbId": "tt0071562",
                "intro": "The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:00:31.562Z",
                "updatedAt": "2022-01-18T08:46:47.388Z",
                "publishedAt": "2022-01-17T05:00:33.453Z"
              }
            }
          }
        }
      },
      {
        "id": 57,
        "attributes": {
          "start_time": "2022-02-07T12:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:31.119Z",
          "updatedAt": "2022-01-23T10:32:31.119Z",
          "movie": {
            "data": {
              "id": 4,
              "attributes": {
                "title": "The Dark Knight",
                "imdbId": "tt0468569",
                "intro": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:00:58.423Z",
                "updatedAt": "2022-01-18T08:47:52.866Z",
                "publishedAt": "2022-01-17T05:01:00.594Z"
              }
            }
          }
        }
      },
      {
        "id": 58,
        "attributes": {
          "start_time": "2022-02-07T17:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:31.650Z",
          "updatedAt": "2022-01-23T10:32:31.650Z",
          "movie": {
            "data": {
              "id": 3,
              "attributes": {
                "title": "The Godfather: Part II",
                "imdbId": "tt0071562",
                "intro": "The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:00:31.562Z",
                "updatedAt": "2022-01-18T08:46:47.388Z",
                "publishedAt": "2022-01-17T05:00:33.453Z"
              }
            }
          }
        }
      },
      {
        "id": 59,
        "attributes": {
          "start_time": "2022-02-07T19:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:32.213Z",
          "updatedAt": "2022-01-23T10:32:32.213Z",
          "movie": {
            "data": {
              "id": 8,
              "attributes": {
                "title": "Idiocracy",
                "imdbId": "tt0387808",
                "intro": "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                },
                "createdAt": "2022-01-17T09:32:08.570Z",
                "updatedAt": "2022-01-18T08:48:02.876Z",
                "publishedAt": "2022-01-17T09:32:12.868Z"
              }
            }
          }
        }
      },
      {
        "id": 60,
        "attributes": {
          "start_time": "2022-02-07T21:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:32.752Z",
          "updatedAt": "2022-01-23T10:32:32.752Z",
          "movie": {
            "data": {
              "id": 3,
              "attributes": {
                "title": "The Godfather: Part II",
                "imdbId": "tt0071562",
                "intro": "The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:00:31.562Z",
                "updatedAt": "2022-01-18T08:46:47.388Z",
                "publishedAt": "2022-01-17T05:00:33.453Z"
              }
            }
          }
        }
      },
      {
        "id": 61,
        "attributes": {
          "start_time": "2022-02-08T12:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:33.367Z",
          "updatedAt": "2022-01-23T10:32:33.367Z",
          "movie": {
            "data": {
              "id": 4,
              "attributes": {
                "title": "The Dark Knight",
                "imdbId": "tt0468569",
                "intro": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:00:58.423Z",
                "updatedAt": "2022-01-18T08:47:52.866Z",
                "publishedAt": "2022-01-17T05:01:00.594Z"
              }
            }
          }
        }
      },
      {
        "id": 62,
        "attributes": {
          "start_time": "2022-02-08T17:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:33.919Z",
          "updatedAt": "2022-01-23T10:32:33.919Z",
          "movie": {
            "data": {
              "id": 5,
              "attributes": {
                "title": "12 Angry Men",
                "imdbId": "tt0050083",
                "intro": "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg"
                },
                "createdAt": "2022-01-17T05:01:21.807Z",
                "updatedAt": "2022-01-18T08:48:15.429Z",
                "publishedAt": "2022-01-17T05:01:24.036Z"
              }
            }
          }
        }
      },
      {
        "id": 63,
        "attributes": {
          "start_time": "2022-02-08T19:00:00.000Z",
          "room": "Stora salongen",
          "createdAt": "2022-01-23T10:32:34.469Z",
          "updatedAt": "2022-01-23T10:32:34.469Z",
          "movie": {
            "data": {
              "id": 10,
              "attributes": {
                "title": "Threat Level Midnight: The Movie",
                "imdbId": "tt11620828",
                "intro": "After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)",
                "image": {
                  "url": "https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg"
                },
                "createdAt": "2022-01-17T10:51:45.145Z",
                "updatedAt": "2022-01-18T08:47:13.309Z",
                "publishedAt": "2022-01-17T10:51:53.355Z"
              }
            }
          }
        }
      },
    ];
  },
};

      // {
      //   id: 1,
      //   attributes: {
      //     start_time: "2022-01-24T12:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:31:58.536Z",
      //     updatedAt: "2022-01-23T10:31:58.536Z",
      //     movie: {
      //       data: {
      //         id: 10,
      //         attributes: {
      //           title: "Threat Level Midnight: The Movie",
      //           imdbId: "tt11620828",
      //           intro:
      //             "After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T10:51:45.145Z",
      //           updatedAt: "2022-01-18T08:47:13.309Z",
      //           publishedAt: "2022-01-17T10:51:53.355Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 2,
      //   attributes: {
      //     start_time: "2022-01-24T17:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:31:59.065Z",
      //     updatedAt: "2022-01-23T10:31:59.065Z",
      //     movie: {
      //       data: {
      //         id: 8,
      //         attributes: {
      //           title: "Idiocracy",
      //           imdbId: "tt0387808",
      //           intro:
      //             "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T09:32:08.570Z",
      //           updatedAt: "2022-01-18T08:48:02.876Z",
      //           publishedAt: "2022-01-17T09:32:12.868Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 3,
      //   attributes: {
      //     start_time: "2022-01-24T19:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:31:59.612Z",
      //     updatedAt: "2022-01-23T10:31:59.612Z",
      //     movie: {
      //       data: {
      //         id: 5,
      //         attributes: {
      //           title: "12 Angry Men",
      //           imdbId: "tt0050083",
      //           intro:
      //             "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T05:01:21.807Z",
      //           updatedAt: "2022-01-18T08:48:15.429Z",
      //           publishedAt: "2022-01-17T05:01:24.036Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 4,
      //   attributes: {
      //     start_time: "2022-01-24T21:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:00.277Z",
      //     updatedAt: "2022-01-23T10:32:00.277Z",
      //     movie: {
      //       data: {
      //         id: 5,
      //         attributes: {
      //           title: "12 Angry Men",
      //           imdbId: "tt0050083",
      //           intro:
      //             "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T05:01:21.807Z",
      //           updatedAt: "2022-01-18T08:48:15.429Z",
      //           publishedAt: "2022-01-17T05:01:24.036Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 5,
      //   attributes: {
      //     start_time: "2022-01-25T12:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:00.822Z",
      //     updatedAt: "2022-01-23T10:32:00.822Z",
      //     movie: {
      //       data: {
      //         id: 3,
      //         attributes: {
      //           title: "The Godfather: Part II",
      //           imdbId: "tt0071562",
      //           intro:
      //             "The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T05:00:31.562Z",
      //           updatedAt: "2022-01-18T08:46:47.388Z",
      //           publishedAt: "2022-01-17T05:00:33.453Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 6,
      //   attributes: {
      //     start_time: "2022-01-25T17:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:01.366Z",
      //     updatedAt: "2022-01-23T10:32:01.366Z",
      //     movie: {
      //       data: {
      //         id: 3,
      //         attributes: {
      //           title: "The Godfather: Part II",
      //           imdbId: "tt0071562",
      //           intro:
      //             "The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T05:00:31.562Z",
      //           updatedAt: "2022-01-18T08:46:47.388Z",
      //           publishedAt: "2022-01-17T05:00:33.453Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 7,
      //   attributes: {
      //     start_time: "2022-01-25T19:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:01.931Z",
      //     updatedAt: "2022-01-23T10:32:01.931Z",
      //     movie: {
      //       data: {
      //         id: 10,
      //         attributes: {
      //           title: "Threat Level Midnight: The Movie",
      //           imdbId: "tt11620828",
      //           intro:
      //             "After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T10:51:45.145Z",
      //           updatedAt: "2022-01-18T08:47:13.309Z",
      //           publishedAt: "2022-01-17T10:51:53.355Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 8,
      //   attributes: {
      //     start_time: "2022-01-25T21:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:02.611Z",
      //     updatedAt: "2022-01-23T10:32:02.611Z",
      //     movie: {
      //       data: {
      //         id: 1,
      //         attributes: {
      //           title: "The Shawshank Redemption",
      //           imdbId: "tt0111161",
      //           intro:
      //             "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.\n\nSee more info [on IMDB](https://imdb.com/title/tt0111161)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T04:59:14.315Z",
      //           updatedAt: "2022-01-18T08:47:01.417Z",
      //           publishedAt: "2022-01-17T04:59:16.846Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 9,
      //   attributes: {
      //     start_time: "2022-01-26T12:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:03.180Z",
      //     updatedAt: "2022-01-23T10:32:03.180Z",
      //     movie: {
      //       data: {
      //         id: 5,
      //         attributes: {
      //           title: "12 Angry Men",
      //           imdbId: "tt0050083",
      //           intro:
      //             "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T05:01:21.807Z",
      //           updatedAt: "2022-01-18T08:48:15.429Z",
      //           publishedAt: "2022-01-17T05:01:24.036Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 10,
      //   attributes: {
      //     start_time: "2022-01-26T17:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:03.768Z",
      //     updatedAt: "2022-01-23T10:32:03.768Z",
      //     movie: {
      //       data: {
      //         id: 3,
      //         attributes: {
      //           title: "The Godfather: Part II",
      //           imdbId: "tt0071562",
      //           intro:
      //             "The early life and career of **Vito Corleone** in 1920s New York City is portrayed, while his son, **Michael**, expands and tightens his grip on the family crime syndicate.\n\nSee more info [on IMDB](https://imdb.com/title/tt0071562)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T05:00:31.562Z",
      //           updatedAt: "2022-01-18T08:46:47.388Z",
      //           publishedAt: "2022-01-17T05:00:33.453Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 11,
      //   attributes: {
      //     start_time: "2022-01-26T19:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:04.326Z",
      //     updatedAt: "2022-01-23T10:32:04.326Z",
      //     movie: {
      //       data: {
      //         id: 10,
      //         attributes: {
      //           title: "Threat Level Midnight: The Movie",
      //           imdbId: "tt11620828",
      //           intro:
      //             "After secret agent **Michael Scarn** (played by Steve Carell) is forced into retirement due to the death of his wife **Catherine Zeta-Scarn**, the President of the United States of America (played by Craig Robinson) requests that he prevents **Goldenface** (played by John Krasinski) from blowing up the NHL All-Star Game and killing several hostages.\n\nSee more info [on IMDB](https://imdb.com/title/tt11620828)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BZjMzNzE4ZGItMDI5Zi00ZjE3LThkODctYTlhZWY1ZTdmMGNjXkEyXkFqcGdeQXVyOTExNzM4NDM@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T10:51:45.145Z",
      //           updatedAt: "2022-01-18T08:47:13.309Z",
      //           publishedAt: "2022-01-17T10:51:53.355Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 12,
      //   attributes: {
      //     start_time: "2022-01-26T21:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:05.168Z",
      //     updatedAt: "2022-01-23T10:32:05.168Z",
      //     movie: {
      //       data: {
      //         id: 2,
      //         attributes: {
      //           title: "The Godfather",
      //           imdbId: "tt0068646",
      //           intro:
      //             "The Godfather follows **Vito Corleone**, Don of the Corleone family, as he passes the mantel to his unwilling son, **Michael**.\n\nSee more info [on IMDB](https://imdb.com/title/tt0068646)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T04:59:42.763Z",
      //           updatedAt: "2022-01-18T08:47:25.840Z",
      //           publishedAt: "2022-01-17T04:59:44.929Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 13,
      //   attributes: {
      //     start_time: "2022-01-27T12:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:05.701Z",
      //     updatedAt: "2022-01-23T10:32:05.701Z",
      //     movie: {
      //       data: {
      //         id: 4,
      //         attributes: {
      //           title: "The Dark Knight",
      //           imdbId: "tt0468569",
      //           intro:
      //             "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, **Batman** must accept one of the greatest psychological and physical tests of his ability to fight injustice.\n\nSee more info [on IMDB](https://imdb.com/title/tt0468569)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T05:00:58.423Z",
      //           updatedAt: "2022-01-18T08:47:52.866Z",
      //           publishedAt: "2022-01-17T05:01:00.594Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 14,
      //   attributes: {
      //     start_time: "2022-01-27T17:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:06.233Z",
      //     updatedAt: "2022-01-23T10:32:06.233Z",
      //     movie: {
      //       data: {
      //         id: 8,
      //         attributes: {
      //           title: "Idiocracy",
      //           imdbId: "tt0387808",
      //           intro:
      //             "Private **Joe Bauers**, a decisively average American, is selected as a guinea pig for a top-secret hibernation program but is forgotten, awakening to a future so incredibly moronic he's easily the most intelligent person alive.\n\nSee more info [on IMDB](https://imdb.com/title/tt0387808)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMWQ4MzI2ZDQtYjk3MS00ODdjLTkwN2QtOTBjYzIwM2RmNzgyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T09:32:08.570Z",
      //           updatedAt: "2022-01-18T08:48:02.876Z",
      //           publishedAt: "2022-01-17T09:32:12.868Z",
      //         },
      //       },
      //     },
      //   },
      // },
      // {
      //   id: 15,
      //   attributes: {
      //     start_time: "2022-01-27T19:00:00.000Z",
      //     room: "Stora salongen",
      //     createdAt: "2022-01-23T10:32:06.896Z",
      //     updatedAt: "2022-01-23T10:32:06.896Z",
      //     movie: {
      //       data: {
      //         id: 5,
      //         attributes: {
      //           title: "12 Angry Men",
      //           imdbId: "tt0050083",
      //           intro:
      //             "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.\n\nSee more info [on IMDB](https://imdb.com/title/tt0050083)",
      //           image: {
      //             url: "https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
      //           },
      //           createdAt: "2022-01-17T05:01:21.807Z",
      //           updatedAt: "2022-01-18T08:48:15.429Z",
      //           publishedAt: "2022-01-17T05:01:24.036Z",
      //         },
      //       },
      //     },
      //   },
      // },
