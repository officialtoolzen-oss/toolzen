export default function ImageCompressor() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="text-center py-16 px-6">
        <h1 className="text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
          Image Compressor
        </h1>

        <p className="text-gray-400 text-xl mt-4 max-w-2xl mx-auto">
          Compress JPG, PNG and WEBP images without losing quality.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6">

        <div className="bg-[#15151d] border border-blue-500/20 rounded-3xl p-10 text-center">

          <div className="border-2 border-dashed border-blue-500 rounded-3xl p-16">

            <h2 className="text-3xl font-bold mb-4">
              Upload Image
            </h2>

            <p className="text-gray-400 mb-8">
              Drag & Drop Image Here
            </p>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              id="uploadImage"
            />

            <label
              htmlFor="uploadImage"
              className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl inline-block"
            >
              Select Image
            </label>

          </div>

        </div>

      </section>

      <section className="text-center py-16">

        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 px-12 py-5 rounded-2xl text-xl font-bold">
          Compress Image
        </button>

      </section>

    </main>
  );
}