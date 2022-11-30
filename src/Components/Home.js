import React from "react"
import Nav from "./Nav"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import OneVideo from "./OneVideo"
import VideoList from "./VideoList"
import { Link } from "react-router-dom"
import Modal from "./Modal"

function Home() {
  const [searchInput, setSearchInput] = useState("")
  const [datalist, setDatalist] = useState([])
  const[modal, setModal] = useState(false)
  const[opened, setOpened] = useState(false)

  function handleClickSearch(e) {
    e.preventDefault()
    
    const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=${process.env.REACT_APP_API_KEY}`

    if(searchInput === "") {
      alert("Please enter a keyword to search")

    } else {
    
    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data items", data.items)
        setDatalist(data.items)
        console.log("Fetched datalist", datalist)
        // window.localStorage.setItem("dataItems", JSON.stringify(data.items))
      })
      .catch((err) => {
        // alert("not found")
        console.log(err)
      })
  }
}

  function handleChangeSearch(e) {
    setSearchInput(e.target.value)
  }

  return (
    <div home-grid>
      <Nav />
      <div className="searchBar">
        <form onSubmit={handleClickSearch}>
          <input
            onChange={handleChangeSearch}
            className="searchBox"
            type="text"
            name="search"
            value={searchInput}
            placeholder="Type a keyword here to find your video"
          />

          <button className="searchButton" type="submit" value="search">
            Search
          </button>
        </form>
      </div>
      <div className="noSearchMsgbar">
        <p className="noSearchMsg">
          No search results are displayed. Please enter a keyword to search and
          display videos
        </p>
      </div>
      <p className="tempVideoText">Area of Search Results - Videos</p>

      <div className="videoBox">
        {datalist.length > 0 ? <VideoList videos={datalist} /> : null}
      </div>

      <div className="modalButton1">
        <button onClick={()=>setOpened(true)}>Open Modal</button></div>
      <Modal open={opened} closed={()=>setOpened(false)} >Please enter one or more keywords to search for a video!</Modal> 
    </div>
  )
}

export default Home

// function handleClickVideo{
//     // Navigate to oneVideo
//     let thumbNail = data.items[1].snippet.thumbnails.default
//      let videoPath = `https://www.youtube.com/watch?v=${video.id.videoId}`
//      <img src =`>
//     }
// test
