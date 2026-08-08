export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">

      <section className="py-24 px-6 text-center">

        <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
          Contact Us
        </h1>

        <p className="max-w-3xl mx-auto text-xl text-gray-400">
          Have a question, suggestion or business inquiry?
          We'd love to hear from you.
        </p>

      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="grid md:grid-cols-2 gap-10">

          {/* Form */}

          <div className="bg-[#15151d] rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Send Message
            </h2>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-[#09090f] border border-pink-500/20"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 rounded-xl bg-[#09090f] border border-pink-500/20"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 rounded-xl bg-[#09090f] border border-pink-500/20"
              />

              <textarea
                rows={6}
                placeholder="Message"
                className="w-full p-4 rounded-xl bg-[#09090f] border border-pink-500/20"
              />

              <button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 py-4 rounded-xl font-bold">
                Send Message
              </button>

            </div>

          </div>

          {/* Contact Info */}

          <div className="bg-[#15151d] rounded-3xl p-8">

            <h2 className="text-3xl font-bold mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="text-pink-500 font-bold">
                  Email
                </h3>

                <p className="text-gray-400">
                  support@toolzen.com
                </p>
              </div>

              <div>
                <h3 className="text-purple-500 font-bold">
                  Website
                </h3>

                <p className="text-gray-400">
                  www.toolzen.com
                </p>
              </div>

              <div>
                <h3 className="text-cyan-500 font-bold">
                  Support
                </h3>

                <p className="text-gray-400">
                  Available 24/7
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}