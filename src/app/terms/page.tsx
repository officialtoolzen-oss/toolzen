import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold mb-8">
          Terms of Service
        </h1>

        <div className="space-y-6 text-gray-400">

          <p>
            By using ToolZen you agree to these terms.
          </p>

          <p>
            All tools are provided as-is without warranty.
          </p>

          <p>
            Users are responsible for how they use the platform.
          </p>

          <p>
            ToolZen may update services at any time.
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}