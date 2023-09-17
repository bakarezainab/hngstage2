// MovieCarousel.jsx
import React, { useState, useEffect } from "react"
import axios from "axios"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom" // Import Link from react-router-dom
const MovieCarousel = ({ category }) => {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false) // Initialize as false
  useEffect(() => {
    async function fetchMovies() {
      try {
        setIsLoading(true) // Set isLoading to true while fetching
        let endpoint = ""
        switch (category) {
          // Define your API endpoints for different categories
          case "trending":
            endpoint = `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}`
            break
          case "top-rated":
            endpoint = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
            break
          case "latest":
            endpoint = `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY}`
            break
          case "horror":
            endpoint = `https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${process.env.REACT_APP_API_KEY}`
            break
          case "romantic":
            endpoint = `https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=${process.env.REACT_APP_API_KEY}`
            break
          case "comedy":
            endpoint = `https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${process.env.REACT_APP_API_KEY}`
            break
          default:
            break
        }
        const response = await axios.get(endpoint)
        setMovies(response.data.results)
        setIsLoading(false) // Set isLoading back to false when done
      } catch (error) {
        console.error("Error fetching movies:", error)
        setIsLoading(false) // Ensure isLoading is set to false on error
      }
    }
    if (category) {
      fetchMovies()
    }
  }, [category])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Display 4 slides at once (you can adjust this value)
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <div>
      <div
        data-testid="category-title"
        className="font-serif font-bold text-2xl capitalize text-pink-400 m-5 flex justify-between items-center"
      >
        {/* Add category title */}
        <span>{category}</span>
        <span className="text-sm text-pink-400 cursor-pointer">
          See More &gt;
        </span>
      </div>
      {isLoading ? (
        <p data-testid="loading-message" className="text-center">
          Loading...
        </p>
      ) : movies && movies.length > 0 ? (
        <div data-testid="movie-carousel" className="p-3">
          <Slider {...settings}>
            {movies.map((movie) => (
              <div key={movie.id} data-testid="movie-card" className="p-2">
                {/* Link to MovieDetails */}
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                    alt={movie.title}
                    data-testid="movie-image"
                    className="w-full"
                  />
                </Link>
                <h3
                  data-testid="movie-title"
                  className="mt-4 font-serif font-bold text-center lg:text-left mb-5"
                >
                  {movie.title}
                </h3>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <p data-testid="no-movies-message" className="text-center">
          No movies found for this category.
        </p>
      )}
    </div>
  )
}
export default MovieCarousel