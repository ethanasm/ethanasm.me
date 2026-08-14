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
  logo?: string;
  description?: string;
  subRoles?: SubRole[];
}

const jobs: Job[] = [
  {
    title: "Senior Software Development Engineer",
    company: "Workday · Decision Intelligence",
    period: "2021 — present",
    active: true,
    logo: "W",
    subRoles: [
      {
        title: "AI Platform Engineering — Decision Intelligence",
        description:
          "Working on Workday Decision Intelligence, an AI-native platform where finance teams ask questions, model scenarios, and commit decisions across governed data sources — Adaptive Planning, Prism, Snowflake, and uploaded spreadsheets. Drove it from early access (Apr 2026) toward GA-readiness, building the scenario write-back and scenario-merge pieces of the Adaptive Planning integration; 28 customer accounts have recorded usage so far, most still on implementation tenants. Own performance testing and end-to-end tracing across services and LangSmith.",
      },
      {
        title: "AI Platform Engineering — Planning Agent",
        description:
          "Built the Planning Agent for Adaptive Planning, which gave financial planners tools for data exploration, variance analysis, scenario planning, and contextual help — each held to a 95% eval-pass gate before release. It shipped to GA in Mar 2026 and now has 1,300+ customers with recorded usage and 1,238 monthly active users (Aug 2026). Designed the MCP client-server architecture, using progressive tool disclosure and subagents to cut context bloat, and built the elicitation framework that rendered planning widgets inline within chat.",
      },
      {
        title: "Full-Stack Engineering",
        description:
          "Built a portable report viewer that ships as a widget across multiple applications — 544 instances and 12,760+ reports added in its first three months. Also replaced a manual report workflow with a cron-based scheduler for snapshot generation and notifications, used across 6,500+ enterprise customers, and migrated legacy Tapestry/JS pages to React with REST API backends.",
      },
    ],
  },
  {
    title: "Software Engineering Intern",
    company: "Xactly",
    period: "2020",
    active: false,
    logo: "X",
    description:
      "Automated SOC 2 audit evidence collection across Jira, Azure DevOps, Workday, and Salesforce.",
  },
  {
    title: "Product Marketing Intern",
    company: "Teradata",
    period: "2019",
    active: false,
    logo: "TD",
    description:
      "Product marketing for enterprise data analytics and cloud data warehousing.",
  },
  {
    title: "Data Engineering Intern",
    company: "Warner Bros. Digital Networks",
    period: "2018",
    active: false,
    logo: "WB",
    description:
      "Data engineering for Warner Bros.' direct-to-consumer digital platforms.",
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
          <p className="font-mono text-accent text-sm mb-10">{"// experience"}</p>

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

                <div className="flex items-start gap-4">
                  {/* Company logo */}
                  {job.logo && (
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
                        job.active
                          ? "bg-accent/10 text-accent border border-accent/20"
                          : "bg-surface text-gray-500 border border-border"
                      }`}
                    >
                      {job.logo}
                    </div>
                  )}

                  <div className="flex-1">
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

                    {job.description && (
                      <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                        {job.description}
                      </p>
                    )}

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
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
