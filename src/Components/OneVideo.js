import React from "react"
import { useParams } from "react-router-dom"
import ReactPlayer from "react-player/youtube"
import { useState, useEffect } from "react"

function OneVideo({ video }) {
  const { id } = useParams()
  if (!video) return "Loading...!"
  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls
      />
      <p>{video.snippet.thumbnails.title}</p>
    </div>
  )
}

export default OneVideo
