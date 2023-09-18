import React, { useState, useEffect } from "react"
// import Header from "../components/Header"
import loading_spinner from "../components/Assest/Spinner-2.gif"
import axios from "axios"
// import GenreId from "../components/GenreId"
import MovieCard from "../components/MovieCard"
// import MovieCarousel from "../components/MovieCarousel" // Import the MovieCarousel component
async function getMovies(pageNo) {
  const res = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_API_KEY}&page=${pageNo}`
  )
  console.log(res.data.results)
  return res.data.results
}
function Home() {
  const [movies, setMovies] = useState("loading")
  const [pageNo, setPageNo] = useState(1)
  useEffect(() => {
    getMovies(pageNo)
      .then((res) => {
        setMovies(res)
      })
      .catch((err) => {
        alert(err)
      })
  }, [pageNo])
  if (movies === "loading" || !movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-300">
        <img src={loading_spinner} alt="Loading" height="200px" width="200px" />
      </div>
    )
  }
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center h-full mt-10">
      <div className="flex flex-wrap justify-evenly">

            {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
        {/* {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))} */}
      </div>
      <div className="w-[250px] mt-5 pb-10 font-serif font-bold">
        <button
          className="bg-white rounded-full px-4 ml- hover:border-black border-2 hover:font-bold mr-2"
          onClick={() => {
            if (pageNo > 1) setMovies("loading")
            setPageNo(pageNo - 1)
          }}
        >
          Previous
        </button>
        {pageNo}
        <button
          className="bg-white rounded-full px-4 mr- hover:border-black border-2 hover:font-bold ml-2"
          onClick={() => {
            if (pageNo < 20) setMovies("loading")
            setPageNo(pageNo + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}
export default Home