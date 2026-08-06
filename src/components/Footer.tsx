import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center space-y-3">
        <p className="text-xs text-gray-600">
          Built with Next.js, too much coffee, and questionable LLM-driven CSS decisions
        </p>
        <Link
          href="/privacy"
          className="inline-block text-xs text-gray-600 transition-colors hover:text-accent"
        >
          Privacy
        </Link>
      </div>
    </footer>
  );
}
