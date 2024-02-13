import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/navbar.css";
import Navbar from "./components/Intro.js";
import ProjectDisplay from "./pages/ProjectDisplay";
import "./App.css"



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;