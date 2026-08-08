"use client";

import { useState } from "react";

export default function BinaryTextConverter() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const textToBinary = () => {
    const binary = text
      .split("")
      .map((char) =>
        char.charCodeAt(0).toString(2).padStart(8, "0")
      )
      .join(" ");

    setResult(binary);
  };

  const binaryToText = () => {
    try {
      const txt = text
        .split(" ")
        .map((bin) =>
          String.fromCharCode(parseInt(bin, 2))
        )
        .join("");

      setResult(txt);
    } catch {
      setResult("Invalid Binary");
    }
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-sky-500 to-blue-500 bg-clip-text text-transparent">
          Binary ↔ Text Converter
        </h1>

        <p className="text-gray-400 mt-4">
          Convert Text to Binary and Binary to Text.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text or Binary..."
          className="w-full h-56 p-6 rounded-2xl bg-[#15151d]"
        />

        <div className="flex gap-4 mt-6 flex-wrap">

          <button
            onClick={textToBinary}
            className="bg-sky-600 px-8 py-4 rounded-2xl font-bold"
          >
            Text → Binary
          </button>

          <button
            onClick={binaryToText}
            className="bg-blue-600 px-8 py-4 rounded-2xl font-bold"
          >
            Binary → Text
          </button>

        </div>

        <textarea
          value={result}
          readOnly
          className="w-full h-56 p-6 rounded-2xl bg-[#15151d] mt-8"
        />

      </section>

    </main>
  );
}