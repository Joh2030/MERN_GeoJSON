import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Properties from "./components/Properties";
import PropertiesDetails from "./components/PropertiesDetails";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<PropertiesDetails />} />
      </Routes>
    </>
  );
}

export default App;
