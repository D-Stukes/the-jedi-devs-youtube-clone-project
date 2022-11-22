import React from "react"
import Home from "./Components/Home"
import About from "./Components/About"
import OneVideo from "./Components/OneVideo"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import VideoList from "./Components/VideoList"

function App() {
  return (
    <div className="main-grid-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/selectedVideo" element={<OneVideo />} />
          <Route path="/oneVideo/:id"
            element={<OneVideo type={"VideoList"} />}
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
