"use client";

import { useState } from "react";

export default function QRGenerator() {
  const [text, setText] = useState("");

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
          QR Generator
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Create QR Codes instantly
        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6">

        <div className="bg-[#15151d] border border-green-500/20 rounded-3xl p-10">

          <input
            type="text"
            placeholder="Enter URL or Text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-5 rounded-2xl bg-[#0f0f14] border border-green-500/30"
          />

          <div className="text-center mt-8">

            {text && (
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(
                  text
                )}`}
                alt="QR Code"
                className="mx-auto rounded-2xl"
              />
            )}

          </div>

        </div>

      </section>

    </main>
  );
}