"use client";

import { useState } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const testRegex = () => {
    try {
      const regex = new RegExp(pattern, "g");
      const matches = text.match(regex);

      if (matches) {
        setResult(matches.join(", "));
      } else {
        setResult("No Match Found");
      }
    } catch {
      setResult("Invalid Regex Pattern");
    }
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
          Regex Tester
        </h1>

        <p className="text-gray-400 mt-4">
          Test regular expressions instantly.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6">

        <input
          type="text"
          placeholder="Enter Regex Pattern"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          className="w-full p-4 rounded-2xl bg-[#15151d]"
        />

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text..."
          className="w-full h-64 mt-6 p-6 rounded-2xl bg-[#15151d]"
        />

        <button
          onClick={testRegex}
          className="mt-6 bg-teal-600 px-8 py-4 rounded-2xl font-bold"
        >
          Test Regex
        </button>

        <div className="mt-8 bg-[#15151d] p-6 rounded-2xl">
          {result}
        </div>

      </section>

    </main>
  );
}