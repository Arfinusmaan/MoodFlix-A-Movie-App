import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Spinner from '../components/Spinner';


const API_BASE_URL = "https://www.omdbapi.com";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const MovieDetails = () => {
  const { id } = useParams(); // Get movie ID from URL
  const navigate = useNavigate(); // Back navigation
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trailerId, setTrailerId] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/?i=${id}&apikey=${API_KEY}`);
        const data = await response.json();
        if (data.Response !== "False") {
          setMovie(data);
          fetchTrailer(data.Title); // Ensures trailer fetch happens AFTER movie is set
        } else {
          setMovie(null);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setMovie(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const fetchTrailer = async (movieTitle) => {
  try {
    const cachedTrailer = localStorage.getItem(movieTitle);
    if (cachedTrailer) {
      setTrailerId(cachedTrailer);
      return;
    }

    const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(movieTitle)}+official+movie+trailer&type=video&key=${YOUTUBE_API_KEY}`
    );
    const data = await response.json();

    if (data?.items?.length > 0 && data.items[0]?.id?.videoId) {
      setTrailerId(data.items[0].id.videoId);
      localStorage.setItem(movieTitle, data.items[0].id.videoId); // Cache for future use
    } else {
      setTrailerId(null);
    }
  } catch (error) {
    console.error("Error fetching trailer:", error);
    setTrailerId(null);
  }
};

  if (loading) return <Spinner />;
  if (!movie) return <p>Movie details not found.</p>;

  return (
    <main className="bg-[#1A1A2E]">
      <div className="py-20">
        <div className="text-white wrapper
         px-15 movie-card 
         max-w-[1200px] mx-auto  shadow-[#362f3e]
         shadow-[0px_0px_48px_3px]
         bg-[#0b0b1d] ">
          <header className="mt-3">
            <div className="flex justify-between items-center">
              <h2 className="font-[palanquin]">{movie.Title}</h2>
              <p className="text-right flex gap-1 text-md rounded-sm font-medium border-none py-1 px-5 bg-[#3c3c5c]">
                <img src="/star.svg" alt="star icon" className="w-5 h-5" />
                {movie.imdbRating}/10
              </p>
            </div>
          </header>
          <p className="text-slate-500 font-[montserrat] text-lg mt-3 mb-6">
            {movie.Year} - {movie.Rated} - {movie.Runtime}
          </p>

          {/* Poster & Trailer Section */}
          <div className="flex flex-col lg:flex-row gap-4 items-center lg:items-start">
  {/* Movie Poster */}
  <img src={movie.Poster} className="w-[230px]  rounded-xl object-cover h-[340px]" alt={`${movie.Title} poster`} />

  {/* Trailer Section */}
  <div className="flex-1 w-full">
    {trailerId ? (
      <iframe
        className="w-full rounded-xl h-[340px] aspect-video"
        src={`https://www.youtube.com/embed/${trailerId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    ) : (
      <p className="text-center text-gray-400">Trailer not available.</p>
    )}
  </div>
</div>

          {/* Movie Details */}
  <section className="mt-6 text-lg font-[montserrat] leading-8 ">
          <div className="space-y-4">
  {/* Genres */}
  
  <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
  {/* Genres Section */}
  <div className="flex gap-4">
    <strong className="min-w-[150px]">Generes:</strong>
    <div className="flex flex-wrap gap-8">
      {movie.Genre.split(", ").map((genre, index) => (
        <span className="border-none rounded-sm bg-[#3c3c5c] px-8 py-1" key={index}>
          {genre}
        </span>
      ))}
    </div>
  </div>

  {/* Button Section */}
  <button
    className="mt-4 lg:mt-0 max-lg:ml-auto block cursor-pointer border-none p-4
     bg-gradient text-sm rounded-sm font-semibold text-black"
    onClick={() => navigate("/")}
  >
    Visit Homepage →
  </button>
</div>
  {/* Overview */}
  <div className="flex gap-4">
    <strong className="min-w-[150px]">Overview :</strong>
    <p className="max-w-xl max-lg:max-w-md">{movie.Plot}</p>
  </div>

  {/* Release Date */}
  <div className="flex gap-4">
    <strong className="min-w-[150px]">Release Date :</strong>
    <span>{movie.Released} (Worldwide)</span>
  </div>

  {/* Language */}
  <div className="flex gap-4">
    <strong className="min-w-[150px]">Language :</strong>
    <span>{movie.Language}</span>
  </div>

  {/* Director */}
  <div className="flex gap-4">
    <strong className="min-w-[150px]">Director :</strong>
    <span>{movie.Director}</span>
  </div>

  {/* Actors */}
  <div className="flex gap-4">
    <strong className="min-w-[150px]">Actors :</strong>
    <span>{movie.Actors}</span>
  </div>

  {/* Awards */}
  <div className="flex gap-4">
    <strong className="min-w-[150px]">Awards :</strong>
    <span>{movie.Awards || "N/A"}</span>
  </div>

  {/* Production */}
  <div className="flex gap-4">
    <strong className="min-w-[150px]">Production :</strong>
    <span>{movie.Production || "N/A"}</span>
  </div>

  {/* Back button */}
</div>
</section>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;