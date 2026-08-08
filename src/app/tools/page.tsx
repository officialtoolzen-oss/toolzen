"use client";
import { tools } from "@/data/tools";
import { useState } from "react";
import Link from "next/link";
import SmartLink from "@/components/SmartLink";
import BannerAd from "@/components/ads/BannerAd";

export default function ToolsPage() {
  const [search, setSearch] = useState("");

  const featuredTools = [
    "PDF to JPG",
    "JPG to PDF",
    "Image Compressor",
    "QR Generator",
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">
          All Tools
        </h1>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Access all ToolZen tools from one place. Fast, modern and completely free.
        </p>

        <div className="max-w-2xl mx-auto mt-10">
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-5 rounded-2xl bg-[#15151d] border border-pink-500/30 outline-none focus:border-pink-500"
          />
        </div>

        <div className="flex justify-center gap-4 flex-wrap mt-8">
          {featuredTools.map((tool) => (
            <button
              key={tool}
              onClick={() => setSearch(tool)}
              className="bg-pink-600 hover:bg-pink-700 px-5 py-3 rounded-xl transition"
            >
              {tool}
            </button>
          ))}
        </div>
      </section>

      <BannerAd />

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-[#15151d] p-6 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-pink-500">{tools.length}+</h3>
            <p className="text-gray-400 mt-2">Tools</p>
          </div>

          <div className="bg-[#15151d] p-6 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-cyan-500">100%</h3>
            <p className="text-gray-400 mt-2">Free</p>
          </div>

          <div className="bg-[#15151d] p-6 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-purple-500">Fast</h3>
            <p className="text-gray-400 mt-2">Performance</p>
          </div>

          <div className="bg-[#15151d] p-6 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-green-500">24/7</h3>
            <p className="text-gray-400 mt-2">Available</p>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold mb-10 text-center">Popular Tools</h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.slug}
              className="bg-[#15151d] border border-pink-500/20 rounded-3xl p-6 hover:border-pink-500 transition"
            >
              <h3 className="text-xl font-semibold mb-4">{tool.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{tool.description}</p>

              <SmartLink
                href={`/tools/${tool.slug}`}
                className="bg-pink-600 px-5 py-3 rounded-xl inline-block text-white"
              >
                Open Tool
              </SmartLink>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center mt-10 text-gray-400">No tools found.</div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">More Tools Coming Soon</h2>

          <p className="text-lg text-white/90 mb-8">
            ToolZen is growing every week with new tools and features.
          </p>

          <Link
            href="/"
            className="bg-white text-black px-8 py-4 rounded-2xl font-semibold inline-block"
          >
            Back Home
          </Link>
        </div>
      </section>
    </main>
  );
}