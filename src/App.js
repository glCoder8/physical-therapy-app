import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GeneralPracticeMetrics from "./pages/GeneralPracticeMetrics";
import TimeToSignOff from "./pages/TimeToSignOff";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route
            path="/general-practice-metrics"
            element={<GeneralPracticeMetrics />}
          />
          <Route path="/time-to-sign-off" element={<TimeToSignOff />} />
          <Route path="/" element={<GeneralPracticeMetrics />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
