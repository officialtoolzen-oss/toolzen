"use client";

import { useState } from "react";

export default function HashGenerator() {
  const [text, setText] = useState("");
  const [hash, setHash] = useState("");

  async function generateSHA256() {
    const msgBuffer = new TextEncoder().encode(text);

    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      msgBuffer
    );

    const hashArray = Array.from(
      new Uint8Array(hashBuffer)
    );

    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setHash(hashHex);
  }

  const copyHash = () => {
    navigator.clipboard.writeText(hash);
    alert("Copied!");
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
          Hash Generator
        </h1>

        <p className="text-gray-400 mt-4">
          Generate SHA256 hash instantly.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6">

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter Text..."
          className="w-full h-52 bg-[#15151d] rounded-3xl p-6"
        />

        <button
          onClick={generateSHA256}
          className="mt-6 bg-rose-600 px-8 py-4 rounded-2xl font-bold"
        >
          Generate Hash
        </button>

        {hash && (
          <>
            <div className="mt-8 bg-[#15151d] rounded-3xl p-6 break-all">
              {hash}
            </div>

            <button
              onClick={copyHash}
              className="mt-6 bg-pink-600 px-8 py-4 rounded-2xl font-bold"
            >
              Copy Hash
            </button>
          </>
        )}

      </section>

    </main>
  );
}