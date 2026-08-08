"use client";

import { useState } from "react";

export default function QRScanner() {
  const [result, setResult] = useState("");

  const fakeScan = () => {
    setResult(
      "Demo Scan Result: https://toolzen.vercel.app"
    );
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
          QR Scanner
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Scan QR Codes from images instantly.
        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6">

        <div className="bg-[#15151d] border border-teal-500/20 rounded-3xl p-10 text-center">

          <input
            type="file"
            accept="image/*"
            className="mb-8"
          />

          <button
            onClick={fakeScan}
            className="bg-teal-600 px-8 py-4 rounded-2xl font-bold"
          >
            Scan QR
          </button>

          {result && (
            <div className="mt-8 p-6 rounded-2xl bg-[#0f0f15]">
              <h3 className="text-xl font-bold mb-3">
                Scan Result
              </h3>

              <p className="text-teal-400 break-all">
                {result}
              </p>
            </div>
          )}

        </div>

      </section>

    </main>
  );
}