"use client";

import { useState } from "react";

export default function UrlEncoder() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const encodeUrl = () => {
    setResult(encodeURIComponent(text));
  };

  const decodeUrl = () => {
    try {
      setResult(decodeURIComponent(text));
    } catch {
      setResult("Invalid URL");
    }
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    alert("Copied!");
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-emerald-500 to-green-400 bg-clip-text text-transparent">
          URL Encoder / Decoder
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Encode and Decode URLs instantly.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-6">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter URL..."
          className="w-full h-52 bg-[#15151d] border border-emerald-500/20 rounded-3xl p-6"
        />

        <div className="flex gap-4 mt-6 flex-wrap">

          <button
            onClick={encodeUrl}
            className="bg-emerald-600 px-6 py-3 rounded-xl font-bold"
          >
            Encode
          </button>

          <button
            onClick={decodeUrl}
            className="bg-green-600 px-6 py-3 rounded-xl font-bold"
          >
            Decode
          </button>

          <button
            onClick={copyResult}
            className="bg-gray-700 px-6 py-3 rounded-xl font-bold"
          >
            Copy
          </button>

        </div>

        <textarea
          value={result}
          readOnly
          className="w-full h-52 bg-[#15151d] border border-emerald-500/20 rounded-3xl p-6 mt-8"
        />

      </section>

    </main>
  );
}