import React, { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { useState } from "react";
import { Nothing } from "./Nothing";
import { movies } from "../services/Movies";

export function Home() {
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - (windowWidth - position.x - 240),
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: windowWidth - (e.clientX - offset.x) - 240,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(searchTerm);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [show, setShow] = useState(true);
  useEffect(() => {
    if (filteredMovies.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [filteredMovies]);


  return (
    <div className="Home w-full bg-black overflow-x-hidden" draggable={false}>
      <div className="relative z-10">
        <h1 className="select-none text-3xl sm:text-4xl md:text-5xl font-black text-center py-6 sm:py-8 text-white drop-shadow-2xl">
          Find Your Movies
        </h1>

        <div className="search-form flex justify-center items-center mb-6 sm:mb-8 px-4">
          <div className="relative w-full max-w-xl sm:max-w-2xl">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-1 flex flex-col sm:flex-row gap-2 sm:gap-0 items-stretch sm:items-center shadow-2xl">
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Search for movies..."
                className="select-none bg-gray-800 text-white placeholder-gray-500 rounded-lg p-3 w-full sm:mr-2 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:bg-gray-700 transition-all duration-300 border border-gray-700"
              />
              <button
                onClick={handleSearch}
                type="submit"
                className="select-none bg-gray-800 text-white rounded-lg px-6 py-3 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 shadow-lg border border-gray-700 font-semibold"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Mobile TV Section */}
        {show && (<div className="block xl:hidden my-4 w-[240px] h-[130px] mx-auto">
          <div className="relative w-full h-full">
            <img
              src="/tv.png"
              alt="tv"
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
            />
            <video
              autoPlay
              loop
              muted
              className="object-cover absolute top-[12px] left-[30px] w-[178px] h-[100px] -z-20"
            >
              <source src="/movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>)}

        {/* Only visible on desktop */}
        {show && (<div
          className={`absolute top-[40px] right-[15px] z-50 w-[275px] h-[150px] hidden xl:block ${
            show ? "block" : "hidden"
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src="/tv.png"
              alt="tv"
              className="w-full h-full object-cover pointer-events-none select-none"
            />
            <video
              autoPlay
              loop
              muted
              className="object-cover absolute top-[14px] left-[36px] w-[200px] h-[116px] -z-20"
            >
              <source src="/movie.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>)}

        <div className="movies-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 sm:gap-6 sm:p-6 w-full">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))
          ) : (
            <Nothing />
          )}
        </div>
      </div>
    </div>
  );
}
