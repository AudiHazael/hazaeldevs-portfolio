import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Thanks from "./pages/thank-you";
import Error from "./pages/Error";
// import Temporary from "./pages/Temporary";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Temporary />} /> */}
        <Route path="/Temporary" element={<Temporary />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/thank-you" element={<Thanks />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
