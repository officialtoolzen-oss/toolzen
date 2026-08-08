"use client";

import Script from "next/script";

export default function BannerAd() {
  return (
    <div className="flex justify-center my-8">
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
  );
}