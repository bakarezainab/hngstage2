import React from "react"
import Poster from "../components/Assest/Poster.svg"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons" // Import the icons you want to use
const Header = () => {
  return (
    <div className=" w-full relative flex items-center justify-between">
      {/* Image Poster */}
      <img
        className="w-fit md:w-fit lg:w-fit"
        src={Poster}
        alt="Please Wait"
        height="2160"
        width="3840"
      />
      <div className="absolute  flex items-center top-5 align-center left-96">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-b border-gray-400 text-white placeholder-white focus:outline-none"
        />
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded ml-2"
          onClick={() => {
            // Implement your search functionality here
          }}
        >
          <FontAwesomeIcon icon={faSearch} className="text-gray-800" />
        </button>
      </div>
      {/* H1 */}
      <a
        href="h1"
        className="text-white text-xl font-serif font-bold absolute top-5 left-10 lg:text-2xl md:text-3xl sm:text-sm"
      >
        <h1>Bem's Movies</h1>
      </a>
      {/* Hamburger Icon */}
      <FontAwesomeIcon
        icon={faBars}
        className="text-white text-xl cursor-pointer absolute top-5 right-7"
        onClick={() => {
          // Implement your hamburger menu functionality here
        }}
      />
      {/* Sign-In */}
      {/* You can add your sign-in component here if needed. */}
      {/* Link Button */}
      <Link to="/your-link-here">
        <button className="bg-white hover:bg-blue-300 text-black font-semibold py-2 px-4 rounded absolute top-3 right-20">
          Sign-In
        </button>
      </Link>
    </div>
  )
}
export default Header