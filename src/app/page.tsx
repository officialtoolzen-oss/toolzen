export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex flex-col items-center justify-center min-h-screen px-6">
        <h1 className="text-6xl font-bold mb-4">
          ToolZen
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          10,000+ Free Online Tools For Everyone
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold">
            Explore Tools
          </button>

          <button className="px-6 py-3 border border-white rounded-lg">
            Learn More
          </button>
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">
              PDF Tools
            </h3>
            <p className="text-gray-400">
              Merge, Split, Compress PDF
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">
              Image Tools
            </h3>
            <p className="text-gray-400">
              Resize, Convert, Compress Images
            </p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-2">
              Developer Tools
            </h3>
            <p className="text-gray-400">
              JSON, Base64, Hash Generators
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
