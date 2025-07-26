import React from "react";

export function Nothing() {
  return (
    <div className="col-span-full text-center mt-16 select-none">
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-md mx-auto shadow-2xl">
        <p className="text-gray-300 text-lg font-medium">
          Oops! No movies match your search.
        </p>
      </div>
    </div>
  );
}
