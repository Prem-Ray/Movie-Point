import { Link } from "react-router";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`w-full overflow-x-hidden select-none 
        ${
          isScrolled
            ? "bg-slate-900/20 backdrop-blur-md border-gray-700/10 shadow-lg"
            : "bg-gradient-to-r from-slate-900/98 via-gray-900/98 to-black/98 backdrop-blur-xl border-gray-700/30 shadow-2xl"
        } 
        border-b text-white flex justify-between items-center 
        px-4 sm:px-6 md:px-8 py-4 md:py-5 sticky top-0 z-50 transition-all duration-500 ease-in-out`}
      >
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link
          draggable={false}
            to="/"
            className="group relative text-3xl font-extrabold transition-all duration-500 transform hover:scale-110"
          >
            <span
            draggable={false}
              className={`relative z-10 bg-gradient-to-r ${
                isScrolled
                  ? "from-white/90 via-gray-200/90 to-gray-400/90"
                  : "from-white via-gray-100 to-gray-300"
              } bg-clip-text text-transparent group-hover:from-blue-200 group-hover:via-white group-hover:to-purple-200 transition-all duration-500 drop-shadow-lg`}
            >
              Movie Point
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500 -z-10 scale-110"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </Link>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} draggable={false}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          <Link
          draggable={false}
            to="/"
            className={`relative px-6 py-3 ${
              isScrolled ? "text-gray-300/80" : "text-gray-300"
            } hover:text-white font-medium transition-all duration-300 group`}
          >
            <span className="relative z-10">Home</span>
            <div
              className={`absolute inset-0 ${
                isScrolled ? "bg-gray-800/20" : "bg-gray-800/40"
              } backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-gray-700/30`}
            ></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-white group-hover:w-full transition-all duration-300"></div>
          </Link>

          <Link
          draggable={false}
            to="/favourites"
            className={`relative px-6 py-3 ${
              isScrolled ? "text-gray-300/80" : "text-gray-300"
            } hover:text-white font-medium transition-all duration-300 group`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Favourites
            </span>
            <div
              className={`absolute inset-0 ${
                isScrolled ? "bg-gray-800/20" : "bg-gray-800/40"
              } backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 border border-gray-700/30`}
            ></div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gray-400 to-white group-hover:w-full transition-all duration-300"></div>
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 w-full bg-black bg-opacity-95 backdrop-blur-md px-6 py-6 z-40 flex flex-col gap-4">
          <Link
          draggable={false}
            to="/"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-blue-300 transition"
          >
            Home
          </Link>
          <Link
          draggable={false}
            to="/favourites"
            onClick={() => setMenuOpen(false)}
            className="text-white text-lg hover:text-blue-300 transition"
          >
            Favourites
          </Link>
        </div>
      )}
    </>
  );
}
