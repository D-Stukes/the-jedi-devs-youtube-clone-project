import React from "react"
import Nav from "./Nav"
import { useState } from "react"

function Home() {
  const [searchInput, setSearchInput] = useState("")

  function handleClickSearch(e) {
    e.preventDefault()

    const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=${process.env.REACT_APP_API_KEY}`

    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data", data, "data.items")
        console.log(
          "data.items[0].snippet.thumbnails #1",
          data.items[0].snippet.thumbnails.default.url
        )
        console.log("data.items[0].id", data.items[1].id)
        console.log("data.items[0].id.videoId", data.items[1].id.videoId)
      })
      .catch((err) => {
        console.log(err)
      })
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

      <div className="videoBox"> </div>
    </div>
  )
}

export default Home
