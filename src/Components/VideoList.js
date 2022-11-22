import React from "react"
import { Link } from "react-router-dom"

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
              {/* < OneVideo  
                            videoUrl ={video.snippet.thumbnails.high.url} 
                            video ={video}
                            videoId={video.id.videoId}/> */}
            </>
          </div>
        )
      })}
    </div>
  )
}

export default VideoList
