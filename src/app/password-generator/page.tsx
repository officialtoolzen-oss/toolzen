"use client";

import { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    let result = "";

    for (let i = 0; i < length; i++) {
      result += chars.charAt(
        Math.floor(Math.random() * chars.length)
      );
    }

    setPassword(result);
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Password Generator
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Generate strong and secure passwords instantly.
        </p>

      </section>

      <section className="max-w-4xl mx-auto px-6">

        <div className="bg-[#15151d] border border-cyan-500/20 rounded-3xl p-10">

          <label className="block mb-4 text-lg">
            Password Length: {length}
          </label>

          <input
            type="range"
            min="6"
            max="50"
            value={length}
            onChange={(e) =>
              setLength(Number(e.target.value))
            }
            className="w-full"
          />

          <div className="mt-8">

            <input
              value={password}
              readOnly
              placeholder="Generated password..."
              className="w-full bg-[#0f0f15] border border-cyan-500/20 rounded-2xl p-4"
            />

          </div>

          <div className="flex gap-4 mt-6">

            <button
              onClick={generatePassword}
              className="bg-cyan-600 px-6 py-3 rounded-xl font-bold"
            >
              Generate
            </button>

            <button
              onClick={copyPassword}
              className="bg-blue-600 px-6 py-3 rounded-xl font-bold"
            >
              Copy
            </button>

          </div>

        </div>

      </section>

    </main>
  );
}