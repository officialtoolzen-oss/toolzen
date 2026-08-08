import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="max-w-5xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-400">

          <p>
            ToolZen respects your privacy and protects your data.
          </p>

          <p>
            We do not sell personal information to third parties.
          </p>

          <p>
            Files uploaded to our tools are processed securely.
          </p>

          <p>
            We may use cookies and analytics to improve services.
          </p>

        </div>

      </section>

      <Footer />

    </main>
  );
}