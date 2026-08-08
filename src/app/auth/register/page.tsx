import Link from "next/link";
import SmartLink from "@/components/SmartLink";

export default function RegisterPage() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white py-24 px-6">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/10">
        <h1 className="text-4xl font-bold mb-6">Create your ToolZen account</h1>
        <p className="text-gray-400 mb-10">Start saving your favorite tools and access your dashboard.</p>

        <form className="space-y-6">
          <label className="block">
            <span className="text-sm font-medium text-gray-300">Name</span>
            <input
              type="text"
              placeholder="Your name"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-[#09090f] p-4 text-white outline-none focus:border-pink-500"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-300">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-[#09090f] p-4 text-white outline-none focus:border-pink-500"
            />
          </label>
          <label className="block">
            <span className="text-sm font-medium text-gray-300">Password</span>
            <input
              type="password"
              placeholder="Choose a password"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-[#09090f] p-4 text-white outline-none focus:border-pink-500"
            />
          </label>
          <button className="w-full rounded-2xl bg-pink-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-pink-500">
            Create account
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Already have an account? <Link href="/auth/login" className="text-pink-400 hover:text-pink-300">Sign in</Link>
        </div>
      </div>
    </main>
  );
}
