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

// Ragged right: no mid-word breaks, and no stretched word spacing.
#set text(hyphenate: false)
#set par(justify: false)

= Experience

#resume-entry(
  title: "Senior Software Development Engineer",
  location: "San Francisco, CA",
  date: "Apr 2021 - Present",
  description: "Workday · Adaptive Planning → Agent Factory",
)

#resume-item[
  - *Promoted three times in five years*: Associate SDE → Senior Associate SDE → SDE → Senior SDE
]

#resume-item[
  - Drove *Decision Intelligence* from early access to GA-readiness: scenario write-back and merge, 28 accounts with usage
  - Integrated Adaptive Planning reports as connected assets, removing a manual export-and-upload step before analysis
  - Owned performance testing and end-to-end tracing across system logs and LangSmith for multi-step agent runs
]

#resume-item[
  - Shipped the *Planning Agent* to GA on Adaptive Planning (Mar 2026); 1,300+ customers with usage, 1,238 MAU (Aug 2026)
  - Built its data exploration, variance analysis, scenario planning, and help skills to a 95% eval-pass gate
  - Built an MCP client-server architecture (Python, Java) with progressive tool disclosure and subagents to cut context bloat
  - Designed the elicitation framework rendering planning widgets inline in chat, across GenAI, AppsAI, and architecture teams
]

#resume-item[
  - Earlier full-stack work: shipped a portable report viewer widget — 544 instances, 12,760+ reports in three months
  - Replaced a manual report workflow with a cron-based scheduler for snapshots and notifications, used across 6,500+ customers
]

= Projects

#resume-entry(
  title: "Vacation Price Tracker",
  location: [#link("https://github.com/ethanasm/vacation-price-tracker")[github.com/ethanasm/vacation-price-tracker]],
  date: "2026",
  description: "Python · TypeScript · Temporal · MCP",
)

#resume-item[
  - Full-stack flight and hotel price tracker: FastAPI backend, Next.js web and Expo mobile clients, Temporal daily price checks
  - LLM chat assistant searches flights and hotels via MCP tools, with flight search failing over across three providers
]

#resume-entry(
  title: "MCP Review",
  location: [#link("https://github.com/ethanasm/mcp-review")[github.com/ethanasm/mcp-review]],
  date: "2026",
  description: "TypeScript · MCP · CLI",
)

#resume-item[
  - AI code review CLI for solo devs pushing to main without PRs; 4 stdio MCP tool servers let the LLM gather its own context
]

#resume-entry(
  title: "Showbook",
  location: [#link("https://github.com/ethanasm/showbook")[github.com/ethanasm/showbook]],
  date: "2026",
  description: "TypeScript · Next.js · Expo · pg-boss",
)

#resume-item[
  - Predicts concert setlists from a setlist.fm corpus; a nightly back-test gates release on Brier score and calibration error
  - Tracks concerts, theatre, and festivals: Ticketmaster ingest, Gmail ticket scanning, venue follows, Spotify playlists, digests
]

= Open Source

#resume-entry(
  title: "Published Libraries",
  location: [#link("https://github.com/ethanasm")[github.com/ethanasm]],
  date: "2026",
  description: "Python · TypeScript · MCP",
)

#resume-item[
  - #link("https://github.com/ethanasm/provider-router")[provider-router] (PyPI + npm) — routes one capability across interchangeable providers with ordered failover on rate limits
  - #link("https://github.com/ethanasm/mcp-budget-governor")[mcp-budget-governor] (PyPI + npm) — per-user quotas, per-tool limits, and a global spend circuit breaker for MCP servers
  - #link("https://github.com/ethanasm/mcp-queue-doctor")[mcp-queue-doctor] (npm) — MCP server diagnosing Postgres job queues: retry storms, stuck workers, evidence-backed recovery
  - Design write-ups on the work above — tradeoffs and failure modes: #link("https://ethanasm.github.io/garden/")[ethanasm.github.io/garden]
]

= Education

#resume-entry(
  title: "University of Southern California",
  location: "Los Angeles, CA",
  date: "Aug 2017 - Dec 2020",
  description: "B.S. in Computer Science and Business Administration",
)

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