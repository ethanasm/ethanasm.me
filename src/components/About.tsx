"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techTags = [
  "React",
  "Java",
  "Python",
  "LangChain",
  "MCP",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-12 items-start"
        >
          {/* Profile photo */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-accent/20">
              <Image
                src="/images/profile.jpg"
                alt="Ethan Smith"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1">
            <p className="font-mono text-accent text-sm mb-6">// about</p>

            <p className="text-gray-300 leading-relaxed">
              Senior software engineer with 5+ years at Workday building AI-powered
              planning tools and full-stack applications. Currently focused on
              the Planning Agent, which gives financial planners tools for
              data exploration, variance analysis, and scenario planning.
            </p>

            <p className="text-gray-500 leading-relaxed mt-4">
              Before that, I spent three years modernizing legacy systems,
              migrating Tapestry/JS pages to React + REST APIs, building
              report schedulers, and implementing time hierarchy features
              across the full stack. I studied Computer Science and
              Business Administration at USC. Outside of work, I'm into
              backpacking, Broadway, vinyl collecting, baking, and strategy
              games like Civ and Catan.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent/10 text-accent text-xs px-3 py-1 rounded border border-accent/20 font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Currently into */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="font-mono text-accent/60 text-xs mb-3">// lately</p>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
                <div>
                  <p className="text-[11px] text-gray-600 uppercase tracking-wider">Reading</p>
                  <p className="text-sm text-gray-400 mt-0.5">The 7½ Deaths of Evelyn Hardcastle</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-600 uppercase tracking-wider">Playing</p>
                  <p className="text-sm text-gray-400 mt-0.5">Factorio: Space Age</p>
                </div>
                <div>
                  <p className="text-[11px] text-gray-600 uppercase tracking-wider">Listening</p>
                  <p className="text-sm text-gray-400 mt-0.5">Trying Times — James Blake</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
