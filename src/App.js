import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.jsx";
import MovieCarousel from "./components/MovieCarousel"; // Import MovieCarousel component
import Home from "./Pages/Homes.jsx";
import MovieDetailsPage from "./Pages/MovieDetailsPage.jsx";
import MoviePage from "./Pages/MoviePage.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <Router>
      <Header />
      <MovieCarousel category="trending" /> {/* Let MovieCarousel appear before Homes */ }
      {/* Uncomment if you want to add more carousels */ }
      <MovieCarousel category="horror" />
      <MovieCarousel category="comedy" />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/movie/:id" element={ <MoviePage /> } />
        <Route
          path="/movie-details/:id"
          element={
            <>
              <Sidebar /> {/* Include Sidebar */ }
              <MovieDetailsPage />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;