#import "@preview/modern-cv:0.9.0": *

#show: resume.with(
  author: (
    firstname: "Ethan",
    lastname: "Smith",
    email: "ethan7ce@gmail.com",
    phone: "(925) 699-8460",
    github: "ethanasm",
    linkedin: "ethan-a-smith",
    homepage: "https://ethanasm.me",
    address: "San Francisco, CA",
    positions: (
      "Software Engineer",
      "AI Platform Engineering",
    ),
  ),
  profile-picture: none,
  date: datetime.today().display(),
  language: "en",
  colored-headers: true,
  show-footer: false,
  paper-size: "us-letter",
)

// Wrap at word boundaries only — never split a word across lines.
#set text(hyphenate: false)

= Experience

#resume-entry(
  title: "Senior Software Development Engineer",
  location: "San Francisco, CA",
  date: "Apr 2021 - Present",
  description: "Workday · Decision Intelligence",
)

#resume-item[
  - Promoted three times in five years: Associate SDE → Senior Associate SDE → SDE → Senior SDE
  - Contributed to Workday Decision Intelligence's Adaptive Planning integration (GA July 2026) — scenario write-back and merging scenarios into base versions — and oversaw performance testing and end-to-end tracing across system logs and LangSmith
  - Developed the Planning Agent's data exploration, variance analysis, scenario planning, and contextual help skills
  - Built an MCP client-server architecture (Python client, Java server) with progressive tool disclosure and subagents to reduce context bloat in agent interactions
  - Designed and implemented the elicitation framework that renders planning widgets inline in the chat app by refactoring and reusing existing UI components, driving cross-team collaboration between GenAI, AppsAI, and architecture teams
  - Shipped a portable report viewer widget for planning dashboards and hubs pages, giving users a consistent reporting experience without leaving their workflow — 544 instances and 12,760+ reports added in the first three months
  - Replaced a manual report workflow with a cron-based scheduler for snapshot generation and notifications, used across 6,500+ enterprise customers
]

#resume-entry(
  title: "Software Engineering Intern",
  location: "San Jose, CA",
  date: "May 2020 - Aug 2020",
  description: "Xactly",
)

#resume-item[
  - Built a Java service automating SOC 2 audit evidence collection via OAuth 2.0-authenticated integrations with Jira, Azure DevOps, Workday, and Salesforce
  - Designed a reporting pipeline rendering the collected evidence into audit-ready PDF packages for external auditors
]

= Projects

#resume-entry(
  title: "Vacation Price Tracker",
  location: [#link("https://github.com/ethanasm/vacation-price-tracker")[github.com/ethanasm/vacation-price-tracker]],
  date: "2026",
  description: "Python · TypeScript · Temporal · MCP",
)

#resume-item[
  - Full-stack flight and hotel price tracker: FastAPI backend, Next.js web and Expo mobile clients, and Temporal workflows for automated daily price checks, trend history, and threshold alerts
  - LLM chat assistant searches flights and hotels via MCP tools; flight search fails over across three providers using #link("https://github.com/ethanasm/provider-router")[provider-router], a zero-dependency routing library I published to PyPI and npm
]

#resume-entry(
  title: "MCP Review",
  location: [#link("https://github.com/ethanasm/mcp-review")[github.com/ethanasm/mcp-review]],
  date: "2026",
  description: "TypeScript · MCP · CLI",
)

#resume-item[
  - AI-powered code review CLI built for solo devs who push to main without PRs, reviewing against local git history
  - MCP host spawning 4 stdio tool servers (git diff, file context, conventions, related files); the LLM drives its own context gathering
  - Reviews cite actual project patterns and lint configs, not generic advice — the model sees the whole codebase, not just the diff
]

= Education

#resume-entry(
  title: "University of Southern California",
  location: "Los Angeles, CA",
  date: "Aug 2017 - Dec 2020",
  description: "B.S. in Computer Science and Business Administration",
)

#resume-item[
  - Cum Laude, GPA: 3.69/4.00
]

= Skills

#resume-skill-item(
  "AI/LLM",
  (
    strong("MCP"),
    "Agent architectures",
    "LangGraph",
    "Anthropic API",
    "LangSmith",
    "Langfuse",
    "LLM evals",
  ),
)
#resume-skill-item(
  "Languages",
  (
    strong("Java"),
    strong("TypeScript"),
    "Python",
    "SQL",
  ),
)
#resume-skill-item(
  "Frontend & Mobile",
  (
    strong("React"),
    "Next.js",
    "React Native / Expo",
    "Playwright",
  ),
)
#resume-skill-item(
  "Backend & Infra",
  (
    "FastAPI",
    "Temporal",
    "PostgreSQL",
    "Redis",
    "Docker",
    "GitHub Actions",
  ),
)