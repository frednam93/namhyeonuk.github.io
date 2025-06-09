import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Music from "./pages/Music";
import Guitars from "./pages/Guitars";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/music" element={<Music />} />
        <Route path="/guitars" element={<Guitars />} />
      </Routes>
    </Router>
  );
}