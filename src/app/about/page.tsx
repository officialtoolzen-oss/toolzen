export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      {/* Hero */}

      <section className="py-24 px-6 text-center">

        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          About ToolZen
        </h1>

        <p className="max-w-3xl mx-auto text-xl text-gray-400">
          ToolZen is a modern online tools platform built to help
          developers, designers, marketers and creators work faster.
        </p>

      </section>

      {/* Mission */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-[#15151d] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-400">
              Make powerful online tools accessible to everyone.
            </p>
          </div>

          <div className="bg-[#15151d] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-purple-500 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-400">
              Become the world's most useful online tools platform.
            </p>
          </div>

          <div className="bg-[#15151d] rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-cyan-500 mb-4">
              Our Goal
            </h2>

            <p className="text-gray-400">
              Deliver fast, secure and professional web tools.
            </p>
          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-4xl font-bold text-center mb-10">
          ToolZen Stats
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#15151d] p-8 rounded-3xl text-center">
            <h3 className="text-4xl font-bold text-pink-500">
              20+
            </h3>
            <p className="text-gray-400 mt-2">
              Tools
            </p>
          </div>

          <div className="bg-[#15151d] p-8 rounded-3xl text-center">
            <h3 className="text-4xl font-bold text-purple-500">
              100%
            </h3>
            <p className="text-gray-400 mt-2">
              Free
            </p>
          </div>

          <div className="bg-[#15151d] p-8 rounded-3xl text-center">
            <h3 className="text-4xl font-bold text-cyan-500">
              Fast
            </h3>
            <p className="text-gray-400 mt-2">
              Performance
            </p>
          </div>

          <div className="bg-[#15151d] p-8 rounded-3xl text-center">
            <h3 className="text-4xl font-bold text-green-500">
              24/7
            </h3>
            <p className="text-gray-400 mt-2">
              Available
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}