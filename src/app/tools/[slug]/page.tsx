import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { createToolMetadata } from "@/lib/seo";
import ToolPageShell from "@/components/ToolPageShell";

export const dynamicParams = false;

export async function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) return {};
  return createToolMetadata(tool);
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);

  if (!tool) {
    notFound();
  }

  return <ToolPageShell tool={tool} />;
}
