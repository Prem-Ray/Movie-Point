import React from "react";
import { useMovieContext } from "../context/MovieContext";
import { MovieCard } from "../components/MovieCard";

export function Favourites() {
  const { favourites } = useMovieContext();

  if (favourites) {
    return (
      <div className="favourites-page bg-black shadow-2xl min-h-screen p-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="select-none text-4xl font-bold mb-8 text-center mt-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Explore Your Collection
          </h2>
          <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-6">
            {favourites.length > 0 ? (
              favourites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))
            ) : (
              <div className="select-none col-span-full flex flex-col items-center justify-center py-20 text-center">
                <div className="text-6xl mb-4">🥴</div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  No Favorites Yet!
                </h3>
                <p className="text-gray-400">
                  Start adding movies to build your collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="select-none col-span-full flex flex-col items-center justify-center py-20 text-center">
                <div className="text-6xl mb-4">🥴</div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  No Favorites Yet!
                </h3>
                <p className="text-gray-400">
                  Start adding movies to build your collection.
                </p>
              </div>
  );
}
