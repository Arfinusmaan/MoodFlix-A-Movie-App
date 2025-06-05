# 🎬 Moodflix – Full-Stack React Movie App (Appwrite + OMDB + YouTube)

**Moodflix** is a fully responsive full-stack movie application built with **React** and powered by **Appwrite**, **OMDB**, and **YouTube APIs**. It allows users to search for movies in real-time, view detailed information, and watch trailers if available.

---

## ✨ Features

- 🔎 **Real-time search** with `useDebounce` to avoid unnecessary API calls  
- 💾 **Appwrite Database** stores trending movies dynamically based on user searches  
- ☁️ **Appwrite Function** or server handles secure OMDB API requests  
- 🎥 **Movie detail page** with embedded YouTube trailer (if available)  
- 📉 Graceful fallback if image or trailer is missing  
- 📱 Fully **responsive UI** for mobile, tablet, and desktop  

---

## ⚙️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS  
- **Backend**: Appwrite (Database, Functions)  
- **APIs**:
  - OMDB API (via backend)
  - YouTube Data API v3  

---

## 🔐 API Flow

1. User types a search query.  
2. Debounced input prevents rapid API calls.  
3. Query is sent to Appwrite Function/backend, which calls OMDB.  
4. Response is stored in Appwrite DB and sent back to frontend.  
5. Trending results update based on frequency of search terms.  

---



## 📦 Setup & Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/moodflix.git
cd moodflix


2. install dependencies

```bash
npm install


3. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer


4. Create a .env file with the following keys:

VITE_OMDB_API_KEY=your_omdb_key
VITE_YOUTUBE_API_KEY=your_youtube_key
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_db_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id

5.Start the app

```bash
npm run dev

---

🌐 Live Demo
🚀 Visit: https://moodflix-arfin.vercel.app



📚 APIs & Services Used
OMDB API – Movie data

YouTube API – Trailers

Appwrite – Backend, DB, and Functions



📄 License
This project is open source and available under the MIT License.




