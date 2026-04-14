"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background photo */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Lake Como, Italy"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Side fade overlay — dark on left, transparent on right */}
      {/* Side fade overlay — dark on left ~35%, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 via-35% to-transparent to-60%" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="font-mono text-accent text-sm mb-4"
            >
              $ whoami
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-5xl md:text-6xl font-extrabold tracking-tight"
            >
              Ethan Smith
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-lg text-gray-300 mt-4"
            >
              Full-Stack Software Engineer · AI Infrastructure
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-sm text-gray-500 mt-1"
            >
              Adaptive Planning @ Workday
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="flex gap-3 mt-8"
            >
              <a
                href="/Ethan-Smith-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-bg px-5 py-2.5 rounded text-sm font-bold hover:bg-accent/90 transition-colors"
              >
                Resume
              </a>
              <a
                href="https://github.com/ethanasm"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent/40 text-accent px-5 py-2.5 rounded text-sm hover:border-accent/70 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-a-smith/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-accent/40 text-accent px-5 py-2.5 rounded text-sm hover:border-accent/70 transition-colors"
              >
                LinkedIn
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
