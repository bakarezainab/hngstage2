import React from "react"
import MovieData from "./MovieData"
const MovieList = () => {
  // Map over movieData to display movie titles
  const movieTitles = MovieData.map((movie) => (
    <div key={movie.id}>{movie.title}</div>
  ))
  return (
    <div>
      <h1>Movie List</h1>
      {movieTitles}
    </div>
  )
}
export default MovieList