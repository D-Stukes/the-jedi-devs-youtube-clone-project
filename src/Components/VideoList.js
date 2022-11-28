import React from "react"
import { Link } from "react-router-dom"
import OneVideo from "./OneVideo"

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video) => {
        return (
          <div key={video.id.videoId || video.id.channelId}>
            <>
              <Link to={`/oneVideo/${video.id.videoId}`}>
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt="video thumbnail pics"
                />
                <h3>{video.snippet.title}</h3>
              </Link>
            </>
          </div>
        )
      })}
    </div>
  )
}

export default VideoList

//   /* <ReactPlayer
// url={`https://www.youtube.com/watch?v=${id}`}
// className="react-player"
// controls
// /> */

//   /* <OneVideo
// videoUrl ={video.snippet.thumbnails.high.url}
// video ={video}
// videoId={video.id.videoId}/>  */
