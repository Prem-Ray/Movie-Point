import React from "react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useMovieContext } from "../context/MovieContext";

export function MovieCard({ movie }) {
  const { isFavourite, addToFavourites, removeFromFavourites } =
    useMovieContext();
  const favourite = isFavourite(movie.id);

  const [morebtn, setMorebtn] = useState(false);

  const paragraph =
    "A captivating film that promises drama, emotion, and unforgettable storytelling. Dive into a cinematic journey filled with compelling characters and powerful moments.";

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (!isFavourite(movie.id)) {
      addToFavourites(movie);
    } else {
      removeFromFavourites(movie.id);
    }
  };

  return (
    <div className="movie-card w-full sm:w-[250px] md:w-[260px] bg-black rounded-2xl shadow-xl overflow-hidden text-white font-sans border border-gray-800 transition-transform hover:scale-105 duration-300 mx-auto">
      {/* Poster */}
      <div className="movie-poster relative">
        <img
          src={
            movie.url ||
            `https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg`
          }
          alt={movie.title}
          draggable="false"
          className="w-full h-[300px] object-cover rounded-t-2xl"
        />
        {/* Favorite Icon Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/20 to-black/80 flex items-start justify-end p-3 pointer-events-none">
          <button
            onClick={onFavoriteClick}
            className="bg-gray-900/60 hover:bg-gray-800/80 border border-gray-700 rounded-full p-2 cursor-pointer pointer-events-auto transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaHeart
              className={`w-6 h-6 ${
                favourite ? "text-red-500 fill-red-500" : "text-white"
              } transition-colors`}
            />
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="movie-info p-4 text-center bg-gray-900">
        <h2 className="text-base font-semibold mb-2 truncate text-white">
          {movie.title}
        </h2>
        <p className="text-xs text-gray-400 mb-2">
          <span className="font-bold text-gray-300">Release Date:</span>{" "}
          {movie.release_date}
        </p>

        {/* Description */}
        <p className="text-sm text-gray-400 text-justify leading-relaxed">
          {movie.description ? (
            <>
              {morebtn
                ? movie.description
                : `${movie.description.slice(0, 100)}...`}
              <button
                className="ml-1 text-gray-300 hover:text-white underline text-xs bg-transparent border-none cursor-pointer transition-colors"
                onClick={() => setMorebtn(!morebtn)}
              >
                {morebtn ? "Show Less" : "Show More"}
              </button>
            </>
          ) : (
            <>
              {morebtn ? paragraph : `${paragraph.slice(0, 100)}...`}
              <button
                className="ml-1 text-gray-300 hover:text-white underline text-xs bg-transparent border-none cursor-pointer transition-colors"
                onClick={() => setMorebtn(!morebtn)}
              >
                {morebtn ? "Show Less" : "Show More"}
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
