"use client";

import { motion } from "framer-motion";

interface SubRole {
  title: string;
  description: string;
}

interface Job {
  title: string;
  company: string;
  period: string;
  active: boolean;
  subRoles?: SubRole[];
}

const jobs: Job[] = [
  {
    title: "Software Development Engineer",
    company: "Workday · Adaptive Planning",
    period: "2021 — present",
    active: true,
    subRoles: [
      {
        title: "AI Platform Engineering — Planning Agent",
        description:
          "Building the AI-powered Planning Agent for Adaptive Planning — an intelligent assistant that helps financial planners with data exploration, variance analysis, scenario planning, and contextual help. Designed the MCP client-server architecture and built an elicitation framework for rendering planning widgets inline within chat.",
      },
      {
        title: "Full-Stack Engineering",
        description:
          "Architected a portable report viewer consumed across multiple applications, built a cron-based report scheduling system, and modernized legacy pages by migrating from Tapestry/JS to React + REST APIs.",
      },
    ],
  },
  {
    title: "Contract Software Engineer",
    company: "Unreal Digital Group",
    period: "2020 — 2021",
    active: false,
  },
  {
    title: "Software Engineering Intern",
    company: "Xactly",
    period: "2020",
    active: false,
  },
  {
    title: "Product Marketing Intern",
    company: "Teradata",
    period: "2019",
    active: false,
  },
  {
    title: "Data Engineering Intern",
    company: "Warner Bros. Digital Networks",
    period: "2018",
    active: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-accent text-sm mb-10">// experience</p>

          <div className="space-y-0">
            {jobs.map((job, i) => (
              <div
                key={i}
                className={`relative pl-6 pb-8 border-l-2 ${
                  job.active ? "border-accent/40" : "border-border"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${
                    job.active ? "bg-accent" : "bg-gray-600"
                  }`}
                />

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <h3
                    className={`font-semibold ${
                      job.active ? "text-white text-lg" : "text-gray-400"
                    }`}
                  >
                    {job.title}
                  </h3>
                  <span className="font-mono text-xs text-gray-600 flex-shrink-0">
                    {job.period}
                  </span>
                </div>

                <p
                  className={`text-sm mt-1 ${
                    job.active ? "text-accent" : "text-gray-600"
                  }`}
                >
                  {job.company}
                </p>

                {job.subRoles && (
                  <div className="mt-4 pl-4 border-l border-border space-y-3">
                    {job.subRoles.map((role, j) => (
                      <div key={j}>
                        <p className="text-sm font-medium text-gray-300">
                          {role.title}
                        </p>
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                          {role.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
