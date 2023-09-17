import React from "react"
import MovieCard from "./MovieCard" // Import the MovieCard component
function MovieGrid({ movies }) {
  return (
    <div className="flex flex-wrap justify-evenly">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </div>
  )
}
export default MovieGrid


