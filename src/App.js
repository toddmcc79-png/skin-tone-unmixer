import Screen from "./Screen";
import { screens } from "./screensConfig";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Temporary placeholders – we will replace these next
const Placeholder = ({ name }) => (
  <div
    style={{
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 24,
    }}
  >
    {name}
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
  path="/"
  element={
    <Screen
      background={screens.welcome.background}
      hotspots={screens.welcome.hotspots}
    />
  }
/>
        <Route path="/path" element={<Placeholder name="Path Choice" />} />

        <Route path="/a/1" element={<Placeholder name="A – Screen 1" />} />
        <Route path="/a/2" element={<Placeholder name="A – Screen 2" />} />
        <Route path="/a/3" element={<Placeholder name="A – Screen 3" />} />

        <Route path="/b/1" element={<Placeholder name="B – Screen 1" />} />
        <Route path="/b/2" element={<Placeholder name="B – Screen 2" />} />
        <Route path="/b/3" element={<Placeholder name="B – Screen 3" />} />

        <Route path="/c/1" element={<Placeholder name="C – Screen 1" />} />
        <Route path="/c/2" element={<Placeholder name="C – Screen 2" />} />
        <Route path="/c/3" element={<Placeholder name="C – Screen 3" />} />

        <Route path="/done" element={<Placeholder name="Done / Rating" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
