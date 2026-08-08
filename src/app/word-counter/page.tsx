"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const words = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const characters = text.length;

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Word Counter
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Count words, characters and text statistics instantly.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-6">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing here..."
          className="w-full h-64 bg-[#15151d] border border-purple-500/20 rounded-3xl p-6 outline-none"
        />

      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-[#15151d] border border-purple-500/20 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-purple-500">
              {words}
            </h2>

            <p className="text-gray-400 mt-2">
              Words
            </p>
          </div>

          <div className="bg-[#15151d] border border-purple-500/20 rounded-3xl p-8 text-center">
            <h2 className="text-4xl font-bold text-pink-500">
              {characters}
            </h2>

            <p className="text-gray-400 mt-2">
              Characters
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}