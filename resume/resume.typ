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
  date: "2026 - Present",
  description: "Workday · Agent Factory",
)

#resume-item[
  - Shipped *Decision Intelligence*, Workday's new AI product line, to GA
  - Built its Adaptive Planning skills: hypercube data queries for reads, write-backs to planning sheets for writes
  - Connected Adaptive Planning reports directly into the product, so users no longer export and re-upload files to analyze them
  - Owned performance testing and end-to-end tracing across system logs and LangSmith for multi-step agent runs
]

#resume-entry(
  title: "Software Development Engineer",
  location: "San Francisco, CA",
  date: "Apr 2021 - 2026",
  description: "Workday · Adaptive Planning",
)

#resume-item[
  - *Promoted three times*: Associate SDE → Senior Associate SDE → SDE → Senior SDE
  - Shipped the *Planning Agent* to GA (Mar 2026); 1,300+ customer accounts with recorded usage as of Aug 2026
  - Developed its data exploration, variance analysis, scenario planning, and contextual help skills, each gated at 95% eval pass
  - Built an MCP client-server architecture (Python, Java) with progressive tool disclosure and subagents to cut context bloat
  - Designed the elicitation framework that renders planning widgets inline in chat, across GenAI, AppsAI, and architecture teams
  - Shipped a portable report viewer widget (544 instances, 12,760+ reports in three months)
  - Replaced a manual report workflow with a cron-based scheduler for snapshots and notifications, adopted by 6,500+ customers
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
  - #link("https://github.com/ethanasm/provider-router")[provider-router] (PyPI + npm): routes one capability across interchangeable providers with ordered failover on rate limits
  - #link("https://github.com/ethanasm/mcp-budget-governor")[mcp-budget-governor] (PyPI + npm): per-user quotas, per-tool limits, and a global spend circuit breaker for MCP servers
  - #link("https://github.com/ethanasm/mcp-queue-doctor")[mcp-queue-doctor] (npm): MCP server diagnosing Postgres job queues: retry storms, stuck workers, evidence-backed recovery
  - Design write-ups on tradeoffs and failure modes in the work above: #link("https://ethanasm.github.io/garden/")[ethanasm.github.io/garden]
]

= Education

#resume-entry(
  title: "University of Southern California",
  location: "Los Angeles, CA",
  date: "Aug 2017 - Dec 2020",
  description: "B.S. in Computer Science and Business Administration",
)

// Education has no #resume-item, so it never gets that block trailing
// space; restore the gap the other section headings have.
#v(5.4pt)

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
    strong("PostgreSQL"),
    "Redis",
    "Docker",
    "GitHub Actions",
  ),
)