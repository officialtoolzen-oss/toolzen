"use client";

import { useState } from "react";

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const encodeText = () => {
    setOutput(btoa(input));
  };

  const decodeText = () => {
    try {
      setOutput(atob(input));
    } catch {
      setOutput("Invalid Base64 String");
    }
  };

  const copyResult = () => {
    navigator.clipboard.writeText(output);
    alert("Copied!");
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
          Base64 Encoder / Decoder
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Encode and Decode Base64 instantly.
        </p>

      </section>

      <section className="max-w-5xl mx-auto px-6">

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text..."
          className="w-full h-52 bg-[#15151d] border border-violet-500/20 rounded-3xl p-6"
        />

        <div className="flex gap-4 mt-6 flex-wrap">

          <button
            onClick={encodeText}
            className="bg-violet-600 px-6 py-3 rounded-xl font-bold"
          >
            Encode
          </button>

          <button
            onClick={decodeText}
            className="bg-purple-600 px-6 py-3 rounded-xl font-bold"
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
          value={output}
          readOnly
          className="w-full h-52 bg-[#15151d] border border-violet-500/20 rounded-3xl p-6 mt-8"
        />

      </section>

    </main>
  );
}