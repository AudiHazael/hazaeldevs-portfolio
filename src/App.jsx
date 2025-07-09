import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Thanks from "./pages/Thank-you";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="#" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Thank-you" element={<Thanks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
