"use client";

import { useState } from "react";

export default function LoremIpsumGenerator() {
  const [paragraphs, setParagraphs] = useState(3);
  const [result, setResult] = useState("");

  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const generateLorem = () => {
    let text = "";

    for (let i = 0; i < paragraphs; i++) {
      text += lorem + "\n\n";
    }

    setResult(text);
  };

  const copyText = () => {
    navigator.clipboard.writeText(result);
    alert("Copied!");
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Lorem Ipsum Generator
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Generate dummy text instantly.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-6">

        <div className="bg-[#15151d] border border-indigo-500/20 rounded-3xl p-8">

          <label className="block mb-4 text-lg">
            Number of Paragraphs
          </label>

          <input
            type="number"
            min="1"
            max="20"
            value={paragraphs}
            onChange={(e) =>
              setParagraphs(Number(e.target.value))
            }
            className="w-full p-4 rounded-xl bg-[#0f0f15]"
          />

          <button
            onClick={generateLorem}
            className="mt-6 bg-indigo-600 px-8 py-4 rounded-2xl font-bold"
          >
            Generate
          </button>

        </div>

        {result && (
          <div className="mt-8">

            <textarea
              value={result}
              readOnly
              className="w-full h-80 p-6 rounded-3xl bg-[#15151d]"
            />

            <button
              onClick={copyText}
              className="mt-6 bg-purple-600 px-8 py-4 rounded-2xl font-bold"
            >
              Copy Text
            </button>

          </div>
        )}

      </section>

    </main>
  );
}