// src/screensConfig.js

export const screens = {
  welcome: {
    background: "/screens/welcome.png",
    hotspots: [
      {
        id: "start",
        x: 10,
        y: 75,
        w: 80,
        h: 12,
        to: "/path",
      },
    ],
  },

  path: {
    background: "/screens/path.png",
    hotspots: [
      {
        id: "choose-a",
        x: 10,
        y: 45,
        w: 80,
        h: 12,
        to: "/a/1",
      },
      {
        id: "choose-b",
        x: 10,
        y: 60,
        w: 80,
        h: 12,
        to: "/b/1",
      },
      {
        id: "choose-c",
        x: 10,
        y: 75,
        w: 80,
        h: 12,
        to: "/c/1",
      },
    ],
  },
};
