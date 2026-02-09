// src/screensConfig.js

export const screens = {
  welcome: {
    background: "/screens/welcome.png",
    hotspots: [
      { id: "start", x: 10, y: 75, w: 80, h: 12, to: "/path" },
    ],
  },

  path: {
    background: "/screens/path.png",
    hotspots: [
      { id: "a", x: 5, y: 53, w: 28, h: 6, to: "/a/1" },
      { id: "b", x: 45, y: 53, w: 28, h: 6, to: "/b/1" },
      { id: "c", x: 65, y: 53, w: 28, h: 6, to: "/c/1" },
    ],
  },

  a1: {
    background: "/screens/a1.png",
    hotspots: [{ id: "next", x: 10, y: 75, w: 80, h: 12, to: "/a/2" }],
  },
  a2: {
    background: "/screens/a2.png",
    hotspots: [{ id: "next", x: 10, y: 75, w: 80, h: 12, to: "/a/3" }],
  },
  a3: {
    background: "/screens/a3.png",
    hotspots: [{ id: "done", x: 10, y: 75, w: 80, h: 12, to: "/done" }],
  },

  b1: {
    background: "/screens/b1.png",
    hotspots: [{ id: "next", x: 10, y: 75, w: 80, h: 12, to: "/b/2" }],
  },
  b2: {
    background: "/screens/b2.png",
    hotspots: [{ id: "next", x: 10, y: 75, w: 80, h: 12, to: "/b/3" }],
  },
  b3: {
    background: "/screens/b3.png",
    hotspots: [{ id: "done", x: 10, y: 75, w: 80, h: 12, to: "/done" }],
  },

  c1: {
    background: "/screens/c1.png",
    hotspots: [{ id: "next", x: 10, y: 75, w: 80, h: 12, to: "/c/2" }],
  },
  c2: {
    background: "/screens/c2.png",
    hotspots: [{ id: "next", x: 10, y: 75, w: 80, h: 12, to: "/c/3" }],
  },
  c3: {
    background: "/screens/c3.png",
    hotspots: [{ id: "done", x: 10, y: 75, w: 80, h: 12, to: "/done" }],
  },
};
