import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Thanks from "./pages/Thank-you";
import Error from "./pages/Error";
import Temporary from "./pages/Temporary";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Temporary />} />
        <Route path="/TempPage" element={<Temporary />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/thank-you" element={<Thanks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;

