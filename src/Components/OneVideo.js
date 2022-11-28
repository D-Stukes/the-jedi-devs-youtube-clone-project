import React from "react"
import { useParams } from "react-router-dom"
//import ReactPlayer from "react-player/youtube"
import YouTube from 'react-youtube'
import { useState, useEffect } from "react"

function OneVideo() {
  const { id } = useParams()
  const [videoData, setVideoData] = useState("")
  const [videoTitle, setVideoTitle] = useState("")
  const [videoDescription, setVideoDescription] = useState("")
  const [videoLikes, setVideoLikes] = useState("")


  // const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchInput}&key=${process.env.REACT_APP_API_KEY}`

  const BASE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=${process.env.REACT_APP_API_KEY}`

// https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${id}&key=YOUR_KEY
// GET https://www.googleapis.com/youtube/v3/videos?part=statistics&id=Q5mHPo2yDG8&key={YOUR_API_KEY}

//const [likes, views] = videoData

useEffect(() => {
  fetch(`${BASE_URL}`)
    .then((response) => response.json())
    .then((data) => {
      console.log("Fetched data for one movie", data)
      setVideoData(data)
      setVideoTitle(data.items[0].snippet.title)
      setVideoDescription(data.items[0].snippet.description)
      setVideoLikes(data.items[0].statistics.likeCount)
      // console.log("Fetched datalist", datalist)
      // window.localStorage.setItem("dataItems", JSON.stringify(data.items))
    
    })
    .catch((err) => {
      console.log(err)
    })
    }, [id])


  // if (!video) return "Loading...!"
  return (
    <div>
      {/* <h1>A video should be here!</h1> */}
      <YouTube videoId={id}/>

      <div className="videoInfo">
       <h3>{videoTitle} Likes:{videoLikes}</h3> 
       <p>{videoDescription}</p>
      </div>
    </div>
  )
}

export default OneVideo