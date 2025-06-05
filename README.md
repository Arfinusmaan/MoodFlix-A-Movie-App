🎬 Moodflix – React Movie App (OMDB + YouTube)
A fully responsive and optimized movie app built with React and powered by the OMDB API. Users can search movies in real-time, view detailed info, and watch trailers from YouTube if available.

✨ Features
🔍 Real-time movie search using optimized debounce technique

🎞️ Detailed movie page with poster, release year, genre, plot, and ratings

📺 YouTube trailer embedding if trailer is available

🚫 Graceful fallback if trailer or movie image is not available

📱 100% mobile responsive across all screen sizes

⚡ Smooth and clean UI interactions

⚙️ Tech Stack
React (Vite)

Tailwind CSS

OMDB API for movie data

YouTube iFrame API for trailers

Custom Hooks (e.g., useDebounce) for performance optimization

📦 Installation
git clone https://github.com/adrianhajdin/react-movies.git
cd react-movies
npm install
Create a .env file in the root with the following:

env
VITE_OMDB_API_KEY=your_omdb_key
VITE_YOUTUBE_API_KEY=your_youtube_key
Then start the development server:

bash
Copy
Edit
npm run dev
🧠 Project Structure
graphql
Copy
Edit
src/
├── components/         # UI components (Navbar, Cards, Loader, etc.)
├── pages/              # Home, Movie Details
├── hooks/              # Custom hooks like useDebounce
├── services/           # API logic for OMDB & YouTube
├── assets/             # Images and icons
├── App.jsx             # Main App with Routing
└── main.jsx            # Entry point
📚 APIs Used
OMDB API – for movie data

YouTube Data API v3 – for fetching trailers

🔥 Live Demo
Check it out here:
🔗 moodflix-arfin.vercel.app

