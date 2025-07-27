import React from "react";

export function Nothing() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      <div className="text-6xl mb-4">🎬</div>
      <h3 className="text-white text-xl font-semibold mb-2">
        Oops! No movies match your search.
      </h3>
      <p className="text-gray-400">Try searching with different keywords</p>
    </div>
  );
}
