import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white flex items-center justify-center">

      <div className="text-center">

        <h1 className="text-9xl font-extrabold text-pink-500">
          404
        </h1>

        <h2 className="text-4xl font-bold mt-6">
          Page Not Found
        </h2>

        <p className="text-gray-400 mt-4">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 bg-pink-600 px-8 py-4 rounded-2xl"
        >
          Back Home
        </Link>

      </div>

    </main>
  );
}