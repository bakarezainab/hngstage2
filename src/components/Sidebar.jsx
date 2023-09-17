import React, { useState } from "react"
import moviebox from "./Assest/moviebox.svg"
import home from "./Assest/home.svg"
import movie from "./Assest/movie.svg"
import tv from "./Assest/tv.svg"
import upcoming from "./Assest/upcoming.svg"
import logout from "./Assest/logout.svg"
import VideoPlayer from "./VideoPlayer"
import MovieDetails from "./MovieDetails"
function Sidebar() {
  // Use state to track whether VideoPlayer and MovieDetails should be displayed
  const [showVideoPlayer, setShowVideoPlayer] = useState(false)
  const [showMovieDetails, setShowMovieDetails] = useState(false)
  // Function to show the VideoPlayer
  const showVideo = () => {
    setShowVideoPlayer(true)
    setShowMovieDetails(false) // Hide MovieDetails if it's open
  }
  // Function to show MovieDetails
  const showDetails = () => {
    setShowVideoPlayer(false) // Hide VideoPlayer if it's open
    setShowMovieDetails(true)
  }
  return (
    <section className="bg-pink-500 text-white p-4 ml-1 w-86 left-0">
      <div className="w-20 h-10 inline-block ml-2 mb-6 mt-4">
        <img src={moviebox} alt="MovieBox" className="w-12 h-12 mx-auto" />
        <h2 className="text-xl font-semibold mt-4">MovieBox</h2>
      </div>
      {/* Corrected opening div tag here */}
      <div className="mb-6 mt-3">
        <img src={home} alt="Home" className="w-6 h-6 inline-block ml-2 " />
        <h2 className="text-lg inline-block">Home</h2>
      </div>
      <div className="mb-6">
        <img src={movie} alt="Movies" className="w-6 h-6 inline-block mr-2" />
        <h2 className="text-lg inline-block">Movies</h2>
      </div>
      <div className="mb-6">
        <img src={tv} alt="TV Series" className="w-6 h-6 inline-block mr-2" />
        <h2 className="text-lg inline-block">TV Series</h2>
      </div>
      <div className="mb-6">
        <img
          src={upcoming}
          alt="Upcoming"
          className="w-6 h-6 inline-block mr-2"
        />
        <h2 className="text-lg inline-block">Upcoming</h2>
      </div>
      <div className="mb-6">
        <h2 className="text-base font-semibold">
          Play movie quizzes and earn free tickets
        </h2>
        <h3 className="text-sm">50k people are playing now</h3>
        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-full hover:bg-pink-400">
          Start Playing
        </button>
      </div>
      <div className="mb-6">
        <img src={logout} alt="Log Out" className="w-6 h-6 inline-block mr-2" />
        <h2 className="text-lg inline-block">Log Out</h2>
      </div>
      {/* ... other sidebar items ... */}
      {/* Clicking on this item will show the VideoPlayer */}
      <div className="mb-6" onClick={showVideo}>
        <h2 className="text-lg inline-block">Video Player</h2>
      </div>
      {/* Clicking on this item will show MovieDetails */}
      <div className="mb-6" onClick={showDetails}>
        <h2 className="text-lg inline-block">Movie Details</h2>
      </div>
      {/* Conditionally render VideoPlayer */}
      {showVideoPlayer && <VideoPlayer />}
      {/* Conditionally render MovieDetails */}
      {showMovieDetails && <MovieDetails />}
    </section>
  )
}
export default Sidebar
