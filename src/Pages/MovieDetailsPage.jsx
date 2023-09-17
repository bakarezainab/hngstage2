import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import VideoPlayer from "../components/VideoPlayer" // Import your VideoPlayer component
import Sidebar from "../components/Sidebar" // Import your Sidebar component
const MovieDetailsPage = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        )
        setMovieDetails(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching movie details:", error)
        setIsLoading(false)
      }
    }
    if (id) {
      fetchMovieDetails()
    }
  }, [id])
  return (
    <div className="lg:flex">
      <Sidebar movieDetails={movieDetails} />
      <div className="lg:w-1/2">
        {isLoading ? (
          <p data-testid="loading-message">Loading...</p>
        ) : (
          <VideoPlayer videoUrl={movieDetails.videoUrl} isHeader={true} />
        )}
      </div>
    </div>
  )
}
export default MovieDetailsPage