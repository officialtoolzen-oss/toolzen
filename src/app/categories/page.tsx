export default function CategoriesPage() {
  const categories = [
    "PDF Tools",
    "Image Tools",
    "Text Tools",
    "Developer Tools",
    "SEO Tools",
    "AI Tools",
  ];

  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="py-24 text-center">
        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Categories
        </h1>

        <p className="text-xl text-gray-400">
          Browse tools by category.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-3 gap-6">

          {categories.map((category) => (
            <div
              key={category}
              className="bg-[#15151d] border border-pink-500/20 rounded-3xl p-8 hover:border-pink-500 transition"
            >
              <h2 className="text-2xl font-bold">
                {category}
              </h2>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}