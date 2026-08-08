"use client";

import { useState } from "react";

export default function CaseConverter() {
  const [text, setText] = useState("");

  const toTitleCase = (str: string) => {
    return str.replace(
      /\w\S*/g,
      (txt) =>
        txt.charAt(0).toUpperCase() +
        txt.substring(1).toLowerCase()
    );
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
          Case Converter
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Convert text instantly into different formats.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-6">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your text here..."
          className="w-full h-64 bg-[#15151d] border border-orange-500/20 rounded-3xl p-6 outline-none"
        />

      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-3 gap-6">

          <button
            onClick={() =>
              setText(text.toUpperCase())
            }
            className="bg-orange-600 p-5 rounded-2xl font-bold"
          >
            UPPERCASE
          </button>

          <button
            onClick={() =>
              setText(text.toLowerCase())
            }
            className="bg-yellow-600 p-5 rounded-2xl font-bold"
          >
            lowercase
          </button>

          <button
            onClick={() =>
              setText(toTitleCase(text))
            }
            className="bg-pink-600 p-5 rounded-2xl font-bold"
          >
            Title Case
          </button>

        </div>

      </section>

    </main>
  );
}