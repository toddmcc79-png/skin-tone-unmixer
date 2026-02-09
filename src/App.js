import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Screen from "./Screen";
import StarRating from "./StarRating";
import { screens } from "./screensConfig";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Welcome */}
        <Route
          path="/"
          element={
            <Screen
              background={screens.welcome.background}
              hotspots={screens.welcome.hotspots}
            />
          }
        />

        {/* Path choice */}
        <Route
          path="/path"
          element={
            <Screen
              background={screens.path.background}
              hotspots={screens.path.hotspots}
            />
          }
        />

        {/* Path A */}
        <Route
          path="/a/1"
          element={
            <Screen
              background={screens.a1.background}
              hotspots={screens.a1.hotspots}
            />
          }
        />
        <Route
          path="/a/2"
          element={
            <Screen
              background={screens.a2.background}
              hotspots={screens.a2.hotspots}
            />
          }
        />
        <Route
          path="/a/3"
          element={
            <Screen
              background={screens.a3.background}
              hotspots={screens.a3.hotspots}
            />
          }
        />

        {/* Path B */}
        <Route
          path="/b/1"
          element={
            <Screen
              background={screens.b1.background}
              hotspots={screens.b1.hotspots}
            />
          }
        />
        <Route
          path="/b/2"
          element={
            <Screen
              background={screens.b2.background}
              hotspots={screens.b2.hotspots}
            />
          }
        />
        <Route
          path="/b/3"
          element={
            <Screen
              background={screens.b3.background}
              hotspots={screens.b3.hotspots}
            />
          }
        />

        {/* Path C */}
        <Route
          path="/c/1"
          element={
            <Screen
              background={screens.c1.background}
              hotspots={screens.c1.hotspots}
            />
          }
        />
        <Route
          path="/c/2"
          element={
            <Screen
              background={screens.c2.background}
              hotspots={screens.c2.hotspots}
            />
          }
        />
        <Route
          path="/c/3"
          element={
            <Screen
              background={screens.c3.background}
              hotspots={screens.c3.hotspots}
            />
          }
        />

        {/* Done / Rating */}
        <Route
          path="/done"
          element={
            <Screen
              background="/screens/done.png"
              hotspots={[
                {
                  id: "restart",
                  x: 10,
                  y: 75,
                  w: 80,
                  h: 12,
                  to: "/",
                  onClick: () => {
      localStorage.removeItem("path");
      localStorage.removeItem("rating");
      localStorage.removeItem("ratedAt");
    },
                },
              ]}
            >
              <StarRating
                x={15}
                y={55}
                w={70}
                h={10}
              />
            </Screen>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
