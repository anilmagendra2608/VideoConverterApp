import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import VideoConverter from "./VideoConverter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/convert" element={<VideoConverter />} />
      </Routes>
    </Router>
  );
}

export default App;
