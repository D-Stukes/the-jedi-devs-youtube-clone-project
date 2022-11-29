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
  const [videoTotalLikes, setVideoTotalLikes] = useState(0)
  const [videoTotalNotLikes, setVideoTotalNotLikes] = useState(0)
  const [liked, setLiked] = useState(false)
  const [notLiked, setNotLiked] = useState(false)

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
      setVideoTotalLikes(data.items[0].statistics.likeCount)
      // console.log("Fetched datalist", datalist)
      // window.localStorage.setItem("dataItems", JSON.stringify(data.items))
    
    })
    .catch((err) => {
      console.log(err)
    })
    }, [id])


function handleClickAddLikes(){
 
 liked = false ? setVideoTotalLikes(Number(videoTotalLikes)+1)
 : setVideoTotalLikes(Number(videoTotalLikes)-1)
//  liked = true ? setVideoLikes(Number(videoLikes)-1) 
//  : null
//  setLiked(false)
}
// function handleToggle(){
//   !liked
// }


function handleClickAddNotLikes(){
  notLiked = false ? setVideoTotalNotLikes(Number(videoTotalNotLikes)+1)
  : setVideoTotalNotLikes(Number(videoTotalNotLikes) - 1)
 //  liked = true ? setVideoLikes(Number(videoLikes)-1) 
 //  : null
 //  setLiked(false)
 }


 // function handleToggle(){
 //   !notLiked
 // }
  // if (!video) return "Loading...!"
  return (
    <div>
      {/* <h1>A video should be here!</h1> */}
      <YouTube videoId={id}/>

      <div className="videoInfo">
       <h3 className="videoTitle">{videoTitle}</h3>  
     {/* <button onClick={handleClickAddLikes}> {videoLikes}</button> */}
               <input 
               className="likeButton"
               onClick={handleClickAddLikes}
               type="image" src={require("./LikeButton/likeImage.png")} />
               {videoTotalLikes}

               <input className="noLikeButton"
               onClick={handleClickAddNotLikes}
               type="image" src={require("./NoLikeButton/NoLikeImage.png")} />
               {videoTotalNotLikes}
       <p>{videoDescription}</p>
      </div>
    </div>
  )
}

export default OneVideo

