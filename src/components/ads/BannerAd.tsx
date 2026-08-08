"use client";

import Script from "next/script";

export default function BannerAd() {
  return (
    <div className="flex justify-center my-8">
      <div className="w-full max-w-[728px] rounded-3xl border border-white/10 bg-[#11121b] p-5 text-center shadow-xl shadow-pink-500/5">
        <p className="text-sm uppercase tracking-[0.25em] text-pink-400 mb-3">
          Sponsored content
        </p>
        <Script id="banner-config" strategy="afterInteractive">
          {`
            atOptions = {
              'key' : 'a82737800f8b503c58c76d2ab007d2e2',
              'format' : 'iframe',
              'height' : 300,
              'width' : 160,
              'params' : {}
            };
          `}
        </Script>
        <Script
          src="https://www.highperformanceformat.com/a82737800f8b503c58c76d2ab007d2e2/invoke.js"
          strategy="afterInteractive"
        />
      </div>
    </div>
  );
}
