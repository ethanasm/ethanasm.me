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

= Experience

#resume-entry(
  title: "Software Development Engineer",
  location: "San Francisco, CA",
  date: "Apr 2021 - Present",
  description: "Workday · Adaptive Planning",
)

#resume-item[
  - Promoted twice in five years: Associate SDE → Senior Associate SDE → Software Development Engineer
  - Built the Planning Agent's data exploration, variance analysis, scenario planning, and help skills for enterprise financial planning, now deployed to 1,708 customers across 2,510+ sandbox instances
  - Wrote a multi-turn eval framework that tests agent conversations end-to-end, including memory and context across turns
  - Designed an MCP client-server architecture (Python client, Java server) with progressive tool disclosure and subagents to keep context usage under control
  - Built the elicitation framework that renders planning widgets inline in the chat app, bridging structured UI interactions with conversational AI workflows
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
  - Automated SOC 2 audit evidence collection with a Java app using OAuth 2.0 and async API calls to Jira, Azure DevOps, Workday, and Salesforce
  - Built a JSON-to-PDF converter so external auditors could read the API output in a structured format
]

= Projects

#resume-entry(
  title: "Vacation Price Tracker",
  location: [#link("https://github.com/ethanasm/vacation-price-tracker")[github.com/ethanasm/vacation-price-tracker]],
  date: "2026",
  description: "Python · MCP · React",
)

#resume-item[
  - Tracks flight and hotel prices across date ranges for multiple users, with automated daily checks and historical trend data
  - Custom MCP server handles flight/hotel search via third-party APIs for real-time price collection
]

#resume-entry(
  title: "MCP Review",
  location: [#link("https://github.com/ethanasm/mcp-review")[github.com/ethanasm/mcp-review]],
  date: "2026",
  description: "TypeScript · MCP · CLI",
)

#resume-item[
  - CLI tool for AI-powered code review at the commit level — works with local git history, no PRs needed
  - Runs as an MCP host that pulls in project context (file structure, deps, patterns) for targeted, pattern-aware feedback
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
    strong("LangGraph"),
    "LangSmith",
    "Anthropic API",
    "OpenRouter",
    "RAG",
  ),
)
#resume-skill-item(
  "Languages",
  (
    strong("Python"),
    strong("Java"),
    "TypeScript",
    "C#",
    "SQL",
  ),
)
#resume-skill-item(
  "Frontend",
  (
    strong("React"),
    "Next.js",
    "Angular",
  ),
)
#resume-skill-item(
  "Protocols & Infra",
  (
    strong("MCP"),
    "REST",
    "Git",
    "Docker",
    "Kubernetes",
  ),
)
#resume-skill-item(
  "Backend & Cloud",
  (
    "Spring Boot",
    "FastAPI",
    "PostgreSQL",
    "Oracle Database",
    "Redis",
    "GitHub Actions",
  ),
)