import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Thanks from "./pages/Thank-you";
import Error from "./pages/Error";
import ChatButton from "./components/ChatButton";
import Location from "./pages/Location";
import Services from "./pages/Services";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/services" element={<Services />} />
          <Route path="/thank-you" element={<Thanks />} />
          <Route path="*" element={<Error />} />
        </Routes>

        {/* Chat button rendered outside of <Routes> so it appears on every page */}
        <ChatButton />
      </>
    </Router>
  );
}

export default App;
