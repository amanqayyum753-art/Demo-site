import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import NotIncluded from "./pages/NotIncluded.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<NotIncluded />} />
        <Route path="/about" element={<NotIncluded />} />
        <Route path="/contact" element={<NotIncluded />} />
        <Route path="*" element={<NotIncluded />} />
      </Routes>
    </BrowserRouter>
  );
}
