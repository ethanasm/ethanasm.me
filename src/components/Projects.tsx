"use client";

import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  tech: string[];
  url: string;
  urlLabel: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "Vacation Price Tracker",
    description:
      "Tracks flight and hotel prices across date ranges for multiple users, with automated daily checks and historical trend data. Custom MCP server exposes flight and hotel search tools backed by third-party APIs, with a React frontend for price visualization.",
    tech: ["MCP", "Python", "React"],
    url: "https://vacation-price-tracker.ethanasm.me",
    urlLabel: "vacation-price-tracker.ethanasm.me",
    repoUrl: "https://github.com/ethanasm/vacation-price-tracker",
  },
  {
    title: "Showbook",
    description:
      "Personal entertainment tracker for live shows — concerts, theatre, comedy, and festivals. Track your show history, discover upcoming events, and see your patterns.",
    tech: ["Next.js", "Expo", "Drizzle", "tRPC"],
    url: "https://showbook.ethanasm.me",
    urlLabel: "showbook.ethanasm.me",
    repoUrl: "https://github.com/ethanasm/showbook",
  },
  {
    title: "MCP Review",
    description:
      "AI-powered code review CLI for solo devs who push to main without PRs. Spawns 4 MCP tool servers over stdio (git diff, file context, convention scanner, related files) and lets the LLM drive its own context gathering. Reviews reference actual project patterns and lint configs, not generic advice.",
    tech: ["MCP", "TypeScript", "CLI"],
    url: "https://github.com/ethanasm/mcp-review",
    urlLabel: "github.com/ethanasm/mcp-review",
  },
  {
    title: "MCP Budget Governor",
    description:
      "Spend limits for MCP servers, counted in dollars rather than calls — per-user quotas, per-tool limits, and a global circuit breaker in atomic Redis counters that reset themselves at UTC midnight. Extracted from Vacation Price Tracker's rate limiter and shipped to PyPI and npm as two packages over one shared contract, so a Python worker and a Node server pointed at the same Redis enforce a single budget.",
    tech: ["MCP", "Python", "TypeScript", "Redis"],
    url: "https://github.com/ethanasm/mcp-budget-governor",
    urlLabel: "github.com/ethanasm/mcp-budget-governor",
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
          <p className="font-mono text-accent text-sm mb-10">{"// projects"}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 bg-surface border border-border hover:border-accent/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.08)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-accent text-lg transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">&#x2197;</span>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-gray-600 group-hover:text-gray-500 transition-colors">
                        {project.urlLabel}
                      </span>
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} source on GitHub`}
                          title="View source on GitHub"
                          className="relative z-10 text-gray-600 hover:text-accent transition-colors"
                        >
                          <svg
                            viewBox="0 0 16 16"
                            aria-hidden="true"
                            className="w-4 h-4 fill-current"
                          >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                          </svg>
                        </a>
                      )}
                    </div>
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

                {/* Stretched link: the card itself goes to the project.
                    Sits above the card content so the whole surface is
                    clickable; the GitHub link opts out with z-10. */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} — ${project.urlLabel}`}
                  className="absolute inset-0 rounded-lg"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
