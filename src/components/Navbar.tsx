"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#09090f]/90 backdrop-blur border-b border-pink-500/20">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          ToolZen
        </Link>

        <div className="hidden md:flex gap-8 text-gray-300">

          <Link href="/">Home</Link>

          <Link href="/tools">Tools</Link>

          <Link href="/categories">Categories</Link>

          <Link href="/about">About</Link>

          <Link href="/contact">Contact</Link>

        </div>

       <Link
  href="/tools"
  className="bg-pink-600 px-5 py-3 rounded-xl"
>
  Explore
</Link>

      </div>

    </nav>
  );
}
