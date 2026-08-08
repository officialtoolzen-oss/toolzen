import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-pink-500/20 mt-20 bg-[#09090f]">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              ToolZen
            </h2>

            <p className="text-gray-400 mt-4">
              Free online tools platform for developers,
              creators, designers and businesses.
            </p>

          </div>

          {/* Tools */}

          <div>

            <h3 className="text-xl font-bold mb-4">
              Tools
            </h3>

            <div className="space-y-3 text-gray-400">

              <Link href="/tools" className="block hover:text-pink-500">
                All Tools
              </Link>

              <Link href="/categories" className="block hover:text-pink-500">
                Categories
              </Link>

              <Link href="/tools/jpg-to-pdf" className="block hover:text-pink-500">
                JPG to PDF
              </Link>

              <Link href="/tools/pdf-to-jpg" className="block hover:text-pink-500">
                PDF to JPG
              </Link>

            </div>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold mb-4">
              Company
            </h3>

            <div className="space-y-3 text-gray-400">

              <Link href="/about" className="block hover:text-pink-500">
                About
              </Link>

              <Link href="/contact" className="block hover:text-pink-500">
                Contact
              </Link>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-xl font-bold mb-4">
              Legal
            </h3>

            <div className="space-y-3 text-gray-400">

              <Link href="/privacy-policy" className="block hover:text-pink-500">
                Privacy Policy
              </Link>

              <Link href="/terms" className="block hover:text-pink-500">
                Terms of Service
              </Link>

            </div>

          </div>

        </div>

        <div className="border-t border-pink-500/10 mt-12 pt-8 text-center">

          <p className="text-gray-500">
            © 2026 ToolZen. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}