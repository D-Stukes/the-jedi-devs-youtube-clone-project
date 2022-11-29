import React from "react"
import Home from "./Components/Home"
import About from "./Components/About"
import OneVideo from "./Components/OneVideo"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import VideoList from "./Components/VideoList"
import {useState} from "react"
import Modal from "./Components/Modal"


function App() {

  const[modal, setModal] = useState(false)
  const[opened, setOpened] = useState(false)

  return (
    <div className="main-grid-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/selectedVideo" element={<OneVideo />} />
          <Route
            path="/oneVideo/:id"
            element={<OneVideo type={"VideoList"} />}
          />
        </Routes>
      </Router>

      <div className="modalButton1">
        <button onClick={()=>setOpened(true)}>Open Modal</button></div>
      <Modal open={opened} closed={()=>setOpened(false)} >Please enter one or more keywords to search for a video!</Modal> 
    </div>
  )
}

export default App
