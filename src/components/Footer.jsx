import React from "react"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa" // Import icons from react-icons
const Footer = () => {
  return (
    <footer className="bg-gray-500 text-white py-4 font-serif">
      <div className="container mx-auto text-center">
        <p data-testid="footer-copyright" className="text-lg mb-4">
          &copy; 2023 BEM'S STUDIO
        </p>
        <div className="flex flex-wrap justify-center lg:justify-center">
          {" "}
          {/* Centered on large screens */}
          <Link
            to="/movies"
            data-testid="footer-movies-link"
            className="text-white hover:text-pink-400 mx-2 mb-2 lg:mb-0 text-center"
          >
            Movies
          </Link>
          <Link
            to="/tv-shows"
            data-testid="footer-tv-shows-link"
            className="text-white hover:text-pink-400 mx-2 mb-2 lg:mb-0 text-center"
          >
            TV Shows
          </Link>
          <Link
            to="/about"
            data-testid="footer-about-link"
            className="text-white hover:text-pink-400 mx-2 mb-2 lg:mb-0 text-center"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            data-testid="footer-contact-link"
            className="text-white hover:text-pink-400 mx-2 mb-2 lg:mb-0 text-center"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap justify-center">
          <a
            href="https://www.instagram.com/your-instagram"
            data-testid="footer-instagram-link"
            className="text-white hover:text-pink-400 mr-4 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} className="mr-2" /> Instagram
          </a>
          <a
            href="https://www.facebook.com/your-facebook"
            data-testid="footer-facebook-link"
            className="text-white hover:text-pink-400 mr-4 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} className="mr-2" /> Facebook
          </a>
          <a
            href="https://twitter.com/your-twitter"
            data-testid="footer-twitter-link"
            className="text-white hover:text-pink-400 mr-4 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} className="mr-2" /> Twitter
          </a>
          <a
            href="https://www.youtube.com/your-youtube"
            data-testid="footer-youtube-link"
            className="text-white hover:text-pink-400 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={30} className="mr-2" /> YouTube
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer