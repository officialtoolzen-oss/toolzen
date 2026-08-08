"use client";

import { useState } from "react";

export default function UUIDGenerator() {
  const [uuid, setUuid] = useState("");

  const generateUUID = () => {
    setUuid(crypto.randomUUID());
  };

  const copyUUID = () => {
    navigator.clipboard.writeText(uuid);
    alert("UUID Copied!");
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          UUID Generator
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Generate unique UUID instantly.
        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6">

        <div className="bg-[#15151d] border border-cyan-500/20 rounded-3xl p-10 text-center">

          <button
            onClick={generateUUID}
            className="bg-cyan-600 px-8 py-4 rounded-2xl font-bold"
          >
            Generate UUID
          </button>

          {uuid && (
            <>
              <div className="mt-8 p-6 bg-[#0f0f15] rounded-2xl break-all">
                {uuid}
              </div>

              <button
                onClick={copyUUID}
                className="mt-6 bg-blue-600 px-8 py-4 rounded-2xl font-bold"
              >
                Copy UUID
              </button>
            </>
          )}

        </div>

      </section>

    </main>
  );
}