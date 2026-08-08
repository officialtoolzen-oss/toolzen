"use client";

import { useState } from "react";

export default function TextDiffChecker() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [result, setResult] = useState("");

  const compareText = () => {
    if (text1 === text2) {
      setResult("✅ Both texts are identical");
    } else {
      setResult("❌ Texts are different");
    }
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-500 to-green-500 bg-clip-text text-transparent">
          Text Diff Checker
        </h1>

        <p className="text-gray-400 mt-4 text-xl">
          Compare two texts instantly.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-6">

          <textarea
            value={text1}
            onChange={(e) => setText1(e.target.value)}
            placeholder="Paste First Text"
            className="h-80 p-6 rounded-3xl bg-[#15151d]"
          />

          <textarea
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            placeholder="Paste Second Text"
            className="h-80 p-6 rounded-3xl bg-[#15151d]"
          />

        </div>

        <div className="text-center mt-8">

          <button
            onClick={compareText}
            className="bg-emerald-600 px-10 py-4 rounded-2xl font-bold"
          >
            Compare Text
          </button>

        </div>

        {result && (
          <div className="mt-8 text-center text-2xl font-bold">
            {result}
          </div>
        )}

      </section>

    </main>
  );
}