import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ethan Smith",
  jobTitle: "Senior Software Development Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Workday",
  },
  url: "https://ethanasm.me",
  sameAs: [
    "https://github.com/ethanasm",
    "https://www.linkedin.com/in/ethan-a-smith/",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Southern California",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "San Francisco",
    addressRegion: "CA",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
