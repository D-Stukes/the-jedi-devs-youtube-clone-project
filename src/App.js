import React from "react"
import Home from "./Components/Home";
import About from "./Components/About"
import OneVideo from "./Components/OneVideo"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  return (
    <div className="main-grid-container">
      <Router>
     {/* <h1>The Jedi Devs YouTube Clone Project</h1> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/selectedVideo" element={<OneVideo />} />
      </Routes>
      
     </Router>

    </div>
  );
}

export default App;
