import React from "react";
import { useMovieContext } from "../context/MovieContext";
import { MovieCard } from "../components/MovieCard";

export function Favourites() {
  const { favourites } = useMovieContext();

  if (favourites) {
    return (
      <div className="favourites-page bg-gradient-to-br from-slate-900 via-gray-900 to-black min-h-screen p-6">
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
              <div className="col-span-full text-center mt-16 select-none">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
                  <p className="text-gray-300 text-lg font-medium">
                    No more favourites.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="text-center p-8 bg-gray-800/30 backdrop-blur-md border border-gray-700/30 rounded-3xl shadow-2xl max-w-lg mx-4">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4">
          No Favourite Movies Yet
        </h1>
        <p className="text-gray-300 text-lg font-medium leading-relaxed">
          Add movies to your favourites list to see them here.
        </p>
      </div>
    </div>
  );
}
