export default function JpgToPdfPage() {
  return (
    <main className="min-h-screen p-10">
      <h1 className="text-4xl font-bold">
        JPG to PDF Converter
      </h1>

      <p className="mt-4 text-gray-600">
        Convert JPG images into PDF files online for free.
      </p>

      <div className="mt-8 border rounded-xl p-8">
        <input type="file" accept="image/*" />
      </div>
    </main>
  );
}