import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold text-accent font-mono">
            $ whoami — ethanasm.me
          </h1>
        </section>
      </main>
    </>
  );
}
