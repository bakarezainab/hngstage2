import React, { useState } from "react"
import { useParams } from "react-router-dom"
import MovieDetails from "./MovieDetails"
import VideoPlayer from "./VideoPlayer"
const MoviePage = () => {
  const { id } = useParams()
  const [isPlaying, setIsPlaying] = useState(false)
  const handlePlayClick = () => {
    setIsPlaying(true)
  }
  // Replace this with the actual movie data from your API or props
  const yourMovieDetailsData = {
    id: 3, // Movie ID
    title: "Movie Title",
    overview: "Movie Overview",
    release_date: "2023-09-15",
    vote_average: 8.5,
    production_companies: [{ name: "Company Name" }],
    poster_path: "/path/to/poster.jpg",
    videoUrl: "https://your-movie-video-url.com",
  }
  return (
    <div>
      <MovieDetails movieDetails={yourMovieDetailsData} isLoading={false} />
      {isPlaying ? (
        <VideoPlayer videoUrl={yourMovieDetailsData.videoUrl} />
      ) : (
        <div onClick={handlePlayClick} style={{ cursor: "pointer" }}>
          <img
            src={`https://image.tmdb.org/t/p/w300${yourMovieDetailsData.poster_path}`}
            alt={yourMovieDetailsData.title}
          />
        </div>
      )}
    </div>
  )
}
export default MoviePage