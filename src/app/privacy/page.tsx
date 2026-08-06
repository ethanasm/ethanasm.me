import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Ethan Smith",
  description: "Privacy information for ethanasm.me.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-6 py-20">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="font-mono text-sm text-accent transition-opacity hover:opacity-80"
        >
          ← ethanasm.me
        </Link>

        <h1 className="mt-10 text-4xl font-bold tracking-tight">Privacy</h1>
        <p className="mt-3 font-mono text-xs text-gray-600">
          Last updated August 5, 2026
        </p>

        <div className="mt-10 space-y-8 leading-relaxed text-gray-400">
          <section>
            <h2 className="text-lg font-semibold text-white">
              Cookie-free traffic analytics
            </h2>
            <p className="mt-3">
              This site uses limited, cookie-free analytics to understand aggregate
              traffic. For each page view, the requested page and approximate
              country, region, and city are sent to Axiom. The location is derived
              from the network request by Cloudflare.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              What is not collected
            </h2>
            <p className="mt-3">
              IP addresses are not sent to Axiom or retained in this site&apos;s
              analytics. The analytics do not use cookies, local storage, visitor
              identifiers, browser fingerprints, advertising identifiers, or
              cross-site tracking. They cannot identify returning or unique
              visitors.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">
              Purpose and retention
            </h2>
            <p className="mt-3">
              The data is used only to understand aggregate site traffic and
              performance. Analytics events are retained for up to 30 days. The
              data is not sold, used for advertising, or combined with activity
              from other websites.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Service providers</h2>
            <p className="mt-3">
              Cloudflare processes network requests and derives approximate
              location information. Axiom stores the minimized analytics events.
              These providers necessarily process limited technical information
              to deliver their services under their respective privacy and data
              processing terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white">Contact</h2>
            <p className="mt-3">
              For questions about this privacy notice or the analytics data,
              contact{" "}
              <a
                href="mailto:ethan7ce@gmail.com"
                className="text-accent transition-opacity hover:opacity-80"
              >
                ethan7ce@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
