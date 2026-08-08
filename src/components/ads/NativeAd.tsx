export default function NativeAd() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-6 shadow-lg shadow-pink-500/5">
      <div className="mb-4 inline-flex rounded-full bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-300">
        Sponsored</div>
      <h3 className="text-2xl font-bold text-white mb-3">Boost your workflow</h3>
      <p className="text-gray-400 leading-7">
        Discover premium tools, templates, and productivity resources built to speed up your next project.
      </p>
      <a
        href="https://toolzen.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-pink-500 hover:text-white"
      >
        Learn More
      </a>
    </div>
  );
}
