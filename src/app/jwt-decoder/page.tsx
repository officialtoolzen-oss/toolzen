"use client";

import { useState } from "react";

export default function JWTDecoder() {
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState("");

  const decodeJWT = () => {
    try {
      const payload = token.split(".")[1];

      const decodedPayload = JSON.parse(
        atob(payload.replace(/-/g, "+").replace(/_/g, "/"))
      );

      setDecoded(
        JSON.stringify(decodedPayload, null, 2)
      );
    } catch {
      setDecoded("Invalid JWT Token");
    }
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">
          JWT Decoder
        </h1>

        <p className="text-gray-400 mt-4">
          Decode JWT Tokens instantly.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6">

        <textarea
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Paste JWT Token..."
          className="w-full h-56 p-6 rounded-2xl bg-[#15151d]"
        />

        <button
          onClick={decodeJWT}
          className="mt-6 bg-violet-600 px-8 py-4 rounded-2xl font-bold"
        >
          Decode Token
        </button>

        <textarea
          value={decoded}
          readOnly
          className="w-full h-80 p-6 rounded-2xl bg-[#15151d] mt-8"
        />

      </section>

    </main>
  );
}