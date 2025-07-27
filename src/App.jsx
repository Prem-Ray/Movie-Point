import React from "react";
import { Home } from "./pages/Home";
import { Favourites } from "./pages/Favourites";
import { NavBar } from "./components/NavBar";
import { Routes, Route } from "react-router";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      {/* Responsive navigation bar */}
      <NavBar />

      {/* Main layout wrapper */}
      <main className="App min-h-screen w-full overflow-x-hidden text-white px-2 sm:px-4 md:px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
