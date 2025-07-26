import React, { useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";
import { useMovieContext } from "../context/MovieContext";

export function MovieCard({ movie }) {
  const { isFavourite, addToFavourites, removeFromFavourites } =
    useMovieContext();
  const favourite = isFavourite(movie.id);

  let [morebtn, setMorebtn] = useState(false);
  let paragraph =
    "A captivating film that promises drama, emotion, and unforgettable storytelling. Dive into a cinematic journey filled with compelling characters and powerful moments.";

  function onFavoriteClick(e) {
    e.preventDefault();
    if (!isFavourite(movie.id)) {
      addToFavourites(movie);
    } else {
      removeFromFavourites(movie.id);
    }
  }

  {
    console.log("new movie", movie);
  }

  return (
    <div className="movie-card bg-black rounded-2xl shadow-2xl overflow-hidden w-[220px] m-4 text-white font-sans border border-gray-800">
      <div className="movie-poster relative">
        <img
          src={
            movie.url ||
            `https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg`
          }
          alt={movie.title}
          draggable="false"
          className="w-full h-[320px] object-cover rounded-t-2xl block"
        />
        <div className="movie-overlay absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/30 via-black/20 to-black/80 flex items-start justify-end p-3 pointer-events-none">
          <button
            className="favorite-btn bg-gray-900/60 hover:bg-gray-800/80 border border-gray-700 rounded-full p-2 cursor-pointer pointer-events-auto transition-all duration-300 hover:scale-110 shadow-lg"
            onClick={(e) => {
              onFavoriteClick(e);
            }}
          >
            <FaHeart
              className={`w-6 h-6 transition-colors ${
                isFavourite(movie.id)
                  ? "text-red-500 fill-red-500"
                  : "text-white"
              }`}
            />
          </button>
        </div>
      </div>
      <div className="movie-info p-4 text-center bg-gray-900">
        <h2 className="text-base font-semibold mb-2 truncate text-white">
          {movie.title}
        </h2>
        <p className="text-xs text-gray-400 mb-2">
          <span className="font-bold text-gray-300">Release Date : </span>{" "}
          {movie.release_date}
        </p>
        <p className="text-sm text-gray-400 m-0 text-justify leading-relaxed">
          {movie.description ? (
            <>
              {morebtn
                ? movie.description
                : `${movie.description.slice(0, 100)}`}
              <button
                className="text-gray-300 hover:text-white text-xs bg-transparent border-none cursor-pointer ml-1 underline transition-colors"
                onClick={() => setMorebtn(!morebtn)}
                type="button"
              >
                {morebtn ? "show less" : "show more..."}
              </button>
            </>
          ) : (
            <span>
              {morebtn ? paragraph : `${paragraph.slice(0, 100)}...`}
              <button
                className="ml-2 text-gray-300 hover:text-white underline bg-transparent border-none cursor-pointer transition-colors"
                onClick={() => setMorebtn(!morebtn)}
                type="button"
              >
                {morebtn ? "Show Less" : "Show More"}
              </button>
            </span>
          )}
        </p>
      </div>
    </div>
  );
}
