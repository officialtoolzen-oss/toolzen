export default function PDFtoJPG() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
          PDF to JPG
        </h1>

        <p className="text-gray-400 text-xl mt-4 max-w-2xl mx-auto">
          Convert PDF pages into high quality JPG images.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6">

        <div className="bg-[#15151d] border border-red-500/20 rounded-3xl p-10 text-center">

          <div className="border-2 border-dashed border-red-500 rounded-3xl p-16">

            <h2 className="text-3xl font-bold mb-4">
              Upload PDF File
            </h2>

            <p className="text-gray-400 mb-8">
              Drag & Drop PDF here
            </p>

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              id="uploadPdf"
            />

            <label
              htmlFor="uploadPdf"
              className="cursor-pointer bg-red-600 hover:bg-red-700 px-8 py-4 rounded-2xl inline-block"
            >
              Select PDF
            </label>

          </div>

        </div>

      </section>

      <section className="text-center py-16">

        <button className="bg-gradient-to-r from-red-600 to-pink-600 px-12 py-5 rounded-2xl text-xl font-bold">
          Convert to JPG
        </button>

      </section>

    </main>
  );
}