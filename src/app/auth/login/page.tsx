import Link from "next/link";
import SmartLink from "@/components/SmartLink";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white py-24 px-6">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/10">
        <h1 className="text-4xl font-bold mb-6">Sign in to ToolZen</h1>
        <p className="text-gray-400 mb-10">Access saved tools, favorites, and dashboard features.</p>

        <form className="space-y-6">
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
              placeholder="Enter your password"
              className="mt-2 w-full rounded-2xl border border-white/10 bg-[#09090f] p-4 text-white outline-none focus:border-pink-500"
            />
          </label>
          <button className="w-full rounded-2xl bg-pink-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-pink-500">
            Continue
          </button>
        </form>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <SmartLink href="/auth/register" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-white transition hover:border-pink-500">
            Create account
          </SmartLink>
          <SmartLink href="/auth/forgot-password" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center text-white transition hover:border-pink-500">
            Forgot password
          </SmartLink>
        </div>

        <p className="mt-8 text-center text-sm text-gray-500">
          By continuing, you agree to our <Link href="/terms" className="text-pink-400 hover:text-pink-300">Terms</Link> and <Link href="/privacy-policy" className="text-pink-400 hover:text-pink-300">Privacy Policy</Link>.
        </p>
      </div>
    </main>
  );
}
