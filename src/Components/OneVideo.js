import React from "react"
import { useParams } from "react-router-dom"
//import ReactPlayer from "react-player/youtube"
import YouTube from "react-youtube"

//import { useState, useEffect } from "react"

function OneVideo() {
  const { id } = useParams()

  // if (!video) return "Loading...!"
  return (
    <div>
      {/* <h1>A video should be here!</h1> */}
      <div>
        <YouTube videoId={id} />
      </div>
    </div>
  )
}

export default OneVideo
