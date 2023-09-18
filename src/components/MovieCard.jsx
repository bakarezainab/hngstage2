import React from "react"
const MovieCard = ({ movie }) => {
  if (!movie) {
    // Handle where 'movie' is undefined or null
    return (
      <div className="w-[18rem] max-w-[100%] text-xl flex flex-col rounded-xl p-2 text-slate-600 m-5 cursor-pointer hover:scale-110 hover:mt-10 hover:mb-8 font-serif">
        <p>No movie data is available.</p>
      </div>
    )
  }
  // Calculate hours and minutes from movie.runtime
  const hours = Math.floor(movie.runtime / 60)
  const minutes = movie.runtime % 60
  // Format the runtime as hours and minutes
  const formattedRuntime = `${hours}h ${minutes}m`
  // Format the release date in UTC format (e.g., "2023-09-13T14:00:00Z")
  const formattedReleaseDate = new Date(movie.release_date).toISOString()
  // Now, you can safely access properties of 'movie'
  const { title, runtime, poster_path } = movie
  return (
    <div className="w-[18rem] max-w-[100%] bg-pink-200 text-xl flex flex-col rounded-xl p-2 text-slate-600 m-5 cursor-pointer hover:scale-110 hover:mt-10 hover:mb-8 font-serif">
      <img
        className="w-full self-centered rounded-lg h-[476px]"
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        alt="poster"
        data-testid="movie-poster"
      />
      <h3
        className="my-3 text-base font-serif font-bold text-center"
        data-testid="movie-title"
      >
        {title}
      </h3>
      {runtime && (
        <h3
          className="my-3 text-sm font-semibold text-center"
          data-testid="movie-runtime"
        >
          Runtime: {formattedRuntime}
        </h3>
      )}
      <h3
        className="my-3 text-sm font-semibold text-center"
        data-testid="movie-vote-average"
      >
        &#9734; &#9733; {movie.vote_average}
      </h3>
      <h3
        className="my-3 text-sm font-semibold text-center"
        data-testid="movie-release-date"
      >
        Release Date: {formattedReleaseDate}
      </h3>
      <h3
        className="my-3 text-sm font-semibold text-center"
        data-testid="movie-overview"
      >
        Overview: {movie.overview}
      </h3>
      <h3
        className="my-3 text-base text-center font-bold uppercase"
        data-testid="movie-original-language"
      >
        Original Language: {movie.original_language}
      </h3>
      {/* Other movie details */}
    </div>
  )
}
export default MovieCard