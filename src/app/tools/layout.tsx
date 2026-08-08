import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import FooterAd from "@/components/ads/FooterAd";

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#09090f] text-white">
      <Navbar />
      {children}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <FooterAd />
      </div>
    </div>
  );
}
