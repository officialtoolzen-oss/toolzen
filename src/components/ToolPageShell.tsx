import type { Tool } from "@/data/tools";
import Link from "next/link";
import NativeAd from "@/components/ads/NativeAd";
import SmartLink from "@/components/SmartLink";
import ToolRenderer from "@/components/ToolRenderer";
import { tools } from "@/data/tools";

export default function ToolPageShell({ tool }: { tool: Tool }) {
  const relatedTools = tools
    .filter((item) => item.category === tool.category && item.slug !== tool.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <section className="py-20 px-6 bg-[#09090f]">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-[2fr_1fr] items-center">
          <div>
            <p className="inline-flex rounded-full bg-pink-500/10 px-4 py-2 text-sm font-semibold text-pink-300 mb-4">
              {tool.category}
            </p>
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
              {tool.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              {tool.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <SmartLink
                href={`/tools/${tool.slug}`}
                className="inline-flex items-center justify-center rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/20 transition hover:bg-pink-500"
              >
                Open {tool.name}
              </SmartLink>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-pink-500 hover:bg-white/10"
              >
                Browse all tools
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-pink-500/10 bg-[#11121b] p-8 shadow-xl shadow-pink-500/5">
            <h2 className="text-2xl font-bold text-white mb-4">Why use {tool.name}?</h2>
            <ul className="space-y-3 text-gray-300">
              {tool.features.map((feature) => (
                <li key={feature} className="rounded-3xl border border-white/5 bg-white/5 p-4">
                  <p className="font-medium text-white">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <ToolRenderer slug={tool.slug} />
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-10">
            <article className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10 shadow-xl shadow-pink-500/5">
              <h2 className="text-3xl font-bold text-white mb-6">Professional Tool Experience</h2>
              <p className="text-gray-300 leading-8">
                {tool.name} is designed to help you complete tasks faster, safely and without paywalls.
                Every feature is built for reliability and quick access so you can finish work in minutes.
              </p>
            </article>

            <div className="grid gap-6 md:grid-cols-2">
              {tool.features.map((feature) => (
                <div key={feature} className="rounded-[1.75rem] border border-white/10 bg-[#0d0d14] p-8">
                  <h3 className="text-xl font-semibold text-white">{feature}</h3>
                  <p className="mt-3 text-gray-400">
                    A modern tool feature that improves speed, accuracy, and ease of use.
                  </p>
                </div>
              ))}
            </div>

            <section className="rounded-[2rem] border border-white/10 bg-[#11121b] p-10">
              <h3 className="text-3xl font-bold text-white mb-6">Frequently Asked Questions</h3>
              <div className="space-y-5">
                {tool.faq.map((item) => (
                  <div key={item.question} className="rounded-3xl bg-[#0f1118] p-6">
                    <h4 className="text-lg font-semibold text-white">{item.question}</h4>
                    <p className="mt-2 text-gray-400">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-8">
              <h3 className="text-2xl font-bold text-white mb-4">SEO Content Block</h3>
              <p className="text-gray-300 leading-8">
                {tool.seoDescription} ToolZen keeps the interface clean while providing premium conversion,
                validation, and generation tools for teams and solo builders.
              </p>
            </div>

            <NativeAd />

            <div className="rounded-[2rem] border border-white/10 bg-[#11121b] p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Related tools</h3>
              <div className="space-y-3">
                {relatedTools.map((related) => (
                  <SmartLink
                    key={related.slug}
                    href={`/tools/${related.slug}`}
                    className="block rounded-3xl border border-white/10 bg-[#0d0d14] px-5 py-4 text-white transition hover:border-pink-500/40"
                  >
                    {related.name}
                  </SmartLink>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
