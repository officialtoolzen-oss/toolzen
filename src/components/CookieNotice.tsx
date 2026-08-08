"use client";

import { useState } from "react";

export default function CookieNotice() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 z-50 w-[min(92vw,980px)] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#11121b] p-5 shadow-2xl shadow-black/40 text-white">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Cookie notice</p>
          <p className="text-sm text-gray-400">
            ToolZen uses cookies to improve performance and personalize the experience. This is a placeholder for future consent functionality.
          </p>
        </div>
        <button
          onClick={() => setVisible(false)}
          className="inline-flex items-center justify-center rounded-full bg-pink-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-pink-500"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
