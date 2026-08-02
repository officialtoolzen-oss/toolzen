export default function Home() {
  const tools = [
    {
      name: "JPG to PDF",
      link: "/jpg-to-pdf",
    },
    {
      name: "PDF to JPG",
      link: "#",
    },
    {
      name: "Image Compressor",
      link: "#",
    },
    {
      name: "QR Generator",
      link: "#",
    },
    {
      name: "Word Counter",
      link: "#",
    },
    {
      name: "Case Converter",
      link: "#",
    },
  ];

  const categories = [
    "PDF Tools",
    "Image Tools",
    "Text Tools",
    "Developer Tools",
    "SEO Tools",
    "AI Tools",
  ];

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="px-6 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6">
          ToolZen 🚀
        </h1>

        <p className="text-xl max-w-2xl mx-auto text-gray-600 mb-8">
          10,000+ Free Online Tools For Everyone.
          Fast, Simple, Powerful & SEO Friendly.
        </p>

        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search tools..."
            className="w-full p-4 rounded-xl border border-gray-300 shadow-sm"
          />
        </div>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-xl bg-black text-white">
            Explore Tools
          </button>

          <button className="px-6 py-3 rounded-xl border">
            Learn More
          </button>
        </div>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <h3 className="text-xl font-semibold">
                {category}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Popular Tools
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <h3 className="text-xl font-semibold mb-3">
                {tool.name}
              </h3>

              <a
                href={tool.link}
                className="inline-block px-4 py-2 rounded-lg bg-black text-white"
              >
                Open Tool
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 py-10 text-center border-t bg-white">
        <h3 className="font-bold text-xl">ToolZen</h3>

        <p className="text-gray-600 mt-2">
          Free Online Tools Platform
        </p>

        <p className="text-gray-500 text-sm mt-4">
          © 2026 ToolZen. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}