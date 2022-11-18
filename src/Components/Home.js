import React from "react"
import Nav from "./Nav"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import OneVideo from "./OneVideo"

function Home() {
  const [searchInput, setSearchInput] = useState("")
  const [datalist, setDatalist] = useState([])

  function handleClickSearch(e) {
    e.preventDefault()

    const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=${process.env.REACT_APP_API_KEY}`

    fetch(`${BASE_URL}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data items", data.items)
        setDatalist(data.items)
        console.log("Fetched datalist", datalist)
        // window.localStorage.setItem("dataItems", JSON.stringify(data.items))
        // console.log("datalist.items[0].snippet.thumbnails", datalist.items[0].snippet.thumbnails.default.url
        // )
        // console.log("data.items[0].id", datalist.items[1].id)
        // console.log("data.items[0].id.videoId", datalist.items[1].id.videoId)

        //assign variable to videoID
       
        //const thumbNail = snippet.thumbnails.default.url

            // for(let video of videoData){
            //     let videoImage = <img className="videoThumbnail" src="snippet.thumbnails.default.url" />
            // }
  
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

        <div className="videoBox"> 
        <ul>
        {

        datalist.length > 0 ?

        
            datalist.map((video) => {
                return(
                
                    <li key={video.id.videoId || video.id.channelId}>
                        <img src = {video.snippet.thumbnails.high.url} />
                        < OneVideo videoId={video.id.videoId}/>
                    </li>
                )
            })
        :
            null

        }
        </ul>
        </div>
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
