import React from "react";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router";
import { Favourites } from "./pages/Favourites";
import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { MovieProvider } from "./context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="App  min-h-screen bg-[#212121] text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
