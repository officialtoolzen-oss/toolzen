"use client";

import { useState } from "react";

export default function JSONFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
    } catch {
      setOutput("❌ Invalid JSON");
    }
  };

  const minifyJSON = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
    } catch {
      setOutput("❌ Invalid JSON");
    }
  };

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">

        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          JSON Formatter
        </h1>

        <p className="text-gray-400 text-xl mt-4">
          Format, Beautify and Minify JSON instantly.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6">

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='{"name":"ToolZen"}'
          className="w-full h-64 bg-[#15151d] border border-indigo-500/20 rounded-3xl p-6 outline-none"
        />

        <div className="flex gap-4 mt-6">

          <button
            onClick={formatJSON}
            className="bg-indigo-600 px-6 py-3 rounded-xl font-bold"
          >
            Format JSON
          </button>

          <button
            onClick={minifyJSON}
            className="bg-purple-600 px-6 py-3 rounded-xl font-bold"
          >
            Minify JSON
          </button>

        </div>

        <textarea
          value={output}
          readOnly
          className="w-full h-64 bg-[#15151d] border border-indigo-500/20 rounded-3xl p-6 mt-8"
        />

      </section>

    </main>
  );
}