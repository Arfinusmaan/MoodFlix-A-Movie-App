import {  Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails.jsx";
import Home from "./sections/Home.jsx";

const API_BASE_URL = "https://www.omdbapi.com";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const App = () => {
  return (
    <>
      <Routes>
        {/* Homepage with Movie List */}
        <Route path="/" element={<Home />} />

        {/* Movie Details Page */}
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      </>
  );
};

export default App;