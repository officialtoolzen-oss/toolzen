"use client";

import { useState } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ff0080");

  const copyColor = () => {
    navigator.clipboard.writeText(color);
    alert("HEX Copied!");
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Color Picker
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Pick any color and copy HEX code instantly.
        </p>

      </section>

      <section className="max-w-3xl mx-auto px-6">

        <div className="bg-[#15151d] border border-pink-500/20 rounded-3xl p-10 text-center">

          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-40 h-40 border-none bg-transparent cursor-pointer"
          />

          <div
            className="mt-8 rounded-3xl h-40"
            style={{ backgroundColor: color }}
          />

          <h2 className="text-3xl font-bold mt-8">
            {color}
          </h2>

          <button
            onClick={copyColor}
            className="mt-6 bg-pink-600 px-8 py-4 rounded-2xl font-bold"
          >
            Copy HEX
          </button>

        </div>

      </section>

    </main>
  );
}