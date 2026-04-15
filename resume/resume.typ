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
  - Developed AI-powered Planning Agent skills for enterprise financial planning including data exploration, variance analysis, scenario planning, and contextual help — deployed to 1,708 customers across 2,510+ sandbox instances
  - Built multi-turn evaluation framework testing agent responses across conversation flows dependent on memory and context
  - Designed and implemented MCP client-server architecture with Python client and Java server, featuring progressive tool disclosure and subagent architecture to reduce context bloat in agent interactions
  - Built end-to-end elicitation framework enabling planning widgets to render inline within the chat application, bridging structured UI interactions with conversational AI workflows
  - Architected portable report viewer as an embeddable widget for hub dashboards, driving 544 instances and 12,760+ reports added in the first three months
  - Built cron-based report scheduling system that automated snapshot generation and user notification, eliminating a manual workflow across 6,500+ enterprise customers
]

#resume-entry(
  title: "Software Engineering Intern",
  location: "San Jose, CA",
  date: "May 2020 - Aug 2020",
  description: "Xactly",
)

#resume-item[
  - Built a backend Java application automating SOC 2 audit evidence retrieval via OAuth 2.0 and async API integrations with Jira, Azure DevOps, Workday, and Salesforce
  - Developed a JSON-to-PDF conversion tool enabling external auditors to consume API outputs in a structured, readable format
]

= Projects

#resume-entry(
  title: "Vacation Price Tracker",
  location: [#link("https://github.com/ethanasm/vacation-price-tracker")[github.com/ethanasm/vacation-price-tracker]],
  date: "2026",
  description: "Python · MCP · React",
)

#resume-item[
  - Built a multi-user vacation price tracking application monitoring flights and hotels across date ranges with automated daily price checks and historical trend analysis
  - Integrated custom MCP server with flight/hotel search tools and third-party APIs for real-time price data collection
]

#resume-entry(
  title: "MCP Review",
  location: [#link("https://github.com/ethanasm/mcp-review")[github.com/ethanasm/mcp-review]],
  date: "2026",
  description: "TypeScript · MCP · CLI",
)

#resume-item[
  - Developed a CLI tool providing AI-powered code review at the commit level, working directly with local git history without requiring pull requests
  - Architected MCP host that orchestrates tools to gather project context including file structure, dependencies, and patterns, enabling specific, pattern-aware feedback
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