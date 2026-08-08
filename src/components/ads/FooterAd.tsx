export default function FooterAd() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-8 text-center shadow-xl shadow-pink-500/5">
      <p className="text-sm uppercase tracking-[0.3em] text-pink-300 mb-3">Sponsored Message</p>
      <h3 className="text-3xl font-bold text-white mb-4">Get more done with ToolZen Premium</h3>
      <p className="text-gray-400 leading-7 mb-6">
        Upgrade your workflow with advanced conversion tools, PDF utilities, and business automation features.
      </p>
      <a
        href="https://toolzen.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex rounded-full bg-pink-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-pink-500"
      >
        Explore Premium
      </a>
    </div>
  );
}
