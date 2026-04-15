"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  urlLabel: string;
}

const projects: Project[] = [
  {
    title: "Vacation Price Tracker",
    description:
      "Personal vacation price tracker web application monitoring flights & hotels across dates for multiple users. Integrates custom MCP server with flight/hotel search tools, external MCP servers, and third-party APIs. Includes automated scheduling for daily price checks and historical trend analysis.",
    tech: ["MCP", "Python", "React"],
    url: "https://github.com/ethanasm/vacation-price-tracker",
    urlLabel: "github.com/ethanasm/vacation-price-tracker",
  },
  {
    title: "MCP Review",
    description:
      "CLI tool that provides AI-powered code review at the commit level. Works with local git history — no PRs required. Acts as an MCP host orchestrating tools to gather project context, enabling specific, pattern-aware feedback rather than generic suggestions.",
    tech: ["MCP", "TypeScript", "CLI"],
    url: "https://github.com/ethanasm/mcp-review",
    urlLabel: "github.com/ethanasm/mcp-review",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-accent text-sm mb-10">// projects</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 bg-surface border border-border hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">&#x2197;</span>
                    <span className="font-mono text-xs text-gray-600 group-hover:text-gray-500 transition-colors">
                      {project.urlLabel}
                    </span>
                  </div>

                  <h3 className="text-white font-bold group-hover:text-accent transition-colors duration-300">{project.title}</h3>

                  <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-2 mt-4">
                    {project.tech.map((t, j) => (
                      <span
                        key={j}
                        className="font-mono text-xs font-semibold text-accent/70"
                      >
                        {j > 0 && <span className="text-accent/30 mr-2">·</span>}
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
