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
    title: "Project One",
    description:
      "Placeholder — replace with your first featured project. Describe what it does and why it matters.",
    tech: ["React", "TypeScript"],
    url: "https://github.com/ethanasm",
    urlLabel: "github.com/ethanasm/...",
  },
  {
    title: "Project Two",
    description:
      "Placeholder — replace with your second featured project. Could link to a live demo at ethanasm.me/project-name.",
    tech: ["Python", "MCP"],
    url: "https://github.com/ethanasm",
    urlLabel: "ethanasm.me/project2",
  },
  {
    title: "Project Three",
    description:
      "Placeholder — replace with another project. Each card links to either GitHub or a sub-site.",
    tech: ["Java", "Spring"],
    url: "https://github.com/ethanasm",
    urlLabel: "github.com/ethanasm/...",
  },
  {
    title: "Project Four",
    description:
      "Placeholder — replace with a fourth project if desired, or remove this card.",
    tech: ["Angular", "C#"],
    url: "https://github.com/ethanasm",
    urlLabel: "github.com/ethanasm/...",
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
                className="group block bg-surface border border-border rounded-lg p-6 hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent text-lg">&#x2197;</span>
                  <span className="font-mono text-xs text-gray-600">
                    {project.urlLabel}
                  </span>
                </div>

                <h3 className="text-white font-bold">{project.title}</h3>

                <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-2 mt-4">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="font-mono text-xs text-gray-500"
                    >
                      {j > 0 && <span className="text-gray-700 mr-2">·</span>}
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
