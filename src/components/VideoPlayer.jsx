import React, { useState } from "react"
const VideoPlayer = ({ videoUrl, isHeader }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlayClick = () => {
    setIsPlaying(true)
  }
  return (
    <div className={`relative ${isHeader ? "header-video" : ""}`}>
      {!isPlaying ? (
        <div onClick={handlePlayClick} style={{ cursor: "pointer" }}>
          <img
            src="/play-button.png" // Replace with a play button image
            alt="Play Video"
          />
        </div>
      ) : null}
      {isPlaying ? (
        <div className="video-container">
          <video controls autoPlay>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
    </div>
  )
}
export default VideoPlayer
